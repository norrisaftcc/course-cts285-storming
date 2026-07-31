# ADR-007: The Trusted Workflow Gets Dedicated UPPERCASE Verbs and an Explicit Checkmarked Form

**Status**: **Accepted** — principle frozen 2026-07-29; **verb lexicon ratified 2026-07-31**.
**Deciders**: A. Norris (instructor) — froze the principle 2026-07-29 and **ratified the lexicon 2026-07-31** (*"ratify ADR-007 and rule ADR-009 … stamped"*).

> **Ratification note (2026-07-31).** The seven verbs below are now canon. **ADR-009 was ruled the same day and inserts an eighth step, CLEAR, between REVIEW and MERGE** — so the canonical chain is **FILE · BRANCH · DRAFT · BUILD · FINISH · REVIEW · CLEAR · MERGE**. This ADR's seven-verb table stands unchanged as the record of what was ratified here; `NAMING_CANON.md` §"Workflow canon" is the authority on the current full chain. The two rulings landed in one commit, so canon was never briefly seven-verbs-plus-a-pending-eighth — the half-converted state this ADR warns about below.
>
> **Sweep basis, recorded:** the verb chain is the canonical *inline* citation; the checkmarked form below carries the glosses wherever a reader needs to know what a step means or where they are. Student-facing prose uses the chain and may gloss it locally — a bare verb list is canon, not a lesson.
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

**Ratified 2026-07-31** — the lexicon itself (seven verbs as proposed; ADR-009 adds CLEAR at position 7):

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
- [ ] CLEAR    a human authorizes the merge (ADR-009, 2026-07-31)
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
- ~~**A gate verb for MERGE**~~ **— REOPENED and ACCEPTED as ADR-009, 2026-07-31.** The original text stands: *"Out of scope: that is an authorization mechanism, not a naming decision, and it would change how the workflow* runs *rather than what its steps are called."* That reasoning was correct — and it located the item in the wrong document rather than ruling against it. Field data from four cycles on 2026-07-31 showed the gate was already being exercised on every merge, unnamed. See `ADR-009`.
- **Verbs for CSC-289's team roles** (Dev → SM → QA rotation). Different axis; ADR-001 governs. Not this ADR.

## Consequences

- **On ratification:** a mechanical sweep replaces step-name phrasings with verbs across assignments, rubrics, knowledge checks, Canvas pages, and `CLAUDE_SUPPLEMENTARY.md` Rule 4. `grep` for the seven canonical step names enumerates the work.
- **Quiz keys are affected.** Any item keying workflow order regenerates against the verb table. Items keying *order only* stay valid — the sequence is unchanged.
- **This ADR does not decide** which documents get the checkmarked form. Student-facing weeks plainly benefit; whether `phase0/` canon files carry it is a separate call.
- **Until ratified**, material continues using the canonical step names from `NAMING_CANON.md`. Do not partially adopt the verbs — a half-converted lexicon is worse than either state, because a reader cannot tell whether two phrasings mean two things.
