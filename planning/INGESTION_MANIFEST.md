# INGESTION_MANIFEST.md — CTS-285 / CSC-289 source consolidation

*Generated 2026-07-23 by the `cts285-wave-one-issues` survey workflow (4 parallel read-only inventory agents), regenerated from the actual file trees via `find` — never from any in-tree index (master plan §6.3-1). This is the **proposed** verdict table that task **0.8** executes and validates before copying. Verdicts here are the survey's recommendation; 0.8's owner confirms each against contents before ingest.*

## Source trees

| Tree | Origin (absolute) | Files surveyed |
|---|---|---|
| `sources/uv-285/` | `/Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285` | 59 |
| `sources/uv-289/` | `/Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289` | 39 |
| `sources/legacy/` | `/Users/norrisa/Documents/dev/github/course-cts285-template` | 203 |
| **total** | | **301** |

## Verdict summary

| Verdict | Meaning | Count | Copied into `sources/`? |
|---|---|---|---|
| KEEP | survives ~as-is, mechanical adaptation only | 48 | yes |
| ADAPT | structure survives, content re-pointed to Dataman spine | 106 | yes |
| HARVEST | extract named fragments; the rest dies | 96 | yes |
| RELOCATE | CSC-289 material misfiled in the 285 tree — moved, not adapted | 13 | no (manifest-only) |
| RETIRE | dies under PRISM / QM retirement — not copied | 37 | no (manifest-only) |
| UNKNOWN | needs a human read before verdict | 1 | no (manifest-only) |
| **copy total** | | **250** | |

## `sources/uv-285/` — 59 files

| Origin path (rel) | Verdict | Target 26FA slot | Note |
|---|---|---|---|
| `COURSEMAP.md` | ADAPT | CTS-285 spine-wide (task 2.5) | Module table sums 750 but is labeled Total 700; Module 8 line items (40+60) sum 100 vs the 150 in its own table; KC row says 50 bonus but 8x6=48; contains 'S… |
| `README.md` | ADAPT | CTS-285 course front matter (task 2.5) | Grading table sums 800 (750 modules + 50 KC) under a '700' header; 17-row calendar for a 16-week course; four fabricated student testimonials (§'What Past St… |
| `activities/Module_01_SDLC_Simulation_Lab.md` | ADAPT | CTS-285 wk1–2 (M1) | Real 573-line lab, but requires four handouts that exist nowhere in the tree (SDLC Phase Checklist, sample stakeholder interview transcript, role cards); re-… |
| `activities/Module_02_User_Story_Workshop.md` | ADAPT | CTS-285 wk3–4 (M2) | Strong 596-line workshop; depends on 3 stakeholder interview transcripts + Acceptance Criteria Checklist + Peer Review Rubric that do not exist — Dataman sha… |
| `activities/Module_03_System_Design_Studio.md` | ADAPT | CTS-285 wk5–6 (M3) | 675 lines, tool-concrete (draw.io/Figma); 'small groups 2–3' format must convert to solo + peer review per the wks 1–12 solo spine; needs design checklist + … |
| `activities/Module_04_Sprint_Planning_Simulation.md` | ADAPT | CTS-285 wk7–8 (M4) | 681 lines; 'Full class as Scrum team (6-8 students)' conflicts with the solo spine — reframe as class-wide simulation over the common Dataman backlog; sprint… |
| `activities/Module_05_Code_Review_Lab.md` | ADAPT | CTS-285 wk9–10 (M5) | 716 lines; the best fit for the ORANGE peer-review anchor, but needs the shared-org mechanics specified (sample PRs, code review checklist/rubric are 'instru… |
| `activities/Module_06_Risk_Assessment_Workshop.md` | ADAPT | CTS-285 wk11–12 (M6) | 763 lines, the strongest activity; pairs with Week_11 QA and the Crisis Decision Engine interleave; group format needs solo/pairs conversion. |
| `assignments/Week_01_Assignment_Course_Setup_SDLC_Exploration.md` | ADAPT | CTS-285 wk1 (25 pts) | Header 25 correct; rubric 25(+5). Maria pet-grooming scenario -> Dataman analyst read; the AlgoCratic collapsible is the punitive-dystopia register ('Welcome… |
| `assignments/Week_02_Assignment_Agile_Simulation_Project_Selection.md` | ADAPT | CTS-285 wk2 (25 -> 35 pts) | Header 25 vs internal rubric 75 (3x). Project-selection half deletes entirely under the common-Dataman spine; rebuild rubric to 35 with Datamon-game features… |
| `assignments/Week_03_Assignment_Stakeholder_Analysis_Interview_Plan.md` | ADAPT | CTS-285 wk3 (25 pts) | Header 25 vs internal rubric 100 (4x). Re-anchor stakeholders to Dataman (parents/teachers/retro collectors/instructor-as-client); line 99 'instructor plays … |
| `assignments/Week_04_Assignment_User_Story_Creation_Backlog.md` | ADAPT | CTS-285 wk4 (50 pts) | Header 50 vs internal rubric 100 (2x). Machinery is reusable at wk14 for the spring product; add the 'Dataman white-label thought experiment' foreshadow. |
| `assignments/Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md` | ADAPT | CTS-285 wk6 (25 pts) | Header 25 vs internal rubric 100 (4x). Retrospective part (50 of the 100) duplicates Week_05's +5 bonus retro — delete Part 1, keep the Risk Register; both p… |
| `assignments/Week_12_Assignment_Definition_Done_Acceptance_Testing.md` | ADAPT | CTS-285 wk12 (50 pts) | Header 50 = rubric 50, but internals must recompose 20/30 -> 15/15/10/10 to absorb the lightweight Dataman deploy and the grouped presentation; 106 lines nee… |
| `canvas-html/README.md` | ADAPT | CTS-285 Canvas build guide (task 3.4) | 526-line real implementation guide (paste procedure, theming, print rules); credits 'Designer: Angela Westmoreland'; contains the only broken-looking path in… |
| `instructor-guide/INSTRUCTOR_GUIDE.md` | ADAPT | CTS-285 instructor side (task 1.9) | TOC promises 13 sections and 'Modules 1-8'; body has 10 sections and dies after Module 3 (weeks 1–6). §7 'The AlgoCratic Theme (Optional Use Guide)' states '… |
| `knowledge-checks/Module_02_Knowledge_Check.md` | ADAPT | CTS-285 M2 KC (10 pts, graded) | 185 lines, 14 items, real. Convert bonus->graded at 10 pts, trim to spec, re-anchor scenarios to Dataman stakeholders. Contradicts the plan's 'missing' claim… |
| `knowledge-checks/Module_03_Knowledge_Check.md` | ADAPT | CTS-285 M3 KC (10 pts, graded) | 197 lines, 15 items on UML/ERD/wireframing — directly reusable; add Dataman-specific autogradable items ('which entity is missing from this ERD?'). |
| `knowledge-checks/Module_04_Knowledge_Check.md` | ADAPT | CTS-285 M4 KC (10 pts, graded) | 174 lines, 13 items on story points/velocity/planning poker; solid. Workflow/board-column items must be re-keyed to NAMING_CANON before use. |
| `knowledge-checks/Module_05_Knowledge_Check.md` | ADAPT | CTS-285 M5 KC (10 pts, graded) | 186 lines, 14 items on testing/version control/code review; the code-review items support the ORANGE anchor. Re-key any workflow-step answers to Trusted Work… |
| `knowledge-checks/Module_06_Knowledge_Check.md` | ADAPT | CTS-285 M6 KC (10 pts, graded) | 186 lines, 14 items on DoD/quality metrics/risk; pairs with Week_11–12. Convert to graded. |
| `planning-sheets/Daily_Standup_Template.md` | ADAPT | CTS-285 wks 5–12 (standup deliverable) | 239 lines of real content, NOT a stub. Referenced by no assignment path despite standups being graded in Week_05 (10 pts) — wire the reference in. Async-disc… |
| `planning-sheets/Risk_Register_Template.md` | ADAPT | CTS-285 wk6 + wk11 | 237 lines, real. Correctly path-referenced by Week_06 line 98 and the path resolves. Re-anchor the SendGrid/email examples to Dataman risks. |
| `planning-sheets/Sprint_Planning_Template.md` | ADAPT | CTS-285 wk5 (Sprint 1 planning) | 262 lines, real. Path-referenced by Week_05 line 66, resolves. BUT its own text asserts sprints at weeks 5/9/13 and enumerates FIVE sprints (wks 5–14) — a fo… |
| `planning-sheets/Sprint_Retrospective_Template.md` | ADAPT | CTS-285 wks 6, 8, 10 retros | 334 lines, real; the strongest template (Kerth Prime Directive, facilitation timeboxes). Path-referenced twice (Week_05:385, Week_06:36) and both resolve. Sa… |
| `planning-sheets/User_Story_Template.md` | ADAPT | CTS-285 wk4 + wk14 | 512 lines, the largest template and fully developed. Never path-referenced by any assignment even though Week_04 is the user-story assignment and Module_02 a… |
| `pm-materials/00-PM-Integration-Overview.md` | ADAPT | CTS-285 course framing / instructor side | 458 lines explaining the 40/40/20 model — keep the engine. Contains the uncited '68% of projects fail... 32% technical' fabrication (lines 52–53) and the fla… |
| `pm-materials/01-User-Stories-Acceptance-Criteria.md` | ADAPT | CTS-285 wk3–4 (10-min mini-lesson) | 122 lines, real embeddable lesson. Filename differs from every index reference to it ('01-User-Stories-Mini-Lesson.md'); re-anchor examples to Dataman. |
| `pm-materials/02-Story-Point-Estimation.md` | ADAPT | CTS-285 wk5 (10-min mini-lesson) | 136 lines, real. Indexed under the wrong name ('02-SDLC-Phases-Mini-Lesson.md') AND the wrong topic — the index thinks this file is about SDLC phases. |
| `pm-materials/03-Sprint-Ceremonies.md` | ADAPT | CTS-285 wk5–6 (10-min mini-lesson) | 143 lines, real. Ceremony definitions must be reconciled with NAMING_CANON before they reach a graded quiz key. |
| `reference-materials/SYSTEMS_ANALYSIS_GLOSSARY.md` | ADAPT | CTS-285 all weeks (reference) | 712 lines, real glossary. Needs Trusted Workflow / PRISM / Dataman-vs-Datamon entries added and any workflow definition re-keyed, since glossary terms become… |
| `rubrics/assessment-rubrics.md` | ADAPT | CTS-285 grading spine (task 2.5) | 341 lines. Its Sprint 1 breakdown (PM 25 / Tech 35 / Comm 15) sums to 75 and is internally valid but its sub-items contradict COURSEMAP's (UML 25/ERD 15/Wire… |
| `assignments/Week_13_Assignment_Deployment_User_Training.md` | HARVEST | CTS-285 wk12 (deploy content) — file retired | Header 50 = rubric 50. Deployment/user-training content is the only thing preserving CLO4 / CCL 'installation' language — harvest into wk12's 10-pt deploy co… |
| `assignments/Week_14_Assignment_Technical_Documentation_Handoff.md` | HARVEST | CTS-285 wk16 handoff package — file retired | Header 50 = rubric 50. Salvage the handoff-checklist pattern into the wk16 handoff-package spec; the wk14 slot becomes terminology discovery + spring user st… |
| `assignments/Week_16_Assignment_Final_Presentation_Portfolio.md` | HARVEST | CTS-285 wk16 pitch rubric (40 pts) — 110-pt structure retired | Header 110 (+10 bonus) contradicts COURSEMAP's 60 for the same week. Convert the presentation rubric rows into the spring-capstone pitch rubric merged with P… |
| `canvas-html/Module_01_Canvas_Page.html` | HARVEST | CTS-285 M1 Canvas rebuild (task 3.4) | Real 507-line styled page, not a stub. Declares 'Assignments (50 points total)' + KC '6 points bonus' — a sixth point source. Harvest the CSS/structure shell… |
| `canvas-html/Module_02_Canvas_Page.html` | HARVEST | CTS-285 M2 Canvas rebuild (task 3.4) | 536 lines, real content; claims 50-pt module (25+25) vs COURSEMAP's 75 and vs Week_04's 50-pt header. Shell only. |
| `canvas-html/Module_03_Canvas_Page.html` | HARVEST | CTS-285 M3 Canvas rebuild (task 3.4) | 543 lines; maps W5='System Design & Prototyping' and W6='Sprint 1 Planning & Kickoff' — a different week->content scheme than assignments/ (W5–6 = Sprint 1).… |
| `canvas-html/Module_04_Canvas_Page.html` | HARVEST | CTS-285 M4 Canvas rebuild (task 3.4) | 543 lines; labels weeks 7–8 as 'Sprint 1' (assignments call it Sprint 2) and links a 'Week 8: Sprint 1 Review & Retrospective' assignment that has no file. S… |
| `canvas-html/Module_05_Canvas_Page.html` | HARVEST | CTS-285 M5 Canvas rebuild (task 3.4) | 546 lines; W9 labeled 'Sprint 2 - Development & Testing' and links a nonexistent 'Week 10: Code Review & Quality Assurance'. Shell only. |
| `canvas-html/Module_06_Canvas_Page.html` | HARVEST | CTS-285 M6 Canvas rebuild (task 3.4) | 565 lines; W11 labeled 'Sprint 3 - Risk Mitigation & QA'; 50-pt module claim vs COURSEMAP 100. Shell only. |
| `canvas-html/Module_07_Canvas_Page.html` | HARVEST | CTS-285 wk13 M7 Canvas (net-new content) | 547 lines of deployment/documentation content that the 26FA spine reassigns to wk12; harvest the shell for the new M7 team-formation module. |
| `canvas-html/Module_08_Canvas_Page.html` | HARVEST | CTS-285 wk15–16 M8 Canvas (net-new content) | 582 lines; the only page with a 100-pt module claim (40+60), matching neither COURSEMAP's 150 nor the assignment headers' 150 (40+110). Shell only. |
| `knowledge-checks/Module_01_Knowledge_Check.md` | HARVEST | CTS-285 wk1 Dataman quiz (15 pts) | 173 lines, 13 real MC items with teaching explanations. Superseded by the Dataman document-analysis quiz per the points table — salvage the best generic SDLC… |
| `knowledge-checks/Module_07_Knowledge_Check.md` | HARVEST | n/a — M7/M8 team weeks get no KC | 175 lines, 13 items on deployment/docs/training. Points table gives modules 7–8 no knowledge check; harvest the deployment items into the M6 check that now c… |
| `knowledge-checks/Module_08_Knowledge_Check.md` | HARVEST | n/a — M7/M8 team weeks get no KC | 199 lines, 15 comprehensive/capstone-readiness items. No slot under the canonical table; harvest as an optional ungraded self-check or as CSC-289 wk1 Traject… |
| `pm-materials/PM-Integration-CTS-285.md` | HARVEST | instructor-side prerequisite decision | 258 lines from the older pipeline, subtitled 'AlgoCratic Futures'; duplicates 00-PM-Integration-Overview. Its value is the explicit 'Building on CSC-113 (bas… |
| `assignments/Week_05_Assignment_Sprint_1_System_Design.md` | KEEP | CTS-285 wk5–6 (75 pts) | Only fully self-consistent early file: header 75, rubric 25+15+15+10+10 = 75 (+5 retro bonus). Fix line 24's '40% technical / 35% process / 25% communication… |
| `assignments/Week_07_Assignment_Sprint_2_Implementation_Facilitation.md` | KEEP | CTS-285 wk7–8 (100 pts) | Header 100 = rubric 100; internally consistent and the best-aligned file in the tree. Dataman noun swap only. |
| `assignments/Week_09_Assignment_Sprint_3_Development_Code_Review.md` | KEEP | CTS-285 wk9–10 (100 pts) | Header 100 = rubric 100. Fold 2–3 ADRs into the existing Part 3/4 with no point change; peer-review mechanics (give 15/receive 10/respond 5) need shared-org … |
| `assignments/Week_11_Assignment_Risk_Mitigation_QA.md` | KEEP | CTS-285 wk11 (50 pts) | Header 50 = rubric 50; consistent but thin (101 lines) — expand to weeks-1–7 depth using the struggle-pattern template. |
| `planning-sheets/Exit_Ticket_Template.md` | KEEP | CTS-285 all weeks (RSI mechanism) | 336 lines, real. This is the cheapest federal RSI evidence in the tree and must survive audit retirement; names 'Andrew' inline (fine, OOC register). Not pat… |
| `reference-materials/SDLC_QUICK_REFERENCE.md` | KEEP | CTS-285 all weeks (reference) | 934 lines of copy/paste templates and decision trees; largest surviving asset. Skin/naming pass only — the plan lists this as missing. |
| `reference-materials/TROUBLESHOOTING_GUIDE.md` | KEEP | CTS-285 all weeks (reference) | 1,075 lines, the single largest file in the tree; 40+ problem/cause/solution entries. Pure win — skin pass only. |
| `MATERIALS_INDEX.md` | RETIRE | n/a — regenerate net-new from tree (task 2.5) | Self-contradicting fiction: same files listed as both Complete and In Progress; line counts wrong for every file checked (W1 385 vs 319, W5 725 vs 522, READM… |
| `assignments/Week_15_Assignment_Final_Integration_Presentation_Prep.md` | RETIRE | n/a — wk15 rebuilt net-new (40 pts) | Header 40 = rubric 40 (coincidentally matches the new wk15 value). Content is solo final-integration, incompatible with the wireframes/GREY-consult module; n… |
| `audits/COURSEFORGE_AUDIT_CTS285.md` | RETIRE | n/a — deprecation header per QM_Retirement_Note | Same-day-generated self-audit scoring 94/100; asserts 'AlgoCratic theme optional (doesn't overwhelm content)' as a positive finding — it is a carrier of the … |
| `audits/QM_AUDIT_CTS285.md` | RETIRE | n/a — deprecation header per QM_Retirement_Note | Cites a nonexistent 'QM Higher Education Rubric 8th Edition', scores 96/100 with 'Meets Standards 22/22', and is signed 'Auditor: Angela Westmoreland' on wor… |
| `audits/RSI_AUDIT_CTS285.md` | RETIRE | n/a — deprecation header, but see finding | CRITICAL: this file's RSI means 'Rubric-Syllabus-Instruction Alignment', NOT federal Regular & Substantive Interaction. It contains zero interaction-cadence … |

## `sources/uv-289/` — 39 files

| Origin path (rel) | Verdict | Target 26FA slot | Note |
|---|---|---|---|
| `COURSEMAP-CANONICAL.md` | ADAPT | CSC-289 P4 spine (merge base) | ADR-001 §2 names this the numbering + point shell (M1-8, 1600 pts, 60/40); adapt in the single spine session — but it is self-inconsistent (980/620 vs its ow… |
| `GITHUB-PROJECT-BOARD-SETUP.md` | ADAPT | CSC-289 P4 wk1 (with the GREEN Trajectory Check) | Board setup is exactly what ADR-001 §3 wk1 needs (backlog -> GitHub Issues + board). Board columns are graded answers per NAMING_CANON — its Backlog/To Do/In… |
| `INSTRUCTOR-ACTION-PLAN-WEEKS-9-16.md` | ADAPT | CSC-289 P4 instructor guide M6-M8 | Third required doc in the ADR-001 spine session; week-by-week playbook is reusable but is hard-dated to the Spring-2026 calendar ('Week of March 10, 2026'), … |
| `MODULE-ARCHITECTURE-DEVELOPMENT-PHASE.md` | ADAPT | CSC-289 P4 spine (team content donor) | ADR-001 §2 names this the source of team content, role rotation (Dev->SM->QA->self-organized), Claude Code scaffolding, and individual-accountability instrum… |
| `README.md` | ADAPT | CSC-289 P4 spine (rebuild last) | Front door. Currently mixes shells (M01-A1/A2 at 50+50 = the 1000-pt Week-1 figure, not the canonical 160) and advertises the dead GRD weeks 2-8. Per Rule 1 … |
| `assignments/Week_01_Red_Clearance_Recertification.md` | ADAPT | CSC-289 P4 wk1 GREEN Trajectory Check | THE solo re-ideation material (1108 lines: charter, WBS, backlog, roadmap templates at 100 pts). ADR-001 §3 rewrites create->harden; ADR-001 fallback explici… |
| `assignments/Week_02-05_Sprints_1-2.md` | ADAPT | CSC-289 P4 M2-M3 | Sprints 1-2 execution at 100 pts (50/sprint) on the retired 1000-pt shell; the sprint cycle content is sound but needs the canonical point shell, team charte… |
| `assignments/Week_16_Final_Delivery_Process_Portfolio.md` | ADAPT | CSC-289 P4 M8 | 175 pts (M08-A1 100 + M08-A2 75) matches COURSEMAP-CANONICAL's M8 Apply exactly — one of the few point-clean assignments. Strongest team signal in assignment… |
| `canvas-html/Module_01_Canvas_Page.html` | ADAPT | CSC-289 P4 wk1 Canvas | Canvas surface of Module 1; states '160 points total' consistent with COURSEMAP-CANONICAL, but titled 'Red Clearance Recertification' and carries Sacred Flow… |
| `canvas-html/Module_02_Canvas_Page.html` | ADAPT | CSC-289 P4 M2 Canvas | '100 points total' matches COURSEMAP-CANONICAL M2. Regenerate after the spine merge; carries Sacred Flow and the GRD Weeks 2-3 design-discovery framing. |
| `canvas-html/Module_03_Canvas_Page.html` | ADAPT | CSC-289 P4 M3 Canvas | '100 points total' matches canonical M3. Carries Sacred Flow; its whole subject (design brief preparation, wks 4-5) is contingent on the renegotiated GRD tim… |
| `canvas-html/Module_04_Canvas_Page.html` | ADAPT | CSC-289 P4 M4 Canvas | '130 points total' matches canonical M4. Strongest team signal of the Canvas set (15 hits) and no Sacred Flow occurrence flagged only because it is the desig… |
| `canvas-html/Module_05_Canvas_Page.html` | ADAPT | CSC-289 P4 M5 Canvas | No stated module total (canonical says M5 = 165 pts; page shows only section subtotals 110/30/etc.) — the one Canvas page whose arithmetic cannot be verified… |
| `canvas-html/Module_06_Canvas_Page.html` | ADAPT | CSC-289 P4 M6 Canvas | Titled 'Module 6: Sprints 5-6 — Solo Development' and spans wks 9-11, encoding both the solo framing ADR-001 §1 overturns and the 1-week Sprint 6 ADR-001 §2 … |
| `canvas-html/Module_07_Canvas_Page.html` | ADAPT | CSC-289 P4 M7 Canvas | Titled 'Sprint 7 — Polish, Edge Cases, Deployment' spanning wks 12-14, i.e. the 3-week sprint ADR-001 §2 replaces with M7 = wks 13-14. No stated module total… |
| `canvas-html/Module_08_Canvas_Page.html` | ADAPT | CSC-289 P4 M8 Canvas | Weeks 15-16 band already matches ADR-001 §2's M8; no stated module total against canonical's 250 pts, and it carries Sacred Flow. Least-damaged Canvas page o… |
| `knowledge-checks/Module_01_Entry_Ticket.md` | ADAPT | CSC-289 P4 wk1 GREEN Trajectory Check | Q1 is a graded 'correct order of the Sacred Flow workflow' item whose keyed answer (Issue, Branch, Code, PR, Review, Merge) is NOT the Trusted Workflow defin… |
| `knowledge-checks/Module_02_Entry_Ticket.md` | ADAPT | CSC-289 P4 M2 | Sprint-planning readiness quiz. Q1's keyed answer is explicitly built on 'You are now working solo in CSC-289 (no team)' — a graded item that directly contra… |
| `rubrics/Cross-Team-Collaboration-Rubric.md` | ADAPT | CTS-285 wk15 + CSC-289 P4 | 75 pts across M04-A2/M05-A2/M05-A3, keyed to the COURSEMAP-CANONICAL numbering so it survives the merge arithmetically; the three components must be re-ancho… |
| `rubrics/Process-Portfolio-Rubric.md` | ADAPT | CSC-289 P4 M8 | 75 pts summing correctly (20+20+20+15) and keyed to M08-A2 on the canonical shell; assumes 8 sprint folders, which only holds if the clean 2-week cadence fro… |
| `rubrics/Red-Clearance-Rubric.md` | ADAPT | CSC-289 P4 wk1 GREEN Trajectory Check | 160-pt Learn\|Practice\|Apply\|Assess shell and the pass/fail gate mechanic are retained per ADR-001 §3; criteria text must convert from solo ideation to tea… |
| `rubrics/Sprint-Process-Rubric.md` | ADAPT | CSC-289 P4 M2-M8 | 50 pts/sprint summing correctly (10+10+15+10+5), applied to M02-A1 through M08-A1 — the workhorse rubric. Needs team conversion (capacity math, role rotation… |
| `safe-to-fail/Process-Over-Perfection-Manifesto.md` | ADAPT | CSC-289 P4 (course-wide) | Philosophy doc pairing with the 60/40 split; carries Sacred Flow and solo-voiced examples ('I estimated logo integration at 3 points'). Also a voice-layer de… |
| `INSTRUCTOR-GUIDE-2WEEK-SPRINTS.md` | HARVEST | CSC-289 P4 instructor guide | ADR-001 Housekeeping orders this ARCHIVED with a deprecation header — but it is also the only doc describing the clean 2-week cadence ADR-001 §2 adopts, so h… |
| `assignments/Week_06_Design_Brief_Presentation.md` | HARVEST | CTS-285 wk15 | 25-pt design-brief presentation to GRD-242; the presentation structure and reflection prompts harvest into CTS-285 wk15, but the assignment as scheduled (CSC… |
| `assignments/Week_07_Design_Feedback_Iteration.md` | HARVEST | CTS-285 wk15-16 / GRD consult | Structured asset-evaluation framework and professional-feedback protocol are the reusable core; the CSC-289 wk7 iteration-cycle scheduling is dead. Solo-voic… |
| `assignments/Week_08_Design_Asset_Integration.md` | HARVEST | CSC-289 P4 (integration sprint, TBD week) | Integration PRs, acceptance testing, designer attribution — genuinely useful once GRD deliverables are redefined, but 668 lines built on the assumption asset… |
| `audits/RSI_AUDIT_CSC289.md` | HARVEST | CSC-289 P4 RSI compliance | RSI survives QM retirement (federal, 34 CFR 600.2, not QM) so the touchpoint architecture harvests — but ADR-001 requires RSI touchpoints stay PER-STUDENT un… |
| `knowledge-checks/Module_03_Entry_Ticket.md` | HARVEST | CTS-285 wk15 | Design-brief readiness quiz; the only file in the tree with zero team/solo pronoun signal, so it ports cleanly. Its subject (writing a brief for a non-techni… |
| `knowledge-checks/Module_04_Entry_Ticket.md` | HARVEST | CTS-285 wk15-16 | Cross-team dependency-management quiz (blocked-story handling etc.); good items, but tied to a Sprint-3/GRD sequence that ADR-001 dissolves. Board-column ans… |
| `pm-materials/PM-Integration-CTS-289.md` | HARVEST | CSC-289 P4 (entry-expectations section) | The 'students arrive with' skill inventory is directly useful for sizing the GREEN Trajectory Check, but it is stale: claims cross-team collab runs 'Weeks 1-… |
| `safe-to-fail/Failure-Documentation-Template.md` | KEEP | CSC-289 P4 (course-wide) | Cleanest file in the tree: no retired naming, no Sacred Flow, no module/point coupling, and its risk-register framing feeds ADR-001's staffing-change entry. … |
| `activities/Claude_Code_Onboarding_Sacred_Flow.md` | RELOCATE | CSC-289 P4 wk1 leveling/recert lab | ADR-001 §4 relocates this from wk9 to Week 1. Content (Flask-login toy project, prompt log, 25-pt rubric) is the single most portable asset in the tree; file… |
| `collaboration-materials/Design-Brief-Template.md` | RELOCATE | CTS-285 wk15 | Moves FORWARD into CTS-285 wk15 as the design-brief draft in the handoff package. 444 lines incl. a full worked StudyFlow example; needs solo->team voicing (… |
| `collaboration-materials/GRD-242-Integration-Overview.md` | RELOCATE | CTS-285 wk15-16 + GRD renegotiation | The client-developer collaboration model doc; the roles/responsibilities halves are what CTS-285 wks 15-16 need, but the whole 'Weeks 2-8 of CSC-289' window … |
| `COURSEMAP.md` | RETIRE | n/a (archive with deprecation header) | v1.0, 1000-pt shell, no Learn\|Practice\|Apply\|Assess. ADR-001 Housekeeping explicitly names it for archival; COURSEMAP-CANONICAL already marks it supersede… |
| `CTS-289-COURSE-SUMMARY.md` | RETIRE | n/a (archive with deprecation header) | Named for archival in ADR-001 Housekeeping. Fourth incompatible shell: 4 CLOs, 1,625 pts, 6 sprints, Modules 1-2 for wk1, GRD window at 'Weeks 1-8' not 2-8. … |
| `IMPLEMENTATION_GUIDE.md` | RETIRE | n/a | Dated 2026-01-20, states 'Total Points: 1000' and describes a file structure at a path that no longer exists (/norris-dashboard/courses/CSC-289/). Pure metad… |
| `audits/QM_AUDIT_CSC289.md` | RETIRE | n/a | QM_Retirement_Note.md kills QM program-wide and ADR-001 Housekeeping orders QM references stripped. Independently untrustworthy: dated 2026-03-13 — the same … |

## `sources/legacy/` — 203 files

| Origin path (rel) | Verdict | Target 26FA slot | Note |
|---|---|---|---|
| `.claude/agents/kevin-github-algorithm.md` | ADAPT | 26FA repo tooling | GitHub process enforcer; encodes the workflow — verify its step list matches the canonical Trusted Workflow before reuse. |
| `.claude/agents/scrum-team-engineer.md` | ADAPT | 26FA repo tooling | Named agent scrum-team-engineer confirmed in .claude/agents/; mentions clearance colors — strip PRISM-conflicting tier language. |
| `26SP_Planning/26SP_Cross_Discipline_Protocol.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (373 lines). CSC 289 × GRD team topology + design↔dev exchange. Medium adaptation: reframe as 285 wk-15 GRD consult prep, not a live s… |
| `26SP_Planning/26SP_Platform_Project_Matrix.md` | ADAPT | CTS-285 wk13-16 | 285 lines. The engine×skin project menu wk-14 skin selection needs. This is the FULLER of the two forks (includes Week 1 Required Deliverables + Team Contrac… |
| `26SP_Planning/CTS_ProjectBriefs/CommerceTrackingAligned.md` | ADAPT | CTS-285 wk13-16 | 1685 lines / 61KB. Full aligned CTS brief. Large adaptation: contains 'Sacred Flow' (retired) x N and 16 'citizen' instances. |
| `26SP_Planning/CTS_ProjectBriefs/DataTrackingAligned.md` | ADAPT | CTS-285 wk13-16 | 1515 lines / 58KB. Aligned brief exists even though its terminology map is a BLOCKED stub — the two disagree about maturity. Contains 'Sacred Flow' and 16 'c… |
| `26SP_Planning/CTS_ProjectBriefs/RecommendationEngineAligned.md` | ADAPT | CTS-285 wk13-16 | 1593 lines / 63KB. Highest retired-term density in the repo: 26 'citizen' + 'Sacred Flow'. Budget a full skin pass. |
| `26SP_Planning/CTS_ProjectBriefs/TaskManagerAligned.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (672 lines / 23KB). Master plan §: distribute Parts 1–2 only at wk 13 (Parts 5–6 assume active sprint context). Contains 'Sacred Flow'… |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Engine_Brief_CommerceTracking.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (131 lines / 4.9KB). Small adaptation. Verified clean UTF-8 (an earlier iconv false-positive was a shell ioctl error, not encoding rot). |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Engine_Brief_DataTracking.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (131 lines / 4.9KB). Small adaptation; but its terminology map is a blocked stub, so this engine is the weakest of the four for studen… |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Engine_Brief_RecommendationEngine.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (144 lines / 5.5KB). Small adaptation. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Layer1_Shared_Libraries_Guide.md` | ADAPT | CTS-285 wk13-16 | 264 lines / 6.9KB. Layer-1 shared-library contract; presumes an active build, so wk-13 use is read-only orientation. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Platform_Architecture_Refined.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (338 lines / 14KB). The Layer 1/2/3 model with ASCII diagrams. Medium adaptation: presumes ORANGE competence (wk 13, never wk 1–2) and… |
| `26SP_Planning/DAY_1_ESSENTIALS.md` | ADAPT | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (167 lines, 5KB). Small adaptation but NOT verbatim: timing deixis is 'before first standup' / spring day 1 and misdirects at wk 13. C… |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/AF_PayComply_Aligned_base.md` | ADAPT | CTS-285 wk13-16 | 499 lines. ALIGNED BRIEF — present locally, contra master-plan risk #5. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/AF_PayComply_Aligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1013 lines. ALIGNED technical half; Parts 5–6 assume active sprint context. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Atlas_TravelExpensesAligned_base.md` | ADAPT | CTS-285 wk13-16 | 460 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Atlas_TravelExpensesAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 2149 lines / 88KB — one of the largest. Contains 'citizen'. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Bag_CollegeFinanceAligned_base.md` | ADAPT | CTS-285 wk13-16 | 286 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Bag_CollegeFinanceAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1113 lines. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/BudgetBossAligned_base.md` | ADAPT | CTS-285 wk13-16 | RISK #5 RESOLVED: the named 'BudgetBossAligned' EXISTS in this local clone — as this file (341 lines) plus the _technical sibling. There is no monolithic Bud… |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/BudgetBossAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 863 lines. Second half of the BudgetBoss aligned pair named in risk #5. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/PocketBack_ExpenseTrackerAligned_base.md` | ADAPT | CTS-285 wk13-16 | 764 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/PocketBack_ExpenseTrackerAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1446 lines. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Sprout_FamilyFinanceAligned_base.md` | ADAPT | CTS-285 wk13-16 | 1502 lines. ALIGNED BRIEF — present locally; unusually large 'base' half. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Sprout_FamilyFinanceAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 2354 lines / 82KB. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Trusty_ProjectExpenseTrackerAligned_base.md` | ADAPT | CTS-285 wk13-16 | 957 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Trusty_ProjectExpenseTrackerAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 2000 lines. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/AF_PreferenceOptimizerAligned_core.md` | ADAPT | CTS-285 wk13-16 | 1443 lines. ALIGNED BRIEF — present locally. Note this vertical uses '_core' where Financial/Task use '_base'. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/AF_PreferenceOptimizerAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1806 lines. ALIGNED technical half; 5 'citizen'. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/BookmarkAligned_core.md` | ADAPT | CTS-285 wk13-16 | 735 lines. ALIGNED BRIEF — present locally; the split-format version. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/BookmarkAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1150 lines. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/LetsEatAligned_core.md` | ADAPT | CTS-285 wk13-16 | 520 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/LetsEatAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 598 lines. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/RideAligned_core.md` | ADAPT | CTS-285 wk13-16 | 256 lines. ALIGNED BRIEF — present locally; thinnest aligned pair in the set. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/RideAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 429 lines. ALIGNED technical half; noticeably underbuilt vs siblings. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/AF_TeamFlowAligned.md` | ADAPT | CTS-285 wk13-16 | 2278 lines. ALIGNED BRIEF — present locally (monolithic format, no split sibling). Contains 'EventPro' + 3 'citizen'. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/EventFlowAligned.md` | ADAPT | CTS-285 wk13-16 | 2954 lines / 124KB — LARGEST file in the alignment cluster. ALIGNED BRIEF present locally. Still contains the retired 'EventPro' form it was renamed from. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/FamilyHubAligned.md` | ADAPT | CTS-285 wk13-16 | 2431 lines. ALIGNED BRIEF — present locally. Best-supported option (brief + aligned + 5 wireframes + terminology-map column). |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/FreelanceFlowAligned_base.md` | ADAPT | CTS-285 wk13-16 | 1459 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/FreelanceFlowAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 1219 lines. ALIGNED technical half; contains 'EventPro'. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/RenovateRightAligned_base.md` | ADAPT | CTS-285 wk13-16 | 1601 lines. ALIGNED BRIEF — present locally. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/RenovateRightAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 3171 lines — highest line count in the repo. ALIGNED technical half. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/StudyStreamAligned_base.md` | ADAPT | CTS-285 wk13-16 | 1837 lines / 108KB. ALIGNED BRIEF — present locally. Strongest candidate for the wk-14 worked example (student audience matches the class). |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/StudyStreamAligned_technical.md` | ADAPT | CTS-285 wk13-16 | 2689 lines. ALIGNED technical half. |
| `26SP_Planning/Terminology_Maps/RecommendationEngine_TerminologyMap.md` | ADAPT | CTS-285 wk13-16 | 246 lines, v1.0 'Active - GRD Briefs Received'. Full matrix BUT has NO 'Kickoff Exercise Notes' section — must be written to match TaskEngine/Commerce before… |
| `26SP_Planning/UNDERGROUND_CAPSTONE_SURVIVAL_GUIDE.md` | ADAPT | CTS-285 wk13-16 | 1481 lines, largest voice asset in the repo. Underground layer — per CLAUDE.md rule 3 NEVER re-voice; adapt by excision/re-scoping only. Contains the sole in… |
| `26SP_Planning/alignment_meetings/All_White_Labels_Master_Reference.md` | ADAPT | CTS-285 wk13-16 | 119 lines. Consolidated skin roster across engines; good wk-14 selection handout. Contains retired 'EventPro'. |
| `AGENT_DEPLOYMENT_ULTRACODE.md` | ADAPT | 26FA repo tooling | 226 lines. Multi-agent orchestration guide; uses 'The Trusted Flow™ (Issue → Branch → Code → PR → Review → Merge)' — 6 steps, NOT the canonical 7-step Truste… |
| `artifacts/ISSUE_TEMPLATE.md` | ADAPT | 26FA repo tooling | 232 lines. Assignment-creation issue template keyed to clearance levels; retarget to master-plan task IDs per CLAUDE_SUPPLEMENTARY Rule 4. |
| `artifacts/WORKFLOW_GUIDE.md` | ADAPT | 26FA repo tooling | 446 lines. How to drive Claude Code from GitHub issues; overlaps AGENT_DEPLOYMENT_ULTRACODE. Merge the two, normalize to the 7-step Trusted Workflow. |
| `.gitignore` | HARVEST | n/a | 28 bytes; copy the .DS_Store rule only. |
| `26SP_Planning/CTS_ProjectBriefs/Biometric_HealthTracker.md` | HARVEST | n/a | 21-line stub (2.4KB). Concept only; no Aligned counterpart and no engine brief exists for it. |
| `26SP_Planning/CTS_ProjectBriefs/FinacialTracker_overview.md` | HARVEST | n/a | 23-line stub; filename misspelled ('Finacial'). Only Financial-engine artifact at this level. |
| `26SP_Planning/CTS_ProjectBriefs/RecommendationEngine.md` | HARVEST | n/a | 28-line stub superseded by RecommendationEngineAligned.md. |
| `26SP_Planning/CTS_ProjectBriefs/TaskManagement.md` | HARVEST | n/a | 461 lines; earliest Task platform brief, superseded twice (revision1, then Aligned). |
| `26SP_Planning/CTS_ProjectBriefs/alignment/Gap_Analysis_Report.md` | HARVEST | n/a | 190 lines, Dec 30 2025. Its own finding is load-bearing: 'Task Engine is fully specified while Commerce, Recommendation, and Data Tracking engines have only … |
| `26SP_Planning/CTS_ProjectBriefs/alignment/README.md` | HARVEST | n/a | 20-line folder index; metadata layer, do not trust. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/Response_to_GRAY_Financial_Tracking.md` | HARVEST | n/a | 153 lines; cross-faculty reply, partial substitute for the absent Financial engine brief. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/files/GRAY_Input_Financial_Tracking.md` | HARVEST | n/a | 97 lines of raw design-faculty input; source material, not deliverable. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/files/Instance_Setup_Guide.md` | HARVEST | n/a | 144 lines; how to stand up a Claude instance for alignment work. Superseded by this repo's CLAUDE_SUPPLEMENTARY. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/FitCore.md` | HARVEST | GRD-242 reference | 253 lines. Biometrics skin; no engine brief and no aligned counterpart exist for this vertical. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/MoodSync.md` | HARVEST | GRD-242 reference | 254 lines. The satirical Biometrics skin named in the DataTracking terminology stub as the AlgoCratic variant. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/Ora_WomensWellness.md` | HARVEST | GRD-242 reference | 405 lines; no aligned counterpart. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/PetMetrix.md` | HARVEST | GRD-242 reference | 332 lines; no aligned counterpart. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/SleepSync.md` | HARVEST | GRD-242 reference | 259 lines; no aligned counterpart. |
| `26SP_Planning/GRD_CreativeBriefs/Biometrics_HealthTracker/VitalWatch.md` | HARVEST | GRD-242 reference | 307 lines; no aligned counterpart. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/Pantry.md` | HARVEST | GRD-242 reference | 386 lines. Base brief with NO aligned counterpart — not selectable at wk 14 without new alignment work. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/StreamPix.md` | HARVEST | GRD-242 reference | 425 lines. Base brief with NO aligned counterpart. |
| `26SP_Planning/Terminology_Maps/DataTrackingEngine_TerminologyMap.md` | HARVEST | n/a | 72-line PLACEHOLDER v0.1, explicitly 'Status: BLOCKED - Awaiting GRD Creative Briefs from GRAY (See Issue #7)'. Not a usable map; harvest the expected-skins … |
| `26SP_Planning/alignment_meetings/GRAY_Meeting_Prep_Creative_Briefs.md` | HARVEST | n/a | 169 lines of faculty meeting prep. Note: 'GRAY' here means the design-faculty clearance in-fiction, not the pedagogy stack — but the term is a retired form u… |
| `26SP_Planning/alignment_meetings/Gap_Analysis_Creative_Briefs.md` | HARVEST | n/a | 266 lines of Dec-2025 process state; harvest the brief-completeness checklist only. |
| `26SP_Planning/alignment_meetings/README.md` | HARVEST | n/a | 158-line index of the meetings folder; per §6.3-1 do not trust its claims, regenerate. |
| `26SP_Planning/alignment_meetings/response_financial_tracker_engine.md` | HARVEST | n/a | 151 lines. Faculty reply thread standing in for the missing Financial Engine brief — harvest as the seed for that gap. |
| `CLAUDE.md` | HARVEST | n/a | 964-line legacy project guide (Nov 2025). Superseded by storming CLAUDE.md; harvest assignment-hour norms (line 577) and the RED/ORANGE workload table only. |
| `README.md` | HARVEST | n/a | 343-line repo README written for the retired one-course INFRARED→GREEN model; harvest framing prose, not structure. |
| `_tracking/course-dev-tracking-requirements.md` | HARVEST | n/a | 448 lines; the manifest-schema rationale. Harvest schema ideas only. |
| `_tracking/course-manifest-template.yaml` | HARVEST | n/a | 161 lines; generic manifest skeleton, the only reusable piece of _tracking. |
| `agents/README.md` | HARVEST | n/a | 42-line roster table + explanation that these files hold ORIGINAL + SELF-CRITIQUE + REVISED prompts and were NEVER written back to the live defs. |
| `agents/clive-prompt-strategist.md` | HARVEST | n/a | 154 lines (vs 64 live). Doc-form; DIFFERS from .claude/agents version. |
| `agents/kevin-github-algorithm.md` | HARVEST | n/a | 157 lines (vs 59 live). Named agent Kevin — exists in BOTH agents/ and .claude/agents/, and the two differ. |
| `agents/linx-wordsmith.md` | HARVEST | n/a | 77 lines (vs 27 live). Named agent Linx — exists in BOTH dirs; contents differ. |
| `agents/liza-creative-companion.md` | HARVEST | n/a | 99 lines (vs 33 live); differs from live def. |
| `agents/product-acceptance-tester.md` | HARVEST | n/a | 119 lines (vs 55 live); differs from live def. |
| `agents/product-architect-advisor.md` | HARVEST | n/a | 141 lines (vs 43 live); differs from live def. |
| `agents/scrum-architect-owner.md` | HARVEST | n/a | 96 lines (vs 43 live); differs from live def. |
| `agents/scrum-project-manager.md` | HARVEST | n/a | 75 lines (vs 25 live); differs from live def. |
| `agents/scrum-team-engineer.md` | HARVEST | n/a | 111 lines (vs 47 live). Named agent scrum-team-engineer — exists in BOTH dirs; contents differ. |
| `agents/test-engineer.md` | HARVEST | n/a | 114 lines (vs 47 live); differs from live def. |
| `artifacts/# legacy_algocratic_2025_project_instructions.md` | HARVEST | n/a | 179 lines. Leading '#' + spaces in filename breaks shell/link tooling. Contains the 'dynamic tension between Here to Help and satirizing workplace' design ra… |
| `project_notes/# Task Management Platform - Capstone.md` | HARVEST | n/a | 341 lines, self-labeled 'Content is user-generated and unverified.' Earliest Task platform draft; leading '#' in filename breaks tooling. Contains 'EventPro'. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Crunchin_Leaves_Corn Maze.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 brief, binary .docx, foldername says 'NeedToUpdate'. Space in filename. Not skinnable in-repo. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/FitQuest_Fitness.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary, needs conversion before any use. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Furiends_PetCo.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/GlowLux_Cosmetics.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/HapiBites_HealthySweets.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/PackagesOfCare.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Revel_PartyTruck.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Solved–DecisionAssist.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 brief; filename contains a U+2013 en dash (git shows it octal-escaped) — quote paths in any script. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/SunValley_Farm_ArtisanMarket.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Vivid_HairCare.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Wilder_Sons-BeardEssentials.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/WonderWorld_Box.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Xperion_Gaming.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/242_Client_DesignBriefs_NeedToUpdate_Campaigns/Zestiis_MentalWellness.docx` | HARVEST | GRD-242 reference | Prior-year GRD-242 campaign brief; binary. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Basil&Stone_Soaps.docx` | HARVEST | GRD-242 reference | Brand-campaign brief; byte-identical (27638 B) to the GRD_Brand_CreativeBriefs_2025 copy — duplicated set. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Belardi_Cookware.docx` | HARVEST | GRD-242 reference | Brand-campaign brief; one of 5 unique to this folder (no 2025 twin). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Brewscape_Coffee.docx` | HARVEST | GRD-242 reference | Brand-campaign brief; duplicate of the 2025-folder copy (27451 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/CluckN’Roll_FoodTruck.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy; filename has U+2019 curly apostrophe — git octal-escapes it, breaks naive path handling. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Ecolibrium_CleaningProducts.docx` | HARVEST | GRD-242 reference | Brand-campaign brief; duplicate of 2025-folder copy (23171 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/FuegoFushion_HotSauce.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (25964 B); note the misspelling 'Fushion' in both. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Fuze_PersonalFragrance.docx` | HARVEST | GRD-242 reference | Unique to this folder (no 2025 twin). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/GlowCo_ScentedCandles_Affordable.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (24741 B); paired with Lumiere_Noire as a price-tier contrast exercise. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Lumiere_Noire_ScentedCandles_Luxury.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (24863 B); luxury half of the candle price-tier pair. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/LuminaGlow_Skincare.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (28977 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/MoneyMinder_PersonalFinanceTechnology.docx` | HARVEST | GRD-242 reference | Unique to this folder; the only fintech brief here — closest .docx analogue to the FinancialTracker vertical. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/SteepStreet_Tea.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (24844 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/SudsyTales_HandcraftedSoaps.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (24814 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/SummitHarvest_OrganicPetFood.docx` | HARVEST | GRD-242 reference | Unique to this folder (no 2025 twin). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/VitalitySync_FitnessTracker.docx` | HARVEST | GRD-242 reference | Unique to this folder; nearest .docx analogue to the Biometrics vertical. |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/Vytl_EnergyDrinks.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (27733 B). |
| `project_notes/creative_briefs/BriefsWithCampaignOptions/New_BrandCampaign_Briefs/ZenScape_EssentialOils.docx` | HARVEST | GRD-242 reference | Duplicate of 2025 copy (23090 B). |
| `project_notes/creative_briefs/README.md` | HARVEST | GRD-242 reference | 110 bytes, 1 line: 'this folder contains a previous years's creative briefs / it is provided for reference to white label products'. Sole provenance for all … |
| `project_notes/tmp_capstone_fragment.md` | HARVEST | n/a | 58-line scratch fragment ('I can white label just about anything for this'); origin note for the white-label premise. |
| `.claude/agents/clive-prompt-strategist.md` | KEEP | 26FA repo tooling | Live deployable agent def (YAML frontmatter, model: opus); prompt-strategy agent, course-agnostic. |
| `.claude/agents/linx-wordsmith.md` | KEEP | 26FA repo tooling | Named agent Linx confirmed present in .claude/agents/ (27 lines, model sonnet); voice-editing agent. |
| `.claude/agents/liza-creative-companion.md` | KEEP | 26FA repo tooling | Creative ideation agent; course-agnostic. |
| `.claude/agents/product-acceptance-tester.md` | KEEP | 26FA repo tooling | Acceptance-testing agent; usable as a wk-7/8 demo of AI reviewer roles. |
| `.claude/agents/product-architect-advisor.md` | KEEP | 26FA repo tooling | Architecture advisor; opus-tier. |
| `.claude/agents/scrum-architect-owner.md` | KEEP | 26FA repo tooling | Product-owner agent; useful for CTS-285 backlog seeding. |
| `.claude/agents/scrum-project-manager.md` | KEEP | 26FA repo tooling | Scrum-master agent. |
| `.claude/agents/test-engineer.md` | KEEP | 26FA repo tooling | Test-authoring agent. |
| `26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Engine_Brief_TaskEngine.md` | KEEP | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (135 lines / 5KB). The most mature engine brief; clean structure (capabilities table, 'the insight' framing). Only debt is 'EventPro'.… |
| `26SP_Planning/CTS_ProjectBriefs/alignment/files/CLAUDE_CreativeBriefDev.md` | KEEP | n/a (executor reference) | 367 lines. The generation contract used to produce the Aligned briefs; needed to produce any NEW aligned brief consistently. |
| `26SP_Planning/CTS_ProjectBriefs/wireframes/familyhub_calendarview.png` | KEEP | CTS-285 wk13-16 | 310KB wireframe. Only wireframe set in the repo, and FamilyHub-only — not StudyStream. |
| `26SP_Planning/CTS_ProjectBriefs/wireframes/familyhub_dash.png` | KEEP | CTS-285 wk13-16 | 331KB wireframe (dashboard). |
| `26SP_Planning/CTS_ProjectBriefs/wireframes/familyhub_landing.png` | KEEP | CTS-285 wk13-16 | 216KB wireframe (landing). |
| `26SP_Planning/CTS_ProjectBriefs/wireframes/familyhub_overview.png` | KEEP | CTS-285 wk13-16 | 400KB wireframe (overview). |
| `26SP_Planning/CTS_ProjectBriefs/wireframes/familyhub_wireframe_newtask.png` | KEEP | CTS-285 wk13-16 | 166KB wireframe (new-task flow). |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/AF_PayComply.md` | KEEP | GRD-242 reference | 563 lines. Base GRD brief (AlgoCratic in-fiction skin) for the Financial vertical. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Atlas_TravelExpenses.md` | KEEP | GRD-242 reference | 459 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Bag_CollegeFinance.md` | KEEP | GRD-242 reference | 244 lines. Base GRD brief; student-audience fit makes it a strong wk-14 option. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/BudgetBoss.md` | KEEP | GRD-242 reference | 260 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/PocketBack_ExpenseTracker.md` | KEEP | GRD-242 reference | 389 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Sprout_FamilyFinance.md` | KEEP | GRD-242 reference | 238 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/FinancialTracker/Trusty_projectExpenseTracker.md` | KEEP | GRD-242 reference | 449 lines. Base GRD brief; note lowercase 'project' in filename vs the Aligned siblings' 'Project' — case-only mismatch is a link-check hazard. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/AF_PreferenceOptimizer.md` | KEEP | GRD-242 reference | 1417 lines. AlgoCratic in-fiction skin; 11 'citizen' — heaviest satire register of the base briefs. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/Bookmark.md` | KEEP | GRD-242 reference | 364 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/LetsEat.md` | KEEP | GRD-242 reference | 389 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/Ride.md` | KEEP | GRD-242 reference | 433 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/STYLE_INTENT_DIGEST.md` | KEEP | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (315 lines / 10KB). Voice/intent ruler for brief authoring ('authentic over performative', explicit ❌/✅ pairs). Course-neutral, no ret… |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/AF_TeamFlow.md` | KEEP | GRD-242 reference | 478 lines. AlgoCratic in-fiction Task skin. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/EventFlow.md` | KEEP | GRD-242 reference | 979 lines. Base GRD brief; the renamed successor to retired 'EventPro'. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/FamilyHub.md` | KEEP | GRD-242 reference | 859 lines. Base GRD brief; the ONLY skin with wireframes in the repo. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/FreelanceFlow.md` | KEEP | GRD-242 reference | 927 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/RenovateRight.md` | KEEP | GRD-242 reference | 1216 lines. Base GRD brief. |
| `26SP_Planning/GRD_CreativeBriefs/TaskManager/StudyStream.md` | KEEP | CTS-285 wk13-16 | 894 lines. The full StudyStream GRD brief — the long-form companion to the Sample_Creative_Brief_StudyStream exemplar. Both exist; do not confuse them. |
| `26SP_Planning/ProjectAlignment.md` | KEEP | n/a (executor reference) | CONFIRMED PRESENT (505 lines). Guide for Claude instances continuing alignment work; documents the Linx + scrum-team-engineer hybrid workflow. Status 2026-01… |
| `26SP_Planning/Terminology_Maps/CommerceEngine_TerminologyMap.md` | KEEP | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (275 lines). Full skin×term matrix AND a 'Kickoff Exercise Notes' section (line 254) — one of only two maps carrying the discovery exe… |
| `26SP_Planning/Terminology_Maps/TaskEngine_TerminologyMap.md` | KEEP | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (197 lines). THE kickoff discovery exercise: 6-skin × entity/priority/status matrix with the stated purpose 'enabling students to disc… |
| `26SP_Planning/alignment_meetings/Sample_Creative_Brief_StudyStream.md` | KEEP | CTS-285 wk13-16 | CROWN JEWEL, CONFIRMED (188 lines, 6.5KB). The StudyStream exemplar creative brief. Clean, generic, no retired terms, no clearance language. Smallest adaptat… |
| `26SP_Planning/alignment_meetings/Terminology_Map_Example.md` | KEEP | CTS-285 wk13-16 | 133 lines. Worked terminology-map example; pairs with the TaskEngine map for the kickoff discovery exercise. Contains 'EventPro' + 'citizen'. |
| `26SP_Planning/notebooklm/Character_Over_Commits.pdf` | KEEP | CSC-289 | 12.3 MB generated PDF asset. Binary — cannot be voice-checked or skinned; treat as fixed media or regenerate. |
| `26SP_Planning/notebooklm/The_Bug_Isn_t_In_The_Code.mp4` | KEEP | CSC-289 | 43.6 MB video — largest object in the repo and the reason a clone is heavy. Consider Git LFS or external hosting before any repo graduation. |
| `26SP_Planning/26SP_Database_Capstone_Integration.md` | RELOCATE | CSC-289 | 500 lines, DBA 289 × CSC 289 role definition; pure spring-capstone material sitting in the 285 repo. |
| `26SP_Planning/26SP_Uncertainty_Matrix.md` | RELOCATE | CSC-289 | 237 lines, 'LIVING DOCUMENT' last updated December 2024 — 19 months stale. Spring planning open-questions register. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Branding_Campaign_REVISED.md` | RELOCATE | GRD-242 / wk15 consult | 372 lines of GRD-242 workbook revision; belongs to the Jennifer Fisher consult track, not the 285 repo. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Digital_REVISED.md` | RELOCATE | GRD-242 / wk15 consult | 354 lines; GRD-242 workbook material. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Logo_REVISED.md` | RELOCATE | GRD-242 / wk15 consult | 308 lines; GRD-242 workbook material. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Multipage_REVISED.md` | RELOCATE | GRD-242 / wk15 consult | 402 lines; GRD-242 workbook material. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Packaging_NEW.md` | RELOCATE | GRD-242 / wk15 consult | 660 lines; net-new GRD-242 unit — the only 'NEW' rather than 'REVISED' file here. |
| `26SP_Planning/GRD_CreativeBriefs/workbook_edits/Print_Deliverables_REVISED.md` | RELOCATE | GRD-242 / wk15 consult | 482 lines; GRD-242 workbook material. |
| `26SP_Planning/notebooklm/26SP_Capstone_NotebookLM_Source.md` | RELOCATE | CSC-289 | 420 lines; NotebookLM source for CSC 289 orientation. Thesis ('process and communication determine success') is reusable prose if 285 wants it. |
| `presentation1.html` | RELOCATE | CSC-289 | 1287-line 'Spring 2026 Capstone Orientation' deck. Loads Google Fonts from CDN — will not render offline/in an artifact. |
| `.DS_Store` | RETIRE | n/a | macOS cruft, untracked; .gitignore already covers it going forward. |
| `.claude/settings.local.json` | RETIRE | n/a | Untracked local permission grants; machine-specific. |
| `26SP_Planning/26SP_Platform_Project_Matrix_1.md` | RETIRE | n/a | 249-line lossy near-duplicate of the above: missing ~37 lines (Week 1 Required Deliverables, Team Contract Must Include). Undated fork; delete, do not merge. |
| `26SP_Planning/CTS_ProjectBriefs/TaskManager-revision1.md` | RETIRE | n/a | 558 lines; intermediate revision superseded by TaskManagerAligned.md. Contains 'Sacred Flow' and 'EventPro'. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/BookmarkAligned.md` | RETIRE | n/a | 2357-line MONOLITH that coexists with BookmarkAligned_core + _technical. Two competing aligned versions of one product — pick the split pair, retire this. |
| `26SP_Planning/GRD_CreativeBriefs/RecommendationEngine/LetsEatAligned.md` | RETIRE | n/a | 2480-line MONOLITH duplicating LetsEatAligned_core + _technical. Same fork problem as BookmarkAligned.md. |
| `_tracking/algocratic_material_inventory.md` | RETIRE | n/a | 339 lines, 'Last Updated: December 2024'. Textbook §6.3-1 metadata-layer fiction: claims a Datamon spec that does not exist. Do not read as ground truth. |
| `_tracking/course-manifest-cts285.yaml` | RETIRE | n/a | 624 lines. Points to 'assignments/red/datamon/' and 'assignments/red/datamon/instructor-guide.md' — NEITHER PATH EXISTS. Clearance-keyed structure retired un… |
| `_tracking/cts285-development-status.md` | RETIRE | n/a | 414 lines. Claims 'Datamon Console Game 🟡 Concept' and lists it as an unbuilt 10-12 hour project; confirms nothing was ever authored. |
| `_tracking/sample-course-manifest-csc134.yaml` | RETIRE | n/a | 433 lines for CSC-134 — wrong course entirely; sample data. |
| `_tracking/sessionlogs/01_01_26_session_finish_batch2.md` | RETIRE | n/a | 33 lines of raw agent transcript incl. visible thinking; no durable content. |
| `artifacts/001-environment-setup-protocol.md` | RETIRE | n/a | 320 lines. '[Assignment] ... - INFRARED Clearance' — encodes the retired one-course clearance ladder; also carries 'Sacred Flow' and 'citizen'. Harvest the s… |
| `artifacts/CTS285_COURSE_OUTLINE.md` | RETIRE | n/a | 743 lines. RETIRED UNDER PRISM: 'Clearance Range: INFRARED → ORANGE (with YELLOW introduction)' inside ONE course. HARVEST TARGET: lines 168–185 are the ONLY… |
| `artifacts/PROJECT_STATUS.md` | RETIRE | n/a | 418 lines of Nov-2025 status fiction (§6.3-1 metadata layer). Its own line 243 is the load-bearing fact: 'Datamon Console Game (concept exists, needs full sp… |
| `artifacts/VISUAL_ROADMAP.md` | RETIRE | n/a | 485 lines. RETIRED UNDER PRISM: subtitle is literally '16-Week Journey from INFRARED to GREEN' in one course. NOTE: master plan flags this file as mojibake-a… |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/Basil&Stone_Soaps.docx` | RETIRE | n/a | Byte-identical duplicate of the BriefsWithCampaignOptions copy; keep one folder. |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/Brewscape_Coffee.docx` | RETIRE | n/a | Byte-identical duplicate (27451 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/CluckN’Roll_FoodTruck.docx` | RETIRE | n/a | Byte-identical duplicate (28237 B); curly-apostrophe filename. |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/Ecolibrium_CleaningProducts.docx` | RETIRE | n/a | Byte-identical duplicate (23171 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/FuegoFushion_HotSauce.docx` | RETIRE | n/a | Byte-identical duplicate (25964 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/GlowCo_ScentedCandles_Affordable.docx` | RETIRE | n/a | Byte-identical duplicate (24741 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/Lumiere_Noire_ScentedCandles_Luxury.docx` | RETIRE | n/a | Byte-identical duplicate (24863 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/LuminaGlow_Skincare.docx` | RETIRE | n/a | Byte-identical duplicate (28977 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/SteepStreet_Tea.docx` | RETIRE | n/a | Byte-identical duplicate (24844 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/SudsyTales_HandcraftedSoaps.docx` | RETIRE | n/a | Byte-identical duplicate (24814 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/Vytl_EnergyDrinks.docx` | RETIRE | n/a | Byte-identical duplicate (27733 B). |
| `project_notes/creative_briefs/GRD_Brand_CreativeBriefs_2025/ZenScape_EssentialOils.docx` | RETIRE | n/a | Byte-identical duplicate (23090 B). |
| `status_nov4_2025.md` | RETIRE | n/a | Raw pasted chat transcript ('Excellent! I've created...'); no durable content. |
| `26SP_Planning/DAY_1_ESSENTIALS.md__dup_guard` | UNKNOWN | n/a | IGNORE — placeholder row removed; DAY_1_ESSENTIALS is listed once above. No such file exists in the tree. |
