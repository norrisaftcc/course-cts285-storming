# F-003 — The failing-agent runs: evidence inventory

**Recorded:** 2026-08-06 · **Purpose:** an audit trail for a later researcher
**State:** four runs on record. **One has primary evidence, and it is stored somewhere ephemeral.**
**Rules:** dated record (non-negotiable #8); counts re-derived where possible, labelled by evidence
class where not (#6).

> **Trimmed by instruction, 2026-08-06.** This document was first filed with a full per-run forensic
> reconstruction. It was cut to the translation frame — the comparable shape, the evidence classes,
> and the durability defect — on the reasoning that the long form is not lost, only one step back in
> the trail. **The untrimmed reconstruction is commit `563b6df`**, and a researcher who wants Run 2's
> full figure table or Run 4's per-agent breakdown should read it there. Nothing was deleted; it was
> moved from the file into the history.

## 0. The headline

**Three of the four runs on record cannot be independently checked.** Their numbers survive only as
prose written by the sessions that ran them.

That is not a reason to discard those numbers — they are specific, internally consistent, and were
plainly derived from evidence that existed at the time. It is a reason to *label* them. A researcher
should treat the 2026-07-29 figures the way a historian treats a single-source chronicle: probably
accurate, not verifiable, never to be re-reported as measurement.

## 1. Evidence classes

| Class | Meaning | Checkable? |
|---|---|---|
| `PRIMARY` | Machine-generated artifact still on disk or in version control | Yes, directly |
| `DERIVED` | Work product in git whose shape confirms the claim indirectly | Yes, by inspecting the diff |
| `SECONDHAND` | Prose by the session that ran it; source artifact gone | **No.** Cite as testimony |
| `ABSENT` | Asserted with no surviving detail at all | No |

## 2. The four runs

| Date | Run | Class | Est. | Launched | Died | Outcome | Where the evidence is |
|---|---|---|---|---|---|---|---|
| 2026-03-13 | Parallel spine generation | `ABSENT` | — | 2 sessions | 0 | **Two incompatible CSC-289 architectures**, self-audited the same day, undetected for 4 months | `ADR-001`, `CLAUDE_SUPPLEMENTARY.md:6` — prose only; agent count, prompts, and detection path unrecorded anywhere |
| 2026-07-29 | Status reconciliation | `SECONDHAND` | ~14 | **76** (5.4×) | 18 (24%) | **No deliverable.** 109 min, 3.16M tokens. Reported "49 confirmed" while **17 findings went unjudged** | `CLAUDE_SUPPLEMENTARY.md:8`, `ADR-008:16` — no journal, transcripts, or script survive |
| 2026-07-31 | B-003 application | `DERIVED` | 7 | 7 | 0 | 47/47 applied; independent audit re-derived 47/47 | Commit `3abc5f4` + `B003_RECONCILIATION_WORKLIST.md` — **the edit count is re-derivable from the diff** |
| 2026-08-06 | `F-001` forecast | `PRIMARY` | 7 | 7 | 0 | Verdict returned; 7 defects caught pre-publication. 27.8 min, 808k tokens | Run `wf_68ba0468-5c2` — 210 KB journal, 7 transcripts (2.33 MB). **Ephemeral path; see §4** |

**Mechanisms, one line each.** Run 1 failed *semantically*: nothing crashed, both runs succeeded, and
the output was two confident and mutually exclusive documents. Run 2 failed *structurally*: a
per-finding stage nested inside a per-document stage multiplies (`parallel()` inside `pipeline()`),
so the count became a function of what the audit discovered — 67 findings instead of a handful —
and then the result-filter discarded findings whose verifier had died. Runs 3 and 4 fanned out per
artifact, flat, counted before launch.

The recorded irony, verbatim from `CLAUDE_SUPPLEMENTARY.md:8`: *"the workflow existed to catch
documents making confident claims about work that hadn't happened, and its own summary did exactly
that."*

## 3. What the four rows show together

1. **Death rate tracks wave width.** 24% at 76 agents; 0% at 7, twice. Deaths are normal and must be
   survivable — the failure was never the dying, it was the silent filtering of dead agents' work.
2. **Estimate error is a shape property, not an ambition problem.** 5.4× when a stage was nested;
   exact when fan-out was per artifact. No run has ever overrun while fanning out per artifact.
3. **The most expensive failure crashed nothing.** Run 1 completed successfully and produced two
   contradictory truths that survived four months. A study of agentic failure that counts only
   crashes misses this class entirely.
4. **A run auditing itself has failed 2 of 2.** Run 1's same-day self-audit ratified both halves of
   its own contradiction; Run 2's own summary overclaimed. Both runs checked by a *separate* agent
   under refutation posture held.
5. **Verification asymmetry is measurable and cheap to fix.** `ADR-008:50`: an unbriefed audit
   pointed at handoff and ledger documents had **19 of 20** findings refuted, having read dated rows
   as live status. Run 4 briefed all five mappers on that rule before launch; its verifier reports
   **zero** instances. One paragraph of briefing.

## 4. The durability defect

Rule 1a states: *"A workflow's return value is not the record — the run journal is. Findings,
verdicts, and ground truth are recoverable from it after a crash."*

True — and true only inside the life of the container.

**Measured this session:** exactly **one** workflow run directory exists on this machine. Runs 1–3
left nothing. The journal path sits under the session's project directory, outside the repository,
on a remote container reclaimed after inactivity. No file in the repo references it. Nothing copies
it.

So the doctrine designates as *the record* an artifact that is not in version control, is named by
no file a future session reads, and disappears without notice.

**Run 3 is the counter-example that shows the fix:** its evidence survived because the *work product*
was committed. Nobody preserved its journal either. By the same mechanism, this document's own long
form survives at `563b6df` — the trail holds what the file no longer carries.

This finding **does not rule** on what to do (`lore/README.md` rule 4). The cheapest fix is visible
from the table in §2: a run that lands in a PR could commit a short record — run ID, pre-launch
arithmetic, dispatched/returned/dead, verdict, script — which is a few hundred bytes and is exactly
the data §2 lacks for three of its four rows. Whether that deserves a mechanism, a convention, or
nothing is an `ADR-008`-shaped question.

## 5. What this record cannot answer

Stated so nobody mistakes absence for evidence.

- **Run 1's agent count, prompts, and detection path.** Unknown, probably unrecoverable.
- **Run 2's 67 findings.** Content gone. B-003 later confirmed 47 and refuted 20, but whether those
  are the same 67 is established nowhere.
- **Whether Run 2's 18 deaths were correlated** (one overload window) or spread. This decides
  whether the cap or the concurrency limit is the operative control, and the record is silent.
- **Any token or wall-clock figure for Runs 1 and 3.**
- **Whether a nested fan-out would be survivable under the cap.** No run has deliberately tested it.

## 6. For whoever studies this later

- **Cite by class.** Run 4 is measurement. Run 3 is checkable inference. Run 2 is testimony. Run 1
  is an assertion with a consequence attached.
- **The interesting result is not the 76.** It is that both runs which produced confidently wrong
  output passed their own self-assessment, and both runs checked by a separate adversarial pass held.
  Sample size four — say so.
- **Reproduction for Run 4:** the script replays from cache when `(prompt, opts)` are unchanged;
  journal keys are `v2:` content hashes of exactly that pair, so the key identifies the *request*,
  not the role. Role must be recovered from dispatch order or the script. Both artifacts are
  ephemeral — if this is to stay checkable, the script belongs in the repo.
- **The caveat this method carries forward:** zero variance between arms means transcription, not
  composition. These four runs measure operational failure modes. They do not measure whether any
  agent understood anything.
