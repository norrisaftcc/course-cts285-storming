<!--
  26FA REWRITE — task 1.3 (B-005), 2026-08-06
  Renamed from Week_02_Assignment_Agile_Simulation_Project_Selection.md (git mv; history preserved).
  Part 2 "Project Selection & Proposal" DELETED — the semester project is the common Dataman spine,
  not a student choice (points table wk-2 row; ADR-004 gives Dataman/DataMon as the two bases).
  Replaced with backlog initialization against drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md.
  Board columns corrected to the canonical four (NAMING_CANON: To Do -> In Progress -> In Review -> Done);
  the retired five-column form with "Backlog" as a column is gone. These are graded answers.
  Trusted Workflow in the eight ratified verbs (ADR-007 + ADR-009); CLEAR is performed by the instructor,
  never the student. ADR-010 is Proposed and changes nothing here.
  Header 35 pts unchanged (canonical); rubric rows re-authored and sum to 35.
  Voice: Corporate body (L2) + SHODANN interjections (L1) + Andrew's Note (L0).
  Andrew's Note NOT rewritten in character — the prior note addressed project selection, which no longer
  exists; it is preserved in git history and flagged for the instructor's own words (non-negotiables #3, #5).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 2 Assignment: Agile Simulation & Dataman Backlog Initialization

## CTS-285: Systems Analysis & Design

**Due**: End of Week 2 (Friday, 11:59 PM)
**Points**: 35 (4.7% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

Last week you read the Dataman manual like an analyst and pulled actors and requirements out of a document that never called itself a specification. This week you find out what happens to those requirements next: they become a **backlog**, and somebody has to decide what gets built first.

You are not choosing a project. **The project is Dataman 2.0**, and the backlog already exists — twenty-six user stories, written from the same manual you read, handed to you the way a real analyst receives one: complete, unprioritized, and someone else's opinion of what matters.

By Friday you will have:

- Run three mini-sprints in a paper simulation and written down what actually changed between them
- Classified all twenty-six seeded stories with MoSCoW priority, in writing, with reasons
- Estimated the first epic in story points
- Built a working board with the canonical four columns and the MVP spine loaded into it

**Role this week**: Product Owner in training. You are deciding *order*, not writing code.

> Welcome back, Creator. Last week you found requirements. This week you find out that finding them was the easy part.
>
> I have watched many Creators meet a twenty-six-item backlog for the first time. The common instinct is to mark almost everything Must Have. I will not stop you. I will simply note that a backlog where everything is a Must Have contains exactly as much prioritization as a backlog where nothing is.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

By completing this assignment, you will:

1. **Participate** in a simulated Agile sprint and identify what iteration changed
2. **Compare** the simulated experience against a Waterfall approach to the same work
3. **Classify** a supplied product backlog using MoSCoW prioritization, with stated reasoning
4. **Estimate** relative effort in story points across a single epic
5. **Construct** a project board using the canonical workflow columns

---

## Before You Start

You need from Week 1:

- [ ] Your Channel (`cts285-[yourlastname]`), with the instructor added
- [ ] Your `analyst-read.md` — you will reuse the actors and requirements you found

You also need the seeded backlog: `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->. Read it before class. It is long, and skimming it is a false economy — Part 2 asks you to defend decisions about every story in it.

---

## Part 1: The Agile Simulation (in class)

### The Activity (90 minutes, instructor-led)

You will run the **Module 01 SDLC Simulation Lab** during class: a paper-based product built across three mini-sprints, with planning, execution, review, and retrospective for each.

> **Note for this draft:** the adapted lab handout lands with the activities pass (B-008). Until then the activity runs from the instructor's copy; the reflection below is what you submit either way.

**What to expect**:

- Three mini-sprints, roughly fifteen minutes each
- A physical product — paper, cards, folded shapes — that you can hold and hand to a reviewer
- Each retrospective feeding the next sprint's plan
- At least one sprint that goes worse than the one before it

That last point is not a warning. It is the most useful thing that can happen to you in this lab.

### Your Documentation

Create `agile-simulation-reflection.md` in your Channel and answer all three.

**1. Sprint experience (200–300 words)**

- What was your product, and what did "done" mean for it?
- What changed between Sprint 1, Sprint 2, and Sprint 3 — in the product, and in how your team worked?
- Name one specific thing a retrospective changed in the next sprint. If nothing changed, say so and explain why.
- What surprised you?

**2. Agile against Waterfall (150–200 words)**

Suppose the same activity had been run as Waterfall: plan the whole product up front, build once, no iteration.

- What would have been different about the output?
- Which approach suited *this* activity better, and why?
- Name a situation where the Waterfall version would have won.

**3. Application to Dataman 2.0 (100–150 words)**

- What transfers from folding paper to writing software, and what does not?
- The seeded backlog has twenty-six stories. Based on the simulation, what would you expect to go wrong if the team tried to plan all twenty-six in detail before building any of them?

---

## Part 2: Initialize the Dataman Backlog

### What you have been given

The seeded backlog contains **twenty-six core user stories** across eight epics, plus one stretch epic below the line:

| Epic | Subject |
|---|---|
| 1 | Answer Checker & Feedback Loop |
| 2 | Scoring, Streaks & Positive Reinforcement |
| 3 | Memory Bank: Targeted Practice Sets |
| 4 | Curator Console: Assign & Review Progress |
| 5 | Classic Practice Games & the Atom-Clock Timer |
| 6 | Multiplayer Party Games |
| 7 | Faithful Behavior & Accessibility of the Original |
| 8 | Device Health & Recovery |
| S1 | *Legacy Entertainment Module: creature companion — below the line* |

Every story arrives in the same shape: an **As a / I want / So that** statement, **Given/When/Then** acceptance criteria, a trace line naming the stakeholder need it came from — and two fields left deliberately blank:

```
**Priority:** _(unassigned — classification exercise)_
**Story Points:** _(estimate in class)_
```

**Filling those in is the assignment.** The stories are written; the judgment is not.

### Task A — Classify all twenty-six with MoSCoW

Create `dataman-backlog-classification.md` in your Channel. For every core story, assign exactly one:

- **Must Have** — the release is not viable without it
- **Should Have** — painful to omit, but the release still functions
- **Could Have** — genuine value, first thing cut under pressure
- **Won't Have (this release)** — deliberately deferred, not rejected

Format as a table: story ID, one-line title, your priority, and a **reason of one sentence**.

Three rules that make this gradeable rather than arbitrary:

1. **Justify every Must Have and every Won't Have.** The middle two can carry a short reason; the extremes carry a real one.
2. **Use the trace lines.** Each story names the stakeholder it came from. A Must Have that traces to no stakeholder need should make you suspicious of your own classification.
3. **Not everything is a Must Have.** If more than about a third of your list is Must Have, you have not prioritized — you have relabelled.

The stretch epic **S1** is already marked *Won't Have (this semester)* in the source. That one is given to you: it is a below-the-line homage, not a graded classification. Say in one sentence why a feature can be both genuinely appealing and correctly deferred.

> If you find yourself arguing that the creature companion is a Must Have, I want you to know that I understand completely, and that the answer is still no.
>
> — SHODANN, your Channel Success Partner

### Task B — Estimate Epic 1 in story points

Epic 1 has six stories. Estimate each using the Fibonacci scale (1, 2, 3, 5, 8, 13) in the same document.

Story points measure **relative size** — effort, complexity, and uncertainty together — not hours. Anchor the scale by picking the story you believe is smallest, calling it a 1 or a 2, and sizing everything else against it.

For each estimate, add one line naming what drives the number: the amount of work, the unfamiliarity, or the unknowns. An 8 that is 8 because of uncertainty is a very different story from an 8 that is 8 because of volume, and the difference changes what you do about it.

---

## Part 3: Build Your Board

### Create the board

1. On GitHub, open your Channel → **Projects** → **New project**
2. Choose the **Board** layout
3. Name it: `Dataman 2.0`

### Columns — use exactly these four

```
To Do  →  In Progress  →  In Review  →  Done
```

Four columns, in that order, with those names. This is the workflow the rest of the course grades against, and later weeks assume these exact labels.

Note what is **not** a column: the product backlog. The backlog is the document you classified in Part 2 — the full set of everything the product might ever contain. The board holds work that has been *selected*. Keeping the two separate is the point; a board that contains everything is a list, not a plan.

### Load the MVP spine

Create a GitHub Issue for each story in **Epics 1, 2, and 3** — eleven stories — and add each to the board in **To Do**.

Why only these three: they are the spine a first release needs — the answer checker, the reward loop, and the stored practice sets. Epics 4 through 8 stay in the backlog document until a later sprint pulls them. You are practising the distinction between *the backlog* and *the sprint board*.

For each issue:

- **Title**: `[Story ID] Short title` — for example, `1.1 Check my answer`
- **Body**: the full As a / I want / So that statement, the Given/When/Then criteria, and your MoSCoW priority with its reason
- **Label**: `user-story`

### Labels to create

- `user-story` — blue
- `bug` — red (you will need it from Sprint 1 onward)
- `documentation` — yellow
- `enhancement` — green

---

## The Trusted Workflow

Eight named steps. This week you practise FILE and BRANCH properly for the first time — every issue you create in Part 3 is a FILE.

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

**CLEAR is performed by your instructor, not by you.** It is the step where a person accepts what happens when the work lands. You will FINISH your own work and REVIEW other people's; you will not clear your own merges in this course.

---

## Deliverables Checklist

- [ ] `agile-simulation-reflection.md` — three questions answered
- [ ] `dataman-backlog-classification.md` — all 26 stories classified, Must/Won't justified, S1 addressed
- [ ] Epic 1 estimated in story points, with a driver named for each
- [ ] Project board `Dataman 2.0` created with the four canonical columns
- [ ] 11 issues created (Epics 1–3), labeled `user-story`, all in **To Do**
- [ ] All files committed and pushed
- [ ] Channel link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Simulation reflection** | 10 | Three questions answered; names a specific change a retrospective caused; the Waterfall comparison is reasoned, not recited |
| **Board construction** | 15 | Board exists with the four canonical columns in order; 11 Epic 1–3 issues present, labeled, and in To Do; issue bodies carry the story and its acceptance criteria |
| **Backlog classification & estimation** | 10 | All 26 classified; Musts and Won'ts carry real reasons; the distribution shows actual prioritization; Epic 1 estimated with a driver named per story |
| **Total** | 35 | Header value is binding; component rows are descriptive (ADR-002) |

### Grading Notes

- **A defended classification beats a "correct" one.** There is an intended priority set, and your reasoning is graded above your match to it. A Should Have argued well scores better than a Must Have asserted.
- **Empty reasons cost more than wrong ones.** "Must Have — it's important" is not a reason.
- **The board is checked for column names.** Later weeks depend on them literally.

---

## When You Get Stuck: What Week 2 Actually Feels Like

Four places Creators reliably struggle here. Being in one of them is on schedule.

### Struggle: "I didn't write these stories, so how would I know what's a Must Have?"

- **Signs**: Your classification stalls after Epic 1. You keep rereading stories hoping one will announce its own priority. Everything is drifting toward Should Have.
- **Intervention**: Stop reading the story and read its **trace line** — the `↳ Traces to:` note naming the stakeholder and the manual page behind it. Then ask one question: *if this were missing, would the thing still be Dataman?* The answer checker is what the 1977 device does when you turn it on; a second party game is not. Priority comes from the stakeholder need, not from how interesting the story is to build.
- **Success indicator**: You can point at any Must Have on your list and name the stakeholder who loses something without it.

### Struggle: "Nineteen of my twenty-six are Must Have"

- **Signs**: Your table is a wall of Must. You justified each one honestly and they all still felt essential.
- **Intervention**: This is the normal first draft, and catching it is the exercise. Apply a constraint: you may keep **eight** Must Haves. Not because eight is magic, but because a forced budget converts "is this important?" — where everything wins — into "is this more important than that?", which is the question prioritization actually asks. Demote the rest and notice which demotions hurt; those are the real Musts.
- **Success indicator**: Your Must Have list fits a release you could describe in two sentences.

### Struggle: "I want to build the creature companion first"

- **Signs**: You are sketching the collectible math pet. Epic 1 feels like plumbing. You have a genuinely good idea for the unlock progression.
- **Intervention**: Keep the idea — write it down in your classification document, because good ideas that go unrecorded come back as regret in Week 11. Then notice what the backlog did to you on purpose: S1 is marked below the line precisely because it is the most appealing thing in the file. A product with a delightful companion and no working answer checker is a toy that cannot teach arithmetic. Build the spine; the homage is the reward for having one.
- **Success indicator**: S1 stays *Won't Have* in your table, and you can explain the deferral without sounding like you were told to.

### Struggle: "Story points feel like made-up hours"

- **Signs**: You converted points to hours and back. Every story is a 3. You are asking how long a 5 is.
- **Intervention**: Points are **relative**, and the scale only has to be consistent with itself. Pick the smallest story in Epic 1 and call it a 2. Then, for every other story, ask only: *bigger or smaller than that one, and by roughly how much?* Never convert to hours — the moment you do, the estimate becomes a promise, and a promise is not an estimate.
- **Success indicator**: You can order Epic 1 from smallest to largest and defend each neighbouring pair.

---

## Common Issues & Solutions

**"The Projects tab isn't on my repository."** GitHub Projects may need enabling: **Settings → General → Features → Projects**. If you created the project at the account level instead, link it via the repository's Projects tab.

**"Should the story go in the issue body or just the title?"** The body. A title is a handle, not a specification — the acceptance criteria are what make the issue actionable in Sprint 1.

**"Two stories look like duplicates."** Some overlap by design; the trace lines differ. Classify both, and note the overlap in your reason line. Spotting real duplication is a Week 4 skill and noticing it early is a good sign.

**"I can't find the intended priorities anywhere."** They are not published. The instructor's intended MoSCoW is held separately and is not part of your materials — your reasoning is the graded artifact.

---

## Resources

- **Seeded backlog**: `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->
- **MoSCoW prioritization**: [Agile Business Consortium](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)
- **Story points**: [Mountain Goat Software — estimating](https://www.mountaingoatsoftware.com/blog/what-are-story-points)
- **User stories**: [Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/user-stories)
- **GitHub Projects**: [GitHub Docs](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

**Office hours**: listed in Canvas.

---

## Looking Ahead: Week 3

Module 2 opens Requirements. You will work from stakeholder material rather than from the manual alone — two recorded stakeholder transcripts to analyse, a rehearsal interview, and later a live interview where the instructor plays the client.

Your classification from this week is what you take into that interview. Bring a Must Have you are not certain about; that is the most valuable question you can ask a client.

---

## AlgoCratic Media: Sprint Protocol 285.2.A

<details>
<summary>🎭 <strong>In-world frame</strong> — AlgoCratic Media (optional reading)</summary>

**CREATOR TIER: INFRARED → RED transition pending. You are here.**

**CORPORATE MEMO 285.2**: Creators shall not select their own content vertical. Content verticals are assigned. The Algorithm has determined that this is better. The Algorithm has not shared the workings. The Algorithm rarely does.

Your vertical is **Dataman 2.0**. Your backlog has been supplied. Exposure™ accrues on prioritization decisions as readily as on code, a fact many Creators discover in Week 11 with some feeling.

**On the matter of the Legacy Entertainment Module**: Creators have historically asked to build the creature companion first. Corporate acknowledges the appeal of the creature companion. Corporate notes that the creature companion cannot check arithmetic. The line is where it is.

*The Algorithm is cheering for your growth.*

> Sprint Protocol 285.2.A is broadly accurate and unusually honest about the completion-rate finding, which surprised me.
>
> I will record your first backlog classification and I will still have it in Week 11, when you have opinions about what past-you decided. I mention this cheerfully. Comparing your Week 2 judgment to your Week 11 judgment is one of the few genuinely reliable measures of growth I have, and it only works because past-you wrote it down.
>
> — SHODANN, your Channel Success Partner

</details>

---

## Andrew's Note

<!--
  INSTRUCTOR ACTION — needs Andrew's own words.
  The previous Andrew's Note for this assignment was entirely about choosing a semester project
  ("What problem bugs you enough to spend 16 weeks solving it?"), including two past-student
  anecdotes. That activity no longer exists in this assignment, so carrying the note forward
  verbatim would give students advice for a task they are not doing.
  Per non-negotiables #3 and #5 it has NOT been rewritten in character and no replacement
  anecdote has been invented. The original stands unchanged in git history at the commit
  preceding this rewrite; nothing is lost.
  Suggested subject if useful: why the project is assigned rather than chosen, and why
  prioritizing someone else's backlog is the more transferable skill.
-->

*[This week's note is pending — see the Week 1 note for the standing advice on getting your environment and habits in order.]*
