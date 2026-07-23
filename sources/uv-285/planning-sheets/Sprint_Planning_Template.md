<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/Sprint_Planning_Template.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk5 (Sprint 1 planning)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Sprint Planning Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Define your sprint goal, select user stories, calculate team capacity, and commit to what you'll complete in the next 2-week sprint.

---

## When to Use

At the beginning of each sprint (Weeks 5, 9, 13) before you start implementation. Use this after you've written user stories and have a prioritized product backlog.

---

## Instructions

1. **Review your velocity** from previous sprints (if available)
2. **Define a clear sprint goal** - What shippable increment will you deliver?
3. **Select user stories** from your product backlog that support the sprint goal
4. **Estimate story points** for each story (use Fibonacci: 1, 2, 3, 5, 8, 13)
5. **Calculate your capacity** based on available hours and team size
6. **Commit to stories** that fit within capacity (don't overcommit!)
7. **Break down into tasks** - Each story becomes 1-3 hour tasks
8. **Define "Done"** - What criteria must be met to mark a story complete?

---

## Template

### Sprint Information
- **Sprint Number**:
- **Sprint Duration**: [Start Date] to [End Date]
- **Team Members**:
- **Total Team Hours Available**:

### Sprint Goal
**In 1-2 sentences, what shippable product increment will we deliver this sprint?**


### Capacity Calculation
- **Previous Sprint Velocity**: ___ story points (if available)
- **Average Team Velocity**: ___ story points (if available)
- **Planned Capacity for This Sprint**: ___ story points
- **Confidence Level**: [ ] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [ ] Exams or major deadlines? Reduce capacity by 30-50%
- [ ] Learning new technology? Add learning spike
- [ ] Team member unavailable? Adjust hours
- [ ] First sprint? Start with conservative estimate (8-13 points)

### User Stories Selected for Sprint

| Story ID | User Story | Story Points | Priority | Dependencies |
|----------|-----------|--------------|----------|--------------|
| | As a [role], I want [feature] so that [benefit] | | [ ] Must Have<br>[ ] Should Have<br>[ ] Nice to Have | |
| | | | | |
| | | | | |
| | | | | |

**Total Committed Story Points**: ___

### Sprint Backlog - Task Breakdown

For each user story, break down into concrete technical tasks (1-3 hours each):

**Story [US-___]: [Story title]**
- [ ] Task 1 (estimated: ___ hours)
- [ ] Task 2 (estimated: ___ hours)
- [ ] Task 3 (estimated: ___ hours)

**Story [US-___]: [Story title]**
- [ ] Task 1 (estimated: ___ hours)
- [ ] Task 2 (estimated: ___ hours)
- [ ] Task 3 (estimated: ___ hours)

**Total Estimated Hours**: ___

### Definition of Done
**A user story is complete when:**
- [ ] Code is written and meets acceptance criteria
- [ ] All acceptance tests pass
- [ ] Code is committed to version control
- [ ] Documentation is updated
- [ ] Code review completed (if team project)
- [ ] Demo-able to stakeholder
- [ ] [Add your project-specific criteria]

### Risk Identification

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation Strategy |
|------|-------------------|----------------|---------------------|
| | | | |
| | | | |
| | | | |

### Sprint Commitment
**We commit to completing ___ story points this sprint, focused on: [sprint goal]**

Team Signatures/Confirmation:
- _________________  Date: _________________
- _________________  Date: _________________

---

## Filled Example

### Sprint Information
- **Sprint Number**: Sprint 2
- **Sprint Duration**: March 1 - March 14
- **Team Members**: Sarah Chen (Product Owner), Marcus Williams (Developer), Aisha Patel (Developer)
- **Total Team Hours Available**: 60 hours (20 hours per person)

### Sprint Goal
**Deliver a working booking system where users can view available appointment slots, select a time, and receive email confirmation.**

### Capacity Calculation
- **Previous Sprint Velocity**: 13 story points
- **Average Team Velocity**: 13 story points (only Sprint 1 complete)
- **Planned Capacity for This Sprint**: 12 story points
- **Confidence Level**: [x] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [x] Exams or major deadlines? **Yes - Marcus has midterm exam on March 8, reducing team capacity by 20%**
- [x] Learning new technology? **Yes - team learning Flask for first time, added spike story**
- [ ] Team member unavailable?
- [ ] First sprint?

**Rationale**: Sprint 1 velocity was 13 points, but Marcus losing 1 day and Flask learning curve means we're committing to 12 points conservatively.

### User Stories Selected for Sprint

| Story ID | User Story | Story Points | Priority | Dependencies |
|----------|-----------|--------------|----------|--------------|
| US-005 | As a patient, I want to view available appointment slots so that I can choose a convenient time | 5 | [x] Must Have | Database schema (done Sprint 1) |
| US-006 | As a patient, I want to select a time slot and book an appointment so that I can secure my visit | 5 | [x] Must Have | US-005 |
| US-007 | As a patient, I want to receive email confirmation of my booking so that I have a record | 3 | [x] Should Have | US-006, email service setup |
| US-008 | As an admin, I want to view all bookings in a dashboard so that I can manage appointments | 8 | [ ] Nice to Have | US-006 (deferred to Sprint 3) |

**Total Committed Story Points**: 13

**Scope Note**: US-008 was originally planned but deferred to Sprint 3 due to capacity constraints. If Sprint 2 goes faster than expected, we'll pull it in.

### Sprint Backlog - Task Breakdown

**Story US-005: View available appointment slots**
- [x] Design database query to fetch available slots (1 hour)
- [x] Create Flask route `/api/appointments/available` (2 hours)
- [ ] Build frontend calendar component (3 hours)
- [ ] Write unit tests for availability logic (2 hours)
- [ ] Test edge cases (slots crossing midnight, timezone handling) (2 hours)

**Story US-006: Book appointment**
- [ ] Create Flask route `/api/appointments/book` with POST method (2 hours)
- [ ] Implement booking validation (slot still available, no double-booking) (2 hours)
- [ ] Update database with new booking (1 hour)
- [ ] Build frontend booking form with confirmation UI (3 hours)
- [ ] Write integration tests for booking flow (2 hours)
- [ ] Handle error cases (slot taken, validation failures) (2 hours)

**Story US-007: Email confirmation**
- [ ] Set up SendGrid API integration (1 hour)
- [ ] Create email template for booking confirmation (1 hour)
- [ ] Implement email sending function in Flask (2 hours)
- [ ] Add error handling for email failures (1 hour)
- [ ] Test email delivery (1 hour)

**Total Estimated Hours**: 25 hours (within 60-hour team capacity, allowing buffer for unknowns)

### Definition of Done
**A user story is complete when:**
- [x] Code is written and meets all acceptance criteria
- [x] All acceptance tests pass (Given-When-Then scenarios verified)
- [x] Code is committed to GitHub repository
- [x] README documentation updated with new features
- [x] Code review completed by at least one team member
- [x] Demo-able to instructor (Andrew) during standup
- [x] No critical bugs or console errors

### Risk Identification

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Mitigation Strategy |
|------|-------------------|----------------|---------------------|
| Flask learning curve slows development | H | M | Completed Flask tutorial before sprint; pair programming for tough spots; ask Andrew in office hours |
| Email API (SendGrid) setup issues | M | M | Start email integration early (Day 2); have backup plan (log emails to console if API fails) |
| Marcus unavailable March 8 for midterm | H | L | Front-load Marcus's tasks to March 1-7; Sarah and Aisha cover Day 8 work |
| Double-booking edge case not caught | M | H | Write comprehensive integration tests; manual QA testing before marking US-006 done |
| UI calendar component more complex than expected | M | M | Use existing library (FullCalendar.js) rather than building from scratch; defer styling if needed |

### Sprint Commitment
**We commit to completing 13 story points this sprint, focused on: Delivering a working booking system where users can view available appointment slots, select a time, and receive email confirmation.**

Team Signatures/Confirmation:
- Sarah Chen (Product Owner)  Date: March 1, 2026
- Marcus Williams (Developer)  Date: March 1, 2026
- Aisha Patel (Developer)  Date: March 1, 2026

---

## Why This Matters

Sprint planning isn't academic busywork - it's how professional software teams deliver on time and avoid crunch mode.

In the real world, stakeholders need predictability. Your Product Owner needs to know when features ship. Your QA team needs to know what's ready for testing. Your customer support team needs to know what changes are coming.

At companies like Microsoft, Amazon, and Spotify, teams don't "start coding and see what happens." They plan sprints carefully because:

1. **Predictability beats speed** - Stakeholders value consistent delivery over heroic "all-nighters"
2. **Scope creep kills projects** - Clear sprint goals prevent feature creep mid-sprint
3. **Capacity planning prevents burnout** - Committing to 40 hours of work in a 40-hour week is sustainable
4. **Early risk identification saves time** - Finding blockers during planning beats finding them during coding
5. **Task breakdown reveals unknowns** - "Build login system" seems simple until you break it into 15 tasks

In CSC-289 (your capstone), you'll need sprint planning skills to deliver a full system in one semester. Students who plan sprints carefully finish their capstone. Students who "wing it" end up with half-built systems and pull all-nighters in Week 15.

Professional developers estimate their velocity (story points per sprint) accurately because their job depends on it. You'll build this skill now.

---

## Common Mistakes to Avoid

- **Mistake**: Committing to 30 story points when your average velocity is 12 because "we'll work harder this sprint"
  **Better approach**: Velocity is what you ACTUALLY complete, not what you wish you could complete. Historical velocity is your capacity. Overcommitting leads to missed deadlines, incomplete stories, and stress.

- **Mistake**: Vague sprint goals like "make progress on the project" or "work on some features"
  **Better approach**: Specific, measurable goals like "Deliver working user authentication with email verification." You should be able to demo the sprint goal at the end.

- **Mistake**: Selecting random user stories that don't support a coherent goal
  **Better approach**: All stories in a sprint should work toward the same outcome. Don't do 50% of login and 50% of checkout. Pick one feature area and complete it.

- **Mistake**: Not adjusting capacity for exams, other coursework, or learning new tech
  **Better approach**: If you have a midterm, reduce capacity by 30-50%. Learning Flask/Django/React for the first time? Budget extra time. Be realistic about available hours.

- **Mistake**: Skipping task breakdown and jumping straight to coding
  **Better approach**: Breaking stories into 1-3 hour tasks reveals scope. "Build user authentication" becomes 12 tasks and you realize it's more work than you thought. Plan accordingly.

- **Mistake**: Marking everything as "Must Have" priority
  **Better approach**: If everything is Must Have, nothing is. Pick 2-3 stories that MUST be done for the sprint goal. Rest are Should Have or Nice to Have. When things go wrong (and they will), you know what to cut.

---

## Integration with Course Project

In CTS-285, you'll use sprint planning for your semester project:

- **Sprint 0 (Weeks 1-4)**: Project setup, requirements gathering, user story writing - no sprint planning yet
- **Sprint 1 (Weeks 5-6)**: First development sprint - authentication and core data models
- **Sprint 2 (Weeks 7-8)**: Second sprint - main user-facing features
- **Sprint 3 (Weeks 9-10)**: Third sprint - admin features and reporting
- **Sprint 4 (Weeks 11-12)**: Fourth sprint - polish, testing, deployment prep
- **Sprint 5 (Weeks 13-14)**: Final sprint - production deployment, documentation, final testing

Each sprint should result in a **working increment** - not just code, but a demo-able feature set that adds value.

Your sprint velocity from CTS-285 will inform your capstone project scope in CSC-289. If you're averaging 12 points per 2-week sprint and you have 8 sprints in capstone, you can commit to about 96 story points total. This helps you make realistic scope decisions in Week 1 instead of panicking in Week 15.

**Students who plan sprints carefully finish their projects on time. Students who skip sprint planning end up with half-finished systems and missed deadlines.**

Sprint planning is the difference between "I hope this gets done" and "I know what's getting done when."
