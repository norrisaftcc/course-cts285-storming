<!-- SOURCE: ../csc_dash/courses/CTS-285/planning-sheets/Risk_Register_Template.md -->
<!-- ADAPTED for 26FA per issue #5: worked example rebuilt as solo Dataman risks (SendGrid/Flask/Heroku/team removed), solo-arc de-teaming, Media-skin pass, CHAOS percentages paraphrased to a cited non-numeric claim. Planning sheet — carries ZERO points. -->

# Risk Register Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Identify, assess, and track project risks with mitigation strategies. Proactive risk management prevents crises.

---

## When to Use

Create your initial risk register in Week 6 (your first sprint). Update it weekly throughout the project. Review risks during sprint planning and retrospectives.

---

## Instructions

1. **Identify risks early** — brainstorm across the categories: technical, schedule, resource, scope
2. **Assess likelihood** — how probable is this risk? (1 = Rare, 5 = Almost Certain)
3. **Assess impact** — if it happens, how bad is it? (1 = Minimal, 5 = Catastrophic)
4. **Calculate risk score** — Likelihood × Impact = Risk Score (1–25)
5. **Prioritize** — tackle the high scores (15+) first
6. **Name an owner and a trigger** — even solo, decide *who* watches each risk (you) and *what signal* means it's materializing
7. **Update weekly** — risks change, new ones emerge, old ones resolve

---

## Template

### Project Risk Register

**Project**: [Project name]
**Last Updated**: [Date]
**Risk Owner**: [Who is tracking risks — on a solo project, that's you]

---

## Risk Assessment Scale

**Likelihood**: 1 (Rare) | 2 (Unlikely) | 3 (Possible) | 4 (Likely) | 5 (Almost Certain)

**Impact**: 1 (Minimal) | 2 (Minor) | 3 (Moderate) | 4 (Major) | 5 (Catastrophic)

**Risk Score**: Likelihood × Impact
- **1–5**: Low risk (monitor)
- **6–11**: Medium risk (plan mitigation)
- **12–25**: High risk (urgent mitigation needed)

---

## Active Risks

| Risk ID | Risk Description | Category | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Plan | Owner | Status | Date Added |
|---------|------------------|----------|------------------|--------------|------------|-----------------|-------|--------|------------|
| R-001 | | Technical / Schedule / Resource / Scope | | | | | | Open / Monitoring / Mitigated / Closed | |
| R-002 | | | | | | | | | |
| R-003 | | | | | | | | | |

---

## Risk Categories

**Technical**: technology failures, integration issues, performance problems
**Schedule**: deadline risks, dependency delays, estimation errors
**Resource**: your own availability, skill gaps, tool access
**Scope**: feature creep, changing requirements, unrealistic expectations

---

## Closed/Resolved Risks

| Risk ID | Risk Description | Resolution | Date Closed |
|---------|------------------|------------|-------------|
| | | | |

---

> This table contains no jokes. A risk register is a real tool, and it will save your project in week 12 exactly once — which is enough. Fill it in like you mean it.
> — SHODANN, your Channel Success Partner

## Filled Example

### Project Risk Register

**Project**: Dataman Modernization
**Last Updated**: Sprint 1, end of week
**Risk Owner**: Robin (illustrative — solo Creator)

---

## Risk Assessment Scale

**Likelihood**: 1 (Rare) | 2 (Unlikely) | 3 (Possible) | 4 (Likely) | 5 (Almost Certain)

**Impact**: 1 (Minimal) | 2 (Minor) | 3 (Moderate) | 4 (Major) | 5 (Catastrophic)

**Risk Score**: Likelihood × Impact
- **1–5**: Low risk (monitor)
- **6–11**: Medium risk (plan mitigation)
- **12–25**: High risk (urgent mitigation needed)

---

## Active Risks

| Risk ID | Risk Description | Category | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Plan | Owner | Status | Date Added |
|---------|------------------|----------|------------------|--------------|------------|-----------------|-------|--------|------------|
| R-001 | Ticks-timing design decision stays unresolved — the collector wants the Atom-Clock "ticks" kept deliberately imprecise as "character"; a classroom wants consistent timing for fairness. Building the wrong one means rework. | Scope | 4 | 3 | **12 (HIGH)** | Get Andrew (as the client) to rule early. Design the timer so precise-vs-imprecise is a *setting*, not a rewrite. **Trigger:** any timed-game story reaching In Progress before the ruling lands. | Robin | Monitoring | Sprint 1 |
| R-002 | Data model is bigger than estimated — storing every ATTEMPT (try 1 vs try 2) and enforcing the Memory Bank ≤10 constraint touched more than the single Answer Checker story implied. | Technical | 4 | 3 | **12 (HIGH)** | Model ATTEMPT and MEMORY_BANK_SET up front against the reference ERD; use schema migrations so later changes don't break saved data. Re-estimate stories that drag the model with them. | Robin | Mitigated | Sprint 1 |
| R-003 | Faithful edge cases slip through untested — division-with-remainder ("r") and the no-negative-results rule are exactly the behaviors the manual and collector call sacred, and exactly the ones easy to forget. | Technical | 3 | 3 | **9 (MEDIUM)** | Write Given-When-Then acceptance tests for the remainder and negative-refusal cases before marking any arithmetic story done. **Trigger:** any arithmetic story reaching In Review without those tests. | Robin | Monitoring | Sprint 1 |
| R-004 | I lose a week to another course's crunch — solo means there is no one to cover the gap. | Resource / Schedule | 3 | 4 | **12 (HIGH)** | Front-load high-risk stories early in each sprint; keep sprint commitments conservative so one lost week doesn't sink the sprint goal. Flag it in standup the moment it's coming, not after. | Robin | Monitoring | Sprint 1 |
| R-005 | Scope creep toward the creature-collection stretch epics — the "raise a companion" homage below the MVP line is fun and tempting, and would eat the sprint the core loop needs. | Scope | 4 | 3 | **12 (HIGH)** | Keep the stretch epics explicitly Won't-Have-this-semester on the board. The faithful practice loop (answer checker, two tries, memory bank, positive-only reward) is the product; the companion is not. Revisit only after the MVP demos. | Robin | Mitigated | Sprint 1 |
| R-006 | The lightweight deploy in weeks 11–12 fails with no time to troubleshoot. | Schedule | 3 | 5 | **15 (HIGH)** | Do a throwaway deploy of a "hello Dataman" build by week 8 — two-plus sprints early — so the deploy path is proven before it's on the critical path. Ask Andrew to review the deploy plan in week 11. Fallback: demo from localhost if the deploy fails. | Robin | Mitigated | Sprint 1 |
| R-007 | Web-stack learning curve slows the early sprints — first time building this kind of app. | Technical | 3 | 3 | **9 (MEDIUM)** | Add a small learning spike to Sprint 1. Keep the first sprint's commitment low. Lean on office hours for the parts that stall. | Robin | Monitoring | Sprint 1 |
| R-008 | The reward "light show" animations eat time the core loop needs — polish is seductive; the answer-check loop is the point. | Schedule | 3 | 2 | **6 (LOW)** | Ship a plain "correct / try again" signal first; treat the scaled light-show as polish for a later sprint. Functional before beautiful. | Robin | Monitoring | Sprint 1 |

---

## Closed/Resolved Risks

| Risk ID | Risk Description | Resolution | Date Closed |
|---------|------------------|------------|-------------|
| R-009 | No starting backlog — risk of building features no stakeholder asked for | Imported the class Dataman seeded backlog; every story now traces to a named stakeholder need | Sprint 1 |
| R-010 | No agreed Definition of Done — stories called "done" that aren't | Defined a DoD during Sprint 1 planning (acceptance criteria met, tests pass, reviewed via the Trusted Workflow, demo-able) | Sprint 1 |

---

## Why This Matters

Risk management is the difference between "everything is fine" and "the project is on fire" in the last week.

Software projects fail constantly. The Standish Group's long-running CHAOS research has found, across decades of data, that most software projects finish late, run over budget, or get canceled outright — and only a minority land on time and on scope. The common thread in the failures is unmanaged risk. Successful projects identify risks early and mitigate them; failed ones ignore risks until they become crises.

Two well-documented examples:

**Microsoft Windows Vista**:
- **Risk**: heavy dependency on the new WinFS file system
- **Mitigation**: none — it was assumed it would work
- **Outcome**: WinFS was cut mid-project, Vista slipped badly, features were dropped

**Healthcare.gov launch (2013)**:
- **Risk**: many contractors, no end-to-end integration testing
- **Mitigation**: none — it was assumed the pieces would fit
- **Outcome**: the site failed on launch day; a very public, very expensive recovery

**Your Dataman project**:
- **Risk**: the ticks-timing decision drags and you build the wrong timer
- **Mitigation**: get the client's ruling early; make it a setting, not a rewrite
- **Outcome**: whichever way it's ruled, you're not rebuilding the timer in week 12

The pattern: successful builders identify risks during planning, not during the crisis.

In **CSC-289** (the team capstone), risk management will save your project again — and there the risks include teammates, not just tech. Creators who track risks finish on time. The habit is the same one you're building solo now.

**Professional project managers spend a meaningful share of their time on risk management. It is not optional.**

---

## Common Mistakes to Avoid

- **Mistake**: Only listing obvious risks — "the code might not work"
  **Better approach**: Specific, concrete risks — "division-with-remainder ships untested and breaks a behavior the manual calls sacred." Generic risks lead to useless mitigation.

- **Mistake**: Marking every risk likelihood 5, impact 5 (everything is critical!)
  **Better approach**: Be realistic. Not everything is catastrophic. Score honestly so you know what to prioritize. If everything is high, nothing is.

- **Mistake**: Identifying risks with no mitigation plan
  **Better approach**: Every risk needs a mitigation. "Monitor it" is not a plan. "Do a throwaway deploy by week 8" is.

- **Mistake**: Writing the register in week 6 and never updating it
  **Better approach**: It's a living document. The ATTEMPT-model risk wasn't visible until you started building; new risks emerge as you go.

- **Mistake**: A risk with no owner and no trigger
  **Better approach**: Even solo, name who watches it (you) and the concrete signal that means it's happening ("any timed-game story reaching In Progress before the ticks ruling").

- **Mistake**: Treating the register as busywork for a grade
  **Better approach**: This document will save your project. When the deploy fights you in week 12, you'll execute the plan you wrote in week 6.

---

## Integration with Course Project

In CTS-285, a risk register is required for your Dataman build:

**Requirements**:
- Create your initial register by Week 6 (first sprint)
- At least 8 risks identified
- Update weekly (visible in your commit history)
- Review risks during retrospectives
- Submit with your final project documentation

**How the register is graded:** through the parent assignment's rubric line for it — this template carries no points of its own. Check the relevant sprint/QA assignment for the exact rubric.

**How to find risks for your Dataman project**:

1. **Technical risks** — what are you building for the first time? What behavior is easy to get subtly wrong?
   - Example: "the remainder 'r' and no-negatives rules ship untested"

2. **Schedule risks** — what deadlines are tight? What's on your critical path?
   - Example: "the weeks 11–12 deploy fails with no time to fix"

3. **Resource risks** — what skills are you still learning? When might you be unavailable?
   - Example: "I lose a week to another course's crunch — and I'm solo"

4. **Scope risks** — what's a stretch goal? What's tempting but not the MVP?
   - Example: "the creature-collection stretch epics pull focus off the core loop"; or "the full curator console might be 13 story points — too big; break it down"

**When to review the register**:
- **Sprint planning**: check risks before committing to stories
- **Standups**: mention materializing risks in the "blockers" section
- **Retrospective**: update risk status based on what actually happened
- **Weekly**: scan for new risks; update likelihood/impact

**Professional risk-management practices**:
- **Risk burndown**: track total risk score over time (it should fall as the project matures)
- **Risk triggers**: define the signal that a risk is materializing ("any arithmetic story in review without remainder tests")
- **Escalation**: decide when a risk goes to Andrew (as client/instructor) — e.g. score 20+
- **Contingency**: reserve a slice of each sprint's capacity as buffer for mitigation

**In professional projects**, risks are reviewed in status meetings, high risks are escalated, and a risk-management plan is part of the project charter. **This practice is career-critical — every project manager, product manager, and engineering lead tracks risks. Learn it now.**
