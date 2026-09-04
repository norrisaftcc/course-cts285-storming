# External Truth Reconciliation Plan (Issue #67)

## Scope

Reconcile this repository's CTS-285 material against the two external repositories named in issue #67:

- Source repo: `https://github.com/AMLW05/cts-285_SOURCE`
- Simulations repo: `https://github.com/AMLW05/cts-285-course-simulations`

## What was measured first: module drift

### Repository access status

| Repository | Access result | Evidence | Consequence |
|---|---|---|---|
| `AMLW05/cts-285_SOURCE` | **Blocked** (`404` from GitHub API and web) | `get_file_contents` and direct fetch both returned 404 on 2026-09-04 | Full module-to-module drift cannot be completed until access is restored or URL is corrected |
| `AMLW05/cts-285-course-simulations` | **Accessible** (public) | Root and module trees resolved at commit `a2c970a` | Module coverage and artifact drift can be measured now |

### Measured module drift (available data)

Baseline for comparison: `sources/uv-285/` in this repo (frozen 54-file source mirror used by the existing consolidation work).

| Module area | Baseline (`sources/uv-285/`) | Simulations repo (`cts-285-course-simulations`) | Drift |
|---|---|---|---|
| Module coverage | Modules 1–8 represented across assignments/knowledge checks/canvas pages | Modules **1–3 only** (`m1`, `m2`, `m3`) | **M4–M8 missing** from simulations repo |
| Graded interactives | None in dedicated simulation paths | 3 graded simulations: `m2/stakeholder-elicitation`, `m3/backlog-triage`, `m3/product-owner-sprint` | New graded simulation surface exists only in simulations repo |
| Practice interactives | Activities exist as markdown labs | 4 optional interactives: `m1/arcade`, `m2/arcade`, `m3/arcade`, `m3/story-builder` | Delivery mode drift (interactive HTML vs markdown activity docs) |
| Quiz/assessment bank | 8 module knowledge checks (`Module_01` … `Module_08`) | Quiz bank sources and QTI builds only for **M1–M3** in `quiz-bank/` | Assessment authoring drift and partial module span |
| Decision-record outputs | Not encoded as simulation outputs in source mirror | Explicit required outputs to `docs/decisions/*.md` for graded simulations | Artifact-path contract exists in simulations repo and must be reconciled in source-of-truth materials |

## Reconciliation plan

1. **Unblock source repository access (required gate).**
   - Confirm whether `AMLW05/cts-285_SOURCE` is private, renamed, or typoed.
   - Once reachable, capture default branch + commit SHA used for reconciliation.

2. **Build canonical module crosswalk (M1–M8).**
   - For each module, map: assignments, activities/simulations, knowledge checks/exit tickets, and required evidence artifacts.
   - Mark each row as `aligned`, `drift`, or `missing`.

3. **Reconcile graded artifact contracts first.**
   - Normalize where graded simulation outputs must land (currently `docs/decisions/*.md` in simulations repo).
   - Verify those outputs are referenced consistently in CTS-285 assignment directions and rubrics.

4. **Close M4–M8 simulation gap deliberately.**
   - Decide per module whether to: (a) add new simulations, (b) keep markdown-only activities, or (c) hybridize.
   - Record the decision per module to avoid accidental divergence.

5. **Publish a controlled update package in this repo.**
   - Update planning docs with the approved crosswalk and drift resolutions.
   - Open follow-on B-ID scoped work items only after module-level decisions are explicit.

## Immediate blocker

Issue #67's requested "two-source" reconciliation is currently blocked by missing access to `AMLW05/cts-285_SOURCE`. The simulations-side drift is measured above and ready to merge into the full crosswalk as soon as source-repo access is available.
