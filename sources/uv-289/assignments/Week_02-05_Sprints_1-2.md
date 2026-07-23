<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_02-05_Sprints_1-2.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 M2-M3
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Weeks 2-5: Sprint 1-2 Execution
**CSC-289: Programming Capstone Project**

**Duration**: Weeks 2-5 (4 weeks total, 2 sprints × 2 weeks each)
**Points**: 100 points (50 pts per sprint)
**CLOs Addressed**: CLO 1, 4, 5, 6

---

## Overview

Execute your first two autonomous sprints, establishing baseline velocity and delivering core MVP features. These sprints focus on foundational development while preparing for Week 6 GRD-242 design brief presentation.

---

## Sprint Structure (Applies to Both Sprint 1 & Sprint 2)

Each 2-week sprint follows this cycle:

**Week X, Day 1-2**: Sprint Planning
**Week X, Days 3-10**: Daily Development + Standups
**Week X+1, Day 10**: Sprint Review (demo)
**Week X+1, Day 10-12**: Sprint Retrospective

---

## Required Deliverables (Per Sprint)

### **1. Sprint Planning Document (10 points)**

Create `SPRINT_[#]_PLANNING.md` in your repository.

**Template**:
```markdown
# Sprint [#] Planning: [Project Name]

**Sprint Duration**: [Start Date] - [End Date]
**Sprint Goal**: [One sentence describing what you'll achieve]

---

## Team Capacity

**Available Days**: 10 working days (2 weeks, assuming weekends off)
**Hours per Day**: [Realistic estimate - e.g., 2-3 hours]
**Total Capacity**: [Days × Hours = X hours]
**Story Points Capacity**: [Based on prior velocity or estimate]

**Sprint 1 Note**: No prior velocity data. Conservative estimate: 10-12 points
**Sprint 2 Note**: Use Sprint 1 actual velocity to plan

---

## Sprint Goal

[Describe SMART goal - Specific, Measurable, Achievable, Relevant, Time-bound]

**Example Sprint 1**: "Deliver working user authentication system (registration, login, logout) with database persistence."

**Example Sprint 2**: "Deliver basic task management interface (create, view, complete tasks) and draft design brief for GRD presentation."

---

## Selected User Stories

### Story 1: [Title]
- **Issue**: #[GitHub Issue number]
- **Story Points**: X
- **Priority**: Must Have / Should Have / Could Have
- **Acceptance Criteria**:
  - [ ] [Criterion 1]
  - [ ] [Criterion 2]
  - [ ] [Criterion 3]
- **Technical Tasks**:
  - [ ] Task 1 (estimated X hours)
  - [ ] Task 2 (estimated X hours)
  - [ ] Task 3 (estimated X hours)

[Repeat for all stories in sprint backlog]

---

## Total Sprint Commitment

**Stories Selected**: [Number]
**Total Story Points**: [Sum]
**Estimated Hours**: [Sum of task estimates]

**Risk Assessment**:
- [Any concerns about capacity?]
- [Dependencies or blockers?]
- [Stretch goals if ahead of schedule?]

---

## Definition of Done

A story is "Done" when:
- [ ] All acceptance criteria met
- [ ] Code committed to feature branch
- [ ] Pull request created with description
- [ ] Self-reviewed (no obvious bugs)
- [ ] Merged to main branch
- [ ] Working in deployed/local environment

---

## Sprint Risks

| Risk | Probability | Mitigation |
|------|-------------|------------|
| [Risk 1] | High/Med/Low | [What you'll do to reduce impact] |

---

**Planning Completed By**: [Your Name]
**Date**: [Date]
```

---

### **2. Daily Standups (10 points)**

Create `SPRINT_[#]_STANDUPS.md` with **minimum 8 entries** per 2-week sprint.

**Template**:
```markdown
# Sprint [#] Standups: [Project Name]

---

## Day 1: [Date]

**Yesterday**: Sprint planning completed
**Today**: Set up development environment, start Story #[X]
**Blockers**: None yet

---

## Day 2: [Date]

**Yesterday**: [Specific accomplishment - e.g., "Created user registration form UI"]
**Today**: [Specific plan - e.g., "Implement form validation logic"]
**Blockers**: [None / OR describe specific blocker]

**Notes**: [Optional - learnings, questions, resources found]

---

[Continue for minimum 8 days...]

---

## Day 10: [Date]

**Yesterday**: [Accomplishment]
**Today**: Sprint review prep, retrospective
**Blockers**: [Any unresolved blockers]

**Sprint Summary**: [Completed X/Y stories, Z points delivered]
```

**Grading Notes**:
- Consistency matters more than perfection
- Missing days happen—note reason: "Day 5: No standup (sick day)"
- Quality example: "Yesterday: Implemented password hashing with bcrypt, tested with 5 sample users. Today: Build login endpoint, integrate with frontend form. Blockers: None."
- Poor example: "Yesterday: Coding. Today: More coding. Blockers: None."

---

### **3. Technical Implementation (20 points)**

Deliver working code via Pull Request(s).

**Requirements**:
- **Minimum 1 PR per sprint** (can be multiple PRs for different features)
- PR description includes:
  - What features/stories this PR addresses
  - How to test the changes
  - Screenshots (if UI changes)
  - Closes #[Issue number]
- Code quality:
  - Readable (meaningful variable names, logical structure)
  - Commented where needed (explain WHY, not WHAT)
  - No major code smells (avoid excessive duplication, spaghetti logic)
- Functionality:
  - Core feature works (even if not polished)
  - No critical bugs that prevent basic use

**Grading**:
- Excellent (18-20 pts): Multiple features working, clean code, well-documented PR
- Proficient (15-17 pts): Core features working, acceptable code quality
- Developing (12-14 pts): Features partially working, code quality issues
- Needs Improvement (0-11 pts): Features don't work or no code delivered

---

### **4. Sprint Review (5 points)**

Create `SPRINT_[#]_REVIEW.md` documenting your demo and outcomes.

**Template**:
```markdown
# Sprint [#] Review: [Project Name]

**Date**: [Date]
**Attendees**: Andrew Norris, [Your Name]

---

## Sprint Goal Review

**Sprint Goal**: [Copy from planning]
**Goal Achieved?**: ✅ Yes / ⚠️ Partially / ❌ No

**Rationale**: [Explain why goal was/wasn't met]

---

## Demo

**Completed Stories**:
1. [Story Title] (#[Issue]) - [X points] ✅
   - [What you demoed]
   - [Screenshot or video link]

2. [Story Title] (#[Issue]) - [X points] ✅
   - [What you demoed]
   - [Screenshot or video link]

**Total Delivered**: [X points] out of [Y points committed] = [Z%]

---

## Incomplete Work

**Not Finished**:
- [Story Title] (#[Issue]) - [X points] ⏸️
  - **Reason**: [Why not finished]
  - **Status**: [How much is done - e.g., "60% complete, needs testing"]
  - **Plan**: [Move to Sprint 2, or abandon?]

---

## Feedback Received

**From Andrew Norris**:
- [Feedback point 1]
- [Feedback point 2]

**User Testing** (if applicable):
- [Any user feedback received]

**New Backlog Items Created**:
- [Bug found during demo → created Issue #X]
- [Feature request from stakeholder → created Issue #Y]

---

## Key Metrics

- **Velocity**: [X points delivered]
- **Commitment Accuracy**: [X/Y points = Z%]
- **Stories Completed**: [X out of Y]

---

**Review Completed By**: [Your Name]
**Date**: [Date]
```

---

### **5. Sprint Retrospective (15 points)**

Create `SPRINT_[#]_RETROSPECTIVE.md` reflecting on process and identifying improvements.

**Template**:
```markdown
# Sprint [#] Retrospective: [Project Name]

**Date**: [Date]
**Sprint Duration**: [Start] - [End]

---

## Sprint Metrics

**Planned Capacity**: [X points]
**Actual Delivery**: [Y points]
**Velocity**: [Y points]
**Stories Completed**: [A out of B]
**Commitment Accuracy**: [Y/X = Z%]

---

## What Went Well? ✅

[List 3-5 specific things that worked]

**Examples**:
- "Daily standups kept me accountable—posting progress publicly motivated consistency"
- "Breaking 'user registration' into smaller tasks (UI, validation, database) made estimation more accurate"
- "Using bcrypt tutorial from Week 1 research saved 3 hours debugging authentication"

---

## What Didn't Go Well? ❌

[List 3-5 specific problems, challenges, or mistakes]

**Examples**:
- "Underestimated database schema complexity—5 pts estimated, actually 8 pts effort"
- "Spent 4 hours debugging CORS issue that Stack Overflow solved in 10 minutes (should have googled earlier)"
- "Skipped standups Days 6-7 (busy week)—lost track of progress, had to scramble at sprint end"

---

## Learnings 💡

[What did you learn this sprint?]

**Technical Learnings**:
- [e.g., "Learned how JWT tokens work for stateless authentication"]
- [e.g., "Discovered React Hook Form library—much easier than manual validation"]

**Process Learnings**:
- [e.g., "2-3 hours/day is realistic capacity, 4+ hours leads to burnout"]
- [e.g., "Testing as I code (not end-of-sprint) catches bugs earlier"]

---

## Action Items for Next Sprint 📋

[Specific, actionable improvements—not vague goals]

**Process Improvements**:
- [ ] **Action 1**: [e.g., "Research tech stack unknowns BEFORE sprint planning, not during sprint"]
- [ ] **Action 2**: [e.g., "Write tests for critical features (auth, data persistence) as I code"]
- [ ] **Action 3**: [e.g., "Block 2-hour coding session daily (morning works best for focus)"]

**Technical Improvements**:
- [ ] **Action 4**: [e.g., "Refactor user registration form to use reusable components (reduce duplication)"]
- [ ] **Action 5**: [e.g., "Add error handling to API calls (currently crashes on network errors)"]

---

## Estimation Accuracy Analysis

**Stories and Estimates**:
| Story | Estimated | Actual | Variance | Notes |
|-------|-----------|--------|----------|-------|
| User Registration | 5 pts | 8 pts | +3 pts | Didn't account for password hashing complexity |
| User Login | 3 pts | 3 pts | 0 pts | Accurate! |
| Database Setup | 2 pts | 5 pts | +3 pts | PostgreSQL setup harder than expected |

**Patterns**:
- [e.g., "Consistently underestimate database/backend work by 50%"]
- [e.g., "Frontend estimates accurate when using familiar tech"]

**Adjustment for Next Sprint**:
- [e.g., "Add 1.5x buffer to backend story points"]
- [e.g., "Break unknowns into research spike (2 pts) + implementation (X pts)"]

---

## Risk Register Updates

**New Risks Identified**:
- [Risk that emerged during sprint]

**Risks Mitigated**:
- [Risk that was addressed]

**Risks That Materialized**:
- [Risk that actually happened—how did we handle it?]

---

## Shout-Outs 🎉

[Acknowledge help, resources, or wins]

**Examples**:
- "Thanks to Andrew for clarifying JWT best practices in office hours"
- "Stack Overflow user [username] saved my life with CORS fix"
- "Proud of myself for not giving up on database connection bug after 2 hours"

---

## Overall Sprint Health

**Rate this sprint**: ⭐⭐⭐⭐⭐ (1-5 stars)

**Rationale**: [Why this rating?]

---

**Retrospective Completed By**: [Your Name]
**Date**: [Date]
```

**Grading Notes**:
- **Depth matters**: "Everything was fine" = low grade. Specific examples = high grade.
- **Honesty rewarded**: Admitting mistakes/struggles shows maturity.
- **Action items**: Vague goals ("do better") = low grade. Specific actions ("google error first, then ask for help") = high grade.
- **Implementation**: Sprint 2+ retrospectives should show you APPLIED prior action items.

---

## Special Requirements for Sprint 2 (Week 4-5)

### **Additional Deliverable: Design Brief Draft**

In Sprint 2, add preparation for Week 6 GRD presentation:

**Create** `DESIGN_BRIEF_DRAFT.md` (not graded separately, but sets up Week 6 assignment success)

**Include**:
- Project overview (vision, users, problem)
- Brand identity needs (tone, mood, references)
- Visual assets needed (logo, colors, icons)
- Technical constraints (file formats, dimensions, accessibility)
- User stories for design ("As a user, I want X design element so that Y UX goal")

**Plan Sprint 2 story**:
- "Design Brief Preparation" (2-3 pts)
- Create issue, track in sprint planning
- Deliverable: Draft ready for refinement in Week 6

---

## Submission Requirements

### **For Each Sprint (1 & 2), submit to Canvas**:

1. **Sprint Planning Document** (markdown or PDF)
2. **Standup Log** (markdown or PDF, minimum 8 entries)
3. **GitHub Pull Request Link(s)** (showing merged code)
4. **Sprint Review** (markdown or PDF with demo screenshots/video)
5. **Sprint Retrospective** (markdown or PDF)

### **GitHub Repository Must Show**:
- Feature branches for stories
- Pull requests with descriptions
- Closed Issues (stories marked complete)
- Commits with meaningful messages

---

## Grading Rubric (Per Sprint)

**Total: 50 points per sprint**

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Planning** | 10 | Complete planning doc, realistic capacity, clear goal, backlog selected |
| **Daily Standups** | 10 | Minimum 8 entries, specific progress/plans, blockers noted |
| **Technical Implementation** | 20 | Working code, PR(s) merged, features functional, code quality acceptable |
| **Sprint Review** | 5 | Demo documented, metrics tracked, feedback recorded |
| **Sprint Retrospective** | 15 | Honest reflection, specific learnings, actionable improvements, estimation analysis |

---

## Tips for Success

### **Sprint Planning**
- ✅ Conservative estimates for Sprint 1 (you don't know velocity yet)
- ✅ Sprint 2: Use Sprint 1 actual velocity, not wishful thinking
- ✅ Have "stretch goals" if you finish early (don't sit idle)
- ✅ Account for real life (midterms, work, etc.)

### **Daily Standups**
- ✅ Post even when progress is slow ("Yesterday: Debugging auth for 3 hours, no progress. Today: Will try different approach.")
- ✅ Be specific ("Built login form" not "Did coding")
- ✅ Note blockers immediately (don't wait until sprint review to mention)

### **Technical Work**
- ✅ Commit frequently (daily if possible)
- ✅ Test as you go (don't leave all testing to sprint end)
- ✅ PR descriptions help future you (6 months later, you'll forget why you made that change)

### **Sprint Review**
- ✅ Demo working features, even if ugly
- ✅ Screenshots/video required (proves it works)
- ✅ Celebrate what you DID deliver (don't only focus on misses)

### **Retrospective**
- ✅ Vulnerability > perfection (admitting struggles shows professional maturity)
- ✅ Specific action items you can actually do ("Google errors before asking for help" not "Be a better developer")
- ✅ Track patterns (if same estimation error happens 2 sprints, it's a pattern to address)

---

## Connection to Course Outcomes

**CLO 1 (Autonomous PM)**: Sprint cycle demonstrates self-directed project management without instructor hand-holding.

**CLO 4 (Adaptive planning)**: Retrospectives and velocity tracking show adaptive planning based on data.

**CLO 5 (Documentation)**: Sprint artifacts create transparent process record.

**CLO 6 (Professional practices)**: GitHub workflow, PR descriptions, commit messages mirror industry standards.

---

## FAQs

**Q: What if I don't hit my sprint goal?**
A: Totally fine! Document WHY in retrospective, adjust Sprint 2 planning. Process-over-perfection: failing honestly is better than faking success.

**Q: Can I change my sprint plan mid-sprint?**
A: Yes! If blocker arises or story takes longer than expected, adjust. Document in standup ("Removing Story X, adding Story Y due to blocker"). Adaptation is expected.

**Q: What if I finish Sprint 1 early?**
A: Pull stories from backlog (stretch goals), or use time to refactor/add tests. Update sprint planning with what you added.

**Q: My velocity in Sprint 1 was 6 points (estimated 12). Did I fail?**
A: No! Sprint 1 establishes baseline. Document in retro: "Learned I underestimated by 50%, will adjust Sprint 2 to 6-7 points." That's professional PM.

---

**Resources**:
- [Sacred Flow Workflow Guide](../reference-materials/PR-Workflow-Checklist.md)
- [Process-Over-Perfection Manifesto](../safe-to-fail/Process-Over-Perfection-Manifesto.md)

---

**Next**: Week 6 Design Brief Presentation

---

**Last Updated**: January 20, 2026
