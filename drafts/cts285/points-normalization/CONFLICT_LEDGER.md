# Points Normalization — Conflict Ledger

*Task **1.0b**, executed 2026-07-23. Source of truth: `phase0/CTS285_Canonical_Points_Table.md` (750 total). Input: the ingested `sources/uv-285/` copies (task 0.8). Output: `drafts/cts285/`. This sweep changes **only** numbers, percentage strings, rubric line labels required by a recomposition, and the point-driven deletion of Week_06's retrospective. No prose authored, no Dataman/Datamon skin introduced.*

**Reproducibility:** `sources/uv-285/` provenance headers record each origin file's absolute path; input is the frozen 0.8 snapshot, not the live `../csc_dash` tree.

## Recomposition method (documented, so no value is "invented")

Where a rubric's line items had to be rescaled to a new total, sub-items were scaled by `canonical_total ÷ current_sum` and rounded to integers by the **largest-remainder** method so they sum exactly. Ties break to the larger original sub-item, then to the earlier row. This preserves each assignment's intended relative weighting and introduces no new weighting. Clean ÷2 cases fall out exactly.

## Header regeneration (all 7 edited assignments)

Every header restated `X pts (Y% of 750)`; the retired basis string `of total course grade` (a /700 basis) removed everywhere.

| File | Header pts | Old % (/700) | New % (/750) |
|---|---|---|---|
| Week_02 | 25 → **35** | 3.6 | 4.7 |
| Week_03 | 25 | 3.6 | 3.3 |
| Week_04 | 50 | 7.1 | 6.7 |
| Week_05 | 75 | 10.7 | 10.0 |
| Week_06 | 25 | 3.6 | 3.3 |
| Week_09 | 100 | 14.3 | 13.3 |
| Week_12 | 50 | 7.1 | 6.7 |

## Rubric / internal arithmetic (old → new, per canonical table)

**Week_03** — rubric 100 → 25 (÷4, largest-remainder). Stakeholder Analysis 35→**9**, Interview Plan 40→**10**, User Personas 25→**6** (=25). Body Part headers set to match (9/10/6). Section-level `(N points)` suffixes (List 10 / Power-Interest 15 / Profiles 10 / Objectives 10 / Questions 30) **removed** — they cannot integer-scale at ÷4; the rubric summary is the authoritative graded instrument. *(Method: recomposition; not invented values.)*

**Week_04** — rubric 100 → 50 (÷2, exact). Interview Notes 10→**5**, User Stories 60→**30**, Prioritization 20→**10**, Backlog Review 10→**5** (=50). Body Part headers halved to match (5/30/10/5). Story-point estimation examples (2/3/5/8 "points") left untouched — not rubric points.

**Week_05** — total confirmed **75** (authoritative). Line 24 sentence "40% technical / 35% / 25%" (false against both canon and the actual split) replaced with the actual point distribution: technical (design artifacts) **55**, process (standups) **10**, communication (design doc) **10**. Rubric `Total 75 (+5)` → `Total 75`; the Sprint Retrospective **+5 is a bonus applied within the 75-point cap**, not added on top. Internal parts (UML 25 / ERD 15 / Wireframes 15 / Design Doc 10 / Standups 10) unchanged.

**Week_06** — total 100 → **25**. **Part 1 (Sprint Retrospective, 50 pts) deleted** as a duplicate (retro survives only as Week_05's +5 bonus); former Part 2 renumbered to Part 1. Surviving Risk Register recomposed 50 → 25 by proportional halving of existing sub-items: Risks Identified 20→**10**, Mitigation Strategies 20→**10**, Summary 10→**5** (=25). Four retrospective rubric rows removed; rubric Total 100→25. Orphaned deliverables-checklist line (`sprint-1-retrospective.md`) removed. The retrospective-template link at old line 36 was inside the deleted Part 1 (gone); the risk-register-template link preserved. *(Proportional halving = mechanical derivation, not an invented figure.)*

**Week_09** — header % regenerated (14.3→13.3). Rubric **verified** at 100 (Implementation 45 + Code Review 30 + Technical Debt 15 + Sprint Artifacts 10) and **left unchanged** per canon ("no point change"). The +2–3 ADR requirement is prose (master-plan 1.5) and was **not** authored here.

**Week_12** — header % regenerated (7.1→6.7). Parts recomposed 20/30 → **15/15/10/10**: Part 1 DoD 20→15, Part 2 Acceptance Testing 30→15. Two new point-bearing components added per the canonical row — Part 3 **Lightweight Deploy (10)** and Part 4 **Grouped Presentation (10)** — as rubric rows + stub Part headers; their **assignment bodies are authored by task 1.6** (wk11–12 expansion), clearly marked. Rubric Total = 50 (15+15+10+10).

## `rubrics/assessment-rubrics.md`

- **Sprint 1 example** reconciled to the authoritative `Week_05` line items: Technical 55 (UML 25 / ERD 15 / Wireframes 15), Process/PM 10 (standups), Communication 10 (design doc), Retrospective +5 bonus within cap. The old sub-split (PM 25 / Technical 35 [UML 15/ERD 10/Wireframes 10] / Communication 15) discarded per canon ("Week_05 authoritative").
- **Final Presentation (60 pts of Module 8)** — **retired**. No canonical row; contradicted the retired Week_16 110-pt structure. Marked non-graded and preserved only as salvage for the wk16 pitch rubric (task **2.4**). Its 60 no longer counts toward 750.

## `COURSEMAP.md`

- Points Distribution table replaced wholesale: label "(700 total)" → "(750 total)"; per-module 75/75/100/100/100/100/70/80 + KC 50 = **750**; solo arc 600 (80.0%) / on-ramp 150 (20.0%) noted; **Module 8 150→80**; **Knowledge Checks "50 (bonus)" → "50" graded**; all % recomputed /750. Module subtotals derived by summing the canonical assessments per module (arithmetic, no partition question surfaced).
- The two on-ramp module **descriptions** (M7 "Deployment", M8 "Final presentation") were reallocation-driven-wrong and updated to the new spine (team formation / capstone pitch).

## README.md

- Grading table replaced: "(700 total)" → "(750 total)"; module rows + KC 50 graded = **750**; % /750; Module 8 150→80, Module 7 100→70.

## Deferred (noted, NOT silently dropped)

| Item | Owner |
|---|---|
| QM-reference stripping (assessment-rubrics, COURSEMAP §, README cert line) | QM-retirement task |
| COURSEMAP PO2-mapping fix; `Sacred Flow` at COURSEMAP:75 (pre-existing baseline, not added to) | naming / COURSEMAP-content task |
| README 17-row calendar rebuild | calendar / 2.5 |
| COURSEMAP **Module Breakdown** per-assessment/per-component point figures (Week-2 25, per-module "KC … bonus" lines, the broken Sprint-1 component split summing 65) | task **2.5** (COURSEMAP rebuild) — a scope note in COURSEMAP marks the summary table authoritative until then |
| Week_02 body Part 2 "Project Selection & Proposal" deletion + paper-sim/seeded-backlog rewrite; the residual 10-pt "Backlog Initialization" rubric line-item criteria | task **1.3** |
| Week_12 Part 3/4 assignment bodies (Lightweight Deploy, Grouped Presentation) | task **1.6** |
| Week_09 ADR requirement (prose); assessment-rubrics "ADR row to Sprint 3" (no Sprint-3 example exists to modify; ADRs are "no point change") | wk9–10 expansion / ADR-formalization content task |
| Dataman/Datamon project naming on the generic rubric labels above ("Backlog Initialization", "Grouped Presentation", "Solo arc", module descriptions) — canonical names include "Dataman"; per criterion 6 the sweep left the noun generic | wk-content tasks (1.3 / 1.6 / 2.5) |

## Fabrications located (for the honesty-purge task — NOT removed here)

- `README.md` ≈ lines 305–313 — "What Past Students Say" section, four attributed testimonials.
- `pm-materials/00-PM-Integration-Overview.md:52–53` — uncited 68% / 32% statistic. *(pm-materials not in this edit set; recorded from survey.)*
- `Week_06` — "Real Example from Past Student" reference. *(Removed only if it fell inside the deleted retrospective Part 1; otherwise remains for the honesty task — verify.)*

## Canon gaps → needs-instructor (NOT decided here, Rule 8)

1. **Sprint 1 T/P/C split.** Canon's 40/40/20 check characterizes Sprint 1 as **35T/25P/15C**, but the authoritative `Week_05` distributes **55T/10P/10C**. These are incompatible; the sweep copied Week_05's real items and did **not** invent a 35/25/15 partition. Needs a ruling: does the 40/40/20 check line, or Week_05, govern?
2. **Canvas HTML (~450-pt regime).** `canvas-html/*.html` carries an independent point regime (Modules 1–7 "50 points total" each, Module 8 100, KCs 6/7/8 bonus) omitted from the canonical regeneration list. Left unedited (task 3.4); either the canonical table gains a Canvas row or 3.4 inherits an unnormalized LMS.
3. **Knowledge checks M1/M7/M8.** No canonical row (canon allots KCs only to M2–M6). M1 superseded by the Week-1 quiz; M7/M8 (team weeks) get none — the survey's reading, not a ruling.

## Spine decisions encountered → flagged, NOT fixed (Rule 1)

- **Week-numbering / sprint-cadence collision** (four schemes): the assignments' 16-week map; `canvas-html` shifted a full sprint; `planning-sheets/Sprint_Planning_Template.md` running "Sprint 5 (Weeks 13-14)"; a README calendar with 17 rows for 16 weeks. Not reconciled here — a spine task.
- **40/40/20 per-week allocation** and any change to the **750 total or its 600/150 partition** — untouched.
