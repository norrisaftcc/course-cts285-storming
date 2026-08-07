# lore/ — the findings series

*Established 2026-08-06 by instructor direction; recorded in `phase0/ADR-011-findings-series.md`.*

## What lives here

**Findings.** A finding is a *measurement or an observation* about this project — what a run
returned, what a survey of the tree showed, what a defect turned out to be. It is dated, it is
evidence, and it argues from what was actually found.

`lore/findings/F-###-<slug>.md`, numbered sequentially and never reused.

## What does not live here

| Kind | Home | Why it is not a finding |
|---|---|---|
| **Decisions of record** | `phase0/ADR-###` | A finding reports; an ADR *rules*. A finding may recommend a ruling and must not perform one. |
| **Plans, backlogs, worklists** | `planning/` | Those describe intended work. A finding describes observed state. |
| **The write ledger** | `planning/SESSIONS.md` | Per-session provenance, appended every session. A finding is per-*investigation*. |
| **Course material** | `drafts/` | Nothing in `lore/` is student-facing, ever. |
| **Frozen source corpora** | `sources/` | Evidence of what a base said. Findings *cite* those; they never edit them. |

The short version: **`phase0/` rules, `planning/` plans, `lore/` measures, `drafts/` teaches.**

## Rules

1. **A finding is a dated record.** Non-negotiable #8 applies with full force — a finding describes
   the state at the moment it was taken. It does not get quietly updated when the tree moves on. If
   a finding is overtaken, the compliant move is a **new finding** citing the old one, or a dated
   correction block appended beneath the original text. Never a silent rewrite.
2. **Report the reconciliation, not the flattering number.** Any finding produced by a multi-agent
   run states dispatched / returned / dead, and says what went unjudged. A number that looks like an
   answer while work was dropped is the defect this repo has recorded most often — see `F-002`.
3. **Counts are re-derived from the tree**, never copied from a document's claims about itself
   (non-negotiable #6). Where a source document's count and the tree disagree, record both and say
   which is which.
4. **A finding never rules.** It may say "this needs an ADR" and name the question. It may not
   settle it. When a finding wants a decision that does not exist, it says so and stops
   (`CLAUDE.md`, closing line).
5. **Verification travels with the finding.** If an adversarial pass ran, its verdict and its
   surviving defects are recorded *in* the finding — including the ones that were corrected. A
   finding that shows only its clean final state has hidden its own error bars.

## Index

| # | Finding | Date | State |
|---|---|---|---|
| `F-001` | [Running the Bases — work-breakdown forecast](findings/F-001-running-the-bases-forecast.md) | 2026-08-06 | Recorded. Forecast only; nothing built. 8 decisions open for a human. |
| `F-002` | [Confident status outrunning its coverage](findings/F-002-status-outruns-coverage.md) | 2026-08-06 | Recorded. 12 instances, 6 layers; **7 still open**. |
| `F-003` | [The failing-agent runs — evidence inventory](findings/F-003-failing-agent-runs.md) | 2026-08-06 | Recorded. 4 runs, 1 with primary evidence. Untrimmed long form at `563b6df`. |
| `F-004` | [State corrections at `1079aba`](findings/F-004-state-corrections-at-1079aba.md) | 2026-08-07 | Recorded. Supersedes two claims in F-001/F-002. One item flagged unexecuted. |
| `F-005` | [Open notes](findings/F-005-open-notes.md) | 2026-08-07 | **Live register.** Open questions with their discussion. Largest item: students speaking in character. |

*Regenerate this index from the directory, never from its own previous contents.*
