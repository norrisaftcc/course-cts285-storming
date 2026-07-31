# ADR-009: The Trusted Workflow Gets a Named Human Gate Before MERGE

**Status**: **Proposed** — 2026-07-31. Not ruled. Requires instructor freeze; see "What this needs from a human" below.
**Deciders**: pending. Raised by the cloud Claude Code session holding the write token, on field data from 2026-07-31.
**Governs**: if accepted — the Trusted Workflow's step list, and every place authority to merge is exercised
**Related**: `ADR-007` (declined this item as out of scope — this ADR reopens it), `CLAUDE_SUPPLEMENTARY.md` Rule 4 (we run this workflow ourselves), `NAMING_CANON.md` §"Workflow canon", `the-algorithm` → Invariants → Gate integrity, `registry/KEEP.md` Q4 (gate authority scoping — **open, and this ADR depends on it**)

## Context

`ADR-007` declined a gate verb for MERGE, and gave a clean reason:

> **A gate verb for MERGE** (e.g. requiring a human to say "merge" the way `the-algorithm` requires "freeze"). Out of scope: that is an authorization mechanism, not a naming decision, and it would change how the workflow *runs* rather than what its steps are called.

That reasoning was sound for a naming ADR. It is not a finding that the gate is unwanted — only that ADR-007 was the wrong document for it. This ADR is the right one.

### The field data that reopens it

On 2026-07-31 this repo ran three full Trusted Workflow cycles in one session — PRs #28, #29, #30. Three things happened that the workflow as written does not describe.

**1. The gate already exists, unnamed.** Each cycle ended with the instructor typing an instruction — *"merge #28"*, *"merge #29"* — before anything merged. A human authorization step is being exercised on every cycle. Because it has no name and no position in the step list, it cannot be checked, taught, or graded, and a reader of the seven steps would not know it happened.

**2. REVIEW was skipped three times out of three.** No human read a diff before merge on any of the three, and the continuity-review agent did not run. The step exists in canon and did not happen. This matters more than it first appears: an unnamed gate collapses into whatever the human types, and what the human types after not reading is a rubber stamp. **A gate verb without REVIEW is worse than no gate verb**, because it manufactures a receipt for a check nobody ran — which is exactly the liturgy-performance failure `the-algorithm`'s register names in K6.

**3. A defect landed from conflating the two systems.** The same session tied write-token authority to "when the branch merges," which under this workflow returns the token after *every* task. The error was treating MERGE — a delivery event — as an authority event. That conflation is the argument for keeping them as separate, separately-named steps, and it is small direct evidence that the current step list invites the confusion.

### The distinction the workflow is missing

**Delivery and authorization are different systems.** MERGE is delivery: the branch lands. Authorization is a human accepting the consequences of it landing. Today they share one step name, so the authorization is invisible and its absence is undetectable.

`the-algorithm` already solves this shape for contracts: the gate question is asked by the system, the freezing verb is spoken only by a live human, and no delegate, template, or quoted string opens it. The Trusted Workflow needs the same shape at its last step, for the same reason — someone must bear the cost of saying it, knowing what it authorizes.

### Taxonomy note: CLEAR is not an execution gate

Recorded so this ADR is not read as claiming inheritance it does not have.

**A gate's function is to separate two modes with incompatible rules, and to make a human pay for the transition.** `the-algorithm`'s gate is an *execution* gate: it sits before the work and separates negotiating (revise freely, never execute) from executing (execute exactly, never re-optimize). Remove it and you get the third side, where things are quietly fixed mid-build and nothing is ever truly specified.

**CLEAR is an acceptance gate.** It sits after the work and separates revisable from shipped — before it, the branch is a proposal and edits are cheap; after MERGE, `main` holds it and reopening means a new change rather than an edit. That is a genuine mode boundary, so the gate mechanics below transfer intact. But it is a different boundary, and CLEAR does not inherit its authority from the execution gate — it earns the same mechanics by having the same structure, not by being the same thing.

**Neither kind of gate is a quality check.** A frozen contract can be wrong; it executes anyway and fails loudly on a named floor item, which reopens it. Catching wrongness is the floor test's job before the gate, and REVIEW's job here. A gate that starts doing quality control has stopped being a gate and become a checkpoint, and a checkpoint can be satisfied by looking busy.

## Proposal

### 1. A gate verb, between REVIEW and MERGE

**CLEAR** — the human authorizes the merge. Distinct step, distinct verb, distinct from the mechanical act of merging.

```
- [ ] FILE     issue opened; acceptance criteria stated
- [ ] BRANCH   task/<phase>-<id>-<slug>, cut from main
- [ ] DRAFT    draft PR opened; work visible in progress
- [ ] BUILD    work done in drafts/<course>/<category>/
- [ ] FINISH   PR marked ready; handoff block in the description
- [ ] REVIEW   human, or continuity-review agent for leaf work
- [ ] CLEAR    a human authorizes the merge, having read it
- [ ] MERGE    it lands
```

This makes the step list eight, not seven. That is a real cost and the reason this ADR is Proposed rather than written into `NAMING_CANON.md`: quiz keys encode the sequence, and adding a step invalidates any item keyed to "seven steps" or to REVIEW-then-MERGE adjacency.

### 2. What CLEAR asserts

CLEAR is not "I want this merged." It is **"I accept what happens when this lands."** The acceptance is the whole content of the step; without it, CLEAR is a keystroke.

**REVIEW is a precondition of CLEAR, not part of it.** Having read the thing is what makes the acceptance informed, but reading is REVIEW's job and belongs to REVIEW. Folding "I read it" into the gate's meaning is a category error — it turns a gate into a quality check, and a gate is not a quality check (see the taxonomy note below). Keeping them separate is also what makes the 2026-07-31 failure visible: three PRs were merged with REVIEW skipped, and a CLEAR that silently absorbed REVIEW would have papered over exactly that.

Gate mechanics, inherited from `the-algorithm` → Gate integrity, unchanged in substance:

- Only a **live human** clears. No agent clears its own work, and no agent clears another agent's.
- **No clearing by reference.** CLEAR names the specific PR in front of it.
- **No completion assist.** "ok", "sure", "looks good", and silence do not clear. The verb is the verb.
- CLEAR is **not transferable to a delegate**, model or otherwise.

### 3. What this does not do

CLEAR does not gate `main` technically. Nothing here proposes branch protection, required reviewers, or CI enforcement. It is a named step with an asserted meaning — doctrine, not mechanism. Per ADR-008's own test, that means it binds only those who have read it, and this ADR does not pretend otherwise. If it should be a mechanism, that is a separate ADR and a separate cost.

## Declined verbs, with reasons

- **LAND, SHIP** — near-synonyms of MERGE. `ADR-007`'s lexicon rule is one word per meaning, no synonyms; a reader would reasonably wonder whether LAND and MERGE are two steps or one phrasing of one step. That is the exact confusion the verb set exists to remove.
- **APPROVE** — collides with GitHub's own review action. "Approved" would mean two different things in the same sentence, one of which is a button.
- **AUTHORIZE** — accurate and clumsy. Fails the speak test that `ADR-007` applies to every line; four syllables where one works.
- **FREEZE** — already owned by `the-algorithm` for contracts. Reusing it for merges would give one word two meanings across two adjacent systems, which is the drift both documents exist to prevent.

**Flagged, not declined — CLEAR against SPECTRUM.** `the-algorithm`'s SPECTRUM uses *clearance* as a noun for capability level (RED through ULTRAVIOLET). CLEAR here is a verb for an act. Different part of speech, different system, and this repo is adjacent to that one rather than inside it — but a reader crossing between them could stumble, and whoever rules on this ADR should decide whether that is tolerable. It is the one real objection to the recommended verb.

## What this needs from a human

This ADR cannot rule itself. Three things are outside an agent's clearance:

1. **The gate itself.** A ruling that a human must authorize merges is a ruling about human authority; per `CLAUDE_SUPPLEMENTARY.md` Rule 8, anything touching the live GitHub org is human-only.
2. **Who may clear** — `registry/KEEP.md` **Q4 is open**: *the invariants say "a human" opens the gate; they never say which human.* For this repo the answer is presumably the instructor. For late-capstone students holding gate authority as the graded skill (K17's fan-out marshals), it is exactly the question Q4 is asking, and CLEAR would become an assessment artifact. This ADR should not be frozen before Q4 has an answer, or it will freeze a gate whose signer is undefined.
3. **The eighth step.** Whether the cost to quiz keys and canon is worth it.

## Consequences, if accepted

- `NAMING_CANON.md` §"Workflow canon" gains a step; every "seven steps" phrasing becomes wrong and needs a sweep. `grep -rn "seven" ` plus the canonical step names enumerates it.
- Quiz items keyed to workflow *order* stay valid only if they do not assert the count or REVIEW→MERGE adjacency. Items asserting either regenerate.
- `CLAUDE_SUPPLEMENTARY.md` Rule 4's numbered list gains step 7, and Rule 6's acceptance criteria gain a line: an unREVIEWed PR cannot be CLEARed.
- **The honest consequence:** on the evidence of 2026-07-31, adding CLEAR to the list would not by itself have caused REVIEW to happen. Three cycles skipped a step that was already canon. A fourth step in the same list is not obviously a fix for a list not being followed, and anyone ruling on this should weigh that against the value of naming a gate that is already being exercised.
