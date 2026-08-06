# CLAUDE.md — course-cts285-storming

You are an executor agent building Fall 2026 course material for **CTS-285** (Capstone I, systems analysis & design) and its Spring successor **CSC-289** (Capstone II, programming capstone) at FTCC, inside the **AlgoCratic Futures™ / AlgoCratic Media** immersive frame. Satire is the vehicle; competence is the destination. This repo is the staging ground: plans, canon, and drafts live here; finished material graduates to the course repos.

**Multi-agent workflow, fan-out rules, and session handoff protocol: see `CLAUDE_SUPPLEMENTARY.md`.** Read it before spawning subagents or picking up another session's work.

## Read first, in this order

1. `phase0/` — ALL of it. These are hard constraints, not background:
   - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator whose content is software development)
   - `SHODANN_Character_Bible.md` — voice canon; §7 governs any automated feedback text; §9 is the never-list
   - `CTS285_Canonical_Points_Table.md` — THE points source of truth (750). No assessment exists that isn't a row there.
   - `NAMING_CANON.md` — mechanical renames + the Dataman vs. DataMon two-basis table (per ADR-004) + the Trusted Workflow definition and board columns (graded quiz answers depend on §"Workflow canon") + filename discipline for new files
   - `PRISM_Course_Mapping.md` — the ladder spans the program; CTS-285 exits at ORANGE, CSC-289 at GREEN
   - `ADR-001-csc289-team-based.md` — the 289 ruling (team-based, merged spine, GREEN Trajectory Check, Cold Start Track)
   - `ADR-002-points-are-header-level.md` — points bind at the assignment header; sub-items are descriptive (**overrides non-negotiable #1 below**)
   - `ADR-003-instructor-as-client-persona.md` — the stakeholder ladder: 2 canned transcripts + 1 rehearsal + 1 live instructor-as-client (the graded RSI anchor)
   - `ADR-004-two-modernization-bases.md` — Dataman *and* DataMon are both student bases; exemplars use Dataman (**overrides non-negotiable #2 below**)
   - `ADR-005-prerequisite-baseline.md` — 26FA baseline = GitHub account + working Python, **not** CSC-113/114
   - `ADR-006-course-repo-path-form.md` — **Proposed, not ruled**: student-facing course-repo references carry `<!-- PATHFORM: pending spine ruling -->`; nothing student-facing graduates until it is ruled
   - `ADR-007-trusted-workflow-verbs.md` — **Accepted**: the workflow's steps have dedicated UPPERCASE verbs and an explicit checkmarked form (lexicon ratified 2026-07-31)
   - `ADR-008-rule-1a-enforcement.md` — **Accepted**: Rule 1a binds by mechanism where it can refuse (`.claude/workflows/bounded-fanout.mjs`) and stays prose where it cannot; two named agent types in `.claude/agents/`
   - `ADR-009-merge-gate-verb.md` — **Accepted**: **CLEAR** is step 7 of 8, a live-human gate before MERGE. Signer scoped to the instructor for this repo; student-held gate authority is **not** authorized by it
   - `ADR-010-gate-authority-scoping.md` — **Proposed, not ruled** (2026-08-01): the signer is whoever bears the consequence — scope gates by blast radius, not rank; no countersignature, two gates instead (student's sandbox vs. across the boundary). Until it is Accepted, ADR-009's scoping stands: **only the instructor CLEARs, and student-facing material never says otherwise.**
   - `QM_Retirement_Note.md` — QM is gone; RSI mechanisms survive (federal, not QM)
2. `planning/26FA_Consolidation_Master_Plan.md` — the plan of record: assessment verdicts, the 16-week spine (§2), the phased task breakdown (§3), interleave map and agent intelligence (§6)
3. `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` — the dependency-ordered backlog (`B-001`…`B-024`, P0→P3) and the five open human decisions (§5.1). Work is now dispatched by **B-ID**, cross-referenced to master-plan task IDs. **Its file counts are a dated snapshot — regenerate from the tree.**
4. `planning/SESSIONS.md` — the write ledger and the **WRITE TOKEN**. Read it before your first commit (see "Before you write" below).
5. `planning/ASSESSMENT_NOTES.md` — per-pipeline operational detail, including the full legacy-asset → week interleave table
6. `reference/voice-canon/README.md` — index of exported voice canon; `reference/PRISM.html` is the canonical framework

## Repo layout

| Path | What it is |
|---|---|
| `phase0/` | Canon and decisions of record (16 files: 6 canon docs + ADR-001…010). Hard constraints. |
| `planning/` | Master plan, backlog/inventory, assessment notes, session ledger, B-003 reconciliation worklist, ingestion manifest, SHODANN instrument assessment, proposed external project instructions |
| `lore/` | The findings series (`findings/F-###`) — measurements and observations, per **ADR-011**. Dated records: they measure, they never rule. `phase0/` rules · `planning/` plans · `lore/` measures · `drafts/` teaches. |
| `drafts/` | Net-new material in progress — the only place new content is written |
| `sources/` | Frozen mirrors of the three source corpora (`uv-285/` 54 files · `uv-289/` 32 · `legacy/` 164). **Read-only records.** Their defects are what downstream tasks are chartered to fix; correcting a source destroys the evidence of where an error came from. |
| `reference/` | `voice-canon/` exports, `PRISM.html`, `dataman/` (1977 manual PDF + faithful transcript) |
| `alignment_ingestion/` | Record of the `algocratic-26fa-sync` package ingestion — `ASSESSMENT.md` (per-file GO/NO-GO fitness calls) plus the unpacked package. A historical record, not a live source. |
| `.claude/agents/` | `adversarial-verifier` (read-only, refutation posture, *records are not status*) · `mechanical-propagation` (applies a decided edit list, matches by snippet, never renegotiates) |
| `.claude/workflows/bounded-fanout.mjs` | The mechanism that enforces Rule 1a. Use it for per-file waves: `Workflow({name: 'bounded-fanout', args: {artifacts, audit?, scribe?}})`. Cap is a constant (7); `args.cap` may only lower it. |

## Where source material lives

| Source | Location | Notes |
|---|---|---|
| UV-refresh CTS-285 (the base being adapted) | `sources/uv-285/` — frozen 54-file mirror (origin `../csc_dash/courses/CTS-285/`) | Adapt from the mirror, not the sibling repo: task 0.8 froze it so fan-out is reproducible and diffable. ~60% survives with mechanical adaptation; **never trust its indexes/audits — they claim materials that don't exist** |
| UV-refresh CSC-289 | `sources/uv-289/` — frozen 32-file mirror (origin `../csc_dash/courses/CSC-289/`) | Two forked architectures; ADR-001 governs the merge |
| Legacy AlgoCratic repo | `sources/legacy/` — frozen 164-file mirror (origin `../course-cts285-template/`) | The 26SP alignment cluster (engine briefs, terminology maps, GRD creative briefs) feeds weeks 13–16; the aligned briefs are in the mirror at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` |
| Voice canon | `reference/voice-canon/` | Exported from the AlgoCratic Claude project (which you cannot access — everything needed is here; if something's missing, say so instead of improvising canon) |
| Dataman PDF manual | `reference/dataman/historical/DataMan_US.pdf`; faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` | In hand. Module 1's analyst-read and doc-analysis quiz work from the transcript (NAMING_CANON: the 1977 manual is read regardless of a student's chosen basis). **Only pp. 1–6 and 21–26 are transcribed** (issue #18) — anything graded must be answerable from those pages. Redistribution rights remain an open human blocker — analyse it, don't republish it |

## Non-negotiables

1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`. Per **ADR-002**, the only binding arithmetic is that assignment-header values sum to 750 — sub-items and rubric rows below the header are descriptive and are **not** required to sum to it. Percentages are always derived, never stored as authority.
2. Naming canon applies mechanically. Per **ADR-004** there are two live terms and two student bases: **Dataman** (the 1977 physical calculator and the "Dataman 2.0" modernization spine — **all instructor exemplars and worked examples use Dataman**) and **DataMon** (the adopted virtual-pet reskin basis, "DataMon 2.0", whose legacy creature-game features seed the wk-2 stretch epics). The `man`/`Mon` swap is the search-and-replace hazard; the retired lowercase "Datamon" is DataMon's historical origin, not a live term. Trusted Workflow: FILE → BRANCH → DRAFT → BUILD → FINISH → REVIEW → CLEAR → MERGE.
3. Voice: Corporate body (L2) + SHODANN interjections (L1) + "Andrew's Note" OOC margins (L0) + Underground off-camera. Never re-voice the Underground; never rewrite Andrew's Notes into character; never use the retired punitive register at a student — a retired punitive block gets **rewritten, not migrated**. The bible's never-list wins every conflict.
4. Write student-facing weeks to the struggle-pattern template: Struggle → Signs → Intervention → Success Indicator, with Dataman-specific struggles.
5. No fabricated testimonials, statistics, or "past student" anecdotes — genericize or flag for instructor sign-off.
6. Regenerate inventories from file trees, never from the docs' own claims. UTF-8 everywhere; re-encode anything revived from mojibake-afflicted legacy files.
7. New material goes in `drafts/<course>/<category>/` — the CTS-285 draft path is lowercase `drafts/cts285/` (B-002; the case-variant `drafts/CTS-285/` is retired), with existing categories `assignments/`, `knowledge-checks/`, `planning-sheets/`, `points-normalization/`, `rubrics/`, `shared-dataman-artifacts/`; exploratory work goes in `drafts/spikes/`. Nothing in this repo is student-facing until it graduates to a course repo — and per **ADR-006** (*Proposed*) nothing graduates at all until the course-repo path form is ruled: every student-facing course-repo reference carries `<!-- PATHFORM: pending spine ruling -->`, the retired csc_dash `/courses/CTS-285/...` form is never reintroduced, and no leaf task invents a prefix. Repo-internal references are repo-root-relative with no leading slash (B-002).
8. **Records are not status.** Provenance headers (`<!-- SOURCE: ... -->`), dated ledger rows, superseded entries kept under their corrections, and the whole of `sources/` describe a past state and are correct as written — editing them to match the present is the defect. `SESSIONS.md` states the convention: never rewrite old rows; corrections get their own row. Point no drift audit at a historical record without telling it this first.
9. **Institution name: the initialism `FTCC` only.** The frozen `sources/uv-285/` base carries a wrong expansion (a different college); it was inherited into two drafts and corrected on 2026-07-31, with a `<!-- NAME: -->` marker. Never expand it, never copy an expansion out of `sources/`, and leave `sources/` untouched. The full legal name — and whether it belongs in student-facing material — is an instructor call.

## Before you write

1. **Pull first**, then read `planning/SESSIONS.md`. The WRITE TOKEN names the one session that may commit; everyone else is read-only until it passes. The token is held by a **session** until the human takes it back, names another holder, or the session ends — **merging is not a return event**, and a holder line that names a branch is malformed.
2. Work the Trusted Workflow on ourselves (Rule 4): FILE an issue titled from the B-ID or master-plan task ID → BRANCH `task/<phase>-<id>-<slug>` → DRAFT immediately → BUILD in `drafts/` → FINISH with the handoff block → REVIEW → **CLEAR (instructor only)** → MERGE.
3. Every PR description carries the handoff block (`DONE / REMAINING / DECIDED / BLOCKED-ON / CANON-TOUCHED`), and every writing session appends a row to `planning/SESSIONS.md` as part of its final commit. Nothing lives only in a session's memory.
4. Commits carry a session trailer (`Claude-Session: <url>`). Run the Rule 6 acceptance checks (points, links, naming, voice, honesty, encoding, gate) before review.
5. Fanning out? Rule 1a caps a wave at **7 agents**, per artifact, never per finding, never nested. Use `bounded-fanout`; it refuses rather than warns.

## Current state (regenerated from the tree, 2026-08-06)

- **Phase 0: COMPLETE.** All canon in `phase0/`; ADR-001…005, 007, 008, 009 Accepted; **ADR-006 and ADR-010 Proposed** and blocking what they govern.
- **Phase 1 (CTS-285 wks 1–12 Dataman conversion): IN PROGRESS.** A file existing in `drafts/cts285/assignments/` does **not** mean its conversion is done — read the per-week state before touching one:
  - **Converted:** Week 01 (rewritten on the Dataman spine, B-004) · Weeks 03, 04 (task 1.4) · Weeks 05, 07 (task 1.5).
  - **File exists, work outstanding:** Week 02 still sells project selection and awaits its rewrite on the seeded backlog (B-005) · Weeks 06 and 09 need finishing (B-006) · Weeks 11 and 12 need expansion, and Week 12 still has stubs (B-007).
  - **Also built:** `knowledge-checks/` Module 01 Dataman document-analysis quiz (15 pts, 12 autograded items) + Modules 02–06; six planning-sheet templates + `WIRING_MANIFEST.md`; the 1.0a shared Dataman artifact set (3 stakeholder transcripts, reference ERD, seeded backlog, grading key); points-normalization conflict ledger; `drafts/spikes/datamon-virtual-pet-reskin.md`.
- **Done and closed:** B-002 (draft-path consolidation), B-003 (47 reconciliation edits, audited 47/47 — planning/canon layer only, `drafts/cts285/**` never swept), B-004 (Week 1 + M1 quiz), B-024 (Rule 1a enforcement mechanism).
- **Next up, in dependency order:** B-005 (Week 2 on the seeded backlog), B-006 (Weeks 6 and 9), B-007 (Weeks 11–12 expansion) — one controlled spine sequence, per backlog §8.
- **Numbering trap:** the sprint assignments are week-paired — `Week_05` covers wks 5–6, `Week_07` covers 7–8, `Week_09` covers 9–10 — so there is no `Week_08` or `Week_10` file and creating one re-opens the collision NAMING_CANON's filename discipline exists to prevent. New files take module/sprint-based names.
- **Not started:** activities and role cards (B-008), instructor guide M4–8 (B-009), weeks 13–16 (B-010…013), rebuilds and skin pass (B-014…016), the CSC-289 merge (B-017…019), cleanup and quality gates (B-020…023). No material has graduated to a course repo.

## Open human blockers (do not wait on these for mechanical work; do not resolve them yourself)

- Dataman PDF manual **redistribution rights** (the PDF and a faithful transcript are in hand under `reference/dataman/`; only rights are unconfirmed — treat the original as a classroom analysis artifact, never a redistributed product)
- Jennifer Fisher / GRD-242 fall-consult calendar + deliverables (gates wk-15 finalization; canned brand-kit fallback is the scheduled mitigation)
- Which Mar-13 CSC-289 design actually ran in Spring 2026, and what broke (instructor field data)
- The Fall 2026 / Spring 2027 course calendars
- Whether `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` is applied or rejected in the external project settings
- The institution's full legal name, and whether it appears in student-facing material at all
- ADR-006 (course-repo PATHFORM) and ADR-010 (gate authority scoping) await rulings

When a task needs a decision of record that doesn't exist, write an ADR proposal in `phase0/` and flag it — never silently decide.
