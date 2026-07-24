# Week 7-8 Assignment: Sprint 2 - Implementation & Facilitation
## CTS-285: Systems Analysis & Design

**Due**: End of Week 8 (Friday, 11:59 PM)
**Points**: 100 (13.3% of 750)
**Submission**: GitHub repository with working implementation + sprint artifacts

---

## What You're Learning

**Role shift: You're now the Scrum Master.** In Sprint 1, you participated in ceremonies. In Sprint 2, you **facilitate** them.

This sprint focuses on:
- Implementing your design (turning UML/wireframes into working code)
- Facilitating sprint ceremonies (not just participating)
- Tracking progress with burndown charts
- Presenting to stakeholders (class sprint review)

**Key difference from Sprint 1**: Sprint 1 was design. Sprint 2 is **working software**.

---

## Learning Objectives

1. **Facilitate** sprint planning meeting with realistic capacity calculation
2. **Implement** 8-10 user stories as working features
3. **Track** progress using burndown chart updated daily
4. **Conduct** daily standups demonstrating Scrum Master facilitation
5. **Present** sprint review demo to stakeholders
6. **Lead** sprint retrospective with team health assessment

---

## PREREQUISITE: Sprint Planning (Complete by Monday of Week 7)

### Create `sprint-2-planning.md`

#### Sprint Goal
One sentence: What does success look like for Sprint 2?

Example: "Deliver working user authentication and event browsing features that allow students to view and RSVP for events."

#### Capacity Calculation
- **Sprint duration**: 10 working days (2 weeks)
- **Hours available per day**: [Your realistic estimate]
- **Total capacity**: [X hours]
- **Sprint 1 velocity**: [Total story points completed in Sprint 1]
- **Sprint 2 capacity**: [Use Sprint 1 velocity as guide, adjust based on retrospective learnings]

#### Selected User Stories
Choose **8-10 user stories** from your backlog to implement.

**Selection criteria**:
- Must total ≤ your capacity (don't overcommit!)
- Should build on Sprint 1 design
- Focus on MVP features (Must Haves from backlog)
- Include mix of frontend and backend work

For each story:
```markdown
### User Story: [Title]
**Story Points**: [X]
**Priority**: Must Have
**Technical Tasks**:
- [ ] Task 1 (estimated X hours)
- [ ] Task 2 (estimated X hours)
**Dependencies**: [None OR depends on Story Y being done first]
```

#### Definition of Done (Sprint 2)
- [ ] Feature works as described in acceptance criteria
- [ ] Code committed to GitHub with descriptive messages
- [ ] Basic testing completed (manual testing minimum)
- [ ] No console errors in browser
- [ ] Responsive on desktop (mobile testing in Sprint 3)
- [ ] Sprint board updated (issue moved to Done)

---

## Part 1: Implementation (40 points)

### Build Working Features

Implement your selected user stories using the tech stack:
- **Backend**: Python/Flask
- **Frontend**: HTML/CSS/JavaScript (templates)
- **Database**: SQLite (for now)
- **Version Control**: Git with feature branches

### Implementation Requirements

**Code Organization**:
```
your-project/
├── app.py (main Flask app)
├── models.py (database models)
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── [feature].html
├── static/
│   ├── css/
│   └── js/
├── requirements.txt
└── README.md (how to run)
```

**Quality Standards**:
- Code has comments explaining non-obvious logic
- Functions/variables have descriptive names (not `x`, `temp`, `thing`)
- No hardcoded values (use config for database paths, API keys, etc.)
- Error handling for user inputs (don't let app crash on bad input)
- Basic security (no SQL injection vulnerabilities, passwords not in plaintext)

### Feature Completeness

Each user story must demonstrate:
- **Frontend works**: User can interact with feature via browser
- **Backend works**: Data is saved/retrieved correctly
- **Acceptance criteria met**: Test each Given-When-Then scenario

**Partial credit**: If you can't complete all stories, prioritize:
1. Core features working fully (better than all features half-done)
2. Must Have > Should Have
3. Backend + simple frontend > fancy frontend with no backend

---

## Part 2: Sprint Facilitation (35 points)

### Daily Standups (15 points)

Create `sprint-2-standups.md` with **10 entries** (one per working day).

**Scrum Master framing**: Write standups as if you're facilitating a team meeting.

**Format**:
```markdown
## Standup - [Date] (Day X of 10)

**Yesterday**: [What I accomplished]
**Today**: [What I'm working on]
**Blockers**: [Issues OR "None"]
**Burndown Update**: [Story points remaining: X]
**Scrum Master Notes**: [Any process observations, team help needed, adjustments made]
```

**Example**:
```markdown
## Standup - Monday, Week 7 (Day 1 of 10)

**Yesterday**: Sprint planning complete, 8 stories selected (32 story points total)
**Today**: Set up Flask project structure, create database models for User and Event tables
**Blockers**: None
**Burndown Update**: Story points remaining: 32 (just started)
**Scrum Master Notes**: On track. Reminded myself to commit after each model (learned from Sprint 1 retro).
```

### Burndown Chart (10 points)

Track story points remaining each day.

**Create `sprint-2-burndown.md`** or use spreadsheet:

| Day | Date | Story Points Remaining | Notes |
|-----|------|----------------------|-------|
| 0 | Sprint Start | 32 | Sprint planning complete |
| 1 | Mon Week 7 | 32 | Setup day |
| 2 | Tue Week 7 | 29 | Completed User model (3 pts) |
| 3 | Wed Week 7 | 26 | Completed Event model (3 pts) |
| ... | ... | ... | ... |
| 10 | Fri Week 8 | 0 | Sprint complete! |

**Include burndown chart visual** (graph or even hand-drawn ASCII):
```
32 |  X
   |   \
24 |    X
   |     \
16 |      X-X
   |          \
8  |           X
   |             \
0  |______________X____
   Day 1 2 3 4 5 6 7 8 9 10
```

### Sprint Board Maintenance (10 points)

Your GitHub Projects board should show:
- Issues moving from "To Do" → "In Progress" → "Done" throughout sprint
- Labels updated (story points, priorities)
- Comments on issues (notes about implementation decisions)

**Screenshot** your board at End of Sprint and include in `sprint-2-artifacts/board-screenshot.png`

---

## Part 3: Sprint Review Presentation (15 points)

### Present to Class (Week 8)

**Format**: 5-7 minute live demo
**Audience**: Classmates (playing stakeholder role)

**Presentation Structure**:

**1. Sprint Goal Reminder** (30 seconds)
- What you set out to accomplish

**2. Live Demo** (3-4 minutes)
- Show working features
- Walk through user flow
- Demonstrate acceptance criteria met

**3. What You Completed** (1 minute)
- X of Y user stories done
- Story points: planned vs actual
- Burndown chart (show if went as planned)

**4. What You Didn't Complete** (30 seconds)
- If any stories unfinished, why?
- Impact on MVP (is it still viable?)

**5. Q&A** (1-2 minutes)
- Answer classmate/instructor questions

### Deliverable: Presentation Slides

Create `sprint-2-review-slides.pdf` (3-5 slides):
- Slide 1: Sprint Goal + what was planned
- Slide 2: Demo screenshots (if live demo fails)
- Slide 3: Burndown chart + story completion
- Slide 4: Lessons learned + next sprint preview

---

## Part 4: Sprint Retrospective (10 points)

### Create `sprint-2-retrospective.md`

**Format**: Same as Sprint 1, but now with comparison:

**What Went Better Than Sprint 1**:
- What improvements from Sprint 1 retro actually worked?

**What Still Needs Work**:
- What challenges persist?

**Velocity Analysis**:
- Sprint 1 velocity: [X story points completed]
- Sprint 2 velocity: [Y story points completed]
- Accuracy: Did you complete what you planned? Why/why not?

**Actions for Sprint 3**:
- Specific changes based on Sprint 2 experience

---

## Deliverables Checklist

### Sprint Planning & Execution
- [ ] `sprint-2-planning.md` (goal, capacity, selected stories)
- [ ] Working code in repository (Flask app runs)
- [ ] `sprint-2-standups.md` (10 entries)
- [ ] `sprint-2-burndown.md` (table + chart)
- [ ] GitHub Projects board updated (screenshot included)

### Sprint Review
- [ ] Sprint review presented in class (Week 8)
- [ ] `sprint-2-review-slides.pdf`

### Sprint Retrospective
- [ ] `sprint-2-retrospective.md`

### Code Quality
- [ ] Code is commented and organized
- [ ] `requirements.txt` lists dependencies
- [ ] `README.md` explains how to run project
- [ ] Features work as demonstrated

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Implementation** | 40 | Working features, code quality, acceptance criteria met |
| **Sprint Facilitation** | 35 | Standups (15), Burndown (10), Board maintenance (10) |
| **Sprint Review** | 15 | Presentation quality, demo works, clear communication |
| **Sprint Retrospective** | 10 | Honest reflection, compares to Sprint 1, actionable improvements |
| **Total** | 100 | |

### Grading Notes

**Implementation (40 pts)**:
- 8-10 stories fully complete: 36-40 pts
- 6-7 stories complete: 32-35 pts
- 4-5 stories complete: 28-31 pts
- <4 stories: <28 pts (but partial credit if what's done is high quality)

**If demo fails during presentation**: -5 pts, but can still earn points if slides show it worked

**Process > perfection**: Well-documented sprint with 6 working features > undocumented sprint with 10 buggy features

---

## Common Issues

**Issue**: "My code doesn't work and sprint ends tomorrow"

**Solution**:
1. **Don't hide it**. Document in standup: "Blocker: Authentication not working, spent 4 hours debugging"
2. **Descope**. Move unfinished stories back to backlog. Better to demo 5 working features than crash on stage.
3. **Ask for help**. Office hours exist for this. Don't suffer in silence.

**Issue**: "I finished all my stories by Day 5"

**Solution**:
1. Awesome! Document in standup.
2. Pull 1-2 more stories from backlog (Should Have priorities)
3. OR spend remaining time on code quality, testing, documentation
4. Update burndown chart to show you exceeded velocity

**Issue**: "I'm the only person on my 'team' - standups feel weird"

**Solution**: Frame them as progress logs. Scrum Master is tracking work even on solo project. In CSC-289, you'll have a real team (with GRD-242 student). This is practice.

---

## Resources

- **Flask Tutorial**: [Official Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- **Scrum Master Guide**: [Scrum.org Scrum Master Role](https://www.scrum.org/resources/what-is-a-scrum-master)
- **Burndown Charts**: [Atlassian Guide](https://www.atlassian.com/agile/tutorials/burndown-charts)
- **Sprint Review Tips**: [Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/scrum/meetings/sprint-review-meeting)

---

## Looking Ahead: Sprint 3 (Weeks 9-10)

Next sprint you're the **Developer**. Focus shifts to:
- Code quality and testing
- Code reviews (peer review required)
- Technical debt management
- Refining features from Sprint 2

**Sprint 2 is where your MVP starts feeling real.** Real features, real data, real user flows. Enjoy it!

---

## Andrew's Note

**Sprint 2 separates "I can design" from "I can build."**

Every semester, some students crush the design phase (Sprint 1) then struggle with implementation (Sprint 2). That's okay - it reveals where you need growth.

Other students breeze through code but realize their design was incomplete. They're back to UML diagrams mid-sprint.

**Both are learning moments.**

### What Success Looks Like:

Not "I finished all 10 stories perfectly." That's unrealistic for first implementation sprint.

Success is: "I finished 6 stories fully, learned Flask authentication is harder than I thought, documented the struggle, asked for help, and have a plan for Sprint 3."

**That's professional development.** Honest about progress, transparent about challenges, learning continuously.

### On Demos That Fail:

I've seen students demo beautifully. I've seen students' apps crash on stage.

The ones who handle it professionally ("Looks like I have a bug in production - let me show you screenshots of when it worked yesterday, and I'll fix this before next sprint") earn more respect than perfect demos.

**Stakeholders don't expect perfection. They expect honesty and a plan.**

See you at sprint review!

— Andrew
