# CLAUDE.md — course-cts285-storming

You are an executor agent building Fall 2026 course material for **CTS-285** (Capstone I, systems analysis & design) and its Spring successor **CSC-289** (Capstone II, programming capstone) at FTCC, inside the **AlgoCratic Futures™ / AlgoCratic Media** immersive frame. Satire is the vehicle; competence is the destination. This repo is the staging ground: plans, canon, and drafts live here; finished material graduates to the course repos.

**Multi-agent workflow, fan-out rules, and session handoff protocol: see `CLAUDE_SUPPLEMENTARY.md`.** Read it before spawning subagents or picking up another session's work.

## Read first, in this order

1. `phase0/` — ALL of it (16 files: 6 canon documents + 10 ADRs). These are hard constraints, not background:
   - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator whose content is software development)
   - `SHODANN_Character_Bible.md` — voice canon; §7 governs any automated feedback text; §9 is the never-list
   - `CTS285_Canonical_Points_Table.md` — THE points source of truth (750). No assessment exists that isn't a row there.
   - `NAMING_CANON.md` — mechanical renames + the Dataman vs. DataMon two-basis table (per ADR-004) + the Trusted Workflow definition and verb table (graded quiz answers depend on these)
   - `PRISM_Course_Mapping.md` — the ladder spans the program; CTS-285 exits at ORANGE, CSC-289 at GREEN
   - `QM_Retirement_Note.md` — QM is gone; RSI mechanisms survive (federal, not QM)
   - Decisions of record — **Accepted:** `ADR-001` (289 is team-based; merged spine, GREEN Trajectory Check, Cold Start Track) · `ADR-002` (points bind at the assignment header; sub-items are descriptive — **overrides non-negotiable #1 below**) · `ADR-003` (stakeholder ladder: 2 canned transcripts + 1 rehearsal + 1 live instructor-as-client, the graded RSI anchor) · `ADR-004` (Dataman *and* DataMon are both student bases; exemplars use Dataman — **overrides non-negotiable #2 below**) · `ADR-005` (26FA baseline = GitHub account + working Python, **not** CSC-113/114) · `ADR-007` (Trusted Workflow verbs are UPPERCASE with an explicit checkmarked form; lexicon ratified 2026-07-31) · `ADR-008` (Rule 1a binds by mechanism where it can refuse — `.claude/workflows/bounded-fanout.mjs` — and stays prose where it cannot; two named agent types in `.claude/agents/`) · `ADR-009` (**CLEAR** is step 7 of 8, a live-human gate before MERGE; signer scoped to the instructor for this repo, student-held gate authority **not** authorized by it)
   - Decisions **Proposed, not ruled** — do not act as though they are settled: `ADR-006-course-repo-path-form.md` (student-facing course-repo references carry `<!-- PATHFORM: pending spine ruling -->`; nothing student-facing graduates until it is ruled) · `ADR-010-gate-authority-scoping.md` (2026-08-01 — gate authority scoped by blast radius, not rank; would close ADR-009's deferred half and unblock B-017/B-019. Two items inside it are flagged for a human and must not be decided by an agent: education-record status of a graded CLEAR record, and revocation)
2. `planning/26FA_Consolidation_Master_Plan.md` — the plan of record: assessment verdicts, the 16-week spine (§2), the phased task breakdown (§3), interleave map and agent intelligence (§6)
3. `planning/SESSIONS.md` — the **write ledger**. Read it before your first commit: it names the current WRITE TOKEN holder (one writer at a time), and its correction rows record rules that were wrong for a cycle before being caught. The token is held by a **session**, not a branch; merging is not a return event. Never rewrite old rows — corrections get their own row.
4. `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` — the dependency-ordered `B-###` backlog and gap list. Its counts are a dated snapshot, not a live index; regenerate from the tree before relying on them.
5. `planning/ASSESSMENT_NOTES.md` — per-pipeline operational detail, including the full legacy-asset → week interleave table
6. `reference/voice-canon/README.md` — index of exported voice canon; `reference/PRISM.html` is the canonical framework

Supporting records, read when the task touches them: `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` (the adopted project instructions with instructor amendments — retained as the drafting record; on divergence the live project instructions win) · `planning/INGESTION_MANIFEST.md` (what task 0.8 copied into `sources/` and what it deliberately left behind) · `planning/B003_RECONCILIATION_WORKLIST.md` (the applied status-reconciliation worklist, including the 20 findings adversarial verification *refuted* — don't re-raise them) · `planning/SHODANN_INSTRUMENT_ASSESSMENT.md` (velocity-engine adoption verdict: viable for 289, wrong instrument for 285) · `alignment_ingestion/ASSESSMENT.md` (the sync-package fitness gate, 4 GO / 3 NO-GO / 15 no-op).

## Repository structure

*Regenerated from the file tree 2026-08-04. Per non-negotiable #6, regenerate before trusting any count — including this one.*

| Path | What it is |
|---|---|
| `phase0/` | Canon and decisions of record. Hard constraints; changes here need an ADR, not an edit. |
| `planning/` | Plan of record, backlog, write ledger, assessments, applied worklists. |
| `drafts/cts285/` | Net-new CTS-285 material in progress: `assignments/` (Weeks 01–07, 09, 11, 12 — 08, 10, 13–16 not yet built), `knowledge-checks/` (Module 01 Dataman document-analysis quiz + Modules 02–06), `planning-sheets/` (6 templates + `WIRING_MANIFEST.md`), `rubrics/`, `points-normalization/` (`CONFLICT_LEDGER.md` — the 1.0b sweep's method and every value it changed), `shared-dataman-artifacts/` (3 stakeholder transcripts, reference ERD, seeded backlog, grading key — the exemplar set most Phase 1 tasks depend on). Plus `COURSEMAP.md` and `README.md`. |
| `drafts/spikes/` | Exploratory seeds, not deliverables — currently the DataMon virtual-pet reskin spike. |
| `sources/` | Frozen mirrors of the three source corpora. Read-only evidence: bodies are verbatim and their defects are what downstream tasks are chartered to fix. Never "fix" a source file. |
| `reference/` | `voice-canon/`, `PRISM.html`, `dataman/` (manual PDF + faithful transcript). |
| `alignment_ingestion/` | Record of an out-of-band sync package and the per-file gate that rejected 3 of its files as regressions. |
| `.claude/` | Repo tooling — see *Tooling* below. |
| `.github/agents/my-agent.agent.md` | An unfilled GitHub custom-agent template (empty `name`/`description` frontmatter). Not a functioning agent definition; don't cite it as one. |

## Where source material lives

| Source | Location | Notes |
|---|---|---|
| UV-refresh CTS-285 (the base being adapted) | `sources/uv-285/` — frozen 54-file mirror (origin `../csc_dash/courses/CTS-285/`) | Adapt from the mirror, not the sibling repo: task 0.8 froze it so fan-out is reproducible and diffable. ~60% survives with mechanical adaptation; **never trust its indexes/audits — they claim materials that don't exist**, and it carries the wrong institution name (see non-negotiable #8) |
| UV-refresh CSC-289 | `sources/uv-289/` — frozen 32-file mirror (origin `../csc_dash/courses/CSC-289/`) | Two forked architectures; ADR-001 governs the merge |
| Legacy AlgoCratic repo | `sources/legacy/` — frozen 164-file mirror (origin `../course-cts285-template/`) | The 26SP alignment cluster (engine briefs, terminology maps, GRD creative briefs) feeds weeks 13–16; the aligned briefs are in the mirror at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` |
| Voice canon | `reference/voice-canon/` | Exported from the AlgoCratic Claude project (which you cannot access — everything needed is here; if something's missing, say so instead of improvising canon) |
| Dataman PDF manual | `reference/dataman/historical/DataMan_US.pdf`; faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` | In hand. Module 1's analyst-read and doc-analysis quiz work from the transcript (NAMING_CANON: the 1977 manual is read regardless of a student's chosen basis). Transcribed: pp. 1–6 and 21–26 only — pp. 7–18 are untranscribed (issue #18), so nothing graded may depend on them. Redistribution rights remain an open human blocker — analyse it, don't republish it |
| Out-of-band sync packages | `alignment_ingestion/` | Overlay packages arrive built against stale baselines. **Never `cp -R` one over the tree** — the 2026-07-29 package would have silently reverted ADR-004 and two merged PRs. Gate per file against the live tree, record GO/NO-GO, then apply only the GO set |

## Non-negotiables

1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`. Per **ADR-002**, the only binding arithmetic is that assignment-header values sum to 750 — sub-items and rubric rows below the header are descriptive and are **not** required to sum to it. Percentages are always derived, never stored as authority.
2. Naming canon applies mechanically. Per **ADR-004** there are two live terms and two student bases: **Dataman** (the 1977 physical calculator and the "Dataman 2.0" modernization spine — **all instructor exemplars and worked examples use Dataman**) and **DataMon** (the adopted virtual-pet reskin basis, "DataMon 2.0", whose legacy creature-game features seed the wk-2 stretch epics). The `man`/`Mon` swap is the search-and-replace hazard; the retired lowercase "Datamon" is DataMon's historical origin, not a live term. Trusted Workflow: FILE → BRANCH → DRAFT → BUILD → FINISH → REVIEW → CLEAR → MERGE.
3. Voice: Corporate body (L2) + SHODANN interjections (L1) + "Andrew's Note" OOC margins (L0) + Underground off-camera. Never re-voice the Underground; never rewrite Andrew's Notes into character; never use the retired punitive register at a student — a retired punitive block gets **rewritten, not migrated**. The bible's never-list wins every conflict.
4. Write student-facing weeks to the struggle-pattern template: Struggle → Signs → Intervention → Success Indicator, with Dataman-specific struggles.
5. No fabricated testimonials, statistics, or "past student" anecdotes — genericize or flag for instructor sign-off.
6. Regenerate inventories from file trees, never from the docs' own claims. UTF-8 everywhere; re-encode anything revived from mojibake-afflicted legacy files.
7. New material goes in `drafts/<course>/<category>/` — the CTS-285 draft path is lowercase `drafts/cts285/` (B-002; the case-variant `drafts/CTS-285/` is retired), with existing categories `assignments/`, `knowledge-checks/`, `planning-sheets/`, `points-normalization/`, `rubrics/`, `shared-dataman-artifacts/`. Repo-internal references are repo-root-relative with no leading slash. Nothing in this repo is student-facing until it graduates to a course repo — and per **ADR-006** (*Proposed*) nothing graduates at all until the course-repo path form is ruled: every student-facing course-repo reference carries `<!-- PATHFORM: pending spine ruling -->` (17 in the tree today), the retired csc_dash `/courses/CTS-285/...` form is never reintroduced, and no leaf task invents a prefix.
8. **The institution is written `FTCC`, initialism only.** The frozen `sources/uv-285/` base expands it to a *different college's* name and `reference/PRISM.html` and `sources/uv-289/` carry a third — all inherited defects. Never propagate an expansion into a draft; live drafts carry a `<!-- NAME: -->` marker. `sources/` stays untouched as the record of what the base actually said. The full legal name, and whether it appears in student-facing material at all, is an instructor call.
9. **Records are not status.** Provenance headers, dated ledger rows, superseded entries, and closed-task handoff blocks are history kept on purpose. Do not "correct" them into present tense, and do not read them as live state — a 2026-07-29 audit raised 20 findings that were refuted for exactly this reason.

## Working conventions

**Trusted Workflow, applied to ourselves.** Per work item: FILE an issue titled from the master-plan task or backlog ID → BRANCH `task/<phase>-<id>-<slug>` → DRAFT the PR immediately → BUILD in `drafts/<course>/<category>/` → FINISH (ready, with the handoff block) → REVIEW → CLEAR (live human; instructor only in this repo; an unREVIEWed PR cannot be CLEARed) → MERGE. Full definitions and the acceptance checklist: `CLAUDE_SUPPLEMENTARY.md` Rules 4–6.

**Session discipline.** One writer at a time per the WRITE TOKEN in `planning/SESSIONS.md`; pull before writing, push after. Every writing session appends a ledger row as part of its final commit and ends its PR (or its issue, if it stops mid-task) with the DONE / REMAINING / DECIDED / BLOCKED-ON / CANON-TOUCHED handoff block. Nothing lives only in a session's memory.

**Tooling.**
- `.claude/workflows/bounded-fanout.mjs` — the mechanical half of Rule 1a. Use it for per-file waves (worklist application, naming sweeps, points normalization, per-document audits). It computes the agent count from your arguments and **refuses** over the 7-agent cap rather than warning, accepts only a per-artifact argument shape (so per-finding fan-out cannot be expressed), refuses two artifacts claiming the same file, and returns dispatched/returned/dead on every run. `args.cap` may only lower the cap; a raise is ignored and reported.
- `.claude/agents/adversarial-verifier.md` — read-only; verifies by trying to refute, and leads with *records are not status*.
- `.claude/agents/mechanical-propagation.md` — applies an already-decided edit list; matches by snippet, never by line number.
- Hand-rolling a script or calling `Agent` directly bypasses all of this. That path is doctrine only.

**Spine vs. leaf.** Spine work (coursemaps, cross-file points propagation, module architecture, the 289 merge) runs in ONE session with all sources in context — never parallelized. Leaf work fans out, bounded. If a leaf hits a spine decision, stop and flag.

## Current state (2026-08-04)

- **Phase 0: complete.** All foundation artifacts are in `phase0/`.
- **Phase 1 (CTS-285 wks 1–12 Dataman conversion): in progress.** Landed: the shared Dataman artifact set, the points-normalization sweep to the 750 regime, Weeks 01–07/09/11/12 drafts at various depth, Modules 01–06 knowledge checks, all six planning-sheet templates. B-002 (draft-path consolidation), B-003 (status reconciliation, 47/47 applied and independently audited), B-004 (Week 1 rewrite + the 15-pt Dataman document-analysis quiz), and B-024 (Rule 1a enforcement → ADR-008) are done.
- **Next in the backlog:** B-005 (Week 2 around the paper simulation and the seeded backlog), B-006 (finish Weeks 6 and 9), B-007 (expand Weeks 11–12 — Week 12 still has stubs). B-001 (the five human decisions) runs in parallel and is not ours to close.
- **Known coverage gap:** B-003's audit covered the planning and canon layer only. `drafts/cts285/**` has never been swept for status drift — the issue #17 continuity audit still owes that tree.
- Phases 2–5: master plan §3 for the breakdown and sequencing (0 → (1 ∥ 2) → 3 → 4 → 5).

## Open human blockers (do not wait on these for mechanical work; do not resolve them yourself)

- Dataman PDF manual **redistribution rights** (the PDF and a partial faithful transcript are in hand under `reference/dataman/`; only rights are unconfirmed — treat the original as a classroom analysis artifact, never a redistributed product)
- Jennifer Fisher / GRD-242 fall-consult calendar + deliverables (gates wk-15 finalization; canned brand-kit fallback is the scheduled mitigation)
- Which Mar-13 CSC-289 design actually ran in Spring 2026, and what broke (instructor field data)
- **ADR-006** (course-repo path form) — blocks graduation of all student-facing material
- **ADR-010** (who may CLEAR, per course and customer type) — blocks the CSC-289 team spine, B-017 and B-019
- The institution's full legal name, and whether it belongs in student-facing material at all

When a task needs a decision of record that doesn't exist, write an ADR proposal in `phase0/` and flag it — never silently decide.
