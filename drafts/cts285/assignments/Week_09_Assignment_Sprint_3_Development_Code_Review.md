<!--
  26FA CONTENT PASS — B-006, 2026-08-06
  Re-anchored to the Dataman 2.0 spine; the file had zero Dataman references.
  Code review re-mechanised around the COMMON project — every Creator implements the same seeded
  stories, so review is comparative in a way a class of 20 different projects cannot be.
  ADRs folded into Part 4 per the canonical points table ("fold ADRs into Part 3/4, no point change").
  These are the PRISM-ORANGE evidence the master plan flags as missing.
  Header 100 pts unchanged; rubric rows re-labelled, still sum to 100.
  Andrew's Note left verbatim — it carries no unverified anecdote (non-negotiables #3, #5).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 9-10 Assignment: Sprint 3 - Development & Code Review
## CTS-285: Systems Analysis & Design

**Due**: End of Week 10 (Friday, 11:59 PM)
**Points**: 100 (13.3% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

**Role: Developer.** You are no longer facilitating or planning — you are executing.

**This is the ORANGE module.** On the PRISM ladder, ORANGE is the developer who owns a feature set under ambiguity and can show it: banked decision records, a schema, sprint artifacts. Sprint 2 proved you can build. Sprint 3 proves you can build *well* and **account for why you built it that way** — which is the part that transfers to a job interview.

Sprint 3 focuses on:
- Refining Sprint 2 features against the seeded backlog
- Adding stories with a quality focus
- **Reviewing a peer's implementation of features you also built**
- Managing technical debt
- **Writing 2–3 Architecture Decision Records** — the evidence that you decided rather than defaulted

> Every Creator this week discovers that their Dataman and their neighbour's Dataman disagree about something the manual never settled. That disagreement is the most useful thing in the module. It is also the thing an ADR exists to record.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Implement** seeded backlog stories with emphasis on code quality and testing
2. **Conduct** a structured code review of a peer's implementation of the same stories
3. **Refactor** code to reduce technical debt
4. **Write** tests for behavior the 1977 manual specifies
5. **Author** Architecture Decision Records for choices the source document left open

---

## Part 1: Implementation (45 points)

### Sprint 3 Focus Areas

**New Features** (30 pts):
- Implement 6–8 stories from your classified backlog
- Focus on the **Should Haves** — your Must Haves were Sprint 2's job

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
Write tests for at least 3 behaviors **the manual actually specifies**. Dataman is unusually good to test against, because a 1977 document already told you what correct looks like.

```python
# test_dataman.py

def test_two_tries_then_reveal():
    """Manual p.4: two attempts, then the answer is shown."""
    session = AnswerChecker(problem="7x8", answer=56)
    assert session.check(54).state == "retry"
    assert session.check(55).state == "reveal"
    assert session.check(55).shown_answer == 56

def test_wrong_answer_never_accepted():
    """The one behavior with no acceptable failure mode."""
    session = AnswerChecker(problem="7x8", answer=56)
    assert session.check(55).state != "correct"

def test_memory_bank_ceiling():
    """Manual p.19: up to ten problems in the memory bank."""
    bank = MemoryBank()
    for i in range(10):
        bank.add(Problem(f"{i}+1"))
    with pytest.raises(MemoryBankFull):
        bank.add(Problem("11+1"))
```

A test that asserts *your* behavior proves you wrote what you wrote. A test that asserts *the manual's* behavior proves you built the right thing.

---

## Part 2: Code Review (30 points)

### Why this review is different

Everyone in this course is building **the same product from the same seeded backlog**. That is unusual, and it is worth naming, because it changes what a code review can do.

In a class where twenty students build twenty different projects, a peer reviewer can only check general qualities — is it readable, does it have error handling. They cannot say *"that's wrong"*, because they don't know what right looks like for your app.

Here, your reviewer has implemented **the same stories against the same manual**. They can tell you that your two-tries rule fires a beat early, that you enforced the ten-problem ceiling and they didn't, or that you both handled division-with-remainder and chose differently. **Where you disagree, one of you has found something the manual never settled — and that belongs in an ADR (Part 4).**

### Peer Review Process

**You will**:
1. **Give** code review to one classmate (15 pts)
2. **Receive** code review from one classmate (10 pts)
3. **Respond** to feedback by implementing changes (5 pts)

### Giving Code Review

**Review another Creator's Sprint 3 pull request**

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

**Comparative** (only possible because you built the same thing):
- [ ] Which stories did you both implement? Name at least two.
- [ ] Where does their behavior differ from yours? Be specific — inputs and outputs, not impressions.
- [ ] For each difference: does the manual settle it? Cite the page if so.
- [ ] If the manual is silent, say so plainly. **That is an ADR subject, not a defect** — do not file it as a bug.

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
## Technical Debt Item #1: Attempt-counting is implemented twice

**Location**: `answer_checker.py` line 42 and `electro_flash.py` line 61
**Problem**: The two-tries-then-reveal rule is coded separately in each mode. They agree today. Nothing keeps them agreeing.
**Impact**: High (the attempt rule is the core teaching loop; a silent divergence changes what the product teaches)
**Effort to Fix**: Medium (2 hours — extract, then re-point both call sites)
**Plan**: Extract to a single `AttemptTracker`; one test runs the same sequence through every mode
**Priority**: High (this was Risk #3 in my Week 6 register; it has now actually happened)
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

## Part 4: Sprint Artifacts & Decision Records (10 points)

### Standard sprint deliverables

- `sprint-3-planning.md`
- `sprint-3-standups.md` (10 entries)
- `sprint-3-burndown.md`
- `sprint-3-retrospective.md`

Same format as Sprint 2, focused on code quality, testing, technical debt, and what the code review surfaced.

### Architecture Decision Records — write 2–3

**This is the ORANGE evidence.** An ADR records a decision that was not obvious, at the moment you made it, with the reasoning intact. A year from now the code shows *what* you did; only the ADR shows *why*, and *what you gave up*.

Create `docs/adr/` in your Channel. One file per decision, numbered:

```markdown
# ADR-001: Division with remainder returns quotient and remainder separately

**Status**: Accepted — Sprint 3
**Context**: The manual shows division problems but never specifies how a
non-integer result is presented. Page 5 shows only clean division. The
learner is a child practising arithmetic, not a user who wants 3.5.

**Options considered**:
1. Decimal (3.5) — familiar, but teaches a different skill than the drill intends
2. Quotient + remainder (3 r 1) — matches how the operation is taught at this level
3. Refuse non-integer division entirely — faithful to what the manual shows, but
   silently narrows the practice set

**Decision**: Option 2.

**Consequences**: The answer entry must accept two fields, which complicates the
keypad model and diverges from the single-value entry every other mode uses.
Accepted because the alternative teaches decimals in a drill about division.
Revisit if the Curator Console needs a single sortable score value.
```

**Good ADR subjects are exactly the places the manual is silent** — the ones you found in Week 6 as requirements risks, or this week in code review when your Dataman and your reviewer's disagreed:

- how division with remainder is represented
- whether the ten-problem ceiling is enforced by schema or checked at runtime
- what the timer does, given a 1977 spec that varies with battery and room temperature
- what happens on the third attempt in a mode the transcript does not cover (pp. 7–18)

**An ADR is not a summary of what you built.** If it has no options considered and no consequence you accepted, it is a changelog entry wearing a hat.

---

## Deliverables Checklist

- [ ] Working code with 6-8 new features
- [ ] Basic tests written (at least 3 test functions)
- [ ] `code-review-given.md` (review of peer's code)
- [ ] `code-review-received.md` (response to feedback)
- [ ] `technical-debt-log.md` (5-8 items identified)
- [ ] Sprint artifacts (planning, standups, burndown, retrospective)
- [ ] **2–3 ADRs in `docs/adr/`**, each with options considered and a consequence accepted
- [ ] Code committed with clear messages
- [ ] Requirements.txt updated

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Implementation** | 45 | Features work, code quality high, tests written |
| **Code Review** | 30 | Given (15), Received (10), Response (5) |
| **Technical Debt** | 15 | 5-8 items identified, prioritized, plan created |
| **Sprint Artifacts & ADRs** | 10 | Four artifacts complete; 2–3 ADRs, each recording a real alternative and what was given up |
| **Total** | 100 | |

---

## When You Get Stuck: What Weeks 9–10 Actually Feel Like

Four places Creators reliably struggle here. Being in one of them is on schedule.

### Struggle: "My ADR just describes what I built"

- **Signs**: Each ADR has a Context and a Decision and nothing under Options. The decision reads as the only thing anyone could have done.
- **Intervention**: If there was genuinely no alternative, it is not a decision and does not need a record — delete it and find a real one. The test is whether you can write a second option that a reasonable developer might have picked, and a sentence saying what choosing yours cost. No cost means no decision. Go look at where the manual is silent; that is where the real ones live.
- **Success indicator**: Every ADR names an option you rejected and a consequence you accepted.

### Struggle: "My reviewer says my Dataman is wrong, and I think theirs is"

- **Signs**: A review thread going back and forth on behavior neither of you can settle by argument.
- **Intervention**: Stop arguing and go to the manual. One of three things is true: it settles it and one of you is wrong; it is silent and you have found an ADR subject; or it is in pages 7–18, which are not transcribed, and neither of you can settle it — which is itself worth recording. Cite the page or admit there isn't one. **Disagreement is the module working**, not a problem with your partner.
- **Success indicator**: Every disagreement ends in a citation, an ADR, or a documented gap.

### Struggle: "I have nothing to review — their code looks fine"

- **Signs**: Your review is three compliments and a nitpick about variable names. You spent twenty minutes on it.
- **Intervention**: You have an advantage no ordinary reviewer has: **you built this too.** Stop reading their code as prose and start running your test cases against their implementation. Feed both versions the same sequence — two wrong answers, then a third; eleven problems into the memory bank; a division that doesn't come out even. Differences surface immediately. "Looks fine" usually means you read it instead of running it.
- **Success indicator**: Your review names at least two concrete behavioral differences, with the inputs that produce them.

### Struggle: "Tests feel like extra work on top of the real work"

- **Signs**: You wrote the features, then tried to bolt on three tests at the end, and they all assert what your code already does.
- **Intervention**: Notice what those tests are worth: nothing. A test asserting your own behavior only proves the code does what it does. The manual gives you an external standard — a document written in 1977 that says what correct is, by someone who has never seen your code. Write the assertion from the manual page first, watch it fail, then make it pass. That is the difference between testing and describing.
- **Success indicator**: At least one test cites a manual page in its docstring, and failed before it passed.

---

## Andrew's Note

**Sprint 3 is where you become a professional developer.**

Sprint 1: Designer. Sprint 2: Builder. Sprint 3: **Craftsperson**.

The difference? Craftspeople care about quality, not just functionality. They test. They refactor. They accept feedback.

**Code review is career-critical.** Every tech job involves code review. Learning to give constructive feedback (not "this sucks") and receive feedback gracefully (not defensively) separates junior from senior developers.

See you at code review!

— Andrew
