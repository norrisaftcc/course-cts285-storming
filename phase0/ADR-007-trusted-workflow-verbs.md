# ADR-007: The Trusted Workflow Gets Dedicated UPPERCASE Verbs and an Explicit Checkmarked Form

**Status**: **Accepted** (principle) — 2026-07-29, instructor freeze. **Verb lexicon below: Proposed**, awaiting ratification.
**Deciders**: A. Norris (instructor) — **froze the principle**; the specific seven verbs are this ADR's proposal and are **not** yet decided.
**Governs**: every statement of the Trusted Workflow in student-facing material, rubrics, quiz keys, Canvas pages, and executor prompts
**Related**: `NAMING_CANON.md` §"Workflow canon" (the step sequence, unchanged); `CLAUDE_SUPPLEMENTARY.md` Rule 4 (we run this workflow ourselves)

## Context

The Trusted Workflow is canon: **Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge.** Seven steps, and quiz keys already encode their order.

But the steps are named with *noun phrases of varying shape* — "Issue" is a noun, "Development" is a gerund, "Draft PR" and "Finish PR" are a noun and a verb sharing a suffix. A student asked "where are you in the workflow?" must translate a phrase into a position. So must an agent. That translation is unforced cognitive load, and it is load paid repeatedly, by every reader, on every pass.

Two observations drove the freeze:

1. **A dedicated uppercase verb per step removes the translation.** The pattern is proven adjacent to this project: `the-algorithm` uses PROVIDE and ASSAY as operation names, and reserves `freeze` / `execute` / `run it` as gate verbs — one word per meaning, no synonyms, so a reader never wonders whether two phrasings mean two things.
2. **An explicit checkmarked form makes position visible rather than inferred.** A checkbox list answers "where am I" by pointing, not by reading.

## Decision

**Frozen (instructor, 2026-07-29):**

1. The full Trusted Workflow **will** have a complete set of new, dedicated UPPERCASE verbs — one per step, no gaps.
2. The workflow **will** be expressed in an explicit **checkmarked** form wherever a reader needs to know their position.
3. Rationale of record: **explicit checkmarked workflows ease cognitive load.** This is the standard any proposed lexicon is judged against.

**Proposed, not frozen** — the lexicon itself:

| # | Canonical step | Verb | Means |
|---|---|---|---|
| 1 | Issue | **FILE** | The work is written down before it is started, with acceptance criteria. |
| 2 | Branch | **BRANCH** | A named branch exists; `main` is not the workspace. |
| 3 | Draft PR | **DRAFT** | Work in progress is visible to others *before* it is finished. |
| 4 | Development | **BUILD** | The actual work, in `drafts/<course>/<module-or-week>/`. |
| 5 | Finish PR | **FINISH** | The PR is marked ready and carries its handoff block. |
| 6 | Code Review | **REVIEW** | Another party reads it — human, or the continuity-review agent. |
| 7 | Merge | **MERGE** | It lands. |

**FILE · BRANCH · DRAFT · BUILD · FINISH · REVIEW · MERGE**

### The checkmarked form

```
- [ ] FILE     issue opened; acceptance criteria stated
- [ ] BRANCH   task/<phase>-<id>-<slug>, cut from main
- [ ] DRAFT    draft PR opened; work visible in progress
- [ ] BUILD    work done in drafts/<course>/<module-or-week>/
- [ ] FINISH   PR marked ready; handoff block in the description
- [ ] REVIEW   human, or continuity-review agent for leaf work
- [ ] MERGE    merged
```

### Lexicon rules (if ratified)

- **Reserved words.** One word per meaning, no synonyms. "Open a PR" and "start a branch" are not verbs of this workflow; FILE and BRANCH are.
- **Canon-bound.** Quiz items and rubric lines that name a step use the verb. Per `NAMING_CANON.md`, a miss here is a wrongly-graded student answer — so the verbs inherit the same mechanical-application discipline as the rename table.
- **The step sequence does not change.** This ADR renames the labels on seven existing steps. It does not add, remove, reorder, or merge any step. `NAMING_CANON.md` §"Workflow canon" remains the authority on order.

## Declined, not unimplemented

Recorded so a later session does not helpfully build them:

- **READY instead of FINISH** — clearer about what the step does, but breaks traceability to the canonical step name "Finish PR." Declined in favour of matching canon. Revisit only if the canonical step name changes.
- **CODE instead of BUILD** — rejected because step 4 is not always code (it is a rubric, an ERD, a Canvas page as often as a function), and because the retired entry-ticket key taught `Issue → Branch → Code → PR`, which this workflow exists to supersede. Reusing CODE would echo the superseded sequence.
- **A gate verb for MERGE** (e.g. requiring a human to say "merge" the way `the-algorithm` requires "freeze"). Out of scope: that is an authorization mechanism, not a naming decision, and it would change how the workflow *runs* rather than what its steps are called.
- **Verbs for CSC-289's team roles** (Dev → SM → QA rotation). Different axis; ADR-001 governs. Not this ADR.

## Consequences

- **On ratification:** a mechanical sweep replaces step-name phrasings with verbs across assignments, rubrics, knowledge checks, Canvas pages, and `CLAUDE_SUPPLEMENTARY.md` Rule 4. `grep` for the seven canonical step names enumerates the work.
- **Quiz keys are affected.** Any item keying workflow order regenerates against the verb table. Items keying *order only* stay valid — the sequence is unchanged.
- **This ADR does not decide** which documents get the checkmarked form. Student-facing weeks plainly benefit; whether `phase0/` canon files carry it is a separate call.
- **Until ratified**, material continues using the canonical step names from `NAMING_CANON.md`. Do not partially adopt the verbs — a half-converted lexicon is worse than either state, because a reader cannot tell whether two phrasings mean two things.
