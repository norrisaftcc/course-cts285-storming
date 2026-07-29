# Planning-Sheet Wiring Manifest

> **Produced by issue #5 (task 1.7 REVISED) for the per-week assignment-adaptation tasks to consume.** This task adapts the six planning-sheet *templates*; it does **not** edit any assignment or activity file (those live in read-only `../csc_dash` and are owned by the per-week tasks — Rule 1 forbids a leaf co-editing them in the same wave). This manifest tells each owning task the exact reference line to add or re-point, and where.

> **Location note (B-002, 2026-07-29):** these templates now live at `drafts/cts285/planning-sheets/`; the case-variant `drafts/CTS-285/` path is retired. B-002 also fixed the **repo-internal** reference form (repo-root-relative, no leading slash). **It did not rule PATHFORM** — the course-repo prefix below remains open. The two are different questions: B-002 governs how files in *this staging repo* refer to each other; PATHFORM governs what a *student* is told to copy from a course repo that does not exist yet.

## How to read this

- **Path prefix is deliberately unresolved.** Every source reference uses the csc_dash form `/courses/CTS-285/planning-sheets/X.md`, which will **not** resolve in the 26FA course repo. The final course-repo layout is undecided (nothing has graduated from this repo), and the chosen relative form is a cross-cutting convention that assignments, activities, and Canvas HTML (task 3.4) all inherit — a **spine/coursemap decision, not a leaf one**. Until the spine rules, the prefix below is the placeholder `<!-- PATHFORM: pending spine ruling -->`. The owning task substitutes the ruled prefix; it must **never** re-use the csc_dash `/courses/CTS-285/...` form.
- **"Existing"** = a reference already in the source assignment, to be re-pointed to the ruled path form. **"Orphan"** = a template that no assignment currently references by path, to be added.
- The **target filename** (the `as Y.md` part) is the student's in-repo copy name; where a source reference already names one, it's preserved.

---

## References, keyed by owning file

### 1. Sprint_Planning_Template.md — EXISTING
- **Owning task:** Week_05 (Sprint 1: System Design) assignment adaptation
- **Insertion point:** `Week_05_Assignment_Sprint_1_System_Design.md:66` (under `### Use the Sprint Planning Template`, line 64)
- **Reference line to emit:**
  `Copy <!-- PATHFORM: pending spine ruling -->/Sprint_Planning_Template.md into your repository as sprint-1-planning.md.`

### 2. Sprint_Retrospective_Template.md — EXISTING (referenced from TWO sites)
- **Owning tasks:** Week_05 and Week_06 assignment adaptation
- **Insertion point A:** `Week_05_Assignment_Sprint_1_System_Design.md:385`
  `Copy <!-- PATHFORM: pending spine ruling -->/Sprint_Retrospective_Template.md into your repo as sprint-1-retrospective.md.`
- **Insertion point B:** `Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md:36` (under `### Use the Sprint Retrospective Template`, line 34)
  `Copy <!-- PATHFORM: pending spine ruling -->/Sprint_Retrospective_Template.md into your repository as sprint-1-retrospective.md.`
- **⚠ Duplicate-deliverable flag:** both sites target the same in-repo filename `sprint-1-retrospective.md`. Master plan §2 already notes the "wk-6 duplicate deliverable merged." The Week_05/Week_06 adaptation tasks should decide which assignment owns the retrospective deliverable so students aren't asked to produce it twice. **Not resolved here** (spine/assignment decision).

### 3. Risk_Register_Template.md — EXISTING
- **Owning task:** Week_06 (Sprint 1: Retrospective + Risk Register) assignment adaptation
- **Insertion point:** `Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md:98` (under `### Use the Risk Register Template`, line 96)
- **Reference line to emit:**
  `Copy <!-- PATHFORM: pending spine ruling -->/Risk_Register_Template.md into your repository as risk-register.md.`

### 4. Daily_Standup_Template.md — ORPHAN (referenced by no `Copy`-path line, but graded)
- **Owning task:** Week_05 assignment adaptation
- **Context:** `Week_05_Assignment_Sprint_1_System_Design.md:328` embeds a standup format inline under `### Format (Use Daily Standup Template)` and `:442` grades **Daily Standups at 10 pts** inside the 75-pt Sprint 1 header — yet no `Copy`-path reference to the template exists.
- **Reference line to emit (add near line 328):**
  `Copy <!-- PATHFORM: pending spine ruling -->/Daily_Standup_Template.md into your repository as sprint-1-standups.md.`
- **⚠ Format-reconciliation flag (verify step, issue #5):** the inline format at `:328` is a **3-question** subset (yesterday / today / blockers); the template carries **4 sections** (adds "Help needed?"). The template is the fuller superset and produces the graded artifact; a note was added to the template bridging the gap **without editing the assignment**. The Week_05 task decides whether to align the assignment's embedded format to the 4-section template or keep the 3-question subset. **Not resolved here.**

### 5. User_Story_Template.md — ORPHAN
- **Owning tasks:** Week_04 (User Stories & Product Backlog) assignment, and Module_02 (User Story Workshop) activity
- **Context:** `Module_02_User_Story_Workshop.md:6` and `:55` list the "User Story Template (provided)" with no `Copy`-path line; Week_04 is the user-story assignment and contains no planning-sheet reference at all.
- **Reference line to emit (Week_04, at the point students are told to draft stories):**
  `Copy <!-- PATHFORM: pending spine ruling -->/User_Story_Template.md into your repository as user-stories.md.`
- **Reference line to emit (Module_02, replacing the bare "(provided)" at :6/:55):**
  `User Story Template — copy <!-- PATHFORM: pending spine ruling -->/User_Story_Template.md into your repository.`

### 6. Exit_Ticket_Template.md — ORPHAN
- **Owning task:** whichever assignment/activity operationalizes the exit-ticket cadence (no source assignment references it by path today)
- **Context:** the template is the **RSI cadence artifact** (~12–15×/semester); it must be reachable even though no assignment currently links it. The owning task decides the home (likely a recurring activity or the LMS discussion cadence rather than a single graded assignment).
- **Reference line to emit (wherever the exit-ticket cadence is introduced):**
  `Copy <!-- PATHFORM: pending spine ruling -->/Exit_Ticket_Template.md into your repository (or use the LMS exit-ticket prompt) each activity/lab session.`

---

## Summary table

| Template | Status | Owning task(s) | Source insertion point(s) | Target in-repo name |
|---|---|---|---|---|
| Sprint_Planning_Template.md | Existing | Week_05 | Week_05:66 | `sprint-1-planning.md` |
| Sprint_Retrospective_Template.md | Existing ×2 | Week_05, Week_06 | Week_05:385, Week_06:36 | `sprint-1-retrospective.md` (⚠ duplicate) |
| Risk_Register_Template.md | Existing | Week_06 | Week_06:98 | `risk-register.md` |
| Daily_Standup_Template.md | Orphan | Week_05 | Week_05:328 (+ graded :442) | `sprint-1-standups.md` (⚠ 3-vs-4 field mismatch) |
| User_Story_Template.md | Orphan | Week_04, Module_02 | Module_02:6/:55; Week_04 (none yet) | `user-stories.md` |
| Exit_Ticket_Template.md | Orphan | TBD (cadence owner) | none | (cadence artifact) |

## BLOCKED-ON (consumed downstream, not resolved here)

- **Post-ingest path convention (spine/coursemap):** every `<!-- PATHFORM: pending spine ruling -->` above awaits the spine ruling on the 26FA course-repo relative path form. Do not invent one; do not re-use the csc_dash `/courses/CTS-285/...` form. **Now tracked as a decision of record: `phase0/ADR-006-course-repo-path-form.md` (Proposed).** The three previously-stale csc_dash references (Week_05 ×2, Week_06 ×1) were converted to the placeholder on 2026-07-29, so `grep -rn "PATHFORM: pending spine ruling"` now enumerates every substitution site.
- **Inbound reference edits** (re-pointing Week_05/06 + adding the Week_04 / Module_02 / Week_05-standup / exit-ticket references) are owned by the per-week assignment-adaptation tasks. This task only emits this manifest.
- **Sprint_Retrospective duplicate deliverable** (Week_05 vs Week_06) — assignment/spine decision.
- **Daily_Standup 3-question vs 4-section format** — Week_05 assignment-adaptation decision.
