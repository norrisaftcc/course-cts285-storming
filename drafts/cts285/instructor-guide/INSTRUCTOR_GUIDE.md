<!--
  B-009 (task 1.9) — 26FA instructor guide, 2026-08-07.
  Adapted from the frozen mirror at sources/uv-285/instructor-guide/INSTRUCTOR_GUIDE.md
  (583 lines, read-only). The source covered Modules 1-3 only and was built on the retired
  project-selection premise; every student now modernizes the same 1977 device.

  What changed and why, recorded per issue #58:
  - Modules 4, 5, 6 are NET-NEW, written against the merged Week 07/09/11/12 assignments.
  - Modules 7 and 8 are explicit PLACEHOLDERS. Weeks 13-16 are B-010 through B-013 and are
    not started; there is nothing to write teaching notes against, and inventing them would
    be fabrication. Their blocking B-IDs are named in place.
  - Modules 1-3 re-anchored only where the source contradicted the Dataman spine
    (project selection, "use YOUR sample project", the too-ambitious-project struggle).
  - Section 3 (RSI) is NET-NEW. The source contained zero RSI references; the done-when
    criterion requires RSI actions per module. Sourced from phase0/QM_Retirement_Note.md
    and ADR-003. RSI is federal compliance (34 CFR 600.2), independent of QM.
  - QM removal was a NO-OP: the source guide contained zero QM references.
  - Section 8 replaces the source's "AlgoCratic Theme (Optional Use Guide)", which treated
    the frame as a detachable skin and quoted the retired punitive register. Rewritten, not
    migrated, per non-negotiable #3 and KAYFABE_ARCHITECTURE.md.
  - "Sacred Flow" retired to Trusted Workflow (NAMING_CANON); the eight verbs are ADR-007.
  - 40/40/20 reframed as course-level philosophy per ADR-002 section 4, not a per-sprint equation.
  - Institution rendered as the initialism FTCC only (non-negotiable #9). NAME: no expansion.
  - Third-party support contact flagged for instructor sign-off rather than carried or deleted.
  - Stale "60+ pages | Version 1.0" footer claim dropped; nothing regenerated from the doc's
    own assertions (non-negotiable #6).

  Course-repo path references carry a PATHFORM marker in the body, never nested inside this
  comment block - see issue #58 and the B-008 nested-comment defect.

  MERGE ORDER: this file cites eight activity and handout files that live in PR #56 (B-008) and
  are not on main yet. Every one of those references is correct against the post-#56 tree and
  resolves the moment it merges; checked 2026-08-07, the eight are:
    drafts/cts285/activities/Module_0{1..6}_*.md
    drafts/cts285/activities/handouts/ (directory)
    drafts/cts285/activities/handouts/Incident_Reports_Week11.md
  This is B-009's stated dependency on B-008 showing up as a link check, not a defect. Merge #56
  first. If #56 is ever abandoned, these eight references become dangling and must be revisited.
  status: draft; not student-facing (and not instructor-facing) until it graduates to a course repo.
-->
# CTS-285 Instructor Guide
## Systems Analysis & Design — Complete Teaching Resource

**Fall 2026.** This guide assumes you are teaching the Dataman 2.0 spine: every student modernizes the same 1977 handheld learning device, working solo, across three sprints and a four-week team on-ramp.

---

## Quick Start for a New Instructor

If you read nothing else before week one, read these four things:

1. **Section 3 — RSI.** It is federal compliance, not pedagogy, and the obligations are per-student and weekly. Missing them is the one failure in this guide with consequences outside the classroom.
2. **Module 1 in Section 4.** Weeks 1–2 set up everything else, and the single most common way to lose a semester is a week-one environment failure you let drift into week three.
3. **Section 5 — Grading.** Specifically the part about what a fake process looks like, which you will see and need to name early.
4. **Section 8 — The Two Layers.** You need to know what the frame is before a student asks you.

Everything else can be read the week you need it.

---

## Table of Contents

1. Course Philosophy & Approach
2. Before the Semester Starts
3. RSI — Your Interaction Obligations
4. Week-by-Week Teaching Guide (Modules 1–8)
5. Grading Philosophy & Time-Saving Tips
6. Common Student Struggles (Full Reference)
7. Technology Setup & Troubleshooting
8. The Two Layers — Teaching Inside the Frame
9. Preparing Students for CSC-289
10. Quick Reference Checklists
11. Contact & Support

---

## 1. Course Philosophy & Approach

### What this course is

A **systems analysis and design** course taught by having students actually do it. They analyze a real historical product, elicit requirements from stakeholders, design a modernization, and build it across three sprints.

The product is the **Dataman** — a 1977 Texas Instruments handheld arithmetic trainer. Students work from the original manual, which is the specification. This is deliberate: most analysts spend their careers reading documentation written by someone who is no longer available to ask.

### What this course isn't

**It is not a programming course.** Students write code, but they are graded on analysis, design, process, and communication. A working feature with no rationale scores worse than a partial feature with a defensible design.

**It is not a project-selection course.** This is the biggest change from previous versions of this guide. Students do not pitch ideas, choose projects, or scope their own MVPs. Everyone gets the same device, the same 1977 manual, and the same seeded backlog of 26 stories.

That decision buys three things, and it is worth understanding them because students will ask why they do not get to pick:

- **You can compare.** Twenty students building twenty apps means a code review can only check general qualities — readability, error handling — because a reviewer has no idea what correct looks like in someone else's domain. Twenty students building the same device means a reviewer can compare *behavior*, and disagreements become the most interesting artifact in the course.
- **Week 1 is not spent choosing.** Requirements work starts immediately, against a real document.
- **"It depends on my project" stops being an escape hatch.** When the spec is shared, a vague answer is visible.

**It is not a course where students invent their own backlog from scratch.** They receive one. What they learn is how to *classify, refine, and re-rank* it under evidence — which, as of Week 11, they do twice. Making and ranking work items is a durable skill; implementing the obvious ones in order is not.

### Your role

You are three people this semester, and it helps to know which one you are being on a given day:

| Role | When | What it looks like |
|---|---|---|
| **Instructor** | Lectures, activities, debriefs | Explaining, demonstrating, running the room |
| **Client** | Weeks 3–4 especially, and on demand after | Playing the party who commissioned the Dataman modernization. See Section 3 and ADR-003. |
| **Reviewer** | Every sprint boundary | Reading work as a colleague would, not as a grader looking for point deductions |

The **client** role is the one new instructors underuse. It is also the one carrying your RSI evidence.

---

## 2. Before the Semester Starts

### The week before classes (roughly 8 hours of prep)

- [ ] Read the **Dataman manual transcript** yourself (`reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`). You will be asked about it constantly. **Only pages 1–6 and 21–26 are transcribed** — see the note below, because it changes what you can grade.
- [ ] Read the **three stakeholder transcripts** in `drafts/cts285/shared-dataman-artifacts/` (parent, teacher, retro collector). Two are handed to students; one is run as a rehearsal interview instead. ADR-003 governs which.
- [ ] Read `Role_Card_HOWTO.md` and the **live client brief** in the same directory. The brief is **instructor-only** — students never hold it, and it is never handed out or written down as a transcript.
- [ ] Read the **seeded backlog** (26 core stories, 8 epics). Students receive this in Week 2.
- [ ] Skim the **reference ERD**. Do not hand it out — it is the instructor grading key for Weeks 5–6, and distributing it early spoils that assessment.
- [ ] Verify your Canvas shell imports and that every linked file resolves.
- [ ] Set office hours and block **design-review slots in Week 6** specifically. That week's office hours do more work than any other.
- [ ] Prepare the Module 1 activity materials — role cards and the phase checklist, in `drafts/cts285/activities/handouts/`.

**About the manual transcript.** Pages 7–18 are not transcribed. Anything you grade must be answerable from pages 1–6 and 21–26. This is not a limitation to work around quietly — it is *teaching material*. A specification with unreachable sections is the normal condition of legacy analysis, and the course treats "the manual does not reach this" as a legitimate, recordable finding rather than a student failure.

**Redistribution of the original PDF is an open question.** Treat it as a classroom analysis artifact. Do not republish it.

### First day checklist

- [ ] Names, and how students want to be addressed
- [ ] Show the actual device (a photo or the manual's cover works) before explaining anything about it
- [ ] Explain that everyone builds the same thing, and why (Section 1 above — students accept this readily once they hear the code-review reason)
- [ ] Set the tone on the frame: it is present, it is optional to enjoy, and it is never graded. See Section 8.
- [ ] Start environment setup **in class**, not as homework

---

## 3. RSI — Your Interaction Obligations

**Read this before Section 4.** RSI (Regular and Substantive Interaction) is federal distance-education compliance under **34 CFR § 600.2**. It is not a course-quality framework and it did not go away when Quality Matters was withdrawn program-wide — `phase0/QM_Retirement_Note.md` is explicit that RSI mechanisms survive every restructure, because they are law rather than doctrine.

Three properties matter, and each one is a way instructors accidentally fail the requirement:

**Regular** — predictable and recurring, not sporadic. Two brilliant interventions in November do not compensate for silence in October.

**Substantive** — engaging the subject matter. A grade in the gradebook is not substantive interaction. Neither is an announcement, a reminder, or a returned rubric with no comment.

**Per student** — not per team, not per section. This bites hardest in Weeks 13–16 when students are working in teams: the team producing a deliverable does not discharge your obligation to each person on it.

### The mechanisms this course uses

| Mechanism | Cadence | Where it lives |
|---|---|---|
| **Exit tickets** | ~12–15 times per semester | Woven through weeks; the cadence home is a spine call, currently unassigned |
| **Instructor-as-client interviews** | Weekly during Weeks 3–4, on demand after | ADR-003; the graded live interview is the anchor |
| **Sprint review conversations** | Sprint boundaries (Weeks 6, 8, 10, 12) | Substantive feedback on the work, not the grade |
| **Design reviews in office hours** | Week 6 especially | Section 4, Module 3 |
| **Written feedback on deliverables** | Every graded submission | Section 5 — two to three specific sentences, not a rubric alone |

### The stakeholder ladder (ADR-003)

Requirements elicitation is taught as a competence ladder across four stakeholders, and **two of the four rungs are your RSI touchpoints**:

1. **Canned ×2 — read and analyze.** The parent and retro-collector transcripts. Students mine finished text solo. No interaction; this rung teaches reading.
2. **Rehearsal ×1 — practice conducting.** A stakeholder students *interview* rather than read, worked from a **role card**. Low-stakes and formative — reps before it counts.
3. **Live ×1 — elicit for real.** You, playing the party who commissioned the modernization. Graded. **This is the RSI anchor.**

The live interview is never written as a canned transcript. If it were, it could quietly substitute for the interaction, and the compliance value would drain out of it without anyone noticing.

### Running the cards

The artifacts are in `drafts/cts285/shared-dataman-artifacts/`: three stakeholder cards (`Role_Card_Parent_Renee.md`, `Role_Card_Teacher_Alvarez.md`, `Role_Card_Collector_Dale.md`), the instructor-only `Client_Brief_Instructor_As_Client.md`, and `Role_Card_HOWTO.md`, which carries the mechanics once so the cards cannot drift apart from each other.

**Read the HOWTO before you run this the first time.** Three things in it change how the week works, and none of them are obvious from the cards alone:

- **The cards are control panels, not scripts** — levers you set before the scene, buttons you press when a trigger fires, constraints you never cross. That shape is what makes a stakeholder playable by someone who does not want to act, and consistent across a dozen pairs running simultaneously.
- **Acting is opt-in, and the three paths are equal.** A student can play it, hand it to a voice agent as a prompt, or take the interviewer seat instead. Treat the voice-agent path as first-class rather than as an accommodation — the card is written to be pasted.
- **Playing the customer is not the soft version.** It is the half of the exercise that is normally invisible: watching an interview happen *to* you is the fastest way to learn what a bad question feels like. Say this out loud, because students assume the opposite.

**The live client is never played by a student.** That round is yours. The value is that a real human with authority is in the seat, which is also precisely what makes it the RSI anchor.

**Register:** neutral in-world client voice, and **do not coin a named client persona** — the lexicon is locked and the client is simply *the client*. You may drop to plain out-of-character speech at your discretion; the brief supplies the character, and you decide how far to stay in it.

### The failure mode to watch in yourself

RSI evidence is easiest to lose in the weeks where students are most independent — Weeks 7–10, when they are building and you are correctly standing back. Standing back is good teaching. It is also when a semester's interaction record quietly thins out. The per-module RSI actions in Section 4 exist so those weeks stay covered without you having to remember.

---

## 4. Week-by-Week Teaching Guide

Every module below carries: learning objectives, session-by-session notes, **RSI actions**, common struggles in the four-part format, and grading guidance.

**A note on the week numbering.** Sprint assignments are week-paired: `Week_05` covers weeks 5–6, `Week_07` covers 7–8, `Week_09` covers 9–10. There is no `Week_08` or `Week_10` file, and this is deliberate rather than an omission.

**A note on the module point totals below.** They are assignment points only. The **five knowledge checks (Modules 2–6, 10 points each, 50 total)** are a separate line in the canonical points table and are *not* included in the module figures here — the same convention the course map uses. They are **graded, not bonus**: unlimited-attempt autograded retrieval is effectively mastery-gated completion credit, and calling it bonus means it gets skipped by exactly the students who most need the retrieval practice. Module 1 has no separate check — the Dataman document-analysis quiz supersedes it. Modules 7 and 8 have none by design.

If you meet older material describing a check as "6 pts bonus", that figure is retired and is on the list to be corrected in the course-map rebuild. Grade from the canonical table.

---

### Module 1: SDLC Foundations & Agile Mindset (Weeks 1–2) — 75 pts

**Learning objectives:** SDLC phases, Agile framing, reading a specification, initializing a backlog.

**Assessments:** Course Setup & Analyst Read (25) · Dataman Manual Document-Analysis Quiz (15) · Agile Simulation & Backlog Initialization (35).

#### Week 1

**Session 1** — Introductions, then the device. Show it before you explain it. Twenty minutes on SDLC phases, breadth not depth. Start environment setup in class.

The prerequisite baseline for 26FA is **a GitHub account and working Python** (ADR-005). It is *not* CSC-113 or CSC-114. Some students will arrive having written no code at all. Week 1 is configure-and-verify, not build.

**Lab 1** — Troubleshoot setup individually. This is unglamorous and it is the highest-leverage hour of your semester. A student who leaves Week 1 with a broken environment does not recover it on their own by Week 3; they quietly stop submitting.

**Session 2** — The **SDLC Simulation Lab** (`drafts/cts285/activities/Module_01_SDLC_Simulation_Lab.md`, 90 min). Pairs work a paper prototype of one Dataman feature through four roles. Print the role cards and the phase checklist beforehand. Debrief twenty minutes: what did the requirements you wrote in Round 1 look like by Round 4?

**Lab 2** — The analyst read. Students read the manual transcript and record what a specification does and does not tell them.

#### Week 2

Students receive the **seeded backlog** — 26 stories, 8 epics — and initialize it on a board. They are not writing it; they are classifying it.

Two things are graded here and they are easy to conflate. Week 2 grades **relative estimation** (Fibonacci) and **board initialization**. It does *not* grade MoSCoW — Week 4 owns prioritization, and students have not met the stakeholders yet. Tell them this explicitly, and tell them that changing their mind in Week 4 is the skill rather than a correction.

**Board columns are canonical and graded elsewhere:** **To Do → In Progress → In Review → Done.** Four columns. If you teach a fifth, you create a wrong answer on a later knowledge check.

**RSI actions (Module 1)**
- Individual environment verification for every student, in Week 1 lab — not a class-wide "does everyone have it working?"
- Exit ticket after the simulation debrief: one thing that surprised you about the manual.
- Personal reply to every Week 1 submission. First submissions establish a baseline and cannot fail; say so.

**Common student struggles (Weeks 1–2)**

**Struggle**: Environment installation, especially on Windows
**Signs**: "Python is not recognized", Git Bash will not open, path errors
**Intervention**: Office hours, not class time, and do not fix it for them — sit beside them while they fix it. Point at the installer's PATH checkbox.
**Success indicator**: They push a file to their own repository without help

**Struggle**: Reading the manual as a user rather than as an analyst
**Signs**: Notes describe how to operate the device; nothing records what the document fails to specify
**Intervention**: "You are not learning to use it. You are learning what a person who has to rebuild it would still need to ask." Have them list three questions the manual does not answer.
**Success indicator**: Their notes contain gaps and ambiguities, not just features

**Struggle**: Wanting to build something else
**Signs**: "Can I do my own app instead?"
**Intervention**: Give the real reason — comparison. In Week 9 they will review a classmate's implementation of the same story and find that it behaves differently. That is impossible if everyone built something different. Most students find this persuasive; a few need to hear it twice.
**Success indicator**: They stop asking, and by Week 9 they are the ones citing the comparison

**Struggle**: Estimating in hours because points feel arbitrary
**Signs**: "Story 1.2 is about four hours" written next to a Fibonacci scale
**Intervention**: Points measure relative size, not time, and are never converted in either direction. Ask only: bigger or smaller than the smallest one, and roughly how many times?
**Success indicator**: Estimates are relative and they can say what makes a story its size

---

### Module 2: Requirements Gathering & Stakeholder Management (Weeks 3–4) — 75 pts

**Learning objectives:** Stakeholder analysis, interview technique, user stories with acceptance criteria, prioritization.

**Assessments:** Stakeholder Analysis & Interview Plan (25) · User Stories & Product Backlog (50).

#### Week 3

**Session 1** — Stakeholder analysis, thirty minutes. Use the power-interest grid against the Dataman's actual stakeholders: the learner, the parent, the teacher, the retro collector, and the party commissioning the modernization. Note that the *learner* — a seven-year-old — has the highest interest and the least power, which is a live design problem rather than a diagram exercise.

**Lab 1** — Review their stakeholder lists. Ask the questions they have not: who decides this is finished? Who is affected but never touches it?

**Session 2** — Interview preparation. Bad questions and good questions, contrasted out loud.

> Bad: "Do you like this idea?" — leading, and answerable with a yes that tells you nothing.
> Good: "Walk me through the last time your kid practised their sevens." — open, and it produces detail you did not know to ask for.

**Lab 2 — the rehearsal round.** This is ladder rung 2. Students interview the *teacher* stakeholder, worked from a role card rather than a handed-out transcript. Low stakes, formative, reps before it counts.

#### Week 4

**Session 1** — The **User Story Workshop** (`drafts/cts285/activities/Module_02_User_Story_Workshop.md`). Students write stories for the gaps the seeded backlog leaves open, rather than restating stories they already have.

**Session 2** — MoSCoW, now that they have met the stakeholders. The **cap is 8 Must-Haves** and it is hard on purpose: promoting one means demoting another.

**Lab sessions** — Heavy support. Acceptance criteria are the single hardest new skill in this module.

**The live client interview** happens in this window. It is graded, and it is your RSI anchor.

**RSI actions (Module 2)**
- The rehearsal interview round — every student conducts one, not just observes
- The **live instructor-as-client interview**, per student, graded (ADR-003)
- Written response to each stakeholder analysis naming one stakeholder they missed
- Exit ticket: what did the client say that you did not expect?

**Common student struggles (Weeks 3–4)**

**Struggle**: The interview feels fake and they say so
**Signs**: "This is pointless, I am interviewing you pretending to be someone"
**Intervention**: Agree with the premise and reframe the purpose. It is a simulation, and in CSC-289 they interview real design students with real opinions. This is where the awkwardness gets spent. Then stay in role and make them work for the information.
**Success indicator**: They ask an unscripted follow-up

**Struggle**: Acceptance criteria that cannot be tested
**Signs**: "The feature works correctly", no Given/When/Then
**Intervention**: "How would I verify that? Tell me the exact state, the exact action, the exact outcome." Do not accept a rewrite that is merely longer.
**Success indicator**: Criteria name specific states and observable outcomes

**Struggle**: Everything is a Must-Have
**Signs**: The cap is being treated as an obstacle rather than a constraint
**Intervention**: "You can ship eight. Which eight, and what does the ninth lose to?" The forced trade is the exercise.
**Success indicator**: Eight Must-Haves and a defensible reason for the ninth's exclusion

**Struggle**: Averaging a stakeholder conflict away
**Signs**: A story quietly satisfies the parent and the teacher without acknowledging that they wanted different things
**Intervention**: Naming the conflict is required; resolving it is optional. Silence about it is the defect.
**Success indicator**: The conflict appears in writing, with a stated resolution or an open question

---

### Module 3: System Design & Architecture (Weeks 5–6) — SPRINT 1 — 100 pts

**Learning objectives:** UML, ERD, wireframes, first full sprint, risk identification.

**Assessments:** Sprint 1 System Design (75) · Risk Register (25).

**This is the heaviest teaching module.** Students learn design notation and sprint process at the same time. Expect to be needed constantly in Week 5 and barely at all in Week 6, and resist the urge to fill Week 6 with content.

#### Week 5

**Session 1** — Sprint planning demonstration. Work an example on the board using the shared backlog, which means every student can follow it against stories they already have. Show an overcommitment and cut it live.

**Lab 1** — The **System Design Studio** (`drafts/cts285/activities/Module_03_System_Design_Studio.md`, full lab). Circulate heavily; the notation is new.

**Session 2** — ERD workshop. Normalization with worked examples. Have them sketch on paper first — paper is faster to throw away.

**Lab 2** — Wireframing. Low fidelity, insistently. Grey boxes.

#### Week 6

**Sessions** — Work time. Stand back. Answer questions; do not take the pen.

**Office hours this week are critical.** Design reviews catch the two failures that are expensive later: an ERD with no place to record a *try*, and a schema that cannot enforce the ten-problem ceiling.

**Risk register.** The risks that earn credit here come from the device, not from a generic hazard list. The five worth seeding if the room is stuck:

- The two-tries rule lives in more than one code path
- Division with remainder has no settled representation
- The ten-problem memory bank ceiling is easy to model as unlimited
- The 1977 timer varies with battery and room temperature, so it is not testable as specified
- Pages 7–18 are not transcribed, so anything inferred about those modes is an assumption

**RSI actions (Module 3)**
- Individual design review in office hours — offer to every student, and chase the ones who do not take it
- Written sprint-boundary feedback naming one thing their design does well and one it cannot yet do
- Exit ticket after the studio: what did comparing your ERD to someone else's change?

**Common student struggles (Weeks 5–6)**

**Struggle**: The ERD has nowhere to record an attempt
**Signs**: Correctness is a field on Problem or on Session; there is no way to distinguish right-on-first-try from right-on-second
**Intervention**: "The teacher told you why this matters — she needs to tell 'knows it' from 'guessed it'. Where does your model store that?" This is the single most common design gap.
**Success indicator**: A try number exists as its own field, and three outcomes are distinguishable

**Struggle**: UML is overwhelming
**Signs**: "I do not know what to include", or a diagram with thirty classes
**Intervention**: Five entities. Main ones only. Expand if the design demands it.
**Success indicator**: One page, relationships legible

**Struggle**: Wireframes are too polished
**Signs**: Hours spent on colour and type
**Intervention**: "This is not a design course, and you are competing with a device that had one line of red LEDs. Structure, not aesthetics."
**Success indicator**: Grey boxes with labels

**Struggle**: Risks are generic
**Signs**: "Scope creep", "time management", "technical difficulties"
**Intervention**: "That is true of every project ever run. What is risky *because this is a 1977 calculator with an incomplete manual*?"
**Success indicator**: At least four risks that could not apply to a different project

---

### Module 4: Sprint Planning & Execution (Weeks 7–8) — SPRINT 2 — 100 pts

**Role: Scrum Master.** **Assessment:** Sprint 2 — Build & Facilitation (100), in four parts: Sprint Planning (10) · Implementation (40) · Sprint Facilitation (35) · Sprint Review Presentation (15).

**Learning objectives:** Velocity-based planning, facilitation as a discipline, burndown as an honest instrument, demonstrating work to an audience.

**What changes in this module.** Sprint 1 was planned with no data. Sprint 2 is planned with velocity — for the first time a student's capacity estimate can be *checked*. That shift is the module's whole point, and it is worth naming in class on day one of Week 7.

The facilitation half is the part students undervalue and you should not. Thirty-five of the hundred points are standups, burndown, and board maintenance. A student who builds well and facilitates invisibly is capped below 70 here, by design, and the feedback conversation is easier if you flagged it in Week 7 rather than Week 8.

#### Week 7

**Session 1** — The **Sprint Planning Simulation** (`drafts/cts285/activities/Module_04_Sprint_Planning_Simulation.md`). Planning Poker on shared backlog stories — which works here precisely because everyone is sizing the same stories, so a wide spread is real information about how differently people read the same card.

Then the negotiation round. Play a genuinely tough Product Owner who wants more than capacity allows. Push. The class watches for one thing: did the response use a number, or a feeling?

**Do not use the hours-per-point formula.** Some older material derives capacity by dividing available hours by hours-per-point. That is a unit conversion wearing estimation's clothes, and the course rules it out explicitly. Capacity comes from Sprint 1's actual completed points.

**Lab 1** — Sprint planning individually, with your help. Verify each student has a capacity number they can defend and a commitment that fits inside it.

**Session 2** — Standups: what makes one real. Show a fabricated set and a genuine set side by side without saying which is which, and let the room sort them.

**Lab 2** — Build time.

#### Week 8

**Sessions** — Build time, and the **sprint review presentations**. Every student demonstrates working software to the class.

Keep demos to time and insist on live software rather than slides about software. The most useful question you can ask after a demo is *"show me what happens when it goes wrong"*, because a happy-path demo hides exactly the behaviour Week 9's review will find.

**Lab sessions** — Build time, burndown checks.

**Grading help (Module 4).** Budget roughly 20 minutes per student and spend it in this order:

1. **Board first (3 min).** Open their project board. Issues should roughly match the backlog; movement should span the sprint. A board where everything moved on the final day is not a board, it is a receipt.
2. **Standups (5 min).** Read day 1, the midpoint, and the last day. If those three are specific and mention blockers, skim the rest. Nobody has a sprint with zero blockers; a perfect record is the tell.
3. **Burndown (2 min).** A straight diagonal line is almost always fabricated. Real burndown is lumpy and often flat for days.
4. **Implementation (7 min).** Run it. Test two or three features, not all of them. Check the two-tries behaviour specifically — it is where divergence shows up first.
5. **Feedback (3 min).** Two or three specific sentences. Name one thing that improved since Sprint 1, because that comparison is the thing students cannot see in their own work.

**RSI actions (Module 4)**
- Play the Product Owner in the Week 7 negotiation for every student or pair — this is a substantive interaction and it is already on the calendar
- Mid-sprint check-in on burndown with each student; a flat line at midpoint is a conversation, not a deduction
- Individual feedback after the sprint review demo, delivered as a colleague rather than a grader
- Exit ticket: what did you cut, and what did cutting it cost?

**Common student struggles (Weeks 7–8)**

**Struggle**: Standups written all at once at the end of the sprint
**Signs**: Identical timestamps, uniform polish, no blockers, implausibly even daily progress
**Intervention**: Name it directly and without heat. "These read as though they were written on the last day. Standups are process evidence — written afterwards, they document nothing." Then give the next sprint's expectation concretely.
**Success indicator**: Dates spread across the sprint, entries of varying quality, at least one honest blocker

**Struggle**: The burndown is drawn rather than measured
**Signs**: A clean diagonal from full to zero
**Intervention**: "What did the chart look like on Wednesday, when you were stuck?" Real charts have plateaus. A perfect line means the chart was produced from the plan, not from the work.
**Success indicator**: Visible plateaus, and a retrospective sentence explaining one of them

**Struggle**: Overcommitting despite having velocity data
**Signs**: Sprint 1 completed 12 points; Sprint 2 commits to 25
**Intervention**: "What changed that doubles your throughput?" Sometimes there is a real answer — the setup cost is paid, the tooling is understood. Usually there is not.
**Success indicator**: Capacity within a defensible range of Sprint 1, with the reasoning stated

**Struggle**: Facilitation treated as paperwork
**Signs**: Strong implementation, thin standups and board, and visible irritation at being asked for both
**Intervention**: "Thirty-five points of this assignment is the part you are calling paperwork. In CSC-289 you will be facilitating for a partner who cannot read your mind, and this is the rehearsal." Be straight about the arithmetic.
**Success indicator**: The board is maintained during the sprint rather than reconstructed after it

**Struggle**: Demo shows only the happy path
**Signs**: Every input in the demo is valid and every answer is correct
**Intervention**: Ask for a wrong answer during the demo, in front of the class. It is not a gotcha — it models what a review does.
**Success indicator**: They demo a failure case unprompted next time

---

### Module 5: Development & Testing (Weeks 9–10) — SPRINT 3 — 100 pts

**Role: Developer.** **Milestone: this is the ORANGE gate on the PRISM ladder.** **Assessment:** Sprint 3 — Quality (100), in four parts: Implementation (45) · Code Review (30) · Technical Debt (15) · Sprint Artifacts & Decision Records (10).

**Learning objectives:** Comparative code review, technical debt as a recorded decision, architecture decision records, testing against a specification.

**What makes this module unusual, and why it works.** In a normal capstone, peer code review is a weak exercise: a reviewer looking at an unfamiliar project can only comment on style, because they have no idea what correct behaviour is. Here, every student implemented the same stories against the same 1977 manual, so a reviewer can compare **behaviour** directly — whose two-tries rule fires early, who enforced the ten-problem ceiling, how each handled division with a remainder.

That produces a three-way sort, and teaching it is the module's core work:

| What you find | What it is | What to do |
|---|---|---|
| Behaviours differ and **the manual settles it** | A defect | File it, citing the page |
| Behaviours differ and **the manual is silent** | An ADR subject | Write the decision record. Do **not** file a bug — nobody erred |
| Behaviours differ and **the manual does not reach it** (pp. 7–18) | A recorded gap | Note it as unreachable; do not resolve it by argument |

The middle row is the one students get wrong, and it is worth over-teaching. A disagreement where the specification is silent is not a fault in either implementation. Two students writing *opposite* ADRs about the same silence is a correct outcome, and it will not feel correct to them.

#### Week 9

**Session 1** — Run the **Code Review Lab** (`drafts/cts285/activities/Module_05_Code_Review_Lab.md`). Do the first comparative review as a class on two contrasting samples, so the three-way sort is demonstrated before anyone does it for a grade.

**Lab 1** — Paired reviews. Pair deliberately; a student who has been struggling learns more reviewing a solid implementation than being reviewed by one.

**Session 2** — ADRs. Show the format, then write one live from a real disagreement the room surfaced that morning. Ten of the hundred points ride on decision records, and they are the ORANGE evidence.

**Lab 2** — Responding to review, and technical debt logging.

#### Week 10

Build and remediation time. Technical debt items get logged with a cost, not just a name — "attempt counting is implemented twice" is a debt item; "code needs cleanup" is not.

**Grading help (Module 5).** The code review half is graded on the **quality of the reviewing**, not on whether the reviewed code was good. A student who received a mediocre implementation and reviewed it precisely scores well. Read their review comments before you read the code they reviewed, so the code's quality does not colour your read of their work.

For ADRs, the test is whether the decision could be *reversed* by a future reader who disagreed — which requires the options considered and the consequences, not just the choice.

**RSI actions (Module 5)**
- Sit in on at least one review conversation per student and contribute substantively to the technical discussion
- Individual response to each ADR — an ADR with no reader is an essay, and the reader is what makes it a record
- Written note to every student naming one specific thing their review caught
- Exit ticket: what did your reviewer see that you had stopped being able to see?

**Common student struggles (Weeks 9–10)**

**Struggle**: Filing an ADR subject as a bug
**Signs**: A bug report whose content is "my partner did it differently"
**Intervention**: "Does the manual settle it? Show me the page." If they cannot, it is a decision, and a bug report asserts that somebody erred. Nobody erred.
**Success indicator**: They sort disagreements before filing anything

**Struggle**: Review comments are only about style
**Signs**: Naming, spacing, comment density; nothing about behaviour
**Intervention**: "You have the enormous advantage of having built this exact thing. Compare what it *does*, not how it reads."
**Success indicator**: At least one behavioural finding, cited against the manual

**Struggle**: Review feedback taken personally
**Signs**: Defensiveness, or over-apology, or silent non-response
**Intervention**: Model a response in front of the class: acknowledge, ask one clarifying question, state what you will change and what you will not and why. Declining a review comment with a reason is a professional act, not a refusal.
**Success indicator**: They decline at least one comment, with reasoning

**Struggle**: Technical debt logged without cost
**Signs**: "Refactor later", "clean up the code"
**Intervention**: "What does carrying this cost you next sprint, specifically?" Debt with no interest rate is not debt, it is a wish.
**Success indicator**: Each item names what it makes harder and roughly what it will cost to repay

**Struggle**: Tests assert the implementation rather than the specification
**Signs**: A test that passes because it was written to match whatever the code currently does
**Intervention**: "That test will pass no matter what the code does, including when the code is wrong. Cite the manual page and assert *that*."
**Success indicator**: Tests carry page citations

---

### Module 6: Quality Assurance & Risk Management (Weeks 11–12) — 100 pts

**Role: QA / Release.** **Assessments:** Risk Mitigation & QA (50) · Definition of Done, Acceptance Testing, Lightweight Deploy & Grouped Presentation (50).

**Learning objectives:** Closing a risk register honestly, re-ranking a backlog under evidence, incident response, definition of done, acceptance testing, demonstrating installability.

**The two hardest things in this module are both about revision rather than production.** Students close the Week 6 register with real verdicts, and they re-rank the Week 2 backlog with three sprints of evidence behind them. Both ask a student to say, in writing, that they were wrong about something — and to distinguish *knowably* wrong from *unknowably* wrong, which is the actual professional skill.

#### Week 11

**Session 1** — The **Risk Assessment Workshop** (`drafts/cts285/activities/Module_06_Risk_Assessment_Workshop.md`) and the four verdicts:

| Verdict | Means |
|---|---|
| **Resolved** | The mitigation ran; the risk is gone |
| **Mitigated** | Still present, reduced to something liveable |
| **Accepted** | Still present at full strength; carried deliberately, with a reason |
| **Materialised** | It happened. What did it cost, and what did you do? |

**"Materialised" is not a failure grade,** and you will need to say this more than once. A register that predicted a real problem did the job it exists to do. The register worth a second look is the one where everything came up Resolved.

**Backlog refinement.** Students re-rank the Week 2 classification, appending rather than overwriting, with the **8-Must-Have cap still binding** — so promoting means demoting. Two rankings side by side, nine weeks apart, is a record of judgment changing under evidence, and that record is the deliverable.

**Session 2 — the incident exercise.** This runs in class, in one sitting, against a report students have not seen. The reports are in `drafts/cts285/activities/handouts/Incident_Reports_Week11.md` — **do not distribute in advance**, and cut the instructor block below the line before printing.

Three variants are supplied, and they resolve three different ways: one is a real defect, one is **no fault at all** (a decision made in Sprint 2, defensible, never written down), and one **cannot be reproduced**. Distribute a mix. The debrief question that makes the exercise work is: *who had a defect, who had a decision, and who had neither — and how did you tell?* A room that only saw the defect never has to make that distinction.

The variant with no fault is the most valuable and the most commonly mishandled. Watch for a student who "fixes" it by changing the behaviour under pressure from a support ticket — reversing a considered decision without revisiting the reasoning. It feels like good customer service and it is the wrong move.

#### Week 12

Definition of Done, acceptance testing, a lightweight deploy, and a grouped presentation.

**The deploy is verified by another person.** Installation is confirmed by the student's Week 9 review partner, which turns "it works on my machine" into a checkable claim. This is also the first rehearsal for CSC-289's installation requirement.

**The grouped presentation seeds Week 13's teams.** Group deliberately with the spring in mind.

**RSI actions (Module 6)**
- Deliver the incident report to each student individually and debrief their response one-to-one, not only as a class
- Individual conversation about the re-ranking: what did you change, and what did it lose to?
- Acknowledge every Materialised verdict in writing, in a way that makes plain it is not a penalty
- Exit ticket: what did the incident teach you that the register did not?

**Common student struggles (Weeks 11–12)**

**Struggle**: Every risk is closed as Resolved
**Signs**: A register with no Accepted and no Materialised entries
**Intervention**: "Which of these did you actually act on, and which stopped worrying you on their own?" The second kind is Accepted, and saying so is more honest than a Resolved with no mitigation behind it.
**Success indicator**: A mix of verdicts, each with evidence

**Struggle**: Refinement becomes a wishlist
**Signs**: Things get promoted; nothing gets demoted; the cap is quietly exceeded
**Intervention**: The cap is the exercise. "What is this more important than?"
**Success indicator**: Every promotion has a matching demotion and a reason

**Struggle**: Cannot reproduce the incident and treats that as failure
**Signs**: The log is three lines and ends in "closed, could not reproduce"
**Intervention**: This is the most realistic part of the exercise and closing it fast is the wrong move. Separate what the reporter *observed* from what they *concluded* — they are not a developer and the two are mixed together. What would have to be true for their description to be accurate?
**Success indicator**: A documented search — sequences tried, hypotheses ruled out, and a note added so the next occurrence captures state automatically

**Struggle**: Reporter's tone read as severity
**Signs**: A mild "not a big deal, thought you'd want to know" triaged as low priority when the described behaviour is a wrong answer accepted as right
**Intervention**: "How upset the reporter sounds and how bad the bug is are unrelated variables." Point at the one behaviour with no acceptable failure mode.
**Success indicator**: Severity assessed from behaviour, with the tone mismatch noted

**Struggle**: Definition of Done is aspirational
**Signs**: "Code is clean and well tested"
**Intervention**: "Read that to me as a checklist someone else could apply to your work without asking you anything."
**Success indicator**: DoD items are binary and externally checkable

---

### Module 7: Deployment & Documentation (Weeks 13–14) — 70 pts

> **NOT YET WRITTEN.** Weeks 13–14 are **B-010** (team formation, engine/skin selection) and **B-011** (terminology discovery, spring user stories). Neither is started, so there are no assignments to write teaching notes against. This section is a placeholder rather than a gap in the guide, and it is deliberately empty rather than filled with plausible material.
>
> When those weeks exist, this section needs: learning objectives, session notes, **per-student RSI actions** (the obligation does not become per-team just because the work does), struggles in the four-part format, and grading guidance.
>
> **The RSI point is the one to carry forward.** Weeks 13–16 are the team on-ramp, and per-team interaction does not discharge a per-student obligation. Whoever writes this section should treat that as a hard requirement, not a note.

**What is already decided and should not be re-litigated here:** the module is worth **70 points** — Team Formation Charter and Engine/Skin Selection (30), Terminology Discovery and Spring User Stories (40). No knowledge check; Modules 7–8 have none by design.

---

### Module 8: Capstone Integration & Project Leadership (Weeks 15–16) — 80 pts

> **NOT YET WRITTEN.** Weeks 15–16 are **B-012** (wireframes, design consult, design brief) and **B-013** (capstone pitch, handoff package). Neither is started. Same reasoning as Module 7 — placeholder, not fabrication.
>
> **Additionally blocked on a human decision.** Week 15 depends on the GRD-242 fall consult calendar and deliverables, which is an open blocker outside this repo's control. A canned brand-kit fallback is the scheduled mitigation. Do not write this section as though the live consult is confirmed.

**What is already decided:** **80 points** — Wireframes, GREY Consult and Design Brief (40), Spring Capstone Pitch (25) and Handoff Package (15). The handoff package must match the CSC-289 week-one entry contract, which is the real constraint on this module.

---

## 5. Grading Philosophy & Time-Saving Tips

### The 40/40/20 philosophy

The course aims for roughly **40% process, 40% technical, 20% communication** across the semester.

**This is a course-level philosophy, not a per-assignment equation** (ADR-002). Individual assignments are not required to hit it internally, and a design-heavy sprint reading 73/13/13 is expected rather than a defect. Course-wide the figure lands near 40/38/22, which is within tolerance. Weeks 13–16 skew communication-heavy on purpose — the on-ramp *is* a communication module.

If you find yourself trying to make a single assignment's rubric sum to 40/40/20, stop. That reading is exactly what ADR-002 exists to close, and chasing it was the single largest source of points conflicts in the course's history.

### What binds

**Only two arithmetic facts are binding:** assignment header totals sum to **750**, and every header states its own value and derived percentage. Rubric rows beneath a header are *descriptive* — they explain how the grade is reasoned about, and they are not required to sum to the header.

### Time-saving strategies

The estimates below assume a section of roughly fifteen students. Scale them; they are guidance, not a standard.

**Sprint assignments — about 20 minutes per student:**

| Minutes | What | What you are looking for |
|---|---|---|
| 0–3 | Project board | Issue count roughly matching the backlog; movement spread across the sprint; labels present |
| 4–8 | Standups | Dates spanning the sprint; specificity; at least one real blocker |
| 9–16 | Deliverables | Run it. Two or three features, not all. Spot-check notation rather than verifying every relationship |
| 17–20 | Rubric and feedback | Two or three specific sentences, at least one comparing to their own prior work |

**The single highest-value shortcut** is reading the first, middle, and last standup rather than all of them. If those three are real, the rest almost always are.

**Feedback that compares a student to their own previous submission is worth more than feedback that describes the current one.** It is also faster to write, because you are naming a change rather than assessing an absolute.

### Common grading dilemmas

**"Their code works but the process documentation is thin."**
Grade it as the rubric says — process is a large share and a thin process is a real shortfall. Feedback: name the arithmetic plainly, and say what to prioritize next sprint. Students who hear this in Sprint 2 usually fix it by Sprint 3; students who hear it first in Sprint 3 do not get the chance.

**"Their process is excellent but the code is broken."**
Partial technical credit where the attempt is genuine, full process credit where it is earned. Then book office hours. A student with real process and broken code is a debugging problem; the reverse is a habit problem, and habits are harder.

**"They engaged heavily with the frame. Extra credit?"**
**No. Ever.** Grade learning objectives only. See Section 8.

**"Two students turned in opposite behaviour and both cite the manual."**
Check the page. If the manual settles it, one of them is wrong and the citation will show it. If it does not, both are right and the deliverable is an ADR from each. This will happen, and it is the course working.

**"A student's risk register says a risk materialised and cost them a week."**
That is a well-functioning register. Do not grade it as a failure, and say so explicitly in the feedback — students expect to be penalised for it and the expectation itself distorts the next register.

---

## 6. Common Student Struggles (Full Reference)

The module sections carry struggles in context. This is the cross-cutting reference for things that recur all semester.

### Technical

**Environment issues (Python, Git, PATH).** Office hours, not class time. Sit with them while they fix it rather than fixing it. Recurs most in Weeks 1–3 and again whenever a student switches machines. Remember the baseline is a GitHub account and working Python — **not** prior programming coursework (ADR-005).

**Git workflow confusion.** Reinforce the **Trusted Workflow**: FILE → BRANCH → DRAFT → BUILD → FINISH → REVIEW → CLEAR → MERGE. Teach `git status` as a reflex before committing. Note that **CLEAR is a live human gate performed by you**, not by the student — students do not clear their own work, and the guide's earlier drafts of this workflow are retired naming.

**Lost work.** Almost always an uncommitted change on a branch that was deleted. Teach committing before switching branches, early, once, with a real example.

### Process

**Fabricated process artifacts.** Standups written at the end, burndowns drawn from the plan, boards populated the night before. Name it directly and without heat the first time; it is usually procrastination rather than dishonesty, and treating it as the latter closes a conversation you need open.

**Generic retrospectives.** "Everything went well, I'll try harder." Ask for a specific day and a specific task that took longer than expected.

**Scope creep mid-sprint.** The commitment was eight stories and fifteen were attempted. Point at the capacity number they defended in planning.

### Communication

**Documentation written for developers.** The audience in CSC-289 is a design student who does not code. Ask them to read it aloud imagining that reader.

**Decisions without rationale.** "I used SQLite." Fine — but why not something else, and what does the choice cost? A decision without a trade-off is a description.

**Declining feedback silently.** Students either accept every review comment or ignore the ones they disagree with. Neither is professional. Model the third option: decline, with a reason, in writing.

---

## 7. Technology Setup & Troubleshooting

### Required tools (all free)

**Core:** Python 3.8+ · Git · VS Code or an equivalent editor · a GitHub account.

**Design:** a diagramming tool that runs in a browser is sufficient. Do not require an account-gated tool; a student without an account is a student who cannot start.

**Project management:** the board on their own repository. No third-party tool.

**Deploy:** Week 12's deploy is deliberately **lightweight** and verified by a peer's installation, not by a hosted URL. Do not escalate this into a hosting exercise; it is not one, and free tiers change terms mid-semester.

### Setup, Week 1 lab, walked through together

- Python installed and verified
- Git installed and verified
- Editor installed
- GitHub account created
- First repository created and one file pushed

### Common installation issues

- **Windows, Python not on PATH** — reinstall and check the PATH box. Faster than repairing it by hand.
- **macOS command line tools** — `xcode-select --install`
- **Windows Git credentials** — Git Credential Manager

### Scope note

The baseline is a GitHub account and working Python. If a struggle requires knowledge from a prerequisite the students do not have, it is a scaffolding problem rather than a student problem — and worth reporting back so the material can be fixed rather than worked around every semester.

---

## 8. The Two Layers — Teaching Inside the Frame

Earlier versions of this guide described the course's fiction as *optional satire in collapsible sections* and advised new instructors not to use it. That description is retired, and so is the punitive register it quoted. Here is the accurate version.

### What it actually is

The frame has **two layers**, and they are layers rather than skins — you cannot detach one and still have the course.

- **AlgoCratic Futures** is the workplace: the show the student's character works inside.
- **AlgoCratic Media** is its content division, and it is where the student sits. The student plays a **Creator** whose content happens to be software development.

The satire is the vehicle. Competence is the destination. The fiction exists because it makes ordinary professional acts — writing a decision down, accepting a review, saying a risk materialised — feel lower-stakes than they do when framed as assessment. That is its whole job.

### Who speaks, and how

| Layer | Who | Register |
|---|---|---|
| **L2** | Corporate body text | The workplace's own voice, neutral and in-world |
| **L1** | **SHODANN**, the Creator's Channel Success Partner | Warm, precise, slightly too attached. Measures growth against the student's own prior work, never against classmates. |
| **L0** | Out-of-character margins | You, plainly, as yourself |

**SHODANN never compares students to each other, never threatens, never shames, and never manufactures praise.** If you write anything in her voice, those constraints bind — and if a student is in genuine distress, the frame drops entirely and a human answers. That is not a workaround; it is the rule.

### What you owe students on day one

- The frame is present throughout. It is not hidden and it is not a surprise.
- **Engagement with it earns zero credit, ever.** A student who ignores every bit of it entirely can earn full marks.
- If a student finds it distracting, they can read past it. Nothing graded depends on enjoying it.

Say all three plainly in week one. The students who like it will like it more for knowing it is voluntary, and the ones who do not will stop worrying that they are missing something.

### What not to do

Do not reintroduce the punitive register — the clearance-level threat language from earlier material. It is retired, and it is retired because it was aimed at students. Anything you write in the frame's voice measures growth against the student's own past work, or it does not go in.

---

## 9. Preparing Students for CSC-289

### What CSC-289 requires

A significant support project completed with minimal instructor assistance, emphasizing written and oral communication, project definition, documentation, installation, testing, presentation, and user training — executed with a design-student partner.

CSC-289 is **team-based** (ADR-001), which is a meaningful change from the solo work of the first twelve weeks and is exactly what the Weeks 13–16 on-ramp exists to bridge.

### How CTS-285 prepares them

By the end of this course, a student should be able to plan and execute a sprint without being asked to; talk to someone who is not a developer without retreating into jargon; write a decision down in a form that survives them leaving; hand work to a peer and have it install; and say what went wrong without treating that as a confession.

**The ladder position matters.** CTS-285 exits at **ORANGE**; CSC-289 exits at **GREEN**. The ORANGE evidence is concentrated in Module 5 — the ADRs and the comparative review — which is worth knowing when a student asks what the milestone actually measures.

### Signals a student is not ready

- Cannot complete work without step-by-step direction
- Never comes to office hours — avoiding struggle rather than asking for help
- Process is consistently fabricated after three sprints of feedback about it
- Cannot articulate why they made a decision, only what they did
- Documentation is technical only

**Intervention:** be honest and be early. A conversation in Week 10 gives a student a semester to change something. The same conversation in Week 16 is just a verdict.

---

## 10. Quick Reference Checklists

### Week 1
- [ ] Welcome message sent
- [ ] Canvas materials verified — every link resolves
- [ ] Module 1 activity materials printed (role cards, phase checklist)
- [ ] Office hours set, with Week 6 design-review slots blocked in advance
- [ ] Manual transcript read

### Before each sprint
- [ ] Read the sprint assignment yourself
- [ ] Prepare a worked example from the shared backlog
- [ ] Confirm the RSI actions for that module are on the calendar, not just intended

### Grading a sprint assignment
- [ ] Board (3 min)
- [ ] Standups — first, middle, last (5 min)
- [ ] Deliverables, run and spot-checked (7 min)
- [ ] Rubric and feedback, including one comparison to their own prior work (5 min)

### Before Week 13
- [ ] Groups formed with the spring in mind, seeded from the Week 12 grouped presentation
- [ ] Per-student RSI plan for the team weeks — the obligation stays per student

### End of semester
- [ ] Final deliverables graded
- [ ] Grades submitted
- [ ] Student feedback collected for the next iteration
- [ ] Note which struggles in this guide you actually saw, and which you did not

---

## 11. Contact & Support

**If you get stuck teaching CTS-285:** contact the course lead at FTCC.

<!-- INSTRUCTOR SIGN-OFF NEEDED: the source guide named a specific instructional-design contact.
     phase0/QM_Retirement_Note.md records that the same person's name appeared on generated audit
     work she did not perform. Whether she is a live support contact for 26FA is not a call this
     document can make, so the name is held here rather than carried forward or silently dropped.
     Restore, replace, or remove on instruction. -->

**A closing note.** You do not need to be perfect at this, and the course is built on the assumption that you will not be. Students learn from authentic teaching, not polished performance — and a semester where you visibly changed your mind about something is a better model of the discipline than one where you did not.

---

*Regenerated for Fall 2026 against the current file tree. Modules 7 and 8 are unwritten and marked as such.*
