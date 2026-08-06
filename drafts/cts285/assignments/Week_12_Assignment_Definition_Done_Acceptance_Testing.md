<!--
  26FA CONTENT PASS — B-007 (task 1.6), 2026-08-06
  Expanded from a 120-line skeleton. Parts 3 and 4 were placeholder blocks reading "authored by
  task 1.6"; this is that task. B-007's acceptance criterion is that Week 12 has no stubs.
  Re-anchored to the Dataman 2.0 spine; the file had zero references.
  Deploy is scoped as INSTALLATION (preserves CLO4/CCL per master plan §2), verified by another
  Creator on a machine that is not the author's — reusing the Week 9 review pairing.
  Grouped presentation is comparative by design and seeds Week 13 team formation.
  Internals stay 15/15/10/10 per the canonical points table; header 50 unchanged.
  Andrew's Note carried over verbatim (non-negotiables #3, #5; L0 per ADR-011).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 12 Assignment: Definition of Done & Acceptance Testing

## CTS-285: Systems Analysis & Design

**Due**: End of Week 12 (Friday, 11:59 PM)
**Points**: 50 (6.7% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

This is the last week of the solo build. Four things have to happen, and they are the four things that separate a project from a product:

1. You write down what **done** means, before checking whether you are.
2. You test what you built against what you promised.
3. Someone else **installs and runs it** on a machine that is not yours.
4. You stand up and account for it in front of people who built the same thing.

That fourth one is not a formality. Next week you form teams for the Spring capstone, and the people watching your presentation are the people you will pick from — and who will pick you.

> Your Dataman and your neighbour's Dataman were built from the same manual and the same backlog, and they are not the same product. That is the most interesting fact available to you this week. Do not smooth it over in your presentation; it is the whole content.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Define** an enforceable Definition of Done and apply it honestly
2. **Verify** implemented stories against their own acceptance criteria
3. **Package** the system so another person can install and run it unaided
4. **Present** design decisions comparatively, using evidence you banked earlier

---

## Part 1: Definition of Done (15 points)

### Create `definition-of-done.md`

A DoD is only worth writing if it can fail. If every story you have already built passes it, you wrote a description rather than a standard.

**Your DoD must include**:

**Functionality**
- [ ] Behavior matches the manual where the manual specifies it — **with the page cited**
- [ ] Where the manual is silent, the choice is recorded in an ADR
- [ ] All Given/When/Then acceptance criteria pass
- [ ] No known defect in the answer-checking path

**Code Quality**
- [ ] Reviewed — by a peer in Week 9, or by you against the same checklist
- [ ] Consistent style; functions documented
- [ ] No behavior implemented in two places (the Week 6 lesson)

**Testing**
- [ ] Manual-cited tests pass
- [ ] Edge cases from Week 11's break-it pass exercised
- [ ] The prevention test from your incident log passes

**Documentation**
- [ ] README states how to install and run it, on a clean machine
- [ ] ADRs present for decisions the source document left open

**Deployment**
- [ ] Runs from a clean checkout with no hidden local state
- [ ] No hardcoded secrets or absolute paths from your machine

### Then apply it

Run your DoD against **every MVP story you claim is complete** and publish the result. Stories that fail are expected — a DoD nothing fails is a DoD that measures nothing.

For each failing story: what fails, and is it *fix now*, *accept and document*, or *out of scope for the semester*? All three are legitimate. Pretending it passed is not.

---

## Part 2: Acceptance Testing (15 points)

### Create `acceptance-test-results.md`

For each MVP story, test against the acceptance criteria **as written in the seeded backlog** — not against what you built. Where those two disagree, the disagreement is the finding.

**Format**:

```markdown
## Story 1.2 — Two tries, then show me the answer

### Acceptance Criterion 1
**Given** I have entered a problem and a wrong answer
**When** I enter a second wrong answer
**Then** the system shows the correct answer

**Test Result**: ✅ PASS
**Evidence**: `test_two_tries_then_reveal` passes; screenshot of the reveal state
**Source**: manual p.4

### Acceptance Criterion 2
**Given** the answer shown is the correct one
**When** I continue to the next problem
**Then** the attempt count resets

**Test Result**: ❌ FAIL
**Evidence**: attempt counter persists across problems; third problem reveals
after one miss
**Disposition**: Fix now — this breaks the teaching loop, not just a display

**Overall Story Status**: INCOMPLETE — criterion 2 fails, fix scheduled this week
```

**Screenshots are evidence, not decoration.** A PASS with no evidence is an assertion.

---

## Part 3: Lightweight Deploy (10 points)

**Deploy here means *installable*, not *hosted*.** You are not buying a domain or configuring a cloud provider. The competency is the one that has survived every era of this work: **can another person get your software running?**

### A. Package it

In your Channel's README, write the install path for someone starting from nothing:

- Prerequisites, with versions (`Python 3.8+`)
- Clone, and any environment setup
- Dependency install — `requirements.txt`, current and complete
- How to run it
- How to know it worked — what should appear on screen
- Sample data, if it needs any to be interesting

Assume the reader is competent and has never seen your project. No step is "obvious."

### B. Have someone else install it

**Pair with the Creator who reviewed your code in Week 9.** They already know the system; what they do not know is your machine, and that is the entire test.

They follow your README **exactly as written**, on their own machine, without asking you questions. You may not talk them through it. Watching someone fail to install your software in silence is the most useful ten minutes of the week.

Record it in `install-verification.md`:

- Who installed it, on what OS
- Every step where they stopped, guessed, or had to deviate
- What was missing from the README
- The README revision that fixed it
- Confirmation that a second run-through worked

**The findings are the deliverable.** An install that works first time is a fine outcome and a thin report; an install that failed three times and produced a README that now works is a better one. What is being graded is that the gap between "works on my machine" and "works" got measured.

### Why this counts as deployment

Every deployment is this problem wearing more infrastructure. Dependency versions, undeclared environment assumptions, absolute paths, state you forgot you had locally — those are what break real deploys, and they all show up here, without a cloud bill. If you take CSC-289 you will do the hosted version. This is the part that transfers.

---

## Part 4: Grouped Presentation (10 points)

**Format**: groups of 3–4, **8 minutes each** plus questions, in class.

Everyone in your group built Dataman 2.0 from the same manual and the same seeded backlog. Nobody needs the premise explained. **Skip it** — do not spend two of your eight minutes describing the product to people who built it.

### What to present

**1. One decision you made that your group did not** (3 min)

Pull it from your Week 9 ADRs. What did the manual leave open, what did you choose, and what did it cost you? This is the comparative core, and it is the reason the presentations are grouped: you will discover that four people reading the same 1977 document built four different products, and that all four can be defensible.

**2. One thing that broke** (2 min)

From your Week 11 incident log or your acceptance-test failures. What happened, how you found it, what you did. **Do not present a clean run.** Everyone's build broke; the ones claiming otherwise did not look.

**3. Where it stands against your DoD** (2 min)

Honest status. Which stories pass, which do not, what you would do with another two weeks.

**4. What you would want from a teammate** (1 min)

Not a pitch about yourself — a statement of what you would want covered by someone else, based on what this semester showed you about your own working style. This one is short and it is the one people will remember next week.

### Being an audience is graded too

For each presentation in your group, write one line in `presentation-notes.md`: **a decision they made that you did not, and whether you now think theirs was better.** Four lines total.

That is where the comparative value actually lands — the presenter learns less from presenting than the audience learns from watching three alternatives to their own choices.

### Why this is grouped and why now

Week 13 forms teams for the Spring capstone. This is the last structured look you get at how these people think before you choose. The comparison is not a competition — you are all shipping the same product and none of you is being ranked against the others. You are finding out who reasons in a way that complements yours.

---

## Deliverables Checklist

- [ ] `definition-of-done.md` — the DoD, and the result of applying it to every MVP story
- [ ] `acceptance-test-results.md` — every MVP story, with evidence and dispositions
- [ ] README with a complete install path
- [ ] `install-verification.md` — another Creator's unaided install, and what it found
- [ ] Presentation delivered (8 min, 4 sections)
- [ ] `presentation-notes.md` — one line per group member
- [ ] All committed and pushed; Channel link in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Definition of Done** | 15 | DoD is enforceable and something fails it; every MVP story has an honest verdict and a disposition |
| **Acceptance Testing** | 15 | Tested against the backlog's criteria rather than the implementation; evidence attached; failures reported with dispositions |
| **Lightweight Deploy** | 10 | README supports an unaided install; verification records where the installer stopped and what the README revision fixed |
| **Grouped Presentation** | 10 | Four sections covered; the decision is genuinely comparative and traced to an ADR; audience notes completed |
| **Total** | 50 | Header value is binding; component rows are descriptive (ADR-002) |

### Grading Notes

- **A DoD nothing fails scores poorly.** It means the standard was written to be passed.
- **A failed install that produced a fixed README is full marks.** That is the exercise working.
- **A presentation with no failure in it loses points.** Everyone's build broke.

---

## When You Get Stuck: What Week 12 Actually Feels Like

Four places Creators reliably struggle here. Being in one of them is on schedule.

### Struggle: "My DoD passes everything, so I guess I'm done"

- **Signs**: You wrote the DoD after the code, every story passes, and it took ten minutes.
- **Intervention**: You described your build instead of setting a standard. Add three criteria you know something fails — a manual page you never verified, an ADR you never wrote, a mode with no test. The point of a DoD is the gap it exposes between finished and *done*, and a standard calibrated to what you already did cannot expose anything.
- **Success indicator**: At least two stories fail your DoD, and each has a disposition.

### Struggle: "They couldn't install it and I don't understand why — it works fine for me"

- **Signs**: Your partner is three steps in, stuck on a dependency or a path, and your instinct is to reach over and fix it.
- **Intervention**: **Do not touch their keyboard.** This is the deliverable arriving, not the exercise failing. Every stumble is a line in your README that assumed something about your machine — a Python version, a virtualenv you forgot you activate automatically, a data file you created by hand in Week 5 and never committed. Write down where they stopped, fix the README, and have them start over.
- **Success indicator**: `install-verification.md` names at least one assumption you did not know you had.

### Struggle: "I have nothing interesting to present — I just built what the backlog said"

- **Signs**: Your eight minutes are shaping into a feature list. You suspect everyone else did something cleverer.
- **Intervention**: Open your Week 9 ADRs and pick any one, then ask a group member what *they* did about the same thing. You will almost certainly find you differ — on division with remainder, on the memory-bank ceiling, on what the timer does. You did not notice it was a decision because you made it and moved on. That is exactly what makes it worth three minutes, and the audience finds it more interesting than a feature list because they had to decide it too.
- **Success indicator**: You can name one choice you made that at least one group member made differently.

### Struggle: "Presenting what broke feels like admitting I failed"

- **Signs**: You are building the clean-run version. The incident from Week 11 is getting left out.
- **Intervention**: Consider what the clean-run version signals to a room of people who all know this build breaks: either you did not look, or you are hiding it. Neither is the impression you want going into team selection. A specific failure, found and handled, is the strongest evidence available that you can be trusted with a system — which is the actual thing your future teammates are evaluating.
- **Success indicator**: Your two failure minutes name a specific defect, how you found it, and what you did.

---

## Resources

- **Seeded backlog** (acceptance criteria live here): `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->
- **Your Week 9 ADRs** and **Week 11 incident log** — both are presentation material
- **Writing a README**: [Make a README](https://www.makeareadme.com/)
- **Definition of Done**: [Scrum.org — What is a Definition of Done?](https://www.scrum.org/resources/what-definition-done)

**Office hours**: listed in Canvas.

---

## Looking Ahead: Weeks 13–16

The solo build ends here. Weeks 13–16 form teams and produce the on-ramp to CSC-289: a team charter, a validated Spring backlog, wireframes with a design consult, and a capstone pitch.

You arrive at that with something you did not have in Week 1 — a finished system you can account for, decision by decision, and evidence that someone else could install it. That is the ORANGE exit, and it is what the Spring course expects you to walk in holding.

---

## Andrew's Note

"Done" is a loaded word. Is it done-done? Or "works on my machine" done?

DoD prevents misunderstandings. Everyone knows what complete means.

— Andrew
