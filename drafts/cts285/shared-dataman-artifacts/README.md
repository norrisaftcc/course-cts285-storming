# Shared Dataman Class Artifacts

One instructor-authored source set that every 26FA CTS-285 student analyzes, and that doubles as a grading key. Generated early per the consolidation master plan (§6.3 item 6): one set serves every student, fixes the grading economics bespoke projects broke, and gives rubrics a known-correct model to point at.

**Nothing here is student-facing until it graduates to a course repo.** These are *inputs* to the Week 1–4 assignments, not the assignments themselves.

**Project framing:** the 26FA CTS-285 solo spine is **Dataman** — modernizing Texas Instruments' 1977 handheld math toy *DataMan* into a web/app learning system across a full SDLC (weeks 1–12). Every entity, stakeholder need, and backlog item in this folder traces to the transcribed manual at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` — the product source of truth.

---

## Dataman vs. Datamon (reproduced verbatim from `phase0/NAMING_CANON.md`)

The modernization **project is called Dataman everywhere and is never called "Datamon."** The token "Datamon" appears in this folder in exactly two kinds of place: (a) this disambiguation section — its heading, this sentence, and the verbatim block below, which necessarily reintroduces the token to define the distinction — and (b) the stretch-epic section of the seeded backlog and its grading key, where it credits the in-world homage. Any other occurrence — anywhere the modernization project or its data model is called "Datamon" — would be a naming error.

| Term | Meaning | Where it lives |
|---|---|---|
| **Dataman** (also "Dataman/Datamon modernization") | The 26FA CTS-285 solo spine project: modernizing the retro handheld math toy through a full SDLC, weeks 1–12. Module 1 reads the Dataman PDF manual "like an analyst." | New 26FA material |
| **Datamon (legacy game)** | The old week-5 creature-collection console game from the retired spine. | Legacy outline/roadmap/manifest |
| Canonical interleave | Legacy Datamon *game* features (save/load, battles, encounters) are recast as **stretch-goal epics** in the week-2 seeded Dataman backlog — deliberate in-world homage, not a merge. | Wk 2 materials |

---

## Contents

| File | Purpose |
|---|---|
| `Stakeholder_Transcript_Parent.md` | Fictional parent interview (at-home buyer/supervisor). Analyst source. |
| `Stakeholder_Transcript_Teacher.md` | Fictional classroom-teacher interview (power curator, classroom scale). Analyst source. |
| `Stakeholder_Transcript_Retro_Collector.md` | Fictional vintage-collector interview (fidelity advisor, secondary audience). Analyst source. |
| `Dataman_Reference_ERD.md` | Known-correct data model (Mermaid + prose table) + degraded variants with keys. |
| `Dataman_Seeded_Backlog.md` | Seeded epics → user stories → acceptance criteria; core MVP + below-the-line stretch. |
| `Grading_Key.md` | **Instructor-only.** Planted hazards, cross-transcript conflicts, intended MoSCoW, entity implications, traceability guarantees. |
| `HANDOFF.md` | Session handoff (Rule 5). |

---

## What each artifact feeds (module / assessment → artifact)

Point figures below are from `phase0/CTS285_Canonical_Points_Table.md`; per ADR-002 the assignment header total binds and sub-items are descriptive.

| Consuming module / assessment | Points (canonical) | Uses |
|---|---|---|
| Module 1 · SDLC Simulation Lab; **Course Setup & Analyst Read of the Dataman Manual** | 25 pts (3.3% of 750) | Manual transcript as the analyst-read source; a 1-page transcript as the interview example |
| Module 1 · **Dataman Manual Document-Analysis Quiz** | 15 pts (2.0% of 750) | Manual transcript + reference facts |
| **Agile Simulation & Dataman Backlog Initialization** (Wk 2) | 35 pts (4.7% of 750) | `Dataman_Seeded_Backlog.md` as the starting backlog; stretch epics as in-world homage |
| Module 2 · User Story Workshop; **Stakeholder Analysis & Interview Plan** (Wk 3) | 25 pts (3.3% of 750) | The three transcripts; `Grading_Key.md` Parts 1–2 |
| **User Stories & Product Backlog** (Wk 4) | 50 pts (6.7% of 750) | Transcripts + seeded backlog; `Grading_Key.md` Part 3 (MoSCoW) |
| Module 3 · System Design Studio; **Sprint 1: System Design** (Wk 5–6) | 75 pts (10.0% of 750) | `Dataman_Reference_ERD.md` (incl. degraded variants for "which entity is missing?" items); `Grading_Key.md` Part 4 |
| Module 4 · Sprint Planning Simulation | (uses Wk 2/4 outputs) | Seeded backlog as the plannable product backlog |

Board columns everywhere: **To Do → In Progress → In Review → Done**. Any workflow reference uses the Trusted Workflow: **Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge**.

---

## Traceability (why this doubles as a grading key)

The value of this set is that a rubric can point at a source for every claim. Verified in `Grading_Key.md` Parts 4–5:

1. **Every entity in `Dataman_Reference_ERD.md` is derivable from at least one transcript** (matrix in Grading Key Part 4 — all eight entities covered).
2. **Every top-of-backlog (core) user story traces to a named stakeholder need** — each carries a `↳ Traces to:` line; none is motivated by device behavior with no stakeholder.
3. **No core story is motivated only by the deferred instructor-as-client persona** — that persona is intentionally not written here (see `phase0/ADR-003-instructor-as-client-persona.md`), so nothing depends on it.
4. **Every stretch-goal epic traces to the legacy creature-game feature list** (`CTS285_COURSE_OUTLINE.md` lines 168–185).
5. **No orphan stories** — nothing in the backlog lacks a motivating transcript (or, for stretch, an outline line).

---

## Honesty and scope notes

- The three stakeholders are **fictional in-world personas**, each labeled a class artifact in its own header. No real person, family, semester, or "past student" is referenced. No invented statistics or testimonials appear. No claim is made about real TI sales/production/history beyond what the manual and period ad support.
- Every device-specific claim traces to `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`; there are no unverifiable hardware claims to hedge.
- **Not decided here (out of scope):** the Week 1–2 module architecture, the wk-1/wk-2 assignment split, and sprint/week-numbering are spine decisions (Rule 1) and are deliberately untouched. The instructor-as-client stakeholder is deferred to an ADR (Rule 8).

---

## Andrew's Note (OOC)

*Instructor margin, out of character:*

These three interviews are rigged. Each one hides the mistakes I want students to catch — a parent asking for a leaderboard, a teacher refusing one, a collector who wants to emulate a 1977 chip. The point of the exercise isn't to write down what stakeholders say; it's to notice when what they say is a solution, a guess, a conflict, or too vague to build. The grading key spells out every trap. Keep it away from the students until after they've done the analysis — the whole lesson is in finding the traps themselves.

— Andrew
