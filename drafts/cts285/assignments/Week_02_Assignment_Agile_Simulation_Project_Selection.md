<!--
  26FA REWRITE — task 1.3 (B-005), 2026-08-01
  Deletes "Part 2: Project Selection & Proposal" — students no longer choose a project (points table:
  "REWRITE Week_02 — header 25→35"; the header was already set by task 1.0b, so this pass is content only).
  The task 1.0b out-of-sync note is removed: this rewrite is the condition it was waiting for.
  Backlog initialization works from drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md
  (26 core stories, 8 epics; MoSCoW and story points deliberately unassigned — classifying them is the
  graded exercise). Grading_Key.md is instructor-only and is never referenced in student-facing text.
  Board columns are the canonical four per NAMING_CANON; the retired five-column set is gone.
  Trusted Workflow in the eight ratified verbs (ADR-007 + ADR-009); CLEAR is the instructor's step.
  The story-writing content from the retired Part 2 §4 was NOT migrated — Week 4 owns user-story authoring.
  NOTE — "Andrew's Note" replaced by "Teacherbot's Note" in THIS FILE ONLY, per instructor direction
  2026-08-01. The canon-wide rename (10 assignment files + 4 canon files) and the question of whether a
  simulated note still sits at layer L0 are tracked in a GitHub issue, deliberately not acted on here.
  Two unverified past-student anecdotes were deleted (non-negotiable #5).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 2 Assignment: Agile Simulation & Dataman Backlog Initialization

## CTS-285: Systems Analysis & Design

**Due**: End of Week 2 (Friday, 11:59 PM)
**Points**: 35 (4.7% of 750)
**Submission**: Channel (repository) link + Project board link, submitted in Canvas

---

## What You're Learning

Last week you read the Dataman manual as an analyst and pulled actors and requirements out of it. This week two things happen: you **experience** an Agile sprint through a low-stakes paper simulation, and you receive **the backlog that was built from the document you just read**.

You will not be choosing a project. That decision is already made, and it was made for a reason.

Every professional analyst inherits a backlog. Somebody else wrote the stories, somebody else talked to the stakeholders, and your first real job is to look at what you were handed and decide **what matters most and how big it is**. That judgment — not the writing of stories — is the skill this week grades.

By Friday you will have:

- Run three mini-sprints and written up what changed between them
- Imported 26 seeded Dataman stories into your own Project board
- Assigned a MoSCoW priority to every one of them, and defended your Must-Haves
- Estimated all 26 in story points

**Role this week**: still learning, but doing real Product Owner work — prioritization and estimation.

> Your backlog arrived this morning. Twenty-six stories, none of them prioritized, all of them traceable to something a stakeholder actually said. I did not write them either. We are both working from the same document.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Participate** in a simulated Agile sprint using paper prototypes
2. **Compare** the simulated experience to a Waterfall approach
3. **Classify** an inherited backlog using MoSCoW prioritization
4. **Estimate** relative effort in story points
5. **Defend** a prioritization decision against a stakeholder need

---

## Part 1: Agile Simulation (Complete in Class)

### The Activity (90 minutes, in class)

We build a paper-based "product" through three mini-sprints — planning, execution, review, retrospective for each. Low stakes, physical materials, no code.

**What to expect**:

- 3 mini-sprints, 15 minutes each
- A physical product built iteratively (paper, cards, folded structures)
- Changes driven by the retrospective, not by a plan written up front

### Your Documentation

Create `week-2-agile-simulation-reflection.md` in your Channel.

**1. Sprint Experience (200–300 words)**

- What was your "product"?
- What changed between Sprint 1, 2, and 3?
- How did a retrospective change what you did next?
- What surprised you about working iteratively?

**2. Agile vs. Waterfall (150–200 words)**

If the same activity had been run as Waterfall — plan everything up front, build once, no iteration:

- What would have been different?
- Which approach suited this activity, and why?
- Name a situation where Waterfall would be the better choice.

**3. Application to Dataman (100–150 words)**

- What does the paper product have in common with the Dataman backlog you are about to prioritize?
- What is different between folding paper and shipping software?
- Which part of the simulation do you expect to be hardest when the work is real?

---

## Part 2: Backlog Initialization

### You Are Being Handed a Backlog

Your starting backlog is `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->.

It contains **26 core user stories across 8 epics**, covering the Answer Checker, scoring, the Memory Bank, a Curator Console for teachers, the classic practice games, the multiplayer games, and faithful-behavior/accessibility work. Every story traces to a named stakeholder need — you will see a `↳ Traces to:` line on each one, pointing back to the interview transcripts and the 1977 manual you read last week.

**Two fields are deliberately blank on every core story: Priority and Story Points.** Filling them in is the assignment. Nobody is going to tell you the right answer this week, because in real work nobody does.

### If your basis is DataMon

Per **ADR-004**, DataMon is a first-class basis for this course, not a variant. The backlog carries a below-the-line **Stretch Epic S1** (creature companion: save/load, turn-based challenge, encounters, collection), marked *Won't Have* by default because it sits beyond the faithful-Dataman MVP.

**A DataMon student may promote S1 stories from stretch to core.** If you do, say so explicitly in your classification file and treat them like any other story — they get a MoSCoW priority and an estimate, and they must earn their place against the core spine. Promoting all four and calling everything a Must-Have is not a prioritization.

### Deliverable: `dataman-backlog-classification.md`

Create this file in your Channel with one table covering **all 26 core stories**:

| Story | Title | MoSCoW | Points | Why |
|---|---|---|---|---|
| 1.1 | Check my answer | Must | 3 | Nothing else works without the core loop |
| … | | | | |

**MoSCoW** — one of `Must` / `Should` / `Could` / `Won't (this semester)`:

- **Must** — the product is not the product without it
- **Should** — painful to omit, but the product still functions
- **Could** — genuinely nice, first to be cut under pressure
- **Won't** — not this semester, and saying so out loud is the point

**Story Points** — relative effort on the Fibonacci scale `1, 2, 3, 5, 8`. Points measure *size and uncertainty*, not hours. A 5 is not five times a 1; it is "considerably bigger, and I am less sure about it."

**The "Why" column is only required for your Must-Haves.** One sentence each, naming the stakeholder need or manual behavior that makes it non-negotiable.

### The Constraint That Makes This Real

**No more than 8 of your 26 stories may be Must-Have.**

If everything is a Must, you have not prioritized — you have made a list. Eight is roughly a semester's core spine, and forcing the cut is the exercise. Expect this to be uncomfortable. It is uncomfortable for professionals too.

> I notice that most Creators mark eleven or twelve stories Must before they read this constraint, then argue with it. The argument is the assignment. Cut three and write down what you gave up.
>
> — SHODANN, your Channel Success Partner

---

## Part 3: Project Board Setup

### Create Your Board

1. In your repository, go to **Projects → New project**
2. Choose the **Board** template
3. Name it: `CTS-285 Dataman`

### Columns — use exactly these four

```
To Do  →  In Progress  →  In Review  →  Done
```

These four are course canon and every later week assumes them. Do not add a "Backlog" column: the product backlog is the seeded document, not a board column.

**Every seeded story starts in `To Do`.** Nothing moves this week — you are prioritizing, not building.

### Import the Stories as Issues

For each of the 26 core stories:

1. **New issue**
2. **Title**: the story number and title, e.g. `1.4 — Division with remainder`
3. **Description**: the full story statement and its Given/When/Then acceptance criteria, copied from the seeded backlog
4. **Labels**: `user-story`, plus a label for your MoSCoW call — `must`, `should`, `could`, `wont`
5. **Project**: add to your board, `To Do` column

### Labels to Create

`user-story` · `must` · `should` · `could` · `wont` · `bug` · `documentation`

---

## The Trusted Workflow

You met the eight steps in Week 1. This week you use FILE for the first time in earnest — each issue you create *is* a FILE step.

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

**CLEAR remains the instructor's step, not yours.** You FILE, BRANCH, DRAFT, BUILD, FINISH, and REVIEW. The authorization to merge is held by a person who accepts what happens when the work lands.

---

## Deliverables Checklist

- [ ] `week-2-agile-simulation-reflection.md` (3 questions answered)
- [ ] `dataman-backlog-classification.md` — all 26 core stories, MoSCoW + points, Why for Must-Haves
- [ ] No more than 8 Must-Have stories
- [ ] GitHub Project board created with the **four** canonical columns
- [ ] All 26 stories created as issues, labeled, in `To Do`
- [ ] Channel link and board link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Agile Simulation Reflection** | 10 | Three questions answered; the Waterfall comparison is reasoned, not recited; the Dataman connection is specific |
| **GitHub Project Board Setup** | 15 | Four canonical columns; all 26 stories as issues in `To Do`; each issue carries the story statement and its acceptance criteria; MoSCoW labels applied and matching the classification file |
| **Backlog Initialization** | 10 | All 26 stories classified and estimated; the 8-Must cap is respected; every Must-Have has a one-sentence justification naming a stakeholder need or manual behavior; estimates show real spread rather than one repeated number |
| **Total** | 35 | Header value is binding; component rows are descriptive (ADR-002) |

### What Earns Full Points

**Prioritization**: your Must-Haves hold together as a coherent product. Someone reading only those eight stories can see a working thing.

**Estimation**: your points spread across the scale. Twenty-six 3s means you estimated nothing.

**Defence**: each Must-Have justification points at evidence — a stakeholder line, a manual behavior, a dependency — rather than at your own preference.

**Honesty**: a Won't-Have you can defend is worth more than a Must-Have you cannot.

---

## When You Get Stuck: What Week 2 Actually Feels Like

### Struggle: "Everything looks like a Must-Have"

- **Signs**: You have 15+ Musts and you are arguing with the cap. Each story individually feels essential.
- **Intervention**: Stop judging stories one at a time — that is what produces 15 Musts. Instead ask: *if I shipped only these eight, would a child be able to practice math and get told whether they were right?* Build the smallest coherent product, then everything outside it is a Should. Epic 1 alone nearly answers this.
- **Success indicator**: Your eight Musts describe a thing that works, and you can name what the ninth would have added.

### Struggle: "I don't know how big a story is, I haven't built anything yet"

- **Signs**: Every estimate is a 3. Or you are trying to convert points into hours.
- **Intervention**: Estimate *relatively*, not absolutely. Find the smallest story in the list — "Drill without the clock" is a good candidate — call it a 1, and size everything else against it. "Bigger than that, and I am less sure" is a 5. You are not predicting the future; you are ranking uncertainty.
- **Success indicator**: Your estimates use at least three different values, and you can say which story is your 1 and why.

### Struggle: "The Curator Console stories feel like a different product"

- **Signs**: Epic 4 (teachers reviewing learner results) seems out of scope next to a handheld calculator, and you want to mark all of it Won't.
- **Intervention**: Reread the trace lines and the teacher transcript. The 1977 manual already describes an adult loading problems for a child — the Curator Console is that role made visible, not a new product. It may still be a Should or a Could; that is a legitimate call. What is not legitimate is cutting it because it surprised you.
- **Success indicator**: Your Epic 4 decision cites the teacher's stated need, whichever way you ruled.

### Struggle: "I'm a DataMon student and I don't know if the creature stuff counts"

- **Signs**: You are unsure whether to touch Stretch Epic S1 at all, or you promoted all four and marked them Must.
- **Intervention**: ADR-004 makes DataMon a real basis, so promotion is allowed — but a promoted story competes with the core spine on the same terms. Promote what your product genuinely needs, classify it honestly, and say in one line why it earned the slot. The faithful practice loop underneath does not change.
- **Success indicator**: Any promoted S1 story is stated as promoted, estimated, and justified against a need rather than a preference.

---

## Common Issues & Solutions

**"Creating 26 issues by hand is tedious."** It is. Do it anyway this once — you are reading each story as you go, which is the point. Later weeks use bulk tooling.

**"Two stories look like duplicates."** Check the trace lines. Stories that look similar often serve different stakeholders, which is exactly the kind of finding worth writing down.

**"A story's acceptance criteria don't make sense to me."** Good — that is a real analyst finding. Note it in your classification file. Week 3 gives you a stakeholder to ask.

**"Can I change my classification later?"** Yes. Backlogs are re-prioritized constantly. This week records your *first* judgment, and later weeks will show you what it looked like from further along.

---

## Resources

- **Seeded backlog**: `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->
- **Stakeholder transcripts**: same directory — the retro collector and the parent
- **MoSCoW method**: [Agile Business Consortium](https://www.agilebusiness.org/resources/dsdm-handbook/moscow-prioritisation.html)
- **Story points**: [Mountain Goat Software — estimating](https://www.mountaingoatsoftware.com/blog/what-are-story-points)
- **GitHub Projects**: [GitHub Docs](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

---

## Looking Ahead: Week 3

Next week begins Module 2: Requirements Gathering. You will interview a stakeholder — the instructor plays the role — and your questions will be shaped by what you could not resolve this week.

**Bring your unanswered questions.** The classification you just did will have produced several, and a stakeholder interview is where they get settled.

---

## Teacherbot's Note

> **These notes are simulated.** This section is generated instructor commentary standing in for the real thing, pending a revision pass by the instructor. Treat the advice as sound and the voice as provisional. Anything requiring an actual decision — a grade, an extension, a personal situation — goes to the instructor directly, not here.

**You did not choose this project, and that is the most common complaint about Week 2.**

It is worth answering honestly. Choosing your own project feels better on day one and is worse almost every day after. Students who pick their own tend to pick something they have already half-designed in their heads, which means the analysis phase is theater — you cannot discover requirements for a system you already decided on. You also cannot be given a stakeholder to interview, because the only stakeholder is you.

Dataman fixes both. Nobody in this room designed it. The requirements are genuinely out there, in a document written in 1977 by people who are not available to clarify anything, which is a more accurate simulation of professional work than any project you would have proposed. And because everyone is working from the same system, a peer review in Week 9 means something — your reviewer knows what the code was supposed to do.

**On the Must-Have cap.** Eight is going to feel arbitrary and slightly unfair. Real constraints usually do. The number matters less than the act of choosing under one: a prioritization that costs nothing teaches nothing. If you find yourself building an argument for why your particular set of stories deserves nine, notice that you have started doing product management.

**On estimation.** Your estimates this week will be wrong. Everyone's are. Story points are not a promise about the future; they are a snapshot of what you currently understand, and their value shows up in Week 5 when you compare them against what actually happened. Estimate honestly rather than defensively — an estimate you inflated to feel safe teaches you nothing when it turns out to be right.

**If you are stuck**, the fastest unstick is the trace line. Every story says who wanted it. When you cannot decide how much something matters, go read what the person asking for it actually said.

See you in class for the simulation.

— Teacherbot, CTS-285
