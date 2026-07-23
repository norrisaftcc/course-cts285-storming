# Week 9-10 Assignment: Sprint 3 - Development & Code Review
## CTS-285: Systems Analysis & Design

**Due**: End of Week 10 (Friday, 11:59 PM)
**Points**: 100 (13.3% of 750)
**Submission**: GitHub repository with refined features + code review documentation

---

## What You're Learning

**Role: Developer**. You're no longer facilitating or planning - you're executing.

Sprint 3 focuses on:
- Refining Sprint 2 features (fixing bugs, improving UX)
- Adding new features with quality focus
- Conducting peer code reviews
- Managing technical debt
- Testing strategies

**This is the "getting it right" sprint.** Sprint 2 proved you can build. Sprint 3 proves you can build well.

---

## Learning Objectives

1. **Implement** user stories with emphasis on code quality and testing
2. **Conduct** structured code reviews using checklist
3. **Refactor** code to reduce technical debt
4. **Write** basic tests for critical functionality
5. **Document** implementation decisions and trade-offs

---

## Part 1: Implementation (45 points)

### Sprint 3 Focus Areas

**New Features** (30 pts):
- Implement 6-8 new user stories from backlog
- Focus on Should Have priorities (core MVP complete in Sprint 2)

**Refinements** (15 pts):
- Fix bugs found in Sprint 2
- Improve UI/UX based on sprint review feedback
- Add error handling for edge cases

### Quality Requirements

**Code Must**:
- Follow consistent style (PEP 8 for Python)
- Include docstrings for functions
- Handle errors gracefully (try/except, validation)
- No hardcoded secrets (use environment variables)
- Use meaningful variable names

**Testing** (New Requirement):
Write basic tests for at least 3 critical functions:
```python
# test_models.py
def test_user_creation():
    user = User(email="test@test.com", name="Test User")
    assert user.email == "test@test.com"
    assert user.is_active == True

def test_event_rsvp():
    event = Event.query.get(1)
    user = User.query.get(1)
    rsvp = event.add_rsvp(user)
    assert rsvp.status == "confirmed"
```

---

## Part 2: Code Review (30 points)

### Peer Review Process

**You will**:
1. **Give** code review to one classmate (15 pts)
2. **Receive** code review from one classmate (10 pts)
3. **Respond** to feedback by implementing changes (5 pts)

### Giving Code Review

**Review another student's Sprint 3 pull request**

Use this checklist (create `code-review-given.md`):

#### Code Review Checklist

**Functionality** (does it work?):
- [ ] Code runs without errors
- [ ] Features work as described
- [ ] Edge cases handled (empty data, invalid inputs)

**Readability** (can I understand it?):
- [ ] Variable names are descriptive
- [ ] Functions have clear purpose
- [ ] Comments explain "why" not "what"
- [ ] Code is organized logically

**Quality** (is it maintainable?):
- [ ] No code duplication
- [ ] Functions are small and focused
- [ ] Error handling present
- [ ] No obvious security issues

**Suggestions** (how could it improve?):
- [List 3-5 specific improvement suggestions]

**Positive Feedback** (what was done well?):
- [List 2-3 things done well]

### Receiving Code Review

**Document feedback in `code-review-received.md`**:

**Feedback Summary**:
- [List key feedback points]

**Changes Implemented**:
- [Feedback item 1] → [What I changed]
- [Feedback item 2] → [What I changed]

**Feedback Not Implemented** (and why):
- [Feedback item] → [Reason: out of scope / disagree / will do in Sprint 4]

---

## Part 3: Technical Debt Management (15 points)

### Create `technical-debt-log.md`

**Identify 5-8 areas** where your code could be better:

**Format**:
```markdown
## Technical Debt Item #1: Hard-coded database connection string

**Location**: `app.py` line 15
**Problem**: Database path is hardcoded. Makes it hard to switch between dev/prod.
**Impact**: Medium (works but not portable)
**Effort to Fix**: Low (30 minutes)
**Plan**: Move to environment variable in Sprint 4 OR before deployment (Week 13)
**Priority**: Medium (not blocking, but should fix before final delivery)
```

**Categories to consider**:
- Code duplication (same logic in multiple places)
- Missing error handling
- No input validation
- Hard-coded values
- Complex functions that should be split
- Missing tests
- TODO comments in code

### Prioritize Technical Debt

**High Priority** (fix this sprint):
- Security issues
- Bugs affecting multiple features
- Performance problems

**Medium Priority** (fix before final delivery):
- Code quality issues
- Missing tests
- Hardcoded values

**Low Priority** (nice to have):
- Refactoring for elegance
- Additional features
- UI polish

---

## Part 4: Sprint Artifacts (10 points)

**Standard sprint deliverables**:
- `sprint-3-planning.md`
- `sprint-3-standups.md` (10 entries)
- `sprint-3-burndown.md`
- `sprint-3-retrospective.md`

**Same format as Sprint 2** but with focus on:
- Code quality improvements
- Testing added
- Technical debt addressed
- Code review learnings

---

## Deliverables Checklist

- [ ] Working code with 6-8 new features
- [ ] Basic tests written (at least 3 test functions)
- [ ] `code-review-given.md` (review of peer's code)
- [ ] `code-review-received.md` (response to feedback)
- [ ] `technical-debt-log.md` (5-8 items identified)
- [ ] Sprint artifacts (planning, standups, burndown, retrospective)
- [ ] Code committed with clear messages
- [ ] Requirements.txt updated

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Implementation** | 45 | Features work, code quality high, tests written |
| **Code Review** | 30 | Given (15), Received (10), Response (5) |
| **Technical Debt** | 15 | 5-8 items identified, prioritized, plan created |
| **Sprint Artifacts** | 10 | Planning, standups, burndown, retrospective complete |
| **Total** | 100 | |

---

## Andrew's Note

**Sprint 3 is where you become a professional developer.**

Sprint 1: Designer. Sprint 2: Builder. Sprint 3: **Craftsperson**.

The difference? Craftspeople care about quality, not just functionality. They test. They refactor. They accept feedback.

**Code review is career-critical.** Every tech job involves code review. Learning to give constructive feedback (not "this sucks") and receive feedback gracefully (not defensively) separates junior from senior developers.

See you at code review!

— Andrew
