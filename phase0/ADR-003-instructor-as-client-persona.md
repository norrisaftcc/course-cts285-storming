# ADR-003: Instructor-as-Client Persona — Form and Layer (PROPOSAL)

**Status**: Proposed — `needs-instructor`
**Date raised**: 2026-07-23
**Raised by**: Task 1.0a executor (shared Dataman class artifacts)
**Deciders**: A. Norris (instructor) — pending
**Governs**: the fourth Dataman stakeholder ("instructor-as-client"); interacts with `phase0/KAYFABE_ARCHITECTURE.md`, the RSI mechanism, and the Week 3–4 assessments

## Context

Task 1.0a produced the shared Dataman class artifacts: three external-stakeholder transcripts (parent, teacher, retro collector), a reference ERD, a seeded backlog, and a grading key. A fourth stakeholder is named in the sources but was **not** written, because its form is genuinely undecided:

- **The count discrepancy is real.** `planning/ASSESSMENT_NOTES.md` records the historical handout gap as stakeholder transcripts **×3**; the consolidation master plan §2 names **four** stakeholders (parents, teachers, retro collectors, **instructor-as-client**). The gap between three and four *is* this question.
- **The fourth stakeholder is the one the instructor plays live.** UV `Week_03` line 99 and `Week_04` Part 1 both have the instructor role-playing the stakeholder in class ("mock interviews... I'll play your stakeholders"). `ASSESSMENT_NOTES.md` line 14 names "weekly instructor-played stakeholder interviews" as among the cheapest RSI / federal 34 CFR §600.2 compliance evidence the course has. A fully canned instructor-as-client transcript could quietly **replace** that live interview and erode its compliance value.
- **Its layer is unspecified.** `KAYFABE_ARCHITECTURE.md` sorts voices by layer (L2 in-world client / L1 SHODANN / L0 Andrew OOC), but no phase0 doc rules whether "instructor-as-client" speaks as an in-world client (L2) or as Andrew out-of-character (L0). The lexicon lock (`SHODANN_Character_Bible.md` §5) forbids coining a new named client persona without instructor approval.

So there are two coupled open questions: **(a)** does the artifact set include three or four full transcripts, and **(b)** does instructor-as-client ship as a canned transcript or as a live-play role brief?

## Decision (proposed — not yet in force)

1. **Keep the artifact set at three canned transcripts.** Parent, teacher, and retro collector ship as full 1–2 page canned transcripts (done in task 1.0a). This matches the ASSESSMENT_NOTES ×3 record and keeps the reconciliation with the ERD and backlog clean.

2. **Do not ship instructor-as-client as a canned transcript.** Preserve it as the **live, instructor-played** interview under the existing RSI mechanism. A canned transcript would undercut the weekly-interaction compliance evidence and remove the live requirements-elicitation practice the mock interview provides.

3. **When authored, write instructor-as-client as a live-play role brief** (interview-prep / role card the instructor performs from), not a substitute transcript — and defer that authoring to the task that builds the Week 3–4 assignment machinery (tasks 1.3/1.4), not task 1.0a.

4. **Layer/register:** absent a clearer ruling, write the role brief in the **neutral in-world client register (L2)** — an in-world client whose product is the Dataman modernization — and **coin no new named client persona** (lexicon lock). If the instructor prefers the persona drop to Andrew-OOC (L0) at interview time, that is compatible: the brief supplies the in-world client, the human decides live how far to stay in character.

5. **Backlog consequence (already enforced):** no seeded user story is motivated *only* by the instructor-as-client persona. Any story that persona uniquely motivates is added when the role brief is authored, not before (`Grading_Key.md` Part 5, guarantee 3).

## Options considered

- **A — Three transcripts, instructor-as-client stays live (proposed).** Preserves RSI evidence and live practice; matches ASSESSMENT_NOTES ×3; small cost that "four stakeholders" in §2 is delivered as 3 canned + 1 live rather than 4 canned.
- **B — Four full canned transcripts.** Literal read of §2; but risks replacing the live RSI interview, weakening compliance evidence, and reducing live elicitation practice. Rejected pending instructor input.
- **C — Four transcripts, fourth marked "reference only, do not use live."** Half-measure; invites exactly the silent substitution we want to avoid. Rejected.

## Consequences if accepted

- Task 1.0a ships complete at three transcripts with no open dependency on the fourth.
- Tasks 1.3/1.4 own authoring the instructor-as-client **role brief** (live-play), in the L2 client register, no new named persona.
- The RSI / federal-compliance evidence chain (weekly instructor-played interviews) is preserved intact.
- If the instructor instead wants Option B, the three-transcript set still stands and a fourth canned transcript can be added without rework.

## Open questions for the instructor

1. Accept the 3-canned + 1-live split (Option A), or require four full canned transcripts (Option B)?
2. Confirm the instructor-as-client role brief speaks in the neutral in-world client register (L2), with the human free to drop to OOC live — or rule for a different layer?
3. Confirm no new named client persona is coined (lexicon lock upheld)?
