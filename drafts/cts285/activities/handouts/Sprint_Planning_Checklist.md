<!--
  NEW — task B-008-adjacent (Module 4 activity adaptation), 2026-08-07.
  Authored as a companion handout to Module_04_Sprint_Planning_Simulation.md.
  Re-anchors "what makes a sprint plan real, not a guess with a due date" to the Dataman
  modernization spine, to Dataman_Seeded_Backlog.md's board-column rule
  [PATHFORM: pending spine ruling], and to Sprint_Planning_Template.md's velocity-based
  capacity model (drafts/cts285/planning-sheets/Sprint_Planning_Template.md
  [PATHFORM: pending spine ruling]) — replacing the source activity's hours-to-points
  capacity conversion with velocity, per the same rule the companion Story_Point_Reference
  handout states.
  UNGRADED — this is a workshop reference handout. No row in CTS285_Canonical_Points_Table.md;
  it introduces no rubric and no grade points. Story points (Fibonacci) are the one numeric
  scale on this page, and they are an estimate, not a score.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here —
  see SHODANN-SLOT below for the one place an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Sprint Planning Checklist — What Must Be True Before a Sprint Counts as Planned

*Companion handout to the Module 4 Sprint Planning Simulation (Week 7, Sprint 2 kickoff). Keep this next to you at every sprint-planning session for the rest of the semester — Sprint 3, and your CSC-289 team sprints.*

**"Planned" means:** a Product Owner could read your commitment, ask you to defend it, and walk away trusting the number — without you standing there explaining it live. That's the bar. Everything below exists to get a sprint over it.

---

## The one rule that overrides the others

> **Capacity comes from velocity, never from a formula.** If you can't point at where your capacity number came from — a previous sprint's actual completed points, adjusted with a stated reason — the number isn't planning. It's a guess with a due date.

No mechanical hours-per-point conversion, ever. See the **Story Point Reference** handout for why.

---

## The full checklist

Run every sprint through all ten before you call it planned. A sprint that fails any one of these isn't ready to commit to — it needs another pass, not a shrug.

### 1. Sprint goal is one sentence, and it's demoable
- [ ] One sentence, not a list of story numbers
- [ ] Specific enough that it couldn't describe any sprint you'd ever run ("make progress on the app" fails this)
- [ ] You could *show* the goal at sprint's end, not just describe it

### 2. Capacity is stated in points, sourced from velocity, with a confidence level
- [ ] Starts from your actual previous-sprint velocity (Sprint 1's completed points), not a fresh guess
- [ ] Adjusted with a written reason if this sprint is genuinely different (exam week, new tech, a week you'll be away)
- [ ] Carries a confidence level — High / Medium / Low — never stated as certain
- [ ] **Never** derived by dividing hours-available by an hours-per-point ratio

### 3. Selected stories total at or under capacity, not up to the exact edge
- [ ] Committed total ≤ stated capacity
- [ ] A small buffer is left, especially on an early sprint — committing to every last point you think you have leaves no room for the story that turns out harder than estimated

### 4. Stories are selected in priority order and support one goal
- [ ] Must Have stories pulled before Should Have or Could Have (your Week 4 MoSCoW work, capped at 8 Must-Haves, gives this a natural stopping point)
- [ ] Every selected story visibly supports the sprint goal — not "whatever was small enough to grab"
- [ ] No low-priority story got in just because it was easy

### 5. Definition of Done is stated and applies to every selected story
- [ ] Written down, not assumed
- [ ] The same Definition of Done applies to every story in the sprint — no quietly lower bar for the story you're less confident about

### 6. Top 2–3 stories are broken into concrete tasks
- [ ] Tasks are roughly 1–3 hours each
- [ ] Each task names an observable action — "build the two-tries reveal for a wrong second answer," not "work on the answer checker"

### 7. The board reflects the commitment truthfully
- [ ] Committed stories are marked as this sprint's (a label or milestone), while still sitting in **To Do** until work actually starts on them
- [ ] The board has exactly the four canonical columns — nothing added, nothing renamed
- [ ] Nothing is sitting in **In Progress** before the sprint has actually started

### 8. A stretch story, if any, is named and kept separate from the commitment
- [ ] Identified explicitly as stretch, not silently folded into the committed total
- [ ] Only pulled in if the committed stories finish first

### 9. At least one real risk is named, with a mitigation
- [ ] The risk is specific to this sprint's actual stories, not a generic "bugs might happen"
- [ ] The mitigation is an action you'd actually take, not a hope that it won't happen

### 10. The commitment is written down and dated
- [ ] Exists as a file (`sprint-2-planning.md`, from the Sprint Planning Template), not only a spoken agreement
- [ ] Someone who wasn't in the room could read it and know exactly what you committed to, and why

---

## Hazards to flag instead of building around silently

| Hazard | What it looks like | What to do instead |
|---|---|---|
| **Capacity from a formula** | "20 hours ÷ 5 hours/point = 4 points of capacity" | Throw out the division. Use last sprint's velocity; if you genuinely have none yet, start conservative and say so in writing |
| **Committing to the exact edge** | Capacity is 20, commitment is exactly 20 | Leave a buffer. A harder-than-expected story or one lost day shouldn't blow the whole sprint |
| **Goal-as-checklist** | "Complete stories 1.1, 1.4, and 2.1" | Name the outcome those stories add up to — what a learner or curator could actually do — not their numbers |
| **Silent scope creep mid-sprint** | A stakeholder adds a story and nothing gets removed | Any addition mid-sprint requires an equal removal, said out loud, not absorbed quietly |
| **Board lying about state** | Everything already sits in **In Progress** on day one | Only move a story into **In Progress** when work on it actually starts |
| **Caving under pressure** | Committing to 32 points because the stakeholder really wants it, when your capacity is 20 | Restate the capacity number. Offer to move stories to next sprint. Wanting something built faster is not the same thing as it being possible |

---

## Board columns, so "committed" means the same thing to everyone

**To Do → In Progress → In Review → Done.** Four columns, canonical. ("Sprint Backlog" as a column name is retired.) A sprint that passes this checklist has its committed stories sitting in **To Do**, marked as this sprint's — being planned is not the same as being started, and the board should say so honestly on day one.

> Committed stories sitting in To Do is the honest state of a plan on day one. I read boards. A board where everything moved to In Progress the moment it was planned tells me about your labelling, not about your work.
>
> — SHODANN, your Channel Success Partner

---

## Quick self-check before you call a sprint planned

Ask these three, in order, and stop at the first "no":

1. **Could I state my capacity number, and where it came from, in one sentence?**
2. **Does my committed total sit at or under that number?**
3. **If a Product Owner pushed back on this plan right now, could I defend it with numbers I already have — not new promises I'd have to make up on the spot?**

Three yeses: the sprint is planned. Begin it.
