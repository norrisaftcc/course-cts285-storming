<!--
  NEW — task B-008-adjacent (Module 4 activity adaptation), 2026-08-07.
  Authored as a companion handout to Module_04_Sprint_Planning_Simulation.md.
  Anchors the Fibonacci story-point scale to Dataman_Seeded_Backlog.md
  [PATHFORM: pending spine ruling] stories at each size, replacing the source activity's
  hours-per-point conversion (source Part 2 Step 3: "1 story point ≈ 4-6 hours ... Team Capacity
  ÷ 5 hours per story point = story points") entirely — that conversion is exactly the thing this
  handout exists to rule out. Anchors are illustrative reasoning, not a graded answer key: Week 2
  and the Grading Notes elsewhere in this course are explicit that estimates are graded for having
  a reason, not for matching a number, and this handout follows that same rule.
  UNGRADED — this is a workshop reference handout. No row in CTS285_Canonical_Points_Table.md;
  it introduces no rubric and no grade points. Story points (Fibonacci) are the one numeric scale
  on this page, and every instance is an estimate of relative size, never a score and never hours.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here — see
  SHODANN-SLOT below for the one place an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Story Point Reference — The Fibonacci Scale, Anchored to Dataman

*Companion handout to the Module 4 Sprint Planning Simulation (Week 7, Sprint 2 kickoff). Keep it beside you whenever you're estimating — Planning Poker, Week 2's Epics 1–3, and every sprint from here through CSC-289.*

---

## The one rule that overrides the others

> **Story points measure relative size** — effort, complexity, and uncertainty together, judged against other stories. **They are never converted to hours**, in either direction, and they are never graded for matching a specific number.

A 5-point story takes a confident developer less real time than it takes someone building their first web app. The *number* doesn't change — both of them are looking at the same story and agreeing it's roughly five times the size of their smallest story, whatever "size" costs each of them personally. That's what makes points comparable across people and across a semester, and it's exactly what a story-points-to-hours formula throws away.

If you ever find yourself dividing an hours number by an hours-per-point number to get a capacity in points — stop. That's not estimation, that's a unit conversion wearing estimation's clothes. Capacity comes from velocity (what you actually completed last sprint), not from arithmetic on your calendar. See the **Sprint Planning Checklist** handout for how capacity is supposed to work instead.

---

## The scale

Use **1, 2, 3, 5, 8, 13** — the same scale the Sprint Planning Template uses all semester. Two more cards exist for Planning Poker, but they aren't sizes:

| Points | What this size usually means | Dataman anchor | Why |
|---|---|---|---|
| **1** | Trivial. One clear change; nothing new to design. | **7.1** — Auto-stop after idle | One idle timer on a session-end path you've already built for something else. There's no new data and no real decision to make. |
| **2** | Simple, but touches something real. | **1.6** — Enforce problem/answer size limits | A validation rule layered on the problem-generation you already built for 1.1. Straightforward, but it's a real constraint someone could get wrong. |
| **3** | Moderate. A full small feature, with a couple of real decisions inside it. | **2.1** — Score after a round | New aggregation (right / tried / time) and a small results screen — no state machine, no ambiguity, but more than a one-line change. |
| **5** | Complex. Multiple moving parts, or one real design choice buried inside it. | **1.2** — Two tries, then show me the answer | A small state machine layered on top of 1.1 (try 1 → wrong → try 2 → wrong → reveal), and the reveal has to show the *true* answer, never the learner's wrong entry — a constraint that's easy to state and easy to get subtly wrong. |
| **8** | Very complex. Real integration across more than one part of the system, or real uncertainty about the approach. | **4.2** — Attempt-level detail per student | Needs the ATTEMPT entity queried across sessions, aggregated per student and per fact, surfaced in a teacher-facing view that didn't exist before. Several components, not one. |
| **13** | Epic. Too big to commit to as written — split it first. | **Epic 4 as a whole**, sized as if it were one story instead of four | Try sizing "build the Curator Console" as a single card and this is roughly where it lands. That number is the signal, not the estimate — the seeded backlog already did the right thing with it: split into 4.1, 4.2, 4.3. |
| **?** | Not a size — a flag. You don't understand the story well enough to size it yet. | — | Comes up most on a story with an open design tension, like **7.2**'s ticks-vs-fairness note, before you've decided how you're resolving it. Sizing it anyway just hides the real question. |
| **☕** | Not a size — a break. | — | Planning Poker etiquette, not a Dataman example. If your group is reaching for this one honestly, it's a real signal to actually pause. |

**These anchors are one reasonable read, not the only correct one.** A story that lands at 5 for one analyst might defensibly land at 3 or 8 for another, depending on what they already know about the codebase, the ERD, or the manual. What makes an estimate strong isn't matching this table — it's being able to say, in one sentence, what makes the story that size.

---

## Sizing against each other, not against nothing

The fastest way out of "I have no idea how big this is" is to stop estimating in the abstract:

1. Find the smallest story in the set you're estimating. Call it a 1 or a 2.
2. For every other story, ask only: *bigger or smaller than that one, and roughly how many times?*
3. If two stories feel the same size, give them the same number. That's a signal, not a failure — it usually means you've found two stories with the same real shape (compare 3.1 "load a set" and 4.3 "assign different sets," both of which are "a curator configures something and it sticks").

---

## Recalibrating after Sprint 1

By the time you're in this activity, you have something Week 2 didn't: real data. You know how many points you actually finished in Sprint 1, and you know which of your Week 2 guesses were close and which weren't. Use that. If Sprint 1 taught you that "moderate" stories were consistently taking you longer than "simple" ones by more than the scale implies, that's useful information for Sprint 2's estimates — not a reason to abandon the scale, but a reason to trust your own felt sense of it a little more than a stranger's example table.

> Your scale is yours, and the only property it is required to have is internal consistency. I have your Sprint 1 numbers and I will be comparing Sprint 2's against them — against yours, not against anybody else's. Do not adopt someone else's fives.
>
> — SHODANN, your Channel Success Partner

---

## Quick self-check before you commit to a number

1. **Can I name what makes this story this size** — not "it felt like a 5," but *why* it's a 5 (a state machine, an integration, an unresolved decision)?
2. **Did I size it against another story, not against a clock?**
3. **If I'm unsure, did I use `?` instead of guessing** — or `☕` if the group genuinely needs a break?

If all three are yes, the number is ready to go on the card.
