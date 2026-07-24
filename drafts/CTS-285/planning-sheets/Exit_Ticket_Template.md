<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/Exit_Ticket_Template.md -->
<!-- ADAPTED for 26FA per issue #5: Dataman re-anchor of the 3 worked reflections, solo-arc de-teaming, off-canon 40/30/20/10 participation split removed, fabricated retention statistic genericized, Media-skin pass. PRESERVED INTACT as the RSI cadence artifact (~12-15x/semester) — cadence language NOT thinned. Planning sheet — carries ZERO points. -->

# Exit Ticket Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Quick reflection after a class activity, lab, or lecture — to consolidate what you just learned and catch what's still fuzzy while there's still time to ask.

---

## When to Use

At the end of every class session with a hands-on activity or lab — roughly **12–15 times across the semester**. Takes 5–10 minutes. This steady cadence is deliberate: the regular check-in is part of how the course stays responsive to where you actually are.

---

## Instructions

1. **Complete it right after class** — reflection is freshest immediately after learning
2. **Be specific** — "Learned about Agile" is vague; "Learned how daily standups surface blockers early" is specific
3. **Be honest about confusion** — if something's unclear, say so. This helps Andrew adjust the next class.
4. **Connect it to your project** — how will today's learning apply to your Dataman build?
5. **Submit promptly** — post to the discussion board or LMS within 24 hours

---

## Template

### Exit Ticket — [Date]

**Class Topic**: [Today's main topic]
**Activity/Lab**: [What we did today]

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**


---

#### Still Unclear
**What concept or skill am I still confused about?**


---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**


---

#### Questions for Andrew
**What do I need clarification on?**


---

> **The three worked examples below reflect on three different Dataman-project class sessions.** They're written first-person, the way your own exit tickets will be. Notice how specific the confusion is — a vague "I don't get it" can't be answered; "do I re-estimate a split story?" can.

## Filled Example 1: Sprint Planning

### Exit Ticket — Sprint 1 Planning Day

**Class Topic**: Sprint Planning and Story-Point Estimation
**Activity/Lab**: Estimated the top Dataman backlog stories with story points; planned Sprint 1

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

Story points are relative sizing, not hours. I'd been treating "1 point = 1 hour," which is completely wrong. Today it clicked that story points measure complexity and uncertainty relative to *other* stories. "Check my answer" (US-1.1) and "two tries then reveal" (US-1.2) look similar on the surface, but US-1.2 is bigger because of the hidden state — storing each attempt — so it earns more points even if the typing is about the same.

Also learned that velocity (points completed per sprint) is a planning tool, not a score. You don't "beat" your velocity; you use last sprint's actual velocity to predict what you can realistically commit to next sprint.

---

#### Still Unclear
**What concept or skill am I still confused about?**

I'm confused about estimating when I'm learning the tech at the same time. This is my first time building this kind of app — do I inflate the story's points to cover the learning curve, or lower my overall velocity estimate for the sprint?

Andrew mentioned "spikes" (research stories) but I didn't fully get when to create a spike versus just estimating a story higher.

Also: if I have to split a story mid-sprint because it's bigger than I thought (like pulling the ATTEMPT model out of US-1.2), do I re-estimate the split pieces, or keep the original number?

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**Sprint 1 planning (this week)**:
- Estimate my remaining Sprint 1 backlog stories with the Fibonacci scale instead of guessing hours
- Commit conservatively — it's my first sprint, so I'll start at the low end rather than overcommit
- Break any story I estimate at 13 into smaller stories before committing to it

**Throughout the build**:
- Track my velocity sprint-over-sprint to see if my estimates get more accurate
- Use "1, 2, 3, 5, 8, 13" consistently, not arbitrary numbers

**Specific action**: Before I commit Sprint 1, re-estimate US-1.2 now that I know it drags the ATTEMPT model with it. It's probably a 5, not the 3 I first wrote.

---

#### Questions for Andrew
**What do I need clarification on?**

1. When I'm learning the stack as I build, do I raise story-point estimates or lower my velocity?
2. When is a "spike" (research story) the right move versus just estimating a story higher?
3. If I split a story mid-sprint, do the pieces get re-estimated, or keep the original total?

---

## Filled Example 2: User Stories

### Exit Ticket — Requirements Workshop

**Class Topic**: Writing User Stories with Acceptance Criteria
**Activity/Lab**: Turned Dataman stakeholder needs into user stories in "As a / I want / So that" format

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

The "so that" clause is not optional — it's the most important part. It forces you to say *why* a feature matters, not just what it does.

In the lab I wrote "As a parent, I want to store problems for my child" and thought I was done. Andrew pushed back: "So that what?" When I added "So that they drill the exact facts they keep missing, not everything," it clicked — that's the parent's real need from the stakeholder interview, and it's what makes the Memory Bank's ten-problem limit make sense. If I can't articulate the value, maybe the feature isn't needed.

Also learned that acceptance criteria should be Given-When-Then, not just a bullet list. Given-When-Then is testable — you can turn it straight into a test.

---

#### Still Unclear
**What concept or skill am I still confused about?**

How many acceptance criteria is "enough"? Today's examples had 3–5 per story. If I have 10, is the story too big and should it be split?

Also: do acceptance criteria include error and edge cases, or just the happy path? Andrew's examples had both ("Given the answer is wrong on the second try..." and "Given the answer is correct on the first try..."), but I'm not sure if the edge cases are required or optional.

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**This week**:
- Review every story in my Dataman backlog and add a real "so that" to the ones missing it
- Rewrite vague acceptance criteria as Given-When-Then scenarios
- Add error-case criteria, not just happy path

**Example story I'll fix**:
Current: "As a learner, I want to check my answer"
Better: "As a learner, I want to enter a problem and my answer and be told whether I'm right, so that I can practice and check myself without an adult standing over me"

Current acceptance criteria: "User can check answer"
Better:
- Given I've entered a problem and an answer, When my answer is correct, Then I see the positive signal
- Given my answer is wrong twice, When the second try fails, Then the system shows the *correct* answer — never the one I entered

**Specific action**: Block an hour tomorrow to refactor the backlog, then ask Andrew to sanity-check three of the rewritten stories before Sprint 1 planning.

---

#### Questions for Andrew
**What do I need clarification on?**

1. Is there a recommended number of acceptance criteria per story (3–5 good, 10 too many)?
2. Should every story include error-case criteria, or can some be happy-path only?
3. Can a technical task (like modeling the ATTEMPT entity) be its own user story, or does it have to live inside a user-facing story?

---

## Filled Example 3: Risk Management

### Exit Ticket — Risk Register Workshop

**Class Topic**: Project Risk Management
**Activity/Lab**: Built a risk register for the Dataman project; scored risks by likelihood × impact

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

Risk management is proactive, not reactive. I'd been treating risks as problems you deal with when they hit. Today I learned it's about naming problems *before* they happen and writing the mitigation in advance.

The register exercise made it concrete. I logged "the ticks-timing decision stays unresolved" as a risk in week 6 — the collector wants the Atom-Clock ticks kept deliberately imprecise as "character," the teacher wants consistent timing for a fair classroom. Mitigation: get Andrew (as the client) to rule on it early, and design the timer so the choice is a setting, not a rewrite. When that decision drags later, I won't panic — I'll execute the plan I already wrote.

Also learned the formula: Risk Score = Likelihood × Impact. That quantifies priority so I focus on the high scores (15+) first instead of treating every risk as equally urgent.

Key line I'm keeping: "Hope is not a strategy." Hoping the data model won't need rework, hoping I won't lose a week to another class — that's not risk management. Planning for those is.

---

#### Still Unclear
**What concept or skill am I still confused about?**

How do you tell a "risk" from a "problem"? Andrew said risks are future problems that might happen. But when does a risk become a problem?

Example: "the data model might need rework" is a risk. "The ATTEMPT model needed rework this sprint" is a problem I already hit. Do I move it from the risk register to my issue tracker at that point?

Also: how often should the register be updated? Andrew said "weekly" — does that mean re-score everything every week, or just add new risks and update statuses?

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**Immediately (this week)**:
- Build my Dataman risk register with at least 8 risks
- Use Likelihood (1–5) × Impact (1–5) = Score for every one
- Since I'm solo, I own every risk — but I'll still name the *trigger* that means it's materializing

**Specific risks I'll add**:
1. Ticks-timing decision stays unresolved — Likelihood 4, Impact 3 = 12 (HIGH)
2. Data model bigger than estimated (ATTEMPT / Memory Bank ≤10) — Likelihood 4, Impact 3 = 12 (HIGH)
3. Lose a week to another course's crunch — Likelihood 3, Impact 4 = 12 (HIGH)
4. Deploy step in weeks 11–12 fails with no time to fix — Likelihood 3, Impact 5 = 15 (HIGH)

**Ongoing**:
- Review the register at every retro
- Update statuses weekly (and put the register in my repo so the history is visible)

**Specific action**: Commit the risk register to my repo this week so its updates show up in my commit history, not just as a doc I hand in.

---

#### Questions for Andrew
**What do I need clarification on?**

1. When does a "risk" become a "problem"? Do I track problems separately from risks?
2. How often should I re-score risks — weekly, or only when something changes?
3. For the ticks-timing conflict: as the client, which way do you want it — imprecise "character," consistent timing, or a toggle? I don't want to build the wrong one.

---

## Why This Matters

Exit tickets are a learning tool, not busywork. Reflecting on what you just learned — putting it in your own words and connecting it to your own work — consolidates it far better than passively re-reading notes or slides. That's the whole reason this takes five minutes at the end of class instead of zero.

> Reflection is where I do my clearest measuring. An exit ticket that says "last week I thought story points were hours; today I know they aren't" is a delta I can see. I keep those. Your trajectory is more legible to both of us when you write it down.
> — SHODANN, your Channel Success Partner

Exit tickets force you to:
1. **Consolidate learning** — articulating a concept solidifies it
2. **Identify gaps** — catch what you don't understand while there's still time to ask
3. **Connect theory to practice** — linking today's concept to your Dataman build deepens it
4. **Build metacognition** — reflecting on your own learning makes you a better learner

In professional development, reflective practice is how senior engineers grow. They don't just write code and move on — they ask "What did I learn? What would I do differently? What still doesn't make sense?" Many keep some form of learning journal; exit tickets formalize that habit.

For Andrew, out of character:
- Exit tickets show what's landing and what's confusing
- If ten students are stuck on the same concept, the next class adjusts
- Your questions shape what office hours cover
- Honest feedback improves the course

For your career:
- A reflection habit helps you track your own growth over time
- In interviews you can cite specific learnings ("I learned how sprint velocity predicts capacity when...")
- Self-aware engineers adapt faster to changing tools

**Exit tickets are practice for lifelong reflective learning. Build the habit now.**

---

## Common Mistakes to Avoid

- **Mistake**: Generic reflections — "I learned about user stories today"
  **Better approach**: Specific learnings — "I learned the 'so that' clause explains user value, not just the feature." Specific is memorable.

- **Mistake**: Saying everything was clear when it wasn't
  **Better approach**: Honest confusion helps Andrew help you. "I'm still unsure when to use a spike versus a higher estimate" is useful feedback.

- **Mistake**: Writing the exit ticket three days after class
  **Better approach**: Reflection is freshest immediately after learning. Same day, ideally within an hour.

- **Mistake**: Copy-pasting from the slides
  **Better approach**: Use your own words. Paraphrasing forces processing. If you can't explain it in your own words, you don't understand it yet.

- **Mistake**: Not connecting to your project — treating learning as abstract
  **Better approach**: Every exit ticket answers "How will I use this in my Dataman project?" Make it concrete, with story IDs and specific actions.

- **Mistake**: Skipping "Questions for Andrew"
  **Better approach**: If you truly have zero questions, you're probably not digging deep enough. There's always something to clarify. Ask.

---

## Integration with Course Project

In CTS-285, exit tickets run on a regular cadence through the Dataman project:

**Requirements**:
- Submit an exit ticket after each lab/activity class (roughly **12–15 across the semester**)
- Post to the discussion board within 24 hours of class
- Include all 4 sections (biggest learning, still unclear, will apply, questions)
- Be specific and detailed, not vague one-liners

**How exit tickets count:** Exit tickets are a **required, low-stakes reflection cadence** — a regular, substantive check-in between you and the instructor. They are **not** scored as a separate "participation grade," and this template carries no points of its own (the canonical points table has no exit-ticket row and no participation category). Where an exit ticket contributes to a graded deliverable, that lives in the parent assignment's rubric — check the current assignment for specifics. The reason the cadence itself is required is that this regular instructor-and-student interaction is part of how the course meets its distance-education interaction expectations; keeping it steady matters independent of points.

**What good exit tickets demonstrate**:
- You're processing concepts, not just hearing them
- You're catching gaps early
- You're connecting theory to your build
- You're taking ownership of your learning

**Red flags in your own exit tickets**:
- "Everything was clear, no questions" (really? every concept?)
- Copy-pasted definitions from slides
- Four exit tickets submitted at once on Sunday night (not immediate reflection)
- Vague applications — "I'll use this in my project" (how, specifically?)

**Professional reflection practices**:
- Many developers keep learning logs or engineering journals
- Some teams run "learning retrospectives" (what did we learn this sprint?)
- Blameless postmortems after incidents are structured reflection on what went wrong
- Senior engineers document learnings in team wikis for everyone's benefit

**This habit is career-critical. Reflective practitioners advance faster, learn continuously, and adapt to changing technology. Build it now in CTS-285, keep it for your whole career.**
