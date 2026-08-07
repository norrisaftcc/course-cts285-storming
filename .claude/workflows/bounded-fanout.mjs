export const meta = {
  name: 'bounded-fanout',
  description: 'Fan out over artifacts under a hard agent cap, with refusal at N+1 and unconditional dispatched-vs-returned reconciliation',
  whenToUse:
    'Any per-file wave in this repo: worklist application, naming sweeps, points normalization, per-document audits. Pass artifacts (one entry per file or file group), optionally an audit stage and a scribe stage. Enforces CLAUDE_SUPPLEMENTARY.md Rule 1a mechanically — see phase0/ADR-008.',
  phases: [
    { title: 'Fan out', detail: 'one agent per artifact, disjoint file ownership' },
    { title: 'Audit', detail: 'optional single verifier over the combined result' },
    { title: 'Record', detail: 'optional single scribe' },
  ],
}

// ---------------------------------------------------------------------------
// Rule 1a, as executing code rather than as advice. See phase0/ADR-008.
//
//   - The cap REFUSES. It does not warn and proceed.
//   - Fan-out is per artifact BY CONSTRUCTION. There is no argument shape that
//     means "one agent per finding", so the 76-agent failure cannot be expressed.
//   - Reconciliation is UNCONDITIONAL, including on runs that succeed. No code
//     path filters a dead agent away.
//
// An agent that never read Rule 1a still cannot exceed the cap through here.
// ---------------------------------------------------------------------------

// `args` normally arrives as an object, but some call paths deliver it as a
// JSON string. Left unhandled that produced a confusing failure: `a.artifacts`
// came back undefined and the workflow refused with "no artifacts given" while
// the caller was staring at a perfectly good artifact list.
//
// Parsing here rather than trusting the caller keeps the refusal honest — it
// should fire when the PLAN is wrong, not when the transport reshaped it.
// A string that will not parse still falls through to the same refusal.
const a = (() => {
  if (typeof args === 'string') {
    try { return JSON.parse(args) } catch { return {} }
  }
  return args || {}
})()

// Rule 1a's cap is doctrine, not a parameter.
//
// It lives here as a constant because a limit the caller supplies is not a
// limit. `args.cap` may only LOWER it, for a wave you want tighter than
// doctrine allows; a higher value is ignored and logged, never honoured.
// Raising the real cap means editing this line under the Trusted Workflow,
// reviewed like any other change — which is the point.
const RULE_1A_CAP = 7
const requestedCap = typeof a.cap === 'number' ? a.cap : RULE_1A_CAP
const CAP = Math.min(requestedCap, RULE_1A_CAP)
const artifacts = Array.isArray(a.artifacts) ? a.artifacts : []
const hasAudit = Boolean(a.audit && a.audit.prompt)
const hasScribe = Boolean(a.scribe && a.scribe.prompt)

function refuse(reason, detail) {
  log(`REFUSED — ${reason}`)
  log(JSON.stringify(detail))
  return { refused: true, reason, ...detail }
}

if (!artifacts.length) {
  return refuse('no artifacts given', {
    hint: 'args.artifacts must be a non-empty array of {label, files, prompt}. The unit of parallelism is a file or document, never a finding.',
  })
}

// --- Guard 1: the arithmetic, stated before launch and enforced ------------
const planned = artifacts.length + (hasAudit ? 1 : 0) + (hasScribe ? 1 : 0)
const arithmetic = `${artifacts.length} artifact agents + ${hasAudit ? 1 : 0} audit + ${hasScribe ? 1 : 0} scribe = ${planned} (cap ${CAP})`
log(`Rule 1a count: ${arithmetic}`)

// Never clamp silently. A caller who tried to raise the cap learns that it did
// not work, here and in the returned value.
if (requestedCap > RULE_1A_CAP) {
  log(`args.cap of ${requestedCap} IGNORED — Rule 1a caps at ${RULE_1A_CAP}. Running against ${CAP}.`)
  log('args.cap can only lower the cap. Raising it is an edit to this file, under review.')
}

if (planned > CAP) {
  return refuse(`plan of ${planned} exceeds cap ${CAP}`, {
    arithmetic,
    at: CAP + 1,
    doctrine_cap: RULE_1A_CAP,
    cap_raise_attempted: requestedCap > RULE_1A_CAP ? requestedCap : null,
    remedy:
      'This is more than one wave. Split the artifact list, run the waves in sequence, and read the results between rounds. Raising args.cap will not help — it can only lower.',
  })
}

// --- Guard 2: disjoint ownership (Rule 1 — no two agents in one file) ------
const owner = {}
const collisions = []
for (const art of artifacts) {
  for (const f of art.files || []) {
    if (owner[f]) collisions.push({ file: f, claimed_by: [owner[f], art.label] })
    else owner[f] = art.label
  }
}
if (collisions.length) {
  return refuse('two agents claim the same file in one wave', {
    collisions,
    remedy: 'One file, one owner, per wave. Merge the colliding artifacts into a single agent or split them across waves.',
  })
}

log(`Ownership check: ${Object.keys(owner).length} files, ${artifacts.length} owners, no collisions.`)

// --- Fan out ---------------------------------------------------------------
phase('Fan out')

const results = await parallel(
  artifacts.map((art) => () =>
    agent(art.prompt, {
      label: art.label,
      phase: 'Fan out',
      model: art.model || a.model,
      agentType: art.agentType || a.agentType,
      schema: a.schema,
    })
  )
)

// --- Reconciliation: unconditional, including on success -------------------
const dispatched = artifacts.length
const returned = results.filter(Boolean).length
const dead = artifacts
  .map((art, i) => (results[i] ? null : { label: art.label, files: art.files || [] }))
  .filter(Boolean)

log(`Wave: dispatched ${dispatched}, returned ${returned}, dead ${dead.length}`)
if (dead.length) {
  // Never filtered away. The unreached files are named so the next wave can pick them up.
  log(`DEAD AGENTS — work NOT done, files NOT discarded: ${JSON.stringify(dead)}`)
  log('Reassign these in a later wave. Do not report this run as complete.')
}

const reconciliation = {
  cap: CAP,
  doctrine_cap: RULE_1A_CAP,
  cap_raise_attempted: requestedCap > RULE_1A_CAP ? requestedCap : null,
  arithmetic,
  dispatched,
  returned,
  dead,
  complete: dead.length === 0,
}

// --- Optional audit --------------------------------------------------------
let audit = null
if (hasAudit) {
  phase('Audit')
  audit = await agent(
    `${a.audit.prompt}

Reconciliation for the wave you are auditing, which you must carry into your report:
- dispatched: ${dispatched}
- returned: ${returned}
- died before returning (their work was NOT done): ${JSON.stringify(dead)}

Re-derive any count you report from primary evidence. Do not accept the wave's
self-reported numbers as your own finding.`,
    {
      label: a.audit.label || 'audit',
      phase: 'Audit',
      model: a.audit.model,
      agentType: a.audit.agentType || 'adversarial-verifier',
      schema: a.audit.schema,
    }
  )
  if (!audit) log("Audit agent died. The wave is unaudited — say so rather than reporting the applicators' numbers as verified.")
}

// --- Optional scribe -------------------------------------------------------
let scribe = null
if (hasScribe) {
  phase('Record')
  scribe = await agent(
    `${a.scribe.prompt}

Record the REAL outcome, not the target:
- dispatched ${dispatched}, returned ${returned}, died ${dead.length}
- unreached work: ${JSON.stringify(dead)}
- audit: ${audit ? 'ran' : hasAudit ? 'DIED — wave is unaudited' : 'not requested'}

If two sources disagree on a count, record the disagreement. Do not average them
and do not pick the higher one.`,
    { label: a.scribe.label || 'scribe', phase: 'Record', model: a.scribe.model, schema: a.scribe.schema }
  )
}

return {
  reconciliation,
  results: results.map((r, i) => ({ label: artifacts[i].label, returned: Boolean(r), result: r })),
  audit,
  scribe,
}
