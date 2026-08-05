#!/usr/bin/env node
// records-guard — the mechanical half of semantics-preserved-abstract.
//
// ADR-008's test: bind by mechanism where it can refuse, keep prose where it
// cannot. The skill file teaches the craft; this refuses the part a machine can
// actually decide.
//
// It polices ONLY what a change adds or removes — never the existing tree. That
// is not a shortcut, it is the same doctrine the ledger runs on: the past is a
// record, not a defect list. A guard that re-litigated history every run would
// be doing exactly what the 2026-07-29 audit did when it read dated records as
// live status.
//
// Usage:  node .claude/tools/records-guard.mjs [base-ref]      (default origin/main)
// Exit:   0 clean · 1 violations found · 2 could not run

import { execFileSync } from 'node:child_process'

const BASE = process.argv[2] || 'origin/main'

// A fabricated specimen must say so. Any line carrying this marker is exempt
// from the handle check, which is what lets a teaching file show a "before".
const SPECIMEN_MARKER = 'EXAMPLE'

// The guard's own source and the skill that documents it both have to spell the
// patterns out. Scanning them would flag the definition as the offence.
const SELF = ['.claude/tools/records-guard.mjs', '.claude/skills/semantics-preserved-abstract/SKILL.md']

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
      if (file && !SELF.includes(file)) out.push({ file, line: lineNo, text: raw.slice(1) })
      lineNo++
    }
  }
  return out
}

const findings = []
const add = (f) => findings.push(f)

let added
try {
  added = addedLines(BASE)
} catch (err) {
  console.error(`records-guard: cannot diff against ${BASE} — ${err.message}`)
  console.error('Fetch the base ref first, or pass one that exists.')
  process.exit(2)
}

// --- check 1: a bare handle that a later reader could act on ---------------
// A session URL in the ledger's link column is a citation and stays. A bare
// handle in prose is the thing that reads as a live grant.
const BARE_HANDLE = /(?<!claude\.ai\/code\/)\bsession_[A-Za-z0-9]{16,}/g
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

// --- check 2: a count nobody can reproduce ---------------------------------
// "17 in the tree" was measured over drafts/ and returns 34 repo-wide. A count
// without its scope is a claim a reader cannot check, which is how docs drift.
const UNSCOPED_COUNT = /\b\d+\s+in the tree\b/i
for (const l of added) {
  if (UNSCOPED_COUNT.test(l.text)) {
    add({
      file: l.file, line: l.line, rule: 'unscoped-count',
      detail: '"N in the tree" — no path, so the number cannot be reproduced',
      fix: 'Name the directory the count was taken over, e.g. "17 in `drafts/`".',
    })
  }
}

// --- check 3: the append-only rule, enforced rather than trusted -----------
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
console.error('stay in .claude/skills/semantics-preserved-abstract/.')
process.exit(1)
