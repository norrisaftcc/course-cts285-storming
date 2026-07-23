<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/MODULE-ARCHITECTURE-DEVELOPMENT-PHASE.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 spine (team content donor)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CSC-289 Module Architecture: Development Phase (Weeks 9-16)
## Professional Sprint Simulation | 4 Modules x 4 Parts

**Course**: CSC-289 System Support Project (Capstone)
**Phase**: Post-GRD-242 Development (Weeks 9-16)
**Model**: Learn | Practice | Apply | Assess
**Delivery**: Canvas LMS with autograded elements
**Last Updated**: March 13, 2026

---

## Architecture Overview

Each module is one 2-week sprint. Each module has 4 parts that mirror a professional sprint cycle. Students move through Learn (briefing) > Practice (individual skill verification) > Apply (team project work + professional discourse) > Assess (professional demonstration).

```
MODULE N (2 weeks)
├── LEARN: Professional Briefing + Entry Gate
│   ├── Industry Context Card (Canvas Page)
│   ├── Claude Code Technique of the Sprint (Canvas Page)
│   └── Entry Ticket (Canvas Quiz - auto-graded, unlimited attempts)
│
├── PRACTICE: Skill Verification Labs
│   ├── Solo Skill Task A (Canvas Assignment or Quiz - auto/rubric)
│   ├── Solo Skill Task B (Canvas Assignment, Quiz, or Peer Review)
│   └── [Optional Stretch Task]
│
├── APPLY: Project Milestones + Professional Discourse
│   ├── Sprint Planning Sheet (Canvas Assignment - partial auto-grade)
│   ├── Standup Log (Canvas Assignment - partial auto-grade)
│   ├── Discussion Board (Canvas Discussion - simplified rubric)
│   ├── Project Milestone (Canvas Assignment - rubric)
│   └── Exit Ticket / Retrospective (Canvas Assignment - structured)
│
└── ASSESS: Professional Demonstration
    ├── Sprint Scorecard (Canvas Quiz - auto-graded)
    └── Sprint Review Assessment (Instructor-graded rubric)
```

### Role Rotation Across Modules

| Module | Sprint | Team Roles | Rationale |
|--------|--------|-----------|-----------|
| 5 | S5 (Dev Sprint 1) | All Developers | Establish baseline, learn codebase together |
| 6 | S6 (Dev Sprint 2) | Scrum Master + Developers | SM leads ceremonies, practices facilitation |
| 7 | S7 (Dev Sprint 3) | Rotate SM, add QA Lead + Developers | QA owns testing, new SM gets leadership experience |
| 8 | S8 (Dev Sprint 4) | Self-organized | Team chooses own structure -- capstone autonomy test |

### Claude Code Scaffolding Across Modules

| Module | Claude Code Focus | Capability Introduced |
|--------|------------------|----------------------|
| 5 | Foundation | Basic usage: writing code with AI, iterative prompting, reading AI output critically |
| 6 | Context | CLAUDE.md as project memory, giving Claude both sides of integration problems |
| 7 | Debugging | Multi-file debugging, "What If" edge case exploration, test generation |
| 8 | Professional | Code review assistance, documentation generation, demo prep |

---

## Points Architecture

| Part | Per Module | 4 Modules | Canvas Type |
|------|-----------|-----------|-------------|
| **Learn** (Entry Ticket) | 10 pts | 40 pts | Quiz (auto) |
| **Practice** (Skill Labs) | 30 pts | 120 pts | Mixed auto + rubric |
| **Apply** (Project + Discussion) | 50 pts | 200 pts | Assignment + Discussion (rubric) |
| **Assess** (Scorecard + Review) | 40 pts | 160 pts | Quiz (auto) + Rubric |
| **Continuous Process** | -- | 280 pts | Ongoing assessment |
| **TOTAL** | **130 pts** | **800 pts** | |

---
---

# MODULE 5: First Vertical Slice (Weeks 9-10)

**Sprint Theme**: "Get One Thing Working End to End"
**Role Structure**: All Developers
**Claude Code Focus**: Foundation -- basic usage and iterative prompting

---

## Module 5 CLO/MLO Alignment

**CLOs Addressed**: CLO 1 (Project lifecycle), CLO 5 (Documentation), CLO 6 (Professional practices)

**Module Learning Outcomes**:
- **MLO 5.1**: Complete at least one full Sacred Flow cycle (Issue > Branch > PR > Review > Merge) using Claude Code for implementation assistance (Apply) [CLO 1, CLO 6]
- **MLO 5.2**: Document iterative AI-assisted development by recording Claude Code prompt refinement across at least 3 iterations with before/after comparisons (Analyze) [CLO 6]
- **MLO 5.3**: Deliver a working vertical slice of the team application that can be demonstrated live (Create) [CLO 1]

---

## M5-LEARN: Professional Briefing + Entry Gate

### Industry Context Card (Canvas Page)

**Title**: "Your First Week on the Job"

**Content** (~500 words):

You just started at a software company. Your manager walks over Monday morning and says: "We need the login flow working by Friday. Not perfect -- working. Users should be able to sign up, log in, and see their dashboard. Don't worry about password reset, email verification, or profile editing yet. Just get the vertical slice."

This is how real development works. Not "build the whole thing and show it at the end." Build one thin slice through the entire stack -- frontend to backend to database -- and prove it works. Then iterate.

Why vertical slices matter:
- They force integration early (before integration becomes terrifying)
- They give stakeholders something real to react to (not wireframes, not slides -- running software)
- They reveal assumptions that were wrong (the API doesn't work the way you thought, the data model is missing a field)
- They build team confidence ("We shipped something. We can ship more.")

This sprint, your team will pick ONE user flow and get it working end to end. It doesn't need to be beautiful. It doesn't need to handle edge cases. It needs to run.

**Professional Reference**: This is the Agile concept of a "walking skeleton" -- a tiny implementation that walks through the full architecture. Martin Fowler writes about this. ThoughtWorks uses this pattern on every new project. You're doing what professionals do in their first sprint on a new product.

### Claude Code Technique: Foundation

**Title**: "Claude Code Is Not a Slot Machine"

**Content** (~400 words):

Claude Code is your AI pair programmer. It's powerful. It's also dangerous if you use it wrong.

**The slot machine anti-pattern**: You type a vague prompt ("make a login page"), Claude generates 200 lines of code, you paste it into your project, it doesn't work, you ask Claude to fix it, you paste again. You're pulling a lever and hoping for a jackpot. Stop.

**The professional pattern**: Give Claude context. Be specific. Iterate.

Bad prompt: "Build me a login form"
Good prompt: "I'm building a React login form that posts to /api/auth/login. The API expects { email, password } and returns { token, user }. I'm using fetch, not axios. Show me the form component with basic validation."

Better: After Claude generates code, READ IT. Ask: "What does line 14 do?" If you can't answer, you don't understand your own code. Ask Claude to explain. Modify. Push.

**CLAUDE.md**: Create a file called CLAUDE.md at the root of your repository. This is Claude's memory of your project. Include:
- Project name and one-sentence description
- Tech stack (frontend framework, backend language, database)
- How to run the project locally (exact commands)
- File structure overview
- Any conventions your team uses

Every time you start a Claude Code session, it reads this file. Keep it updated. Your AI is only as good as the context you give it.

**This sprint's Claude Code goal**: Use Claude Code for at least one implementation task. Document at least 3 iterative prompts (show how your prompt improved as you gave Claude better context).

### Entry Ticket (Canvas Quiz)

**Title**: M5-ENTRY: Development Phase Readiness Check
**Settings**: Auto-graded, unlimited attempts, best score kept, randomized from question bank
**Points**: 10

**Question Bank** (15 questions, student sees 8, randomized):

1. What are the 5 columns on your GitHub Project Board? [Multiple choice]
   - A) Backlog, Sprint Backlog, In Progress, In Review, Done [CORRECT]
   - B) To Do, Doing, Done, Testing, Deployed
   - C) Ideas, Planning, Building, Reviewing, Complete
   - D) New, Open, In Progress, Resolved, Closed

2. In the Sacred Flow, what comes immediately AFTER creating a branch? [Multiple choice]
   - A) Merge to main
   - B) Open a Draft Pull Request [CORRECT]
   - C) Write all the code
   - D) Request a code review

3. Your team completed 12 story points last sprint. What should you commit to this sprint? [Multiple choice]
   - A) 20 points (aim high!)
   - B) 12 points (match your velocity) [CORRECT]
   - C) 6 points (play it safe)
   - D) As many as possible

4. What is a "vertical slice"? [Multiple choice]
   - A) A feature that only touches the frontend
   - B) A thin implementation that works through the entire stack (frontend to database) [CORRECT]
   - C) A detailed design document for one feature
   - D) The first page a user sees

5. Which is a BETTER Claude Code prompt? [Multiple choice]
   - A) "Make a user authentication system"
   - B) "Create a React login form that POSTs to /api/auth/login with email and password fields, using fetch" [CORRECT]
   - C) "Write all the code for my project"
   - D) "Fix my code"

6. What belongs in CLAUDE.md? [Select all that apply]
   - A) Project name and description [CORRECT]
   - B) Your personal diary entries
   - C) Tech stack decisions [CORRECT]
   - D) How to run the project locally [CORRECT]
   - E) Your team's Slack messages

7. What does "branch protection on main" prevent? [Multiple choice]
   - A) Anyone from reading the code
   - B) Direct commits to main without a PR review [CORRECT]
   - C) Creating new branches
   - D) Pushing any code to the repository

8. A teammate says "I've been working on it at home" but has no commits or branches. What should you think? [Multiple choice]
   - A) They're working really hard
   - B) If it's not pushed, it doesn't exist -- help them push their work [CORRECT]
   - C) Wait until they're done
   - D) Report them to the instructor

9. What are the 3 daily standup questions? [Short answer - auto-graded with keyword matching]
   - Expected: What I accomplished / What I'll work on / Blockers (or equivalent)

10. You're reviewing a teammate's PR. Which is the BEST review comment? [Multiple choice]
    - A) "LGTM"
    - B) "This function handles the happy path well, but what happens if `userData` is null? Consider adding a guard clause on line 23." [CORRECT]
    - C) "I don't like this code"
    - D) "Approved"

11. What does "Closes #7" in a PR description do? [Multiple choice]
    - A) Nothing, it's just a comment
    - B) Automatically closes Issue #7 when the PR is merged [CORRECT]
    - C) Deletes Issue #7 immediately
    - D) Assigns Issue #7 to you

12. Your CLAUDE.md says your project uses Express.js, but you switched to FastAPI last week. What should you do? [Multiple choice]
    - A) Nothing, CLAUDE.md is a one-time setup
    - B) Update CLAUDE.md to reflect the current tech stack [CORRECT]
    - C) Delete CLAUDE.md
    - D) Create a new file called CLAUDE2.md

13. When should you open a Draft PR? [Multiple choice]
    - A) After all the code is written and tested
    - B) Early, before you start coding, to signal what you're working on [CORRECT]
    - C) Only when the instructor asks you to
    - D) Never, just use regular PRs

14. What is the purpose of a sprint retrospective? [Multiple choice]
    - A) To assign blame for what went wrong
    - B) To reflect on what went well, what didn't, and commit to one improvement [CORRECT]
    - C) To plan the next sprint
    - D) To demo working software

15. Your team planned 15 story points but only completed 8. Is this a failure? [Multiple choice]
    - A) Yes, the team underperformed
    - B) No -- adjust next sprint's commitment to 8-10 points and analyze why in the retrospective [CORRECT]
    - C) Yes, everyone should work harder
    - D) No, story points don't matter

---

## M5-PRACTICE: Skill Verification Labs

### Practice Task A: Sacred Workflow Solo Run

**Title**: M5-P1: Sacred Workflow + Claude Code Certification
**Canvas Type**: Assignment (rubric-scored)
**Points**: 20
**Attempts**: Resubmission allowed until end of module
**Due**: End of Week 9 (mid-sprint checkpoint)

**Instructions**:

Complete one full Sacred Flow cycle in your team's repository. This is an individual task -- YOUR issue, YOUR branch, YOUR PR.

1. **Create an Issue** on your team's GitHub Project Board. It should be a real (small) piece of work, not a placeholder. Move it to "Sprint Backlog."
2. **Create a Branch** from main using the naming convention: `feature/issue-NUMBER-short-description`
3. **Open a Draft PR** immediately (before coding). Link it to your issue.
4. **Write the code** using Claude Code for at least part of the implementation. Document your Claude Code conversation:
   - First prompt (what you asked)
   - What Claude generated
   - How you refined the prompt (at least 2 more iterations)
   - What you modified from Claude's output and why
5. **Push your code** and mark the PR as ready for review.
6. **Get a review** from a teammate (at minimum 1 approval).
7. **Merge** the PR. Ensure "Closes #N" is in the PR description.
8. **Move your issue** to "Done" on the board.

**Submit**:
- Link to your merged PR
- Screenshot of your issue in the "Done" column
- Claude Code conversation log (copy-paste or screenshot) showing 3+ iterative prompts
- 1 paragraph (100-200 words): What did Claude generate that you kept as-is? What did you change? Why?

**Rubric** (20 pts):

| Criterion | Full (5 pts) | Partial (3 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Sacred Flow compliance** | All 7 steps completed correctly, issue linked, PR merged | Most steps completed, minor gaps | Steps missing or out of order |
| **Claude Code documentation** | 3+ iterative prompts showing refinement | 1-2 prompts, limited refinement | No documentation or single prompt |
| **Code quality** | Code works, meaningful contribution, readable | Code works but trivial or messy | Code doesn't work or is copy-paste without understanding |
| **Reflection** | Specific about what Claude generated vs. what was modified, shows critical thinking | General reflection, lacks specifics | No reflection or "Claude did everything" |

### Practice Task B: Sprint Planning Simulation

**Title**: M5-P2: Sprint Planning Simulation
**Canvas Type**: Quiz (auto-graded)
**Points**: 10
**Attempts**: Unlimited, best score kept
**Randomization**: Questions drawn from bank, order shuffled

**Scenario**: You are given a backlog of 12 user stories with story point estimates. Your team has 3 developers. Based on prior sprints, your team velocity is 18 points per 2-week sprint.

**Question Bank** (10 questions, student sees 7):

1. Given the backlog below, which stories would you select for a sprint with 18-point capacity? [Scenario-based multiple choice -- 3 variations with different backlogs]

2. Story #4 depends on Story #2, but Story #2 isn't in this sprint. What do you do? [Multiple choice]
   - A) Include both stories [CORRECT - if capacity allows]
   - B) Include #4 without #2
   - C) Skip both stories
   - D) Remove the dependency

3. Your sprint goal is "Users can sign up and log in." Which story does NOT align with this sprint goal? [Multiple choice with 3 variations]

4. You have 18 points of capacity. Your team wants to commit to 25 points "just in case we're faster this time." What's your response? [Multiple choice]

5. Write a sprint goal for this set of stories: [Story list provided]. [Short answer, keyword-matched for specificity]

6. A teammate wants to work on a "nice to have" feature instead of a "must have." What should you do? [Multiple choice]

7. You finished sprint planning in 20 minutes with only 10 points committed. Is this okay? [Multiple choice -- answer: depends on velocity data]

---

## M5-APPLY: Project Milestones + Professional Discourse

### Sprint Planning Sheet

**Title**: M5-A1: Sprint 5 Planning Sheet
**Canvas Type**: Assignment (partially auto-gradable)
**Points**: 15
**Due**: End of Day 2 (Week 9)

**Template** (students complete and submit):

```markdown
# Sprint 5 Planning Sheet
**Team**: [Team Name]
**Sprint Dates**: [Week 9 Start] - [Week 10 End]
**Sprint Goal**: [One sentence: what will be TRUE at the end of this sprint that isn't true now?]

## Capacity
- Team members: [names]
- Available days per person: [number] (account for absences)
- Team velocity (from prior sprints): [number] pts
- This sprint commitment: [number] pts

## Selected Stories
| Issue # | Title | Story Points | Assigned To | Dependencies |
|---------|-------|-------------|-------------|--------------|
| | | | | |

## Sprint Backlog Total: [X] pts (should be <= velocity)

## Risks
- Risk 1: [description] | Mitigation: [plan]
- Risk 2: [description] | Mitigation: [plan]

## Definition of Done (for this sprint)
- [ ] Code compiles/runs without errors
- [ ] PR reviewed and approved by at least 1 teammate
- [ ] Issue moved to "Done" on board
- [ ] CLAUDE.md updated if architecture changed
```

**Auto-gradable elements** (Canvas checklist/field validation):
- Sprint goal field populated (not blank)
- Capacity section complete
- At least 3 stories selected
- Total points do not exceed velocity by more than 20%
- At least 1 risk identified

**Instructor-graded elements**:
- Sprint goal quality (specific, achievable, valuable)
- Story selection realism
- Risk identification depth

### Standup Log

**Title**: M5-A2: Sprint 5 Standup Log
**Canvas Type**: Assignment (partially auto-gradable)
**Points**: 10
**Due**: End of Week 10

**Instructions**: Maintain daily standup entries for 10 working days. Post as committed markdown file in your team repo OR as a Canvas text submission.

**Required format per day**:
```markdown
## Standup: [Date]
**Yesterday**: [What I accomplished - be specific, reference issues/PRs]
**Today**: [What I'll work on - reference specific issue #]
**Blockers**: [Any blockers or "None"]
**Claude Code note**: [Optional - anything notable about AI usage today]
```

**Auto-gradable**: Entry count (minimum 8 of 10 days for full credit)
**Instructor spot-check**: Quality, honesty, specificity (sampled, not read daily)

**Scoring**:
- 10/10 days: 10 pts
- 8-9/10 days: 8 pts
- 6-7/10 days: 5 pts
- <6 days: 2 pts

### Discussion Board

**Title**: M5-A3: Vertical Slice Strategy
**Canvas Type**: Discussion (simplified rubric)
**Points**: 10
**Due**: Initial post by end of Week 9, reply by end of Week 10

**Prompt**:

Post your team's vertical slice plan (250-400 words):
1. What is the ONE user flow you're getting working end to end this sprint?
2. What layers does it touch? (frontend, backend, database, external APIs?)
3. What's the riskiest part? What could go wrong?
4. How are you splitting the work across team members?

Reply to at least ONE other team's post (100-200 words):
- What risk do you see in their plan that they might not have considered?
- OR share a similar challenge your team faced and how you approached it.

**Simplified Discussion Rubric** (10 pts):

| Criterion | Full (4-5 pts) | Partial (2-3 pts) | Missing (0-1 pts) |
|-----------|---------------|-------------------|-------------------|
| **Substance** (5 pts) | Specific feature named, layers identified, risk analyzed | General plan, lacks specifics | Vague or off-topic |
| **Engagement** (5 pts) | Reply adds real value (identifies risk or shares experience) | Reply present but shallow ("good plan!") | No reply |

### Project Milestone

**Title**: M5-A4: First Vertical Slice Delivery
**Canvas Type**: Assignment (rubric-scored)
**Points**: 15
**Due**: End of Week 10 (sprint end)

**Deliverable**: Submit evidence that your team delivered a working vertical slice.

**Submit**:
- Link to team GitHub repository
- Link to GitHub Project Board (screenshot or URL showing cards in "Done")
- Demo evidence: either a live URL, a screen recording (2-5 min), or confirmation of in-class demo
- Brief description (100-200 words): What does the vertical slice do? What's the user flow?

**Rubric** (15 pts):

| Criterion | Full | Partial | Missing |
|-----------|------|---------|---------|
| **Working software** (6 pts) | Vertical slice runs, user can complete the flow | Partially works, some steps broken | Nothing runs |
| **Team contribution** (4 pts) | Multiple team members have merged PRs | Only 1-2 people contributed | One person did everything |
| **Board hygiene** (3 pts) | Cards moved through columns, Done reflects reality | Board exists but not maintained | No board activity |
| **CLAUDE.md** (2 pts) | Exists, current, includes tech stack + how to run | Exists but outdated or incomplete | Missing |

### Exit Ticket / Sprint Retrospective

**Title**: M5-A5: Sprint 5 Retrospective + Exit Ticket
**Canvas Type**: Assignment (structured template)
**Points**: Included in Continuous Process Assessment (not separately pointed here)

**Template**:
```markdown
# Sprint 5 Retrospective
**Team**: [Name]
**Date**: [Date]

## What Went Well (minimum 3 items with evidence)
1. [Item] - Evidence: [PR link, board screenshot, etc.]
2.
3.

## What Didn't Go Well (minimum 2 items -- be honest)
1.
2.

## Action Item for Sprint 6
- **What**: [Specific change]
- **Owner**: [Name]
- **How we'll measure it**: [Metric]

## Velocity
- **Committed**: [X] pts
- **Completed**: [X] pts
- **Accuracy**: [X]%

## Claude Code Reflection
- Most useful prompt this sprint: [paste it]
- What I'd do differently with Claude Code next sprint: [specific improvement]

## Individual Exit Ticket (each team member completes)
- **Confidence level** (1-5): How confident am I in our project direction?
- **Process check** (1-5): How well did we follow Sacred Flow this sprint?
- **One thing I learned**: [specific]
- **One question I have going into Sprint 6**: [specific]
```

---

## M5-ASSESS: Professional Demonstration

### Sprint Scorecard

**Title**: M5-ASSESS-1: Sprint 5 Scorecard
**Canvas Type**: Quiz (auto-graded)
**Points**: 15
**Attempts**: 1 (this is an honest self-report, not a knowledge check)

**Instructions**: Answer honestly. Your instructor will spot-check responses against your GitHub activity. Misrepresentation is an academic integrity issue.

1. How many PRs did you personally author and merge this sprint? [Numeric: 0-10]
2. How many PRs did you review for teammates? [Numeric: 0-10]
3. How many standup entries did your team post (total across all members)? [Numeric: 0-50]
4. Is your team's CLAUDE.md up to date as of today? [Yes/No]
5. Did your team complete a sprint planning document? [Yes/No]
6. Did your team hold a sprint review with a working demo? [Yes/No]
7. How many story points did your team commit? [Numeric]
8. How many story points did your team complete? [Numeric]
9. How many Claude Code conversations did you have this sprint? [Numeric: 0-20]
10. Rate your Claude Code usage sophistication this sprint. [1-5 scale: 1=copy-paste, 3=iterative, 5=strategic context-setting]

**Auto-scoring**: Points awarded based on thresholds:
- PRs authored >= 1: 2 pts
- PRs reviewed >= 1: 2 pts
- Standup entries >= 8: 2 pts
- CLAUDE.md current: 1 pt
- Planning doc complete: 1 pt
- Sprint review held: 1 pt
- Velocity accuracy >= 60%: 2 pts
- Claude Code conversations >= 3: 2 pts
- Claude Code sophistication >= 3: 2 pts

### Sprint Review Assessment

**Title**: M5-ASSESS-2: Sprint 5 Review
**Canvas Type**: Assignment (instructor-graded rubric)
**Points**: 25
**Format**: In-class demo or recorded video (5-7 minutes)

**Rubric** (25 pts):

| Criterion | Excellent (23-25) | Proficient (18-22) | Developing (12-17) | Needs Improvement (0-11) |
|-----------|-------------------|--------------------|--------------------|--------------------------|
| **Working Software** (10 pts) | Vertical slice runs live, user flow complete, handles basic interaction | Demo works with minor issues or workarounds | Demo partially works, needs explanation | Nothing runs or crashes during demo |
| **Team Process** (8 pts) | Board reflects reality, planning doc complete, standups consistent, retro thoughtful | Most artifacts present, minor gaps | Gaps in artifacts, board not current | Missing critical artifacts |
| **Communication** (4 pts) | Clear demo narrative, time-managed, questions handled well | Adequate presentation, covers main points | Disorganized or significantly over/under time | Unprepared or unable to explain |
| **Claude Code Evidence** (3 pts) | Documented iterative usage, can explain what was generated vs. modified | Some evidence of usage | Minimal or undocumented usage | No evidence |

---
---

# MODULE 6: Core Features (Weeks 11-12)

**Sprint Theme**: "Build the Thing People Will Actually Use"
**Role Structure**: Scrum Master + Developers (SM assigned, leads ceremonies)
**Claude Code Focus**: Context -- CLAUDE.md management and integration debugging

---

## Module 6 CLO/MLO Alignment

**CLOs Addressed**: CLO 1 (Project lifecycle), CLO 2 (Collaboration), CLO 4 (Adapt plans), CLO 6 (Professional practices)

**Module Learning Outcomes**:
- **MLO 6.1**: Lead or participate in Scrum ceremonies with defined roles, demonstrating professional facilitation and collaboration (Apply) [CLO 1, CLO 2]
- **MLO 6.2**: Integrate frontend and backend components, debugging cross-layer issues using Claude Code with full project context (Analyze) [CLO 6]
- **MLO 6.3**: Perform meaningful code review that identifies substantive issues beyond formatting (Evaluate) [CLO 2, CLO 6]
- **MLO 6.4**: Adjust sprint scope based on velocity data from Sprint 5 (Evaluate) [CLO 4]

---

## M6-LEARN: Professional Briefing + Entry Gate

### Industry Context Card (Canvas Page)

**Title**: "Integration Is Where Projects Die"

**Content** (~500 words):

Here's a pattern that kills projects: Developer A builds a beautiful frontend. Developer B builds a solid backend API. Week 4, they try to connect them. Nothing works. The frontend sends data in a format the backend doesn't expect. The API returns errors the frontend doesn't handle. CORS blocks everything. Authentication tokens aren't being passed correctly.

This isn't a coding problem. It's a communication problem. A and B didn't talk about their contract -- what data goes where, in what format, with what authentication.

This sprint, your team is building core features. That means integration. Frontend meets backend. Components meet each other. Your individual work meets your teammates' work. This is where teams succeed or fail.

Professional technique: **Integration-first development**. Before you build your piece, agree on the interface. What does the API endpoint accept? What does it return? Write the contract first, then build to it. When something breaks, give Claude Code BOTH sides -- the frontend code AND the API endpoint -- and ask it to find the mismatch.

Your Scrum Master this sprint is responsible for keeping integration on track. That means the SM should be asking in every standup: "Have you tested your code against the actual API yet? Not Postman -- the actual frontend."

### Claude Code Technique: Context Management

**Title**: "CLAUDE.md Is Your AI's Memory"

**Content** (~400 words):

Your CLAUDE.md is probably outdated. You wrote it in Sprint 5. You've since changed your database schema, added two API endpoints, and switched from localStorage to cookies for auth. Claude doesn't know any of this.

Update your CLAUDE.md now. Add these sections:
- **Current file structure** (what's in /src, /api, /public)
- **API endpoints** (route, method, request body, response shape)
- **Database schema** (tables/collections and their fields)
- **Known issues** (what's broken right now that Claude should know about)

**Integration debugging with Claude Code**: When something breaks between frontend and backend, give Claude BOTH files. Don't ask "why doesn't my frontend work?" Ask: "Here's my frontend fetch call (paste code) and here's my Express route handler (paste code). The frontend gets a 401 error. Why?"

The more context you give, the better the answer. This is true for AI. It's also true for humans. Your teammates can't help you debug if you just say "it's broken." Show them the code.

### Entry Ticket (Canvas Quiz)

**Title**: M6-ENTRY: Integration Readiness Check
**Settings**: Auto-graded, unlimited attempts, best score, randomized
**Points**: 10

**Question Bank** (12 questions, student sees 8):

1. Your frontend sends `{ userName: "alice" }` but your backend expects `{ username: "alice" }`. What type of bug is this? [Multiple choice: data contract mismatch]

2. What does a CORS error mean? [Multiple choice]

3. Your team completed 12 story points in Sprint 5. You want to commit 18 this sprint because "we're faster now." Is this a good idea? [Multiple choice: No -- commit to 12-14]

4. What should a Scrum Master do during a daily standup? [Multiple choice: Facilitate, time-keep, remove blockers -- NOT assign tasks]

5. Your teammate's PR has working code but no comments, no tests, and unclear variable names. What's the right review response? [Multiple choice: Request changes with specific suggestions]

6. When updating CLAUDE.md, which of these should you include? [Select all that apply]

7. You're debugging a 401 error. What information should you give Claude Code? [Multiple choice: Both the frontend request code AND the backend auth handler]

8. What is "rubber-stamp reviewing"? [Multiple choice: Approving PRs without actually reading the code]

9. A Scrum Master notices one team member hasn't committed in 3 days. What should they do? [Multiple choice: Ask privately if they're blocked and offer help]

10. Your CLAUDE.md still says "Tech stack: TBD." When should you update it? [Multiple choice: Immediately -- it should always reflect current reality]

11. What's the difference between a Draft PR and a regular PR? [Multiple choice]

12. Your team's velocity was 12 pts last sprint. Your board has 30 pts in the backlog. How do you prioritize for this sprint? [Scenario-based]

---

## M6-PRACTICE: Skill Verification Labs

### Practice Task A: Code Review Proficiency

**Title**: M6-P1: Meaningful Code Review
**Canvas Type**: Peer Review Assignment
**Points**: 20
**Attempts**: Resubmission allowed

**Part 1 -- Review a Sample PR** (10 pts):

A sample PR is provided (instructor-created, intentionally contains 3-4 issues):
- One logic error (off-by-one, missing null check)
- One security concern (hardcoded API key, SQL injection risk)
- One maintainability issue (unclear variable names, duplicated code)
- One style issue (inconsistent formatting)

Student writes a review comment for each issue found using this format:
```
**Line [N]**: [Category: Logic/Security/Maintainability/Style]
**Issue**: [What's wrong]
**Suggestion**: [How to fix it]
**Severity**: [Must fix / Should fix / Consider]
```

**Rubric**:
| Criterion | Full (5 pts) | Partial (3 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Issues found** | Identified 3+ real issues | Found 1-2 issues | Found 0 or only style nits |
| **Suggestion quality** | Specific, actionable, explains WHY | General suggestions | No suggestions or wrong advice |

**Part 2 -- Review a Teammate's PR** (10 pts):

Using Canvas peer review, each student is assigned a teammate's actual PR. Write at least 2 substantive review comments (not "LGTM"). Submit the review comments as text.

**Rubric**:
| Criterion | Full (5 pts) | Partial (3 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Substantive comments** | 2+ comments addressing logic, architecture, or usability | 1 substantive comment | Only style nits or "LGTM" |
| **Professional tone** | Constructive, respectful, explains reasoning | Adequate tone | Dismissive, vague, or rude |

### Practice Task B: Integration Debugging Quiz

**Title**: M6-P2: Integration Debugging Scenarios
**Canvas Type**: Quiz (auto-graded)
**Points**: 10
**Attempts**: Unlimited, best score
**Randomization**: From question bank

**Question Bank** (10 questions, student sees 6):

1. [Scenario: Frontend fetch returns 500. Backend log shows "Cannot read property 'email' of undefined." What's the likely cause?] -- request body not being parsed (missing middleware)

2. [Scenario: API works in Postman but frontend gets CORS error.] -- CORS not configured for frontend origin

3. [Scenario: Login works locally but not in deployed version.] -- hardcoded localhost URL in frontend

4. [Scenario: Data saves to database but doesn't appear on the page.] -- frontend not re-fetching after POST / state not updating

5. [Scenario: Auth token is sent but backend says "unauthorized."] -- token format wrong (Bearer prefix missing) or token expired

6. [Scenario: Form submits but sends empty data.] -- form inputs not bound to state / missing name attributes

7-10. [Additional scenario variations with different tech stacks]

---

## M6-APPLY: Project Milestones + Professional Discourse

### Sprint Planning Sheet

**Title**: M6-A1: Sprint 6 Planning Sheet
**Canvas Type**: Assignment (partially auto-gradable)
**Points**: 15
**Due**: End of Day 2 (Week 11)

Same template as M5-A1 with additions:
- **Scrum Master** field: [Name of SM for this sprint]
- **Sprint 5 velocity**: [X] pts committed, [X] completed
- **Retro action item from Sprint 5**: [What was it? How are we addressing it?]
- **Integration plan**: Which components are connecting this sprint? Who is responsible for the integration points?

### Standup Log

**Title**: M6-A2: Sprint 6 Standup Log
**Same structure as M5-A2**: 10 pts, 8/10 days minimum

### Discussion Board

**Title**: M6-A3: Integration War Stories
**Canvas Type**: Discussion (simplified rubric)
**Points**: 10

**Prompt**: Post about a code integration challenge your team faced this sprint (250-400 words):
1. What were you trying to connect? (frontend to API, component to component, etc.)
2. What broke? Be specific -- include the error message or describe the behavior.
3. How did you debug it? Did you use Claude Code? What context did you give it?
4. What was the fix?

Reply to another team: Share a similar experience OR suggest an alternative debugging approach they could try.

### Project Milestone

**Title**: M6-A4: Core Feature Delivery
**Canvas Type**: Assignment (rubric-scored)
**Points**: 15

**Submit**:
- Link to team repository (show 3+ merged PRs this sprint)
- Link to updated CLAUDE.md (must reflect current architecture)
- Demo evidence of core feature(s) working end to end
- Brief description: What can a USER do now that they couldn't do at Sprint 5 end?

**Rubric** (15 pts):

| Criterion | Full | Partial | Missing |
|-----------|------|---------|---------|
| **Core features working** (6 pts) | User can complete primary flow(s) | Partially working, some steps manual | Core flow broken |
| **Integration** (4 pts) | Frontend and backend connected, data flows correctly | Partial integration, some manual steps | Components isolated |
| **PR volume + quality** (3 pts) | 3+ PRs with meaningful reviews | 1-2 PRs or rubber-stamp reviews | No PRs or direct commits to main |
| **CLAUDE.md current** (2 pts) | Reflects current tech stack, endpoints, schema | Exists but outdated | Missing or Sprint 5 content |

### Exit Ticket / Sprint Retrospective

**Title**: M6-A5: Sprint 6 Retrospective + Exit Ticket
Same template as M5-A5 with additions:
- **SM Reflection**: (Scrum Master only) What was hardest about facilitating? What would you do differently?
- **Integration specific**: What was the hardest integration challenge? How did you solve it?
- **CLAUDE.md update check**: Did you update CLAUDE.md this sprint? What changed?

---

## M6-ASSESS: Professional Demonstration

### Sprint Scorecard

**Title**: M6-ASSESS-1: Sprint 6 Scorecard
**Same structure as M5**: 15 pts, auto-graded self-report
Additional questions:
- Did your Scrum Master lead sprint planning? [Yes/No]
- Did your team update CLAUDE.md this sprint? [Yes/No]
- How many code review comments did you write (not counting "LGTM")? [Numeric]

### Sprint Review Assessment

**Title**: M6-ASSESS-2: Sprint 6 Review
**Points**: 25
**Same rubric as M5 with adjusted criteria**:

| Criterion | Excellent | Proficient | Developing | Needs Improvement |
|-----------|-----------|-----------|-----------|------------------|
| **Working Software** (10 pts) | Core features work end to end, integration solid, user-facing value clear | Features work with minor gaps | Partial functionality, integration issues | No working demo |
| **Team Process** (8 pts) | SM facilitated effectively, ceremonies documented, velocity calibrated, retro action item from S5 addressed | Most process artifacts present | Gaps in process, SM role unclear | Minimal process evidence |
| **Code Review Quality** (4 pts) | PR reviews show substantive comments, real issues caught | Reviews present but surface-level | Reviews are rubber-stamps | No review activity |
| **Claude Code Growth** (3 pts) | CLAUDE.md current, context-rich prompts documented, integration debugging with Claude shown | Some Claude usage shown | Minimal usage | No evidence |

---
---

# MODULE 7: Polish, Edge Cases & Deployment (Weeks 13-14)

**Sprint Theme**: "Make It Real"
**Role Structure**: Rotated SM + QA Lead + Developers
**Claude Code Focus**: Debugging -- multi-file debugging, edge cases, test generation

---

## Module 7 CLO/MLO Alignment

**CLOs Addressed**: CLO 1, CLO 4 (Adapt plans), CLO 5 (Documentation), CLO 6 (Professional practices)

**Module Learning Outcomes**:
- **MLO 7.1**: Identify and resolve edge cases using adversarial "What If" testing, documenting each as a GitHub Issue with fix (Analyze) [CLO 4, CLO 6]
- **MLO 7.2**: Prepare deployment-ready application with documented setup process reproducible by someone outside the team (Create) [CLO 5, CLO 6]
- **MLO 7.3**: Make and document a feature freeze decision with rationale for what's in vs. what's cut (Evaluate) [CLO 1, CLO 4]
- **MLO 7.4**: Fulfill QA Lead role by owning testing strategy and acceptance criteria validation (Apply) [CLO 1, CLO 6]

---

## M7-LEARN: Professional Briefing + Entry Gate

### Industry Context Card (Canvas Page)

**Title**: "Nobody Enters a Negative Number (Until They Do)"

**Content** (~500 words):

Your app works. The happy path is smooth. User signs up, logs in, sees their dashboard, does the thing. Ship it, right?

Wrong. Here's what happens in production:
- A user enters their phone number in the email field
- Someone pastes an emoji into a search box
- The database returns an empty array and your frontend tries to access `results[0].name`
- Two people edit the same record at the same time
- The API you depend on goes down for 4 hours on a Saturday

These aren't edge cases -- they're Tuesday. Every production application handles unexpected input, missing data, concurrent access, and service failures. The question isn't IF these happen, but WHETHER your app crashes or handles them gracefully.

This sprint, your team will stress-test your application. Your QA Lead will own the testing strategy. You'll also have the deployment conversation: can someone who isn't on your team clone your repo and run your app in under 10 minutes? If not, your setup docs aren't done.

And the hardest part: feature freeze. Sprint 8 is "Ship It" -- no new features. That means everything that's going to be in your demo MUST be in the codebase by the end of this sprint. If it's not in by Sprint 7's end, it's not in. Period.

### Claude Code Technique: Debugging + Edge Cases

**Title**: "What If? (Let Claude Help You Break Things)"

**Content** (~400 words):

Claude Code is excellent at finding edge cases. Try these prompts:

"Look at this function (paste code). What inputs would cause it to fail? Give me 5 edge cases I haven't considered."

"Here's my Express route handler and my React component that calls it. What happens if the API returns a 500 error? Show me how to handle it gracefully on both sides."

"Generate 10 test cases for this function, including edge cases for empty input, null values, extremely long strings, and negative numbers."

"Review my app for hardcoded values that would break in production: localhost URLs, hardcoded ports, API keys in source code, absolute file paths."

The goal isn't to fix every edge case. It's to FIND them, document them as GitHub Issues, and prioritize: which ones are demo-killers (fix now), which are "known issues" (document and move on)?

### Entry Ticket (Canvas Quiz)

**Title**: M7-ENTRY: Quality & Deployment Readiness
**Settings**: Auto-graded, unlimited attempts, randomized
**Points**: 10

**Question Bank** (12 questions, student sees 8):

1. Your app crashes when the user enters an empty string. What kind of bug is this? [Input validation / edge case]
2. What does "feature freeze" mean? [No new features -- only bug fixes, polish, and documentation]
3. Your teammate says "It works on my machine." What's the professional response? [Document the setup so it works on ANY machine]
4. Which of these belongs in a .env file, NOT in your source code? [API keys, database URLs]
5. A QA Lead's primary responsibility is: [Owning the testing strategy and validating acceptance criteria]
6. You have 5 known bugs. 2 crash the app, 2 are cosmetic, 1 is a typo. How do you prioritize? [Fix crashers first, document cosmetic, fix typo if time]
7. What command would someone need to run your app after cloning? If you can't answer this in 3 commands, what's missing? [Setup documentation]
8. Your team wants to add "dark mode" in Sprint 7. Is this appropriate? [No -- feature freeze; add to v2.0 backlog]
9. What should a deployment readiness checklist include? [Select all: setup docs, no hardcoded URLs, secrets in .env, can run from clean checkout]
10. Claude Code prompt: Which is better for finding edge cases? [Options comparing vague vs. specific prompts]

---

## M7-PRACTICE: Skill Verification Labs

### Practice Task A: "What If" Edge Case Challenge

**Title**: M7-P1: Adversarial Edge Case Discovery
**Canvas Type**: Assignment (rubric-scored)
**Points**: 20
**Attempts**: Resubmission allowed

**Instructions**:

Use Claude Code and your own adversarial thinking to find and fix 3 edge cases in your team's application.

For each edge case:
1. **Scenario**: What unexpected input or condition did you test?
2. **Result**: What happened? (crash, error message, wrong data, etc.)
3. **GitHub Issue**: Link to the issue you created
4. **Fix**: Link to the PR that addresses it (or document why you chose not to fix it and labeled it "known issue")
5. **Claude Code log**: Show the prompt you used to discover or fix this edge case

**Edge Case Categories** (find at least 1 from each category):
- **Bad input**: Empty strings, special characters, extremely long input, negative numbers, SQL injection attempts
- **Missing data**: Empty database, null API response, user not logged in
- **State issues**: Concurrent edits, stale data, expired sessions

**Rubric** (20 pts):

| Criterion | Full (7 pts) | Partial (4 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Edge cases found** | 3+ real edge cases from different categories | 1-2 edge cases or all from same category | No edge cases found |
| **Documentation quality** | Issues well-written with reproduction steps | Issues exist but vague | No issues created |
| **Fix or triage** | Each case has a PR fix or documented "known issue" rationale | Some cases addressed | No fixes or triage |

### Practice Task B: Deployment Readiness Audit

**Title**: M7-P2: Deployment Self-Audit
**Canvas Type**: Quiz (auto-graded checklist) + Assignment
**Points**: 10

**Part 1 -- Checklist Quiz** (5 pts, auto-graded):

Answer each question after actually checking your codebase:

1. Can someone clone your repo and run the app with 3 or fewer commands? [Yes/No]
2. Are all API keys and secrets in .env (not hardcoded in source)? [Yes/No]
3. Is .env listed in .gitignore? [Yes/No]
4. Does your README include setup instructions? [Yes/No]
5. Are there any hardcoded `localhost` URLs in production code? [Yes/No -- correct answer is No]
6. Does your app specify its dependencies in package.json / requirements.txt / equivalent? [Yes/No]
7. Have you tested the setup process by cloning into a fresh directory? [Yes/No]

Scoring: 1 pt per correct "ready" answer (minimum 5/7 for full credit)

**Part 2 -- Setup Documentation** (5 pts, rubric-scored):

Submit your README's "Installation / How to Run" section. Instructor evaluates whether an outsider could actually run the app from these instructions.

---

## M7-APPLY: Project Milestones + Professional Discourse

### Sprint Planning Sheet

**Title**: M7-A1: Sprint 7 Planning Sheet
**Points**: 15

Same template with additions:
- **QA Lead**: [Name]
- **Testing strategy**: How will the QA Lead verify acceptance criteria this sprint?
- **Feature freeze plan**: What features are IN for the final demo? What's CUT? (with brief rationale for each cut)

### Standup Log

**Title**: M7-A2: Sprint 7 Standup Log
**Points**: 10 (same structure)

### Discussion Board

**Title**: M7-A3: Feature Freeze Decisions
**Canvas Type**: Discussion
**Points**: 10

**Prompt**: Post your team's feature freeze decision (250-400 words):
1. What features are IN for the final demo? List each with current status (done, in progress, needs polish).
2. What features are CUT? For each, explain WHY (not enough time, too risky, not MVP, etc.).
3. What was the hardest cut? How did you decide?

Reply to another team: Do you agree with their cuts? What would you have prioritized differently? Be specific and constructive.

### Project Milestone

**Title**: M7-A4: Hardened Application Delivery
**Points**: 15

**Submit**:
- Links to 3 edge case issues (created and triaged)
- Link to setup documentation (README or separate doc)
- Feature freeze plan (committed to repo)
- Demo evidence showing edge case handling (screenshot or recording of graceful error handling)

**Rubric** (15 pts):

| Criterion | Full | Partial | Missing |
|-----------|------|---------|---------|
| **Edge case handling** (5 pts) | 3+ edge cases found, documented, and fixed or triaged | 1-2 edge cases | No edge case work |
| **Setup docs** (4 pts) | Outsider could run the app from docs alone | Docs exist but incomplete | No setup docs |
| **Feature freeze** (3 pts) | Clear plan with rationale for cuts | Plan exists but vague | No plan |
| **Polish** (3 pts) | App handles errors gracefully, no crashes on bad input | Some error handling | Crashes on common edge cases |

### Exit Ticket / Sprint Retrospective

Same structure with additions:
- **QA Lead Reflection**: (QA Lead only) What was your testing strategy? What would you change?
- **Feature freeze reflection**: Are you confident in what's in vs. out? What's the biggest risk going into Sprint 8?
- **Deployment status**: Can an outsider run your app? What's still needed?

---

## M7-ASSESS: Professional Demonstration

### Sprint Scorecard (15 pts, auto-graded) -- same structure with additions:
- Did your QA Lead own the testing strategy? [Yes/No]
- How many edge case issues did your team create? [Numeric]
- Is your feature freeze plan documented? [Yes/No]
- Have you tested your setup docs by cloning to a fresh directory? [Yes/No]

### Sprint Review Assessment (25 pts) -- adjusted rubric:

| Criterion | Excellent | Proficient | Developing | Needs Improvement |
|-----------|-----------|-----------|-----------|------------------|
| **Hardened Application** (10 pts) | Handles edge cases gracefully, no crashes, errors are user-friendly | Most happy paths work, some edge cases handled | Happy path works, crashes on edge cases | Significant bugs in core flow |
| **Deployment Readiness** (6 pts) | Setup docs verified, app runs from clean checkout, no hardcoded values | Docs exist, minor issues | Docs incomplete, some manual steps needed | Can't run outside dev machine |
| **Feature Freeze Discipline** (5 pts) | Clear plan, rationale documented, team aligned | Plan exists, some ambiguity | Vague plan or disagreement | No plan, still adding features |
| **Claude Code Sophistication** (4 pts) | Multi-file debugging demonstrated, edge case discovery with AI, prompts show growth | Adequate usage | Minimal usage | No evidence |

---
---

# MODULE 8: Ship It (Weeks 15-16)

**Sprint Theme**: "Ship It"
**Role Structure**: Self-organized (team chooses own structure)
**Claude Code Focus**: Professional -- documentation, code review prep, demo readiness

---

## Module 8 CLO/MLO Alignment

**CLOs Addressed**: ALL CLOs (1-6)

**Module Learning Outcomes**:
- **MLO 8.1**: Deliver a working application demonstrated live to stakeholders in a professional presentation format (Create) [CLO 1, CLO 6]
- **MLO 8.2**: Self-organize team roles and responsibilities without instructor assignment, demonstrating capstone autonomy (Evaluate) [CLO 1, CLO 2]
- **MLO 8.3**: Compile a process portfolio with velocity data, retrospective insights, and Claude Code usage growth as evidence of professional development (Create) [CLO 4, CLO 5]
- **MLO 8.4**: Articulate lessons learned about team development, AI-assisted coding, and professional workflow in a reflective format (Evaluate) [CLO 5]

---

## M8-LEARN: Professional Briefing + Entry Gate

### Industry Context Card (Canvas Page)

**Title**: "You Will Never Feel Ready. Ship It Anyway."

**Content** (~500 words):

There's a bug in the settings page. The mobile layout is slightly off on Galaxy phones. The error messages could be more descriptive. The loading spinner sometimes flashes for a split second when it shouldn't.

Ship it.

Every piece of software you'll ever ship in your career will have known issues. Gmail launched with 1 GB of storage and a "beta" label it kept for 5 years. The first iPhone couldn't copy and paste. Twitter was famous for its "fail whale" when it crashed under load. They shipped anyway.

Your job this sprint is NOT to make your application perfect. Your job is to:
1. Fix bugs that would crash the demo
2. Polish the user experience enough to demo confidently
3. Write a demo script so your team knows who says what
4. Practice the demo so it feels natural
5. Compile your process portfolio (this is your resume artifact)

NO NEW FEATURES. If it's not in the codebase at the start of this sprint, it's not going in. The answer to "can we just add one more thing?" is no. Feature freeze is absolute. Professional teams ship imperfect software on schedule rather than perfect software never.

Bug bash: Your team will swap with another team and try to break each other's apps. Every bug found becomes a GitHub Issue. You'll triage them: demo-killer (fix now), cosmetic (document), or known issue (log and move on). This is how real QA works.

### Claude Code Technique: Professional Polish

**Title**: "Let Claude Help You Ship"

**Content** (~400 words):

This sprint, use Claude Code for professional polish tasks:

**Documentation**: "Read my codebase and generate a comprehensive README that includes: project description, features list, tech stack, installation instructions, and screenshots placeholder sections."

**Code review prep**: "Review this file for code quality issues: unused variables, inconsistent naming, missing error handling, potential security concerns. Prioritize by severity."

**Demo prep**: "Given this user flow (describe it), what are the 3 most likely things that could go wrong during a live demo? How should I handle each one?"

**Testing**: "Generate a list of 10 things a user might try that could break this feature. For each, tell me if my current code handles it."

Your CLAUDE.md should be in its final form this sprint. It should read like a professional project brief that any developer could pick up and understand your application.

### Entry Ticket (Canvas Quiz)

**Title**: M8-ENTRY: Ship Readiness
**Points**: 10
**Settings**: Auto-graded, unlimited attempts, randomized

**Question Bank** (10 questions, student sees 8):

1. It's Sprint 8. A teammate wants to add user profile pictures. What's your response? [No -- feature freeze]
2. During your demo, the API returns a 500 error. What do you do? [Acknowledge it, show the feature another way or explain the backup plan, move on]
3. Your process portfolio should include evidence from: [All sprints, not just the last one]
4. What is a "bug bash"? [Teams swap and try to break each other's apps, logging issues]
5. When triaging bugs, "demo-killer" means: [Bug that would crash or embarrass during live demo]
6. Your demo script should include: [Who presents what, the narrative, timing, backup plan]
7. A "known issue" should be: [Documented in GitHub Issues with severity label, not hidden]
8. What's the most important thing about your demo? [Show working software from the USER's perspective, not code]
9. Your process portfolio velocity chart should show: [Sprint-over-sprint improvement in estimation accuracy]
10. Self-organizing means: [Team decides their own role structure and workflow without instructor assignment]

---

## M8-PRACTICE: Skill Verification Labs

### Practice Task A: Demo Script

**Title**: M8-P1: Demo Script + Backup Plan
**Canvas Type**: Assignment (rubric-scored)
**Points**: 15
**Due**: End of Week 15

**Instructions**:

Write your team's demo script for Demo Day. This is a professional deliverable -- treat it like a presentation plan for a client meeting.

**Required sections**:

```markdown
# Demo Script: [Project Name]
**Duration**: 5-7 minutes
**Presenters**: [List names and sections]

## 1. Opening (30 seconds)
- **Presenter**: [Name]
- **Script**: [One-sentence pitch: what problem does your app solve?]

## 2. Core Demo (3-4 minutes)
- **Presenter**: [Name]
- **User flow**: [Step-by-step: what the user does, what happens on screen]
- **Talking points**: [What to say while demonstrating]
- **Transition**: [How to hand off to next presenter]

## 3. Technical Highlight (1 minute)
- **Presenter**: [Name]
- **What to show**: [Interesting technical decision, architecture, or challenge solved]

## 4. Process Journey (1 minute)
- **Presenter**: [Name]
- **Velocity chart**: [Show estimation accuracy improvement]
- **Key retrospective learning**: [One specific improvement the team made]

## 5. Close (30 seconds)
- **What's next**: [v2.0 features or lessons learned]
- **Credits**: [GRD designer, instructors, teammates]

## Backup Plans
- **If [feature] crashes**: [What to do instead]
- **If we run over time**: [What to cut]
- **If someone asks a question we can't answer**: [How to handle it]
```

**Rubric** (15 pts):

| Criterion | Full (5 pts) | Partial (3 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Structure** | All sections complete, timing realistic, roles assigned | Most sections present | Missing critical sections |
| **User perspective** | Demo shows user flow, not code architecture | Mix of user and code focus | All code, no user perspective |
| **Backup plans** | Specific, realistic plans for 2+ failure scenarios | Generic plans | No backup plans |

### Practice Task B: Individual Contribution Portfolio

**Title**: M8-P2: Individual Contribution Log
**Canvas Type**: Assignment (rubric-scored)
**Points**: 15
**Due**: End of Week 16

**Instructions**:

Document YOUR personal contributions across all 4 development sprints. This becomes a portfolio artifact you can show employers.

**Required sections**:

```markdown
# Individual Contribution Portfolio
**Name**: [Your Name]
**Team**: [Team Name]
**Role(s) Held**: [Developer (S5), SM (S6), QA Lead (S7), etc.]

## Sprint-by-Sprint Contributions

### Sprint 5: [Your main contribution]
- PRs authored: [links]
- PRs reviewed: [links]
- Key decision or problem solved: [describe]

### Sprint 6: [Your main contribution]
[same structure]

### Sprint 7: [Your main contribution]
[same structure]

### Sprint 8: [Your main contribution]
[same structure]

## Claude Code Usage Growth
- **Sprint 5**: [How I used Claude Code - basic prompting]
- **Sprint 6**: [How my usage evolved - context management]
- **Sprint 7**: [Growth - debugging, edge cases]
- **Sprint 8**: [Current sophistication - documentation, review]
- **Best prompt I wrote** (copy-paste): [the actual prompt]
- **What I'd tell a new Claude Code user**: [1-2 sentences of advice]

## Process Reflection (200-300 words)
- What did I learn about working on a team?
- What would I do differently if I started over?
- What skill from this course will I use in my first job?
```

**Rubric** (15 pts):

| Criterion | Full (5 pts) | Partial (3 pts) | Missing (0 pts) |
|-----------|-------------|-----------------|-----------------|
| **Completeness** | All 4 sprints documented with specific PR links and descriptions | Some sprints documented | Missing sprints |
| **Claude Code growth** | Clear progression from basic to sophisticated usage shown | Some usage documented | No Claude Code reflection |
| **Reflection depth** | Specific, personal, connects to career goals | General reflection | No reflection or generic |

---

## M8-APPLY: Project Milestones + Professional Discourse

### Sprint Planning Sheet

**Title**: M8-A1: Sprint 8 Planning Sheet
**Points**: 10 (reduced -- this sprint's scope is narrower)

**Key additions**:
- **Self-organization plan**: How did your team decide on roles/structure for this sprint? (No instructor assignment -- this is your choice)
- **Bug bash results**: List of bugs found by other team(s), with triage priority
- **Demo readiness checklist**:
  - [ ] App runs from clean checkout
  - [ ] Main user journey works without errors
  - [ ] Edge cases don't crash the app
  - [ ] Each team member can speak to their contributions
  - [ ] Demo script written with backup plans
  - [ ] CLAUDE.md and README current

### Standup Log

**Title**: M8-A2: Sprint 8 Standup Log
**Points**: 10

### Discussion Board

**Title**: M8-A3: Post-Demo Reflection
**Canvas Type**: Discussion
**Points**: 10
**Due**: After Demo Day

**Prompt**: Post your Demo Day reflection (250-400 words):
1. What went well in your demo?
2. What would you change about your presentation?
3. What's the most important thing you learned from watching OTHER teams demo?
4. If you had one more sprint, what would you do?

Reply to another team: Give them specific, constructive feedback on their demo. What was their strongest moment? What could they improve?

### Project Milestone

**Title**: M8-A4: Ship-Ready Application
**Points**: 15

**Submit**:
- Live application URL (or setup documentation if deployment isn't feasible)
- Link to final GitHub repository
- Link to CLAUDE.md (final version)
- Link to README (final version)
- Link to demo recording (if not done live)

**Rubric** (15 pts):

| Criterion | Full | Partial | Missing |
|-----------|------|---------|---------|
| **App works** (5 pts) | Core flows work, handles errors, no crashes | Works with minor issues | Significant bugs or crashes |
| **Repository quality** (4 pts) | Clean structure, README complete, CLAUDE.md current, .gitignore proper | Most items present | Messy repo, missing docs |
| **Bug triage** (3 pts) | Known issues documented with severity, demo-killers fixed | Some issues documented | No bug triage |
| **Professional polish** (3 pts) | Consistent UI, error messages user-friendly, loading states handled | Adequate polish | Rough edges throughout |

### Exit Ticket / Course Retrospective

**Title**: M8-A5: Course Retrospective + Final Exit Ticket
**Points**: Included in Continuous Process Assessment

**Template** (expanded for final sprint):
```markdown
# Sprint 8 Retrospective + Course Retrospective

## Sprint 8: What Went Well / What Didn't / Action Item
[Standard retro format]

## Course-Level Reflection

### The Development Phase (Sprints 5-8)
- **Best sprint**: [which one and why]
- **Hardest sprint**: [which one and why]
- **Biggest team challenge**: [what happened and how you handled it]

### Role Rotation Reflection
- **As Developer (S5)**: [what I learned]
- **As/with SM (S6)**: [what I learned about facilitation]
- **As/with QA Lead (S7)**: [what I learned about quality]
- **Self-organized (S8)**: [what I learned about autonomy]

### Claude Code Journey
- Sprint 5 usage: [description]
- Sprint 8 usage: [description]
- How my prompting improved: [specific example]

### Career Readiness Self-Assessment
Rate yourself 1-5 on each:
- [ ] I can follow Sacred Flow independently
- [ ] I can plan and execute a sprint
- [ ] I can give a meaningful code review
- [ ] I can debug integration issues
- [ ] I can use AI tools professionally (not as a slot machine)
- [ ] I can work on a team with defined roles
- [ ] I can adapt when plans change
- [ ] I can present working software to stakeholders
```

---

## M8-ASSESS: Professional Demonstration

### Sprint Scorecard (15 pts, auto-graded)

Same structure, plus final questions:
- Did your team self-organize without instructor role assignment? [Yes/No]
- Did your team conduct a bug bash? [Yes/No]
- Is your application accessible via URL or documented setup? [Yes/No]
- How many total PRs were merged across all 4 development sprints? [Numeric]
- Rate your overall team collaboration this phase [1-5]
- Rate your overall Claude Code proficiency growth [1-5]

### Sprint Review Assessment -- Demo Day

**Title**: M8-ASSESS-2: Demo Day Assessment
**Points**: 25
**Format**: Live presentation (5-7 minutes) + Q&A (3-5 minutes)

**Rubric** (25 pts):

| Criterion | Excellent (23-25) | Proficient (18-22) | Developing (12-17) | Needs Improvement (0-11) |
|-----------|-------------------|--------------------|--------------------|--------------------------|
| **Working Software Demo** (8 pts) | Core flows demonstrated live, handles user interaction, shows real value | Demo works with minor issues | Demo partially works, heavy narration needed | Nothing runs or major crashes |
| **Presentation Quality** (6 pts) | Clear narrative (problem > solution > demo > journey), time-managed, confident delivery | Covers main points, adequate delivery | Disorganized, over/under time, nervous | Unprepared, can't explain decisions |
| **Process Journey** (5 pts) | Velocity chart shown, estimation improvement explained, retrospective insights shared, role rotation reflection | Some process evidence shared | Minimal process discussion | No process discussion |
| **Team Contribution** (3 pts) | Every member speaks, contributions clear, collaboration evident | Most members contribute | Uneven participation | One person presents everything |
| **Claude Code Mastery** (3 pts) | Can articulate how AI usage evolved, shows sophisticated prompting, explains trade-offs | Mentions Claude Code usage | Minimal mention | No mention |

---
---

# Continuous Process Assessment (280 pts)

Evaluated across all 4 modules by the instructor, based on ongoing observation and artifact review.

| Category | Points | What's Evaluated |
|----------|--------|-----------------|
| **Sacred Flow Compliance** | 60 pts | PR workflow followed consistently, branches named correctly, issues linked, reviews before merge |
| **Sprint Discipline** | 60 pts | Planning docs complete and realistic, standups consistent (8+/10 days), reviews demo working software, retros honest with action items |
| **Collaboration & Roles** | 50 pts | Team communication, role rotation engagement, constructive code reviews, SM/QA effectiveness |
| **Claude Code Proficiency Growth** | 40 pts | Usage documented, sophistication increases across sprints, CLAUDE.md maintained, no "slot machine" patterns |
| **Adaptive Decision-Making** | 40 pts | Velocity-based planning, scope cuts with rationale, risks surfaced early, retro action items implemented |
| **Documentation Quality** | 30 pts | README current, CLAUDE.md reflects reality, setup docs work, code commented where needed |

**Growth trajectory matters more than absolute level.** The student who goes from "can't use Git" to "clean PRs with meaningful commits" scores higher than the student who arrived proficient and maintained.

---

# Failure Patterns Quick Reference (Instructor Use)

| Sprint | Pattern | Signal | Intervention |
|--------|---------|--------|--------------|
| **S5** | Analysis paralysis | No code by mid-Week 9 | "Ship something trivial in 48 hours" |
| **S5** | Solo hero | One person: 5 commits, others: 0 | Redistribute work immediately |
| **S5** | Git terror | Afraid to push | "Branch protection prevents breaking main. Push." |
| **S5** | Claude Code slot machine | Copy-paste without reading | "What does line 14 do?" |
| **S6** | Integration avoidance | "My part works fine!" | Force integration day -- connect pieces NOW |
| **S6** | CLAUDE.md decay | Not updated since Sprint 5 | "Your AI has Week 9 context in Week 12. Update it." |
| **S6** | Review rubber-stamping | All reviews say "LGTM" | Model a real review in class |
| **S6** | Scope creep | Features added outside the plan | "Is it in an issue? If not, revert." |
| **S7** | Feature addiction | "Just one more thing" | "Feature freeze starts NOW. Sprint 8 is polish only." |
| **S7** | Deployment denial | "We'll figure it out later" | "Show me your setup docs TODAY." |
| **S7** | Burnout signals | Reduced commits, shorter standups | Private check-in: "How are YOU doing?" |
| **S8** | Demo panic | "We have nothing to show" | Help them find what they DO have |
| **S8** | Perfectionism | Refusing to demo | "Ship it. You will never feel ready. That's normal." |
| **S8** | Last-minute heroics | All-night coding before demo | "Crunch means we planned wrong, not that we worked hard." |
| **S8** | Blame game | "If [teammate] had done their part..." | "What could the TEAM have done differently?" |

---

*Document Version: 1.0*
*Course: CSC-289 System Support Project (Capstone)*
*Development Phase: Weeks 9-16, Spring 2026*
*Architecture: Learn | Practice | Apply | Assess*
*Authors: Angela Westmoreland (instructional designer), Drew Norris (SME)*
