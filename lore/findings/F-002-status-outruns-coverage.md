# F-002 — Confident status text outrunning its coverage

**Recorded:** 2026-08-06 · **Source:** extracted from `F-001` §8, plus the incident record in
`CLAUDE_SUPPLEMENTARY.md` and `phase0/ADR-008-rule-1a-enforcement.md`
**State:** 12 instances across 6 layers in 3 weeks. 5 fixed, **7 open.**
**Rules:** this is a dated record (non-negotiable #8). Counts re-derived from the tree, not from any
document's claims about itself (#6).

## The claim

This repository has one dominant defect class, and it is not a content defect. It is **status text
that asserts more coverage than the work behind it actually has.** It recurs at every layer —
workflow summaries, the write ledger, onboarding docs, the course map, canon cross-references, and
task delegation — and it is the direct cause of the two worst incidents on record.

It is worth stating plainly because the instinctive reading is that these are six unrelated
mistakes. They are one mistake with six addresses.

## The instances

| Layer | Instance | Found | State |
|---|---|---|---|
| Workflow summary | A run reported **"49 confirmed"** while **17 findings had been dropped rather than judged** — the result-filter discarded findings whose verifier had died (`CLAUDE_SUPPLEMENTARY.md:8`) | 2026-07-29 | fixed |
| Ledger & token | The WRITE TOKEN holder line named a branch; when the branch merged the line was stale but **read exactly as it had when it was correct**. Survived a full merge cycle (`SESSIONS.md`, correction of 2026-07-31) | 2026-07-31 | fixed |
| Ledger & token | A session's own ledger row **re-quoted a directive** verbatim, handing a future reader a fresh copy of an instruction indistinguishable from a conclusion (`a8f6b8c`) | 2026-08-06 | fixed |
| Onboarding doc | `CLAUDE.md` listed Weeks 01–12 as "built" while three of them were queued as the next work | 2026-08-06 | fixed |
| Onboarding doc | `CLAUDE.md`'s state block still lists Week 02 as awaiting rewrite after B-005 landed at `601a214` | 2026-08-06 | **open** |
| Course map | `COURSEMAP.md` printed **25 pts** for a 35-pt assessment | 2026-08-06 | fixed |
| Canon references | `CTS285_COURSE_OUTLINE.md` was marked RETIRE at ingestion (`INGESTION_MANIFEST.md:332`) and exists nowhere, yet **3 live artifacts still cite it** — `Grading_Key.md:114`, `shared-dataman-artifacts/README.md:62`, and `Dataman_Seeded_Backlog.md:410`, which traces an entire epic block to it | 2026-08-06 | **open** |
| Canon references | "Exactly 3 sites" of PATHFORM (`B003_RECONCILIATION_WORKLIST.md:33`) and "3 sites" (`26FA_Consolidation_Master_Plan.md:148`) are dated claims; the tree now holds **39 occurrences outside `sources/`, 22 in `drafts/`, across 6 files** | 2026-08-06 | **open** |
| Canon references | `shared-dataman-artifacts/README.md:11-19` reproduces the **pre-ADR-004 naming split** — asserts the project is "never called 'Datamon'" without presenting **DataMon** as a live student basis | 2026-08-06 | **open** |
| Delegation | ADR-003's rehearsal role card + live instructor-as-client brief: **9 reference sites**, delegated to task 1.4, re-delegated to 1.3 (master plan `:99`, `:109`), shipped by **neither** *(Corrected 2026-08-07 — `F-004` §2: 19 sites across 9 files; two artifacts, not one)* | 2026-08-06 | **open** |
| Delegation | The ADR rail: PRISM `:12,:23` define CTS-285's exit tier as banking ADRs; `Week_05:291` still reads "Design Rationale (400–600 words)"; `grep ADR-lite drafts/` returns 0 *(Corrected 2026-08-07 — `F-004` §3: half-built; Sprint 1 rung only)* | 2026-08-06 | **open** |
| Delegation | `WIRING_MANIFEST.md:41`'s 3-question vs 4-section standup reconciliation, marked *"Not resolved here"* and still unresolved | 2026-08-06 | **open** |

**A caution on the dates.** The *Found* column is when someone looked, not when the defect was
introduced. The cluster on 2026-08-06 reflects a survey happening, not a bad day. Reading this table
as a rate would be the same error the table is about.

## Why it keeps happening

The three worst instances share a mechanism: **the text was true when written, and nothing about its
form changes when it stops being true.** A holder line, a "49 confirmed," and a "weeks 01–12 built"
all read identically before and after the fact they describe expires. There is no visible decay.
The reader has no way to tell.

The delegation instances are a variant with a different mechanism: **an item assigned to "whichever
task does X" survives the closure of every task that could have done it.** The backlog tracks work
units, not remainders, so a carried obligation vanishes silently at the moment its host closes.
ADR-003's role card has now outlived two delegations this way.

## The countermeasures that have actually worked

Each is cheap, and each was validated by an incident:

1. **Separate the record from the status.** Non-negotiable #8. A dated row describes a past state
   and is correct as written; the defect is editing it to match the present.
2. **State the reconciliation, not the summary number.** `bounded-fanout` now returns
   dispatched / returned / dead unconditionally, including on runs that succeed
   (`ADR-008:42`) — there is no code path that filters a dead agent away.
3. **Brief every agent on #8 before launch.** The measured effect is large. On 2026-07-29 an
   unbriefed audit produced findings against handoff and ledger documents of which the adversarial
   verifier refuted **19 of 20** (`ADR-008:50`). On 2026-08-06, with five mappers briefed up front,
   the verifier reports finding **zero** instances of the class.
4. **Abstract the operative token when a record must restate a directive.** The
   `semantics-preserved-abstract` technique: demote the parseable token to a glyph, reduce the name,
   report the directive instead of reproducing it, and preserve the conclusion exactly.
5. **Fan out per artifact, never per finding.** The count then cannot become a function of what the
   work discovers.

## Corollary: estimate accuracy is a function of shape, not ambition

| Date | Run | Estimated | Launched | Died | Outcome |
|---|---|---|---|---|---|
| 2026-07-29 | Status reconciliation | ~14 | **76** (5.4×) | 18 (24%) | No deliverable. 109 min, 3.16M tokens |
| 2026-07-31 | B-003 application | 7 | 7 | 0 | 47/47 applied, independently audited 47/47 |
| 2026-08-06 | `F-001` forecast | 7 | 7 | 0 | Verdict returned; 7 defects caught pre-publication |

The overrun was caused by a per-finding verification stage nested inside a per-document audit stage:
`parallel()` inside a `pipeline()` stage multiplies, and the audits returned 67 findings instead of
the assumed handful (`CLAUDE_SUPPLEMENTARY.md:22`). Both runs that fanned out **per artifact** hit
their estimate exactly, with zero deaths.

## What this finding does not do

It does not rule. Whether any of the seven open instances gets fixed, and in what order, is not
settled here — several belong to tasks that already own them (B-006 owns the ADR rail; `2.5` owns
the COURSEMAP block). The one item with **no owner at all** is the ADR-003 remainder, and
`F-001` §4 decision 5 raises re-parenting it as a question for a human rather than answering it.

## Open question this finding raises

The mechanism in §"Why it keeps happening" suggests a mechanical countermeasure — a marker that
makes status text *declare its own expiry*, so a reader can see decay rather than infer it. Whether
that is worth building is exactly the kind of question `ADR-008`'s test exists to answer, and it is
not answered here.
