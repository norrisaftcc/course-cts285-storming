<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/COURSEMAP-CANONICAL.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 spine (merge base)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CSC-289 Canonical Course Map: Programming Capstone Project

> **This is the authoritative course document.** It supersedes CTS-289-COURSE-SUMMARY.md and reconciles all prior versions. All Canvas tasks, dashboard entries, and instructor materials should reference this document.

**Course**: CSC-289 — Programming Capstone Project
**Credits**: 3 (1 Class, 4 Lab)
**Duration**: 16 weeks (8 modules × 2-week cadence)
**Instructor**: Andrew Norris
**Cross-Program Collaboration**: GRD-242 (Graphic Design IV), Weeks 2–8
**Total Points**: 1,600
**Process/Technical Split**: 60% Process (960 pts) / 40% Technical (640 pts)

**Prerequisites**: CTI-110, CTI-120, CTS-115
**Recommended Prior**: CTS-285 (Systems Analysis & Design)

---

## NCCCS Course Description

> This course provides an opportunity to complete a significant programming project from the design phase through implementation with minimal instructor support. Emphasis is placed on project definition, testing, presentation, and implementation. Upon completion, students should be able to complete a project from the definition phase through implementation.

---

## Course Learning Outcomes (CLOs)

| CLO | Outcome | Bloom's | Program Outcomes |
|-----|---------|---------|-----------------|
| **1** | Manage a software project autonomously using industry-standard Agile/Scrum practices from ideation through deployment | Creating, Applying | PO1, PO3, PO5 |
| **2** | Collaborate effectively with cross-functional teams (designers, stakeholders) using professional communication protocols and dependency management | Applying, Evaluating | PO4, PO5 |
| **3** | Evaluate and integrate external design assets using user story acceptance criteria and technical constraint validation | Evaluating, Analyzing | PO3, PO4 |
| **4** | Adapt project plans in response to changing requirements, technical blockers, and stakeholder feedback using risk management and scope control | Evaluating, Creating | PO3, PO5 |
| **5** | Document technical and process decisions through comprehensive project artifacts (sprint planning, retrospectives, risk registers, process portfolios) | Creating, Analyzing | PO4, PO5 |
| **6** | Execute professional development workflows including version control, AI-assisted development, code review, testing, and deployment to production | Applying, Creating | PO1, PO2, PO5 |

---

## Module Architecture: Learn | Practice | Apply | Assess

Every module follows the CourseForge four-part instructional sequence:

| Phase | Purpose | Bloom's | Canvas Format | RSI Role |
|-------|---------|---------|---------------|----------|
| **Learn** | Readiness verification + context setting | Remember/Understand | Entry Ticket quiz (auto-graded, unlimited attempts) | Instructor reviews results, contacts students who score <70% |
| **Practice** | Low-stakes skill building | Apply/Analyze | Learning Activity (auto-graded or checklist) | Instructor provides batch feedback on common patterns |
| **Apply** | Sprint execution + discussions | Analyze/Evaluate/Create | Rubric assignments + Discussion boards | Instructor participates in discussions, attends sprint reviews |
| **Assess** | Module-level evaluation | Evaluate/Create | Sprint Scorecard (self-report) + summative artifacts | Instructor provides written feedback within 72 hours |

---

## Sprint Numbering (Canonical)

| Sprint | Module | Weeks | Phase |
|--------|--------|-------|-------|
| — | Module 1 | 1 | Red Clearance (no sprint) |
| Sprint 1 | Module 2 | 2–3 | GRD Collaboration |
| Sprint 2 | Module 3 | 4–5 | GRD Collaboration |
| Sprint 3 | Module 4 | 6–7 | GRD Collaboration |
| Sprint 4 | Module 5 | 8 | GRD Integration (final) |
| Sprint 5 | Module 6 | 9–10 | Solo Development |
| Sprint 6 | Module 6 | 11 | Solo Development |
| Sprint 7 | Module 7 | 12–14 | Solo Development |
| Sprint 8 | Module 8 | 15–16 | Final Delivery |

> **Note**: Module 6 contains two sprints (S5–S6) and Module 7 extends to 3 weeks to accommodate deployment preparation. This reflects the COURSEMAP v1.0 structure preserved for continuity.

---

## Module 1: Red Clearance Recertification (Week 1) — 160 pts

**Theme**: Verify mastery of Sacred Flow and autonomous PM readiness through hands-on certification
**Pass/Fail Checkpoint**: Must pass to continue course

### MLOs
- **MLO 1.1**: Define capstone project scope with measurable success criteria (Create) → CLO 1, 5
- **MLO 1.2**: Construct a prioritized product backlog with estimated user stories (Create) → CLO 1, 4
- **MLO 1.3**: Develop a realistic release roadmap accounting for GRD collaboration timeline (Evaluate) → CLO 1, 4, 5

### Learn (25 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: PM Readiness Check | 10 | Canvas Quiz (15 Q, unlimited attempts, randomized from bank of 25) | 1, 5 | ✅ |
| **Instructional Content**: Sacred Flow Review + PM Toolkit Setup | 0 | Reading + video (no points, required before Practice) | — | — |
| **Knowledge Check**: Agile Vocabulary Self-Test | 15 | Canvas Quiz (10 Q, unlimited attempts) | 1, 4 | ✅ |

### Practice (20 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sacred Flow Verification Lab** | 20 | Checklist submission: create repo, branch, PR, merge with screenshots | 1, 6 | Partial (rubric) |

### Apply (100 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M01-A1**: Project Charter & WBS | 50 | Rubric assignment (GitHub link) | 1, 5 | ❌ |
| **M01-A2**: Product Backlog & Roadmap | 50 | Rubric assignment (GitHub Issues + roadmap doc) | 1, 4, 5 | ❌ |

### Assess (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Red Clearance Certification Quiz** | 15 | Canvas Quiz: scenario-based PM decisions (12 Q, 2 attempts) | 1, 4, 5 | ✅ |

### Discussion Board
| Task | Points | Format | CLOs |
|------|--------|--------|------|
| **Project Vision Pitch** | — | Ungraded but required. Post 200-word project vision; respond to 2 peers with constructive questions. Instructor responds to every student. | 1, 2 |

### RSI Touchpoints (Week 1)
1. Course welcome announcement with Module 1 overview and Sacred Flow refresher
2. Discussion board: Instructor responds to every Project Vision Pitch (substantive, content-focused)
3. Red Clearance review meeting (1-on-1 or small group, 15 min per student)
4. Entry Ticket follow-up: contact students scoring <70% for office hours

---

## Module 2: Sprint 1 — Design Discovery (Weeks 2–3) — 100 pts

**Theme**: Execute first autonomous sprint; identify design asset needs for GRD-242
**Sprint**: Sprint 1

### MLOs
- **MLO 2.1**: Execute a complete sprint cycle (plan → standup → review → retro) autonomously (Apply) → CLO 1, 6
- **MLO 2.2**: Establish baseline velocity through story point tracking (Analyze) → CLO 1, 4
- **MLO 2.3**: Identify design requirements for cross-team collaboration brief (Analyze) → CLO 2, 3

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Sprint Planning Fundamentals | 10 | Canvas Quiz (10 Q, unlimited attempts) | 1, 4 | ✅ |

### Practice (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Velocity Estimation Lab** | 15 | Estimate 5 sample user stories; compare to reference estimates; reflection | 1, 4 | Partial |

### Apply (60 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M02-A1**: Sprint 1 Planning & Execution | 50 | Sprint planning doc, 8+ standups, working code PR, sprint review, retrospective | 1, 5, 6 | ❌ |
| **Discussion**: Design Needs Discovery | 10 | Post: What design assets will your project need? Why? Respond to 2 peers. | 2, 3 | Simplified rubric |

### Assess (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 1 Scorecard** | 15 | Self-report quiz: planned vs. actual velocity, blockers, adaptation decisions (8 Q) | 1, 4, 5 | ✅ |

### RSI Touchpoints (Weeks 2–3)
1. Week 2 announcement: Sprint 1 kickoff guidance + design discovery framing
2. Week 2: Mid-sprint check-in (review standup logs, proactive outreach to silent students)
3. Week 3: Discussion board responses (substantive feedback on design needs analysis)
4. Week 3: Sprint 1 review attendance (live demo, instructor feedback)
5. Sprint 1 retrospective written feedback (within 72 hours)

---

## Module 3: Sprint 2 — Design Brief Preparation (Weeks 4–5) — 100 pts

**Theme**: Continue feature development; prepare design brief for GRD-242 presentation
**Sprint**: Sprint 2

### MLOs
- **MLO 3.1**: Apply Sprint 1 velocity data to improve Sprint 2 estimation accuracy (Apply) → CLO 1, 4
- **MLO 3.2**: Compose a professional design brief communicating technical constraints to non-technical stakeholders (Create) → CLO 2, 5
- **MLO 3.3**: Deliver additional MVP features using Sacred Flow workflow (Apply) → CLO 1, 6

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Stakeholder Communication Readiness | 10 | Canvas Quiz (10 Q, unlimited attempts) | 2, 5 | ✅ |

### Practice (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Design Brief Writing Workshop** | 15 | Draft design brief section using template; self-evaluate against rubric checklist | 2, 3, 5 | Partial |

### Apply (60 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M03-A1**: Sprint 2 Planning & Execution | 50 | Sprint planning doc, 8+ standups, working code PR, sprint review, retrospective | 1, 4, 5, 6 | ❌ |
| **Discussion**: Design Brief Peer Review | 10 | Post draft design brief excerpt; give feedback to 2 peers using evaluation checklist | 2, 3, 5 | Simplified rubric |

### Assess (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 2 Scorecard** | 15 | Self-report quiz: velocity trend, estimation accuracy, design brief readiness | 1, 4, 5 | ✅ |

### RSI Touchpoints (Weeks 4–5)
1. Week 4 announcement: Sprint 2 guidance + design brief expectations
2. Week 4: Mid-sprint check-in (review board state, standup quality)
3. Week 5: Discussion board responses (feedback on design brief drafts)
4. Week 5: Sprint 2 review attendance
5. Sprint 2 retrospective feedback (written, 72 hours)
6. Design brief draft feedback (individual, substantive)

---

## Module 4: Sprint 3 — Design Brief & Collaboration (Weeks 6–7) — 130 pts

**Theme**: Present design needs to GRD-242; begin active cross-team collaboration
**Sprint**: Sprint 3

### MLOs
- **MLO 4.1**: Present project vision and design requirements to non-technical stakeholders professionally (Create) → CLO 2, 3, 5
- **MLO 4.2**: Establish and execute cross-team communication protocols with GRD-242 designer (Apply) → CLO 2
- **MLO 4.3**: Manage sprint dependencies including "waiting on design" stories (Analyze) → CLO 1, 4

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Cross-Team Collaboration Readiness | 10 | Canvas Quiz (10 Q, unlimited attempts) | 2, 4 | ✅ |

### Practice (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Feedback Framework Lab** | 15 | Practice giving constructive design feedback using SBI framework on sample designs | 2, 3 | Partial |

### Apply (85 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M04-A1**: Sprint 3 Planning & Execution | 50 | Sprint artifacts with dependency management for GRD collaboration | 1, 2, 5, 6 | ❌ |
| **M04-A2**: Design Brief Presentation 🎤 | 25 | 15-min presentation to GRD-242 class + written brief + reflection | 2, 3, 5 | ❌ |
| **Discussion**: Collaboration Challenges | 10 | Post: biggest collaboration challenge so far + strategy. Respond to 2 peers. | 2, 4 | Simplified rubric |

### Assess (20 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 3 Scorecard** | 10 | Self-report quiz: velocity, dependency management, GRD coordination | 1, 4 | ✅ |
| **Collaboration Checkpoint** | 10 | Checklist: communication log evidence, designer pairing confirmation, protocol doc | 2, 3 | ✅ |

### RSI Touchpoints (Weeks 6–7)
1. Week 6 announcement: Design brief presentation expectations + GRD collaboration protocol
2. Week 6: Attend design brief presentations (live feedback to each student)
3. Week 6: GRD-242 instructor coordination (Jennifer Fisher sync)
4. Week 7: Discussion board responses (collaboration challenges)
5. Week 7: Sprint 3 review attendance
6. Sprint 3 retrospective feedback (written, focus on collaboration quality)
7. Mid-sprint check-in on GRD communication (review logs)

---

## Module 5: Sprint 4 — Design Integration (Week 8) — 165 pts

**Theme**: Complete design feedback cycles; integrate final assets; close GRD collaboration professionally
**Sprint**: Sprint 4
**Milestone**: GRD-242 collaboration ends after this module

### MLOs
- **MLO 5.1**: Evaluate design deliverables against acceptance criteria using structured framework (Evaluate) → CLO 3
- **MLO 5.2**: Integrate external design assets into working codebase with acceptance testing (Apply) → CLO 3, 6
- **MLO 5.3**: Close cross-team collaboration professionally with attribution and reflection (Evaluate) → CLO 2, 5

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Integration Testing Fundamentals | 10 | Canvas Quiz (10 Q, unlimited attempts) | 3, 6 | ✅ |

### Practice (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Asset Evaluation Framework Lab** | 15 | Evaluate sample design assets against acceptance criteria template; document pass/fail | 3, 5 | Partial |

### Apply (110 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M05-A1**: Sprint 4 Planning & Execution | 50 | Sprint artifacts focused on integration planning | 1, 2, 5, 6 | ❌ |
| **M05-A2**: Design Feedback & Iteration | 25 | Feedback documentation, iteration logs, communication evidence | 2, 3, 5 | ❌ |
| **M05-A3**: Design Asset Integration | 25 | Integration PRs, acceptance tests, designer attribution | 3, 5, 6 | ❌ |
| **Discussion**: GRD Collaboration Retrospective | 10 | Post: What worked, what didn't, what you'd do differently in cross-team work. Respond to 2 peers. | 2, 4, 5 | Simplified rubric |

### Assess (30 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 4 Scorecard** | 10 | Self-report quiz: integration success, collaboration quality | 1, 3 | ✅ |
| **Midcourse Self-Assessment** | 20 | Reflection: PM growth so far, CLO self-rating, goals for dev phase (rubric) | 1, 4, 5 | ❌ |

### RSI Touchpoints (Week 8)
1. Week 8 announcement: Integration expectations + dev phase transition preview
2. Design asset review (instructor reviews integration PRs, provides feedback)
3. GRD collaboration closure check (verify attribution, professionalism)
4. Sprint 4 review attendance
5. Midcourse self-assessment feedback (individual written response)
6. Dev phase readiness check (1-on-1 or small group, 10 min per student)

---

## Module 6: Sprints 5–6 — Solo Development (Weeks 9–11) — 225 pts

**Theme**: Transition to solo development; Claude Code onboarding; vertical slice delivery; code review
**Sprints**: Sprint 5 (Weeks 9–10), Sprint 6 (Week 11)
**Role Rotation**: Developer (S5) → Scrum Master + Developer (S6)

### MLOs
- **MLO 6.1**: Complete Issue → Branch → PR → Review → Merge cycle with Claude Code assistance (Apply) → CLO 1, 6
- **MLO 6.2**: Document AI-assisted development decisions in CLAUDE.md and prompt logs (Analyze) → CLO 5, 6
- **MLO 6.3**: Perform substantive code review identifying real issues (Evaluate) → CLO 2, 6
- **MLO 6.4**: Adjust sprint scope based on velocity data and changing conditions (Evaluate) → CLO 4

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Development Phase Readiness | 10 | Canvas Quiz (12 Q, unlimited attempts): Sacred Flow, code review, Claude Code concepts | 1, 6 | ✅ |

### Practice (25 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Claude Code Onboarding: Sacred Flow with AI** | 25 | 90-120 min hands-on activity: Flask login toy project through full Sacred Flow with Claude Code | 1, 6 | ❌ (rubric) |

### Apply (130 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M06-A1**: Sprint 5 Planning & Execution | 50 | Sprint planning, 8+ standups, vertical slice PR, sprint review, retrospective | 1, 4, 5, 6 | ❌ |
| **M06-A2**: Sprint 6 Planning & Execution | 50 | Sprint planning, standups, feature PRs, sprint review, retrospective | 1, 4, 5, 6 | ❌ |
| **Discussion**: Code Review Exchange | 15 | Post: share a PR or code decision you're uncertain about. Give substantive review to 2 peers. | 2, 6 | Simplified rubric |
| **Discussion**: Claude Code Reflection | 15 | Post: most effective prompt strategy so far + biggest "slot machine" moment. Respond to 2 peers. | 5, 6 | Simplified rubric |

### Assess (60 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 5 Scorecard** | 10 | Self-report quiz: velocity, Claude Code usage, vertical slice completeness | 1, 4 | ✅ |
| **Sprint 6 Scorecard** | 10 | Self-report quiz: velocity trend, scope adjustments, code review quality | 1, 4 | ✅ |
| **Dev Phase Knowledge Check** | 15 | Canvas Quiz (15 Q, 2 attempts): code review, testing, deployment, Claude Code best practices | 6 | ✅ |
| **Peer Code Review Assessment** | 25 | Structured code review of peer's PR using checklist; evaluated on review quality | 2, 6 | ❌ (rubric) |

### RSI Touchpoints (Weeks 9–11)
1. **Week 9 announcement**: Dev phase launch + Claude Code onboarding expectations
2. **Week 9**: Claude Code onboarding support (office hours, troubleshooting)
3. **Week 9**: Mid-sprint check-in (review standup logs, board state, CLAUDE.md setup)
4. **Week 10**: Discussion board responses (Code Review Exchange — instructor models good review)
5. **Week 10**: Sprint 5 review attendance
6. **Week 10**: Sprint 5 retrospective feedback (written, 72 hours)
7. **Week 11 announcement**: Sprint 6 guidance + scope management reminder
8. **Week 11**: Discussion board responses (Claude Code Reflection)
9. **Week 11**: Sprint 6 review attendance
10. **Week 11**: Sprint 6 retrospective feedback (written, 72 hours)
11. **Week 11**: Peer code review quality feedback (individual)

---

## Module 7: Sprint 7 — Polish, Edge Cases, Deployment (Weeks 12–14) — 200 pts

**Theme**: Defensive programming; deployment readiness; comprehensive testing; feature freeze
**Sprint**: Sprint 7
**Role Rotation**: QA Lead + Developer

### MLOs
- **MLO 7.1**: Implement defensive programming for edge cases and error states (Analyze) → CLO 4, 6
- **MLO 7.2**: Deploy application with complete setup documentation reproducible by a stranger (Apply) → CLO 5, 6
- **MLO 7.3**: Perform comprehensive testing including accessibility audit (Evaluate) → CLO 6

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Deployment & Testing Readiness | 10 | Canvas Quiz (12 Q, unlimited attempts): deployment strategies, testing types, accessibility basics | 6 | ✅ |

### Practice (25 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Deployment Dry Run Lab** | 25 | Deploy to staging environment; document every step; verify a peer can follow your docs | 5, 6 | ❌ (rubric) |

### Apply (105 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M07-A1**: Sprint 7 Planning & Execution | 50 | Sprint planning with feature freeze protocol, standups, PRs, sprint review, retrospective | 1, 4, 5, 6 | ❌ |
| **Discussion**: Edge Cases & "What If" Scenarios | 15 | Post: 3 edge cases in your app + how you handled them. Review 2 peers' edge cases. | 4, 6 | Simplified rubric |
| **Testing Evidence Portfolio** | 40 | Document: unit tests, integration tests, manual test cases, accessibility audit results | 6 | ❌ (rubric) |

### Assess (60 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Sprint 7 Scorecard** | 10 | Self-report quiz: bugs found/fixed, deployment status, test coverage | 1, 4 | ✅ |
| **Deployment Readiness Checklist** | 25 | Canvas checklist: app deployed, URL accessible, README updated, env vars documented, HTTPS, error handling | 5, 6 | ✅ |
| **Feature Freeze Commitment** | 25 | Document: feature list (final), known issues triaged by severity, what's in/out for final delivery with rationale | 1, 4, 5 | ❌ (rubric) |

### RSI Touchpoints (Weeks 12–14)
1. **Week 12 announcement**: Sprint 7 expectations + feature freeze protocol
2. **Week 12**: Mid-sprint check-in (deployment progress, testing status)
3. **Week 13**: Discussion board responses (Edge Cases — instructor flags common patterns)
4. **Week 13 announcement**: Deployment support + testing guidance
5. **Week 13**: Deployment verification (instructor tests each student's deployed URL)
6. **Week 14**: Sprint 7 review attendance (deployment demo required)
7. **Week 14**: Sprint 7 retrospective feedback (written, 72 hours)
8. **Week 14**: Feature freeze review (individual feedback on scope decisions)
9. **Week 14 announcement**: Final sprint launch + portfolio expectations

---

## Module 8: Sprint 8 — Final Delivery & Process Portfolio (Weeks 15–16) — 250 pts

**Theme**: Final polish; comprehensive portfolio; professional presentation; PM mastery reflection
**Sprint**: Sprint 8 (abbreviated — final fixes only)
**Role**: Self-organized (all roles as needed)

### MLOs
- **MLO 8.1**: Deliver a functional capstone project meeting core user stories with professional documentation (Create) → CLO 1, 3, 6
- **MLO 8.2**: Compile a process portfolio demonstrating PM mastery across the CSC-113 → CSC-289 journey (Create) → CLO 1, 5
- **MLO 8.3**: Articulate project management growth, adaptive decisions, and lessons learned through reflective practice (Evaluate) → CLO 4, 5

### Learn (10 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Entry Ticket**: Professional Presentation & Portfolio Readiness | 10 | Canvas Quiz (10 Q, unlimited attempts): presentation skills, portfolio structure, reflection prompts | 5 | ✅ |

### Practice (15 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Demo Rehearsal** | 15 | Record 3-min practice demo; self-evaluate against presentation rubric; revise | 1, 5 | ❌ (rubric) |

### Apply (185 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **M08-A1**: Final Project Technical Deliverable | 100 | Working deployed application, code repository, comprehensive documentation | 1, 4, 6 | ❌ (rubric) |
| **M08-A2**: Process Portfolio & Presentation | 75 | Complete sprint archive, PM reflection essay, 10-12 min final presentation | 1, 2, 4, 5 | ❌ (rubric) |
| **Discussion**: PM Journey Reflection | 10 | Post: How has your approach to project management changed from CSC-113 to now? Respond to 2 peers. | 4, 5 | Simplified rubric |

### Assess (40 pts)
| Task | Points | Format | CLOs | Auto-graded |
|------|--------|--------|------|-------------|
| **Capstone Self-Assessment** | 25 | CLO-by-CLO self-rating with evidence citations; honest gap analysis | 1, 4, 5 | ❌ (rubric) |
| **Sprint 8 Scorecard** | 15 | Final self-report: bugs fixed, polish completed, deployment verified, portfolio status | 1, 5 | ✅ |

### RSI Touchpoints (Weeks 15–16)
1. **Week 15 announcement**: Final sprint expectations + presentation schedule
2. **Week 15**: Portfolio draft review (individual feedback, substantive)
3. **Week 15**: Discussion board responses (PM Journey — instructor connects to career readiness)
4. **Week 15**: Demo rehearsal feedback (individual, if requested)
5. **Week 16**: Final presentation attendance (live, with Q&A)
6. **Week 16**: Final project comprehensive feedback (CLO-by-CLO assessment)
7. **Week 16**: Process portfolio written evaluation (individual, within 5 business days)

---

## Continuous Process Assessment — 270 pts

Evaluated throughout the semester based on cumulative evidence:

| Component | Points | Evidence | CLOs |
|-----------|--------|----------|------|
| **Sprint Management** | 90 | Planning quality, goal achievement, adaptive planning, review demos, retrospective depth | 1, 4, 5 |
| **Daily Process Discipline** | 60 | Standup consistency (8/sprint minimum), commit message quality, GitHub workflow adherence | 1, 5, 6 |
| **Risk Management & Adaptation** | 45 | Risk register maintenance, proactive problem-solving, scope decisions with rationale | 4, 5 |
| **Cross-Team Collaboration** | 45 | GRD communication quality, feedback professionalism, iteration responsiveness, attribution | 2, 3 |
| **Documentation Quality** | 30 | README, technical docs, sprint artifacts organization, CLAUDE.md maintenance | 5, 6 |

**Grading Intervals**: Continuous process is assessed at three checkpoints:
1. **Midcourse** (end of Module 5, Week 8): 90 pts — covers Modules 1–5
2. **Dev Phase** (end of Module 7, Week 14): 90 pts — covers Modules 6–7
3. **Final** (end of Module 8, Week 16): 90 pts — covers Module 8 + cumulative trajectory

---

## Assessment Summary

| Module | Weeks | Learn | Practice | Apply | Assess | Continuous | Total |
|--------|-------|-------|----------|-------|--------|------------|-------|
| **1** Red Clearance | 1 | 25 | 20 | 100 | 15 | — | **160** |
| **2** Sprint 1 | 2–3 | 10 | 15 | 60 | 15 | — | **100** |
| **3** Sprint 2 | 4–5 | 10 | 15 | 60 | 15 | — | **100** |
| **4** Sprint 3 + Design Brief | 6–7 | 10 | 15 | 85 | 20 | — | **130** |
| **5** Sprint 4 + Integration | 8 | 10 | 15 | 110 | 30 | — | **165** |
| **6** Sprints 5–6 | 9–11 | 10 | 25 | 130 | 60 | — | **225** |
| **7** Sprint 7 + Deploy | 12–14 | 10 | 25 | 105 | 60 | — | **200** |
| **8** Final Delivery | 15–16 | 10 | 15 | 185 | 40 | — | **250** |
| **Continuous Process** | All | — | — | — | — | 270 | **270** |
| **TOTAL** | | **95** | **145** | **835** | **255** | **270** | **1,600** |

### Process vs. Technical Split

**Process (60% = 960 pts)**:
- All Learn tasks (entry tickets, knowledge checks): 95 pts
- All Discussion boards: ~95 pts (from Apply totals)
- Sprint process artifacts (planning, standups, retros): ~430 pts (from Apply totals)
- Sprint Scorecards: ~90 pts (from Assess totals)
- Continuous Process Assessment: 270 pts
- **Total Process: ~980 pts (61%)**

**Technical (40% = 640 pts)**:
- All Practice tasks (labs, activities): 145 pts
- Sprint technical implementation: ~340 pts (from Apply totals)
- Technical assessments (code review, testing, deployment): ~135 pts (from Assess totals)
- **Total Technical: ~620 pts (39%)**

---

## Auto-Graded vs. Manual Split

| Type | Points | % | Canvas Format |
|------|--------|---|---------------|
| **Auto-graded** (Canvas quizzes, checklists, scorecards) | ~470 | 29% | Quizzes with question banks, checklists |
| **Manual** (rubric-graded assignments, presentations) | ~1,130 | 71% | Rubric assignments, peer review |
| **Total** | **1,600** | 100% | |

---

## CLO Coverage by Module

| CLO | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | Continuous |
|-----|----|----|----|----|----|----|----|----|------------|
| **1** Autonomous PM | ✓✓ | ✓✓ | ✓ | ✓ | ✓ | ✓✓ | ✓ | ✓✓ | ✓✓ |
| **2** Cross-team collab | — | ✓ | ✓ | ✓✓ | ✓✓ | ✓ | — | ✓ | ✓ |
| **3** Design asset eval | — | — | — | ✓ | ✓✓ | — | — | ✓ | ✓ |
| **4** Adaptive planning | ✓ | ✓ | ✓ | ✓ | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ |
| **5** Documentation | ✓✓ | ✓ | ✓✓ | ✓ | ✓✓ | ✓ | ✓✓ | ✓✓ | ✓ |
| **6** Professional dev | ✓ | ✓✓ | ✓ | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓ |

✓✓ = primary focus | ✓ = addressed | — = not applicable

**Every CLO appears in 5+ modules. Every module addresses 3+ CLOs.** ✅

---

## CTS-285 → CSC-289 Skill Pipeline

| Skill | CTS-285 Level | CSC-289 Entry Expectation | CSC-289 Exit Level |
|-------|--------------|--------------------------|-------------------|
| Sacred Flow | Mastery (Module 8) | Red Clearance verification | Teaching others |
| Sprint ceremonies | Complex (3 sprints) | Autonomous execution | 8 sprints self-managed |
| User stories | Refinement | Evaluation (design acceptance) | Professional quality |
| Estimation | Velocity tracking | Accurate forecasting | Data-driven planning |
| Risk management | Introduction | Proactive mitigation | Professional adaptation |
| Code review | Module 5 lab | Substantive reviews | Team code quality driver |
| Stakeholder mgmt | Introduction | Active management (GRD) | Cross-functional leadership |
| Claude Code / AI | **Not taught** | **Onboarded in Module 6** | Professional AI-assisted dev |
| Deployment | Module 7 lab | Full deployment | Production-ready delivery |

---

## Tools & Technology

| Tool | Purpose | Introduced |
|------|---------|-----------|
| Git / GitHub | Version control, Issues, Projects, PRs | CTS-285 (reinforced M1) |
| GitHub Projects (Kanban) | Sprint tracking, board management | CTS-285 (reinforced M1) |
| Python / Flask | Backend development | CTS-285 |
| HTML/CSS/JS | Frontend | CTS-285 |
| SQLite → PostgreSQL | Database | CTS-285 |
| Claude Code | AI-assisted development | **NEW: M6 onboarding** |
| CLAUDE.md | AI project context file | **NEW: M6** |
| Render / Railway | Deployment | CTS-285 M7 (reinforced M7) |
| Figma / Draw.io | Design collaboration | CTS-285 |

---

## Grading Scale

| Grade | Percentage | Points |
|-------|-----------|--------|
| A | 90–100% | 1,440–1,600 |
| B | 80–89% | 1,280–1,439 |
| C | 70–79% | 1,120–1,279 |
| D | 60–69% | 960–1,119 |
| F | Below 60% | Below 960 |

---

## Course Materials Index

### Assignments
- [Week 01: Red Clearance Recertification](assignments/Week_01_Red_Clearance_Recertification.md)
- [Week 06: Design Brief Presentation](assignments/Week_06_Design_Brief_Presentation.md) ✅
- [Week 07: Design Feedback & Iteration](assignments/Week_07_Design_Feedback_Iteration.md) ✅
- [Week 08: Design Asset Integration](assignments/Week_08_Design_Asset_Integration.md) ✅
- [Week 16: Final Delivery & Process Portfolio](assignments/Week_16_Final_Delivery_Process_Portfolio.md)

### Development Phase Materials
- [Module Architecture: Development Phase (Modules 5–8)](MODULE-ARCHITECTURE-DEVELOPMENT-PHASE.md) ✅
- [Claude Code Onboarding: Sacred Flow with AI](activities/Claude_Code_Onboarding_Sacred_Flow.md) ✅

### Collaboration Materials
- [GRD-242 Integration Overview](collaboration-materials/GRD-242-Integration-Overview.md) ✅
- [Design Brief Template](collaboration-materials/Design-Brief-Template.md)

### Safe-to-Fail Philosophy
- [Process-Over-Perfection Manifesto](safe-to-fail/Process-Over-Perfection-Manifesto.md) ✅

### PM Materials
- [PM Integration Overview](pm-materials/PM-Integration-CTS-289.md) ✅

### Reference
- [Instructor Sprint Guide (2-Week Sprints)](INSTRUCTOR-GUIDE-2WEEK-SPRINTS.md) ✅
- [Implementation Guide](IMPLEMENTATION_GUIDE.md) ✅
- [Sprint Plan / Dashboard Crosswalk](../../CSC-289_Sprint_Plan_Dashboard_Crosswalk.md) ✅

---

## Deprecated Documents

The following documents are superseded by this canonical course map:

| Document | Status | Reason |
|----------|--------|--------|
| `CTS-289-COURSE-SUMMARY.md` | **Deprecated** | Used 4 CLOs (this uses 6), 1,625 pts (this uses 1,600), 6 sprints (this uses 8) |
| `COURSEMAP.md` (v1.0) | **Superseded** | Used 1,000 pts without Learn\|Practice\|Apply\|Assess structure |

---

**Document Owner**: Angela Westmoreland
**Instructor**: Andrew Norris (Drew)
**Institution**: Fayetteville Technical Community College (NCCCS)
**Last Updated**: March 13, 2026
**Version**: 2.0 (Canonical)
