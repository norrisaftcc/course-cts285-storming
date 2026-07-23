# Week 2 Assignment: Agile Simulation & Project Selection
## CTS-285: Systems Analysis & Design

**Due**: End of Week 2 (Friday, 11:59 PM)
**Points**: 35 (4.7% of 750)
**Submission**: GitHub repository + Project proposal document

---

## What You're Learning

Last week you learned about SDLC phases in theory. This week, you'll **experience** how Agile works through a low-stakes simulation, then choose your semester project.

By Friday, you'll have:
- Experienced sprint planning, execution, and retrospective firsthand
- Chosen and defined your semester-long project
- Created your first GitHub Project board
- Written initial user stories for your project

**Role this week**: Still observing and learning, but starting to practice Product Owner tasks.

---

## Learning Objectives

1. **Participate** in a simulated Agile sprint using paper prototypes
2. **Compare** your simulated experience to Waterfall approach
3. **Select** a project idea suitable for semester-long development
4. **Define** project scope with minimum viable product (MVP) focus
5. **Create** initial product backlog with 10+ user stories

---

## Part 1: Agile Simulation (Complete in Class)

### The Activity (90 minutes in class)

You'll participate in **Module 01 SDLC Simulation Lab** during class. We'll build a paper-based "product" through multiple mini-sprints.

**What to expect**:
- 3 mini-sprints (15 minutes each)
- Sprint planning, execution, review, retrospective for each
- Building something physical (paper airplane, origami, card structure)
- Iterative improvement based on feedback

### Your Documentation (Part of this assignment)

Create `week-2-agile-simulation-reflection.md` in your repository.

#### Answer These Questions:

**1. Sprint Experience (200-300 words)**

Describe your experience across the 3 mini-sprints:
- What was your "product"?
- What changed between Sprint 1, 2, and 3?
- How did retrospectives influence later sprints?
- What surprised you about the iterative process?

**2. Agile vs. Waterfall Comparison (150-200 words)**

If we had done the same activity using Waterfall (plan everything upfront, build once, no iteration):
- What would have been different?
- Which approach would have worked better for this activity? Why?
- When might Waterfall be better than Agile?

**3. Application to Software (100-150 words)**

How does building a physical product compare to building software?
- What's similar about iterative development?
- What's different between paper prototypes and code?
- What did you learn that applies to your semester project?

---

## Part 2: Project Selection & Proposal (50 points total)

### Choose Your Semester Project

You'll build **ONE information system** across 16 weeks. Choose wisely - you'll spend ~60-80 hours on this.

### Selection Criteria

✅ **Personally meaningful** - You'll be more motivated
✅ **Clear user need** - Solves a real problem
✅ **Appropriate scope** - Not too simple, not too complex
✅ **3+ user roles** - Need different types of users (admin, regular user, guest)
✅ **15+ features** - Enough to break into user stories
✅ **Technically feasible** - Can build with Python/Flask

### Project Options

**Option A: Business System**
- Small business booking/scheduling
- Inventory management
- Customer relationship management (CRM)
- Service request tracking

**Option B: Educational/Productivity**
- Study group organizer
- Flashcard/quiz builder
- Assignment tracker with reminders
- Peer tutoring marketplace

**Option C: Community/Social**
- Campus event discovery
- Neighborhood resource exchange
- Volunteer coordination
- Club/organization management

**Option D: Propose Your Own**
- Must meet criteria above
- Needs instructor approval (submit early for feedback)

### Create Project Proposal Document

Create `project-proposal.md` in your repository with these sections:

#### 1. Project Overview (150-200 words)

**Project Name**: [Your system name]

**Problem Statement**: What problem does this solve? Who has this problem?

**Target Users**: Who will use your system? (Be specific - "college students" is too broad, "FTCC students looking for study partners in STEM courses" is better)

**Why This Matters**: Why do you care about solving this problem?

#### 2. MVP Feature List

**Minimum Viable Product** = smallest version that solves core problem.

List **6-8 core features** for MVP. Not everything you could build - just what's essential.

Format:
```markdown
### MVP Features (Priority 1 - Must Have)
1. User registration and login
2. [Feature that solves main problem]
3. [Supporting feature]
4. [Supporting feature]
5. [Admin management of X]
6. Basic search/filter

### Future Features (Priority 2 - Nice to Have)
- [Feature you'd add after MVP works]
- [Feature you'd add after MVP works]
```

**Be ruthless about MVP scope.** Better to have 6 working features than 15 half-done features.

#### 3. User Roles (3+ required)

Define who uses your system and what they can do.

Example for campus event system:
- **Guest User**: Browse events, view details (no login required)
- **Registered Student**: Browse, RSVP for events, view their RSVPs, get notifications
- **Event Organizer**: All student features + create/edit/cancel events, view RSVP lists
- **Admin**: All features + manage users, approve events, view analytics

#### 4. User Stories (10+ required)

Write **at least 10 user stories** using this format:

```
As a [role], I want to [feature], so that [benefit].
```

**Examples**:

✅ Good user story:
> As a registered student, I want to filter events by date range, so that I can plan my week without seeing past events.

✅ Good user story:
> As an event organizer, I want to export my RSVP list to CSV, so that I can check in attendees at the door.

❌ Bad user story (no benefit):
> As a user, I want a search bar.

❌ Bad user story (too technical):
> As a developer, I want to implement JWT authentication.

**Tips**:
- Focus on user value, not implementation
- Each story should be independently valuable
- Stories should be small enough to complete in days, not weeks
- Mix of stories for different user roles

#### 5. Technical Approach (100-150 words)

Briefly describe how you'll build this:

- **Frontend**: HTML/CSS/JavaScript (frameworks optional)
- **Backend**: Python with Flask
- **Database**: SQLite (development) → PostgreSQL (production)
- **Authentication**: Flask-Login or similar
- **Deployment**: Render or Railway (free tier)

Also mention:
- Any external APIs you might use (Google Maps, SendGrid for email, etc.)
- Special libraries needed (e.g., Pillow for image handling)

Don't go too deep - this is preliminary. Design happens in Sprint 1.

#### 6. Success Criteria (50-100 words)

By end of semester, your project is successful if:
- [Measurable criterion 1] - Example: "A new user can register and RSVP for an event in under 2 minutes"
- [Measurable criterion 2] - Example: "System handles 50+ concurrent users without errors"
- [Measurable criterion 3] - Example: "All 3 user roles have distinct permissions enforced"

---

## Part 3: GitHub Project Board Setup (15 points)

### Create Your Project Board

1. Go to your repository on GitHub
2. Click **Projects** tab → **New project**
3. Choose **Board** template
4. Name it: "CTS-285 Semester Project"

### Create Columns

Set up these columns (drag issues left to right as work progresses):
- **Backlog** - User stories not yet started
- **To Do** - Selected for current sprint
- **In Progress** - Actively working on
- **Review** - Done but needs checking
- **Done** - Complete and tested

### Add Your User Stories as Issues

For each user story from your proposal:

1. Click **New issue**
2. **Title**: [Role] - [Feature]
   - Example: "Student - Filter events by date"
3. **Description**: Full user story + acceptance criteria
4. **Label**: Create `user-story` label, assign it
5. **Project**: Add to your project board (Backlog column)

**Create issues for all 10+ user stories**

### Labels to Create

- `user-story` (blue)
- `bug` (red) - you'll use later
- `documentation` (yellow)
- `enhancement` (green)

---

## Deliverables Checklist

- [ ] `week-2-agile-simulation-reflection.md` (3 questions answered)
- [ ] `project-proposal.md` with all 6 sections complete
- [ ] GitHub Project board created with 5 columns
- [ ] 10+ user stories created as GitHub Issues
- [ ] All issues labeled and added to project board
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Agile Simulation Reflection** | 10 | Thoughtful reflection, compares to Waterfall, applies learning |
| **GitHub Project Board Setup** | 15 | Proper setup, all stories as issues, columns configured |
| **Backlog Initialization** | 10 | *Deliverable authored by task 1.3 (paper simulation + seeded backlog, replacing project selection). Point value is the residual 35 − 10 − 15; line-item criteria land with the 1.3 rewrite.* |
| **Total** | 35 | |

> **Points-normalization note (task 1.0b):** the header and this rubric now reflect the canonical 35-point regime. The **body** below still contains the retired "Part 2: Project Selection & Proposal" section — its deletion and the paper-simulation / seeded-backlog rewrite are task **1.3**'s content work, deliberately out of scope for this arithmetic sweep. Body and rubric are intentionally out of sync pending 1.3.

### What Earns Full Points

**Proposal**:
- Problem statement makes you say "Yeah, that IS annoying, I'd use that"
- MVP is focused (not trying to build the next Facebook)
- User stories follow format exactly and include benefit
- Clear who the users are and what they need

**Project Board**:
- All issues created before deadline (not rushed day-of)
- Each issue has description, not just title
- Labeled appropriately
- Board columns match assignment requirements

---

## Common Issues & Solutions

### Issue: "I have too many project ideas, can't choose"

**Solution**: Answer these:
1. Which would you actually use yourself?
2. Which could you explain to your mom in 30 seconds?
3. Which has the clearest MVP? (If you can't define MVP, it's too complex)

Pick the one that scores highest on these questions.

### Issue: "My idea is too simple / too complex"

**Too Simple** = Can build entire thing in a weekend. Examples: Todo list (basic), Calculator.
**Solution**: Add user roles, social features, or admin dashboard to increase complexity.

**Too Complex** = Would take a team of 10 engineers 6 months. Examples: New social network, E-commerce site like Amazon.
**Solution**: Define MVP ruthlessly. What's the ONE core feature? Build only that first.

### Issue: "I can't think of 10 user stories"

**Solution**: Think through user journeys:
1. User discovers system → lands on homepage
2. User wants to do core task → needs account? search? filter?
3. User completes task → confirmation? history?
4. User returns later → notifications? dashboard?
5. Admin needs to manage → CRUD for main entities

Each step in journey = multiple user stories.

### Issue: "My user stories keep sounding technical"

**Bad**: "As a developer, I want to implement OAuth2..."
**Good**: "As a user, I want to log in with my Google account, so that I don't have to remember another password."

Focus on USER VALUE, not implementation. Ask "Why does the user care?"

---

## Resources

- **User Story Guide**: [Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/user-stories)
- **MVP Definition**: [Eric Ries (Lean Startup)](http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html)
- **GitHub Projects Tutorial**: [GitHub Docs](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- **Brainstorming Help**: Office hours - I'm happy to help refine your idea

---

## Looking Ahead: Week 3

Next week you'll:
- Start Module 2: Requirements Gathering
- Conduct stakeholder interviews (I'll play your stakeholder)
- Refine your user stories based on stakeholder feedback
- Learn prioritization techniques (MoSCoW method)

**Your project proposal becomes your roadmap.** Take it seriously this week - changing projects mid-semester is painful.

---

## Andrew's Note

**Choosing your project is one of the most important decisions this semester.**

Students who pick projects they care about do better work. Students who pick "whatever seems easy" often regret it by Week 8 when they're sick of working on something boring.

### What Makes a Good Project?

**Personal connection** - Best projects solve problems you've personally experienced. "I wish X existed" is a great starting point.

**Clear boundaries** - "Event management system for campus clubs" is better than "social network for everyone." Constraints help.

**Portfolio potential** - By end of semester, you'll have a deployed, documented project to show employers. Pick something you'd be proud to demo in an interview.

### Common Mistakes to Avoid:

❌ **Picking the "easy" project to save time** - You'll spend the same hours either way. Might as well build something interesting.

❌ **Trying to solve everyone's problems** - Narrow your target user. "Students at FTCC taking CSC courses" not "all college students everywhere."

❌ **Feature creep in proposal** - You'll be tempted to list 30 features. Don't. MVP means minimum. Cut ruthlessly.

❌ **Choosing a project just like the example in class** - It's fine to be inspired, but make it your own. Employers can spot clone projects.

### My Advice:

Think about friction in your daily life. What's annoying? What do you do manually that could be automated? What information is scattered that should be centralized?

**Best projects come from real frustrations.**

I once had a student build a "parking spot timer" because they got tired of parking tickets. Another built a "textbook exchange" after spending $400 on books. Both were great projects because they solved real problems.

**What problem bugs you enough to spend 16 weeks solving it?**

See you in class for the Agile simulation!

— Andrew
