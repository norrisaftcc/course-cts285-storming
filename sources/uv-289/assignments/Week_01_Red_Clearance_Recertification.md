<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_01_Red_Clearance_Recertification.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 wk1 GREEN Trajectory Check
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 1 Assignment: Red Clearance Recertification
**CSC-289: Programming Capstone Project**

**Due**: End of Week 1
**Points**: 100 points (M01-A1: 50 pts, M01-A2: 50 pts)
**CLOs Addressed**: CLO 1, 4, 5
**Pass/Fail Checkpoint**: Must pass to continue course

---

## Assignment Overview

Demonstrate mastery of the "Sacred Flow" GitHub workflow and autonomous project management capability by planning your complete capstone project. This is your **Red Clearance Recertification**—proof that you can independently manage a complex 16-week software development project.

**Why "Red Clearance"?** In Drew Norris's courses, Red Clearance represents mastery of the Sacred Flow workflow (Issue → Branch → PR → Merge). CSC-289 requires FULL project management autonomy, so Red Clearance standards are higher than previous courses.

**Pass/Fail Checkpoint**: If planning is insufficient, you'll receive detailed feedback and have 48 hours to revise. This ensures you start with a solid foundation.

---

## Part 1: Project Charter & Work Breakdown Structure (50 points)

### **Deliverable 1A: Project Charter**

Create a comprehensive project charter defining your capstone vision.

#### **Template**

```markdown
# Project Charter: [Your Project Name]

**Project Manager**: [Your Name]
**Start Date**: [Week 1 date]
**Target Completion**: [Week 16 date]
**Stakeholders**: Andrew Norris (Instructor/Product Owner), [GRD Designer - TBD], End Users

---

## 1. Project Vision

**Elevator Pitch** (2-3 sentences):
[Describe your project like you're pitching to an investor in 30 seconds]

**Example**: "TaskMaster is an AI-powered productivity app for neurodivergent college students. It breaks overwhelming projects into manageable chunks using intelligent task decomposition and visual progress tracking, reducing executive function burden."

---

## 2. Problem Statement

**What problem does this solve?**
[Describe the user pain point your app addresses]

**Who has this problem?**
[Define your target user with specific demographics/psychographics]

**Why existing solutions fail:**
[What do competitors not address? What gap are you filling?]

---

## 3. Project Objectives

**Primary Goal**:
[What is the ONE main outcome? E.g., "Deliver a working task management app with AI-powered breakdown and visual progress tracking"]

**Secondary Goals**:
- [Goal 2 - e.g., "Integrate professional design assets from GRD-242 collaboration"]
- [Goal 3 - e.g., "Deploy to production environment accessible via URL"]
- [Goal 4 - e.g., "Demonstrate PM mastery through comprehensive process portfolio"]

---

## 4. Success Criteria

**How will we know we succeeded?**

**MVP Definition** (Minimum Viable Product):
- [ ] [Feature 1 - must have]
- [ ] [Feature 2 - must have]
- [ ] [Feature 3 - must have]

**Technical Success Criteria**:
- [ ] Application deployed and accessible via URL
- [ ] Core user flows functional (registration, login, main feature)
- [ ] Responsive design (works on mobile and desktop)
- [ ] WCAG AA accessibility compliance

**Process Success Criteria**:
- [ ] All 8 sprints completed with full documentation
- [ ] GRD-242 collaboration successful (design assets integrated)
- [ ] Velocity improved over time (Sprint 1 → Sprint 8)
- [ ] Process portfolio demonstrates PM mastery

---

## 5. Stakeholders

| Stakeholder | Interest | Influence | Communication Strategy |
|-------------|----------|-----------|------------------------|
| **Andrew Norris** | Process quality, learning outcomes | High | Weekly sprint reviews, office hours as needed |
| **[GRD Designer]** | Portfolio piece, collaboration experience | Medium | Weekly check-ins (Weeks 6-8), Slack/email |
| **End Users** | Functional, usable app | Low | User testing (if applicable), feedback incorporation |
| **Future Me** | Maintainable code, good docs | Low | Clear README, code comments, process documentation |

---

## 6. Scope

### **In Scope (What we WILL do)**
- [Feature/Epic 1]
- [Feature/Epic 2]
- [Feature/Epic 3]
- GRD-242 design collaboration (Weeks 6-8)
- Deployment to production

### **Out of Scope (What we WON'T do this semester)**
- [Feature that's nice-to-have but not MVP]
- [Advanced feature for future v2.0]
- [Monetization/business model]

---

## 7. Constraints & Assumptions

**Technical Constraints**:
- Tech stack: [Languages, frameworks, databases]
- Deployment platform: [Vercel, Netlify, Heroku, etc.]
- APIs/third-party services: [List dependencies]
- Time: 16 weeks (14 weeks active development)

**Resource Constraints**:
- Solo developer (me)
- Budget: $0 (free tier services only)
- External dependency: GRD designer availability (Weeks 6-8)

**Assumptions**:
- [Assumption 1 - e.g., "Free tier API limits will be sufficient for MVP"]
- [Assumption 2 - e.g., "GRD designer will deliver assets by Week 8"]
- [Assumption 3 - e.g., "Target users have modern browsers (Chrome, Firefox, Safari)"]

---

## 8. High-Level Timeline

**Phase 1: Foundation (Weeks 1-3)**
- Week 1: Red Clearance, project setup
- Weeks 2-3: Sprint 1 (core backend/database)

**Phase 2: GRD Collaboration (Weeks 4-8)**
- Weeks 4-5: Sprint 2 (core features + design brief prep)
- Week 6: Design brief presentation to GRD-242
- Weeks 6-7: Sprint 3 (feature dev + design iteration)
- Week 8: Sprint 4 (design asset integration)

**Phase 3: Independent Development (Weeks 9-14)**
- Weeks 9-11: Sprints 5-6 (feature refinement)
- Weeks 12-14: Sprint 7 (testing, deployment, polish)

**Phase 4: Delivery (Weeks 15-16)**
- Weeks 15-16: Final testing, process portfolio, presentation

---

**Approved By**: _________________ (Andrew Norris)
**Date**: _________________
```

---

### **Deliverable 1B: Work Breakdown Structure (WBS)**

Break your project into **Epics → User Stories → Tasks**.

#### **WBS Template**

```markdown
# Work Breakdown Structure: [Project Name]

---

## Epic 1: [Epic Name - e.g., "User Authentication System"]

**Epic Goal**: [What does this epic achieve?]

**Priority**: Must Have / Should Have / Could Have

**Estimated Total**: [Story points - e.g., 21 points]

---

### User Stories

#### Story 1.1: User Registration
**As a** new user
**I want to** create an account with email and password
**So that** I can save my data and access it across devices

**Acceptance Criteria**:
- [ ] Registration form with email, password, confirm password fields
- [ ] Email validation (valid format, not already registered)
- [ ] Password strength requirements (min 8 chars, number, special char)
- [ ] Success message and redirect to dashboard on completion
- [ ] Error messages for validation failures

**Story Points**: 5
**Priority**: Must Have
**Sprint**: Sprint 1

---

#### Story 1.2: User Login
**As a** returning user
**I want to** log in with my credentials
**So that** I can access my saved data

**Acceptance Criteria**:
- [ ] Login form with email and password fields
- [ ] Authentication against database
- [ ] Session/token creation on success
- [ ] Error message for invalid credentials
- [ ] "Forgot password" link (may defer to later sprint)

**Story Points**: 3
**Priority**: Must Have
**Sprint**: Sprint 1

---

#### Story 1.3: User Logout
**As a** logged-in user
**I want to** log out
**So that** my account is secure on shared devices

**Acceptance Criteria**:
- [ ] Logout button in navigation
- [ ] Session/token cleared on logout
- [ ] Redirect to landing page
- [ ] Cannot access protected routes after logout

**Story Points**: 2
**Priority**: Must Have
**Sprint**: Sprint 1

---

[Continue for all stories in Epic 1...]

**Epic 1 Total**: 13 points

---

## Epic 2: [Next Epic - e.g., "Task Management Interface"]

[Repeat structure...]

---

## Epic 3: [Next Epic - e.g., "AI Task Breakdown Feature"]

[Repeat structure...]

---

## Epic 4: Design Integration (GRD-242 Collaboration)

**Epic Goal**: Integrate professional brand identity and visual assets from GRD designer

**Priority**: Should Have (enhances UX but app functions without)

---

### User Stories

#### Story 4.1: Brand Identity Foundation
**As a** user
**I want** a cohesive visual brand (logo, colors, typography)
**So that** the app feels professional and trustworthy

**Acceptance Criteria**:
- [ ] Logo integrated in header and favicon
- [ ] Color palette applied to all UI components
- [ ] Typography consistent across app
- [ ] Responsive logo (scales on mobile)

**Story Points**: 5
**Priority**: Should Have
**Sprint**: Sprint 4 (Week 8)

---

[Continue for all design stories...]

---

## WBS Summary

| Epic | Priority | Story Points | Sprints |
|------|----------|--------------|---------|
| Epic 1: User Authentication | Must Have | 13 | Sprint 1 |
| Epic 2: Task Management | Must Have | 21 | Sprints 2-3 |
| Epic 3: AI Task Breakdown | Must Have | 18 | Sprints 3-5 |
| Epic 4: Design Integration | Should Have | 8 | Sprint 4 |
| Epic 5: User Settings | Should Have | 8 | Sprint 6 |
| Epic 6: Testing & Polish | Must Have | 13 | Sprint 7 |
| **TOTAL** | | **81 points** | 7 sprints |

**Average Sprint Velocity Needed**: 81 points ÷ 7 sprints = ~12 points/sprint

**Based on prior courses**:
- CSC-113: Basic sprints, no formal velocity
- CSC-114: Average velocity 10-12 points/sprint
- CSC-249: Average velocity 12-15 points/sprint (by Sprint 4)

**Estimated Starting Velocity**: 10-12 points/sprint (will adjust based on Sprint 1-2 actuals)
```

---

## Part 2: Product Backlog & Release Roadmap (50 points)

### **Deliverable 2A: Product Backlog in GitHub**

Create GitHub Issues for ALL user stories from your WBS.

#### **Requirements**

**Repository Setup**:
1. Create GitHub repository: `[project-name]-capstone`
2. Initialize with README, .gitignore, license
3. Enable GitHub Issues and Projects

**Issue Creation**:
For EACH user story:
- Create GitHub Issue
- Title: `[Epic]: [Story Title]` (e.g., "User Auth: User Registration")
- Body: User story format + acceptance criteria (copy from WBS)
- Labels:
  - `story`
  - `points: [X]` (create labels: points:1, points:2, points:3, points:5, points:8, points:13)
  - `priority: must-have` / `priority: should-have` / `priority: could-have`
  - `epic: [epic-name]`
- Milestone: Assign to sprint (Sprint 1, Sprint 2, etc.)

**Example Issue**:
```
Title: User Auth: User Registration

Body:
**As a** new user
**I want to** create an account with email and password
**So that** I can save my data and access it across devices

## Acceptance Criteria
- [ ] Registration form with email, password, confirm password fields
- [ ] Email validation (valid format, not already registered)
- [ ] Password strength requirements (min 8 chars, number, special char)
- [ ] Success message and redirect to dashboard
- [ ] Error messages for validation failures

## Story Points: 5
## Sprint: Sprint 1

Labels: story, points:5, priority:must-have, epic:user-auth
Milestone: Sprint 1
```

**Minimum Required**: 20+ user stories (covering MVP scope)

---

### **Deliverable 2B: Release Roadmap**

Plan your 8 sprints (16 weeks, 2 weeks each).

#### **Template**

```markdown
# Release Roadmap: [Project Name]

**Planning Date**: [Week 1]
**Total Duration**: 16 weeks (8 sprints × 2 weeks)
**Estimated Total Effort**: [Total story points from WBS]

---

## Sprint Planning Philosophy

**Sprint 1-2 (Weeks 2-5)**: Establish baseline velocity
- Conservative estimates
- Focus: Core backend + MVP features
- Goal: Working authentication + basic functionality

**Sprint 3-4 (Weeks 6-9)**: GRD Collaboration Window
- Account for design dependencies
- Parallel work: Backend dev while waiting on assets
- Week 6: Design brief presentation
- Week 8: Design integration

**Sprint 5-7 (Weeks 10-15)**: Feature completion & polish
- Use historical velocity for accurate planning
- Iterative refinement based on testing
- Week 15: Code freeze, final testing

**Sprint 8 (Week 16)**: Technically part of Module 8, reserved for final presentation prep

---

## Sprint 1: Foundation (Weeks 2-3)

**Sprint Goal**: Set up project infrastructure and deliver working authentication

**Planned Capacity**: 10-12 story points (conservative first sprint)

**User Stories**:
- [ ] User Auth: User Registration (5 pts)
- [ ] User Auth: User Login (3 pts)
- [ ] User Auth: User Logout (2 pts)
- [ ] Project Setup: Database schema (2 pts)

**Total Planned**: 12 points

**Dependencies**: None

**Risks**:
- Learning new framework/tech stack might slow velocity
- Database setup unfamiliar

**Mitigation**:
- Research tech stack before sprint starts (Week 1)
- Have backup: Use simpler database if PostgreSQL too complex

---

## Sprint 2: Core Features Begin (Weeks 4-5)

**Sprint Goal**: Deliver basic task management functionality + prepare design brief

**Planned Capacity**: 12 points (same as Sprint 1 until velocity confirmed)

**User Stories**:
- [ ] Task Mgmt: Create task (5 pts)
- [ ] Task Mgmt: View task list (3 pts)
- [ ] Task Mgmt: Mark task complete (2 pts)
- [ ] Design Brief: Draft design requirements (2 pts - planning, not code)

**Total Planned**: 12 points

**Dependencies**: Sprint 1 authentication must work

**Risks**:
- Design brief prep might take more time than expected

**Mitigation**:
- Treat design brief as separate "story" with dedicated time

**Milestone**: Design brief ready for Week 6 presentation

---

## Sprint 3: Feature Development + GRD Kickoff (Weeks 6-7)

**Sprint Goal**: Advance features while presenting to GRD and starting design collaboration

**Planned Capacity**: 10 points (reduced due to design presentation time)

**User Stories**:
- [ ] AI Task Breakdown: Integrate AI API (8 pts)
- [ ] Design Collaboration: Present brief to GRD (2 pts - not code, but time)

**Total Planned**: 10 points

**Dependencies**:
- GRD designer assigned after Week 6 presentation

**Risks**:
- Design presentation takes time away from coding
- Waiting on designer drafts might block some UI work

**Mitigation**:
- Focus on backend/API work (doesn't depend on design)
- Use placeholder UI elements

**Milestone**: Design brief presented, GRD collaboration begins

---

## Sprint 4: Design Integration (Week 8)

**Sprint Goal**: Integrate GRD design assets and refine AI features

**Planned Capacity**: 13 points (assuming velocity improving)

**User Stories**:
- [ ] Design Integration: Logo, colors, icons (5 pts)
- [ ] AI Task Breakdown: Task decomposition logic (8 pts)

**Total Planned**: 13 points

**Dependencies**:
- GRD designer delivers final assets by end of Week 8

**Risks**:
- Designer delays could block integration
- Design assets might not meet technical specs

**Mitigation**:
- Maintain communication with designer (weekly check-ins)
- Have evaluation framework ready for feedback
- Backup: Continue with placeholders, integrate later if delayed

**Milestone**: GRD collaboration complete, brand identity integrated

---

## Sprint 5: Feature Refinement (Weeks 9-10)

**Sprint Goal**: Polish core features and add should-have functionality

**Planned Capacity**: 15 points (velocity increasing based on historical data)

**User Stories**:
- [ ] Task Mgmt: Edit tasks (3 pts)
- [ ] Task Mgmt: Delete tasks (2 pts)
- [ ] User Settings: Profile management (5 pts)
- [ ] AI Refinement: Improve breakdown accuracy (5 pts)

**Total Planned**: 15 points

**Dependencies**: None (design assets already integrated)

**Risks**:
- AI accuracy improvements might be time sink (hard to estimate)

**Mitigation**:
- Timebox AI improvements (max 2 days), defer if blocked

---

## Sprint 6: Should-Have Features (Weeks 11-12)

**Sprint Goal**: Add features that enhance UX but aren't critical for MVP

**Planned Capacity**: 15 points

**User Stories**:
- [ ] User Settings: Theme toggle (dark mode) (3 pts)
- [ ] Task Mgmt: Task categories/tags (5 pts)
- [ ] Progress Tracking: Visual dashboard (8 pts)

**Total Planned**: 16 points (slight over-capacity, will cut if needed)

**Dependencies**: None

**Risks**:
- Scope creep (wanting to add more features)

**Mitigation**:
- Strict MoSCoW prioritization (defer Could-Haves to v2.0)

---

## Sprint 7: Testing, Deployment, Polish (Weeks 12-14)

**Sprint Goal**: Achieve production-ready MVP with comprehensive testing

**Planned Capacity**: 13 points

**User Stories**:
- [ ] Testing: Unit tests for core features (5 pts)
- [ ] Testing: Cross-browser/device testing (3 pts)
- [ ] Deployment: Production deployment setup (3 pts)
- [ ] Polish: Bug fixes and UX improvements (2 pts)

**Total Planned**: 13 points

**Dependencies**: All MVP features complete

**Risks**:
- Deployment issues might take longer than expected
- Bug fixing is unpredictable

**Mitigation**:
- Research deployment platform early (Week 13)
- Maintain known issues log (defer non-critical bugs to v2.0)

**Milestone**: MVP deployed and accessible via URL

---

## Weeks 15-16: Final Delivery (Module 8)

**NOT a formal sprint** - Focus on process portfolio and presentation

**Activities**:
- Final bug fixes (minor only)
- Process portfolio compilation
- PM reflection essay
- Final presentation preparation

**Milestone**: Capstone complete, process portfolio demonstrates PM mastery

---

## Roadmap Summary

| Sprint | Weeks | Planned Points | Focus | Key Milestone |
|--------|-------|----------------|-------|---------------|
| **1** | 2-3 | 12 | Foundation, auth | Working login system |
| **2** | 4-5 | 12 | Core features, design brief prep | Design brief ready |
| **3** | 6-7 | 10 | AI integration, GRD kickoff | Design brief presented |
| **4** | 8 | 13 | Design integration | GRD assets integrated |
| **5** | 9-10 | 15 | Feature refinement | Core features polished |
| **6** | 11-12 | 16 | Should-have features | Enhanced UX |
| **7** | 12-14 | 13 | Testing, deployment | MVP deployed |
| **8** | 15-16 | - | Process portfolio | Capstone complete |
| **TOTAL** | | **91 points** | | |

**Velocity Assumptions**:
- Sprints 1-2: 10-12 pts (establishing baseline)
- Sprints 3-4: 10-13 pts (reduced for GRD collaboration time)
- Sprints 5-7: 15+ pts (velocity improvement, no external dependencies)

**Buffer**: Planned 91 points vs. WBS 81 points = 10-point buffer for unknowns

---

## Release Decision Points

**Week 3 (End of Sprint 1)**:
- **Evaluate**: Did we achieve 10+ points velocity?
- **Decision**: Adjust Sprint 2-7 capacity if velocity lower than expected

**Week 8 (End of Sprint 4 / GRD Collaboration)**:
- **Evaluate**: Are design assets integrated successfully?
- **Decision**: If design delayed, defer Should-Have design-dependent features to Sprint 6

**Week 14 (End of Sprint 7)**:
- **Evaluate**: Is MVP functional and deployed?
- **Decision**: Final scope lock—any incomplete features documented as "Future Enhancements"

---

## MVP vs. Future Enhancements

**MVP (Must deliver by Week 16)**:
- Working authentication
- Core task management (create, view, complete)
- AI task breakdown (basic)
- Design assets integrated (logo, colors, icons)
- Deployed to production URL
- Responsive design (mobile + desktop)

**Future Enhancements (Nice to have, but v2.0)**:
- Advanced AI features (personalized suggestions)
- Social features (share tasks, collaborate)
- Mobile app (native iOS/Android)
- Analytics dashboard
- Gamification (achievements, streaks)

**Rationale**: Better to deliver polished MVP than half-finished feature bloat
```

---

### **Deliverable 2C: Risk Register**

Identify potential problems and mitigation strategies.

#### **Template**

```markdown
# Risk Register: [Project Name]

**Last Updated**: Week 1

---

## Risk Assessment Matrix

**Probability Scale**: Low (1) | Medium (2) | High (3)
**Impact Scale**: Low (1) | Medium (2) | High (3)
**Risk Score**: Probability × Impact (max 9)

**Priority**: 7-9 = Critical | 4-6 = Important | 1-3 = Monitor

---

## Risk #1: API Rate Limits

**Category**: Technical
**Probability**: Medium (2)
**Impact**: High (3)
**Risk Score**: 6 (Important)

**Description**:
If AI API (OpenAI, Anthropic) rate limits are hit during development or user testing, app functionality breaks.

**Trigger**:
- Exceeding free tier API limits
- Multiple users testing simultaneously

**Mitigation Strategy**:
- Implement caching (same prompt = cached response)
- Rate limiting on frontend (max 10 requests/minute per user)
- Fallback: Mock AI responses if API unavailable
- Monitor usage weekly

**Contingency Plan**:
If limits hit despite mitigation:
- Switch to alternative free-tier API
- Reduce AI features to "demo only" mode
- Document limitation in README

**Owner**: Me
**Status**: Open (monitoring)

---

## Risk #2: GRD Designer Unavailable or Late

**Category**: Collaboration
**Probability**: Medium (2)
**Impact**: Medium (2)
**Risk Score**: 4 (Important)

**Description**:
GRD designer doesn't deliver assets on time (Week 8), blocking Sprint 4 design integration work.

**Trigger**:
- No designer response for 3+ days
- Week 7 drafts not received
- Designer drops course or withdraws

**Mitigation Strategy**:
- Clear timeline in Week 6 design brief
- Weekly check-ins (Weeks 6-8)
- Parallel backend work (doesn't depend on design)
- Placeholder assets ready to continue development

**Contingency Plan**:
If designer delays past Week 8:
- Accept placeholder UI for final deliverable
- Document "design integration" as post-capstone enhancement
- Still credit GRD program in presentation
- Focus process grade on feedback quality (what I controlled)

**Owner**: Me (with escalation to Andrew/Jennifer if needed)
**Status**: Open (won't activate until Week 6)

---

## Risk #3: Scope Creep

**Category**: Project Management
**Probability**: High (3)
**Impact**: Medium (2)
**Risk Score**: 6 (Important)

**Description**:
I add too many features mid-project, can't finish MVP by Week 16.

**Trigger**:
- "Wouldn't it be cool if..." ideas during development
- User feedback requesting new features
- Comparing to competitors ("they have X, I need X too")

**Mitigation Strategy**:
- Strict MoSCoW prioritization (maintain in backlog)
- Sprint retrospectives: ask "Are we still on track for MVP?"
- Document new ideas as "v2.0 enhancements" in GitHub Issues
- Andrew Norris as product owner (can veto scope changes)

**Contingency Plan**:
If scope creep occurs:
- Week 10 scope review: cut Should-Haves if behind
- Week 14 final scope lock: defer incomplete features to Future Enhancements

**Owner**: Me
**Status**: Open (active monitoring every sprint)

---

## Risk #4: Technical Blocker (Unfamiliar Technology)

**Category**: Technical
**Probability**: Medium (2)
**Impact**: High (3)
**Risk Score**: 6 (Important)

**Description**:
I choose a tech stack I've never used, spend too much time debugging instead of building features.

**Trigger**:
- Sprint velocity < 8 points for 2 consecutive sprints
- Spending >50% of sprint time on tech stack issues

**Mitigation Strategy**:
- Week 1: Proof-of-concept with chosen tech stack (hello world + database connection)
- Favor familiar technologies over trendy ones
- Budget time for learning (don't estimate at expert-level velocity)
- Office hours with Andrew for technical blockers

**Contingency Plan**:
If tech blocker persists:
- Week 3: If Sprint 1 velocity <6 pts, consider tech stack change
- Simplify architecture (e.g., SQLite instead of PostgreSQL)
- Accept "good enough" over "perfect architecture"

**Owner**: Me
**Status**: Open (evaluate after Sprint 1)

---

## Risk #5: Time Management (Personal)

**Category**: Personal
**Probability**: Medium (2)
**Impact**: Medium (2)
**Risk Score**: 4 (Important)

**Description**:
Other coursework, work, or personal commitments reduce time available for capstone.

**Trigger**:
- Missing daily standups (< 8 entries per sprint)
- Sprint velocity dropping
- Last-minute cramming before reviews

**Mitigation Strategy**:
- Weekly time blocking (dedicated capstone hours)
- Communicate conflicts proactively (e.g., "midterms Week 7, may reduce capacity")
- Retrospectives: track time spent, identify inefficiencies
- Lower sprint capacity during known busy weeks

**Contingency Plan**:
If time crunch occurs:
- Reduce sprint capacity (better to hit 8 pts than miss 15 pts)
- Cut Should-Have features
- Ask for deadline extension EARLY (not last minute)

**Owner**: Me
**Status**: Open (ongoing self-monitoring)

---

## Risk #6: Deployment Issues

**Category**: Technical
**Probability**: Medium (2)
**Impact**: Medium (2)
**Risk Score**: 4 (Important)

**Description**:
App works locally but fails in production (environment differences, hosting config).

**Trigger**:
- Week 13-14 deployment attempts fail
- CORS errors, database connection issues, build failures

**Mitigation Strategy**:
- Week 10: Research deployment platform (Vercel, Netlify, Render)
- Week 12: Test deploy early (before Sprint 7 crunch)
- Use deployment platform's free tier (avoid custom server setup)
- Environment variables properly configured

**Contingency Plan**:
If deployment blocked:
- Document steps to run locally (README)
- Record video demo of working local version
- Accept "locally functional" MVP (explain deployment blocker in presentation)
- Post-capstone: Deploy with instructor help

**Owner**: Me
**Status**: Open (activate Week 10)

---

## Risk Summary Table

| # | Risk | Probability | Impact | Score | Priority | Status |
|---|------|-------------|--------|-------|----------|--------|
| 1 | API Rate Limits | Medium (2) | High (3) | 6 | Important | Open |
| 2 | GRD Designer Delays | Medium (2) | Medium (2) | 4 | Important | Open |
| 3 | Scope Creep | High (3) | Medium (2) | 6 | Important | Open |
| 4 | Tech Stack Blocker | Medium (2) | High (3) | 6 | Important | Open |
| 5 | Time Management | Medium (2) | Medium (2) | 4 | Important | Open |
| 6 | Deployment Issues | Medium (2) | Medium (2) | 4 | Important | Open |

**Total Risks Identified**: 6
**Critical Risks**: 0
**Important Risks**: 6
**Monitor Risks**: 0

---

## Risk Review Schedule

- **Weekly**: Review during sprint planning (any new risks?)
- **Sprint Retrospectives**: Evaluate if risks materialized, update status
- **Week 8**: Special review after GRD collaboration ends
- **Week 14**: Final risk review before code freeze

---

**Risk Register Owner**: [Your Name]
**Last Updated**: Week 1
```

---

## Submission Requirements

### **Submit to Canvas**:

1. **Project Charter**: Markdown file or PDF (5-7 pages)
2. **Work Breakdown Structure**: Markdown file or PDF (10-15 pages with all user stories)
3. **GitHub Repository Link**: With all user stories as Issues
4. **Release Roadmap**: Markdown file or PDF (6-8 pages)
5. **Risk Register**: Markdown file or PDF (3-5 pages)

### **GitHub Repository Must Contain**:
- README.md (basic project description)
- .gitignore
- 20+ Issues (user stories with acceptance criteria, labels, story points)
- Milestones for each sprint (Sprint 1 - Sprint 7)

---

## Grading Rubric

### **Part 1: Project Charter & WBS (50 points)**

| Criteria | Excellent (45-50) | Proficient (38-44) | Developing (30-37) | Needs Improvement (0-29) |
|----------|-------------------|--------------------|--------------------|-------------------------|
| **Project Vision** | Clear, compelling, addresses real user need | Clear vision, adequate problem definition | Vague vision or unclear user need | No clear vision or unrealistic scope |
| **WBS Completeness** | 5+ epics, 20+ detailed user stories, all with acceptance criteria and story points | 3-4 epics, 15+ stories, most have criteria | 2-3 epics, <15 stories, missing criteria | Incomplete WBS or missing stories |
| **User Story Quality** | All stories follow format, testable acceptance criteria, realistic estimates | Most stories formatted correctly, adequate criteria | Some stories poorly formatted, vague criteria | Stories not in user story format |
| **Scope Definition** | Clear MVP vs. future enhancements, realistic for 16 weeks | Adequate scope, mostly realistic | Ambitious scope, might not finish MVP | Unrealistic scope or undefined MVP |

---

### **Part 2: Product Backlog & Roadmap (50 points)**

| Criteria | Excellent (45-50) | Proficient (38-44) | Developing (30-37) | Needs Improvement (0-29) |
|----------|-------------------|--------------------|--------------------|-------------------------|
| **GitHub Setup** | 20+ Issues, proper labels, milestones, organized | 15+ Issues, most labeled/organized | 10+ Issues, some organization gaps | < 10 Issues or poorly organized |
| **Release Roadmap** | Detailed 8-sprint plan, realistic velocity, accounts for GRD collaboration | Good sprint plan, reasonable estimates | Vague sprint plan, optimistic estimates | No clear roadmap or unrealistic timeline |
| **Risk Register** | 5+ risks identified, detailed mitigation/contingency plans, realistic assessments | 3-4 risks, adequate mitigation | 1-2 risks, vague mitigation | No risk register or superficial |
| **Adaptability** | Clear decision points, acknowledges uncertainty, has contingency plans | Some decision points identified | Assumes perfect execution, minimal contingency | No acknowledgment of potential issues |

---

## Red Clearance Pass/Fail Criteria

**Pass**: All of the following must be met:
✅ Project vision is clear and realistic for 16 weeks
✅ Minimum 20 user stories with acceptance criteria and story points
✅ GitHub repository set up with Issues, labels, milestones
✅ Release roadmap accounts for GRD collaboration timeline (Weeks 6-8)
✅ Risk register identifies at least 3 major risks with mitigation plans
✅ WBS totals 70-120 story points (realistic MVP scope)

**Conditional Pass (Revise & Resubmit within 48 hours)**:
⚠️ Project scope too ambitious or too small
⚠️ User stories lack acceptance criteria or estimates
⚠️ GitHub setup incomplete
⚠️ No acknowledgment of GRD collaboration impact

**Fail (Cannot continue CSC-289 without replan)**:
❌ No clear project vision
❌ Fewer than 15 user stories
❌ No GitHub repository
❌ No release roadmap or risk planning

---

## Tips for Success

### **Choosing a Project**

**Good Projects**:
- ✅ You're personally motivated (solves a problem YOU have)
- ✅ Clear user need (not just "learning exercise")
- ✅ Achievable in 16 weeks as solo developer
- ✅ Requires design assets (logo, branding) for GRD collaboration
- ✅ Deployable to web (not hardware-dependent)

**Red Flags**:
- ❌ "I want to build the next Facebook/Instagram/TikTok"
- ❌ Requires advanced AI/ML research (no time for R&D)
- ❌ Heavy backend infrastructure (complex microservices)
- ❌ Needs team (multiplayer game, collaborative tool with 10+ features)
- ❌ No obvious design needs (pure backend API, CLI tool)

**Example Good Projects**:
- Task management app for neurodivergent students
- Budgeting app for college students with irregular income
- Recipe manager with AI-powered meal planning
- Habit tracker with visual progress and insights
- Portfolio site builder for non-technical users
- Local business directory with user reviews

---

### **Estimating Story Points**

**Fibonacci Scale**: 1, 2, 3, 5, 8, 13

- **1 point**: Trivial (< 1 hour) - e.g., add logout button
- **2 points**: Simple (1-2 hours) - e.g., create form with validation
- **3 points**: Moderate (2-4 hours) - e.g., database CRUD operation
- **5 points**: Complex (4-8 hours) - e.g., API integration with error handling
- **8 points**: Very complex (1-2 days) - e.g., authentication system
- **13 points**: Epic-sized (2+ days) - **BREAK INTO SMALLER STORIES**

**If story is >8 points**: Break it down further!

**Example**:
- ❌ "User Authentication System" (13 pts) - TOO BIG
- ✅ Break into:
  - "User Registration" (5 pts)
  - "User Login" (3 pts)
  - "User Logout" (2 pts)
  - "Password Reset" (3 pts - can defer to later sprint)

---

### **Writing Good User Stories**

**Template**:
```
As a [user type]
I want [feature]
So that [benefit]
```

**Good Example**:
> As a college student with ADHD
> I want my large project to be broken into smaller tasks automatically
> So that I don't feel overwhelmed and can get started

**Bad Example**:
> As a user
> I want tasks
> So that I can use the app

**Why bad?** Vague user, vague feature, no clear benefit.

---

### **Accounting for GRD Collaboration**

**Week 6: Design Brief Presentation**
- Expect to spend 4-6 hours preparing presentation
- Reduce Sprint 3 capacity by 2-3 points

**Weeks 6-8: Iteration Cycles**
- Budget time for feedback communication (not just coding)
- Plan parallel work (backend doesn't depend on design)

**Week 8: Integration**
- Estimate design integration as separate stories (5-8 pts total)
- Account for potential iteration (designer might need revisions)

---

## FAQs

**Q: Can I change my project idea after Week 1?**
A: Small changes (pivot feature, adjust scope) are fine. Major project changes after Week 3 jeopardize timeline. Discuss with Andrew early if having doubts.

**Q: What if I finish my WBS and realize I have 200 story points?**
A: Your scope is too big! Cut Should-Haves and Could-Haves until you're at 70-100 points for MVP.

**Q: What if my Sprint 1 velocity is way off my estimates?**
A: Expected! That's why we plan conservatively. Adjust future sprints based on Sprint 1-2 actuals. Document in retrospective.

**Q: Do I have to use GitHub Issues? Can I use Jira/Trello/etc.?**
A: GitHub Issues required for Sacred Flow workflow alignment. You can mirror to other tools for personal use, but official backlog must be in GitHub.

**Q: What if I don't have a GRD designer assigned yet in Week 1?**
A: Plan for "a GRD designer TBD" in stakeholders. Design brief stories go in Sprint 3-4 regardless. Designer assigned after Week 6 presentation.

---

## Connection to Course Outcomes

**CLO 1 (Autonomous PM)**: Project charter and roadmap demonstrate ability to plan complex project independently.

**CLO 4 (Adaptive planning)**: Risk register and decision points show understanding of adaptive project management.

**CLO 5 (Documentation)**: WBS, backlog, and roadmap are foundational process documentation for entire capstone.

---

## Resources

- [PM Integration Overview](../pm-materials/PM-Integration-CSC-289.md)
- [Process-Over-Perfection Manifesto](../safe-to-fail/Process-Over-Perfection-Manifesto.md)
- [GitHub Issues Tutorial](../reference-materials/GitHub-Issues-Tutorial.md) *(To be created)*

---

**Next Steps**: After Red Clearance approval, begin Sprint 1 planning (Week 2).

---

**Last Updated**: January 20, 2026
