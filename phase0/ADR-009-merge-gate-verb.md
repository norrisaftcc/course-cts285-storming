# ADR-009: The Trusted Workflow Gets a Named Human Gate Before MERGE

**Status**: **Accepted** — 2026-07-31, instructor ruling (*"ratify ADR-007 and rule ADR-009 … stamped"*). Signer scoped to this repo; see §"Who may CLEAR".
**Deciders**: A. Norris (instructor). Raised by the cloud Claude Code session holding the write token, on field data from 2026-07-31.
**Governs**: the Trusted Workflow's step list, and every place authority to merge is exercised
**Related**: `ADR-007` (declined this item as out of scope — this ADR reopens it), `CLAUDE_SUPPLEMENTARY.md` Rule 4 (we run this workflow ourselves), `NAMING_CANON.md` §"Workflow canon", `the-algorithm` → Invariants → Gate integrity, `registry/KEEP.md` Q4 (gate authority scoping — **still open**; this ADR scopes around it rather than answering it)

> **Ruling note.** The instructor was told before ruling that this ADR leans on `registry/KEEP.md` **Q4 (which human may clear), which is open**, and ruled anyway. Rather than freeze a gate whose signer is undefined, the ruling scopes the signer narrowly — see §"Who may CLEAR" — and leaves the student-marshal case to Q4. That section is the only part of this ADR that is not fully settled, and it is marked.
>
> **The counter-argument survives acceptance.** REVIEW was skipped **4 of 4** on 2026-07-31, including on the PR that carried this ADR. Nothing here claims CLEAR fixes that. It is accepted on a narrower basis: the gate is *already exercised* on every cycle, and naming it makes its absence detectable. Making a failure visible is not the same as fixing it, and this ADR should not be cited as if it were.


## Context

`ADR-007` declined a gate verb for MERGE, and gave a clean reason:

> **A gate verb for MERGE** (e.g. requiring a human to say "merge" the way `the-algorithm` requires "freeze"). Out of scope: that is an authorization mechanism, not a naming decision, and it would change how the workflow *runs* rather than what its steps are called.

That reasoning was sound for a naming ADR. It is not a finding that the gate is unwanted — only that ADR-007 was the wrong document for it. This ADR is the right one.

### The field data that reopens it

On 2026-07-31 this repo ran four full Trusted Workflow cycles in one session — PRs #28, #29, #30, and the ruling commit itself. Three things happened that the workflow as written does not describe.

**1. The gate already exists, unnamed.** Each cycle ended with the instructor typing an instruction — *"merge #28"*, *"merge #29"* — before anything merged. A human authorization step is being exercised on every cycle. Because it has no name and no position in the step list, it cannot be checked, taught, or graded, and a reader of the seven steps would not know it happened.

**2. REVIEW was skipped four times out of four.** No human read a diff before merge on any of them, and the continuity-review agent did not run. The fourth was PR #30 — the pull request carrying this ADR, merged without the review whose absence it documents. The step exists in canon and did not happen. This matters more than it first appears: an unnamed gate collapses into whatever the human types, and what the human types after not reading is a rubber stamp. **A gate verb without REVIEW is worse than no gate verb**, because it manufactures a receipt for a check nobody ran — which is exactly the liturgy-performance failure `the-algorithm`'s register names in K6.

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
- [ ] CLEAR    a human accepts what happens when this lands
- [ ] MERGE    it lands
```

This makes the step list eight, not seven — a real cost, since quiz keys encode the sequence and any item keyed to "seven steps" or to REVIEW-then-MERGE adjacency would break.

**Checked before ruling:** no graded item breaks. The sequence appears in the Module 05 and Module 06 knowledge checks only inside *explanation* prose and one reference line — never as a correct answer, and no item asserts the step count. `NAMING_CANON.md` §"Workflow canon" was updated in the same commit as this ruling.

### 2. What CLEAR asserts

CLEAR is not "I want this merged." It is **"I accept what happens when this lands."** The acceptance is the whole content of the step; without it, CLEAR is a keystroke.

**REVIEW is a precondition of CLEAR, not part of it.** Having read the thing is what makes the acceptance informed, but reading is REVIEW's job and belongs to REVIEW. Folding "I read it" into the gate's meaning is a category error — it turns a gate into a quality check, and a gate is not a quality check (see the taxonomy note below). Keeping them separate is also what makes the 2026-07-31 failure visible: four PRs were merged with REVIEW skipped, and a CLEAR that silently absorbed REVIEW would have papered over exactly that.

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

## Who may CLEAR

`registry/KEEP.md` **Q4 remains open**: *the invariants say "a human" opens the gate; they never say which human.* The 2026-07-31 ruling did not answer Q4. It scoped around it:

**Settled — this repo.** The **instructor** is the only signer for `course-cts285-storming`. No agent clears, including an agent holding the write token. An agent may ask for CLEAR; it may never supply it, and it may not treat a merge instruction from any other source as one.

**Deferred — everywhere else.** The late-capstone case is untouched. K17 makes fan-out marshals hold gate authority *as the graded skill*, which would make CLEAR an assessment artifact with the student as signer and the instructor's role unclear (countersigner? auditor? nothing?). That is Q4's question and this ADR does not pre-empt it. **Do not extend CLEAR to CSC-289 team workflows or to any student-held gate on the strength of this ADR** — that needs Q4 answered and its own ruling.

**Consequence of the scoping.** CLEAR is canon for how this repo is built, and is *not* yet canon for what students are taught to do. Material that teaches the workflow to students carries the eight-step chain because the chain is canon; material that assigns *gate authority to a student* is blocked on Q4.

## Consequences

- `NAMING_CANON.md` §"Workflow canon" gained the step, and the sweep ran in the ruling commit. Records were deliberately excluded — `sources/`, `alignment_ingestion/`, `reference/voice-canon/`, and dated planning logs keep the seven-step text they were written with.
- Quiz items keyed to workflow *order* stay valid only if they do not assert the count or REVIEW→MERGE adjacency. Items asserting either regenerate.
- `CLAUDE_SUPPLEMENTARY.md` Rule 4's numbered list gains step 7, and Rule 6's acceptance criteria gain a line: an unREVIEWed PR cannot be CLEARed.
- **The honest consequence:** on the evidence of 2026-07-31, adding CLEAR to the list would not by itself have caused REVIEW to happen. Four cycles skipped a step that was already canon. A fourth step in the same list is not obviously a fix for a list not being followed, and this was weighed at the ruling and accepted anyway, on the narrower basis that naming an exercised gate makes its absence detectable.
