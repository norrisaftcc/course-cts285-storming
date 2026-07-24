<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/Sprint_Retrospective_Template.md -->
<!-- ADAPTED for 26FA per issue #5: worked example rebuilt as a solo Dataman Sprint 1 retro (team removed), solo-arc de-teaming. Kerth Prime Directive + facilitation timeboxes RETAINED, reframed for solo + a forward-looking wks 13–16 / CSC-289 team note. Media-skin pass. Retro weeks NOT hard-coded — CADENCE markers flag the pending spine ruling. Planning sheet — carries ZERO points. -->

# Sprint Retrospective Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Reflect on the sprint that just ended: celebrate what worked, name what didn't, and commit to specific improvements for the next sprint. Retrospectives turn experience into learning.

---

## When to Use

At the end of each sprint, after the sprint review but before the next planning session. Your specific retro weeks come from the course schedule. A solo retro takes 15–20 minutes; a team retro runs 45–60 minutes.
<!-- CADENCE: pending spine ruling. The source hard-coded retros at "Weeks 6, 10, 14". Master plan §2 (proposed, no ADR) runs a 2-week solo cadence (Sprint 1 = wks 5–6, Sprint 2 = wks 7–8, Sprint 3 = wks 9–10), which would place retros at the close of each. Do NOT reintroduce hard-coded retro weeks until the spine session rules. See issue #5 BLOCKED-ON. -->

---

## Instructions

1. **Review sprint data** — look at your velocity, completed vs planned stories, blockers hit
2. **Be honest** — retrospectives only work if you're candid about problems
3. **Focus on process, not blame** — "estimation was off" not "I'm bad at this"
4. **Specific examples** — "the try-counter bug sat for two hours" beats "debugging was hard"
5. **Action items must be concrete** — "improve testing" is vague; "write the edge-case test before the fix" is actionable
6. **Limit action items to 3–5** — you can't fix everything at once
7. **Review last sprint's actions** — did you actually implement the improvements you committed to?

---

## Template

### Sprint Retrospective — Sprint [#]

**Date**: [Date]
**Sprint Duration**: [Start] - [End]
**Present**: [You — solo; in CSC-289, list team members]

---

## Sprint Metrics

- **Planned Velocity**: ___ story points
- **Actual Velocity**: ___ story points
- **Stories Completed**: ___ / ___
- **Stories Carried Over**: ___ (list Story IDs)
- **Blockers Encountered**: ___

---

## What Went Well?

**Things to celebrate and keep doing:**

1.
2.
3.

---

## What Didn't Go Well?

**Problems, frustrations, and roadblocks:**

1.
2.
3.

---

## What Did I Learn?

**Insights and discoveries from this sprint:**

1.
2.
3.

---

## Action Items for Next Sprint

**Specific, measurable improvements I commit to:**

| Action Item | Owner | Success Criteria | Priority |
|-------------|-------|------------------|----------|
| | | | H/M/L |
| | | | H/M/L |
| | | | H/M/L |

---

## Review of Previous Sprint's Action Items

**Did I actually implement last sprint's improvements?**

| Previous Action Item | Status | Notes |
|---------------------|--------|-------|
| | [ ] Done<br>[ ] In Progress<br>[ ] Not Started | |
| | [ ] Done<br>[ ] In Progress<br>[ ] Not Started | |

---

## Process Changes

**Changes to my sprint process for next sprint:**
-
-

---

## Questions for Teacherbot

**Things I need instructor guidance on:**
-
-

---

> A retro is the one place you get to measure yourself against your last sprint on purpose. That is the only comparison I care about — you versus your previous self, never you versus anyone else. Write down what changed. I keep those, and they add up faster than you think.
> — SHODANN, your Channel Success Partner

## Filled Example

### Sprint Retrospective — Sprint 1

**Date**: end of Sprint 1
**Sprint Duration**: first 2-week development sprint
**Present**: Robin (illustrative — solo)

---

## Sprint Metrics

- **Planned Velocity**: 13 story points
- **Actual Velocity**: 11 story points
- **Stories Completed**: 2 / 3 (US-1.1, US-1.2 done; US-2.1 started but not finished)
- **Stories Carried Over**: US-2.1 (score after a round — the try-counter blocker ate the time it needed)
- **Blockers Encountered**: 1 major (the try-counter state bug in the two-tries reveal)

---

## What Went Well?

**Things to celebrate and keep doing:**

1. **Modeling ATTEMPT up front paid off** — pulling the data model out early meant the reveal logic had somewhere to live. The story that looked like a "3" was really a "5" because of it, and estimating that honestly kept the rest of the sprint sane.

2. **A test caught the honesty bug** — my "correct on try 1 offers no second try" test failed loudly and exposed the try-counter scoping problem. Without it I'd have shipped a Dataman that sometimes reveals answers it shouldn't.

3. **Posting the fix helped the cohort** — two classmates had the same try-counter symptom; my board post saved them the two hours it cost me.

---

## What Didn't Go Well?

**Problems, frustrations, and roadblocks:**

1. **The try-counter bug sat too long before I asked for help** — I was stuck about two hours before bringing it to office hours. I have a "stuck for an hour, then ask" rule I didn't follow.

2. **I underestimated US-1.2** — "two tries, then reveal" hid the whole ATTEMPT model. I estimated the typing, not the design.

3. **No buffer** — I committed 13 points at the top of my hours. When the blocker hit, there was nothing to absorb it, so US-2.1 carried over.

---

## What Did I Learn?

**Insights and discoveries from this sprint:**

1. **"Simple" stories hide state.** The reveal step wasn't about UI — it was about *remembering which try you're on*. Next time I'll ask "what does this need to remember?" during estimation.

2. **"Almost done" isn't done.** US-2.1 was close but didn't meet the Definition of Done, so it's worth zero this sprint. Either it meets all the criteria or it carries. No partial credit.

3. **Budget slack, not just hours.** Committing at my ceiling left no room for the one thing that always goes wrong. Next sprint I'll commit below the ceiling on purpose.

---

## Action Items for Next Sprint

**Specific, measurable improvements I commit to:**

| Action Item | Owner | Success Criteria | Priority |
|-------------|-------|------------------|----------|
| Follow the "stuck for an hour, then ask" rule | Robin | If a blocker shows in two standups running, I take it to office hours that day | H |
| Ask "what does this need to remember?" when estimating | Robin | Every story gets a one-line note on the state/data it touches before I point it | H |
| Commit below my ceiling — keep buffer | Robin | If my hours suggest 13 points, I commit to 10–11 and leave room for the unknown | M |
| Write the edge-case test before the fix | Robin | Remainder, no-negatives, and reveal tests exist before those stories reach In Review | H |

---

## Review of Previous Sprint's Action Items

**Did I actually implement last sprint's improvements?**

| Previous Action Item | Status | Notes |
|---------------------|--------|-------|
| (none yet) | — | This is my first retro. From Sprint 2 on, I start each retro by checking whether I actually did what I said I'd do here — that accountability loop is half the value. |

---

## Process Changes

**Changes to my sprint process for next sprint:**
- **Add a "what does it remember?" line to estimation** — surface hidden state before it ambushes me
- **Mid-sprint self check-in** — halfway through, a 15-minute honest look at whether the sprint goal is still reachable, while there's still time to cut scope

---

## Questions for Teacherbot

**Things I need instructor guidance on:**
- How do experienced developers handle a story that turns out to hide a whole data model mid-sprint — re-estimate and carry, or split it on the spot?
- How much buffer is realistic for a solo student learning the stack — a fifth of capacity? more?
- For a carried-over story that's nearly done (US-2.1), do I get partial velocity credit, or is it zero until it fully meets the Definition of Done?

---

## Why This Matters

Sprint retrospectives are how you get better over time. Without them, you repeat the same mistakes every sprint.

In professional software development, retrospectives are taken seriously — teams that skip them stagnate; teams that run them well improve sprint over sprint. Why they work:

1. **Learning from failure** — every sprint has problems; the retro turns them into lessons
2. **Process improvement** — "the try-counter bug sat two hours" names a fixable habit
3. **Honesty with yourself** — a safe space to admit what went wrong before it compounds
4. **Continuous adaptation** — what worked Sprint 1 may not fit Sprint 3; adapt
5. **A record you'll reuse** — you'll reference this retro when you plan Sprint 2

Common retro formats you'll see in industry:
- **Start / Stop / Continue** — what to start, stop, and keep doing
- **Glad / Sad / Mad** — what made you glad, sad, mad
- **4Ls** — Liked, Learned, Lacked, Longed For
- **Sailboat** — what's the wind in your sails, what's the anchor

Your CTS-285 retros use "What went well / What didn't / Action items," the most common format in industry.

**Critical rule**: action items must be specific and measurable. "Improve communication" is not actionable. "Take any two-day blocker to office hours that day" is.

In **CSC-289** (the team capstone), retrospectives become a team ritual and matter even more — the ones who retro after each sprint catch systemic problems in week 4 instead of week 14. The self-honesty you practice solo now is what makes a team retro work later.

---

## Common Mistakes to Avoid

- **Mistake**: Blaming yourself — "I'm just slow at this"
  **Better approach**: Focus on process — "the ATTEMPT model started mid-story instead of up front, which caused the blocker." Blameless retros enable honesty. (This is the Prime Directive, below — it applies to a team of one too.)

- **Mistake**: Vague action items — "test more next sprint"
  **Better approach**: Specific — "remainder and no-negatives tests exist before those stories reach In Review." Measurable success criteria.

- **Mistake**: Fifteen action items for next sprint
  **Better approach**: 3–5 max, prioritized H/M/L. You can't fix everything at once; pick the highest-impact changes.

- **Mistake**: Not reviewing last sprint's action items
  **Better approach**: Start every retro by checking whether you did what you said you'd do. If not, why? That's the accountability loop.

- **Mistake**: Only listing negatives, ignoring wins
  **Better approach**: Celebrate what worked. "What went well" is not optional — you want to keep doing the things that worked.

- **Mistake**: The retro becomes an hour of re-litigating one technical decision
  **Better approach**: Time-box it. If a decision needs deep discussion, that's a separate session. The retro is about process, not architecture.

- **Mistake**: Writing the retro and never looking at it again
  **Better approach**: Reference it at the next planning session. "I said I'd keep buffer — did I?" Living document, not paperwork.

---

## Integration with Course Project

In CTS-285, a retrospective is required after each sprint of your Dataman build:

**Requirements**:
- One retro per sprint (at each sprint's close — see the course schedule for the weeks)
<!-- CADENCE: pending spine ruling — the source said "Weeks 6, 10, 14"; the concrete weeks await the spine cadence decision. See issue #5 BLOCKED-ON. -->
- Submit to Teacherbot within 2 days of the sprint ending
- Include all sections (metrics, what went well, what didn't, action items)
- Review the previous sprint's action items

**How the retro is graded:** through the parent assignment's rubric line for it — this template carries no points of its own.

**What good retros demonstrate**:
- You're learning from experience
- You're improving your process sprint over sprint
- You're honest about what was hard
- You're taking ownership of the fixes

**Red flags in your own retros**:
- "Everything was perfect" (no sprint is)
- Zero action items (you're not learning)
- Action items with no owner or success criteria
- The same problem every sprint (you're not implementing the fixes)

### Running this as a team (CSC-289 / weeks 13–16)

The retro scales up almost unchanged when you're on a team — this is the strongest transferable content in the template, so keep it:

1. **Book a 45–60 minute meeting** at the sprint's end
2. **Review the data first** — board, velocity, completed stories
3. **Everyone contributes** — round-robin, each person shares a couple of items per section
4. **Dot-vote on action items** — if there are fifteen candidates, vote the top five
5. **Assign owners immediately** — every action item gets a name
6. **Post it to a shared place** — repo wiki or hand-in

**Team retrospective practices worth keeping now, solo:**
- **The Prime Directive (Norm Kerth)**: *"Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand."* Solo, you extend that grace to your past self; on a team, to each other. It's what makes honesty safe.
- **Psychological safety** — if it isn't safe to be honest, the retro is useless. Blame the process, not the person.
- **Rotate the facilitator** — on a team, a different member runs each retro
- **Time-box the sections** — roughly: review metrics, what went well, what didn't, action items, wrap

**This practice is career-critical. Teams that retrospect well build high-performing habits; teams that skip it repeat their mistakes. Learn it now, solo, so it's second nature when it's a team.**
