<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/Risk_Register_Template.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk6 + wk11
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Risk Register Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Identify, assess, and track project risks with mitigation strategies. Proactive risk management prevents crises.

---

## When to Use

Create initial risk register in Week 6 (first sprint). Update weekly throughout project. Review risks during sprint planning and retrospectives.

---

## Instructions

1. **Identify risks early** - Brainstorm with team: technical, schedule, resource, scope risks
2. **Assess likelihood** - How probable is this risk? (1=Rare, 5=Almost Certain)
3. **Assess impact** - If it happens, how bad is it? (1=Minimal, 5=Catastrophic)
4. **Calculate risk score** - Likelihood × Impact = Risk Score (1-25)
5. **Prioritize** - Focus mitigation on high scores (15+) first
6. **Assign owners** - Every risk needs someone monitoring it
7. **Update weekly** - Risks change, new risks emerge, old risks resolve

---

## Template

### Project Risk Register

**Project**: [Project name]
**Last Updated**: [Date]
**Risk Owner**: [Primary person responsible for tracking risks]

---

## Risk Assessment Scale

**Likelihood**: 1 (Rare) | 2 (Unlikely) | 3 (Possible) | 4 (Likely) | 5 (Almost Certain)

**Impact**: 1 (Minimal) | 2 (Minor) | 3 (Moderate) | 4 (Major) | 5 (Catastrophic)

**Risk Score**: Likelihood × Impact
- **1-5**: Low risk (monitor)
- **6-11**: Medium risk (plan mitigation)
- **12-25**: High risk (urgent mitigation needed)

---

## Active Risks

| Risk ID | Risk Description | Category | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Plan | Owner | Status | Date Added |
|---------|------------------|----------|------------------|--------------|------------|-----------------|-------|--------|------------|
| R-001 | | Technical / Schedule / Resource / Scope | | | | | | Open / Monitoring / Mitigated / Closed | |
| R-002 | | | | | | | | | |
| R-003 | | | | | | | | | |

---

## Risk Categories

**Technical**: Technology failures, integration issues, performance problems
**Schedule**: Deadline risks, dependency delays, estimation errors
**Resource**: Team member availability, skill gaps, tool access
**Scope**: Feature creep, changing requirements, unrealistic expectations

---

## Closed/Resolved Risks

| Risk ID | Risk Description | Resolution | Date Closed |
|---------|------------------|------------|-------------|
| | | | |

---

## Filled Example

### Project Risk Register

**Project**: Healthcare Appointment Booking System
**Last Updated**: March 15, 2026
**Risk Owner**: Sarah Chen (Product Owner)

---

## Risk Assessment Scale

**Likelihood**: 1 (Rare) | 2 (Unlikely) | 3 (Possible) | 4 (Likely) | 5 (Almost Certain)

**Impact**: 1 (Minimal) | 2 (Minor) | 3 (Moderate) | 4 (Major) | 5 (Catastrophic)

**Risk Score**: Likelihood × Impact
- **1-5**: Low risk (monitor)
- **6-11**: Medium risk (plan mitigation)
- **12-25**: High risk (urgent mitigation needed)

---

## Active Risks

| Risk ID | Risk Description | Category | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Plan | Owner | Status | Date Added |
|---------|------------------|----------|------------------|--------------|------------|-----------------|-------|--------|------------|
| R-001 | SendGrid email API quota exceeded (100 emails/day free tier) causing failed confirmation emails | Technical | 4 | 4 | **16 (HIGH)** | Upgrade to paid SendGrid plan ($15/month) or switch to AWS SES. Budget approved by Andrew. Upgrade scheduled March 20. | Marcus | Monitoring | Mar 5 |
| R-002 | Marcus unavailable Week 11 (spring break travel) - team loses 20 hours capacity | Resource | 5 | 3 | **15 (HIGH)** | Plan Sprint 4 with reduced capacity (8 points instead of 12). Front-load Marcus's stories to complete before Week 11. Sarah and Aisha cover critical tasks. | Sarah | Mitigated | Mar 1 |
| R-003 | Flask framework learning curve slowing development - team new to Flask | Technical | 3 | 3 | **9 (MEDIUM)** | Completed Flask tutorial Week 4. Pair programming for complex Flask features. Ask Andrew for office hours help. Reference Flask documentation regularly. | Aisha | Monitoring | Feb 20 |
| R-004 | Database schema changes mid-project breaking existing code | Technical | 3 | 4 | **12 (HIGH)** | Use database migrations (Flask-Migrate). Never modify schema directly. Test migrations on dev database first. Document all schema changes in README. | Marcus | Mitigated | Feb 25 |
| R-005 | Scope creep - stakeholder (Andrew) requests new features mid-sprint | Scope | 4 | 3 | **12 (HIGH)** | Strict sprint boundaries - new requests go to backlog, not current sprint. Sarah (PO) negotiates priority with Andrew. Use MoSCoW to defer nice-to-haves. | Sarah | Mitigated | Mar 10 |
| R-006 | GitHub merge conflicts when 3 people code same files | Technical | 4 | 2 | **8 (MEDIUM)** | Pull from main before starting work. Commit small, frequent changes. Communicate in standup who's working on which files. Use feature branches. | All | Monitoring | Mar 8 |
| R-007 | Production deployment fails in Week 14 - no time to troubleshoot | Schedule | 3 | 5 | **15 (HIGH)** | Deploy to Heroku staging environment by Week 12 (2 weeks early). Practice deployment process multiple times. Have Andrew review deployment plan in Week 11. Backup plan: demo from localhost if deployment fails. | Aisha | Mitigated | Mar 5 |
| R-008 | CSS/UI design takes longer than expected - team focuses on backend, neglects frontend | Schedule | 3 | 2 | **6 (LOW)** | Use Bootstrap or Tailwind CSS framework for quick, professional UI. Defer advanced styling to "polish" phase. Functional > beautiful for MVP. | Aisha | Monitoring | Mar 10 |

---

## Closed/Resolved Risks

| Risk ID | Risk Description | Resolution | Date Closed |
|---------|------------------|------------|-------------|
| R-009 | Team doesn't have GitHub projects board set up - tracking chaos | Created GitHub projects Kanban board in Sprint 1. All stories tracked. | Mar 7 |
| R-010 | No agreed Definition of Done causing incomplete stories | Defined DoD during Sprint 2 planning. All team members signed off. | Mar 1 |

---

## Why This Matters

Risk management is the difference between "everything is fine" and "the project is on fire" in Week 14.

Professional software projects fail constantly. According to the Standish Group's CHAOS report:
- **31%** of projects are canceled before completion
- **52%** cost 189% of original budget
- Only **16%** finish on time and on budget

Why? Unmanaged risks.

Successful projects identify risks early and mitigate them. Failed projects ignore risks until they become crises.

Examples from real projects:

**Microsoft Windows Vista (2007)**:
- **Risk**: Dependency on new WinFS filesystem
- **Mitigation**: None - assumed it would work
- **Outcome**: WinFS canceled mid-project, Vista delayed 2 years, massive feature cuts

**Healthcare.gov Launch (2013)**:
- **Risk**: Multiple contractors, no integration testing
- **Mitigation**: None - assumed teams would coordinate
- **Outcome**: Site crashed on launch day, political disaster, $600M wasted

**Your CTS-285 Project**:
- **Risk**: SendGrid email quota exceeded
- **Mitigation**: Upgrade to paid plan or switch to AWS SES
- **Outcome**: Email confirmations keep working, users happy

The pattern: Successful teams identify risks during planning, not during crisis.

In CSC-289 (capstone), risk management will save your project. Students who track risks finish on time. Students who ignore risks panic in Week 15 when SendGrid breaks, team members disappear, or deployment fails.

**Professional project managers spend 10-20% of project time on risk management. It's not optional.**

---

## Common Mistakes to Avoid

- **Mistake**: Only listing obvious risks - "The code might not work"
  **Better approach**: Specific, concrete risks - "SendGrid email quota exceeded causing failed confirmations." Generic risks lead to generic mitigation (useless).

- **Mistake**: Marking all risks as likelihood 5, impact 5 (everything is critical!)
  **Better approach**: Be realistic. Not everything is catastrophic. Score honestly so you know what to prioritize. If everything is high priority, nothing is.

- **Mistake**: Identifying risks but no mitigation plan
  **Better approach**: Every risk needs mitigation. "Monitor the risk" is not mitigation. "Upgrade to paid SendGrid plan by March 20" is mitigation.

- **Mistake**: Writing risk register Week 1 and never updating it
  **Better approach**: Living document. Update weekly. Risks change. SendGrid quota wasn't a risk until Week 6 when you started testing. New risks emerge.

- **Mistake**: No risk owners - everyone's responsible means nobody's responsible
  **Better approach**: Every risk has a name attached. Sarah monitors scope creep. Marcus monitors email API. Aisha monitors deployment.

- **Mistake**: Treating risk register as busywork for a grade
  **Better approach**: This document will save your project. When SendGrid breaks in Week 12, you'll reference R-001 and execute the mitigation plan you wrote in Week 6.

---

## Integration with Course Project

In CTS-285, risk register is required:

**Requirements**:
- Create initial risk register by Week 6 (first sprint)
- Minimum 8 risks identified
- Update weekly (show updates in commit history)
- Review risks during sprint retrospectives
- Submit with final project documentation

**Grading criteria**:
- **Risk identification** (30%): Are risks realistic, specific, and relevant to your project?
- **Assessment accuracy** (20%): Are likelihood/impact scores reasonable?
- **Mitigation plans** (30%): Are mitigations concrete and actionable?
- **Maintenance** (20%): Evidence of weekly updates, not all added at once

**How to identify risks for your project**:

1. **Technical risks** - What technology are you learning? What APIs/services do you depend on? What could break?
   - Example: "Flask SQLAlchemy migration fails on Heroku"

2. **Schedule risks** - What deadlines are tight? What dependencies could delay you? What's your critical path?
   - Example: "Marcus unavailable Week 11 (spring break)"

3. **Resource risks** - What skills are you missing? What tools do you need? Who might be unavailable?
   - Example: "Team has zero experience with CSS - UI might look terrible"

4. **Scope risks** - What features are stretch goals? What might Andrew request mid-project? What's Must Have vs Nice to Have?
   - Example: "Admin dashboard is 13 story points - might not fit in semester"

**When to review risk register**:
- **Sprint planning**: Check risks before committing to stories
- **Daily standups**: Mention risks in "blockers" section
- **Sprint retrospective**: Update risk status based on what happened
- **Weekly**: Scan for new risks, update likelihood/impact

**Professional risk management practices**:
- **Risk burndown chart**: Track total risk score over time (should decrease as project progresses)
- **Risk triggers**: Define signals that indicate risk is materializing ("3 failed SendGrid emails in a row = trigger")
- **Escalation plan**: When does risk get escalated to Andrew? (Risk score 20+)
- **Contingency budget**: Reserve 20% of sprint capacity for risk mitigation

**In professional projects**:
- Project managers maintain risk register
- Risks reviewed in weekly status meetings
- High risks (15+) escalated to executives
- Risk management plan is part of project charter
- Unmanaged risks are grounds for project cancellation

**This practice is career-critical. Every project manager, product manager, and engineering lead tracks risks. Learn this now.**
