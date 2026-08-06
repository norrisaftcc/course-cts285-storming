# ABSTRACT — proposed third operation for `the-algorithm`

*Status: **drafted, not frozen**. Produced 2026-08-06 in `course-cts285-storming`. This is a drafting record only — the live register is `the-algorithm`'s `SKILL.md`, and on any divergence the live text wins.*

**This proposal cannot approve itself.** The register requires that amendments to Invariants are proposed in full, frozen by a human, and recorded with date and delta. It further states that a gate phrase which is quoted, pasted, forwarded, templated, or spoken by any delegate freezes nothing. This document is the "proposed in full" half. The freeze is the instructor's, spoken live.

Filing it upstream needs `the-algorithm` attached to a session; that was not available here, so the text is staged in this repo for manual carry-over — the same pattern as `PROJECT_INSTRUCTIONS_PROPOSED.md`.

---

## Why a third operation

The register has two operations, split by direction: **PROVIDE** writes under the floor, **ASSAY** reads under it and never redrafts.

A third kind of work fits neither. When a record still reads as a live instruction — an expired grant, a superseded ruling, a stale holder line — the fix is not to redraft it and not merely to report it. It is to **emit a reduced successor and leave the original standing**. That operation writes, but never to the source.

Two incidents in the course repo motivated it, both on the record there: a write-token holder line that stayed plausible for a full merge cycle after going stale, and a drift audit that read dated records as live status, where 19 of 20 refuted findings were raised against historical records.

## Why it needs no gate

PROVIDE is gated because a human bears what executing the contract does. ASSAY is ungated because it produces a finding and changes nothing.

ABSTRACT changes nothing that already exists. It only appends. By the rule that a gate is real because a human pays to open it, an operation with no blast radius has nothing to pay — so a gate on it would be ceremony, and ceremony teaches that gates are ceremonial. Scope gates by blast radius, not by rank.

---

## The amendment, in full

### 1. Description field

Replace the current two-operation description with:

> Three operations on documents. PROVIDE — compress a draft prompt to the shortest version that clears a floor test, teach through the cuts, freeze at a gate, execute exactly. ASSAY — run the floor test against a received document and report what survives, read-only, never redrafted. ABSTRACT — emit a reduced successor to a record that still reads as live, and leave the original standing. Use when a peer submits a prompt to optimize, wants a draft built via optimize-then-freeze, wants an incoming document read against the floor, or holds a record that a later reader could mistake for a current instruction.

### 2. Fixed strings — one addition

Add to the fixed-strings list:

- "This is a successor, not an edit."

It closes ABSTRACT the way "This is a finding, not a draft." closes ASSAY. Each names what the output is not, because that is the mistake each operation invites.

### 3. Template — ABSTRACT (fixed order, nothing between the parts)

```
Carried: [the conclusion the reader must still reach]
Reduced: [what becomes non-working, and to what form]
Standing: [what stays unchanged, and why]
Apply when: [the condition that makes the change permitted]

This is a successor, not an edit.
```

Four notes on the parts:

- **Carried** is the test of the whole operation. If the reader cannot reach the same conclusion, this is deletion, not abstraction.
- **Reduced** names the symbolism only: which token, to what form. It does not restate the meaning.
- **Standing** is required even when nothing blocks the change. Naming what you did not touch is what keeps the record intact.
- **Apply when** is required in every case, including immediate application. State the condition that permits it now. A change with no stated permission is a change nobody authorized.

### 4. Gate integrity — one clause

Add:

> ABSTRACT has no gate. It appends and never alters a source, so no human bears a consequence at the moment it runs. An ABSTRACT that modifies the record it describes is not an ABSTRACT; it is an edit, and it belongs on the negotiation side.

### 5. Amendment record — new entry

> **v3 (proposed):** ABSTRACT operation added, with fixed template and closing string. Third fixed string added. Gate-integrity clause added: ABSTRACT is ungated because it appends only. Workflow diagram gains a third branch. Proposed by a delegate; freeze pending.

### 6. Workflow diagram — third branch

The router gains a third outcome beside "draft prompt" and "received document":

```mermaid
subgraph ABSTRACTPATH["ABSTRACT — append-only"]
    AB1[Find the operative token in the record]
    AB2[Reduce it — keep the conclusion, drop the live form]
    AB3["Report: Carried / Reduced /<br/>Standing / Apply when"]
    AB4(["This is a successor, not an edit.<br/>No gate. Append. Stop."])
    AB1 --> AB2 --> AB3 --> AB4
end

M -- "record that reads as live" --> AB1
```

---

## What this proposal deliberately does not do

- **It does not permit rewriting an existing record.** The successor is appended. Where a record is append-only, a retroactive rewrite destroys the interval between a mistake and its catch, which is what such records exist to make visible.
- **It does not fill in meaning.** A tool can derive the symbolism — which token, reduced to what. It cannot derive the conclusion a reader must reach. `Carried` is authored, never generated; a plausible sentence supplied by a machine is the machine asserting what it never established.
- **It does not remove anything from history.** ABSTRACT governs what a later reader meets in the current document, not what a repository retains. It is not a remedy for a leaked credential; rotate the credential instead.

## Note on scope

The general form above carries no course detail, per the same convention used when the gate-authority answer was filed upstream. The course-local implementation — the glyph vocabulary, the repository's specific record types, and the mechanical checks — stays in `course-cts285-storming` as the `semantics-preserved-abstract` skill and its `records-guard` tool.
