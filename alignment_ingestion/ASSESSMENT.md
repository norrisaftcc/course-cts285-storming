# Fitness Assessment — `algocratic-26fa-sync.zip`

*Executed 2026-07-29 by a cloud Claude Code session. Package retrieved from Google Drive folder "26 fa intake"; SHA-256 `b9b9ce7299ade31d1932547981716f6a9ff2e1f2463df845bdc558f4d2649ffb`, 97,152 bytes, 22 files. Every verdict below is a diff against the **live working tree at `b937b94`**, not against the package's own baseline.*

## Headline

**The package is not aligned with `main`.** It was built against baseline `ca36b45` — the repo's **fourth** commit. `main` is now **35 commits and 12 merged PRs ahead**. Its own `INSTALL.md` predicted a 4-file delta; the real delta is **7 files**, and **3 of the extra 4 are regressions** that would revert Phase 1 canon.

Following `INSTALL.md` Step 2 verbatim (`cp -R repo/. <target>/`) would silently revert **ADR-004**, the master-plan reconciliation, and PR #26 — with no conflict, no warning, and a clean `git status` that looks plausible. `INSTALL.md` Step 3 does warn ("*If MORE files show modified than these, look at `git diff` before committing*"); this assessment is that check, and it fires.

## Gate summary

| Verdict | Count | Action |
|---|---|---|
| **GO** | 4 | Applied on this branch |
| **NO-GO** | 3 | Rejected — would revert newer work |
| **GO (no-op)** | 15 | Byte-identical to tree; nothing to apply |

## Integrity checks — all pass

| Check | Result |
|---|---|
| SHA256SUMS.txt | 22/22 `OK` |
| Encoding | 100% UTF-8 / US-ASCII — no mojibake (non-negotiable #6) |
| Line endings | No CRLF, no BOM |
| Path safety | No traversal, no absolute paths, no symlinks; all under `repo/` |
| Destructive ops | None — overlay adds/overwrites only; the 6 repo files absent from the package are untouched |

## GO — applied (4)

| File | Change | Why it clears |
|---|---|---|
| `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` | Title + status para: "Proposed" → **ADOPTED**, recording three instructor amendments | Records an instructor decision this repo does not otherwise hold. Amendments (2) and (3) are the source of the PRISM change below — consistent pair. Correctly retains the file as drafting record and cedes precedence to the live instructions. |
| `phase0/PRISM_Course_Mapping.md` | INDIGO–ULTRAVIOLET row gains "higher-ups / C-Suite" + UV-streamer gloss; adds past-GREEN **scope rule** | Pure addition — no tier meaning changed, no exit target touched. Reinforces CLAUDE.md's "CTS-285 exits at ORANGE, CSC-289 at GREEN." Traces to instructor amendments (2)/(3). |
| `CLAUDE_SUPPLEMENTARY.md` | +2 lines under Rule 5: session-ledger discipline, WRITE TOKEN, pull-before/push-after | Pure addition, no deletion. Directly addresses the fork condition that produced this package. Dependency-correct: paired with `SESSIONS.md` in the same commit. |
| `planning/SESSIONS.md` | **NEW** — write ledger | Net-new; no conflict possible. **Amended on install** — see below. |

### Amendment applied to `SESSIONS.md`

Shipped as-is, the ledger records only the first 4 commits and sets `WRITE TOKEN → "pending handoff to local Claude Code for Phase 1."` Accurate at build time; **stale on arrival** — Phase 1 has since run to 12 merged PRs. A next session reading it cold would conclude Phase 1 hadn't started, which is the exact failure this ledger exists to prevent.

Resolved using the ledger's own rule (*"Never rewrite old rows; corrections get their own row"*): the original rows and the 2026-07-29 package row are preserved **verbatim**; a dated correction note and a clearly-labelled **Backfill** block were appended. Backfill rows are reconstructed from `git log ca36b45..b937b94` and are marked as such — provenance is git history, not a session record.

## NO-GO — rejected (3)

### 1. `phase0/NAMING_CANON.md` — reverts ADR-004
Package restores the **single-basis** "Dataman / Datamon disambiguation." Current tree carries the **two-basis** canon (**Dataman** = physical-product spine · **DataMon** = virtual-pet reskin), adopted in `6553704` (PR #20) and refined in `fa1261a` (#16).

The package **does not contain ADR-004 at all** (`grep -rl ADR-004` over the package: no hits), so it cannot know the decision it would overwrite. Overlaying it would:
- delete the `Dataman` ≠ `DataMon` capital-M distinction — the exact `man`/`Mon` search-and-replace hazard the table exists to prevent;
- strip the graded-content note directing quiz items to accept either "Dataman 2.0" or "DataMon 2.0";
- leave `phase0/ADR-004-two-modernization-bases.md` on disk contradicting the canon file that is supposed to encode it.

Per CLAUDE.md non-negotiable #2, naming canon drives **graded quiz keys**. This is a student-facing correctness defect, not a docs nit. **Hard reject.**

### 2. `planning/26FA_Consolidation_Master_Plan.md` — reverts the #14 reconciliation
Package restores the pre-reconciliation plan, undoing `2dcf68e` (PR #19). It would:
- reinstate the **"phantom inventory"** claim (4/6 planning sheets, 7/8 KCs, 5/8 activities "missing") — *disproved* on 2026-07-24 against the ingested `sources/` tree. Reasserting it violates non-negotiable #6 (regenerate inventories from file trees, never from the docs' own claims);
- delete the **ADR-002 / ADR-003** decisions-of-record paragraph;
- delete the DONE status of tasks **0.8, 1.0a, 1.0b**, and the `#14`/`#15`/`#16` cross-references;
- re-size tasks **1.7 and 1.8** from "adapt existing" back to "**author** the 4 missing templates / **author** missing KCs" — dispatching executors to write files that already exist and are already adapted;
- drop ADR-003's graduated stakeholder model (2 canned + 1 rehearsal + 1 live) from the wk3–4 spine row.

This is the plan of record; CLAUDE.md sends every executor here second. **Hard reject.**

### 3. `README.md` — drops PR #26
Package removes the `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` index line, added by PR #26 — merged the same day the package was built, and the current `main` HEAD. Pure loss: the file stays on disk but becomes unindexed. **Reject.**

## GO (no-op) — byte-identical, nothing to apply (15)

`CLAUDE.md` · `phase0/ADR-001-csc289-team-based.md` · `phase0/CTS285_Canonical_Points_Table.md` · `phase0/KAYFABE_ARCHITECTURE.md` · `phase0/QM_Retirement_Note.md` · `phase0/SHODANN_Character_Bible.md` · `planning/ASSESSMENT_NOTES.md` · `reference/PRISM.html` · `reference/voice-canon/{README, Assignment_Translation_Guide, GREY_Clearance_Briefing, New_Creator_Orientation_Guide, RED_Underground_Survival_Guide, Visual_Style_Guide, worldbuilding_guide}.md`

Confirms the points table (750) and the SHODANN bible are unchanged across the fork — the two highest-risk canon files were never in contention.

## Coverage gap — not a defect, worth recording

The package is a **partial** worktree. Six tracked files and three whole trees exist on `main` but not in it:

`phase0/ADR-002` · `phase0/ADR-003` · `phase0/ADR-004` · `phase0/ADR-005` · `planning/INGESTION_MANIFEST.md` · `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` · `sources/` · `drafts/` · `reference/dataman/`

Because the install is an overlay, none are deleted. But it means the package's snapshot of "the session's complete worktree" is complete only for its own baseline — a second reason its `NAMING_CANON` and master-plan versions must not be trusted over the tree's.

## Defect in `INSTALL.md` itself

Line 6 reads "*Nineteen are identical … **three** carry the pending changes*" and then enumerates **four** items. The prose count is wrong; the enumeration is right. Against current `main` both are wrong anyway (15 identical, 7 changed).

## Follow-up — resolved

The adopted instructor amendment (1) — the Trusted Workflow gloss *"[Our Workflow is Trusted, because it has been Verified. Thank you for your cooperation.]"* — is declared canon in `PROJECT_INSTRUCTIONS_PROPOSED.md` but has no counterpart in `phase0/NAMING_CANON.md` §"Workflow canon", where executors and quiz keys read from. Amendments (2) and (3) landed in `PRISM_Course_Mapping.md`; (1) did not.

> **Instructor ruling (2026-07-29):** *"Trusted Workflow is fine as is; we added the verified part to avoid drift but we're managing drift more directly now."* **No canon change required** — `NAMING_CANON.md` §Workflow canon stands unmodified, and the gloss remains flavour text in the live project instructions rather than graded canon. Closed; no downstream task.

## Side effects on the backlog

- **B-001 item 5** ("Apply or reject `PROJECT_INSTRUCTIONS_PROPOSED.md` in the external project settings") is **closed** — the file now records ADOPTED with a dated instructor amendment set. One of the five P0 human decisions is resolved.
- **B-003** ("Reconcile the master plan, root README, source README and old handoff notes with accepted ADRs and completed work") is **partially advanced**: `SESSIONS.md` now carries the Phase 1 record, and the two NO-GO rejections prevented the reconciliation from being undone. The remaining B-003 surface (`sources/README.md` still calling `sources/` an empty scaffold; stale handoff notes) is untouched.

## Disposition of this folder

`alignment_ingestion/` retains the unpacked package as the audit trail for these verdicts, mirroring how `sources/` pins provenance. It is staging, not course material — safe to delete once this PR is merged.
