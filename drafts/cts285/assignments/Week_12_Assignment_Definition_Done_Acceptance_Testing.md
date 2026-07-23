# Week 12 Assignment: Definition of Done & Acceptance Testing
## CTS-285: Systems Analysis & Design

**Due**: End of Week 12 (Friday, 11:59 PM)
**Points**: 50 (6.7% of 750)

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

## Part 1: Definition of Done (15 points)

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

## Part 2: Acceptance Testing (15 points)

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

## Part 3: Lightweight Deploy (10 points)

> **Assignment body authored by task 1.6 (wk11–12 expansion).** The 10-point value is fixed by the canonical points table (`phase0/CTS285_Canonical_Points_Table.md`); the deploy deliverable instructions and project-specific steps land with the content expansion.

---

## Part 4: Grouped Presentation (10 points)

> **Assignment body authored by task 1.6 (wk11–12 expansion).** The 10-point value is fixed by the canonical points table; the grouped-presentation deliverable instructions land with the content expansion.

---

## Deliverables

- [ ] `definition-of-done.md`
- [ ] `acceptance-test-results.md` (all MVP stories tested)
- [ ] Screenshots proving tests passed

---

## Grading Rubric

| Component | Points |
|-----------|--------|
| **Definition of Done** | 15 |
| **Acceptance Testing** | 15 |
| **Lightweight Deploy** | 10 |
| **Grouped Presentation** | 10 |
| **Total** | 50 |

---

## Andrew's Note

"Done" is a loaded word. Is it done-done? Or "works on my machine" done?

DoD prevents misunderstandings. Everyone knows what complete means.

— Andrew
