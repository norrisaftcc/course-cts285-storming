# B-003 — Status Reconciliation Worklist

*Produced 2026-07-29. Findings come from a 5-document audit against ground truth regenerated from the file tree and `git log` — never from any document's own claims (CLAUDE.md non-negotiable #6). Every finding was then put to an adversarial verifier prompted to refute it. This document lists only what survived.*

> **APPLIED 2026-07-29.** All 47 confirmed edits landed: 44 across the six planning/canon documents
> (`7660cbf`) and the 3-part atomic `WIRING_MANIFEST.md` change. Every claim was re-verified against
> the tree and `git log` at application time rather than taken from this list on faith — two figures
> were adapted as a result (`phase0` is 13 files, not the 12 counted before ADR-007 existed). The 20
> refuted findings were not applied. The 4 out-of-scope items below remain open and unowned by B-003.
> This list is retained as the record; corrections get their own row.

## Verdict against B-003's acceptance criteria

B-003 is done when **(1)** *"Status text matches the tree and Git history"* and **(2)** *"Resolved blockers do not appear as open."*

**Both are achievable by working this list.** No finding is blocked on an instructor decision, and no edit requires a fact the repo does not already hold. Criterion 2 is carried mainly by the `CLAUDE.md` and master-plan edits, which are the two documents still describing ADR-004/ADR-005-resolved questions as open.

One caveat on scope: this audit covered six documents. It did **not** sweep `drafts/cts285/**` assignments, knowledge checks, or rubrics — so "status text matches the tree" is established for the planning and canon layer only. Two defects found *outside* the target set are recorded under Out of Scope rather than silently folded in.

## Provenance and confidence

| | |
|---|---|
| Findings raised | 67 |
| **Confirmed — this worklist** | **47** |
| Refuted by adversarial verification | 20 |
| Ground-truth facts established | 76 |
| Documents audited | 6 |

The 30% refutation rate is not noise, and the pattern in it matters: **19 of the 20 refutations were findings raised against dated historical records** — session handoffs, a completed sweep's ledger, a wiring manifest. The audit read records as live status. Where those refutations are load-bearing they are listed in §Refuted, so the next session does not re-raise them.

Severity across the 47: **misdirects-work** means an executor acting on the text would do wrong or duplicate work. That is the class worth fixing first; cosmetic wording is not worth a commit on its own.

## How to apply this

1. **Match by snippet, not line number.** Applying an edit shifts every later line in the same file. Locators give line numbers *and* quoted text — trust the text.
2. **Preserve deliberate history.** Provenance headers (`<!-- SOURCE: ../csc_dash/... -->`), dated log rows, and superseded entries kept on purpose are not defects. Per `planning/SESSIONS.md`: *"Never rewrite old rows; corrections get their own row."*
3. **csc_dash is copy-from-only.** `sources/` is the frozen 0.8 snapshot (251 files) and is the only thing adapt-time work reads. Do not re-point any document at the live sibling tree.
4. **Leave ADR-006 deferred.** `grep -rn "PATHFORM: pending spine ruling"` must still return exactly 3 sites afterward.

## `planning/26FA_Consolidation_Master_Plan.md`

*22 edits — 15 misdirects-work · 6 factually-stale · 1 cosmetic*


### 1. **MISDIRECTS WORK** — line 112 — `| 1.7 | **Verify + re-anchor** the 6 planning-sheet templates`

**Currently asserts:** Task 1.7 is listed in the Phase 1 table with no status marker, unlike 1.0a/1.0b which carry "✅ DONE": "| 1.7 | **Verify + re-anchor** the 6 planning-sheet templates — they **exist with real content** (the 'missing' claim was false); reconcile the literal-path refs and re-point to Dataman (#5) | Sonnet | S |"

**Reality:** 1.7 has SHIPPED and merged. All 6 templates plus a wiring manifest exist at drafts/cts285/planning-sheets/ (Daily_Standup, Exit_Ticket, Risk_Register, Sprint_Planning, Sprint_Retrospective, User_Story + WIRING_MANIFEST.md). WIRING_MANIFEST.md line 1-3 self-identifies: "Produced by issue #5 (task 1.7 REVISED)". The work landed under the `task/1.5` commit label on branch task/phase1-5-planning-sheets-verify: e560934, ddfeb01, d00fb1e, merged as PR #25 (499c15e), then moved from drafts/CTS-285/ to drafts/cts285/ by 20c284f (B-002). The "literal-path refs" half is deliberately unfinished: refs carry `<!-- PATHFORM: pending spine ruling -->` per ADR-006, which is Proposed/unruled. An executor reading this row will re-author six templates that already exist.

**Replace with:**

> | 1.7 | **Verify + re-anchor** the 6 planning-sheet templates — ✅ DONE (#5 / PR #25, shipped under the `task/1.5` commit label): all 6 live at `drafts/cts285/planning-sheets/`, re-pointed to Dataman, plus `WIRING_MANIFEST.md` keyed by owning file. Path refs are deliberately left as `<!-- PATHFORM: pending spine ruling -->` per **ADR-006** — an open ruling, not an omission | Sonnet | S |


### 2. **MISDIRECTS WORK** — line 110 — `| 1.5 | Wk5–10 Dataman swaps + Wk6 dedupe...`

**Currently asserts:** "| 1.5 | Wk5–10 Dataman swaps + Wk6 dedupe + Wk9–10 expansion + ADR formalization | Sonnet ×3 | M |" — no status marker, reads as wholly pending.

**Reality:** Partially shipped. Week_05 re-anchored by ae2f0e2 (PR #23, 7c96f3c) and Week_07 by abedb46 (PR #24, 372efc7), both merged 2026-07-24; grep confirms 19 and 9 "Dataman" hits in those two drafts. Week_06 and Week_09 drafts contain ZERO Dataman references and have only ever been touched by the 1.0b points sweep (c419d4d) — the Wk6 dedupe, Wk9–10 expansion and ADR formalization are genuinely unstarted. Also, the "Wk5–10" span is unachievable as written: neither drafts/ nor sources/uv-285/assignments/ contains a Week_08 or Week_10 file — the corpus gap is in the source, not the adaptation.

**Replace with:**

> | 1.5 | Wk5–10 Dataman swaps + Wk6 dedupe + Wk9–10 expansion + ADR formalization — ⚠ PARTIAL: ✅ Wk05 (PR #23, `ae2f0e2`) and Wk07 (PR #24, `abedb46`) re-anchored. **Still open:** Wk06 dedupe and Wk09 expansion + ADR formalization (both drafts still have zero Dataman content). **NB:** the real span is Wks 05/06/07/09 — `sources/uv-285/assignments/` has no Week_08 or Week_10 file to adapt | Sonnet ×3 | M |


### 3. **MISDIRECTS WORK** — line 113 — `| 1.8 | **Adapt existing** M2–M6 knowledge checks`

**Currently asserts:** "| 1.8 | **Adapt existing** M2–M6 knowledge checks (8 KCs exist, ~10–12 KB ea — re-point to Dataman; normalize points to graded-@10 per 0.1/ADR-002) + remaining activity handouts (interview transcripts ✅ done in 1.0a; author leftover checklists/role cards) | Sonnet ×2 | M |" — the KC half carries no DONE marker.

**Reality:** The KC half SHIPPED: commit e9ac163 "1.8 (KC half): adapt M2-M6 knowledge checks to the Dataman regime" added exactly 5 files, drafts/cts285/knowledge-checks/Module_02..Module_06_Knowledge_Check.md, merged as PR #21 (c0295e4). Module_01/07/08 KCs exist in sources/uv-285/knowledge-checks/ but were deliberately not adapted — ADR-002 retired the M1/M7/M8 knowledge-check question as a needs-instructor gap. The activity-handout half (checklists/role cards) is genuinely still open.

**Replace with:**

> | 1.8 | **Adapt existing** M2–M6 knowledge checks — ✅ KC HALF DONE (PR #21, `e9ac163`): 5 files at `drafts/cts285/knowledge-checks/` (M02–M06), re-pointed to Dataman and normalized per 0.1/ADR-002. M1/M7/M8 stay unadapted — **ADR-002** retired that gap. **Still open:** remaining activity handouts (interview transcripts ✅ done in 1.0a; leftover checklists/role cards unauthored) | Sonnet ×2 | M |


### 4. **MISDIRECTS WORK** — line 109 — `| 1.4 | Re-anchor Wk3–4 to Dataman; fix rubric/header point conflicts from 0.1 |`

**Currently asserts:** "| 1.4 | Re-anchor Wk3–4 to Dataman; fix rubric/header point conflicts from 0.1 | Sonnet ×2 | M |" — no status marker, reads as pending.

**Reality:** 1.4 SHIPPED: commit fec3526 "1.4: re-anchor M2 assignments (Week_03, Week_04) to Dataman" modified both drafts, merged as PR #22 (c0f2ca6) on 2026-07-24. Separately, ADR-003 line 58 delegates "authoring the **rehearsal role card** ... and the **live client brief**" to tasks 1.3/1.4 — grep for "rehearsal"/"role card" in Week_03 and Week_04 returns nothing, so 1.4 shipped without that deliverable and it now has no owner unless 1.3 picks it up. Note also that "fix rubric/header point conflicts" is partly void: ADR-002 rules sub-items descriptive and not required to sum.

**Replace with:**

> | 1.4 | Re-anchor Wk3–4 to Dataman — ✅ DONE (PR #22, `fec3526`): Weeks 03 + 04 re-anchored; header points already normalized by 1.0b and, per **ADR-002**, sub-item rubrics need no reconciliation. **Still open:** ADR-003's rehearsal role card + live client brief were *not* authored in this pass — they carry to **1.3** | Sonnet ×2 | M |


### 5. **MISDIRECTS WORK** — line 99 — `**Decisions of record raised during Phase 1 execution** (now folded in): **ADR-002** ... delegated to 1.4.`

**Currently asserts:** The decisions-of-record paragraph stops at ADR-003 and states "**ADR-003 (instructor-as-client)** authoring of the rehearsal role-card + live client brief is delegated to 1.4."

**Reality:** Three further ADRs have been accepted or raised since and appear NOWHERE in this plan (grep "ADR-0" returns only ADR-001/002/003): ADR-004 (Accepted 2026-07-24, two modernization bases, "Resolves: #16"), ADR-005 (Accepted 2026-07-24, prerequisite baseline, "Resolves: #9"), ADR-006 (Proposed 2026-07-29, course-repo PATHFORM, blocks graduation of student-facing material). ADR-004 and ADR-005 override statements still live in this plan (lines 96, 161, 194). Also, ADR-003 line 58 delegates the role card to "Tasks 1.3/1.4", not 1.4 alone — and 1.4 has already shipped (PR #22) without it.

**Replace with:**

> **Decisions of record raised during Phase 1 execution** (now folded in): **ADR-002** — points bind at the assignment-header level; rubric sub-items are *descriptive*, not required to sum; 40/40/20 is a course-level philosophy (refines 0.1). **ADR-003** — graduated wk3–4 stakeholder model (2 canned + 1 rehearsal + 1 live); preserves *and extends* RSI; authoring of the rehearsal role card + live client brief is delegated to **1.3/1.4** — 1.4 shipped without it, so it now sits with **1.3**. **ADR-004** (2026-07-24) — two modernization bases, student choice of **Dataman** (physical) or **DataMon** (reskin); instructor exemplars use Dataman; closes #16. **ADR-005** (2026-07-24) — 26FA prerequisite baseline is a GitHub account + working Python, *not* CSC-113/114; closes #9 and unblocks wk-1 sizing (1.1/1.2). **ADR-006** (2026-07-29) — course-repo PATHFORM is **Proposed and unruled**; every student-facing path reference carries `<!-- PATHFORM: pending spine ruling -->` and nothing graduates to a course repo until it is ruled.


### 6. **MISDIRECTS WORK** — line 96 — `| 0.7 | *Human tasks:* renegotiate GRD calendar with Jennifer Fisher ...`

**Currently asserts:** Task 0.7 still lists as an open human task: "confirm Dataman PDF manual availability/rights" and "decide what 26FA students arrive knowing (CSC-113/114 prerequisite reality — the pipelines disagree and it sizes Week 1)".

**Reality:** The prerequisite question is RULED: phase0/ADR-005-prerequisite-baseline.md is "Status: Accepted — 2026-07-24" (instructor ruling), "Resolves: #9", "Closes #9; unblocks wk-1 content sizing (tasks 1.1/1.2)"; GitHub issue #9 is CLOSED. The manual *availability* half is also settled: reference/dataman/historical/DataMan_US.pdf (7,965,130 bytes) plus a 348-line faithful transcript at reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md are in-tree (PR #12). Only the *rights* half remains open — no dated distribution-rights record exists anywhere in the tree.

**Replace with:**

> | 0.7 | *Human tasks:* renegotiate GRD calendar with Jennifer Fisher (fall consults replace wk-6 first contact; define GRD-side deliverables; schedule the canned-brand-kit fallback build, not just note it); confirm **distribution rights** for the Dataman PDF manual — the document itself is in hand (`reference/dataman/historical/DataMan_US.pdf` + a 348-line faithful transcript), only the rights record is missing; brief Angela on audit retirement + in-house quality process timing; **tell us which of the two Mar-13 CSC-289 dev-phase designs actually ran in Spring 2026 and what broke** — that field data exists nowhere in the repos. ~~decide what 26FA students arrive knowing~~ → **✅ ruled by ADR-005** (2026-07-24, closes #9): GitHub account + working Python assumed; CSC-113/114 completion not assumed | you | Fleet cannot do these |


### 7. **MISDIRECTS WORK** — line 194 — `**NB:** a 2026 Datamon virtual-pet *reskin exemplar* now exists as a spike — adopting it ... is a pending `needs-instructor` call (NAMING_CANON + #16).`

**Currently asserts:** "**NB:** a 2026 Datamon virtual-pet *reskin exemplar* now exists as a spike — adopting it as the stretch-epic framing is a pending `needs-instructor` call (NAMING_CANON + #16)."

**Reality:** Decided. phase0/ADR-004-two-modernization-bases.md is "Status: Accepted — 2026-07-24 (instructor ruling)" and states "Resolves: #16 (Datamon reskin adoption)"; GitHub issue #16 is CLOSED; phase0/NAMING_CANON.md lines 18-31 already carry the two-basis table. The ruling is also stronger than this line anticipates: DataMon was adopted as a first-class *alternative student basis*, not merely as stretch-epic framing.

**Replace with:**

> | Wk 2 | **Legacy Datamon *game* features become stretch-goal epics in the seeded Dataman backlog** — the name collision converted into deliberate in-world homage; survival-guide [GITGD] excerpt as underground reading. **NB:** ~~pending `needs-instructor` call~~ → **ruled by ADR-004** (2026-07-24, closes #16): the 2026 virtual-pet reskin is adopted as **DataMon**, a first-class *alternative student basis*, not just a stretch-epic framing. The stretch epics stand for students on the Dataman basis. |


### 8. **MISDIRECTS WORK** — line 148 — `| 5.3 | **Link-checker agent:** every file path referenced in any student-facing doc must exist; every points figure must match the 0.1 table | Sonnet | M |`

**Currently asserts:** "**Link-checker agent:** every file path referenced in any student-facing doc must exist; every points figure must match the 0.1 table"

**Reality:** Both halves now collide with accepted/proposed decisions the plan never records. (a) ADR-006 (Proposed 2026-07-29) deliberately leaves 3 student-facing path references unresolved behind `<!-- PATHFORM: pending spine ruling -->` (Week_05 ×2 at lines 68 and 383, Week_06 ×1 at line 36) — a link-checker run under this instruction would "fix" placeholders that ADR-006 forbids resolving, and would reintroduce an invented course-repo prefix. (b) ADR-002 §2 rules sub-items descriptive and NOT required to sum to the header, so "every points figure must match" must be scoped to headers only.

**Replace with:**

> | 5.3 | **Link-checker agent:** every file path referenced in any student-facing doc must exist; every points figure must match the 0.1 table **at the assignment-header level only** (**ADR-002** — sub-items are descriptive; do not "reconcile" them). **Exempt from the path check:** the `<!-- PATHFORM: pending spine ruling -->` placeholders (3 sites — Week_05 ×2, Week_06 ×1) are deliberate per **ADR-006**; report them, never resolve them, and never invent a course-repo prefix | Sonnet | M |


### 9. **MISDIRECTS WORK** — line 210 — `3. **The snapshot is not the repo.** Aligned briefs (BudgetBossAligned etc.) ... clone before executors touch the alignment cluster`

**Currently asserts:** "**The snapshot is not the repo.** Aligned briefs (BudgetBossAligned etc.) and live issue/PR state exist only in `norrisaftcc/course-cts285-template` on GitHub — clone before executors touch the alignment cluster, or they'll recreate existing work."

**Reality:** Task 0.8 (PR #10, commit 9e69e97) ingested 250 curated files into sources/ — 164 legacy, 54 uv-285, 32 uv-289 — and the entire alignment cluster is now in-tree at sources/legacy/26SP_Planning/, including BudgetBossAligned_base.md and BudgetBossAligned_technical.md under GRD_CreativeBriefs/FinancialTracker/. Only live issue/PR state still requires GitHub. As written, this item sends executors to clone a repo whose content they already have — the exact "recreate existing work" failure it warns about.

**Replace with:**

> 3. **The snapshot is not the repo — but the curated snapshot now *is* in-tree.** Task 0.8 (PR #10) pinned 250 files into `sources/` (`sources/legacy` 164, `sources/uv-285` 54, `sources/uv-289` 32), including the whole alignment cluster at `sources/legacy/26SP_Planning/`. Read `sources/` first; only live issue/PR state still requires `norrisaftcc/course-cts285-template`. Executors who re-clone to "find" the alignment cluster will recreate existing work.


### 10. **MISDIRECTS WORK** — line 162 — `5. **Aligned briefs live only in the GitHub repo** (BudgetBossAligned etc., absent from snapshots reviewed)`

**Currently asserts:** "**Aligned briefs live only in the GitHub repo** (BudgetBossAligned etc., absent from snapshots reviewed) — verify their state before wk-14 skin-selection materials reference them."

**Reality:** They are in-tree. find over sources/ returns BudgetBossAligned_base.md, BudgetBossAligned_technical.md, StudyStreamAligned_base/_technical, EventFlowAligned, FamilyHubAligned, RenovateRightAligned_base/_technical, LetsEatAligned, BookmarkAligned, RideAligned and more under sources/legacy/26SP_Planning/GRD_CreativeBriefs/, plus CommerceTrackingAligned.md and RecommendationEngineAligned.md under CTS_ProjectBriefs/. Per planning/INGESTION_MANIFEST.md the residual problem is content quality, not availability: those briefs carry retired terms ("Sacred Flow", 26 "citizen" instances in RecommendationEngineAligned).

**Replace with:**

> 5. **~~Aligned briefs live only in the GitHub repo~~ → ingested (0.8).** The aligned briefs (BudgetBossAligned, StudyStreamAligned, EventFlowAligned, RenovateRightAligned, CommerceTrackingAligned, …) are pinned in-tree at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` and `.../CTS_ProjectBriefs/`. Residual risk is content, not availability: per `INGESTION_MANIFEST.md` they carry retired terms ("Sacred Flow", "citizen") and need a skin pass before wk-14 skin-selection materials reference them.


### 11. **MISDIRECTS WORK** — line 161 — `4. **Datamon disambiguation** — legacy wk-5 console game vs 26FA modernization spine`

**Currently asserts:** "**Datamon disambiguation** — legacy wk-5 console game vs 26FA modernization spine; every executor prompt must carry the distinction or agents will cross-contaminate."

**Reality:** ADR-004 (Accepted 2026-07-24) replaced this one-basis framing: the two live terms are **Dataman** (1977 physical calculator → "Dataman 2.0") and **DataMon** (virtual-pet reskin → "DataMon 2.0"), both first-class student bases, with exemplars on Dataman. phase0/NAMING_CANON.md line 28 states "the two live terms are **Dataman** and **DataMon** (not the old lowercase \"Datamon\")" and ADR-004 line 32 subsumes the legacy game as DataMon's historical origin, "not maintained as a separate live term". An executor briefed from this line will encode the retired lowercase form into student material and quiz keys.

**Replace with:**

> 4. **Dataman / DataMon disambiguation** — per **ADR-004** these are *two live student bases*: **Dataman** (1977 physical calculator → "Dataman 2.0") and **DataMon** (virtual-pet reskin → "DataMon 2.0"); instructor-provided exemplars use Dataman. The old lowercase "Datamon (legacy wk-5 console game)" is subsumed as DataMon's historical origin and is **not** a live term. Every executor prompt must carry the capital-M distinction or agents will cross-contaminate — quiz keys encode it.


### 12. **MISDIRECTS WORK** — line 219 — `12. **The project's custom instructions are stale and load-bearing** ... highest-leverage single edit remaining.`

**Currently asserts:** "**The project's custom instructions are stale and load-bearing** — they still pitch the startup skin and old ladder to every session. Human edit required (Claude can't modify project instructions); highest-leverage single edit remaining."

**Reality:** The replacement text exists and is marked adopted: planning/PROJECT_INSTRUCTIONS_PROPOSED.md lines 1-2 read "July 2026 rewrite — ADOPTED" / "adopted with instructor amendments — the live project instructions are the canonical text". Caveat worth preserving: that is an in-repo document claim; nothing in the tree or git history independently verifies the external Claude-project settings were updated (the only corroboration, alignment_ingestion/ASSESSMENT.md:95, is another self-claim). Left as-is, an executor re-drafts instructions that have already been written and signed off.

**Replace with:**

> 12. **~~The project's custom instructions are stale and load-bearing~~ → rewritten and marked ADOPTED.** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` now reads "July 2026 rewrite — ADOPTED … the live project instructions are the canonical text." Do **not** re-draft it. *Caveat:* adoption is an in-repo document claim — nothing in the tree or git history verifies the text was pasted into the external project settings. Verify there, then close the item.


### 13. **MISDIRECTS WORK** — line 147 — `| 5.2 | Project hygiene: ... **update project custom instructions** (Media skin, PRISM, current spine); upload SHODANN bible + this plan |`

**Currently asserts:** Task 5.2 still carries "**update project custom instructions** (Media skin, PRISM, current spine)" as unwritten work.

**Reality:** The updated instruction text has already been authored and marked adopted at planning/PROJECT_INSTRUCTIONS_PROPOSED.md ("July 2026 rewrite — ADOPTED"; "adopted with instructor amendments — the live project instructions are the canonical text"). What remains is at most the external paste, which no in-repo evidence confirms either way. As written, 5.2 tells a Sonnet executor to compose a document that exists.

**Replace with:**

> | 5.2 | Project hygiene: prune 10 duplicate docs; mark HISTORICAL docs; **paste the ADOPTED `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` text into the external project settings** if not already done — the text is written and signed off, do not re-draft it; upload SHODANN bible + this plan | Sonnet | S |


### 14. **MISDIRECTS WORK** — line 85 — `**Every writing task's context package = the 7-doc voice canon + PRISM + this plan's spine tables.**`

**Currently asserts:** "**Every writing task's context package = the 7-doc voice canon + PRISM + this plan's spine tables.**"

**Reality:** Only six voice-canon docs were exported into the repo: reference/voice-canon/ holds New_Creator_Orientation_Guide.md, worldbuilding_guide.md, GREY_Clearance_Briefing.md, Assignment_Translation_Guide.md, RED_Underground_Survival_Guide.md, Visual_Style_Guide.md (+ README.md index and ../PRISM.html). The seventh item enumerated at line 47, the Hermeneutic Codex, exists nowhere in the tree — grep -rl "hermeneutic" returns only this master plan and its copy under alignment_ingestion/. An executor assembling the stated package will hunt a file that was never exported.

**Replace with:**

> Phases are ordered by dependency; within a phase, tasks fan out in parallel. **Every writing task's context package = the 6-doc voice canon in `reference/voice-canon/` + `reference/PRISM.html` + this plan's spine tables.** Sonnet = mechanical/derivational; Opus = voice-sensitive, structural, or net-new.


### 15. **MISDIRECTS WORK** — line 14 — `| CTS-285 spine | **Dataman/Datamon modernization is THE solo spine, weeks 1–12** ...`

**Currently asserts:** "**Dataman/Datamon modernization is THE solo spine, weeks 1–12** (full SDLC, common project, grouped presentations of same at the end)."

**Reality:** This Decisions-Locked row predates ADR-004 (Accepted 2026-07-24), which rules two modernization bases with student choice — Dataman (physical calculator) or DataMon (virtual-pet reskin, capital M) — with instructor-provided exemplars on Dataman. The slashed lowercase "Dataman/Datamon" reads as one project with two spellings, which is exactly the conflation NAMING_CANON.md:28 forbids, and it omits the student-choice rule that §2's spine tables and the canonical points table also still miss.

**Replace with:**

> | CTS-285 spine | **Modernization of the student's chosen base is THE solo spine, weeks 1–12** (full SDLC, common project, grouped presentations of same at the end). Per **ADR-004** the two bases are **Dataman** (1977 physical calculator) and **DataMon** (virtual-pet reskin); instructor-provided exemplars use Dataman, and any item written single-basis must accept either "Dataman 2.0" or "DataMon 2.0". Weeks 13–16 = CSC-289 on-ramp: group formation, GREY design consults, user stories + wireframes for the Spring product. |


### 16. factually stale — line 26 — `- **Naming collision:** legacy "Datamon" is a week-5 creature-collection console game; 26FA "Dataman" is the modernization spine project.`

**Currently asserts:** "**Naming collision:** legacy \"Datamon\" is a week-5 creature-collection console game; 26FA \"Dataman\" is the modernization spine project. Every executor prompt must disambiguate."

**Reality:** ADR-004 line 32 explicitly subsumes the lowercase legacy "Datamon" as DataMon's historical origin and states it is "not maintained as a separate live term"; NAMING_CANON.md:28 confirms the two live terms are Dataman and DataMon. The situation is no longer a collision between a game and a project but a two-basis choice, one of which grew out of the legacy game.

**Replace with:**

> - **~~Naming collision~~ → resolved by ADR-004:** the legacy week-5 creature-collection console game is the historical origin of **DataMon**, now an adopted second modernization basis (virtual-pet reskin); **Dataman** is the physical-calculator basis and the exemplar basis. Lowercase "Datamon" is retired as a live term. Two live spellings, the capital M load-bearing — every executor prompt must disambiguate.


### 17. factually stale — line 51 — `- **⚠ The project's own custom instructions still describe the startup-skin growth-gamification era and the old tone-guide ladder.**`

**Currently asserts:** "**⚠ The project's own custom instructions still describe the startup-skin growth-gamification era and the old tone-guide ladder.** Every future Claude session inherits them; update alongside the docs."

**Reality:** Superseded: planning/PROJECT_INSTRUCTIONS_PROPOSED.md is titled "July 2026 rewrite — ADOPTED" with the status line "adopted with instructor amendments — the live project instructions are the canonical text". The replacement text exists in-repo; only the external paste is unverified.

**Replace with:**

> - **~~⚠ The project's own custom instructions still describe the startup-skin growth-gamification era and the old tone-guide ladder.~~ → Rewritten.** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` is marked **ADOPTED** (Media skin, PRISM, current spine). The text exists in-repo; whether it has been pasted into the external project settings is unverified — see §6.3-12.


### 18. factually stale — line 160 — `3. **Dataman PDF manual** — confirm the source document is in hand and distributable; module 1 hangs on it.`

**Currently asserts:** "**Dataman PDF manual** — confirm the source document is in hand and distributable; module 1 hangs on it."

**Reality:** Half resolved. In hand: reference/dataman/historical/DataMan_US.pdf (7,965,130 bytes) plus dataman_advert.JPG, img_dataman.jpeg and a 348-line faithful transcript at reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md covering pp. 1-6 and 21-26 (PR #12, 92ae2d4). Not resolved: distribution rights — no dated rights record exists anywhere in the tree; the transcript hedges by framing the original as "a classroom analysis artifact, not a redistributed product".

**Replace with:**

> 3. **Dataman PDF manual — availability ✅, rights ✗.** The document is in hand (`reference/dataman/historical/DataMan_US.pdf`) with a 348-line faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` (pp. 1–6, 21–26). What is still missing is a dated **distribution-rights** record; until it exists, wk-1 analyst work reads the transcript (classroom analysis artifact), not a redistributed manual. Module 1 hangs on the rights answer, not on the file.


### 19. factually stale — line 32 — `- **The points system is unshippable as-is:** five mutually inconsistent sources ... Fix first`

**Currently asserts:** "**The points system is unshippable as-is:** five mutually inconsistent sources (COURSEMAP claims 700 / sums 750; README sums 800; assignment headers sum 775; internal rubrics ~2× headers on wks 2/3/4/6; three conflicting Sprint-1 breakdowns). Fix first — everything regenerates from one authoritative table."

**Reality:** Fixed, and one of the five "inconsistencies" was subsequently declared a non-defect. Task 1.0b (c419d4d, PR #11) normalized headers to the 750 regime across 7 drafts and recorded the conflicts in drafts/cts285/points-normalization/CONFLICT_LEDGER.md; 1.0c (ccc98e8, PR #19) finished Weeks 01/07/11. ADR-002 §2 then ruled that sub-items are descriptive and "not required to sum to the header" — so the "internal rubrics ~2× headers" cases are explicitly not to be reconciled, and the Sprint-1 breakdown conflict was retired as a needs-instructor gap.

**Replace with:**

> - **~~The points system is unshippable as-is~~ → normalized (1.0b + 1.0c, ADR-002):** the five inconsistent sources (COURSEMAP claims 700 / sums 750; README sums 800; assignment headers sum 775; internal rubrics ~2× headers on wks 2/3/4/6; three conflicting Sprint-1 breakdowns) are recorded in `drafts/cts285/points-normalization/CONFLICT_LEDGER.md`; all 10 draft assignment headers now read `X pts (Y% of 750)`. **Per ADR-002 the "rubric ~2× header" cases are not defects to fix** — only headers bind; sub-items are descriptive.


### 20. factually stale — line 21 — `Four parallel assessments ran over: the legacy template repo (36 files), the UV-refresh CTS-285 (29 files), the UV-refresh CSC-289 (28 files)`

**Currently asserts:** "the legacy template repo (36 files), the UV-refresh CTS-285 (29 files), the UV-refresh CSC-289 (28 files)"

**Reality:** Every count is far low. planning/INGESTION_MANIFEST.md's reconciliation table (regenerated from the trees by task 0.8, never from an in-tree index) records legacy 200 files on disk / 164 ingested, uv-285 59 / 54, uv-289 39 / 32, total 298 / 250. The on-disk counts confirm it: 164 files under sources/legacy, 54 under sources/uv-285, 32 under sources/uv-289. These figures came from the same unreliable metadata layer as the phantom-inventory claim the very next bullet retracts, and they under-size Phase 1–4 fan-out by ~5×.

**Replace with:**

> Four parallel assessments ran over: the legacy template repo, the UV-refresh CTS-285, the UV-refresh CSC-289, and the AlgoCratic Claude project (~62 docs). *(The per-repo counts originally quoted here — 36 / 29 / 28 — came from the same unreliable metadata layer as the phantom inventory below. Regenerated from the trees by task 0.8: legacy 200 surveyed / 164 ingested, UV-285 59 / 54, UV-289 39 / 32 — see `planning/INGESTION_MANIFEST.md`.)* Headline findings:


### 21. factually stale — line 149 — `| 5.4 | **Adversarial continuity review:** ... (solo/team, tier labels, Dataman vs Datamon, AI expectations) |`

**Currently asserts:** The adversarial continuity review is told to check "Dataman vs Datamon" consistency.

**Reality:** Post-ADR-004 the check to run is different: not "is this the game or the project" but "does this item work for a student on either adopted basis, and is DataMon spelled with the capital M". NAMING_CANON.md:30 flags that any single-basis item must accept "Dataman 2.0" or "DataMon 2.0"; the canonical points table's titles ("Dataman Grouped Presentation", "Solo Dataman arc subtotal") do not yet carry that flag, which is exactly what 5.4 should catch.

**Replace with:**

> | 5.4 | **Adversarial continuity review:** one agent walks the student journey wk 1→16→289-wk-1 looking for broken assumptions (solo/team, tier labels, **two-basis consistency per ADR-004 — does each item work for "Dataman 2.0" *and* "DataMon 2.0", and is the capital M correct**, AI expectations) | Opus | M |


### 22. cosmetic — line 97 — `250 KEEP/ADAPT/HARVEST files pinned with provenance headers; 51 RETIRE/RELOCATE recorded`

**Currently asserts:** "250 KEEP/ADAPT/HARVEST files pinned with provenance headers; **51** RETIRE/RELOCATE recorded"

**Reality:** The count is 48, not 51. planning/INGESTION_MANIFEST.md's verdict summary gives RETIRE 35 + RELOCATE 13 = 48, and its reconciliation table's "Manifest-only" column sums 5 + 7 + 36 = 48 against 250 copied (298 total). The 250 figure is correct (commit 9e69e97 added exactly 250 files).

**Replace with:**

> | 0.8 | **Curated source ingestion → `sources/`** — ✅ DONE (#2 / PR #10): 250 KEEP/ADAPT/HARVEST files pinned with provenance headers; 48 RETIRE/RELOCATE recorded (35 RETIRE + 13 RELOCATE); `planning/INGESTION_MANIFEST.md` regenerated from the tree | Sonnet | Net-new; makes Phase 1–4 fan-out reproducible |


## `CLAUDE.md`

*10 edits — 9 misdirects-work · 1 factually-stale*


### 23. **MISDIRECTS WORK** — line 33 — "1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`; every rubric sums to its header."

**Currently asserts:** Non-negotiable #1: "every rubric sums to its header."

**Reality:** ADR-002 (phase0/ADR-002-points-are-header-level.md, Status: Accepted — 2026-07-23) abolished this invariant. Its line 5 names "CLAUDE.md non-negotiable #1" as a document it governs; §1 (line 20) makes header values summing to 750 the only binding arithmetic, and §2 (line 22) rules that everything below the header is descriptive and "not required to sum to the header". The ruling already propagated to a leaf file (drafts/cts285/rubrics/assessment-rubrics.md:112 cites ADR-002) but never to the doc ADR-002 explicitly governs. An executor obeying line 33 will "fix" rubrics ADR-002 declared correct.

**Replace with:**

> 1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`. Per **ADR-002**, the only binding arithmetic is that assignment-header values sum to 750 — sub-items and rubric rows below the header are descriptive and are **not** required to sum to it. Percentages are always derived, never stored as authority.


### 24. **MISDIRECTS WORK** — line 34 — "**Dataman** (26FA modernization spine) ≠ **Datamon** (legacy creature game whose features become wk-2 stretch epics)."

**Currently asserts:** Non-negotiable #2 encodes the pre-ADR-004 one-basis model: Dataman is the spine, lowercase "Datamon" is a retired legacy creature game that only supplies wk-2 stretch epics.

**Reality:** ADR-004 (phase0/ADR-004-two-modernization-bases.md, Accepted — 2026-07-24, "Resolves: #16", issue #16 CLOSED) adopted DataMon (capital M) as a first-class second student basis: students choose Dataman 2.0 or DataMon 2.0, instructor exemplars use Dataman, and the old lowercase "Datamon (legacy game)" is subsumed as DataMon's historical origin, "not maintained as a separate live term". phase0/NAMING_CANON.md:18-30 was rewritten to that two-basis canon; CLAUDE.md was not, so the two canon docs now disagree on what the term means. Every executor prompt carries this line, so the stale form propagates into graded quiz keys.

**Replace with:**

> Naming canon applies mechanically. Per **ADR-004** there are two live terms and two student bases: **Dataman** (the 1977 physical calculator and the "Dataman 2.0" modernization spine — **all instructor exemplars and worked examples use Dataman**) and **DataMon** (the adopted virtual-pet reskin basis, "DataMon 2.0", whose legacy creature-game features seed the wk-2 stretch epics). The `man`/`Mon` swap is the search-and-replace hazard; the retired lowercase "Datamon" is DataMon's historical origin, not a live term.


### 25. **MISDIRECTS WORK** — line 34 — "Trusted Workflow: Issue → Branch → Draft PR → Development → Finish PR → Review → Merge."

**Currently asserts:** Step 6 of the Trusted Workflow is stated as "Review".

**Reality:** phase0/NAMING_CANON.md:34 states the canonical step as "**Code Review**", and :38 rules that "Every quiz item, rubric line, and answer key encoding workflow order or column names regenerates against this section." Graded answer keys regenerate from NAMING_CANON, so CLAUDE.md's abbreviated form can produce a wrongly-graded student answer.

**Replace with:**

> Trusted Workflow: Issue → Branch → Draft PR → Development → Finish PR → Code Review → Merge.


### 26. **MISDIRECTS WORK** — line 46 — "- What 26FA students arrive knowing (CSC-113/114 prerequisite reality — sizes Week 1)"

**Currently asserts:** Listed under "Open human blockers (do not wait on these for mechanical work; do not resolve them yourself)".

**Reality:** ADR-005 (phase0/ADR-005-prerequisite-baseline.md, Accepted — 2026-07-24, instructor ruling) decided it: baseline is a working GitHub account + working knowledge of Python, and CSC-113/114 completion must NOT be assumed; a weaker cohort gets a targeted bridge supplement. It states "Resolves: #9" and "Closes #9; unblocks wk-1 content sizing (tasks 1.1/1.2)", and GitHub issue #9 is CLOSED. An agent reading CLAUDE.md will refuse to size Week 1 content because it believes the question is still blocked.

**Replace with:**

> DELETE this bullet. The question is ruled by ADR-005 (Accepted 2026-07-24) and issue #9 is closed; leaving it in the blocker list stalls tasks 1.1/1.2, which ADR-005 explicitly unblocks. If a pointer is wanted, it belongs in the read-first ADR list, not here.


### 27. **MISDIRECTS WORK** — line 43 — "- Dataman PDF manual availability/rights (gates wk-1 content)"

**Currently asserts:** Both availability and rights are open blockers gating wk-1 content.

**Reality:** Availability is settled: reference/dataman/historical/DataMan_US.pdf exists (7,965,130 bytes) alongside dataman_advert.JPG and img_dataman.jpeg, plus a 348-line faithful transcript at reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md covering PDF pp. 1–6 and 21–26 (shipped by PR #12, commits 650f5a7 / c83d5d0 / 3e92c6e / 9b1e34c). Issue #6 ("wk-1 BLOCKER: Dataman PDF distribution rights unconfirmed + no render/text layer") is CLOSED. Only the rights half remains genuinely open — no dated distribution-rights record exists anywhere in the tree.

**Replace with:**

> - Dataman PDF manual **redistribution rights** (the PDF and a faithful transcript are in hand under `reference/dataman/`; only rights are unconfirmed — treat the original as a classroom analysis artifact, never a redistributed product)


### 28. **MISDIRECTS WORK** — line 29 — "| Dataman PDF manual | `reference/` — **check it exists before starting wk-1 tasks** | Module 1's analyst-read and quiz depend on it; if absent, it's a human blocker |"

**Currently asserts:** The Dataman PDF lives at `reference/`, its existence is unverified, and its absence is a human blocker gating wk-1 tasks.

**Reality:** The path is wrong and the check is already answered. Actual locations: reference/dataman/historical/DataMan_US.pdf plus the transcript at reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md (348 lines, covering pp. 1–6 and 21–26). NAMING_CANON.md:28 rules that the Week-1 analyst-read and doc-analysis quiz "always read the faithful 1977 DataMan manual regardless of a student's later basis", so the transcript is the working artifact.

**Replace with:**

> | Dataman PDF manual | `reference/dataman/historical/DataMan_US.pdf`; faithful transcript at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` | In hand. Module 1's analyst-read and doc-analysis quiz work from the transcript (NAMING_CANON: the 1977 manual is read regardless of a student's chosen basis). Redistribution rights remain an open human blocker — analyse it, don't republish it |


### 29. **MISDIRECTS WORK** — line 25 — the three source-table rows beginning "| UV-refresh CTS-285 (the base being adapted) | `../csc_dash/courses/CTS-285/` |" through line 27 "...aligned briefs exist ONLY in the full repo |"

**Currently asserts:** The three adaptation corpora live only in sibling repos outside this one (`../csc_dash/courses/CTS-285/`, `../csc_dash/courses/CSC-289/`, `../course-cts285-template/`), and "aligned briefs exist ONLY in the full repo".

**Reality:** Task 0.8 (commit 9e69e97, merged by PR #10) froze all three corpora into this repo: sources/ now holds 251 tracked files — sources/uv-285 (54), sources/uv-289 (32), sources/legacy (164), each file carrying a provenance header. The aligned GRD briefs are present in-repo at sources/legacy/26SP_Planning/GRD_CreativeBriefs/ (e.g. EventFlowAligned.md, StudyStreamAligned_base.md, RideAligned_technical.md). sources/README.md states the point of the mirror: "so that Phase 1–4 fan-out is reproducible and diffable without reaching outside this repo at adapt time." An agent following CLAUDE.md reaches for paths it cannot access and reports a blocker, or adapts from an unfrozen sibling checkout.

**Replace with:**

> | UV-refresh CTS-285 (the base being adapted) | `sources/uv-285/` — frozen 54-file mirror (origin `../csc_dash/courses/CTS-285/`) | Adapt from the mirror, not the sibling repo: task 0.8 froze it so fan-out is reproducible and diffable. ~60% survives with mechanical adaptation; **never trust its indexes/audits — they claim materials that don't exist** |
> | UV-refresh CSC-289 | `sources/uv-289/` — frozen 32-file mirror (origin `../csc_dash/courses/CSC-289/`) | Two forked architectures; ADR-001 governs the merge |
> | Legacy AlgoCratic repo | `sources/legacy/` — frozen 164-file mirror (origin `../course-cts285-template/`) | The 26SP alignment cluster (engine briefs, terminology maps, GRD creative briefs) feeds weeks 13–16; the aligned briefs are in the mirror at `sources/legacy/26SP_Planning/GRD_CreativeBriefs/` |


### 30. **MISDIRECTS WORK** — line 15 — "   - `ADR-001-csc289-team-based.md` — the 289 ruling (team-based, merged spine, GREEN Trajectory Check)"

**Currently asserts:** The mandatory read-first enumeration names exactly one ADR, ADR-001.

**Reality:** phase0/ holds six ADRs (ADR-001 through ADR-006; 12 files total). ADR-002 through ADR-006 are never named anywhere in CLAUDE.md, README.md or CLAUDE_SUPPLEMENTARY.md — they are covered only by the generic "phase0/ — ALL of it". Two of the unnamed ones override CLAUDE.md's own non-negotiables (#1 by ADR-002, #2 by ADR-004), one closes a blocker CLAUDE.md still lists as open (ADR-005/issue #9), and one blocks graduation of student-facing material entirely (ADR-006, Proposed). An agent following the enumerated list misses five of six decisions of record.

**Replace with:**

>    - `ADR-001-csc289-team-based.md` — the 289 ruling (team-based, merged spine, GREEN Trajectory Check, Cold Start Track)
>    - `ADR-002-points-are-header-level.md` — points bind at the assignment header; sub-items are descriptive (**overrides non-negotiable #1 below**)
>    - `ADR-003-instructor-as-client-persona.md` — the stakeholder ladder: 2 canned transcripts + 1 rehearsal + 1 live instructor-as-client (the graded RSI anchor)
>    - `ADR-004-two-modernization-bases.md` — Dataman *and* DataMon are both student bases; exemplars use Dataman (**overrides non-negotiable #2 below**)
>    - `ADR-005-prerequisite-baseline.md` — 26FA baseline = GitHub account + working Python, **not** CSC-113/114
>    - `ADR-006-course-repo-path-form.md` — **Proposed, not ruled**: student-facing course-repo references carry `<!-- PATHFORM: pending spine ruling -->`; nothing student-facing graduates until it is ruled


### 31. **MISDIRECTS WORK** — line 39 — "7. New material goes in `drafts/<course>/<module-or-week>/`; nothing in this repo is student-facing until it graduates to a course repo."

**Currently asserts:** New material goes in `drafts/<course>/<module-or-week>/`, and graduation to a course repo is otherwise unconstrained.

**Reality:** The tree is organised by category, not module-or-week: drafts/cts285/{assignments,knowledge-checks,planning-sheets,points-normalization,rubrics,shared-dataman-artifacts} plus drafts/spikes/. The `<course>` token also mis-cased in practice — the 1.5 planning sheets were committed to `drafts/CTS-285/planning-sheets/` and had to be git-renamed to lowercase by commit 20c284f (B-002), which ruled one CTS-285 draft path, `drafts/cts285/`. Separately, ADR-006 (Proposed) explicitly blocks graduation of any student-facing material until the course-repo path form is ruled, and forbids leaf tasks inventing a course-repo prefix — a constraint that appears in no canon doc.

**Replace with:**

> 7. New material goes in `drafts/<course>/<category>/` — the CTS-285 draft path is lowercase `drafts/cts285/` (B-002; the case-variant `drafts/CTS-285/` is retired), with existing categories `assignments/`, `knowledge-checks/`, `planning-sheets/`, `rubrics/`, `shared-dataman-artifacts/`. Nothing in this repo is student-facing until it graduates to a course repo — and per **ADR-006** (*Proposed*) nothing graduates at all until the course-repo path form is ruled: every student-facing course-repo reference carries `<!-- PATHFORM: pending spine ruling -->`, the retired csc_dash `/courses/CTS-285/...` form is never reintroduced, and no leaf task invents a prefix.


### 32. factually stale — line 13 — "`NAMING_CANON.md` — mechanical renames + the Dataman/Datamon disambiguation + the Trusted Workflow definition"

**Currently asserts:** NAMING_CANON contains "the Dataman/Datamon disambiguation" (lowercase, one-basis framing).

**Reality:** phase0/NAMING_CANON.md:18 now titles that section "Dataman vs. DataMon — two modernization bases (search-and-replace hazard)" and :28 rules "the two live terms are **Dataman** and **DataMon** (not the old lowercase \"Datamon\")". The read-first index describes a section that no longer exists under that name or that meaning.

**Replace with:**

>    - `NAMING_CANON.md` — mechanical renames + the Dataman vs. DataMon two-basis table (per ADR-004) + the Trusted Workflow definition (graded quiz answers depend on these)


## `README.md`

*3 edits — 2 misdirects-work · 1 factually-stale*


### 33. **MISDIRECTS WORK** — lines 12–18 — "- `phase0/` — Phase 0 foundation artifacts (all complete):" through "- `QM_Retirement_Note.md` — QM pulled program-wide; RSI retained (federal, not QM); audit disposition."

**Currently asserts:** phase0/ is "(all complete)" and contains six listed files: points table, SHODANN bible, ADR-001, PRISM mapping, NAMING_CANON ("Dataman vs Datamon"), QM note.

**Reality:** phase0/ holds 12 tracked files. The index omits KAYFABE_ARCHITECTURE.md (which CLAUDE.md:10 makes mandatory reading) and ADR-002 through ADR-006. "All complete" is false: ADR-006 is Status "**Proposed** — 2026-07-29", deciders pending, with options A/B/C unchosen. The NAMING_CANON gloss "Dataman vs Datamon" is the pre-ADR-004 one-basis form; NAMING_CANON.md:18 now reads "Dataman vs. DataMon — two modernization bases". This is the front-door index of the canon directory, so an agent trusting it misses the two ADRs that override CLAUDE.md's non-negotiables.

**Replace with:**

> - `phase0/` — Phase 0 foundation artifacts (12 files; all Accepted except ADR-006, which is **Proposed**):
>   - `CTS285_Canonical_Points_Table.md` — **the** single source of truth for CTS-285 points (750 total). Assignment-header values are the binding arithmetic (ADR-002); sub-items below a header are descriptive.
>   - `SHODANN_Character_Bible.md` — character canon + Media-skin voice template. Required context for every skin-pass task; §7 governs automated (velocity-bot) feedback tone.
>   - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator).
>   - `PRISM_Course_Mapping.md` — the ladder-across-the-program canon.
>   - `NAMING_CANON.md` — mechanical rename table (Sacred Flow→Trusted Workflow, GRAY→GREY, Dataman vs. DataMon two-basis table, workflow-step canon, etc.).
>   - `QM_Retirement_Note.md` — QM pulled program-wide; RSI retained (federal, not QM); audit disposition.
>   - Decisions of record — `ADR-001` CSC-289 team-based, merged spine, GREEN Trajectory Check, Cold Start Track · `ADR-002` points bind at the assignment header · `ADR-003` stakeholder ladder (2 canned + 1 rehearsal + 1 live) · `ADR-004` two modernization bases, Dataman and DataMon · `ADR-005` prerequisite baseline (GitHub + Python, not CSC-113/114) · `ADR-006` course-repo path form (**Proposed** — blocks graduation of student-facing material until ruled).


### 34. **MISDIRECTS WORK** — line 19 (the blank line between the phase0 bullet block and "## Rules for executor agents working in this repo") — insertion point

**Currently asserts:** The Contents index lists only planning/ and phase0/, implying the repo holds "planning artifacts and net-new material drafts" with the drafts unindexed.

**Reality:** 345 tracked files exist; the bulk are content the index never mentions: sources/ (251 files — uv-285 54, uv-289 32, legacy 164, frozen by task 0.8/PR #10), drafts/ (35 files — 10 assignments, 5 knowledge checks, 7 planning sheets, 8 shared Dataman artifacts, rubrics, points-normalization, plus drafts/spikes/datamon-virtual-pet-reskin.md), and reference/ (12 files — voice canon, PRISM.html, the Dataman manual and transcript). An executor reading the front door has no way to learn that Weeks 01–07, 09, 11, 12 drafts and Modules 02–06 knowledge checks already exist, and may re-author them.

**Replace with:**

> Insert these bullets after the `phase0/` block, before `## Rules for executor agents working in this repo`:
> 
> - `sources/` — frozen mirrors of the three source corpora, ingested by task 0.8 so adaptation is reproducible without reaching outside this repo: `uv-285/` (54 files), `uv-289/` (32), `legacy/` (164, including the 26SP GRD creative briefs). Bodies are verbatim; their defects are what downstream tasks are chartered to fix.
> - `drafts/` — net-new material in progress. `cts285/` holds `assignments/` (Weeks 01–07, 09, 11, 12), `knowledge-checks/` (Modules 02–06), `planning-sheets/` (6 templates + `WIRING_MANIFEST.md`), `rubrics/`, `points-normalization/`, and `shared-dataman-artifacts/` (the 1.0a exemplar set); `spikes/` holds the DataMon reskin seed. **Regenerate this list from the tree, never from a doc's claims.**
> - `reference/` — `voice-canon/` (exported AlgoCratic voice material), `PRISM.html` (the canonical framework), and `dataman/` (the 1977 manual PDF plus a faithful transcript).


### 35. factually stale — line 10 — "`planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` — current file-tree inventory, project history, source map, gaps, and dependency-based backlog."

**Currently asserts:** The inventory is a "current" file-tree inventory.

**Reality:** Its counts verify exactly against commit 499c15e (317 tracked files; phase0 = 11; planning = 4) but not against the working tree, which has 345 tracked files, phase0 = 12 (ADR-006 added by 187441f), planning = 6, plus a 25-file alignment_ingestion/ area that appears in no inventory row. Calling it "current" invites exactly the trust CLAUDE.md non-negotiable #6 forbids.

**Replace with:**

> - `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` — file-tree inventory, project history, source map, gaps, and dependency-based backlog. **Counts are a snapshot (accurate as of commit `499c15e`), not a live index** — regenerate from the tree before relying on them.


## `sources/README.md`

*2 edits — 1 misdirects-work · 1 factually-stale*


### 36. **MISDIRECTS WORK** — line 11 — "**Status: scaffold only.**"

**Currently asserts:** **Status: scaffold only.** The copy pass is task **0.8** (see the tracking issue and `planning/INGESTION_MANIFEST.md`). This directory is intentionally empty of source copies until 0.8 runs. Nothing here is student-facing.

**Reality:** Task 0.8 shipped on 2026-07-23. `sources/` holds 250 ingested copies plus this README (251 tracked files): `git ls-files sources | wc -l` = 251; per-tree `git ls-files` counts are uv-285 54, uv-289 32, legacy 164. Commit 9e69e97 "0.8: ingest 250 curated source files into sources/" (dated 2026-07-23) added exactly 250 files and was merged by PR #10 (2be3f38, branch task/0-8-source-ingestion). The directory has not been "empty of source copies" for six days. An executor reading this line would conclude the ingestion still has to be run and could re-execute a 250-file copy pass that is already complete and merged.

**Replace with:**

> **Status: ingested.** The copy pass (task **0.8**) ran 2026-07-23 and landed **250** curated copies — `uv-285/` 54, `uv-289/` 32, `legacy/` 164 — recorded row-by-row in `planning/INGESTION_MANIFEST.md`, which also lists the 48 RETIRE / RELOCATE files left in place. Nothing here is student-facing.


### 37. factually stale — line 9 — "Every copied file carries a provenance header (origin path, verdict, target 26FA slot, ingest date)."

**Currently asserts:** Every copied file carries a provenance header (origin path, verdict, target 26FA slot, ingest date).

**Reality:** 40 of the 250 copied files carry no inline header — the manifest records their Header column as `manifest-only`, not `inline-header` (210 inline-header vs 40 manifest-only, counted from column 6 of every non-`*not copied*` row of planning/INGESTION_MANIFEST.md). Those 40 are 31 `.docx` + 5 `.png` + 1 `.pdf` + 1 `.mp4` binaries plus `sources/legacy/.gitignore` and `sources/legacy/_tracking/course-manifest-template.yaml`, both verified header-free on disk (`cat sources/legacy/.gitignore` = 3 lines of .DS_Store rules; `head -4 .../course-manifest-template.yaml` = the original template comments). By contrast `sources/uv-285/COURSEMAP.md` opens with the full PROVENANCE block, confirming the convention holds only for the 210. An agent trusting this absolute claim would either treat missing headers as an ingestion defect to "fix" or write tooling that assumes every file under sources/ is header-annotated.

**Replace with:**

> Every copied **text** file carries a provenance header (origin path, verdict, target 26FA slot, ingest date). The 40 files the manifest marks `manifest-only` — the binaries (`.docx`, `.png`, `.pdf`, `.mp4`) plus `legacy/.gitignore` and `legacy/_tracking/course-manifest-template.yaml` — carry no inline header; their provenance lives in the manifest row instead.


## `planning/INGESTION_MANIFEST.md`

*1 edits — 1 misdirects-work*


### 38. **MISDIRECTS WORK** — line 70 — "Needs Trusted Workflow / PRISM / Dataman-vs-Datamon entries added"

**Currently asserts:** 712 lines, real glossary. Needs Trusted Workflow / PRISM / Dataman-vs-Datamon entries added and any workflow definition re-keyed, since g…

**Reality:** "Dataman-vs-Datamon" is the pre-ADR-004 disambiguation. ADR-004 (phase0/ADR-004-two-modernization-bases.md, Accepted 2026-07-24, "Resolves: #16") adopted DataMon (capital M) as a first-class second student basis and subsumed the old lowercase "Datamon (legacy game)" as historical origin only, "not maintained as a separate live term"; phase0/NAMING_CANON.md:28 states "the two live terms are **Dataman** and **DataMon** (not the old lowercase 'Datamon')" and retitled the section "Dataman vs. DataMon — two modernization bases". This is a prescriptive instruction, not a description of a source defect, so an executor adapting SYSTEMS_ANALYSIS_GLOSSARY.md would author a glossary entry encoding the retired split — the same failure already committed in drafts/cts285/shared-dataman-artifacts/README.md:11-19.

**Replace with:**

> 712 lines, real glossary. Needs Trusted Workflow / PRISM / Dataman-vs-DataMon (two modernization bases, per ADR-004) entries added and any workflow definition re-keyed, since g…


## `planning/ASSESSMENT_NOTES.md`

*6 edits — 6 misdirects-work*


### 39. **MISDIRECTS WORK** — line 7 — "**Undecided prerequisite question:**"

**Currently asserts:** - **Undecided prerequisite question:** PM-Integration (old pipeline) assumes CSC-113/114 mastery; README says "Prerequisites: None"; Week 1 teaches `git config` from scratch. Neither pipeline decided what students arrive knowing — it sizes Week 1 and whether the Trusted Workflow is taught or assumed. **Instructor decision needed.**

**Reality:** Decided. phase0/ADR-005-prerequisite-baseline.md is "Status: Accepted — 2026-07-24 (instructor ruling)", "Resolves: #9", "Closes #9; unblocks wk-1 content sizing (tasks 1.1/1.2)". It rules the baseline is a working GitHub account + working knowledge of Python, and that CSC-113/114 must NOT be assumed; Week 1 env setup is "configure/verify, not create-a-first-ever-account"; the Trusted Workflow is "taught as *process on top of* an existing GitHub account"; a weaker cohort gets a targeted bridge supplement, not a lowered baseline. GitHub issue #9 is CLOSED. An executor reading line 7 would stall wk-1 sizing (tasks 1.1/1.2) waiting on a ruling that already exists.

**Replace with:**

> - **Prerequisite question — RULED (ADR-005, Accepted 2026-07-24; closes #9).** The pipelines did disagree (PM-Integration assumed CSC-113/114 mastery; README said "Prerequisites: None"; Week 1 taught `git config` from scratch). The baseline is now **a working GitHub account + working knowledge of Python; CSC-113/114 is NOT assumed.** Week 1 is configure/verify, not create-from-zero, and the Trusted Workflow is taught as process on top of an existing account. A weaker cohort gets a targeted bridge supplement — never a lowered baseline. Do not re-open this as a human blocker.


### 40. **MISDIRECTS WORK** — line 10 — "**The invisible blocker is handouts:**"

**Currently asserts:** - **The invisible blocker is handouts:** stakeholder interview transcripts ×3, SDLC Phase Checklist, role cards, peer-review rubric exist nowhere. Dataman converts this to a one-time win: shared class artifacts (transcripts, reference ERD, seeded backlog) serve every student and double as grading keys. Generate early.

**Reality:** The transcripts/ERD/backlog half shipped. Task 1.0a (commit f2ef009, merged by PR #13) added 8 files to drafts/cts285/shared-dataman-artifacts/: Stakeholder_Transcript_Parent.md, Stakeholder_Transcript_Retro_Collector.md, Stakeholder_Transcript_Teacher.md, Dataman_Reference_ERD.md, Dataman_Seeded_Backlog.md, Grading_Key.md, HANDOFF.md, README.md. Separately, ADR-003 (Accepted 2026-07-23) supersedes the "×3 canned" framing with a 2 canned + 1 rehearsal + 1 live ladder, and §Reconciliation rules the teacher transcript is retained as the rehearsal ROLE-CARD SEED, recast (not regenerated) by tasks 1.3/1.4. Still genuinely absent from drafts/: SDLC Phase Checklist, role cards, peer-review rubric (grep over drafts/ finds "role card" only in ADR-003; the only SDLC checklist lives in sources/uv-285/). An executor reading line 10 would re-author three transcripts, a grading key, an ERD and a backlog that already exist — and would author a fourth canned transcript ADR-003 forbids.

**Replace with:**

> - **The invisible blocker was handouts — the shared-artifact half is now built.** Task 1.0a (PR #13) shipped `drafts/cts285/shared-dataman-artifacts/`: three stakeholder transcripts (retro collector, parent, teacher), the reference ERD, the seeded backlog, and `Grading_Key.md`. Do not regenerate them. **ADR-003** then reshaped the model from "transcripts ×3" to **2 canned (retro collector, parent) + 1 rehearsal (teacher, recast as a role card by tasks 1.3/1.4) + 1 live (instructor-as-client, graded, the RSI anchor — never written as a canned transcript)**. Still missing and still worth generating early: **SDLC Phase Checklist, role cards, peer-review rubric.**


### 41. **MISDIRECTS WORK** — line 31 — "**The snapshot is not the repo:**"

**Currently asserts:** - **The snapshot is not the repo:** aligned briefs (BudgetBossAligned, BookmarkAligned, etc. — the most valuable student-facing 289 content) and live issue/PR state exist only in `norrisaftcc/course-cts285-template` on GitHub. Clone before executors touch the alignment cluster, or they'll recreate existing work.

**Reality:** The clone happened. Task 0.8 (commit 9e69e97, merged by PR #10) ingested the legacy repo; sources/legacy/ holds 164 tracked files, including the full aligned-brief set — sources/legacy/26SP_Planning/GRD_CreativeBriefs/FinancialTracker/BudgetBossAligned_base.md and _technical, RecommendationEngine/BookmarkAligned_core.md and _technical, plus DAY_1_ESSENTIALS.md, UNDERGROUND_CAPSTONE_SURVIVAL_GUIDE.md, Platform_Architecture_Refined.md, ProjectAlignment.md, the Engine_Brief_* set, 26SP_Cross_Discipline_Protocol.md and the alignment_meetings/ tree. planning/INGESTION_MANIFEST.md:21 records the mapping (`sources/legacy/` ← course-cts285-template, 164 files kept) and line 168 records "RISK #5 RESOLVED: the named 'BudgetBossAligned' EXISTS in this local clone". Only live issue/PR state remains out-of-tree. An executor reading line 31 would either block on a clone step already done or, worse, treat the assets as unavailable and recreate them.

**Replace with:**

> - **The snapshot is not the repo — resolved for files, still true for issue/PR state.** Task 0.8 (PR #10) ingested the legacy repo into `sources/legacy/` (164 files), including the aligned briefs (`26SP_Planning/GRD_CreativeBriefs/**` — BudgetBossAligned, BookmarkAligned, et al.) and the whole `26SP_Planning/` alignment cluster; `planning/INGESTION_MANIFEST.md` records RISK #5 as resolved. Read `sources/legacy/` before authoring anything in the alignment cluster or you'll recreate existing work. **Still out-of-tree:** live issue/PR state in `norrisaftcc/course-cts285-template` — query GitHub for it.


### 42. **MISDIRECTS WORK** — line 46 — table row "| Legacy Datamon *game* spec | wk2 seeded backlog |"

**Currently asserts:** | Legacy Datamon *game* spec | wk2 seeded backlog | Recast features as stretch-goal epics (in-world homage) | M |

**Reality:** Two changes. (1) The adaptation already shipped: drafts/cts285/shared-dataman-artifacts/Dataman_Seeded_Backlog.md line 408 onward carries "# STRETCH-GOAL EPICS — Below the line (beyond MVP; in-world homage)" with epic S1 and stories S1.1–S1.4 explicitly recasting the retired creature-collection features (task 1.0a, PR #13). (2) ADR-004 (Accepted 2026-07-24, "Resolves: #16") supersedes the framing: it names this exact row's subject in its Consequences — "**wk-2 seeded backlog:** the 'legacy creature-game features as stretch epics' framing (master plan §6.2) is now the seed of the **DataMon** basis; students who pick DataMon may promote those from stretch to core" — and rules DataMon a first-class alternative student basis, with lowercase "Datamon" subsumed as historical origin only (NAMING_CANON: "the two live terms are **Dataman** and **DataMon** (not the old lowercase \"Datamon\")"). An executor working this row would author stretch epics that exist and would keep DataMon boxed as a wk-2 homage rather than a selectable project basis.

**Replace with:**

> | Legacy Datamon *game* spec (retired wk-5 creature game) | wk2 seeded backlog — **DONE (1.0a)**; now also the **DataMon** basis seed per **ADR-004** | Already recast as stretch epics S1.x in `Dataman_Seeded_Backlog.md` (in-world homage) — do not re-author. ADR-004 adopts **DataMon** as a first-class student basis: DataMon students may promote these from stretch to core. Live spelling is capital-M **DataMon**; lowercase "Datamon" is historical origin only | M |


### 43. **MISDIRECTS WORK** — line 79 — "**Project custom instructions are stale and load-bearing**"

**Currently asserts:** - **Project custom instructions are stale and load-bearing** — still pitch the startup skin + old ladder to every session. Human edit required; highest-leverage single remaining edit.

**Reality:** planning/PROJECT_INSTRUCTIONS_PROPOSED.md line 1 is titled "Project Instructions — AlgoCratic (July 2026 rewrite — ADOPTED)" and line 2 reads "Status: **adopted with instructor amendments** — the live project instructions are the canonical text", listing three instructor additions (Trusted Workflow gloss; INDIGO/VIOLET/ULTRAVIOLET as opaque higher-ups; the past-GREEN scope rule) and noting the file is retained as the drafting record. Caveat worth preserving: this is an in-repo document claim — nothing in the tree or git history independently confirms the external Claude-project settings were updated.

**Replace with:**

> - **Project custom instructions — ADOPTED (in-repo record).** `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` is marked *adopted with instructor amendments* (Trusted Workflow gloss; INDIGO/VIOLET/ULTRAVIOLET as opaque higher-ups; the past-GREEN scope rule); it is now the drafting record and the live instructions are canonical. Do **not** re-open this as a pending human edit. **Caveat:** the adoption is a document claim — nothing in this tree verifies the external project settings were actually changed; on any divergence, the live instructions win.


### 44. **MISDIRECTS WORK** — line 23 — "**Points source-of-truth before regeneration:**"

**Currently asserts:** - **Points source-of-truth before regeneration:** canonical's 1,600 has ~2% internal slippage; MODULE-ARCH's shell doesn't map additively. Agents regenerating from prose will hallucinate reconciled numbers. Existing link rot: README→`PM-Integration-CSC-289.md` and `reference-materials/` don't exist; canonical→`../CSC-289_Sprint_Plan_Dashboard_Crosswalk.md` unverified.

**Reality:** ADR-002 (Accepted 2026-07-23) retired internal-slippage reconciliation as a defect class: §2 "Everything below the assignment header is descriptive, not binding arithmetic… **not required to sum to the header**"; §3 percentages are always derived; §4 40/40/20 is a course-level philosophy, not a per-assignment or per-sprint equation; and its Consequences retire three needs-instructor gaps with "No reconciliation." The only binding arithmetic is top-line totals (750 for CTS-285 per phase0/CTS285_Canonical_Points_Table.md; the 1,600 shell for CSC-289 per ADR-001). The link-rot half of the bullet is unaffected. An executor reading line 23 would open a reconciliation task for ~2% sub-header slippage that ADR-002 explicitly says needs no fix.

**Replace with:**

> - **Points source-of-truth before regeneration:** **ADR-002** rules points bind at the *assignment-header* level only — sub-items are descriptive, percentages are always derived, and 40/40/20 is a course-level philosophy, not a per-sprint equation. So canonical's ~2% *internal* slippage and MODULE-ARCH's non-additive shell are **not defects to reconcile**; only the top lines bind (750 for CTS-285, the 1,600 shell for CSC-289 per ADR-001). What still holds: agents regenerating from prose will hallucinate reconciled numbers — regenerate from `phase0/CTS285_Canonical_Points_Table.md`, never from a rubric. Existing link rot: README→`PM-Integration-CSC-289.md` and `reference-materials/` don't exist; canonical→`../CSC-289_Sprint_Plan_Dashboard_Crosswalk.md` unverified.

## `drafts/cts285/planning-sheets/WIRING_MANIFEST.md`

*3 edits — all misdirects-work. These three are the only survivors of 10 findings raised against this file, and all three trace to one root cause: **the manifest was authored 2026-07-24, one day after task 1.0b (`c419d4d`, 2026-07-23) deleted Week_06's retrospective Part 1** — a deletion mandated by `phase0/CTS285_Canonical_Points_Table.md`. These entries were never accurate records of anything; they were stale at birth against phase0 canon.*

*Apply all three together, or the document contradicts itself.*

### 45. **MISDIRECTS WORK** — lines 27–28, Insertion point B

**Currently asserts:** a live work instruction to emit a Sprint Retrospective reference into `Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md:36`.

**Reality:** Week_06's Part 1 (Sprint Retrospective, 50 pts) was deleted as a duplicate by task 1.0b. In the adapted draft, coordinates `:34/:36` now land on the **surviving Risk Register deliverable** — so an executor following this literally would duplicate or clobber it. The source coordinate itself is correct; the instruction is void.

**Replace with:**

> - **Insertion point B — SUPERSEDED 2026-07-23, do not action.** The source coordinate is accurate (`sources/uv-285/assignments/Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md:42/:44`, = source lines 34/36 once the 8-line ingest provenance header is subtracted). But Week_06's Part 1 (Sprint Retrospective, 50 pts) was already **deleted as a duplicate** by task 1.0b (`c419d4d`, 2026-07-23) per the wk-6 row of `phase0/CTS285_Canonical_Points_Table.md` ("retro section DELETED as duplicate", 25 pts); see `drafts/cts285/points-normalization/CONFLICT_LEDGER.md`, Week_06. In the adapted file those same numbers now fall inside the **Risk Register** part (`drafts/cts285/assignments/Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md:34` = `### Use the Risk Register Template`, `:36` = the risk-register copy line — see item 3). Emit **no** retrospective reference into Week_06.

### 46. **MISDIRECTS WORK** — line 3, "those live in read-only `../csc_dash`"

**Currently asserts:** present-tense, that the assignment and activity files an executor must edit live in `../csc_dash`.

**Reality:** they were ingested to `sources/uv-285/` by task 0.8 (`9e69e97`) and adapted into `drafts/cts285/assignments/` by 1.0b/1.0c. `../csc_dash` is not present in this container at all, and the manifest names no other path for the assignments — so an executor is sent nowhere. This is an unmarked, undated, present-tense location claim, not a provenance header, which is why it does not survive as history.

**Replace with:**

> > **Produced by issue #5 (task 1.7 REVISED) for the per-week assignment-adaptation tasks to consume.** This task adapts the six planning-sheet *templates*; it does **not** edit any assignment or activity file — those are owned by the per-week tasks, and Rule 1 forbids a leaf co-editing them in the same wave. **Coordinates below are csc_dash *source* line numbers**, read from the UV-refresh originals. To resolve one today: the frozen ingest copies at `sources/uv-285/` (task 0.8, `9e69e97`) carry an 8-line provenance header, so `sources/` line = source line + 8; the adapted working copies the owning tasks actually edit are at `drafts/cts285/assignments/` (points-normalized by 1.0b/1.0c), where line numbers have drifted again. This manifest tells each owning task the exact reference line to add or re-point, and where.

### 47. **MISDIRECTS WORK** — line 29, the Duplicate-deliverable flag

**Currently asserts:** *"⚠ Duplicate-deliverable flag … **Not resolved here** (spine/assignment decision)"* — i.e. an open question.

**Reality:** it was resolved by phase0 canon *before* this manifest was written. `phase0/CTS285_Canonical_Points_Table.md` rules the wk 5–6 and wk 6 rows; 1.0b executed it. Week_05 owns `sprint-1-retrospective.md` as a +5 bonus inside the 75-pt cap, and `grep -rn PATHFORM drafts/cts285/assignments/` returns exactly one retrospective site. Students are not asked for it twice.

**Replace with:**

> - **✔ Duplicate-deliverable flag — RESOLVED before this manifest was written.** `phase0/CTS285_Canonical_Points_Table.md` (wk 5–6 and wk 6 rows) rules it, and task 1.0b executed it on 2026-07-23 (`c419d4d`): Week_06's Part 1 (Sprint Retrospective, 50 pts) was deleted as a duplicate — this is the "wk-6 duplicate deliverable merged" noted in master plan §2 — and **Week_05 owns** `sprint-1-retrospective.md`, graded as a **+5 bonus applied within the 75-point cap** (`drafts/cts285/assignments/Week_05_Assignment_Sprint_1_System_Design.md` rubric). Students are not asked to produce it twice. *(Retire the matching BLOCKED-ON item below.)*

**Paired edit, required:** retire the matching `BLOCKED-ON` item — *"**Sprint_Retrospective duplicate deliverable** (Week_05 vs Week_06) — assignment/spine decision"* — or the document asserts both that the question is resolved and that it is open.

---

## Refuted — do not re-raise

*20 findings did not survive verification. Recorded so a later session does not re-investigate them.*

### `WIRING_MANIFEST.md` — 7 refuted

The audit's central error was a **category error**: it compared the manifest's line numbers against `drafts/` when the file's own summary-table header declares them `Source insertion point(s)`. All twelve cited coordinates reproduce exactly from `sources/uv-285/` minus the 8-line task-0.8 provenance header (e.g. source `:72/:74` → manifest `64/:66`). That refutes the findings against items 1, 2, 3, the standup entry, and the Summary table.

A second defect ran through four of them: every proposed replacement asserted the copy-lines were *"EMITTED 2026-07-29 (`187441f`)"*. They were not — that commit was a three-line prefix substitution on references inherited verbatim from csc_dash, which is why the manifest labels those entries **EXISTING**. Applying them would have credited the commit with authoring student-facing text it never wrote.

Two more asked to duplicate information already present in the document's own dated correction blocks (the ADR-006 pointer; ownership assignments). One would additionally have rewritten a passage that `phase0/ADR-006-course-repo-path-form.md` quotes verbatim.

### `drafts/cts285/shared-dataman-artifacts/HANDOFF.md` — 8 refuted, all of them

Every sentence flagged as stale was **accurate when written**. The decisive evidence: `git show f2ef009:phase0/ADR-003-instructor-as-client-persona.md` shows ADR-003 shipped as `**Status**: Proposed — needs-instructor` in the *same commit* that authored the handoff; the instructor ruling arrived in the next commit (`30d2742`), same PR.

Two accepted ADRs also forbid the rework outright — ADR-003: *"no file rework required in PR #13 beyond this ADR"*; ADR-004: *"No rework to 1.0a, the transcript, or the points work."*

One proposed replacement would have had the 1.0a session narrate its own downstream merge — impossible for its author. Another asserted the teacher transcript *"is not a canned transcript,"* which is false: it is one today, and ADR-003 keeps it as one while assigning the recast to a future task.

### `drafts/cts285/points-normalization/CONFLICT_LEDGER.md` — 4 refuted, all of them

A dated record of a completed sweep. ADR-004 postdates it by one day and its own Consequences read *"No rework to … the points work."* A recorded deferral (*"Not reconciled here — a spine task"*) is scope documentation, not drift.

Two replacements were actively worse: one stamped a fabricated `Verified 2026-07-29` date into a 2026-07-23 record; another claimed a cadence collision *"survives only in `sources/uv-285/`"*, which is false — `drafts/cts285/README.md` still carries a 17-row calendar for a 16-week course.

A fourth claimed two locators "miss." They are exact once the 8-line provenance header is subtracted — the ledger used origin-file numbering consistently.

### `planning/26FA_Consolidation_Master_Plan.md` — 1 refuted

Line 47's voice-canon enumeration (including *"⑥ Hermeneutic Codex"*) was read as a claim about this repo's contents. It is not — it sits under `### AlgoCratic Claude project (~62 docs)` inside the source-assessment section, and every sibling bullet describes the *source corpus*. Rewriting it would corrupt a dated source assessment.

---

## Out of scope — surfaced but not folded in

*Real, verified, and deliberately not included above, because each belongs elsewhere. Listed so they are not lost.*

1. **`drafts/cts285/shared-dataman-artifacts/README.md` lines 11 and 13** carry live present-tense claims — *"reproduced verbatim from `phase0/NAMING_CANON.md`"* and *"is never called 'Datamon'"* — that no longer match `NAMING_CANON.md` post-ADR-004 (which rules two live terms, **Dataman** and **DataMon**, and retires the lowercase form). Line 13 also names `Grading_Key.md` as a Datamon location; it has zero hits. **This file was not in the audit's target set.** Belongs to a README pass or to open issue #17.

2. **Task 1.3 has never run.** `drafts/cts285/assignments/Week_02_Assignment_Agile_Simulation_Project_Selection.md` contains zero case-insensitive `dataman` hits and was last touched by 1.0b. The master plan already correctly shows 1.3 without a DONE marker, so this is not a status defect — it is a work gap, and it is B-005's.

3. **The ADR-003 rehearsal role card was never authored.** The master plan delegates it to task 1.4, but `fec3526` (PR #22) touched only the Week_03 and Week_04 assignment files, and no role card exists anywhere in `drafts/`. Belongs in the master plan's task table or issue #17 — not in a closed task's handoff.

4. **`drafts/cts285/README.md` still has a 17-row calendar for a 16-week course.** Tracked by the conflict ledger as a wk-2.5 calendar rebuild. Not a status claim; a content defect.

## Coverage note

Documents audited: `planning/26FA_Consolidation_Master_Plan.md`, `CLAUDE.md`, `README.md`, `sources/README.md`, `planning/INGESTION_MANIFEST.md`, `planning/ASSESSMENT_NOTES.md`, plus the three handoff/ledger files.

**Not audited:** `drafts/cts285/**` (assignments, knowledge checks, rubrics, shared artifacts), `phase0/` canon files other than as ground truth, `sources/**` bodies, `CLAUDE_SUPPLEMENTARY.md`, `planning/SESSIONS.md`, `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md`. A later B-003 round or the issue-#17 continuity audit should cover the drafts tree.
