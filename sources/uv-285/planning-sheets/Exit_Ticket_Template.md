<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/Exit_Ticket_Template.md
  verdict: KEEP
  target-26FA-slot: CTS-285 all weeks (RSI mechanism)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Exit Ticket Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Quick reflection after class activities, labs, or lectures to consolidate learning and identify gaps.

---

## When to Use

End of every class session with hands-on activity or lab (approximately 12-15 times per semester). Takes 5-10 minutes.

---

## Instructions

1. **Complete immediately after class** - Reflection is freshest right after learning
2. **Be specific** - "Learned about Agile" is vague. "Learned how daily standups identify blockers early" is specific.
3. **Honest about confusion** - If something is unclear, say so. This helps Andrew adjust next class.
4. **Connect to project** - How will today's learning apply to your semester project?
5. **Submit promptly** - Post to discussion board or LMS within 24 hours

---

## Template

### Exit Ticket - [Date]

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

## Filled Example 1: Sprint Planning

### Exit Ticket - March 8, 2026

**Class Topic**: Sprint Planning and Velocity Estimation
**Activity/Lab**: Practiced sprint planning with story point estimation using Planning Poker

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

Story points are relative sizing, not hours. I've been thinking of story points as "1 point = 1 hour" which is completely wrong. Today I learned that story points measure complexity/effort relative to other stories. A 5-point story is roughly 5x more complex than a 1-point story, but it's not about time - it's about uncertainty and complexity. This explains why teams estimate together (Planning Poker) - to get consensus on relative difficulty.

Also learned that velocity (story points completed per sprint) is a planning tool, not a performance metric. You don't "beat" your velocity. You use historical velocity to predict future capacity.

---

#### Still Unclear
**What concept or skill am I still confused about?**

I'm confused about how to handle story point estimation when learning new technology. In Sprint 2, we're learning Flask for the first time. Do we inflate story points to account for learning curve, or do we reduce our velocity estimate?

Andrew said something about "spikes" (research stories) but I didn't fully understand when to create a spike vs just estimating higher.

Also unsure: If we have to split a story mid-sprint because it's bigger than expected, do we reestimate the split stories? Or keep the original estimate?

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**Sprint 2 planning (this week)**:
- Use Planning Poker with my team to estimate our 6 remaining backlog stories
- Reference Sprint 1 velocity (13 points) to commit to realistic capacity for Sprint 2
- Don't overcommit just because we want to finish more - be conservative

**Throughout semester**:
- Track velocity sprint-over-sprint to see if we're improving at estimation
- Use the "1, 2, 3, 5, 8, 13" Fibonacci scale consistently (not arbitrary numbers)
- If a story is 13+ points, break it down into smaller stories

**Specific action**: During Sprint 2 planning tomorrow, I'll propose we estimate all stories as a team instead of just me assigning points. This gets better estimates and team buy-in.

---

#### Questions for Andrew
**What do I need clarification on?**

1. How should we adjust story point estimates when learning new tech (Flask)? Higher points or lower velocity?

2. When is a "spike" (research story) appropriate vs just estimating a story higher?

3. If we split a story mid-sprint, do the split pieces get reestimated or keep original total?

---

## Filled Example 2: User Stories

### Exit Ticket - March 15, 2026

**Class Topic**: Writing User Stories with Acceptance Criteria
**Activity/Lab**: Rewrote requirements docs as user stories using "As a/I want/So that" format

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

The "so that" clause in user stories is not optional - it's the most important part! It forces you to explain WHY a feature matters, not just WHAT it does.

In today's lab, I wrote "As a user, I want to reset my password" and thought I was done. Andrew pushed back: "So that what? Why do users need this?"

When I added "So that I can regain access to my account if I forget my password," it clicked. The "so that" clause is about user value, not technical capability. If I can't articulate the value, maybe the feature isn't needed.

Also learned that acceptance criteria should be Given-When-Then format, not just a bullet list. Given-When-Then is testable - you can turn it directly into automated tests.

---

#### Still Unclear
**What concept or skill am I still confused about?**

How many acceptance criteria is "enough"? Today's examples had 3-5 criteria per story. If I have 10 criteria, is the story too big and should be split?

Also confused about: Do acceptance criteria include error cases and edge cases, or just the happy path? Andrew's examples included both ("Given the email is invalid" and "Given the email is valid"), but I'm not sure if that's required or optional.

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**This week (Week 7)**:
- Review all 12 user stories in my backlog and add "so that" clauses to the 4 that are missing them
- Rewrite vague acceptance criteria as Given-When-Then scenarios
- Add error case acceptance criteria (not just happy path)

**Example story I'll fix**:
Current: "As a patient, I want to book an appointment"
Better: "As a patient, I want to book an appointment so that I can see my doctor at a convenient time"

Current acceptance criteria: "User can book appointment"
Better:
- Given available appointments exist, When I select a time slot and click Book, Then my appointment is confirmed and I see a success message
- Given no appointments are available, When I view the calendar, Then I see "No appointments available - contact office"

**Specific action**: Schedule 1 hour tomorrow to refactor all stories in my backlog. Get Sarah and Marcus to review them before Sprint 2 starts.

---

#### Questions for Andrew
**What do I need clarification on?**

1. Is there a recommended number of acceptance criteria per story (3-5 is good, 10 is too many)?

2. Should every story include error case acceptance criteria, or can some stories be happy path only?

3. Can technical tasks (like database migrations) be user stories, or do they have to be tasks within user-facing stories?

---

## Filled Example 3: Risk Management

### Exit Ticket - March 22, 2026

**Class Topic**: Project Risk Management
**Activity/Lab**: Created risk register for semester projects, scored risks with likelihood/impact

---

#### Today's Biggest Learning
**What's the most important thing I learned today that I didn't know before?**

Risk management is proactive, not reactive. I've been treating risks as problems that happen and you deal with them. Today I learned that risk management is about identifying problems BEFORE they happen and planning mitigation.

The risk register exercise made this concrete. We identified "SendGrid email quota exceeded" as a risk in Week 6. Mitigation: upgrade to paid plan or switch to AWS SES. When the risk materializes in Week 10, we don't panic - we execute the mitigation plan we already wrote.

Also learned the formula: Risk Score = Likelihood × Impact. This quantifies risk priority. I was treating all risks as equally important. Now I know to focus on high scores (15+) first.

Key insight: "Hope is not a strategy." Hoping your APIs won't break, hoping team members won't get sick, hoping deployment will work - that's not risk management. Planning for those scenarios is.

---

#### Still Unclear
**What concept or skill am I still confused about?**

How do you differentiate between a "risk" and a "problem"? Andrew said "risks are future problems that might happen." But when does a risk become a problem?

Example: "SendGrid might exceed quota" is a risk. "SendGrid exceeded quota this morning" is a problem. Do we move it from risk register to issue tracker at that point?

Also unclear: How often should risk register be updated? Andrew said "weekly" but does that mean re-score all risks every week, or just add new risks and update status?

---

#### Will Apply to Project By...
**How will I use today's learning in my CTS-285 project? Be specific.**

**Immediately (this week)**:
- Create risk register for my appointment booking project with minimum 8 risks
- Use the Likelihood (1-5) × Impact (1-5) = Risk Score formula for all risks
- Assign owners to each risk (Sarah, Marcus, or Aisha)

**Specific risks I'll add**:
1. Marcus unavailable Week 11 (spring break) - Likelihood 5, Impact 3 = Score 15 (HIGH)
2. SendGrid email quota exceeded - Likelihood 4, Impact 4 = Score 16 (HIGH)
3. Flask learning curve slows development - Likelihood 3, Impact 3 = Score 9 (MEDIUM)
4. Database schema changes break existing code - Likelihood 3, Impact 4 = Score 12 (HIGH)

**Ongoing**:
- Review risk register every sprint retrospective
- Update risk status weekly (add date to "Last Updated" field)
- Reference risks during sprint planning (if high-risk story, start it Day 1 of sprint)

**Specific action**: Add risk register to our GitHub repo this week. Make it visible to whole team, not just a document I submit to Andrew.

---

#### Questions for Andrew
**What do I need clarification on?**

1. When does a "risk" become a "problem"? Do we track problems separately from risks?

2. How often should we re-score risks? Weekly, or only when circumstances change?

3. If a mitigation plan costs money (like upgrading SendGrid), do we need your approval first, or can we make that decision as a team?

---

## Why This Matters

Exit tickets are a learning tool, not busywork. Research on learning retention shows:

**Without reflection**: You retain ~20% of what you hear in class
**With reflection**: You retain ~60-70% of what you process and apply

Exit tickets force you to:
1. **Consolidate learning** - Articulating concepts solidifies them in memory
2. **Identify gaps** - Recognize what you don't understand while there's still time to ask
3. **Connect theory to practice** - Linking concepts to your project deepens understanding
4. **Build metacognition** - Reflecting on your learning makes you a better learner

In professional development, reflective practice is how senior engineers grow. They don't just write code and move on. They reflect: "What did I learn? What would I do differently? What do I still not understand?"

**The best developers I know all maintain some form of learning journal.** Exit tickets formalize this habit.

In Andrew's teaching:
- Exit tickets help me see what's landing and what's confusing
- If 10 students are confused about the same concept, I adjust next class
- Your questions guide office hours topics
- Honest feedback improves the course

In your career:
- Daily or weekly reflection logs help you track growth
- When interviewing, you can cite specific learnings ("In March 2026, I learned how sprint velocity predicts capacity...")
- Habit of reflection makes you promotable (self-aware engineers advance faster)

**Exit tickets are practice for lifelong reflective learning. Build the habit now.**

---

## Common Mistakes to Avoid

- **Mistake**: Generic reflections - "I learned about user stories today"
  **Better approach**: Specific learnings - "I learned that 'so that' clause in user stories explains user value, not just feature description." Specific = memorable.

- **Mistake**: Saying everything was clear when it wasn't
  **Better approach**: Honest confusion helps Andrew help you. "I'm still confused about when to use spikes vs higher story points" is useful feedback.

- **Mistake**: Writing exit ticket 3 days after class
  **Better approach**: Reflection is freshest immediately after learning. Write exit ticket same day, ideally within an hour of class ending.

- **Mistake**: Copy-pasting from slides or lecture notes
  **Better approach**: Use your own words. Paraphrasing forces processing. If you can't explain it in your own words, you don't understand it yet.

- **Mistake**: Not connecting to project - treating learning as abstract
  **Better approach**: Every exit ticket should answer "How will I use this in my project?" Make it concrete with specific story IDs, sprint numbers, tasks.

- **Mistake**: Skipping "Questions for Andrew" section
  **Better approach**: If you truly have zero questions, you're either a genius or not thinking deeply enough. There's always something to clarify. Ask.

---

## Integration with Course Project

In CTS-285, exit tickets are part of participation grade:

**Requirements**:
- Submit exit ticket after every lab/activity class (12-15 per semester)
- Post to discussion board within 24 hours of class
- Must include all 4 sections (biggest learning, still unclear, will apply, questions)
- Be specific and detailed (not vague 1-sentence responses)

**Grading criteria**:
- **Completion** (40%): Did you submit exit tickets consistently?
- **Specificity** (30%): Are reflections detailed with concrete examples?
- **Honesty** (20%): Are you genuinely reflecting or just checking a box?
- **Application** (10%): Do you connect learning to project with specific actions?

**What good exit tickets demonstrate**:
- You're processing concepts, not just hearing them
- You're identifying gaps in understanding early
- You're connecting theory to practice
- You're taking ownership of learning

**Red flags in exit tickets**:
- "Everything was clear, no questions" (really? every concept?)
- Copy-pasted definitions from slides (not your own understanding)
- Submitted 4 exit tickets at once on Sunday night (not immediate reflection)
- Vague applications "I'll use this in my project" (how specifically?)

**Professional reflection practices**:
- Many developers keep learning logs or engineering journals
- Some teams do "learning retrospectives" (what did we learn this sprint?)
- Tech companies encourage "blameless postmortems" after incidents (reflection on what went wrong)
- Senior engineers document learnings in internal wikis for team benefit

**This habit is career-critical. Reflective practitioners advance faster, learn continuously, and adapt to changing technology. Build this habit now in CTS-285, maintain it throughout your career.**
