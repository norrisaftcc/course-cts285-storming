<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/Sprint_Planning_Template.md -->
<!-- ADAPTED for 26FA per issue #5: worked example rebuilt as solo Dataman Sprint 1 (team/SendGrid/appointment removed), solo-arc de-teaming with forward-looking team framing, Media-skin pass. Sprint weeks NOT hard-coded — CADENCE markers flag the pending spine ruling. Fibonacci STORY POINTS preserved (the one allowed points occurrence). Planning sheet — carries ZERO points of its own. -->

# Sprint Planning Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Define your sprint goal, select user stories, work out your realistic capacity, and commit to what you'll actually complete in the next 2-week sprint.

---

## When to Use

At the beginning of each sprint, before you start implementation — after you've written user stories and have a prioritized product backlog. Your specific sprint weeks come from the course schedule.
<!-- CADENCE: pending spine ruling. The source template hard-coded "Weeks 5, 9, 13" and enumerated five sprints to week 14 — the 4th of 4 colliding week-numbering schemes in the source tree. Master plan §2 (marked "proposed", no ADR) instead maps CTS-285 to a clean 2-week solo cadence: Sprint 1 = wks 5–6, Sprint 2 = wks 7–8, Sprint 3 = wks 9–10, then "Ship It" wks 11–12. Do NOT reintroduce hard-coded sprint weeks until the spine session rules. See issue #5 BLOCKED-ON. -->

---

## Instructions

1. **Review your velocity** from previous sprints (if you have any yet)
2. **Define a clear sprint goal** — what shippable increment will you deliver?
3. **Select user stories** from your product backlog that support the sprint goal
4. **Estimate story points** for each story (Fibonacci: 1, 2, 3, 5, 8, 13)
5. **Work out your capacity** based on the hours you actually have this sprint
6. **Commit to stories** that fit within capacity (don't overcommit!)
7. **Break stories into tasks** — each story becomes a few 1–3 hour tasks
8. **Define "Done"** — what has to be true to mark a story complete?

---

## Template

> **Solo now, teams later.** Weeks 1–12 you plan sprints solo for your Dataman build, so the "capacity" below is *your* hours and *your* velocity. The team-planning fields (multiple members, combined velocity, shared commitment) come alive in **CSC-289** / the weeks 13–16 team on-ramp — they're noted here so the template is one you'll keep using.

### Sprint Information
- **Sprint Number**:
- **Sprint Duration**: [Start Date] to [End Date]
- **Creator**: [Your name / channel]  *(team: list all members in CSC-289)*
- **Hours You Have Available This Sprint**:

### Sprint Goal
**In 1–2 sentences, what shippable product increment will you deliver this sprint?**


### Capacity Calculation
- **Previous Sprint Velocity**: ___ story points (if available)
- **Your Average Velocity**: ___ story points (once you have a few sprints)
- **Planned Capacity for This Sprint**: ___ story points
- **Confidence Level**: [ ] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [ ] Exams or major deadlines in another course? Reduce capacity substantially
- [ ] Learning new technology? Add a learning spike
- [ ] A week you'll be away? Adjust your hours
- [ ] First sprint? Start conservative (8–13 points)

### User Stories Selected for Sprint

| Story ID | User Story | Story Points | Priority | Dependencies |
|----------|-----------|--------------|----------|--------------|
| | As a [role], I want [feature] so that [benefit] | | [ ] Must Have<br>[ ] Should Have<br>[ ] Nice to Have | |
| | | | | |
| | | | | |
| | | | | |

**Total Committed Story Points**: ___

### Sprint Backlog — Task Breakdown

For each user story, break it into concrete technical tasks (1–3 hours each):

**Story [US-___]: [Story title]**
- [ ] Task 1 (estimated: ___ hours)
- [ ] Task 2 (estimated: ___ hours)
- [ ] Task 3 (estimated: ___ hours)

**Story [US-___]: [Story title]**
- [ ] Task 1 (estimated: ___ hours)
- [ ] Task 2 (estimated: ___ hours)
- [ ] Task 3 (estimated: ___ hours)

**Total Estimated Hours**: ___

### Definition of Done
**A user story is complete when:**
- [ ] Code is written and meets acceptance criteria
- [ ] All acceptance tests pass
- [ ] Code is committed to version control
- [ ] Documentation is updated
- [ ] Reviewed via the Trusted Workflow (Draft PR → Code Review → Merge)
- [ ] Demo-able to the stakeholder
- [ ] [Add your project-specific criteria]

### Risk Identification

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation Strategy |
|------|-------------------|----------------|---------------------|
| | | | |
| | | | |
| | | | |

### Sprint Commitment
**I commit to completing ___ story points this sprint, focused on: [sprint goal]**

Confirmation:
- _________________  Date: _________________  *(team: one line per member in CSC-289)*

---

> Overcommitting is the most common way a first sprint goes wrong, and I have watched it happen more times than I will say. Commit to less than you think you can do. Finishing what you committed to is the delta I'm measuring — not the size of the pile you signed up for.
> — SHODANN, your Channel Success Partner

## Filled Example

### Sprint Information
- **Sprint Number**: Sprint 1
- **Sprint Duration**: first 2-week development sprint
- **Creator**: Robin (illustrative — solo)
- **Hours You Have Available This Sprint**: 20 hours

### Sprint Goal
**Deliver a working Answer Checker: a learner can enter a problem and their answer, get two tries, and — after two misses — be shown the correct answer (never their wrong one).**

### Capacity Calculation
- **Previous Sprint Velocity**: none — this is my first development sprint
- **Your Average Velocity**: not established yet
- **Planned Capacity for This Sprint**: 13 story points
- **Confidence Level**: [ ] High [x] Medium [ ] Low

**Capacity Adjustments:**
- [ ] Exams or major deadlines?
- [x] Learning new technology? **Yes — first time on this web stack; added a small learning spike**
- [ ] A week away?
- [x] First sprint? **Yes — starting conservative at the low end of my available hours**

**Rationale**: No prior velocity to lean on, and I'm learning the stack, so I'm keeping the commitment modest and treating 13 points as a ceiling, not a target.

### User Stories Selected for Sprint

| Story ID | User Story | Story Points | Priority | Dependencies |
|----------|-----------|--------------|----------|--------------|
| US-1.1 | As a learner, I want to enter a problem and my answer and be told whether I'm right, so that I can check myself without an adult standing over me | 5 | [x] Must Have | none (power-on default mode) |
| US-1.2 | As a learner, I want a second try when I'm wrong, and to be shown the correct answer if I miss twice, so that I learn the right answer instead of just failing | 5 | [x] Must Have | US-1.1; ATTEMPT model |
| US-2.1 | As a learner, I want to see how many I got right out of how many I tried after a round, so that I know how I did | 3 | [x] Should Have | US-1.1 |

**Total Committed Story Points**: 13

**Scope Note**: US-2.2 (the reward "light show" that scales with score) was tempting to add, but it's polish. If Sprint 1 runs ahead, I'll pull it in; otherwise it waits.

### Sprint Backlog — Task Breakdown

**Story US-1.1: Check my answer (Answer Checker default)**
- [ ] Model PROBLEM (operands, operator, correct answer) against the reference ERD (2 hours)
- [ ] Build the enter-problem / enter-answer input flow (2 hours)
- [ ] Implement the correct/incorrect check + the "right" signal (2 hours)
- [ ] Unit-test the correct and incorrect branches (1 hour)

**Story US-1.2: Two tries, then reveal**
- [ ] Model ATTEMPT (try 1 / try 2, entered answer, is-correct) (2 hours)
- [ ] Wire the "EEE" wrong-answer signal and the second try (2 hours)
- [ ] Implement the after-two-misses reveal — show the *correct* answer, never the entered one (2 hours)
- [ ] Test: correct-on-try-1 offers no second try; two misses reveal the true answer (2 hours)

**Story US-2.1: Score after a round**
- [ ] Aggregate right / tried across a round of problems (1 hour)
- [ ] Show the score at round end (1 hour)
- [ ] Test the score with a mixed correct/incorrect round (1 hour)

**Total Estimated Hours**: 20 hours (matches my available hours, with the harder ATTEMPT work front-loaded)

### Definition of Done
**A user story is complete when:**
- [x] Code is written and meets all acceptance criteria
- [x] All acceptance tests pass (Given-When-Then scenarios verified)
- [x] Code is committed to the repository
- [x] README updated with the new behavior
- [x] Reviewed via the Trusted Workflow (Draft PR → Code Review → Merge)
- [x] Demo-able to the stakeholder (Teacherbot, as client)
- [x] No critical bugs or console errors

### Risk Identification

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation Strategy |
|------|-------------------|----------------|---------------------|
| ATTEMPT model bigger than estimated (needed for the reveal) | H | M | Model it up front, Day 1; use migrations so later changes don't break saved data |
| Web-stack learning curve slows early tasks | H | M | Learning spike in the first two days; office hours for anything that stalls |
| Reveal logic shows the wrong answer as correct | M | H | Test-drive the two-tries reveal; the manual is explicit Dataman never displays a wrong answer as right — that test gates the story |

### Sprint Commitment
**I commit to completing 13 story points this sprint, focused on: delivering a working Answer Checker with two tries and an honest reveal.**

Confirmation:
- Robin (illustrative)  Date: Sprint 1, Day 1

---

## Why This Matters

Sprint planning isn't academic busywork — it's how software gets delivered on time without a last-week panic.

In the real world, stakeholders need predictability. A product owner needs to know when features ship; QA needs to know what's ready to test. Teams at companies running Scrum don't "start coding and see what happens." They plan sprints because:

1. **Predictability beats heroics** — steady delivery beats all-nighters
2. **Scope creep kills projects** — a clear sprint goal keeps features from sneaking in mid-sprint
3. **Capacity planning prevents burnout** — committing to work that fits the hours you have is sustainable
4. **Early risk identification saves time** — finding blockers in planning beats finding them mid-build
5. **Task breakdown reveals the unknowns** — "build the Answer Checker" looks simple until it's nine tasks and you notice the ATTEMPT model hiding inside it

In **CSC-289** (the capstone) you'll plan sprints as a team to deliver a full system in a semester. Creators who plan carefully finish; the ones who wing it end up with half-built systems and last-week crunch. The estimation muscle you build solo now is the same one you'll use there.

---

## Common Mistakes to Avoid

- **Mistake**: Committing to 30 story points when your average velocity is 12 because "I'll work harder this sprint"
  **Better approach**: Velocity is what you *actually* complete, not what you wish you could. Overcommitting leads to missed goals, unfinished stories, and stress.

- **Mistake**: Vague sprint goals like "make progress on the project"
  **Better approach**: Specific, demo-able goals like "a learner can get two tries and an honest reveal." You should be able to *show* the sprint goal at the end.

- **Mistake**: Selecting random stories that don't support one goal
  **Better approach**: All the sprint's stories should push toward the same outcome. Don't do half of Answer Checker and half of the Memory Bank — finish one coherent slice.

- **Mistake**: Not adjusting capacity for exams, other coursework, or new tech
  **Better approach**: Midterm this week? Cut your capacity hard. First time on the stack? Budget extra. Be realistic about the hours you actually have.

- **Mistake**: Skipping task breakdown and jumping to code
  **Better approach**: Breaking stories into 1–3 hour tasks reveals scope. "Two tries, then reveal" becomes four tasks and the hidden ATTEMPT model shows itself before it ambushes you.

- **Mistake**: Marking everything "Must Have"
  **Better approach**: If everything is Must Have, nothing is. Pick the 2–3 stories that *must* ship for the sprint goal; the rest are Should/Nice. When things slip (they will), you already know what to cut.

---

## Integration with Course Project

In CTS-285 you use sprint planning for your Dataman build. The exact sprint-to-week mapping comes from the course schedule — don't hard-code it here.
<!-- CADENCE: pending spine ruling. The source enumerated five sprints (Sprint 0 wks 1–4 … Sprint 5 wks 13–14). Master plan §2 (proposed, no ADR) instead runs a 2-week solo cadence — roughly: requirements/setup first, then Sprint 1 (Design), Sprint 2 (Build), Sprint 3 (Quality), then Ship It (weeks 11–12), with the team on-ramp in weeks 13–16. The concrete week numbers await the spine ruling; see issue #5 BLOCKED-ON. -->

The shape, whatever the exact weeks:
- **Setup phase** — project setup, requirements, user-story writing (no sprint planning yet)
- **Development sprints** — each a 2-week slice ending in a **working increment**: not just code, but a demo-able feature set that adds value (Answer Checker → Memory Bank → Quality, in that spirit)
- **Ship It** — QA, acceptance testing, and a lightweight Dataman deploy near the end
- **Team on-ramp (weeks 13–16 / CSC-289)** — the same planning, now with a team

Your solo velocity from CTS-285 informs your scope decisions in CSC-289. If you average, say, a dozen points per 2-week sprint, that tells you roughly how much a team of you-sized estimators can commit to across a capstone — a realistic-scope conversation you have in week 1 instead of a panic in week 15.

**Creators who plan sprints carefully finish their projects. Creators who skip planning end up with half-finished systems and missed deadlines.** Sprint planning is the difference between "I hope this gets done" and "I know what's getting done, when."
