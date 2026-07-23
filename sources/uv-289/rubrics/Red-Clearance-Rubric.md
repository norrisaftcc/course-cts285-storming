<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/rubrics/Red-Clearance-Rubric.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 wk1 GREEN Trajectory Check
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Red Clearance Recertification Rubric (160 pts)

**Module**: 1 — Red Clearance Recertification (Week 1)
**Assignments**: M01-A1 (Project Charter & WBS, 50 pts) + M01-A2 (Product Backlog & Roadmap, 50 pts) + Sacred Flow Verification Lab (20 pts) + Entry Tickets & Knowledge Checks (25 pts) + Certification Quiz (15 pts)
**CLOs Assessed**: 1 (Autonomous PM), 4 (Adaptive Planning), 5 (Documentation), 6 (Professional Dev Practices)
**Instructional Phases**: Learn (25 pts) | Practice (20 pts) | Apply (100 pts) | Assess (15 pts)

---

## Pass/Fail Gate

**Red Clearance is a prerequisite checkpoint.** Students must score 70% or higher on BOTH Apply components (M01-A1 and M01-A2) to proceed to Module 2. Failure triggers a 48-hour remediation window. Remediated components are capped at 70%.

| Scenario | M01-A1 Score | M01-A2 Score | Result |
|----------|-------------|-------------|--------|
| Both pass | 35+ / 50 (70%+) | 35+ / 50 (70%+) | **PASS** — Proceed to Module 2 |
| One fails | 35+ / 50 | Below 35 / 50 | **CONDITIONAL** — Remediate M01-A2 within 48 hrs |
| One fails | Below 35 / 50 | 35+ / 50 | **CONDITIONAL** — Remediate M01-A1 within 48 hrs |
| Both fail | Below 35 / 50 | Below 35 / 50 | **FAIL** — Remediate both; instructor meeting required |

---

## Learn Phase (25 pts) — Auto-Graded

### Entry Ticket: PM Readiness Check (10 pts)

| Criterion | Exemplary (10 pts) | Proficient (8 pts) | Developing (7 pts) | Beginning (0-6 pts) |
|-----------|-------------------|-------------------|-------------------|---------------------|
| **PM Vocabulary & Concepts** | Scores 90%+ on first attempt. Demonstrates fluency with Agile/Scrum terminology, sprint ceremonies, and PM decision-making scenarios. | Scores 80-89% within first two attempts. Solid grasp of core concepts with minor gaps in specialized terminology. | Scores 70-79%. Requires three or more attempts to pass. Foundational understanding present but significant gaps in applied PM reasoning. | Scores below 70% after multiple attempts. Fundamental misunderstandings of Agile vocabulary or PM roles indicate insufficient preparation from prerequisite courses. |

### Knowledge Check: Agile Vocabulary Self-Test (15 pts)

| Criterion | Exemplary (15 pts) | Proficient (12 pts) | Developing (10 pts) | Beginning (0-9 pts) |
|-----------|-------------------|---------------------|---------------------|---------------------|
| **Agile Framework Mastery** | Scores 90%+ on first attempt. Correctly differentiates Scrum artifacts, events, and roles. Applies concepts to scenario-based questions accurately. | Scores 80-89%. Correctly identifies most Scrum elements. Minor confusion on edge-case scenarios (e.g., when to re-estimate vs. when to split stories). | Scores 70-79%. Can recall Agile terminology but struggles to apply concepts to realistic project scenarios. Confuses some ceremonies or artifact purposes. | Scores below 70%. Cannot reliably distinguish sprint planning from sprint review, or conflates backlog refinement with sprint planning. Needs instructor intervention. |

---

## Practice Phase (20 pts) — Rubric-Graded

### Sacred Flow Verification Lab (20 pts)

**Format**: Checklist submission with screenshots demonstrating repo creation, branching, PR creation, code review, and merge.

| Criterion | Exemplary (20 pts) | Proficient (17 pts) | Developing (14 pts) | Beginning (0-13 pts) | Points |
|-----------|-------------------|---------------------|---------------------|----------------------|--------|
| **Repository Setup** | Repository created with professional naming convention, appropriate .gitignore, README with project description, and LICENSE file. Repository settings configured correctly (branch protection rules enabled on main). | Repository created with .gitignore and README. Naming is acceptable. Branch protection not configured or partially configured. | Repository exists but lacks .gitignore or README. Naming is generic (e.g., "project1"). No branch protection. | Repository not created, or created through Canvas file upload rather than GitHub. No evidence of Git proficiency. | 5 |
| **Branch-PR-Merge Cycle** | Complete cycle demonstrated: feature branch created from main with descriptive name, meaningful commits on branch, PR opened with descriptive title and body referencing what was changed, PR merged (not direct push to main). Screenshots clearly show each step with timestamps. | Cycle demonstrated but with minor issues: branch name is generic, PR body is sparse, or one screenshot is unclear. All steps are present and verifiable. | Partial cycle demonstrated. Student may have committed directly to main once, or PR was created but merged without description. Screenshots are incomplete or out of order. | No evidence of branching workflow. All work committed to main, or screenshots are missing/fabricated. Student cannot demonstrate basic Git workflow. | 10 |
| **Workflow Documentation** | Screenshots are annotated or accompanied by brief written explanations of each step. Student can articulate WHY each step matters (e.g., "Branch protection prevents accidental pushes to production"). | Screenshots are present and clearly show each step. Minimal annotation but the workflow is visually verifiable. | Screenshots are present but blurry, cropped, or missing key context (e.g., cannot see branch name or PR status). | Fewer than 3 screenshots provided, or screenshots do not correspond to the described workflow. | 5 |

---

## Apply Phase (100 pts) — Rubric-Graded

### Component 1: Project Charter & WBS (50 pts) — M01-A1

| Criterion | Exemplary (100%) | Proficient (85%) | Developing (70%) | Beginning (<70%) | Points |
|-----------|-----------------|-------------------|-------------------|-------------------|--------|
| **Vision Clarity** | Vision statement is concise, compelling, and clearly communicates the project's purpose, target users, and value proposition. A stranger could understand the project in 30 seconds. Includes problem statement and how the application addresses it. | Vision statement communicates purpose and target users but lacks compelling framing or leaves minor ambiguity about the value proposition. Problem statement is implied rather than explicit. | Vision statement is present but vague, overly broad, or fails to identify target users. Describes technology rather than user outcomes. Requires follow-up questions to understand the project. | Vision statement is missing, incoherent, or describes a technology stack rather than a user-facing outcome. No identifiable target audience or problem being solved. | 10 |
| **Success Criteria Measurability** | 4+ success criteria are specific, measurable, achievable, relevant, and time-bound (SMART). Each criterion has a concrete metric (e.g., "user can complete checkout in 3 clicks or fewer," "page loads in under 2 seconds"). Criteria span functional, technical, and process dimensions. | 3+ success criteria are measurable and relevant, but 1-2 lack specificity or concrete metrics. Criteria cover functional requirements but miss technical or process dimensions. | Success criteria are present but mostly subjective (e.g., "looks good," "works well") or fewer than 3 are defined. Metrics are not quantifiable. | Success criteria are missing or entirely unmeasurable. No way to objectively determine if the project succeeded. | 10 |
| **Stakeholder Identification** | All relevant stakeholders identified: end users (with persona detail), instructor (as product owner proxy), GRD-242 designer (with collaboration timeline), self-as-developer. Roles, interests, and communication expectations documented for each. Power/interest matrix or equivalent analysis included. | Most stakeholders identified with roles documented, but missing 1 key stakeholder or lacking communication expectations for some. No stakeholder analysis framework applied. | Only 1-2 stakeholders identified (e.g., "me and the instructor"). No communication expectations documented. GRD-242 collaboration not acknowledged. | Stakeholders not identified or section is missing entirely. No evidence of thinking about who has interest in the project outcome. | 5 |
| **Constraints & Assumptions** | Technical constraints (language, framework, hosting), time constraints (16-week semester, sprint cadence), resource constraints (solo developer, GRD collaboration window), and scope constraints explicitly documented. Assumptions are stated and flagged for validation. | Most constraints identified but assumptions are not separated from facts. Time constraints acknowledged at a high level. Missing 1-2 constraint categories. | Only obvious constraints mentioned (e.g., "due at end of semester"). No assumptions documented. Constraints are vague rather than actionable. | No constraints or assumptions section. Student has not considered what limits the project. | 5 |
| **WBS Completeness** | WBS decomposes the project into 3+ epics, each with 5+ user stories. Stories include story point estimates. Hierarchy is logical (epics to stories to tasks). Dependencies between epics are identified and mapped to the sprint timeline. | WBS has 3+ epics with stories and estimates, but some stories lack point estimates or 1 epic has fewer than 3 stories. Dependencies partially identified. | WBS exists but is shallow (fewer than 3 epics, or stories are really tasks with no user-facing outcome). Story points are missing or inconsistent. No dependency identification. | WBS is missing, or is a flat list of tasks with no hierarchical decomposition. No evidence of work breakdown thinking. | 10 |
| **Dependency Identification** | Technical, cross-team (GRD-242), and external dependencies are explicitly identified with mitigation strategies. Timeline impacts are noted for each dependency. Critical path is identified or approximated. GRD collaboration weeks (2-8) are integrated into dependency mapping. | Most dependencies identified, including GRD-242 collaboration, but mitigation strategies are vague or timeline impacts are not quantified. Critical path not explicitly identified. | Only obvious dependencies mentioned (e.g., "need design assets"). No mitigation strategies. Cross-team dependencies overlooked or treated as an afterthought. | Dependencies not addressed. No evidence of thinking about what could block progress or how work items relate to each other. | 10 |

**Component 1 Total: 50 pts**

---

### Component 2: Product Backlog & Roadmap (50 pts) — M01-A2

| Criterion | Exemplary (100%) | Proficient (85%) | Developing (70%) | Beginning (<70%) | Points |
|-----------|-----------------|-------------------|-------------------|-------------------|--------|
| **GitHub Issues Quality (20+ User Stories)** | 20+ GitHub Issues created as user stories. Each issue has a clear title, user story format ("As a [role], I want [goal], so that [benefit]"), Given-When-Then acceptance criteria (3+ per story), story point estimate (Fibonacci: 1, 2, 3, 5, 8, 13), and consistent labeling. Stories are independent, negotiable, valuable, estimable, small, and testable (INVEST). | 15-19 issues created with user story format. Most have Given-When-Then acceptance criteria and estimates, but some criteria are vague or estimates are missing on a few stories. Labels are mostly consistent. | 10-14 issues created. Some use user story format but others are task descriptions ("Build login page"). Acceptance criteria are sparse, inconsistent, or missing the Given-When-Then structure on most issues. | Fewer than 10 issues, or issues are bare titles with no descriptions, no acceptance criteria, and no estimates. Backlog is not usable for sprint planning. | 15 |
| **MoSCoW Prioritization** | All issues are tagged with MoSCoW labels (Must Have, Should Have, Could Have, Won't Have). Distribution is realistic: Must = 40-60% of total points, Should = 20-30%, Could = 10-20%, Won't has at least 2-3 items showing scope discipline. Written rationale explains prioritization decisions and trade-offs. | MoSCoW labels applied to most issues with a reasonable distribution, but rationale is not documented or Won't category is empty (suggesting no scope discipline). | MoSCoW labels are applied but everything is marked Must Have, or distribution is clearly unrealistic. No documented rationale for why items are prioritized as they are. | No prioritization scheme applied, or labels are missing and inconsistent across issues. No evidence of strategic thinking about what to build first. | 10 |
| **Release Roadmap (8-Sprint Plan)** | 8-sprint roadmap maps specific stories to specific sprints with point totals per sprint. Capacity is calculated based on estimated velocity with documented assumptions. GRD collaboration sprints (S1-S4) account for design dependencies and "waiting on design" buffer stories. Roadmap includes explicit buffer (10-15%) for unknowns. Sprints 5-8 show increasing velocity assumption grounded in learning curve rationale. | 8-sprint roadmap exists with stories assigned to sprints, but capacity calculations are rough estimates rather than data-informed. GRD timeline is acknowledged but design dependencies are not mapped to specific stories. Buffer is minimal or absent. | Roadmap exists but covers fewer than 8 sprints, or story assignments are unrealistic (e.g., 80% of work in Sprint 1). GRD collaboration timeline not reflected. No capacity calculation attempted. | No roadmap, or roadmap is a vague list of "phases" without story-level assignments or sprint-level planning. Cannot be used to guide sprint planning. | 15 |
| **Risk Register (5+ Risks)** | 5+ risks identified across categories (technical, schedule, collaboration, scope, personal/resource). Each risk has probability rating (High/Medium/Low), impact rating, detection strategy, and mitigation plan. Top 3 risks have contingency ("Plan B") actions. Risk register includes GRD-242 collaboration risks (e.g., designer non-responsiveness, asset quality mismatch). | 5+ risks identified with probability and impact ratings. Mitigation plans present but some are generic ("will work harder"). Missing contingency plans for high-probability risks. Collaboration risks underrepresented. | 3-4 risks identified but lacking structured assessment (no probability/impact matrix). Mitigations are vague or missing for most risks. Risk categories are narrow (e.g., all technical, no process or collaboration risks). | Fewer than 3 risks identified, or risk register is missing. No evidence of proactive risk thinking. Student has not considered what could go wrong. | 10 |

**Component 2 Total: 50 pts**

---

## Assess Phase (15 pts) — Auto-Graded

### Red Clearance Certification Quiz (15 pts)

| Criterion | Exemplary (15 pts) | Proficient (12 pts) | Developing (10 pts) | Beginning (0-9 pts) |
|-----------|-------------------|---------------------|---------------------|---------------------|
| **Scenario-Based PM Decisions** | Scores 90%+ on first attempt. Correctly analyzes PM decision scenarios (e.g., "Your designer is 3 days late on assets — what do you do?"). Demonstrates strategic thinking, not just recall. Can distinguish between proactive and reactive PM responses. | Scores 80-89%. Correctly handles most scenarios but makes 1-2 suboptimal choices that reflect inexperience rather than misunderstanding. Recognizes good PM practice even if selection is imperfect. | Scores 70-79%. Gets straightforward questions right but struggles with nuanced scenarios requiring trade-off analysis. May default to "do everything" rather than prioritize. | Scores below 70%. Cannot reliably identify appropriate PM responses to common project scenarios. Chooses reactive over proactive strategies. Indicates insufficient readiness for autonomous project management. |

---

## Score Summary

| Phase | Component | Points | Auto-Graded |
|-------|-----------|--------|-------------|
| **Learn** | Entry Ticket: PM Readiness Check | 10 | Yes |
| **Learn** | Knowledge Check: Agile Vocabulary Self-Test | 15 | Yes |
| **Practice** | Sacred Flow Verification Lab | 20 | Partial (rubric) |
| **Apply** | M01-A1: Project Charter & WBS | 50 | No |
| **Apply** | M01-A2: Product Backlog & Roadmap | 50 | No |
| **Assess** | Red Clearance Certification Quiz | 15 | Yes |
| **Total** | | **160** | |

---

## CLO Alignment Detail

| Criterion Area | CLO 1 (Autonomous PM) | CLO 4 (Adaptive Planning) | CLO 5 (Documentation) | CLO 6 (Professional Dev) |
|----------------|----------------------|--------------------------|----------------------|-------------------------|
| PM Readiness Check | Primary | Supporting | — | — |
| Agile Vocabulary Self-Test | Primary | Primary | — | — |
| Sacred Flow Verification Lab | Primary | — | — | Primary |
| Vision Clarity | Primary | — | Primary | — |
| Success Criteria | Primary | — | Primary | — |
| Stakeholder Identification | Primary | — | Supporting | — |
| WBS Completeness | Primary | — | Primary | — |
| Dependency Identification | Supporting | Primary | Supporting | — |
| GitHub Issues Quality | Primary | — | Primary | — |
| MoSCoW Prioritization | Primary | Primary | — | — |
| Release Roadmap | Primary | Primary | Primary | — |
| Risk Register | — | Primary | Primary | — |
| Certification Quiz | Primary | Primary | Primary | — |

---

## Instructor Notes

### Canvas Setup Recommendations

1. **Entry Ticket and Knowledge Check**: Create as Canvas Quizzes with question banks (25-question bank, pull 15 for Entry Ticket; 15-question bank, pull 10 for Knowledge Check). Enable unlimited attempts. Set passing threshold at 70% for tracking purposes.
2. **Sacred Flow Verification Lab**: Create as a Canvas assignment with rubric attached. Accept GitHub repository links and screenshot uploads.
3. **M01-A1 and M01-A2**: Create as separate Canvas assignments with this rubric attached. Accept GitHub repository links. Grade independently for pass/fail determination.
4. **Certification Quiz**: Create as Canvas Quiz with 2 attempts maximum. Use scenario-based questions requiring analysis, not just recall. Randomize from a bank of 20+ questions.

### Remediation Protocol

- Contact students scoring below 70% on Entry Ticket within 24 hours
- Schedule 1-on-1 Red Clearance review meeting (15 min per student) during Week 1
- Provide specific written feedback on failed Apply components identifying exact deficiencies
- Remediation submissions are capped at 70% for the remediated component
- Students who fail remediation must meet with instructor to discuss course continuation

### Common Deductions and Feedback Patterns

| Pattern | Typical Issue | Feedback Approach |
|---------|--------------|-------------------|
| Vague vision | Student describes technology, not user outcomes | Ask: "If I am the user, what problem does this solve for me?" |
| Flat backlog | All issues are tasks, not user stories | Provide 2-3 rewritten examples from their own backlog |
| No Won't Haves | Student marks everything as Must Have | Challenge: "If you had half the time, what would you cut?" |
| Risk register = technical only | No process, collaboration, or personal risks | Prompt: "What if your designer is unresponsive for a week?" |
| Unrealistic roadmap | 80% of work in Sprints 1-2 | Compare planned points per sprint to initial velocity estimate |
| Sacred Flow shortcuts | Direct commits to main, no PRs | Require re-demonstration before passing |

---

**Rubric Version**: 2.0
**Aligned to**: COURSEMAP-CANONICAL.md v2.0
**Last Updated**: March 2026
