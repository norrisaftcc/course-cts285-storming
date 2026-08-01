# ADR-010: Gate Authority Is Scoped by Blast Radius, Not by Rank

**Status**: **Proposed** — 2026-08-01. Not ruled. `CLAUDE_SUPPLEMENTARY.md` Rule 8 keeps students, grades, and privacy with a human, so this ADR cannot accept itself.
**Deciders**: pending instructor ruling.
**Governs**: if accepted — who may CLEAR, per course and per customer type; the deferred half of ADR-009
**Related**: `ADR-009` (CLEAR; scoped its signer to the instructor and deferred the student case to this question), `PRISM_Course_Mapping.md` (tier ladder), `the-algorithm` → `spectrum-plan-v1.6.md` §2 belief 7, §5, §6 · `registry/KEEP.md` K3, K6, K17, **Q4**

## Context

`the-algorithm`'s register asks **Q4**:

> The invariants say "a human" opens the gate — they never say *which* human. When a late-capstone marshal freezes, does the instructor countersign? Is the freeze log the gradebook? Who may freeze what, per customer type?

`ADR-009` hit this directly. It named CLEAR as a live-human gate before MERGE, then had to scope its signer to the instructor because Q4 had no answer — and explicitly refused to extend CLEAR to student-held authority on its own strength. This ADR proposes the answer that unblocks it.

**Terminology.** `the-algorithm` says *freeze log*; the Trusted Workflow says *CLEAR record*. They are the same artifact under two names, and this ADR uses both.

## Proposal

### 1. The rule: the signer is whoever bears the consequence

This is not a new invariant. It is belief 7 read in reverse:

> A gate is real because a human pays to open it.

If the person signing does not pay, their signature is not a gate — it is a keystroke. If someone else pays, that someone else is the signer. **Scope gates by blast radius, not by rank.**

Everything below follows from this one sentence.

### 2. No countersignature. Two gates instead.

The instructor does **not** countersign a student's freeze.

Two signatures on one gate means neither signer fully pays, and the student learns that somebody catches their mistakes — the precise inverse of the skill being graded. Instead, two separate gates, each with one signer who actually bears what it releases:

| Consequence lands… | Signer | Examples |
|---|---|---|
| **Inside the student's sandbox** | the student, alone | their own repository, their own agent fan-outs, their own token spend, their own grade |
| **Across the boundary** | the instructor, separately | course-repo `main`, another student's work, anything public, real users, institutional spend |

A marshal never gains authority over consequences they do not bear. That is not a restriction on the student's gate — it is what makes the student's gate real instead of ceremonial.

### 3. Gate color is already determined by PRISM × SPECTRUM

No new rule is needed here; two existing documents simply have not been read against each other.

- SPECTRUM §6: *a gate opens only to a live human at the gate's color or above. Both conditions, always.*
- SPECTRUM §6: amendment, adjudication, and **spawn** are GREEN gates.
- `PRISM_Course_Mapping.md`: **CTS-285 exits at ORANGE. CSC-289 exits at GREEN.**

Therefore:

- **A CTS-285 student never holds spawn authority.** Not as a policy choice — as arithmetic. Spawn is a GREEN gate and the course tops out at ORANGE. Any 285 material that hands a student a fan-out to authorize is a canon violation, not a design question.
- **A CSC-289 student reaches GREEN at exit, not at entry.** Gate authority is granted across the term rather than issued on day one, which makes it a progression — and therefore assessable as one.

### 4. The CLEAR record is evidence. It is not the grade.

Making the log the gradebook would break the log.

K6 already names the mechanism: *every mechanism installed creates the incentive to perform it.* Grade the count of freezes and the course manufactures ritual freezes. A student who clears five times correctly should outscore one who clears twenty times reflexively.

What is assessable is the **judgment visible in the record**, which reads from the same artifact without being its count:

- Did they negotiate before freezing, or freeze first?
- Did they refuse to freeze something underspecified?
- Did they reopen on failure rather than patch mid-build?
- Did they decline to CLEAR work they had not REVIEWed?

The last one is directly measurable against `CLAUDE_SUPPLEMENTARY.md` Rule 6 criterion 7.

### 5. Per customer type (K17 registry v0)

| # | Customer type | Who signs | Ceiling |
|---|---|---|---|
| 1 | Peer-of-many-hats | self; seat lines mandatory | own blast radius |
| 2 | Linear implementors — early capstone (**CTS-285**) | **the instructor** | ORANGE; no spawn gate exists for the student |
| 3 | Fan-out marshals — late capstone (**CSC-289**) | **the student**, inside the sandbox; the instructor at the boundary | GREEN by exit, not at entry |
| 4 | Peers | self | standards constrain them, not authority |
| 5 | Receivers | none | downstream by definition; a receiver holds no gate |

## Flagged for a human — deliberately not ruled here

**1. If the CLEAR record is graded, it becomes an education record.** Retention, disclosure, and privacy consequences follow, and they are not this ADR's to decide. §4 above says the record should be *evidence* rather than the grade, which softens but does not remove the exposure — evidence consulted in grading may still be part of the record. Rule 8 puts this with a human, and it should get a deliberate answer rather than a default one.

**2. Revocation is unaddressed by Q4, and should not be.** If a student CLEARs something they should not have, is their gate authority pulled? The answer consistent with belief 7 is **no** — the consequence lands and the record holds it, because a gate you can be rescued from is not one you pay for. But that reasoning is clean in a way real students are not, and the harm is real. This is a pedagogy ruling with a duty-of-care dimension, and an agent should not make it.

## Consequences, if accepted

- `ADR-009`'s deferred half closes: its §"Who may CLEAR" gains the student answer, and the block on CSC-289 team workflows lifts.
- **B-017 and B-019 unblock.** CSC-289's team spine currently cannot be built without knowing whether a student holds a gate; §2 and §3 answer it.
- `PRISM_Course_Mapping.md` gains an explicit note that the ORANGE/GREEN exits carry gate authority, so the mapping is not read as tiering competence alone.
- The general form of §1–§2 is filed upstream to `the-algorithm`'s register as a proposed Q4 answer, stripped of course detail.
- **Nothing student-facing changes on acceptance alone.** This ADR decides who may sign; it does not write any assignment, rubric, or gradebook. Those are separate work under the usual gates.
