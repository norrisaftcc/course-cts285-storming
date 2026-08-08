# ADR-011: Findings Get Their Own Series, in `lore/`

**Status**: **Accepted** — 2026-08-06. Instructor-directed; this ADR records the ruling rather than
proposing it.
**Deciders**: instructor.
**Governs**: where measurements and observations live; the `F-###` numbering; what separates a
finding from a decision, a plan, and a ledger row.
**Related**: `CLAUDE.md` non-negotiables #6 and #8 · `planning/SESSIONS.md` (append-only convention)
· `ADR-008` (the mechanism-vs-prose test) · `lore/README.md` (the series' own rules)

## Context

This repo had four places to put writing and no place for a **measurement**.

`phase0/` holds decisions of record. `planning/` holds plans, backlogs, and worklists. `drafts/`
holds course material. `planning/SESSIONS.md` holds per-session provenance. None of them fits the
output of an investigation — a run that returned counts, a survey of the tree, a defect traced to
its origin. Those had been landing wherever there was room: `planning/B003_RECONCILIATION_WORKLIST.md`,
`drafts/cts285/points-normalization/CONFLICT_LEDGER.md`, `alignment_ingestion/ASSESSMENT.md`, and
`planning/SHODANN_INSTRUMENT_ASSESSMENT.md` are all findings in everything but name, in four
different shapes, in three different directories.

The immediate trigger was a 7-agent run whose output — a work-breakdown forecast plus a
twelve-instance defect survey — had no home and was briefly filed under `planning/`, where it would
have read as a *plan* rather than as *evidence*.

**Naming note.** The pattern is borrowed from a sibling repository that uses `_lore/`. The
underscore prefix is not this repo's convention — nothing here carries one — so the container is
`lore/`, adapted rather than transplanted.

## Decision

**Findings live in `lore/findings/F-###-<slug>.md`, numbered sequentially, never reused.**

The division of labor across the four zones is now stated once:

> **`phase0/` rules · `planning/` plans · `lore/` measures · `drafts/` teaches.**

Three constraints ride with the series, all of them existing rules applied to a new place:

1. **A finding is a dated record.** Non-negotiable #8 applies at full force. A finding describes the
   state at the moment it was taken and is correct as written. When it is overtaken, the compliant
   move is a new finding citing the old one, or a dated correction appended beneath the original —
   never a silent rewrite. This is the `SESSIONS.md` convention, extended.
2. **A finding never rules.** It may name a question and say an ADR is needed. It may not settle
   one. The closing line of `CLAUDE.md` already binds every executor to this; stating it here stops
   the series from becoming a shadow decision log.
3. **Verification travels with the finding.** If an adversarial pass ran, its verdict and the
   defects it caught are recorded *in* the finding, including the corrected ones. A finding that
   shows only its clean final state has hidden its own error bars — which is the exact defect class
   `F-002` documents.

## Consequences

- `CLAUDE.md`'s repo-layout table gains a `lore/` row. The read-first list is **not** extended:
  findings are evidence to consult, not constraints to load before writing.
- The four existing findings-shaped documents are **not** moved. They are dated records whose paths
  are cited from elsewhere, and relocating them would break those citations to no benefit
  (non-negotiable #8). New findings go in `lore/`; old ones stay where they are and may be cited
  from the index.
- No merge gate is attached. The sibling repo enforces "no PR without a lore entry"; that is not
  adopted, because most PRs here do not produce a measurement, and a mandatory entry would produce
  empty ones. **`ADR-008`'s test applies if anyone proposes mechanizing this later.**
- `F-001` and `F-002` are filed under the new series as its first entries.

## What this does not decide

- Whether any *existing* findings-shaped document is retro-numbered into the series. Deliberately
  left alone.
- Whether findings are ever student-facing. They are not, and nothing here creates a path to it —
  `lore/` is out-of-character production material, like `phase0/`.
- The numbering of any future ADR raised *by* a finding. `F-001` §2 names ADR-012 as the next free
  number for the floor-test lexicon question, since this ADR took 011.
