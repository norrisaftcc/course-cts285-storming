<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/assignments/Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk6 (25 pts)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 6 Assignment: Sprint 1 Retrospective & Risk Register
## CTS-285: Systems Analysis & Design

**Due**: End of Week 6 (Friday, 11:59 PM)
**Points**: 25 (3.6% of total course grade)
**Submission**: GitHub repository with retrospective + risk register

---

## What You're Learning

Sprint 1 is complete - you have a system design package ready for implementation. But before moving to Sprint 2, you need to **reflect and plan**.

This assignment focuses on two critical PM practices:
1. **Sprint Retrospective** - Learning from what just happened
2. **Risk Management** - Anticipating what could go wrong

These aren't busywork - they're how professional teams improve and avoid disasters.

---

## Learning Objectives

1. **Reflect** on Sprint 1 process and identify specific improvements
2. **Document** actionable changes for Sprint 2
3. **Identify** project risks across technical, schedule, resource, and scope categories
4. **Assess** risk likelihood and impact using quantitative methods
5. **Create** mitigation strategies for high-priority risks

---

## Part 1: Sprint Retrospective (50 points)

### Use the Sprint Retrospective Template

Copy `/courses/CTS-285/planning-sheets/Sprint_Retrospective_Template.md` into your repository as `sprint-1-retrospective.md`.

### Section 1: What Went Well (10 points)

List **3-5 things** that worked smoothly in Sprint 1.

**Be specific**. Not "everything went fine" - name actual practices, decisions, or moments.

**Examples**:
- "Breaking ERD design into daily tasks (Monday: entities, Tuesday: relationships) prevented feeling overwhelmed"
- "Using Draw.io instead of hand-drawing UML saved 2 hours and made diagrams clearer"
- "Committing wireframes after each screen (not all at end) gave me rollback safety when I redesigned the event details page"

### Section 2: What Didn't Go Well (15 points)

List **3-5 struggles** you encountered.

**Be honest**. Retrospectives only work if you're real about problems.

**For each struggle, include**:
- What happened
- Why it was a problem
- Impact on your sprint (time lost, quality reduced, stress increased)

**Examples**:
- "Waited until Day 8 to start wireframes. Rushed the last 3 screens, and they show it. Impact: Wireframe quality lower than early screens, will need to redo for Sprint 2."
- "Didn't understand 3NF until after finishing ERD. Had to redesign entire database schema. Impact: Lost 4 hours redoing work."
- "Underestimated story points for 'complete system design' - guessed 15, actually took 22 hours. Impact: Worked weekend to finish, learned estimation is hard."

### Section 3: What Will I Change Next Sprint (20 points)

**Most important section.** List **3-5 specific, actionable changes** you'll make in Sprint 2.

**Bad change** (not actionable):
- "Work harder"
- "Manage time better"

**Good change** (actionable):
- "Front-load research tasks. Day 1-2 of sprint = research Flask routing and database setup. No coding until research done. Prevents mid-sprint blocking."
- "Commit every 2 hours minimum. Set timer. Last sprint I lost 30 minutes of wireframe work when Figma crashed. Frequent commits = safety net."
- "Use Sprint Planning template from start. I winged it last sprint and forgot capacity calculation. Template keeps me on track."

**For each change, include**:
- What specific action you'll take
- When you'll do it (Day 1? Every 2 hours? End of day?)
- How you'll remember to do it (calendar reminder? checklist?)

### Section 4: Surprises (5 points)

What surprised you about Sprint 1? Good or bad.

**Examples**:
- "UML sequence diagrams took 3× longer than I expected. Thought it'd be 1 hour, took 3. Need to adjust estimates."
- "Wireframing was actually fun. Thought it'd be tedious but I got into flow state. Want to spend more time on UI design."
- "Standups felt awkward when working solo. But writing them daily actually helped me spot when I was stuck. Changed my mind about their value."

---

## Part 2: Risk Register Creation (50 points)

### Use the Risk Register Template

Copy `/courses/CTS-285/planning-sheets/Risk_Register_Template.md` into your repository as `risk-register.md`.

### Identify Risks

Brainstorm **8-12 risks** that could affect your project success. Categories:

**Technical Risks**:
- Flask/Python knowledge gaps
- Database design flaws
- Authentication complexity
- Deployment challenges
- Integration with external APIs
- Mobile responsiveness issues

**Schedule Risks**:
- Underestimated story points
- Other courses have major deadlines same week
- Sick days / life happens
- Scope creep (adding features mid-sprint)

**Resource Risks**:
- Laptop failure
- Lost internet access
- GitHub goes down (unlikely but possible)
- Free hosting tier limits reached

**Scope Risks**:
- Trying to build too much
- Unclear requirements
- Stakeholder expectations don't match reality
- Feature dependencies blocking progress

### Risk Assessment Matrix

For each risk, calculate **Risk Score = Likelihood × Impact**

**Likelihood Scale** (1-5):
- 1 = Very unlikely (5% chance)
- 2 = Unlikely (20% chance)
- 3 = Possible (50% chance)
- 4 = Likely (70% chance)
- 5 = Very likely (90%+ chance)

**Impact Scale** (1-5):
- 1 = Negligible (minor inconvenience)
- 2 = Low (small delay, workaround exists)
- 3 = Moderate (week delay, quality reduced)
- 4 = High (major rework, deadline at risk)
- 5 = Critical (project failure)

**Risk Priority**:
- **Critical** (15-25): Address immediately
- **High** (10-14): Needs mitigation plan
- **Medium** (5-9): Monitor closely
- **Low** (1-4): Accept risk

### Example Risk Entry

```markdown
## Risk #3: Flask Authentication Implementation Complexity

**Category**: Technical
**Description**: I've never implemented user authentication. Flask-Login documentation is dense. Could implement it wrong, creating security vulnerabilities.

**Likelihood**: 4 (Likely - this is new to me)
**Impact**: 4 (High - security flaw = project unusable, major rework)
**Risk Score**: 16 (CRITICAL)

**Mitigation Strategy**:
1. **Before Sprint 2**: Complete Flask-Login tutorial (2 hours, Day 1)
2. **Week 7**: Implement auth in isolated test project before production (3 hours)
3. **Week 8**: Get code review from instructor or peer before deploying
4. **Backup plan**: Use simpler username/password (no encryption) for MVP, add proper auth in Sprint 3

**Owner**: Me
**Status**: Identified (not yet mitigated)
**Review Date**: End of Sprint 2
```

### Required Risk Entries

Document **at least 8 risks** with full details:
- Risk ID and title
- Category
- Description
- Likelihood (1-5)
- Impact (1-5)
- Risk Score (L × I)
- Priority (Critical/High/Medium/Low)
- Mitigation strategy (specific actions)
- Owner (you, instructor, IT, external)
- Status (Identified, Mitigating, Resolved, Accepted)

### Top Risks Summary

At the end of your risk register, create summary:

**Critical Risks** (Score 15-25):
- [Risk title] - Score: [X] - Mitigation: [One sentence summary]

**High Risks** (Score 10-14):
- [Risk title] - Score: [X] - Mitigation: [One sentence summary]

---

## Deliverables Checklist

- [ ] `sprint-1-retrospective.md` (all 4 sections complete)
- [ ] `risk-register.md` (8+ risks documented)
- [ ] Risk scores calculated correctly (Likelihood × Impact)
- [ ] Mitigation strategies are specific and actionable
- [ ] Files committed to GitHub
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Retrospective: What Went Well** | 10 | 3-5 specific positives, not generic |
| **Retrospective: What Didn't Go Well** | 15 | 3-5 honest struggles with impact explained |
| **Retrospective: Changes for Next Sprint** | 20 | 3-5 actionable, specific changes with implementation details |
| **Retrospective: Surprises** | 5 | Thoughtful reflection on unexpected learnings |
| **Risk Register: Risks Identified** | 20 | 8+ risks across categories, correctly scored |
| **Risk Register: Mitigation Strategies** | 20 | Specific, actionable mitigation for high-priority risks |
| **Risk Register: Summary** | 10 | Clear prioritization, critical risks highlighted |
| **Total** | 100 | |

### What Earns Full Points

**Retrospective**:
- Honesty over perfection ("I messed up X" earns more credit than "everything was great")
- Specificity ("committed 3× on Tuesday" not "committed regularly")
- Actionable changes ("Set 2-hour timer for commits" not "commit more often")

**Risk Register**:
- Risks are realistic for YOUR project (not generic copied from internet)
- Scores make sense (don't mark everything likelihood=5, impact=5)
- Mitigation strategies address the specific risk (not "work harder")
- Critical risks have detailed mitigation plans

---

## Common Issues

**Issue**: "Everything went well in Sprint 1, I have nothing for 'What Didn't Go Well'"

**Solution**: You're not being honest. Every sprint has struggles. Did you:
- Underestimate any tasks?
- Procrastinate and then rush?
- Get stuck on something for 30+ minutes?
- Redo work because first attempt was wrong?
- Feel stressed at any point?

That's "didn't go well." Document it.

**Issue**: "I can't think of risks - my project is simple"

**Solution**: Consider:
- What if your database design is flawed and you realize it in Week 10?
- What if Flask deployment is harder than you expect?
- What if you get sick for 3 days during a sprint?
- What if you realize a key feature is technically impossible with your skills?

**Issue**: "My mitigation strategies feel vague"

**Bad**: "Study Flask more"
**Good**: "Complete official Flask tutorial Sections 3-5 (authentication) by end of Week 7 Day 2. Take notes. Build test project following tutorial before implementing in real project."

Add specificity: What? When? How much time? How will you verify it's done?

---

## Resources

- **Retrospective Guide**: [Atlassian Sprint Retrospectives](https://www.atlassian.com/team-playbook/plays/retrospective)
- **Risk Management**: [ProjectManager.com Risk Guide](https://www.projectmanager.com/blog/risk-management-process)
- **Risk Matrix Calculator**: [Use spreadsheet or manual calculation]

---

## Looking Ahead: Sprint 2 (Weeks 7-8)

Next sprint you're the **Scrum Master**. Your role shifts from creating artifacts to **facilitating the process**.

You'll:
- Lead sprint planning (not just fill out template)
- Run daily standups (write them like you're reporting to a team)
- Track burndown actively (update daily, not at end)
- Present sprint review to class (5 min demo)
- Lead retrospective (this time during sprint, not after)

**Your Sprint 1 retrospective tells you what to do differently.** Use it.

---

## Andrew's Note

**Retrospectives are where growth happens.**

I can always tell which students take retrospectives seriously - their Sprint 2 is noticeably smoother. They've learned from Sprint 1 mistakes.

Students who write generic retrospectives ("I'll try harder") make the same mistakes every sprint. Then wonder why it's not getting easier.

### Real Example from Past Student:

**Sprint 1 Retrospective**: "I underestimated database design. Thought 3 hours, took 9. Will research normalization before next sprint."

**Sprint 2 Result**: "Researched database patterns. Designed entire schema in 4 hours with zero rework. Saved 5 hours compared to Sprint 1."

**That's the power of honest retrospectives.**

### On Risk Registers:

Every professional dev team has one. You're practicing industry standard PM.

I've watched students identify "deployment is harder than expected" as a risk, create mitigation plan (test deployment in Week 7 sandbox), and avoid the Week 15 panic when deployment actually IS hard.

**Students who skip risk planning end up firefighting in Week 14.** Students who plan risks handle them calmly because they already have mitigation strategies.

**Which kind of student do you want to be?**

See you in Sprint 2!

— Andrew
