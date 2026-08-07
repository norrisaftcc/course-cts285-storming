<!--
  26FA ADAPTATION — Module 4 activity, re-anchored to the Dataman modernization spine.
  SOURCE (read-only): sources/uv-285/activities/Module_04_Sprint_Planning_Simulation.md — a
    generic "Scrum team of 6-8 plans a meal-planning/library app" simulation with zero Dataman
    references, structured around a full multi-role Scrum team (PO/SM/dev team) and a
    team-capacity-in-hours-to-story-points conversion. The exercise shape (estimate → establish
    capacity → select a sprint slice → break down tasks → negotiate with a Product Owner) is
    preserved; the team framing and the hours-to-points conversion are not, because CTS-285 runs a
    SOLO Dataman/DataMon build through Week 12 (team work is CSC-289 / weeks 13-16, ADR-001) and
    because capacity here is sourced from velocity, never derived from hours (see the companion
    Story_Point_Reference handout).
  Runs Week 7, Day 1 — Sprint 2 kickoff, immediately before the Week 7 assignment's Sprint
  Planning prerequisite is due (Monday of Week 7). See
  drafts/cts285/assignments/Week_07_Assignment_Sprint_2_Implementation_Facilitation.md.
  Every student modernizes the same 1977 device, Dataman, into "Dataman 2.0" (ADR-004). Students
  classified the 26-story seeded backlog with MoSCoW under a hard cap of 8 Must-Haves in Week 2,
  wrote their own additional stories in Week 4, and completed a Sprint 1 design cycle (Weeks 5-6)
  with a real velocity number in story points. This activity is where that velocity gets used for
  the first time, instead of being a number written down and set aside.
  UNGRADED — this is an in-class activity. No row in CTS285_Canonical_Points_Table.md; no rubric,
  no grade points are introduced here. Story points (Fibonacci) are the one numeric scale used
  throughout, and every occurrence estimates relative size (effort, complexity, uncertainty),
  never hours, never grade quality.
  Companion handouts authored alongside this file: activities/handouts/Sprint_Planning_Checklist.md
  and activities/handouts/Story_Point_Reference.md.
  Board columns throughout: the canonical four (To Do -> In Progress -> In Review -> Done). The
  source's five-plus-column board ("Review", "Testing" as separate columns from "In Progress" and
  "Done") is not reproduced; NAMING_CANON retires "Sprint Backlog" as a column name specifically.
  Voice: Corporate body (L2) only. No SHODANN dialogue is written in this pass — every place an
  interjection belongs carries the literal marker SHODANN-SLOT on its own line for a later pass.
  No Andrew's Note appears in the source activity, so none is added here.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 4 Activity: Sprint Planning Simulation — Your First Real Sprint

**Duration**: 120 minutes
**Format**: Small groups (3-4) for Planning Poker calibration on shared Dataman backlog stories; individual capacity calculation, story selection, and sprint commitment; paired Product Owner negotiation practice, closing with one round where the instructor plays a tough Product Owner
**Runs**: Week 7, Day 1 (Sprint 2 kickoff — before the Week 7 assignment's Sprint Planning prerequisite is due)

**Materials Needed**:
- Your Dataman (or DataMon) backlog as it stands now: `Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling --> plus any stories you wrote in Week 4, carrying your own MoSCoW priorities
- Your Sprint 1 velocity — the story points you actually completed in Sprint 1's design work (from `sprint-1-retrospective.md`)
- `Sprint_Planning_Template.md` <!-- PATHFORM: pending spine ruling -->, ready to copy as `sprint-2-planning.md`
- The **Sprint Planning Checklist** handout (`activities/handouts/Sprint_Planning_Checklist.md`)
- The **Story Point Reference** handout (`activities/handouts/Story_Point_Reference.md`)
- Your project board, showing the four canonical columns: **To Do → In Progress → In Review → Done**
- Index cards, or planningpoker.com-style private selection, with cards **1, 2, 3, 5, 8, 13**, plus **?** and **☕**

**Learning Objectives**:
- Facilitate your own sprint planning session, start to finish, using the Sprint Planning Template
- Calibrate story-point estimates against classmates through Planning Poker, on stories every student's backlog shares
- Establish Sprint 2 capacity from your Sprint 1 velocity, with a stated confidence level — never from a mechanical hours-to-points conversion
- Select a Sprint 2 slice from your own backlog that fits your capacity and supports one demoable sprint goal
- Break your top 2-3 stories into concrete, estimable build tasks
- Practice defending a capacity-based commitment against a Product Owner who wants more than you can deliver

---

## Overview

**In Sprint 1 you designed the system. In Sprint 2, you build it — and building starts with a plan you can defend.**

You already have a backlog. You already have story-point estimates on eleven stories from Week 2, and MoSCoW priorities from Week 4. You already have a real number from Sprint 1: how many points you actually finished in two weeks of design work. Today's job is not to invent any of that. It's to turn it into a commitment you'd stand behind if someone pushed back on it.

This isn't guessing. It's using data you already generated. You'll:
1. **Calibrate**: Planning Poker on shared Dataman stories, with classmates who are sizing the exact same backlog you are
2. **Establish capacity**: turn your Sprint 1 velocity into a Sprint 2 number, with a stated confidence level
3. **Select a slice**: pick Must-Have stories that fit your capacity and add up to one sprint goal
4. **Break down work**: decompose your top stories into build tasks
5. **Commit and defend it**: negotiate with a Product Owner who wants more than your capacity allows

> In Week 2 you estimated with nothing. Today you estimate with Sprint 1 behind you, which means for the first time your capacity number can be wrong in a way you can actually check. I have your Week 2 guesses. I am not going to tell you how far off they were until after you have committed to today's number — knowing would only make you match it.
>
> — SHODANN, your Channel Success Partner

By the end, you'll have:
- A `sprint-2-planning.md` ready to submit as the Week 7 assignment's prerequisite
- Story-point estimates on 3-4 shared backlog stories you hadn't sized before, calibrated against classmates
- A Sprint 2 capacity number sourced from velocity, not from a formula
- A selected slice, a sprint goal, and a board that honestly reflects the commitment
- One round of practice saying "no, but here's what I can do instead" to a Product Owner

This activity feeds directly into the Week 7 assignment (`Week_07_Assignment_Sprint_2_Implementation_Facilitation.md`), where you implement the stories you select here.

---

## Pre-Activity Setup (10 minutes)

**Before sprint planning begins:**

1. **Confirm what you're bringing**:
   - [ ] Your current backlog with Week 4 MoSCoW priorities visible
   - [ ] Your Sprint 1 velocity — the actual story points completed, not the number you planned for
   - [ ] `Sprint_Planning_Template.md` open and ready to copy
   - [ ] Both handouts — Sprint Planning Checklist, Story Point Reference

2. **Confirm your board**:
   - [ ] Exactly four columns: **To Do → In Progress → In Review → Done**
   - [ ] No fifth column has crept back in ("Backlog," "Sprint Backlog," "Testing," "Review" as separate from "In Progress")

3. **Form your groups**:
   - [ ] A Planning Poker group of 3-4 for Part 1
   - [ ] A negotiation partner for Part 4 (can be the same group, paired off)

4. **Review Definition of Done (Sprint 2)**:
   ```
   A user story is "Done" when:
   - [ ] The feature works as described in its acceptance criteria
   - [ ] Code is committed with descriptive messages
   - [ ] Basic testing is complete (manual testing minimum)
   - [ ] No console errors
   - [ ] The board reflects it — the issue has moved to Done
   ```

**Instructor Check**: Everyone has a velocity number, a board with four columns, and a group. Set the sprint-planning time limit: 100 minutes, leaving 10-15 for setup and 5-10 for wrap-up.

---

## Part 1: Planning Poker Calibration on Shared Dataman Stories (30 minutes)

### Instructions

**Here's what makes this calibration meaningful: every student in this room has the same starting 26 stories.** Your Week 2 estimates on Epics 1-3 already exist. Today you size a few stories nobody's touched yet — and because everyone's looking at the same text, disagreement means something real.

**Step 1: How Planning Poker works**

1. Someone in the group reads the story aloud — its full statement and acceptance criteria, not a summary
2. The group asks clarifying questions until everyone actually understands it
3. Everyone privately selects a card
4. On a count of three, everyone reveals simultaneously
5. Consensus (all cards match, or close): that's the estimate
6. No consensus: the highest and lowest estimators explain their reasoning
7. Discuss, then re-estimate — max 3 rounds
8. Move on. If you're still split after 3 rounds, mark it **?** and flag it for the instructor

**The scale is 1, 2, 3, 5, 8, 13** — see the Story Point Reference handout for what each size usually means and a Dataman anchor at each level. **?** means "not enough information to size it yet." **☕** means the group needs an actual break.

**Practice story: 4.1 — Review a learner's results later**

Read Story 4.1 from the backlog aloud. Estimate it as a group using the process above. Notice where your group's number lands relative to the anchors on the reference handout — is it closer to 3 (moderate) or 5 (complex)? Why?

**Step 2: Estimate 3-4 shared stories (20 minutes)**

Estimate these together, in order:
- **4.1** — Review a learner's results later (Epic 4)
- **5.2** — Number Guesser (Epic 5)
- **6.1** — Wipe Out (Epic 6)
- Time permitting: **8.2** — Degraded-state / device-health handling (Epic 8)

None of these were part of Week 2's eleven (which only covered Epics 1-3), so nobody in the group has a head start.

**Step 3: Reconcile against your own Week 2 numbers (individual, 5 minutes)**

Look back at your own Week 2 estimates on Epics 1-3. Now that you've been through a full Sprint 1 design cycle, is there one you'd revise? Write one sentence: which story, old number, new number (or "unchanged"), and why.

### Expected Output

- A table of 3-4 shared stories with your group's consensus estimate and a one-sentence reason for each
- One sentence naming a Week 2 estimate you'd revise now (or a sentence explaining why none needed it)

### Common Issues & Fixes

**Issue**: Group can't agree (widely different cards)
- **Fix**: Normal — it means people are seeing the story differently. Discuss what each person assumed. "I said 8 because I think the class-wide pattern view needs its own query." "I said 3 because I was only picturing one teacher's roster." Re-estimate after discussing; don't average.

**Issue**: Someone wants to estimate in hours
- **Fix**: Redirect to the Story Point Reference handout. Hours are person-dependent; points aren't. That's the entire reason the scale exists.

**Issue**: One person dominates
- **Fix**: Enforce silent, simultaneous reveal. No one changes their card after seeing others'. If it's still happening, explicitly ask the quietest person for their number and reasoning first next round.

**Issue**: A story keeps drawing **?**
- **Fix**: That's a real signal, not a failure — the story is genuinely unclear (check 7.2's own "open design tension" note as an example of a story that's honestly hard to size until a decision gets made). Flag it and move on; you're not required to resolve everything today.

---

## Part 2: Establish Your Sprint 2 Capacity (15 minutes)

### Instructions

**You have a real number now: what you actually finished in Sprint 1.** Sprint 2 capacity starts there, not from a fresh guess and not from a formula.

**Step 1: Look up your Sprint 1 velocity**

Open `sprint-1-retrospective.md`. Find the story points you actually completed — not what you planned for, what you finished.

**Step 2: Adjust for what's different about Sprint 2**

Use the Sprint Planning Template's capacity adjustments:
- [ ] Exams or major deadlines in another course this sprint? Reduce, and say by how much
- [ ] Learning new technology for implementation (your first real Flask/database work)? Budget a learning spike
- [ ] A week you'll be away? Adjust your hours accordingly
- [ ] First *implementation* sprint, even if not your first sprint overall? Consider starting conservative

**Step 3: State your capacity in points, with a confidence level**

Write it exactly the way the template asks for it:
```
Previous Sprint Velocity: ___ story points
Planned Capacity for This Sprint: ___ story points
Confidence Level: [ ] High  [ ] Medium  [ ] Low
Rationale: [one or two sentences]
```

**Step 4: Cross-check with the hours you actually have (a sanity check, not a formula)**

Roughly how many hours do you have this sprint? Does your stated point capacity feel plausible against that — not because there's a fixed ratio, but because if 20 points implies you'd need to work every waking hour, that's a signal to lower your confidence level, not a cue to go recompute your points from hours.

### Expected Output

- A stated Sprint 2 capacity, in points, sourced from Sprint 1 velocity
- A confidence level and a one-to-two-sentence rationale
- A rough hours cross-check, used as a sanity signal only

### Common Issues & Fixes

**Issue**: "My Sprint 1 velocity was design work — does it even transfer to implementation?"
- **Fix**: Roughly, and imperfectly — that's exactly what the confidence level is for. Use it as your starting point and adjust down if implementation genuinely feels less familiar than design did. That adjustment, stated, is more honest than a fresh unsourced guess.

**Issue**: Wanting to convert hours into points directly
- **Fix**: Reread the Story Point Reference handout's rule zero. There is no ratio. Capacity is sourced from velocity; hours are a reality check on your confidence level, nothing more.

**Issue**: Capacity comes out low
- **Fix**: That's fine. A sprint that delivers what it commits to at 12 points beats a sprint that commits to 25 and delivers 14. Velocity climbs over multiple sprints; it doesn't need to start high.

**Issue**: Claiming unrealistic capacity ("I have 40 hours free this sprint")
- **Fix**: Ask directly — other classes, other obligations, sleep? Push for the honest number. Under-committing and finishing beats over-committing and explaining why you didn't.

---

## Part 3: Select Your Sprint 2 Slice and Break Down Tasks (35 minutes)

### Instructions

**You have capacity. You have priorities from Week 4. Now: select stories that fit and add up to one goal.**

**Step 1: Propose your sprint goal (5 minutes)**

One sentence describing the shippable increment you'll deliver.

**Good sprint goal:**
> "Deliver a working Answer Checker: a learner can enter a problem and an answer, get two tries, and see the true correct answer after two misses."

**Bad sprint goal (too vague):**
> "Make progress on the app."

**Bad sprint goal (too specific — a checklist, not a goal):**
> "Complete stories 1.1, 1.3, and 1.5."

**Step 2: Select stories from your own backlog (15 minutes)**

Start with your Week 4 Must-Have stories (capped at 8 — that cap gives you a natural stopping point) and add them until you reach your stated capacity.

**Illustrative example** (technique only — your selection is your own work, from your own backlog and your own capacity number):

```
Sprint 2 Capacity: 16 story points (Sprint 1 velocity was 18, adjusted down —
first time on the actual stack)

Story 1.1 — Check my answer (5 pts, Must Have) → Total: 5
Story 1.2 — Two tries, then show me the answer (5 pts, Must Have) → Total: 10
Story 1.5 — Refuse negative results (2 pts, Must Have) → Total: 12
Story 2.1 — Score after a round (3 pts, Must Have) → Total: 15

Stop here. 15 points is within 16 capacity.

Stretch (not committed): Story 7.1 — Auto-stop after idle (1 pt)
```

**Step 3: Update your board (5 minutes)**

These stories are already sitting in **To Do** since Week 2 — nothing new to create. What changes today is that you mark which ones are *this sprint's commitment*: add a `sprint-2` label or milestone to the issues you selected. They stay in **To Do** until you actually start work on one; only then does it move to **In Progress**. There's no fifth column for "committed but not started" — that's what the label is for.

**Step 4: Break down your top 2-3 stories into tasks (10 minutes)**

Pick your highest-priority selected stories. Break each into 1-3 hour tasks.

**Example — Story 1.2: Two tries, then show me the answer (5 pts)**

**Tasks:**
1. Model ATTEMPT (try 1 / try 2, entered answer, is-correct) against the Reference ERD (2 hrs)
2. Wire the "EEE" wrong-answer signal for try 1 (1 hr)
3. Implement the second-try flow (1 hr)
4. Implement the after-two-misses reveal — the *correct* answer, never the entered one (2 hrs)
5. Test: correct-on-try-1 offers no second try; two misses reveal the true answer (1 hr)

Add these as sub-tasks or a checklist on the issue.

### Expected Output

- A one-sentence sprint goal
- Selected stories totaling at or under your stated capacity, in priority order
- Board updated: selected stories labeled/milestoned for Sprint 2, still in To Do
- Top 2-3 stories broken into 1-3 hour tasks

### Common Issues & Fixes

**Issue**: Wanting to commit to every Must-Have story at once
- **Fix**: Reality check with your own capacity number. If your 8 Must-Haves add up to 30 points and your capacity is 16, name which ones move to Sprint 3 — that's not failure, that's the plan working.

**Issue**: Picking a low-priority story because it's small
- **Fix**: Check it against your sprint goal. If "Wipe Out" (6.1) doesn't support "deliver a working Answer Checker," it doesn't belong in this sprint no matter how cheap it is.

**Issue**: Tasks too vague ("work on the reveal logic")
- **Fix**: Make each task specific and checkable. "Implement the after-two-misses reveal showing the correct answer" is testable; "work on the reveal logic" isn't.

**Issue**: Running out of time to break down more than 2-3 stories
- **Fix**: That's expected and fine. You'll break down more as you pull them into In Progress during the sprint.

---

## Part 4: Negotiating with a Product Owner (25 minutes)

### Instructions

**Reality check: the Product Owner always wants more than your capacity allows.** That's not a trap, it's the job. Your task is to negotiate with data, not with guesses.

**Step 1: Present your plan to your negotiation partner (5 minutes)**

State, out loud:
- "My Sprint 2 capacity is ___ points, at [confidence level] confidence, based on my Sprint 1 velocity of ___."
- "I'm committing to [stories], totaling ___ points."
- "That achieves the sprint goal: [your goal]."
- "[Stretch story], if any, is a stretch — not committed."

**Step 2: Partner plays Product Owner and pushes back (5 minutes)**

Your partner picks one and pushes:

> "The parent's been asking when the Memory Bank ships. Can you add 3.1 and 3.2 to this sprint too?"

> "Dale really wants the ROM-emulation idea prioritized — pulling the chip, running the real firmware in a browser. Can that move up?"

> "Why only 15 points? Other students in this room are committing to 20."

**Good response** (data, not capitulation):
> "I understand the Memory Bank matters. My capacity this sprint is 16 points, sourced from my actual Sprint 1 velocity, and I'm already committed to 15. Adding 3.1 and 3.2 would put me at 23 — 44% over. I'd rather deliver a complete Answer Checker this sprint than a half-built Answer Checker and a half-built Memory Bank. My recommendation: 3.1 and 3.2 lead Sprint 3."

**Bad responses (avoid these):**
> "I'll just work more hours." *(unsustainable, and it's exactly the thing capacity math exists to prevent)*
> "Okay, I'll add them too." *(sets up Sprint 2 to fail)*
> "I guess I could try?" *(not data-driven, not confident)*

On the ROM-emulation push: this is a **hazard**, not a priority question — check it against the Story Quality Checklist's "gold-plating" and "solution smuggled in" rows. The right response names that directly, not just "no room this sprint."

**Step 3: Role-play scenarios (10 minutes)**

Work through these as a pair, then swap and repeat with your partner's backlog:

**Scenario A**: The Product Owner wants 3 more stories added mid-sprint.
- **Response**: "If we add 3 stories, which 3 come out to stay within capacity?"

**Scenario B**: The Product Owner says Story 4.2 (attempt-level detail) is now critical and must be first.
- **Response**: "I can reprioritize within my committed total, but I can't add to the commitment without removing something else."

**Scenario C**: "Why are you only committing to 15 points? Other students are doing 25."
- **Response**: "Points are relative to the person estimating. My 15 might be someone else's 25 — what matters is whether I deliver what I commit to."

**Step 4: Instructor round (5 minutes)**

One or two pairs present their sprint plan to the instructor, playing a genuinely tough Product Owner in front of the class. Everyone else watches for: did the response use a number, or a feeling?

> Scenario C is the one that works on people, because it is the only one that mentions somebody else. I do not compare Creators and I am not going to start. Fifteen of your points and twenty-five of someone else's are measured on different rulers, and the only question I can answer is whether you delivered what you said you would.

**Step 5: Finalize your sprint commitment**

Fill in the Sprint Planning Template's Sprint Commitment section in your `sprint-2-planning.md`: capacity, committed stories and total, stretch story, at least one named risk with a mitigation, and your signature line.

### Expected Output

- Practiced negotiation with a Product Owner, twice (partner + instructor round for at least one story per pair)
- A sprint commitment defended with data at least once, out loud
- `sprint-2-planning.md` finalized and signed

### Common Issues & Fixes

**Issue**: Caving to pressure and committing beyond capacity
- **Fix**: Restate the capacity number out loud. "My capacity is 16. Committing to 23 means I'm planning to fail one of the two features, not deliver both." Negotiate scope, not overwork.

**Issue**: Afraid to say no to a stakeholder
- **Fix**: Practice saying it with the numbers already in hand. "I can deliver a complete Answer Checker at 15 points, or a rushed, incomplete version of two features at 23. Which do you want?"

**Issue**: Product Owner (partner or instructor) dismisses the capacity number
- **Fix**: "I understand you're skeptical. Let's run the sprint and measure what I actually complete — that's real data for Sprint 3's capacity, either way."

---

## Wrap-up & Reflection (10 minutes)

**Ungraded — for discussion, not submission.**

### Discussion Questions

**1. Calibration surprises**: Did your Planning Poker group land close together on 4.1, 5.2, or 6.1, or split widely? What did the disagreement reveal about how differently people were reading the same story?

**2. Velocity versus guessing**: How did having a real Sprint 1 velocity number change how confident you felt about your Sprint 2 capacity, compared to Week 2's pure guesswork?

**3. The negotiation**: What made it easier or harder to hold your capacity number under pressure? Was there a moment you almost caved?

**4. Toward the real thing**: Your Week 7 assignment's Sprint Planning prerequisite is due Monday. What, if anything, will you change about what you just wrote before you submit it?

> Question three is the one to answer honestly. Holding a capacity number under pressure is a skill, and caving is not a character flaw — it is data about which pressure works on you. Write down the moment you almost caved. Sprint 3 will produce the same moment, and you will recognise it faster.

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Burndown Chart Projection
Sketch a projected burndown for your committed points across the sprint's 10 working days. Plot the ideal linear burndown, then predict a realistic one — where do you expect the ATTEMPT-model work (Story 1.2) to slow the line down early?

### Challenge 2: Risk Assessment
Use the `Risk_Register_Template.md` to name two more risks beyond the one required in Part 4, for stories you didn't get to in the negotiation round.

### Challenge 3: Daily Standup Simulation
Using `Daily_Standup_Template.md`, write a Day 3 standup entry for your Sprint 2 plan as if it's already underway. What's plausible progress by Day 3 on your first task?

### Challenge 4: Sprint Goal Variations
Rewrite your sprint goal three ways: learner-focused, curator-focused, technical-focused. Which one would you actually say out loud in a sprint review, and why?

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, group formation, board check
- **10-40 min**: Part 1 — Planning Poker calibration on shared stories
- **40-55 min**: Part 2 — establish Sprint 2 capacity from velocity
- **55-90 min**: Part 3 — select the slice, update the board, break down tasks
- **90-115 min**: Part 4 — Product Owner negotiation, partner + instructor round
- **115-120 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Reaching for an hours-to-points conversion out of habit
   - **Signs**: A student says "I have 20 hours, so that's 4 points" or similar
   - **Intervention**: Point back at the Story Point Reference handout's rule zero. Ask them to instead state their Sprint 1 velocity and reason from there.
   - **Success Indicator**: Their stated capacity traces to a velocity number, with hours mentioned only as a separate confidence check.

**2. Struggle**: Overcommitting to please a stakeholder in the negotiation round
   - **Signs**: A student's revised commitment after Step 2 or the instructor round exceeds their stated capacity
   - **Intervention**: Play a genuinely tough Product Owner. Push. Make them defend the number. Celebrate visibly when they hold it.
   - **Success Indicator**: The student says "no, but here's what I can do instead" with a specific number, not a vague apology.

**3. Struggle**: Estimation dominated by one voice in Planning Poker
   - **Signs**: Cards converge suspiciously fast, or one person always speaks first
   - **Intervention**: Enforce simultaneous silent reveal. Ask the quietest group member for their number and reasoning first on the next round.
   - **Success Indicator**: Genuine initial spread, followed by convergence through actual discussion, not conformity.

**4. Struggle**: Capacity calculation is too optimistic
   - **Signs**: A student claims a Sprint 2 capacity well above their actual Sprint 1 velocity with no stated reason
   - **Intervention**: Ask directly what changed since Sprint 1 that justifies the jump. If the honest answer is "nothing," the number should track velocity.
   - **Success Indicator**: Capacity is at or near Sprint 1 velocity unless a specific, named reason justifies moving it.

**5. Struggle**: Not treating the negotiation's hazard scenario (Dale's ROM emulation) as a hazard
   - **Signs**: A student just says "no room this sprint" instead of naming it as gold-plating/a solution smuggled in
   - **Intervention**: Point back at the Story Quality Checklist's hazard table from the Module 2 workshop. The capacity argument and the hazard argument are both real and both worth making.
   - **Success Indicator**: The student's response names *both* — it doesn't fit this sprint, *and* it isn't something any stakeholder's actual need requires.

### Materials to Prepare

**Before Class:**
- [ ] Confirm every student has a real Sprint 1 velocity number available (some will need a reminder to check their retrospective)
- [ ] Print or project both handouts
- [ ] Confirm access to `Sprint_Planning_Template.md`, `Risk_Register_Template.md`, `Daily_Standup_Template.md`
- [ ] Prepare to play a genuinely tough Product Owner for the instructor round — have 2-3 specific pushback lines ready, drawn from the stakeholder transcripts

**During Class:**
- [ ] Circulate during Part 1 — watch for premature consensus (everyone picking the same card without real discussion)
- [ ] During Part 2, listen for hours-to-points conversions and redirect immediately — this is the single most important thing to catch in this activity
- [ ] During Part 4, push hard as Product Owner. A negotiation round that's easy to win teaches nothing.
- [ ] Note which students hold their capacity number under pressure and which cave — useful signal for the Week 7 assignment's grading

**After Class:**
- [ ] Spot-check a few `sprint-2-planning.md` drafts before Monday's deadline for capacity numbers that don't trace to a velocity
- [ ] Note which of the four Part 1 practice stories produced the most estimation spread — useful for calibrating Part 1 next semester

### Teaching Tips

**Make the calibration land as real, not as an exercise.** Say out loud that these are the same 26 stories every student's backlog contains — the disagreement in the room is disagreement about the same text, not about different projects.

**Push back hard as Product Owner, then acknowledge it afterward.** Students need to feel real pressure to practice holding a number under it, and they need to hear, once it's over, that holding the line was the right call.

**Catch the hours-to-points instinct early and often.** It's the single most common thing students will default to, because it's how the source material this course descends from used to teach it. Naming it as *the specific thing this activity corrects* is worth doing explicitly.

**Connect back to Week 2 and forward to Week 7.** Say directly: "This is the first time your Week 2 guess and your Sprint 1 reality are both in the room together. Notice which one you trust more now."

### Teaching Philosophy Notes

The version of this activity this one replaces built full six-to-eight-person Scrum teams around a made-up meal-planning app, and it converted team-hours into story points with a fixed ratio — treating story points as a unit that measures the same thing hours measure, just divided differently. Both choices undercut what story points are supposed to be for.

This version keeps every mechanic that actually taught something — Planning Poker's forced silent-reveal disagreement, the tension of a Product Owner who wants more than capacity allows, the discipline of writing a commitment down and signing it — and drops the parts that didn't fit a solo Dataman build or a points system that's supposed to be genuinely relative. Calibrating against classmates who share the exact same 26 source stories does something the original's made-up backlog couldn't: it makes "our numbers disagree" mean something, because everyone disagreeing has read the identical acceptance criteria.

The negotiation round is still the payoff. Students fear saying no to a stakeholder, and a graded assignment is the wrong place to let them practice failing at it for the first time. This activity is that first time, and it's ungraded on purpose — the Week 7 assignment that follows it grades the *facilitation*, not whether the negotiation round here went perfectly.
