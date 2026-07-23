<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_05_Knowledge_Check.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 M5 KC (10 pts, graded)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 5 Knowledge Check: Development & Testing

**Purpose**: Assess understanding of testing strategies, version control, code review, and technical documentation
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Testing & Quality Concepts (60%)

### Question 1
What is the difference between unit testing and integration testing?

A) Unit testing is easier than integration testing
B) Unit testing tests individual components; integration testing tests how components work together
C) Unit testing is for small projects; integration testing is for large ones
D) There is no real difference

**Correct Answer**: B
**Explanation**: Unit tests verify individual functions or methods in isolation: "Does this login validation function work correctly?" Integration tests verify components working together: "Does the login form correctly interact with the authentication service and database?" Both are essential. Unit tests catch logic errors; integration tests catch interface mismatches.

### Question 2
You've written code for a new feature. When should you write tests for it?

A) After the entire project is complete
B) As you develop, ideally before or alongside the code
C) Only if bugs are reported
D) Testing is optional if you're confident in your code

**Correct Answer**: B
**Explanation**: Professional developers write tests as they go, sometimes before the code (Test-Driven Development). Tests written alongside code are better—the logic is fresh, edge cases are obvious. Waiting until the end means tests get skipped or are shallow. In industry, untested code is unfinished code. Tests are part of your deliverable, not an afterthought.

### Question 3
What is a code review, and why is it valuable?

A) A formal evaluation of developer performance
B) A collaborative process where peers review code for quality, bugs, and maintainability before merging
C) A meeting where managers critique your code
D) An automated tool that checks syntax

**Correct Answer**: B
**Explanation**: Code review is peer quality control. Another developer reads your code, suggests improvements, catches bugs, and shares knowledge. It's not about criticism—it's about collective code ownership and learning. You'll catch bugs code review that tests miss. You'll write better code knowing someone will read it. This practice makes teams stronger.

### Question 4
Which type of testing involves having users interact with the system to verify it meets their needs?

A) Unit testing
B) Load testing
C) User acceptance testing (UAT)
D) Automated testing

**Correct Answer**: C
**Explanation**: UAT is where users confirm "yes, this solves my problem" or "no, this isn't what I need." You can pass all technical tests but fail UAT if you built the wrong thing. In professional work, UAT is your final validation before launch. It tests not just functionality, but usability and business value.

### Question 5
What is the purpose of version control systems like Git?

A) To make coding more complicated
B) To track changes, enable collaboration, and maintain history of code evolution
C) To automatically fix bugs in code
D) To replace code documentation

**Correct Answer**: B
**Explanation**: Git tracks every change, who made it, and why. You can collaborate without overwriting each other's work, experiment on branches without breaking main code, and revert mistakes. In professional work, everything goes in version control—code, configuration, documentation. It's your safety net and collaboration platform.

### Question 6
You discover a bug in production code. What's the professional approach to fixing it?

A) Fix it directly in production immediately
B) Create a bug report, write a test that reproduces it, fix it, verify the test passes, then deploy through normal process
C) Blame whoever wrote the buggy code
D) Hope users don't notice it

**Correct Answer**: B
**Explanation**: Professional bug fixing is systematic. Document the bug, write a test that fails (proving the bug exists), fix it, verify the test passes (proving it's fixed), get code review, deploy. The test prevents regression—if this bug creeps back in, the test catches it. This discipline prevents rushed fixes that create new bugs.

### Question 7
What is regression testing?

A) Testing that the system works on old computers
B) Re-running existing tests to ensure new changes haven't broken existing functionality
C) Testing for bugs that make the system worse
D) A type of machine learning test

**Correct Answer**: B
**Explanation**: Regression testing verifies that new code didn't break existing features. You fix the login page and accidentally break password reset—regression tests catch this. In professional work, automated test suites run on every code change. This safety net lets you change code confidently, knowing you'll be alerted if something breaks.

### Question 8
What should technical documentation for code include?

A) Every single line of code explained
B) Purpose, setup instructions, usage examples, and explanations of complex logic
C) Only the developer's name
D) Nothing—good code documents itself

**Correct Answer**: B
**Explanation**: Good documentation answers: What does this do? Why does it exist? How do I use it? What are the gotchas? You don't need to explain simple code, but complex algorithms, setup steps, and design decisions need documentation. Write for your future self who has forgotten everything. If you can't remember why you did something, future developers have no chance.

### Question 9
What is continuous integration (CI) in modern development?

A) Integrating code only at the end of a project
B) Automatically building and testing code every time changes are committed
C) A team-building exercise
D) Manually testing code before deployment

**Correct Answer**: B
**Explanation**: CI automatically runs your tests every time code is pushed. This catches integration problems immediately—"Your change broke the login tests"—instead of discovering them weeks later. In professional work, CI is standard. You commit code, automated systems build it, run tests, and alert you to problems. This feedback loop catches bugs when they're easiest to fix.

---

## Professional Development Practices (40%)

### Question 10
You're reviewing a teammate's code and notice a major issue. How should you communicate this?

A) Publicly criticize them in a team meeting
B) Provide specific, constructive feedback with suggestions for improvement
C) Approve it anyway to avoid conflict
D) Report them to management

**Correct Answer**: B
**Explanation**: Code review is collaborative, not adversarial. "This function could cause a race condition if two users log in simultaneously. Consider adding a mutex here: [example]." Be specific, assume good intent, and suggest solutions. The goal is better code, not proving you're smarter. Professional teams use code review to elevate everyone's skills.

### Question 11
What is the value of writing commit messages that explain *why* a change was made, not just *what* changed?

A) Commit messages don't matter
B) They provide context that helps future developers understand reasoning and avoid breaking things
C) They make commits take longer to write
D) They're only useful for managers

**Correct Answer**: B
**Explanation**: "Fixed login bug" is useless six months later. "Added null check to prevent crash when users have no profile photo" explains the reasoning. Future developers (including you) can understand the problem and avoid reintroducing it. Good commit messages are project documentation. They're the story of how your code evolved and why.

### Question 12
You're developing a feature and realize it will take longer than estimated. When should you communicate this?

A) Wait until the deadline passes
B) As soon as you realize, so stakeholders can adjust plans
C) Never—work overtime to hide it
D) Only if someone asks

**Correct Answer**: B
**Explanation**: Professional developers communicate risks early. "This feature is more complex than we estimated. I need 3 extra days." This gives stakeholders options—adjust scope, push timelines, or reprioritize. Surprises at deadline destroy trust. Early warning maintains it, even when delivering bad news. Transparency is a professional value.

### Question 13
What's the relationship between good tests and refactoring code?

A) Tests make refactoring harder
B) Good tests enable safe refactoring by catching breaks while you improve code structure
C) Refactoring means rewriting all tests
D) Tests and refactoring are unrelated

**Correct Answer**: B
**Explanation**: Tests are your safety net for refactoring. You can improve code structure, confident that tests will catch if you break functionality. Without tests, refactoring is terrifying—"Did I break something?" With tests, it's safe. This is why professional developers value tests: they enable continuous improvement without fear.

### Question 14
Why is it important to keep your development environment (dependencies, versions, configuration) documented?

A) It's not important if everything works on your machine
B) So others (or future you) can replicate the environment and avoid "works on my machine" problems
C) To make setup more complicated
D) Only for large teams

**Correct Answer**: B
**Explanation**: "Works on my machine" is unprofessional. Document Python version, library versions, environment variables, setup steps. Use tools like requirements.txt, .env files, or Docker. When your teammate clones the project, they should be able to run it. When you revisit the project in six months, documented setup saves hours of archaeology. Reproducibility is professional.

---

## Scoring Guide
- 90-100%: Excellent understanding of testing strategies and professional development practices
- 80-89%: Good grasp, minor gaps in testing types or version control
- 70-79%: Adequate foundation, review unit vs integration testing
- Below 70%: Revisit Module 5 materials, especially testing fundamentals

## Study Resources
- Week 9 Assignment: Writing Unit Tests
- Week 10 Activity: Code Review Exercise
- Planning Sheet: Testing Strategy Template
- Canvas Reading: "Test-Driven Development Basics"
- Reference: Git Workflow Guide
- Reference: Code Review Checklist
- Tool Tutorial: GitHub Pull Requests
