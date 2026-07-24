# ADR-005: 26FA Prerequisite Baseline — Assume GitHub Account + Working Python, **not** CSC-113/114

**Status**: Accepted — 2026-07-24 (instructor ruling)
**Deciders**: A. Norris (instructor) — **decided**
**Governs**: Week-1 sizing (task 1.1) and prerequisite assumptions across all CTS-285 content
**Resolves**: #9 (what 26FA students arrive knowing)

## Context

CTS-285's pipeline assumed **CSC-113 / CSC-114** as feeders, but for 26FA that assumption does not hold: most incoming students have **not** taken them (a few early adopters have). The pipelines disagreed on this, and it directly sizes Week 1 (env setup, GitHub, first Python). This blocker (#9) was flagged as gating wk-1 content.

## Decision

For 26FA, **assume the incoming CTS-285 student has:**

- a working **GitHub account**, and
- **working knowledge of Python**.

**Do not** assume CSC-113/114 completion. Build Week 1 — and all content — to this baseline: bridge genuine gaps where needed, but treat *GitHub-account-exists* and *basic-Python-literacy* as **given**, not taught from zero. This is the deliberate "bridge the gap" baseline, chosen so content targets a realistic middle rather than the absent prerequisite chain.

## Consequences

- **Week 1 (task 1.1):** env setup + GitHub is **configure/verify**, not create-a-first-ever-account and first-ever-Python. The legacy 001-setup checklist is harvested at this level.
- **Knowledge checks / assignments** may reference GitHub workflow and light Python without a standalone prerequisite lesson.
- The **Trusted Workflow** (Issue → Branch → Draft PR → … → Merge) can be taught as *process on top of* an existing GitHub account, not from account creation.
- **Mitigation, not re-baseline:** if a specific cohort proves weaker than this baseline, the response is a targeted **bridge supplement**, not lowering the assumption for everyone.
- Closes #9; unblocks wk-1 content sizing (tasks 1.1/1.2).
