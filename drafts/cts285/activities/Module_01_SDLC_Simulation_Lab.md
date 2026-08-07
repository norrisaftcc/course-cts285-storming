<!--
  PROVENANCE — re-anchored to the Dataman 2.0 spine, 2026-08-07.
  Source: sources/uv-285/activities/Module_01_SDLC_Simulation_Lab.md (READ-ONLY; frozen mirror, untouched).
  That source builds a generic community-library checkout system with zero Dataman references —
  its own provenance comment flags this as intentional evidence, not a defect to silently fix.
  CHANGED HERE: the built system is now one feature of Dataman 2.0, chosen by each pair from their
  assigned Dataman stakeholder transcript (Parent / Teacher / Retro Collector — the same three used
  by Weeks 3-4, drafts/cts285/shared-dataman-artifacts/); role-rotation labels changed from the
  source's SDLC-phase names (Systems Analyst / System Designer / Developer / Tester) to Scrum roles
  (Product Owner / Scrum Master / Developer / Tester) to match this lab's "mini-sprints" framing and
  the companion Role_Cards_SDLC.md handout; the instructor-prep line that said "print library
  stakeholder interview transcripts" now points at the existing shared transcripts (no new transcript
  authored here); Common Student Struggles expanded to the four-part struggle-pattern template
  (Struggle / Signs / Intervention / Success Indicator) with Dataman-specific struggles; a new
  SDLC_Phase_Checklist.md handout is authored and referenced.
  UNGRADED — this activity has no row in phase0/CTS285_Canonical_Points_Table.md. No rubric or grade
  points are introduced anywhere below; story points (Fibonacci-style estimation) are the one
  numeric scale here, and they are an estimate, not a score.
  Voice: Corporate/instructional body only (L2). No SHODANN dialogue written — see the SHODANN-SLOT
  markers for where a later voice pass adds an interjection. No "Andrew's Note" existed in the
  source file, so none is carried here.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 1 Activity: SDLC Simulation Lab — Building One Piece of Dataman 2.0

**Duration**: 120 minutes
**Format**: Pairs (rotating roles)
**Materials Needed**:
- Large poster paper or whiteboard per pair
- Sticky notes (3 different colors)
- Markers
- SDLC Phase Checklist (`drafts/cts285/activities/handouts/SDLC_Phase_Checklist.md` <!-- PATHFORM: pending spine ruling -->, provided by instructor)
- One Dataman stakeholder transcript per pair — Parent, Teacher, or Retro Collector, assigned/rotated by the instructor (`drafts/cts285/shared-dataman-artifacts/` <!-- PATHFORM: pending spine ruling -->)
- Role cards for rotation (`drafts/cts285/activities/handouts/Role_Cards_SDLC.md` <!-- PATHFORM: pending spine ruling -->)

**Learning Objectives**:
- Experience all phases of SDLC in compressed time, framed as Scrum mini-sprints
- Understand dependencies between SDLC phases
- Practice role transitions (Product Owner → Scrum Master → Developer → Tester)
- Recognize how decisions in early phases impact later phases
- Build empathy for different roles in systems development
- Create tangible SDLC artifacts you can reference all semester

---

## Overview

**Welcome to systems analysis and design!** Today, you're going to build a working piece of a real system from scratch. Not with code — with paper, markers, and thinking.

Why paper? Because the hardest part of systems development isn't writing code. It's figuring out what to build, why to build it, and how it should work. Those decisions happen way before anyone touches a keyboard.

Here's the project, and it's not a surprise: every analyst in this class is modernizing the same 1977 device — **Dataman**, Texas Instruments' handheld answer-checking calculator, into **Dataman 2.0**. That's the spine of the whole semester. Today is a two-hour miniature of the *entire* process, compressed into one sitting, before the real thing gets underway. This lab is not your Week 2 backlog assignment and doesn't replace it — it's a dress rehearsal for the muscle memory the real backlog work will need.

You'll work in pairs and rotate through four roles, framed as a compressed sequence of Scrum ceremonies ("mini-sprints"):
1. **Product Owner**: Read a stakeholder transcript, gather and prioritize requirements
2. **Scrum Master**: Facilitate Sprint Planning — turn requirements into diagrams and a build plan
3. **Developer**: Build the system (paper prototype)
4. **Tester**: Verify it meets requirements, find gaps

By the end of this lab, you'll have:
- A complete set of SDLC artifacts for a working piece of Dataman 2.0
- Experience in all four roles
- Understanding of how phases connect
- Appreciation for why we don't skip requirements gathering

**The system you'll build**: one Dataman 2.0 feature — the **Answer Checker**, the **Memory Bank**, or one named **Practice Game** (Electro Flash, Number Guesser, Wipe Out, Force Out, or the Missing-Number Box). You don't pick this out of thin air — your assigned stakeholder transcript tells you what they care about most, and that's your pair's target for the rest of the lab. Simple enough to complete in 2 hours, complex enough to teach you the process.

This is the foundation. Every system you analyze this semester — including your own solo Dataman 2.0 spine work — follows this same pattern.

> This is your first pass through all four roles, so there is nothing yet to compare it against. That is what a baseline is, and it is the reason today cannot go badly. I will be reading what you write in each round. What I am watching for is how many of your Round 1 requirements are still recognisable by Round 4 — not whether they survived, only whether you can say why they didn't.
>
> — SHODANN, your Channel Success Partner

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Form pairs**: Find a partner. You'll work together but rotate roles.

2. **Gather materials**:
   - [ ] Large paper/whiteboard space
   - [ ] Sticky notes (3 colors: one for requirements, one for tasks, one for test cases)
   - [ ] Markers
   - [ ] SDLC Phase Checklist from instructor

3. **Receive your transcript** (instructor will distribute):
   - One Dataman stakeholder transcript — Parent, Teacher, or Retro Collector
   - The instructor rotates transcripts across the room, so different pairs analyze different stakeholders. That's intentional — compare notes at the end and you'll find the three stakeholders don't all want the same thing.

4. **Understand role rotation**:
   - You'll switch roles every 25-30 minutes
   - Both partners share each named role together for that round, then move to the next
   - Artifacts from each round feed into the next

**Instructor Check**: Make sure every pair has a transcript, materials, and understands they'll rotate roles together as a pair.

---

## Part 1: Product Owner — Backlog Refinement (30 minutes)

### Instructions

**Current Role**: Product Owner

Your job: understand what your assigned stakeholder needs, gather requirements, and decide which one Dataman 2.0 feature your pair will build for the rest of the lab.

**Step 1: Read your stakeholder transcript (5 minutes)**

Every pair gets one full Dataman stakeholder transcript. Three examples of the kind of thing you'll find, one per persona (your pair only has one of these three):

> **Renee (parent):** "It's like four or five problems that trip him every time... I want to be able to punch in the five or six facts he's struggling with this week, hand him the thing, and know he's practicing those."
>
> **Ms. Alvarez (teacher):** "No. Absolutely not. I will not put a ranking board up in my room. ... Measure each kid against where they were last week. Never against each other."
>
> **Dale (retro collector):** "You enter the problem and your answer, and it tells you if you're right. ... After the second miss it shows you the real answer. That honesty is a design principle, not an accident."

**Step 2: Choose your feature and identify functional requirements (10 minutes)**

Based on what your assigned stakeholder emphasized, choose ONE:
- **Answer Checker** — the core check-my-answer-and-give-two-tries loop
- **Memory Bank** — a curator (parent/teacher) loading a targeted set of problems for a learner
- **One named Practice Game** — pick one by name (Electro Flash, Number Guesser, Wipe Out, Force Out, or the Missing-Number Box)

Functional requirements = what the system must DO. Use one color of sticky notes. Write each requirement separately. Examples (adapt to your chosen feature):
- "System must let a learner enter an answer to a problem and be told right or wrong"
- "System must give the learner a second try before revealing the correct answer"
- "System must never display a wrong answer as if it were correct"
- "System must let a curator load a set of problems for one learner"
- "System must run a light-show reward that scales with the score"

**Aim for 8-12 functional requirements.** Be specific. Avoid "the system should be easy to use" (that's non-functional).

**Step 3: Identify non-functional requirements (5 minutes)**

Non-functional requirements = how the system should behave. Examples:
- "Feedback on an entered answer must feel immediate — no noticeable lag"
- "A session must stop itself if the learner walks away for a few minutes"
- "The system must be usable by a learner without an adult standing over them"
- "A curator's saved set of problems must still be there the next time they log in"

**Aim for 4-6 non-functional requirements.**

**Step 4: Prioritize requirements (10 minutes)**

Mark each requirement:
- **Must Have**: Core functionality, can't demo without it
- **Should Have**: Important but not critical for the 2-hour build
- **Nice to Have**: Would be cool, but can wait

Group your sticky notes by priority on your workspace.

### Expected Output

- One chosen Dataman 2.0 feature (Answer Checker, Memory Bank, or a named Practice Game), traceable to your stakeholder
- 8-12 functional requirements on sticky notes
- 4-6 non-functional requirements
- All requirements prioritized (Must/Should/Nice)

### Common Issues & Fixes

**Issue**: "We're writing solutions, not requirements"
- **Bad**: "The system needs a leaderboard"
- **Good**: "The system must help the learner stay motivated"
- **Fix**: Describe WHAT the system needs to do, not HOW it will do it. A leaderboard is one possible answer — and this class's own stakeholders disagree about whether it's the right one. That comes in design, not requirements.

**Issue**: "Our requirements are too vague"
- **Bad**: "The system should be fast"
- **Good**: "Feedback on an entered answer must appear with no noticeable lag"
- **Fix**: Add measurable criteria. How fast? How many tries? How many problems?

**Issue**: "We have 40 requirements"
- **Fix**: You're getting too detailed. Combine related requirements. "Show right count" and "show tried count" can be "Show a score summary."

---

## Part 2: Scrum Master — Sprint Planning (30 minutes)

### Instructions

**Current Role**: Scrum Master

Your job: facilitate turning your Must/Should-Have requirements into a shared technical picture — diagrams and screens the pair agrees on before anyone builds anything. Keep the round on time; this is a planning meeting, not a free-draw session.

**Step 1: Create a use case diagram (10 minutes)**

Who will use this feature? What will they do?

Draw:
- **Stick figure actors**: Learner, and the appropriate curator (Parent or Teacher, matching your transcript) if your feature involves one
- **Ovals for use cases**: Each major action for your chosen feature (e.g., for Answer Checker: Enter Answer, Retry Wrong Answer, See Score; for Memory Bank: Load Problem Set, Practice Assigned Set; for a Practice Game: Play a Round)
- **Lines connecting actors to use cases**: Who can do what?

Keep it simple. This isn't a work of art. It's a communication tool.

**Step 2: Sketch a data model (10 minutes)**

What information does your feature need to remember? Don't reach for a "correct" answer here — invent your own names and see what you land on. Ask yourselves:
- What do we need to remember about each math problem?
- What do we need to remember about who's using it?
- What do we need to remember about one sitting of practice?
- What do we need to remember about each individual try at a problem?
- (Memory Bank pairs only) What do we need to remember about who assigned a set, and to whom?

Draw boxes for the things you land on, list 4-6 key attributes in each, connect with labeled lines. Aim for 3-5 boxes.

**Step 3: Create wireframe sketches (10 minutes)**

Sketch 2-3 screens for your chosen feature. For example, if you chose **Answer Checker**:

1. **Practice Screen**: problem displayed, answer entry box, feedback area (correct / try again), current problem count
2. **Round Summary Screen**: right-count / tried-count, a note for the reward ("light show" — sketch how you'd represent it on paper), any missed problems listed

If you chose **Memory Bank**: a Curator Load Screen (pick problems, assign to a learner) and a Learner Practice Screen (working through the assigned set). If you chose a **Practice Game**: one Game Screen showing your chosen game's specific mechanic (e.g., Electro Flash's flash-card table picker, or Number Guesser's between-X-and-Y hint display).

Draw boxes and labels. Use actual text where you can. This should look like a blueprint.

### Expected Output

- One use case diagram showing actors and major actions
- One data-sketch showing 3-5 entities of your own naming, with relationships
- 2-3 wireframe sketches of key screens
- Design artifacts that clearly implement your requirements from Part 1

### Common Issues & Fixes

**Issue**: "We don't know UML notation"
- **Fix**: Don't worry about perfect notation. Use boxes, circles, and lines. Focus on clarity, not compliance.

**Issue**: "Our data sketch is a mess with 10 boxes"
- **Fix**: Start with the core: the problem, the person, and one sitting of practice. Everything else can come later.

**Issue**: "Our wireframes look terrible"
- **Fix**: They're supposed to! Ugly wireframes = fast iteration. If you spend 20 minutes making it pretty, you're doing it wrong.

---

## Part 3: Developer — Sprint Build (35 minutes)

### Instructions

**Current Role**: Developer

Your job: build a working prototype of your chosen feature using paper components.

**Step 1: Create the data (10 minutes)**

Build sample data on index cards or small sheets:

**Problem Cards** (make 10-12):
```
[Front of card]
ProblemID: PR01
Operands: 7 + 6
Operator: +
Correct Answer: 13

[Back of card]
Attempt History:
- Tried by a learner, wrong on try 1, right on try 2
- Tried by a learner, right on try 1
```

**Learner Cards** (make 6-8):
```
LearnerID: L01
Display Name: (your pair invents a name)
Notes: (whatever your feature needs to track about this learner)
```

**Session/Attempt Cards** (blank templates, 10-12):
```
SessionID: S___
LearnerID: ___
Feature Played: (Answer Checker / Memory Bank / your chosen game)
Right / Tried: ___ / ___
Notes: ___
```

**Step 2: Build the interface (15 minutes)**

Create paper versions of your wireframe screens from Part 2. Use multiple sheets. Make it big enough to manipulate.

**Step 3: Create the system logic (10 minutes)**

Write step-by-step instructions for your feature's core operation. Worked example for **Answer Checker**:

**Check-Answer Procedure**:
1. Learner enters an answer to the displayed problem.
2. System checks the answer against the Problem card.
3. If correct on try 1: mark solved, credit the round, show the next problem.
4. If wrong on try 1: show an error signal, allow a second try.
5. If wrong on try 2: reveal the correct answer, mark the problem as missed, move to the next problem. **Never** display a wrong answer as if it were correct — this is a stated requirement from more than one stakeholder, not a nice-to-have.
6. After the round (e.g., 10 problems): show a score summary (right / tried) and a reward that visibly scales with the score.

If you chose **Memory Bank** or a **Practice Game** instead, adapt this shape: a Curator loading procedure (for Memory Bank) or a single-round game procedure (for a Practice Game) — write it with the same level of if-this-then-that detail.

Write these on separate instruction sheets. This is your "code" — the logic of how the system works.

### Expected Output

- 10-12 problem cards with realistic data
- 6-8 learner cards
- 10-12 blank session/attempt cards
- Paper interfaces for 2-3 key screens
- Written procedures for your feature's core operation
- A system you can physically demonstrate

### Common Issues & Fixes

**Issue**: "This feels silly. We're just playing with paper."
- **Fix**: Prototyping saves massive time. Better to find design flaws with paper than after writing 10,000 lines of code.

**Issue**: "We can't represent the computer logic with paper"
- **Fix**: You can! The rules are the same. If the system would check a database for a problem's correct answer, you check your problem cards. The logic is identical.

**Issue**: "We're running out of time"
- **Fix**: Prioritize. Get your one chosen feature's core loop working. Skip the advanced features. MVP first.

---

## Part 4: Tester — Sprint Review (20 minutes)

### Instructions

**Current Role**: Tester

Your job: verify the system works as designed and find problems.

**Step 1: Create test cases from requirements (8 minutes)**

Go back to your requirements from Part 1. For each "Must Have" requirement, create a test case.

Use your third color of sticky notes:

**Test Case Format**:
```
Test Case #1
Requirement: System must give the learner a second try before revealing the correct answer
Given: Problem PR01 (7 + 6 = 13) is presented to a learner with 0 attempts so far
When: Learner enters 12 (wrong) on try 1, then 13 (right) on try 2
Then:
  - Try 1 is recorded as wrong
  - Try 2 is recorded as correct
  - The round credits this as a second-try correct, not a first-try correct
```

Write 6-8 test cases covering core functionality.

**Step 2: Execute the test cases (8 minutes)**

Actually perform each test using your paper prototype:

1. Set up the preconditions (arrange cards)
2. Follow the procedure exactly as written in Part 3
3. Verify the expected outcomes

Mark each test:
- ✅ **Pass**: System behaves as expected
- ❌ **Fail**: System doesn't do what the requirement specifies
- ⚠️ **Issue Found**: System works but has a problem

**Step 3: Bug report and gap analysis (4 minutes)**

For any failed tests or issues, write a bug report:

```
Bug #1: No handling of a learner walking away mid-round
Severity: Medium
Steps to Reproduce:
1. Learner starts a round and answers 3 problems
2. Learner leaves without answering for several minutes
Problem: Nothing in our design says what happens to the in-progress session
Suggested Fix: Auto-stop the session and save whatever was completed
```

Common gaps you might find:
- No handling of a Memory Bank set with fewer problems than the curator meant to load
- No duplicate-learner detection (two learners with the same display name)
- No handling of a curator changing a set the learner is mid-session on
- No tie-breaking rule for the reward tier at score boundaries

**List 3-5 gaps or issues.** This is expected! Testing finds problems.

### Expected Output

- 6-8 test cases linked to requirements
- Test results (Pass/Fail/Issue) for each
- 3-5 documented bugs or gaps
- Understanding that no first version is perfect

### Common Issues & Fixes

**Issue**: "Everything passed our tests"
- **Fix**: Your tests aren't hard enough. Try edge cases: What if the learner enters a non-numeric answer? What if the problem doesn't exist? What if two learners have the same name?

**Issue**: "We found 20 bugs"
- **Fix**: Some of those are probably feature requests, not bugs. A bug is "system doesn't do what it's supposed to." Missing features are "system could do more."

**Issue**: "We don't know how to fix the bugs"
- **Fix**: That's okay. Testing's job is to find problems, not fix them. Document clearly so the developer (next sprint) can fix.

> The Tester round is the one Creators apologise to me for, and it is the round I like best. Finding twenty problems is not evidence that your pair built badly — it is evidence that somebody finally looked. Write them down clearly enough that the next person can act on them, and you have done the entire job.

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Phase Dependencies**: When you got to Design, what happened if your Requirements were unclear? What about when you got to Testing and realized Requirements were missing?

**2. Role Empathy**: Which role was hardest for you? Which was most comfortable? How does experiencing all roles change how you'll work with team members in those roles?

**3. Paper Prototyping Value**: We didn't write any code, but we built a system. What did we learn that we wouldn't have learned by jumping straight to coding?

**4. Iteration Needs**: If you had another 2 hours, what would you improve? What did testing reveal that would change your design?

**5. Real-World Scaling**: Your feature works for one learner and one curator on paper. What would change if a school wanted this rolled out to 1,000 learners across 40 classrooms?

**6. Compare Stakeholders**: Talk to a pair that had a different transcript than yours. Did they choose the same feature you did? If your stakeholders wanted conflicting things, how would you resolve that?

### Exit Ticket

**Submit via Canvas** (3-5 sentences):

```
1. What was your biggest learning moment during this lab?

2. Which SDLC phase do you now realize is more important than you thought? Why?

3. What's one specific thing you'll do differently in your own Dataman 2.0 work because of this experience?

4. What's still unclear about the SDLC process?
```

---

## Extension Challenges (Optional)

**For pairs who finish early:**

### Challenge 1: Add a New Feature
Pick one "Nice to Have" requirement. Design and prototype it. What entities or screens change?

### Challenge 2: Worst-Case Testing
Create 5 "break the system" test cases:
- Learner enters the same problem's answer twice in one round
- Learner enters a 4-digit answer to a problem that should have a 1-3 digit answer
- A subtraction problem would go negative
- A curator tries to load 11 problems into a Memory Bank set
- A learner card with no display name

Can your system handle these? What should it do?

### Challenge 3: Stakeholder Scenarios
Role-play a demo for the stakeholder your pair was assigned. One partner is the Product Owner presenting, the other plays the stakeholder (Parent, Teacher, or Retro Collector) asking hard questions in character with that persona's priorities:
- Parent: "What if he just guesses and mashes buttons?"
- Teacher: "Can I still use this if my class has 24 different skill levels?"
- Retro Collector: "Does this behave exactly like the original, or is it 'inspired by'?"

### Challenge 4: Technology Decisions
Now that you have the design, decide:
- Database: SQL or NoSQL? Why?
- Interface: Desktop app, web app, or mobile? Why?
- Hosting: Local server or cloud? Why?

Document your decisions and reasoning.

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup, pair formation, distribute materials and transcripts
- **5-35 min**: Part 1 (Product Owner) — backlog refinement
- **35-65 min**: Part 2 (Scrum Master) — sprint planning / diagrams and wireframes
- **65-100 min**: Part 3 (Developer) — paper prototype building
- **100-120 min**: Part 4 (Tester) — test execution and bug documentation
- **120-130 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Students jump to solutions before understanding requirements
   - **Signs**: Sticky notes read like feature names ("leaderboard," "an app for it") instead of behaviors
   - **Intervention**: Stop them. "Don't tell me HOW you'll build it. Tell me WHAT it needs to do."
   - **Success Indicator**: Requirements are written as system behaviors, not implementation details

**2. Struggle**: A pair picks a feature their transcript doesn't actually support
   - **Signs**: The pair chooses the Answer Checker or a Practice Game because it "sounds easier," ignoring what their assigned stakeholder emphasized (e.g., a Teacher-transcript pair building a leaderboard, which Ms. Alvarez explicitly refuses)
   - **Intervention**: Ask them to point at the line in their transcript that motivates their choice. If they can't, send them back to Step 1 before they proceed to Part 2.
   - **Success Indicator**: The pair can name the specific stakeholder quote that drove their feature choice

**3. Struggle**: Diagrams are overly complex or too simplistic
   - **Signs**: A data sketch with one box and no attributes, or one with ten boxes and no clear core
   - **Intervention**: Show examples on the board. "Your data sketch should have 3-5 boxes, not 1, not 10."
   - **Success Indicator**: Diagrams are readable and match the scope of the one feature the pair chose

**4. Struggle**: Paper prototyping feels pointless to students
   - **Signs**: Rushed, minimal cards; a pair says "can we just skip to describing it in words?"
   - **Intervention**: Challenge them: "Show me how a learner answers a problem and gets it wrong twice. Walk me through it with the cards." Physical demo proves the value.
   - **Success Indicator**: Students can demonstrate their feature working without explaining it verbally first

**5. Struggle**: Testing is too superficial (all tests pass)
   - **Signs**: Every test case says "Pass," and the bug list is empty or trivial
   - **Intervention**: Be a hostile tester. "What if I enter an answer that isn't a number?" Make them think adversarially.
   - **Success Indicator**: Students find at least 3 real issues with their own design

**6. Struggle**: Pairs work individually instead of together
   - **Signs**: One partner holds the marker the whole lab; the other partner can't explain a diagram they supposedly co-built
   - **Intervention**: Enforce single workspace. "One paper, one marker at a time. You have to talk through decisions together."
   - **Success Indicator**: Both students can explain all parts of the system, not just "their" parts

### Materials to Prepare

**Before Class:**
- [ ] Print Dataman stakeholder transcripts (`drafts/cts285/shared-dataman-artifacts/Stakeholder_Transcript_Parent.md`, `Stakeholder_Transcript_Teacher.md`, `Stakeholder_Transcript_Retro_Collector.md` <!-- PATHFORM: pending spine ruling -->), one per pair, rotated so the room gets a mix of all three
- [ ] Print role cards (`drafts/cts285/activities/handouts/Role_Cards_SDLC.md` <!-- PATHFORM: pending spine ruling -->)
- [ ] Print the SDLC phase checklist (`drafts/cts285/activities/handouts/SDLC_Phase_Checklist.md` <!-- PATHFORM: pending spine ruling -->)
- [ ] Create sample requirement statements to show format
- [ ] Gather poster paper, sticky notes, markers (enough for all pairs)
- [ ] Prepare example diagrams to show — sketch your own example using a feature none of the room's transcripts push toward, so you don't hand a pair their own answer by accident
- [ ] Pre-make one complete Answer Checker prototype yourself to understand timing (it's the flagship feature and the simplest dry run)

*Instructor-only cross-check, do not distribute: if you want a sanity check on a pair's data sketch, the known-correct model is `drafts/cts285/shared-dataman-artifacts/Dataman_Reference_ERD.md` <!-- PATHFORM: pending spine ruling -->. It also backs the Week 5-6 System Design assessment's "which entity is missing" items — do not show it to students before then, or you spoil that assessment.*

**During Class:**
- [ ] Project a timer for each phase so pairs stay on track
- [ ] Circulate during Part 1 to catch solution-focused requirements and feature choices that don't trace to the assigned transcript
- [ ] Check diagrams in Part 2 before they move to Part 3 (prevent cascading errors)
- [ ] Take photos of good examples to share (ask permission)
- [ ] Stop at 90 minutes for a 2-minute status check: "Everyone should have a working prototype"

**After Class:**
- [ ] Take photos of all final prototypes (students can reference them)
- [ ] Note which pairs struggled with which phase (for targeted support)
- [ ] Identify best examples of each artifact type (requirements, diagrams, wireframes, test cases) across all three feature choices
- [ ] Compile common gaps found during testing (shows whole-class patterns)
- [ ] Create an FAQ document from questions asked during lab

### Teaching Tips

**Set the tone**: "This will feel silly. Embrace it. Paper prototyping is what designers at Apple, Google, and Microsoft do before spending millions on development."

**Emphasize iteration**: "Your first design will be wrong. That's expected. Better to be wrong with paper than wrong with code."

**Connect to capstone**: "In 8 weeks, you'll do exactly this process for your CSC-289 project. But instead of 2 hours, you'll have 2 months. Get the process right now."

**Celebrate bugs found**: When pairs find issues during testing, praise them loudly. "Finding a bug in testing is a WIN. Finding it after launch is a disaster."

**Use documented stories**: Share a documented real system failure caused by skipping requirements or testing — a well-known, verifiable one you can back up if a student asks for a source. Make it memorable.

**Don't let them skip ahead**: "I know you want to build. Resist. If you don't understand requirements, you'll build the wrong thing fast."

### Teaching Philosophy Notes

This lab embodies experiential learning at its core. Students don't read about SDLC — they live it. They feel the frustration of getting bad requirements. They experience the "aha!" when testing reveals a design flaw they missed.

The pairs format with role rotation ensures no one hides. Everyone must gather requirements, plan, build, and test. This builds empathy for the full team.

Paper prototyping is the great equalizer. Students who are nervous about coding shine here. Students who want to jump straight to code learn that thinking precedes typing.

The Dataman feature each pair builds is intentionally small — one feature, not the whole device. This isn't about domain complexity — it's about process. They'll have a working prototype in 2 hours. That confidence is critical, and it's the same confidence the real Dataman 2.0 solo spine asks them to carry across a whole semester instead of two hours.

Finally, the bugs they find in testing are the payoff. When students discover their own design gaps, they internalize the value of testing in a way no lecture can teach.

---

**Remember**: By the end of this lab, students should be able to say: "I built a piece of Dataman 2.0 today. I know what a product owner, a scrum master, a developer, and a tester do because I did it." That embodied learning sticks.
