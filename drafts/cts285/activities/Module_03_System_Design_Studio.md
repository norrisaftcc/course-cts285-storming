<!--
  26FA ADAPTATION — Module 3 activity, re-anchored to the Dataman modernization spine.
  SOURCE (read-only): sources/uv-285/activities/Module_03_System_Design_Studio.md — a generic
    "community meal planning app" scenario with zero Dataman references; the exercise shape
    (use case diagram → ERD → wireframes → design decisions + review) is preserved, the material
    is not.
  Runs Weeks 5–6 (Sprint 1: System Design), as the in-class studio session that jump-starts the
  graded Week 5–6 assignment — see
  drafts/cts285/assignments/Week_05_Assignment_Sprint_1_System_Design.md [PATHFORM: pending spine ruling]
  (75 pts / 10.0% of 750). Every student modernizes the same 1977 device, Dataman, into
  "Dataman 2.0" (ADR-004); the entities and screens below are Dataman's own — problems, attempts,
  practice sets (Memory Bank), learners, results — drawn from
  reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md [PATHFORM: pending spine ruling] pp.1–6,
  21–26, and drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md
  [PATHFORM: pending spine ruling].
  Deliberately does NOT hand students
  drafts/cts285/shared-dataman-artifacts/Dataman_Reference_ERD.md [PATHFORM: pending spine ruling]
  — that file is the instructor grading key for the ERD knowledge-check items and the Week 5–6
  assignment; students build their own model here, the instructor calibrates against it privately
  (see Instructor Notes).
  UNGRADED — this is an in-class studio activity. No row in CTS285_Canonical_Points_Table.md; no
  rubric, no grade points are introduced here. What students produce here is practice toward their
  own individual Week 5–6 submission, not a graded deliverable in its own right.
  Voice: Corporate body (L2) only. No SHODANN dialogue is written in this pass — every place an
  interjection belongs carries the literal marker SHODANN-SLOT on its own line for a later pass.
  No Andrew's Note appears in the source activity, so none is added here.
  Companion handout authored alongside this file: activities/handouts/Design_Review_Checklist.md.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 3 Activity: Dataman 2.0 Design Studio — From Backlog to Diagrams and Wireframes

**Duration**: 150 minutes
**Format**: Small groups (2–3 students), collaborative studio — everyone is designing the *same* system (Dataman 2.0), so groups think out loud together even though each student's graded Week 5–6 submission is their own
**Runs**: Weeks 5–6 (Sprint 1: System Design)

**Materials Needed**:
- Laptop with internet access
- Draw.io account (free at app.diagrams.net)
- Figma account (free at figma.com)
- Your Week 4 Dataman backlog (or the seeded backlog if yours isn't finalized) — `drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md` <!-- PATHFORM: pending spine ruling -->
- The three Dataman stakeholder transcripts, already read in Week 3 — `drafts/cts285/shared-dataman-artifacts/Stakeholder_Transcript_Parent.md`, `..._Teacher.md`, `..._Retro_Collector.md` <!-- PATHFORM: pending spine ruling -->
- `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->, PDF pp.1–6 and 21–26 (printed: cover matter, pp.2–4, and pp.19–24)
- `Design Review Checklist` handout (`activities/handouts/Design_Review_Checklist.md`)

**Learning Objectives**:
- Translate backlog stories into UML use case diagrams
- Design an entity-relationship diagram (ERD) from Dataman's own requirements — learners, curators, problems, attempts, practice sets, results
- Create wireframes that reimagine the 1977 device's screen and keypad as a modern app, matching acceptance criteria from your backlog
- Use industry-standard design tools (Draw.io and Figma)
- Practice explaining design decisions to a stakeholder-standing-in (your peers, then the instructor)
- Recognize when diagrams are "good enough" vs. over-designed

---

## Overview

**You have a backlog. Now what?** Stories tell you WHAT to build. Designs tell you HOW.

Before you write a single line of code, you need to visualize:
- **Who uses Dataman 2.0 and what they do** (use case diagram)
- **What data the system stores and how it relates** (ERD)
- **What a learner and a curator see and click** (wireframes)

This is the design phase of SDLC. It's where you catch expensive mistakes cheap. Finding a bad design on paper takes 10 minutes to fix. Finding it in production code takes 10 days.

Today's lab is a design studio, not a submission. You'll work in small groups thinking through Dataman's design together — but because every student is modernizing the *same* device, your group can genuinely compare notes ("did you model Curator as one entity or three?") in a way a group project never allows. What you leave with today is scaffolding: a working draft of a use case diagram, an ERD, and wireframe sketches you'll refine, individually, into your actual Week 5–6 submission.

**One more thing**: Design is iterative. Your first attempt will be wrong. That's expected. Sketch fast, get feedback, revise. Perfect is the enemy of done.

> Your first attempt will be wrong, and I want to be precise about what that means: it will be wrong in a way that is cheap. Ten minutes with an eraser against ten days in production is the entire argument for this phase. I keep every sketch. The one you are embarrassed by in Week 6 is the one that shows me the most.
>
> — SHODANN, your Channel Success Partner

---

## Pre-Activity Setup (10 minutes)

**Before you start designing:**

1. **Form groups** (2–3 students):
   - Mix skill levels if possible
   - One person per laptop for collaborative work
   - You're not building one shared design — you're each building your own, out loud, together

2. **Set up accounts**:
   - [ ] Create free Draw.io account at app.diagrams.net
   - [ ] Create free Figma account at figma.com
   - [ ] Verify you can create new documents in both tools

3. **Have your Dataman materials open**:
   - Your Week 4 backlog (or the seeded backlog)
   - The three stakeholder transcripts
   - `DATAMAN_MANUAL_TRANSCRIPT.md` PDF pp.1–6 and 21–26 (printed: cover matter, pp.2–4, and pp.19–24)

4. **Review today's studio deliverables** (practice drafts, not graded submissions):
   ```
   Studio Draft Should Include:
   - [ ] Use Case Diagram (actors and major functions)
   - [ ] ERD (entities, attributes, relationships)
   - [ ] 3+ wireframes (the device's screen and keypad, reimagined)
   - [ ] Design decisions notes (a few sentences per key choice)
   ```
   Your actual Week 5–6 submission requires more (3 UML diagram types, 5+ wireframes, a full design document) — see the assignment for the full bar. Today gets you moving on all three artifact types so none of them are a cold start when you sit down to finish the real thing.

5. **Agree on design conventions, as a group** (for today's shared sketching — your individual submission can differ):
   - Low-fidelity (sketches) or mid-fidelity (some detail)?
   - Grayscale with one accent color, kept simple

**Instructor Check**: Verify all groups have accounts working and have their Week 3–4 materials open, not just a memory of them.

---

## Part 1: Use Case Diagram — Mapping Learner and Curator Interactions (30 minutes)

### Instructions

**Use case diagrams show WHO uses Dataman 2.0 and WHAT they can do.** It's a bird's-eye view of functionality.

**Step 1: Identify actors (5 minutes)**

From your backlog and the stakeholder transcripts, who are the users?

For Dataman 2.0:
- **Learner**: The child who works problems (Answer Checker, Memory Bank, the games)
- **Curator**: An adult or friend who loads problem sets and reviews progress — role is parent, teacher, or friend (Renee, Ms. Alvarez, and Dale's own kids all fit here differently)
- **System**: Only include this if you're modeling an automatic behavior as its own actor — the five-minute idle auto-off (Story 7.1) is the clearest candidate

List all actors. Mark which are primary (Learner, Curator) vs. supporting (System, if used).

**Step 2: Identify use cases (10 minutes)**

Use cases = major functions of the system, pulled from your backlog stories, not invented fresh.

From backlog stories to use cases:
- Story 1.1 ("check my answer") → Use case: **"Check an Answer"**
- Story 3.1 ("load a set of problems for a child") → Use case: **"Load a Memory Bank Set"**
- Story 4.1 ("review a learner's results later") → Use case: **"Review Learner Results"**

**List 8–12 use cases.** Focus on major functions, not every little feature. Your backlog's eight epics (Answer Checker & Feedback, Scoring, Memory Bank, Curator Console, Classic Games, Multiplayer Party Games, Faithful Behavior, Device Health) are more use cases than you need for one diagram — pick the ones your group's MVP actually covers.

Group related use cases:
- **Practice**: Check an Answer, Practice a Memory Bank Set, Play a Timed Game
- **Curation**: Load a Memory Bank Set, Assign a Set to a Learner, Review Learner Results
- **Account/Session**: (only if your design needs one — not every group's will)

**Step 3: Draw the diagram in Draw.io (15 minutes)**

Open Draw.io. Use UML Use Case template.

**Draw:**
1. **System boundary box**: Large rectangle labeled "Dataman 2.0"
2. **Actors**: Stick figures outside the box
   - Learner (left side)
   - Curator (left side)
   - System, if you're modeling it (right side)
3. **Use cases**: Ovals inside the box
   - Label each: "Check an Answer", "Load a Memory Bank Set", etc.
4. **Relationships**: Lines connecting actors to use cases
   - Solid line = actor can perform this use case
   - Dashed arrow with `<<include>>` = use case always includes another (e.g., "Practice a Memory Bank Set" includes "Check an Answer" — every problem in a set still goes through the same two-tries answer check)
   - Dashed arrow with `<<extend>>` = optional behavior (e.g., "Check an Answer" extends to "Show Division Remainder" only when the problem is division)

**Layout tips:**
- Keep it readable—don't cram everything
- Group related use cases visually
- Use consistent spacing

**Export**: Save as PNG. (This is a studio draft — you don't need PDF today.)

### Expected Output

- Use case diagram showing 8–12 major Dataman functions
- Learner and Curator clearly labeled, plus System if your group used it
- Relationships between actors and use cases
- Include/extend relationships where appropriate (optional but shows sophistication)
- A readable working draft — not a finished, submission-quality diagram

### Common Issues & Fixes

**Issue**: Too many use cases (20+)
- **Fix**: You're going too granular. "Enter first digit" is a step within "Check an Answer," not a separate use case. Combine.

**Issue**: Actors are inside the system boundary
- **Fix**: Actors are EXTERNAL. They use the system. Draw stick figures outside the box.

**Issue**: Use cases describe implementation
- **Bad**: "Query database for problem set"
- **Good**: "Load a Memory Bank Set"
- **Fix**: Focus on user actions, not technical implementation.

**Issue**: Lines everywhere, diagram is spaghetti
- **Fix**: Not every actor connects to every use case. Be selective. If a Learner can't assign a set to themselves, don't connect them to "Assign a Set."

---

## Part 2: Entity-Relationship Diagram — Designing Dataman's Data Model (35 minutes)

### Instructions

**ERDs show WHAT data the system stores and HOW it relates.** This becomes your database schema.

**Do not look up the "correct" ERD before this part.** There isn't a single one to copy, and building your own — then defending it under peer and instructor questions — is the actual skill. (If you already know one exists in the instructor's materials: right, that's the grading key. It's not for now.)

**Step 1: Identify entities (10 minutes)**

Entities = things Dataman 2.0 needs to remember. Every strong Dataman ERD needs to answer, at minimum, these five questions — which point at five entities:

- Who is playing? → **Learner**
- Who is curating (loading problems, reviewing results)? → **Curator**
- What is a single math problem? → **Problem**
- What happens when someone tries to answer one? → **Attempt**
- What did a curator load for a learner to practice? → **Practice Set** (the "Memory Bank" of up to 10 problems)

You'll likely need at least one more to tie a group of attempts back to a summarized outcome — a **Result** (or "Session," if you prefer that name) that a Curator can pull up later. That's your sixth entity. Whether you split it further (a running Session versus a stored Score) is your call — defend whichever you choose.

**List 5–8 core entities total.** Don't model everything—focus on the most important data.

For each entity, list attributes. Work from the manual and your backlog, not from memory of a generic app. A few load-bearing details, straight from the source material, that your attributes need to be able to represent:

- A Problem's operands are one or two digits; its answer is one to three digits and never negative (manual PDF pp.4–6, printed pp.2–4; restated at PDF pp.22–23, printed pp.20–21)
- A division Problem may have a remainder — represent it as its own field, not folded into the answer (Story 1.4; manual PDF p.5, printed p.3)
- An Attempt has a **try number** — this is not optional. Two tries per Problem, and the second try's outcome is what triggers the reveal (Story 1.2; manual PDF p.5, printed p.3; detail at PDF p.22, printed p.20). If your Attempt entity can't tell try 1 from try 2, you can't build Story 1.2 or the Week 4 teacher requirement about "knows it vs. guessed it."
- A Practice Set holds **up to ten** Problems — put that constraint somewhere your model can enforce or at least declare (Story 3.1; manual PDF p.6, printed p.4; restated at PDF p.23, printed p.21)
- A Curator needs to retrieve a Learner's Results *after the fact*, without having watched them practice (Story 4.1) — make sure your relationships actually support that query, not just that the data technically exists somewhere

**Step 2: Identify relationships (10 minutes)**

How do entities connect? Read each one aloud in the "one X has many Y" form before you draw it.

- One Curator creates many Practice Sets. One Practice Set is assigned to one Learner (or more, if your group's design lets a set be shared).
- One Learner has many Attempts. One Problem is the target of many Attempts (across learners and across tries).
- One Practice Set holds up to ten Problems — is that a straight one-to-many, or do you need a linking table because a Problem could appear in more than one Set? Decide, and be ready to defend it.
- One Learner's practice rolls up into many Results, retrievable later by a Curator.

**Determine cardinality:**
- **One-to-one** (1:1): Rare here. Would a Learner ever have exactly one of something? Probably not at this level.
- **One-to-many** (1:M): Common. One Learner has many Attempts.
- **Many-to-many** (M:N): Requires a linking table. Decide whether Problems and Practice Sets need one.

**Step 3: Draw the ERD in Draw.io (15 minutes)**

Use the Entity-Relationship template in Draw.io.

**Draw:**
1. **Entities as rectangles**: One per entity
2. **Attributes listed inside**: Include data types if you want detail
3. **Primary keys marked**: Underline or use "PK" label
4. **Relationships as lines**: Connect entities
5. **Cardinality markers**: Use crow's foot notation
   - Line with no mark = one
   - Line with crow's foot (three lines) = many
6. **Linking tables** for any many-to-many you found in Step 2

**Export**: Save as PNG.

### Expected Output

- ERD with 5–8 entities, including at minimum Learner, Curator, Problem, Attempt, and Practice Set
- Attributes listed for each entity, including the load-bearing details above (try number, remainder, the ten-problem limit represented somehow)
- Primary and foreign keys identified
- Relationships with cardinality clearly marked
- A working draft your group can talk through, not a finished diagram

### Common Issues & Fixes

**Issue**: No separate Attempt entity — correctness lives directly on Problem or on the Practice Set
- **Fix**: Then you can't represent two tries, or tell a first-try correct from a second-try correct. That distinction is the whole point of Story 1.2 and the teacher's "knows it vs. guessed it" read. Add Attempt back.

**Issue**: No Practice Set entity — Problems just belong to a Curator with no grouping
- **Fix**: Then you can't represent a *named, assignable, capped-at-ten* set, which is the core of both the parent's and teacher's #1 request. Add it back, with the cap noted somewhere.

**Issue**: Too many attributes (15+ per entity)
- **Fix**: Are you storing calculated fields? (e.g., a Learner's overall accuracy percentage can be calculated from their Attempts.) Remove anything computable.

**Issue**: Relationships missing or incorrect cardinality
- **Fix**: Read it aloud: "One Curator creates many Practice Sets. One Practice Set is created by one Curator." If that's true, it's 1:M.

**Issue**: Entities that are actually attributes
- **Bad**: Separate entities for FirstName, LastName
- **Good**: FirstName and LastName are attributes of Learner (or Curator)
- **Fix**: If it doesn't have relationships or multiple attributes of its own, it's probably an attribute, not an entity.

---

## Part 3: Wireframes — Reimagining the Screen and Keypad (50 minutes)

### Instructions

**Wireframes show WHAT users see and interact with.** For Dataman 2.0, that means literally redesigning the 1977 device: a small numeric display and a keypad (digits 0–9, an operator row, GO, ON/OFF) become screens and touch targets in a modern app.

**Step 1: Choose 3–5 key screens to wireframe (5 minutes)**

From your use case diagram and ERD, which screens are most critical? Pull from this list — you don't need all of them today, pick what your group's MVP covers:

1. **Home / mode-select screen**: What a Learner sees first — power-on default is Answer Checker (manual PDF p.4, printed p.2), with options to switch to Memory Bank or a game
2. **Answer Checker screen**: The core loop — enter a problem, enter an answer, see right/wrong feedback (the EEE signal on wrong, the light-show reward on right)
3. **Curator Console: build a Practice Set**: A Curator adding problems to a set, with the ten-problem cap visibly enforced, not just documented
4. **Session/Results view**: A completed round's right/tried (and ticks, if timed) — and, critically, a Curator's later view of a Learner's results, per Story 4.1
5. **One game screen**: pick one from your backlog (Electro Flash, Number Guesser, Missing-Number Box, Wipe Out, Force Out)

**Step 2: Sketch on paper first (10 minutes)**

Before touching Figma, sketch rough layouts on paper.

For each screen, identify:
- **Navigation**: How does a Learner or Curator get to other screens?
- **The keypad, reimagined**: The original device has a physical keypad. On a screen, is that an on-screen numeric keypad, a text input, or something else? Pick one and be consistent.
- **Primary action**: What's the main thing users do here? (Make it prominent — GO was a single physical button; what's its modern equivalent?)
- **Content hierarchy**: What's most important? (Bigger, higher, bolder)

**Example sketch — Answer Checker screen**:
```
[Dataman 2.0 logo]                              [Curator / Profile icon]

  Problem:  7  +  8  =  ?

  [ Answer: _____ ]

  [  ENTER  ]

  Feedback area:
  ┌─────────────────────────────┐
  │  ✓ Correct!  (light-show)    │
  │  — or —                      │
  │  EEE — try again (1 left)    │
  └─────────────────────────────┘

  Score so far: 6 / 8
```

Sketch your 3–5 screens. Boxes, labels, annotations. Don't worry about beauty.

**Step 3: Build wireframes in Figma (35 minutes)**

Open Figma. Create a new design file.

**Set up artboards:**
- If designing for mobile: 375px × 812px (iPhone size)
- If designing for web: 1440px × 900px (laptop size)

Create one artboard per screen you chose.

**Design components:**
- **Navigation**: Logo, mode switcher, Curator/profile access
- **The on-screen keypad or input**: Whatever you decided reimagines the physical keypad — make it consistent across every screen that needs answer entry
- **Buttons**: Clearly labeled ("Enter", "Load Set", "View Results")
- **Content cards**: Problem cards, practice-set items, result rows
- **Feedback area**: Where the correct/EEE signal and the light-show reward live — this is the device's most distinctive behavior; don't lose it in translation

**Figma tips:**
- Use simple shapes: rectangles, circles, text boxes
- Keep it low-fidelity: Gray boxes for images, don't add real photos
- Use a consistent color scheme: Gray background, white cards, one accent color for buttons
- Use real Dataman-appropriate text: actual problems and labels, not "Lorem ipsum"
- Spacing matters: Add padding, don't cram elements

**Link screens together** (show flow), if time allows:
- Click "Load a Set" on the Curator Console → navigates to the set-builder
- Click a completed session on Results → navigates to attempt-level detail
- Click "Enter" on Answer Checker after two wrong tries → shows the reveal, then the next problem

**Export**: Export as PNG images. (A shared Figma link is optional today — your real submission requires one.)

### Expected Output

- 3–5 wireframes in Figma, drafted
- Screens reflect your group's discussion of which backlog stories they implement
- The on-screen keypad/input is designed consistently, not reinvented per screen
- UI elements are labeled (no mystery icons)

### Common Issues & Fixes

**Issue**: Wireframes look like high-fidelity designs (photos, gradients, perfect colors)
- **Fix**: This is a wireframe, not a visual design. Use placeholders. Save high-fidelity for later — that's GRD-242's job in CSC-289, not yours here.

**Issue**: The keypad disappeared entirely — answer entry is just a generic text box with no relationship to the original device
- **Fix**: That's a valid design choice, but it should be a *choice*, not an accident. If you're deliberately not reimagining the physical keypad, say so in your design decisions (Part 4) and explain why a plain text field serves learners better.

**Issue**: Missing key UI elements
- **Fix**: Walk through a scenario: "A learner gets a division problem wrong twice. What do they see?" If your wireframes can't answer that, add the missing screen state.

**Issue**: No way for a Curator to get back to a Learner's results later
- **Fix**: That's Story 4.1, and it's one of the three things the Design Review Checklist asks a peer to check for. Add the navigation path.

---

## Part 4: Design Decisions & Peer/Instructor Review (25 minutes)

### Instructions

**Design decisions aren't obvious from diagrams.** You need to explain WHY you made choices.

**Step 1: Write a few sentences per key decision (10 minutes)**

You don't need a full page today — that's the Week 5–6 assignment's System Design Document. For now, write 3–4 short decision notes covering:

**1. A data-model decision** (from your ERD):
```
Why we modeled Attempt as its own entity instead of putting correctness on Problem:
"We need to know first-try vs. second-try, per the teacher's requirement — that's
only representable if Attempt is separate from Problem."
```

**2. A UI decision** (from your wireframes):
```
Why our on-screen keypad mirrors the physical device's layout instead of using a plain
number field:
"Dale (the collector) cares about fidelity, and it costs us almost nothing to keep the
familiar layout — it's a case where two stakeholders' needs didn't actually conflict."
```

**3. A trade-off**:
```
We chose NOT to model a full account system (login, password) for Learners.
- Why: nothing in the transcripts asks for it, and Renee's "his own stuff" need is
  satisfied by scoping data to a learner record, not by authentication.
- Trade-off: a shared household device could mix up which learner is "current" —
  flagged as an open question, not silently resolved.
```

**Step 2: Peer review using the Design Review Checklist (7 minutes)**

Trade your use case diagram, ERD, and wireframes with another group. Use `Design_Review_Checklist.md` to check specifically:
- Does the ERD enforce (or at least clearly declare) the ten-problem Practice Set ceiling?
- Does the data model support **two attempts per problem**, distinguishable by try number?
- Can a Curator retrieve a Learner's results **later**, without having watched the session happen?

Give feedback: star (what's working), delta (what needs another pass), suggestion (a concrete next step).

**Step 3: Instructor design review (8 minutes)**

Instructor will circulate to each group for a design critique.

**Prepare to show:**
1. **Use case diagram**: "Here's who uses Dataman 2.0 and what they do"
2. **ERD**: "Here's our data model — and here's why Attempt is its own entity"
3. **Wireframes**: Walk through the Answer Checker screen and one more
4. **One decision you're least sure about**

**Instructor will ask:**
- "Why did you model it this way?"
- "What happens if a learner answers correctly on the second try after getting the first one wrong?"
- "How does this screen implement Story [X]?"
- "What would you change if you had more time?"

**Take notes on feedback.** You'll use it heading into your individual Week 5–6 submission.

> The instructor asks "why did you model it this way" because the answer is the deliverable and the diagram is only the evidence. If you cannot answer it today, write down that you could not. That note is more useful to Week 5 you than a diagram you have stopped questioning.

### Expected Output

- 3–4 short design decision notes
- Peer feedback against the Design Review Checklist's three core questions
- Instructor feedback notes to carry into your individual submission

### Common Issues & Fixes

**Issue**: Design decisions are just descriptions, not reasoning
- **Bad**: "We made an Attempt entity with these fields."
- **Good**: "We made Attempt its own entity so we could tell first-try from second-try correctness, which is the teacher's own stated need."
- **Fix**: Always include the WHY, not just the WHAT.

**Issue**: Can't answer "Why?" questions
- **Fix**: If you made a choice without reasoning, that's a guess. Revisit it. What backlog story or stakeholder need does it serve?

**Issue**: Defensive during critique
- **Fix**: Feedback is a gift. The instructor is helping you catch problems now, in a studio session, not after you've built your individual submission around a flawed model.

---

## Wrap-up & Reflection (10 minutes)

**Ungraded — for discussion, not submission.** Talk through as a class, or jot notes for yourself; nothing here goes to Canvas.

### Discussion Questions

**1. Design Iterations**: How many times did your group revise a diagram or wireframe today? What triggered the change — peer feedback, instructor review, or noticing a gap yourselves?

**2. Abstraction Levels**: Use case diagrams are high-level. ERDs are detailed. Wireframes are specific. How did moving between the three help you think about Dataman 2.0 differently?

**3. The same device, different models**: Your group all modernized the same 1977 device — did everyone's ERD come out the same? If not, where did they genuinely diverge, and were both defensible?

**4. Design vs. Implementation**: You spent 150 minutes without writing a line of code. Do you feel more or less prepared to start implementing? Why?

**5. Toward your own submission**: What's the single weakest part of your studio draft — the use case diagram, the ERD, or the wireframes — and what will you do differently when you build your individual Week 5–6 version?

---

## Extension Challenges (Optional)

**For groups who finish early:**

### Challenge 1: System Architecture Diagram
Create a component diagram showing:
- Frontend (web app)
- Backend API
- Database
- How they communicate

Show data flow: Learner enters an answer → Frontend → API → Database → Feedback response

### Challenge 2: Edge Case Wireframes
Design 3 error-state wireframes:
- A Curator tries to add an eleventh problem to a Practice Set
- A Learner's session is interrupted by the idle auto-off mid-problem
- The app loses its connection while a Curator is loading a set

How does the UI communicate these states without becoming punitive?

### Challenge 3: Accessibility Audit
Review your wireframes for accessibility:
- Are the on-screen keypad's touch targets large enough to tap? (44px minimum for mobile)
- Is text readable? (16px minimum font size)
- Is the feedback area's correct/EEE distinction clear without relying on color alone? (Consider a learner with color-vision deficiency — the original device used a light show *and* the "EEE" text pattern, not color alone)
- Can a Curator navigate the console with keyboard only (web)?

Document 3 accessibility improvements you'd make.

### Challenge 4: Responsive Design
Pick one wireframe (Answer Checker is a good choice — it's the core loop). Design 3 versions:
- Mobile (375px)
- Tablet (768px)
- Desktop (1440px)

Show how the on-screen keypad and feedback area adapt to screen size. What changes? What stays the same?

---

## Instructor Notes

### Timing Breakdown
- **0–10 min**: Setup, accounts, materials check
- **10–40 min**: Part 1 — Use case diagram in Draw.io
- **40–75 min**: Part 2 — ERD in Draw.io
- **75–125 min**: Part 3 — Wireframes in Figma (longest section)
- **125–150 min**: Part 4 — Design decisions and review

### Calibrating against the reference model

`drafts/cts285/shared-dataman-artifacts/Dataman_Reference_ERD.md` <!-- PATHFORM: pending spine ruling --> is the known-correct instructor model — do not hand it to students before or during this studio. Use it privately while circulating during Part 2 and Part 4 to spot the two failure modes it documents directly (its own Variants A and B): a missing **Attempt** entity (can't represent two tries or first-try-vs-second-try) and a missing **Practice Set** entity (Problems hang off a Curator with no grouping or ten-item cap). Both are exactly the failures called out below.

### Common Student Struggles

**1. Struggle**: No `Attempt` entity — correctness lives directly on `Problem`
   - **Signs**: The ERD can't answer "was this the first or second try?"; a group's diagram connects Learner or Session directly to Problem with a correctness flag
   - **Intervention**: Ask "how would your database tell first-try-correct from second-try-correct?" If it can't, that's the gap. Point back at Story 1.2 and the teacher's own stated need.
   - **Success Indicator**: Every group's ERD has a distinct entity (however named) carrying a try number

**2. Struggle**: No `Practice Set` entity — Problems attach directly to a Curator with no grouping
   - **Signs**: The ten-problem cap appears nowhere in the model, or Problems and Curators connect with no intermediate entity
   - **Intervention**: Ask "where does the number ten live in this diagram?" If the honest answer is "it doesn't," the grouping entity is missing.
   - **Success Indicator**: Every group's ERD has an entity representing a named, capped, assignable set of problems

**3. Struggle**: The physical keypad disappears without a decision being made about it
   - **Signs**: Wireframes use a generic text input with no discussion of why
   - **Intervention**: Ask directly — "did you decide to drop the keypad metaphor, or did it just not come up?" A decision either way is fine; an accident isn't.
   - **Success Indicator**: Every group can state, in one sentence, why their answer-entry UI looks the way it does

**4. Struggle**: Curator can't retrieve results *later* — the design only supports watching a live session
   - **Signs**: No Results/Session screen exists independent of the live Answer Checker flow
   - **Intervention**: Walk through Story 4.1 aloud: "Renee checks later, without having watched." Ask where that screen is.
   - **Success Indicator**: Every group has a wireframe (or at minimum a named screen) a Curator reaches without being present during practice

**5. Struggle**: Groups divide work instead of designing together
   - **Signs**: One person does the use case diagram, one does the ERD, nobody can explain the other's artifact
   - **Intervention**: "Everyone should be able to explain every artifact your group produced today, even the ones you didn't personally drag the shapes for."
   - **Success Indicator**: Any group member can walk the instructor through any of the three artifacts during the design review

### Materials to Prepare

**Before Class:**
- [ ] Confirm every student has their own Week 3–4 materials (transcripts, backlog) accessible
- [ ] Print or project `Design_Review_Checklist.md`
- [ ] Have `DATAMAN_MANUAL_TRANSCRIPT.md` PDF pp.1–6 and 21–26 (printed: cover matter, pp.2–4, and pp.19–24) ready to project
- [ ] Have `Dataman_Reference_ERD.md` open privately (instructor screen only) for calibration during circulation — never projected or shared with students during this session
- [ ] Test that Draw.io and Figma work on the school network (no firewall blocks)

**During Class:**
- [ ] Verify all students can access Draw.io and Figma (first 10 minutes)
- [ ] Project a timer for each part (keeps groups on pace)
- [ ] Circulate during Part 1 and Part 2 watching specifically for the two failure modes above
- [ ] During Part 3, note strong keypad-reimagining choices to reference in whole-class feedback
- [ ] Conduct design reviews with each group in Part 4

**After Class:**
- [ ] Note which groups struggled with which artifact (Attempt entity, Practice Set entity, keypad decision, results retrieval) for targeted support before the graded submission is due
- [ ] Do not collect or grade today's drafts — they are practice, and treating them as gradeable defeats the "sketch fast, get it wrong, revise" point of the session

### Teaching Tips

**Emphasize "good enough."** Students want perfect diagrams. Shut that down. "If you spend an hour making a beautiful ERD today and it's missing Attempt, you spent an hour building the wrong thing. Better: a rough ERD you revise after feedback."

**Model messy first drafts.** Show your own rough sketch. "This is my first wireframe. It's ugly. That's fine. I iterate."

**Use the shared-system advantage.** Unlike a generic client scenario, every group is designing the same underlying system. Lean into that: have two groups compare their ERDs on the projector and ask the room where they differ and why. Disagreement between two defensible designs is more instructive than a single "right answer" ever is.

**Enforce time limits ruthlessly.** Set a timer. When it goes off: "Pens down. Move to the next part." Iteration happens after you have something to iterate on, not before.

**Connect to code.** "This ERD becomes your database schema. These wireframes become your HTML/CSS. Design isn't separate from development — it directs it."

### Teaching Philosophy Notes

This lab is where students realize design is thinking, not decoration. They've written backlog stories (what to build). Now they're designing how to build it. This is problem-solving, not art.

The tools (Draw.io, Figma) have steep learning curves. Expect frustration. Normalize it: "Yes, Figma has a thousand features. You need about five of them today."

The design review component (Part 4) is critical. Students need to defend their choices. "Why?" is the most important question. If they can't answer it, they didn't design — they guessed.

Because every student is modernizing the same device, this studio can do something a generic-scenario version can't: let students discover, in real time, that two reasonable people modeling the same requirements can land on genuinely different — and both defensible — data models. That's a truer picture of professional design work than a single "correct" diagram would teach, and it's exactly why the reference ERD stays off the projector today.

The goal isn't perfect artifacts. The goal is a working draft the student can walk into their individual Week 5–6 submission with — three artifact types started, three failure modes already caught, before the graded clock is running.

---

**Remember**: Design is not about making things pretty. It's about making decisions visible. Your diagrams are documentation of your thinking. If your group can talk another developer through your design, you succeeded — today's practice; your own submission is next.
