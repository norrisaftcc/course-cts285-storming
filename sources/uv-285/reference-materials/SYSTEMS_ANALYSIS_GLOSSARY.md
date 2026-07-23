<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/reference-materials/SYSTEMS_ANALYSIS_GLOSSARY.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 all weeks (reference)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CTS-285 Systems Analysis & Design Glossary

Complete reference of SDLC, Agile, and project management terms used in Systems Analysis & Design

---

## How to Use This Glossary

**Search Tip**: Use Ctrl+F (Cmd+F on Mac) to find terms instantly.

**Reading Tip**: Terms are organized by category below. Use the Quick Reference by Category at the bottom to browse by topic.

**Learning Tip**: Don't memorize definitions. Understand when each concept matters and what problems it solves.

---

## SDLC Methodologies

### Agile
**Definition**: An iterative approach to software development that delivers working software in short cycles (sprints), emphasizing collaboration, flexibility, and continuous improvement.

**When you'll use it**: Throughout CTS-285 - your semester project uses Agile/Scrum methodology.

**Example**: Instead of spending 4 months writing requirements and 4 months coding (Waterfall), Agile delivers working features every 2 weeks. After Sprint 1, you have a working login system. After Sprint 2, add booking features. Each sprint adds value.

**Key principles**: Individuals over processes, working software over documentation, customer collaboration over contract negotiation, responding to change over following a plan.

---

### Waterfall
**Definition**: A linear, sequential SDLC approach where each phase (requirements, design, implementation, testing, deployment) must be completed before the next begins.

**When you'll use it**: Rarely in modern software, but useful for understanding why Agile emerged. Some government/regulated projects still use Waterfall.

**Example**: 6-month project: Month 1-2 requirements, Month 3 design, Month 4-5 coding, Month 6 testing. If requirements change in Month 5, you're stuck - can't go back.

**Problems**: Requirements change, stakeholders don't know what they want until they see it, testing happens too late, high risk of building the wrong thing.

---

### Scrum
**Definition**: A specific Agile framework with defined roles (Product Owner, Scrum Master, Development Team), ceremonies (sprint planning, daily standup, sprint review, retrospective), and artifacts (product backlog, sprint backlog, increment).

**When you'll use it**: CTS-285 project structure follows Scrum framework.

**Example**: Your team has Sarah (Product Owner), Marcus and Aisha (Developers). Every sprint starts with planning, has daily standups, ends with review and retrospective. You work from product backlog of user stories.

**Key difference from Agile**: Scrum is a specific implementation of Agile principles with prescribed practices. All Scrum is Agile, but not all Agile is Scrum.

---

### Kanban
**Definition**: An Agile framework focused on continuous delivery without fixed-length sprints. Work flows through stages (To Do, In Progress, Done) with work-in-progress (WIP) limits.

**When you'll use it**: Some teams prefer Kanban over Scrum. You might see it in internships. GitHub Projects boards are often Kanban-style.

**Example**: Your GitHub Projects board with columns "Backlog," "In Progress," "In Review," "Done." You limit "In Progress" to 3 items - when one is done, pull the next.

**Key difference from Scrum**: No sprints, no sprint ceremonies, no estimation. Just continuous flow.

---

### Spiral
**Definition**: An SDLC model that combines iterative development with systematic risk analysis. Each iteration (spiral) includes planning, risk analysis, engineering, and evaluation.

**When you'll use it**: High-risk projects (aerospace, medical devices). Rare in web/mobile development.

**Example**: Building medical device software - each iteration analyzes risks (patient safety, FDA compliance), builds prototype, evaluates, repeats.

---

### RAD (Rapid Application Development)
**Definition**: An SDLC approach emphasizing rapid prototyping and iterative delivery with heavy user involvement.

**When you'll use it**: Projects where speed matters more than perfection. Proof-of-concept systems.

**Example**: Build working prototype in Week 1, show to stakeholders, gather feedback, iterate. Focus on delivering something usable fast, refine later.

---

## Requirements Engineering

### Functional Requirements
**Definition**: Requirements that describe WHAT the system should do - specific behaviors, features, and functions.

**When you'll use it**: Requirements gathering phase (Weeks 3-4). Every user story is a functional requirement.

**Example**: "The system shall allow users to book appointments," "The system shall send email confirmations," "Users can reset their password."

**Contrast with**: Non-functional requirements (how well it should do things - performance, security, usability).

---

### Non-functional Requirements
**Definition**: Requirements that describe HOW WELL the system should perform - quality attributes like performance, security, usability, scalability.

**When you'll use it**: System design phase. Often captured as constraints or quality attributes.

**Example**: "Login page loads in under 2 seconds," "System supports 100 concurrent users," "Password must be encrypted with bcrypt," "Mobile-responsive on all screen sizes."

**Categories**: Performance, security, usability, reliability, scalability, maintainability.

---

### User Story
**Definition**: A requirements format that describes a feature from the user's perspective in the form "As a [role], I want [feature], so that [benefit]."

**When you'll use it**: Throughout CTS-285 - your entire project backlog is user stories.

**Example**: "As a patient, I want to view available appointment slots so that I can choose a convenient time."

**Why it works**: Focuses on user value, not technical implementation. Short enough to fit on index card. Prompts conversation between team and stakeholder.

---

### Use Case
**Definition**: A detailed description of how a user interacts with the system to achieve a goal, including main flow, alternative flows, and exception flows.

**When you'll use it**: More formal requirements documentation. Common in enterprise systems.

**Example**:
**Use Case**: Book Appointment
**Actor**: Patient
**Main Flow**: 1) Patient selects date, 2) System shows available times, 3) Patient selects time, 4) System confirms booking
**Alternative Flow**: If no times available, system suggests next available date

---

### Acceptance Criteria
**Definition**: Specific, testable conditions that a user story must meet to be considered complete.

**When you'll use it**: Every user story needs acceptance criteria. You'll use these to verify stories are done.

**Example**: User story "Book appointment" has criteria:
- Given available appointments exist, When I select a time and click Book, Then I see confirmation
- Given no appointments available, When I view calendar, Then I see "No appointments available"

**Format**: Usually Given-When-Then (Gherkin syntax) for clarity and testability.

---

### MoSCoW Prioritization
**Definition**: A prioritization technique that categorizes requirements as Must Have, Should Have, Could Have, or Won't Have (this time).

**When you'll use it**: Sprint planning, when deciding which features to build first.

**Example**:
- **Must Have**: User login, book appointment (core features, project fails without them)
- **Should Have**: Email confirmation (important but project works without it)
- **Could Have**: Admin dashboard (nice to have if time permits)
- **Won't Have**: SMS notifications (out of scope for this semester)

---

### Requirements Elicitation
**Definition**: The process of gathering requirements from stakeholders through interviews, surveys, observation, workshops, or prototyping.

**When you'll use it**: Week 3-4 when defining your project scope and user stories.

**Techniques**: Stakeholder interviews, user surveys, observation of current process, brainstorming workshops, prototyping.

---

### Scope Creep
**Definition**: Uncontrolled expansion of project scope without adjusting time, budget, or resources. New features keep getting added mid-project.

**When you'll use it**: Constantly fighting it! Happens when stakeholders request features mid-sprint.

**Example**: You committed to "basic booking system" in Sprint 1. Andrew asks "Can you add SMS notifications too?" That's scope creep if you say yes without adjusting timeline.

**How to handle**: Use sprint boundaries. New requests go to backlog, not current sprint. Product Owner (Sarah) negotiates priority with stakeholder (Andrew).

---

## System Design

### UML (Unified Modeling Language)
**Definition**: A standardized visual modeling language for specifying, visualizing, and documenting software systems.

**When you'll use it**: System design phase. Creating diagrams to communicate architecture.

**Common UML diagrams**: Class diagram (database schema), sequence diagram (interaction flow), use case diagram (user interactions), activity diagram (process flow).

---

### ERD (Entity-Relationship Diagram)
**Definition**: A visual representation of database structure showing entities (tables), attributes (columns), and relationships.

**When you'll use it**: Database design phase of your CTS-285 project.

**Example**: Users table (id, email, password) has one-to-many relationship with Appointments table (id, user_id, date, time). ERD shows this visually with boxes and lines.

---

### Data Flow Diagram (DFD)
**Definition**: A graphical representation showing how data moves through a system from input to output.

**When you'll use it**: Understanding or documenting business processes. Less common in modern Agile but useful for complex workflows.

**Example**: DFD showing "User enters booking info → System checks availability → Database returns slots → User selects → Confirmation email sent."

---

### Wireframe
**Definition**: A low-fidelity visual representation of a user interface showing layout and functionality without styling.

**When you'll use it**: UI design phase, before writing any code. Shows stakeholders what pages will look like.

**Example**: Sketch showing login page with email field, password field, "Login" button, "Forgot password" link. No colors, no fonts, just layout.

**Tools**: Figma, Balsamiq, Sketch, or even paper and pencil.

---

### Prototype
**Definition**: An early working model of a system used to test concepts and gather feedback before full development.

**When you'll use it**: Validating design decisions before investing time in full implementation.

**Types**:
- **Low-fidelity**: Paper sketches, clickable wireframes
- **High-fidelity**: Working code with limited functionality
- **Throwaway**: Built to test idea, then discarded
- **Evolutionary**: Continuously refined into final product

---

### CASE Tools (Computer-Aided Software Engineering)
**Definition**: Software tools that support various SDLC activities like requirements gathering, design modeling, code generation, and testing.

**When you'll use it**: Throughout CTS-285 project.

**Examples**:
- Diagram tools: Lucidchart, Draw.io, Visual Paradigm
- Project management: GitHub Projects, Jira, Trello
- Version control: Git, GitHub
- Database design: DbDesigner, MySQL Workbench

---

## Agile/Scrum Terms

### Sprint
**Definition**: A fixed time period (usually 2-4 weeks) during which a Scrum team completes a set of user stories and delivers a working increment.

**When you'll use it**: CTS-285 has 5 sprints (2 weeks each) throughout the semester.

**Example**: Sprint 2 runs March 1-14. Team commits to 12 story points (US-005, US-006, US-007). At sprint end, all stories are complete and demo-able.

**Key rule**: Sprint length doesn't change. Scope adjusts, not time.

---

### Product Backlog
**Definition**: An ordered list of all desired features, enhancements, and fixes for a product, maintained by the Product Owner.

**When you'll use it**: Your master list of user stories for the entire project. Lives in GitHub Projects or similar tool.

**Example**: Your booking system has 25 user stories in product backlog. Top 5 are Must Have (high priority), bottom 10 are Nice to Have (low priority). Product Owner (Sarah) keeps it prioritized.

---

### Sprint Backlog
**Definition**: The subset of product backlog items selected for a specific sprint, plus a plan for delivering them.

**When you'll use it**: Created during sprint planning. Shows what you're committing to THIS sprint.

**Example**: From 25-story product backlog, you select 3 stories (12 points) for Sprint 2. These 3 stories become your sprint backlog.

---

### Story Points
**Definition**: A unit of measure for estimating the relative effort, complexity, and uncertainty of completing a user story.

**When you'll use it**: Sprint planning when estimating how much work fits in a sprint.

**Scale**: Usually Fibonacci sequence (1, 2, 3, 5, 8, 13, 21).
- **1**: Trivial, obvious how to do, 1-2 hours
- **3**: Standard story, well-understood, half day
- **5**: Complex, some unknowns, 1 day
- **8**: Very complex, many unknowns, 1-2 days
- **13+**: Too big, break it down

**Example**: "Add item to cart" = 5 points. "User authentication" = 8 points. "Admin dashboard" = 13+ points (break down).

---

### Velocity
**Definition**: The average number of story points a team completes per sprint, used for capacity planning.

**When you'll use it**: Sprint planning to determine how much work to commit to.

**Example**: Sprint 1 you completed 11 points. Sprint 2 you completed 13 points. Velocity = 12 points average. In Sprint 3 planning, commit to ~12 points, not 20.

**Key insight**: Velocity is a planning tool, not a performance metric. Goal is consistency, not constantly increasing velocity.

---

### Burndown Chart
**Definition**: A graph showing story points (or tasks) remaining over the course of a sprint, tracking progress toward sprint goal.

**When you'll use it**: Daily or weekly during sprint to see if you're on track.

**Example**: Sprint starts at 12 points. Day 7 you've completed 6 points (6 remaining). Ideal burndown line would be at 6 points by midpoint. You're on track!

**What it shows**: If actual line (red) is above ideal line (gray), you're behind. Below ideal, you're ahead.

---

### Burnup Chart
**Definition**: A graph showing cumulative story points completed over time, tracking progress toward project goal.

**When you'll use it**: Long-term project tracking (multiple sprints).

**Example**: Project has 60 story points total. After Sprint 1: 12 complete. After Sprint 2: 25 complete. Burnup shows upward trajectory. At this rate, you'll finish in 5 sprints.

**Difference from burndown**: Burndown shows remaining work (goes down), burnup shows completed work (goes up).

---

### Daily Standup (Daily Scrum)
**Definition**: A short (15-minute) daily meeting where team members share what they did yesterday, what they'll do today, and any blockers.

**When you'll use it**: In CTS-285, you post async standups to discussion board daily during sprints.

**Format**:
- What did I do yesterday?
- What will I do today?
- Any blockers?

**Key rules**: Time-boxed to 15 minutes, not a problem-solving session (save that for after), focus on coordination not status reporting.

---

### Sprint Planning
**Definition**: A meeting at the start of each sprint where the team selects user stories from the product backlog and commits to completing them.

**When you'll use it**: Beginning of each sprint (Weeks 5, 9, 13).

**Outputs**: Sprint goal, sprint backlog (selected stories), task breakdown, capacity plan.

**Example**: Sprint 2 planning: Review velocity (13 points), define goal ("working booking system"), select stories (US-005, 006, 007 = 13 points), break into tasks.

---

### Sprint Review (Sprint Demo)
**Definition**: A meeting at the end of each sprint where the team demonstrates completed work to stakeholders and gathers feedback.

**When you'll use it**: End of each sprint (Weeks 6, 10, 14) - demo to Andrew and classmates.

**Format**: Live demo of working software, show completed user stories, gather feedback, update product backlog based on feedback.

**Key rule**: Only demo stories that meet Definition of Done. No "90% done" demos.

---

### Sprint Retrospective
**Definition**: A meeting at the end of each sprint where the team reflects on what went well, what didn't, and commits to improvements for the next sprint.

**When you'll use it**: After sprint review, before next sprint planning.

**Format**: What went well? What didn't go well? What will we improve? Generate 3-5 action items with owners.

**Example**: "Code reviews took 3 days. Action: Code reviews within 24 hours or escalate to Andrew. Owner: Sarah."

---

### Product Owner
**Definition**: The person responsible for defining product features, prioritizing the product backlog, and accepting or rejecting work.

**When you'll use it**: In team projects, one person plays this role. In solo projects, you're the PO.

**Responsibilities**: Write user stories, prioritize backlog, answer team questions about requirements, accept completed work, represent stakeholder interests.

**Example**: Sarah is Product Owner for your team. She writes user stories, decides sprint priorities, demos to Andrew (stakeholder), marks stories as Done when they meet acceptance criteria.

---

### Scrum Master
**Definition**: The person responsible for ensuring the team follows Scrum practices, removing impediments, and facilitating ceremonies.

**When you'll use it**: Larger teams (5+ people). In CTS-285, Product Owner often doubles as Scrum Master.

**Responsibilities**: Facilitate sprint planning/retrospective, remove blockers, protect team from interruptions, coach team on Agile practices.

**Example**: If team is blocked on SendGrid API issue, Scrum Master escalates to Andrew for help. If stakeholder tries to add stories mid-sprint, Scrum Master says "Add to backlog for next sprint."

---

### Definition of Done (DoD)
**Definition**: A shared understanding of what "complete" means for a user story or sprint. A checklist of criteria every story must meet.

**When you'll use it**: Defined in Sprint 1, referenced when marking stories Done.

**Example**: Story is Done when:
- Code written and tested
- All acceptance criteria pass
- Committed to GitHub
- Documentation updated
- Demo-able to Product Owner
- No critical bugs

---

### Increment
**Definition**: The sum of all product backlog items completed during a sprint and all previous sprints. Must be in usable condition regardless of whether Product Owner decides to release it.

**When you'll use it**: End of each sprint you deliver an increment.

**Example**: After Sprint 1: Working login system (increment 1). After Sprint 2: Login + booking + email confirmation (increment 2). Each increment adds to previous.

---

### Epic
**Definition**: A large user story that spans multiple sprints and is broken down into smaller stories.

**When you'll use it**: Organizing related stories. Top-level feature areas.

**Example**:
**Epic**: "User Authentication"
- Stories: Register account (3 pts), Login (2 pts), Logout (1 pt), Reset password (3 pts), Email verification (5 pts)
Total epic: 14 points, spans 2 sprints

---

### Spike
**Definition**: A time-boxed research activity to answer a question or gather information, usually to reduce risk or uncertainty in a story.

**When you'll use it**: When you don't know how to implement something and need to research first.

**Example**: "Spike: Research Flask-Mail vs SendGrid for email delivery" (4 hours). Not a user-facing feature, but reduces uncertainty before building US-007 (email confirmation).

---

## Project Management

### Stakeholder
**Definition**: Any person with interest in or influence over the project - users, sponsors, team members, management.

**When you'll use it**: Requirements gathering, sprint reviews, prioritization decisions.

**Example**: In CTS-285:
- **Primary stakeholder**: Andrew (sponsor, will grade project)
- **Secondary stakeholders**: Classmates (might use your system), future students
- **Team**: Sarah, Marcus, Aisha (also stakeholders)

---

### Milestone
**Definition**: A significant checkpoint or deliverable in a project timeline.

**When you'll use it**: Long-term planning, tracking progress toward major goals.

**Example**: CTS-285 milestones:
- Week 4: User stories and project plan complete
- Week 6: Sprint 1 complete, working authentication
- Week 10: Sprint 3 complete, core features done
- Week 14: Final deployment and documentation

---

### Dependency
**Definition**: A relationship where one task or story cannot start or finish until another is complete.

**When you'll use it**: Sprint planning, identifying critical path.

**Example**: "Book appointment" (US-006) depends on "View available slots" (US-005). Can't book what you can't see. Must complete US-005 first.

**Types**:
- **Finish-to-start**: Task B can't start until Task A finishes (most common)
- **Start-to-start**: Task B can't start until Task A starts

---

### Critical Path
**Definition**: The sequence of dependent tasks that determines the minimum project duration. Any delay on critical path delays entire project.

**When you'll use it**: Project planning, identifying what tasks can't be delayed.

**Example**: Login (Week 5) → Booking (Week 7) → Email (Week 9) → Deployment (Week 13). This is critical path - delay any of these, project slips.

**Non-critical**: Admin dashboard (nice to have, not blocking deployment).

---

### Work Breakdown Structure (WBS)
**Definition**: A hierarchical decomposition of project work into smaller, manageable components.

**When you'll use it**: Project planning phase, breaking down large project into deliverables.

**Example**:
**Level 1**: Appointment Booking System
**Level 2**: User Authentication, Booking Features, Admin Dashboard
**Level 3**: User Auth → Register, Login, Reset Password

---

### Gantt Chart
**Definition**: A bar chart showing project schedule with tasks, durations, dependencies, and progress over time.

**When you'll use it**: Waterfall projects (less common in Agile). Some use for milestone tracking.

**Example**: Visual timeline showing Week 1-4 requirements, Week 5-6 Sprint 1, Week 7-8 Sprint 2, etc. with overlapping bars.

---

### Resource Allocation
**Definition**: Assignment of people, equipment, or budget to project tasks.

**When you'll use it**: Sprint planning, ensuring team has capacity for committed work.

**Example**: Sprint 2 has 60 team-hours available (3 people × 20 hours each). You commit to 25 hours of work, leaving 35-hour buffer for unknowns.

---

### Risk
**Definition**: An uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives.

**When you'll use it**: Risk register creation (Week 6), sprint planning, retrospectives.

**Components**: Likelihood (1-5), Impact (1-5), Risk Score (Likelihood × Impact), Mitigation Plan.

**Example**: "SendGrid email quota exceeded" - Likelihood 4, Impact 4, Score 16 (HIGH). Mitigation: Upgrade to paid plan by Week 8.

---

### Change Request
**Definition**: A formal proposal to modify any aspect of the project (scope, schedule, budget).

**When you'll use it**: When stakeholder wants to add or change features.

**Example**: Week 8, Andrew requests "Can you add SMS notifications?" You evaluate: 8 story points, extends project by 1 sprint. Submit change request for approval or defer to future version.

---

## Quality Assurance

### Unit Test
**Definition**: A test that verifies a single function or method works correctly in isolation.

**When you'll use it**: Throughout development, every function should have unit tests.

**Example**: Test for `validate_email()` function:
- Test valid email returns True
- Test invalid format returns False
- Test empty string returns False

**Tools**: pytest (Python), Jest (JavaScript), JUnit (Java).

---

### Integration Test
**Definition**: A test that verifies multiple components work together correctly.

**When you'll use it**: After unit tests pass, test interactions between modules.

**Example**: Test booking flow: User selects time → Database checks availability → Booking confirmed → Email sent. All components working together.

---

### Acceptance Test
**Definition**: A test that verifies the system meets acceptance criteria and business requirements from the user's perspective.

**When you'll use it**: Validating user stories are complete before marking them Done.

**Example**: For US-006 "Book appointment":
- Given available slots exist, When I select time and click Book, Then I see confirmation (PASS/FAIL)

**Who writes them**: Product Owner defines criteria, QA or developers write automated tests.

---

### Code Review
**Definition**: A process where one or more developers examine code written by another developer before merging it.

**When you'll use it**: Every pull request before merging to main branch.

**Example**: Marcus writes booking logic, Aisha reviews it checking for bugs, security issues, code style, test coverage. Aisha approves → Marcus merges.

**Benefits**: Catches bugs early, shares knowledge, improves code quality, ensures consistency.

---

### Technical Debt
**Definition**: The implied cost of future rework caused by choosing quick/easy solutions now instead of better long-term approaches.

**When you'll use it**: Tracking shortcuts you took that need to be fixed later.

**Example**: "We hardcoded email config instead of using environment variables" - Works now but creates security risk. Technical debt to fix later.

**Management**: Track in GitHub Issues, allocate 10-20% of sprint capacity to paying down debt.

---

### Regression Test
**Definition**: Re-running previously passed tests to ensure new code changes didn't break existing functionality.

**When you'll use it**: After every code change, before deploying.

**Example**: You add email confirmation feature (US-007). Run all existing tests to ensure booking (US-006) still works. If US-006 tests fail, that's a regression.

**Automation**: Use CI/CD pipelines to run regression tests automatically on every commit.

---

## Deployment

### CI/CD (Continuous Integration / Continuous Deployment)
**Definition**:
- **CI**: Automatically building and testing code every time changes are pushed to repository
- **CD**: Automatically deploying passing builds to production

**When you'll use it**: Setting up automated testing and deployment pipelines.

**Example**: Push code to GitHub → GitHub Actions runs tests → If tests pass, automatically deploy to Heroku. No manual steps.

**Tools**: GitHub Actions, Jenkins, Travis CI, CircleCI.

---

### Staging Environment
**Definition**: A production-like environment used for final testing before deploying to real production.

**When you'll use it**: Test deployment process and features in environment identical to production.

**Example**: Heroku staging app at `booking-system-staging.herokuapp.com` where you test before deploying to production `booking-system.herokuapp.com`.

---

### Production Environment
**Definition**: The live system where real users access the application.

**When you'll use it**: Final deployment target for your CTS-285 project (Week 13-14).

**Example**: Your booking system deployed to Heroku or Render, accessible at public URL. Real data, real users (Andrew grading your project).

---

### Rollback
**Definition**: Reverting to a previous stable version of the application after a failed deployment.

**When you'll use it**: When production deployment breaks something critical.

**Example**: Deploy version 2.0 to production → email confirmations stop working → rollback to version 1.9 (last stable version) → investigate bug in dev environment.

**Why it matters**: Rollback capability is your safety net. Always have a way to undo deployments.

---

### Deployment Pipeline
**Definition**: An automated sequence of stages code passes through from commit to production (build, test, deploy).

**When you'll use it**: Setting up CI/CD for your project.

**Example pipeline**:
1. Developer pushes code to GitHub
2. GitHub Actions runs unit tests
3. If tests pass, deploy to staging
4. Run integration tests on staging
5. If tests pass, deploy to production

---

### Environment Variables
**Definition**: Configuration values stored outside the code (API keys, database URLs, secrets) that vary by environment.

**When you'll use it**: Storing sensitive config (SendGrid API key, database password).

**Example**: Instead of hardcoding `SENDGRID_API_KEY = "abc123"` in code (security risk!), store in environment variable. Dev environment has different key than production.

**Tools**: .env files (local), Heroku Config Vars (production).

---

## Quick Reference by Category

### SDLC Methodologies
Agile, Waterfall, Scrum, Kanban, Spiral, RAD

### Requirements Engineering
Functional Requirements, Non-functional Requirements, User Story, Use Case, Acceptance Criteria, MoSCoW Prioritization, Requirements Elicitation, Scope Creep

### System Design
UML, ERD, Data Flow Diagram, Wireframe, Prototype, CASE Tools

### Agile/Scrum Terms
Sprint, Product Backlog, Sprint Backlog, Story Points, Velocity, Burndown Chart, Burnup Chart, Daily Standup, Sprint Planning, Sprint Review, Sprint Retrospective, Product Owner, Scrum Master, Definition of Done, Increment, Epic, Spike

### Project Management
Stakeholder, Milestone, Dependency, Critical Path, Work Breakdown Structure, Gantt Chart, Resource Allocation, Risk, Change Request

### Quality Assurance
Unit Test, Integration Test, Acceptance Test, Code Review, Technical Debt, Regression Test

### Deployment
CI/CD, Staging Environment, Production Environment, Rollback, Deployment Pipeline, Environment Variables

---

## Tips for Using This Glossary

1. **Ctrl+F is your friend**: Don't scroll, search
2. **Start with category reference**: Browse related terms together
3. **Focus on "When you'll use it"**: This tells you practical application
4. **Examples > Definitions**: Read examples to understand real usage
5. **Connect to your project**: Every term will appear in your CTS-285 project

---

**Last Updated**: CTS-285 Spring 2026

This is a living document. If you notice missing terms or confusing definitions, let Andrew know.
