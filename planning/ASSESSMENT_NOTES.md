# Assessment Notes — Agent Follow-Up Intelligence
*July 22, 2026 · Condensed candid findings from the four assessment agents (legacy repo, UV CTS-285, UV CSC-289, AlgoCratic project). Full verdict tables live in the agents' primary assessments; the digest of the items below is in the master plan §6.3. This file preserves the operational detail executors need.*

## From the CTS-285 (UV refresh) agent

- **Metadata is fiction, content is real.** Everything is dated Jan 15, 2026 — including "version histories" describing multi-day work and audits the index says were scheduled a week later. Never trust or patch MATERIALS_INDEX/COURSEMAP inventory claims; regenerate from the file tree.
- **Prerequisite question — RULED (ADR-005, Accepted 2026-07-24; closes #9).** The pipelines did disagree (PM-Integration assumed CSC-113/114 mastery; README said "Prerequisites: None"; Week 1 taught `git config` from scratch). The baseline is now **a working GitHub account + working knowledge of Python; CSC-113/114 is NOT assumed.** Week 1 is configure/verify, not create-from-zero, and the Trusted Workflow is taught as process on top of an existing account. A weaker cohort gets a targeted bridge supplement — never a lowered baseline. Do not re-open this as a human blocker.
- **The replicable pedagogical asset is the struggle-pattern format:** Struggle → Signs → Intervention → Success Indicator. Weeks 11–16 executors write to that template with Dataman-specific struggles, or the back half stays "padded."
- **Voice architecture:** skin the Corporate body, add SHODANN interjections, keep "Andrew's Note" OOC and untouched. W1's punitive collapsible is rewritten, never migrated.
- **The invisible blocker was handouts — the shared-artifact half is now built.** Task 1.0a (PR #13) shipped `drafts/cts285/shared-dataman-artifacts/`: three stakeholder transcripts (retro collector, parent, teacher), the reference ERD, the seeded backlog, and `Grading_Key.md`. Do not regenerate them. **ADR-003** then reshaped the model from "transcripts ×3" to **2 canned (retro collector, parent) + 1 rehearsal (teacher, recast as a role card by tasks 1.3/1.4) + 1 live (instructor-as-client, graded, the RSI anchor — never written as a canned transcript)**. Still missing and still worth generating early: **SDLC Phase Checklist, role cards, peer-review rubric.**
- **Dataman fixes grading economics:** rubrics can reference the known-correct model; fake-process detection gets easier; autogradable items possible beyond week 1 ("which entity is missing from this ERD?"). Build grading keys alongside each deliverable.
- **W9–10 peer review mechanics are hand-waved** for solo private repos. Common project + shared GitHub org (the Creator Orientation already presumes org invitations) solves it — executors must specify the mechanics.
- **Fabrication is a pattern:** impossible testimonial, uncited 68%/32% statistic, invented "past student" anecdotes attributed to the instructor. Rule: genericize or get instructor sign-off per anecdote.
- **RSI ≠ QM:** RSI is federal aid compliance; exit-ticket cadence + weekly instructor-played stakeholder interviews are the cheapest RSI evidence. Keep them as the audit files retire.
- **PRISM continuity:** the refresh's "Design Rationale" sections are proto-ADRs — formalize as ADR-lite in Sprint 1 so Sprint 3's ADR requirement is a step up, not a cold start.

## From the CSC-289 (UV refresh) agent

- **Fork forensics → execution rule:** two generation batches (Jan 20 solo; Mar 13 the rest, self-auditing same-day). The solo/team fork is what parallelized spine generation produced. **Build the merged spine in ONE session, all three source docs in context; parallelize only leaf passes.**
- **Field data only the instructor has:** weeks 9–16 material was written mid-semester for the live Spring 2026 section. One of the two dev-phase designs presumably actually ran March–May 2026. **Ask which, and what broke** — worth more than any audit.
- **The odd sprint cadence (1-wk S6 / 3-wk S7) likely encodes Spring 2026's spring break.** Recompute all week-bands from the actual 27SP calendar; don't inherit a 2026 holiday schedule into 2027.
- **Three incompatible workflow definitions are baked into graded quiz keys** (entry ticket: Issue→Branch→Code→PR; MODULE-ARCH: draft-PR-early; skin: Trusted Workflow) and board-column names split similarly. Declare canon (done — NAMING_CANON.md), then regenerate every encoding quiz item/rubric line.
- **Points source-of-truth before regeneration:** **ADR-002** rules points bind at the *assignment-header* level only — sub-items are descriptive, percentages are always derived, and 40/40/20 is a course-level philosophy, not a per-sprint equation. So canonical's ~2% *internal* slippage and MODULE-ARCH's non-additive shell are **not defects to reconcile**; only the top lines bind (750 for CTS-285, the 1,600 shell for CSC-289 per ADR-001). What still holds: agents regenerating from prose will hallucinate reconciled numbers — regenerate from `phase0/CTS285_Canonical_Points_Table.md`, never from a rubric. Existing link rot: README→`PM-Integration-CSC-289.md` and `reference-materials/` don't exist; canonical→`../CSC-289_Sprint_Plan_Dashboard_Crosswalk.md` unverified.
- **SHODANN register shift at GREEN:** capstone SHODANN is peer/near-colleague; PRISM's GREEN "mentorship unlock" maps directly onto existing peer-review/bug-bash/teaching mechanics — a free, high-coherence skin hook.
- **Preserve MODULE-ARCH's individual-accountability layer verbatim:** scorecards spot-checked against GitHub activity, contribution portfolios, per-student PR/review counts, solo-hero failure interventions. It's what makes a team-based 60%-process course free-rider-proof. RSI stays per-student.
- **The growth-grading line is the AlgoCratic thesis unbranded** ("growth trajectory matters more than absolute level") — sprint scorecards are natural XU feed points; keep as narrative skin, no dashboard tooling.
- **Fisher is the only agent-unfixable item.** Sequence the conversation before executors touch collab materials.

## From the legacy-repo agent

- **The snapshot is not the repo — resolved for files, still true for issue/PR state.** Task 0.8 (PR #10) ingested the legacy repo into `sources/legacy/` (164 files), including the aligned briefs (`26SP_Planning/GRD_CreativeBriefs/**` — BudgetBossAligned, BookmarkAligned, et al.) and the whole `26SP_Planning/` alignment cluster; `planning/INGESTION_MANIFEST.md` records RISK #5 as resolved. Read `sources/legacy/` before authoring anything in the alignment cluster or you'll recreate existing work. **Still out-of-tree:** live issue/PR state in `norrisaftcc/course-cts285-template` — query GitHub for it.
- **Aspirational-structure trap:** CLAUDE.md/README describe directories never populated; `ASSIGNMENT_TRACKER.md` is cited ~15× and never existed. Verify every internal reference resolves (~⅓ don't).
- **Recency correlates with quality:** Nov-2025 bootstrap layer weakest; Dec-2025→Jan-2026 alignment cluster strongest. On duplicate conflicts, prefer newer; diff repo's UNDERGROUND_CAPSTONE_SURVIVAL_GUIDE vs project's Capstone_GameFAQs_Walkthrough before editing either.
- **Satire dosage: copy the artifacts, not the stated ratio.** CLAUDE.md preaches 95/5; its own templates run ~30%. Imitate DAY_1_ESSENTIALS, not the CLAUDE.md README template. Satire in the chrome, competence in the load-bearing text.
- **Hidden agent dependency:** the alignment workflow assumes named custom agents (Linx, Kevin, scrum-team-engineer, product-architect-advisor). If definitions are lost, ProjectAlignment.md is the recreation spec — don't assume they're invocable.
- **Team contract exists in three divergent versions** (DAY_1, survival guide [TEAMS], Platform Matrix wk-1 table). Canonize one before wk-13 materials are cut.
- **CDTS is a spec, not a system** — no dashboard code exists; don't budget "update the tool" tasks.
- **Invariants:** underground voice + frotz→plugh are skin-independent and load-bearing across both skins (the Creator Orientation already smuggles frotz into its fine print). Never re-voice them.

### Full interleave map (legacy asset → 26FA destination)

| Legacy asset | Destination | Adaptation | Size |
|---|---|---|---|
| 001-environment-setup-protocol (issue spec) | wk1 | Build assignment; Media-skin Day-One narrative; dedupe vs Orientation; keep verification script + OS matrix | M |
| Env-setup "tone balance 70/20/10" guidance | wk1–2 executor guidance | None | S |
| Legacy Datamon *game* spec (retired wk-5 creature game) | wk2 seeded backlog — **DONE (1.0a)**; now also the **DataMon** basis seed per **ADR-004** | Already recast as stretch epics S1.x in `Dataman_Seeded_Backlog.md` (in-world homage) — do not re-author. ADR-004 adopts **DataMon** as a first-class student basis: DataMon students may promote these from stretch to core. Live spelling is capital-M **DataMon**; lowercase "Datamon" is historical origin only | M |
| Survival guide [GITGD] excerpt | wk2 | Extract as Trusted Workflow underground reading | S |
| HiLow PRD | wk3–4 | "Complete PRD" exemplar | S |
| Emergency Debugging Protocol™ (concept) | wk9–10 | Build out; "the stream went down" crisis sim | M |
| Crisis Decision Engine (concept) | wk11–12 | Build out; production-incident sim during deploy | M |
| Marketing Sprint (complete, project KB) | wk11–12 | Re-skin as "Launch Content Sprint" for own Dataman; **pairs** (teams don't exist yet) | M |
| VISUAL_ROADMAP 5-act arc + emergency protocols | instructor-side | Harvest into pacing doc | S |
| DAY_1_ESSENTIALS | wk13 (+289 spring day 1) | Re-date deixis ("design partners week 1-2" is spring-day-1 language); canonical team contract | S |
| Platform Matrix wk-1 deliverables table | wk13 | Convert to group-formation evidence checklist | S |
| All_White_Labels_Master_Reference | wk13 | Reconcile skin lists with engine canon; selection menu | S–M |
| Platform_Architecture_Refined | wk13 core reading | Date/label refresh. Presumes ORANGE competence — never front-load to wk1–2 | S |
| Engine_Brief_TaskEngine (+siblings in live repo) | wk13 selection packet | Header refresh | S |
| TaskManagerAligned (Parts 1–2 only; rest 289-SPRING) | wk13 | Split distribution; classic corporate voice acceptable as capstone-brief register | S |
| TaskManagement (plain voice) | wk13 | Satire-opt-out variant | S |
| TaskEngine_TerminologyMap | wk14 | None — kickoff exercise IS the session | S |
| Terminology_Map_Example | wk14 | Keep DB/seed-data angle | S |
| alignment_meetings README (GRAY response memo) | wk14 | Extract MVP-vs-stretch table as scoping teaching material | S |
| 26SP_Cross_Discipline_Protocol | wk15 structure + 289-SPRING full | **Invert wireframe-checkpoint rationale** (wireframes now input to spring, not mid-build sync); GREY spelling; PRISM labels | M |
| STYLE_INTENT_DIGEST | wk15 | None — quality bar | S |
| Sample_Creative_Brief_StudyStream | wk15 | Exemplar deliverable | S |
| GRAY_Meeting_Prep embedded template | wk15 | Extract as fill-in design-brief template | S |
| Gap_Analysis_Creative_Briefs | wk15 | Convert to "does your brief serve dev, design, AND DB?" checklist | S |
| Cross-discipline pitch/cross-review structure | wk16 | Lift into pitch + handoff | S |
| UNDERGROUND_CAPSTONE_SURVIVAL_GUIDE | 289-SPRING ([TEAMS]+[VSLCE] as wk13–14 reading) | Version refresh; dedupe vs project walkthrough | S |
| 26SP_Database_Capstone_Integration | 289-SPRING (+wk13 if DB students join) | PRISM relabel, semester refresh | S–M |
| 26SP_Platform_Project_Matrix (rest) | 289-SPRING | Reconcile with engine canon | M |
| ProjectAlignment, Gap_Analysis_Report, WORKFLOW_GUIDE, ISSUE_TEMPLATE, CLAUDE.md rework, manifest regen | instructor-side | Per primary assessment (CLAUDE.md = L/Opus) | S–L |
| CDTS spec | program-level | None | S |

**Additional interleave opportunities:** solo "Community Minimum" (port Collaboration Minimum to cross-repo peer review, wks 5–12); "Dataman white-label thought experiment" at wk3–4 foreshadowing wk14; four failure archetypes named in the wk13 team contract.

## From the project-docs agent

- **Project custom instructions — ADOPTED (in-repo record).** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` is marked *adopted with instructor amendments* (Trusted Workflow gloss; INDIGO/VIOLET/ULTRAVIOLET as opaque higher-ups; the past-GREEN scope rule); it is now the drafting record and the live instructions are canonical. Do **not** re-open this as a pending human edit. **Caveat:** the adoption is a document claim — nothing in this tree verifies the external project settings were actually changed; on any divergence, the live instructions win.
- **The tone guide is itself half-written** (Bureaucratic voice is a placeholder note; Instructor voice examples empty). It reads as canon but isn't finished.
- **Two visual identities ruled deliberate:** Media skin = the Orientation Guide's print palette (ink/green/amber); Underground = the dark-terminal/phosphor system. Encoded in bible §10 — veto if wrong.
- **Encoding rot** (mojibake) in YELLOW rubric, csc289-status, VISUAL_ROADMAP, PROJECT_STATUS — re-encode anything revived; never copy raw.
- **Terminology is three generations deep** (Sacred Flow → Sacred Workflow → Trusted Workflow) — mechanical rename table required (done: NAMING_CANON.md).
- **Hidden-pedagogy leakage risk:** Instructor Growth Protocol (NLP/anchoring) + FOBSS internals + Hidden Mechanics are GREY-only; explaining the technique kills it. Student-material generation gets curated context sets, never the whole project.
- **Missing/external referents:** STUDENT_REALITY_CHECK.md (referenced, absent), "Bag Development Playbook" (external exemplar), "TY4YC" (unresolved acronym). Declare each found, recreated, or dead.
- **Buried gems to keep verbatim:** the attendance policy (excused absence = email + link to a recent PR, no reuse); GitHub Education verification pitfalls; the Persona-vs-Purpose/"corpus" explanation (best student-facing AI-literacy framing in the corpus — in the Media skin it becomes SHODANN explaining herself).
- **SHODANN naming collision:** VISUAL_ROADMAP's "SHODAN integration (Year 2)" cybersecurity thread stays separate until the instructor rules otherwise.
- **Real embodiment ⇒ real disclosure:** with Teacherbot + Gemini-in-Actions, the joke-disclosure becomes literally true. Ship a sincere OOC privacy/data statement (what's logged, who sees it, retention) alongside the character; bake anti-Goodhart into the Action's rubric from day one.
