<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/User_Story_Template.md -->
<!-- ADAPTED for 26FA per issue #5: Example 3 re-anchored from appointment/SendGrid to a Dataman Memory Bank story; off-canon grading-criteria percentages removed (point to parent assignment rubric); Media-skin pass. Varied teaching domains kept for INVEST variety. Fibonacci STORY POINTS preserved. Planning sheet — carries ZERO points of its own. -->

# User Story Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Write well-formed user stories that clearly communicate functionality from the user's perspective, with testable acceptance criteria.

---

## When to Use

Throughout the course, especially during requirements gathering (Weeks 3–4) and before sprint planning. Every feature should be a user story before it becomes code.

---

## Instructions

1. **Write from the user's perspective** — "As a [role]" not "the system shall"
2. **Focus on value** — "So that [benefit]" explains *why* the feature matters
3. **Keep stories small** — should fit in one sprint (1–8 story points)
4. **Include acceptance criteria** — use Given-When-Then
5. **Estimate story points** — Fibonacci (1, 2, 3, 5, 8, 13)
6. **Prioritize with MoSCoW** — Must Have, Should Have, Could Have, Won't Have
7. **Add notes** — technical considerations, dependencies, risks

---

## Template

### User Story [US-###]

**Title**: [Short descriptive title]

**As a** [role/persona]
**I want** [feature/functionality]
**So that** [business value/benefit]

---

#### Acceptance Criteria

**Given** [initial context/precondition]
**When** [action/event]
**Then** [expected outcome]

**Given** [context]
**When** [action]
**Then** [outcome]

(Add 3–5 acceptance criteria per story)

---

#### Story Details

- **Story Points**: ___ (1, 2, 3, 5, 8, 13)
- **Priority**: [ ] Must Have [ ] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: [Group of related stories]
- **Sprint**: Sprint ___ (or Backlog)

#### Dependencies
- Depends on: [Story IDs]
- Blocks: [Story IDs]

#### Technical Notes
- [Implementation considerations]
- [Third-party services needed]
- [Data model changes]

#### Risks
- [Potential blockers or unknowns]

#### Definition of Done
- [ ] Code written and tested
- [ ] All acceptance criteria met
- [ ] Committed to repository
- [ ] Documentation updated
- [ ] Demo-able

---

> The "So that" is the part I read first. It tells me whether a feature is for a real person or just a thing you felt like building. If you can't finish that clause, the story isn't ready — and I would rather tell you that now than after you've built it.
> — SHODANN, your Channel Success Partner

## Filled Examples

> **These span several domains on purpose** — user stories aren't only for your project. Example 3 is a Dataman story so you can see the format on the system you're actually building.

### Example 1: E-commerce

### User Story [US-012]

**Title**: Add product to shopping cart

**As a** customer
**I want** to add items to my shopping cart
**So that** I can purchase multiple products in a single transaction

---

#### Acceptance Criteria

**Given** I am viewing a product detail page
**When** I click the "Add to Cart" button
**Then** the product is added to my cart and I see a confirmation message

**Given** I have items in my cart
**When** I add the same product again
**Then** the quantity increases by 1 instead of creating a duplicate entry

**Given** I add a product to my cart
**When** the product is out of stock
**Then** I see an error message and the product is not added to my cart

**Given** I am not logged in
**When** I add items to my cart
**Then** my cart persists after I log in or create an account

---

#### Story Details

- **Story Points**: 5
- **Priority**: [x] Must Have [ ] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Shopping Cart Management
- **Sprint**: Sprint 2

#### Dependencies
- Depends on: US-008 (User authentication), US-010 (Product catalog)
- Blocks: US-013 (View cart), US-015 (Checkout)

#### Technical Notes
- Store cart in the database (not the session) so it persists across devices
- Need a cart_items table with foreign keys to users and products
- Use AJAX for "Add to Cart" so the page doesn't reload

#### Risks
- Stock quantity needs checking at the moment of adding (race condition possible)
- Cart synchronization across multiple tabs/devices
- What happens to cart items if a product is deleted by an admin?

#### Definition of Done
- [x] Code written and tested
- [x] All acceptance criteria pass
- [x] Committed to repository
- [x] API documentation updated
- [x] Demo-able to the Product Owner

---

### Example 2: Education Platform

### User Story [US-024]

**Title**: Submit assignment for grading

**As a** student
**I want** to submit my assignment before the deadline
**So that** I can receive a grade and feedback from my instructor

---

#### Acceptance Criteria

**Given** I am on the assignment submission page
**When** I upload a PDF file and click "Submit"
**Then** my assignment is submitted and I see a confirmation with a submission timestamp

**Given** the assignment deadline has passed
**When** I try to submit
**Then** I see an error "Deadline has passed — contact instructor for late submission"

**Given** I have already submitted
**When** I submit again before the deadline
**Then** my previous submission is replaced and I see "Resubmission successful"

**Given** I upload a non-PDF file
**When** I try to submit
**Then** I see an error "Only PDF files accepted"

---

#### Story Details

- **Story Points**: 3
- **Priority**: [x] Must Have [ ] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Assignment Management
- **Sprint**: Sprint 3

#### Dependencies
- Depends on: US-020 (Assignment creation by instructor), US-022 (File upload infrastructure)
- Blocks: US-025 (Grade assignment), US-026 (View submission history)

#### Technical Notes
- Store uploaded files in object storage, not the database
- Store file metadata in a submissions table (filename, size, upload timestamp)
- Validate file type on both frontend and backend

#### Risks
- Large file uploads can time out — need a progress indicator
- Time-zone handling for deadlines (student in a different zone than instructor)

#### Definition of Done
- [x] Code written and tested
- [x] All acceptance criteria pass
- [x] Committed to repository
- [x] File-upload integration tested
- [x] Demo-able to the Product Owner

---

### Example 3: Dataman (your project)

### User Story [US-3.1]

**Title**: Load a set of problems for a child

**As a** parent (a curator)
**I want** to store up to ten specific problems for my child to practice
**So that** they drill the exact facts they keep missing, not everything

---

#### Acceptance Criteria

**Given** I am a curator building a set
**When** I add problems to it
**Then** I can store up to ten problems and no more

**Given** a set exists
**When** I assign it to a learner
**Then** that learner can practice exactly those problems

**Given** the facts my child needs change next week
**When** I edit the set
**Then** I can replace problems without starting the set over

**Given** I try to add an eleventh problem
**When** the set already holds ten
**Then** I am told the set is full — the ten-problem limit is enforced

---

#### Story Details

- **Story Points**: 5
- **Priority**: [x] Must Have [ ] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Memory Bank — Targeted Practice Sets
- **Sprint**: Sprint 2

#### Dependencies
- Depends on: US-1.1 (Answer Checker — problems exist to store), the PROBLEM and MEMORY_BANK_SET models
- Blocks: US-3.2 (Practice a stored set), US-4.1 (Review a learner's results)

#### Technical Notes
- MEMORY_BANK_SET holds at most 10 PROBLEMs — the cap is the manual's hard limit (p.6/p.21), enforce it in the model, not just the UI
- A set is created by a curator and assigned to a learner (see the reference ERD)
- Editing a set replaces problems in place; don't force a rebuild

#### Risks
- The ≤10 constraint is a real business rule from a named stakeholder — don't let it live only in the front end
- Assignment (curator → learner) is a relationship students often miss modeling

#### Definition of Done
- [x] Code written and tested
- [x] All acceptance criteria pass, including the ten-problem cap
- [x] Committed to repository
- [x] Reviewed via the Trusted Workflow
- [x] Demo-able to the stakeholder

---

### Example 4: Social Media

### User Story [US-041]

**Title**: Report inappropriate content

**As a** platform user
**I want** to report posts or comments that violate community guidelines
**So that** moderators can review and remove harmful content

---

#### Acceptance Criteria

**Given** I see a post or comment
**When** I click "Report" and select a reason (spam, harassment, misinformation, etc.)
**Then** my report is submitted and I see "Thank you for reporting — moderators will review"

**Given** I submit a report
**When** moderators review the content
**Then** I receive a notification within 24 hours about the outcome

**Given** I report the same content again
**When** I try to submit a duplicate report
**Then** I see "You have already reported this content"

---

#### Story Details

- **Story Points**: 5
- **Priority**: [x] Must Have [ ] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Content Moderation
- **Sprint**: Sprint 4

#### Dependencies
- Depends on: US-038 (User posts), US-040 (Moderator dashboard)
- Blocks: US-042 (Ban user), US-043 (Appeal system)

#### Technical Notes
- reports table with foreign keys to users, posts, comments
- Need a moderation queue in the admin dashboard
- Notification system for report outcomes

#### Risks
- False reports could be weaponized to silence users (need abuse detection)
- Moderator workload could be overwhelming (need prioritization)

#### Definition of Done
- [x] Code written and tested
- [x] All acceptance criteria pass
- [x] Committed to repository
- [x] Admin dashboard shows the moderation queue
- [x] Demo-able to the Product Owner

---

### Example 5: Project Management

### User Story [US-018]

**Title**: View project burndown chart

**As a** Scrum Master
**I want** to view a burndown chart for the current sprint
**So that** I can track progress and see if we're on track to complete committed work

---

#### Acceptance Criteria

**Given** I am in an active sprint
**When** I navigate to the sprint dashboard
**Then** I see a burndown chart showing story points remaining over time

**Given** the sprint is partway through
**When** I view the burndown chart
**Then** I see actual progress compared to the ideal burndown line

**Given** we are behind the ideal burndown
**When** I view the chart
**Then** I see a warning that a scope adjustment may be needed

---

#### Story Details

- **Story Points**: 8
- **Priority**: [ ] Must Have [x] Should Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Project Analytics
- **Sprint**: Sprint 5

#### Dependencies
- Depends on: US-005 (Sprint planning), US-012 (Task tracking)
- Blocks: None (nice to have, not blocking other features)

#### Technical Notes
- Use a charting library for the visualization
- Ideal burndown = story points ÷ sprint days
- Pull data from the sprint's completed-story dates

#### Risks
- The chart may confuse non-technical stakeholders
- The first sprint has no historical data for an ideal line

#### Definition of Done
- [x] Code written and tested
- [x] All acceptance criteria pass
- [x] Committed to repository
- [x] Chart renders correctly on mobile
- [x] Demo-able to the Product Owner

---

## Why This Matters

User stories are the language of Agile software development. Every major tech company uses them to communicate requirements.

Why user stories work:

1. **User-centered** — forces you to think about *who* uses the feature and *why*
2. **Conversation starter** — a story isn't a full spec; it's a prompt for discussion
3. **Testable** — acceptance criteria give clear pass/fail conditions
4. **Right-sized** — small enough to complete in a sprint
5. **Prioritizable** — MoSCoW lets you defer the nice-to-haves

**User stories replace 100-page requirements documents that nobody reads.** Instead of:
> "The system shall provide functionality to allow a supervising adult to persist a bounded collection of practice problems with enforcement of a maximum-item constraint..."

you write:
> **As a** parent, **I want** to store up to ten problems for my child, **So that** they drill the exact facts they keep missing.

The second version is clearer, more human, and focused on value. The details live in the acceptance criteria — and Given-When-Then is standard because it's specific, testable, and written from the user's point of view.

**Story points** (Fibonacci: 1, 2, 3, 5, 8, 13) are relative sizing, not hours:
- **1 point**: trivial, no unknowns
- **3 points**: standard story, well-understood
- **5 points**: complex, some unknowns
- **8 points**: very complex, many unknowns
- **13 points**: too big — break it down

In **CSC-289** (the capstone) you'll write dozens of user stories for a team project. Creators who write good stories build the right thing; the ones who write vague requirements build the wrong thing well.

---

## Common Mistakes to Avoid

- **Mistake**: Technical stories — "As a developer, I want to refactor the data model"
  **Better approach**: Stories describe user value. Technical work is a task inside a user-facing story, or a "spike" if it's pure research.

- **Mistake**: Vague acceptance criteria — "the feature works correctly"
  **Better approach**: Specific Given-When-Then you can test. "Works correctly" is subjective; "the eleventh problem is rejected" is testable.

- **Mistake**: Giant stories — 13+ points spanning multiple sprints
  **Better approach**: Break them down. "Build the Memory Bank" becomes: create a set (5), assign it (2), practice it (3), review results (5).

- **Mistake**: No "So that" — just "As a user I want to submit forms"
  **Better approach**: Include the *why*. If you can't explain why a feature matters, maybe it doesn't.

- **Mistake**: Only the happy path in acceptance criteria
  **Better approach**: Include error and edge cases. What happens on the eleventh problem? On a wrong second try? On invalid input?

- **Mistake**: Stories tied to implementation — "As a user I want a PostgreSQL database"
  **Better approach**: Focus on outcomes, not technology. "As a curator I want my sets to persist between sessions" — how you store them is an implementation detail.

---

## Integration with Course Project

In CTS-285, user stories are your requirements for the Dataman build:

**Requirements**:
- Write a solid backlog of user stories for your project (roughly 20–30)
- Each story includes: role, feature, benefit, acceptance criteria, story points, priority
- Submit your user-story backlog in Week 4 (before the first sprint)
- Refine stories throughout the semester as you learn more

**How stories are graded:** through the parent assignment's rubric (the Week 4 User Stories & Product Backlog assignment) — this template carries no points of its own. Check that assignment for the exact criteria and weightings.

**How to write stories for your project**:
1. **Week 3**: brainstorm every feature your system needs (don't filter yet)
2. **Week 3**: group features into epics (Answer Checker, Memory Bank, Games, Curator Console, etc.)
3. **Week 3**: write a user story for each feature
4. **Week 4**: add acceptance criteria (3–5 per story)
5. **Week 4**: estimate story points (solo, and as a team once you're in CSC-289)
6. **Week 4**: prioritize with MoSCoW
7. **Sprint 1**: pull the Must-Have stories that support your first sprint goal
8. **Throughout**: refine as you learn (living document)

**Professional user-story practices**:
- **INVEST**: Independent, Negotiable, Valuable, Estimable, Small, Testable
- **The 3 Cs**: Card (the written story), Conversation (the discussion it prompts), Confirmation (the acceptance criteria)
- **Stories evolve** — the first version is rough and gets refined during backlog grooming

**This skill is career-critical. Employers don't expect a new grad to be an expert coder — they do expect you to understand user stories, write clear requirements, and think from the user's perspective. Learn it now.**
