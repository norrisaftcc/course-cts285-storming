# SESSIONS.md — Write Ledger for course-cts285-storming
*Anti-fork discipline: every session that writes to this repo appends a row here (part of its final commit). New sessions read this first. See CLAUDE_SUPPLEMENTARY.md Rules 4–5 for the workflow this feeds.*

## Rules of the ledger

1. **One writer at a time.** The WRITE TOKEN row below names who may commit. Everyone else is read-only until the token passes (by editing that row in a commit).
2. **Push early, pull first.** Push after every writing session; pull before starting one. `origin/main` is the meeting point. Cloud (bridge) sessions cannot push — a human or local session must push their commits.
3. **Every commit carries a session trailer** (`Claude-Session: <url>` for Claude sessions; Claude Code adds its own `Co-Authored-By`). Distinct committer names per actor: `Teacherbot` = cloud Cowork sessions · Claude Code default identity = local agent sessions · your own git identity = human commits.
4. A session that ends mid-task leaves a handoff block (Rule 5, CLAUDE_SUPPLEMENTARY) in its PR or issue, and still appends its ledger row.

## WRITE TOKEN

**Holder:** Drew (human) — pending handoff to local Claude Code for Phase 1.
**Passed from:** cloud Cowork session (below), July 2026, via manual sync package.

## Ledger

| Date (ET) | Session type | Actor / identity | Session link | Commits | Summary |
|---|---|---|---|---|---|
| 2026-07-22 | Cloud Cowork (bridge) | Teacherbot | https://claude.ai/code/session_01NQP3Y6E6nhCZyPN9jcUSU7 | a34e976 | Master plan v1.1 + Phase 0 artifacts (points table, SHODANN bible, ADR-001, PRISM map, naming canon, QM retirement) |
| 2026-07-22 | Cloud Cowork (bridge) | Teacherbot | (same session) | 2f226ca | Proposed project instructions + voice canon exported from Claude project (`reference/`) |
| 2026-07-22 | Cloud Cowork (bridge) | Teacherbot | (same session) | ca36b45 | CLAUDE.md + CLAUDE_SUPPLEMENTARY.md handoff files; KAYFABE_ARCHITECTURE; bible v1.1 (§11) |
| 2026-07-29 | Cloud Cowork (bridge offline → manual package) | Teacherbot, applied by Drew | (same session) | *(this commit)* | Fork consolidation: instructions doc marked ADOPTED w/ instructor amendments (Trusted-Workflow gloss, UV-streamer gloss, past-GREEN scope rule); PRISM map updated to match; SESSIONS.md created; ledger discipline added to CLAUDE_SUPPLEMENTARY |

*(Append new rows above this line — newest last. Never rewrite old rows; corrections get their own row.)*
