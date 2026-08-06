# F-003 — The failing-agent runs: evidence inventory and forensic record

**Recorded:** 2026-08-06 · **Purpose:** an audit trail for a later researcher
**State:** Four runs on record. **One has primary evidence, and it is stored somewhere ephemeral.**
**Rules:** dated record (non-negotiable #8); counts re-derived where re-derivable and marked
`SECONDHAND` where not (#6).

## 0. Read this section first

This document exists so someone who was not present can study what happened without having to trust
a narrator. That obligation is easier to state than to meet, and the honest headline is:

> **Three of the four runs on record cannot be independently checked. Their numbers survive only as
> prose in documents written by the sessions that ran them.**

That is not a reason to discard those numbers — they are specific, internally consistent, and were
plainly derived from evidence that existed at the time. It is a reason to label them, which §2 does.
A researcher should treat the 2026-07-29 figures the way a historian treats a single-source
chronicle: probably accurate, not verifiable, and never to be re-reported as measurement.

**The load-bearing defect this finding surfaces is §5.** The doctrine names the run journal as the
record. The run journal is not in the repository, and the container that holds it is reclaimed.

## 1. Evidence classes used below

| Class | Meaning | Can a researcher check it? |
|---|---|---|
| `PRIMARY` | Machine-generated artifact still on disk or in version control | Yes, directly |
| `DERIVED` | Work product in git whose shape confirms the claim indirectly | Yes, by inspection of the diff |
| `SECONDHAND` | Prose written by the session that ran it; source artifact gone | **No.** Cite as testimony |
| `ABSENT` | Asserted with no surviving detail at all | No |

## 2. The four runs

### Run 1 — 2026-03-13 · the parallel-spine fork · `ABSENT`

Two sessions generated CSC-289 architectures in parallel. They produced **two incompatible designs**
— one solo, one team-based — **self-audited the same day**, and the conflict went unnoticed for
**four months**.

- **Evidence:** `CLAUDE_SUPPLEMENTARY.md:6`, `phase0/ADR-001-csc289-team-based.md`.
- **What is not recorded anywhere:** how many agents, what the prompts were, what the self-audit
  actually checked, or how the conflict was eventually noticed. Even the session identities are
  gone.
- **Why it still matters:** it is the origin of Rule 1's *never parallelize a spine*, and it is the
  only failure here whose mechanism is **semantic** rather than operational. Nothing crashed. Both
  runs succeeded. The output was two confident, coherent, mutually exclusive documents — and the
  same-day self-audit ratified both.

**For a researcher:** this is the most interesting failure and the least documented. A study of
agentic failure modes that only counts crashes will miss this class entirely.

### Run 2 — 2026-07-29 · the 76-agent run · `SECONDHAND`

The canonical incident. A status-reconciliation workflow **sized at ~14 agents launched 76.**

| Figure | Value | Source |
|---|---|---|
| Estimated agents | ~14 | `CLAUDE_SUPPLEMENTARY.md:8` |
| Actually launched | **76** (5.4×) | same |
| Died on server overload | **18** (24%), including the sole synthesis agent | same |
| Findings returned by audits | **67**, against an assumed "handful" | same |
| Reported as confirmed | **49** | same |
| Silently dropped, unjudged | **17** | same |
| Wall clock | 109 minutes | same |
| Tokens | 3.16M | same |
| Deliverable | **none** | same |

**Mechanism**, and it is precise: a per-finding verification stage was nested inside a per-document
audit stage. `parallel()` inside a `pipeline()` stage multiplies — outer × inner — so the agent
count became a function of *what the audit discovered* rather than of what was planned
(`CLAUDE_SUPPLEMENTARY.md:22`). The audits found 67 things instead of a handful, and the
multiplication did the rest.

**Second, worse failure.** The result-filter discarded findings whose verifier had died. The run
therefore reported a confident "49 confirmed" while 17 items had been **dropped rather than
judged**. The number looked like an answer.

**The recorded irony**, verbatim from `CLAUDE_SUPPLEMENTARY.md:8`: *"the workflow existed to catch
documents making confident claims about work that hadn't happened, and its own summary did exactly
that."*

**Evidence status:** no journal, no transcripts, no script in this container. The figures above are
testimony. They are specific enough that a journal plainly existed when they were written — the
record says the findings *were* recoverable from it — but that artifact is not reachable now.

### Run 3 — 2026-07-31 · the B-003 application run · `DERIVED`

The control case, and the only failure-free run whose evidence partly survived — **because its
output was committed, not because its journal was.**

- Arithmetic stated before launch: **5 + 1 + 1 = 7** against a cap of 7.
- Fan-out **per artifact**: 47 findings became **5 owners**, not 47 agents.
- Reconciliation: dispatched 7, **returned 7, died 0**.
- Applied 47/47; independent audit re-derived from the diff: **47/47**.
- **Checkable today:** commit `3abc5f4` (the 47 edits), `planning/B003_RECONCILIATION_WORKLIST.md`
  (the worklist that specified them), and the `SESSIONS.md` row. A researcher can re-derive the
  edit count from the diff and compare it to the worklist. That is a real, independent check.

`ADR-008:18` records the caveat honestly: it worked *"under the friendliest possible conditions — a
fresh session, an Opus seat, the doctrine read attentively in the opening turns, a small
well-specified task, and no time pressure. Those are precisely the conditions under which prose
works. The incident happened under the opposite ones."*

### Run 4 — 2026-08-06 · the `F-001` forecast run · `PRIMARY`

The one fully-documented specimen. **Run ID `wf_68ba0468-5c2`.**

| | |
|---|---|
| Shape | 5 read-only mappers → 1 synthesis → 1 adversarial verifier |
| Rule 1a arithmetic | 5 + 1 + 1 = **7**, cap 7, stated in the script before launch |
| Reconciliation | dispatched **7**, returned **7**, dead **0**, empty **0** |
| Wall clock | 27.8 min (1,665,424 ms) |
| Subagent tokens | 808,007 |
| Tool uses | 175 |
| Verdict | SOUND-WITH-FIXES, 7 defects, all corrected pre-publication |

**Per-agent, from `journal.jsonl` (7 `started`, 7 `result`, in dispatch order):**

| Role | Result size | Transcript |
|---|---|---|
| mapper 1 | 34.8 KB | 266 KB |
| mapper 2 | 35.9 KB | 479 KB |
| mapper 3 | 36.1 KB | 281 KB |
| mapper 4 | 34.1 KB | 344 KB |
| mapper 5 | 48.3 KB | 383 KB |
| synthesis | 13.0 KB | 251 KB |
| verifier | 9.6 KB | 324 KB |

Journal 210 KB; transcripts 2.33 MB total. Journal entries are keyed by a `v2:` content hash of
`(prompt, opts)` — which is what makes resume-from-cache work, and which also means **the key
identifies the request, not the role.** Role must be recovered from dispatch order or from the
script.

**Comparison worth drawing.** Run 2 spent 3.16M tokens and 109 minutes and returned nothing. Run 4
spent 808K tokens and 27.8 minutes and returned a verified deliverable — **~4× less of each, for a
result instead of none.** The difference was not model, budget, or luck. It was shape: per artifact,
flat, counted before launch.

## 3. What the record shows across all four

1. **Death rate tracks wave width.** 24% at 76 agents; 0% at 7, twice. Agents dying on server
   overload is normal and must be survivable — the failure was not the deaths, it was the silent
   filtering of their work.
2. **Estimate error is a shape property.** 5.4× when a stage was nested; exact when fan-out was per
   artifact. No run has ever overrun its estimate while fanning out per artifact.
3. **The most expensive failure crashed nothing.** Run 1 completed successfully and produced two
   contradictory truths that survived four months.
4. **Same-day self-audit ratified both halves of Run 1's contradiction**, and Run 2's own summary
   overclaimed. **A run auditing itself has failed twice out of two attempts.** The only audits that
   caught anything were performed by a separate agent under refutation posture.
5. **Verification asymmetry is measurable.** `ADR-008:50`: an unbriefed audit pointed at handoff and
   ledger documents had **19 of 20** findings refuted, because it read dated rows as live status.
   Run 4 briefed all five mappers on that rule before launch, and its verifier reports finding
   **zero** instances of the class. One paragraph of briefing, ~95 percentage points of false-positive
   rate.

## 4. What this record cannot answer

Stated so nobody mistakes absence for evidence:

- **Run 1's agent count, prompts, and detection path.** Unknown and probably unrecoverable.
- **Run 2's 67 findings.** Their content is gone. We know 47 were later confirmed and 20 refuted
  *in the B-003 re-run*, but whether those are the same 67 is not established anywhere.
- **Whether Run 2's 18 deaths were correlated** (one overload window) or spread across the run.
  This matters for whether the cap or the concurrency limit is the operative control, and the record
  does not say.
- **Any token or wall-clock figure for Runs 1 and 3.**
- **Whether the 5.4× overrun would have been survivable** with the same shape at a smaller scale —
  no run has deliberately tested a nested fan-out under the cap.

## 5. The durability defect

Rule 1a states: *"A workflow's return value is not the record — the run journal is. Findings,
verdicts, and ground truth are recoverable from it after a crash."*

That is true, and it is true only inside the life of the container.

**Measured this session:** exactly **one** workflow run directory exists on this machine
(`wf_68ba0468-5c2`). Runs 1–3 left nothing. The journal path lives under the session's project
directory, outside the repository, on a remote container that is reclaimed after inactivity. Nothing
in the repo references it. Nothing copies it.

So the doctrine designates as *the record* an artifact that:

- is not in version control,
- is not mentioned by any file a future session reads,
- and disappears without notice.

Run 3 is the counter-example that shows the fix: **its evidence survived because the work product
was committed.** Nobody preserved its journal either.

**This finding does not rule on what to do about it** (`lore/README.md` rule 4). But the shape of
the cheapest fix is visible from the four rows above: a run that lands in a PR could commit a short
record — run ID, arithmetic, dispatched/returned/dead, per-agent result sizes, verdict, and the
script — which is a few hundred bytes and is exactly the data §2 wishes it had for Runs 1–3. Whether
that is worth a mechanism, a convention, or nothing at all is an `ADR-008`-shaped question and is
not answered here.

## 6. For whoever studies this later

- **Cite by class.** Run 4 is measurement. Run 3 is checkable inference. Run 2 is testimony. Run 1
  is an assertion with a consequence attached.
- **The interesting finding is not the 76.** It is that the two runs which produced *confidently
  wrong output* (Runs 1 and 2) both passed their own self-assessment, and the two that produced
  trustworthy output (Runs 3 and 4) were checked by a separate adversarial pass. Sample size four —
  say so.
- **Reproduction path for Run 4:** the script is recoverable from the session's workflow scripts
  directory, and the journal replays from cache when `(prompt, opts)` are unchanged. Both are
  ephemeral. If this record is to remain checkable, the script belongs in the repo.
- **The honest caveat, carried forward** from the method this run extends: zero variance between
  arms means transcription, not composition. These four runs measure operational failure modes.
  They do not measure whether the agents understood anything.
