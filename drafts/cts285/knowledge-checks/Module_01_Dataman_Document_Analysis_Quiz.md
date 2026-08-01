<!--
  26FA NEW — task 1.2 (B-004), 2026-08-01
  The Week-1 Dataman document-analysis quiz. Supersedes the generic Module 1 knowledge check
  per CTS285_Canonical_Points_Table.md (M1's generic KC is retired; this is its replacement).
  Salvaged from sources/uv-285/knowledge-checks/Module_01_Knowledge_Check.md: the analyst-instinct
  items (source Q3 analysis-phase, Q5 systems thinking, Q6 clarify-before-designing) re-pointed at
  the manual as items 9, 11, and 12. The generic SDLC/Agile items were not salvaged — they are
  assessed by the Week 1 assignment and by the M2-M6 checks.
  Item spec: 10-12 autograded items, 2 attempts, no true/false, no multi-answer, no free text.
  SOURCE RANGE: every item is answerable from DATAMAN_MANUAL_TRANSCRIPT.md PDF pp. 1-6 and 21-26.
  Pages 7-18 are untranscribed (issue #18) and no item draws on them.
  Naming: "Dataman" in student-facing prose per NAMING_CANON; the manual's own "DataMan" spelling
  is preserved only inside direct quotations of the 1977 text.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 1 Knowledge Check: Dataman Manual Document Analysis

**Purpose**: Assess whether you can read a primary source document as an analyst — separating narrative from specification, identifying actors and user roles, and locating hard requirements, failure states, and gaps
**Format**: 12 multiple choice questions
**Attempts**: 2
**Grading**: Auto-graded, feedback provided
**Points**: **15 pts (2.0% of 750), graded**
**Time Estimate**: 20–25 minutes

**Open document.** Keep `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling --> open while you work. Every answer is in it. This is a document-analysis quiz, not a memory quiz.

---

## Actors and User Roles (33%)

### Question 1

The manual names AntiMath as "an evil wizard from a dark star who has the mysterious power to cloud the minds of his victims." In a requirements document for Dataman 2.0, how should AntiMath be classified?

A) A primary actor, because he interacts with the system throughout the manual
B) Narrative motivation — not an actor, because he never interacts with the system
C) An external system, because he originates from a different planet
D) A stakeholder, because he has an interest in the project's outcome

**Correct Answer**: B
**Explanation**: AntiMath explains *why* the product exists — he is the problem the device was built to solve. He never presses a key, never receives output, and never constrains a behavior. Analysts call this motivation or problem context, not an actor. The test is mechanical: does this entity exchange anything with the system? Commander NumberFun fails the same test. Source documents routinely mix motivation with specification, and separating them is the first job of the read.

### Question 2

The manual states: "You, one of your friends, or Mom or Dad can put up to ten problems in my memory bank." What does this sentence establish about user roles?

A) That only parents may configure the device
B) That there are two distinct roles — someone who loads problems and someone who practices them — and one person may hold both
C) That the device supports exactly three users
D) That friends and parents have different permission levels

**Correct Answer**: B
**Explanation**: This is the most important role sentence in the manual. Loading problems and answering problems are separate activities, and the manual lists several people who might do the loading — including the child themself ("You"). That means the roles are *functional*, not *identity-based*: the same human can be both. In Dataman 2.0 this distinction drives real design decisions — does the loader need an account? A separate screen? The manual never assigns permission levels, so option D would be an invention.

### Question 3

In an actor list for Dataman 2.0, where does Dataman itself belong?

A) As a primary actor, since the manual is narrated in its voice
B) As a secondary actor, since it responds to user input
C) As the system under design — not an actor at all
D) As an external system, since it was built by another company

**Correct Answer**: C
**Explanation**: The manual is written in Dataman's first-person voice, which makes this genuinely easy to get wrong — narration invites you to treat the narrator as a participant. But the thing you are specifying is never an actor in its own specification. Actors are the entities *outside* the boundary that interact across it. Drawing that boundary correctly is what makes an actor list useful; drawing it wrong produces a diagram where the system is its own user.

### Question 4

The "Hints for Parents and Teachers" section says peer activities can be built where "children take turns *playing teacher*." For an analyst, what is the significance of this line?

A) It is marketing copy with no requirements value
B) It confirms that the loader role is not restricted to adults, which widens who the configuration interface must serve
C) It requires that the system enforce turn-taking
D) It means teachers are the primary users

**Correct Answer**: B
**Explanation**: The line matters because it tells you the person configuring problems may be a child. That is a usability and interface constraint: a loading screen designed only for adults would exclude a use the source explicitly describes. Note what the line does *not* do — it never says the system enforces turns, so option C reads a requirement into text that only describes classroom practice. Distinguishing "the document describes people doing this" from "the system must do this" is a constant analyst judgment.

---

## Hard Requirements and Limits (42%)

### Question 5

What limit does the manual place on the Memory Bank?

A) Ten problems
B) Twenty problems
C) One problem per session
D) The manual does not state a limit

**Correct Answer**: A
**Explanation**: Stated twice — "up to ten problems in my memory bank" on printed page 4, and "up to 10 problems into DataMan's memory" on printed page 21. Repetition across two sections is a useful signal: the writer considered it important enough to restate, and you can cite either. This is a hard constraint, meaning Dataman 2.0 must either honor it or make a documented, deliberate decision to change it. Silently changing a stated limit is how modernization projects lose the behavior users relied on.

### Question 6

According to the manual, what happens when a learner enters a wrong answer twice in a row?

A) The device turns off
B) The device displays EEE and moves to the next problem
C) The device displays EEE and then shows the correct answer
D) The device gives a third try

**Correct Answer**: C
**Explanation**: "If your second try is still wrong, I'll flash EEE again, and show you the right answer!" — printed page 3, restated on printed page 20. Two tries then reveal is a complete behavioral rule: a trigger, a count, and an outcome. Rules with this shape convert almost directly into acceptance criteria, which is why finding them is worth more than summarizing the section they live in.

### Question 7

The "Hints for Parents and Teachers" section notes that "DataMan will *not* display an incorrect answer." What kind of requirement is this?

A) A performance requirement
B) A negative requirement — a constraint on what the system must never do
C) A user interface preference
D) An error message specification

**Correct Answer**: B
**Explanation**: Most requirements say what a system does; this one says what it must never do. Negative requirements are easy to miss because they describe an absence, and expensive to miss because nothing in testing will notice they were dropped. Here the reasoning is pedagogical — showing a wrong answer risks teaching it. An analyst rebuilding Dataman would flag this as a rule that survives the rewrite, and would write a test that asserts the wrong answer never renders.

### Question 8

The manual describes attempting 7 − 8: "The display would show 7 −. It would not accept the 8." What does this establish?

A) That the device has a display bug
B) That subtraction is unsupported
C) That the device refuses input which would produce a negative result, rather than computing and rejecting it
D) That the device only accepts single-digit subtraction

**Correct Answer**: C
**Explanation**: The distinction is where the validation happens. Dataman refuses the keystroke — the 8 is never accepted — instead of accepting the problem and reporting an error afterward. That is input-time validation, and it is a design decision with visible consequences for how Dataman 2.0 should behave: block the entry, or accept and explain? The manual answers it. Reading closely enough to notice *when* a rule fires, not just *that* it fires, is the difference between a requirement you can build from and a paraphrase.

### Question 9

The manual states that Dataman accepts problems with one or two digit numbers, while answers may be one, two, or three digits. Why would an analyst record both numbers rather than just noting "there are digit limits"?

A) Because the two limits differ, and a single summary would lose the difference that governs input validation
B) Because three-digit problems are supported in later models
C) Because the manual is inconsistent and one of the numbers must be wrong
D) Because digit limits determine the physical size of the display

**Correct Answer**: A
**Explanation**: The asymmetry is the information. Inputs are constrained more tightly than outputs, which follows directly from arithmetic — two two-digit operands can produce a three-digit result. Compressing this to "there are digit limits" throws away exactly the detail a developer needs to write the validator. This is the general habit the analyst read is training: preserve the specific number, because summaries are where requirements quietly die.

### Question 10

How does the manual say division answers with remainders are handled?

A) The learner enters the whole number and the remainder together
B) The learner enters the whole number part; the device indicates a remainder with "r" and then supplies it
C) Division problems with remainders are not offered
D) The device rounds to the nearest whole number

**Correct Answer**: B
**Explanation**: "You just put in the whole number part of the answer — I'll put an 'r' in my face mask to let you know that the answer has a remainder, and then I'll show you what it is." This divides the work between user and system in a specific way, and that division is the requirement. Note that option C is true of a *different* feature — Electro Flash skips remainder problems in division tables — which is a good reminder that a rule in one mode does not automatically hold in another.

---

## Analyst Judgment (25%)

### Question 11

The manual says Dataman's timer measures in "ticks," and that "the actual speed of his clock may vary depending on how fresh the battery is, room temperature, etc." Your client wants learners to compete on time across different devices. What is the correct analyst response?

A) Accept the requirement — the manual already supports timing
B) Reject the requirement — the 1977 device cannot do it
C) Flag it: the source defines time in a unit that is explicitly not consistent between devices, so cross-device comparison needs a definition the manual does not provide
D) Estimate the average tick length and use that

**Correct Answer**: C
**Explanation**: The manual is honest that a tick is not a stable unit — it varies with battery and temperature. That is fine for one child racing themself and meaningless for comparing two learners on two devices. The analyst's job is neither to accept nor refuse, but to surface the conflict and take it back to the client: what does "fastest" mean here, and against what clock? Options A and B both decide something that is not yours to decide. Requirements that are untestable as written are not defects in you for failing to build them.

### Question 12

You have read the manual once and can describe every feature. Before writing user stories, what should you do first?

A) Begin designing the interface, since the features are now known
B) Estimate how long the rebuild will take
C) Identify what the manual does not say, and list the questions those gaps raise
D) Choose the framework you will build in

**Correct Answer**: C
**Explanation**: Knowing every feature is not the same as knowing every requirement. The manual never states who owns stored problems, whether a score persists between sessions, what happens if two learners share a device, or what accessibility any of this needs — and none of those absences announce themselves. Analysis ends when you know what you *don't* know and have written the questions down. Jumping to design or estimation on the strength of a single read is the most common and most expensive Week 1 mistake, because both produce confident artifacts built on an incomplete read.

---

## Scoring Guide

- 90–100%: Strong document-analysis instincts — you are separating narrative from specification reliably
- 80–89%: Good read; revisit the difference between what a document *describes* and what it *requires*
- 70–79%: Adequate; reread printed pages 19–23, where the manual specifies rather than narrates
- Below 70%: Reread the transcript with a note file open, and retake — the second attempt is part of the design

**Two attempts.** The first establishes your baseline. Use what the feedback tells you and read again before the second.

---

## Related Materials

- Source document: `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->
- Week 1 Assignment: Course Setup & the Analyst Read (`analyst-read.md`, Questions 3 and 4)
- Week 2: the seeded Dataman backlog, built from the actors and requirements assessed here
- `phase0/NAMING_CANON.md` <!-- PATHFORM: pending spine ruling --> — Dataman and DataMon are two bases; the 1977 manual is read for both
