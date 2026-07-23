<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/assignments/Week_12_Assignment_Definition_Done_Acceptance_Testing.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk12 (50 pts)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 12 Assignment: Definition of Done & Acceptance Testing
## CTS-285: Systems Analysis & Design

**Due**: End of Week 12 (Friday, 11:59 PM)
**Points**: 50 (7.1% of total course grade)

---

## What You're Learning

**Creating and enforcing Definition of Done** - the criteria that determines when work is actually complete.

---

## Learning Objectives

1. **Define** comprehensive Definition of Done for your project
2. **Verify** all features meet DoD criteria
3. **Conduct** acceptance testing against user story criteria
4. **Document** remaining work needed for production readiness

---

## Part 1: Definition of Done (20 points)

### Create `definition-of-done.md`

**Your DoD must include**:

**Functionality**:
- [ ] Feature works as described in user story
- [ ] All acceptance criteria met (Given-When-Then scenarios pass)
- [ ] No critical bugs

**Code Quality**:
- [ ] Code reviewed (self or peer)
- [ ] Code follows style guide
- [ ] Functions documented

**Testing**:
- [ ] Manual testing completed
- [ ] Edge cases tested
- [ ] No console errors

**Documentation**:
- [ ] README updated if needed
- [ ] Comments explain complex logic

**Deployment**:
- [ ] Works in development environment
- [ ] No hardcoded secrets
- [ ] Ready for staging deployment

---

## Part 2: Acceptance Testing (30 points)

### Create `acceptance-test-results.md`

**For each MVP user story**, test acceptance criteria:

**Format**:
```markdown
## User Story: Student filters events by category

### Acceptance Criterion 1
**Given** I'm on events browse page with 20+ events
**When** I select "Career" category
**Then** Only Career events display

**Test Result**: ✅ PASS
**Evidence**: Screenshot shows 5 Career events, 15 other events hidden

### Acceptance Criterion 2
[Continue for all criteria]

**Overall Story Status**: DONE / INCOMPLETE (if incomplete, explain what's missing)
```

---

## Deliverables

- [ ] `definition-of-done.md`
- [ ] `acceptance-test-results.md` (all MVP stories tested)
- [ ] Screenshots proving tests passed

---

## Grading Rubric

| Component | Points |
|-----------|--------|
| **Definition of Done** | 20 |
| **Acceptance Testing** | 30 |
| **Total** | 50 |

---

## Andrew's Note

"Done" is a loaded word. Is it done-done? Or "works on my machine" done?

DoD prevents misunderstandings. Everyone knows what complete means.

— Andrew
