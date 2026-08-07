<!--
  26FA ADAPTATION — Module 6 activity, re-anchored to the Dataman modernization spine.
  SOURCE (read-only): sources/uv-285/activities/Module_06_Risk_Assessment_Workshop.md — a generic
    small-group workshop (sticky notes, five generic risk categories, an invented Vista/Healthcare.gov
    "Why This Matters" pitch, a Definition-of-Done part) with zero Dataman references. The exercise
    shape (identify → assess → mitigate) is preserved; the material, categories, and scales are not.

  ALIGNMENT — this workshop sits at Week 6 and previews Week 11; both are MERGED and this file's
  vocabulary is pinned to theirs, not to the source's:
    - drafts/cts285/assignments/Week_06_Assignment_Sprint_1_Risk_Register.md — the graded register
      (25 pts / 3.3% of 750). Same four risk categories (Technical, Requirements, Schedule, Scope —
      the source's "Resource" and "External" are dropped, matching Week 6's own set), same Likelihood
      (1–5, % chance) and Impact (1–5, named-severity) scales, same Risk Score = L × I, same four
      priority bands (Critical 15–25 / High 10–14 / Medium 5–9 / Low 1–4), and the same worked
      example — Risk "the two-tries rule is load-bearing in more than one place" — scored L4×I4=16.
    - drafts/cts285/assignments/Week_11_Assignment_Risk_Mitigation_QA.md — the graded close-out
      (50 pts / 6.7% of 750). This workshop previews, but does not grade, its four verdicts
      (Resolved / Mitigated / Accepted / Materialised) so students meet the vocabulary once, ungraded,
      before it counts.

  NOTE — drafts/cts285/planning-sheets/Risk_Register_Template.md (an earlier planning sheet) uses a
  DIFFERENT likelihood/impact scale and a three-band (not four-band) priority split than Week 6/11
  use. That drift is out of this file's scope (the template is not one of the two files this task
  was chartered to match) and is left unflagged-elsewhere for a future reconciliation pass; this
  workshop follows Week 6/11, per its charter, not the template.

  UNGRADED — this is an in-class workshop. No row in CTS285_Canonical_Points_Table.md; no rubric, no
  grade points are introduced here. Likelihood/Impact/Risk Score are the numeric scales in play, and
  here they are a rehearsal, not a score.

  Companion handout authored alongside this file: activities/handouts/Risk_Checklist_Template.md.

  Voice: Corporate body (L2) only. No SHODANN dialogue is written in this pass — every place an
  interjection belongs carries the literal marker SHODANN-SLOT on its own line for a later pass.
  No Andrew's Note appears in the source activity, so none is added here.

  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 6 Activity: Risk Assessment Workshop — Finding What's Actually Fragile in Dataman

**Duration**: 100 minutes
**Format**: Individual with peer review
**Runs**: Week 6 (Sprint 1 Risk Register), previewing Week 11's verdict close-out

**Materials Needed**:
- Your Sprint 1 design package: ERD, `Dataman_Seeded_Backlog.md` classification, stakeholder transcripts <!-- PATHFORM: pending spine ruling -->
- `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->, PDF pp.4–6 (printed pp.2–4) and PDF pp.21–23 (printed pp.19–21) — Answer Checker, Memory Bank, Hints for Parents and Teachers, and the Timer
- `Risk Checklist Template` handout (`activities/handouts/Risk_Checklist_Template.md`)
- `Risk_Register_Template.md` <!-- PATHFORM: pending spine ruling --> — the same template Week 6's graded register uses
- Index cards, or your `risk-notes.md` scratch file

**Learning Objectives**:
- Recognize the difference between a risk that could describe any software project and a risk that could only happen to Dataman
- Identify risks by tracing them to something specific — a manual behavior, a schema decision, a backlog classification, an incomplete source — not to a stock checklist
- Score risk Likelihood × Impact using the same scale Week 6 grades, and recognize when a spread of scores is more useful than a wall of Criticals
- Write mitigation actions specific enough to put on a calendar
- Meet the four close-out verdicts (Resolved, Mitigated, Accepted, Materialised) before they're graded in Week 11, including why "it happened" is not a failure grade

---

## Overview

**A risk register that could have been written before you read the 1977 manual is a register that didn't use what you know.**

You've read the manual. You've classified 26 stories. You've drawn an ERD. That work makes you the person in the room who knows exactly where Dataman 2.0 is fragile — not generically, specifically: which rule appears in two code paths, which arithmetic case the manual never settles, which pages you never got to read at all.

Today's workshop is not the graded register. It's the rehearsal. Everything you practice here — spotting a device-specific risk, scoring it honestly, writing a mitigation you could actually do, and knowing what a verdict looks like when the risk is finally closed — you'll do for real in Week 6 and close out for real in Week 11.

By the end, you'll have:
- Studied five risks that only exist because this is Dataman, not "a software project"
- Sorted a mixed list of risk statements into generic (reject or rewrite) and Dataman-specific (keep)
- Drafted 8–12 of your own risks from your own build, scored with Likelihood × Impact
- Written one mitigation specific enough to have a day and an owner attached
- Practiced assigning Resolved / Mitigated / Accepted / Materialised to hypothetical outcomes — the same four verdicts Week 11 grades for real

> A generic risk list is one I cannot do anything with. "Scope creep" is true of every project ever run and tells me nothing about yours. The five risks in this workshop exist only because your project is a 1977 calculator with an incomplete manual, and that specificity is the whole skill. It is also what I will be reading for.
>
> — SHODANN, your Channel Success Partner

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Gather materials**:
   - [ ] Your ERD and `Dataman_Seeded_Backlog.md` classification, open in front of you
   - [ ] Your three stakeholder transcripts, reread not just recalled
   - [ ] `Risk Checklist Template` handout
   - [ ] DATAMAN_MANUAL_TRANSCRIPT.md PDF pp.4–6 (printed pp.2–4) and PDF pp.21–23 (printed pp.19–21) available
   - [ ] Index cards, or your scratch file open

2. **Remember where you are in the story**:
   - You're a systems analyst on the Dataman modernization initiative, one sprint in
   - You already have more evidence about where this build is fragile than any generic checklist could give you — this workshop is about using it

3. **Review the risk categories** (the same four Week 6 grades):
   ```
   TECHNICAL RISKS — from the device's own behavior
   REQUIREMENTS RISKS — from gaps or silences in the source document
   SCHEDULE RISKS — from your own estimates, capacity, and calendar
   SCOPE RISKS — from what's tempting to build beyond the MVP line
   ```

4. **Review the risk assessment scales** (the same Week 6 grades):
   ```
   LIKELIHOOD (1–5):
   1 = Very unlikely (5% chance)
   2 = Unlikely (20% chance)
   3 = Possible (50% chance)
   4 = Likely (70% chance)
   5 = Very likely (90%+ chance)

   IMPACT (1–5):
   1 = Negligible (minor inconvenience)
   2 = Low (small delay, workaround exists)
   3 = Moderate (week delay, quality reduced)
   4 = High (major rework, deadline at risk)
   5 = Critical (project failure)

   RISK SCORE = Likelihood × Impact
   Critical (15–25) · High (10–14) · Medium (5–9) · Low (1–4)
   ```

**Instructor Check**: Everyone has their own design package open — not a shared example — and understands the four categories and both scales.

---

## Part 1: Risk Identification — The Generic Trap (30 minutes)

### Instructions

**The test for the whole workshop: would I have known this risk before I read the 1977 manual? If yes, it's a stock risk. If no, it's a Dataman risk.**

**Step 1: Study five risks that only exist because this is Dataman (10 minutes)**

Read each of these slowly. Notice what each one traces to — a specific manual page, a specific schema decision, a specific gap in the source.

1. **The two-tries rule is load-bearing in more than one place.** The manual gives the learner two attempts before revealing the answer (PDF p.5, printed p.3 — restated in detail at PDF p.22, printed p.20), and again for the Memory Bank (PDF p.6, printed p.4; detail at PDF p.23, printed p.21). If Answer Checker and the practice games each implement their own attempt-counting, the two copies will drift — a learner gets three tries in one place and one in another.
2. **Division with remainder has no single settled representation.** The manual says a remainder shows as an "r" next to the whole-number answer (PDF p.5, printed p.3) — but doesn't say what happens when the remainder is zero, or how your schema should store "answer with optional remainder" versus two plain integers. Where the manual is silent, you decide, and an undocumented decision is a risk.
3. **The Memory Bank's ten-problem ceiling is a hard constraint.** The manual caps it at ten (PDF p.6, printed p.4; restated at PDF p.23, printed p.21). Does your schema enforce that at the model layer, or does a curator only discover it when the eleventh problem silently fails to save?
4. **The timer is specified as untestable.** The manual says DataMan's Atom Clock "may vary depending on how fresh the battery is, room temperature, etc." (PDF p.23, printed p.21). A requirement that the source document itself calls variable cannot be pinned to an exact expected value — your test plan has to decide what "correct" even means here.
5. **The source you're building from is incomplete.** Pages 7–18 of the transcript are not transcribed. Anything you've inferred about the modes those pages would cover is an assumption wearing a requirement's clothes.

None of these are on any generic software-risk checklist. All five come from actually having read the manual and actually having built the schema. That's the standard the rest of this workshop holds you to.

**Step 2: The generic-vs-specific sort (10 minutes)**

Below are eight risk statements. Sort each into **Generic** (could describe almost any software project — flag it, don't build a mitigation plan around it) or **Dataman-specific** (traces to something only this build has).

1. "The database could go down."
2. "The two-tries rule could drift between Answer Checker and the practice games if I implement attempt-counting twice."
3. "A team member could get sick." *(you are not on a team — CTS-285 is solo; is this even a real risk for you?)*
4. "The stakeholder keeps adding features."
5. "I might not enforce the ten-problem Memory Bank ceiling at the schema level, and a curator finds out by hitting a silent failure instead."
6. "The hosting platform could have an outage."
7. "Pages 7–18 of the manual transcript aren't available, so anything I built for those modes is an assumption I haven't validated."
8. "The timer requirement can't be pinned to an exact value because the manual itself calls it variable with battery and room temperature — my test plan has to decide what 'correct' means here before I can test it."

Work through all eight before checking against the handout's rule of thumb. You should land close to: **1, 3, 4, 6** are generic — true of nearly any project, and none traces to anything you actually know about Dataman. **2, 5, 7, 8** are Dataman-specific — each names a manual page, a schema decision, or a documented gap.

For each generic one, don't throw it away — ask whether there's a Dataman-specific version underneath it. "The stakeholder keeps adding features" (4) might really be "Curator Console features keep expanding toward a full gradebook" once you ground it in your own transcripts. A generic risk with no specific version underneath it is one you should drop, not keep at a discount.

**Step 3: Brainstorm your own 8–12 risks (10 minutes)**

Using the Risk Checklist Template's prompts, write 8–12 risks from **your own build** — not from this handout, not from a classmate's. Pull from:
- Your own read of the manual (what did *you* notice was ambiguous or hard to test?)
- Your own ERD (where did modeling something force a decision the manual didn't make?)
- Your own backlog classification (which Must-Haves are the ones you're least sure you can finish?)
- Your own stakeholder transcripts (where do Renee, Ms. Alvarez, and Dale disagree, and what happens if you guess wrong about whose need wins?)

Aim for coverage across all four categories — Technical, Requirements, Schedule, Scope. A list that's all Technical is a list that hasn't looked at the calendar or the scope line yet.

> A list that is all Technical is a list written by somebody who has not opened a calendar. I say that without judgement: Technical risks feel like real engineering, so they are the ones everyone reaches for first. Schedule risks feel like admitting something. They are also the ones that materialise.

### Expected Output

- Five model risks read and understood, each traced to a page, a schema decision, or a documented gap
- Eight statements sorted Generic / Dataman-specific, with the generic ones either dropped or rewritten with a specific version underneath
- 8–12 of your own risks, drafted from your own build, covering all four categories

### Common Issues & Fixes

**Issue**: Every brainstormed risk is technical
- **Fix**: Reread your own Week 2 Must-Have list and your calendar. What happens if you kept too many Must-Haves? What's tempting below the line (the stretch epic, the full gradebook)?

**Issue**: A risk is really an issue you already have, not a future threat
- **Fix**: "My schema doesn't enforce the ten-problem ceiling yet" is a current issue — fix it. "A curator could add an eleventh problem and the system won't say why it failed" is the risk. Write the risk, not the to-do.

**Issue**: A risk is actually an assumption dressed up as a threat
- **Fix**: "I assume the manual's silent pages don't matter" isn't a risk statement — turn it around: "If pages 7–18 specify a mode I built differently, I'll have to rework it after the fact."

---

## Part 2: Risk Assessment — Scoring Without Flattening Everything to Critical (25 minutes)

### Instructions

**Step 1: Score the worked example together (5 minutes)**

Take Risk 2 from Part 1 — the two-tries duplication. Walk through the scoring the same way Week 6's own worked example does:

```
Risk: The two-tries rule is load-bearing in more than one place

Likelihood: 4 (Likely — you already have two code paths that check answers)
Impact: 4 (High — the attempt rule is the core teaching loop; inconsistency
           here is not cosmetic)
Risk Score: 16 (CRITICAL)
```

This is the exact scoring Week 6 uses for the same risk. Notice the reasoning behind each number is specific — "you already have two code paths," not "this feels risky."

**Step 2: Score your own 8–12 risks (15 minutes)**

For each risk from Part 1, assign Likelihood and Impact using the scales from setup, and calculate Risk Score. Write one sentence of reasoning for each number — not just the digit.

**Step 3: Check your spread (5 minutes)**

Look at your scored list. Count how many land in each band:

```
Critical (15–25): ___
High (10–14): ___
Medium (5–9): ___
Low (1–4): ___
```

If eight or more of your twelve risks are Critical, you have not prioritized — you've just relabeled everything. Force a re-rank: which single risk is your worst, and what makes it worse than the others? Impact 5 means the project fails, not that it would be annoying. A register where everything is Critical tells your future self nothing about what to do first.

### Expected Output

- The worked example (two-tries duplication) scored and matched against Week 6's own answer
- Your own 8–12 risks scored with Likelihood, Impact, and one sentence of reasoning each
- A visible spread across at least three of the four priority bands

### Common Issues & Fixes

**Issue**: Almost everything scores 16
- **Fix**: This is the single most common failure in this exercise, and it's the same one Week 6 names as a struggle to watch for. Ask: if you could only mitigate three of these, which three? That forces the spread you're avoiding.

**Issue**: Arguing for five minutes about whether Likelihood is a 3 or a 4
- **Fix**: Time-box it to sixty seconds. If you genuinely can't decide, take the higher number and move on — this is a rehearsal, not the final register.

**Issue**: Impact and Likelihood both default to "somewhere in the middle" for everything
- **Fix**: Find your actual highest and actual lowest first. Which risk would sink the project if it happened? Which one would you barely notice? Anchor the rest between those two.

---

## Part 3: Mitigation — Writing an Action, Not a Wish (25 minutes)

### Instructions

**A mitigation you can't put on a calendar isn't a mitigation.**

**Step 1: See the difference (5 minutes)**

**Bad**: "Be careful with the attempt logic."
**Good**: "Extract attempt-tracking into one function before Sprint 2 starts; write one test that runs the same attempt sequence through every mode and asserts identical behavior."

The good version names a specific action, a rough deadline, and a way to check it worked. The bad version is a feeling.

**Step 2: Write one full mitigation plan for your worst risk (15 minutes)**

Take the Critical or High risk you scored worst in Part 2. Using the strategy categories below, write a mitigation plan with at least two specific actions.

**Mitigation strategies**:
- **Avoid** — change the plan so the risk can't happen
- **Reduce** — take an action that lowers likelihood or impact
- **Accept** — the risk stays at full strength, and you say in writing why that's the right call
- **(Transfer doesn't apply to a solo Dataman build the way it might on a team — there's no vendor or teammate to hand this to. Skip it, or note if a future CSC-289 team context would change that.)**

For each action, name: what you'll do, roughly when, and how you'd know it worked.

**Step 3: Peer-check one mitigation (5 minutes)**

Trade with a partner. Read their mitigation plan and ask one question: **"If this action doesn't happen by the deadline you wrote, what do you actually do?"** If they don't have an answer, the plan is missing its fallback — note it.

> A mitigation with no fallback is a wish with a date attached. Your partner's question is the only test that matters here, and I would ask it of your plan too. What do you do on the day it does not happen.

### Expected Output

- One full mitigation plan for your worst-scored risk, with at least two specific, dated actions
- A partner's fallback question asked and answered (or flagged as missing)

### Common Issues & Fixes

**Issue**: The mitigation is "test more" or "research it"
- **Fix**: Test what, specifically? Research what question? Rewrite until a stranger reading it could tell exactly what to do without asking you.

**Issue**: No fallback if the mitigation doesn't work
- **Fix**: Mitigation lowers a risk's likelihood or impact. It doesn't guarantee the risk never happens. What's the plan if it happens anyway?

**Issue**: The action has no way to check it worked
- **Fix**: "I'll extract the attempt-tracking function" needs a companion: "...and one test proves both modes now behave identically." No check, no way to know if the mitigation actually landed.

---

## Part 4: Meeting the Four Verdicts Before They're Graded (15 minutes)

### Instructions

**In Week 11, every Critical and High risk in your register gets one of four verdicts. Meet them now, ungraded, so the vocabulary isn't new when it counts.**

| Verdict | Means |
|---|---|
| **Resolved** | The mitigation ran and the risk is gone |
| **Mitigated** | Still present, but reduced to something you can live with |
| **Accepted** | Still present at full strength; you decided to carry it, and you say why |
| **Materialised** | It happened. What did it cost, and what did you do? |

**Read that last row again. "Materialised" is not a failure grade.** A register that predicted a real problem did its job — that's the register working, not the register failing. The only bad outcome is a risk that happened and was never written down at all.

**Step 1: Assign hypothetical verdicts (10 minutes)**

For three of your own scored risks from Part 2, imagine it's Week 11 and write one plausible sentence for each verdict category — not a prediction of what will actually happen, just practice with the vocabulary:

```
Risk: [your risk]
If Resolved, it would look like: ___
If Mitigated, it would look like: ___
If Accepted, it would look like: ___
If Materialised, it would look like: ___
```

Doing all four for the same risk (rather than picking one) is the point — it makes the difference between the verdicts concrete instead of abstract.

**Step 2: Discuss (5 minutes)**

As a class or in pairs: which verdict felt hardest to write a sentence for, and why? Most students find "Materialised" hardest — not because it's hard to imagine, but because it feels like admitting failure. It isn't. Naming what a risk would cost if it happened is exactly the same skill as naming what mitigating it would look like.

> Materialised is not a failure grade, and I will keep saying so until it stops sounding like reassurance. A register that predicted a real problem did the job it exists to do. The register I would look at twice is the one where everything came up Resolved, because that is usually a register that only listed risks it had already handled.

### Expected Output

- Four hypothetical verdict sentences written for each of three risks
- A working sense of what distinguishes "Mitigated" from "Accepted," and why "Materialised" isn't a bad grade

### Common Issues & Fixes

**Issue**: Can't imagine what "Materialised" would actually look like
- **Fix**: Ask "if this happened, what would I be doing on that day?" — debugging, explaining to Teacherbot-as-client, staying up late. Concrete, not abstract.

**Issue**: "Mitigated" and "Resolved" sentences read identically
- **Fix**: Resolved means gone. Mitigated means smaller but still there. If your Mitigated sentence describes a risk with zero remaining likelihood, it's actually a Resolved sentence — rewrite it to leave something behind.

---

## Wrap-up & Reflection (5 minutes)

**Ungraded — for discussion, not submission.** Talk through as a class, or jot notes for yourself; nothing here goes to Canvas.

### Discussion Questions

**1. The generic trap**: Before Part 1's sort, would you have written any of the four generic statements into your own register? What made them feel plausible at first?

**2. The spread**: Did forcing a spread in Part 2 change which risk you consider your worst? Why might your gut-feel worst risk and your scored worst risk disagree?

**3. Materialised, reconsidered**: Before this workshop, did "a risk that happened" sound like something to hide from a grade? Does it still?

**4. Toward Week 6**: You'll do the full version of this — for a grade, at least 8 risks, full mitigation plans — this week. What will you do differently now that you've drilled the discrimination once?

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Trigger Identification
For your worst-scored risk, write the specific, observable signal that would tell you it's starting to happen — not "if things go wrong" but something you could actually notice. ("Any arithmetic story reaching In Review without a remainder test" is a trigger. "If division gets buggy" is not.)

### Challenge 2: The Calibration Question, Early
Pick one risk you scored Low. Ask: is it Low because it's genuinely unlikely, or because you haven't looked closely enough to know? What evidence would change your mind? (This is the same discipline Week 11's backlog refinement grades later — you're just meeting it early.)

### Challenge 3: Cross-Category Risk
Find one risk in your list that actually belongs to two categories at once (a Scope decision that's also a Schedule risk, for instance — the Curator Console expanding into a gradebook is both). Write it once, and note both categories in your final register rather than forcing a single label.

---

## Instructor Notes

### Timing Breakdown
- **0–5 min**: Setup, materials check
- **5–35 min**: Part 1 — model risks, the generic-vs-specific sort, own brainstorm
- **35–60 min**: Part 2 — scoring, spread check
- **60–85 min**: Part 3 — one full mitigation plan, peer fallback check
- **85–100 min**: Part 4 — meeting the four verdicts, wrap-up

### Common Student Struggles

**1. Struggle**: Every risk on the sticky note (or scratch file) is technical, nothing is schedule or scope
   - **Signs**: A student's Part 1 list is eight variations on "something breaks," none touching the calendar or the stretch epics
   - **Intervention**: Point at their own Week 2 Must-Have count and their own transcripts. "What if you kept too much? What if Ms. Alvarez and Renee's disagreement gets resolved the wrong way?"
   - **Success Indicator**: The final 8–12 risks touch all four categories, not just Technical

**2. Struggle**: Can't tell a generic risk from a Dataman-specific one even after the sort drill
   - **Signs**: A student defends "the database could go down" as Dataman-specific because "Dataman has a database"
   - **Intervention**: Run the test out loud with them: "would you have known this before you read the manual?" A database existing is true of nearly everything they'll ever build; it doesn't trace to Dataman's own behavior.
   - **Success Indicator**: The student can point to a specific manual page, schema decision, or transcript line for each risk they keep

**3. Struggle**: Scoring drifts to all-Critical within the first three risks
   - **Signs**: Three risks in, every Likelihood and Impact is a 4 or 5
   - **Intervention**: Stop them and ask for their actual worst risk and actual best-case risk first, before scoring the middle ones. Anchoring at the extremes breaks the drift.
   - **Success Indicator**: The final spread has at least three of the four bands represented

**4. Struggle**: Mitigation is a wish, not an action
   - **Signs**: "I'll be more careful with the timer logic" appears as a full mitigation plan
   - **Intervention**: Ask "what would I see you do on a specific day?" If they can't answer, it's not an action yet.
   - **Success Indicator**: Every mitigation names a rough deadline and a way to check it worked

**5. Struggle**: "Materialised" still feels like it needs to be avoided rather than practiced
   - **Signs**: In Part 4, a student writes a weak or joking sentence for the Materialised row and takes the others seriously
   - **Intervention**: Ask them to actually imagine the day it happened — what they'd do next, not just that it's bad. Point out that the register's job was to make them look, and a Materialised risk they'd already written down means they saw it coming.
   - **Success Indicator**: All four verdict sentences get equal, specific effort — not three real ones and a shrug

### Materials to Prepare

**Before Class:**
- [ ] Confirm every student has their own ERD, backlog classification, and transcripts accessible — this workshop fails if run against a shared example instead of each student's own build
- [ ] Print or project `Risk_Checklist_Template.md`
- [ ] Have `DATAMAN_MANUAL_TRANSCRIPT.md` PDF pp.4–6 (printed pp.2–4) and PDF pp.21–23 (printed pp.19–21) ready to project for Part 1's model risks
- [ ] Prepare the eight Part 1 sort statements on slides or handout, without the generic/specific answers visible

**During Class:**
- [ ] Circulate during the Part 1 brainstorm — the most common failure (all-technical risks) shows up fast and is easy to redirect early
- [ ] Watch scoring in Part 2 for the all-Critical drift; it is worth interrupting the room to name out loud once you see it starting
- [ ] During Part 4, listen for students treating "Materialised" as a joke category — that's the moment to slow down and take it seriously as a class

**After Class:**
- [ ] Note which of the five model risks students found hardest to apply the generic-vs-specific test to — useful signal for what Week 6 grading will need to watch for
- [ ] Collect a few strong mitigation plans (with permission) to use as Week 6 reference examples

### Teaching Tips

**Lead with the test, not the format.** "Would you have known this before you read the manual?" is a sharper opening than "here are four risk categories" — the categories are easy to fill in generically; the discrimination is the actual skill.

**Use the students' own build as evidence, not a shared scenario.** This workshop only works if every risk traces to something the student individually decided, read, or classified. A shared class example produces shared, generic risks — exactly the failure mode the workshop exists to prevent.

**Let "Materialised" sit uncomfortably for a moment.** Some students will want to rush past it. Don't let them — the discomfort is the thing the discussion questions are there to work through, and it's worth more time than it feels like it needs.

**Connect forward explicitly.** Say out loud that Week 6 is the graded version of Parts 1–3, and Week 11 is the graded version of Part 4. This workshop is the rehearsal, not the performance.

### Teaching Philosophy Notes

The original version of this activity taught risk identification against five generic categories that would apply equally to a scheduling app, a shopping cart, or a game — plus an invented "why this matters" pitch built on two textbook software disasters nobody in the room had any stake in. This version trades that for something with a cost to getting wrong: a device with documented, citable limits (two tries, ten problems, an unsettled remainder, a timer the manual itself calls untestable) and a source with a known, named gap (pages 7–18).

The hardest habit to build here isn't the risk-register format — Likelihood × Impact is arithmetic. It's the discipline of asking, for every risk that comes to mind easily, whether it came to mind *because of Dataman* or because it's the risk every project has. Students who skip that question fill a register with entries that are true and useless. Students who ask it every time end up with a shorter, sharper list that says something only they could have written.

The four verdicts exist in this workshop for the same reason the five model risks do: so that when Week 11 asks a student to write "Materialised" next to something they predicted and it happened anyway, that word doesn't land as a grade going wrong. It lands as the register doing exactly what it was for.

---

**Remember**: The goal isn't a longer list than the next student's. The goal is a list that couldn't have been written about anything else.
