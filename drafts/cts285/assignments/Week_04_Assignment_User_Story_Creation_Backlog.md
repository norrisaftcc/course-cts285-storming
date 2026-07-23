# Week 4 Assignment: User Story Creation & Product Backlog
## CTS-285: Systems Analysis & Design

**Due**: End of Week 4 (Friday, 11:59 PM)
**Points**: 50 (6.7% of 750)
**Submission**: GitHub repository with refined backlog

---

## What You're Learning

This week you'll conduct stakeholder interviews (mock interviews in class with instructor playing stakeholder) and translate what you learn into **well-formed user stories with acceptance criteria**.

By Friday, you'll have a prioritized product backlog of 15+ user stories ready for Sprint 1 design work next week.

**This is the most important PM skill in the course**: Turning messy stakeholder needs into clear, actionable user stories.

---

## Learning Objectives

1. **Conduct** structured stakeholder interviews to gather requirements
2. **Translate** stakeholder needs into user stories with acceptance criteria
3. **Write** acceptance criteria using Given-When-Then format
4. **Prioritize** backlog using MoSCoW method
5. **Refine** user stories based on feedback

---

## Part 1: Stakeholder Interviews (Complete in Class)

### The Activity (60 minutes in class)

You'll conduct mock interviews with instructor (I'll play your stakeholders). Bring your Week 3 interview questions.

**Format**:
- 15 minutes per stakeholder (you'll interview 2-3)
- Take notes (you'll use these to write user stories)
- Ask follow-up questions
- Record pain points, needs, constraints

### Post-Interview Document: `interview-notes.md` (5 points)

After interviews, document what you learned:

**For each stakeholder interviewed**:

**Stakeholder**: [Role]

**Key Insights**:
- [Insight 1 about their needs]
- [Insight 2 about constraints]
- [Insight 3 about priorities]

**Requirements Identified**:
- [Functional requirement 1]
- [Functional requirement 2]
- [Non-functional requirement 1]

**Surprises** (things you didn't expect):
- [Assumption that was wrong]
- [New requirement you hadn't considered]

**Quotes**:
> "[Memorable quote from stakeholder]"

---

## Part 2: User Story Writing (30 points)

### Refine Your Backlog

Take your Week 2 user stories + Week 4 interview insights and create a comprehensive product backlog.

### Requirements

**Create/refine 15-20 user stories** that cover your MVP.

Each user story must include:
1. **User story statement** (As a [role], I want [feature], so that [benefit])
2. **Acceptance criteria** (3-5 criteria in Given-When-Then format)
3. **Priority** (Must Have, Should Have, Could Have, Won't Have)
4. **Estimated story points** (1, 2, 3, 5, 8)

### Where to Document

**Option A** (Recommended): Update your GitHub Issues
- Edit existing user story issues from Week 2
- Add acceptance criteria to description
- Use labels for priority (`must-have`, `should-have`, etc.)
- Use labels for story points (`1-point`, `2-points`, etc.)

**Option B**: Create `product-backlog.md`
- List all stories in one document
- Use headings to organize by priority

### User Story Format

```markdown
## User Story: [Short title]

**As a** [specific user role]
**I want** [specific feature/action]
**So that** [clear benefit/value]

### Acceptance Criteria

**Given** [initial context/state]
**When** [action taken]
**Then** [expected outcome]

**Given** [another context]
**When** [another action]
**Then** [another outcome]

[3-5 total criteria]

### Priority
[Must Have | Should Have | Could Have | Won't Have]

### Story Points
[1, 2, 3, 5, or 8]

### Notes
[Any technical considerations, dependencies, or risks]
```

### Example: Well-Formed User Story

```markdown
## User Story: Student filters events by category

**As a** registered student
**I want** to filter events by category (Academic, Social, Career, Sports, Arts)
**So that** I can quickly find events relevant to my interests without scrolling through everything

### Acceptance Criteria

**Given** I'm on the events browse page with 20+ events visible
**When** I select "Career" from the category filter dropdown
**Then** Only events tagged as "Career" category are displayed
**And** The page shows "Showing X Career events" message
**And** I can clear the filter to see all events again

**Given** No events exist in selected category
**When** I filter by that category
**Then** Page displays "No events found in this category" message
**And** Suggests browsing all events or different category

**Given** I have a category filter active
**When** I select an additional category
**Then** Events matching ANY selected category are shown (OR logic, not AND)

**Given** I'm using mobile device
**When** I apply category filter
**Then** Filter persists when I navigate to event details and back

### Priority
Must Have (Core browsing functionality)

### Story Points
3 (Moderate - involves database query, UI dropdown, filter logic, mobile testing)

### Notes
- Categories must match what event organizers can select when creating events
- Consider adding category icons for visual scanning
- Risk: If we add many filters (date, location, category), need to think about filter combination logic
```

### Story Point Estimation Guide

Use Fibonacci scale (reflects uncertainty in larger tasks):

- **1 point**: 1-2 hours, very simple
  - Example: "Add footer with contact link"

- **2 points**: 2-4 hours, simple
  - Example: "Student can view event details page"

- **3 points**: 4-8 hours, moderate complexity
  - Example: "Student can RSVP for event"

- **5 points**: 8-16 hours, complex
  - Example: "Event organizer dashboard with analytics"

- **8 points**: 16+ hours, very complex (consider splitting)
  - Example: "Complete user authentication system with email verification"

**If story feels bigger than 8 points, split it into smaller stories.**

---

## Part 3: Backlog Prioritization (10 points)

### Use MoSCoW Method

Categorize your stories:

**Must Have** (Critical for MVP):
- System doesn't work without these
- Core value proposition depends on these
- 6-8 stories typically

**Should Have** (Important but not critical):
- Adds significant value
- Can work around if missing initially
- 4-6 stories typically

**Could Have** (Nice to have):
- Improves experience
- Deliver if time permits
- 3-5 stories typically

**Won't Have** (Out of scope for this semester):
- Explicitly document what you're NOT doing
- Prevents scope creep
- 2-3 stories typically

### Create `backlog-prioritization.md`

Document your prioritization decisions:

#### Must Have Stories (and why)

List your Must Have stories and explain why each is critical:

**Story**: [Title]
**Why Must Have**: [Explanation of why MVP can't work without this]

#### Should Have Stories (and why)

[Same format]

#### Could Have Stories (and trade-offs)

[Same format, plus note about what you'd cut if time runs short]

#### Won't Have Stories (and why not)

**Important**: Explicitly document features you considered but decided against.

Example:
> **Story**: Social sharing to Instagram
> **Why Won't Have**: Adds technical complexity (Instagram API), low value for MVP (students can manually share), distracts from core discovery feature. Revisit in Version 2 if adoption is strong.

---

## Part 4: Backlog Review & Refinement (5 points)

### Validation Checklist

Go through your backlog and verify:

**Each user story**:
- [ ] Follows "As a [role], I want [feature], so that [benefit]" format
- [ ] Role is specific (not just "user")
- [ ] Benefit is clear (not just restating feature)
- [ ] Has 3-5 acceptance criteria
- [ ] Acceptance criteria use Given-When-Then format
- [ ] Is estimated with story points
- [ ] Is prioritized (MoSCoW)
- [ ] Is independently valuable (could ship just this story)
- [ ] Is small enough to complete in days, not weeks

**Across backlog**:
- [ ] 15-20 stories total
- [ ] Stories cover all main user roles
- [ ] Stories cover full user journey (discover → use → return → admin)
- [ ] Mix of story sizes (not all 1s, not all 8s)
- [ ] Must Haves are achievable in 6 weeks (Sprints 1-3)
- [ ] Dependencies noted where stories depend on others

### Create `backlog-review.md`

**Section 1: Backlog Statistics**
- Total stories: [X]
- Must Have: [X stories, Y total story points]
- Should Have: [X stories, Y total story points]
- Could Have: [X stories, Y total story points]
- Won't Have: [X stories]

**Section 2: User Coverage**
- [Role 1]: [X stories]
- [Role 2]: [X stories]
- [Role 3]: [X stories]

**Section 3: Risks & Dependencies**
- [Story A] depends on [Story B] being done first
- [Story C] has technical risk: [explain risk]

**Section 4: Backlog Completeness**
Answer: "Can a developer build the MVP from these stories alone, or is critical information missing?"

If information is missing, note what else needs to be documented.

---

## Deliverables Checklist

- [ ] `interview-notes.md` (stakeholder interview insights)
- [ ] GitHub Issues updated with 15-20 user stories OR `product-backlog.md`
- [ ] Each story has acceptance criteria, priority, story points
- [ ] `backlog-prioritization.md` (MoSCoW rationale)
- [ ] `backlog-review.md` (validation & statistics)
- [ ] GitHub Project board updated (stories in Backlog column)
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Interview Notes** | 5 | Key insights captured, requirements identified, surprises noted |
| **User Stories** | 30 | 15-20 stories, proper format, 3-5 acceptance criteria each, estimated, prioritized |
| **Prioritization** | 10 | Clear MoSCoW categories, rationale for Must Haves, Won't Haves documented |
| **Backlog Review** | 5 | Statistics accurate, validation checklist completed, risks identified |
| **Total** | 50 | |

### What Earns Full Points

**User Stories**:
- Benefit is clear (not "so that I can use the feature")
- Acceptance criteria are testable (not vague like "works well")
- Story points are realistic (not all 1s or all 8s)
- Coverage is complete (no major user journey gaps)

**Prioritization**:
- Must Haves are truly essential (not just "I want this")
- Won't Haves are documented (scope discipline shown)
- Trade-offs explained (why Should Have not Must Have)

---

## Common Issues

**Issue**: "My acceptance criteria sound like a to-do list, not Given-When-Then"

Bad:
> - User can click button
> - System saves data
> - Page refreshes

Good:
> **Given** user has filled out event form with valid data
> **When** user clicks "Create Event" button
> **Then** event is saved to database
> **And** user is redirected to event details page
> **And** success message displays: "Event created successfully"

**Solution**: Always include context (Given), action (When), and observable outcome (Then).

**Issue**: "I have 30 story ideas, can't cut down to 15-20"

**Solution**: That's good! It means your project has legs. Ruthlessly apply MoSCoW:
- Move less critical stories to Should/Could Have
- Remember: You can always add more stories later
- Better to complete 15 well than start 30 poorly

**Issue**: "My stories all feel huge (8+ points)"

**Solution**: Split them. Big story template:
- Original: "User can manage their profile"
- Split 1: "User can view their profile"
- Split 2: "User can edit their profile"
- Split 3: "User can upload profile photo"
- Split 4: "User can change password"

**Issue**: "I'm not sure what story points to assign"

**Solution**: It's okay to guess! You'll refine estimates during Sprint Planning next week. For now:
- Anything touching database: At least 3 points
- Anything with authentication: At least 5 points
- Simple display/view: 1-2 points

---

## Resources

- **User Story Writing**: [Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/user-stories)
- **Acceptance Criteria**: [Agile Alliance](https://www.agilealliance.org/glossary/acceptance-criteria/)
- **MoSCoW Method**: [ProductPlan Guide](https://www.productplan.com/glossary/moscow-prioritization/)
- **Story Splitting**: [Richard Lawrence's Patterns](https://www.agileforall.com/patterns-for-splitting-user-stories/)

---

## Looking Ahead: Sprint 1 (Weeks 5-6)

Next week you start your first complete sprint! You'll:
- Plan Sprint 1 using these user stories
- Estimate capacity and select stories for sprint
- Create system design (UML, ERD, wireframes) for selected stories
- Execute daily standups
- Complete Sprint retrospective

**Your backlog becomes your roadmap.** The clearer your stories now, the smoother Sprint 1 goes.

---

## Andrew's Note

User stories are a love letter to your future self.

Six weeks from now, when you're implementing features, you'll be grateful for clear acceptance criteria. Vague stories like "user can search" become "wait, search by what? Show results how? What if no results?"

Clear stories with testable acceptance criteria = you know exactly what to build and when you're done.

### Common Beginner Mistakes:

❌ **Stories focused on UI, not value**
Bad: "Add a search bar"
Good: "As a student, I want to search events by keyword, so that I can quickly find specific events without browsing"

❌ **Benefits that are just restatements**
Bad: "...so that I can use the search feature"
Good: "...so that I can find my professor's office hour event in under 30 seconds"

❌ **Acceptance criteria that aren't testable**
Bad: "Search works well"
Good: "Given 50 events in database, When I search 'Python', Then events with 'Python' in title or description appear in under 2 seconds"

❌ **Not thinking about edge cases**
Remember: What if there's no data? What if user does something unexpected? What if it's mobile? Your acceptance criteria should cover these.

### What Success Looks Like:

By end of this week, you should be able to hand your backlog to another developer and they could start building without asking clarifying questions.

**That's the bar.**

If they'd need to ask "what should happen when...?" - your acceptance criteria need work.

See you in class for stakeholder interviews!

— Andrew
