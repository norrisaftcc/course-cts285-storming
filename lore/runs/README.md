# lore/runs/ — the run record series

*Established 2026-08-07 by instructor direction. Applies `ADR-011` (`lore/` measures) rather than
amending it — a run record is a measurement, and ADR-011 names `F-###` as **a** series, not the only
permitted one.*

## What this is for

**Cognitive drift detection.** Not archival, not auditing, not scoring.

The instructor's framing governs the design: **more runs is more signal; one run is not
authoritative.** So a record is cheap, short, and comparable — you learn from reading *down* the
index, never from any single row. A record that takes fifteen minutes stops being written, and an
instrument with gaps measures nothing.

> **If a record takes more than five minutes, the schema is wrong. Report that — do not pad the record.**

## What gets a record

One per session that wrote to the repo or produced a measurement. **Not** per PR, not per commit.
The bar is deliberately low.

Filename: `R-YYYY-MM-DD-NN-<slug>.md`.

## The fields

Eleven, all cheap. Target under 25 lines.

| # | Field | Note |
|---|---|---|
| 1 | `run_id` + date | — |
| 2 | **`canon_sha`** | `git rev-parse HEAD` **captured at run start**, plus a dirty flag. Drift is measured *relative to canon*; a SHA recorded at write time silently records the wrong baseline. This is the anchor and the field most likely to be wrong by hand. |
| 3 | `surface + model` | cloud / local / web; Opus / Sonnet |
| 4 | `task` | one line, plus the B-ID or `F-###` it serves |
| 5 | `context_loaded` | the files actually in context (the Rule 3 package). Drift is often a context-composition artifact rather than a model one; without this the records are not comparable. |
| 6 | `withheld` | anything deliberately kept out, or `none` |
| 7 | `agents: dispatched / returned / dead / empty` | mandatory even at `1/1/0/0`, per `lore/README.md` rule 2 |
| 8 | `output` | branch, PR, paths. **Never an adjective.** |
| 9 | **`drift_observed`** | the actual signal. What the run asserted that canon does not say; what it re-decided that was already ruled; which non-negotiable it tripped and where. **"None observed" is a valid entry and is itself data.** |
| 10 | **`records_as_status_errors`** | one integer. The repo's dominant defect class, already baselined: **19 of 20** on 2026-07-29 unbriefed, **0** on 2026-08-06 briefed. Comparable across every run ever taken. |
| 11 | `cost` | wall-clock minutes; tokens if the surface reports them |

## Anti-fields

**No success/fail boolean. No confidence score. No quality rating. No verdict.**

Those are the flattering numbers `F-002` exists to forbid, and a drift instrument that emits one will
be read *instead of* read down.

## Append-only

A record is never edited after its session ends. A run that contradicts an earlier one gets its own
record. This is `planning/SESSIONS.md`'s convention, extended a second time.

## Classroom runs are in scope (2026-08-07)

The corpus is **not** limited to workflow runs. Live class sessions count — the instructor plays
stakeholders jeepform-style and builds missing material live with agents, which is exactly the
condition `ADR-008:18` says prose discipline fails under, and therefore the richest drift signal
available.

The objection to including them was that capturing something mid-scene, in character, is a very
different ask from appending a block to a PR. **That objection is answered by mechanical capture** —
session transcripts are recorded by the instructor's own tooling, so the classroom record costs
nothing during the scene. A classroom run gets the same eleven fields; `context_loaded` becomes the
role card and artifacts in play, and `agents` counts whatever was invoked live.

> **Two things a classroom record must respect, and neither is settled here.** Recordings of a live
> class contain **student voices**, which puts them under the privacy rule — `CLAUDE_SUPPLEMENTARY.md`
> Rule 8 keeps anything touching real students, grades, or privacy with a human. And a transcript of
> an improvised scene is **not** automatically course material: the fictional personas in
> `shared-dataman-artifacts/` are labeled fictional precisely so nothing is mistaken for a record of
> a real person. Promoting anything out of a classroom transcript into `drafts/` is a human call with
> a privacy question attached, and this convention does not authorize it.

## Mechanization

**Not local.** The question of whether any of this should be enforced by a mechanism rather than a
convention was escalated upstream by instructor decision. Locally this is prose and the discipline to
follow it — which `ADR-008` is explicit binds only the agent who was never the problem. That is the
accepted trade, recorded rather than implied.

## Index

Read down the last two columns. Regenerate from the directory, never from this table's own contents.

| Run | Date | `canon_sha` | Task | Drift | Records-as-status |
|---|---|---|---|---|---|
| [`R-2026-08-07-01`](R-2026-08-07-01-state-corrections.md) | 2026-08-07 | `1079aba` | State-truth sweep + F-004 | **Yes** — see record | 0 |
