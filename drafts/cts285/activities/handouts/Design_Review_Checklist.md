<!--
  NEW — companion handout to Module_03_System_Design_Studio.md, authored alongside it, 2026-08-07.
  Re-anchors "what a peer checks in another Creator's design" to the Dataman modernization spine.
  The three core questions (ten-problem ceiling, two attempts per problem, curator can retrieve
  results later) trace to drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md
  [PATHFORM: pending spine ruling] Stories 3.1, 1.2, and 4.1 respectively, and to the
  failure modes documented in Dataman_Reference_ERD.md's Variant A and Variant B
  [PATHFORM: pending spine ruling] (instructor grading key — not linked for students; this
  handout restates the checks a design must pass, not the answer itself).
  UNGRADED — this is a studio peer-review handout. No row in CTS285_Canonical_Points_Table.md;
  it introduces no rubric and no grade points.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here — see
  SHODANN-SLOT below for the one place an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Design Review Checklist — What a Peer Checks in Another Creator's Dataman 2.0 Design

*Companion handout to the Module 3 System Design Studio (Weeks 5–6). Use it in the studio's Part 4 peer review, and again whenever you review a teammate's — or your own — design before Sprint 1 wraps.*

**"Ready to build from"** means: a developer who has never talked to Renee, Ms. Alvarez, or Dale could sit down with this design and start implementing without walking back to ask what a diagram means. That's the bar.

---

## The three questions that matter most

Before anything else, run every ERD or wireframe through these three. They come directly from real Dataman behavior and real stakeholder needs — a design that fails any one of them cannot actually run the device it claims to modernize.

### 1. Does the schema enforce the ten-problem ceiling?

The Memory Bank Set is capped at **up to ten problems, no more** (manual p.6, p.21; Story 3.1 — Renee: *"punch in the five or six facts... swap them out"*).

- [ ] There is an entity (however named — Practice Set, Memory Bank Set) that groups problems together, separate from Problem itself
- [ ] The cap is represented somewhere the design can point to — a stated field, a note, or a rule — not just true "in theory"
- [ ] A curator building an eleventh problem into a set has a defined outcome in the design (refused, blocked, or explicitly out of scope — but *decided*, not silent)

**If this fails:** the design has collapsed Problems and Curators together with no grouping entity in between. That's Variant B's failure mode — go back to Part 2, Step 1 of the studio and add the missing entity.

### 2. Does the model support two attempts per problem?

Every problem gets **exactly two tries**, and the system must be able to tell the first try's outcome from the second's — that distinction is what lets an adult tell "knows it" from "guessed it" (Story 1.2; manual pp.5, 20, 22; the teacher's own stated reason).

- [ ] There is an entity or field that records **try number** (1 or 2), not just a final correct/incorrect flag
- [ ] The design can represent: right on try 1, wrong-then-right on try 2, and wrong-on-both-with-reveal, as three distinguishable outcomes
- [ ] The reveal-the-answer behavior after a second miss appears somewhere in the design (a state, a screen, a rule) — not implied

**If this fails:** correctness has been collapsed onto Problem or Session directly, with no way to represent a try. That's Variant A's failure mode — the single most common gap. Go back and give tries their own place in the model.

### 3. Can a curator retrieve a learner's results later?

A parent or teacher needs to check scores and missed problems **after the fact**, without having been present during practice (Story 4.1 — Renee: *"check later... see the ones he's still missing"*).

- [ ] There is a path — a screen, a query, a named use case — a curator reaches to view a learner's past results without having watched the session live
- [ ] The retrieved view shows more than a single number: which specific problems were missed is at least as important as the overall score
- [ ] If the design supports **multiple curators** for one learner (a parent and a teacher both), it's clear whether they see the same results or different scoped views — an unstated assumption here is exactly the hazard the Week 3–4 workshop trained you to catch

**If this fails:** the design only supports a curator watching live, or scores that vanish once the session ends. Add the retrieval path.

> The multiple-curator case is where designs quietly pick a side. If your ERD answers it and your write-up never mentions answering it, you have made a decision you will not be able to defend later — because you will not remember making it.
>
> — SHODANN, your Channel Success Partner

---

## The rest of the checklist

Once the three questions above pass, work through these for a fuller review.

### Use Case Diagram
- [ ] Every actor is external to the system boundary (no actor drawn inside the box)
- [ ] Use cases are named as user actions ("Check an Answer"), not implementation steps ("Query the answer table")
- [ ] 8–12 use cases — not 3 (too shallow) and not 20+ (too granular; look for steps that should be combined)
- [ ] Every use case can be traced back to a backlog story or a manual behavior — if you can't say which, that's a flag

### ERD
- [ ] 5–8 entities, including at minimum Learner, Curator, Problem, Attempt, and Practice Set
- [ ] Every entity has a primary key, and foreign keys show the relationships
- [ ] Cardinality (1:1, 1:M, M:N) is marked, not just implied by line placement
- [ ] Any many-to-many relationship has a linking table
- [ ] No entity is really just an attribute of another (separate FirstName/LastName entities, for example)
- [ ] Division's remainder is representable as its own field, distinct from the whole-number answer (Story 1.4)

### Wireframes
- [ ] The on-screen keypad or answer-entry mechanism is consistent across every screen that needs it
- [ ] The correct/EEE feedback signal is visible and clearly distinguishable — not by color alone (accessibility)
- [ ] Every wireframe traces to a specific screen a Learner or Curator actually needs, not a generic template screen
- [ ] Navigation between screens makes sense — no dead ends
- [ ] Fidelity is low-to-mid: grayscale, placeholder-friendly, structure over polish

### Design Decisions
- [ ] Each decision states a reason ("we did X so that Y"), not just a description of what was built
- [ ] At least one decision names a trade-off — something deliberately *not* built, and why
- [ ] If two stakeholders wanted different things, the decision says which need won and which was set aside, rather than quietly picking one

---

## Giving feedback

Use star / delta / suggestion, same as the Week 3–4 workshop:

- **Star**: "Your Attempt entity has try_number as its own field — that's exactly the distinction Story 1.2 needs."
- **Delta**: "Your Practice Set has no cap represented anywhere — right now nothing stops an eleventh problem."
- **Suggestion**: "Consider adding a Curator-scoped results screen — right now the only way to see a score is during the live session."

---

## Quick self-check before you call a design ready

Ask these three, in order, and stop at the first "no":

1. **Does my ERD pass all three core questions above** — ceiling, two attempts, retrievable results?
2. **Could a developer who's never met Renee, Ms. Alvarez, or Dale start building from this without asking me what a diagram means?**
3. **If I walked a stakeholder through my wireframes, would they recognize the device behavior they asked for** — the two tries, the EEE, the reveal, the light show?

Three yesses: it's ready to build from.
