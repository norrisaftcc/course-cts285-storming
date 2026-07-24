<!--
  ADAPTATION PROVENANCE — 26FA Dataman regime
  source: sources/uv-285/knowledge-checks/Module_05_Knowledge_Check.md
  adapted: 2026-07-24 (ultracode M2-M6 KC fan-out)
  changes: project examples re-pointed to the Dataman modernization exemplar
           (drafts/cts285/shared-dataman-artifacts/); points normalized per
           ADR-002 (10 pts, graded, not bonus); naming per ADR-004 (Dataman
           only — no DataMon/Datamon). No correct answer changed — answer-key
           sequence verified identical to source (coordinator check).
           Coordinator note: this file's workflow output was JSON-string-
           encoded; decoded to raw markdown at write time.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 5 Knowledge Check: Sprint 3 Quality — Peer Code Review, Technical Debt & ADRs

**Purpose**: Assess understanding of testing strategies, peer code review, technical debt, Architecture Decision Records (ADRs), and version control — applied to the Dataman modernization spine (Sprint 3: Quality, Weeks 9–10).
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Points**: **10 pts (1.3% of 750), graded**
**Time Estimate**: 15–20 minutes

---

## Testing & Quality Concepts (60% of questions)

### Question 1
What is the difference between unit testing and integration testing?

A) Unit testing is easier than integration testing
B) Unit testing tests individual components; integration testing tests how components work together
C) Unit testing is for small projects; integration testing is for large ones
D) There is no real difference

**Correct Answer**: B
**Explanation**: Unit tests verify individual functions or methods in isolation: "Does the routine that checks a division answer correctly compute the remainder?" Integration tests verify components working together: "Does the Answer Checker screen correctly call that routine, log the Attempt, and update the Score?" Both matter on the Dataman build. Unit tests catch logic errors; integration tests catch interface mismatches.

### Question 2
You've written code for a new feature. When should you write tests for it?

A) After the entire project is complete
B) As you develop, ideally before or alongside the code
C) Only if bugs are reported
D) Testing is optional if you're confident in your code

**Correct Answer**: B
**Explanation**: Professional developers write tests as they go, sometimes before the code (Test-Driven Development). Tests written alongside code are better — the logic is fresh, edge cases are obvious. If you're implementing the "refuse a negative subtraction result" rule (manual p.22) for Dataman, write the test for "7 − 8 is refused" as you write the check itself, not after Sprint 3 begins. Waiting until the end means tests get skipped or are shallow. Tests are part of your deliverable, not an afterthought.

### Question 3
What is a code review, and why is it valuable?

A) A formal evaluation of developer performance
B) A collaborative process where peers review code for quality, bugs, and maintainability before merging
C) A meeting where managers critique your code
D) An automated tool that checks syntax

**Correct Answer**: B
**Explanation**: Code review is peer quality control. A teammate reads your Memory Bank set-builder code, catches the case where an eleventh problem could slip past the manual's hard cap of ten (p.6, p.21), and shares knowledge of how MemoryBankSet and Problem relate. It's not about criticism — it's about collective code ownership and learning. You'll catch bugs in code review that tests miss. You'll write better Dataman code knowing a teammate will read it. Code review is the core practice of Sprint 3: Quality.

### Question 4
Which type of testing involves having users interact with the system to verify it meets their needs?

A) Unit testing
B) Load testing
C) User acceptance testing (UAT)
D) Automated testing

**Correct Answer**: C
**Explanation**: UAT is where a stakeholder — the parent or teacher persona from your interviews — confirms "yes, this solves my problem" (assigning a Memory Bank set in a few taps) or "no, this isn't what I need." You can pass every unit and integration test on the Dataman build and still fail UAT if you built the wrong workflow. UAT is your final validation before launch: it tests usability and business value, not just functionality.

### Question 5
What is the purpose of version control systems like Git?

A) To make coding more complicated
B) To track changes, enable collaboration, and maintain history of code evolution
C) To automatically fix bugs in code
D) To replace code documentation

**Correct Answer**: B
**Explanation**: Git tracks every change, who made it, and why. On the Dataman project you work the Trusted Workflow — Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge — so you can experiment on a branch (say, adding division-with-remainder handling) without breaking main. You can revert mistakes and see exactly when the two-tries rule was introduced. In professional work, everything goes in version control: it's your safety net and collaboration platform.

### Question 6
You discover a bug in the deployed Dataman build: the Memory Bank set-builder is accepting an eleventh problem into a set, violating the manual's hard cap of ten. What's the professional approach to fixing it?

A) Fix it directly in production immediately
B) Create a bug report, write a test that reproduces it, fix it, verify the test passes, then deploy through normal process
C) Blame whoever wrote the buggy code
D) Hope users don't notice it

**Correct Answer**: B
**Explanation**: Professional bug fixing is systematic. Document the bug ("MemoryBankSet accepts 11 problems; manual limit is 10, pp.6/21"), write a test that fails — proving the bug exists — fix it, verify the test passes, get code review, and merge through the Trusted Workflow's Finish PR → Code Review → Merge steps. The test prevents regression: if the cap check ever slips again, the test catches it. This discipline prevents rushed fixes that create new bugs.

### Question 7
What is regression testing?

A) Testing that the system works on old computers
B) Re-running existing tests to ensure new changes haven't broken existing functionality
C) Testing for bugs that make the system worse
D) A type of machine learning test

**Correct Answer**: B
**Explanation**: Regression testing verifies that new code didn't break existing features. You fix the division-with-remainder display on Dataman and accidentally break the two-tries flow on Answer Checker — regression tests catch this before it ships. In professional work, automated test suites run on every code change. This safety net lets you change code confidently, knowing you'll be alerted if something breaks.

### Question 8
What should technical documentation for code include?

A) Every single line of code explained
B) Purpose, setup instructions, usage examples, and explanations of complex logic and key design decisions
C) Only the developer's name
D) Nothing—good code documents itself

**Correct Answer**: B
**Explanation**: Good documentation answers: What does this do? Why does it exist? How do I use it? What are the gotchas? You don't need to explain simple code, but complex logic, setup steps, and structural decisions need documentation. For a decision like "why is Attempt modeled as its own entity instead of folded into Session?" or "why does division tracking need a separate remainder field?" — write an Architecture Decision Record (ADR): the decision, the alternatives considered, and the reasoning. Sprint 3: Quality asks you to formalize two to three ADRs on the Dataman project. If you can't remember why you did something, future developers have no chance.

### Question 9
What is continuous integration (CI) in modern development?

A) Integrating code only at the end of a project
B) Automatically building and testing code every time changes are committed
C) A team-building exercise
D) Manually testing code before deployment

**Correct Answer**: B
**Explanation**: CI automatically runs your tests every time code is pushed. On the Dataman project this catches integration problems immediately — "your change broke the two-tries tests" — instead of discovering them weeks later. In professional work, CI is standard: you commit code, automated systems build it, run tests, and alert you to problems. This feedback loop catches bugs when they're easiest to fix.

---

## Professional Development Practices (40% of questions)

### Question 10
You're reviewing a teammate's Dataman code and notice the Memory Bank set-builder doesn't enforce the manual's ten-problem cap. How should you communicate this?

A) Publicly criticize them in a team meeting
B) Provide specific, constructive feedback with suggestions for improvement
C) Approve it anyway to avoid conflict
D) Report them to management

**Correct Answer**: B
**Explanation**: Code review is collaborative, not adversarial. "This lets a set grow past ten problems, which violates the manual's cap and will bite the Curator Console's review screens later — that's technical debt we'd be taking on, on purpose or not. Consider validating problem_count before save: [example]." Be specific, assume good intent, and name the debt a shortcut would create. The goal is better code, not proving you're smarter. Professional teams use code review to elevate everyone's skills.

### Question 11
What is the value of writing commit messages that explain *why* a change was made, not just *what* changed?

A) Commit messages don't matter
B) They provide context that helps future developers understand reasoning and avoid breaking things
C) They make commits take longer to write
D) They're only useful for managers

**Correct Answer**: B
**Explanation**: "Fixed Memory Bank bug" is useless six months later. "Added problem_count validation to enforce the manual's ten-item cap (p.6/p.21)" explains the reasoning. Commit messages capture that line-level "why"; a bigger structural call — like choosing to model Attempt as its own entity — belongs in an ADR instead, where the alternatives and trade-offs get spelled out. Good commit messages are project documentation: the story of how your code evolved and why.

### Question 12
You're building the Curator Console's per-student detail view and realize it will take longer than estimated. When should you communicate this?

A) Wait until the deadline passes
B) As soon as you realize, so stakeholders can adjust plans
C) Never—work overtime to hide it
D) Only if someone asks

**Correct Answer**: B
**Explanation**: Professional developers communicate risks early. "The first-try-vs-second-try breakdown for the Curator Console is more complex than we estimated. I need three extra days." This gives stakeholders options — adjust scope, push timelines, or reprioritize. Surprises at deadline destroy trust. Early warning maintains it, even when delivering bad news.

### Question 13
What's the relationship between good tests and refactoring code?

A) Tests make refactoring harder
B) Good tests enable safe refactoring by catching breaks while you improve code structure
C) Refactoring means rewriting all tests
D) Tests and refactoring are unrelated

**Correct Answer**: B
**Explanation**: Tests are your safety net for refactoring. Say the Memory Bank set-builder was rushed under a Sprint 2 deadline and now has duplicated validation logic scattered across the codebase — that's technical debt: a shortcut that makes future changes harder, the interest you pay later. With tests covering the ten-item cap and the two-tries rule, you can restructure that Dataman code with confidence, knowing tests will catch it if you break functionality. Without tests, paying down technical debt is terrifying. With tests, it's safe — which is why Sprint 3: Quality pairs "refactor to reduce technical debt" with "write tests for critical functionality."

### Question 14
Why is it important to keep your development environment (dependencies, versions, configuration) documented?

A) It's not important if everything works on your machine
B) So others (or future you) can replicate the environment and avoid "works on my machine" problems
C) To make setup more complicated
D) Only for large teams

**Correct Answer**: B
**Explanation**: "Works on my machine" is unprofessional. Document your Python version, library versions, environment variables, and setup steps for the Dataman build — requirements.txt, a .env file, setup notes. When a teammate clones the repo, they should be able to run it. When you revisit the project in six months, documented setup saves hours of archaeology. Reproducibility is professional.

---

## Scoring Guide
- 90–100%: Excellent understanding of testing strategies, peer code review, and technical-debt/ADR practices
- 80–89%: Good grasp, minor gaps in testing types or version control
- 70–79%: Adequate foundation, review unit vs. integration testing and how ADRs differ from commit messages
- Below 70%: Revisit Module 5 materials, especially testing fundamentals and code review

## Study Resources
- Week 9–10 Assignment: Sprint 3 — Development & Code Review (Dataman build; technical debt log; peer review; ADRs)
- Reference: `Dataman_Reference_ERD.md` (shared class artifact — entities that motivate the ADR examples above)
- Reference: `Dataman_Seeded_Backlog.md` (epics/stories the Sprint 3 refinements trace to)
- Canvas Reading: "Test-Driven Development Basics"
- Canvas Reading: "Writing Architecture Decision Records"
- Reference: Git Workflow Guide (Trusted Workflow: Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge)
- Reference: Code Review Checklist
- Tool Tutorial: GitHub Pull Requests
