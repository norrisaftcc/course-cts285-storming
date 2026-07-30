# CTS-285 Canonical Points Table — 26FA
*Phase 0.1 · July 22, 2026 · **This table is the single source of truth.** Every header states `X pts (Y% of 750)`, every internal rubric must sum to its header, and no assessment exists that isn't a row here.*

## Total: 750 points

Rationale: 750 is what the COURSEMAP module structure *already sums to* (the "700" was the arithmetic error); it preserves the three internally-consistent sprint assignments (75/100/100) without rescaling; and it yields a clean split — **600 pts (80%) solo Dataman arc, 150 pts (20%) team on-ramp**. The on-ramp is deliberately lower-stakes: formative for spring; teams should take risks in the pitch, not grade-optimize.

**Knowledge checks: GRADED, not bonus.** (1) The Week-1 Dataman document-analysis quiz is a core planned assessment — grading it while calling other checks "bonus" creates two incompatible quiz regimes, exactly the confusion that produced the 700/750/800 mess. (2) Bonus points floating above the total broke every grade table in the refresh and distorts the 40/40/20 split. (3) Unlimited-attempt autograded checks are effectively mastery-gated completion points — low-stakes *graded* retrieval gets done; optional bonus gets skipped by exactly the students who need it. Module 1's generic KC is superseded by the Dataman quiz; modules 7–8 (team weeks) get none.

## The table

| Wk | Module / Role | Assessment | Pts | % | Status vs existing file |
|---|---|---|---|---|---|
| 1 | M1 · Analyst/Observer | Course Setup & Analyst Read of the Dataman Manual | 25 | 3.3 | ADAPT `Week_01` — header 25 unchanged; Maria→Dataman; drop Part 3 |
| 1 | M1 | **Dataman Manual Document-Analysis Quiz** (autograded, 10–12 items, 2 attempts) | 15 | 2.0 | NEW (salvage best Module_01_KC items) |
| 2 | M1 | Agile Simulation & Dataman Backlog Initialization | 35 | 4.7 | REWRITE `Week_02` — header 25→**35**; rubric must total 35 (was 75) |
| 3 | M2 · Product Owner | Stakeholder Analysis & Interview Plan (Dataman) | 25 | 3.3 | ADAPT `Week_03` — header unchanged; **rubric 100→25** |
| 4 | M2 | User Stories & Product Backlog (Dataman) | 50 | 6.7 | ADAPT `Week_04` — header unchanged; **rubric 100→50** |
| 5–6 | M3 · PO (Design) | **Sprint 1: System Design** (UML/ERD/wireframes/standups; retro = +5 bonus inside) | 75 | 10.0 | KEEP `Week_05` at 75 — assignment rubric is authoritative; fix "40/35/25" line |
| 6 | M3 | Risk Register (standalone; retro section DELETED as duplicate) | 25 | 3.3 | ADAPT `Week_06` — header unchanged; **rubric 100→25**, cut Part 1 |
| 7–8 | M4 · Scrum Master | **Sprint 2: Build & Facilitation** (burndown, review demo) | 100 | 13.3 | KEEP `Week_07` unchanged (already consistent) |
| 9–10 | M5 · Developer ★ORANGE | **Sprint 3: Quality** — code review, tech debt, **+2–3 ADRs** | 100 | 13.3 | KEEP `Week_09` total; fold ADRs into Part 3/4 (no point change) |
| 11 | M6 · QA/Release | Risk Mitigation & QA Test Plan | 50 | 6.7 | KEEP `Week_11` unchanged |
| 12 | M6 | DoD & Acceptance (15+15) + Lightweight Deploy (10) + Dataman Grouped Presentation (10) | 50 | 6.7 | ADAPT `Week_12` — header unchanged; **recompose internals** 20/30 → 15/15/10/10 |
| 2–12 | M1–M6 | Module Knowledge Checks ×5 (M2–M6, autograded, 10 ea) | 50 | 6.7 | NEW ×5 (M2–M6; M1 superseded by quiz) |
| | | **Solo Dataman arc subtotal** | **600** | **80.0** | |
| 13 | M7 · Team Lead | Team Formation Charter + Engine/Skin Selection | 30 | 4.0 | NEW (retire `Week_13`) |
| 14 | M7 | Terminology Discovery + Spring User Stories | 40 | 5.3 | NEW (recycle W3–4 machinery; retire `Week_14`, salvage handoff-checklist pattern for W16) |
| 15 | M8 | Wireframes + GREY Consult + Design Brief | 40 | 5.3 | NEW (recycle W5 wireframe rubric rows; retire `Week_15`) |
| 16 | M8 | Spring Capstone Pitch (25) + Handoff Package (15) | 40 | 5.3 | NEW (convert `Week_16` presentation rubric to pitch rubric; retire 110-pt structure) |
| | | **Team on-ramp subtotal** | **150** | **20.0** | |
| | | **TOTAL** | **750** | **100.0** | |

**40/40/20 check:** holds within every sprint (Sprint 1: 35T/25P/15C; Sprints 2–3 per existing rubrics). Weeks 13–16 skew communication-heavy by design (~30T/30P/40C) — document in the rebuilt COURSEMAP as intentional ("the on-ramp is a communication module"), don't force-fit. Course-wide ≈40/38/22 — within tolerance of the philosophy statement.

**Role rotation retained:** Observer/Analyst (1–2) → Product Owner (3–6) → Scrum Master (7–8) → Developer (9–10, PRISM ORANGE anchor) → QA/Release (11–12) → Team Lead (13–16, now leading a *real* team, which strengthens the rotation's payoff over the old solo "Team Lead" fiction).

## Files whose headers/rubrics must regenerate from this table

**Point/rubric changes (Sonnet-mechanical):**

1. `Week_02` — header 25→35; internal rubric 75→35 (full rewrite anyway)
2. `Week_03` — internal rubric 100→25 (header already correct)
3. `Week_04` — internal rubric 100→50 (header already correct)
4. `Week_05` — fix "40% technical/35%/25%" sentence; confirm 75 as authoritative
5. `Week_06` — internal rubric 100→25; delete duplicated retrospective part
6. `Week_09` — add ADR requirement inside existing 100 (recompose one section, total unchanged)
7. `Week_12` — recompose 20/30 → 15/15/10/10 (header 50 unchanged)
8. `Week_13/14/15/16` — retire; new files at 30/40/40/40
9. `rubrics/assessment-rubrics.md` — replace conflicting Sprint 1 breakdown with Week_05's; align retro policy (+5 bonus inside sprints only; W6's 50-pt retro gone); add ADR row to Sprint 3; strip QM references
10. `COURSEMAP.md` — replace entire points/percentage tables and Module 3/8 line items from this table; strip QM §; fix PO2 mapping
11. `README.md` — replace grading table (750, KCs graded in-total); rebuild calendar; strip QM cert line
12. `MATERIALS_INDEX.md` — regenerate from tree with these line items
13. `knowledge-checks/` — Module_01 KC repurposed into the W1 quiz; author M2–M6 checks at 10 pts each
14. `audits/` — retire all three per `QM_Retirement_Note.md` (RSI *mechanisms* — exit tickets, weekly interaction — move to the instructor guide)

**Untouched by points normalization:** `Week_01` (25 ✓), `Week_07` (100 ✓), `Week_11` (50 ✓), activities, planning sheets, pm-materials, SDLC reference — their changes are content/skin, not arithmetic.
