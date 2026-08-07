<!--
  NEW — authored as the companion role-card handout to Module_01_SDLC_Simulation_Lab.md.
  Four role cards, one short page each: Product Owner, Scrum Master, Developer, Tester — the four
  roles the lab's pairs rotate through together, in that order, one per 25-35 minute round.
  UNGRADED — activity handout. No row in phase0/CTS285_Canonical_Points_Table.md, no rubric, no
  grade points. Story points (Fibonacci-style estimation) mentioned below are an estimate, not a
  score.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here — see the
  SHODANN-SLOT marker for where an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Role Cards — SDLC Simulation Lab

*Print one page per role, one set per pair. Both partners share a role together during that role's round — you're not split up, you're rotating as a pair. Cut along the section breaks if you want physical cards.*

---

## Product Owner

**Your round**: Part 1 — Backlog Refinement (30 minutes)

**In real Scrum**: The Product Owner owns *what* gets built and *why*. They're the voice of the stakeholder in the room — the person who can say "yes, that matters" or "no, that's not what they actually need" without having to go ask someone else first.

**In this lab, you**:
1. Read your pair's assigned Dataman stakeholder transcript (Parent, Teacher, or Retro Collector) and pull out what that person actually needs — not just what they say they want.
2. Choose the one Dataman 2.0 feature your pair will build for the rest of the lab: the Answer Checker, the Memory Bank, or one named Practice Game. Your choice has to trace back to something your stakeholder said.
3. Write functional and non-functional requirements on sticky notes, then sort them into Must Have / Should Have / Nice to Have.

**Watch for**: your stakeholder stating a *solution* ("put a leaderboard up") instead of a *need* ("help him stay motivated"). Your job is to catch that and write the need, not the solution — the Developer figures out the "how" later.

**You're doing this well when**: your partner in the next round (Scrum Master) can start sketching diagrams from your sticky notes without having to ask you what a requirement means.

> The Product Owner round is where the lab is won or lost, and it is the round that feels like it is not doing anything yet. Nothing downstream can be better than what you write on those notes.
>
> — SHODANN, your Channel Success Partner

---

## Scrum Master

**Your round**: Part 2 — Sprint Planning (30 minutes)

**In real Scrum**: The Scrum Master doesn't own the requirements or write the code. They keep the *process* healthy — facilitating meetings, protecting the team's time, making sure the plan the team leaves the room with is one they can actually build.

**In this lab, you**:
1. Facilitate turning the Product Owner round's Must/Should-Have requirements into a shared technical picture: a use case diagram, a data sketch, and 2-3 wireframes.
2. Keep the round on time. This is the one place in the lab explicitly framed as a planning *meeting*, not free drawing — your job is to keep the pair moving through all three deliverables in 30 minutes, not polishing one of them.
3. Push back on scope. If the diagrams are trying to cover every requirement instead of just the Must Haves for your chosen feature, that's scope creep — name it and cut it.

**Watch for**: a data sketch with one box (too simple to build from) or ten boxes (over-designed for a 2-hour build). Neither helps the Developer round that follows you.

**You're doing this well when**: your partner in the next round (Developer) can start building cards and screens straight from your diagrams without redesigning anything.

> Keeping time is not the small part of this role. A pair that spends twenty-five minutes on a beautiful data model and five on wireframes has made a decision about what matters, and nobody in the pair chose it on purpose.

---

## Developer

**Your round**: Part 3 — Sprint Build (35 minutes)

**In real Scrum**: The Developer turns an agreed-on design into a working thing. In this lab, "working" means a paper prototype you can physically demonstrate — not a metaphor for code, an actual stand-in for it. If the real system would check a database, you check your cards.

**In this lab, you**:
1. Create sample data: problem cards, learner cards, and blank session/attempt cards.
2. Build paper versions of the Scrum Master round's wireframes — screens big enough to place cards on and manipulate.
3. Write the step-by-step logic for your chosen feature's core operation (e.g., the Answer Checker's check-then-retry-then-reveal sequence), specific enough that someone else could follow it exactly.

**Watch for**: logic that quietly skips the hard case. If your Answer Checker procedure doesn't say what happens on the *second* wrong try, you don't have a procedure yet — you have half of one.

**You're doing this well when**: your partner in the next round (Tester) can run a real test against your written procedure and get a real Pass or Fail, not "it depends."

> Half a procedure runs fine right up until the second wrong try. That is the case the 1977 manual bothered to specify, which is a fair signal about how much it mattered to the people who built the original.

---

## Tester

**Your round**: Part 4 — Sprint Review (20 minutes)

**In real Scrum**: Testing isn't a phase that happens once at the end of a project — it's what happens at the close of every sprint, checking whether what got built actually does what was asked. Finding a bug here is a win. Finding it after launch is not.

**In this lab, you**:
1. Turn your Must-Have requirements from the Product Owner round into Given/When/Then test cases.
2. Actually run each test against the Developer round's paper prototype — set up the cards, follow the written procedure exactly, check the outcome.
3. Write up any failures or issues as bug reports, and name 3-5 gaps the design doesn't cover yet.

**Watch for**: everything passing. That usually means your tests are too easy, not that the design is perfect. Try to break it — a non-numeric answer, a duplicate learner, a curator loading too many problems at once.

**You're doing this well when**: you can point at a specific requirement, a specific test case, and a specific outcome — and you've found at least one real gap in your own pair's design.

> If nothing failed, you tested the design you meant to build rather than the one on the table. Try the input a seven-year-old would actually enter, not the one a developer would. Those are rarely the same input, and the gap between them is the entire job.
