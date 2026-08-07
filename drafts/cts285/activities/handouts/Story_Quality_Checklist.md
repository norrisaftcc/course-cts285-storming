<!--
  NEW — task B-008-adjacent (Module 2 activity adaptation), 2026-08-07.
  Authored as the companion handout to Module_02_User_Story_Workshop.md.
  Re-anchors "what makes a story good enough to pull" to the Dataman modernization spine and to
  Dataman_Seeded_Backlog.md's own stated rule (drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md
  [PATHFORM: pending spine ruling]), which is quoted below rather than paraphrased.
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

# Story Quality Checklist — What Makes a Dataman Story Good Enough to Pull

*Companion handout to the Module 2 User Story Workshop (Weeks 3–4). Keep this next to you whenever you're writing or reviewing a Dataman story — in the workshop, in Week 4's backlog assignment, and in Sprint Planning.*

**"Good enough to pull"** means: a Curator (in the project sense — whoever runs sprint planning) could move this story from **To Do** into **In Progress** and a developer could start building it without walking back to ask what it means. That's the bar. Everything below exists to get a story over it.

---

## The one rule that overrides the others

> **A story with no stakeholder in its trace line does not belong in this backlog.**
> — `Dataman_Seeded_Backlog.md`, "How to read the trace line"

Every core Dataman story carries a `↳ Traces to:` line naming the stakeholder(s) — Renee (parent), Ms. Alvarez (teacher), Dale (retro collector) — and, where relevant, the manual page the device behavior comes from. A device behavior alone is not a requirement; a requirement needs a *person who needs it*, named. If you can't finish the sentence "this matters to ___ because ___," the story isn't ready to pull, no matter how clean the Given/When/Then reads.

This is the single fastest check. Run it first.

---

## The full checklist

Run each story you write or review through all seven. A story that fails any one of these isn't ready to pull — it needs another pass, not a shrug.

### 1. Trace line names a stakeholder
- [ ] The story's `↳ Traces to:` (or equivalent) names a specific person or role, not just "the device" or "the manual"
- [ ] If the need traces to *only* a device behavior with no stakeholder attached, that's a flag, not a story — see **Hazard: device behavior with no stakeholder** below

### 2. Format: As a / I want / So that
- [ ] Uses the three-line form: **As a** [role], **I want** [goal], **So that** [benefit]
- [ ] The role is specific — "learner," "parent," "teacher," not "user"
- [ ] For Dataman, roles are drawn from the actual actor set: **learner**, **curator (parent)**, **curator (teacher)**, occasionally **group of learners** (for the two-player games)

### 3. The "so that" is a reason, not a restatement
- Bad: "As a learner, I want to see my score, so that I can see my score."
- Good: "As a learner, I want to see my score, so that I know how I did without an adult standing over me." (Renee's actual need.)
- [ ] Cover the "so that" with a hand and check the story still makes sense as a request. If it doesn't, the benefit isn't real yet.

### 4. Acceptance criteria are testable Given/When/Then
- [ ] 2–4 criteria (the seeded backlog's own range — more than that and the story is probably two stories)
- [ ] Each criterion names an observable outcome a tester could check by using the app, not an implementation detail
- Bad: "Given the form is valid, When I submit, Then a POST request fires."
- Good: "Given my second answer is also wrong, When the error shows, Then the system displays the problem with its correct answer." (Story 1.2's own criterion.)

### 5. Size: one story, not an epic wearing a story's clothes
- [ ] Could a developer plausibly finish this in a few days, not a few weeks?
- [ ] If the story needs "and" to describe it — "the learner can practice AND review history AND change preferences" — it's an epic. Split it.
- Dataman example of an epic correctly *not* written as one story: Epic 4, Curator Console, is four separate stories (4.1 review results, 4.2 attempt-level detail, 4.3 assign different sets) plus whatever the class adds — not one mega-story called "curator dashboard."

### 6. Independence: delivers value on its own
- [ ] The story could ship by itself and be useful, even if the next story in the epic never gets built
- [ ] Implementation order dependencies are fine and normal ("Load a set" (3.1) before "Practice a stored set" (3.2)) — the checklist item is about *value*, not build sequence. Story 3.1 is valuable on its own (a curator can at least stage problems) even before 3.2 exists.

### 7. No solution smuggled in as a requirement
This is the one most Dataman stories fail on first draft. Ask: *is this what the stakeholder needs, or is it the first solution they thought of?*

- **Renee's leaderboard** — "show him where he ranks against his whole class" is a *solution*. The *need* underneath it is "help him stay motivated." A public ranking is one possible answer to that need — and it's a bad one here, because it directly conflicts with Ms. Alvarez's classroom requirement (below) and with the positive-only reinforcement the seeded backlog already builds (Story 2.2). Don't write the leaderboard as a Must Have. Write the need, and let the reward-scaling story (already in the backlog) answer it.
- **Ms. Alvarez's iPad** — "just make it an app on the class iPads" names a platform, not a need. The need is "usable at a station during rotation." Don't bake in a device.
- **Dale's ROM emulation** — "pull the chip, run the real firmware in a browser" is a solution to "behave exactly like the real device." The faithful-behavior stories (Epic 7) already capture that need without adopting Dale's specific implementation.

**Rule of thumb:** if the sentence names a UI widget, a specific technology, or a specific platform, stop and ask what need it's standing in for. Write the need. The solution is the developer's job, later.

---

## Hazards to flag instead of writing as stories

Not everything a stakeholder says should become a story. Naming these out loud — in a review comment, in your `interview-notes.md`, wherever — is itself the deliverable. A story quietly built around one of these is worse than no story at all.

| Hazard | What it looks like | What to do instead |
|---|---|---|
| **Solution-shaped "requirement"** | Names a specific feature/UI/platform before the underlying need is stated | Recover the need in one sentence; write *that* as the story, if it's real |
| **Vague requirement** | "Make it safe and good," "aligned to our standards" with no standards named | Flag as unresolved. Note what question would make it testable, and don't build from it yet |
| **Unstated assumption** | A stakeholder states something as obvious ("that's just how apps work now, right?") that the *other* stakeholder would dispute | Surface it as an open question — don't silently bake in either side's assumption |
| **Gold-plating** | Fidelity or polish beyond what any named stakeholder actually asked to use | Flag as beyond-MVP; a Could-Have or Won't-Have at best, defended in writing if kept |
| **Stakeholder conflict, averaged away** | Two stakeholders want incompatible things and the story quietly picks one without saying so | Name the conflict explicitly. A resolution is fine — silence about the conflict is not |
| **Device behavior with no stakeholder** | A rule copied straight from the manual with no `↳ Traces to:` person | Either find the stakeholder who needs it, or leave it out of the backlog |

> The last row is the one that catches careful people. A rule lifted straight from the manual reads like rigour and has nobody behind it. If you cannot name who needs it, you have copied a specification rather than written a requirement.
>
> — SHODANN, your Channel Success Partner

---

## Board columns, so "pull" means the same thing to everyone

**To Do → In Progress → In Review → Done.** Four columns, canonical. ("Sprint Backlog" as a column name is retired.) A story that passes this checklist is ready to sit in **To Do** waiting to be pulled — it is not automatically In Progress just because it's well-written. Pulling is still a planning decision (capacity, priority, sprint goal); this checklist only answers *is it buildable*, not *is it next*.

---

## Quick self-check before you call a story done

Ask these three, in order, and stop at the first "no":

1. **Can I name the stakeholder?** (Rule zero, above.)
2. **Could a developer start building from this without asking me a clarifying question?**
3. **If I read this story out loud to the stakeholder it traces to, would they recognize their own need in it** — not necessarily their own words, but their need?

Three yesses: pull it.
