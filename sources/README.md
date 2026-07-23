# sources/ — frozen source snapshots for 26FA consolidation

This tree holds **curated copies** of source material pulled from the sibling repos, so that Phase 1–4 fan-out is reproducible and diffable without reaching outside this repo at adapt time.

- `uv-285/` ← `../csc_dash/courses/CTS-285/` (UV-refresh CTS-285)
- `uv-289/` ← `../csc_dash/courses/CSC-289/` (UV-refresh CSC-289)
- `legacy/` ← `../course-cts285-template/` (legacy AlgoCratic template repo)

**Only files with a KEEP / ADAPT / HARVEST verdict get copied here.** RETIRE / RELOCATE / UNKNOWN files are recorded in `planning/INGESTION_MANIFEST.md` and left in place. Every copied file carries a provenance header (origin path, verdict, target 26FA slot, ingest date). Bodies are preserved **verbatim** — their defects (retired terminology, wrong point figures, solo/team framing) are exactly what downstream tasks are chartered to find and fix.

**Status: scaffold only.** The copy pass is task **0.8** (see the tracking issue and `planning/INGESTION_MANIFEST.md`). This directory is intentionally empty of source copies until 0.8 runs. Nothing here is student-facing.

Regenerate the manifest from the file tree with `find`, never from any in-tree index (master plan §6.3-1).
