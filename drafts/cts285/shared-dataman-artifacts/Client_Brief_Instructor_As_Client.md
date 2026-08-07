<!--
  LIVE CLIENT BRIEF — ADR-003 remainder, authored 2026-08-07.
  The second of the two artifacts ADR-003 delegated to tasks 1.3/1.4 and neither shipped.
  Per ADR-003:35 this persona is NEVER written as a canned transcript — it is played live, and this
  brief is what it is played from. Per ADR-003:41 the register is neutral in-world client (L2) and
  NO new named persona is coined (bible §5 lexicon lock).
  DESIGNED TO MOTIVATE NO NEW CORE STORY. See §"Why this brief adds no stories" — that property is
  what keeps Grading_Key guarantee 3 true and the 750-point arithmetic closed.
  status: draft; instructor-facing production material; never distributed to students.
-->
# Live Client Brief — the client commissioning the modernization

> **This is the graded RSI anchor.** It is played live, by the instructor, and it is never handed out
> as a transcript. Students have read two canned transcripts and rehearsed against a third
> stakeholder before they reach this. This is the round where it counts.
>
> **No name.** The client is *the client* — the party commissioning the modernization. Do not coin a
> named persona; the lexicon lock in the bible §5 applies and ADR-003:41 states it directly.

---

## The commission

The client owns the Dataman property and has decided to bring it back as a modern learning system.
They are not sentimental about the hardware and not hostile to it. They have read the 1977 manual.
They know what the device did.

**What they are asking for:** a working modernization that a child today would actually use, built by
someone who understands why the original worked. **What they are not asking for:** a museum piece, or
a fresh product that borrows the name.

## How the client talks

Businesslike, unhurried, and comfortable saying *"that's your call."* Answers questions directly.
Does not volunteer requirements — this is the round where students have to ask, and a client who
narrates the spec unprompted defeats the exercise.

Three moves to keep in the pocket:

- **Redirect to the analyst.** *"You're the analyst. What do you recommend?"* — for anything that is
  a design decision rather than a business one.
- **Give the constraint, not the solution.** If asked what to build first, give what matters to the
  business — a classroom pilot, a date, a budget shape — and let them derive the slice.
- **Ask for the reason.** *"Why that one?"* Students who cannot defend a choice discover it here,
  cheaply.

## What the client will not decide for the analyst

State these plainly if a student tries to hand the decision back. Refusing them *is* the teaching.

- Which stories go in the first sprint.
- The data model, the platform, the framework.
- How to resolve the conflicts between the other stakeholders — the client will confirm they exist
  and will not adjudicate. *"That's what I'm paying you to work out."*
- What "done" means for any individual story.

## Scope pressure — the thing that makes it a real interview

The client has a reason to want less than everything, and it is not arbitrary. Pick one and hold it
for the round:

- **A date.** There is a pilot, and it is sooner than comfortable.
- **A budget shape.** One build, not three; anything that needs a second phase must be named as one.
- **An audience commitment.** The client has already promised someone a classroom pilot, which
  quietly resolves the primary-audience conflict — but only if the student asks who the pilot is for.

The pressure is what turns "what do you want" into "what do you want *first*," which is the skill.

## Improvisation licence

**The instructor may drop to Andrew-OOC (L0) at any point**, per ADR-003:41 — to answer a real
question about the assignment, to defuse something, or because the scene has done its work. Say so
before starting. A frame that can be dropped deliberately reads as a technique; one that slips reads
as a mistake.

> **An invention does not become a requirement unless the student writes it down.** True here as on
> every role card, and it bites hardest in this round, because the client is the one whose word would
> actually be binding.

## Exit

Close when the student has: the commission, at least one real constraint they had to ask for, and a
first slice they can defend. If they never asked what the pilot was for, that is the note.

---

## Why this brief adds no stories

**Deliberate, and load-bearing.** `Grading_Key.md` Part 5 guarantee 3 and
`shared-dataman-artifacts/README.md` both state that no core story is motivated *only* by this
persona — a property that held trivially while the persona did not exist, and that authoring it
would ordinarily break. `ADR-003:48` anticipates this: any story the persona uniquely motivates gets
added when the brief is authored.

This brief is written so that no such story exists. The client **commissions** the modernization; it
does not request features. Every need in the seeded backlog still traces to Renee, Ms. Alvarez, or
Dale, and the 750-point arithmetic stays closed.

If a future revision gives the client a feature request of their own, that revision owes the backlog
a story and the guarantee a rewrite. Both, in the same change.
