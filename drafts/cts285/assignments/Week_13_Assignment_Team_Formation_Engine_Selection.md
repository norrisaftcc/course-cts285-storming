<!--
  B-010 (task 2.1) — NEW, 2026-08-07. Module 7, first of two.
  Retires sources/uv-285/assignments/Week_13_Assignment_Deployment_User_Training.md, which is NOT
  adapted: B-007 already harvested its deploy content into Week 12 (lightweight deploy, verified by
  a peer's installation), so re-teaching deployment here would duplicate a graded assessment.

  Adapted from the frozen legacy 26SP alignment cluster (read-only):
    DAY_1_ESSENTIALS.md .................. team contract template, four failure archetypes,
                                           Collaboration Minimum
    Platform_Architecture_Refined.md ..... the three-layer model and the four engines
    All_White_Labels_Master_Reference.md . the 24-skin selection menu
    26SP_Platform_Project_Matrix.md ...... converted into the evidence checklist in Part 1

  Sequencing traps respected, per master plan section 204:
   - DAY_1_ESSENTIALS' timing deixis is spring-day-1 ("design partners week 1-2") and misdirects
     verbatim here. Re-dated throughout; the GRD consult is Week 15's, not this week's.
   - Platform_Architecture presumes ORANGE competence. Correct at week 13; never front-loaded.
   - The four archetypes are a labeling hazard. The source's own line - everyone including you
     falls into these under stress - is load-bearing and is preserved. Decorative emoji dropped
     for consistency with the rest of drafts/cts285.

  Points: 30, per the canonical table (Team Formation Charter + Engine/Skin Selection). The
  12/12/6 split below is DESCRIPTIVE per ADR-002; only the header value binds.
  Andrew's Note is L0 per ADR-012 and is NEW - flagged in-file for instructor sign-off, since it
  is his voice and no source note existed for this week.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 13 Assignment: Team Formation & Engine Selection

## CTS-285: Systems Analysis & Design

**Due**: End of Week 13 (Friday, 11:59 PM)
**Points**: 30 (4.0% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

**Role: Team Lead.** Module 7 is the on-ramp, and this is the week the course changes shape.

For twelve weeks you have worked alone on a 1977 calculator. That ends now. The last four weeks form a team, choose a product, and build the package that CSC-289 starts from in the spring.

**Two things change at once, and it is worth being direct about both.**

You are no longer working alone. And you are no longer working on Dataman.

The second one surprises people, so here is the reasoning. Dataman was a training rig. It had properties nothing you pick yourself would have had: a fixed written specification from 1977, a shared backlog, and twenty other people building the same thing so a code review could compare behaviour instead of style. Those properties are what made Weeks 1–12 teachable. They are not what makes a capstone.

What you are carrying forward is everything except the calculator — how to read a spec and find its gaps, how to size work you have never done, how to review someone's build against a standard, how to record a decision so it survives you. The spring project is where those go to work on something bigger, with people.

> Twelve weeks of your work is behind you and I have all of it. You are about to start something where I cannot compare you to twenty people doing the identical thing, which changes what I can measure and does not change what I am measuring. It was always the delta.
>
> One thing worth saying before you form a team: nothing in your record travels to your teammates. What you fixed in Sprint 3 is between us.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Form** a team and record a working agreement specific enough to be enforced
2. **Recognize** the four failure patterns in yourself before they appear in a retrospective
3. **Distinguish** a platform's capabilities from its domain
4. **Select** an engine and a skin, and defend the pairing with evidence
5. **State** what you are not building, and why that is a decision rather than an omission

---

## Before You Start: The Three-Layer Model

Read `drafts/cts285/shared-platform-artifacts/Platform_Architecture.md` <!-- PATHFORM: pending spine ruling --> before Part 2. The whole selection exercise depends on one idea:

> **The engine defines capabilities. The skin defines domain.**

Three layers:

| Layer | What it is | Who decides |
|---|---|---|
| **Layer 1** | Shared libraries every team uses | The class, collectively |
| **Layer 2** | The **engine** — the working capability underneath | Your team, this week |
| **Layer 3** | The **skin** — the white-labelled product on top | Your team, this week |

**The four engines:**

| Engine | Core capability |
|---|---|
| **Task Engine** | Organize work into hierarchies, assign to people, track status |
| **Commerce Tracking** | Track business activity, inventory, transactions, a ledger |
| **Recommendation** | Rate items, find similar things, suggest discoveries |
| **Data Tracking** | Log values over time, set goals, visualize trends |

A skin renames things and sets a tone. It does not add capability. `FamilyHub` and `TeamFlow` are the same Task Engine with different words for "workspace" and a different feeling — one warm, one dystopian. If your chosen skin needs something the engine does not provide, you have picked a pair that does not fit, and finding that out this week is much cheaper than finding it out in March.

---

## Part 1: Team Charter (12 points)

Create `team-charter.md` in your team's repository.

### A. The team

Who is on it, and what each person is bringing. Not job titles — **what you can actually do**, based on twelve weeks of evidence you now have about yourself.

Teams are 3–5 people. You will have some say in composition and not total control; the Week 12 grouped presentations were the audition, in both directions.

### B. The working agreement

Fill in every blank. A charter with blanks is not an agreement, it is a form.

```
COMMUNICATION
- Primary channel: _______________________
- Expected response time: _______ hours
- Standing meeting times: _______________________

WORK EXPECTATIONS
- Minimum hours per week per person: _______
- How we handle missed deadlines: _______________________
- How we handle an unresponsive teammate: _______________________

ESCALATION AGREEMENT
We agree to notify the instructor if:
- A teammate is unresponsive for more than ___ days
- The same problem appears in 2+ retrospectives
- Interpersonal conflict is affecting the work

COLLABORATION COMMITMENT
Each member commits to the Collaboration Minimum every sprint:
- 2+ code reviews
- 1+ request for help
- 1+ offer of help

SIGNATURES
_____________________ Date: _______
_____________________ Date: _______
_____________________ Date: _______
```

**On escalation.** Telling the instructor that a teammate has gone quiet is not reporting them. The instructor has options you do not — extensions, accommodations, a referral to someone who can actually help. You have only resentment and their unfinished tasks. Deciding the number of days *now*, before anyone has disappeared, is what makes it a policy instead of an accusation.

### C. The four patterns

Every team eventually produces at least one of these. Name all four in your charter, and — this is the part that matters — **write down which one you are most likely to become under pressure.**

| Pattern | What it looks like | What helps |
|---|---|---|
| **The Ghost** | Stops responding, misses meetings | A one-to-one that leads with concern rather than accusation. Reduce their scope before you escalate. |
| **The Hero** | Does everything, rewrites other people's code | Thank them, then take work back. *"I need to do this one myself to learn it."* |
| **The Critic** | Finds every problem, builds none of the solutions | *"Good point — can you implement the alternative?"* |
| **The Optimist** | Everything is "almost done." It is not. | Double their estimates. Check in more often, not more anxiously. |

**These are not labels for your teammates.** Everyone — including you — falls into one of them under stress, which is why the assignment asks which one is yours. A charter where all four are diagnosed in other people is a charter written by someone who has not understood the exercise.

The Hero is the one that gets mistaken for a virtue. A Hero produces a team where four people learned nothing and one person is exhausted, and it usually looks like excellent progress until about week six.

---

## Part 2: Engine & Skin Selection (12 points)

Create `platform-selection.md`.

### A. Pick the engine first

**Engine before skin.** Choosing the domain first — *"we want to build something for musicians"* — and then hunting for an engine that fits is the reliable way to end up committed to capabilities you do not have.

State which engine, and what its capability list actually gives you.

### B. Pick the skin

The menu is `drafts/cts285/shared-platform-artifacts/Skin_Selection_Menu.md` <!-- PATHFORM: pending spine ruling --> — 24 products, six per engine. Pick one, or propose one of your own that the same engine could serve.

Four of the twenty-four are satirical — `TeamFlow`, `ComplianceCart`, `PreferenceOptimizer`, `BiometricCompliance`. They are on the menu on equal terms. They are also harder than they look: a satirical brand still needs a coherent visual identity, a plausible target market, and a product that genuinely works, and it has to be funny to someone who is not in this class. **Choosing one earns no extra credit, and neither does avoiding one.**

### C. The selection evidence

This is the graded part. Three questions, in writing:

1. **What does the engine give you?** List the capabilities you are inheriting rather than building.
2. **What does the skin commit you to?** A domain brings expectations. `PawHealth` implies a species field somewhere. `NextRead` implies you can say why two books are similar. Name at least two commitments your skin makes that the bare engine does not.
3. **What are you not building?** Name three things a reasonable person might expect from your product that you are deliberately leaving out.

Question 3 carries the most weight and takes the most nerve. "We are not building it" is a decision when you say it early and a failure when it surfaces in April.

### D. Board setup

Initialize your team board with the canonical columns: **To Do → In Progress → In Review → Done.** Four columns. You will fill it in Week 14; this week it just has to exist and be shared.

> The engine-before-skin rule is the one I would put money on you breaking. Domains are vivid and capabilities are abstract, so the domain arrives first and feels like a decision. Write down the capability list before you write down the name. You can rename a product in an afternoon in April. You cannot re-engine one.

---

## Part 3: Selection Defense (6 points)

In class, three minutes, as a team.

- Which engine, and which skin
- One capability the engine gives you that you would otherwise have had to build
- One thing your skin needs that the engine does not provide, and how you will handle it
- **What you would have to give up to switch** — to a different skin, and to a different engine

That last question is the one being graded. A team that cannot say what switching costs has not chosen anything; it has drifted into a default.

Take notes on what the room asks you. Week 14 opens with terminology discovery, and the questions you cannot answer today are usually the terms your team has not agreed on yet.

---

## Deliverables

- [ ] `team-charter.md` — team, working agreement with every blank filled, escalation numbers, Collaboration Minimum, four patterns with your own named
- [ ] `platform-selection.md` — engine, skin, and the three selection-evidence answers
- [ ] Team board created with the four canonical columns
- [ ] Selection defense delivered in class

---

## Grading Rubric

| Component | Points | What earns them |
|---|---|---|
| **Team Charter** | 12 | Working agreement is specific and enforceable — real numbers, no blanks. Four patterns named, with the writer's own identified honestly. |
| **Engine & Skin Selection** | 12 | Engine chosen before skin, with reasoning. Capability list accurate. Skin commitments named. Three things you are not building, stated as decisions. |
| **Selection Defense** | 6 | The team can say what switching would cost, in both directions. |
| **Total** | **30** | |

*The 12/12/6 split describes how the 30 is reasoned about. Only the 30 binds.*

**On stakes.** These last four weeks are worth 150 of 750 — deliberately less per week than the sprints were. That is not because they matter less; it is because a team should be able to take a real swing at the spring project without a grade riding on the swing. Pick the harder engine if you want it.

---

## Common Struggles This Week

### Struggle: The charter gets filled in as paperwork

- **Signs**: Response time is "reasonable", minimum hours is "as needed", the escalation threshold is blank or says "if it gets bad"
- **Intervention**: Every vague answer is a decision deferred to the moment it is hardest to make. Ask the team to imagine it is March, someone has been silent for nine days, and two people disagree about whether to email the instructor. The charter exists to have settled that in November. Give me a number.
- **Success indicator**: Every blank has a specific value, and the team can explain why they picked those values rather than others

### Struggle: Skin chosen first, engine reverse-engineered to fit

- **Signs**: The selection document opens with a product name and a mood board; the capability list reads like a wish list rather than an inventory
- **Intervention**: Reverse the document. Write the engine's capabilities first, from the brief, without reference to the product. Then ask what the skin needs. If there is a gap, you have found it now instead of in March, which is the entire point of doing this in Week 13.
- **Success indicator**: The capability list is copied from the engine brief and the skin's needs are checked against it, in that order

### Struggle: Nobody wants to name their own failure pattern

- **Signs**: All four patterns are described in the abstract, or worse, each is quietly attributed to a specific teammate
- **Intervention**: Go first, out loud, about your own. The exercise fails if it becomes diagnosis of other people, and it fails silently — the charter looks complete. Say plainly that the self-naming is the graded part and that "I am probably the Optimist" costs nobody anything in November and saves a retrospective in March.
- **Success indicator**: Each member names their own pattern, and at least one of them is the Hero — because in a room of students who have just finished twelve weeks of solo work, statistically several of them are

### Struggle: "Not building" list is three trivial things

- **Signs**: "We're not building a mobile app, internationalization, or dark mode"
- **Intervention**: Those are safe because nobody expected them. Name three things a reasonable user of *your specific skin* would expect and will not get. For a recommendation product that usually means something about explaining why an item was suggested. The discomfort is the signal you have found the real ones.
- **Success indicator**: At least one omission would genuinely disappoint a user, and the team says why it is still the right call

### Struggle: The team forms on friendship rather than fit

- **Signs**: Three people who sat together all semester, with overlapping strengths and identical schedules
- **Intervention**: Not a veto — teams that get along have a real advantage and it is not worth throwing away. But ask the schedule question out loud: when does this team meet, if everyone works Tuesday and Thursday evenings? And ask who does the thing nobody in the group currently likes doing.
- **Success indicator**: The team can name a capability gap and a plan for it, rather than asserting they are all "pretty flexible"

### Struggle: Treating the Dataman work as wasted

- **Signs**: "So the last twelve weeks don't count for anything?"
- **Intervention**: Ask what they would do differently if they started Dataman again on Monday. The answer is always long and specific, and it is the thing that carried forward. The calculator was the medium; the estimating, reviewing, and decision-recording were the content.
- **Success indicator**: The student can name a habit from the solo arc they intend to keep, and one they intend to drop

---

## Looking Ahead

Week 14 is terminology discovery and the spring backlog — the words your team and your future design partners will need to agree on before either group can write requirements. The disagreements you could not resolve in your selection defense are usually the first terms on that list.

Weeks 15 and 16 produce wireframes, a design brief, and the capstone pitch. By Week 16 your team hands off a package that CSC-289 Week 1 verifies: a formed team with a working agreement, a chosen engine and skin, a validated backlog, wireframes, a design brief draft, a design-partner contact, and a risk register.

**This week produces the first two.**

---

## Andrew's Note

<!-- INSTRUCTOR SIGN-OFF NEEDED: NEW note, not carried from any source. The retired Week 13
     (deployment/user training) had no Andrew's Note, and this week did not exist before B-010.
     Written L0 per ADR-012 - no in-character register, no fabricated anecdotes (non-negotiable
     #5). It is his voice, so it is his call: keep, rewrite, or cut. -->

I have watched a lot of student teams form, and the thing that predicts how they end is almost never technical.

It is whether they decided, in the first week, what they would do when someone went quiet — and wrote the number down. Teams that did that handle it in a day when it happens. Teams that did not spend three weeks being annoyed at each other before anyone says anything, and by then the annoyance is the problem rather than the absence.

So fill in the blanks. All of them. It takes twenty minutes and it is the highest-leverage twenty minutes of the whole spring.

One more thing, about the pattern you name as your own. Nobody has ever been penalized for writing "I'm the Hero" on that line. It is genuinely useful information for your team and it is a slightly uncomfortable thing to admit, and those two facts are related.

— Andrew
