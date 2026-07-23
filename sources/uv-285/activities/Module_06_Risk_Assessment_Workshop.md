<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_06_Risk_Assessment_Workshop.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk11–12 (M6)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 6 Activity: Risk Assessment Workshop - Planning for What Could Go Wrong

**Duration**: 120 minutes
**Format**: Small groups (3-4 students)
**Materials Needed**:
- Risk register template
- Risk matrix poster or digital tool
- Project scenario documents (from previous modules)
- Definition of Done checklist template
- Mitigation planning worksheet
- Sticky notes (3 colors for risk categories)
- Whiteboard or digital collaboration tool

**Learning Objectives**:
- Identify technical, schedule, resource, and scope risks in IT projects
- Assess risk likelihood and impact using a risk matrix
- Prioritize risks based on severity
- Create actionable mitigation plans for high-priority risks
- Define a team's Definition of Done with quality criteria
- Distinguish between risks (future threats) and issues (current problems)

---

## Overview

**Projects don't fail suddenly. They die slowly from unmanaged risks.**

You've planned sprints. You've designed systems. You've estimated work. But have you planned for what could go wrong?

Risk management isn't pessimism. It's realism. Every project has risks:
- **Technical risks**: "What if the API we depend on goes down?"
- **Schedule risks**: "What if a team member gets sick during finals week?"
- **Resource risks**: "What if we run out of free-tier credits on AWS?"
- **Scope risks**: "What if the stakeholder keeps adding features mid-sprint?"

Ignoring these doesn't make them go away. It just means you'll be surprised when they happen.

Today's workshop teaches you to:
1. **Identify risks**: Brainstorm everything that could go wrong
2. **Assess risks**: Use likelihood × impact to prioritize
3. **Mitigate risks**: Create plans to reduce or avoid high-priority risks
4. **Define Done**: Set quality standards so risks don't hide in "90% complete" code

By the end, you'll have:
- A risk register for your project (10-15 identified risks)
- A risk matrix showing priorities
- Mitigation plans for your top 5 risks
- A Definition of Done your team commits to

This prepares you for CSC-289. Capstone projects fail when teams don't see risks coming. You'll see them coming.

**One key insight**: The best project managers aren't optimists. They're realistic optimists. They plan for success while preparing for failure.

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Form groups** (3-4 students):
   - Ideally, use your capstone project teams
   - If capstone teams not formed yet, create temporary groups

2. **Choose a project scenario**:
   - Option A: Use your actual CSC-289 capstone project (if defined)
   - Option B: Use the meal planning app from Module 3
   - Option C: Instructor-provided scenario

3. **Gather materials**:
   - [ ] Risk register template (spreadsheet or table)
   - [ ] Risk matrix grid (5x5: Likelihood × Impact)
   - [ ] Sticky notes (3 colors: technical, schedule, resource)
   - [ ] Whiteboard space or digital board

4. **Review risk categories**:
   ```
   TECHNICAL RISKS:
   - Technology failures, integration issues, performance problems

   SCHEDULE RISKS:
   - Delays, dependencies, time estimation errors

   RESOURCE RISKS:
   - Team availability, tool access, budget constraints

   SCOPE RISKS:
   - Feature creep, unclear requirements, stakeholder changes

   EXTERNAL RISKS:
   - Third-party dependencies, regulatory changes, market shifts
   ```

5. **Review risk assessment scales**:
   ```
   LIKELIHOOD:
   1 = Rare (< 10% chance)
   2 = Unlikely (10-30% chance)
   3 = Possible (30-50% chance)
   4 = Likely (50-70% chance)
   5 = Almost Certain (> 70% chance)

   IMPACT:
   1 = Negligible (minor inconvenience)
   2 = Minor (small delay or workaround needed)
   3 = Moderate (significant delay or rework)
   4 = Major (misses deadline or key feature)
   5 = Critical (project failure)
   ```

**Instructor Check**: All groups have a project scenario and understand the risk categories and scales.

---

## Part 1: Risk Identification - Brainstorming What Could Go Wrong (30 minutes)

### Instructions

**Rule: No idea is too silly. Everything goes on the board first. We filter later.**

**Step 1: Silent brainstorming (10 minutes)**

Each person individually writes risks on sticky notes (one risk per note).

Think through the project lifecycle:
- **Planning**: What if requirements are unclear?
- **Design**: What if our architecture doesn't scale?
- **Development**: What if we can't integrate the payment API?
- **Testing**: What if we don't have time to test everything?
- **Deployment**: What if the hosting platform has an outage?
- **Maintenance**: What if users find a security flaw?

Also consider team risks:
- What if a team member drops the class?
- What if two people have conflicting schedules?
- What if we underestimated the complexity?

**Use the 3 colors:**
- **Yellow**: Technical risks
- **Blue**: Schedule/resource risks
- **Pink**: Scope/external risks

**Aim for 15-20 risks per person.** Write fast, don't filter yet.

**Step 2: Group sharing & clustering (10 minutes)**

Put all sticky notes on the whiteboard/board. Read them aloud.

Group similar risks:
```
DATABASE CLUSTER:
- "Database server goes down"
- "Database runs out of storage"
- "Database query is too slow"

Combine into: "Database availability and performance issues"
```

**Aim to consolidate down to 12-15 distinct risks.**

**Step 3: Clarify each risk (10 minutes)**

For each risk, make sure the group understands:
- **What**: What specifically could go wrong?
- **When**: At what phase of the project?
- **Why it matters**: What's the impact if it happens?

**Write each risk in the format:**
```
"[Event] could cause [Impact]"

Examples:
- "Third-party recipe API rate limit could cause search feature to fail during peak usage"
- "Team member illness during finals week could cause sprint velocity to drop by 40%"
- "Unclear user story acceptance criteria could cause rework after code review"
```

**Step 4: Add any missing risks (5 minutes)**

Review your consolidated list. Are you missing any obvious categories?

**Common risks teams forget:**
- Security vulnerabilities
- Data loss or corruption
- Scope creep from stakeholder
- Key team member leaving
- Budget overruns (hosting costs, API fees)
- Legal/compliance issues (GDPR, accessibility)

Add 2-3 more risks if needed.

### Expected Output

- 12-15 identified risks on sticky notes, categorized by type
- Each risk clearly stated in "[Event] could cause [Impact]" format
- Risks cover technical, schedule, resource, and scope categories
- Team has shared understanding of each risk

### Common Issues & Fixes

**Issue**: Team only identifies technical risks, ignoring people/process risks
- **Fix**: Prompt them: "What about your team? What about the stakeholder? What about time?"

**Issue**: Risks are too vague ("Something might go wrong")
- **Fix**: Be specific. What exactly? Where? When? "Database failure" is vague. "PostgreSQL server crashes during high traffic" is specific.

**Issue**: Team lists issues they already have, not future risks
- **Fix**: Issues are current problems. Risks are future threats. "We don't have a database yet" is an issue. "Database could crash" is a risk.

**Issue**: Risks are actually assumptions ("We assume the API will work")
- **Fix**: Turn assumptions into risks: "If the API doesn't work as documented, we'll need to find an alternative, delaying the sprint by 1 week."

---

## Part 2: Risk Assessment - Prioritizing with the Risk Matrix (25 minutes)

### Instructions

**Not all risks are equal. Some are likely and devastating. Some are rare and minor. Prioritize.**

**Step 1: Draw the risk matrix (5 minutes)**

On whiteboard or digital tool, create a 5x5 grid:

```
IMPACT →
↓          1       2       3       4       5
L    1   [Low]  [Low]  [Med]  [Med]  [High]
I    2   [Low]  [Med]  [Med]  [High] [High]
K    3   [Med]  [Med]  [High] [High] [Crit]
E    4   [Med]  [High] [High] [Crit] [Crit]
L    5   [High] [High] [Crit] [Crit] [Crit]
I
H
O
O
D
```

**Color-code the zones:**
- **Green (Low)**: Monitor, low priority
- **Yellow (Medium)**: Plan mitigation, moderate priority
- **Orange (High)**: Mitigation required, high priority
- **Red (Critical)**: Immediate action, must address before project starts

**Step 2: Assess each risk (15 minutes)**

For each of your 12-15 risks, discuss as a team:

**Example risk**: "Third-party recipe API rate limit could cause search feature to fail during peak usage"

**Likelihood discussion:**
- "How often do APIs have rate limits?" → Almost certain (5)
- "Wait, but will we hit the limit?" → Depends on usage. Let's say Likely (4)

**Impact discussion:**
- "If search fails, can users still use the app?" → Partially, but it's a core feature
- "Would this delay our launch?" → Probably need to find alternative API → Major (4)

**Consensus**: Likelihood = 4, Impact = 4 → Risk Score = 16 → **Critical risk**

**Record each risk:**
```
Risk #1: API Rate Limit
Likelihood: 4 (Likely)
Impact: 4 (Major)
Risk Score: 16 (4 × 4)
Priority: Critical
```

**Place sticky note on matrix** in the appropriate cell (row 4, column 4).

**Repeat for all 12-15 risks.**

**Step 3: Identify top 5 risks (5 minutes)**

Look at your matrix. The risks in the red and orange zones are your priorities.

**List your top 5 risks** (highest scores):
```
Top 5 Risks:
1. API Rate Limit (Score: 16 - Critical)
2. Team member dropout (Score: 15 - Critical)
3. Database performance (Score: 12 - High)
4. Unclear acceptance criteria (Score: 12 - High)
5. Hosting cost overrun (Score: 9 - High)
```

These are the risks you MUST mitigate.

### Expected Output

- Completed 5x5 risk matrix with all 12-15 risks plotted
- Each risk has likelihood and impact scores
- Risks visually prioritized by color zone
- Top 5 risks identified for mitigation planning

### Common Issues & Fixes

**Issue**: Team argues endlessly about whether likelihood is 3 or 4
- **Fix**: Time-box discussion to 2 minutes per risk. If you can't decide, pick the higher score (be conservative).

**Issue**: All risks are rated as critical
- **Fix**: Force rank them. "If you could only mitigate 3 risks, which 3?" That's your top priority.

**Issue**: Team underestimates likelihood ("That'll never happen!")
- **Fix**: Ask: "What's the evidence? Has this happened on other projects?" If yes, it's more likely than you think.

**Issue**: Team focuses on low-impact, low-likelihood risks
- **Fix**: Point to the matrix: "This risk is in the green zone. Focus on the red zone first."

---

## Part 3: Mitigation Planning - How to Reduce or Avoid Risks (35 minutes)

### Instructions

**For your top 5 risks, create mitigation plans.**

**Risk mitigation strategies:**
1. **Avoid**: Change the plan to eliminate the risk entirely
2. **Reduce**: Take action to lower likelihood or impact
3. **Transfer**: Shift risk to someone else (insurance, vendor SLA)
4. **Accept**: Acknowledge risk but do nothing (if impact is manageable)

**Step 1: Mitigation plan for Risk #1 (8 minutes)**

Pick your highest-priority risk. Work through the mitigation template:

**Example**: API Rate Limit (Likelihood: 4, Impact: 4)

**Mitigation Template:**
```
RISK: Third-party recipe API rate limit could cause search feature to fail during peak usage

STRATEGY: Reduce (lower likelihood and impact)

ACTIONS:
1. Research API rate limits before committing to this API
   - Owner: [Student name]
   - Deadline: Week 1 of sprint
   - Success criteria: Documented rate limit and expected usage

2. Implement caching for API responses
   - Owner: [Student name]
   - Deadline: Week 2 of sprint
   - Success criteria: 80% of searches served from cache

3. Identify backup API as fallback
   - Owner: [Student name]
   - Deadline: Week 1 of sprint
   - Success criteria: Second API tested and documented

4. Add rate limit monitoring/alerting
   - Owner: [Student name]
   - Deadline: Week 3 of sprint
   - Success criteria: Alert triggers when approaching 80% of limit

RESIDUAL RISK (after mitigation):
- Likelihood: 2 (Unlikely - we have caching and backup)
- Impact: 2 (Minor - fallback API available)
- New Risk Score: 4 (Low)

SUCCESS INDICATOR:
We've mitigated this risk if: "We can handle 1000 searches per day without hitting rate limits, and if we do, users seamlessly switch to backup API."
```

**Step 2: Mitigation plans for Risks #2-5 (20 minutes)**

Repeat the process for your remaining top 4 risks.

**Example templates:**

**Risk #2: Team member dropout**
```
STRATEGY: Reduce + Transfer
- Action: Cross-train team members (everyone knows 2+ areas of code)
- Action: Document all critical decisions in GitHub wiki
- Action: Set up weekly check-ins to catch early warning signs
```

**Risk #3: Database performance issues**
```
STRATEGY: Reduce
- Action: Load test with 10,000 sample records
- Action: Add database indexes on frequently queried fields
- Action: Set performance budget (queries must complete in < 500ms)
```

**Risk #4: Unclear acceptance criteria**
```
STRATEGY: Avoid
- Action: Require all user stories to pass peer review before sprint planning
- Action: Use Given-When-Then format for all acceptance criteria
- Action: Demo stories to PO mid-sprint for early feedback
```

**Risk #5: Hosting cost overrun**
```
STRATEGY: Reduce + Accept
- Action: Set up billing alerts at $50, $75, $100
- Action: Use free tier services where possible
- Action: Budget $100 for hosting (team contributes $25 each)
- Accept: If we exceed $100, we'll migrate to cheaper hosting
```

**Step 3: Create contingency plans (7 minutes)**

For your top 3 risks, answer: **"If this risk happens despite mitigation, what's Plan B?"**

Example:
```
Risk #1: API Rate Limit
Contingency: If we hit rate limit despite caching, immediately switch to backup API. User experience degrades slightly (slower search), but feature remains functional.

Risk #2: Team Member Dropout
Contingency: If a member drops after Week 4, redistribute their stories among remaining team. Cut scope by 20% (defer "nice to have" stories to post-launch).

Risk #3: Database Performance
Contingency: If database is too slow despite optimization, add "loading" UI indicators and set user expectations for response time. Post-launch, migrate to more powerful database tier.
```

### Expected Output

- Detailed mitigation plans for top 5 risks
- Each plan includes: strategy, specific actions, owners, deadlines, success criteria
- Residual risk score calculated (after mitigation)
- Contingency plans for top 3 risks (Plan B if mitigation fails)

### Common Issues & Fixes

**Issue**: Mitigation actions are vague ("We'll be more careful")
- **Fix**: Make actions specific and measurable. "We'll test with 10,000 records and verify queries complete in < 500ms" is concrete.

**Issue**: No one owns the mitigation actions
- **Fix**: Every action needs an owner and deadline. No owner = it won't happen.

**Issue**: Mitigation is more work than the team can handle
- **Fix**: Prioritize. You can't mitigate everything. Focus on top 3 risks. Accept some lower risks.

**Issue**: Team creates mitigation but no contingency
- **Fix**: Mitigation reduces risk. Contingency is your backup plan if risk happens anyway. Always have Plan B.

---

## Part 4: Definition of Done - Setting Quality Standards (20 minutes)

### Instructions

**Risks hide in "90% complete" code. Definition of Done (DoD) eliminates that hiding place.**

**Step 1: Understand why DoD matters (3 minutes)**

**Scenario without DoD:**
- Developer: "I'm done with the login feature!"
- Reviewer: "But there are no tests."
- Developer: "Oh, I thought done meant code written."
- Reviewer: "And the error handling?"
- Developer: "I can add that..."
- **Result**: Story is 60% done, not 100%. Sprint fails.

**Scenario with DoD:**
- DoD says: "Done = code + tests + error handling + documentation"
- Developer checks DoD before marking story complete
- Story is truly done when claimed
- **Result**: No surprises, sprint succeeds

**Step 2: Draft your team's Definition of Done (10 minutes)**

Create a checklist that EVERY user story must meet before it's "Done."

**Standard DoD categories:**

**Code Quality:**
- [ ] Code is written and follows team style guide
- [ ] No linter errors or warnings
- [ ] Code is committed to main branch (or feature branch merged)

**Testing:**
- [ ] Unit tests written and passing (min 80% code coverage)
- [ ] Integration tests passing
- [ ] Manual testing completed against acceptance criteria
- [ ] Edge cases tested (empty states, errors, boundary conditions)

**Review:**
- [ ] Code reviewed by at least one teammate
- [ ] All review comments addressed or documented as deferred
- [ ] No unresolved "request changes" in PR

**Documentation:**
- [ ] README updated with new features/changes
- [ ] Code comments explain complex logic
- [ ] API endpoints documented (if applicable)

**Deployment:**
- [ ] Feature works in staging environment
- [ ] No console errors or warnings
- [ ] Performance acceptable (< 3 second load time)

**Acceptance:**
- [ ] All acceptance criteria met
- [ ] Product Owner (or proxy) has reviewed and accepted
- [ ] Demo-ready (can be shown to stakeholder)

**Customize for your project.** Add or remove items based on your context.

**Example customizations:**
- Mobile app: "Feature tested on iOS and Android"
- API project: "Postman collection updated with new endpoints"
- Data project: "Data validation rules documented"

**Step 3: Prioritize DoD items (5 minutes)**

Some DoD items are non-negotiable. Some are aspirational.

Mark each item:
- **Must**: Can't mark story done without this
- **Should**: Strongly encouraged, but can defer in emergencies
- **Nice**: Ideal but not required for every story

Example:
```
Definition of Done:

MUST HAVE:
- [ ] Code written and committed ✅
- [ ] All acceptance criteria met ✅
- [ ] Manual testing completed ✅
- [ ] Code reviewed and approved ✅

SHOULD HAVE:
- [ ] Unit tests written (80% coverage) ⚠️
- [ ] Documentation updated ⚠️
- [ ] No linter warnings ⚠️

NICE TO HAVE:
- [ ] Performance optimized 💡
- [ ] Accessibility tested 💡
```

**Step 4: Commit to your DoD (2 minutes)**

**Write at the bottom:**
```
"We, the [Team Name], commit to this Definition of Done for all user stories in our project. We will not mark a story 'Done' unless all MUST HAVE criteria are met."

Signed:
- [Team Member 1]
- [Team Member 2]
- [Team Member 3]
- [Team Member 4]

Date: __________
```

**Everyone signs.** This is your quality contract.

### Expected Output

- Complete Definition of Done checklist (10-15 items)
- Items categorized as Must/Should/Nice
- Team consensus on non-negotiable quality standards
- Signed commitment document

### Common Issues & Fixes

**Issue**: DoD is too long (25+ items)
- **Fix**: Focus on essentials. If everything is required, nothing is. Aim for 8-12 core items.

**Issue**: DoD is too vague ("Code should be good quality")
- **Fix**: Make it testable. "Code should be good quality" → "Code passes linter with no errors, has 80% test coverage, and has no functions > 50 lines."

**Issue**: Team wants to skip DoD items for "quick fixes"
- **Fix**: That's how bugs slip through. "Quick fix" still needs tests and review. No exceptions to DoD.

**Issue**: DoD doesn't include acceptance criteria
- **Fix**: Biggest mistake. Always include: "All acceptance criteria met." That's the definition of done.

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Risk Awareness**: Before this workshop, how much time had you spent thinking about what could go wrong in your project? Has your perspective changed?

**2. Mitigation Trade-offs**: Mitigation takes time. How do you balance "time spent preventing problems" vs "time spent building features"?

**3. Realistic vs Pessimistic**: Is risk management pessimistic, or is it realistic? How do you avoid becoming so risk-averse that you never ship anything?

**4. DoD Discipline**: How will your team enforce the Definition of Done? What happens when someone wants to skip a DoD item "just this once"?

**5. Capstone Application**: Looking ahead to CSC-289, which of your identified risks are most likely to affect your capstone project? How will you mitigate them?

### Exit Ticket

**Submit via Canvas**:

```
1. List your team's top 3 risks and their mitigation strategies:
   - Risk #1: _______________
     Mitigation: _______________
   - Risk #2: _______________
     Mitigation: _______________
   - Risk #3: _______________
     Mitigation: _______________

2. What risk did you identify that you hadn't thought about before today?

3. What's one item in your Definition of Done that you think teams often skip? Why is it important?

4. How confident are you that your team can manage these risks? (1-5 scale)
   What would increase your confidence?
```

---

## Extension Challenges (Optional)

**For groups who finish early:**

### Challenge 1: Risk Trigger Identification
For each of your top 5 risks, identify the early warning signs:

```
Risk: Team member dropout
Triggers (warning signs):
- Missing 2+ consecutive classes
- Not responding to team messages within 24 hours
- Completing stories late 2 sprints in a row
- Verbal hints: "I'm really overwhelmed this semester"

Action: If we see 2+ triggers, we have a team conversation to offer support or adjust workload.
```

### Challenge 2: Risk-Adjusted Schedule
Create a project timeline that includes risk mitigation tasks:

```
Week 1:
- User stories (3 days)
- Risk #1 mitigation: Research APIs (1 day)
- Risk #3 mitigation: Database load testing (1 day)

Week 2:
- Development (4 days)
- Risk #2 mitigation: Cross-training session (1 day)
```

Does mitigation time fit in your sprint? If not, what gets cut?

### Challenge 3: Risk Retrospective
Simulate the end of your project. For each risk:
- Did it happen? (Yes/No)
- If yes: Did your mitigation work?
- If no: Was your risk assessment too conservative?

What would you do differently on the next project?

### Challenge 4: Compliance & Legal Risks
Research legal/compliance risks for your project:
- Privacy: Do you handle user data? (GDPR, CCPA)
- Accessibility: Does your app meet WCAG standards?
- Licensing: Are you using open-source libraries correctly?
- Copyright: Are you using images/content legally?

Add 2-3 compliance risks to your risk register.

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, group formation, scenario selection
- **10-40 min**: Part 1 - Risk identification brainstorming
- **40-65 min**: Part 2 - Risk assessment with matrix
- **65-100 min**: Part 3 - Mitigation planning for top 5 risks
- **100-120 min**: Part 4 - Definition of Done creation
- **120-130 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Identifying risks feels like being negative
   - **Intervention**: Reframe: "You're not being pessimistic. You're being prepared. Every successful project plans for risks."
   - **Success Indicator**: Students identify 12+ risks without hesitation, covering multiple categories

**2. Struggle**: All risks seem equally important (can't prioritize)
   - **Intervention**: Force ranking exercise: "You can only mitigate 3 risks. Which 3?" Make them choose.
   - **Success Indicator**: Risk matrix shows clear differentiation (some green, some red, not all orange)

**3. Struggle**: Mitigation plans are vague wish lists
   - **Intervention**: "Who owns this action? By when? How do we know it worked?" Make every action SMART.
   - **Success Indicator**: Mitigation plans have names, dates, and measurable outcomes

**4. Struggle**: Definition of Done is either too strict or too loose
   - **Intervention**: Test it: "If a story meets this DoD, could it ship to production tomorrow?" If no, DoD is incomplete.
   - **Success Indicator**: DoD balances quality (thorough) with pragmatism (achievable)

**5. Struggle**: Team creates plans but doesn't believe they'll follow them
   - **Intervention**: "These plans are only useful if you use them. How will you review your risk register each sprint?"
   - **Success Indicator**: Students schedule recurring risk review in their sprint ceremonies

### Materials to Prepare

**Before Class:**
- [ ] Print risk register templates (1 per group)
- [ ] Create risk matrix poster (5x5 grid) or digital template
- [ ] Prepare project scenario documents (if not using student capstone projects)
- [ ] Print Definition of Done examples from real projects
- [ ] Create list of common IT project risks (as reference)
- [ ] Prepare mitigation plan worksheet template
- [ ] Have sticky notes (3 colors) available

**During Class:**
- [ ] Display risk assessment scales on projector throughout class
- [ ] Circulate during brainstorming to encourage breadth (not just tech risks)
- [ ] Check risk matrices for overly conservative or optimistic assessments
- [ ] Review mitigation plans for specificity (challenge vague actions)
- [ ] Verify DoD includes acceptance criteria (teams often forget)
- [ ] Take photos of risk matrices and DoD documents for reference

**After Class:**
- [ ] Compile all team risk registers into shared document
- [ ] Identify common risks across teams (teach mitigation strategies next class)
- [ ] Note which teams have strong mitigation plans (share as examples)
- [ ] Follow up with teams that have unrealistic DoD (too loose or too strict)
- [ ] Create FAQ from questions asked during workshop
- [ ] Schedule mid-semester check: "Did any of your risks happen?"

### Teaching Tips

**Normalize failure stories**: Share real project failures caused by unmanaged risks. "I once worked on a project that launched 3 months late because we didn't plan for database migration time. This cost the company $200K."

**Use the 'premortem' technique**: "Imagine it's the end of the semester and your project failed. Why did it fail?" This makes risk identification easier.

**Celebrate paranoia**: When a student identifies a risk others missed, praise them: "Great catch! That's exactly the kind of thinking that prevents disasters."

**Connect DoD to grades**: "In capstone, your grade depends on delivering working software. DoD is how you ensure it's actually working, not 'mostly working.'"

**Teach risk != issue**: Students confuse current problems with future risks. "We don't have a database yet" is an issue to solve now. "The database could crash" is a risk to mitigate.

**Force prioritization**: Students want to mitigate everything. "You have 10 hours this week for risk mitigation. How do you spend it?" Make them choose.

**Model continuous risk management**: "Risk management isn't a one-time workshop. It's weekly. Every sprint planning should include: 'Any new risks? Any risks that materialized?'"

### Teaching Philosophy Notes

Risk management feels abstract until a risk becomes real. Students who skip this often learn the hard way when their capstone project derails.

This workshop makes risk concrete. By identifying, assessing, and planning mitigations, students build the mental model: "Risks are manageable IF you see them coming."

The risk matrix is powerful because it's visual. Students who couldn't prioritize risks suddenly can when they see the red zone vs green zone.

Mitigation planning is where theory meets practice. Vague mitigation ("we'll be careful") is useless. Specific mitigation ("we'll load test with 10K records by Friday") is actionable.

Definition of Done is the culmination. It's the team's promise to themselves: "We won't lie about progress. Done means done, not 'mostly done.'"

Finally, this workshop builds accountability. When teams sign their DoD and risk register, they own it. This ownership carries into capstone.

By the end, students should think: "I know what could go wrong. I have plans to prevent it. And if it happens anyway, I have contingency plans. I'm prepared."

---

**Remember**: The goal isn't to eliminate all risks (impossible). The goal is to see risks coming and have a plan. Surprised teams fail. Prepared teams adapt. Be prepared.
