# ADR-003: Dataman Stakeholder Interaction Model — Graduated (2 canned + 1 rehearsal + 1 live)

**Status**: Accepted — 2026-07-23 (instructor ruling, this session)
**Date raised**: 2026-07-23
**Raised by**: Task 1.0a executor (shared Dataman class artifacts)
**Deciders**: A. Norris (instructor) — **decided**
**Supersedes**: the task-1.0a proposal of "3 canned + 1 live"
**Governs**: the four Dataman stakeholders and how students interact with each; interacts with `phase0/KAYFABE_ARCHITECTURE.md`, the RSI mechanism, and the Week 3–4 assessments

## Context

Task 1.0a produced three canned external-stakeholder transcripts (parent, teacher, retro collector), a reference ERD, a seeded backlog, and a grading key. It flagged an undecided fourth stakeholder — the **instructor-as-client** — and two coupled questions: (a) three or four transcripts, and (b) canned vs. live for the fourth.

Two facts shaped the ruling:
- **The fourth stakeholder is the one the instructor plays live.** UV `Week_03` line 99 and `Week_04` Part 1 have the instructor role-playing the stakeholder in class. `ASSESSMENT_NOTES.md` line 14 names "weekly instructor-played stakeholder interviews" among the cheapest **RSI / federal 34 CFR §600.2** compliance evidence the course has. A fully canned transcript could quietly *replace* that live interview and erode its compliance value.
- **All-canned is weak pedagogy.** Reading finished transcripts trains one skill (reading requirements); it never makes students *conduct* an interview. Requirements elicitation is a doing skill.

## Decision (in force)

Adopt a **graduated interaction model** across the four stakeholders — **2 canned + 1 rehearsal + 1 live** — a competence ladder for requirements elicitation:

1. **Canned ×2 — *read and analyze*.** Two finished transcripts students mine solo for entities, needs, and stories. Base rung: reading requirements from a source. (Already shipped in task 1.0a.)
2. **Rehearsal ×1 — *practice conducting*.** One stakeholder students *interview* in a low-stakes, formative practice round, working from a role card rather than a finished transcript. Building rung: eliciting, with reps before it counts. Staging (peer-pair role-play, TA, or a low-stakes instructor round) is a Week 3–4 design detail for tasks 1.3/1.4.
3. **Live ×1 — *elicit for real*.** The instructor-played, graded client interview. Applied rung, and the **RSI anchor** — this is the weekly-interaction compliance evidence, preserved intact.

**RSI upside (the reason to prefer this):** the model creates *two* substantive-interaction touchpoints (rehearsal + live) instead of one, strengthening the RSI evidence chain rather than merely protecting it — while cutting pure-canned to the minimum needed to teach reading.

### Proposed stakeholder → tier assignment (adjustable)

| Stakeholder | Tier | Why |
|---|---|---|
| **Retro collector** | Canned | Richest data-model source and a scope-trap; rewards careful *written* analysis, less a live-elicitation target. |
| **Parent** | Canned | Clear buyer needs; a clean read for the base rung. |
| **Teacher** | **Rehearsal** | Primary user with nuanced classroom needs — good elicitation practice. The 1.0a teacher transcript becomes the **role-card seed**, not a handed-out transcript. |
| **Instructor-as-client** | **Live** | The client commissioning the modernization; instructor-played, the RSI anchor. Never written as a canned transcript (Rule 8 held). |

The tier *counts* are the ruling (2/1/1); this specific mapping is the recommended assignment and may be swapped (e.g. retro collector ↔ teacher) without reopening the ADR.

### Layer / register (unchanged from proposal)

Write the rehearsal role card and the live client brief in the **neutral in-world client register (L2)**; **coin no new named client persona** (lexicon lock, `SHODANN_Character_Bible.md` §5). The instructor may drop to Andrew-OOC (L0) live at their discretion — the brief supplies the in-world client; the human decides how far to stay in character.

## Reconciliation with task 1.0a (no rework to PR #13)

- The **parent** and **retro collector** canned transcripts stand as shipped.
- The **teacher** canned transcript is retained as the **rehearsal role-card seed** — its content is valid source material; tasks 1.3/1.4 recast it from "handed-out transcript" into "role card the rehearsal is performed from."
- The **instructor-as-client** was correctly never written; tasks 1.3/1.4 author it as a **live role brief** (L2).
- The seeded backlog already contains no story motivated *only* by the deferred instructor-as-client persona (`Grading_Key.md` guarantee 3); stories that persona uniquely motivates are added when the live brief is authored.

## Options considered

- **A — 3 canned + 1 live** (task-1.0a proposal). Preserved RSI, but left three of four as pure-canned. **Superseded** by the graduated model.
- **B — 4 full canned transcripts.** Literal read of master-plan §2; risked replacing the live RSI interview and taught no elicitation. **Rejected.**
- **C — 2 canned + 1 rehearsal + 1 live** (this decision). Minimizes pure-canned, teaches read→rehearse→live, and adds an RSI touchpoint. **Accepted.**

## Consequences

- Task 1.0a ships complete at three canned transcripts; two remain canned, one is reclassified as the rehearsal seed — **no file rework required in PR #13** beyond this ADR.
- Tasks 1.3/1.4 own authoring the **rehearsal role card** (from the teacher transcript) and the **live client brief** (instructor-as-client, L2), plus wiring the rehearsal into the Week 3–4 machinery.
- The RSI / federal-compliance evidence chain is not only preserved but **extended** (rehearsal + live).
- One open design detail delegated to 1.3/1.4: the concrete staging of the rehearsal round (peer-pair vs. TA vs. low-stakes instructor). Not a canon question.
