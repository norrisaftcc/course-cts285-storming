# ADR-002: Points Bind at the Assignment Header Level; Sub-Items Are Descriptive

**Status**: Accepted — 2026-07-23
**Deciders**: A. Norris (instructor), coordinator
**Governs**: `phase0/CTS285_Canonical_Points_Table.md` and every header/rubric that regenerates from it (CLAUDE.md non-negotiable #1)
**Refines, does not supersede**: the canonical points table (still the single source of truth for *which* points exist)

## Context

The points system has been the single most conflict-generating artifact in the refresh: five/six mutually inconsistent sources (COURSEMAP 700-vs-750, README 800, headers 775, rubrics ~2× headers), and — even after Phase 0.1 established one canonical table — the 1.0b sweep surfaced a *fresh* contradiction the table itself contains: the 40/40/20 check line calls Sprint 1 **35T/25P/15C**, while the authoritative `Week_05` assignment distributes **55T/10P/10C**. Both are "true"; they are two representations of the same weighting that drifted.

Root cause is structural, not clerical: the system maintained **the same weighting at two levels** — an assignment total *and* a set of sub-item point values obligated to sum to it — plus percentages stored as authored values rather than derived ones. Any edit at any level could break the invariant, and every fix invited the next drift. Restated micro-points (UML 25 / ERD 15 / Wireframes 15 …) also imply a false precision: a grader counting to 75, which no one does — the rubrics already grade in qualitative bands (Excellent / Proficient / Developing).

**Countervailing force (why points are not trivial):** point structure protects the instructor. In a grade dispute, an accreditation review, or an RSI/federal-compliance audit, "this assignment is 75 points, the course is 750, the split is 40% process / 40% technical / 20% communication" is defensible, legible evidence. Any simplification must **keep that evidentiary footing intact**. The problem was never that points exist — it is that they were maintained redundantly.

## Decision

1. **The binding invariant is single-level: assignment (and equivalent top-line assessment) point values sum to 750.** This is the only arithmetic that MUST hold. The canonical points table remains the sole source of *which* assessments exist and their point values.

2. **Everything below the assignment header is descriptive, not binding arithmetic.** Rubric sub-items, per-part points, and any T/P/C characterization are *weighting guidance* for the grader and student. They should be internally sensible but are **not required to sum to the header**, and a rubric is graded holistically against its bands, not by totting up sub-points. Where sub-points happen to sum cleanly (as most now do after 1.0b), fine — but that is a convenience, not a constraint anyone must maintain.

3. **Percentages are always derived, never stored as authority.** Any `Y%` is computed `points ÷ 750` at authoring/build time. The CLAUDE.md header form `X pts (Y% of 750)` stands — but `Y` is a projection of `X`, and no percentage is ever an independent source that can drift.

4. **The 40/40/20 split is a course-level philosophy, not a per-assignment or per-sprint equation.** It is documented once (rebuilt COURSEMAP) as the course's grading ethos and defended course-wide (≈40/38/22, within tolerance). Individual assignments are *not* required to hit 40/40/20 internally; a design-heavy sprint reading 73/13/13 is expected and is not a defect.

## Consequences

**Retires three open `needs-instructor` gaps from the 1.0b ledger — no ruling needed:**
- *Sprint 1 35T/25P/15C vs 55T/10P/10C* — both are descriptions of one 75-pt assignment; keep either phrasing. No reconciliation. (1.0b's copy of Week_05's actual items stands as the descriptive truth.)
- *Canvas ~450-pt regime* — Canvas is a display surface; its internal numbers are non-authoritative and regenerate from the 750 table (task 3.4) or are ignored. Not a canon gap.
- *M1/M7/M8 knowledge checks* — the KC **total** (50, M2–M6 ×10) binds; per-module KC display is descriptive. No missing rows.

**Forward:**
- Future point edits cannot cascade-break the total: there is nothing below the header obligated to add up.
- Content tasks (1.3 Wk02 backlog, 1.6 Wk12 deploy/presentation, 2.4 wk16 pitch, 2.5 COURSEMAP rebuild) may author rubric sub-items as guidance without re-deriving a sum — they only owe the header total, which the canonical table already fixes.
- The COURSEMAP Module-Breakdown per-component figures 1.0b deferred to 2.5 are now explicitly *descriptive*; 2.5 rebuilds them as guidance, not as a second authoritative ledger.
- **Instructor protection preserved:** assignment totals, the 750 course total, and the 40/40/20 course philosophy remain binding and audit-legible. Only the redundant sub-item bookkeeping is released.

**Cost accepted:** additive-rubric transparency ("you lost 5 on the ERD") is given up in favor of holistic bands. The rubrics already read this way, so the change is a declaration, not a redesign.

**Unblocks:** PR #11 (task 1.0b) merges as-is; its three flagged gaps close under this ADR rather than waiting on a ruling.
