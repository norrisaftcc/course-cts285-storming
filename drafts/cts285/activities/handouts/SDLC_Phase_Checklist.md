<!--
  NEW — authored as the companion phase-checklist handout to Module_01_SDLC_Simulation_Lab.md,
  fulfilling that lab's Materials list ("SDLC Phase Checklist, provided by instructor") and its
  instructor-prep line ("Print SDLC phase checklist — deliverables for each phase").
  Deliverables below are phrased against Dataman 2.0 (any of the three feature choices: Answer
  Checker, Memory Bank, or a named Practice Game), matching the lab's own four rounds.
  UNGRADED — activity handout. No row in phase0/CTS285_Canonical_Points_Table.md, no rubric, no
  grade points.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here — see the
  SHODANN-SLOT marker for where an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# SDLC Phase Checklist — SDLC Simulation Lab

*Check off each deliverable as you produce it. This isn't graded — it's here so you always know what "done with this round" looks like before the timer moves you to the next one. Keep it next to your workspace all lab.*

---

## Round 1 — Product Owner: Backlog Refinement

- [ ] Read your assigned stakeholder transcript (Parent, Teacher, or Retro Collector)
- [ ] Chosen ONE Dataman 2.0 feature to build: Answer Checker, Memory Bank, or one named Practice Game
- [ ] Can name the specific line in the transcript that motivated the choice
- [ ] 8-12 functional requirements written, one per sticky note
- [ ] 4-6 non-functional requirements written
- [ ] Every requirement sorted into Must Have / Should Have / Nice to Have
- [ ] No requirement names a specific UI widget, technology, or platform (that's a solution, not a requirement — flag it and write the need underneath instead)

**You're ready for Round 2 when**: someone who wasn't in the room could read your sticky notes and know what the system needs to do, without needing you to explain it out loud.

---

## Round 2 — Scrum Master: Sprint Planning

- [ ] Use case diagram: actors identified (Learner, and a Curator if your feature involves one)
- [ ] Use case diagram: major actions shown as ovals, connected to the actor(s) who perform them
- [ ] Data sketch: 3-5 boxes, your own naming, each with 4-6 attributes
- [ ] Data sketch: relationships between boxes labeled
- [ ] 2-3 wireframe screens sketched, each covering one of your feature's major actions
- [ ] Every Must-Have requirement from Round 1 is visibly implemented by at least one diagram or screen

**You're ready for Round 3 when**: the Developer round could start building cards and screens directly from what's on the page, without a design conversation first.

---

## Round 3 — Developer: Sprint Build

- [ ] 10-12 problem cards with realistic data (front: the problem; back: attempt history)
- [ ] 6-8 learner cards
- [ ] 10-12 blank session/attempt cards, ready to fill in during testing
- [ ] Paper interfaces built for all 2-3 wireframe screens from Round 2
- [ ] Written step-by-step procedure for your feature's core operation
- [ ] The procedure covers the hard case, not just the happy path (e.g., what happens on a *second* wrong answer, not just the first)
- [ ] You can physically demonstrate the feature working, start to finish, using the cards

**You're ready for Round 4 when**: you could hand your cards and procedure to someone who wasn't in the room and they could run a test against it.

---

## Round 4 — Tester: Sprint Review

- [ ] 6-8 test cases written in Given/When/Then form, each tied to a specific Round 1 requirement
- [ ] Every test case actually executed against the Round 3 prototype (not just imagined)
- [ ] Each test marked Pass, Fail, or Issue Found
- [ ] At least 3-5 bugs or gaps documented, each with a suggested fix
- [ ] At least one test tried an edge case (bad input, a boundary condition, a case two stakeholders would disagree about)

**You're done with the lab when**: you can point at a specific requirement, a specific test case, and a specific outcome — and you've found at least one real gap in your own design.

> "At least one real gap" is not a low bar set to be kind. It is the bar because a pair that found none did not look, and I would rather you finished the lab knowing where your design is thin than finished it comfortable.
>
> — SHODANN, your Channel Success Partner

---

## If you're stuck on which round you're in

| Round | Role | What you're producing |
|---|---|---|
| 1 | Product Owner | Sticky-note requirements, prioritized |
| 2 | Scrum Master | Diagrams: use case, data sketch, wireframes |
| 3 | Developer | Paper cards, screens, and a written procedure |
| 4 | Tester | Test cases, results, and a bug list |

Board columns, if you're tracking your own pair's progress on a mini-board: **To Do → In Progress → In Review → Done.**
