<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_04_Sprint_Planning_Simulation.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk7–8 (M4)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 4 Activity: Sprint Planning Simulation - Your First Real Sprint

**Duration**: 120 minutes
**Format**: Full class as Scrum team (6-8 students per team)
**Materials Needed**:
- Product backlog (instructor-provided or from Module 2 user stories)
- Planning Poker cards (or app: planningpoker.com)
- Sprint planning worksheet
- Definition of Done checklist
- GitHub Projects board or Trello board
- Team capacity calculator
- Whiteboard or digital collaboration tool

**Learning Objectives**:
- Facilitate a complete sprint planning meeting
- Estimate user stories using Planning Poker
- Calculate team capacity and velocity
- Break stories into tasks and assign work
- Create a sprint backlog with realistic commitments
- Define sprint goals that align with business value
- Practice stakeholder negotiation when capacity is limited

---

## Overview

**You've designed a system. Now it's time to plan how to build it.**

Sprint planning is where theory meets reality. You have a product backlog full of user stories. You have a team with limited time. You have stakeholders with high expectations.

Your job: Commit to what you can realistically complete in the next 2 weeks (one sprint).

This isn't guessing. This is data-driven planning. You'll:
1. **Estimate stories**: Use Planning Poker to reach consensus on complexity
2. **Calculate capacity**: Figure out how much work the team can actually do
3. **Select stories**: Choose high-priority stories that fit within capacity
4. **Break down work**: Decompose stories into specific tasks
5. **Commit to a sprint goal**: One clear statement of what you'll achieve

Today's simulation mirrors real Scrum teams. You'll experience:
- The tension between what stakeholders want and what you can deliver
- The challenge of estimating work you haven't done before
- The value of team-based estimation (beats individual guessing every time)
- The confidence that comes from having a clear, achievable plan

By the end, you'll have:
- A sprint backlog in GitHub Projects or Trello
- Story point estimates for 10-15 user stories
- A sprint goal you can achieve
- Understanding of your team's capacity

This prepares you for CSC-289, where you'll plan real sprints for your capstone project. Get the process right now.

---

## Pre-Activity Setup (10 minutes)

**Before sprint planning begins:**

1. **Form Scrum teams** (6-8 students each):
   - **Product Owner** (PO): Instructor or designated student
   - **Scrum Master** (SM): Facilitates meeting, tracks time
   - **Development Team**: Everyone else (developers, testers, designers)

2. **Assign roles within team**:
   - [ ] Scrum Master (volunteer or rotate)
   - [ ] Timekeeper (tracks time-boxes)
   - [ ] Notetaker (captures decisions)
   - [ ] Everyone participates in estimation

3. **Gather materials**:
   - [ ] Product backlog (10-15 user stories prioritized by PO)
   - [ ] Planning Poker cards for each team member (0, 1, 2, 3, 5, 8, 13, 20, ?, ☕)
   - [ ] Access to GitHub Projects or Trello
   - [ ] Sprint planning worksheet

4. **Review the scenario**:
   - **Project**: [Instructor provides—meal planning app, library system, etc.]
   - **Sprint length**: 2 weeks (10 working days)
   - **Team size**: 6-8 students
   - **Sprint goal**: To be determined by team

5. **Review Definition of Done (DoD)**:
   ```
   A user story is "Done" when:
   - [ ] Code is written and committed to main branch
   - [ ] Unit tests written and passing
   - [ ] Code reviewed by at least one teammate
   - [ ] Feature tested against acceptance criteria
   - [ ] Documentation updated (README, code comments)
   - [ ] Demo-ready (can be shown to stakeholder)
   ```

**Instructor Check**: All teams have backlogs, cards, and understand roles. Set sprint planning time limit: 90 minutes.

---

## Part 1: Backlog Refinement & Story Estimation (40 minutes)

### Instructions

**The first rule of sprint planning: You can't plan what you don't understand.**

**Step 1: Product Owner presents the product backlog (5 minutes)**

**PO role**: Explain each user story briefly. Focus on:
- What the user needs
- Why it's valuable
- Acceptance criteria

Example:
> "Story #1: As a user, I want to search for recipes by ingredient, so that I can use what I already have at home. Acceptance criteria: User enters ingredient, system shows matching recipes, results display in under 2 seconds. This is high priority because it's a core feature—30% of our target users said this is their #1 need."

PO presents top 10-15 stories. Team asks clarifying questions.

**Step 2: Planning Poker estimation - First story (10 minutes)**

**How Planning Poker works:**

1. PO reads the story aloud
2. Team asks questions until everyone understands
3. Everyone privately selects a card (story point estimate)
4. On count of 3, everyone reveals simultaneously
5. If consensus (all cards match): That's the estimate!
6. If no consensus: Highest and lowest estimators explain their reasoning
7. Discuss, then re-estimate
8. Repeat until consensus (max 3 rounds)

**Story points are NOT hours.** They're relative complexity:
- **1 point**: Trivial (1-2 hours, minimal complexity)
- **2 points**: Simple (3-4 hours, straightforward)
- **3 points**: Moderate (half day, some complexity)
- **5 points**: Complex (full day, multiple components)
- **8 points**: Very complex (2-3 days, significant integration)
- **13 points**: Epic (too big—split it)
- **?**: No idea (need more info)
- **☕**: Too tired to think (take a break)

**Practice with Story #1:**

Example story:
```
As a user, I want to log in with my email and password,
so that I can access my saved recipes.

Acceptance Criteria:
- User enters valid email and password → logged in, sees dashboard
- User enters invalid credentials → error message displayed
- Login form includes "Forgot Password" link
```

**Estimate:** Team discusses, uses Planning Poker. Let's say consensus is **3 points**.

**Record estimate** on story card (GitHub/Trello).

**Step 3: Estimate remaining stories (25 minutes)**

Work through the backlog. For each story:
- PO reads story
- Team asks questions (2 min max)
- Team estimates with Planning Poker (5 min max)
- Record estimate, move to next

**Time-box this.** You don't need to estimate every story—just enough to fill one sprint (roughly 20-30 story points for a new team).

**Aim to estimate 10-12 stories in 25 minutes.** That's ~2 minutes per story.

### Expected Output

- 10-12 user stories with story point estimates
- Team has shared understanding of each story
- Estimates reached through consensus (not averaging or dictating)
- Stories are ordered by priority (PO's job)

### Common Issues & Fixes

**Issue**: Team can't agree on estimates (widely different cards)
- **Fix**: This is normal! It means people see the story differently. Discuss assumptions. "I said 8 because I think we need a new API endpoint." "I said 3 because we already have authentication scaffolding."
- **Resolution**: After discussion, re-estimate. Don't average—reach consensus.

**Issue**: Team wants to estimate in hours, not points
- **Fix**: Hours are deceptive. "4 hours" for a senior dev might be "12 hours" for a junior. Points measure complexity, not time.

**Issue**: Someone dominates estimation (usually the most experienced developer)
- **SM Intervention**: "Let's hear from everyone. [Quiet team member], what's your estimate and why?"

**Issue**: Estimating is taking too long (10 minutes per story)
- **Fix**: Time-box discussion to 3 minutes. If team can't decide, mark it "?" and move on. You can always refine later.

**Issue**: Team member keeps picking "?" card
- **Fix**: That's a signal—the story is unclear. PO needs to clarify or the story needs to be broken down.

---

## Part 2: Team Capacity Calculation (15 minutes)

### Instructions

**You know story complexity. Now: How much can your team actually complete in 2 weeks?**

**Step 1: Calculate individual capacity (5 minutes)**

Sprint is 2 weeks = 10 working days.

For each team member, account for:
- **Full-time availability**: 8 hours/day × 10 days = 80 hours
- **Minus meetings**: Daily standup (15 min/day), sprint review (2 hrs), retro (1 hr) = ~5 hours
- **Minus other classes**: Homework, exams for other courses = ~20 hours/week in a real academic setting
- **Minus realistic distractions**: Email, breaks, context switching = ~10%

**Example calculation for one team member:**

```
Total available hours: 80 hours (2 weeks × 40 hrs/week)
- Meetings: 5 hours
- Other commitments (estimate): 30 hours (3 hrs/day for other classes)
= 45 hours available for sprint work

Minus 10% for overhead (context switching, interruptions):
45 hours × 0.9 = ~40 hours available
```

**Each team member fills out:**
```
Name: __________________
Total hours (2 weeks): 80 hours
- Scrum ceremonies: _____ hours
- Other commitments: _____ hours
- Overhead (10%): _____ hours
= Available capacity: _____ hours
```

**Be honest.** If you have midterms this sprint, your capacity is lower. That's okay.

**Step 2: Calculate team capacity (5 minutes)**

Add up individual capacities:

```
Team Member 1: 40 hours
Team Member 2: 35 hours (has midterm)
Team Member 3: 40 hours
Team Member 4: 25 hours (working part-time job)
Team Member 5: 40 hours
Team Member 6: 30 hours (other project deadline)

Total Team Capacity: 210 hours
```

**Step 3: Convert hours to story points (5 minutes)**

For a new team with no velocity history, use this rule of thumb:

**1 story point ≈ 4-6 hours of work**

This accounts for:
- Implementation time
- Testing time
- Code review
- Unexpected issues

Using our example:
```
Team Capacity: 210 hours
÷ 5 hours per story point
= 42 story points (theoretical max)

Apply safety buffer (20% for unknowns):
42 × 0.8 = ~34 story points
```

**Your team's sprint capacity: 34 story points.**

**This is your budget.** You can't commit to more than this without overloading the team.

### Expected Output

- Individual capacity calculated for each team member
- Total team capacity in hours
- Team capacity converted to story points (with safety buffer)
- Realistic sprint commitment target

### Common Issues & Fixes

**Issue**: Team member claims 80 hours available (unrealistic)
- **SM Intervention**: "Do you have other classes? Homework? Ever eat lunch?" Push for honesty. Better to under-promise and over-deliver.

**Issue**: Team wants to commit to max capacity (no buffer)
- **Fix**: "What happens when someone gets sick? Or we discover a bug? Or a story is harder than expected?" Buffer is essential.

**Issue**: Team capacity is very low (only 20 story points)
- **Fix**: That's okay! Velocity improves over time. Better to commit to 20 and complete it than commit to 40 and fail.

---

## Part 3: Sprint Backlog Creation & Task Breakdown (30 minutes)

### Instructions

**You have capacity. You have estimated stories. Now: Select stories that fit.**

**Step 1: Product Owner proposes sprint goal (3 minutes)**

A sprint goal is ONE sentence describing what the sprint will achieve.

**Good sprint goal:**
> "Enable users to search and save recipes."

**Bad sprint goal (too vague):**
> "Make progress on the app."

**Bad sprint goal (too specific):**
> "Complete stories #1, #3, #5, #7, and #9."

**PO proposes goal** based on business priorities.

**Step 2: Select stories that align with sprint goal (7 minutes)**

Start from top of backlog (highest priority). Add stories until you reach capacity.

Example:
```
Team Capacity: 34 story points

Story #1: Search recipes by ingredient (5 pts) → Total: 5 pts
Story #2: Display recipe details (3 pts) → Total: 8 pts
Story #3: Save recipe to favorites (3 pts) → Total: 11 pts
Story #4: User registration (5 pts) → Total: 16 pts
Story #5: User login (3 pts) → Total: 19 pts
Story #6: View saved recipes list (5 pts) → Total: 24 pts
Story #7: Rate a recipe (3 pts) → Total: 27 pts
Story #8: Write recipe review (5 pts) → Total: 32 pts

Stop here. 32 points is within 34 capacity.
```

**Optional: Add one stretch goal story (Story #9, 3 pts)** for if the team finishes early. But don't commit to it—it's a stretch.

**Step 3: Create sprint backlog board (10 minutes)**

In GitHub Projects or Trello, create board structure:

**Columns:**
- **To Do**: Stories committed for this sprint
- **In Progress**: Currently being worked on
- **Review**: Completed, awaiting code review
- **Testing**: Code reviewed, awaiting testing
- **Done**: Meets Definition of Done

**Add stories** to "To Do" column.

For each story, add:
- Story title
- Story points
- Acceptance criteria (checklist)
- Priority label

**Step 4: Break down first 2-3 stories into tasks (10 minutes)**

Pick the highest-priority stories. Break each into specific tasks.

Example - Story #1: Search recipes by ingredient (5 pts)

**Tasks:**
1. Design database query for ingredient search (1 hr)
2. Create API endpoint for search (2 hrs)
3. Build search UI component (3 hrs)
4. Connect frontend to API (1 hr)
5. Write unit tests for API (2 hrs)
6. Write UI tests for search component (2 hrs)
7. Test with 100+ recipes (edge case testing) (1 hr)
8. Code review (1 hr)
9. Update documentation (1 hr)

**Total: ~14 hours ≈ 3-4 person-days**

Add these tasks as checklist items or sub-tasks in your project board.

**Assign tasks** (optional): Team members can self-assign or wait until daily standup.

### Expected Output

- Sprint goal defined (one sentence)
- 6-10 user stories selected for sprint (total = team capacity)
- All stories added to sprint backlog board
- Top 2-3 stories broken down into specific tasks
- Understanding of how to decompose stories as sprint progresses

### Common Issues & Fixes

**Issue**: Team wants to commit to every story in the backlog
- **PO Reality Check**: "This backlog represents 3 months of work. You have 2 weeks. Choose what's most important."

**Issue**: Team selects low-priority stories because they're easier
- **PO Intervention**: "Story #12 is easy, but it's low value. I'd rather you complete Stories #1-3 (harder, but critical) than 10 low-value stories."

**Issue**: Tasks are too vague ("Work on frontend")
- **Fix**: Make tasks specific and testable. "Build search input form with validation" is better.

**Issue**: Team underestimates task breakdown time
- **Fix**: It's okay if you only break down 2-3 stories now. You can break down more during the sprint as you pull stories into "In Progress."

---

## Part 4: Stakeholder Negotiation & Commitment (20 minutes)

### Instructions

**Reality check: The PO wants more than you can deliver.**

This is always true. Your job: Negotiate with data.

**Step 1: Present sprint plan to Product Owner (5 minutes)**

**Scrum Master presents:**
- "Our team capacity is 34 story points"
- "We're committing to Stories #1-8, totaling 32 points"
- "This achieves the sprint goal: Enable users to search and save recipes"
- "Story #9 is a stretch goal if we finish early"

**Step 2: Product Owner pushback (5 minutes)**

**Instructor (as PO) will push back:**

> "I was hoping you'd complete Stories #1-12. The client is expecting the full recipe feature by end of sprint, including reviews, ratings, and meal planning integration. Can you commit to more?"

**Team must negotiate using data:**

**Good response:**
> "We understand that's the ideal outcome. However, our team capacity is 34 story points based on our availability. Stories #1-8 total 32 points, which is realistic for our first sprint. Stories #9-12 add another 18 points, putting us at 50 points total—47% over capacity. We risk failing to deliver anything complete if we overcommit.
>
> Our recommendation: We commit to Stories #1-8 this sprint (core search and save functionality). Stories #9-12 (reviews, ratings, meal planning) move to Sprint 2. This ensures we deliver a working feature this sprint rather than multiple incomplete features."

**Bad response (avoid these):**
> "We'll just work more hours." ❌ (Unsustainable)
> "Okay, we'll commit to all 12." ❌ (Setting up for failure)
> "I guess we can try?" ❌ (Not confident, not data-driven)

**Step 3: Practice negotiation (5 minutes)**

**Role-play scenarios:**

**Scenario A**: PO wants you to add 3 more stories mid-sprint.
- **Team response**: "If we add 3 stories, what 3 stories should we remove to stay within capacity?"

**Scenario B**: PO says Story #5 is now critical and must be done first.
- **Team response**: "We can reprioritize, but we can't add to the sprint commitment without removing something else."

**Scenario C**: Stakeholder asks, "Why are you so slow? Other teams deliver 60 story points per sprint."
- **Team response**: "Story points are relative to each team. Our 34 points might be equivalent to another team's 60. What matters is: Do we deliver what we commit to?"

**Step 4: Finalize sprint commitment (5 minutes)**

After negotiation, formalize the commitment:

**Sprint Commitment Document:**
```
Sprint #1: [Dates]
Sprint Goal: Enable users to search and save recipes

Committed Stories:
- [ ] Story #1: Search recipes by ingredient (5 pts)
- [ ] Story #2: Display recipe details (3 pts)
- [ ] Story #3: Save recipe to favorites (3 pts)
- [ ] Story #4: User registration (5 pts)
- [ ] Story #5: User login (3 pts)
- [ ] Story #6: View saved recipes list (5 pts)
- [ ] Story #7: Rate a recipe (3 pts)
- [ ] Story #8: Write recipe review (5 pts)

Total Committed: 32 story points
Team Capacity: 34 story points
Capacity Utilization: 94%

Stretch Goal (not committed):
- Story #9: Generate shopping list from recipes (3 pts)

Risks:
- Risk: Team member has midterm Week 2 (capacity reduced)
  Mitigation: Front-load their tasks to Week 1
- Risk: Authentication integration may be more complex than estimated
  Mitigation: Spike story in first 2 days; escalate if blocked

Definition of Done (all stories must meet these):
- Code written and committed to main
- Unit tests written and passing
- Code reviewed by teammate
- Feature tested against acceptance criteria
- Documentation updated
- Demo-ready

Team Agreement:
We commit to delivering Stories #1-8 by end of Sprint 1. If we finish early, we'll pull in Story #9. We will not add additional stories mid-sprint without removing equal story points.

Signed: [Team members]
```

**Everyone signs** (literally or digitally). This is your contract for the sprint.

### Expected Output

- Practiced negotiation with Product Owner
- Defended sprint commitment using capacity data
- Finalized sprint commitment document
- Understanding that sprint scope is fixed once committed

### Common Issues & Fixes

**Issue**: Team caves to PO pressure and commits to more than capacity
- **SM Intervention**: "Wait. Let's look at our data. We have 34 points of capacity. Committing to 50 means we're planning to fail. Let's negotiate scope, not overwork."

**Issue**: Team is afraid to say no to stakeholders
- **Fix**: Practice saying no with data. Role-play until it feels natural. "We can deliver quality on 32 points or rushed, incomplete work on 50. Which do you prefer?"

**Issue**: PO dismisses team's capacity calculation
- **Fix**: "We understand you're skeptical. Let's run this sprint and measure actual velocity. After Sprint 1, we'll have data on whether 34 points is realistic or conservative."

---

## Wrap-up & Reflection (15 minutes)

### Discussion Questions

**1. Estimation Surprises**: When your team estimated stories, were there any big disagreements? What caused them? How did discussing them change your understanding of the story?

**2. Capacity Reality**: How did your calculated capacity compare to what you initially thought? Were you more or less optimistic before doing the math?

**3. Negotiation Challenge**: How did it feel to push back on the Product Owner's request for more stories? What made it easier or harder?

**4. Commitment Confidence**: On a scale of 1-10, how confident are you that your team can deliver the committed stories? What would increase your confidence?

**5. Real-World Application**: If you were planning your CSC-289 capstone sprint right now, what would you do differently based on today's experience?

### Exit Ticket

**Submit via Canvas**:

```
1. What was your team's sprint capacity in story points? _____
   How many story points did you commit to? _____

2. What's one thing you underestimated during planning?

3. What was the hardest part of sprint planning? (Estimation? Capacity calculation? Negotiation?)

4. If you could redo this sprint planning, what would you change?

5. What's one specific thing you'll apply to your capstone project sprint planning?
```

---

## Extension Challenges (Optional)

**For teams who finish early:**

### Challenge 1: Burndown Chart Projection
Create a projected burndown chart for your sprint:
- X-axis: Days (1-10)
- Y-axis: Story points remaining
- Plot ideal burndown (linear from 32 to 0)
- Predict realistic burndown (accounting for backend-heavy early days)

### Challenge 2: Risk Assessment
For each committed story, identify risks:
- Technical risk: Unfamiliar technology, complex integration
- Dependency risk: Blocked by another story or external factor
- Resource risk: Key person unavailable

Create mitigation plan for top 3 risks.

### Challenge 3: Daily Standup Simulation
Simulate Day 3 of sprint. Each team member answers:
- What did I complete yesterday?
- What will I work on today?
- Any blockers?

Update board to reflect 3 days of progress.

### Challenge 4: Sprint Goal Variations
Rewrite your sprint goal 3 different ways:
- User-focused: "Users can find and save recipes"
- Business-focused: "Increase user engagement by 30%"
- Technical-focused: "Implement search and persistence layers"

Which is most effective? Why?

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, team formation, role assignment
- **10-50 min**: Part 1 - Backlog refinement and Planning Poker estimation
- **50-65 min**: Part 2 - Team capacity calculation
- **65-95 min**: Part 3 - Sprint backlog creation and task breakdown
- **95-115 min**: Part 4 - Stakeholder negotiation and commitment
- **115-130 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Confusing story points with hours
   - **Intervention**: "Story points are complexity, not time. A 5-point story takes a senior dev 4 hours, a junior dev 12 hours. Same complexity, different time."
   - **Success Indicator**: Team discusses complexity factors (unknowns, integration, testing) not hours

**2. Struggle**: Overcommitting to please stakeholders
   - **Intervention**: Role-play as a tough PO. Push back hard. Make them defend their capacity with data. Celebrate when they hold firm.
   - **Success Indicator**: Team says "No, we can't add more without removing something else" confidently

**3. Struggle**: Estimation dominated by one person
   - **Intervention**: Enforce silent card selection in Planning Poker. Everyone reveals simultaneously. No one changes their card after seeing others.
   - **Success Indicator**: Diverse estimates initially, then convergence through discussion (not conformity)

**4. Struggle**: Capacity calculation is too optimistic
   - **Intervention**: Ask pointed questions: "Do you have homework for other classes? When will you do it? How many hours this week?" Make them subtract realistically.
   - **Success Indicator**: Individual capacity is 30-45 hours per person in a 2-week sprint (not 60-80)

**5. Struggle**: Sprint goal is a list of stories, not a goal
   - **Intervention**: "If you completed 4 out of 8 stories, what would you have achieved? That's your goal." Help them see the theme.
   - **Success Indicator**: Sprint goal is one sentence about user value or business outcome

### Materials to Prepare

**Before Class:**
- [ ] Create product backlog (15-20 user stories, clearly prioritized)
- [ ] Print Planning Poker cards (or set up planningpoker.com for remote)
- [ ] Prepare sprint planning worksheet template
- [ ] Create Definition of Done checklist
- [ ] Set up GitHub Projects board template (or Trello)
- [ ] Write stakeholder pushback script (scenarios to challenge teams)
- [ ] Prepare example sprint commitment document

**During Class:**
- [ ] Assign roles (PO, SM, dev team) for each team
- [ ] Set timers for each part (keep teams on track)
- [ ] Circulate during estimation to observe Planning Poker dynamics
- [ ] Listen during capacity calculation (catch unrealistic estimates)
- [ ] Play tough Product Owner during negotiation (push back authentically)
- [ ] Photograph sprint boards for reference
- [ ] Note which teams negotiate well (positive reinforcement)

**After Class:**
- [ ] Collect sprint commitment documents from each team
- [ ] Check capacity calculations (follow up with teams that wildly over/underestimated)
- [ ] Note which teams had healthy Planning Poker discussions vs groupthink
- [ ] Compile best practices from successful negotiations
- [ ] Prepare to reference these commitments when students plan capstone sprints

### Teaching Tips

**Make Planning Poker physical**: If possible, use actual cards. The physical act of selecting and revealing creates engagement.

**Be a challenging PO**: Don't be a pushover. Real stakeholders push back. Make students practice defending their capacity. This is a safe space to learn.

**Celebrate good negotiation**: When a team says "No, that's outside our capacity," praise them loudly. Model that saying no is professional, not defiant.

**Connect to previous labs**: "Remember your user stories from Module 2? Now you're estimating them. Remember your design from Module 3? That informs your estimates."

**Normalize disagreement**: When Planning Poker reveals wildly different estimates, celebrate it: "This is good! It means we're uncovering assumptions. Let's talk through them."

**Teach the power of data**: Every time a team defends their plan with numbers (capacity, story points, hours), reinforce it: "That's a data-driven decision. Stakeholders can't argue with math."

**Time-box ruthlessly**: Sprint planning can expand forever. Keep teams moving. "You have 3 minutes to estimate this story. Go."

### Teaching Philosophy Notes

Sprint planning is where students feel the tension between what's ideal and what's possible. This discomfort is the lesson.

Planning Poker forces collaboration. Students who work alone struggle. Students who discuss and debate learn faster. Estimation is a team sport.

Capacity calculation is a reality check. Students always overestimate their availability. Making them calculate forces honesty.

The negotiation role-play is critical. Students fear saying no to authority (instructor as PO). Practicing this in a safe environment builds confidence.

The sprint commitment document is the payoff. Students sign it. It's real. They're accountable. This foreshadows the accountability they'll have in capstone and in their careers.

Finally, this lab isn't about perfect planning. It's about transparent planning. When teams show their work (capacity calc, story points, risks), stakeholders can trust the plan even if it's not what they hoped for.

---

**Remember**: Sprint planning isn't about making everyone happy. It's about making a realistic plan that the team can deliver. Under-promise and over-deliver beats over-promise and under-deliver every time.
