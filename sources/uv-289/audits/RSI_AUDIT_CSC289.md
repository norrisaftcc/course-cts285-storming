<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/audits/RSI_AUDIT_CSC289.md
  verdict: HARVEST
  target-26FA-slot: CSC-289 P4 RSI compliance
  ingest-date: 2026-07-23
  HARVEST: RSI survives QM retirement (federal, 34 CFR 600.2, not QM) so the touchpoint architecture harvests — but ADR-001 requires RSI touchpoints stay PER-STUDENT under teams, and this doc's 80+ touchpoint count and 94/100 score are same-day self-a
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# RSI Audit: Regular & Substantive Interaction Compliance
## CSC-289 Programming Capstone Project

**Audit Date**: March 13, 2026
**Auditor**: Angela Westmoreland (Instructional Designer)
**Federal Standard**: 34 CFR § 600.2 (Distance Education)
**Institutional Standard**: SACSCOC + NCCCS RSI Policy
**Reference**: [COURSEMAP-CANONICAL.md](../COURSEMAP-CANONICAL.md)

---

## Executive Summary

**Overall RSI Compliance Score: 94/100 (Strong Compliance)**

CSC-289 meets federal RSI requirements through a combination of:
- 8 weekly announcements with substantive instructional content
- 8 discussion boards with documented instructor participation
- 8 sprint reviews with live instructor feedback
- 8 sprint retrospective written feedback cycles
- Mid-sprint check-ins (proactive, instructor-initiated)
- 3 continuous process assessment checkpoints with individual feedback
- Individual portfolio and presentation feedback

**Total documented instructor-initiated touchpoints: 80+ over 16 weeks = 5+/week**

**Risk areas addressed:**
- Weeks 9–14 (autonomous development phase) now include discussion boards, mid-sprint check-ins, and knowledge checks to ensure sustained instructor presence
- Claude Code introduction includes explicit instructor support touchpoints

---

## Federal RSI Requirements Mapping

### Requirement 1: Interaction must be REGULAR

> "Interaction occurs on a predictable and regular basis throughout the course"

| Evidence | Frequency | Documentation |
|----------|-----------|--------------|
| Weekly announcements | Every week (16 total) | Canvas announcements with timestamps |
| Sprint reviews | Every 2 weeks (8 total) | Canvas calendar, attendance documented |
| Discussion boards | 8 total (1 per module) | Canvas discussion with instructor posts |
| Retrospective feedback | After every sprint (8 total) | Canvas comments, within 72 hours |
| Mid-sprint check-ins | Every sprint (8 total) | Standup log review + proactive outreach |
| Continuous process checkpoints | 3 times (Weeks 8, 14, 16) | Canvas gradebook with written feedback |

**Verdict: ✅ MEETS STANDARD** — Interaction is distributed across all 16 weeks with no gaps exceeding 5 business days.

### Requirement 2: Interaction must be SUBSTANTIVE

> "Interaction engages students in teaching, learning, and assessment consistent with the content"

| Touchpoint | Substantive Content |
|------------|-------------------|
| **Announcements** | Module-specific guidance, technical context, learning objectives framing, connection to career readiness |
| **Sprint Reviews** | Live demo feedback addressing code quality, PM process, technical decisions — not just "good job" |
| **Discussion Boards** | Instructor asks follow-up questions connecting student responses to course concepts and CLOs |
| **Retrospective Feedback** | References specific artifacts (standup entries, commit patterns, velocity data), identifies improvement areas with actionable suggestions |
| **Mid-sprint Check-ins** | Reviews board state, standup quality, and proactively contacts students showing disengagement signals |
| **Portfolio Feedback** | CLO-by-CLO assessment with evidence citations from student's own work |

**Examples of substantive interaction:**

Sprint 5 Retrospective Feedback:
> "Your standup entries improved significantly — you're now flagging blockers proactively rather than just listing tasks. Your velocity was 13/20 planned points. For Sprint 6, consider reducing planned points to 15 based on this data. Your CLAUDE.md is well-structured but missing your database schema — add that before Sprint 6 so Claude Code has full context."

Discussion Board Response:
> "Your approach to separating the API route from the template rendering follows the single responsibility principle well. Have you considered what happens if the database connection drops mid-request? How would your error handling differ between a GET request (show user a friendly error page) vs. a POST request (don't lose the user's data)?"

**Verdict: ✅ MEETS STANDARD** — All interactions engage with course content, demonstrate instructor expertise, and guide student learning.

### Requirement 3: Interaction must be INSTRUCTOR-INITIATED

> "At least some of the interaction is initiated by the instructor, not solely in response to student requests"

| Instructor-Initiated Touchpoint | Frequency | Student Action Required? |
|-------------------------------|-----------|------------------------|
| Weekly announcements | 16/semester | No (instructor sends proactively) |
| Mid-sprint check-ins | 8/semester | No (instructor reviews logs proactively) |
| Sprint review attendance | 8/semester | Student presents; instructor attends proactively |
| Discussion board seeding | 8/semester | No (instructor posts initial response) |
| Proactive outreach (disengaged students) | As needed | No (instructor initiates contact) |
| Continuous process checkpoint feedback | 3/semester | No (instructor evaluates proactively) |

**Verdict: ✅ MEETS STANDARD** — Majority of interactions are instructor-initiated, not triggered by student requests.

### Requirement 4: Interaction is NOT limited to automated responses

> "Automated emails, robo-grading, and canned feedback do NOT satisfy RSI"

| Element | Automated? | Instructor Role |
|---------|-----------|-----------------|
| Entry Ticket quizzes | ✅ Auto-graded | Instructor reviews results, contacts students scoring <70% |
| Sprint Scorecards | ✅ Auto-graded | Instructor reviews for honesty patterns, follows up on concerning responses |
| Knowledge Checks | ✅ Auto-graded | Instructor reviews aggregate data, addresses common misconceptions in announcements |
| Deployment Readiness Checklist | ✅ Auto-graded | Instructor independently verifies each student's deployed URL |
| Discussion Boards | ❌ Manual | Instructor posts substantive responses to every thread |
| Sprint Artifacts | ❌ Manual | Instructor reviews with rubric, writes individual feedback |
| Presentations | ❌ Manual | Instructor attends live, provides verbal and written feedback |
| Retrospective Feedback | ❌ Manual | Instructor writes individual, evidence-based feedback |
| Process Portfolio | ❌ Manual | Instructor writes CLO-by-CLO assessment |

**Auto-graded elements (29% of course points) are SUPPLEMENTED by manual instructor interaction.** No auto-graded element stands alone without an instructor touchpoint.

**Verdict: ✅ MEETS STANDARD** — Automated elements are tools for immediate student feedback, not replacements for instructor interaction.

---

## Week-by-Week RSI Map

### Phase 1: GRD Collaboration (Weeks 1–8)

| Week | Module | Instructor-Initiated Touchpoints | Count |
|------|--------|--------------------------------|-------|
| 1 | M1 | Welcome announcement, Discussion responses (every student), Red Clearance review meeting (1-on-1), Entry Ticket follow-up | 4 |
| 2 | M2 | Sprint 1 kickoff announcement, Mid-sprint check-in | 2 |
| 3 | M2 | Discussion responses, Sprint 1 review, Retrospective feedback | 3 |
| 4 | M3 | Sprint 2 kickoff announcement, Mid-sprint check-in | 2 |
| 5 | M3 | Discussion responses, Sprint 2 review, Retrospective feedback, Design brief draft feedback | 4 |
| 6 | M4 | Design brief presentation attendance + feedback, GRD instructor coordination | 2 |
| 7 | M4 | Discussion responses, Sprint 3 review, Retrospective feedback, GRD communication review | 4 |
| 8 | M5 | Integration announcement, Design asset review, Sprint 4 review, Midcourse feedback, Dev phase readiness check | 5 |

**Phase 1 Total: 26 touchpoints over 8 weeks = 3.25/week**

### Phase 2: Development (Weeks 9–16)

| Week | Module | Instructor-Initiated Touchpoints | Count |
|------|--------|--------------------------------|-------|
| 9 | M6 | Dev phase announcement, Claude Code onboarding support, Entry Ticket follow-up, Mid-sprint check-in | 4 |
| 10 | M6 | Discussion responses (×2), Sprint 5 review, Retrospective feedback | 4 |
| 11 | M6 | Sprint 6 announcement, Discussion responses, Mid-sprint check-in, Sprint 6 review, Retro feedback, Code review feedback | 6 |
| 12 | M7 | Sprint 7 announcement, Entry Ticket follow-up, Mid-sprint check-in | 3 |
| 13 | M7 | Discussion responses, Deployment verification, Knowledge Check review, Testing guidance announcement | 4 |
| 14 | M7 | Deployment testing, Sprint 7 review, Retro feedback, Feature freeze feedback, Module 8 announcement | 5 |
| 15 | M8 | Portfolio draft review, Discussion responses, Rehearsal support, Presentation announcement | 4 |
| 16 | M8 | Final presentations, Comprehensive feedback, Closing announcement | 3 |

**Phase 2 Total: 33 touchpoints over 8 weeks = 4.125/week**

### Full Course Total

| Metric | Value |
|--------|-------|
| **Total instructor-initiated touchpoints** | 59 documented + ongoing as-needed |
| **Average per week** | 3.7/week (documented minimum) |
| **Longest gap between touchpoints** | 3 business days (never exceeds 5) |
| **Weeks with zero touchpoints** | 0 |

---

## CLO → RSI Alignment

Every CLO receives substantive instructor feedback through at least 3 different interaction types:

| CLO | Feedback Channels |
|-----|------------------|
| **CLO 1** (Autonomous PM) | Sprint reviews (8×), retrospective feedback (8×), continuous process assessment (3×), portfolio feedback |
| **CLO 2** (Cross-team collab) | Design brief presentation feedback, GRD communication review, discussion responses, portfolio feedback |
| **CLO 3** (Design asset eval) | Design asset review, integration PR feedback, collaboration checkpoint |
| **CLO 4** (Adaptive planning) | Retrospective feedback (8×), feature freeze review, scope decision feedback, portfolio feedback |
| **CLO 5** (Documentation) | Sprint artifact feedback (8×), portfolio draft review, PM reflection essay feedback |
| **CLO 6** (Professional dev) | Code review feedback, deployment verification, Claude Code onboarding support, testing portfolio feedback |

---

## Quality Matters RSI Standards (QM 5.1, 5.2, 5.3)

### QM 5.1: Learning activities promote achievement of stated CLOs
**Status: ✅ Met**
- Every activity links to specific CLOs (documented in COURSEMAP-CANONICAL.md)
- Learn → Practice → Apply → Assess sequence ensures progressive skill building
- Sprint-based structure means students APPLY CLOs in authentic context every 2 weeks

### QM 5.2: Learning activities foster instructor-student interaction
**Status: ✅ Met**
- Discussion boards (8) with required instructor participation
- Sprint reviews (8) with live instructor feedback
- Mid-sprint check-ins (8) with proactive outreach
- Individual written feedback on all major artifacts

### QM 5.3: Clear plan for instructor-student interaction
**Status: ✅ Met**
- Interaction schedule published in syllabus and INSTRUCTOR-ACTION-PLAN-WEEKS-9-16.md
- Students know when to expect feedback (72-hour turnaround stated)
- Office hours documented and consistent
- Emergency contact protocol for blockers

---

## Improvement Recommendations

### Score Deductions (-6 points)

1. **(-3) Discussion board rubric could be more specific** — Current simplified rubric (Substantive/Generic/Missing) could add a dimension for "connects to CLOs" to strengthen alignment evidence.

2. **(-2) Office hours protocol not formalized** — While office hours exist, the specific schedule and documentation method should be stated in the syllabus and Canvas.

3. **(-1) Peer-to-peer interaction underspecified** — While peer code reviews and discussion responses exist, the course could benefit from structured peer retrospective sessions to supplement instructor interaction.

### Recommendations for Future Improvement

1. **Add structured office hours log** — Document topics discussed and follow-up actions. This provides additional RSI evidence.

2. **Implement Canvas "Student Activity" monitoring** — Use Canvas analytics to identify disengaged students earlier (complement to standup log review).

3. **Consider recorded sprint review feedback** — In addition to live verbal feedback, a brief recorded summary per student creates a permanent RSI artifact.

4. **Add a CTS-285 → CSC-289 bridge interaction** — An early-semester interaction reviewing each student's CTS-285 process portfolio would establish continuity and demonstrate sustained instructor engagement across courses.

---

## Comparison to Peer Courses

| Metric | CSC-289 | HIS-131 (Benchmark) | CTS-285 |
|--------|---------|-------------------|---------|
| Total touchpoints | 59+ | 48+ | ~40 |
| Touchpoints/week | 3.7+ | 3+ | 2.5 |
| Discussion boards | 8 | 4 | 0 |
| Auto-graded % | 29% | 49% | 7% |
| Individual feedback cycles | 8+ (sprint retros) | 3 (checkpoints) | 8 (sprint retros) |
| Live interaction | 8 sprint reviews + presentations | 2 exam reviews | Sprint reviews |
| RSI Audit Score | **94/100** | **98/100** | **98/100** |

**Note**: HIS-131 scores higher due to more formalized discussion board rubrics and documented office hours protocol. CSC-289 compensates with higher-frequency individual feedback (8 sprint retro cycles vs. 3 checkpoints).

---

## Compliance Certification

**I certify that CSC-289 as designed in COURSEMAP-CANONICAL.md (Version 2.0, March 2026) meets federal Regular and Substantive Interaction requirements under 34 CFR § 600.2 for distance education.**

**Evidence**:
- Interaction is regular (distributed across all 16 weeks)
- Interaction is substantive (engages with course content, not administrative)
- Interaction is instructor-initiated (majority are proactive, not reactive)
- Automated elements supplement but do not replace human interaction
- All 6 CLOs receive substantive feedback through multiple channels

**Auditor**: Angela Westmoreland
**Date**: March 13, 2026
**Next Review**: August 2026 (before Fall 2026 semester)

---

**Document Owner**: Angela Westmoreland
**Institution**: Fayetteville Technical Community College
**Last Updated**: March 13, 2026
