<!--
  ADAPTATION PROVENANCE — 26FA Dataman regime
  source: sources/uv-285/knowledge-checks/Module_06_Knowledge_Check.md
  adapted: 2026-07-24
  changes: project examples re-pointed to the Dataman modernization exemplar
           (drafts/cts285/shared-dataman-artifacts/) for the questions that
           needed a concrete project (Q4, Q8, Q9, Q11, Q13, Q14); points
           normalized per ADR-002 (10 pts, graded, not bonus — this module's
           source file never used "bonus" framing, but the graded 10-pt
           value is now stated explicitly, matching the M2–M5 adaptations);
           naming per ADR-004 (Dataman only; no DataMon/Datamon); board
           columns and Trusted Workflow language checked against
           NAMING_CANON.md (none appeared in source, none introduced here).
           No correct answer was changed — see changelog in the handoff
           response.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 6 Knowledge Check: Ship It — Quality Assurance, Definition of Done & Risk Management

**Purpose**: Assess understanding of Definition of Done, quality metrics, acceptance testing, technical debt, and risk identification/mitigation — applied to the Dataman modernization spine (Weeks 11–12: Risk Mitigation & QA, and DoD & Acceptance Testing / Lightweight Deploy).
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Points**: **10 pts (1.3% of 750), graded**
**Time Estimate**: 15–20 minutes

---

## Quality Assurance Concepts (60% of questions)

### Question 1
What is a "Definition of Done" in Agile development?

A) When the code compiles without errors
B) A shared checklist of quality criteria that must be met before work is considered complete
C) When the deadline arrives
D) When the developer says they're done

**Correct Answer**: B
**Explanation**: Definition of Done is your quality contract. "Done" means code written, tests pass, code reviewed, documentation updated, deployed to staging. Without shared criteria, "done" is subjective and quality suffers. Your Week 12 `definition-of-done.md` for the Dataman build spells this out explicitly — functionality, code quality, testing, documentation, deployment — so "the Answer Checker feature is done" means the same thing to you as it does to a reviewer. In professional teams, the Definition of Done prevents "technically complete but not shippable" work.

### Question 2
Which of these would typically be included in a Definition of Done?

A) Code written, tests pass, code reviewed, documentation updated
B) Just the code written
C) Manager approval
D) Coffee consumed during development

**Correct Answer**: A
**Explanation**: A good Definition of Done covers all aspects of shippable work. Code exists (written), works correctly (tests pass), meets quality standards (reviewed), and is understandable (documented). The Week 12 Dataman DoD adds a deployment checkpoint too — "no hardcoded secrets, ready for staging" — because a feature that's coded and tested but can't ship isn't done either. Teams customize this list; the point is explicit quality standards everyone understands and follows.

### Question 3
What is the purpose of quality metrics in software development?

A) To punish developers who write bugs
B) To objectively measure quality and identify areas for improvement
C) To make projects seem more complex
D) Metrics aren't useful in software development

**Correct Answer**: B
**Explanation**: Quality metrics provide visibility: test coverage percentage, bug count, code review time, defect rate. These aren't about blame — they're about improvement. "Our Attempt-logging test coverage dropped from 80% to 60% after the Memory Bank refactor" signals a problem on the Dataman build before it causes a production issue where a learner's second try never gets recorded. Professional teams track metrics to make informed decisions, not to create reports.

### Question 4
You're doing acceptance testing on the Dataman Memory Bank set-assignment feature (the Curator Console story where a teacher assigns a stored set to a student). It correctly assigns the set — but takes several seconds each time, which is frustrating when a teacher is setting up five stations before the bell. Does this pass your Definition of Done?

A) Yes, it works so it's done
B) No, if performance is part of your non-functional requirements and Definition of Done
C) Yes, performance doesn't matter
D) Only if the deadline has passed

**Correct Answer**: B
**Explanation**: Functional correctness isn't enough. Ms. Alvarez's stakeholder need was explicit — "fast, because I'm setting up five stations at 7:40 in the morning" — so if your non-functional requirements capture that expectation and set assignment takes several seconds, it's not done, even though it technically works. This is why Definition of Done includes non-functional requirements. Professional teams don't ship slow, secure-but-broken, or works-but-unusable software just because it "functions."

### Question 5
What is technical debt?

A) Money owed to developers
B) The implied cost of rework caused by choosing quick solutions over better long-term approaches
C) Bugs in production code
D) Unpaid software licenses

**Correct Answer**: B
**Explanation**: Technical debt is shortcuts that cost you later. "Let's hardcode the reward light-show tiers instead of making them data-driven" saves time now on your Dataman build but creates maintenance burden the moment a stakeholder wants a new tier. Like financial debt, small technical debt is manageable; too much crushes you. Professional teams track and pay down technical debt intentionally — it's exactly what your Sprint 3 technical-debt log and Week 11 risk mitigation work are for.

### Question 6
Your team is debating whether to fix technical debt or build new features. What factors should guide this decision?

A) Always choose new features
B) Balance business value, risk, and long-term maintainability
C) Always fix technical debt first
D) Let the newest team member decide

**Correct Answer**: B
**Explanation**: This is a classic trade-off. High technical debt slows future work — fixing it is investment. But new features create business value now. On the Dataman project: "This validation shortcut in the Memory Bank set-builder is making every Curator Console feature take twice as long — let's fix it. This debt in the light-show display is minor and we have acceptance testing due — defer it." Context matters. Absolute rules fail; thoughtful judgment succeeds.

### Question 7
What is code coverage in the context of testing?

A) How many developers have read the code
B) The percentage of code executed by your test suite
C) How many lines of code have been written
D) Geographic distribution of developers

**Correct Answer**: B
**Explanation**: Code coverage measures what percentage of your code is tested. 80% coverage of your Dataman Attempt-and-Score logic means your tests execute 80% of those code lines (or branches/paths). This isn't a perfect metric — 100% coverage doesn't guarantee no bugs — but low coverage on the two-tries rule or the division-remainder handling is a red flag. Professional teams track coverage trends: dropping coverage suggests testing discipline is slipping.

### Question 8
The Number Guesser game (a Dataman practice mode where the system picks a hidden number and gives "it's between X and Y" hints) passes every automated test. But when Ms. Alvarez's students try it, several give up, confused about what the hints mean. What does this tell you?

A) The tests are sufficient
B) You need usability testing and user feedback, not just functional tests
C) Users are wrong
D) The feature is complete

**Correct Answer**: B
**Explanation**: Tests verify functionality; users verify usability and value. This is why acceptance testing and user feedback are critical. You can build exactly what the acceptance criteria specify — hints appear, the guess range narrows — and still build something students can't figure out how to use. Professional teams validate with real users early and often. Tests tell you if it works; users tell you if it matters.

### Question 9
Before your Dataman build goes live for real students, your Week 12 deploy plan has you push it to a staging environment first. What's the purpose of that step?

A) To store old versions of code
B) To test code in a production-like environment before deploying to actual users
C) To make deployment more complicated
D) Only large companies need staging environments

**Correct Answer**: B
**Explanation**: Staging is your dress rehearsal. It mimics production — same database type, similar seeded data, same configuration. You deploy the Dataman build to staging first, run acceptance tests, verify the Memory Bank cap and the two-tries flow both hold up, then deploy to production. This catches environment-specific issues ("works in development, breaks in production") before a classroom sees them. Even a solo capstone project benefits from staging — it's Part 3 of the Week 12 assignment for exactly this reason.

---

## Risk Management Concepts (40% of questions)

### Question 10
What is risk management in the context of software projects?

A) Buying insurance for your code
B) Identifying potential problems, assessing their impact, and planning mitigation strategies
C) Avoiding all risks by not building anything
D) Something only managers worry about

**Correct Answer**: B
**Explanation**: Risk management is proactive problem-solving. "What could go wrong on the Dataman build? How likely is it? How bad would it be? What can we do to prevent or minimize it?" This isn't pessimism — it's professionalism. Your Week 6 risk register identifies risks; your Week 11 risk mitigation work executes the response plans. Teams that identify risks early have response plans. Teams that ignore risks get blindsided.

### Question 11
Your Dataman project's in-app "contact support" feature depends on a third-party email service to deliver a parent's or teacher's message when self-recovery doesn't fix a problem. What's a good risk mitigation strategy?

A) Assume the email service will always work perfectly
B) Build fallback behavior for when the service is unavailable and monitor its reliability
C) Avoid using any third-party services
D) Blame the service provider if problems occur

**Correct Answer**: B
**Explanation**: External dependencies are risks. The email service could go down, change its API, or get rate-limited. Professional mitigation: queue the message and retry, show a clear "your message will send when we reconnect" state instead of a silent failure, and monitor the service's reliability. You can't eliminate the risk of a dependency, but you can minimize its impact. "The email service died and the Dataman support feature silently lost every request" is a failure of risk management.

### Question 12
Your Dataman project plan shows Sprint 3 finishing one day before the Week 10 deadline, with zero buffer. What's the risk?

A) No risk—you're on schedule
B) High risk—any delay means missing the deadline with no recovery time
C) Low risk—deadlines aren't important
D) The timeline is perfect

**Correct Answer**: B
**Explanation**: No buffer means no resilience. One sick day, one unexpected complexity in the Attempt-tracking logic, one bug in the Memory Bank cap check — and you miss the deadline. Professional project planning includes buffer time for unknowns. A project "finishing" one day early builds trust. A project missing deadline by one day destroys it. The buffer is risk mitigation for the inevitable uncertainties.

### Question 13
Your Week 6 Dataman risk register lists both "the third-party support-email service goes down during finals week" and "a meteor strike destroys the server." How should you prioritize which risks to address first?

A) Address every possible risk equally
B) Prioritize by likelihood and impact—focus on high-probability, high-impact risks first
C) Address whatever risk is easiest to fix
D) Ignore risks and hope for the best

**Correct Answer**: B
**Explanation**: Risk prioritization is impact × likelihood. A catastrophic but unlikely risk (meteor strike) gets less attention than a moderate but probable risk (a third-party service outage during your busiest week). Make a risk matrix: high-likelihood, high-impact risks — like the email dependency — get mitigation plans immediately. Low-likelihood, low-impact risks get monitored but maybe not actively addressed. Resources are limited; use them wisely.

### Question 14
Your Dataman deployment fails in production because a database migration for a new Memory Bank validation rule wasn't tested in staging first. What's the purpose of a post-mortem (or incident review) after something like this goes wrong?

A) To assign blame and punish responsible parties
B) To understand what happened, why, and how to prevent it from happening again
C) To document failures for performance reviews
D) Post-mortems aren't necessary

**Correct Answer**: B
**Explanation**: Blameless post-mortems are learning opportunities. "The deployment failed because we didn't test the Memory Bank migration in staging. Solution: add migration testing to our deployment checklist before every FINISH → REVIEW → CLEAR → MERGE." This is organizational learning. Teams that blame people hide problems. Teams that examine systems improve. The goal is preventing repeat failures, not punishing individuals — even on a solo capstone project, the habit is the point.

---

## Scoring Guide
- 90–100%: Excellent understanding of quality assurance and risk management
- 80–89%: Good grasp, minor gaps in quality metrics or risk prioritization
- 70–79%: Adequate foundation, review Definition of Done and risk mitigation
- Below 70%: Revisit Module 6 materials, especially quality standards

## Study Resources
- Week 11 Assignment: Risk Mitigation & Quality Assurance (Dataman risk register update; QA test plan)
- Week 12 Assignment: Definition of Done & Acceptance Testing (Dataman DoD; acceptance-test results; lightweight deploy)
- Reference: `Dataman_Seeded_Backlog.md` (shared class artifact — the stories the acceptance-criteria examples above trace to)
- Reference: `Dataman_Reference_ERD.md` (shared class artifact — the Attempt/Score/MemoryBankSet entities behind the coverage examples above)
- Canvas Reading: "Managing Technical Debt"
- Reference: Quality Assurance Checklist
- Reference: Common Project Risks and Mitigations
- Reference: Git Workflow Guide (Trusted Workflow: FILE → BRANCH → DRAFT → BUILD → FINISH → REVIEW → CLEAR → MERGE)
