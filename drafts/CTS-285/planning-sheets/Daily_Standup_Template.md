<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/Daily_Standup_Template.md -->
<!-- ADAPTED for 26FA per issue #5: Dataman re-anchor, solo-arc de-teaming, off-canon grading removed, Media-skin pass. Planning sheet — carries ZERO points (no canonical points-table row). -->

# Daily Standup Template
## CTS-285: Systems Analysis & Design

---

## Purpose

A quick daily sync with yourself and your Channel: what moved yesterday, what you'll move today, and what's blocking you. In this course you post async standups to the discussion board, since we don't meet daily. A standup is not a status report to a manager — it's the record that keeps your own work honest and lets Teacherbot and your classmates help you before you're stuck for three days.

> I read standups the way I read commits: for the delta. Yesterday you didn't have a working Answer Checker; today's standup will tell me whether that's still true. Post it even when the honest answer is "same as yesterday." Especially then.
> — SHODANN, your Channel Success Partner

---

## When to Use

Every class day during a sprint (minimum 10 entries per sprint). Post by 10am on class days. In professional teams, standups happen daily at the same time (often 9am or 10am) — the cadence is the point, not the medium.

---

## Instructions

1. **Keep it short** — 2-3 minutes to write, 1 minute to read
2. **Be specific** — "Fixed the two-tries reveal bug" beats "worked on code"
3. **Focus on work, not activities** — "Completed the Answer Checker story" beats "read some docs"
4. **Blockers are critical** — If you're stuck, say so immediately
5. **Post consistently** — A missing standup is a gap in your own record, and a signal no one can act on
6. **Read others' standups** — You're solo on your build, but the cohort is shipping the same kind of thing; someone has already hit your blocker

---

## Template

> **Which fields are required?** This template carries four sections. A given sprint assignment may require a subset — most commonly the three core questions (**yesterday / today / blockers**). Always follow the specific assignment for exactly which fields are graded. Even when "Help needed?" isn't explicitly required, use it — asking for help is the mechanic, and it's what the "honest" part of the grade rewards.
<!-- RECONCILIATION (issue #5, verify step): the source Week_05 assignment (line 328, "Format (Use Daily Standup Template)") embeds a THREE-question inline format (yesterday / today / blockers) that is a subset of this template's four sections. This template is the fuller superset and produces the graded artifact; the note above bridges the gap without editing the assignment. FLAGGED for the Week_05 assignment-adaptation task: decide whether to align the assignment's embedded format to this four-section template or keep the three-question subset. Do not resolve from inside this leaf. -->

### Daily Standup — [Date]

**Creator**: [Your name / channel]
**Sprint**: Sprint [#]

---

#### What did I do yesterday?
-
-
-

#### What will I do today?
-
-
-

#### Blockers or concerns?
-
-

#### Help needed?
-

---

> **The three worked examples below follow one illustrative Creator — "Robin" — through three standup days of the Dataman modernization. Robin is a teaching example, not a real Creator.** Watch how the blocker in Example 2 gets surfaced fast and resolved in Example 3 — that arc is the whole reason standups exist.

## Filled Example 1: On Track

### Daily Standup — Sprint 1, Day 3

**Creator**: Robin (illustrative)
**Sprint**: Sprint 1 — Answer Checker MVP

---

#### What did I do yesterday?
- Finished the input flow for a single problem: enter the problem, enter my answer, get a right/wrong signal (US-1.1)
- Wrote the check-answer logic and unit tests for the correct/incorrect branches (all passing)
- Started the "wrong answer → try again" path (roughly a third of the way in)

#### What will I do today?
- Finish the second-try path so a wrong first answer offers exactly one more try (US-1.2)
- Handle the reveal: after two misses, show the *correct* answer, never the entered one
- Open a draft PR so the Answer Checker work is reviewable

#### Blockers or concerns?
- The reveal step means I need to store each attempt, not just the latest answer — that's a bigger data change than I estimated. Might pull the ATTEMPT modeling forward from Sprint 2.

#### Help needed?
- Will ask Teacherbot in office hours whether "two tries" should reset if I leave the problem and come back, or persist. The manual is specific but I want to confirm the interpretation before I build it.

---

## Filled Example 2: Blocked

### Daily Standup — Sprint 1, Day 5

**Creator**: Robin (illustrative)
**Sprint**: Sprint 1 — Answer Checker MVP

---

#### What did I do yesterday?
- Built the ATTEMPT record so each try (try 1 / try 2) is stored with what was entered and whether it was correct
- Got the "EEE" wrong-answer signal firing on the first miss
- Tried to wire the after-second-miss reveal and got stuck

#### What will I do today?
- **BLOCKED** — Can't finish US-1.2 (two tries, then reveal) until I sort out the state bug below
- Will switch to US-2.1 (show right-out-of-tried after a round) so I keep moving while the blocker sits
- Write down the exact reproduction so I can show it in office hours

#### Blockers or concerns?
- **BLOCKER**: After a correct answer on try 2, my code still reveals the "correct answer" as if the learner had missed twice. The try-counter isn't resetting between problems, so problem 2 thinks it's already on try 2. Stuck ~2 hours.
- This blocks the whole Answer Checker acceptance criteria — the manual is explicit that Dataman never shows a wrong answer as if it were right, and right now my reveal logic can't be trusted.

#### Help needed?
- Teacherbot — is this a state-scoping problem (try-counter living at the wrong level)? I'll bring the failing test to class. I've been staring at it long enough that I need a second pair of eyes.

---

## Filled Example 3: Recovered / Helping

### Daily Standup — Sprint 1, Day 6

**Creator**: Robin (illustrative)
**Sprint**: Sprint 1 — Answer Checker MVP

---

#### What did I do yesterday?
- Fixed the try-counter bug (it was module-level state, not per-problem — reset it when each problem loads). Reveal now only fires after two genuine misses.
- Finished US-1.2; all acceptance criteria pass, including "never display the entered wrong answer as correct"
- Posted a note on the discussion board about the state-scoping fix, since two classmates flagged the same symptom

#### What will I do today?
- Finish US-2.1 (score after a round: right / tried)
- Add the edge-case test the manual implies: a correct answer on try 1 must offer no second try
- Update the risk register — "data model bigger than estimated" materialized; note how it resolved

#### Blockers or concerns?
- None blocking. Watching my Sprint 1 scope: pulling ATTEMPT forward cost me half a day, so US-2.2 (the scaled reward "light show") may slip to Sprint 2. Flagging now, not on the last day.

#### Help needed?
- None today. If anyone's still fighting the try-counter reset, my board post has the fix.

---

## Why This Matters

Daily standups are a cornerstone of Agile software development. Every company running Scrum — Google, Amazon, Microsoft, Spotify, and many more — does some form of daily standup.

Why they matter:

1. **Early problem detection** — A blocker surfaced today can be resolved today, not next week (see Example 2 → Example 3)
2. **Dependency awareness** — "I'm pulling ATTEMPT forward" tells future-you why Sprint 2 changed
3. **Accountability** — A public commitment to today's work creates gentle, real pressure
4. **Rapid adaptation** — Plans change daily based on what you learn building
5. **Communication over meetings** — One short written standup beats an hour of status talk

In professional development:
- **Co-located teams**: stand in a circle, 15 minutes, no sitting
- **Remote / async teams**: video or written (like your discussion-board posts)
- **Same time daily**: consistency builds the habit (often 9am or 10am)

Common standup antipatterns:
- Turning into an hour-long problem-solving session (solve problems *after* standup)
- Status-reporting to an authority instead of syncing your own work (it's not a review)
- Writing your update without reading anyone else's (defeats the shared-record purpose)
- Narrating yesterday for ten minutes (keep it brief)

Your async standups in CTS-285 are the same skill you'll use in internships and jobs — same format, different medium. In **CSC-289** (the team capstone, weeks 13–16 here and the spring course), you'll run these live with a team. Creators who keep standup discipline ship working software; Creators who skip standups discover integration problems in the last week.

---

## Common Mistakes to Avoid

- **Mistake**: Writing "Worked on project" with no details
  **Better approach**: Be specific: "Finished the two-tries reveal, all acceptance criteria pass." Specificity is what makes the record useful later.

- **Mistake**: Not mentioning a blocker until you're two days behind
  **Better approach**: Surface blockers immediately. "Stuck on the try-counter for 2 hours" in today's standup means help arrives today, not Thursday.

- **Mistake**: Writing a novel (10+ bullets, 500 words)
  **Better approach**: Three bullets yesterday, three today, one or two blockers. Longer explanations are a separate conversation.

- **Mistake**: Only reading your own standups
  **Better approach**: Read the cohort's. "Robin hit the try-counter bug" might be exactly the bug you're about to hit.

- **Mistake**: Committing to 8 tasks today when you historically finish 2-3
  **Better approach**: Be realistic about today. Over-promising and under-delivering erodes your own trust in your estimates.

- **Mistake**: Writing the standup at 11pm for a 10am deadline
  **Better approach**: Post at a consistent time. A late standup can't be acted on during the day it's about.

- **Mistake**: Not asking for help when you need it
  **Better approach**: The "Help needed" section is not weakness — it's how you accelerate. Stuck for two hours? Ask. Asking is the mechanic, not the failure.

---

## Integration with Course Project

In CTS-285, standups are part of your sprint work during the Dataman build:

**Requirements**:
- Minimum 10 standups per 2-week sprint (one per class day)
- Posted by 10am on class days
- Include all sections (yesterday, today, blockers, help)
- Specific, not vague ("worked on project" is not a standup)

**How your standups are counted:** Standups are graded **inside the parent sprint assignment's own rubric line** — not as a separate "participation" score. There is no participation category in this course, and this template assigns no points of its own. Check the current sprint assignment (e.g. the Sprint 1 assignment) for the exact rubric line your standups feed, and how many points it carries there.

**What good standups demonstrate**:
- Consistent, visible progress
- Problems surfaced early
- Realistic commitments you actually meet
- A record your future self can read

**Red flags in your own standups**:
- "Still working on the same task" for 5 days straight (story too big, or you're stuck — either way, say so)
- Zero blockers for an entire sprint (nobody's build is that smooth — you're probably not writing them down)
- Never asking for help (everyone gets stuck; the ones who ship ask)
- Posting three days late (the record only helps if it's current)

**Pro tips**:
- **Write tomorrow's "yesterday" at end of day** — faster to post at 9am
- **Reference story IDs** (US-1.1, US-1.2) so progress is traceable to the backlog
- **Update your board** (`To Do → In Progress → In Review → Done`) at the same time as your standup — keep them in sync
- **Read the cohort's standups before class** — you might save yourself Robin's two hours

**This is a career-critical habit. Build it now in CTS-285, use it for the rest of your working life.**
