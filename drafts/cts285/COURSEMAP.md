# CTS-285 COURSEMAP
## Systems Analysis & Design - Certification Document

**Institution**: FTCC <!-- NAME: initialism only; the UV-285 source carried a wrong expansion (different college). Full legal name is an instructor call. -->
**Instructor**: Andrew Norris
**Term**: Fall 2026
**Last Updated**: January 15, 2026
**Version**: 1.0

---

## Table of Contents

1. [Course Overview](#course-overview)
2. [NCCCS Alignment](#ncccs-alignment)
3. [Program Outcomes Mapping](#program-outcomes-mapping)
4. [Course Learning Outcomes](#course-learning-outcomes)
5. [Module Breakdown](#module-breakdown)
6. [Assessment Strategy](#assessment-strategy)
7. [Quality Assurance](#quality-assurance)
8. [Instructor Resources](#instructor-resources)

---

## Course Overview

### Official Course Information

**Course Code**: CTS-285
**Course Title**: Systems Analysis & Design
**Credits**: 3 (2 Class | 2 Lab)
**Contact Hours**: 4 hours per week
**Prerequisites**: None (CTI-110, CTI-120, CTS-115 recommended)
**Status**: Active (NCCCS Combined Course Library)

### Course Description (NCCCS Official)

"This course introduces established and evolving methodologies for the analysis, design, and development of an information system. Emphasis is placed on system characteristics, managing projects, prototyping, CASE/OOM tools, and systems development life cycle phases. Upon completion, students should be able to analyze a problem and design an appropriate solution using a combination of tools and techniques."

### Our Implementation

**Experiential Approach**: Students build ONE information system across 16 weeks, progressing through complete SDLC while rotating through project roles.

**Modern Tool Stack**: Python/Flask, GitHub Projects, Figma, Draw.io (modern interpretation of CASE/OOM tools)

**Role Progression**: Observer → Product Owner → Scrum Master → Developer → Release Manager → Team Lead

**CSC-289 Preparation**: Scaffolds independent project execution and cross-functional collaboration (GRD-242 integration)

---

## NCCCS Alignment

### Required Elements Coverage

| NCCCS Requirement | How CTS-285 Addresses |
|-------------------|----------------------|
| **SDLC phases** | All 8 modules map to SDLC phases (Initiation → Maintenance) |
| **Methodologies** | Module 1 compares Waterfall, Agile, Scrum; Agile used throughout |
| **System characteristics** | Module 2 requirements analysis, Module 3 system architecture |
| **Managing projects** | 40% of grade is PM/process (sprint planning, standups, retrospectives) |
| **Prototyping** | Module 3 wireframes, iterative design through 3 sprints |
| **CASE/OOM tools** | Modern interpretation: Figma (wireframes), Draw.io (UML/ERD), GitHub Projects (PM) |
| **Problem analysis** | Modules 1-2 stakeholder analysis, requirements gathering |
| **Solution design** | Modules 3-4 system design (UML, ERD, architecture decisions) |

---

## Program Outcomes Mapping

CTS-285 supports Drew Norris AI/IT Program outcomes:

| Program Outcome | CTS-285 Integration | Assessment Evidence |
|-----------------|---------------------|---------------------|
| **PO1**: Master Git/GitHub workflow | Sacred Flow reinforced; GitHub Projects for PM; consistent commits required | Sprint execution grading (40%), commit history analysis |
| **PO2**: Apply AI fundamentals | Not primary focus (CSC courses) | N/A |
| **PO3**: Analyze systems and design solutions | **Core course focus**; SDLC analysis, UML, ERD, system architecture | All modules, especially 2-3 (60% of grading) |
| **PO4**: Document and communicate professionally | Documentation every module; stakeholder communication practice | 20% of grade; design docs, retrospectives, presentations |
| **PO5**: Demonstrate process-first mindset | **Central philosophy**; 40% grading on process, retrospectives emphasize improvement | Process component grading, retrospective quality |

---

## Course Learning Outcomes

### CLO Definitions with Assessment

| CLO | Statement | Bloom's | PO Mapping | Assessment Methods |
|-----|-----------|---------|------------|-------------------|
| **CLO1** | Apply SDLC methodologies (Waterfall, Agile, Scrum) to information system projects | Apply | PO2, PO5 | Knowledge Checks 1, 4; Sprint execution (Modules 3-5) |
| **CLO2** | Analyze stakeholder requirements and create functional specifications using user stories and acceptance criteria | Analyze | PO3, PO4 | Weeks 3-4 assignments; Sprint planning docs |
| **CLO3** | Design system architecture using UML diagrams, ERDs, and wireframes | Create | PO2, PO3 | Week 5-6 Sprint 1 (design artifacts); rubric grading |
| **CLO4** | Implement and test information systems using modern development tools and frameworks | Apply | PO2 | Sprints 2-3 (Weeks 7-12); working deployments |
| **CLO5** | Evaluate system quality through risk assessment, testing strategies, and Definition of Done criteria | Evaluate | PO5 | Module 6 risk assessment; Sprint retrospectives |
| **CLO6** | Communicate technical information effectively to technical and non-technical stakeholders through documentation and presentations | Create | PO4 | All documentation; Sprint reviews; Final presentation (Week 16) |

---

## Module Breakdown

### Module 1: SDLC Foundations & Agile Mindset (Weeks 1-2)

**Theme**: Building foundation for systems analysis thinking

**Role**: Observer/Learner

**Module Learning Objectives**:
- MLO1: Configure development environment and execute professional Git workflow (Apply → CLO1)
- MLO2: Explain SDLC phases and compare Waterfall vs. Agile methodologies (Understand → CLO1)
- MLO3: Select appropriate project scope and define MVP boundaries (Apply → CLO2)

**Assessments**:
- Week 1: Course Setup & SDLC Exploration (25 pts)
- Week 2: Agile Simulation & Dataman Backlog Initialization (35 pts)
- Knowledge Check 1 (6 pts bonus)

**Materials**:
- Activity: SDLC Simulation Lab (120 min)
- Planning Sheets: User Story Template, Exit Ticket Template
- Reference: Systems Analysis Glossary (introduction)

**Key Deliverables**: Environment configured, project selected, 10+ initial user stories

---

### Module 2: Requirements Gathering & Stakeholder Management (Weeks 3-4)

**Theme**: Understanding user needs through Product Owner lens

**Role**: Product Owner

**Module Learning Objectives**:
- MLO1: Conduct stakeholder analysis using power-interest grid (Analyze → CLO2)
- MLO2: Execute structured interviews to gather requirements (Apply → CLO2)
- MLO3: Write user stories with testable acceptance criteria using Given-When-Then format (Create → CLO2)
- MLO4: Prioritize product backlog using MoSCoW method (Evaluate → CLO2)

**Assessments**:
- Week 3: Stakeholder Analysis & Interview Plan (25 pts)
- Week 4: User Story Creation & Product Backlog (50 pts)
- Knowledge Check 2 (6 pts bonus)

**Materials**:
- Activity: User Story Workshop (90 min)
- Planning Sheets: User Story Template, Risk Register Template
- PM Mini-Lesson: User Stories & Acceptance Criteria

**Key Deliverables**: 15-20 prioritized user stories, stakeholder profiles, product backlog

---

### Module 3: System Design & Architecture (Weeks 5-6) - SPRINT 1

**Theme**: Translating requirements into technical design

**Role**: Product Owner (Design Phase)

**Module Learning Objectives**:
- MLO1: Create UML diagrams (use case, class, sequence) using correct notation (Create → CLO3)
- MLO2: Design normalized database schema (ERD in 3NF) (Create → CLO3)
- MLO3: Develop wireframes for key user interfaces (Create → CLO3)
- MLO4: Plan and execute first complete sprint with estimation and retrospective (Apply → CLO1)

**Assessments**:
- Weeks 5-6: Sprint 1 - System Design & MVP Planning (75 pts)
  - Technical: 35 pts (UML 25, ERD 15, Wireframes 15, Design Doc 10)
  - Process: 25 pts (Sprint planning 8, Daily standups 10, Retrospective 7)
  - Communication: 15 pts (Documentation quality)
- Knowledge Check 3 (6 pts bonus)

**Materials**:
- Activity: System Design Studio (150 min)
- Planning Sheets: Sprint Planning Template, Sprint Retrospective Template
- PM Mini-Lessons: Story Point Estimation, Sprint Planning
- Reference: SDLC Quick Reference (UML/ERD section)

**Key Deliverables**: Complete design package (3 UML diagrams, ERD, 5 wireframes), system design document, sprint artifacts

---

### Module 4: Sprint Planning & Execution (Weeks 7-8) - SPRINT 2

**Theme**: Facilitating Agile ceremonies as Scrum Master

**Role**: Scrum Master

**Module Learning Objectives**:
- MLO1: Facilitate sprint planning meeting with capacity calculation (Apply → CLO1)
- MLO2: Run effective daily standups and remove blockers (Apply → CLO1)
- MLO3: Track progress using burndown charts (Apply → CLO4)
- MLO4: Present sprint review to stakeholders (Create → CLO6)

**Assessments**:
- Weeks 7-8: Sprint 2 - Implementation & Facilitation (100 pts)
  - Process: 35 pts (Sprint ceremonies, facilitation, burndown tracking)
  - Technical: 40 pts (Working features implemented)
  - Communication: 25 pts (Sprint review presentation, technical docs)
- Knowledge Check 4 (6 pts bonus)

**Materials**:
- Activity: Sprint Planning Simulation (120 min)
- Planning Sheets: Daily Standup Template, Burndown Chart Template
- PM Mini-Lesson: Sprint Ceremonies
- Reference: Troubleshooting Guide (development section)

**Key Deliverables**: Working prototype with 8+ user stories implemented, sprint artifacts, stakeholder presentation

---

### Module 5: Development & Testing (Weeks 9-10) - SPRINT 3

**Theme**: Developer perspective on implementation

**Role**: Developer

**Module Learning Objectives**:
- MLO1: Implement user stories with proper testing (Apply → CLO4)
- MLO2: Conduct code reviews using structured checklist (Apply → CLO4)
- MLO3: Manage technical debt and communicate trade-offs (Evaluate → CLO6)

**Assessments**:
- Weeks 9-10: Sprint 3 - Development & Code Review (100 pts)
  - Technical: 40 pts (Implementation quality, testing)
  - Process: 35 pts (Sprint execution, code review participation)
  - Communication: 25 pts (Technical documentation, code review feedback)
- Knowledge Check 5 (6 pts bonus)

**Materials**:
- Activity: Code Review Lab (90 min)
- Planning Sheets: Daily Standup Template (continued use)
- Reference: Quick Reference (testing patterns)

**Key Deliverables**: Refined implementation with tests, code review documentation, technical debt register

---

### Module 6: Quality Assurance & Risk Management (Weeks 11-12)

**Theme**: Ensuring system quality and managing risks

**Role**: Developer/QA

**Module Learning Objectives**:
- MLO1: Identify and assess project risks using likelihood × impact matrix (Evaluate → CLO5)
- MLO2: Define and enforce Definition of Done criteria (Apply → CLO5)
- MLO3: Measure sprint health using quantitative indicators (Analyze → CLO4)

**Assessments**:
- Week 11: Risk Mitigation & QA (50 pts)
- Week 12: Definition of Done & Acceptance Testing (50 pts)
- Knowledge Check 6 (6 pts bonus)

**Materials**:
- Activity: Risk Assessment Workshop (120 min)
- Planning Sheets: Risk Register Template (updated), Sprint Retrospective
- Reference: Troubleshooting Guide (testing/QA section)

**Key Deliverables**: Risk register with mitigation plans, Definition of Done enforcement, acceptance test results

---

### Module 7: Deployment & Documentation (Weeks 13-14)

**Theme**: Releasing system to production

**Role**: Release Manager

**Module Learning Objectives**:
- MLO1: Execute deployment strategy to production environment (Apply → CLO4)
- MLO2: Create user training materials for non-technical audiences (Create → CLO6)
- MLO3: Write technical documentation for future maintainers (Create → CLO6)

**Assessments**:
- Week 13: Deployment & User Training (50 pts)
- Week 14: Technical Documentation & Handoff (50 pts)
- Knowledge Check 7 (6 pts bonus)

**Materials**:
- Activity: Deployment Dry Run (150 min)
- Reference: Quick Reference (deployment section)

**Key Deliverables**: Deployed application (production environment), user manual, technical documentation, deployment runbook

---

### Module 8: Capstone Integration & Project Leadership (Weeks 15-16)

**Theme**: Demonstrating autonomous project execution

**Role**: Team Lead (synthesizing all roles)

**Module Learning Objectives**:
- MLO1: Lead autonomous sprint with minimal instructor guidance (Apply → CLO1)
- MLO2: Present complete SDLC journey to stakeholders (Create → CLO6)
- MLO3: Reflect on process maturity growth and prepare for CSC-289 (Evaluate → CLO5, CLO6)

**Assessments**:
- Week 15: Final Integration & Presentation Prep (40 pts)
- Week 16: Final Presentation & Portfolio (60 pts)
- Knowledge Check 8 (6 pts bonus)

**Materials**:
- Activity: Final Presentation Prep (90 min)
- Planning Sheets: Exit Ticket (semester reflection)

**Key Deliverables**: Final presentation (10-12 min), process portfolio, semester retrospective, deployed complete system

---

## Assessment Strategy

### Points Distribution (750 total)

*Solo arc (M1–M6): 600 pts (80.0%). Team on-ramp (M7–M8): 150 pts (20.0%). Knowledge checks graded, not bonus.*

| Module | Points | % of Grade | Assessment Type |
|--------|--------|------------|-----------------|
| Module 1 | 75 | 10.0% | Course setup, analyst read + quiz, agile & backlog |
| Module 2 | 75 | 10.0% | Assignments (stakeholder analysis, user stories) |
| Module 3 | 100 | 13.3% | Sprint 1 (design artifacts + process + risk register) |
| Module 4 | 100 | 13.3% | Sprint 2 (implementation + facilitation) |
| Module 5 | 100 | 13.3% | Sprint 3 (development + code review) |
| Module 6 | 100 | 13.3% | QA, DoD/acceptance, lightweight deploy + grouped presentation |
| Module 7 | 70 | 9.3% | Team formation + terminology discovery (on-ramp) |
| Module 8 | 80 | 10.7% | Wireframes, design consult + capstone pitch (on-ramp) |
| Knowledge Checks | 50 | 6.7% | 5 auto-graded quizzes (M2–M6, 10 ea), graded |
| **Total** | **750** | **100%** | |

> **Task 1.0b scope note:** the **authoritative** grade table above is normalized to the canonical 750-point regime. The per-assessment and per-component point figures in the **Module Breakdown** section above (e.g. Week-2 assignment points, the per-module "Knowledge Check … bonus" lines, and the Sprint-1 Technical/PM/Communication component split) are **not** normalized here — they are rebuilt from the canonical spine by task **2.5** (COURSEMAP rebuild), together with the QM-section removal and the PO2-mapping fix (both deferred per the canonical table). Until 2.5 runs, treat this grade table as authoritative over the Module Breakdown figures.
>
> **Addendum, 2026-08-07 — the QM-section removal named above has since been executed** and is no longer pending. The note above is left as written, per non-negotiable #8: it was correct on the day 1.0b wrote it, and this line records the change rather than editing the record of it. The **PO2-mapping fix and every point figure in Module Breakdown remain 2.5's** and are untouched.

### Grading Philosophy

**40% Process/PM**:
- Sprint planning, execution, retrospectives
- Daily standups (evidence of iterative work)
- GitHub Projects board usage
- Process documentation quality

**40% Technical**:
- Design quality (UML, ERD, wireframes)
- Implementation quality (code, functionality)
- Testing and deployment
- Appropriate tool usage

**20% Communication**:
- Documentation clarity (technical AND user-facing)
- Design rationale and trade-offs
- Stakeholder presentations
- Professional writing

### Assessment Alignment Matrix

| CLO | Module 1 | Module 2 | Module 3 | Module 4 | Module 5 | Module 6 | Module 7 | Module 8 |
|-----|----------|----------|----------|----------|----------|----------|----------|----------|
| CLO1 (SDLC/Agile) | ✓ | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓ | ✓✓ |
| CLO2 (Requirements) | ✓ | ✓✓✓ | ✓✓ | ✓ | | | | ✓ |
| CLO3 (Design) | | | ✓✓✓ | ✓ | | | | ✓ |
| CLO4 (Implementation) | | | ✓ | ✓✓ | ✓✓✓ | ✓ | ✓✓ | ✓ |
| CLO5 (Quality/Risk) | | | ✓ | ✓ | ✓ | ✓✓✓ | ✓ | ✓✓ |
| CLO6 (Communication) | | ✓ | ✓ | ✓✓ | ✓ | ✓ | ✓✓✓ | ✓✓✓ |

✓ = Introduced/Practiced | ✓✓ = Reinforced/Applied | ✓✓✓ = Mastered/Assessed

---

## Quality Assurance

<!--
  QM STRIP, 2026-08-07. Ordered by phase0/QM_Retirement_Note.md ("all QM references in COURSEMAP
  (§Quality Assurance), README certification statements, rubrics FAQ, and instructor guides"),
  tracked as Deferred in points-normalization/CONFLICT_LEDGER.md under "QM-retirement task",
  and unexecuted until now. The rubrics FAQ and README targets were already clean when checked;
  this file was the last one carrying live QM doctrine.
  What stood here: a claim that "CTS-285 addresses 22/22 QM standards (full audit in separate
  document)", followed by four scored blocks. Removed rather than rewritten, because the claim
  asserts certification against a framework withdrawn program-wide, and the "separate document"
  it cites is a retired audit that named a nonexistent "QM 8th Edition" and carried a name on
  work that person did not perform.
  Replaced by the gate that actually applies. The underlying practices were never the problem
  and are not lost - measurable objectives, aligned assessments, provided rubrics and varied
  materials are documented where they are actually done, in the CLO/MLO tables above and in the
  assessment rubrics.
-->

### The current quality gate

Quality Matters has been **withdrawn program-wide**. The provider is moving to an in-house online course quality process, and its criteria do not exist yet. Until they do, rebuilt material is checked against four things:

1. **Link check** — every referenced path resolves to a file that exists
2. **Points check** — every figure matches the canonical points table, and assignment headers sum to 750
3. **Adversarial continuity review** — a walk of the student journey, looking for what the materials promise and do not deliver
4. **RSI-mechanism verification** — the interaction mechanisms are present and running

**RSI is not part of that withdrawal and never was.** Regular and Substantive Interaction is federal distance-education compliance under 34 CFR § 600.2 — it is law rather than course-quality doctrine, and its mechanisms survive every restructure. See the instructor guide for what they are and when they run.

---

## Instructor Resources

### Teaching Materials Provided

**For Each Module**:
- Canvas HTML page (module overview, timeline, embedded materials)
- Detailed assignments with rubrics
- Knowledge check (auto-graded, unlimited attempts)
- Hands-on activity lab (90-180 min)
- Planning sheet templates (student tools)
- Reference materials (glossary, quick reference, troubleshooting)

**Course-Wide**:
- Comprehensive instructor guide (60+ pages)
  - Module-by-module teaching notes
  - Common student struggles with interventions
  - Grading shortcuts and time-saving strategies
  - Technology setup guides
  - Office hours FAQs
- Assessment rubrics with examples of A/B/C work
- PM integration overview (explains 40% process grading model)

### Course Adaptation Guidelines

**For Different Semester Lengths**:
- 16-week (standard): Use as designed
- 12-week (accelerated): Combine Modules 1-2, reduce sprint durations to 10 days
- 8-week (intensive): Not recommended (insufficient time for 3 complete sprints)

**For Different Modalities**:
- In-person: Activities as designed, synchronous standups
- Hybrid: Activities in-person, async standups via discussion board
- Online: Zoom for activities, async everything, require video presentations

**For Different Class Sizes**:
- 10-15 students (ideal): Individual projects, peer code reviews in class
- 20-30 students: Individual projects, online peer reviews, TA support recommended
- 30+ students: Not recommended without TA (grading load unsustainable)

### SME Instructor Support

Designed for SME (Subject Matter Expert) instructors without teaching training:

- **Clear rubrics** with "what earns full points" examples
- **Grading shortcuts** (GitHub Projects boards show process in 30 seconds)
- **Plain language** (no education jargon like "scaffolding" without definition)
- **Time estimates** (how long to grade each assignment)
- **Office hours scripts** (common questions with prepared answers)
- **AlgoCratic framework guidance** (it's optional, not required for grading)

---

## Continuous Improvement

### Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Jan 15, 2026 | Initial course build (50% complete) | Andrew Norris / Angela Westmoreland |

### Planned Updates (Version 1.1 - Feb 2026)

- Complete remaining 11 assignments (Weeks 6-16, excluding Sprint 1)
- Quality gate applied per the four checks in §Quality Assurance <!-- QM strip 2026-08-07: read "Full quality audits (QM, CourseForge, RSI)". The QM and CourseForge audits are retired (INGESTION_MANIFEST); RSI verification survives and is one of the four checks. -->
- PM mini-lessons 2-4
- Dashboard integration finalization

### Feedback Mechanisms

- End-of-semester course evaluation
- Module-level retrospectives (embedded in assignments)
- Office hours feedback log
- Instructor collaboration (other CTS-285 sections)

---

## Certification Statement

This course has been designed to meet:
- ✅ NCCCS CTS-285 Combined Course Library standards
- ✅ FTCC program outcomes for AI/IT pathway
- ✅ Industry-relevant PM and systems analysis practices
- ✅ Preparation for CSC-289 capstone requirements

**Course Designer**: Andrew Norris
**Academic Oversight**: Angela Westmoreland <!-- INSTRUCTOR SIGN-OFF NEEDED, 2026-08-07: left exactly as inherited, deliberately. phase0/QM_Retirement_Note.md records this name appearing on a generated QM audit as work she did not perform. That is a finding about the audit, NOT about this line — she may well be the actual academic oversight for 26FA, and removing a real person's attribution on suspicion would be its own error. Confirm, correct, or remove on instruction. -->
**Effective Date**: Fall 2026

---

**Document End** | Version 1.0 | January 15, 2026
