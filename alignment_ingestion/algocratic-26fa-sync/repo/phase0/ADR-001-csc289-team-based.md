# ADR-001: CSC-289 27SP Runs Team-Based on a Merged Architecture

**Status**: Accepted — 2026-07-22
**Deciders**: A. Norris (instructor), A. Westmoreland (ID/UV), coordinator
**Supersedes**: the undocumented solo/team fork of 2026-03-13

## Context

The CSC-289 repo contains two unreconciled architectures, both dated 2026-03-13, with no record that the divergence was ever noticed or decided:

- **COURSEMAP-CANONICAL v2.0** — SOLO developer; modules 1–8; 1,600 pts (60/40 process/technical); uneven dev cadence (Sprint 6 = 1 wk, Sprint 7 = 3 wks, likely a Spring-2026 calendar artifact).
- **MODULE-ARCHITECTURE-DEVELOPMENT-PHASE** — TEAM-based (role rotation: Dev → Scrum Master → QA Lead → self-organized); clean 2-week sprints; complete student-facing task content for wks 9–16; incompatible module numbering (5–8) and point shell.

New upstream reality: **CTS-285 (Fall 26) weeks 13–16 now produce the capstone setup** — the handoff package: formed team + working agreement, chosen product, validated user-story backlog, wireframes, design brief draft, GRD/GREY consult contact, seeded risk register. ("Cap I is the setup, Cap II is the payoff.") Per **PRISM**, CTS-285 exit = ORANGE (developer); CSC-289 target = **GREEN** (shipping engineer, owns a deployed product end-to-end, job-ready pivot); team roles touch BLUE. Students arrive AI-fluent (SHODANN from program start; Claude Code unlocked pre-289). The existing Week 1 ("Red Clearance Recertification") assumes solo from-scratch ideation, mis-tiers entering students at RED, and defers AI to week 9.

## Decision

1. **CSC-289 27SP is team-based end-to-end**, teams inherited intact from CTS-285.
2. **Merged spine**: COURSEMAP-CANONICAL's module numbering (1–8) and point shell (1,600 pts, 60/40) + MODULE-ARCH's team content, role rotation, and individual-accountability instruments + **clean 2-week sprint cadence**. Concretely: M6 = wks 9–12 (Sprints 5–6), M7 = wks 13–14 (Sprint 7), M8 = wks 15–16 (Sprint 8); final week-bands recomputed against the actual 27SP academic calendar.
3. **Week 1 = "GREEN Trajectory Check"** (replaces Red Clearance Recertification): a reactivation audit, not ideation. Teams import the 285 handoff package — backlog → GitHub Issues + board, roadmap re-planned against the 27SP calendar, working agreement recommitted, risk register refreshed, GRD consult status reported. Pass/fail gate mechanic and the 160-pt Learn|Practice|Apply|Assess shell are retained; deliverables change from "create" to "harden."
4. **AI expectations start Sprint 1**: CLAUDE.md + prompt logs are required process artifacts in every sprint. The wk-9 Claude Code onboarding lab relocates to Week 1 as a leveling/recert lab.

## Consequences

**Positive**

- Cap II becomes the payoff; no duplicated ideation; ORANGE→GREEN arc coheres with PRISM, with SM/QA rotation providing BLUE exposure.
- One documented architecture ends the fork; this ADR is the record of it.
- AI process evidence exists across all 16 weeks, matching the 60% process grade.
- MODULE-ARCH's individual scorecards, contribution portfolios, and per-student PR evidence carry into the merge, mitigating team free-riding.

**Negative / costs**

- Every wks 1–8 student-facing doc and all 4 rubrics need team conversion (solo pronouns, charter, capacity math, pairing model) — a large cascade.
- **Grading-load model is invalidated**: prior estimates assumed ~10 solo students (~46 hr dev-phase grading). Teams reduce per-artifact volume but add per-student instruments and team-dynamics intervention time; **RSI touchpoints remain per-student for federal compliance, not per-team**. Re-estimate; do not reuse the 46-hr figure.
- The 285→289 dependency hardens: a Fall-26 slip in the 285 wks 13–16 build breaks 289 Week 1. Mitigation: publish the handoff package as an explicit contract; the 285 exit checklist mirrors the 289 entry ticket.
- GRD-242 timeline must be renegotiated (consults now begin in fall; the wk-6 first-contact model is dead; GRD-side deliverables remain undefined) — human dependency gating wks 6–8 finalization.

**Fallback — students without a 285 handoff** (transfers, retakes, pre-redesign 285 completers, dissolved teams): **Cold Start Track.** Default: join an existing team as an "onboarding hire" (industry-realistic; receiving team logs a staffing-change risk-register entry). If ≥3 cold-start students, the instructor forms a cold-start team that runs a compressed Week-1 ideation using the archived solo Week_01 materials (retained for this purpose, not deleted) with reduced Sprint-1 scope. Solo completion only by instructor exception; the grading shell is identical in all cases.

**Housekeeping**: archive COURSEMAP.md (v1.0), CTS-289-COURSE-SUMMARY.md, and INSTRUCTOR-GUIDE-2WEEK-SPRINTS.md with deprecation headers pointing here; strip QM references program-wide (QM audit retired; RSI architecture retained — it is federal compliance, not QM).

**Execution note (from forensics):** the fork almost certainly came from two agentic sessions on Mar 13 that never saw each other's output. **Build the merged spine in ONE session with all three source docs in context; parallelize only leaf-file passes afterward.** Ask the instructor which of the two designs actually ran in the live Spring 2026 section and what broke — that field data exists nowhere in the repo.
