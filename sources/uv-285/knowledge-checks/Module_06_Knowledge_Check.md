<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_06_Knowledge_Check.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 M6 KC (10 pts, graded)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 6 Knowledge Check: Quality Assurance & Risk Management

**Purpose**: Assess understanding of Definition of Done, quality metrics, risk identification, and mitigation strategies
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Quality Assurance Concepts (60%)

### Question 1
What is a "Definition of Done" in Agile development?

A) When the code compiles without errors
B) A shared checklist of quality criteria that must be met before work is considered complete
C) When the deadline arrives
D) When the developer says they're done

**Correct Answer**: B
**Explanation**: Definition of Done is your quality contract. "Done" means code written, tests pass, code reviewed, documentation updated, deployed to staging. Without shared criteria, "done" is subjective and quality suffers. In professional teams, the Definition of Done prevents "technically complete but not shippable" work. It's your minimum quality standard.

### Question 2
Which of these would typically be included in a Definition of Done?

A) Code written, tests pass, code reviewed, documentation updated
B) Just the code written
C) Manager approval
D) Coffee consumed during development

**Correct Answer**: A
**Explanation**: A good Definition of Done covers all aspects of shippable work. Code exists (written), works correctly (tests pass), meets quality standards (reviewed), and is understandable (documented). Teams customize this list—some add "deployed to staging" or "security scan passed." The point is: explicit quality standards everyone understands and follows.

### Question 3
What is the purpose of quality metrics in software development?

A) To punish developers who write bugs
B) To objectively measure quality and identify areas for improvement
C) To make projects seem more complex
D) Metrics aren't useful in software development

**Correct Answer**: B
**Explanation**: Quality metrics provide visibility: test coverage percentage, bug count, code review time, defect rate. These aren't about blame—they're about improvement. "Our test coverage dropped from 80% to 60%" signals a problem before it causes production issues. Professional teams track metrics to make informed decisions, not to create reports.

### Question 4
You're doing acceptance testing and notice the feature works but is frustratingly slow. Does this pass your Definition of Done?

A) Yes, it works so it's done
B) No, if performance is part of your non-functional requirements and Definition of Done
C) Yes, performance doesn't matter
D) Only if the deadline has passed

**Correct Answer**: B
**Explanation**: Functional correctness isn't enough. If your non-functional requirements specify "page load under 2 seconds" and it takes 10 seconds, it's not done—even if it technically works. This is why Definition of Done includes non-functional requirements. Professional teams don't ship slow, secure-but-broken, or works-but-unusable software just because it "functions."

### Question 5
What is technical debt?

A) Money owed to developers
B) The implied cost of rework caused by choosing quick solutions over better long-term approaches
C) Bugs in production code
D) Unpaid software licenses

**Correct Answer**: B
**Explanation**: Technical debt is shortcuts that cost you later. "Let's hardcode this instead of making it configurable" saves time now but creates maintenance burden forever. Like financial debt, small technical debt is manageable; too much crushes you. Professional teams track and pay down technical debt intentionally. Ignore it and eventually the codebase becomes unmaintainable.

### Question 6
Your team is debating whether to fix technical debt or build new features. What factors should guide this decision?

A) Always choose new features
B) Balance business value, risk, and long-term maintainability
C) Always fix technical debt first
D) Let the newest team member decide

**Correct Answer**: B
**Explanation**: This is a classic trade-off. High technical debt slows future work—fixing it is investment. But new features create business value now. Professional teams balance: "This debt is making every feature take twice as long—let's fix it. This debt is minor and we have critical features due—defer it." Context matters. Absolute rules fail; thoughtful judgment succeeds.

### Question 7
What is code coverage in the context of testing?

A) How many developers have read the code
B) The percentage of code executed by your test suite
C) How many lines of code have been written
D) Geographic distribution of developers

**Correct Answer**: B
**Explanation**: Code coverage measures what percentage of your code is tested. 80% coverage means your tests execute 80% of code lines (or branches/paths). This isn't a perfect metric—100% coverage doesn't guarantee no bugs—but low coverage is a red flag. Professional teams track coverage trends: dropping coverage suggests testing discipline is slipping.

### Question 8
A feature passes all tests but real users find it confusing. What does this tell you?

A) The tests are sufficient
B) You need usability testing and user feedback, not just functional tests
C) Users are wrong
D) The feature is complete

**Correct Answer**: B
**Explanation**: Tests verify functionality; users verify usability and value. This is why acceptance testing and user feedback are critical. You can build exactly what was specified and still build the wrong thing. Professional teams validate with real users early and often. Tests tell you if it works; users tell you if it matters.

### Question 9
What's the purpose of a staging environment?

A) To store old versions of code
B) To test code in a production-like environment before deploying to actual users
C) To make deployment more complicated
D) Only large companies need staging environments

**Correct Answer**: B
**Explanation**: Staging is your dress rehearsal. It mimics production—same database type, similar data, same configuration. You deploy to staging first, run tests, verify everything works, then deploy to production. This catches environment-specific issues ("works in development, breaks in production") before users see them. Even small projects benefit from staging.

---

## Risk Management Concepts (40%)

### Question 10
What is risk management in the context of software projects?

A) Buying insurance for your code
B) Identifying potential problems, assessing their impact, and planning mitigation strategies
C) Avoiding all risks by not building anything
D) Something only managers worry about

**Correct Answer**: B
**Explanation**: Risk management is proactive problem-solving. "What could go wrong? How likely is it? How bad would it be? What can we do to prevent or minimize it?" This isn't pessimism—it's professionalism. Teams that identify risks early have response plans. Teams that ignore risks get blindsided. Every decision involves risk; the question is whether you manage it thoughtfully.

### Question 11
You're planning a feature that depends on a third-party API. What's a good risk mitigation strategy?

A) Assume the API will always work perfectly
B) Build fallback behavior for when the API is unavailable and monitor its reliability
C) Avoid using any third-party services
D) Blame the API provider if problems occur

**Correct Answer**: B
**Explanation**: External dependencies are risks. The API could go down, change, or get rate-limited. Professional mitigation: cache responses, show graceful error messages, have monitoring alerts, maybe have a backup provider. You can't eliminate the risk of dependencies, but you can minimize impact. "The API died and took down our entire system" is a failure of risk management.

### Question 12
Your project timeline shows you'll finish one day before the deadline with zero buffer. What's the risk?

A) No risk—you're on schedule
B) High risk—any delay means missing the deadline with no recovery time
C) Low risk—deadlines aren't important
D) The timeline is perfect

**Correct Answer**: B
**Explanation**: No buffer means no resilience. One sick day, one unexpected complexity, one bug—and you miss the deadline. Professional project planning includes buffer time for unknowns. A project "finishing" one day early builds trust. A project missing deadline by one day destroys it. The buffer is risk mitigation for the inevitable uncertainties.

### Question 13
How should you prioritize which risks to address first?

A) Address every possible risk equally
B) Prioritize by likelihood and impact—focus on high-probability, high-impact risks first
C) Address whatever risk is easiest to fix
D) Ignore risks and hope for the best

**Correct Answer**: B
**Explanation**: Risk prioritization is impact × likelihood. A catastrophic but unlikely risk (meteor strike) gets less attention than a moderate but probable risk (key developer leaving). Make a risk matrix: high-likelihood, high-impact risks get mitigation plans immediately. Low-likelihood, low-impact risks get monitored but maybe not actively addressed. Resources are limited; use them wisely.

### Question 14
What's the purpose of a post-mortem (or incident review) after something goes wrong in production?

A) To assign blame and punish responsible parties
B) To understand what happened, why, and how to prevent it from happening again
C) To document failures for performance reviews
D) Post-mortems aren't necessary

**Correct Answer**: B
**Explanation**: Blameless post-mortems are learning opportunities. "The deployment failed because we didn't test the database migration in staging. Solution: add migration testing to our deployment checklist." This is organizational learning. Teams that blame people hide problems. Teams that examine systems improve. The goal is preventing repeat failures, not punishing individuals.

---

## Scoring Guide
- 90-100%: Excellent understanding of quality assurance and risk management
- 80-89%: Good grasp, minor gaps in quality metrics or risk prioritization
- 70-79%: Adequate foundation, review Definition of Done and risk mitigation
- Below 70%: Revisit Module 6 materials, especially quality standards

## Study Resources
- Week 11 Assignment: Creating a Definition of Done
- Week 12 Activity: Risk Assessment Exercise
- Planning Sheet: Quality Metrics Template
- Planning Sheet: Risk Mitigation Matrix
- Canvas Reading: "Managing Technical Debt"
- Reference: Quality Assurance Checklist
- Reference: Common Project Risks and Mitigations
