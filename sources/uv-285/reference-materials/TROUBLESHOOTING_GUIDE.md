<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/reference-materials/TROUBLESHOOTING_GUIDE.md
  verdict: KEEP
  target-26FA-slot: CTS-285 all weeks (reference)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CTS-285 Troubleshooting Guide

Solutions to 40+ common problems in Systems Analysis & Design projects

---

## How to Use This Guide

**Search**: Use Ctrl+F (Cmd+F) to find your problem
**Format**: Problem → Symptoms → Cause → Solution → Prevention
**Categories**: User Stories, Sprint Planning, GitHub, Design, Flask, Deployment, Teams, Documentation

---

## Category 1: User Story Problems

### Problem 1: User stories too vague

**Symptoms**: Team doesn't know how to implement story. During sprint, constant questions "What did we mean by this?"

**Cause**: Story lacks acceptance criteria or "so that" clause. Written from technical perspective, not user perspective.

**Solution**:
1. Add specific acceptance criteria using Given-When-Then format
2. Include "so that [benefit]" clause explaining user value
3. Review with Product Owner before sprint planning
4. Add example scenarios to clarify intent

**Example**:
**Bad**: "As a user, I want a dashboard"
**Good**: "As a patient, I want to view my upcoming appointments on a dashboard so that I can see my schedule at a glance"
- Given I have 3 appointments scheduled, When I load dashboard, Then I see all 3 appointments sorted by date

**Prevention**: Use the User Story Template. Never accept a story without acceptance criteria and "so that" clause.

---

### Problem 2: User stories are too large (13+ points)

**Symptoms**: Story spans multiple sprints. Team can't complete story in one sprint. Story sits "in progress" for weeks.

**Cause**: Story is really an epic (collection of stories), not a single story.

**Solution**:
1. Break story into smaller stories (3-5 points each)
2. Each smaller story should deliver value independently
3. Use common split patterns:
   - CRUD: Create, Read, Update, Delete as separate stories
   - User types: Admin user story, regular user story
   - Workflows: Step 1, Step 2, Step 3 as separate stories
   - Platforms: Web version, mobile version

**Example**:
**Too big**: "Admin dashboard" (13 points)
**Split into**:
- US-025: View all bookings (5 pts)
- US-026: Filter bookings by date (3 pts)
- US-027: Cancel booking (2 pts)
- US-028: Export to CSV (3 pts)

**Prevention**: In sprint planning, if story is estimated 13+, immediately discuss how to split it.

---

### Problem 3: Acceptance criteria missing edge cases

**Symptoms**: Story seems complete but breaks when users do unexpected things. Bugs discovered after marking story "done."

**Cause**: Acceptance criteria only cover happy path (everything works perfectly), not error cases.

**Solution**:
1. Add error case acceptance criteria:
   - What if input is invalid?
   - What if database is down?
   - What if user isn't logged in?
   - What if data is missing?
2. Add boundary conditions:
   - Empty lists
   - Maximum limits
   - Null values

**Example**:
**Happy path only**:
- Given I enter email and password, When I click Login, Then I am logged in

**Add error cases**:
- Given I enter invalid email format, When I click Login, Then I see "Invalid email"
- Given I enter wrong password, When I click Login, Then I see "Invalid credentials"
- Given my account is locked, When I try to login, Then I see "Account locked"

**Prevention**: During story refinement, ask "What can go wrong?" for every acceptance criterion.

---

### Problem 4: Stories don't align with sprint goal

**Symptoms**: Sprint ends with completed stories but no coherent deliverable. Can't demo a working feature.

**Cause**: Selected random stories from backlog without considering how they work together.

**Solution**:
1. Define sprint goal FIRST: "Deliver working booking system"
2. Select stories that support that goal
3. Reject stories that don't contribute to sprint goal (even if they're high priority)
4. Every story in sprint should relate to sprint goal

**Example**:
**Bad sprint**: Login (US-003), Admin CSV export (US-028), Email confirmation (US-007) - unrelated stories
**Good sprint**: View available slots (US-005), Book appointment (US-006), Email confirmation (US-007) - complete booking workflow

**Prevention**: In sprint planning, write sprint goal on whiteboard. Before adding story, ask "Does this support our sprint goal?"

---

## Category 2: Sprint Planning Issues

### Problem 5: Team overcommits every sprint

**Symptoms**: Sprint ends with stories incomplete. Velocity is 12 but team commits to 20 points. Stress and burnout.

**Cause**: Optimism bias ("We'll work harder this sprint"). Pressure to commit to everything. Ignoring historical velocity.

**Solution**:
1. Use historical velocity as capacity: If last 3 sprints averaged 12 points, commit to 12 points max
2. Reserve 20% buffer capacity for unknowns
3. Say no to pressure: "We'd love to do all 20 points, but our velocity says 12 is realistic"
4. Better to under-commit and overdeliver than opposite

**Example**:
Sprint 1 velocity: 11 points
Sprint 2 velocity: 13 points
Sprint 3 velocity: 12 points
**Average: 12 points**
**Sprint 4 commitment**: 10 points (with 2-point buffer)

**Prevention**: Track velocity in spreadsheet. During sprint planning, display velocity chart. Make data visible.

---

### Problem 6: Poor story point estimates

**Symptoms**: 3-point story takes 3 days. 8-point story takes 2 hours. Estimates are wildly inaccurate.

**Cause**: Estimating in hours, not relative complexity. Individual estimates instead of team estimates. No calibration.

**Solution**:
1. Use Planning Poker (team estimates together)
2. Reference previous stories: "This is similar to US-005 which was 5 points"
3. Estimate complexity/uncertainty, not time
4. After sprint, review estimates vs actual (calibration)
5. Use Fibonacci scale correctly:
   - 1: Trivial, obvious
   - 3: Standard story
   - 5: Complex, some unknowns
   - 8: Very complex, many unknowns
   - 13+: Too big, break down

**Prevention**: Keep a "reference stories" list. "US-005 (view appointments) was 3 points and took half a day. This story is similar."

---

### Problem 7: Sprint goal is vague

**Symptoms**: Team doesn't know what success looks like. Sprint ends and team debates whether goal was achieved.

**Cause**: Sprint goal like "make progress on project" or "complete some user stories."

**Solution**:
1. Sprint goal must be specific and demo-able
2. Format: "Deliver [feature] where [users] can [action] and [outcome]"
3. Goal should be achievable in one sprint
4. Team should be able to demo sprint goal at sprint review

**Example**:
**Bad**: "Make progress on booking system"
**Good**: "Deliver working booking flow where patients can view available slots, select a time, book appointment, and receive email confirmation"

**Prevention**: Before leaving sprint planning, write sprint goal and ask "Can we demo this in 2 weeks? Is success clear?"

---

### Problem 8: No capacity adjustment for learning curve

**Symptoms**: Sprint velocity crashes when learning new technology. Team commits to 12 points but completes 5 because spending time learning Flask.

**Cause**: Didn't account for time spent learning new frameworks, tools, languages.

**Solution**:
1. First sprint with new tech: Reduce capacity by 40-50%
2. Add "spike" (research) story: "Spike: Learn Flask basics (4 hours, 0 points)"
3. Inflate story points for stories using new tech
4. Budget learning time in tasks: "Complete Flask tutorial (3 hours)" as task

**Example**:
Normal velocity: 12 points
First sprint with Flask: Commit to 6-8 points + 4-hour Flask learning spike
Second sprint with Flask: Back to 10-12 points (learning curve flattening)

**Prevention**: During sprint planning, identify new technologies. Adjust capacity accordingly. Don't pretend learning is instant.

---

## Category 3: GitHub Projects Issues

### Problem 9: Automation not working (cards don't move automatically)

**Symptoms**: Merge PR but card stays in "In Progress." Have to manually drag cards to "Done."

**Cause**: GitHub Projects automation rules not configured. Using Classic Projects instead of new Projects (beta).

**Solution**:
1. Use new GitHub Projects (not Classic)
2. Set up automation:
   - When issue is closed → Move to Done
   - When PR is merged → Move to Done
   - When PR is opened → Move to In Review
3. Link issues to PRs: Use "Closes #123" in PR description

**Example automation workflow**:
```
Issue created → Backlog
Issue added to sprint → Sprint [#]
Developer starts work → In Progress
PR opened → In Review
PR merged → Done
```

**Prevention**: Set up automation rules during Sprint 0 (project setup). Test with dummy issue before sprint starts.

---

### Problem 10: Wrong labels or inconsistent labeling

**Symptoms**: Can't filter issues by type. Labels like "bug", "Bug", "BUG" coexist. Unclear what labels mean.

**Cause**: No label convention established. Team members create labels ad-hoc.

**Solution**:
1. Define standard labels:
   - **Type**: `user-story`, `bug`, `spike`, `task`
   - **Priority**: `must-have`, `should-have`, `could-have`
   - **Status**: `blocked`, `needs-review`, `in-progress`
   - **Sprint**: `sprint-1`, `sprint-2`, etc.
2. Delete duplicate labels
3. Document labels in README
4. Only Product Owner creates new labels

**Prevention**: Create labels during project setup. Add label definitions to README. During sprint planning, apply labels to all stories.

---

### Problem 11: Milestone confusion (sprints vs milestones)

**Symptoms**: Not sure whether to use sprints, milestones, or both. Milestones don't match sprint boundaries.

**Cause**: GitHub terminology is confusing. Milestones are deadline-based, sprints are time-boxed.

**Solution**:
Use milestones for sprints:
1. Create milestone for each sprint: "Sprint 1", "Sprint 2"
2. Set milestone due date to sprint end date
3. Assign stories to sprint milestone during sprint planning
4. GitHub shows progress: "5 of 8 issues closed"

**Example**:
- **Milestone: Sprint 1** (Due: Feb 14) - US-001, US-002, US-003
- **Milestone: Sprint 2** (Due: Feb 28) - US-004, US-005, US-006

**Prevention**: Create all sprint milestones at project start. Name consistently: "Sprint 1", "Sprint 2" (not "First Sprint", "Sprint Two").

---

## Category 4: Design Tool Problems

### Problem 12: Figma sharing / permissions issues

**Symptoms**: Teammate can't view Figma wireframes. Andrew can't see your designs.

**Cause**: Figma file is private or "View only" instead of "Can edit."

**Solution**:
1. Set Figma file permissions to "Anyone with link can view"
2. For team: "Anyone with link can edit"
3. Share link in README and submit to Andrew
4. Test link in incognito window to verify access

**Prevention**: When creating Figma file, immediately set sharing to "Anyone with link." Test link before sharing with team/Andrew.

---

### Problem 13: Draw.io / Lucidchart export issues

**Symptoms**: ERD or UML diagram doesn't display in GitHub. Image is corrupt or won't load.

**Cause**: Exported as proprietary format instead of PNG/SVG.

**Solution**:
1. Export as PNG or SVG (not .drawio or .lucid file)
2. Commit image to repository: `/docs/erd.png`
3. Embed in README: `![ERD](docs/erd.png)`
4. Keep source file (.drawio) in repo too for editing

**Prevention**: Always export diagrams as PNG/SVG. Keep source file separately for future edits.

---

### Problem 14: UML notation errors (wrong arrows, symbols)

**Symptoms**: Class diagram uses wrong relationship symbols. Feedback: "This isn't proper UML notation."

**Cause**: Didn't learn UML conventions. Used generic drawing tool instead of UML tool.

**Solution**:
Learn UML basics:
- **Association** (solid line): General relationship
- **Inheritance** (hollow arrow): "is a" relationship
- **Composition** (filled diamond): "has a" (strong ownership)
- **Aggregation** (hollow diamond): "has a" (weak ownership)
- **Dependency** (dashed arrow): "uses"

Use UML tools: Visual Paradigm, StarUML, PlantUML (not generic drawing tools)

**Prevention**: Reference UML cheat sheet before creating diagrams. Use dedicated UML tools that enforce notation rules.

---

## Category 5: Flask Development Issues

### Problem 15: Virtual environment not activated

**Symptoms**: `pip install` installs packages globally. Import errors even though packages are "installed."

**Cause**: Forgot to activate virtual environment before installing packages or running Flask.

**Solution**:
```bash
# Create venv (one time)
python3 -m venv venv

# Activate (every time you open terminal)
# Mac/Linux:
source venv/bin/activate

# Windows:
venv\Scripts\activate

# Verify activation (should show venv in prompt)
# (venv) user@computer:~/project$

# Now install packages
pip install -r requirements.txt
```

**Prevention**: Add to README: "Always activate venv before running Flask." Consider using direnv or shell alias to auto-activate.

---

### Problem 16: Database connection errors

**Symptoms**: `sqlalchemy.exc.OperationalError: could not connect to database`. Flask can't find database.

**Cause**: Database URL wrong or database not created. Environment variable not set.

**Solution**:
1. Verify database URL in `.env`:
   ```bash
   DATABASE_URL=postgresql://user:password@localhost/dbname
   ```
2. Ensure database exists:
   ```bash
   # Create database
   createdb dbname
   # Or in PostgreSQL shell:
   CREATE DATABASE dbname;
   ```
3. Verify Flask loads `.env`:
   ```python
   from dotenv import load_dotenv
   load_dotenv()
   ```
4. Test database connection:
   ```python
   from sqlalchemy import create_engine
   engine = create_engine(os.getenv('DATABASE_URL'))
   connection = engine.connect()
   ```

**Prevention**: After cloning project, first step is "Create database and set DATABASE_URL in .env."

---

### Problem 17: Flask routing errors (404 Not Found)

**Symptoms**: Navigate to `/appointments` but get 404. Route exists in code but Flask can't find it.

**Cause**: Blueprint not registered. Typo in route decorator. Server needs restart.

**Solution**:
1. Verify blueprint registration in `app/__init__.py`:
   ```python
   from app.routes import appointments
   app.register_blueprint(appointments.bp)
   ```
2. Check route decorator syntax:
   ```python
   @bp.route('/appointments')  # Correct
   @bp.route('appointments')   # Wrong - missing leading slash
   ```
3. Restart Flask server (Ctrl+C, then `flask run`)
4. Check Flask output for registered routes:
   ```
   * Running on http://127.0.0.1:5000
   ```

**Prevention**: After adding new route, test it immediately. Don't wait until multiple routes are added.

---

### Problem 18: Flask form validation not working

**Symptoms**: Submit form with invalid data but no errors shown. Form accepts invalid email, blank fields.

**Cause**: Validation logic not implemented or not checking validation before processing.

**Solution**:
1. Use Flask-WTF for form validation:
   ```python
   from flask_wtf import FlaskForm
   from wtforms import StringField
   from wtforms.validators import DataRequired, Email

   class LoginForm(FlaskForm):
       email = StringField('Email', validators=[DataRequired(), Email()])
       password = StringField('Password', validators=[DataRequired()])
   ```
2. Check validation in route:
   ```python
   @bp.route('/login', methods=['POST'])
   def login():
       form = LoginForm()
       if form.validate_on_submit():
           # Process form
       else:
           # Show errors
           flash(form.errors)
   ```
3. Display errors in template:
   ```html
   {% for field, errors in form.errors.items() %}
     {% for error in errors %}
       <div class="error">{{ error }}</div>
     {% endfor %}
   {% endfor %}
   ```

**Prevention**: Always use form validation libraries (Flask-WTF, WTForms). Never trust user input.

---

## Category 6: Deployment Problems

### Problem 19: Environment variables not set on Heroku

**Symptoms**: App deploys but crashes immediately. Logs show `KeyError: 'SECRET_KEY'` or `KeyError: 'DATABASE_URL'`.

**Cause**: Environment variables in `.env` file locally but not set on Heroku.

**Solution**:
1. Set config vars on Heroku:
   ```bash
   heroku config:set SECRET_KEY=your-secret-key
   heroku config:set DATABASE_URL=postgres://...
   heroku config:set SENDGRID_API_KEY=SG.xxx
   ```
2. Or in Heroku dashboard: Settings → Config Vars
3. Verify config vars:
   ```bash
   heroku config
   ```

**Prevention**: Create `.env.example` listing all required env vars. In deployment documentation, specify which env vars must be set on Heroku.

---

### Problem 20: Database migration fails on Heroku

**Symptoms**: App deployed but database has old schema. New columns missing. Migration didn't run.

**Cause**: Forgot to run migrations on Heroku. Migrations ran locally but not on production.

**Solution**:
```bash
# SSH into Heroku
heroku run bash

# Run migrations
flask db upgrade

# Exit
exit
```

Or one-liner:
```bash
heroku run flask db upgrade
```

**Prevention**: Add to deployment checklist: "Run migrations on Heroku after every deploy." Consider automating: add `release: flask db upgrade` to `Procfile`.

---

### Problem 21: Static files (CSS/JS) not loading in production

**Symptoms**: App works locally with styling, but Heroku deployment has no CSS. Images missing.

**Cause**: Flask not configured to serve static files in production. Incorrect static file paths.

**Solution**:
1. Verify static folder structure:
   ```
   app/
   ├── static/
   │   ├── css/
   │   │   └── style.css
   │   └── js/
   │       └── main.js
   ```
2. Use `url_for` in templates (not hardcoded paths):
   ```html
   <!-- Wrong -->
   <link rel="stylesheet" href="/static/css/style.css">

   <!-- Right -->
   <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
   ```
3. For production, use CDN or configure Flask to serve static files:
   ```python
   app.config['STATIC_URL_PATH'] = '/static'
   ```

**Prevention**: Always use `url_for` for static files. Test on staging environment before production deploy.

---

### Problem 22: Heroku free tier dyno sleeps (slow first load)

**Symptoms**: First visit to site takes 30 seconds to load. Subsequent visits fast. After 30 min inactivity, slow again.

**Cause**: Heroku free dynos sleep after 30 minutes of inactivity. First request wakes dyno.

**Solution**:
1. Accept the tradeoff (free tier limitation)
2. Warn users: "First load may take 30 seconds"
3. Use UptimeRobot or similar to ping site every 25 minutes (keeps dyno awake)
4. Or upgrade to paid dyno ($7/month, doesn't sleep)

**Prevention**: Set expectations with stakeholders. For important demos (sprint review), visit site 2 minutes before demo to wake dyno.

---

## Category 7: Team Communication

### Problem 23: Async standup not working (nobody reads them)

**Symptoms**: Post standups but nobody responds to blockers. Team uncoordinated. Duplicate work.

**Cause**: Team treats standups as checkbox, not communication tool. Nobody reads others' posts.

**Solution**:
1. Enforce reading: "Before posting YOUR standup, read all previous standups from today"
2. Respond to blockers: If teammate says "Blocked on X", reply with offer to help
3. Use @mentions: "@Marcus, I see you're blocked on SendGrid - I've used it before, let's pair this afternoon"
4. Product Owner monitors: Sarah checks all standups daily, escalates unresolved blockers

**Prevention**: In sprint kickoff, emphasize: "Standups are for coordination, not status reporting. Read everyone's posts, offer help, ask questions."

---

### Problem 24: Stakeholder (Andrew) requests mid-sprint scope changes

**Symptoms**: Week into sprint, Andrew says "Can you add SMS notifications?" Team debates: Do we drop committed stories to add this?

**Cause**: No clear process for handling scope changes mid-sprint.

**Solution**:
1. Product Owner (Sarah) talks to Andrew: "We can add SMS to backlog for next sprint, or we can swap it for US-007 (email confirmation) this sprint. Which is higher priority?"
2. Never just add work to sprint - something must be removed
3. Document decision in standup or retrospective
4. If change is truly urgent (rarely), hold mid-sprint replan meeting

**Example**:
Andrew: "Add SMS notifications"
Sarah: "We'd love to! Two options: (1) Add to Sprint 3 backlog, or (2) Swap with US-007 this sprint. US-007 is 3 points, SMS would be 5 points, so we'd need to drop another 2-point story too. What's your priority?"

**Prevention**: In project kickoff, establish rule: "Sprint scope is locked on Day 1. New requests go to backlog."

---

### Problem 25: Code review bottlenecks (PRs sit for days)

**Symptoms**: Marcus creates PR on Tuesday, Aisha doesn't review until Friday. Delays integration.

**Cause**: No code review SLA. Reviews not prioritized.

**Solution**:
1. Set code review SLA: "Reviews within 24 hours or escalate to Andrew"
2. Make code review part of Definition of Done: "Story not done until PR reviewed and merged"
3. Assign reviewer: @Aisha instead of hoping someone reviews
4. Use GitHub review requests: PR → Reviewers → Select Aisha
5. If reviewer is blocked (too busy), they say so immediately so another reviewer can be found

**Example**:
Tuesday 10am: Marcus creates PR, assigns Aisha
Tuesday 11am: Aisha sees notification, replies "I'll review by 5pm today"
Tuesday 4pm: Aisha reviews, requests changes
Wednesday 9am: Marcus addresses changes, re-requests review
Wednesday 11am: Aisha approves, Marcus merges

**Prevention**: Add to Definition of Done: "PR reviewed within 24 hours." Track review time in retrospectives.

---

## Category 8: Documentation Issues

### Problem 26: README too technical (no setup instructions for new team members)

**Symptoms**: New team member clones repo and doesn't know how to get started. Asks "How do I run this?"

**Cause**: README assumes knowledge. No step-by-step setup instructions.

**Solution**:
Add to README:
```markdown
## Setup Instructions

### Prerequisites
- Python 3.9+
- PostgreSQL 13+
- SendGrid account (free tier)

### Installation
1. Clone repository:
   ```bash
   git clone https://github.com/team/booking-system.git
   cd booking-system
   ```

2. Create virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Mac/Linux
   # or venv\Scripts\activate on Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create database:
   ```bash
   createdb booking_db
   ```

5. Copy `.env.example` to `.env` and fill in values:
   ```bash
   cp .env.example .env
   # Edit .env with your database URL, SendGrid key, etc.
   ```

6. Run migrations:
   ```bash
   flask db upgrade
   ```

7. Run development server:
   ```bash
   flask run
   ```

8. Open browser to `http://127.0.0.1:5000`
```

**Prevention**: Test README setup instructions on fresh machine or ask teammate to follow instructions from scratch.

---

### Problem 27: README too vague (doesn't explain what project does)

**Symptoms**: Andrew opens README and can't tell what system does. No description, just code.

**Cause**: Jumped straight to technical details without explaining purpose.

**Solution**:
Start README with:
```markdown
# Booking System

## Description
A web application for patients to book medical appointments online. Patients can view available appointment slots, select a time, and receive email confirmation. Administrators can view all bookings and manage schedules.

## Features
- User registration and authentication
- View available appointment slots by date
- Book appointments with email confirmation
- Admin dashboard to view all bookings
- Cancel appointments

## Screenshots
[Include screenshot of booking calendar]
[Include screenshot of dashboard]

## Tech Stack
- Backend: Flask (Python)
- Frontend: HTML, CSS, JavaScript
- Database: PostgreSQL
- Email: SendGrid API
- Deployment: Heroku
```

**Prevention**: Write README description FIRST (week 1), then add technical details later.

---

### Problem 28: API endpoints not documented

**Symptoms**: Frontend developer doesn't know what endpoints exist or what data format to send.

**Cause**: No API documentation. Endpoints exist in code but not documented.

**Solution**:
Add API documentation to README:
```markdown
## API Endpoints

### Authentication

#### POST /api/auth/register
Register new user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "message": "Account created successfully",
  "user_id": 42
}
```

**Response (400):**
```json
{
  "error": "Email already registered"
}
```

#### POST /api/auth/login
Login existing user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": 42,
    "email": "user@example.com"
  }
}
```

### Appointments

#### GET /api/appointments/available?date=2026-03-15
Get available appointment slots for date

**Response (200):**
```json
{
  "date": "2026-03-15",
  "slots": [
    {"time": "09:00", "available": true},
    {"time": "10:00", "available": true},
    {"time": "11:00", "available": false}
  ]
}
```
```

**Prevention**: Document endpoints as you build them. Use tools like Swagger/OpenAPI for automatic API documentation.

---

### Problem 29: Missing deployment documentation

**Symptoms**: Sprint 14, time to deploy, nobody remembers how to deploy. Panic and errors.

**Cause**: Deployed to staging once in Week 12 but didn't document steps.

**Solution**:
Create `DEPLOYMENT.md`:
```markdown
# Deployment Guide

## Prerequisites
- Heroku account
- Heroku CLI installed
- Production database created

## Deploy to Heroku

1. Create Heroku app (one-time):
   ```bash
   heroku create booking-system-prod
   ```

2. Add PostgreSQL addon:
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```

3. Set environment variables:
   ```bash
   heroku config:set SECRET_KEY=your-production-secret
   heroku config:set SENDGRID_API_KEY=SG.xxx
   ```

4. Deploy:
   ```bash
   git push heroku main
   ```

5. Run migrations:
   ```bash
   heroku run flask db upgrade
   ```

6. Verify deployment:
   ```bash
   heroku open
   ```

7. Monitor logs:
   ```bash
   heroku logs --tail
   ```

## Rollback

If deployment breaks:
```bash
heroku rollback
```

## Troubleshooting

**Problem:** App crashes on startup
**Solution:** Check logs with `heroku logs --tail`, verify all config vars are set
```

**Prevention**: Document deployment steps the FIRST time you deploy (Week 12 staging), not Week 14 when you're rushing.

---

## Category 9: Testing & Quality Assurance

### Problem 30: Tests pass locally but fail in CI/CD

**Symptoms**: Tests pass on your machine but fail in GitHub Actions. Different results in different environments.

**Cause**: Tests depend on local environment (database, files, environment variables).

**Solution**:
1. Use test database (not production database):
   ```python
   # config.py
   class TestConfig:
       TESTING = True
       SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
   ```
2. Mock external services (SendGrid, payment APIs):
   ```python
   from unittest.mock import patch

   @patch('app.utils.email.send_email')
   def test_booking_confirmation(mock_send_email):
       mock_send_email.return_value = True
       # Test booking without actually sending email
   ```
3. Set environment variables in CI/CD config:
   ```yaml
   # .github/workflows/test.yml
   env:
     DATABASE_URL: sqlite:///:memory:
     FLASK_ENV: testing
   ```

**Prevention**: Run tests in CI/CD from Day 1. Don't wait until Week 12 to set up GitHub Actions.

---

### Problem 31: No tests written (can't verify code works)

**Symptoms**: Make changes and hope nothing breaks. No automated way to verify functionality.

**Cause**: "We'll add tests later" mentality. Tests seen as optional.

**Solution**:
1. Make tests part of Definition of Done: "Story not done until tests written"
2. Write tests for acceptance criteria:
   - Given-When-Then criteria → test cases
   - Each acceptance criterion = one test
3. Start with critical paths:
   - Authentication (login, register)
   - Core business logic (booking, payment)
   - Data validation

**Example**:
User story acceptance criterion:
"Given I have a registered account, When I enter valid email and password, Then I am logged in"

Test:
```python
def test_login_with_valid_credentials():
    # Setup
    user = create_test_user(email='test@example.com', password='password123')

    # Execute
    response = client.post('/login', data={
        'email': 'test@example.com',
        'password': 'password123'
    })

    # Assert
    assert response.status_code == 200
    assert b'Dashboard' in response.data
```

**Prevention**: Add "Tests written" to Definition of Done in Sprint 1. No story is done without tests.

---

### Problem 32: Tests are slow (take 5+ minutes to run)

**Symptoms**: Developers skip running tests before committing because they take too long.

**Cause**: Tests hit real database, real APIs, or have inefficient setup.

**Solution**:
1. Use in-memory database for tests (SQLite):
   ```python
   SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
   ```
2. Mock external services (don't hit real SendGrid API in tests)
3. Use fixtures for test data (create once, reuse):
   ```python
   @pytest.fixture
   def test_user():
       user = User(email='test@example.com')
       db.session.add(user)
       db.session.commit()
       return user
   ```
4. Run tests in parallel:
   ```bash
   pytest -n auto  # Uses all CPU cores
   ```

**Prevention**: Keep tests fast (<30 seconds total) so developers actually run them.

---

## Category 10: Project Management

### Problem 33: Risk register created once and never updated

**Symptoms**: Risks from Week 6 still marked "Open" in Week 14. New risks not tracked.

**Cause**: Risk register treated as one-time deliverable for grade, not living document.

**Solution**:
1. Review risks weekly (add to weekly team check-in)
2. Update risk status:
   - Closed (resolved)
   - Mitigated (plan in place)
   - Monitoring (still watching)
   - Escalated (needs Andrew's help)
3. Add new risks as they emerge
4. Track in sprint retrospective: "What new risks appeared this sprint?"

**Example weekly review**:
- R-001 (SendGrid quota): Closed (upgraded to paid plan)
- R-002 (Marcus unavailable Week 11): Mitigated (adjusted Sprint 4 capacity)
- **NEW: R-009 (CSS taking longer than expected)**: Likelihood 3, Impact 2, Score 6

**Prevention**: Add risk review to sprint retrospective agenda. Product Owner owns keeping risk register updated.

---

### Problem 34: No sprint retrospective (not learning from mistakes)

**Symptoms**: Same problems every sprint (code reviews slow, overcommitting, poor estimates). No improvement.

**Cause**: Skipped retrospectives or treated them as busywork.

**Solution**:
1. Schedule retrospective EVERY sprint (30-60 minutes)
2. Use structured format:
   - What went well?
   - What didn't go well?
   - What will we improve?
3. Define 3-5 specific action items with owners
4. Review previous retrospective actions (did we do what we said?)

**Example retrospective actions**:
- **Action**: Code reviews within 24 hours or escalate
- **Owner**: Aisha (enforces rule)
- **Success criteria**: Average PR review time < 24 hours

**Prevention**: Treat retrospective as sacred. Sprint isn't complete until retrospective is done.

---

### Problem 35: Velocity wildly inconsistent (8 points, then 18, then 4)

**Symptoms**: Can't predict capacity. Sprint planning is guessing game.

**Cause**: Team composition changes, estimation inconsistent, external factors (exams, illness).

**Solution**:
1. Track velocity in spreadsheet or tool
2. Investigate large swings:
   - Sprint 2 (18 points): Why so high? Overestimated stories? Less complexity than expected?
   - Sprint 3 (4 points): Why so low? Underestimated? Team member out sick? Exams?
3. Adjust estimation: If consistently overestimating, recalibrate (what you called 5 is actually 3)
4. Reserve buffer capacity (commit to 80% of historical velocity)

**Example**:
Sprint 1: 11 points
Sprint 2: 18 points (outlier - stories overestimated)
Sprint 3: 12 points
**Average: 13.6 points**
**Sprint 4 commitment: 11 points** (80% of average, leaving 20% buffer)

**Prevention**: Review velocity in every sprint retrospective. Understand WHY velocity changed.

---

## Tips for Using This Guide

1. **Search first**: Use Ctrl+F to find your problem
2. **Follow all 4 steps**: Don't skip "Prevention" - that's how you avoid repeat issues
3. **Document your own solutions**: When you solve a new problem, add it to this guide
4. **Share with team**: When teammate hits problem, point them to this guide
5. **Reference in retrospectives**: "We had Problem 5 (overcommitting) - let's implement the prevention strategy"

---

**Last Updated**: CTS-285 Spring 2026

This is a living document. Encountered a problem not listed here? Let Andrew know so we can add it.
