<!--
  B-012 (task 2.3) — NEW, 2026-08-07. Module 8, first of two (40 + 40 = 80).
  No Week_15 source exists to retire. FINDING, recorded not fixed: CTS285_Canonical_Points_Table.md
  line 29 says "retire Week_15", but sources/uv-285/assignments/ runs Week_13 -> Week_14 -> Week_16.
  There is nothing at that name to retire, so the instruction is uncheckable - same class as
  lore/findings/F-001 item (b) (CTS285_COURSE_OUTLINE.md marked RETIRE and existing nowhere).
  The points table is NOT edited here; the finding is carried in the ledger and the PR.

  Adapted from the frozen legacy 26SP cluster (read-only):
    26SP_Cross_Discipline_Protocol.md .... the share packet's contents and evidence requirement
    GRD_CreativeBriefs/STYLE_INTENT_DIGEST.md ... voice/tone patterns; "commitment, not compromise"
    GRD_CreativeBriefs/TaskManager/StudyStreamAligned_base.md ... the brief's shape
  Plus Week_05's wireframe rubric rows, recycled as the points table instructs.

  THE DIRECTION INVERTS - master plan section 204. In the protocol the wireframe share is a SPRING
  week 4-5 mid-build sync: dev teams have been building a month and share what EXISTS. At fall
  week 15 the team has built nothing, so the same artifact says what they INTEND. The rationale is
  rewritten, not just re-dated, and it is stronger for it: the protocol's own justification is the
  Design Handoff Disaster, where designers finished brand assets for an app that was never built.
  Moving the share into the fall gives the designer the shape BEFORE they commit.

  UNDERGROUND CONSTRAINT (non-negotiable #3): that incident lives in
  UNDERGROUND_CAPSTONE_SURVIVAL_GUIDE.md. Its failure mode is described here in L2 and the guide is
  pointed at as reading. Its voice is NOT reproduced or rewritten into character.

  GREY, never GRAY (NAMING_CANON) - the instructional-designer / cross-discipline consult tier.

  THE CONSULT IS AN INPUT, NOT A PREREQUISITE. The GRD-242 dependency is a standing human blocker.
  Every rubric row below scores on the canned path alone; see Canned_Brand_Kit.md, built in the
  same change as the scheduled fallback the master plan calls for.

  Points: 40 per the canonical table. The 15/10/15 split is DESCRIPTIVE per ADR-002.
  Andrew's Note is L0 per ADR-012, NEW, flagged in-file for instructor sign-off.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 15 Assignment: Wireframes, the GREY Consult & the Design Brief

## CTS-285: Systems Analysis & Design

**Due**: End of Week 15 (Friday, 11:59 PM)
**Points**: 40 (5.3% of 750)
**Submission**: Team repository link, submitted in Canvas

---

## What You're Learning

**Role: Team Lead.** You have a team, a product, and a validated backlog. This week you hand all three to somebody who does not work the way you do.

**A caution about what you are producing.** You have not built anything. Your wireframes do not report a system — they *propose* one. That feels backwards if you have seen this checkpoint described elsewhere, where a dev team a month into building shares what already exists.

Here is why it moved.

The version where designers work in parallel and hand over assets late has a documented failure mode: **finished brand assets arrive for an application that was never built and could not be built in the time remaining.** Nobody did anything wrong. The designers designed for what they were told, the developers built what they could, and the two descriptions were never checked against each other while there was still time to change either. By the time the mismatch surfaced, the design course had ended.

Sharing the shape *before* anyone commits is the fix. That is what this week is, and it is why the wireframes matter more for being speculative rather than less. A designer who knows in December what your product will be in April can design something you can actually ship.

> You are describing something that does not exist yet, to someone who will hold you to the description. I want to flag the specific discomfort, because it is the useful part: this is the first artifact you have produced all semester that is a promise rather than a report.
>
> Promises are checkable later, which is what makes them worth writing carefully.
>
> — SHODANN, your Channel Success Partner

*Assigned reading: the Design Handoff Disaster account in the capstone survival guide. It is written by people it happened to and is not in the course's register — read it as a field report, not as course material.*

---

## Learning Objectives

1. **Produce** wireframes that communicate intent to a non-developer
2. **State** technical constraints in language a designer can act on
3. **Receive** an outside critique of your product and revise under it
4. **Write** a design brief that commits to one audience
5. **Distinguish** a deliverable request that can be filled from one that cannot

---

## Part 1: The Share Packet (15 points)

Create `share-packet/` in your team repository. Three things go in it.

### A. Wireframes — 5+ core screens

Same standard as Week 5, now for your spring product. **Low fidelity.** Grey boxes and labels. You are communicating structure, not aesthetics, and a polished mock invites a designer to critique your visual choices instead of your product's shape.

Cover at minimum the screens where your **engine's core capability** meets your **skin's domain**:

- the primary create/entry screen
- the main list or dashboard
- one detail view
- one state where something has gone wrong

Use your **Week 14 terminology** on every label. A wireframe that says "Add Task" when your map says *Add Deliverable* has skipped a step.

### B. Feature list with status

Every backlog item marked **building / planned / cut**.

The `cut` column is the one that saves the semester. A designer who knows a feature is cut does not design for it. A designer who assumes it exists will.

### C. Technical constraints

One page, in a designer's language rather than yours.

| State | Because a designer needs to know |
|---|---|
| Primary viewport | Phone and laptop are different products |
| What is fixed by the engine | Your entity structure is not a style choice |
| What you cannot build by April | Honest capacity, not aspiration |
| Where assets appear, and at what size | A logo request without placement cannot be filled |

**Write it for someone who does not read code.** "We're using SQLite" tells them nothing. "The app works offline and syncs later" tells them a great deal.

---

## Part 2: The GREY Consult (10 points)

**GREY** is the cross-discipline consult tier — the design side of the partnership your spring project depends on.

**This part is graded on the exchange, never on who was in the room.** Whether your consult is live with a design student or worked from the prepared kit, the same three things are scored: what you brought, what came back, and what changed.

### If your consult is live

Share the packet. Take notes on what they ask — **especially the questions you cannot answer**, which are the real findings. Get a contact you can reach in the spring.

### If your consult is canned

Work from `drafts/cts285/shared-platform-artifacts/Canned_Brand_Kit.md` <!-- PATHFORM: pending spine ruling -->. It contains a worked brand direction and a set of prepared critiques your instructor will apply to your actual packet. It says plainly that it is prepared rather than personal, because you should not be told otherwise.

### Either way, produce `consult-record.md`

- What you shared, and when
- What came back — questions, critiques, brand direction
- **What changed as a result**, itemized: the note, the revision, the reason
- **One thing you pushed back on, with a reason.** Declining a critique in writing is professional, not rude, and Week 9 already taught you the shape of it.
- Your design-partner contact for the spring, if you have one

A team that receives four notes and changes nothing has produced the same evidence as a team with no consult at all.

---

## Part 3: The Design Brief Draft (15 points)

Create `design-brief.md` — the document a designer actually works from. Your spring team will send a version of this in January.

### Required sections

**Positioning, in one paragraph.** For *(audience)* who *(problem)*, *(product)* is *(category)*. Unlike *(alternative)*, it *(difference)*.

**The audience, as people.** One paragraph describing someone specific enough to disappoint. Not a demographic — a situation.

**Personality.** Three traits, each with a "shows up as" and a "never". The digest's rule: *authentic over performative*. Neither corporate sterility nor forced casualness.

**Terminology.** Attach your Week 14 map. It is the fastest description of what your product *is* that you will ever write, and it is the first thing a designer will push back on.

**Deliverables requested.** Each with **placement, size, and format.** A request a designer cannot fill is not a request.

**Constraints.** Accessibility is not optional: body text at 4.5:1 contrast minimum, and **nothing signalled by colour alone.**

### Commit to one audience

The digest's hardest rule, and the one most teams fail: **commitment, not compromise.**

Many products serve two audiences who want opposite things — the person doing the work and the person overseeing it, the patient and the caregiver, the student and the parent paying for it. **Pick one to lead.** Say the other is secondary and name what they lose.

A brief that serves both speaks to neither, and a designer handed one will either pick for you or produce something bland enough to offend nobody.

---

## Deliverables

- [ ] `share-packet/` — 5+ wireframes, feature list with building/planned/cut, technical constraints
- [ ] `consult-record.md` — what you brought, what came back, what changed, one reasoned pushback
- [ ] `design-brief.md` — positioning, audience, personality, terminology, deliverables with placement, constraints
- [ ] Revisions from the consult reflected in the packet, not only described

---

## Grading Rubric

| Component | Points | What earns them |
|---|---|---|
| **Share packet** | 15 | 5+ low-fidelity wireframes using your own terminology, including one failure state. Feature list marks cuts. Constraints readable by a non-developer. |
| **GREY consult** | 10 | Record shows what was shared, what came back, and **itemized revisions**. One critique declined with a reason. |
| **Design brief** | 15 | Positioning is specific. One audience committed to, with the secondary named. Every deliverable has placement and size. Accessibility constraints stated. |
| **Total** | **40** | |

*The 15/10/15 split describes how the 40 is reasoned about. Only the 40 binds.*

**Nothing in this rubric requires a live designer.** If your consult is canned, every row above is still fully earnable — that is deliberate, and it is why the prepared kit exists.

---

## Common Struggles This Week

### Struggle: Wireframes are too polished

- **Signs**: Colour, real type, spacing decisions. Somebody has opened a design tool.
- **Intervention**: Same as Week 5 and it has not changed. A polished mock invites critique of your visual choices, which are not yours to make this week. Grey boxes get you feedback on *structure*, which is what you actually need.
- **Success indicator**: A designer's first question is about the product, not the colours

### Struggle: Technical constraints written for developers

- **Signs**: Framework names, database choices, deployment targets
- **Intervention**: Read it aloud imagining someone who has never written code. "PostgreSQL with an ORM" is invisible to them. "You can't edit two things at once on this screen" is actionable. Every line should change something a designer would do.
- **Success indicator**: Every constraint implies a design decision

### Struggle: The brief serves two audiences

- **Signs**: "For students *and* parents", "for contractors *and* homeowners"
- **Intervention**: They want opposite things and you know it. Which one opens the app daily? That one leads. Name the other as secondary and say what they give up — that sentence is the deliverable.
- **Success indicator**: The brief names a primary audience and the trade-off is written down

### Struggle: Nothing changed after the consult

- **Signs**: `consult-record.md` describes feedback and the packet is untouched
- **Intervention**: Received-and-ignored produces exactly the evidence of a team that never consulted anyone. Either revise, or write down why you are not — a reasoned decline scores; silence does not.
- **Success indicator**: At least two itemized revisions, and one reasoned decline

### Struggle: Deliverables requested without placement

- **Signs**: "Logo, colour palette, icon set" and nothing else
- **Intervention**: Ask what size the logo is on your smallest screen, and what sits behind it. A designer cannot answer that for you, and if they guess, you get an asset that does not fit.
- **Success indicator**: Every request has placement, size, and format

### Struggle: Treating the canned consult as second best

- **Signs**: Visible disengagement — the record is thin because "it wasn't real feedback"
- **Intervention**: Be straight: the notes are prepared, and every one of them is something a designer would raise. The exercise is *revising under outside critique*, and that works regardless of where the critique came from. What is lost is genuinely lost — a real stranger's read — but the graded work is unchanged, and treating it as pointless costs marks that are fully available.
- **Success indicator**: The record is as detailed as a live team's, and the revisions are real

---

## Looking Ahead

Week 16 is the capstone pitch and the handoff package. By then your team hands off everything CSC-289 Week 1 verifies: a formed team with a working agreement, a chosen engine and skin, a validated backlog, **these wireframes**, **this design brief**, a design-partner contact, and a risk register.

**This week produces two of the remaining four.**

---

## Andrew's Note

<!-- INSTRUCTOR SIGN-OFF NEEDED: NEW note, not carried from any source - no Week_15 exists in the
     frozen mirror to carry one from (see the finding in this file's header). Written L0 per
     ADR-012, no fabricated anecdotes (non-negotiable #5). Keep, rewrite, or cut. -->

The hardest sentence in the design brief is the one where you say who the product is *not* for.

It feels like giving something up, and it is. But a brief that refuses to choose does not stay neutral — it hands the choice to whoever reads it next, and you will not be in the room when they make it.

The other thing worth saying: if your consult this term is the prepared kit rather than a live designer, that is a scheduling reality and not a comment on your work. The notes in it are real notes. Use them the way you would use a person's.

— Andrew
