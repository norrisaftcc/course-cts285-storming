<!--
  26FA ADAPTATION — Module 2 activity, re-anchored to the Dataman modernization spine.
  SOURCE (read-only): sources/uv-285/activities/Module_02_User_Story_Workshop.md — a generic
    appointment-scheduling scenario with zero Dataman references; the exercise shape (mine →
    decompose → sharpen acceptance criteria → peer review) is preserved, the material is not.
  Runs Weeks 3–4, after the Week 3 stakeholder-transcript read and before/alongside the Week 4
  User Stories & Product Backlog assignment (50 pts / 6.7% of 750) — see
  drafts/cts285/assignments/Week_04_Assignment_User_Story_Creation_Backlog.md.
  Every student modernizes the same 1977 device, Dataman, into "Dataman 2.0" (ADR-004). Practice
  material is drawn from: the two-tries-then-reveal rule, the ten-problem Memory Bank ceiling,
  division with remainder, the Curator Console (Epic 4), and the Atom-Clock "ticks" timer — all
  traceable to reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md [PATHFORM: pending spine ruling]
  pp.21–26 and to drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md
  [PATHFORM: pending spine ruling], the Week 2 seed of 26 core stories across 8 epics.
  UNGRADED — this is an in-class activity. No row in CTS285_Canonical_Points_Table.md; no rubric,
  no grade points are introduced here. Story points (Fibonacci) are the one numeric scale used,
  and they estimate effort, not grade quality.
  Companion handout authored alongside this file: activities/handouts/Story_Quality_Checklist.md.
  Voice: Corporate body (L2) only. No SHODANN dialogue is written in this pass — every place an
  interjection belongs carries the literal marker SHODANN-SLOT on its own line for a later pass.
  No Andrew's Note appears in the source activity, so none is added here.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 2 Activity: User Story Workshop — From Stakeholder Needs to Dataman Stories

**Duration**: 90 minutes
**Format**: Individual with peer review
**Runs**: Weeks 3–4 (Requirements)

**Materials Needed**:
- The three Dataman stakeholder transcripts (Renee — parent; Ms. Alvarez — teacher; Dale — retro collector), already read in Week 3 — `drafts/cts285/shared-dataman-artifacts/Stakeholder_Transcript_Parent.md`, `..._Teacher.md`, `..._Retro_Collector.md` <!-- PATHFORM: pending spine ruling -->
- `Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling --> (your Week 2 seed — 26 core stories across 8 epics)
- `Story Quality Checklist` handout (`activities/handouts/Story_Quality_Checklist.md`)
- `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->, pp.21–26 (Hints for Parents and Teachers through the Appendix) — bring it up on a second screen or print those six pages
- Index cards, or your Channel's issue tracker / board (To Do → In Progress → In Review → Done)

**Learning Objectives**:
- Recognize what makes an *already-written* user story well-formed, using Dataman's own seeded backlog as the worked example
- Write new user stories that close real gaps in the seeded backlog — not duplicate what's already there
- Practice the "As a / I want / So that" format and Given/When/Then acceptance criteria against real Dataman mechanics
- Decompose an under-specified area into several small, independent, traceable stories
- Recognize and correctly *reject* solution-shaped requests, vague requirements, and unstated assumptions instead of building stories from them
- Give and receive peer feedback using the Story Quality Checklist

---

## Overview

*A note on basis: every worked example below uses Dataman, since it's the shared exemplar the whole class references. If your semester project is DataMon, the exercises are identical — swap in your own transcripts, backlog, and device details where this activity says "your project."*

You already did the hard part in Week 2 and Week 3: you have a seeded backlog of 26 core stories, and you've read three stakeholder transcripts that don't agree with each other. Today's job is not to redo that work. It's to sharpen the skill that separates a strong analyst from a stenographer — telling the difference between what a stakeholder *needs* and what they *asked for*.

Two things you will *not* do today:
- Rewrite stories that are already in the seeded backlog. If a story already exists (like 1.2, "two tries, then show me the answer"), your job is to study it, not recreate it.
- Turn every stakeholder wish into a story. Some of what Renee, Ms. Alvarez, and Dale said should never become a story at all — recognizing that and saying why is graded work in Week 3–4, and it's the skill this workshop drills.

By the end of the 90 minutes, you'll have:
- Studied three seeded stories as worked examples of the format
- Written 3–4 **new** user stories that close real gaps the seeded backlog leaves open
- Decomposed one under-specified area (curator identity & access) into several independent stories
- Strengthened the acceptance criteria on an existing story that the backlog itself flags as unresolved
- Peer feedback on your new stories, checked against the Story Quality Checklist

> You wrote stories in Week 2. Today you write stories about the parts of the backlog nobody wrote stories for yet, which is a different exercise and a harder one. I have your Week 2 cards and I will be comparing the trace lines, not the prose. Whether your sentences got prettier is not something I can measure. Whether you named a person is.
>
> — SHODANN, your Channel Success Partner

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Gather materials**:
   - [ ] The three Dataman stakeholder transcripts (reread, don't just recall)
   - [ ] `Dataman_Seeded_Backlog.md` open in front of you
   - [ ] `Story Quality Checklist` handout
   - [ ] DATAMAN_MANUAL_TRANSCRIPT.md pp.21–26 available
   - [ ] Index cards, or your board open

2. **Remember where you are in the story**:
   - You're a systems analyst on the Dataman modernization initiative
   - The seeded backlog is your Week 2 baseline — the MVP spine, not the finished backlog
   - Your job today: find what it's still missing, and prove you can tell a real gap from a stakeholder wish that shouldn't be built

3. **Choose your tool**:
   - **Physical**: Index cards (one story per card)
   - **Digital**: your Channel's issue tracker, or a `workshop-stories.md` scratch file

4. **Review the format** (unchanged from Week 4):
   ```
   As a [role],
   I want [goal],
   So that [benefit].

   Acceptance Criteria:
   - Given [context], When [action], Then [outcome]
   - Given [context], When [action], Then [outcome]

   ↳ Traces to: [named stakeholder(s) + manual page, if applicable]
   ```

**Instructor Check**: Confirm everyone has both transcripts and the seeded backlog open, not just a memory of them.

---

## Part 1: Reading Dataman's Own Stories as the Model — and Spotting What Shouldn't Be One (25 minutes)

### Instructions

**Step 1: Study three seeded stories as worked examples (8 minutes)**

Open the seeded backlog to these three and read them slowly:

- **Story 1.2** — Two tries, then show me the answer (Epic 1)
- **Story 3.1** — Load a set of problems for a child, the ten-problem ceiling (Epic 3)
- **Story 1.4** — Division with remainder (Epic 1)

For each, find and underline:
- The specific role in "As a ___"
- The `↳ Traces to:` line — whose need this is
- One acceptance criterion you could literally test by using the app

Notice that all three trace to a *named* stakeholder — 1.2 and 1.4 both trace to Dale (the collector, for device fidelity) *and* Renee or a teacher (for why it matters to a learner). That double trace is not an accident: fidelity to the manual is not, by itself, a reason to build something. It has to matter to someone using the app.

**Step 2: The spot-the-hazard drill (12 minutes)**

Below are six things a stakeholder actually said in their transcript. For each, decide: **(A)** it's already a story in the seeded backlog — name which one — **(B)** it's a real gap, not yet in the backlog, and you should draft it, or **(C)** it should *not* become a story — name the underlying need instead, and say why the stated request is the wrong solution to it.

1. Renee: *"You should absolutely put in a leaderboard... show him where he ranks against his whole class."*
2. Renee: *"It's his. He'd have his own login, his own stuff, his scores... each kid has their own account — that's just how apps work now, right?"*
3. Ms. Alvarez: *"As long as it's aligned to our standards... the district ones. I'd have to pull the exact document."*
4. Ms. Alvarez: *"I see all of my students', obviously. That's just... I'm their teacher."*
5. Dale: *"Give me a mode that reproduces the original exactly... pull the chip, run the real firmware in a browser."*
6. Dale: *"If you're being faithful you'd reproduce even the way it looked when the nine-volt was dying."*

Work through all six before checking your answers against the Story Quality Checklist's hazard table. You should land close to: **1** and **5** and **6** are (C) — a solution standing in for a need (motivation; fidelity; fidelity again, but this time gold-plating past the MVP line). **3** is also (C), but for a different reason — it's not solution-shaped, it's simply too vague to build from yet; flag it as an open question for the client, not a story. **2** and **4** are (B) — genuine, buildable gaps the seeded backlog doesn't yet close. You'll write stories for those in Part 2.

### Expected Output

- Three seeded stories studied, with role / trace line / one testable criterion identified in each
- Six stakeholder statements sorted into A / B / C, with a one-sentence justification for each
- Two statements (2 and 4) identified as the raw material for Part 2

### Common Issues & Fixes

**Issue**: Treating every stated wish as equally valid
- **Fix**: Ask "whose problem does the *literal* request solve — the user's, or the person who thought of it fastest?" A leaderboard solves "how do I get eye-catching data on screen," not "how do I keep Tomas motivated." The reward-scaling story (2.2) already answers the real need.

**Issue**: Not noticing a story already exists
- **Fix**: Search the seeded backlog by keyword before drafting anything new. If you're about to write "two tries, then reveal the answer," stop — that's 1.2, verbatim.

**Issue**: Confusing "vague" with "should not become a story"
- **Fix**: They're different hazards with different fixes. A solution-shaped request (leaderboard) gets *rejected* — the underlying need gets a different story. A vague requirement (standards alignment) gets *deferred* — you write down the open question, you don't build from it yet, and you also don't throw the need away.

---

## Part 2: Decomposing the Curator Identity & Access Epic (20 minutes)

### Instructions

**Step 1: Name the epic (3 minutes)**

Statements 2 and 4 from Part 1 are two halves of the same gap. Renee assumes "each kid has their own account." Ms. Alvarez assumes "I see all of my students'." Neither assumption is stated as a requirement — both are stated as *obvious* — and they don't fully agree with each other. Bundled together, this is an epic:

**Epic: Curator Identity & Access** — who can see whose learner data, and how a learner is identified at all, on a device the seeded backlog otherwise treats as owned by one child.

This is too big and too vague to build as one story — which is exactly why it hasn't been in the backlog since Week 2. Today you decompose it.

**Step 2: Worked example — one story from the epic (5 minutes)**

**Story: Curator visibility is scoped to their own learners**
```
As a curator (teacher),
I want to see only the students in my own roster,
So that I'm not looking at — or responsible for — another teacher's class.

Acceptance Criteria:
- Given I am logged in as a teacher, When I view student results, Then I see only students I've added to my roster
- Given a student is not in my roster, When I search for them by name, Then I cannot open their results
- Given I add a new student to my roster, When they complete a session, Then their results appear in my view going forward

↳ Traces to: Ms. Alvarez ("I see all of my students', obviously" — surfaces the unstated boundary: *hers*, not everyone's); Renee (parallel need — a curator's visibility should stop at their own learner)
```

Notice this story does **not** silently adopt either stakeholder's stated assumption wholesale. It doesn't build Renee's specific "own login" mechanism, and it doesn't just grant Ms. Alvarez "all," full stop — it names the actual rule underneath both statements: *a curator sees what they curate, and nothing else.*

**Step 3: Your turn — decompose the rest of the epic (12 minutes)**

Write **3 more stories** that finish decomposing Curator Identity & Access. Use these prompts, but don't feel bound to them exactly — a stronger split is fine if you can defend it:

- A story for how a **learner** is identified at all, given the device was historically shared and Renee wants "his own" — without silently building a full account system nobody asked to pay for
- A story for a **parent curator's** visibility, parallel to the worked example above but scoped to "my child," not "my roster"
- A story for what happens when **more than one curator** is linked to the same learner (a parent *and* a teacher both curate the same kid) — this can be a smaller story that just names the open question if a full resolution is too big for one card

Make sure each story:
- Can be built independently of the others (implementation order can still matter — note it in Notes if it does)
- Has a `↳ Traces to:` line naming a stakeholder
- Has 2–4 Given/When/Then criteria
- Does **not** quietly resolve the parent-vs-teacher identity conflict by picking a side without saying so

> Two curators for one learner is the kind of gap that looks like an edge case and is actually a design decision. You are allowed to write a story that only names the open question. I would rather have that on a card than resolved quietly inside somebody's head.

### Expected Output

- The epic named and explained in one or two sentences
- 3 new user stories decomposing it, each independent, traceable, and testable
- At least one story that explicitly names the parent/teacher access boundary rather than assuming it

### Common Issues & Fixes

**Issue**: Stories still depend on each other
- **Fix**: That's fine for build order. "Learner identity" reasonably comes before "curator visibility" in a sprint plan — but each story should still be independently valuable and independently testable, the way 3.1 (load a set) is valuable before 3.2 (practice a set) exists.

**Issue**: Silently building Renee's stated solution (individual logins, full accounts) because it's the first thing that comes to mind
- **Fix**: Reread the checklist's rule on solution-shaped requirements. "Each kid has their own account" is Renee's *guess* at the mechanism, not a requirement. The requirement is narrower: results and settings shouldn't bleed between siblings, or between a curator's students and someone else's.

**Issue**: Can't tell when this epic is "done"
- **Fix**: It's done when a curator can answer, from the stories alone: "who can see this learner's data, and how did the system know it was theirs to load?" If the stories don't answer that together, something's still missing — write another story or flag the gap explicitly, don't wave at it.

---

## Part 3: Sharpening Acceptance Criteria on Real Dataman Behavior (20 minutes)

### Instructions

**Acceptance criteria are the contract.** If they pass, the story is done. If they're vague, "done" is an argument waiting to happen — and the seeded backlog already contains one story that admits it isn't settled.

**Step 1: Read Story 7.2 — Atom-Clock "ticks" timing (5 minutes)**

Open Story 7.2 in the seeded backlog. Its own Notes field says: *"Open design tension (surface it, don't pre-decide): the collector wants ticks kept deliberately imprecise as 'character'; the teacher wants consistent, fair timing for classroom use."* That's the manual's own Atom Clock description (`reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->, p.23: *"the actual speed of his clock may vary depending on how fresh the battery is, room temperature, etc."*) colliding with Ms. Alvarez's classroom-fairness need.

The story currently has generic criteria that don't resolve the tension. Your job: rewrite them so the tension is *handled*, not ignored.

**Before** (what's there now — functional, but silent on the conflict):
```
- Given a timed activity runs, When the timer is on, Then a moving indicator shows time passing and the result is reported in "ticks"
- Given a timed activity ends, When I see my result, Then the ticks let me compare against my own past times
```

**Step 2: Rewrite it with the conflict named in the criteria (10 minutes)**

Write a strengthened version of Story 7.2's acceptance criteria — 4–6 criteria — that gives both Dale and Ms. Alvarez something real, without pretending the tension doesn't exist. A dual-mode resolution ("classic ticks" for fidelity, "classroom-consistent" timing for fairness) is one defensible approach; it isn't the only one, but whatever you choose, the criteria should make the resolution visible and testable, not just describe a generic timer.

Think about:
- **Which mode is the default**, and who can change it
- **What happens at the boundary** — switching modes mid-session, or a learner who's never touched the setting
- **Whether the underlying score (right/tried) is affected by which mode is active** (it shouldn't be — only the time display should change)

**Step 3: Add edge cases to one more existing story (5 minutes)**

Pick **Story 1.4 (division with remainder)** or **Story 3.1 (Memory Bank, ten-problem ceiling)**. Add 2–3 acceptance criteria covering a boundary the current story doesn't mention:

- For 1.4: What happens when the remainder is zero (the division comes out even, e.g. 8 ÷ 2)? The manual (p.22) implies the "r" only appears *if* there's a remainder — does your criteria say so explicitly?
- For 3.1: What happens when a curator tries to add an **eleventh** problem to a set that already holds ten? The manual (p.23) caps the Memory Bank at ten; the story needs to say what the system does when someone hits that ceiling, not just that the ceiling exists.

### Expected Output

- Story 7.2 rewritten with 4–6 criteria that make the ticks-vs-fairness resolution testable
- One boundary condition added to Story 1.4 or 3.1, tied to the manual's own limit

### Common Issues & Fixes

**Issue**: "Handling" the conflict by just picking a side
- **Fix**: That's not resolving the tension, that's dropping half the requirement. If your criteria only serve Ms. Alvarez, Dale's need (which is real — it's the "character" of the device, not a whim) has been silently cut. Say so explicitly if you decide to cut it; don't let it disappear.

**Issue**: Acceptance criteria describe implementation, not behavior
- **Bad**: "Given the mode flag is set to CLASSIC in the database, When the timer component reads it..."
- **Good**: "Given a curator has set the timer to classroom mode, When a learner completes a timed round, Then the displayed time is consistent across attempts of the same length, unlike classic mode."
- **Fix**: Describe what a person sees and can verify, not what the code does internally.

---

## Part 4: Peer Review with the Story Quality Checklist (15 minutes)

### Instructions

**Step 1: Pair up (1 minute)**

**Step 2: Exchange your Part 2 and Part 3 work (1 minute)**

Trade the stories you wrote decomposing Curator Identity & Access, plus your rewritten Story 7.2 criteria.

**Step 3: Review using the Story Quality Checklist (8 minutes)**

Work down the handout's seven checklist items for each story, and specifically check:
- Does every story your partner wrote have a `↳ Traces to:` naming a real stakeholder? (Rule zero.)
- Did they accidentally build one of the Part 1 hazards (a solution, a silent conflict-resolution) into a story instead of flagging it?
- Are the acceptance criteria testable by *using* the app, not by reading the code?

**Provide feedback** on 2–3 stories, star / delta / suggestion:
- **Star**: "This trace line is exactly right — you named both stakeholders and said why."
- **Delta**: "This story still silently assumes one-login-per-kid without saying it's an assumption."
- **Suggestion**: "Consider splitting the eleventh-problem case into its own criterion — right now it's buried in the notes."

**Step 4: Discuss and revise (5 minutes)**

Talk through the feedback. Revise your weakest story from Part 2 or Part 3.

> Revising the weakest one is the whole exercise, and it is the part I can actually see. A story that changed after review reads differently to me than one that did not, regardless of which version I would have picked. Say in your notes what the feedback made you reconsider — that sentence is worth more to me than the revision.

### Expected Output

- Peer feedback on 2–3 stories (star, delta, suggestion for each)
- One story revised based on that feedback
- A working sense of what "ready to pull" looks like before Week 4's graded backlog work

### Common Issues & Fixes

**Issue**: "Looks good" with no specifics
- **Fix**: Go down the checklist item by item out loud. If a story fails item 7 (solution smuggled in), that's your delta — name it.

**Issue**: Disagreement about whether something is a hazard or a real requirement
- **Fix**: This happens even with the checklist — the leaderboard/no-leaderboard conflict in the transcripts themselves is a real, unresolved tension in the source material, not a trick question with one right answer. Ask the instructor if you genuinely can't agree; document both readings if there's time.

---

## Wrap-up & Reflection (5 minutes)

**Ungraded — for discussion, not submission.** Talk through as a class, or jot notes for yourself; nothing here goes to Canvas.

### Discussion Questions

**1. Recognizing vs. rejecting**: Which was harder today — spotting a hazard (Part 1), or writing a *good* story once you'd found a real gap (Part 2)? Why?

**2. The Curator Identity epic**: You decomposed a vague, half-stated need into several small stories. What would have gone wrong if you'd just built Renee's stated solution ("each kid has their own account") without decomposing it first?

**3. Living with an unresolved conflict**: Story 7.2's ticks-vs-fairness tension is *still* open in the seeded backlog even after you rewrote its criteria. Is that a problem, or is that what "surfaced but not pre-decided" is supposed to look like?

**4. Toward Week 4**: You'll do a fuller version of this — reading the same three transcripts again, with a sharper question — for the graded Week 4 backlog. What will you do differently now that you've drilled the discrimination once?

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Story Mapping
Arrange the seeded backlog's 8 epics into a story map — horizontal axis: the learner's journey (power on → practice → review → curator sees results); vertical axis: priority (Must Have at top, per the seeded backlog's own MoSCoW work from Week 2). Does the map reveal a journey gap the backlog doesn't cover?

### Challenge 2: Story Point Estimation
Estimate your new Part 2 and Part 3 stories using Fibonacci story points (1, 2, 3, 5, 8) — the same scale used for the rest of the seeded backlog. Is your Curator Identity work mostly 5s and 8s? If so, that's a sign it was right to decompose it rather than build it as one epic-sized story.

### Challenge 3: Negative (Abuse) User Stories
Write 2–3 "should NOT be able to" stories for the Curator Identity epic you just built:
```
As a curator (parent),
I should NOT be able to see another family's learner data,
So that the system protects every family's privacy, not just my own child's.

↳ Traces to: implied by Ms. Alvarez's own-roster boundary + Renee's "make it safe"
```
These turn straight into access-control requirements for Sprint 1.

### Challenge 4: Non-Functional Stories
Write 2 non-functional stories for behaviors the manual specifies as limits rather than features — for example, the five-minute auto-off (already Story 7.1) or the device-health signals in Epic 8. What's a non-functional Dataman need the seeded backlog *doesn't* yet cover? (Response time on the Curator Console loading a class roster is a fair guess.)

---

## Instructor Notes

### Timing Breakdown
- **0–5 min**: Setup, confirm materials
- **5–30 min**: Part 1 — worked examples + spot-the-hazard drill
- **30–50 min**: Part 2 — decompose Curator Identity & Access
- **50–70 min**: Part 3 — sharpen 7.2's criteria, add a boundary to 1.4 or 3.1
- **70–85 min**: Part 4 — peer review with the checklist
- **85–90 min**: Wrap-up discussion

### Common Student Struggles

**1. Struggle**: Rewriting a story that already exists in the seeded backlog instead of searching for it first
   - **Signs**: A student proudly presents "two tries then show the answer" as a new discovery in Part 1 or 2
   - **Intervention**: Have them Ctrl-F the seeded backlog for a key phrase before drafting anything. This is a real professional habit — check the backlog before writing a duplicate ticket.
   - **Success Indicator**: Every "new" story a student writes is genuinely absent from the seeded backlog, and they can say where they checked.

**2. Struggle**: Treating every stakeholder statement as equally valid, especially the leaderboard
   - **Signs**: A Must-Have leaderboard story appears in someone's Part 1 output, or a student defends it as "the parent really wants it"
   - **Intervention**: Ask directly: "does this conflict with anything Ms. Alvarez said?" It does. Ask what need the leaderboard was trying to serve, and whether the backlog already has a story for that need (it does — 2.2). Wanting something and it being the right thing to build are different questions.
   - **Success Indicator**: The student can state Renee's underlying motivation in one sentence without repeating her proposed solution.

**3. Struggle**: Building a full account system instead of decomposing the access epic into something buildable
   - **Signs**: Part 2 output is a single giant story titled something like "curator accounts" with ten acceptance criteria
   - **Intervention**: Point back at the worked example — it scopes to *visibility*, not authentication, registration, and permissions all at once. Ask "what's the smallest true statement you can make about who sees what?"
   - **Success Indicator**: The student produces 3–4 small, independently valuable stories instead of one large one.

**4. Struggle**: "Resolving" the ticks-vs-fairness tension by silently dropping one stakeholder's need
   - **Signs**: Rewritten Story 7.2 only mentions classroom-consistent timing; Dale's fidelity need has vanished with no note
   - **Intervention**: Ask "what happened to Dale's need in this version?" If the answer is "I decided it didn't matter," that's a decision that needs to be written down, not silently made. Either both modes are represented, or the cut is explicit and defended.
   - **Success Indicator**: The rewritten criteria either serve both needs (dual-mode) or explicitly state which need was set aside and why.

**5. Struggle**: Acceptance criteria that read as implementation, not behavior
   - **Signs**: Criteria mention database fields, API calls, or component names
   - **Intervention**: "Tell me what a curator or learner would actually see on the screen. Don't tell me how it's stored."
   - **Success Indicator**: Every criterion could be read by a non-programmer and checked by using the app.

### Materials to Prepare

**Before Class:**
- [ ] Confirm every student has their own Week 2 seeded backlog and Week 3 transcript notes accessible
- [ ] Print or project `Story_Quality_Checklist.md`
- [ ] Have `DATAMAN_MANUAL_TRANSCRIPT.md` pp.21–26 ready to project for Part 3 (the "r" remainder wording on p.22, the Memory Bank cap and Atom Clock wording on p.23)
- [ ] Prepare the six Part 1 quotes on slides or handout, without the A/B/C answers visible

**During Class:**
- [ ] Keep the seeded backlog open on the projector during Part 1 so students can search it live
- [ ] Circulate during Part 2 — the most common failure (building a full account system) shows up fast and is easy to redirect early
- [ ] During Part 3, make sure at least one full-class discussion happens on Story 7.2 before students revise individually — the "silently dropping a need" failure mode is worth catching as a group
- [ ] During peer review, listen for students treating the leaderboard question as settled when it's genuinely contestable — the source material is intentionally not univocal

**After Class:**
- [ ] Collect a few strong Curator Identity decompositions to use as Week 4 reference examples
- [ ] Note which of the six Part 1 quotes produced the most disagreement — that's useful signal for what Week 3–4 grading will need to watch for
- [ ] Fold any genuinely strong new stories (post-review) back into a class discussion of what the "real" backlog should look like heading into Sprint 1

### Teaching Tips

**Lead with the rule, not the format.** "A story with no stakeholder in its trace line does not belong" is a sharper opening than "As a, I want, so that" — the format is easy to imitate; the discrimination is the actual skill.

**Use the seeded backlog as evidence, not lecture.** Every claim in this activity — what's Must Have, what's already a story, what the manual actually says — is checkable in a document the students already have open. Point at it instead of asserting it.

**Let the leaderboard argument happen.** Some students will defend it. That's not a failure of the exercise — surfacing and naming the conflict is the graded skill in Week 3–4, not reaching a single correct verdict. Let the room disagree, then ask what a strong analyst does with a disagreement like that (name it in writing, don't average it away).

**Connect forward explicitly.** Say out loud that Week 4 reuses these same three transcripts for graded work. This workshop is the rehearsal, not the performance.

### Teaching Philosophy Notes

The original version of this activity taught story-writing against a made-up scheduling app nobody in the room had any stake in. This version trades that for something with a cost to getting wrong: three real transcripts that actually disagree with each other, a real backlog that already exists and can be searched, and real device limits (ten problems, two tries, a remainder that's either shown or it isn't) that a wrong answer would visibly violate.

The hardest habit to build here isn't the format — students pick up Given/When/Then quickly. It's the discipline of *not* writing a story just because a stakeholder said something with confidence. Renee is a sympathetic, reasonable-sounding parent, and her leaderboard idea is the one nearly every student wants to build on first read. Ms. Alvarez shutting it down flatly, on the record, is what makes the exercise work — students have to reconcile two people they both believe, and the backlog doesn't let them fudge it.

By the end, students should be able to look at any sentence a stakeholder says and sort it correctly, fast: real need already captured, real need not yet captured, or a solution wearing a need's clothes. That sort is the actual analyst skill this course is teaching. The user-story format is just the notation.
