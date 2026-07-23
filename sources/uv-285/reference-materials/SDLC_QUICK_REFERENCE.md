<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/reference-materials/SDLC_QUICK_REFERENCE.md
  verdict: KEEP
  target-26FA-slot: CTS-285 all weeks (reference)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CTS-285 SDLC Quick Reference Cards

Copy/paste templates and decision trees for common Systems Analysis & Design tasks

---

## How to Use This Reference

**Quick Start**: Ctrl+F to find what you need, copy the template, adapt to your project.

**Format**: All templates include inline comments explaining sections.

**Assumptions**: You're working on a semester-long project using Agile/Scrum methodology.

---

## 1. SDLC Phase Checklist

### Phase 1: Planning (Week 1-2)

**Deliverables**:
- [ ] Project charter (problem statement, goals, scope)
- [ ] Stakeholder identification
- [ ] Feasibility assessment (technical, economic, operational)
- [ ] Initial timeline and milestones

**Key Questions**:
- What problem are we solving?
- Who are the stakeholders?
- Is this project feasible (time, budget, skills)?
- What's in scope vs out of scope?

---

### Phase 2: Requirements (Week 3-4)

**Deliverables**:
- [ ] User stories (20-30 stories with acceptance criteria)
- [ ] Product backlog (prioritized with MoSCoW)
- [ ] Non-functional requirements
- [ ] Initial wireframes/mockups

**Key Questions**:
- Who are the users and what do they need?
- What are the Must Have vs Nice to Have features?
- What are performance/security/usability requirements?
- What data do we need to collect and store?

---

### Phase 3: Design (Week 4-5)

**Deliverables**:
- [ ] Database schema (ERD)
- [ ] System architecture diagram
- [ ] UI/UX wireframes
- [ ] API endpoint design
- [ ] Technology stack decisions

**Key Questions**:
- What's our database structure?
- What's our system architecture (frontend, backend, database)?
- What technologies will we use (Flask, React, PostgreSQL, etc.)?
- How will components communicate (REST API, GraphQL)?

---

### Phase 4: Implementation (Week 5-12)

**Deliverables**:
- [ ] Working software increments (5 sprints)
- [ ] Unit and integration tests
- [ ] Code reviews and merge commits
- [ ] Sprint retrospectives and velocity tracking

**Key Questions**:
- Are we delivering working increments every sprint?
- Are we meeting Definition of Done?
- Is velocity consistent or erratic?
- Are we adapting based on retrospectives?

---

### Phase 5: Testing (Week 11-13)

**Deliverables**:
- [ ] Test plan and test cases
- [ ] Automated test suite
- [ ] Bug tracking and resolution
- [ ] User acceptance testing (UAT)

**Key Questions**:
- Do all acceptance criteria pass?
- Are edge cases and error scenarios tested?
- Can real users complete key workflows?
- Are critical bugs resolved?

---

### Phase 6: Deployment (Week 13-14)

**Deliverables**:
- [ ] Production deployment
- [ ] Deployment documentation
- [ ] User documentation
- [ ] Monitoring and logging setup

**Key Questions**:
- Is the system deployed and accessible?
- Do we have rollback capability?
- Is monitoring in place to detect issues?
- Can users complete workflows in production?

---

### Phase 7: Maintenance (Post-deployment)

**Deliverables**:
- [ ] Bug fixes and patches
- [ ] Performance monitoring
- [ ] User feedback collection
- [ ] Feature enhancements (future sprints)

---

## 2. User Story Format

### Template

```markdown
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

---

#### Story Details
- **Story Points**: ___ (1, 2, 3, 5, 8, 13)
- **Priority**: Must Have / Should Have / Could Have / Won't Have
- **Sprint**: Sprint ___ (or Backlog)
- **Dependencies**: [Story IDs this depends on]
```

### Example 1: Authentication

```markdown
### User Story [US-003]

**Title**: User login with email and password

**As a** registered user
**I want** to log in with my email and password
**So that** I can access my account and personal information

---

#### Acceptance Criteria

**Given** I have a registered account
**When** I enter valid email and password and click "Login"
**Then** I am redirected to my dashboard and see welcome message

**Given** I enter an invalid email format
**When** I click "Login"
**Then** I see error "Invalid email format"

**Given** I enter wrong password
**When** I click "Login"
**Then** I see error "Invalid credentials" (don't specify if email or password is wrong for security)

**Given** my account is locked (3 failed attempts)
**When** I try to log in
**Then** I see "Account locked - reset your password"

---

#### Story Details
- **Story Points**: 5
- **Priority**: Must Have
- **Sprint**: Sprint 1
- **Dependencies**: US-001 (Database setup), US-002 (User registration)
```

### Example 2: E-commerce

```markdown
### User Story [US-015]

**Title**: Add product to shopping cart

**As a** customer
**I want** to add products to my cart
**So that** I can purchase multiple items together

---

#### Acceptance Criteria

**Given** I am viewing a product page
**When** I click "Add to Cart"
**Then** the product is added to my cart and I see confirmation "Added to cart"

**Given** I add the same product twice
**When** I add it again
**Then** the quantity increases by 1 instead of duplicating the item

**Given** a product is out of stock
**When** I try to add it to cart
**Then** I see error "Out of stock - notify me when available"

**Given** my cart has 10 items (limit)
**When** I try to add an 11th item
**Then** I see error "Cart limit reached (10 items)"

---

#### Story Details
- **Story Points**: 5
- **Priority**: Must Have
- **Sprint**: Sprint 2
- **Dependencies**: US-012 (Product catalog), US-013 (Cart database schema)
```

---

## 3. Acceptance Criteria Patterns

### Pattern 1: Form Validation

```gherkin
**Given** I am on the [form name] page
**When** I submit the form with [valid/invalid] data
**Then** I see [success message / error message]
```

**Example**:
```gherkin
**Given** I am on the registration form
**When** I submit with valid email, password (8+ chars), and matching confirmation
**Then** I see "Account created successfully - check email for verification"

**Given** I am on the registration form
**When** I submit with password shorter than 8 characters
**Then** I see error "Password must be at least 8 characters"
```

---

### Pattern 2: CRUD Operations

**Create**:
```gherkin
**Given** I have permission to create [entity]
**When** I submit valid data
**Then** the [entity] is created and I see confirmation
```

**Read**:
```gherkin
**Given** [entities] exist in the system
**When** I navigate to [list page]
**Then** I see all [entities] I have permission to view
```

**Update**:
```gherkin
**Given** I am viewing an existing [entity]
**When** I edit fields and save
**Then** the changes are saved and I see "Updated successfully"
```

**Delete**:
```gherkin
**Given** I am viewing an [entity] I own
**When** I click "Delete" and confirm
**Then** the [entity] is deleted and removed from the list
```

---

### Pattern 3: Authentication & Authorization

```gherkin
**Given** I am [logged in / not logged in]
**When** I try to access [protected resource]
**Then** I [see the resource / am redirected to login]
```

**Example**:
```gherkin
**Given** I am not logged in
**When** I try to access the dashboard page
**Then** I am redirected to the login page with message "Please log in to continue"

**Given** I am logged in as a regular user (not admin)
**When** I try to access the admin panel
**Then** I see "403 Forbidden - Insufficient permissions"
```

---

### Pattern 4: Error Handling

```gherkin
**Given** [error condition exists]
**When** [action is attempted]
**Then** I see user-friendly error message and system recovers gracefully
```

**Example**:
```gherkin
**Given** the database connection is lost
**When** I try to save my booking
**Then** I see "Service temporarily unavailable - try again in a moment" and my data is not lost
```

---

## 4. Story Point Estimation Guide

### Fibonacci Scale

| Points | Complexity | Time Estimate | Examples |
|--------|-----------|---------------|----------|
| **1** | Trivial | 1-2 hours | Fix typo, update text, simple CSS change |
| **2** | Simple | 2-4 hours | Add validation, simple CRUD endpoint, basic form |
| **3** | Standard | 4-8 hours | Login page, list view with filtering, email template |
| **5** | Complex | 1-2 days | User registration with email verification, booking flow |
| **8** | Very Complex | 2-3 days | Authentication system, payment integration, reporting dashboard |
| **13** | Epic | 3-5 days | **Too big - break it down!** |
| **21+** | Too Large | **Always break down** | Never estimate this high |

---

### Estimation Examples

#### E-commerce System

| Story | Points | Reasoning |
|-------|--------|-----------|
| Display product list | 2 | Simple DB query + template |
| Add product to cart | 5 | Multiple scenarios, cart logic, session management |
| Checkout flow | 8 | Payment integration, validation, confirmation email |
| Admin product management | 13 → Split | Break into: Add product (3), Edit product (2), Delete product (2), Image upload (5) |

#### Appointment Booking System

| Story | Points | Reasoning |
|-------|--------|-----------|
| View available time slots | 3 | DB query with filtering, calendar display |
| Book appointment | 5 | Validation, double-booking prevention, confirmation |
| Email confirmation | 3 | SendGrid integration, template, error handling |
| Admin dashboard | 13 → Split | Break into: View all bookings (5), Filter/search (3), Cancel booking (2), Export to CSV (3) |

---

### When to Add Story Points

**Add points for**:
- Complexity of logic
- Number of edge cases
- External dependencies (APIs, third-party services)
- Unknowns (learning new technology)
- Testing requirements

**Don't inflate points for**:
- Personal speed ("I work slowly")
- Distractions (meetings, other coursework)
- Team coordination overhead

**Use average team member as baseline** - not your fastest or slowest developer.

---

## 5. Sprint Ceremony Cheat Sheet

### Sprint Planning (2 hours for 2-week sprint)

**When**: Start of sprint (Week 5, 9, 13)

**Who**: Entire team + Product Owner

**Agenda**:
1. Review product backlog (15 min)
2. Define sprint goal (15 min)
3. Calculate capacity (15 min)
4. Select user stories (30 min)
5. Break stories into tasks (45 min)

**Outputs**: Sprint goal, sprint backlog, task breakdown

---

### Daily Standup (15 minutes)

**When**: Every day during sprint (async in CTS-285)

**Who**: Development team (Product Owner optional)

**Format**: Each person answers 3 questions:
1. What did I do yesterday?
2. What will I do today?
3. Any blockers?

**Rules**:
- Time-boxed to 15 minutes
- Not a problem-solving session (take problems offline)
- Focus on coordination, not status reporting

---

### Sprint Review (1 hour)

**When**: End of sprint (Week 6, 10, 14)

**Who**: Team + stakeholders (Andrew, classmates)

**Agenda**:
1. Demo completed user stories (30 min)
2. Gather stakeholder feedback (20 min)
3. Update product backlog (10 min)

**Rules**:
- Only demo stories that meet Definition of Done
- Live demo, not slide presentation
- Focus on functionality, not code

---

### Sprint Retrospective (45 minutes)

**When**: After sprint review, before next sprint planning

**Who**: Development team only (safe space)

**Agenda**:
1. Review previous retrospective action items (10 min)
2. What went well? (10 min)
3. What didn't go well? (10 min)
4. What will we improve? (10 min)
5. Define 3-5 action items with owners (5 min)

**Output**: Action items for next sprint

---

## 6. UML Diagram Quick Reference

### Class Diagram (Database Schema)

```
┌─────────────────────┐
│      Users          │
├─────────────────────┤
│ - id: int (PK)      │
│ - email: string     │
│ - password: string  │
│ - created_at: date  │
├─────────────────────┤
│ + register()        │
│ + login()           │
│ + reset_password()  │
└─────────────────────┘
         │
         │ 1
         │
         │ has many
         │
         ▼ *
┌─────────────────────┐
│    Appointments     │
├─────────────────────┤
│ - id: int (PK)      │
│ - user_id: int (FK) │
│ - date: date        │
│ - time: time        │
│ - status: string    │
└─────────────────────┘
```

**Relationships**:
- `1` to `*` (one-to-many): One user has many appointments
- `1` to `1` (one-to-one): One user has one profile
- `*` to `*` (many-to-many): Many students enroll in many courses (needs junction table)

---

### Sequence Diagram (Booking Flow)

```
User          Frontend       Backend        Database       Email Service
  │               │             │               │                 │
  │ View calendar │             │               │                 │
  ├──────────────>│ GET /slots  │               │                 │
  │               ├────────────>│ Query slots   │                 │
  │               │             ├──────────────>│                 │
  │               │             │<───────────────┤                 │
  │               │<────────────┤ Return JSON   │                 │
  │<──────────────┤ Show slots  │               │                 │
  │               │             │               │                 │
  │ Select time   │             │               │                 │
  ├──────────────>│ POST /book  │               │                 │
  │               ├────────────>│ Validate      │                 │
  │               │             ├──────────────>│ Check available │
  │               │             │<───────────────┤                 │
  │               │             ├──────────────>│ Insert booking  │
  │               │             │<───────────────┤                 │
  │               │             ├────────────────────────────────>│ Send email
  │               │             │               │<─────────────────┤
  │               │<────────────┤ Return success│                 │
  │<──────────────┤ Show confirm│               │                 │
```

---

## 7. Risk Assessment Matrix

### Likelihood × Impact = Risk Score

|                | **Impact: 1 (Minimal)** | **Impact: 2 (Minor)** | **Impact: 3 (Moderate)** | **Impact: 4 (Major)** | **Impact: 5 (Catastrophic)** |
|----------------|-------------------------|-----------------------|--------------------------|------------------------|------------------------------|
| **Likelihood: 5 (Almost Certain)** | 5 (Low) | 10 (Medium) | **15 (High)** | **20 (High)** | **25 (High)** |
| **Likelihood: 4 (Likely)** | 4 (Low) | 8 (Medium) | **12 (High)** | **16 (High)** | **20 (High)** |
| **Likelihood: 3 (Possible)** | 3 (Low) | 6 (Medium) | 9 (Medium) | **12 (High)** | **15 (High)** |
| **Likelihood: 2 (Unlikely)** | 2 (Low) | 4 (Low) | 6 (Medium) | 8 (Medium) | 10 (Medium) |
| **Likelihood: 1 (Rare)** | 1 (Low) | 2 (Low) | 3 (Low) | 4 (Low) | 5 (Low) |

**Risk Prioritization**:
- **High (12-25)**: Urgent mitigation required, track weekly
- **Medium (6-11)**: Plan mitigation, monitor regularly
- **Low (1-5)**: Monitor, no immediate action needed

---

### Example Risk Assessments

| Risk | Likelihood | Impact | Score | Priority |
|------|-----------|--------|-------|----------|
| SendGrid quota exceeded | 4 | 4 | 16 | HIGH |
| Team member sick 1 day | 3 | 2 | 6 | MEDIUM |
| Database migration fails | 2 | 5 | 10 | MEDIUM |
| CSS takes longer than expected | 3 | 2 | 6 | MEDIUM |
| Heroku deployment fails | 3 | 4 | 12 | HIGH |
| Code merge conflicts | 4 | 2 | 8 | MEDIUM |
| Scope creep mid-sprint | 4 | 3 | 12 | HIGH |
| Learning Flask slower than planned | 3 | 3 | 9 | MEDIUM |

---

## 8. Code Review Checklist

### Before Submitting PR

- [ ] Code works locally (tested manually)
- [ ] All tests pass (`pytest` or equivalent)
- [ ] No debug print statements left in code
- [ ] Code follows project style guide
- [ ] Meaningful commit messages
- [ ] PR description explains what and why
- [ ] Linked to relevant user story/issue

---

### When Reviewing PR

#### Functionality
- [ ] Code meets acceptance criteria
- [ ] Edge cases handled (empty input, null values, errors)
- [ ] Error messages are user-friendly
- [ ] No obvious bugs

#### Code Quality
- [ ] Functions are small and single-purpose
- [ ] Variable names are descriptive (`user_email` not `x`)
- [ ] No duplicated code (DRY principle)
- [ ] Comments explain "why" not "what"

#### Security
- [ ] User input is validated and sanitized
- [ ] SQL queries use parameterization (no SQL injection)
- [ ] Passwords are hashed, not plain text
- [ ] API keys are in environment variables, not hardcoded

#### Testing
- [ ] Tests cover happy path and error cases
- [ ] Tests are independent (don't depend on order)
- [ ] Test names clearly describe what they test

#### Documentation
- [ ] README updated if needed
- [ ] API endpoints documented
- [ ] Database schema changes documented

---

### Code Review Comments Template

**Approve**:
```
LGTM! (Looks Good To Me)
- Booking validation logic is solid
- Good test coverage
- Approved for merge
```

**Request Changes**:
```
Requesting changes:
- Line 45: SQL query is vulnerable to injection - use parameterized query
- Line 78: Function name `do_stuff()` is not descriptive - rename to `validate_booking()`
- Missing tests for edge case: what happens if date is in the past?

Otherwise looks good! Make these changes and I'll re-review.
```

**Ask Questions**:
```
A few questions before I approve:
- Line 32: Why are we using setTimeout here? Could this cause race condition?
- Line 56: Does this handle timezone conversion properly?
- Should we add logging here for debugging?
```

---

## 9. Deployment Checklist

### Pre-Deployment (Week 12)

- [ ] All features complete and tested
- [ ] All tests passing locally
- [ ] Database migrations tested
- [ ] Environment variables documented
- [ ] Deployment documentation written
- [ ] Rollback plan prepared

---

### Deploy to Staging (Week 12-13)

- [ ] Deploy code to staging environment
- [ ] Run database migrations on staging
- [ ] Smoke test: Can users log in?
- [ ] Integration test: Complete key user flows
- [ ] Performance test: Load times acceptable?
- [ ] Fix any staging issues before production

---

### Deploy to Production (Week 13-14)

- [ ] Backup production database
- [ ] Deploy code to production
- [ ] Run database migrations
- [ ] Verify environment variables set
- [ ] Smoke test: Homepage loads, login works
- [ ] Monitor logs for errors (first 15 minutes)
- [ ] Test critical user flows end-to-end
- [ ] Notify stakeholders (Andrew) deployment is complete

---

### Post-Deployment

- [ ] Monitor application for 24 hours
- [ ] Check error logs daily
- [ ] Fix any critical bugs immediately
- [ ] Update documentation with production URL
- [ ] Schedule post-mortem (what went well, what didn't)

---

## 10. GitHub Projects Workflow

### Board Setup

**Columns**:
1. **Backlog**: All user stories, prioritized top to bottom
2. **Sprint [#]**: Stories committed for current sprint
3. **In Progress**: Currently being worked on (limit to 3 per person)
4. **In Review**: PR open, waiting for code review
5. **Done**: Meets Definition of Done

---

### Workflow

1. **Sprint Planning**: Move stories from Backlog → Sprint [#]
2. **Start work**: Move story from Sprint [#] → In Progress
3. **Create PR**: Move story to In Review
4. **After approval**: Merge PR, move story to Done
5. **Sprint end**: Archive Done column, create new Sprint column

---

### GitHub Issue Template

```markdown
### User Story [US-###]

**As a** [role]
**I want** [feature]
**So that** [benefit]

---

#### Acceptance Criteria
- [ ] Given [context], When [action], Then [outcome]
- [ ] Given [context], When [action], Then [outcome]

---

#### Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

---

**Story Points**: ___
**Priority**: Must Have / Should Have / Could Have
**Sprint**: Sprint ___
```

---

### Automation Rules

**Automate with GitHub Actions**:

```yaml
# .github/workflows/project-automation.yml
name: Project Automation

on:
  pull_request:
    types: [opened, closed]

jobs:
  move-card:
    runs-on: ubuntu-latest
    steps:
      - name: Move to In Review when PR opened
        if: github.event.action == 'opened'
        run: echo "Move card to In Review column"

      - name: Move to Done when PR merged
        if: github.event.pull_request.merged == true
        run: echo "Move card to Done column"
```

---

## 11. Flask Project Structure

### Standard Folder Layout

```
project-root/
├── app/
│   ├── __init__.py           # Flask app factory
│   ├── models.py             # Database models
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py           # Login, logout, register
│   │   ├── appointments.py   # Booking routes
│   │   └── admin.py          # Admin routes
│   ├── templates/
│   │   ├── base.html         # Base template
│   │   ├── login.html
│   │   ├── register.html
│   │   └── dashboard.html
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   └── utils/
│       ├── email.py          # Email sending functions
│       └── validators.py     # Input validation
├── tests/
│   ├── test_auth.py
│   ├── test_appointments.py
│   └── test_models.py
├── migrations/               # Database migrations
├── .env                      # Environment variables (DO NOT COMMIT)
├── .env.example              # Example env vars (commit this)
├── .gitignore
├── requirements.txt          # Python dependencies
├── config.py                 # Configuration settings
└── README.md
```

---

### Minimal Flask App Template

```python
# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import os

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)

    # Config
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

    # Initialize extensions
    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    # Register blueprints
    from app.routes import auth, appointments
    app.register_blueprint(auth.bp)
    app.register_blueprint(appointments.bp)

    return app
```

```python
# run.py
from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 12. Environment Variables Setup

### `.env` file (DO NOT COMMIT)

```bash
# Flask
SECRET_KEY=your-super-secret-key-here
FLASK_ENV=development
FLASK_APP=run.py

# Database
DATABASE_URL=postgresql://user:password@localhost/booking_db

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Heroku (if deploying)
HEROKU_APP_NAME=booking-system-prod
```

---

### `.env.example` file (COMMIT THIS)

```bash
# Flask
SECRET_KEY=your-secret-key-here
FLASK_ENV=development
FLASK_APP=run.py

# Database
DATABASE_URL=postgresql://user:password@localhost/dbname

# SendGrid
SENDGRID_API_KEY=your-sendgrid-api-key

# Heroku (if deploying)
HEROKU_APP_NAME=your-app-name
```

---

### Loading Environment Variables

```python
# config.py
import os
from dotenv import load_dotenv

load_dotenv()  # Load .env file

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
```

---

## Tips for Using Quick Reference Cards

1. **Bookmark this file**: You'll reference it constantly
2. **Ctrl+F is essential**: Search for what you need
3. **Copy templates, don't memorize**: Understanding > memorization
4. **Adapt to your project**: Examples are guides, not rigid rules
5. **Reference during sprint planning**: Use estimation guide, ceremony cheat sheet

---

**Last Updated**: CTS-285 Spring 2026

Found an error or want to add a common pattern? Let Andrew know.
