# Repository Inventory and Prioritized Backlog

**Inventory date:** 2026-07-29  
**Scope:** The tracked repository at commit `499c15e`

## 1. Purpose

This repository is the work area for the Fall 2026 CTS-285 rebuild and the
Spring 2027 CSC-289 rebuild.

It has four jobs:

1. Record course decisions.
2. Keep source snapshots with provenance.
3. Hold work-in-progress course material.
4. Plan the transfer of finished material to the course repositories.

Nothing in this repository is student-facing. Finished material must pass the
quality gates before it moves to a course repository.

## 2. Method

This inventory uses the file tree and Git history. It does not use old
materials indexes as evidence.

The inventory excludes `.git/`. File counts include all other tracked files.

## 3. History

| Date | Change |
|---|---|
| 2026-06-09 | The repository started as a storming area. |
| 2026-07-22 | The master plan and the first Phase 0 canon files arrived. The plan joined the legacy and UV-refresh pipelines. |
| 2026-07-23 | The project added voice canon, the two-layer world model, the Dataman manual, source ingestion, the 750-point regime, the manual transcript, and shared Dataman artifacts. |
| 2026-07-24 | The project accepted ADR-004 and ADR-005. It also adapted five knowledge checks, Weeks 3–5 and 7, and six planning sheets. |

The current history ends on 2026-07-24. The repository now has a sound
foundation and a partial CTS-285 draft. It does not yet have a complete course.

## 4. Inventory

The repository has **317 tracked files**.

| Area | Files | Purpose | Current state |
|---|---:|---|---|
| Root | 4 | Entry point and agent rules | Active |
| `phase0/` | 11 | Canon, points, naming, and accepted decisions | Complete foundation |
| `planning/` | 4 | Plan of record, assessment notes, source manifest, and proposed project instructions | Useful, but some status text is stale |
| `reference/` | 12 | Voice canon, PRISM, and Dataman source material | Present; manual rights remain open |
| `sources/` | 251 | Frozen copies from three source trees, plus an index | Ingestion complete |
| `drafts/` | 35 | Adapted CTS-285 work and one DataMon spike | Partial |

### 4.1 Decision and planning files

`phase0/` is the controlling layer. It contains:

- the two-layer world model;
- the SHODANN voice rules;
- the 750-point CTS-285 table;
- the naming and Trusted Workflow rules;
- the PRISM course map;
- five accepted ADRs; and
- the QM retirement ruling.

`planning/26FA_Consolidation_Master_Plan.md` remains the plan of record for the
course spine. Its task status is not current after the work on 2026-07-24.
This backlog records the current state.

### 4.2 Reference files

The reference area contains:

- seven voice-canon files;
- the canonical PRISM HTML file; and
- four Dataman files, including the historical PDF and a faithful transcript.

The Dataman source now exists. The right to distribute the PDF is not recorded.

### 4.3 Source snapshots

Task 0.8 reviewed **298 source files**. It copied **250 files** and recorded
48 files only in the manifest.

| Source tree | Origin | Copied files | Main use |
|---|---|---:|---|
| `sources/uv-285/` | UV-refresh CTS-285 | 54 | Base for CTS-285 assignments, activities, guides, and references |
| `sources/uv-289/` | UV-refresh CSC-289 | 32 | Two course designs that ADR-001 requires the project to merge |
| `sources/legacy/` | Legacy AlgoCratic repository | 164 | Voice, team formation, engine briefs, aligned briefs, and cross-discipline material |

The copied bodies are source evidence. They still contain old names, wrong
points, old course structures, and other known defects. Do not publish them.

### 4.4 Drafts

The draft area contains these completed units:

- the shared Dataman artifact set;
- the 750-point header normalization;
- the Week 3 and Week 4 Dataman assignments;
- the Week 5 and Week 7 Dataman assignments;
- the Module 2 through Module 6 knowledge checks; and
- six adapted planning sheets.

The draft area also contains partial units:

- Week 1 has only a points update. It still uses the old scenario and old
  orientation.
- Week 2 has only a points update. It still asks students to select a project.
- Week 6 has the correct total and no duplicate retrospective. It still needs
  the Dataman and honesty passes.
- Week 9 has the correct total. It still needs Dataman, ADR, and peer-review
  mechanics.
- Week 11 has only a points-basis update.
- Week 12 has two explicit content stubs for deployment and presentation.
- `COURSEMAP.md`, `README.md`, and the rubric file are interim copies. They
  still contain retired structure or policy.

**Resolved 2026-07-29 (B-002).** There is one CTS-285 draft path: `drafts/cts285/`.
The planning sheets moved there from the retired `drafts/CTS-285/` (git rename,
history preserved). The selected reference form for repo-internal paths is
**repo-root-relative with no leading slash**, backticked — e.g.
`drafts/cts285/planning-sheets/Sprint_Planning_Template.md`. That form was
already dominant at 296 occurrences against a handful of leading-slash strays.

This ruling covers **repo-internal** references only. The **course-repo** path
form that student-facing "Copy X into your repository" lines will use is a
separate, still-open spine decision — see `drafts/cts285/planning-sheets/WIRING_MANIFEST.md`.

## 5. Gaps

### 5.1 Human decisions

1. Confirm the right to distribute the Dataman PDF.
2. Confirm the GRD-242 fall consult dates and deliverables. Approve the canned
   brand-kit fallback.
3. Record which CSC-289 design ran in Spring 2026 and what failed.
4. Confirm the Fall 2026 and Spring 2027 course calendars.
5. Apply or reject `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` in the external
   project settings.

ADR-005 resolved the old prerequisite question. It is no longer a blocker.

### 5.2 Course content

- The Week 1 assignment and Dataman quiz do not exist in final draft form.
- The Week 2 assignment does not use the seeded backlog.
- Weeks 6, 9, 11, and 12 need content work.
- The six UV-refresh activities have no adapted draft.
- The remaining activity handouts and role cards do not exist.
- The instructor guide stops after Module 3.
- Weeks 13–16 do not exist.
- No CSC-289 merged draft exists.

### 5.3 Structure and control

- ~~The two CTS-285 draft paths differ only by letter case.~~ Resolved 2026-07-29 (B-002).
- ~~The final relative link form is not decided.~~ Resolved for repo-internal
  references 2026-07-29 (B-002). The **course-repo** form students are pointed at
  (PATHFORM) is still open — a spine decision, tracked in `WIRING_MANIFEST.md`.
- The master plan and root README do not show all completed work.
- `sources/README.md` still says that `sources/` is an empty scaffold.
- Several old task notes describe decisions that later ADRs resolved.

### 5.4 Quality

- No full link check has passed.
- No full points check has passed on the complete course.
- No full naming, voice, honesty, or encoding check has passed.
- Old testimonials and unsupported anecdotes remain in interim drafts.
- Old QM text and “AlgoCratic is optional” text remain in interim drafts.
- No student-journey continuity review has passed.
- No material has graduated to a course repository.

## 6. Priority Rules

- **P0:** Do this now. It blocks Fall 2026 work or prevents reliable edits.
- **P1:** Do this next. It completes the CTS-285 course spine.
- **P2:** Do this after the CTS-285 handoff contract is stable.
- **P3:** Do this before publication.

## 7. Prioritized Backlog

### P0 — Control the baseline

| ID | Work | Depends on | Done when |
|---|---|---|---|
| B-001 | Get the five human decisions in section 5.1. | Instructor and partners | Each answer has a dated record. Each blocked task has a fallback. |
| ~~B-002~~ **DONE 2026-07-29** | Select one CTS-285 draft path and one relative link form. Move the planning sheets to that path. | None | ✅ One path exists (`drafts/cts285/`). ✅ Repo-internal references use the selected form (repo-root-relative, no leading slash). Course-repo PATHFORM remains open by design — see §4 note. |
| B-003 | Reconcile the master plan, root README, source README, and old handoff notes with accepted ADRs and completed work. | B-002 | Status text matches the tree and Git history. Resolved blockers do not appear as open. |
| B-004 | Rewrite Week 1 and create the 15-point Dataman document-analysis quiz. | ADR-005; Dataman transcript; B-001 for PDF release | The assignment uses configure-and-verify setup, the analyst read, the Media frame, and the canonical points. |
| B-005 | Rewrite Week 2 around the paper simulation and seeded Dataman or DataMon backlog. | Shared Dataman artifacts | The assignment removes project selection and uses the canonical board and Trusted Workflow. |
| B-006 | Finish Weeks 6 and 9. Add Dataman risks, shared review mechanics, and ORANGE ADR evidence. | B-002 | Both assignments use the common project and have no invented anecdotes. |
| B-007 | Expand Weeks 11–12. Add QA, deploy, launch content, the incident exercise, and grouped presentations. | B-002 | Week 12 has no stubs. Both files use the struggle-pattern format. |

### P1 — Complete CTS-285

| ID | Work | Depends on | Done when |
|---|---|---|---|
| B-008 | Adapt the six activities and create the missing role cards and checklists. | B-004 through B-007 | Each activity points to a real handout and matches the solo Dataman or DataMon spine. |
| B-009 | Complete the instructor guide for Modules 4–8. Keep RSI actions and remove QM doctrine. | B-004 through B-008 | Each module has teaching notes, struggle patterns, grading help, and RSI actions. |
| B-010 | Build Week 13 for team formation and engine or skin selection. | Legacy alignment sources | The team contract, failure archetypes, and selection evidence exist. |
| B-011 | Build Week 14 for terminology discovery and Spring user stories. | B-010 | Teams produce a validated Spring backlog. |
| B-012 | Build Week 15 for wireframes, the GREY consult, and the design brief. | B-001 GRD ruling; B-011 | The live consult or approved fallback produces the required evidence. |
| B-013 | Build Week 16 for the capstone pitch and handoff package. | B-012 | The package matches the CSC-289 Week 1 entry contract. |
| B-014 | Rebuild the CTS-285 course map, README, rubric set, calendar, and materials index from the final tree. | B-004 through B-013 | The files show 750 points, 16 weeks, current names, and only real files. |

### P2 — Build delivery surfaces and CSC-289

| ID | Work | Depends on | Done when |
|---|---|---|---|
| B-015 | Apply the Media skin and voice rules to finished CTS-285 files. Add the OOC privacy statement for any live SHODANN system. | B-014 | Voice layers are distinct. The never-list passes. The privacy statement is plain and complete. |
| B-016 | Build Canvas pages from the finished assignments. | B-015 | Each Canvas page matches the source assignment and the 750-point table. |
| B-017 | Merge the CSC-289 spine in one session. Use ADR-001 and the three required source files. | B-013; B-001 Spring field data and calendar | One team-based, 1,600-point course map exists with a clean two-week cadence. |
| B-018 | Build the GREEN Trajectory Check and move AI process work to Week 1. | B-017 | Week 1 hardens the CTS-285 handoff and supports the Cold Start Track. |
| B-019 | Build the remaining CSC-289 assignments, rubrics, guides, and Canvas pages. | B-017 and B-018 | The full team course exists and keeps individual evidence and RSI actions. |

### P3 — Verify and graduate

| ID | Work | Depends on | Done when |
|---|---|---|---|
| B-020 | Remove or mark retired and duplicate material. Resolve all missing referents. | B-014 and B-019 | Every retained file has one clear purpose. |
| B-021 | Run the full quality gate. Check links, points, names, voice, honesty, encoding, privacy, and RSI. | B-020 | All checks pass or have an approved exception. |
| B-022 | Run the adversarial continuity review from CTS-285 Week 1 through CSC-289 Week 1. | B-021 | The review finds no broken handoff, role, tier, workflow, or project assumption. |
| B-023 | Transfer approved material to the course repositories. | B-022 | The course repositories contain the approved files and regenerated indexes. |

## 8. Next Work

Start B-001 and B-002 at the same time. Then do B-004 through B-007 in one
controlled CTS-285 spine sequence. Do not start the CSC-289 merge before B-013
defines the handoff package.
