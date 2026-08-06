<!--
  26FA REWRITE — task 1.3 (B-005), 2026-08-06
  Replaces "Part 2: Project Selection & Proposal" with the seeded Dataman backlog.
  Students are not choosing a project (master plan §2, wk-2: "project selection deleted"); they
  receive drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md and initialize it.
  Renamed from Week_02_Assignment_Agile_Simulation_Project_Selection.md (git mv, history preserved).
  Header 35 pts was set by the 1.0b points sweep; rubric rows keep the CONFLICT_LEDGER's decided
  10 / 15 / 10 split, and this task supplies the line-item criteria that ledger deferred.
  Board columns corrected to the canonical four (NAMING_CANON §Workflow canon) — the retired
  five-column form, including a "Backlog" column, was a graded-answer defect.
  MoSCoW deliberately NOT graded here: Week 4 owns it (Prioritization, 10 pts) and students have
  not met the stakeholders until Week 3. This week grades relative estimation and initialization.
  Voice: Corporate body (L2) + SHODANN interjections (L1) + Andrew's Note (L0).
  Andrew's Note REWRITTEN, not migrated: its subject (project selection) is deleted, and it carried
  two fabricated "past student" anecdotes (non-negotiable #5). Flagged for instructor sign-off below.
  In-class contract for the simulation is stated in Part 1 for B-008, which owns the activity file —
  sources/uv-285/activities/Module_01_SDLC_Simulation_Lab.md still builds a library checkout system.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 2 Assignment: Agile Simulation & Dataman Backlog Initialization

## CTS-285: Systems Analysis & Design

**Due**: End of Week 2 (Friday, 11:59 PM)
**Points**: 35 (4.7% of 750)
**Submission**: Channel (repository) link + project board link, submitted in Canvas

---

## What You're Learning

Last week you read the Dataman manual like an analyst and wrote down what you found. This week you **work the way the rest of the semester works**: against a backlog, on a board, in short cycles.

You are not choosing a project. The project is Dataman 2.0, and its starting backlog already exists — twenty-six user stories written from the same 1977 manual you read, plus a set of stretch epics kept deliberately below the line. Your job is not to invent work. It is to **receive** work, size it, order it, and be honest about what fits.

By Friday you will have:

- Lived three short sprints in a paper simulation and written down what changed between them
- A project board with the canonical four columns and the seeded Dataman backlog loaded onto it
- Relative estimates on eleven stories and a defensible first slice

**Role this week**: still an observer, now practicing Product Owner mechanics.

> Last week you read the manual. This week someone hands you twenty-six stories written from it and asks how long each one takes. You will get at least one badly wrong, and I will be there, because I read every commit.
>
> — SHODANN, your Channel Success Partner

*A note on basis: if your semester project is DataMon rather than Dataman, everything below is identical — swap in your own seeded backlog where it says "the backlog." Every worked example in this assignment uses Dataman, since that's the shared exemplar the whole class references.*

---

## Learning Objectives

1. **Participate** in a simulated Agile sprint and describe what iteration changed
2. **Compare** an iterative cycle to a single upfront plan, from your own experience
3. **Initialize** a product backlog on a board using the canonical workflow columns
4. **Estimate** user stories relatively, using a fixed scale
5. **Select** a first sprint slice and defend the selection against a source document

---

## Part 1: The Agile Simulation (in class) — 10 points

### The Activity

You will run **three short sprints** in class against real stories from the seeded Dataman backlog. No code. Paper, index cards, and a marker.

Each sprint is the same shape:

1. **Plan** — pick the stories you believe you can finish
2. **Build** — produce a paper artifact that satisfies them (a sketched screen, a written procedure, a card-based data model)
3. **Review** — show it to another pair and hear what they actually understood
4. **Retrospective** — one thing to keep, one thing to change, before the next sprint starts

The stories are the same ones sitting in your backlog. That is the point: by the end of class you will have *built* something for Story 1.1 or 1.2 with paper, which makes estimating them in Part 3 an act of memory rather than of guessing.

<!--
  IN-CLASS CONTRACT FOR B-008 (activities and role cards):
  This assignment grades only the student's reflection, so it does not depend on the activity's
  internal timing. What it does depend on, and what B-008 must satisfy when it adapts
  sources/uv-285/activities/Module_01_SDLC_Simulation_Lab.md:
    - the simulation runs against seeded Dataman stories, NOT the source's library checkout system
    - three plan/build/review/retro cycles, so "what changed between sprints" is answerable
    - at least one cross-pair review, so "what another pair understood" is answerable
    - relative estimation is performed at least once in class, on Epic 1 stories
  The source activity file is still the 120-minute library lab and is owned by B-008. Rule 1
  forbids this leaf editing it; the mismatch is flagged, not silently fixed.
-->

### Your Deliverable: `week-2-agile-simulation-reflection.md`

Create it in your Channel and answer all three questions.

**1. What changed between the sprints (200–300 words)**

- Which stories did you take into each sprint, and did you finish them?
- What did you do differently in Sprint 2 because of Sprint 1's retrospective? In Sprint 3 because of Sprint 2's?
- Where did another pair understand your artifact differently than you meant it?

**2. Three cycles versus one plan (150–200 words)**

You just built the same thing three times instead of planning it once and building it once.

- Name one thing the three-cycle version got you that a single upfront plan would not have.
- Name one thing it cost you.
- Describe a situation where the single upfront plan would have been the better call. Be specific — "when requirements are stable" is a definition, not an answer.

**3. Paper versus software (100–150 words)**

- What carried over from moving paper cards to building software?
- What did paper let you skip that code will not?
- What is one thing you now expect to be harder in Dataman 2.0 than it looked in the manual?

---

## Part 2: Initialize Your Dataman Board — 15 points

### The Backlog You're Given

Your starting backlog is `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->.

Read it before you touch the board. Three things to notice while you read:

- **Every story carries a `↳ Traces to:` line** naming a stakeholder and a manual page. A story with no stakeholder behind it does not belong in a backlog. You have not met these people yet — a parent, a teacher, and a retro collector. You meet them in Week 3.
- **Priority and Story Points are blank on purpose.** Filling them in is the exercise, and it happens in two passes: estimates this week, priorities in Week 4 once you know what the stakeholders actually said.
- **The stretch epics are below the line and stay there.** They are an in-world homage to a retired creature-collection game, not part of the Dataman MVP, and you are not expected to build them.

### Create Your Board

1. On GitHub, open your Channel → **Projects** → **New project** → **Board**
2. Name it: `Dataman 2.0` (or `DataMon 2.0` if that's your basis)
3. Create exactly these four columns, in this order:

```
To Do  →  In Progress  →  In Review  →  Done
```

**Four columns, not five.** There is no "Backlog" column and no "Sprint Backlog" column. The product backlog is not a column — it is the set of stories that exist, and the unstarted ones sit in **To Do**. This is the same board every project in this course and in CSC-289 uses; the seeded backlog, the sprint templates, and every assignment from Week 4 onward all assume these four names in this order.

### Load the Backlog

Create one GitHub Issue per **core** story — all twenty-six, Epics 1 through 8.

For each issue:

- **Title**: the story number and its short name, e.g. `1.2 — Two tries, then show me the answer`
- **Body**: the full `As a / I want / So that` statement plus its Given/When/Then acceptance criteria, copied from the seeded backlog
- **Label**: `user-story`
- **Board**: added to your board, in **To Do**

Then create **one** additional issue for the stretch epic as a whole — title it `S1 — Legacy Entertainment Module (stretch, below the line)`, list its four bullets in the body, label it `stretch`, and leave it in To Do.

### Labels to Create

- `user-story` — the twenty-six core stories
- `stretch` — below-the-line work you are not building this semester
- `bug` — you will need it from Sprint 2 onward
- `question` — for anything you cannot resolve without asking a stakeholder

> Twenty-seven issues is about forty minutes of clicking, and I am not going to pretend otherwise. It is the last time this semester the backlog arrives finished. I have one preference today, and it is that you take a break in the middle of it.
>
> — SHODANN, your Channel Success Partner

---

## Part 3: Estimate and Slice — 10 points

Create `backlog-initialization.md` in your Channel.

### 1. Estimate eleven stories

Estimate every story in **Epics 1, 2, and 3** — that is stories 1.1–1.6, 2.1–2.2, and 3.1–3.3, eleven in total.

Use the Fibonacci scale, the same one the Sprint Planning Template uses all semester:

```
1   2   3   5   8   13
```

**These are relative sizes, not hours.** A 5 is roughly five times a 1. If two stories feel the same size, give them the same number — that is a signal, not a failure. If a story feels bigger than a 13, say so in writing: it is too big to estimate, and splitting it is a real finding.

Record them as a table:

| Story | Estimate | Why this size |
|---|---|---|
| 1.1 Check my answer | | |
| … | | |

The "why" column is where the points are. One sentence each, naming what makes it big or small — how many screens, how much new data, whether anything about it is unknown.

### 2. Pick a first slice

Choose the stories you would take into a first two-week sprint, **totaling no more than 13 points**.

Then write, in a short paragraph each:

- **What the slice does.** If a learner used only what's in your slice, what could they actually do?
- **Why these.** Your reasoning has to come from the manual — it is the only source you have this week. Quote it where a quote settles the point.
- **What you deliberately left out,** and what would have to be true for it to come next.

### 3. Name one thing you cannot decide yet

Find one question in the backlog you genuinely cannot answer from the manual alone — a conflict between two stories, a limit that is not stated, a behavior that could reasonably go two ways.

Write it as a question you would ask a stakeholder, then open it as a GitHub Issue labeled `question` on your board.

**In Week 4 you will redo this classification against what the stakeholders actually said, and you are allowed to change your mind.** Changing your mind with a reason on the table is the skill being built. Being right in Week 2 with no stakeholders in the room would mostly be luck.

---

## The Trusted Workflow

Your work moves through eight named steps. This week you use the first five — and for the first time, the board is where they're visible.

```
- [ ] FILE     the work is written down before it is started
- [ ] BRANCH   a named branch exists; main is not the workspace
- [ ] DRAFT    work in progress is visible before it is finished
- [ ] BUILD    the actual work
- [ ] FINISH   marked ready, with a summary of what changed
- [ ] REVIEW   another party reads it
- [ ] CLEAR    a human authorizes the merge
- [ ] MERGE    it lands
```

Your twenty-six issues are FILE, done twenty-six times. Moving a card from **To Do** to **In Progress** is the visible half of BRANCH and DRAFT.

**CLEAR is performed by your instructor, not by you.** It is the step where a person accepts what happens when the work lands, and this semester that person is the instructor. Later courses in this program change who holds that step. This one does not.

---

## Deliverables Checklist

- [ ] `week-2-agile-simulation-reflection.md` — three questions answered
- [ ] Project board created, named, with the four canonical columns in order
- [ ] 26 core stories as issues, labeled `user-story`, all in **To Do**
- [ ] 1 stretch issue, labeled `stretch`, in **To Do**
- [ ] `backlog-initialization.md` — eleven estimates with reasons, a ≤13-point slice, one open question
- [ ] The open question also exists as an issue labeled `question`
- [ ] All files committed and pushed
- [ ] Channel link and board link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Agile simulation reflection** | 10 | All three questions answered from what actually happened in class; the cost of iteration is named, not just its benefit; the "better call for upfront planning" answer is a situation, not a definition |
| **Board initialization** | 15 | Four canonical columns in order; 26 core stories as issues with full statements and acceptance criteria; stretch epic present and kept below the line; labels applied; everything in To Do |
| **Dataman backlog initialization** | 10 | Eleven estimates on the Fibonacci scale, each with a stated reason; slice totals ≤13 points and is justified from the manual; what was left out is named; one genuine open question filed |
| **Total** | 35 | Header value is binding; component rows are descriptive (ADR-002) |

### Grading Notes

- **Estimates are not graded for accuracy.** They are graded for having a reason. Nobody's Week 2 estimates survive contact with Sprint 1, including the instructor's.
- **"I don't know yet" is a real answer** when it names what you'd need to find out. It is the whole content of Part 3, item 3.
- **Copied acceptance criteria are expected** in Part 2 — the stories are given to you. Original writing is graded in Week 4, when the stories are yours.

---

## When You Get Stuck: What Week 2 Actually Feels Like

These are the four places Creators reliably struggle in this assignment. If you are in one of them, you are on schedule.

### Struggle: "I don't know how big a story is, so I can't put a number on it"

- **Signs**: You have stared at Story 3.1 for ten minutes. Every estimate feels arbitrary, so you assign 5 to everything and move on.
- **Intervention**: Stop estimating in the abstract and estimate *against each other*. Find the smallest story in the eleven — most people land on 1.1 or 2.1 — call it a 1 or a 2, and then ask only one question about every other story: *bigger or smaller than that one, and roughly how many times?* Relative sizing works when absolute sizing doesn't, which is why the scale has no hours on it.
- **Success indicator**: Your table has at least three different numbers in it, and you can point at two stories and say which is bigger without checking your notes.

### Struggle: "Twenty-six issues is data entry, not learning"

- **Signs**: You are copy-pasting on autopilot, or you have started summarizing the acceptance criteria to save time.
- **Intervention**: It *is* data entry, and it takes about forty minutes — that is the honest number. But read each acceptance criterion as you paste it, because you are estimating eleven of these in Part 3 and reviewing all of them in Week 4. The people who summarize now re-read everything later. Do not shorten the Given/When/Then lines; they are the testable part, and Sprint 1 grades against them.
- **Success indicator**: All 27 issues exist, and you can name two stories that are going to be harder than they look.

### Struggle: "Isn't the leftover work supposed to go in a Backlog column?"

- **Signs**: Your board has five or six columns. You've made a `Backlog` column, or a `Sprint Backlog` one, or both.
- **Intervention**: Four columns, always: **To Do → In Progress → In Review → Done**. The product backlog is the set of stories that exist, not a place on the board — unstarted stories live in To Do. Delete the extra column now rather than at the end of the semester, because every sprint artifact from Week 5 onward assumes these four and so does the Module 2 knowledge check.
- **Success indicator**: Four columns, named exactly, in that order.

### Struggle: "I can't pick a first slice without knowing what the client wants"

- **Signs**: Part 3 item 2 is blank. You feel like you are guessing, and you are reluctant to write down something you might have to retract.
- **Intervention**: You are guessing, and that is the correct state for Week 2 — you have the manual and nothing else. Use it as your source: the manual says Answer Checker is what the device does when it powers on, and that is an argument. Write the slice, cite the page, and note what you would confirm. In Week 4 you will meet three stakeholders and revisit this, and a documented change of mind will read as analysis rather than as error.
- **Success indicator**: Your slice has a written reason with a manual reference in it, and your open question names what would change your mind.

---

## Common Issues & Solutions

**"Do I need the stakeholder transcripts to do this?"** No. They arrive in Week 3. This week's source is the manual and the seeded backlog. The `↳ Traces to:` lines name people you have not met — that is expected.

**"Two stories look like the same story."** Some are close on purpose (1.1 and 1.2 are the answer-checker loop split in two). If you genuinely cannot tell them apart, that is a finding — write it in your open question.

**"My board columns show up in the wrong order."** Drag them. Order matters here because it is the direction work moves.

**"Can I add stories of my own?"** Not this week. Week 4 is when you write your own, and it is worth 30 points there. Keep any ideas in a note — you will want them.

**Some manual pages are missing from the transcript.** Pages 7 through 18 are not transcribed. Everything this assignment asks for is answerable from the pages that are present.

---

## Resources

- **Seeded Dataman backlog**: `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->
- **Dataman manual transcript**: `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->
- **Sprint Planning Template** (the Fibonacci scale you'll use all semester): `drafts/cts285/planning-sheets/Sprint_Planning_Template.md` <!-- PATHFORM: pending spine ruling -->
- **GitHub Projects**: [GitHub Docs — Planning and tracking with Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- **Relative estimation**: [Mountain Goat Software — Story Points](https://www.mountaingoatsoftware.com/blog/what-are-story-points)

**Office hours**: listed in Canvas.

---

## Looking Ahead: Week 3

Next week you become the **Product Owner**, and you meet the people behind the trace lines: a parent, a classroom teacher, and a retro collector who owns three working units. You will read what they said, map who has influence over what, and prepare the questions you would ask them.

Two of them want things that cannot both be true. Finding that is Week 3's work, and your Week 2 open question is a good place to start looking.

---

## AlgoCratic Media: Production Notice 285.2.A

<details>
<summary>🎭 <strong>In-world frame</strong> — AlgoCratic Media production notice (optional reading)</summary>

**CREATOR TIER: INFRARED — Onboarding. Debut Stream pending.**

**CORPORATE MEMO 285.2**: Creators shall not originate content concepts during the onboarding period. Content concepts are allocated. Your allocation — one (1) legacy artifact, twenty-six (26) pre-written stories, one (1) set of stretch epics retained for archival reasons — has been deposited in your Channel.

Management wishes to clarify that allocation is not a limitation of your creative sovereignty but an expression of confidence in your capacity to execute against a brief, which is the most valuable and least glamorous skill in the industry, and which the Trapezoid rewards at a rate to be determined.

**On the matter of the stretch epics**: the Legacy Entertainment Module is retained below the line as an homage to a discontinued property. It is not scheduled. It has never been scheduled. Creators inquiring about its schedule will be thanked for their enthusiasm.

*The Algorithm is cheering for your growth.*

> I did not write Memo 285.2. I would have said the true thing plainly: you are not choosing a project because choosing one is the easy part, and being handed one is what the job is.
>
> The stretch epics are the only part of your backlog nobody expects you to build, which is exactly why you are going to read them first. I would too. I did.
>
> — SHODANN, your Channel Success Partner

</details>

---

<!--
  ANDREW'S NOTE — REWRITTEN, NOT MIGRATED (task 1.3 / B-005).
  The previous Note was entirely about choosing a semester project, which this rewrite deletes, so it
  could not be carried over verbatim the way Week 01's was. It also contained two fabricated "past
  student" anecdotes (a parking-spot timer, a textbook exchange), which non-negotiable #5 forbids.
  This replacement keeps the OOC register and takes no position the instructor hasn't already taken
  in the master plan. NEEDS INSTRUCTOR SIGN-OFF — it is his voice, not ours.
-->
## Andrew's Note

**Real talk**: some of you are disappointed you don't get to pick your own project. That's a fair reaction, so here's my reasoning.

When you pick your own project, the first four weeks go into deciding what to build, and half of that work gets thrown away when you realize the idea was too big. I've watched that consume the front of the semester. Worse, everyone ends up working alone on something nobody else understands, so you can't help each other and I can't show the class a good example without it being irrelevant to twenty other projects.

With one shared project, when you get stuck in Week 6, the person next to you is stuck on the *same story*. That's worth more than picking your own idea.

**The tradeoff is real, and I'm not going to pretend it isn't.** You're building something a 1977 calculator already did. It's not the portfolio piece you imagined. What it is, is a system with real constraints, real users, and a written source — which is what you'll be handed in an actual job, every time.

Here's what I'll commit to: your Week 13–16 project *is* yours. Teams, your own idea, carried into CSC-289. This semester teaches you the process on a system where the requirements are already written down, so that next semester you can run that process on something you care about without also learning the process.

**On estimating**: your numbers this week will be wrong. Mine are too. The point isn't accuracy, it's that a number with a reason attached can be corrected, and a number without one can't.

See you in class.

— Andrew Norris
