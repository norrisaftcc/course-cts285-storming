# 26FA Consolidation Master Plan — v1.1
## CTS-285 / CSC-289 — Material Assessment & Agent Execution Plan
*Prepared July 22, 2026 · AlgoCratic Futures™ / AlgoCratic Media pipeline consolidation*
*v1.1: QM pulled program-wide (UV in-house quality process replaces it, next semester earliest); RSI retained (federal compliance, not QM); SHODANN technical embodiment defined (Teacherbot + velocity bot); interleave map + agent intelligence added (§6); Phase 0 executed.*

---

## 0. Decisions Locked (this session)

| Decision | Ruling |
|---|---|
| Primary skin | **AlgoCratic Media** (content-creator frame, SHODANN, Creators/Channels). Classic startup skin → reference register; "community" layer added later for group-work internalization. |
| Clearance framing | **PRISM is canon.** The ladder spans the *program*, not one course. CTS-285 targets ORANGE (developer: owns a feature set under ambiguity). CSC-289 targets GREEN (shipping engineer: deployed product, job-ready pivot); team roles touch BLUE. In-character clearance material is a skin over PRISM. |
| CTS-285 spine | **Modernization of the student's chosen base is THE solo spine, weeks 1–12** (full SDLC, common project, grouped presentations of same at the end). Per **ADR-004** the two bases are **Dataman** (1977 physical calculator) and **DataMon** (virtual-pet reskin); instructor-provided exemplars use Dataman, and any item written single-basis must accept either "Dataman 2.0" or "DataMon 2.0". Weeks 13–16 = CSC-289 on-ramp: group formation, GREY design consults, user stories + wireframes for the Spring product. |
| CSC-289 premise | Cap I is the setup, Cap II is the payoff. First modules of 289 *recapitulate* the lifecycle with the team's own product — never re-ideate from scratch. |

---

## 1. State of the Material (assessment summary)

Four parallel assessments ran over: the legacy template repo, the UV-refresh CTS-285, the UV-refresh CSC-289, and the AlgoCratic Claude project (~62 docs). *(The per-repo counts originally quoted here — 36 / 29 / 28 — came from the same unreliable metadata layer as the phantom inventory below. Regenerated from the trees by task 0.8: legacy 200 surveyed / 164 ingested, UV-285 59 / 54, UV-289 39 / 32 — see `planning/INGESTION_MANIFEST.md`.)* Headline findings:

### Pipeline One — AlgoCratic legacy
- **The 26SP alignment cluster is the crown jewel and is load-bearing for weeks 13–16:** `Platform_Architecture_Refined.md` (3-layer skins/engines/libs model), engine briefs, terminology maps + kickoff discovery exercise, `STYLE_INTENT_DIGEST.md`, the StudyStream exemplar creative brief, `26SP_Cross_Discipline_Protocol.md` (its wireframe-share checkpoint *is* the wk 13–16 deliverable, moved earlier), and `DAY_1_ESSENTIALS.md` (team contract, four failure archetypes, Collaboration Minimum). Needs only S–M adaptation.
- **The old CTS-285 spine is dead.** Everything encoding INFRARED→GREEN inside one course (course outline, visual roadmap, manifest) is retired under PRISM — harvest fragments only (narrative arc, Marketing Sprint, emergency protocols).
- **~~Naming collision~~ → resolved by ADR-004:** the legacy week-5 creature-collection console game is the historical origin of **DataMon**, now an adopted second modernization basis (virtual-pet reskin); **Dataman** is the physical-calculator basis and the exemplar basis. Lowercase "Datamon" is retired as a live term. Two live spellings, the capital M load-bearing — every executor prompt must disambiguate.
- **Group-work leakage:** old outline puts team projects in weeks 3/7/10 — all move to wks 13–16 or convert to solo + peer review.
- The `26SP_Planning/` tree is CSC-289 material physically inside the 285 repo; consolidation relocates it rather than adapting it as 285 content.

### Pipeline Two — UV refresh, CTS-285
- **~60% of instructional content survives with mechanical adaptation.** Weeks 5–10 (the three sprints) survive nearly intact once re-pointed at Dataman — a common project actually *improves* peer code review. The 40/40/20 grading engine and role-rotation machinery transfer unchanged.
- **~~The points system is unshippable as-is~~ → normalized (1.0b + 1.0c, ADR-002):** the five inconsistent sources (COURSEMAP claims 700 / sums 750; README sums 800; assignment headers sum 775; internal rubrics ~2× headers on wks 2/3/4/6; three conflicting Sprint-1 breakdowns) are recorded in `drafts/cts285/points-normalization/CONFLICT_LEDGER.md`; all 10 draft assignment headers now read `X pts (Y% of 750)`. **Per ADR-002 the "rubric ~2× header" cases are not defects to fix** — only headers bind; sub-items are descriptive.
- **~~Phantom inventory~~ → Inventory reconciled (2026-07-24, against the ingested `sources/` tree; see #14):** the original claim — that 4 of 6 planning-sheet templates, 7 of 8 knowledge checks, 5 of 8 activities, all Canvas pages, the glossary and troubleshooting guide were missing — was itself unreliable metadata (the §6.3-1 irony, applied to this plan). **Verified: all exist with real content** — 6/6 planning sheets, 8 knowledge checks (~10–12 KB ea), 6 activities (22–28 KB ea), 8 Canvas pages (~20 KB ea), and all three reference-materials. The one *real* gap was specific activity **handouts** the modules reference (stakeholder interview transcripts, role cards) — the transcripts are now supplied by **1.0a**; remaining checklists/role cards fold into 1.8. **Net effect: tasks 1.7 and 1.8 are 'adapt existing,' not 'author from scratch' — Phase 1 is smaller than originally sized.**
- **⚠ Audit exposure — resolved by policy:** the QM audit cites a nonexistent "QM 8th Edition," covers only General Standards 1–4 while claiming full certification, cites unverifiable evidence, and is *signed with Angela's name*. QM is now being pulled program-wide (the UV provider is moving to an in-house course quality process, available next semester at the earliest), so the remedy is: retire all audit files, strip QM references everywhere, and **preserve the RSI mechanisms** (exit-ticket cadence, weekly instructor-played stakeholder interviews) — RSI is federal distance-ed compliance (34 CFR § 600.2), not a QM artifact, and it's the course's cheapest compliance evidence.
- **Skin inversion is doctrinal, not cosmetic:** five-plus files teach "AlgoCratic is optional, earns zero credit, skip it," and week 1's only in-character insert is the old punitive-dystopia voice — the opposite of both the new-skin-primary decision and SHODANN's register.
- Instructor guide dead-ends after Module 3; weeks 11–16 are compressed-but-functional skeletons; cutting week 13 (deployment) silently orphans CLO4 / the CCL "installation" language unless a lightweight "Dataman ships" lands in week 12.

### Pipeline Two — UV refresh, CSC-289
- **Two unreconciled course designs share the folder:** `COURSEMAP-CANONICAL` (solo, 1,600 pts, modules 6–8, odd 1-wk/3-wk sprint cadence) vs `MODULE-ARCHITECTURE-DEVELOPMENT-PHASE` (team, modules 5–8, clean 2-week cadence). Neither survives unmodified. **Resolution: canonical's numbering/point-shell + MODULE-ARCH's team content and 2-week cadence** — the handoff decision (teams arrive formed) settles the solo/team fork in favor of teams.
- **Week 1 vaporizes the handoff:** 1,100 lines of solo re-ideation, "write 20+ stories from scratch," charter hardcoding "Solo developer (me)," GRD designer "TBD until week 6." Rewrite as a **reactivation audit** ("GREEN Trajectory Check"): import the 285 backlog into Issues, re-estimate against a 16-week roadmap, team working agreement, risk register seeded from 285 assumptions, GRD consult status report. The pass/fail gate mechanic survives; "create" becomes "harden what you brought." Also fixes the PRISM collision (a "Red Clearance Recertification" demotes ORANGE-tier arrivals).
- **AI placement is backwards:** Claude Code onboarding at week 9 while weeks 1–8 ignore AI contradicts the pipeline (SHODANN from day 1, Prompt Sovereignty earned in 285). CLAUDE.md + prompt logs start Sprint 1; the wk-9 lab becomes a week-1 leveling lab.
- **GRD-242 machinery is the strongest subsystem** (asset-format specs, WCAG-specific brief template, 3 graded milestones, escalation paths) but assumes week-6 *first contact* and 1-dev↔1-designer pairing, and GRD-side deliverables are still "(To be defined by Jennifer Fisher)" — an open human dependency since January.
- Weeks 9–15: genuinely designed *twice* in incompatible frames, deployable *zero* times. The merge is the gating task.
- Silver lining: the 289 base has **zero stale skin** — AlgoCratic Media applies as a uniform pass rather than an untangling.

### AlgoCratic Claude project (~62 docs)
- **Voice canon for executor agents** (give as style context with every writing task): ① New_Creator_Orientation_Guide (only Media-skin exemplar — SHODANN's voice, Trusted Workflow, the Trapezoid, XU), ② worldbuilding_guide, ③ GREY CLEARANCE BRIEFING, ④ Assignment Translation Guide (the wrap method), ⑤ RED Underground Survival Guide (underground register), ⑥ Hermeneutic Codex (advanced flavor only), ⑦ visual Style Guide — noting the Orientation Guide introduces a second print palette to reconcile.
- **Unique IP to canonize once and reuse everywhere:** FOBSS (3 docs, skin-agnostic), INSTRUCTOR_GROWTH_PROTOCOL (Calibration Ceremony, anchoring), GameFAQs walkthrough format, four failure archetypes (Ghost/Hero/Critic/Optimist), Collaboration Minimum (2 reviews / 1 ask / 1 offer), "C's Get Degrees" Day-1 deck, PBL research synthesis (accreditation ammunition), GitHub Education verification pitfalls.
- `career_outcomes_mapping.md` and `PRESENTATION_OUTLINE.md` are **proto-PRISM** — need only "across the program, not per course" language. Severe PRISM conflicts (one-course full ladder): VISUAL_ROADMAP, course_syllabus, TRAINING_MODULE_MANIFEST, Complete Overview → historical/rework.
- Ten doc paths are duplicated in the project — prune to newest.
- **~~⚠ The project's own custom instructions still describe the startup-skin growth-gamification era and the old tone-guide ladder.~~ → Rewritten.** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` is marked **ADOPTED** (Media skin, PRISM, current spine). The text exists in-repo; whether it has been pasted into the external project settings is unverified — see §6.3-12.
- SHODANN exists in exactly one document. Highest-priority expansion target: a SHODANN character bible before any mass skin pass.

---

## 2. The 26FA CTS-285 Spine (proposed)

**Weeks 1–12 — Dataman Modernization, solo, full SDLC** (PRISM: RED-verify → ORANGE)

| Wk | Module | Content | Source material |
|---|---|---|---|
| 1 | M1 Onboarding & Analysis | AlgoCratic Media orientation ("Your First Stream" Day-One checklist), env setup, **read the Dataman PDF manual like an analyst** → autograded document-analysis quiz (Angela's 10–12 LTI items: personas, user roles — no T/F, limited MC, no multi-answer/text) | Orientation Guide + UV Wk1 (rewritten) + legacy 001-setup harvested |
| 2 | M1 | Agile/Scrum foundations, paper simulation, GitHub board seeded from a **Dataman starter backlog** (project selection deleted) | UV Wk2 (rewritten) |
| 3–4 | M2 Requirements | Stakeholder analysis, personas, interviews → user stories, MoSCoW backlog — Dataman stakeholders per **ADR-003**'s graduated model — canned: parent + retro collector · **rehearsal**: teacher · **live** (RSI anchor): instructor-as-client | UV Wk3–4 (re-anchored) |
| 5–6 | M3 Sprint 1: Design | UML, ERD, wireframes, standups; retro + risk register (wk-6 duplicate deliverable merged) | UV Wk5–6 (near-intact) |
| 7–8 | M4 Sprint 2: Build | Implementation + facilitation, burndown | UV Wk7 (best-aligned file; near-intact) |
| 9–10 | M5 Sprint 3: Quality | Development + peer code review across the common project; **ADRs formalized** (the missing PRISM-ORANGE evidence — rename the existing design-rationale sections) | UV Wk9 (expanded) |
| 11–12 | M6 Ship It | QA, DoD, acceptance testing + **lightweight Dataman deploy** (preserves CLO4/CCL "installation") + **grouped presentations of the solo Dataman work** — comparative retros that seed group formation | UV Wk11–12 (expanded from skeletons) + harvested Wk13 deploy content |

**Weeks 13–16 — CSC-289 On-Ramp, teams** (PRISM: ORANGE consolidation, GREEN trajectory declared)

| Wk | Content | Source material |
|---|---|---|
| 13 | Group formation around common ideas: team contract, four failure archetypes, Collaboration Minimum; **engine + white-label selection** via the 3-layer platform architecture | DAY_1_ESSENTIALS + Platform_Architecture_Refined + white-label master reference |
| 14 | Terminology-map discovery exercise → **user stories for the Spring product** (reuses M2 machinery, now in teams, against their own idea) | TaskEngine_TerminologyMap kickoff exercise + UV Wk4 patterns |
| 15 | Wireframes + **GREY design consult initiated**; design brief drafted from template | STYLE_INTENT_DIGEST + StudyStream exemplar + 289's Design-Brief-Template (moved forward) |
| 16 | **Spring capstone pitch** (user stories + wireframes + consult evidence) + handoff package assembled | UV Wk16 rubric converted to pitch rubric, merged with project's Pitch_Presentation_Rubric |

**The handoff contract (what 285 hands 289, what 289 Week 1 verifies):** formed team + working agreement · chosen engine/skin product · validated user-story backlog · wireframes · design brief draft · GRD consult contact established · risk register. CSC-289 Week 1 becomes the **GREEN Trajectory Check** (reactivation audit), and Sprint 1 becomes the first *build* sprint.

---

## 3. Execution Plan for the Agent Fleet

Phases are ordered by dependency; within a phase, tasks fan out in parallel. **Every writing task's context package = the 6-doc voice canon in `reference/voice-canon/` + `reference/PRISM.html` + this plan's spine tables.** Sonnet = mechanical/derivational; Opus = voice-sensitive, structural, or net-new.

### Phase 0 — Foundations (blocks everything; small, do first)
| # | Task | Model | Notes |
|---|---|---|---|
| 0.1 | **Canonical points table** for CTS-285 — ✅ DONE (`phase0/CTS285_Canonical_Points_Table.md`): **750 total**, 600 solo Dataman arc (80%) / 150 team on-ramp (20%); KCs graded (not bonus); W5-6/W7-8/W9-10/W11 totals preserved to minimize rework | — | Single source of truth; all headers/rubrics regenerate from it |
| 0.2 | **SHODANN character bible + Media-skin voice template** — ✅ DONE (`phase0/SHODANN_Character_Bible.md` v1.0): character canon, naming-wink policy, voice mechanics + example lines per context, lexicon, register boundaries, velocity-bot feedback rules, PRISM tier mapping, never-list, drop-in persona block | — | Prerequisite for all skin passes; §7 governs automated feedback |
| 0.3 | **PRISM × course mapping doc** — ✅ DONE (`phase0/PRISM_Course_Mapping.md`; tier table also in bible §8) | — | Canonizes "ladder across the program" |
| 0.4 | **Retire audits + strip QM** — ✅ policy recorded (`phase0/QM_Retirement_Note.md`): QM pulled program-wide; RSI mechanisms retained (federal, not QM); audit files get deprecation headers | Sonnet applies headers | Do before anything reaches Angela |
| 0.5 | **ADR-001: CSC-289 team ruling** — ✅ DONE (`phase0/ADR-001-csc289-team-based.md`): team-based end-to-end, merged spine (canonical numbering/points + MODULE-ARCH team content + clean 2-wk cadence), GREEN Trajectory Check Week 1, AI from Sprint 1, Cold Start Track fallback for no-handoff students | — | Ends the undocumented fork |
| 0.6 | **Naming canon table** — ✅ DONE (`phase0/NAMING_CANON.md`): Sacred Flow→Trusted Workflow, GRAY→GREY, EventPro→EventFlow, Dataman-vs-Datamon disambiguation, workflow-step + board-column canon, etc. | — | Applied mechanically by every executor; quiz keys encode these |
| 0.7 | *Human tasks:* renegotiate GRD calendar with Jennifer Fisher (fall consults replace wk-6 first contact; define GRD-side deliverables; schedule the canned-brand-kit fallback build, not just note it); confirm **distribution rights** for the Dataman PDF manual — the document itself is in hand (`reference/dataman/historical/DataMan_US.pdf` + a 348-line faithful transcript), only the rights record is missing; brief Angela on audit retirement + in-house quality process timing; **tell us which of the two Mar-13 CSC-289 dev-phase designs actually ran in Spring 2026 and what broke** — that field data exists nowhere in the repos. ~~decide what 26FA students arrive knowing~~ → **✅ ruled by ADR-005** (2026-07-24, closes #9): GitHub account + working Python assumed; CSC-113/114 completion not assumed | you | Fleet cannot do these |
| 0.8 | **Curated source ingestion → `sources/`** — ✅ DONE (#2 / PR #10): 250 KEEP/ADAPT/HARVEST files pinned with provenance headers; 48 RETIRE/RELOCATE recorded (35 RETIRE + 13 RELOCATE); `planning/INGESTION_MANIFEST.md` regenerated from the tree | Sonnet | Net-new; makes Phase 1–4 fan-out reproducible |

**Decisions of record raised during Phase 1 execution** (now folded in): **ADR-002** — points bind at the assignment-header level; rubric sub-items are *descriptive*, not required to sum; 40/40/20 is a course-level philosophy (refines 0.1). **ADR-003** — graduated wk3–4 stakeholder model (2 canned + 1 rehearsal + 1 live); preserves *and extends* RSI; authoring of the rehearsal role card + live client brief is delegated to **1.3/1.4** — 1.4 shipped without it, so it now sits with **1.3**. **ADR-004** (2026-07-24) — two modernization bases, student choice of **Dataman** (physical) or **DataMon** (reskin); instructor exemplars use Dataman; closes #16. **ADR-005** (2026-07-24) — 26FA prerequisite baseline is a GitHub account + working Python, *not* CSC-113/114; closes #9 and unblocks wk-1 sizing (1.1/1.2). **ADR-006** (2026-07-29) — course-repo PATHFORM is **Proposed and unruled**; every student-facing path reference carries `<!-- PATHFORM: pending spine ruling -->` and nothing graduates to a course repo until it is ruled.

### Phase 1 — CTS-285 weeks 1–12 (Dataman conversion)
| # | Task | Model | Size |
|---|---|---|---|
| 1.0a | **Shared Dataman class artifacts** — ✅ DONE (#3 / PR #13): 3 stakeholder transcripts, reference ERD (8 entities), seeded backlog (8 core epics + stretch), grading key; all traced to the manual transcript; raised **ADR-003** | Opus | L |
| 1.0b | **Points normalization sweep → 750 regime** — ✅ DONE (#4 / PR #11): headers→`X pts (Y% of 750)`, rubrics reconciled; raised **ADR-002**. **1.0c** (#15) finished the Wks 01/07/11 basis 1.0b left | Sonnet | M |
| 1.1 | Rewrite Wk1 (orientation + analyst-read of Dataman manual; harvest legacy 001-setup checklist; SHODANN register) | Opus | L |
| 1.2 | Author the 10–12 autogradable Dataman document-analysis quiz items (Angela's spec + her sample questions) | Opus | M |
| 1.3 | Rewrite Wk2 (delete selection; paper sim + seeded backlog) | Opus | M |
| 1.4 | Re-anchor Wk3–4 to Dataman — ✅ DONE (PR #22, `fec3526`): Weeks 03 + 04 re-anchored; header points already normalized by 1.0b and, per **ADR-002**, sub-item rubrics need no reconciliation. **Still open:** ADR-003's rehearsal role card + live client brief were *not* authored in this pass — they carry to **1.3** | Sonnet ×2 | M |
| 1.5 | Wk5–10 Dataman swaps + Wk6 dedupe + Wk9–10 expansion + ADR formalization — ⚠ PARTIAL: ✅ Wk05 (PR #23, `ae2f0e2`) and Wk07 (PR #24, `abedb46`) re-anchored. **Still open:** Wk06 dedupe and Wk09 expansion + ADR formalization (both drafts still have zero Dataman content). **NB:** the real span is Wks 05/06/07/09 — `sources/uv-285/assignments/` has no Week_08 or Week_10 file to adapt | Sonnet ×3 | M |
| 1.6 | Expand Wk11–12 skeletons to weeks-1–7 depth; fold in lightweight deploy + grouped-presentation close | Opus | L |
| 1.7 | **Verify + re-anchor** the 6 planning-sheet templates — ✅ DONE (#5 / PR #25, shipped under the `task/1.5` commit label): all 6 live at `drafts/cts285/planning-sheets/`, re-pointed to Dataman, plus `WIRING_MANIFEST.md` keyed by owning file. Path refs are deliberately left as `<!-- PATHFORM: pending spine ruling -->` per **ADR-006** — an open ruling, not an omission | Sonnet | S |
| 1.8 | **Adapt existing** M2–M6 knowledge checks — ✅ KC HALF DONE (PR #21, `e9ac163`): 5 files at `drafts/cts285/knowledge-checks/` (M02–M06), re-pointed to Dataman and normalized per 0.1/ADR-002. M1/M7/M8 stay unadapted — **ADR-002** retired that gap. **Still open:** remaining activity handouts (interview transcripts ✅ done in 1.0a; leftover checklists/role cards unauthored) | Sonnet ×2 | M |
| 1.9 | Instructor guide: write Modules 4–8 to match Modules 1–3 quality; invert the "AlgoCratic optional" doctrine | Opus | L |

### Phase 2 — CTS-285 weeks 13–16 (net-new on-ramp; single largest build)
| # | Task | Model | Size |
|---|---|---|---|
| 2.1 | Wk13 group-formation module (team contract, archetypes, engine/skin selection) | Opus | L |
| 2.2 | Wk14 terminology-discovery + spring user-stories module | Opus | M |
| 2.3 | Wk15 wireframes + GREY consult + design-brief module (move 289's template forward; per Fisher outcome) | Opus | M |
| 2.4 | Wk16 pitch module + merged pitch rubric + handoff-package spec | Opus | M |
| 2.5 | Rebuild COURSEMAP + README from the new spine and 0.1 table; regenerate MATERIALS_INDEX from the actual tree | Sonnet | M |

### Phase 3 — Skin pass (after 0.2; parallelizable per-file)
| # | Task | Model | Size |
|---|---|---|---|
| 3.1 | Media-skin wrapper pass over all 285 assignments/activities/Canvas-page builds (Creator intros, SHODANN interjections, XU hooks) using the 0.2 template | Sonnet fan-out | S each |
| 3.2 | Purge optionality doctrine wherever it appears (README, COURSEMAP, instructor guide §7, rubrics FAQ) | Sonnet | S |
| 3.3 | Sacred Flow → Trusted Workflow rename sweep, both courses (incl. entry-ticket answer-key reconciliation: Issue→Branch→Draft PR→…) | Sonnet | S |
| 3.4 | Canvas HTML pages (9) built from finished assignments | Sonnet fan-out | M total |

### Phase 4 — CSC-289 reconciliation (for 27SP; start after Phase 2 fixes the handoff)
| # | Task | Model | Size |
|---|---|---|---|
| 4.1 | Merge coursemaps: canonical numbering/points shell + MODULE-ARCH team content + clean 2-wk cadence; retire v1.0, CTS-289-SUMMARY, 2WEEK-SPRINTS guide | Opus | L |
| 4.2 | Week 1 → **GREEN Trajectory Check** reactivation audit (+ rubric recolor) | Opus | L |
| 4.3 | AI-from-day-1: relocate Claude Code lab to wk 1 leveling; CLAUDE.md/prompt-log expectations into Sprints 1+ | Sonnet | M |
| 4.4 | Weeks 9–15: build deployable student-facing materials from the merged design (assignments, labs, quizzes from MODULE-ARCH + ACTION-PLAN banks) | Sonnet fan-out after Opus outline | L |
| 4.5 | GRD machinery: team↔designer pairing model; fall-consult timeline; wk-6 becomes formal re-engagement milestone (pending Fisher) | Opus | M |
| 4.6 | Adapt Sprints 1–2 assignment (first *build* sprint), Wk6–8 collab set, Wk16 + rubrics (solo→team pronoun/unit pass; date refresh) | Sonnet ×2 | M |

### Phase 5 — Consolidation & verification
| # | Task | Model | Size |
|---|---|---|---|
| 5.1 | Repo restructure: relocate `26SP_Planning/` 289 material out of the 285 repo; retire/archive superseded legacy files per the verdict tables; regenerate legacy CLAUDE.md for the 26FA process | Opus (CLAUDE.md) + Sonnet (moves) | M |
| 5.2 | Project hygiene: prune 10 duplicate docs; mark HISTORICAL docs; **paste the ADOPTED `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` text into the external project settings** if not already done — the text is written and signed off, do not re-draft it; upload SHODANN bible + this plan | Sonnet | S |
| 5.3 | **Link-checker agent:** every file path referenced in any student-facing doc must exist; every points figure must match the 0.1 table **at the assignment-header level only** (**ADR-002** — sub-items are descriptive; do not "reconcile" them). **Exempt from the path check:** the `<!-- PATHFORM: pending spine ruling -->` placeholders (3 sites — Week_05 ×2, Week_06 ×1) are deliberate per **ADR-006**; report them, never resolve them, and never invent a course-repo prefix | Sonnet | M |
| 5.4 | **Adversarial continuity review:** one agent walks the student journey wk 1→16→289-wk-1 looking for broken assumptions (solo/team, tier labels, **two-basis consistency per ADR-004 — does each item work for "Dataman 2.0" *and* "DataMon 2.0", and is the capital M correct**, AI expectations) | Opus | M |
| 5.5 | Quality pre-review of rebuilt CTS-285 against the UV in-house quality process **once its criteria exist** (next semester earliest); until then, 5.3/5.4 + RSI-mechanism verification are the quality gate | Opus | M |

**Sequencing:** 0 → (1 ∥ 2) → 3 → 4 → 5. Phases 1 and 2 can run concurrently once 0.1–0.3 land. Phase 4 needs 2.4's handoff-package spec. Nothing student-facing ships before 5.3/5.4 pass.

---

## 4. Open Dependencies & Risks

1. **Jennifer Fisher / GRD-242** — deliverables undefined since January; the fall-consult model is a schedule renegotiation, not a doc edit. Blocks 2.3 finalization and 4.5. The wk-15 GREY consult is the on-ramp's single point of failure; the **canned brand-kit fallback** (already floated in the Uncertainty Matrix) gets scheduled as a real build task, not just noted.
2. **Angela** — audit retirement handling; her sample document-analysis questions feed 1.2; the in-house quality process (QM's replacement) arrives next semester at the earliest — build now, review against it when it exists.
3. **Dataman PDF manual — availability ✅, rights ✗.** The document is in hand (`reference/dataman/historical/DataMan_US.pdf`) with a 348-line faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` (pp. 1–6, 21–26). What is still missing is a dated **distribution-rights** record; until it exists, wk-1 analyst work reads the transcript (classroom analysis artifact), not a redistributed manual. Module 1 hangs on the rights answer, not on the file.
4. **Dataman / DataMon disambiguation** — per **ADR-004** these are *two live student bases*: **Dataman** (1977 physical calculator → "Dataman 2.0") and **DataMon** (virtual-pet reskin → "DataMon 2.0"); instructor-provided exemplars use Dataman. The old lowercase "Datamon (legacy wk-5 console game)" is subsumed as DataMon's historical origin and is **not** a live term. Every executor prompt must carry the capital-M distinction or agents will cross-contaminate — quiz keys encode it.
5. **~~Aligned briefs live only in the GitHub repo~~ → ingested (0.8).** The aligned briefs (BudgetBossAligned, StudyStreamAligned, EventFlowAligned, RenovateRightAligned, CommerceTrackingAligned, …) are pinned in-tree at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` and `.../CTS_ProjectBriefs/`. Residual risk is content, not availability: per `INGESTION_MANIFEST.md` they carry retired terms ("Sacred Flow", "citizen") and need a skin pass before wk-14 skin-selection materials reference them.
6. **26FA calendar** — README's calendar machinery was already broken (17 rows); rebuild against the real FTCC fall calendar, including the grouped-presentation slot before Thanksgiving.

---

## 5. What This Plan Deliberately Defers

- A/B skin testing (Media is primary; classic startup retained as reference register — revisit as a "community" layer decision mid-fall).
- CSC-113/114/249 alignment to PRISM (same ladder logic applies; separate effort).
- The CDTS manifest/dashboard tooling (spec is KEEP; regenerate the 285 manifest only after Phase 2 stabilizes the spine).
- Node.js stack contingency docs (CODE-ARTIFACT; irrelevant unless the stack changes).

---

## 6. v1.1 Addenda

### 6.1 SHODANN's technical embodiment (planning assumption)

SHODANN is a reskin of previously-built infrastructure, and the plan now assumes this structure:

- **Teacherbot web front end** (Anthropic API, working proof of concept in a separate project) → SHODANN-the-character fronts Teacherbot-the-interface. The "System 1" planning chat (user stories, issues, sprint prep) is her conversational surface. Spin-off/build is a separate recovery pass, scheduled later.
- **Velocity assessment** ("measure the velocity, not the altitude," dy/dx) via Gemini API hooks in GitHub Actions, helpfully code-reviewing every student submission in the capstone GitHub org → this is the mechanical substrate of XU/Exposure™ and "The Algorithm is cheering for your growth." The bible's §7 (SHODANN sandwich, delta-only judgments, anti-Goodhart rules, no-escalation scope) is the tone spec for its output.
- **Obligation that comes with real embodiment:** the orientation guide's joke-disclosure ("she records your conversations… your instructor reads them too") becomes literally true. A sincere OOC privacy/data statement (what's logged, who sees it, retention) ships alongside the character, or the joke curdles. Add to Phase 3 deliverables.
- MODULE-ARCH's growth-grading language ("growth trajectory matters more than absolute level") is the same thesis unbranded — sprint scorecards are natural XU feed points. Keep as narrative skin in Phase 1; no dashboard tooling gets built by executors.

### 6.2 Interleave map (pipelines are complementary — here's the weave)

Full asset→week table lives in `planning/ASSESSMENT_NOTES.md`. The headline moves:

| 26FA slot | Legacy asset interleaved into the UV spine |
|---|---|
| Wk 1 | 001-setup issue spec (checklist + verification script) merged into the Media-skin Day-One stream |
| Wk 2 | **Legacy Datamon *game* features become stretch-goal epics in the seeded Dataman backlog** — the name collision converted into deliberate in-world homage; survival-guide [GITGD] excerpt as underground reading. **NB:** ~~pending `needs-instructor` call~~ → **ruled by ADR-004** (2026-07-24, closes #16): the 2026 virtual-pet reskin is adopted as **DataMon**, a first-class *alternative student basis*, not just a stretch-epic framing. The stretch epics stand for students on the Dataman basis. |
| Wk 3–4 | HiLow PRD as "what a complete PRD looks like" exemplar; mini "Dataman white-label thought experiment" foreshadows wk 14 |
| Wk 5–12 | **Collaboration Minimum ported to a solo "Community Minimum"** (2 PR reviews / 1 ask / 1 offer per sprint, cross-repo peer review of classmates' Dataman work) — the legacy repo's best peer-pressure machinery, previously homeless in solo weeks |
| Wk 9–10 | Emergency Debugging Protocol™ built out as the Sprint-3 quality crisis sim ("the stream went down") |
| Wk 11–12 | Crisis Decision Engine (production-incident sim during deploy) + **Marketing Sprint re-skinned as the "Launch Content Sprint"** — pairs produce launch content for their own modernized Dataman; output feeds the grouped presentations |
| Wk 13 | Platform_Architecture_Refined (core reading) + engine briefs + white-label master reference (selection menu) + canonical team contract + four failure archetypes named in the contract |
| Wk 14 | TaskEngine terminology-map kickoff exercise *is* the session; GRAY-response MVP-vs-stretch table as scoping teaching material |
| Wk 15 | STYLE_INTENT_DIGEST (quality bar) + StudyStream exemplar + extracted creative-brief template + 3-audience checklist ("does your brief serve dev, design, AND DB?") |
| Wk 16 | Cross-discipline pitch/cross-review structure lifted into pitch + handoff |

**Sequencing tensions executors must respect:** the wireframe-checkpoint *direction inverts* (wk-15 wireframes are input to spring, not mid-build sync — rewrite rationale, not just dates); TaskManagerAligned distributes Parts 1–2 only at wk 13 (Parts 5–6 assume active sprint context); DAY_1_ESSENTIALS timing deixis is spring-day-1 and misdirects at wk 13 verbatim; Platform_Architecture presumes ORANGE competence — wk 13, never wk 1–2.

### 6.3 Agent intelligence digest (things nobody asked for)

1. **Never trust the metadata layer.** Indexes, version histories, and audits are same-day generated fiction; regenerate inventories from the file tree. Any executor that reads MATERIALS_INDEX first will "verify" phantom files.
2. **Build the merged CSC-289 spine in ONE session** with all three source docs in context. The solo/team fork is literally what parallelized spine generation produced on Mar 13. Parallelize only leaf-file passes afterward.
3. **The snapshot is not the repo — but the curated snapshot now *is* in-tree.** Task 0.8 (PR #10) pinned 250 files into `sources/` (`sources/legacy` 164, `sources/uv-285` 54, `sources/uv-289` 32), including the whole alignment cluster at `sources/legacy/26SP_Planning/`. Read `sources/` first; only live issue/PR state still requires `norrisaftcc/course-cts285-template`. Executors who re-clone to "find" the alignment cluster will recreate existing work.
4. **Voice architecture: don't merge the voices.** Skin the Corporate body text, add SHODANN interjections, keep "Andrew's Note" OOC and untouched — it's the one authentic register in the refresh. W1's punitive collapsible gets rewritten, never migrated.
5. **Write the back half to the struggle-pattern template** (Struggle → Signs → Intervention → Success Indicator). That format is what makes weeks 1–7 feel human; it's the difference between "expanded" and "padded" for weeks 11–16.
6. **Generate the shared Dataman class artifacts early** (stakeholder transcripts, reference ERD, seeded backlog): one set serves every student forever, doubles as grading keys, and fixes the grading economics that bespoke projects broke.
7. **Fabrication is a pattern**: impossible testimonials, uncited statistics, invented "past student" anecdotes attributed to Drew. Rule for executors: genericize or get instructor sign-off on every anecdote.
8. **Filename discipline:** module/sprint-based names (`Sprint_1_Design.md`), week numbers only in files, dates in exactly one calendar. Three colliding week-numbering schemes currently exist.
9. **SHODANN's register shifts by tier** — orientation-guide SHODANN (INFRARED concierge) must not be pasted into CSC-289; GREEN-tier SHODANN reads as near-colleague, and PRISM's GREEN "mentorship unlock" maps directly onto the existing peer-review/bug-bash mechanics.
10. **Preserve MODULE-ARCH's individual-accountability layer verbatim** (scorecards spot-checked against GitHub activity, contribution portfolios, per-student PR evidence) — it's what makes a team-based 60%-process course free-rider-proof, and RSI obligations are per-student regardless of teams.
11. **Hidden-pedagogy leakage risk:** the GREY-only stack (Instructor Growth Protocol, FOBSS internals, Hidden Mechanics) must be excluded from student-material generation context. Curated context sets per task, never the whole project.
12. **~~The project's custom instructions are stale and load-bearing~~ → rewritten and marked ADOPTED.** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` now reads "July 2026 rewrite — ADOPTED … the live project instructions are the canonical text." Do **not** re-draft it. *Caveat:* adoption is an in-repo document claim — nothing in the tree or git history verifies the text was pasted into the external project settings. Verify there, then close the item.
13. **Encoding rot** (mojibake in YELLOW rubric, VISUAL_ROADMAP, others): re-encode anything revived from those files; executors copying verbatim will propagate garbage.
14. **Missing referents to resolve or declare dead:** `ASSIGNMENT_TRACKER.md` (cited ~15×, never existed), `STUDENT_REALITY_CHECK.md`, the "Bag Development Playbook" (external), the named custom agents (Linx, Kevin, scrum-team-engineer — ProjectAlignment.md doubles as their recreation spec if the definitions are lost), "TY4YC."
15. **Recompute all CSC-289 week-bands from the actual 27SP calendar** — canonical's odd 1-wk/3-wk sprint cadence probably encodes Spring 2026's spring break.
