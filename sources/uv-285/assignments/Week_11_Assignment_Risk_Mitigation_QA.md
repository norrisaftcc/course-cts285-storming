<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/assignments/Week_11_Assignment_Risk_Mitigation_QA.md
  verdict: KEEP
  target-26FA-slot: CTS-285 wk11 (50 pts)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 11 Assignment: Risk Mitigation & Quality Assurance
## CTS-285: Systems Analysis & Design

**Due**: End of Week 11 (Friday, 11:59 PM)
**Points**: 50 (7.1% of total course grade)

---

## What You're Learning

**Role: Developer/QA**. You're ensuring system quality and managing risks.

Focus: Converting your Week 6 risk register from "identified" to "mitigated", implementing QA processes.

---

## Learning Objectives

1. **Execute** mitigation strategies for high-priority risks
2. **Implement** quality assurance testing processes
3. **Define** and enforce Definition of Done criteria
4. **Measure** sprint health using quantitative indicators

---

## Part 1: Risk Mitigation (25 points)

### Update `risk-register.md`

For each **Critical and High risk** from Week 6:
- Execute mitigation strategy
- Document results
- Update status (Mitigating → Resolved OR Accepted)

**Example**:
```markdown
## Risk #3: Flask Authentication Complexity [UPDATED]

**Status**: RESOLVED (was: Identified)
**Actions Taken**:
- Completed Flask-Login tutorial (2 hours, Week 7)
- Implemented auth in test project (Week 8)
- Got code review from instructor (Week 9)
- Implemented in production with bcrypt password hashing (Week 10)

**Result**: Authentication working securely. Users can register/login. Passwords hashed.
**Remaining Issues**: None - risk mitigated
**Lessons**: Tutorial time was worth it. Would do same for other complex features.
```

---

## Part 2: Quality Assurance (25 points)

### Create `qa-test-plan.md`

**Test Types to Implement**:

**1. Functional Testing** (10 pts):
- Test each user story's acceptance criteria
- Document: Feature, Test Steps, Expected Result, Actual Result, Pass/Fail

**2. Error Handling** (5 pts):
- Test with invalid inputs
- Test edge cases (empty data, special characters, very long strings)

**3. Browser Testing** (5 pts):
- Test in Chrome, Firefox, Safari
- Note any browser-specific issues

**4. Performance Testing** (5 pts):
- Test with 50+ database records
- Measure page load times

---

## Deliverables

- [ ] Updated `risk-register.md` (all Critical/High risks addressed)
- [ ] `qa-test-plan.md` (testing documented)
- [ ] Bugs found and fixed (or logged for Sprint 4)

---

## Grading Rubric

| Component | Points |
|-----------|--------|
| **Risk Mitigation** | 25 |
| **QA Testing** | 25 |
| **Total** | 50 |

---

## Andrew's Note

QA isn't optional. It's how you avoid embarrassment when stakeholders (or employers) actually use your system.

Test your own work before others see it.

— Andrew
