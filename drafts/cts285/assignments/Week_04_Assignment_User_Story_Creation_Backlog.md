# Week 4 Assignment: User Story Creation & Product Backlog
## CTS-285: Systems Analysis & Design

**Due**: End of Week 4 (Friday, 11:59 PM)
**Points**: 50 (6.7% of 750)
**Submission**: GitHub repository with refined backlog

---

## What You're Learning

This week you'll build on the three Dataman stakeholder transcripts you analyzed in Week 3 — **Renee** (a parent), **Ms. Alvarez** (a classroom teacher), and **Dale** (a retro collector) — and translate what they need into **well-formed user stories with acceptance criteria**.

By Friday, you'll have a prioritized product backlog of 15+ user stories ready for Sprint 1 design work next week, built on top of the seeded Dataman backlog you initialized in Week 2.

**This is the most important PM skill in the course**: Turning messy stakeholder needs into clear, actionable user stories.

*A note on basis: if your semester project is DataMon rather than Dataman, the process below is identical — swap in your own transcripts, backlog, and device details where it says "your project." Every worked example in this assignment uses Dataman, since that's the shared exemplar the whole class references.*

---

## Learning Objectives

1. **Conduct** structured stakeholder interviews to gather requirements
2. **Translate** stakeholder needs into user stories with acceptance criteria
3. **Write** acceptance criteria using Given-When-Then format
4. **Prioritize** backlog using MoSCoW method
5. **Refine** user stories based on feedback

---

## Part 1: The Rehearsal Interview (Complete in Class)

### The Activity (60 minutes in class)

Last week you wrote `interview-plan.md` — objectives and questions for the places the transcripts left vague or unresolved. **This week you ask them out loud.**

Two of your three stakeholders stay on the page. **Ms. Alvarez does not.**

**A. The two you re-read (about 20 minutes).** Work through Renee's and Dale's transcripts again with a sharper question in mind: *what does each person actually need, as opposed to what they literally asked for?*

- Pull out what they need, what constraints they mentioned, and what surprised you
- Flag anything that sounds like a specific implementation instead of a need — "put a button here" is a solution; "help me do this without waiting" is the underlying need. You will need that distinction for user-story writing
- Flag anywhere the two of them want conflicting things

**B. The rehearsal (about 40 minutes).** Ms. Alvarez is played live, and **you do not get her transcript for this round.** Everything you learn about her, you learn by asking. Bring your `interview-plan.md` questions and use them.

This is a **rehearsal** — low stakes, formative, and ungraded as a performance. The point is reps before it counts. Expect the first few questions to land badly; that is the exercise working.

Three things worth knowing before you start:

- **She answers what she is asked.** She will not volunteer a requirement you did not ask for, and she will not summarize her own needs at the end. An interviewer who does not ask, does not learn — that is the whole lesson and she will not rescue you from it.
- **A question that can only be answered "yes" costs you a turn.** *"Would reporting be useful?"* gets you *"Yes."* Ask what she would need to **see**, and when.
- **Write it down as you go.** Anything said in the room that nobody records did not happen, as far as your backlog is concerned. This is the same rule your Sprint work runs on.

**If you would rather not be interviewed than interview** — some rounds run peer-to-peer, and playing a stakeholder is opt-in. Taking the interviewer seat both rounds is a full participation path, and so is handing the character to a voice agent. Ask; nobody is required to perform.

<!--
  26FA FIX 2026-08-07 — Week_03:103 promised students a live Week 4 interview and this Part
  delivered a transcript re-read, while learning objective 1 still read "Conduct structured
  stakeholder interviews." The promise is now kept, via the rehearsal tier ADR-003:23 already
  specifies. Played from drafts/cts285/shared-dataman-artifacts/Role_Card_Teacher_Alvarez.md
  (Zone A only — Zone B is the answer key and never enters the room).
  Scope held to ADR-003's ladder: 2 canned (Renee, Dale) + 1 rehearsal (Alvarez) + 1 live
  instructor-as-client later. Week_03 was narrowed in the same change — it promised live
  interviews with all three, which the ladder does not provide.
  Points untouched: header 50, Interview Notes row stays 5 (ADR-002).
-->

**Instructor note:** the rehearsal runs from `drafts/cts285/shared-dataman-artifacts/Role_Card_Teacher_Alvarez.md` <!-- PATHFORM: pending spine ruling -->, Zone A only. See `Role_Card_HOWTO.md` for staging and the voice-agent path.

### Post-Interview Document: `interview-notes.md` (5 points)

After the re-read and the rehearsal, document what you learned. **Mark which of the three you learned by reading and which you learned by asking** — the difference is the point of this week.

**For each of the three stakeholders**:

**Stakeholder**: [Renee — Parent | Ms. Alvarez — Teacher | Dale — Retro Collector]

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
> "[Memorable quote from the transcript]"

---

## Part 2: User Story Writing (30 points)

### Refine Your Backlog

Take your Week 2 Dataman backlog (seeded from `Dataman_Seeded_Backlog.md`) plus the insights from this week's `interview-notes.md` and create a comprehensive, refined product backlog.

### Requirements

**Create/refine 15-20 user stories** that cover your MVP. (For Dataman, that's roughly Epics 1–4 of the seeded backlog — Answer Checker, Scoring, Memory Bank, and Curator Console — plus whatever your own transcript analysis surfaced.)

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
## User Story: Learner checks an answer

**As a** learner
**I want** to enter my answer to a math problem and be told right away whether I'm correct
**So that** I can practice and check myself without an adult standing over me

### Acceptance Criteria

**Given** I have entered a problem and an answer
**When** my answer is correct
**Then** the system shows a positive "correct" signal (a light-show reward)
**And** I move on to the next problem

**Given** I have entered a problem and an answer
**When** my answer is wrong on my first try
**Then** the system shows the "EEE" error signal
**And** I'm given a second try at the same problem

**Given** my second answer is also wrong
**When** the error shows a second time
**Then** the system reveals the correct answer
**And** does not offer a third try

**Given** the app has just opened
**When** I start using it
**Then** I land in Answer Checker mode by default — no menu to dig through first

**Given** an answer is incorrect
**When** it's entered
**Then** the system never displays it as if it were correct, even briefly

### Priority
Must Have (the core loop — without it, there's no product to modernize)

### Story Points
3 (Moderate - problem entry, two-try state, correct/incorrect signal, and the "never show wrong as right" guard all touch the same small piece of logic)

### Notes
- This is Epic 1 in the seeded Dataman backlog — the "soul of the device," per Dale's transcript
- Traces to the manual's power-on default (Answer Checker mode) and the two-tries/EEE behavior
- Watch scope: this story is about the answer-checking loop only. Memory Bank (loading specific problem sets) and the games are separate stories — don't let this one balloon into "the whole app"
```

### Story Point Estimation Guide

Use Fibonacci scale (reflects uncertainty in larger tasks):

- **1 point**: 1-2 hours, very simple
  - Example: "Add a low-battery icon to the header"

- **2 points**: 2-4 hours, simple
  - Example: "Learner can view their own most recent score (right / tried)"

- **3 points**: 4-8 hours, moderate complexity
  - Example: "Division problems show a remainder ('r') when they don't come out even"

- **5 points**: 8-16 hours, complex
  - Example: "Curator Console shows attempt-level detail per student — first-try vs. second-try, across a whole class"

- **8 points**: 16+ hours, very complex (consider splitting)
  - Example: "Full curator account system: parent and teacher roles, linking curators to learners, and permissioned access to progress history"

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
> **Story**: A collectible companion that levels up as you get facts right (the seeded backlog's "legacy entertainment module" stretch epic)
> **Why Won't Have**: Fun idea, but it's explicitly below the MVP line — an optional homage bolted onto a different, retired project, not part of modernizing the actual device. Building it means building an entire separate save/collection/progression system on top of the real practice loop. Revisit only if the faithful MVP ships early with time to spare.

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
- [Role 1]: [X stories] (e.g., Learner)
- [Role 2]: [X stories] (e.g., Curator — parent)
- [Role 3]: [X stories] (e.g., Curator — teacher)

**Section 3: Risks & Dependencies**
- [Story A] depends on [Story B] being done first
- [Story C] has technical risk: [explain risk]

**Section 4: Backlog Completeness**
Answer: "Can a developer build the MVP from these stories alone, or is critical information missing?"

If information is missing, note what else needs to be documented.

---

## Deliverables Checklist

- [ ] `interview-notes.md` (stakeholder transcript insights)
- [ ] GitHub Issues updated with 15-20 user stories OR `product-backlog.md`
- [ ] Each story has acceptance criteria, priority, story points
- [ ] `backlog-prioritization.md` (MoSCoW rationale)
- [ ] `backlog-review.md` (validation & statistics)
- [ ] GitHub Project board updated (stories in To Do column)
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Interview Notes** | 5 | Key insights captured, requirements identified, surprises noted; read-vs-asked marked, and the rehearsal produced at least one thing no transcript contains |
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
> - Learner presses GO
> - System checks answer
> - Screen updates

Good:
> **Given** I have entered a problem and typed my answer
> **When** I press GO
> **Then** the system checks my answer against the correct answer
> **And** shows the "correct" light-show if I'm right, or "EEE" if I'm wrong

**Solution**: Always include context (Given), action (When), and observable outcome (Then).

**Issue**: "I have 30 story ideas, can't cut down to 15-20"

**Solution**: That's normal — the full seeded Dataman backlog (core + stretch) runs to about 30 stories itself. It means your project has legs. Ruthlessly apply MoSCoW:
- Move less critical stories to Should/Could Have
- Remember: You can always add more stories later
- Better to complete 15 well than start 30 poorly

**Issue**: "My stories all feel huge (8+ points)"

**Solution**: Split them. Big story template:
- Original: "Curator can manage Memory Bank sets"
- Split 1: "Curator can create a new Memory Bank set"
- Split 2: "Curator can add or remove problems in a set (up to 10)"
- Split 3: "Curator can assign a set to a learner"
- Split 4: "Curator can see which sets are assigned to which learners"

**Issue**: "I'm not sure what story points to assign"

**Solution**: It's okay to guess! You'll refine estimates during Sprint Planning next week. For now:
- Anything touching the database: At least 3 points
- Anything with curator accounts or permissions: At least 5 points
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
