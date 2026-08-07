# Shared Dataman Class Artifacts

One instructor-authored source set that every 26FA CTS-285 student analyzes, and that doubles as a grading key. Generated early per the consolidation master plan (§6.3 item 6): one set serves every student, fixes the grading economics bespoke projects broke, and gives rubrics a known-correct model to point at.

**Nothing here is student-facing until it graduates to a course repo.** These are *inputs* to the Week 1–4 assignments, not the assignments themselves.

**Project framing:** the 26FA CTS-285 solo spine is **Dataman** — modernizing Texas Instruments' 1977 handheld math toy *DataMan* into a web/app learning system across a full SDLC (weeks 1–12). Every entity, stakeholder need, and backlog item in this folder traces to the transcribed manual at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` — the product source of truth.

---

## Dataman vs. DataMon — what this folder needs to know

**Canon lives in `phase0/NAMING_CANON.md` §"Dataman vs. DataMon". Read it there.** This section
deliberately does **not** reproduce that table.

<!-- CORRECTED 2026-08-07: this section previously claimed to reproduce NAMING_CANON.md "verbatim"
     and reproduced a SUPERSEDED two-row version — heading "Dataman vs. Datamon", and the assertion
     that the project "is never called 'Datamon'", both pre-ADR-004. A verbatim copy of canon inside
     a draft is a second source of truth, and it desynchronized twice. Replaced with a pointer plus
     the one fact this folder actually needs. Do not re-reproduce the table here. -->

Three things bind the artifacts in this folder:

1. **The exemplars here are Dataman.** Every worked example, transcript, ERD, and grading key in this
   folder uses the **Dataman** basis — the 1977 physical calculator modernized into "Dataman 2.0."
2. **DataMon is a live alternative student basis**, not a legacy curiosity. Per **ADR-004** a student
   may build **"DataMon 2.0"** — the virtual-pet reskin — and the exercise is identical; only the
   flavor differs. Nothing in this folder should read as though Dataman were the only option.
3. **The lowercase "Datamon" is retired.** It survives only as DataMon's historical origin — the old
   creature-collection game whose save/load, battles, and encounters seed the week-2 stretch epics.
   It is not a live term for either project.

The `man` / `Mon` swap is the search-and-replace hazard NAMING_CANON exists to prevent. Any agent
editing these files must carry that table.

---

## Contents

| File | Purpose |
|---|---|
| `Stakeholder_Transcript_Parent.md` | Fictional parent interview (at-home buyer/supervisor). Analyst source. |
| `Stakeholder_Transcript_Teacher.md` | Fictional classroom-teacher interview (power curator, classroom scale). Analyst source. |
| `Stakeholder_Transcript_Retro_Collector.md` | Fictional vintage-collector interview (fidelity advisor, secondary audience). Analyst source. |
| `Role_Card_HOWTO.md` | **Instructor-facing.** How to run a card: levers/buttons/constraints, the opt-in rule, the voice-agent path, ungraded. Read first. |
| `Role_Card_Parent_Renee.md` | **Instructor-facing.** Play sheet for Renee. Zone A playable/leak-free; Zone B is the answer key. |
| `Role_Card_Teacher_Alvarez.md` | **Instructor-facing.** The **rehearsal** round (ADR-003). Transcript not handed out for this round. |
| `Role_Card_Collector_Dale.md` | **Instructor-facing.** Play sheet for Dale. |
| `Client_Brief_Instructor_As_Client.md` | **Instructor-facing.** The live client, played not distributed — the graded RSI anchor. Adds no core story by design. |
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

Board columns everywhere: **To Do → In Progress → In Review → Done**. Any workflow reference uses the Trusted Workflow: **FILE → BRANCH → DRAFT → BUILD → FINISH → REVIEW → CLEAR → MERGE**.

---

## Traceability (why this doubles as a grading key)

The value of this set is that a rubric can point at a source for every claim. Verified in `Grading_Key.md` Parts 4–5:

1. **Every entity in `Dataman_Reference_ERD.md` is derivable from at least one transcript** (matrix in Grading Key Part 4 — all eight entities covered).
2. **Every top-of-backlog (core) user story traces to a named stakeholder need** — each carries a `↳ Traces to:` line; none is motivated by device behavior with no stakeholder.
3. **No core story is motivated only by the instructor-as-client persona** — the brief exists as of 2026-08-07 (`Client_Brief_Instructor_As_Client.md`) and is written to commission the modernization without requesting features, so the guarantee holds by construction rather than by the persona's absence. See `Grading_Key.md` Part 5 and `ADR-003:48`.
4. **Every stretch-goal epic traces to a named feature of the legacy creature-collection game** — recorded in `phase0/NAMING_CANON.md` §"Dataman vs. DataMon" (legacy-game row), ruled by `ADR-004`. *(Re-pointed 2026-08-07 from the retired `CTS285_COURSE_OUTLINE.md`, which exists nowhere in the tree.)*
5. **No orphan stories** — nothing in the backlog lacks a motivating transcript (or, for stretch, a named legacy-game feature).

---

## Honesty and scope notes

- The three stakeholders are **fictional in-world personas**, each labeled a class artifact in its own header. No real person, family, semester, or "past student" is referenced. No invented statistics or testimonials appear. No claim is made about real TI sales/production/history beyond what the manual and period ad support.
- Every device-specific claim traces to `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`; there are no unverifiable hardware claims to hedge.
- **Not decided here (out of scope):** the Week 1–2 module architecture, the wk-1/wk-2 assignment split, and sprint/week-numbering are spine decisions (Rule 1) and are deliberately untouched. ~~The instructor-as-client stakeholder is deferred to an ADR (Rule 8).~~ **Resolved:** ruled by `ADR-003` (2026-07-23) and authored 2026-08-07 as `Client_Brief_Instructor_As_Client.md`; rehearsal staging ruled **low-stakes instructor** for 26FA.

---

## Andrew's Note (OOC)

*Instructor margin, out of character:*

These three interviews are rigged. Each one hides the mistakes I want students to catch — a parent asking for a leaderboard, a teacher refusing one, a collector who wants to emulate a 1977 chip. The point of the exercise isn't to write down what stakeholders say; it's to notice when what they say is a solution, a guess, a conflict, or too vague to build. The grading key spells out every trap. Keep it away from the students until after they've done the analysis — the whole lesson is in finding the traps themselves.

— Andrew
