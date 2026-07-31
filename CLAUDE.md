# CLAUDE.md — course-cts285-storming

You are an executor agent building Fall 2026 course material for **CTS-285** (Capstone I, systems analysis & design) and its Spring successor **CSC-289** (Capstone II, programming capstone) at FTCC, inside the **AlgoCratic Futures™ / AlgoCratic Media** immersive frame. Satire is the vehicle; competence is the destination. This repo is the staging ground: plans, canon, and drafts live here; finished material graduates to the course repos.

**Multi-agent workflow, fan-out rules, and session handoff protocol: see `CLAUDE_SUPPLEMENTARY.md`.** Read it before spawning subagents or picking up another session's work.

## Read first, in this order

1. `phase0/` — ALL of it. These are hard constraints, not background:
   - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator whose content is software development)
   - `SHODANN_Character_Bible.md` — voice canon; §7 governs any automated feedback text; §9 is the never-list
   - `CTS285_Canonical_Points_Table.md` — THE points source of truth (750). No assessment exists that isn't a row there.
   - `NAMING_CANON.md` — mechanical renames + the Dataman vs. DataMon two-basis table (per ADR-004) + the Trusted Workflow definition (graded quiz answers depend on these)
   - `PRISM_Course_Mapping.md` — the ladder spans the program; CTS-285 exits at ORANGE, CSC-289 at GREEN
   - `ADR-001-csc289-team-based.md` — the 289 ruling (team-based, merged spine, GREEN Trajectory Check, Cold Start Track)
   - `ADR-002-points-are-header-level.md` — points bind at the assignment header; sub-items are descriptive (**overrides non-negotiable #1 below**)
   - `ADR-003-instructor-as-client-persona.md` — the stakeholder ladder: 2 canned transcripts + 1 rehearsal + 1 live instructor-as-client (the graded RSI anchor)
   - `ADR-004-two-modernization-bases.md` — Dataman *and* DataMon are both student bases; exemplars use Dataman (**overrides non-negotiable #2 below**)
   - `ADR-005-prerequisite-baseline.md` — 26FA baseline = GitHub account + working Python, **not** CSC-113/114
   - `ADR-006-course-repo-path-form.md` — **Proposed, not ruled**: student-facing course-repo references carry `<!-- PATHFORM: pending spine ruling -->`; nothing student-facing graduates until it is ruled
   - `QM_Retirement_Note.md` — QM is gone; RSI mechanisms survive (federal, not QM)
2. `planning/26FA_Consolidation_Master_Plan.md` — the plan of record: assessment verdicts, the 16-week spine (§2), the phased task breakdown (§3), interleave map and agent intelligence (§6)
3. `planning/ASSESSMENT_NOTES.md` — per-pipeline operational detail, including the full legacy-asset → week interleave table
4. `reference/voice-canon/README.md` — index of exported voice canon; `reference/PRISM.html` is the canonical framework

## Where source material lives

| Source | Location | Notes |
|---|---|---|
| UV-refresh CTS-285 (the base being adapted) | `sources/uv-285/` — frozen 54-file mirror (origin `../csc_dash/courses/CTS-285/`) | Adapt from the mirror, not the sibling repo: task 0.8 froze it so fan-out is reproducible and diffable. ~60% survives with mechanical adaptation; **never trust its indexes/audits — they claim materials that don't exist** |
| UV-refresh CSC-289 | `sources/uv-289/` — frozen 32-file mirror (origin `../csc_dash/courses/CSC-289/`) | Two forked architectures; ADR-001 governs the merge |
| Legacy AlgoCratic repo | `sources/legacy/` — frozen 164-file mirror (origin `../course-cts285-template/`) | The 26SP alignment cluster (engine briefs, terminology maps, GRD creative briefs) feeds weeks 13–16; the aligned briefs are in the mirror at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` |
| Voice canon | `reference/voice-canon/` | Exported from the AlgoCratic Claude project (which you cannot access — everything needed is here; if something's missing, say so instead of improvising canon) |
| Dataman PDF manual | `reference/dataman/historical/DataMan_US.pdf`; faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` | In hand. Module 1's analyst-read and doc-analysis quiz work from the transcript (NAMING_CANON: the 1977 manual is read regardless of a student's chosen basis). Redistribution rights remain an open human blocker — analyse it, don't republish it |

## Non-negotiables

1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`. Per **ADR-002**, the only binding arithmetic is that assignment-header values sum to 750 — sub-items and rubric rows below the header are descriptive and are **not** required to sum to it. Percentages are always derived, never stored as authority.
2. Naming canon applies mechanically. Per **ADR-004** there are two live terms and two student bases: **Dataman** (the 1977 physical calculator and the "Dataman 2.0" modernization spine — **all instructor exemplars and worked examples use Dataman**) and **DataMon** (the adopted virtual-pet reskin basis, "DataMon 2.0", whose legacy creature-game features seed the wk-2 stretch epics). The `man`/`Mon` swap is the search-and-replace hazard; the retired lowercase "Datamon" is DataMon's historical origin, not a live term. Trusted Workflow: Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge.
3. Voice: Corporate body (L2) + SHODANN interjections (L1) + "Andrew's Note" OOC margins (L0) + Underground off-camera. Never re-voice the Underground; never rewrite Andrew's Notes into character; never use the retired punitive register at a student. The bible's never-list wins every conflict.
4. Write student-facing weeks to the struggle-pattern template: Struggle → Signs → Intervention → Success Indicator, with Dataman-specific struggles.
5. No fabricated testimonials, statistics, or "past student" anecdotes — genericize or flag for instructor sign-off.
6. Regenerate inventories from file trees, never from the docs' own claims. UTF-8 everywhere; re-encode anything revived from mojibake-afflicted legacy files.
7. New material goes in `drafts/<course>/<category>/` — the CTS-285 draft path is lowercase `drafts/cts285/` (B-002; the case-variant `drafts/CTS-285/` is retired), with existing categories `assignments/`, `knowledge-checks/`, `planning-sheets/`, `rubrics/`, `shared-dataman-artifacts/`. Nothing in this repo is student-facing until it graduates to a course repo — and per **ADR-006** (*Proposed*) nothing graduates at all until the course-repo path form is ruled: every student-facing course-repo reference carries `<!-- PATHFORM: pending spine ruling -->`, the retired csc_dash `/courses/CTS-285/...` form is never reintroduced, and no leaf task invents a prefix.

## Open human blockers (do not wait on these for mechanical work; do not resolve them yourself)

- Dataman PDF manual **redistribution rights** (the PDF and a faithful transcript are in hand under `reference/dataman/`; only rights are unconfirmed — treat the original as a classroom analysis artifact, never a redistributed product)
- Jennifer Fisher / GRD-242 fall-consult calendar + deliverables (gates wk-15 finalization; canned brand-kit fallback is the scheduled mitigation)
- Which Mar-13 CSC-289 design actually ran in Spring 2026, and what broke (instructor field data)

When a task needs a decision of record that doesn't exist, write an ADR proposal in `phase0/` and flag it — never silently decide.
