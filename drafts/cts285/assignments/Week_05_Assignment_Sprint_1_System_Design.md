# Week 5-6 Assignment: Sprint 1 - System Design & MVP Planning
## CTS-285: Systems Analysis & Design

**Due**: End of Week 6 (Friday, 11:59 PM)
**Points**: 75 (10.0% of 750)
**Submission**: GitHub repository with design artifacts + Sprint 1 documentation

---

## What You're Learning

**This is your first complete sprint.** You're transitioning from learning *about* Agile to *doing* Agile.

Over the next two weeks, you'll take your project from "good idea" to "designed system ready to build." You'll create the blueprint—UML diagrams, database schemas, wireframes—that guides your implementation in future sprints.

**Your role this sprint: Product Owner (Design Phase)**

As Product Owner, you're responsible for:
- Translating user needs into system design
- Creating visual representations of your system
- Prioritizing which features get built first (MVP)
- Preparing the backlog for development sprints

This sprint weights **technical deliverables** (design artifacts: UML, ERD, wireframes) at 55 of 75 points, **process deliverables** (sprint execution: daily standups) at 10, and **communication** (documentation quality: system design document) at 10.

---

## Learning Objectives

By completing Sprint 1, you will:

1. **Create** UML diagrams (use case, class, sequence) for your information system
2. **Design** an entity-relationship diagram (ERD) for your database
3. **Develop** wireframes for key user interfaces
4. **Plan** a sprint using story point estimation and capacity calculation
5. **Execute** sprint ceremonies (planning, daily standups, review, retrospective)
6. **Document** design decisions and trade-offs made during sprint

---

## Sprint Overview

**Sprint Goal**: Create complete system design ready for development

**Sprint Duration**: 2 weeks (Weeks 5-6)

**Sprint Deliverables**:
- System design document
- 3+ UML diagrams
- Database ERD
- 5+ wireframes for core features
- Sprint planning document
- 10 daily standup entries
- Sprint retrospective

**Story Points**: This sprint contains design tasks worth ~20 story points (you'll estimate specifically during sprint planning)

---

## PREREQUISITE: Sprint Planning (Complete by end of Week 5, Day 1)

Before you start designing, you need to **plan the sprint**.

### Use the Sprint Planning Template

Copy `/courses/CTS-285/planning-sheets/Sprint_Planning_Template.md` into your repository as `sprint-1-planning.md`.

### Fill out these sections:

#### 1. Sprint Goal
One sentence describing what success looks like for this sprint.

Example: *"Create complete system design documentation (diagrams, wireframes, ERD) for the MVP features of the Campus Event Finder."*

#### 2. Selected User Stories
Choose 8-12 user stories from your backlog (created in Week 4) that represent your **Minimum Viable Product** (MVP).

For each story, estimate story points using this scale:
- **1 point** = Very simple (1-2 hours) - e.g., "Design login form wireframe"
- **2 points** = Simple (2-4 hours) - e.g., "Create use case diagram for user registration"
- **3 points** = Moderate (4-8 hours) - e.g., "Design database ERD with 5 related tables"
- **5 points** = Complex (8-16 hours) - e.g., "Create sequence diagram for booking workflow with error handling"
- **8 points** = Very complex (16+ hours) - Probably need to break this down

**Pro Tip**: For a 2-week sprint with ~20 hours available, aim for 18-22 story points total.

#### 3. Sprint Backlog
List the specific **tasks** needed to complete your selected stories.

Example for story "As an admin, I want to manage events so that users see current offerings":
- [ ] Create use case diagram for event management (2 pts)
- [ ] Design event database table in ERD (1 pt)
- [ ] Wireframe: Event creation form (2 pts)
- [ ] Wireframe: Event list view (1 pt)
- [ ] Document admin role permissions (1 pt)

#### 4. Definition of Done
What does "complete" mean for this sprint?

Example:
- [ ] All design artifacts created and committed to GitHub
- [ ] Design document explains rationale for major decisions
- [ ] Wireframes show complete user flows (no dead ends)
- [ ] ERD is in 3rd Normal Form (no redundancy)
- [ ] UML diagrams use correct notation
- [ ] Sprint retrospective completed with action items

#### 5. Capacity Calculation
How much time do you realistically have for sprint work?

- **Available days**: 10 days (2 weeks, Monday-Friday)
- **Hours per day for this class**: 2-3 hours average
- **Total capacity**: ~20-30 hours
- **Buffer for unknowns** (20%): -4-6 hours
- **Realistic capacity**: 16-24 hours

---

## Part 1: UML Diagrams (25 points)

Create **three different UML diagrams** using Draw.io (free, web-based) or another diagramming tool.

### 1. Use Case Diagram (8 points)
**Shows**: Actors (users) and what they can do with your system

**Must include**:
- At least 3 actors (e.g., Guest User, Registered User, Admin)
- At least 8 use cases (actions users perform)
- Relationships: includes, extends (if applicable)
- System boundary box

**Example**: Campus Event Finder might have:
- Actors: Guest, Student, Event Organizer, Admin
- Use cases: Browse Events, Register for Event, Create Event, Manage RSVP List, etc.

**Export** as PNG and save to `docs/diagrams/use-case-diagram.png`

### 2. Class Diagram (10 points)
**Shows**: Key entities (classes) in your system and their relationships

**Must include**:
- At least 5 classes representing your system's domain
- Attributes (properties) for each class
- Methods (behaviors) for each class
- Relationships: associations, multiplicity (1-to-many, many-to-many)
- Inheritance (if applicable)

**Example**: Campus Event Finder might have classes:
- User (attributes: userId, email, name; methods: register(), login())
- Event (attributes: eventId, title, date, location; methods: create(), update(), cancel())
- RSVP (attributes: rsvpId, userId, eventId, status; methods: confirm(), cancel())
- Organizer (inherits from User; additional methods: createEvent(), viewAnalytics())

**Export** as PNG to `docs/diagrams/class-diagram.png`

### 3. Sequence Diagram (7 points)
**Shows**: Step-by-step interaction between system components for ONE specific user scenario

Choose one critical user flow (e.g., "User registers for an event").

**Must include**:
- Actors and system objects involved
- Messages passed between objects (in chronological order)
- At least 8 interaction steps
- Return messages showing flow

**Example**: "Register for Event" sequence:
1. User clicks "Register" button
2. System checks if user is logged in
3. System queries database for event availability
4. Database returns current RSVP count
5. System validates space available
6. System creates RSVP record
7. System sends confirmation email
8. System updates UI with "Registered!" message

**Export** as PNG to `docs/diagrams/sequence-diagram.png`

### UML Grading Criteria
- **Correct notation** (use standard UML symbols): 30%
- **Completeness** (includes all required elements): 40%
- **Clarity** (easy to understand, not cluttered): 20%
- **Relevance** (accurately represents your project): 10%

---

## Part 2: Database Design - ERD (15 points)

Create an **Entity-Relationship Diagram** for your database.

### Requirements

**Must include**:
- At least **5 entities** (database tables)
- **Primary keys** for each entity (e.g., userId, eventId)
- **Foreign keys** showing relationships
- **Attributes** (columns) for each entity with data types noted
- **Relationships** with cardinality (1:1, 1:M, M:N)
- **Junction tables** if you have many-to-many relationships

### Example: Campus Event Finder ERD

**Entities**:
1. **Users** (userId PK, email, passwordHash, firstName, lastName, role)
2. **Events** (eventId PK, title, description, dateTime, location, organizerId FK)
3. **Categories** (categoryId PK, categoryName)
4. **RSVPs** (rsvpId PK, userId FK, eventId FK, rsvpDate, status)
5. **EventCategories** (eventCategoryId PK, eventId FK, categoryId FK) ← junction table

**Relationships**:
- User (1) → (M) Events (one organizer creates many events)
- User (M) ← RSVPs → (M) Events (many users can RSVP to many events - M:N)
- Event (M) ← EventCategories → (M) Categories (events can have multiple categories - M:N)

### Normalization Check

Your ERD must be in **3rd Normal Form** (3NF):
- ✅ No repeating groups (separate tables for related data)
- ✅ All non-key attributes depend on the primary key
- ✅ No transitive dependencies (if A → B and B → C, C should not be in same table as A)

**Use Draw.io** and export as `docs/diagrams/database-erd.png`

### ERD Grading Criteria
- **Sufficient entities** (5+ tables): 20%
- **Correct relationships** (cardinality, foreign keys): 30%
- **Normalized design** (3NF, no redundancy): 30%
- **Data types specified**: 10%
- **Clarity and readability**: 10%

---

## Part 3: Wireframes (15 points)

Create **at least 5 wireframes** for your system's key screens using Figma (free for students) or Balsamiq.

### Requirements

**Wireframes must show**:
- Layout and navigation structure
- All interactive elements (buttons, forms, links)
- Content placeholders (don't need real text, use "Lorem ipsum" or [Placeholder])
- User flow connections (arrows showing what happens when user clicks)

**Required wireframes** (choose what applies to your project):
1. **Landing/Home page** (what users see first)
2. **Main feature page** (your app's core functionality)
3. **Create/Add form** (adding new data - event, recipe, task, etc.)
4. **Detail/View page** (seeing individual item details)
5. **User account/profile page** OR **Admin dashboard**

### Fidelity Level: Low to Mid-Fidelity
- ✅ Show structure and layout
- ✅ Label all elements clearly
- ✅ Indicate where data comes from (e.g., "[List of events from database]")
- ❌ Don't spend time on colors, fonts, images (that's for GRD-242 students!)
- ❌ Don't write actual content (placeholders are fine)

**Pro Tip**: You'll work with graphic design students in CSC-289. These wireframes show them your system's structure—they'll make it pretty. Focus on functionality, not aesthetics.

### Export
- Save each wireframe as PNG in `docs/wireframes/`
- Naming: `wireframe-home.png`, `wireframe-event-details.png`, etc.

### Wireframes Grading Criteria
- **Completeness** (5+ screens, all required views): 30%
- **Functionality clear** (all interactive elements labeled): 30%
- **User flow logical** (navigation makes sense): 25%
- **Annotations explain purpose**: 15%

---

## Part 4: System Design Document (10 points)

Create `docs/system-design.md` that explains your design decisions.

### Include These Sections

#### 1. Project Overview (brief - reference Week 2)
- Project name and target users
- Problem being solved
- MVP feature list (what Sprint 1 covers)

#### 2. System Architecture (300-500 words)
Describe the big picture:
- **Frontend**: What user sees (HTML/CSS/JavaScript, simple templates)
- **Backend**: Flask (Python web framework)
- **Database**: SQLite for development, PostgreSQL for production
- **Deployment**: GitHub (code) + Render (hosting)

Explain why you chose this stack (even if it's "because the course uses it").

#### 3. Design Rationale (400-600 words)
For each design artifact, explain:
- **UML diagrams**: Why did you model these use cases/classes/sequences? What alternatives did you consider?
- **Database ERD**: Why this structure? What relationships are most important?
- **Wireframes**: Why this layout/navigation? How does it serve users?

#### 4. Trade-Offs and Constraints
What did you choose NOT to build for MVP? Why?

Example:
> *"I'm NOT including a payment system in MVP because it adds complexity (PCI compliance, security) without proving core value. If users love the event discovery feature, I'll add paid premium listings in a future sprint."*

#### 5. Technical Risks
What could go wrong during implementation? (You'll track these in your Risk Register next module)

Example risks:
- Database relationships might cause slow queries with large datasets
- User authentication needs to be secure - vulnerability risk if implemented wrong
- Mobile responsiveness not designed yet - might need to rework wireframes

### Design Document Grading Criteria
- **Clarity**: Explanations make sense to someone unfamiliar with your project
- **Depth**: Goes beyond "this is what I made" to "this is why I made it this way"
- **Professional tone**: Could show this to a stakeholder or future employer
- **Honesty**: Acknowledges limitations and risks, not just strengths

---

## Part 5: Sprint Execution - Daily Standups (10 points)

During the 2-week sprint, post **10 daily standup entries** (one per working day).

### Where to Post
Create `sprint-1-standups.md` in your repository.

### Format (Use Daily Standup Template)
For EACH entry, answer these 3 questions:

```markdown
## Standup - [Date]

**What I did yesterday**: [Specific tasks completed]

**What I'm doing today**: [Specific tasks planned]

**Blockers**: [Issues preventing progress, or "None"]
```

### Example

```markdown
## Standup - Monday, Week 5

**What I did yesterday**: Completed sprint planning, estimated 20 story points across 9 user stories

**What I'm doing today**: Start use case diagram, identify all actors and main use cases

**Blockers**: None


## Standup - Tuesday, Week 5

**What I did yesterday**: Created use case diagram with 4 actors and 10 use cases

**What I'm doing today**: Begin class diagram - list entities and attributes

**Blockers**: Unsure if User and Organizer should be separate classes or one class with a role attribute. Will research best practices.


## Standup - Wednesday, Week 5

**What I did yesterday**: Researched inheritance vs composition. Decided on User base class with Organizer subclass. Started class diagram.

**What I'm doing today**: Finish class diagram, start ERD

**Blockers**: None - solved yesterday's blocker through research
```

### Standup Grading Criteria
- **Consistency** (10 entries over 2 weeks): 40%
- **Specificity** (actual tasks, not vague "worked on project"): 30%
- **Honest blocker reporting** (including "None" when appropriate): 20%
- **Progress visible** (can see sprint moving forward): 10%

**Remember**: Standups aren't about perfection - they're about visibility. If you got stuck and made no progress, **that's okay to report**. It helps you (and future team members) understand where challenges arise.

---

## Part 6: Sprint Retrospective (5 bonus points)

At the end of Week 6, reflect on your sprint process.

Copy `/courses/CTS-285/planning-sheets/Sprint_Retrospective_Template.md` into your repo as `sprint-1-retrospective.md`.

### Answer These Questions

#### What Went Well?
What worked smoothly? What would you do the same way next sprint?

#### What Didn't Go Well?
Where did you struggle? What took longer than expected?

#### What Will I Change Next Sprint?
Specific, actionable improvements. Not "work harder" - that's not actionable.

Example: *"I'll front-load research tasks (like deciding on database structure) into Day 1-2 of the sprint so I'm not blocked mid-sprint when I need to start building."*

#### Surprises
Anything unexpected - good or bad?

### Retrospective Grading
- **Honesty** (real reflection, not just "everything was great"): 50%
- **Actionable improvements** (specific changes, not vague): 40%
- **Growth mindset** (learning-focused, not blame-focused): 10%

---

## Deliverables Checklist

Before submitting, verify your repository has:

### Design Artifacts
- [ ] `docs/diagrams/use-case-diagram.png`
- [ ] `docs/diagrams/class-diagram.png`
- [ ] `docs/diagrams/sequence-diagram.png`
- [ ] `docs/diagrams/database-erd.png`
- [ ] `docs/wireframes/` folder with 5+ wireframe PNGs

### Documentation
- [ ] `docs/system-design.md` (complete all 5 sections)
- [ ] `sprint-1-planning.md` (filled sprint planning template)
- [ ] `sprint-1-standups.md` (10 standup entries)
- [ ] `sprint-1-retrospective.md` (filled retrospective template)

### GitHub
- [ ] All files committed with descriptive commit messages
- [ ] Repository shared with instructor
- [ ] README updated with links to design docs

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **UML Diagrams** | 25 | Use case (8), Class (10), Sequence (7) - correct notation, complete |
| **Database ERD** | 15 | 5+ entities, relationships, 3NF, data types |
| **Wireframes** | 15 | 5+ screens, functionality clear, logical flow |
| **System Design Doc** | 10 | Clear rationale, trade-offs explained, risks identified |
| **Daily Standups** | 10 | 10 entries, specific, honest |
| **Sprint Retrospective** | +5 | (Bonus, applied within the 75-point cap) Honest reflection, actionable improvements |
| **Total** | 75 | |

### Grading Philosophy
- **Process = Product** in this assignment. A perfect ERD with no standups earns less than a good ERD with visible sprint execution.
- **Design quality matters**: Diagrams should use correct notation and be readable by another developer.
- **Documentation quality matters**: Can a developer (or future you) understand your decisions 6 months from now?

---

## Common Issues & Solutions

### Issue: "I don't know which UML diagram type to use when"
**Solution**:
- **Use Case**: WHO uses the system and WHAT they do (high-level)
- **Class**: WHAT data/objects exist and HOW they relate (structure)
- **Sequence**: HOW a specific interaction unfolds step-by-step (flow)

### Issue: "My ERD has repeating data / isn't normalized"
**Solution**: If you find yourself storing the same data in multiple places, you need another table. Example: If "category name" appears in Events table repeatedly, create a Categories table and link via foreign key.

### Issue: "I'm spending too much time making wireframes pretty"
**Solution**: STOP. Use grayscale boxes and placeholder text. Prettiness is not graded. Functionality is. You're not a designer (yet) - you're a systems analyst.

### Issue: "I'm way behind on my sprint plan"
**Solution**: This is normal for Sprint 1. Document it honestly in standups. Consider descoping (cutting low-priority user stories). This is what retrospectives are for - learning to estimate better.

### Issue: "My design changed mid-sprint when I realized something wouldn't work"
**Solution**: GOOD! That's iterative design. Document the change in your design doc ("Initial plan was X, but changed to Y because Z"). Shows thinking, not failure.

---

## Resources

- **UML Guide**: [Lucidchart UML Tutorial](https://www.lucidchart.com/pages/uml)
- **ERD Guide**: [DatabaseStar ERD Tutorial](https://www.databasestar.com/database-design-process/)
- **Wireframing Basics**: [Balsamiq Wireframing Guide](https://balsamiq.com/learn/articles/what-are-wireframes/)
- **Draw.io**: [Free diagramming tool](https://www.drawio.com/)
- **Figma for Students**: [Free Figma Education](https://www.figma.com/education/)
- **Database Normalization**: [1NF, 2NF, 3NF Explained Simply](https://www.guru99.com/database-normalization.html)

**Office Hours**: Check Canvas for Zoom link - I'm here to review your diagrams before you finalize!

---

## Looking Ahead: Weeks 7-8 (Sprint 2)

Next sprint, you'll:
- Shift to **Scrum Master role** (facilitation, not just creating artifacts)
- Start **implementing** your design (writing actual code!)
- Learn burndown charts and velocity tracking
- Practice sprint ceremonies with less scaffolding

Sprint 1 is design-heavy. Sprint 2 is where you start building. The blueprints you create this sprint become your guide.

---

## Andrew's Note

This sprint separates "I think this would be cool" from "I know how to build this."

**Design before code** isn't busywork—it's how you avoid rewriting your database schema three times in Week 10 (trust me, I've watched it happen).

The students who succeed in Sprint 2 and beyond are the ones who take design seriously now. You're creating a contract with your future self: "Here's exactly what we're building and why."

### Common Sprint 1 Mistakes to Avoid:
1. **Waiting until Week 6 to start** - Sprint is 2 weeks for a reason. Pace yourself.
2. **Designing too much** - You're building MVP, not the finished product. Cut ruthlessly.
3. **Skipping the "why" in your design doc** - Future-you needs context for decisions.
4. **Fake standups at the end** - Standups written on Day 10 all at once don't help you practice async communication (which you'll need in CSC-289).

### What success looks like:
By end of Week 6, you should be able to hand your design docs to another developer and they could start implementing without asking clarifying questions. That's the bar.

**You're doing real systems analysis work**. Not toy exercises - the actual deliverables that industry analysts create before dev teams write a single line of code.

Proud of you for getting this far. Sprint 1 is challenging but rewarding.

— Andrew

