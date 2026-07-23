<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/User_Story_Template.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk4 + wk14
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# User Story Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Write well-formed user stories that clearly communicate functionality from the user's perspective, with testable acceptance criteria.

---

## When to Use

Throughout the course, especially during requirements gathering (Weeks 3-4) and before sprint planning. Every feature should be a user story before it becomes code.

---

## Instructions

1. **Write from user perspective** - "As a [role]" not "The system shall"
2. **Focus on value** - "So that [benefit]" explains WHY the feature matters
3. **Keep stories small** - Should fit in one sprint (1-8 story points)
4. **Include acceptance criteria** - Use Given-When-Then format
5. **Estimate story points** - Use Fibonacci sequence (1, 2, 3, 5, 8, 13)
6. **Prioritize with MoSCoW** - Must Have, Should Have, Could Have, Won't Have
7. **Add notes** - Technical considerations, dependencies, risks

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

(Add 3-5 acceptance criteria per story)

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
- [Database schema changes]

#### Risks
- [Potential blockers or unknowns]

#### Definition of Done
- [ ] Code written and tested
- [ ] All acceptance criteria met
- [ ] Committed to repository
- [ ] Documentation updated
- [ ] Demo-able

---

## Filled Examples

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

**Given** I have 10+ items in my cart
**When** I try to add an 11th item
**Then** I see a message "Cart limit reached - maximum 10 items"

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
- Store cart in database (not session) so it persists across devices
- Need cart_items table with foreign keys to users and products
- Use AJAX for "Add to Cart" so page doesn't reload
- Consider Redis for cart caching if performance issues

#### Risks
- Stock quantity needs to be checked at time of adding (race condition possible)
- Cart synchronization across multiple browser tabs/devices
- What happens to cart items if product is deleted by admin?

#### Definition of Done
- [x] Code written and tested
- [x] All 5 acceptance criteria pass
- [x] Committed to repository
- [x] API documentation updated
- [x] Demo-able to Product Owner

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
**Then** my assignment is submitted and I see a confirmation with submission timestamp

**Given** the assignment deadline has passed
**When** I try to submit
**Then** I see an error "Deadline has passed - contact instructor for late submission"

**Given** I have already submitted an assignment
**When** I submit again before the deadline
**Then** my previous submission is replaced and I see "Resubmission successful"

**Given** I upload a file larger than 10MB
**When** I try to submit
**Then** I see an error "File size limit exceeded - maximum 10MB"

**Given** I upload a non-PDF file (e.g., .docx, .jpg)
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
- Use AWS S3 for file storage (not database)
- Store file metadata in submissions table (filename, size, upload timestamp)
- Email confirmation to student on successful submission
- Need to handle file type validation on both frontend and backend

#### Risks
- Large file uploads can timeout - need progress indicator
- S3 upload failures need retry logic
- Time zone handling for deadlines (student in different timezone than instructor)

#### Definition of Done
- [x] Code written and tested
- [x] All 5 acceptance criteria pass
- [x] Committed to repository
- [x] S3 integration tested
- [x] Email notification tested
- [x] Demo-able to Product Owner

---

### Example 3: Appointment Scheduling

### User Story [US-007]

**Title**: Receive appointment confirmation email

**As a** patient
**I want** to receive an email confirmation after booking an appointment
**So that** I have a record of my appointment details and can add it to my calendar

---

#### Acceptance Criteria

**Given** I successfully book an appointment
**When** the booking is confirmed
**Then** I receive an email within 2 minutes with appointment date, time, provider, and location

**Given** I receive a confirmation email
**When** I open the email
**Then** I see a calendar file (.ics) attachment that I can add to my calendar app

**Given** the email service is temporarily down
**When** my booking is confirmed
**Then** the system retries email delivery and I receive it within 15 minutes

**Given** I provide an invalid email address
**When** I try to book an appointment
**Then** I see an error "Invalid email format" before booking is confirmed

---

#### Story Details

- **Story Points**: 3
- **Priority**: [x] Should Have [ ] Must Have [ ] Could Have [ ] Won't Have
- **Epic/Theme**: Appointment Booking
- **Sprint**: Sprint 2

#### Dependencies
- Depends on: US-006 (Book appointment)
- Blocks: None

#### Technical Notes
- Use SendGrid API for email delivery
- Need email template with appointment details
- Generate .ics calendar file programmatically
- Store email delivery status in database for troubleshooting

#### Risks
- SendGrid API authentication issues (happened in Sprint 2)
- Email might go to spam folder - need SPF/DKIM configuration
- Calendar file format compatibility across Google/Outlook/Apple

#### Definition of Done
- [x] Code written and tested
- [x] All 4 acceptance criteria pass
- [x] Committed to repository
- [x] Email template approved by Product Owner
- [x] Tested with Gmail, Outlook, Apple Mail
- [x] Demo-able to Product Owner

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
**Then** my report is submitted and I see "Thank you for reporting - moderators will review"

**Given** I submit a report
**When** moderators review the content
**Then** I receive a notification within 24 hours about the outcome (content removed or no violation found)

**Given** I report the same content multiple times
**When** I try to submit duplicate reports
**Then** I see "You have already reported this content"

**Given** multiple users report the same content
**When** 5+ reports are received
**Then** the content is automatically hidden pending moderator review

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
- Need moderation queue in admin dashboard
- Notification system for report outcomes
- Consider ML model for auto-detecting violations (future enhancement)

#### Risks
- False reports could be weaponized to silence users (need abuse detection)
- Moderator workload could be overwhelming (need prioritization)
- Legal liability for content that isn't moderated quickly enough

#### Definition of Done
- [x] Code written and tested
- [x] All 4 acceptance criteria pass
- [x] Committed to repository
- [x] Admin dashboard shows moderation queue
- [x] Notification system tested
- [x] Demo-able to Product Owner

---

### Example 5: Project Management

### User Story [US-018]

**Title**: View project burndown chart

**As a** Scrum Master
**I want** to view a burndown chart for the current sprint
**So that** I can track progress and identify if we're on track to complete committed work

---

#### Acceptance Criteria

**Given** I am in an active sprint
**When** I navigate to the sprint dashboard
**Then** I see a burndown chart showing story points remaining over time

**Given** the sprint is Day 5 of 14
**When** I view the burndown chart
**Then** I see actual progress (red line) compared to ideal burndown (gray line)

**Given** we are behind the ideal burndown
**When** I view the chart
**Then** I see a warning indicator "Behind schedule - scope adjustment may be needed"

**Given** we complete a story
**When** I refresh the dashboard
**Then** the burndown chart updates within 5 minutes to reflect reduced story points remaining

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
- Use Chart.js or D3.js for visualization
- Calculate ideal burndown: story_points / sprint_days
- Pull data from sprint_stories table (completed_date field)
- Cache chart data (recalculate every 5 minutes, not on every page load)

#### Risks
- Chart might be confusing for non-technical Product Owners
- Need to handle weekends (don't show weekends on chart)
- First sprint has no historical data for ideal burndown

#### Definition of Done
- [x] Code written and tested
- [x] All 4 acceptance criteria pass
- [x] Committed to repository
- [x] Chart renders correctly on mobile
- [x] Chart tested with edge cases (zero stories, all stories completed Day 1)
- [x] Demo-able to Product Owner

---

## Why This Matters

User stories are the language of Agile software development. Every major tech company (Google, Amazon, Microsoft, Netflix, Airbnb) uses user stories to communicate requirements.

Why user stories work:

1. **User-centered** - Forces you to think about WHO uses the feature and WHY they need it
2. **Conversation starter** - Stories aren't complete specs, they're prompts for discussion
3. **Testable** - Acceptance criteria give you clear pass/fail tests
4. **Right-sized** - Stories are small enough to complete in a sprint
5. **Prioritizable** - MoSCoW method lets you defer nice-to-haves

**User stories replace traditional requirements documents** (100-page PDFs that nobody reads). Instead of:
> "The system shall provide functionality to allow authorized users to add products to a persistent shopping cart with validation of inventory levels and enforcement of cart item limits."

You write:
> **As a** customer, **I want** to add items to my cart, **So that** I can purchase multiple products together.

Second version is clearer, more human, and focuses on value.

The acceptance criteria are where details live. Given-When-Then format is standard because it's:
- **Specific**: Clear pass/fail conditions
- **Testable**: Can be automated as tests
- **User-focused**: Describes behavior from user perspective

**Story points** (Fibonacci: 1, 2, 3, 5, 8, 13) are relative sizing, not hours:
- **1 point**: Trivial, 1-2 hours, no unknowns
- **3 points**: Standard story, half a day, well-understood
- **5 points**: Complex story, 1 day, some unknowns
- **8 points**: Very complex, 1-2 days, many unknowns
- **13 points**: Too big, break it down into smaller stories

Teams estimate story points together (Planning Poker) because group estimates are more accurate than individual estimates.

In CSC-289 (capstone), you'll write 40-60 user stories for your project. Students who write good stories build good software. Students who write vague requirements build the wrong thing.

---

## Common Mistakes to Avoid

- **Mistake**: Technical stories - "As a developer, I want to refactor the database schema"
  **Better approach**: Stories describe user value. Technical work is a task within a user-facing story, or a "spike" (research story) if it's pure exploration.

- **Mistake**: Vague acceptance criteria - "The feature works correctly"
  **Better approach**: Specific Given-When-Then scenarios you can test. "Works correctly" is subjective. "User sees confirmation message" is testable.

- **Mistake**: Giant stories - 13+ story points that take multiple sprints
  **Better approach**: Break into smaller stories. "Build shopping cart" becomes: Add item (5pts), Remove item (2pts), Update quantity (2pts), View cart (3pts).

- **Mistake**: No "so that" clause - just "As a user I want to submit forms"
  **Better approach**: Include the WHY. "So that I can provide information without calling support." If you can't explain why a feature matters, maybe it doesn't.

- **Mistake**: Missing edge cases in acceptance criteria - only testing happy path
  **Better approach**: Include error cases, boundary conditions, edge cases. What happens when data is invalid? When API is down? When user tries twice?

- **Mistake**: Stories dependent on implementation details - "As a user I want a PostgreSQL database"
  **Better approach**: Focus on outcomes, not technology. "As a user I want my data to persist across sessions" (how you store it is implementation detail).

---

## Integration with Course Project

In CTS-285, user stories are your requirements:

**Requirements**:
- Write 20-30 user stories for your semester project
- Each story includes: role, feature, benefit, acceptance criteria, story points, priority
- Submit user story backlog in Week 4 (before first sprint)
- Refine stories throughout semester as you learn more

**Grading criteria**:
- **Format** (20%): Follows "As a/I want/So that" format, includes Given-When-Then criteria
- **Clarity** (30%): Specific, unambiguous, testable
- **Completeness** (30%): Covers all major features, includes edge cases
- **Sizing** (20%): Story points are reasonable, stories fit in one sprint

**How to write stories for your project**:
1. **Week 3**: Brainstorm all features your system needs (don't filter yet)
2. **Week 3**: Group features into epics (Shopping Cart, User Auth, Admin Dashboard, etc.)
3. **Week 3**: Write user stories for each feature
4. **Week 4**: Add acceptance criteria (3-5 per story)
5. **Week 4**: Estimate story points as a team (or individually if solo project)
6. **Week 4**: Prioritize with MoSCoW
7. **Week 5**: Select Must Have stories for Sprint 1
8. **Throughout**: Refine stories as you learn more (living document)

**Professional user story practices**:
- **INVEST criteria**: Independent, Negotiable, Valuable, Estimable, Small, Testable
- **3 Cs**: Card (written on index card in physical Scrum), Conversation (story is discussion prompt), Confirmation (acceptance criteria)
- **Product Owner writes stories** but team refines them together
- **Stories evolve** - initial version is rough, gets refined during backlog grooming

**In professional development**:
- Product Manager or Product Owner writes stories
- Team estimates story points together in sprint planning
- Developers break stories into technical tasks
- QA writes test cases from acceptance criteria
- Stories are never "done" being refined until they're built

**This skill is career-critical. Employers don't expect new grads to be expert coders. They DO expect you to understand user stories, write clear requirements, and think from user perspective. Learn this now.**
