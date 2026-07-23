<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/INSTRUCTOR-GUIDE-2WEEK-SPRINTS.md
  verdict: HARVEST
  target-26FA-slot: CSC-289 P4 instructor guide
  ingest-date: 2026-07-23
  HARVEST: ADR-001 Housekeeping orders this ARCHIVED with a deprecation header — but it is also the only doc describing the clean 2-week cadence ADR-001 §2 adopts, so harvest the cadence rhythm and self-organization workflow before archiving. Do not c
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CSC-289 Instructor Guide: 2-Week Sprint Implementation

**Course**: CSC-289 System Support Project
**Instructor**: Drew Norris
**Focus**: GitHub Project Board workflow with team self-organization

---

## Quick Reference: The 2-Week Sprint Cycle

Each 2-week sprint follows this rhythm:

```
Week 1, Day 1-2: Sprint Planning
Week 1, Day 1 - Week 2, Day 5: Sprint Execution (10 days of standups)
Week 2, Day 5 (end): Sprint Review (demo)
Week 2, Day 5-7: Sprint Retrospective
```

---

## The GitHub Project Board Workflow

### Core Philosophy
Students **choose** issues, **volunteer** to work on them, and **move** them across the board.

This simulates real-world agile teams where:
- Team members self-organize around work
- No one assigns tasks top-down
- People volunteer based on skills/interest/capacity
- Board state reflects actual progress

### Board Columns

**Standard Kanban Layout**:
1. **Backlog** - All issues (prioritized, estimated)
2. **To Do** - Selected for current sprint
3. **In Progress** - Actively being worked on
4. **In Review** - Awaiting code review/feedback
5. **Done** - Meets Definition of Done

### Student Actions

**Sprint Planning (Day 1-2)**:
1. Review backlog issues (sorted by priority)
2. Estimate capacity for 2-week sprint
3. **Choose issues** from backlog to pull into "To Do" column
4. **Volunteer** by self-assigning issues (GitHub assign)
5. Break down stories into tasks if needed
6. Document sprint goal and commitments

**During Sprint (Days 1-10)**:
1. **Self-assign** issues from "To Do" when ready to start
2. **Move to "In Progress"** when beginning work
3. **Update daily standup** markdown file (commit daily)
4. **Move to "In Review"** when ready for feedback
5. **Move to "Done"** when Definition of Done is met
6. Repeat for next issue

**Sprint Review (Day 10-11)**:
1. Demo ALL issues in "Done" column
2. Stakeholder feedback
3. Move incomplete issues back to backlog or next sprint

**Sprint Retrospective (Day 11-12)**:
1. What went well?
2. What didn't go well?
3. Action items for next sprint
4. Board hygiene (close old issues, update estimates)

---

## Module-by-Module Sprint Goals

### Module 1: Red Clearance Recertification (Weeks 1-2)
**Not a standard sprint** - this is a bootcamp/certification

**Student Deliverables**:
- Project Charter
- Work Breakdown Structure (WBS)
- Initial Product Backlog (GitHub Issues created)
- Release Roadmap (8-week plan)
- Risk Register

**Instructor Actions**:
- Review all artifacts in detail
- Provide feedback on PM quality
- **Must approve before student continues** (Pass/Fail gate)

---

### Module 2: Sprint 1 (Weeks 3-4)
**Sprint Goal**: Establish GRD-242 partnership and create collaboration protocol

**Example Board Issues** (student creates these):
```
Epic: Project Kickoff
├── Issue #1: Conduct stakeholder interviews with GRD students
├── Issue #2: Create collaboration protocol document
├── Issue #3: Set up communication channels (Slack/Discord)
├── Issue #4: Define design asset handoff process
├── Issue #5: Create meeting schedule with GRD team
└── Issue #6: Document technical constraints for designers
```

**Student Workflow**:
1. Sprint Planning: Choose 3-5 issues based on capacity (maybe 10-15 story points)
2. Daily: Update standup file, move issues across board
3. Sprint Review: Present collaboration protocol and partnership plan
4. Sprint Retrospective: How did first sprint go? What to improve?

**Instructor Actions**:
- Attend sprint review (15-20 min demo)
- Read retrospective (provide lightweight feedback)
- Check that daily standups are consistent (8 of 10 days minimum)

**Grading**:
- Sprint Planning doc: 50 pts (Is it realistic? Well-structured?)
- Sprint Execution: 50 pts (Daily standups posted? Board updated?)
- Sprint Review: 25 pts (Did they demo working artifacts?)
- Sprint Retrospective: 25 pts (Honest reflection? Action items?)

---

### Module 3: Sprint 2 (Weeks 5-6)
**Sprint Goal**: Create comprehensive product backlog with user stories

**Example Board Issues**:
```
Epic: Requirements Engineering
├── Issue #7: Write user stories for authentication feature
├── Issue #8: Write user stories for dashboard feature
├── Issue #9: Write user stories for GRD asset display
├── Issue #10: Add Given-When-Then acceptance criteria to all stories
├── Issue #11: Estimate all backlog items (story points)
├── Issue #12: Apply MoSCoW prioritization
└── Issue #13: Map GRD dependencies in backlog
```

**Student Workflow**:
- Choose issues to pull into sprint
- Self-assign and work through them
- Move across board as completed
- Daily standups continue

**Instructor Actions**:
- Attend sprint review (backlog walkthrough)
- Review user story quality (acceptance criteria clear?)
- Check estimation seems realistic

**Grading**: Same structure (Planning 50, Execution 50, Review 25, Retro 25)

---

### Module 4: Sprint 3 (Weeks 7-8)
**Sprint Goal**: Design system architecture and define MVP

**Example Board Issues**:
```
Epic: System Architecture
├── Issue #14: Create UML use case diagram
├── Issue #15: Create UML class diagram
├── Issue #16: Create database ERD
├── Issue #17: Write technical specification document
├── Issue #18: Define MVP scope (Must Have features only)
├── Issue #19: Create release roadmap through Week 16
└── Issue #20: Document GRD asset integration points
```

**Instructor Actions**:
- Attend sprint review (architecture walkthrough)
- Review MVP scope (realistic for remaining weeks?)
- Confirm GRD collaboration is progressing

---

### Module 5: Sprint 4 (Weeks 9-10) 🎯 **CRITICAL SPRINT**
**Sprint Goal**: Implement MVP features with GRD asset integration

**This is where coding begins!**

**Example Board Issues**:
```
Epic: MVP Development
├── Issue #21: Set up project repository structure
├── Issue #22: Implement authentication feature
├── Issue #23: Implement dashboard layout
├── Issue #24: Integrate GRD logo and branding assets
├── Issue #25: Implement data display feature
├── Issue #26: Write tests for core features
└── Issue #27: Deploy MVP to staging environment
```

**Student Workflow**:
- Choose realistic number of issues (based on Sprint 1-3 velocity)
- Self-assign issues as they work through them
- Move issues: To Do → In Progress → In Review → Done
- Daily standups critical (track progress, surface blockers)
- **Final sprint with active GRD collaboration**

**Instructor Actions**:
- Attend sprint review - **expect working demo** (not slides!)
- Check that GRD assets are integrated
- Review velocity: Did they overcommit? Undercommit?
- Provide feedback on sprint retrospective

**Grading**: Higher points (Planning 50, Execution 75, Review 50, Retro 25 = 200 pts)

---

### Module 6: Sprint 5 (Weeks 11-12)
**Sprint Goal**: Additional features, testing, and quality assurance

**GRD collaboration ends** - solo development begins

**Example Board Issues**:
```
Epic: Feature Expansion & Testing
├── Issue #28: Implement secondary feature A
├── Issue #29: Implement secondary feature B
├── Issue #30: Add input validation across all forms
├── Issue #31: Write comprehensive test suite
├── Issue #32: Fix bugs identified in testing
├── Issue #33: Improve error handling
└── Issue #34: Create user documentation draft
```

**Student Workflow**:
- Adjust velocity based on Sprint 4 actuals
- May need to cut scope if behind schedule (this is GOOD PM!)
- Continue board workflow (choose, volunteer, move)

**Instructor Actions**:
- Attend sprint review (expect demo with testing evidence)
- Review scope management decisions (did they adapt plan?)
- Check retrospective for velocity analysis

---

### Module 7: Sprint 6 (Weeks 13-14)
**Sprint Goal**: Polish, documentation, and process portfolio compilation

**Example Board Issues**:
```
Epic: Polish & Documentation
├── Issue #35: UI/UX polish - improve visual consistency
├── Issue #36: Accessibility improvements (ARIA, keyboard nav)
├── Issue #37: Write technical documentation (README, API docs)
├── Issue #38: Write user guide/training materials
├── Issue #39: Fix remaining bugs from backlog
├── Issue #40: Compile all PM artifacts for process portfolio
└── Issue #41: Create burndown charts for all 6 sprints
```

**Student Workflow**:
- Focus on refinement, not new features
- Start compiling process portfolio (Sprint 1-6 artifacts)
- Prepare for final delivery

**Instructor Actions**:
- Attend sprint review (final feature demo + docs preview)
- Check that process portfolio is coming together
- Review retrospective: Does student understand their PM journey?

---

### Module 8: Final Delivery (Weeks 15-16)
**Not a standard sprint** - final presentation and portfolio defense

**Student Deliverables**:
- Working capstone system (deployed)
- Process portfolio (all PM artifacts from 6 sprints)
- PM reflection essay (2-3 pages)
- Final presentation (technical + process)

**Instructor Actions**:
- Attend final presentation
- Review process portfolio in detail
- Grade reflection essay for depth
- Evaluate PM mastery growth

**Grading**: High stakes (Capstone 200, Portfolio 100, Essay 75, Presentation 100 = 475 pts)

---

## Measuring Different Things Each Sprint

From the instructor's note: "I need to do that like three times" (measuring different things)

### Sprint 1-2: **Process Establishment**
**What to measure**:
- Are they following the sprint rituals consistently?
- Are daily standups honest and detailed?
- Is the board being updated in real-time?
- Are retrospectives reflective?

**Feedback Focus**:
- "Your daily standups are great - keep this up!"
- "Move issues to 'In Review' when ready for feedback, not just to 'Done'"
- "Your retrospective needs more depth - what specifically will you do differently?"

---

### Sprint 3-4: **Velocity & Estimation**
**What to measure**:
- Are estimates realistic (story points vs. actual completion)?
- Did they overcommit or undercommit?
- Is velocity stabilizing across sprints?
- Are they adapting capacity based on actual performance?

**Feedback Focus**:
- "You committed to 20 points but only completed 12 - adjust Sprint 4 planning"
- "Your estimates are improving - great PM growth!"
- "You're consistently finishing early - increase capacity next sprint"

---

### Sprint 5-6: **Adaptive Decision-Making**
**What to measure**:
- Did they cut scope when needed? (Good!)
- Are they making intentional trade-offs?
- Do they document decision rationale?
- Are retrospective action items implemented?

**Feedback Focus**:
- "Excellent scope decision - you cut Feature X to ensure MVP quality"
- "You identified the blocker early and had a backup plan - professional!"
- "Your retrospective action items from Sprint 4 are visible in Sprint 5 - great!"

---

## Grading Rubric Template

### Sprint Planning Document (50 pts)

**Excellent (45-50)**:
- Sprint goal is clear and achievable
- Capacity planning based on known velocity
- Stories broken down into tasks
- Realistic commitments
- GRD dependencies identified (Sprints 1-4)

**Proficient (40-44)**:
- Sprint goal present
- Capacity considered
- Stories identified
- Mostly realistic

**Needs Improvement (30-39)**:
- Sprint goal vague
- No capacity planning
- Overcommitted or undercommitted significantly

**Unsatisfactory (0-29)**:
- No sprint planning document OR extremely unrealistic

---

### Sprint Execution (50-75 pts depending on module)

**Excellent (90-100%)**:
- Daily standups posted 9-10 of 10 days
- Standups are detailed and honest
- Board updated in real-time (issues moving correctly)
- Commits show consistent progress
- Blockers surfaced proactively

**Proficient (80-89%)**:
- Daily standups posted 8 of 10 days
- Standups are adequate
- Board mostly updated
- Commits show progress

**Needs Improvement (60-79%)**:
- Daily standups posted 6-7 of 10 days
- Standups are minimal
- Board not consistently updated
- Progress inconsistent

**Unsatisfactory (0-59%)**:
- Standups missing (<6 of 10 days)
- Board not maintained
- Little evidence of work

---

### Sprint Review (25-50 pts depending on module)

**Excellent (90-100%)**:
- Working demo delivered (not slides!)
- All "Done" issues demonstrated
- Stakeholder feedback incorporated
- Professional presentation

**Proficient (80-89%)**:
- Demo delivered
- Most issues demonstrated
- Adequate presentation

**Needs Improvement (60-79%)**:
- Partial demo OR too many slides
- Some issues not demonstrated

**Unsatisfactory (0-59%)**:
- No demo OR all slides, no working software

---

### Sprint Retrospective (25 pts)

**Excellent (23-25)**:
- Honest reflection (what went well, what didn't)
- Specific action items for next sprint
- Analysis of velocity/estimation
- GRD collaboration assessed (Sprints 1-4)
- Evidence of PM growth mindset

**Proficient (20-22)**:
- Reflection present
- Action items identified
- Basic analysis

**Needs Improvement (15-19)**:
- Surface-level reflection
- Vague action items
- No real analysis

**Unsatisfactory (0-14)**:
- No retrospective OR extremely minimal

---

## Instructor Time Commitment

### Weekly (During Sprints 1-6):
- **Sprint Planning Review**: 15 min per student (bi-weekly)
- **Sprint Review Attendance**: 20 min per student (bi-weekly)
- **Standup Monitoring**: 5 min per student (weekly spot-check)
- **Retrospective Review**: 10 min per student (bi-weekly)

**Total per student per sprint**: ~50 min every 2 weeks

**For class of 15 students**: ~12.5 hours per sprint cycle (spread over 2 weeks)

### Module 1 (Red Clearance):
- **Detailed Review**: 60-90 min per student (one-time, high-stakes)

### Module 8 (Final Delivery):
- **Final Presentation**: 30 min per student
- **Process Portfolio Review**: 60 min per student
- **Reflection Essay Grading**: 30 min per student

---

## Tips for Success

### For Students:
1. **Board hygiene matters** - move issues promptly, close completed work
2. **Standups aren't busy work** - use them to reflect and surface blockers
3. **Velocity improves over time** - don't expect perfect estimates in Sprint 1
4. **Adaptation is rewarded** - cutting scope when needed shows PM maturity
5. **Retrospectives drive improvement** - actually implement action items!

### For Instructor:
1. **Focus on process, not perfection** - reward adaptation over rigid plan-following
2. **Attend demos, not just grade** - seeing working software builds rapport
3. **Spot-check standups** - don't read all 10 days, but sample for consistency
4. **Celebrate scope cuts** - when students cut scope intelligently, praise it!
5. **Use Red Clearance as filter** - if a student can't pass Module 1, they're not ready

---

## Common Issues & Solutions

### Issue: "Student commits 20 story points but only completes 8"
**Solution**: In Sprint Review, discuss velocity. In next Sprint Planning, expect adjustment to 8-10 points. Grade based on **adaptation**, not failure.

### Issue: "Daily standups say 'worked on project' every day"
**Solution**: Provide feedback: "Be specific - what exact task/issue did you work on? What's your plan for tomorrow? Any blockers?"

### Issue: "Student moves issues to Done but they don't meet Definition of Done"
**Solution**: In Sprint Review, point this out. Move issues back to In Progress. Review Definition of Done.

### Issue: "GRD students aren't delivering assets on time"
**Solution**: This is a LEARNING MOMENT! Student should document the blocker, activate backup plan, update risk register, adjust sprint scope. Grade based on **how they handle it**, not on GRD performance.

### Issue: "Student's retrospectives are always 'everything went well'"
**Solution**: Provide feedback: "Retrospectives should be honest. What actually didn't go well? What would you do differently? Generic retrospectives won't earn full points."

---

## Key Reminders

✅ **Process over product** - 60% of grade is how they work, not just what they build
✅ **Adaptation is success** - changing plans based on reality is GOOD PM
✅ **Red Clearance is critical** - don't let unprepared students continue
✅ **GRD collaboration is hard** - that's the point! Cross-team work is messy
✅ **Daily standups build discipline** - consistency matters more than length
✅ **Board workflow simulates real work** - self-organization is a professional skill
✅ **Retrospectives drive growth** - action items should be visible in next sprint

---

**Good luck with CSC-289!** This course design emphasizes autonomous PM practice with real-world collaboration complexity. Students who complete this will be ready for professional agile environments.

---

**Document Author**: Angela Westmoreland
**Last Updated**: January 29, 2026
