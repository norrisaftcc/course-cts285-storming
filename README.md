# course-cts285-storming

Brainstorming and new-content staging ground for the **26FA CTS-285 / 27SP CSC-289 consolidation** (AlgoCratic Futures™ / AlgoCratic Media pipeline).

This repo holds planning artifacts and net-new material drafts. Finished material graduates to the course repos; nothing here is student-facing until it does.

## Contents

- `planning/26FA_Consolidation_Master_Plan.md` — the master plan (v1.1): assessment verdicts for both pipelines, the 16-week CTS-285 spine, the phased agent-fleet execution plan, interleave map, and agent intelligence digest. **Start here.**
- `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` — file-tree inventory, project history, source map, gaps, and dependency-based backlog. **Counts are a snapshot (accurate as of commit `499c15e`), not a live index** — regenerate from the tree before relying on them.
- `planning/ASSESSMENT_NOTES.md` — condensed candid findings from the four assessment agents, including the full legacy-asset → 26FA-week interleave table.
- `phase0/` — Phase 0 foundation artifacts (12 files; all Accepted except ADR-006, which is **Proposed**):
  - `CTS285_Canonical_Points_Table.md` — **the** single source of truth for CTS-285 points (750 total). Assignment-header values are the binding arithmetic (ADR-002); sub-items below a header are descriptive.
  - `SHODANN_Character_Bible.md` — character canon + Media-skin voice template. Required context for every skin-pass task; §7 governs automated (velocity-bot) feedback tone.
  - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator).
  - `PRISM_Course_Mapping.md` — the ladder-across-the-program canon.
  - `NAMING_CANON.md` — mechanical rename table (Sacred Flow→Trusted Workflow, GRAY→GREY, Dataman vs. DataMon two-basis table, workflow-step canon, etc.).
  - `QM_Retirement_Note.md` — QM pulled program-wide; RSI retained (federal, not QM); audit disposition.
  - Decisions of record — `ADR-001` CSC-289 team-based, merged spine, GREEN Trajectory Check, Cold Start Track · `ADR-002` points bind at the assignment header · `ADR-003` stakeholder ladder (2 canned + 1 rehearsal + 1 live) · `ADR-004` two modernization bases, Dataman and DataMon · `ADR-005` prerequisite baseline (GitHub + Python, not CSC-113/114) · `ADR-006` course-repo path form (**Proposed** — blocks graduation of student-facing material until ruled).
- `sources/` — frozen mirrors of the three source corpora, ingested by task 0.8 so adaptation is reproducible without reaching outside this repo: `uv-285/` (54 files), `uv-289/` (32), `legacy/` (164, including the 26SP GRD creative briefs). Bodies are verbatim; their defects are what downstream tasks are chartered to fix.
- `drafts/` — net-new material in progress. `cts285/` holds `assignments/` (Weeks 01–07, 09, 11, 12), `knowledge-checks/` (Modules 02–06), `planning-sheets/` (6 templates + `WIRING_MANIFEST.md`), `rubrics/`, `points-normalization/`, and `shared-dataman-artifacts/` (the 1.0a exemplar set); `spikes/` holds the DataMon reskin seed. **Regenerate this list from the tree, never from a doc's claims.**
- `reference/` — `voice-canon/` (exported AlgoCratic voice material), `PRISM.html` (the canonical framework), and `dataman/` (the 1977 manual PDF plus a faithful transcript).

## Rules for executor agents working in this repo

1. Load `phase0/` in full before writing anything. The bible, points table, and naming canon are hard constraints.
2. Never trust legacy indexes/audits — regenerate inventories from file trees.
3. Curated context only: the GREY-only pedagogy stack (FOBSS internals, Instructor Growth Protocol, Hidden Mechanics) never enters student-material generation context.
4. Delta-only, growth-first language in anything SHODANN says. She never lies, never compares Creators to each other, never threatens.

*The Algorithm is cheering for your growth.*
