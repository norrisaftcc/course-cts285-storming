<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/rubrics/Sprint-Process-Rubric.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 M2-M8
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Sprint Process Rubric (50 pts per sprint)

**Used for**: All sprints across Modules 2-8
**Assignments**: M02-A1, M03-A1, M04-A1, M05-A1, M06-A1, M06-A2, M07-A1, M08-A1 (sprint component)
**CLOs Assessed**: 1 (Autonomous PM), 4 (Adaptive Planning), 5 (Documentation), 6 (Professional Dev Practices)
**Point Distribution**: Sprint Planning (10) + Daily Standups (10) + Sprint Execution (15) + Sprint Review (10) + Sprint Retrospective (5) = **50 pts**

---

## Criterion 1: Sprint Planning Quality (10 pts)

### Goal Clarity (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Sprint goal is a single, testable statement tied to a user-facing outcome (e.g., "Users can create and save a profile with email validation"). Goal clearly connects to the release roadmap and MoSCoW priorities. The goal answers "what will be true at the end of this sprint that is not true now?" | 4 |
| **Proficient** | Sprint goal is present and understandable but framed as a task list rather than an outcome (e.g., "Build profile page and database"). Goal relates to the roadmap but the connection is implicit rather than explicit. | 3 |
| **Developing** | Sprint goal is vague or overly broad (e.g., "Make progress on features"). Not clear how completion would be evaluated. Could apply to any sprint in any project. | 2 |
| **Beginning** | Sprint goal is missing, is copy-pasted from a previous sprint with no modification, or is a single word ("development"). No testable outcome articulated. | 0-1 |

### Capacity Calculation (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Velocity from the prior sprint is explicitly referenced. Available capacity is calculated (hours or points). Selected stories fit within calculated capacity with a documented buffer (10-15%). Capacity adjustments are noted for known interruptions (e.g., GRD presentation week, holidays, exams). For Sprint 1: uses a reasonable initial estimate with documented assumptions. | 3 |
| **Proficient** | Capacity is mentioned and story selection is roughly appropriate, but the calculation is informal or buffer is not built in. Prior velocity is referenced but not used mathematically. | 2 |
| **Developing** | Stories are selected without reference to capacity or velocity data. Total points either far exceed or far underutilize the expected velocity with no rationale for the deviation. | 1 |
| **Beginning** | No evidence of capacity thinking. Stories appear randomly selected. Sprint is massively over-committed (3x velocity) or trivially under-committed (1-2 points for a 2-week sprint). | 0 |

### Story Selection Rationale (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Each selected story has a stated reason for inclusion in THIS sprint (dependency order, priority ranking, builds on prior sprint's work, required for GRD collaboration timeline). Stories align with MoSCoW priorities and sprint goal. Trade-offs are documented (e.g., "chose X over Y because Y depends on design assets arriving Sprint 4"). | 3 |
| **Proficient** | Most stories connect to the sprint goal. Prioritization is reasonable but rationale is not explicitly documented for each story. Selection makes sense when read but the "why these, why now" reasoning is implicit. | 2 |
| **Developing** | Stories are listed but the selection rationale is not addressed. Selection seems arbitrary or driven by convenience rather than strategy. May include stories unrelated to the sprint goal. | 1 |
| **Beginning** | No rationale provided. Sprint backlog is a dumped list of issues with no ordering logic. Stories may conflict with each other or duplicate completed work. | 0 |

---

## Criterion 2: Daily Standups (10 pts)

### Entry Count & Consistency (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | 8+ standup entries across the sprint (for 2-week sprints) or 4+ entries (for 1-week sprints), showing consistent daily engagement on working days. Entries are timestamped and distributed across the sprint duration, not clustered on a single day. | 4 |
| **Proficient** | 6-7 entries for a 2-week sprint (3+ for 1-week). Minor gaps but overall pattern shows regular check-ins. No more than 2 consecutive days missing. | 3 |
| **Developing** | 4-5 entries for a 2-week sprint. Significant gaps suggest batch-writing or retrospective fabrication rather than daily discipline. Entries may cluster near sprint boundaries. | 2 |
| **Beginning** | Fewer than 4 entries for a 2-week sprint, or entries are clearly written in a single session (identical timestamps, no progression between entries, copy-paste artifacts). | 0-1 |

### Content Specificity (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Each entry names specific stories or tasks worked on, concrete progress made (e.g., "Completed PR #12 for login validation — all 3 acceptance criteria passing"), and next steps with estimated effort. Entries tell a coherent story of sprint progression when read in sequence. References to GitHub Issues or PR numbers included. | 3 |
| **Proficient** | Most entries reference specific work, but some are generic (e.g., "worked on project" or "continued coding"). Progression is visible across entries. Issue/PR references are occasional, not consistent. | 2 |
| **Developing** | Entries are mostly generic ("coded," "researched," "made progress"). Hard to reconstruct what actually happened day-to-day. No issue or PR references. Entries could apply to any project. | 1 |
| **Beginning** | Entries are copy-pasted, single words ("coding"), or clearly fabricated. No progression visible. Content does not correspond to actual repository activity. | 0 |

### Blocker Honesty (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Blockers are identified when they occur with specific descriptions (e.g., "Stuck on OAuth redirect — tried X and Y, need to research Z or ask for help in office hours"). Resolution or escalation is documented in subsequent entries. At least 1-2 blockers or challenges acknowledged across a sprint (because zero blockers over 2 weeks is not realistic). | 3 |
| **Proficient** | Blockers are occasionally noted but descriptions are vague (e.g., "had some issues"). Some resolution tracking visible. The student acknowledges difficulty but does not always specify what they tried. | 2 |
| **Developing** | Blockers are never mentioned across an entire sprint, which is unrealistic and suggests performative reporting rather than genuine reflection. Alternatively, blockers are mentioned but never followed up on. | 1 |
| **Beginning** | Standup entries show no evidence of genuine engagement with obstacles. Every entry is "everything is going great" with no specificity, or entries do not mention any challenges across the entire sprint. | 0 |

---

## Criterion 3: Sprint Execution (15 pts)

### Board Hygiene (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | GitHub Projects board is actively maintained: stories move from To Do to In Progress to Done as work progresses. Board state matches reality at any point during the sprint. No stale items (stuck in "In Progress" for the entire sprint without comment). Column limits are respected. Labels and assignees are current. | 4 |
| **Proficient** | Board is updated but not always in real-time. Stories move through columns but there may be a 1-2 day lag. Most items have appropriate labels and assignees. Minor stale items present. | 3 |
| **Developing** | Board exists but is updated in batches (e.g., everything moved to Done on the last day). Board state does not reflect actual sprint progression. Labels inconsistent or missing. | 2 |
| **Beginning** | Board is not used, is empty, or all items remain in a single column for the entire sprint. No evidence of using the board as a planning or tracking tool. | 0-1 |

### Sacred Flow Compliance (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Every feature follows the complete Sacred Flow cycle: Issue created, branch created from main with descriptive name, commits on feature branch, PR opened with description referencing the issue, review consideration documented, merge to main. No direct commits to main. Branch protection rules enforced. | 4 |
| **Proficient** | Most work follows Sacred Flow. 1-2 minor commits directly to main (e.g., README typo, .gitignore update). Branch names are reasonable. PRs exist for all significant features. | 3 |
| **Developing** | Sacred Flow is partially followed. Some features have branches and PRs; others are committed directly to main. Branch names are generic ("branch1," "update"). PRs lack descriptions. | 2 |
| **Beginning** | All work committed directly to main, or a single branch used for the entire sprint. No PRs created. No evidence of the branching workflow taught in prerequisite courses. | 0-1 |

### Commit Quality (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Commit messages are descriptive and follow a consistent format (e.g., "Add user registration form with email validation," "Fix navbar alignment on mobile breakpoint"). Commits are appropriately sized: each represents a logical unit of work. History tells a readable story. For Sprints 5-8: CLAUDE.md is maintained and AI-assisted commits are documented in prompt logs. | 3 |
| **Proficient** | Most commit messages are descriptive. A few are vague ("updates," "fix") but the overall pattern shows intentional documentation. Commit sizes are mostly reasonable. | 2 |
| **Developing** | Commit messages are mostly vague or generic ("changes," "WIP," "stuff"). Commits are either too large (entire features in one commit) or trivially small (single-line whitespace changes). | 1 |
| **Beginning** | Commit messages are meaningless ("asdf," "test," "aaa") or a single commit contains all sprint work. Commit history provides no useful information about the development process. | 0 |

### PR Quality (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Pull requests have descriptive titles and bodies summarizing: what changed, why it changed, how to test it, and which issue it closes (e.g., "Closes #15"). Changes are reviewable: reasonable size, focused scope, no unrelated changes bundled. For Sprints 5-8: PRs include notes on AI-assisted development decisions. | 4 |
| **Proficient** | PRs exist with titles and brief bodies. Issue references are present on most PRs. PR scope is mostly reasonable but occasionally bundles unrelated changes. | 3 |
| **Developing** | PRs exist but are formalities: no descriptions, no issue links, or descriptions are just the branch name. PRs are either trivially small or contain an entire sprint of work. | 2 |
| **Beginning** | No PRs created, or PRs are auto-merged without any description or review. Work is pushed directly to main. No evidence of using PRs as a development practice. | 0-1 |

---

## Criterion 4: Sprint Review (10 pts)

### Working Demo (4 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Live demo of working features from the deployed or local environment. Software runs without errors during the demo. Demonstrates the sprint goal was met through the user's lens. New functionality is clearly distinguishable from prior sprint's state. | 4 |
| **Proficient** | Demo shows working software but with minor issues (e.g., needs to restart, one feature not fully working). Sprint goal mostly met. Student recovers gracefully from any technical hiccups. | 3 |
| **Developing** | Demo is primarily screenshots or a code walkthrough rather than running software. Sprint goal partially addressed. Student shows what they worked on but not what works. | 2 |
| **Beginning** | No demo provided, or demo shows non-functional software. Sprint goal not addressed. Student describes planned features rather than demonstrating completed ones. | 0-1 |

### Clear Communication (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Student narrates the demo from the user's perspective, explaining what the feature does and why it matters. Technical implementation is mentioned but user value leads. Presentation is organized: context, demo, what's next. Stays within the review time window. | 3 |
| **Proficient** | Walkthrough explains features but is code-focused rather than user-focused. Student can answer "what does this do for the user?" when prompted. Presentation covers the key points but could be more structured. | 2 |
| **Developing** | Walkthrough is disorganized or skips key features. Student struggles to explain the user-facing value of completed work. Relies heavily on "let me show you the code" rather than demonstrating functionality. | 1 |
| **Beginning** | No walkthrough narrative. Student shows code files without context, scrolls through a repository, or simply says "it works" without demonstration. | 0 |

### Acceptance Criteria Met (3 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Completed stories demonstrably meet all defined Given-When-Then acceptance criteria. Student explicitly walks through criteria during the demo, verifying each one. Criteria can be verified through the demo, deployed application, or code review. Student answers instructor questions confidently and acknowledges what they do not know. | 3 |
| **Proficient** | Most completed stories meet their acceptance criteria. 1-2 stories are marked complete but miss a minor criterion. Student can discuss acceptance criteria when asked but does not proactively reference them during the demo. | 2 |
| **Developing** | Stories are marked complete but acceptance criteria are not clearly met. "Done" means "code exists" rather than "criteria satisfied." Student struggles to connect demo to original story requirements. | 1 |
| **Beginning** | Acceptance criteria were never defined, or completed work does not correspond to any documented criteria. Student cannot explain what "done" means for their stories. | 0 |

---

## Criterion 5: Sprint Retrospective (5 pts)

### Honest Reflection (2 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Retrospective identifies specific things that went well AND specific things that went poorly, with concrete examples (e.g., "Starting PRs on Monday gave me review time by Wednesday" and "I underestimated the login feature by 3 points because I forgot about password reset"). Tone is candid without being self-flagellating or dismissive. | 2 |
| **Proficient** | Retrospective addresses both positives and negatives but examples are somewhat generic (e.g., "time management was hard" without specifics on which tasks or why). | 1.5 |
| **Developing** | Retrospective is one-sided (all positive or all negative) or reads like a status report rather than a reflection. No vulnerability or genuine self-assessment. | 1 |
| **Beginning** | Retrospective is missing, is a single sentence, or is clearly performative ("everything went great, no changes needed"). | 0-0.5 |

### Specific Action Items (2 pts)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | 2+ concrete, actionable improvement items for the next sprint (e.g., "Start PRs by Wednesday to allow review time" or "Break stories over 5 points into sub-tasks before sprint start"). Each action is specific enough to be objectively verifiable in the next retrospective. | 2 |
| **Proficient** | 1-2 action items that are reasonable but could be more specific (e.g., "improve time management" — how? when? what metric?). Actions are directionally correct but not verifiable. | 1.5 |
| **Developing** | Action items are present but are vague platitudes that could apply to any sprint by any student ("try harder," "be more organized"). Not actionable or measurable. | 1 |
| **Beginning** | No action items identified, or actions are unrealistic ("finish everything faster," "never have bugs"). No evidence of forward-looking process improvement thinking. | 0-0.5 |

### Follow-Through on Prior Actions (1 pt)

| Level | Description | Points |
|-------|-------------|--------|
| **Exemplary** | Explicitly references action items from the previous retrospective and reports on whether they were implemented, what impact they had, and whether to continue, modify, or drop them. Demonstrates iterative improvement across sprints. | 1 |
| **Proficient** | Mentions prior retrospective actions but does not specifically track whether they were implemented or what impact they had. Awareness of continuity without rigor. | 0.75 |
| **Developing** | No reference to prior retrospective actions. Each retrospective reads as if it exists in isolation. No evidence of learning from previous sprints. | 0.5 |
| **Beginning** | N/A for Sprint 1. For Sprints 2-8: Retrospective contradicts prior action items (e.g., action was "start earlier" but Sprint 2 retro admits the same late-start problem with no acknowledgment). | 0 |

---

## Score Summary

| Category | Criterion | Points |
|----------|-----------|--------|
| **Sprint Planning Quality** | Goal Clarity | 4 |
| **Sprint Planning Quality** | Capacity Calculation | 3 |
| **Sprint Planning Quality** | Story Selection Rationale | 3 |
| **Daily Standups** | Entry Count & Consistency | 4 |
| **Daily Standups** | Content Specificity | 3 |
| **Daily Standups** | Blocker Honesty | 3 |
| **Sprint Execution** | Board Hygiene | 4 |
| **Sprint Execution** | Sacred Flow Compliance | 4 |
| **Sprint Execution** | Commit Quality | 3 |
| **Sprint Execution** | PR Quality | 4 |
| **Sprint Review** | Working Demo | 4 |
| **Sprint Review** | Clear Communication | 3 |
| **Sprint Review** | Acceptance Criteria Met | 3 |
| **Sprint Retrospective** | Honest Reflection | 2 |
| **Sprint Retrospective** | Specific Action Items | 2 |
| **Sprint Retrospective** | Follow-Through on Prior Actions | 1 |
| **Total** | | **50** |

---

## Sprint-Specific Grading Notes

These notes guide the instructor on how to apply the rubric contextually for each sprint. The rubric criteria remain the same, but expectations shift as the semester progresses.

| Sprint | Module | Weeks | Additional Considerations |
|--------|--------|-------|--------------------------|
| **Sprint 1** (M02) | 2 | 2-3 | First sprint: velocity baseline is being established. Exemplary on capacity calculation means "reasonable initial estimate with documented assumptions." Retrospective follow-through is N/A (no prior retro). Board hygiene expectations are slightly relaxed as students learn the tool. |
| **Sprint 2** (M03) | 3 | 4-5 | Velocity should reference Sprint 1 data. Estimation accuracy improvement should be visible. Design brief preparation may appear in standups and planning. First opportunity to evaluate retrospective follow-through. |
| **Sprint 3** (M04) | 4 | 6-7 | GRD-242 collaboration begins. Planning should include "waiting on design" stories and dependency management. Standups should reference cross-team coordination. Board may include design-dependency columns or labels. |
| **Sprint 4** (M05) | 5 | 8 | 1-week sprint (reduced scope expected). GRD-242 integration work is primary focus. Planning should reflect integration-heavy sprint. Standups should reference designer communication. Design asset PRs expected. |
| **Sprint 5** (M06) | 6 | 9-10 | Claude Code onboarding. PRs should begin showing CLAUDE.md maintenance and prompt logs. Commit quality evaluation includes AI-assisted workflow documentation. Velocity may dip as student learns new tool. |
| **Sprint 6** (M06) | 6 | 11 | 1-week sprint. Student acts as Scrum Master + Developer. Planning should show scope appropriate for 1 week. Claude Code usage should be more fluent. Code review quality expected to improve. |
| **Sprint 7** (M07) | 7 | 12-14 | 3-week sprint. Feature freeze protocol. Planning should include edge case work, testing, and deployment tasks. "Feature delivery" includes bug fixes, testing evidence, and deployment verification. Sprint goal should focus on polish and production-readiness. |
| **Sprint 8** (M08) | 8 | 15-16 | Abbreviated final sprint: final fixes and polish only. Planning should be tightly scoped to remaining bugs and portfolio preparation. Demo IS the final presentation demo. Retrospective is the culminating reflection covering the entire capstone journey. |

---

## Canvas Setup Recommendations

1. **Create one Canvas rubric** and reuse it across all 8 sprint assignments (M02-A1 through M08-A1).
2. **Attach sprint-specific notes** in the assignment description, not the rubric itself, to keep the rubric clean and reusable.
3. **SpeedGrader workflow**: Grade each criterion independently. Use the rubric point values as-is (Canvas supports custom point values per criterion row).
4. **Inline comments**: Use Canvas assignment comments to provide sprint-specific feedback referencing the "Sprint-Specific Grading Notes" above.
5. **Feedback cadence**: Provide written feedback within 72 hours of sprint review attendance (per RSI requirements documented in the canonical coursemap).

---

## CLO Alignment Detail

| Criterion | CLO 1 (Autonomous PM) | CLO 4 (Adaptive Planning) | CLO 5 (Documentation) | CLO 6 (Professional Dev) |
|-----------|----------------------|--------------------------|----------------------|-------------------------|
| Goal Clarity | Primary | Supporting | — | — |
| Capacity Calculation | Primary | Primary | — | — |
| Story Selection Rationale | Primary | Primary | — | — |
| Entry Count & Consistency | Primary | — | Primary | — |
| Content Specificity | — | — | Primary | — |
| Blocker Honesty | — | Primary | Primary | — |
| Board Hygiene | Primary | — | — | Primary |
| Sacred Flow Compliance | — | — | — | Primary |
| Commit Quality | — | — | Primary | Primary |
| PR Quality | — | — | Primary | Primary |
| Working Demo | Primary | — | — | Primary |
| Clear Communication | — | — | Primary | — |
| Acceptance Criteria Met | Primary | — | — | Primary |
| Honest Reflection | — | Primary | Primary | — |
| Specific Action Items | — | Primary | Primary | — |
| Follow-Through | — | Primary | — | — |

---

**Rubric Version**: 2.0
**Aligned to**: COURSEMAP-CANONICAL.md v2.0
**Last Updated**: March 2026
