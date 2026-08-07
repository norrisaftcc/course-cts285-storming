<!--
  LIVE CLIENT BRIEF — the second ADR-003 artifact. Authored 2026-08-07; rebuilt to the
  levers/buttons/constraints format on instructor ruling.
  Per ADR-003:35 this persona is NEVER a canned transcript — played live, from this card.
  Per ADR-003:41 register is neutral in-world client (L2); NO new named persona is coined.
  INSTRUCTOR ONLY — students never hold or play this one. See Role_Card_HOWTO.md.
  DESIGNED TO MOTIVATE NO NEW CORE STORY — see the closing section.
  status: draft; instructor-facing production material.
-->
# Live Client Brief — the client commissioning the modernization

**The graded RSI anchor.** Played live by the instructor, never handed out, never played by a
student — `ADR-003:35`. Its value is that a real human with authority is in the seat.

**No name.** The client is *the client*. Do not coin a named persona (bible §5 lexicon lock,
`ADR-003:41`).

---

## The commission

The client owns the Dataman property and has decided to bring it back as a modern learning system.
Not sentimental about the hardware, not hostile to it. They have read the 1977 manual and know what
the device did.

**Asking for:** a working modernization a child today would actually use, built by someone who
understands why the original worked. **Not asking for:** a museum piece, or a fresh product wearing
the name.

## LEVERS — set before the round

| Lever | Low | Normal | High |
|---|---|---|---|
| **Scope pressure** | *"Take the time you need."* | One constraint, held. | Date + budget + a promise already made to someone else. |
| **Willingness to decide** | Refuse every design question. | Refuse design, answer business. | Occasionally think aloud — let them hear a client reason. |
| **Patience with vagueness** | *"I'm not sure what you're asking me."* | Neutral. | Rephrase their question into a better one, visibly. |

*Later rounds: Scope pressure High, Patience Low.*

## BUTTONS

| When the analyst… | Press | You say, roughly |
|---|---|---|
| asks a design question (data model, platform, framework, sprint contents) | **YOUR CALL** | *"You're the analyst. What do you recommend?"* |
| asks what to build first | **CONSTRAINT NOT SOLUTION** | Give the business fact — the pilot, the date, the budget shape — and let them derive the slice. |
| gives an answer they can't defend | **WHY THAT ONE** | *"Why that one?"* Cheapest correction available. |
| asks you to settle a stakeholder disagreement | **THAT'S THE JOB** | *"They do disagree. That's what I'm paying you to work out."* Confirm it exists; refuse to adjudicate. |
| asks who the pilot is for | **THE ANSWER THEY NEEDED** | Name the classroom pilot — this quietly resolves the primary-audience conflict, **but only because they asked.** |
| never asks who it's for | *(no button)* | Say nothing. That silence is the note at the end. |
| asks something outside the commission | **INVENT** | Business colour only. Never a new refusal, never a new feature request — see below. |

## CONSTRAINTS

**The client will not decide these**, and refusing them *is* the teaching:

- Which stories go in the first sprint.
- The data model, the platform, the framework.
- How the stakeholders' conflicts resolve.
- What "done" means for any story.

**The client requests no features.** This one is structural, not stylistic — see the closing section.

## Improvisation licence

**Drop to Andrew-OOC (L0) at any point**, per `ADR-003:41` — to answer a real question about the
assignment, to defuse something, or because the scene has done its work. Say so before starting. A
frame you can drop deliberately reads as a technique; one that slips reads as a mistake.

> **An invention does not become a requirement unless the student writes it down.** True on every
> card, and it bites hardest here, because this is the round where your word would actually bind.

## Exit

Close when they have the commission, at least one constraint they had to ask for, and a first slice
they can defend. If they never asked what the pilot was for, that is the note.

---

## Why this brief adds no stories

**Deliberate and load-bearing.** `Grading_Key.md` Part 5 guarantee 3 and this folder's `README.md`
both state that no core story is motivated *only* by this persona — a property that held trivially
while the persona did not exist, and that authoring it would ordinarily break. `ADR-003:48`
anticipates exactly this: any story the persona uniquely motivates gets added when the brief is
authored.

This brief is written so no such story exists. The client **commissions** the modernization; it does
not request features. Every need in the seeded backlog still traces to Renee, Ms. Alvarez, or Dale,
and the 750-point arithmetic stays closed.

If a future revision gives the client a feature request of its own, that revision owes the backlog a
story and the guarantee a rewrite — both, in the same change.
