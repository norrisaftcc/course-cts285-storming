# ADR-011: L0 Is Defined by Who Is at the Other End

**Status**: **Accepted** — 2026-08-06, instructor instruction (*"rule on the L0 question in #36"*). One clause is marked as not self-acceptable; see §"Ruling note".
**Deciders**: A. Norris (instructor). Drafted by the cloud Claude Code session, on the question raised in issue #36.
**Governs**: what may occupy the L0 margin; the scope of the "Andrew's Note" → "Teacherbot's Note" rename
**Related**: `KAYFABE_ARCHITECTURE.md` §layer table + failure physics, `SHODANN_Character_Bible.md` §6 register table and §9, `NAMING_CANON.md` §naming table (*"don't rename the device"*), issue #36, PR #37 (ships the first simulated note), PR #25 (the 2026-07-24 "Andrew → Teacherbot" directive, which addressed a different question)

> **Ruling note.** The instructor asked for a ruling and this ADR gives one. The single clause an agent must not self-accept is §4 — *where a student in real distress is sent* — because `CLAUDE_SUPPLEMENTARY.md` Rule 8 puts student welfare with a human. It is written as a ruling rather than a question so that accepting it is a stamp rather than more work, and it is marked here so the stamp is deliberate.

## Context

Issue #36 asks whether a **simulated** "Teacherbot's Note" still sits at layer **L0**, and offers three readings: it stays L0 because its function is unchanged; it moves to L1 because a simulated voice is a character; or it needs a new provisional layer.

The issue is right that this is new. The 2026-07-24 directive resolved a *name inconsistency* (Drew / Andrew), and PR #37's ruling resolved *one file whose note advised on a deleted activity*. Neither contemplated a simulated voice standing in the instructor's margin.

## The ruling

**L0 is defined by who is at the other end, not by register, not by authorship style, and not by label.**

The canon already says this, in terms:

- Bible §6: *"SHODANN never delivers OOC content; **when the frame must drop, the human speaks.** Real distress always exits to this voice."*
- Bible §9 / §relationship: *"SHODANN is never the endpoint for a struggling student."*
- `KAYFABE_ARCHITECTURE` §failure physics: *"Struggle that is real exits to L0 — SHODANN hands off to the human, always."*

Out-of-character register is **necessary but not sufficient**. What makes L0 the exit is that a reachable human is standing in it. Strip the human and the register alone is theatre — an exit sign over a wall.

### 1. A simulated note is never L0

Not because it is L1 — reading 2 is wrong, and expensively so. If a simulated note were L1 it would inherit SHODANN's constraints and, worse, *"real distress always exits to this voice"* would name a voice that is no longer human. The architecture would keep its off-ramp and lose its destination.

The correct description is neither: a simulated note that occupies the L0 slot **does not move the layer, it empties it.** That is a defect, not a layer assignment — and naming it as a defect is more useful than minting an L0-provisional tier, which would make the empty case sound like a legitimate rung.

### 2. A simulated note may be a *bridge to* L0

It is permitted, and useful, where the instructor has not yet written one. To be safe it must carry, in the note itself and not by reference to a syllabus elsewhere:

- an explicit disclosure that it is simulated and awaiting the instructor's own words, and
- an **unconditional route to a named human** for anything real — a grade, an extension, a personal situation.

A bridge without a route is the dangerous case, because it looks exactly like the exit and is not one.

**Register for a synthetic bridge** (instructor direction, 2026-08-06): model it on the **"Hints for Parents and Teachers"** section of the 1977 manual — `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`, PDF p.21 onward — not on the storybook pages.

The manual carries two registers and only one of them is usable here. The storybook voice (p.4, *"On my home planet we call these games and secrets NumberFun"*) is first-person, in-character, and belongs to the device; borrowing it would put a bridge into character, which is the thing §1 forbids. The Hints register is plain third person, adult to adult, patient and explanatory — and its rhetorical situation maps exactly onto ours: Texas Instruments writing to the adult *about how to help the learner*, where we are writing to the student *about their own learning*.

Two constraints on the borrowing. Take the **stance** — assumes competence, explains without condescending, encourages without inflating — not the 1977 product copy; *"designed to bring extra fun, excitement, and enrichment"* is advertising and should not be imitated. And a register borrowed from the manual does not make a bridge into L0: it still needs the disclosure and the route. This clause makes a synthetic note *good*; §2's two conditions are what make it *safe*.

### 3. Therefore the rename does not proceed as specified — keep two labels

`NAMING_CANON` already says *"don't rename the device."* That instruction survives this ADR, and #36's sweep of the four canon files and nine remaining assignments **should not be executed as a blanket replacement.**

| Label | Layer | Written by | Function |
|---|---|---|---|
| **Andrew's Note** | **L0** | the instructor | the exit; a human is at the other end |
| **Teacherbot's Note** | not L0 — a bridge | simulated, disclosed | placeholder that routes to L0 |

A single label erases the one distinction a distressed student most needs to make. Two labels put that distinction in the most visible place available — the heading — at no cost. The label is not cosmetic here; it is the safety property, rendered legible.

Consequence for #36: its "done when" list changes. The nine assignments keep their L0 notes. `Teacherbot's Note` appears only where content is genuinely pending, and converts back to `Andrew's Note` when the instructor writes it.

### 4. Never — the clause that is not an agent's to accept

A simulated voice must never *answer* real distress in the instructor's persona. Disclosure, route, stop. No simulated note may absorb a disclosure, offer reassurance in the instructor's name, or stand as the terminus for a student in trouble.

This restates bible §9 rather than extending it. It is called out separately because it is the clause with a duty-of-care dimension, and because a rename executed mechanically would breach it silently.

## Consequences

- **#36 is answered and its plan is narrowed.** The canon files gain the two-label distinction rather than a substitution; the nine-assignment sweep is cancelled.
- **PR #37 is compliant if its note routes.** It discloses simulation and routes real matters to the instructor, which satisfies §2. It should not be described anywhere as the L0 device — it is a bridge, and Week 2 has no instructor-written L0 margin until one is written.
- `KAYFABE_ARCHITECTURE`'s L0 row and `NAMING_CANON`'s naming table gain the destination test, so the next session does not re-derive it.
- The layer sort in `CLAUDE.md` non-negotiable #3 and `CLAUDE_SUPPLEMENTARY.md` Rule 6 is unchanged: *never rewrite Andrew's Notes into character* now also means *never replace one with a simulated stand-in that does not route*.

## Flagged for a human — deliberately not ruled here

1. **Whether the instructor's name or contact channel appears in student-facing files at all.** §2 requires a route to a *named* human; which name, and through what channel, is an instructor call that also touches the open institution-name question.
2. **Whether "Teacherbot" is the right label for the bridge.** The ruling needs *a* distinct label, not that one. If a different word reads better to students, it changes nothing structural.
