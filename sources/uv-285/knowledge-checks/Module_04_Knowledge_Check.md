<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_04_Knowledge_Check.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 M4 KC (10 pts, graded)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 4 Knowledge Check: Sprint Planning & Execution

**Purpose**: Assess understanding of Agile ceremonies, story points, sprint planning, backlog management, and facilitation
**Format**: 13 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Sprint Planning & Estimation Concepts (60%)

### Question 1
What are story points used for in Agile development?

A) Counting lines of code
B) Estimating relative effort/complexity of work, not exact time
C) Tracking how many user stories are complete
D) Calculating team salaries

**Correct Answer**: B
**Explanation**: Story points measure complexity, not hours. A 5-point story is roughly half as complex as a 10-point story. Teams estimate in points because uncertainty makes hour estimates unreliable. "This login feature feels like 5 points" is more honest than "This will take exactly 14.5 hours." Over time, your velocity (points per sprint) becomes predictable even when individual estimates vary.

### Question 2
What is Planning Poker, and why is it used?

A) A gambling game teams play for money
B) A collaborative estimation technique where team members reveal estimates simultaneously
C) A way for managers to assign work estimates
D) A game to waste time during planning

**Correct Answer**: B
**Explanation**: Planning Poker prevents anchoring bias. Everyone thinks independently, then reveals their estimate together. If someone says "2 points" and another says "8 points," that's a conversation starter—they're imagining different implementations. This discussion surfaces assumptions and improves estimates. It's democratic and leverages the whole team's expertise.

### Question 3
Your team's velocity has been 25 story points for the past three sprints. How many points should you commit to in the next sprint?

A) 50 points to push yourselves
B) Around 25 points, adjusted for any known factors
C) 10 points to take it easy
D) Velocity doesn't matter; commit to whatever needs to be done

**Correct Answer**: B
**Explanation**: Velocity is your planning compass. Consistently hitting 25 points means that's your sustainable pace. Committing to 50 sets you up for failure. Committing to 10 means stakeholders can't trust your estimates. Use historical velocity, adjust for holidays or team changes, then commit realistically. Consistency builds trust more than heroic efforts.

### Question 4
What happens during a sprint planning meeting?

A) The team reflects on what went well and what to improve
B) The team selects work from the backlog and plans how to accomplish it
C) The team demonstrates completed work to stakeholders
D) The team reports daily progress to management

**Correct Answer**: B
**Explanation**: Sprint planning is where the team commits to work for the upcoming sprint. Review the prioritized backlog, discuss user stories, break them into tasks, and commit to what you can realistically complete. This is collaborative planning, not top-down assignment. The team that plans the work owns the work.

### Question 5
What is a product backlog in Agile?

A) A list of bugs that need fixing
B) A prioritized list of all desired features, enhancements, and fixes for the product
C) Completed work from previous sprints
D) A list of excuses for why work isn't done

**Correct Answer**: B
**Explanation**: The backlog is your single source of truth for what might get built. It's prioritized—highest value work at the top. It's always evolving as you learn more. The backlog never empties (there's always more to do), but you work from the top. Good backlog management prevents "we built the wrong thing" disasters.

### Question 6
Who is responsible for prioritizing the product backlog?

A) The development team
B) The product owner or project lead
C) The stakeholders
D) Everyone votes equally

**Correct Answer**: B
**Explanation**: The product owner represents stakeholder interests and makes prioritization decisions. They balance business value, technical dependencies, and stakeholder needs. This doesn't mean they work in isolation—they gather input—but someone must make the final call to prevent endless debate. In this course, you'll play this role, learning to make and justify prioritization decisions.

### Question 7
During sprint planning, a user story seems too large to complete in one sprint. What should the team do?

A) Commit to it anyway and hope for the best
B) Skip it and work on smaller stories
C) Break it into smaller, manageable user stories
D) Extend the sprint length

**Correct Answer**: C
**Explanation**: Large stories (often called "epics") need to be split. "User authentication" might split into "user registration," "password reset," and "session management." Each becomes a completable story. This makes progress visible and reduces risk. Sprint length stays consistent—it's the work that adjusts, not the timebox.

### Question 8
What is the purpose of a sprint retrospective?

A) To demonstrate completed work to stakeholders
B) To plan the next sprint's work
C) To reflect on the sprint process and identify improvements
D) To assign blame for what went wrong

**Correct Answer**: C
**Explanation**: Retrospectives are about continuous improvement. What went well? What didn't? What will we change? This isn't a complaint session—it's problem-solving. Maybe meetings were too long, or testing happened too late. Identify issues, agree on experiments, try them next sprint. Teams that skip retros repeat mistakes indefinitely.

### Question 9
What's the difference between a sprint review and a sprint retrospective?

A) There is no difference
B) Review shows completed work to stakeholders; retrospective examines team process
C) Review is for managers; retrospective is for the team
D) Review happens before the sprint; retrospective happens after

**Correct Answer**: B
**Explanation**: Review is outward-facing: "Here's what we built; does it meet your needs?" Retrospective is inward-facing: "How can we work better together?" Both happen at sprint end, but they serve different purposes. Review validates the product; retrospective improves the process. Professional teams do both rigorously.

---

## Agile Ceremonies & Facilitation Concepts (40%)

### Question 10
What is the purpose of a daily standup meeting?

A) To give detailed status reports to management
B) To quickly synchronize the team on progress, plans, and blockers
C) To assign new tasks
D) To review all code changes

**Correct Answer**: B
**Explanation**: Standups are brief (15 minutes max) coordination meetings. Each person shares: what they completed, what they're working on next, and any blockers. This keeps everyone aligned without lengthy meetings. If detailed discussion is needed, take it offline. The standing format and timeboxing keep it focused.

### Question 11
You're facilitating sprint planning and two team members strongly disagree on an estimate. What's the best approach?

A) Tell them to stop arguing and average their estimates
B) Facilitate discussion to understand their different assumptions and reasoning
C) Let the senior developer decide
D) Skip that story and move on

**Correct Answer**: B
**Explanation**: Disagreements reveal valuable information. One person might know about complexity the other doesn't. "I said 8 points because I'm worried about database performance." "I said 3 because we can reuse the authentication code." This discussion improves everyone's understanding. The goal isn't consensus by force—it's consensus through shared understanding.

### Question 12
What does it mean to "facilitate" an Agile ceremony?

A) To attend the meeting
B) To guide the meeting structure while enabling team participation and decision-making
C) To make all decisions for the team
D) To take notes during the meeting

**Correct Answer**: B
**Explanation**: Facilitation means creating the environment for good decisions. Keep the meeting on track, ensure everyone participates, handle conflicts, watch the time. But don't dictate outcomes—the team decides. Good facilitators make meetings productive without dominating them. This is a skill you'll practice in CTS-285 and need in CSC-289.

### Question 13
Your sprint started with 30 story points committed. Halfway through, you've only completed 8 points. What should you do?

A) Panic and work overtime to catch up
B) Assess remaining work, identify blockers, and communicate risk early to stakeholders
C) Hide the problem and hope it resolves itself
D) Blame team members for being slow

**Correct Answer**: B
**Explanation**: Professional teams communicate problems early. Assess what's causing the slowdown—underestimated complexity? Unexpected blockers? Then communicate: "We're at risk of not completing all committed work. Here are our options." This gives stakeholders time to adjust. Surprises at sprint end erode trust. Transparency builds it, even when news is bad.

---

## Scoring Guide
- 90-100%: Excellent understanding of sprint planning and Agile ceremonies
- 80-89%: Good grasp, minor gaps in estimation or facilitation concepts
- 70-79%: Adequate foundation, review story points and backlog management
- Below 70%: Revisit Module 4 materials, especially sprint planning process

## Study Resources
- Week 7 Assignment: Sprint Planning Exercise
- Week 8 Activity: Planning Poker Estimation
- Planning Sheet: Sprint Planning Template
- Canvas Reading: "Running Effective Agile Ceremonies"
- Reference: Scrum Ceremonies Quick Guide
- Reference: Story Point Estimation Guidelines
