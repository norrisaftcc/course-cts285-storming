#!/usr/bin/env node
// records-guard — the mechanical half of semantics-preserved-abstract.
//
// ADR-008's test: bind by mechanism where it can refuse, keep prose where it
// cannot. The skill file teaches the craft; this refuses the part a machine can
// actually decide.
//
// By default it refuses on what a change adds or removes, and never on the
// existing tree. That is not a shortcut, it is the same doctrine the ledger runs
// on: the past is a record, not a defect list. A guard that failed on history
// every run would be doing exactly what the 2026-07-29 audit did when it read
// dated records as live status.
//
// --mark surveys the standing tree instead and reports proposals. It cannot
// fail, because the append-only rule blocks the fix but never the mark.
//
// This runs by hand, not in CI. No workflow wires it to pull requests, so it
// binds only the person who remembers to run it. Stated here rather than
// implied: ADR-008's test is whether a rule can be made to refuse, and this
// refuses when invoked — nothing invokes it.
//
// Usage:  node .claude/tools/records-guard.mjs [base-ref]   refuse forward (default origin/main)
//         node .claude/tools/records-guard.mjs --mark       report backward, always exit 0
// Exit:   0 clean · 1 violations found · 2 could not run

import { execFileSync } from 'node:child_process'

// Two postures, one per time direction.
//
//   default  — REFUSE forward. What this change adds or removes must be clean.
//   --mark   — REPORT backward. What already stands is surveyed and never failed.
//
// The asymmetry is the doctrine, not a limitation. Refusing on existing content
// would turn the guard into a drift audit pointed at history, which is the exact
// mistake of 2026-07-29: records read as status and 20 findings refuted for it.
// But the append-only rule blocks the fix, never the mark — so backward findings
// are surfaced as proposals a human can act on when it becomes legitimate.
const MARK_MODE = process.argv.includes('--mark')
const BASE = process.argv.filter((a) => !a.startsWith('--'))[2] || 'origin/main'

// A fabricated specimen must say so. Any line carrying this marker is exempt
// from the handle check, which is what lets a teaching file show a "before".
const SPECIMEN_MARKER = 'EXAMPLE'

// There is deliberately no path allowlist here.
//
// Review suggested exempting `.claude/skills/` wholesale so teaching files are
// never flagged. Declined: two mechanisms already cover it more precisely, and a
// directory-wide exemption would wave through a future skill doc carrying a real
// handle — the one file where an unreduced handle is most likely to be copied
// from.
//
//   1. Both scans are restricted to *.md, so this script can never scan itself.
//   2. A specimen marked EXAMPLE is exempt line-by-line, so a teaching file shows
//      its "before" without the whole file going unchecked.
//
// The earlier allowlist was also mostly unreachable: it named a .mjs path that
// neither scan could reach, and a SKILL.md whose only specimen was already
// EXAMPLE-marked. Shrinking it removes dead code rather than loosening a check.

// A session URL in the ledger's link column is a citation and stays. A bare
// handle in prose is the thing that reads as a live grant.
const BARE_HANDLE = /(?<!claude\.ai\/code\/)\bsession_[A-Za-z0-9]{16,}/g

const APPEND_ONLY = ['planning/SESSIONS.md']
const ACK = 'LEDGER-REWRITE-ACK:'

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 })
}

// --- collect added lines, per file, with real line numbers -----------------
function addedLines(base) {
  const diff = git(['diff', '--unified=0', `${base}...HEAD`, '--', '*.md'])
  const out = []
  let file = null
  let lineNo = 0
  for (const raw of diff.split('\n')) {
    if (raw.startsWith('+++ b/')) { file = raw.slice(6); continue }
    const hunk = raw.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/)
    if (hunk) { lineNo = parseInt(hunk[1], 10); continue }
    if (raw.startsWith('+') && !raw.startsWith('+++')) {
      if (file) out.push({ file, line: lineNo, text: raw.slice(1) })
      lineNo++
    }
  }
  return out
}

// --- backward survey: what already stands, as proposals ---------------------
// Never fails. Emits the reduced form each finding is owed, plus the condition
// that would make applying it legitimate — per the skill's proposal template.
function markMode() {
  const files = git(['ls-files', '*.md']).split('\n').filter(Boolean)
  const proposals = []
  for (const file of files) {
    // sources/ and alignment_ingestion/ are frozen evidence. Their exact wording
    // is the record; proposing an abstract over them is a category error.
    if (file.startsWith('sources/') || file.startsWith('alignment_ingestion/')) continue
    const lines = git(['show', `HEAD:${file}`]).split('\n')
    lines.forEach((text, i) => {
      if (text.includes(SPECIMEN_MARKER)) return
      for (const m of text.matchAll(BARE_HANDLE)) {
        proposals.push({ file, line: i + 1, handle: m[0] })
      }
    })
  }
  if (!proposals.length) {
    console.log('records-guard --mark: no backward findings in the tracked tree')
    return 0
  }
  console.log(`records-guard --mark: ${proposals.length} backward finding(s) — proposals only, nothing applied\n`)
  for (const p of proposals) {
    const tail = p.handle.slice(-4)
    console.log(`Proposed abstract — ${p.file}:${p.line} (not applied)`)
    // Carried is deliberately left blank. This tool can derive the symbolism —
    // which handle, reduced to what — but not the conclusion a reader must still
    // reach from that line. Filling it with a plausible sentence would be the
    // guard asserting something it never established, which is the defect it
    // exists to catch. The machine proposes the symbol; the meaning stays human.
    console.log(`Carried:    [fill in — the conclusion this line's reader must still reach]`)
    console.log(`Reduced:    \`${p.handle}\` → \`…${tail}\`, status glyphed`)
    console.log(`Standing:   the line itself — an existing record, not this change's to rewrite`)
    console.log(`Apply when: the token passes, the block is superseded, or a human authorises the edit\n`)
  }
  console.log('Regenerate this list; never check it in. The tree is the index (non-negotiable #6).')
  return 0
}

const findings = []
const add = (f) => findings.push(f)

if (MARK_MODE) process.exit(markMode())

let added
try {
  added = addedLines(BASE)
} catch (err) {
  console.error(`records-guard: cannot diff against ${BASE} — ${err.message}`)
  console.error('Fetch the base ref first, or pass one that exists.')
  process.exit(2)
}

// --- check 1: a bare handle that a later reader could act on ---------------
for (const l of added) {
  if (l.text.includes(SPECIMEN_MARKER)) continue
  for (const m of l.text.matchAll(BARE_HANDLE)) {
    add({
      file: l.file, line: l.line, rule: 'bare-handle',
      detail: `\`${m[0].slice(0, 20)}…\` written out in full`,
      fix: 'Reduce it to a tail (`…QzTk`) and glyph the status, or mark a fabricated specimen with EXAMPLE.',
    })
  }
}

// --- check 2: the append-only rule, enforced rather than trusted -----------
// Rewriting a landed row destroys the interval between a mistake and its catch,
// which is the thing the ledger exists to make visible. Deliberate rewrites are
// legitimate — this makes them say so, in history, where the next reader sees it.
let ackd = false
try {
  ackd = git(['log', `${BASE}..HEAD`, '--format=%B']).includes(ACK)
} catch { /* no commits in range; leave false */ }

for (const path of APPEND_ONLY) {
  let deletions = 0
  try {
    const stat = git(['diff', '--numstat', `${BASE}...HEAD`, '--', path]).trim()
    if (stat) deletions = parseInt(stat.split('\t')[1], 10) || 0
  } catch { continue }
  if (deletions > 0 && !ackd) {
    add({
      file: path, line: 0, rule: 'append-only',
      detail: `${deletions} line(s) removed from an append-only record`,
      fix: `Append a correction row instead. If the rewrite is deliberate — your own unmerged row, a stale path — put "${ACK} <reason>" in a commit message so the next reader sees the decision.`,
    })
  }
}

// --- report ----------------------------------------------------------------
if (!findings.length) {
  console.log(`records-guard: clean — ${added.length} added line(s) checked against ${BASE}`)
  process.exit(0)
}

console.error(`records-guard: REFUSED — ${findings.length} finding(s) against ${BASE}\n`)
for (const f of findings) {
  const where = f.line ? `${f.file}:${f.line}` : f.file
  console.error(`  [${f.rule}] ${where}`)
  console.error(`      ${f.detail}`)
  console.error(`      fix: ${f.fix}\n`)
}
console.error('These are the checks a machine can decide. The judgment calls —')
console.error('whether meaning survived, whether a record still reads as live —')
console.error('stay in the semantics-preserved-abstract skill under .claude/skills/.')
process.exit(1)
