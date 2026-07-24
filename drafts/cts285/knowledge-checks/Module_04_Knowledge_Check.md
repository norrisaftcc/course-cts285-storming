<!--
  ADAPTATION PROVENANCE — 26FA Dataman regime
  source: sources/uv-285/knowledge-checks/Module_04_Knowledge_Check.md
  adapted: 2026-07-24
  changes: project examples re-pointed to the Dataman modernization exemplar
           (drafts/cts285/shared-dataman-artifacts/); points normalized per
           ADR-002 (10 pts, graded, not bonus, "bonus" framing removed);
           naming per ADR-004 (Dataman only — no DataMon/Datamon). No correct
           answer was changed — see changelog.
  verification-pass: 2026-07-24 — adversarial review found and fixed two
           Study Resources defects: (1) a reference to Grading_Key.md, which
           is INSTRUCTOR-ONLY and is the live answer key for the Wk3/Wk4/
           Sprint-1 MoSCoW-classification assessments — removed; (2) an
           invented two-assignment "Week 7 Assignment" / "Week 8 Assignment"
           split — corrected to the single combined Week 7-8 assignment per
           CTS285_Canonical_Points_Table.md and COURSEMAP.md. Also corrected
           the section-weight labels from "60%/40% of questions" (inaccurate
           for a 9/4 split of 13 questions) to an accurate count. No other
           content changed.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 4 Knowledge Check: Sprint Planning & Execution

**Purpose**: Assess understanding of Agile ceremonies, story points, sprint planning, backlog management, and facilitation — applied to the Dataman modernization spine (Sprint 2: Build & Facilitation, Weeks 7–8).
**Format**: 13 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Points**: **10 pts (1.3% of 750), graded**
**Time Estimate**: 15–20 minutes

---

## Sprint Planning & Estimation Concepts (Questions 1–9)

### Question 1
What are story points used for in Agile development?

A) Counting lines of code
B) Estimating relative effort/complexity of work, not exact time
C) Tracking how many user stories are complete
D) Calculating team salaries

**Correct Answer**: B
**Explanation**: Story points measure complexity, not hours. A 5-point story is roughly half as complex as a 10-point story. Teams estimate in points because uncertainty makes hour estimates unreliable. "This Memory Bank set-editor story (3.1) feels like 5 points" is more honest than "This will take exactly 14.5 hours." Over time, your velocity (points per sprint) becomes predictable even when individual estimates vary.

### Question 2
What is Planning Poker, and why is it used?

A) A gambling game teams play for money
B) A collaborative estimation technique where team members reveal estimates simultaneously
C) A way for managers to assign work estimates
D) A game to waste time during planning

**Correct Answer**: B
**Explanation**: Planning Poker prevents anchoring bias. Everyone thinks independently, then reveals their estimate together. If someone says "2 points" for the division-with-remainder story (1.4) and another says "8 points," that's a conversation starter — they're imagining different implementations, maybe one person is only picturing the happy path and the other is thinking through the remainder edge cases. This discussion surfaces assumptions and improves estimates. It's democratic and leverages the whole team's expertise.

### Question 3
Your team's velocity has been 25 story points for the past three Dataman sprints. How many points should you commit to in the next sprint?

A) 50 points to push yourselves
B) Around 25 points, adjusted for any known factors
C) 10 points to take it easy
D) Velocity doesn't matter; commit to whatever needs to be done

**Correct Answer**: B
**Explanation**: Velocity is your planning compass. Consistently hitting 25 points means that's your sustainable pace. Committing to 50 sets you up for failure. Committing to 10 means stakeholders — your parent, teacher, and collector personas — can't trust your estimates. Use historical velocity, adjust for holidays or team changes, then commit realistically. Consistency builds trust more than heroic efforts.

### Question 4
What happens during a sprint planning meeting?

A) The team reflects on what went well and what to improve
B) The team selects work from the backlog and plans how to accomplish it
C) The team demonstrates completed work to stakeholders
D) The team reports daily progress to management

**Correct Answer**: B
**Explanation**: Sprint planning is where the team commits to work for the upcoming sprint. Review the prioritized Dataman backlog, discuss the next stories in To Do (say, the Electro Flash game or the curator progress-review screen), break them into tasks, and commit to what you can realistically complete. This is collaborative planning, not top-down assignment. The team that plans the work owns the work.

### Question 5
What is a product backlog in Agile?

A) A list of bugs that need fixing
B) A prioritized list of all desired features, enhancements, and fixes for the product
C) Completed work from previous sprints
D) A list of excuses for why work isn't done

**Correct Answer**: B
**Explanation**: The backlog is your single source of truth for what might get built. The Dataman Seeded Backlog is prioritized — highest-value work (the Answer Checker epic, the never-show-a-wrong-answer-as-right rule) sits above stretch epics like the legacy-entertainment homage module. It's always evolving as you learn more. The backlog never empties (there's always more to do), but you work from the top. Good backlog management prevents "we built the wrong thing" disasters.

### Question 6
Who is responsible for prioritizing the product backlog?

A) The development team
B) The product owner or project lead
C) The stakeholders
D) Everyone votes equally

**Correct Answer**: B
**Explanation**: The product owner represents stakeholder interests and makes prioritization decisions. They balance business value, technical dependencies, and stakeholder needs. This doesn't mean they work in isolation — they gather input from the parent, teacher, and retro-collector personas — but someone must make the final call to prevent endless debate. As Product Owner in Weeks 3–6, you played this role for the Dataman backlog, learning to make and justify prioritization decisions.

### Question 7
During sprint planning, a user story seems too large to complete in one sprint. What should the team do?

A) Commit to it anyway and hope for the best
B) Skip it and work on smaller stories
C) Break it into smaller, manageable user stories
D) Extend the sprint length

**Correct Answer**: C
**Explanation**: Large stories (often called "epics") need to be split. The Memory Bank epic isn't one story — it splits into "load a set of problems for a child" (3.1), "practice a stored set" (3.2), and "kids author problems for each other" (3.3). Each becomes a completable story. This makes progress visible and reduces risk. Sprint length stays consistent — it's the work that adjusts, not the timebox.

### Question 8
What is the purpose of a sprint retrospective?

A) To demonstrate completed work to stakeholders
B) To plan the next sprint's work
C) To reflect on the sprint process and identify improvements
D) To assign blame for what went wrong

**Correct Answer**: C
**Explanation**: Retrospectives are about continuous improvement. What went well? What didn't? What will we change? This isn't a complaint session — it's problem-solving. Maybe the atom-clock "ticks" timer took longer to get right than estimated, or the remainder-handling story surfaced edge cases nobody planned for. Identify issues, agree on experiments, try them next sprint. Teams that skip retros repeat mistakes indefinitely.

### Question 9
What's the difference between a sprint review and a sprint retrospective?

A) There is no difference
B) Review shows completed work to stakeholders; retrospective examines team process
C) Review is for managers; retrospective is for the team
D) Review happens before the sprint; retrospective happens after

**Correct Answer**: B
**Explanation**: Review is outward-facing: "Here's the Memory Bank curator console we built this sprint — does it meet your needs?" shown to the teacher or parent persona. Retrospective is inward-facing: "How can we work better together?" Both happen at sprint end, but they serve different purposes. Review validates the product; retrospective improves the process. Professional teams do both rigorously.

---

## Agile Ceremonies & Facilitation Concepts (Questions 10–13)

### Question 10
What is the purpose of a daily standup meeting?

A) To give detailed status reports to management
B) To quickly synchronize the team on progress, plans, and blockers
C) To assign new tasks
D) To review all code changes

**Correct Answer**: B
**Explanation**: Standups are brief (15 minutes max) coordination meetings. Each person shares: what they completed, what they're working on next, and any blockers. This keeps everyone aligned without lengthy meetings. If detailed discussion is needed — say, a design debate over the ticks-timing tension between the collector and teacher personas — take it offline. The standing format and timeboxing keep it focused.

### Question 11
You're facilitating sprint planning and two team members strongly disagree on an estimate. What's the best approach?

A) Tell them to stop arguing and average their estimates
B) Facilitate discussion to understand their different assumptions and reasoning
C) Let the senior developer decide
D) Skip that story and move on

**Correct Answer**: B
**Explanation**: Disagreements reveal valuable information. One person might know about complexity the other doesn't. "I said 8 points because I'm worried about the remainder edge cases in the division story (1.4)." "I said 3 because we can reuse the two-tries logic already built for the Answer Checker (1.2)." This discussion improves everyone's understanding. The goal isn't consensus by force — it's consensus through shared understanding.

### Question 12
What does it mean to "facilitate" an Agile ceremony?

A) To attend the meeting
B) To guide the meeting structure while enabling team participation and decision-making
C) To make all decisions for the team
D) To take notes during the meeting

**Correct Answer**: B
**Explanation**: Facilitation means creating the environment for good decisions. Keep the meeting on track, ensure everyone participates, handle conflicts, watch the time. But don't dictate outcomes — the team decides. Good facilitators make meetings productive without dominating them. This is a skill you'll practice as Scrum Master in Weeks 7–8 of CTS-285 and need again on a real team in CSC-289.

### Question 13
Your Dataman Sprint 2 started with 30 story points committed. Halfway through, you've only completed 8 points. What should you do?

A) Panic and work overtime to catch up
B) Assess remaining work, identify blockers, and communicate risk early to stakeholders
C) Hide the problem and hope it resolves itself
D) Blame team members for being slow

**Correct Answer**: B
**Explanation**: Professional teams communicate problems early. A burndown chart makes this visible immediately — the remaining-work line isn't tracking toward zero on schedule. Assess what's causing the slowdown — underestimated complexity in a story like the remainder-handling logic? An unexpected blocker on the curator console? Then communicate: "We're at risk of not completing all committed work this sprint. Here are our options." This gives stakeholders time to adjust. Surprises at sprint end erode trust. Transparency builds it, even when news is bad.

---

## Scoring Guide
- 90–100%: Excellent understanding of sprint planning and Agile ceremonies
- 80–89%: Good grasp, minor gaps in estimation or facilitation concepts
- 70–79%: Adequate foundation, review story points and backlog management
- Below 70%: Revisit Module 4 materials, especially the sprint planning process

## Study Resources
- Week 7–8 Assignment: Sprint 2 - Implementation & Facilitation (Dataman) — sprint planning prerequisite, implementation, standups, burndown, sprint board, review presentation, and retrospective (single combined 100-pt assignment)
- Reference: `Dataman_Seeded_Backlog.md` (shared class artifact — epics/stories referenced above)
- Canvas Reading: "Running Effective Agile Ceremonies"
- Reference: Scrum Ceremonies Quick Guide
- Reference: Story Point Estimation Guidelines
</corrected_content>
