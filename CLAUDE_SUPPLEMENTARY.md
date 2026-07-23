# CLAUDE_SUPPLEMENTARY.md — Multi-Agent Workflow & Handoff Doctrine
*Companion to CLAUDE.md. This file covers how the work is orchestrated across Claude Code sessions and subagents; CLAUDE.md covers what the work is.*

## Why this file exists

This project has already been burned once by uncoordinated agentic generation: on 2026-03-13, two parallel sessions produced two incompatible CSC-289 architectures (solo vs team), self-audited them the same day, and nobody noticed for four months (see ADR-001). Every rule below exists to prevent a recurrence.

## Rule 1 — Spine work is single-session; leaf work fans out

- **Spine tasks** (coursemaps, points propagation across files, module architecture, the 289 merge, COURSEMAP/README rebuilds) run in ONE session with ALL source documents in context. Never parallelize a spine.
- **Leaf tasks** (skin passes on individual files, template authoring, knowledge checks, Canvas pages, per-file Dataman swaps) fan out freely — one file, one owner, no two agents touching the same file in a wave.
- If a leaf task turns out to require a spine decision, stop and flag; don't make the decision from inside a leaf.

## Rule 2 — Model tiering

- **Opus-tier work:** anything voice-sensitive (SHODANN lines, Corporate satire, Underground), net-new modules (wks 1–2 rewrite, wks 13–16 on-ramp, instructor guide M4–8), structural merges (289 spine), and the adversarial continuity review.
- **Sonnet-tier work:** mechanical propagation (points normalization, naming-canon sweeps, Dataman noun swaps, index regeneration, link fixing), template authoring from embedded formats, Canvas HTML builds from finished assignments.
- The master plan §3 tags every task. When unsure, the test is: "could this task damage canon if done tastelessly?" Yes → Opus.

## Rule 3 — Context packages (what to load per task type)

| Task type | Load |
|---|---|
| Any skin pass | Bible (whole), NAMING_CANON, KAYFABE_ARCHITECTURE, the target file. Nothing else. |
| New assignment/module | Bible, points table, KAYFABE_ARCHITECTURE, the week's row in master plan §2, the struggle-pattern rule, the relevant UV source file(s), the interleave assets listed for that week in ASSESSMENT_NOTES |
| 289 spine merge | ADR-001 + COURSEMAP-CANONICAL + MODULE-ARCHITECTURE + INSTRUCTOR-ACTION-PLAN, all in one session |
| Quiz/rubric regeneration | Points table + NAMING_CANON (workflow steps and board columns are graded answers) |
| Velocity-bot / Teacherbot prompt text | Bible §7 ONLY as tone spec (it overrides §3–4) |

**Curated-context rule:** the GREY-only pedagogy stack (FOBSS internals, Instructor Growth Protocol, Hidden Mechanics — in the Claude project, deliberately NOT exported to this repo) never enters context for student-facing generation. Explaining the technique kills it. `GREY_Clearance_Briefing.md` is your own onboarding; don't quote it into student documents.

## Rule 4 — Coordination substrate: use the Trusted Workflow ourselves

Build the course the way the course teaches building. Per work item:

1. **Issue** — one GitHub issue per task, titled from the master plan task ID (e.g. `1.6: Expand Wk11-12 skeletons`), carrying the context-package list and acceptance criteria.
2. **Branch** — `task/<phase>-<id>-<slug>` (e.g. `task/1-6-wk11-12-expansion`).
3. **Draft PR immediately** — visible work-in-progress is the point.
4. **Develop** in `drafts/<course>/<module-or-week>/`.
5. **Finish PR** with the handoff block (below) in the description.
6. **Review** — human, or the continuity-review agent for leaf work.
7. **Merge.**

## Rule 5 — Session handoff block

Every PR description (and any session that ends mid-task, as a comment on its issue) ends with:

```
## Handoff
DONE: <what is complete and where it lives>
REMAINING: <what is not done, with enough detail to resume cold>
DECIDED: <micro-decisions made in-session that aren't in phase0/ — or "none">
BLOCKED-ON: <human blockers or missing inputs — or "none">
CANON-TOUCHED: <any phase0/ or bible edit proposed — or "none">
```

A fresh session resumes from the issue + handoff block + CLAUDE.md read-first list. Nothing lives only in a session's memory.

## Rule 6 — Acceptance criteria (every PR, before review)

1. **Points-check:** every point figure matches `CTS285_Canonical_Points_Table.md` (or the 289 shell per ADR-001); rubrics sum to headers.
2. **Link-check:** every referenced file path resolves in the tree as it will exist after merge.
3. **Naming-check:** grep for retired forms (`Sacred Flow`, `GRAY`, `EventPro`, `citizen` in Media-skin text, `CTS-289`) and the Dataman/Datamon confusion.
4. **Voice-check:** no never-list violations (bible §9); no punitive register at students; Andrew's Notes untouched; SHODANN lines pass the §3 calibration tests; layers sorted per KAYFABE_ARCHITECTURE.
5. **Honesty-check:** no invented testimonials, statistics, or anecdotes.
6. **Encoding:** UTF-8, no mojibake.

## Rule 7 — Phase gates

At the end of each master-plan phase, before the next fans out: run the **continuity review** — one Opus session walks the student journey across everything merged so far (wk 1 → 16 → 289 wk 1) hunting broken assumptions: solo/team, tier labels, workflow definitions, AI expectations, calendar references, layer confusion. Its findings become issues; the phase isn't closed until they're triaged.

## Rule 8 — Escalation

- Missing input (a file the plan says exists but doesn't) → note in the issue, tag `blocked`, move to another task.
- Canon gap (two phase0 docs conflict, or a needed ruling doesn't exist) → write a short ADR proposal in `phase0/`, tag `needs-instructor`, do NOT proceed on the affected content.
- Anything touching real students, grades, privacy, or the live GitHub org → human only.

## Current status (update this section as phases close)

- **Phase 0: COMPLETE** (all foundation artifacts in `phase0/`).
- **Phase 1 (CTS-285 wks 1–12 Dataman conversion): OPEN.** Recommended first wave: (a) shared Dataman class artifacts — stakeholder transcripts, reference ERD, seeded backlog with Datamon-game stretch epics (unblocks most other Phase 1 tasks and doubles as grading keys); (b) points normalization sweep (pure Sonnet-mechanical); (c) the four missing planning-sheet templates. Wk-1 content waits on the Dataman PDF if it's not yet in `reference/`.
- Phases 2–5: see master plan §3 for the full breakdown and sequencing (0 → (1 ∥ 2) → 3 → 4 → 5).
