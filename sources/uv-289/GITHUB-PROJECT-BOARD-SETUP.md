<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/GITHUB-PROJECT-BOARD-SETUP.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 wk1 (with the GREEN Trajectory Check)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# GitHub Project Board Setup Guide for CSC-289

**Course**: CSC-289 System Support Project
**Instructor**: Drew Norris
**Purpose**: Enable students to choose issues, volunteer to work on them, and move them across the board

---

## Why GitHub Project Boards?

GitHub Project Boards provide:
- **Visual workflow** (Kanban-style board)
- **Self-organization** (students choose and assign work)
- **Real-time progress tracking** (move cards across columns)
- **Integration with Git** (linked to commits, PRs, issues)
- **Industry-standard practice** (used in professional agile teams)

This simulates real-world software development where team members autonomously select work based on priority, skill, and capacity.

---

## Board Setup (Student Does This in Module 1)

### Step 1: Create GitHub Repository
```bash
# Student creates repository
gh repo create capstone-project --public
cd capstone-project
git init
echo "# Capstone Project" > README.md
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 2: Create Project Board

**Via GitHub Web Interface**:
1. Go to repository
2. Click **"Projects"** tab
3. Click **"New project"**
4. Choose **"Board"** layout
5. Name it: "CSC-289 Capstone Sprint Board"

### Step 3: Configure Board Columns

**Standard Kanban Layout**:
```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│  BACKLOG    │   TO DO     │IN PROGRESS  │ IN REVIEW   │    DONE     │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ All issues  │ Selected    │ Actively    │ Awaiting    │ Meets DoD   │
│ prioritized │ for current │ being       │ code review │ Complete    │
│             │ sprint      │ worked on   │ or feedback │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

**Column Automation** (Optional but Recommended):
- **Backlog**: Newly created issues start here
- **To Do**: Manual move during sprint planning
- **In Progress**: Manual move when work begins
- **In Review**: Manual move when ready for feedback
- **Done**: Automatically moves when issue is closed

---

## Issue Creation (Module 1 - Red Clearance)

### Epic Issues (High-Level Features)

**Example Epic Template**:
```markdown
## Epic: User Authentication System

**Description**: Implement secure user authentication with login, logout, and session management.

**Business Value**: Allows users to access personalized features securely.

**Acceptance Criteria**:
- [ ] Users can register with email and password
- [ ] Users can log in with credentials
- [ ] Users can log out
- [ ] Sessions persist across browser refresh
- [ ] Password reset functionality

**Story Point Estimate**: 21 (Epic - will be broken into stories)

**Labels**: `epic`, `priority: high`, `must-have`

**Child Stories**:
- #5 User Registration Form
- #6 Login Endpoint
- #7 Session Management
- #8 Password Reset Flow
```

### User Story Issues (Actionable Work Items)

**Example User Story Template**:
```markdown
## User Story: User Registration Form

**As a** new user
**I want to** create an account with email and password
**So that** I can access personalized features

**Acceptance Criteria** (Given-When-Then):
- **Given** I am on the registration page
  **When** I enter valid email and password
  **Then** my account is created and I am logged in

- **Given** I enter an invalid email format
  **When** I submit the form
  **Then** I see an error message "Invalid email format"

- **Given** I enter a password shorter than 8 characters
  **When** I submit the form
  **Then** I see an error message "Password must be at least 8 characters"

**Definition of Done**:
- [ ] Frontend form created with validation
- [ ] Backend endpoint implemented
- [ ] Unit tests written and passing
- [ ] Integration test written and passing
- [ ] Code reviewed and approved
- [ ] Documentation updated

**Story Point Estimate**: 5

**Labels**: `user-story`, `priority: high`, `must-have`, `sprint-4`

**Parent Epic**: #4 (User Authentication System)

**Dependencies**: None

**Assigned to**: [Student self-assigns during sprint]
```

---

## Sprint Workflow

### Sprint Planning (Day 1-2 of Sprint)

**Student Actions**:

1. **Review Backlog**:
   - Look at all issues in "Backlog" column
   - Issues should be prioritized (Must Have → Should Have → Could Have → Won't Have)

2. **Estimate Capacity**:
   - Based on previous sprint velocity
   - Account for time available (labs, other classes)
   - Example: "Last sprint I completed 13 story points, this sprint I'll commit to 12 points"

3. **Select Issues for Sprint**:
   - Pull issues from Backlog into "To Do" column
   - Only select work that fits capacity
   - Prioritize "Must Have" items first

4. **Self-Assign Initial Issue**:
   - Choose first issue to work on
   - Click "Assign yourself" on the issue
   - Move issue from "To Do" to "In Progress"

5. **Document Sprint Plan**:
   - Create `sprint-X-planning.md` file
   - List sprint goal, selected issues, capacity reasoning

**Example Sprint Planning Document**:
```markdown
# Sprint 4 Planning

**Sprint Goal**: Implement MVP authentication and dashboard features

**Sprint Dates**: March 4 - March 15, 2026

**Capacity**: 12 story points
- Based on Sprint 3 velocity: 13 points completed
- Adjusting down slightly due to midterm week

**Selected Issues**:
- #5 User Registration Form (5 pts) - Must Have
- #6 Login Endpoint (3 pts) - Must Have
- #7 Session Management (5 pts) - Must Have
- **Total**: 13 points (slightly over to account for variation)

**GRD Dependencies**:
- Waiting on logo asset from GRD team (expected March 8)
- Backup plan: use placeholder logo until assets arrive

**Risks**:
- Midterm week (March 11-15) may reduce available time
- Mitigation: Front-load work in Week 1

**Sprint Commitment**: Issues #5, #6, #7
```

---

### Daily Standup (Days 1-10 of Sprint)

**Student Actions**:

1. **Create Daily Standup File**:
   - File: `standups/standup-2026-03-04.md`
   - Commit to repository daily

2. **Answer 3 Questions**:
   ```markdown
   # Daily Standup - March 4, 2026

   ## What I accomplished yesterday
   - Completed Issue #5: User Registration Form
   - Frontend validation working
   - Connected to backend endpoint
   - Moved Issue #5 to "In Review"

   ## What I'll work on today
   - Start Issue #6: Login Endpoint
   - Set up Express route for POST /login
   - Implement bcrypt password hashing

   ## Blockers / Help Needed
   - Need to decide on JWT vs. session cookies for session management
   - Will research today and make decision by tomorrow
   ```

3. **Update Board**:
   - Move issues as status changes:
     - Starting work? Move to "In Progress"
     - Ready for review? Move to "In Review"
     - Complete? Move to "Done" (close issue)

4. **Commit Standup File**:
   ```bash
   git add standups/standup-2026-03-04.md
   git commit -m "Add standup for March 4"
   git push
   ```

**Instructor Grading**:
- Check that standups are posted (min 8 of 10 days)
- Spot-check for detail and honesty
- Look for patterns (blockers surfaced? progress consistent?)

---

### During Sprint (Days 1-10)

**Student Workflow**:

1. **Work on Assigned Issue**:
   - Create feature branch: `git checkout -b feature/issue-5-registration`
   - Make commits: `git commit -m "Add email validation"`
   - Reference issue in commits: `git commit -m "Fix #5: Complete registration form"`

2. **When Issue Ready for Review**:
   - Move issue to "In Review" column
   - Create Pull Request (PR)
   - Link PR to issue: "Closes #5"
   - Request feedback (from instructor or peer if applicable)

3. **When Issue Complete**:
   - Ensure Definition of Done is met
   - Merge PR
   - Close issue (automatically moves to "Done")

4. **Choose Next Issue**:
   - Look at "To Do" column
   - Self-assign next issue
   - Move to "In Progress"
   - Update daily standup with new task

**Example Board State Mid-Sprint**:
```
BACKLOG              TO DO           IN PROGRESS         IN REVIEW       DONE
─────────────────────────────────────────────────────────────────────────────
#8 Password Reset    #7 Session      #6 Login Endpoint   [empty]         #5 Registration
   (5 pts)           Management                                          Form (5 pts)
                     (5 pts)

#9 Dashboard Layout
   (8 pts)

#10 User Profile
   (3 pts)
```

---

### Sprint Review (Day 10-11 of Sprint)

**Student Actions**:

1. **Prepare Demo**:
   - Have working software ready to demonstrate
   - All issues in "Done" column should be demoed
   - **No slides** - live demo only

2. **Demo Script**:
   ```markdown
   # Sprint 4 Review Demo Script

   **Sprint Goal**: Implement MVP authentication and dashboard features

   **Completed Issues**:
   - #5 User Registration Form (5 pts)
   - #6 Login Endpoint (3 pts)
   - #7 Session Management (5 pts)

   **Demo Flow**:
   1. Navigate to registration page
   2. Enter valid credentials → show account creation
   3. Enter invalid email → show validation error
   4. Log in with created account → show session persists
   5. Refresh browser → still logged in (session management)
   6. Log out → redirected to login page

   **Not Completed**:
   - None - all sprint commitments met!

   **Velocity**:
   - Committed: 13 points
   - Completed: 13 points
   - 100% completion rate
   ```

3. **Present to Instructor**:
   - Schedule 20-minute demo during sprint review time
   - Show working software (deployed or local)
   - Explain technical decisions
   - Discuss any blockers encountered

**Instructor Grading**:
- Did student demo working software? (not slides)
- Were all "Done" issues actually complete?
- Was presentation professional?

---

### Sprint Retrospective (Day 11-12 of Sprint)

**Student Actions**:

1. **Reflect on Sprint**:
   ```markdown
   # Sprint 4 Retrospective

   **Sprint Goal**: Implement MVP authentication and dashboard features

   **Sprint Metrics**:
   - Committed: 13 story points
   - Completed: 13 story points
   - Velocity: 13 points
   - Daily Standups: 10 of 10 days

   ## What Went Well 🎉
   - Completed all committed issues
   - Daily standups kept me accountable
   - Frontend validation was easier than expected (saved 2 hours)
   - GRD logo arrived on time (no backup plan needed)

   ## What Didn't Go Well 😅
   - Underestimated backend complexity (Issue #6 took 5 hours, estimated 3)
   - Didn't start testing until end of sprint (stressful)
   - Midterm week reduced available time (as predicted in risk register)

   ## Lessons Learned 💡
   - Backend endpoints usually take longer than frontend work
   - Should write tests alongside features, not after
   - Front-loading work in Week 1 paid off during midterm week

   ## Action Items for Sprint 5 🚀
   - [ ] Add buffer to backend issue estimates (multiply by 1.5x)
   - [ ] Write tests immediately after implementing feature
   - [ ] Start Sprint 5 with 2 issues instead of 1 to maintain momentum
   - [ ] Check in with GRD team earlier (Day 2 instead of Day 5)

   ## Velocity Analysis
   - Sprint 1: 10 points
   - Sprint 2: 12 points
   - Sprint 3: 13 points
   - Sprint 4: 13 points
   - **Trend**: Velocity stabilizing at ~13 points
   - **Sprint 5 Commitment**: Plan for 13 points again
   ```

2. **Update Board**:
   - Move any incomplete issues back to Backlog
   - Close sprint milestone
   - Clean up labels

3. **Commit Retrospective**:
   ```bash
   git add sprints/sprint-4-retrospective.md
   git commit -m "Add Sprint 4 retrospective"
   git push
   ```

**Instructor Grading**:
- Is reflection honest and specific?
- Are action items concrete and actionable?
- Does student understand their velocity trend?
- Is there evidence of PM growth?

---

## Labels System

**Priority Labels**:
- `priority: critical` (Red) - Blocker, must fix immediately
- `priority: high` (Orange) - Must Have for MVP
- `priority: medium` (Yellow) - Should Have
- `priority: low` (Green) - Could Have

**Type Labels**:
- `epic` (Purple) - High-level feature (broken into stories)
- `user-story` (Blue) - Actionable work item
- `bug` (Red) - Something broken
- `enhancement` (Green) - Improvement to existing feature
- `documentation` (Gray) - Documentation work

**Status Labels**:
- `must-have` (Red) - MoSCoW: Must Have
- `should-have` (Orange) - MoSCoW: Should Have
- `could-have` (Yellow) - MoSCoW: Could Have
- `wont-have` (Gray) - MoSCoW: Won't Have (scope cut)

**Sprint Labels**:
- `sprint-1` through `sprint-6`

**GRD Labels**:
- `grd-dependency` (Purple) - Waiting on GRD assets
- `grd-integration` (Purple) - Integrating GRD assets

---

## Definition of Done (DoD)

Every issue must meet DoD before moving to "Done":

**Technical Checklist**:
- [ ] Code written and committed
- [ ] Code reviewed (PR approved)
- [ ] Unit tests written and passing
- [ ] Integration tests passing (if applicable)
- [ ] No linting errors
- [ ] Documentation updated (README, code comments)

**Process Checklist**:
- [ ] Issue acceptance criteria met
- [ ] Demo-ready (can show working feature)
- [ ] Deployed to staging/production (if applicable)

**GRD Collaboration Checklist** (Sprints 1-4):
- [ ] GRD assets integrated (if applicable)
- [ ] Design specifications met

If issue doesn't meet DoD, it stays in "In Review" or moves back to "In Progress".

---

## Common Board Patterns

### Pattern 1: Parallel Work (Good!)
```
IN PROGRESS
- Issue #10 (Student working)
- Issue #11 (Student working)

This means: Student is actively working multiple issues (e.g., waiting for tests to run)
```

### Pattern 2: Stalled Review (Red Flag)
```
IN REVIEW (for 3+ days)
- Issue #12 (awaiting feedback)

This means: Issue stuck, needs instructor intervention or student needs to move forward
```

### Pattern 3: Overcommitted Sprint (Common Early On)
```
TO DO (Sprint Planning)
- 8 issues totaling 30 story points

IN PROGRESS (Day 5 of Sprint)
- Still 6 issues in To Do
- Only 2 issues completed

This means: Student overcommitted, needs to cut scope
```

### Pattern 4: Healthy Sprint (Goal!)
```
DONE (Day 10 of Sprint)
- 5 issues completed
- Total: 13 story points (matched commitment)

TO DO
- Empty (all sprint work completed)

This means: Student estimated well, completed commitments
```

---

## Troubleshooting

### Issue: "Student creates all issues at once in Sprint 1"
**Solution**: This is fine! Module 1 (Red Clearance) requires full backlog creation. Issues will be selected sprint-by-sprint.

### Issue: "Student never moves issues to In Review"
**Solution**: Provide feedback: "Use 'In Review' for code review or feedback. Don't jump straight to Done."

### Issue: "Board doesn't match repository activity"
**Solution**: Check if student is working but forgetting to update board. Emphasize board hygiene in retrospective feedback.

### Issue: "Student assigns all issues to themselves at once"
**Solution**: Provide feedback: "Only assign issues when actively working on them. Leave others in To Do for sprint flexibility."

### Issue: "Issues stay In Progress for entire sprint"
**Solution**: Check if student is updating daily. May indicate issue is too large (needs breakdown) or student is stuck (needs help).

---

## Instructor Dashboard View

**What to Monitor**:

1. **Board Health** (Weekly Spot-Check):
   - Are issues moving across columns?
   - Is "In Progress" column active?
   - Are "Done" issues accumulating?

2. **Velocity Tracking** (Per Sprint):
   - Sprint 1: 10 points (baseline)
   - Sprint 2: 12 points (growing)
   - Sprint 3: 13 points (stabilizing)
   - Sprint 4: 13 points (consistent)
   - Sprint 5: 13 points (mature)
   - Sprint 6: 12 points (polish focus)

3. **Red Flags**:
   - No issues moved in 3+ days
   - Issues stuck in "In Review" >3 days
   - "To Do" column still full at Day 8 of sprint
   - No daily standup commits

4. **Green Flags**:
   - Issues moving regularly
   - Daily standup commits consistent
   - Retrospective action items addressed in next sprint
   - Velocity stabilizing

---

## Key Takeaways

✅ **Choose, Volunteer, Move** - Students self-organize around work
✅ **Board reflects reality** - If issue is In Progress, student is working on it NOW
✅ **Daily updates matter** - Standups + board updates = accountability
✅ **Velocity improves** - Estimates get better over time (Sprint 1 vs. Sprint 6)
✅ **Adaptation is success** - Scope cuts when needed = professional PM
✅ **Visual workflow** - Board state should tell the sprint story at a glance

---

**Document Author**: Angela Westmoreland
**Last Updated**: January 29, 2026
