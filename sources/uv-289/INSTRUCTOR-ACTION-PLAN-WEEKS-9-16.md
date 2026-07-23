<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/INSTRUCTOR-ACTION-PLAN-WEEKS-9-16.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 instructor guide M6-M8
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CSC-289 Instructor Action Plan: Development Phase (Weeks 9–16)

> **START DATE**: Week of March 10, 2026
> **This document is your playbook.** Each week has exact tasks, Canvas setup requirements, RSI touchpoints, and student-facing deliverables. Follow it sequentially.

**Reference**: [COURSEMAP-CANONICAL.md](COURSEMAP-CANONICAL.md) for full point architecture and CLO alignment.

---

## Pre-Launch Checklist (Complete Before Week 9 Monday)

### Canvas Setup
- [ ] Create Module 6 in Canvas with all tasks listed below
- [ ] Upload Entry Ticket quiz (12 questions, see question bank below)
- [ ] Upload Claude Code Onboarding activity instructions
- [ ] Create Discussion Board: "Code Review Exchange"
- [ ] Create Discussion Board: "Claude Code Reflection"
- [ ] Set up Sprint 5 Scorecard as Canvas quiz (self-report, 8 questions)
- [ ] Set up Sprint 6 Scorecard as Canvas quiz (self-report, 8 questions)
- [ ] Upload Dev Phase Knowledge Check quiz (15 questions, see bank below)
- [ ] Create Peer Code Review Assignment (rubric attached)
- [ ] Confirm all due dates match week-by-week schedule below

### Student Communication
- [ ] Post Week 9 Announcement (draft below)
- [ ] Email students: "Development phase begins Monday — read the announcement before class"
- [ ] Verify all students passed Red Clearance (Module 1) and have active GitHub repos

### Instructor Preparation
- [ ] Review each student's current project state (GitHub repo, board, recent commits)
- [ ] Install Claude Code locally (so you can demonstrate and troubleshoot)
- [ ] Read [Claude Code Onboarding Activity](activities/Claude_Code_Onboarding_Sacred_Flow.md) fully
- [ ] Read [MODULE-ARCHITECTURE-DEVELOPMENT-PHASE.md](MODULE-ARCHITECTURE-DEVELOPMENT-PHASE.md) Modules 5–6

---

## Week 9 (March 10–14, 2026) — Sprint 5 Start

### Module 6 Opens | Sprint 5: First Vertical Slice

**This is the most important week of the development phase.** Students transition from GRD collaboration to solo development and learn Claude Code. Set the tone here.

### Monday (Day 1)
**Class Time (1 hour):**
1. **Dev Phase Kickoff** (15 min)
   - "GRD collaboration is done. You now own your project completely."
   - Review Sprint 5–8 roadmap
   - Introduce the vertical slice concept: "One feature, fully working, end to end"
   - Set expectations: process grading continues at 60%

2. **Claude Code Onboarding — Part 1** (45 min)
   - Walk through CLAUDE.md setup together
   - Students create CLAUDE.md in their capstone repo
   - Demonstrate: Issue → Branch → Claude Code prompt → PR workflow
   - **Key message**: "Claude Code is a tool, not a replacement. You evaluate every line."

**Lab Time (4 hours):**
3. **Claude Code Onboarding Activity** (90–120 min)
   - Students complete the Flask login toy project activity
   - Circulate and help with setup issues (expect 20% to hit environment problems)
   - **Common issues**: Python path, Flask not installed, API key configuration
   - Students submit: PROMPT_LOG.md + working login feature + reflection

4. **Sprint 5 Planning** (remaining time)
   - Students select stories for Sprint 5 from backlog
   - Sprint goal: one vertical slice (feature working end-to-end)
   - Capacity planning using Sprint 4 velocity
   - Must have Sprint 5 planning doc committed by end of day

**Canvas Tasks Due**: Entry Ticket (before class), Claude Code Onboarding (end of lab)

### Tuesday–Thursday (Days 2–4)
- **Students**: Daily standups, coding, Claude Code usage
- **Instructor**:
  - Review Entry Ticket results → contact students who scored <70% (RSI touchpoint)
  - Review CLAUDE.md files in student repos
  - Post in "Claude Code Reflection" discussion board to seed the conversation

### Friday (Day 5)
- **Mid-sprint check-in** (RSI touchpoint)
  - Review each student's GitHub board state
  - Check standup log quality (are they specific? honest about blockers?)
  - Proactive outreach to any student with <3 standups posted
  - Quick verbal check: "How's the vertical slice coming? Any blockers?"

**Instructor RSI Log**: Document all interactions in your tracking sheet

---

### Week 9 Announcement Draft

> **Subject: Module 6 Opens — Development Phase Begins**
>
> Welcome to the development phase! GRD collaboration is complete, and you now have full ownership of your capstone project for the next 8 weeks.
>
> **This week:**
> - Complete the Entry Ticket quiz (Canvas, before Monday class)
> - Claude Code Onboarding activity in Monday's lab
> - Sprint 5 planning due Monday end-of-day
> - Begin Sprint 5: your goal is ONE vertical slice — a single feature working end-to-end
>
> **New tool: Claude Code**
> Starting this sprint, you'll use Claude Code as an AI development assistant. This is a professional tool, not a shortcut. You're responsible for understanding and evaluating every line of code it generates. We'll set up CLAUDE.md files together on Monday.
>
> **Reminders:**
> - Daily standups continue (minimum 8 per sprint)
> - Process grading is still 60% of your grade
> - Sprint 5 review will be Friday of Week 10
>
> Questions? Office hours [schedule] or email me.

---

## Week 10 (March 17–21, 2026) — Sprint 5 End

### Sprint 5 Review & Close

### Monday–Wednesday (Days 6–8)
- **Students**: Continue Sprint 5 execution, daily standups
- **Instructor**:
  - Post in "Code Review Exchange" discussion board (RSI touchpoint)
  - Review standup logs for quality and consistency
  - Respond to discussion board posts with substantive feedback (not just "good point")
  - Example response: "Your approach to separating the API route from the template rendering is solid. Have you considered what happens if the database connection drops mid-request?"

### Thursday (Day 9)
- **Students**: Final Sprint 5 commits, prepare demo
- **Instructor**: Verify each student has working vertical slice (even if minimal)

### Friday (Day 10) — Sprint 5 Review
**Class/Lab Time:**
1. **Sprint 5 Review** (RSI touchpoint — mandatory attendance)
   - Each student demos their vertical slice (5 min max)
   - **What to look for**: Does it work end-to-end? Did they use Sacred Flow? Is the board updated?
   - Provide verbal feedback: one strength, one improvement area
   - **If demo fails**: "What happened? What's your plan for Sprint 6?" (process over product — this is a learning moment, not a penalty)

2. **Sprint 5 Retrospective** (30 min)
   - Students complete retrospective template
   - Focus questions: "Was your velocity estimate accurate?" "How did Claude Code affect your workflow?"
   - Action items must be specific and measurable

3. **Sprint 6 Planning** (remaining time)
   - Students select Sprint 6 stories
   - Sprint goal: build on vertical slice, add 1–2 more features
   - Sprint 6 planning doc committed by end of day

**Canvas Tasks Due**: Sprint 5 Scorecard, Sprint 5 artifacts (planning doc, standups, retrospective)

### Weekend
- **Instructor**: Write Sprint 5 retrospective feedback for each student (due within 72 hours)
  - Must be substantive: reference specific artifacts, note improvement from Sprint 4
  - Example: "Your standup entries improved significantly — you're now flagging blockers proactively. Your velocity was 13/20 planned points. For Sprint 6, consider reducing planned points to 15 to hit a more sustainable pace."

---

## Week 11 (March 24–28, 2026) — Sprint 6

### Sprint 6: Core Features + Code Review

### Monday (Day 1 of Sprint 6)
**Class Time:**
1. Brief check-in: "How did Sprint 5 retro action items land?"
2. Sprint 6 expectations: code review exchange is this sprint's focus
3. Pair students for peer code review assignment (or let them self-select)

**Lab Time:**
- Sprint 6 execution
- Students begin working on peer code review (PR selection, initial review)

### Tuesday–Thursday
- **Students**: Standups, coding, code reviews
- **Instructor**:
  - Post in "Claude Code Reflection" discussion board (RSI touchpoint)
  - Review code review quality (are reviews substantive or just "looks good"?)
  - Respond to discussion posts with specific technical insight
  - Mid-sprint standup log review (RSI touchpoint)

### Friday — Sprint 6 Review
**Class/Lab Time:**
1. **Sprint 6 Review** (RSI touchpoint)
   - Demo: 2+ features working
   - Code review exchange presentations (what did you learn from reviewing someone else's code?)
   - Verbal feedback to each student

2. **Sprint 6 Retrospective**
   - Focus: "How did code review change your approach?" "What did Claude Code help vs. hinder?"
   - Sprint 7 planning begins

**Canvas Tasks Due**: Sprint 6 Scorecard, Sprint 6 artifacts, Code Review Exchange discussion, Claude Code Reflection discussion, Peer Code Review Assessment

### Post-Week 11
- **Instructor**: Write Sprint 6 retrospective feedback (72 hours)
- **Instructor**: Grade Peer Code Review Assessments with rubric feedback
- **Instructor**: Post Dev Phase Knowledge Check availability (due Week 13)
- **Instructor**: Post Week 12 announcement

---

### Week 11 Announcement Draft

> **Subject: Sprint 6 Wrap + Sprint 7 Launch**
>
> Great work on Sprint 6! Your code reviews showed [general observation — adapt based on what you see].
>
> **Sprint 7 (Weeks 12–14) is your polish and deployment sprint.** This is the longest sprint because it includes:
> - Feature freeze protocol (no new features after Week 13)
> - Deployment to a live URL
> - Testing evidence portfolio
> - Edge case handling
>
> **This sprint, think about deployment FIRST.** Deploy early (even if broken), then fix. Don't wait until Week 14.
>
> **Dev Phase Knowledge Check** is now available in Canvas (15 questions, 2 attempts). Complete by end of Week 13.
>
> Sprint 7 review will be Friday of Week 14 — you must demo from a DEPLOYED URL, not localhost.

---

## Week 12 (March 31 – April 4, 2026) — Sprint 7 Start

### Sprint 7: Polish, Edge Cases, Deployment

### Canvas Setup (if not already done)
- [ ] Create Module 7 in Canvas
- [ ] Upload Entry Ticket: Deployment & Testing Readiness (12 questions)
- [ ] Create Discussion Board: "Edge Cases & What-If Scenarios"
- [ ] Upload Deployment Dry Run Lab instructions
- [ ] Set up Sprint 7 Scorecard quiz
- [ ] Create Deployment Readiness Checklist (Canvas checklist)
- [ ] Create Feature Freeze Commitment assignment
- [ ] Create Testing Evidence Portfolio assignment

### Monday
**Class Time:**
1. Sprint 7 kickoff: "This is your polish sprint. Feature freeze by end of Week 13."
2. Entry Ticket review (who needs support?)
3. Deployment strategy discussion: Render vs. Railway, environment variables, databases

**Lab Time:**
- Sprint 7 planning (feature freeze list, deployment tasks, testing plan)
- Begin Deployment Dry Run Lab (deploy to staging, document steps)
- Sprint 7 planning doc committed

### Tuesday–Friday
- **Students**: Daily standups, deployment work, edge case handling
- **Instructor**:
  - Mid-sprint check-in: deployment progress review (RSI touchpoint)
  - Test each student's staging URL (even if broken — note what works)
  - Review standup logs
  - Respond to early "Edge Cases" discussion posts

---

## Week 13 (April 7–11, 2026) — Sprint 7 Mid-Sprint

### Feature Freeze + Testing Focus

### Monday
**Class Time:**
1. **Feature Freeze Declaration** (15 min)
   - Students declare: "These features are IN. These are OUT. Here's why."
   - Feature Freeze Commitment document due
   - **Key message**: "Cutting scope professionally is a PM skill. Document your rationale."

2. **Testing Workshop** (45 min)
   - What to test: happy path, edge cases, error states, accessibility
   - How to document: testing evidence portfolio structure
   - Demo: running tests, documenting results

**Lab Time:**
- Testing execution
- Edge case handling
- Deployment refinement

### Tuesday–Friday
- **Students**: Testing, documentation, edge cases, deployment fixes
- **Instructor**:
  - Post in "Edge Cases" discussion board (RSI touchpoint)
  - Example: "Several of you are handling empty form submissions — what about SQL injection? What about a user who's logged in on two devices?"
  - Week 13 announcement (RSI touchpoint): deployment support + testing guidance
  - Verify deployments are progressing (test URLs again)
  - Review Dev Phase Knowledge Check submissions

**Canvas Tasks Due (by Week 13 end)**: Dev Phase Knowledge Check, Feature Freeze Commitment, Deployment Dry Run Lab

---

## Week 14 (April 14–18, 2026) — Sprint 7 End

### Sprint 7 Review: Deployment Demo Required

### Monday–Thursday
- **Students**: Final testing, polish, deployment verification
- **Instructor**:
  - **Deployment verification** (RSI touchpoint): Test every student's live URL
  - Document: what works, what's broken, accessibility issues
  - Individual feedback on deployment readiness (email or Canvas comment)
  - Review Feature Freeze Commitment documents

### Friday — Sprint 7 Review
**Class/Lab Time:**
1. **Sprint 7 Review: LIVE DEPLOYMENT DEMO** (RSI touchpoint)
   - Students demo from deployed URL (NOT localhost)
   - **If not deployed**: "What blocked you? What's your 48-hour recovery plan?"
   - Verbal feedback: deployment quality, edge case handling, testing evidence

2. **Sprint 7 Retrospective**
   - Focus: "What would you change about your deployment process?" "What scope decisions were hardest?"

3. **Module 8 Preview**
   - Process portfolio structure
   - Presentation expectations (10–12 min)
   - PM reflection essay prompts
   - Final sprint = bug fixes and polish ONLY

**Canvas Tasks Due**: Sprint 7 Scorecard, Sprint 7 artifacts, Edge Cases discussion, Testing Evidence Portfolio, Deployment Readiness Checklist

### Post-Week 14
- **Instructor**: Sprint 7 retrospective feedback (72 hours)
- **Instructor**: Feature freeze review feedback (individual)
- **Instructor**: Post Week 15 announcement with presentation schedule
- **Instructor**: Set up Module 8 in Canvas

---

### Week 14 Announcement Draft

> **Subject: Final Sprint — Ship It**
>
> You're in the home stretch. Sprint 8 (Weeks 15–16) is your FINAL sprint.
>
> **The rules are simple:**
> - Bug fixes and polish ONLY (feature freeze is in effect)
> - Process portfolio compilation (all sprint artifacts organized)
> - PM Reflection Essay (2–3 pages)
> - Final presentation (10–12 min, Week 16)
>
> **Presentation Schedule**: [Insert schedule — 5 students per day if class meets twice]
>
> **Process Portfolio must include:**
> - All sprint planning docs (Sprints 1–8)
> - All retrospectives
> - Risk register (with updates throughout semester)
> - Burndown charts or velocity tracking
> - Claude Code prompt logs (Sprints 5–8)
> - CLAUDE.md (final state)
> - README (comprehensive, deployment instructions included)
>
> Start compiling NOW. Don't wait until Week 16.

---

## Week 15 (April 21–25, 2026) — Sprint 8 Start

### Module 8 Opens | Sprint 8: Final Polish + Portfolio

### Canvas Setup
- [ ] Create Module 8 in Canvas
- [ ] Upload Entry Ticket: Professional Presentation & Portfolio Readiness (10 questions)
- [ ] Create Discussion Board: "PM Journey Reflection"
- [ ] Upload Demo Rehearsal assignment
- [ ] Upload Final Project Technical Deliverable assignment (100 pts, rubric)
- [ ] Upload Process Portfolio & Presentation assignment (75 pts, rubric)
- [ ] Create Capstone Self-Assessment assignment
- [ ] Set up Sprint 8 Scorecard quiz
- [ ] Publish presentation schedule

### Monday
**Class Time:**
1. Sprint 8 planning: bug fix list, portfolio compilation plan, presentation prep
2. Entry Ticket review
3. Portfolio structure walkthrough (what goes where, how to organize)
4. PM Reflection Essay prompts discussion

**Lab Time:**
- Bug fixes and polish
- Portfolio compilation begins
- PM Reflection Essay drafting

### Tuesday–Friday
- **Students**: Bug fixes, portfolio, essay, presentation prep
- **Instructor**:
  - **Portfolio draft review** (RSI touchpoint): Review early submissions, give substantive feedback
  - Post in "PM Journey Reflection" discussion board (RSI touchpoint)
  - Example: "Think about your first sprint in CSC-113 vs. Sprint 7 here. What's different about how you handle blockers now?"
  - Demo rehearsal support (optional office hours for practice runs)
  - Individual feedback on PM reflection drafts (if submitted early)

**Canvas Tasks Due (by Week 15 end)**: Entry Ticket, Demo Rehearsal, PM Journey Reflection discussion

---

## Week 16 (April 28 – May 2, 2026) — Final Delivery

### Presentations + Portfolio Submission

### Monday/Tuesday — Final Presentations
**Class/Lab Time:**
1. **Final Presentations** (RSI touchpoint — highest-stakes interaction)
   - 10–12 minutes per student + 3 min Q&A
   - Schedule: ~5 students per session (adjust for class size)
   - **What to evaluate**:
     - Working software demo (from deployed URL)
     - Process journey narrative (not just features)
     - PM decision justification (scope cuts, adaptations, risk responses)
     - Professional delivery (slides, demo flow, time management)
   - **Provide**: Verbal feedback after each presentation
   - **Document**: Scores on presentation rubric in real-time

2. **Peer feedback** (optional): Students give one written strength + one question to each presenter

### Wednesday/Thursday — Submission Window
- **Students**: Final portfolio submission, self-assessment, Sprint 8 scorecard
- **Instructor**:
  - Accept late portfolio submissions (within reason — process over perfection)
  - Answer last-minute questions
  - Begin grading final deliverables

### Friday — Course Close
- **Instructor**:
  - Post closing announcement (RSI touchpoint): celebrate accomplishments, career readiness message
  - Begin comprehensive feedback on portfolios (due within 5 business days)

**Canvas Tasks Due (by Week 16 end)**: Final Project Technical Deliverable, Process Portfolio & Presentation, Capstone Self-Assessment, Sprint 8 Scorecard

### Post-Course Grading
- [ ] Grade Final Project Technical Deliverable (100 pts) — rubric
- [ ] Grade Process Portfolio & Presentation (75 pts) — rubric
- [ ] Grade Capstone Self-Assessment (25 pts) — rubric
- [ ] Complete Continuous Process Assessment final checkpoint (90 pts)
- [ ] Write comprehensive feedback for each student (CLO-by-CLO assessment)
- [ ] Submit final grades

---

## Entry Ticket Question Banks

### Module 6 Entry Ticket: Development Phase Readiness (12 Questions)

**Question Bank** (randomize, show 12 of 18):

1. In Sacred Flow, what comes immediately AFTER creating a branch? → A) Write code and commit B) Open a pull request C) Create an issue D) Merge to main — **Answer: A**

2. What is a "vertical slice"? → A) A feature that only touches the frontend B) A feature that works end-to-end through all layers C) A slice of the database schema D) A type of test — **Answer: B**

3. When using Claude Code, you should: → A) Accept all generated code without review B) Use it only for documentation C) Evaluate every line before committing D) Never modify its output — **Answer: C**

4. What is CLAUDE.md? → A) A file that stores Claude Code's API key B) A project context file that helps Claude Code understand your codebase C) A test configuration file D) A deployment manifest — **Answer: B**

5. What does the "slot machine" anti-pattern refer to? → A) Gambling on deployment timing B) Repeatedly regenerating Claude Code output hoping for a better result C) Randomizing sprint backlog selection D) Testing with random inputs — **Answer: B**

6. A good code review comment should: → A) Just say "looks good" B) Identify specific issues with suggested alternatives C) Rewrite the entire function D) Only focus on formatting — **Answer: B**

7. In a sprint scorecard, "planned velocity" means: → A) How fast your internet connection is B) The total story points you committed to for the sprint C) The number of commits per day D) How quickly you respond to reviews — **Answer: B**

8. When your actual velocity is lower than planned, you should: → A) Work overtime to catch up B) Reduce next sprint's commitment and document why C) Remove standup entries to hide the gap D) Add more story points to the current sprint — **Answer: B**

9. What should you do when Claude Code generates code you don't understand? → A) Commit it anyway B) Delete it and start over C) Ask Claude Code to explain it, then verify you understand before committing D) Ignore it and write your own — **Answer: C**

10. A sprint retrospective's PRIMARY purpose is: → A) Blame team members for failures B) Identify specific improvements for the next sprint C) Present working software D) Calculate final grades — **Answer: B**

11. Feature branches should be: → A) Named after the developer B) Named after the issue/feature they implement C) Named with random strings D) Created only for the final sprint — **Answer: B**

12. When should you update your CLAUDE.md? → A) Only at project start B) Never — it's auto-generated C) Whenever your project structure, endpoints, or architecture changes D) Only when Claude Code asks you to — **Answer: C**

13. A pull request should: → A) Include as many changes as possible for efficiency B) Focus on a single feature or fix with clear description C) Never include tests D) Be merged without review — **Answer: B**

14. The Definition of Done for a user story typically includes: → A) Just "it compiles" B) Code complete, tested, reviewed, documented, and deployable C) Only that the feature looks right D) Manager approval — **Answer: B**

15. Process grading at 60% means: → A) Your code doesn't matter B) A perfect app with no process artifacts will fail C) You don't need to write working code D) Tests are optional — **Answer: B**

16. When a standup entry says "no blockers" every day for two weeks, the instructor should: → A) Celebrate — the student has no problems B) Be skeptical — this often means the student isn't engaging deeply enough C) Give bonus points D) Ignore it — **Answer: B**

17. What is a burndown chart? → A) A chart showing how fast your computer runs B) A visual tracking story points remaining vs. time in a sprint C) A chart of code quality metrics D) A deployment monitoring dashboard — **Answer: B**

18. When you cut a feature from scope, you should: → A) Just stop working on it B) Document the decision rationale and move the issue to "Won't Have" C) Delete the user story entirely D) Pretend it was never planned — **Answer: B**

### Module 7 Entry Ticket: Deployment & Testing Readiness (12 Questions)

**Question Bank** (randomize, show 12 of 16):

1. What is a "feature freeze"? → A) When you stop using version control B) A point after which no new features are added — only bugs are fixed C) When you freeze your development environment D) A type of database lock — **Answer: B**

2. Which is the correct deployment order? → A) Deploy → test → configure B) Configure → deploy → verify → monitor C) Test → deploy → hope D) Deploy → fix in production — **Answer: B**

3. Environment variables should: → A) Be committed to the repository B) Be stored in .env files that are gitignored, with documentation of required vars C) Be hardcoded in the source code D) Be shared via email — **Answer: B**

4. An accessibility audit should check for: → A) Only color contrast B) Keyboard navigation, screen reader compatibility, alt text, color contrast, and focus management C) Only mobile responsiveness D) Only loading speed — **Answer: B**

5. What is a "known issues" document? → A) A list of bugs you're ignoring B) A triaged list of known bugs with severity ratings and planned responses C) A list of features you didn't build D) An apology to the instructor — **Answer: B**

6. Defensive programming means: → A) Writing code that attacks hackers B) Writing code that handles unexpected inputs and error states gracefully C) Using a VPN while coding D) Only using secure libraries — **Answer: B**

7. When should you deploy for the first time? → A) The night before the final presentation B) As early as possible, even if the app is minimal C) Only when all features are complete D) After the semester ends — **Answer: B**

8. A good deployment README includes: → A) Just the app name B) Prerequisites, setup steps, environment variables, and verification instructions C) Only a screenshot D) The entire source code — **Answer: B**

9. Which testing type verifies that different parts of the system work together? → A) Unit testing B) Integration testing C) Load testing D) Acceptance testing — **Answer: B**

10. What should you do if your deployed app works locally but fails on the server? → A) Give up B) Check environment variables, database connection, file paths, and server logs C) Blame the hosting provider D) Rewrite everything — **Answer: B**

11. Edge case testing should cover: → A) Only the happy path B) Empty inputs, maximum values, special characters, concurrent access, and error states C) Only what the user story describes D) Only admin functions — **Answer: B**

12. HTTPS is important because: → A) It makes the site faster B) It encrypts data between the user's browser and the server C) It's only needed for banking sites D) It improves SEO only — **Answer: B**

13. A deployment checklist should be: → A) Memorized, never written down B) Written, version-controlled, and reproducible by someone who has never seen the project C) Only for enterprise projects D) Created after deployment — **Answer: B**

14. When a critical bug is found after feature freeze, you should: → A) Ignore it — feature freeze means no changes B) Fix the bug (bugs are allowed during feature freeze, new features are not) C) Add a new feature to work around it D) Push the deadline — **Answer: B**

15. What is the purpose of a staging environment? → A) To show off to friends B) To test deployment in a production-like environment before going live C) To store backup code D) To run development work — **Answer: B**

16. If you can't fix a known bug before the deadline, you should: → A) Hide it B) Document it with severity, impact, and a proposed fix for the future C) Pretend it's a feature D) Delete the affected feature — **Answer: B**

---

## Sprint Scorecard Template (Canvas Quiz Format)

**Sprint [X] Scorecard** — Self-report, auto-graded, honest responses expected

1. How many story points did you PLAN for this sprint? (numeric entry)
2. How many story points did you COMPLETE this sprint? (numeric entry)
3. How many standup entries did you post? (numeric: 0–10)
4. Did you conduct a sprint retrospective within 48 hours of sprint end? (Yes/No)
5. How many action items from your PREVIOUS retrospective did you implement? (numeric)
6. Rate your Claude Code usage this sprint: (A) Didn't use it B) Used it occasionally C) Used it regularly with evaluation D) Over-relied on it without evaluating)
7. Did you encounter any blockers this sprint? If yes, how did you handle them? (short answer, 2–3 sentences)
8. What is ONE specific thing you will do differently in the next sprint? (short answer, 1–2 sentences)

**Scoring**: 10–15 pts per scorecard. Graded on completeness and honesty, not on having "perfect" numbers. A student who reports 8/20 points completed and explains why scores higher than one who claims 20/20 with no evidence.

---

## Discussion Board Rubric (Simplified — All Discussions)

| Criterion | Full Credit | Partial Credit | No Credit |
|-----------|------------|----------------|-----------|
| **Initial Post** (60%) | Substantive, specific to own project, references course concepts, meets word count | Generic or superficial, minimal project connection | Missing or off-topic |
| **Peer Responses** (40%) | 2+ responses that ask questions or offer specific suggestions | 1 response or generic "I agree" responses | Missing |

**Instructor participation**: Instructor responds to every initial post thread with a substantive question or connection. This is an RSI requirement.

---

## Grading Time Estimates

| Task | Time per Student | Frequency | Total (10 students) |
|------|-----------------|-----------|-------------------|
| Sprint artifact review | 15 min | Per sprint (×4 sprints) | 10 hours |
| Retrospective feedback | 10 min | Per sprint (×4) | 6.7 hours |
| Discussion board responses | 5 min | Per discussion (×4) | 3.3 hours |
| Peer code review grading | 10 min | Once | 1.7 hours |
| Entry ticket review | 2 min | Per module (×3) | 1 hour |
| Sprint scorecard review | 3 min | Per sprint (×4) | 2 hours |
| Testing evidence portfolio | 15 min | Once | 2.5 hours |
| Feature freeze review | 10 min | Once | 1.7 hours |
| Final project grading | 30 min | Once | 5 hours |
| Process portfolio grading | 30 min | Once | 5 hours |
| Continuous process assessment | 15 min | 3 checkpoints | 7.5 hours |
| **TOTAL** | | | **~46 hours over 8 weeks** |

**That's ~5.75 hours/week of grading for 10 students.** Scale linearly for class size.

---

## Failure Patterns & Interventions (Quick Reference)

| Signal | Pattern | Intervention |
|--------|---------|-------------|
| No standups for 3+ days | Student disengaged or stuck | Direct outreach: "I noticed your standups stopped. What's blocking you?" |
| "No blockers" every day | Student not engaging deeply | "Walk me through what you're working on right now" |
| All commits on one day | Batch work, not daily process | "Your commits suggest batch work. Sacred Flow means daily commits." |
| Claude Code in every commit | Over-reliance on AI | "Show me a feature YOU wrote without Claude Code. What's different?" |
| No Claude Code usage | Avoiding new tool | "What's holding you back from trying Claude Code? Let's troubleshoot." |
| Board not updated | Process discipline slipping | "Your board shows 5 items in 'In Progress.' What's actually being worked on?" |
| Scope creep | Adding features instead of polishing | "Remember: feature freeze. What can you CUT to ship a solid MVP?" |
| Deployment not started by Week 13 | Risk of no live demo | "Deploy TODAY, even if it's broken. We fix it from there." |
| Retrospective has no action items | Going through the motions | "What will you DO differently? Give me one specific, measurable change." |
| Portfolio not started by Week 15 | Will submit incomplete | "Your portfolio is 75 points. Start compiling now — don't wait." |

---

## RSI Compliance Summary (Weeks 9–16)

| Week | Instructor-Initiated Touchpoints | Type |
|------|--------------------------------|------|
| 9 | Announcement, Entry Ticket follow-up, mid-sprint check-in | 3 |
| 10 | Discussion responses (×2), Sprint 5 review, retrospective feedback | 4 |
| 11 | Announcement, discussion responses, mid-sprint check-in, Sprint 6 review, retro feedback, code review feedback | 6 |
| 12 | Announcement, Entry Ticket follow-up, mid-sprint check-in | 3 |
| 13 | Discussion responses, deployment verification, Knowledge Check review | 3 |
| 14 | Announcement, deployment testing, Sprint 7 review, retro feedback, feature freeze feedback | 5 |
| 15 | Announcement, portfolio draft review, discussion responses, rehearsal support | 4 |
| 16 | Final presentations, comprehensive feedback, closing announcement | 3 |
| **TOTAL** | | **31 touchpoints over 8 weeks = ~4/week** |

**All touchpoints are**: instructor-initiated, substantive (content-focused), and documented in Canvas.

---

**Document Owner**: Angela Westmoreland
**For**: Andrew Norris (Drew)
**Last Updated**: March 13, 2026
