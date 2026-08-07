# F-004 — State corrections at `1079aba`

**Recorded:** 2026-08-07 · **Supersedes:** two claims in `F-001` and `F-002` (see §2, §3)
**Method:** re-derived from the file tree and `git log origin/main`, not from any document's claims
about itself (non-negotiable #6).
**Rules:** dated record (#8). A finding never rules (`lore/README.md` rule 4) — every item below
records what was measured; the decisions to act were the instructor's.

## 0. Why this exists rather than an edit

`F-001` and `F-002` are merged findings and therefore dated records. Two of their claims are now
wrong. `lore/README.md` rule 1 and `ADR-011` §Decision constraint 1 both forbid the obvious fix: a
finding that is overtaken gets a **new finding**, or a dated correction appended beneath the
original — never a silent rewrite. This is the new finding. `F-001` and `F-002` carry two-line
pointers to it and are otherwise untouched, **including `F-002`'s State column**, which stays as
written because flipping it is precisely the defect that column documents.

## 1. The spine sequence closed while the state blocks said otherwise

`origin/main` is at **`1079aba`**. Verified by `git log`:

| Task | Merge | Content |
|---|---|---|
| B-005 | `601a214`, PR #49 | Week 2 rewritten on the seeded backlog |
| B-006 | `111d833`, PR #50 | Weeks 6 and 9; Week 9 shipped the full ORANGE ADR evidence |
| B-007 | `1079aba`, PR #51 | Weeks 11 (269 lines) and 12 (286); stubs gone |

**All twelve CTS-285 weeks are converted. The declared B-004 → B-007 sequence is closed.**

At the moment this was measured, `CLAUDE.md:79-84` still listed Week 02 as awaiting rewrite, Weeks
06/09 as needing finishing, and named **all three merged tasks** under "Next up, in dependency
order." `CLAUDE_SUPPLEMENTARY.md:115` carried the same three as the remaining sequence. A session
planning from either block would have redone five converted weeks.

**This is `F-002`'s defect class, and it caught its own author.** The session that filed `F-002`
reported "next up: B-006 and B-007" to the instructor by reading that block, without checking the
tree the block claimed to be regenerated from. The finding about confident status text inherited
confident status text. Recorded here rather than smoothed, because the recurrence is the evidence.

## 2. Correction — "nine reference sites" is not reproducible

`F-001:115` and `F-002:32` both state that ADR-003's remainder has **nine reference sites**. Neither
publishes its counting rule, and the number cannot be reproduced under any single rule.

Best reconstruction: **19 sites across 9 files.** Raw line matches for
`role card|role-card|client brief|rehears|instructor-as-client` outside `sources/` and
`alignment_ingestion/` total 57 lines across 17 files; filtering to lines that reference the
*unbuilt artifact* — excluding the deferred persona, the ADR filename, and one false positive
("dress rehearsal", `Module_06_Knowledge_Check.md:128`) — yields 19 across 9.

**Nine is almost certainly a file count reported as a site count.** That is the same measure-switch
`F-001 §7` documents in the PATHFORM case, where the synthesis said 21 by moving from occurrences to
lines mid-sentence. Two instances in two findings by two different sessions suggests the failure is
structural rather than careless: **a count is being reported without its unit.**

**Also corrected:** the remainder is **two artifacts**, not one — the rehearsal role card *and* the
live instructor-as-client brief (`ADR-003:23,:34,:35,:41,:46,:59`). Both unbuilt.

## 3. Correction — the ADR rail is half-built, not absent

`F-001:120-121` and `F-002:33` describe the ADR rail as missing. It is not.

**Built.** B-006 shipped the Sprint 3 end in full:
`Week_09_Assignment_Sprint_3_Development_Code_Review.md:232` ("This is the ORANGE evidence"), `:237`
(a worked `ADR-001` example), `:265` ("an ADR … with no options considered and no consequence you
accepted is a changelog entry wearing a hat"), `:277` (`docs/adr/` deliverable), `:290` (rubric row).
Weeks 11 and 12 now *consume* it.

**Missing.** Only the **Sprint 1 rung** — and it is 2 sites against 2 promises, where the findings
named one of each:

| | Site |
|---|---|
| Promised | `phase0/PRISM_Course_Mapping.md:23` · `planning/ASSESSMENT_NOTES.md:15` |
| Un-promoted prose | `drafts/cts285/assignments/Week_05_...:291` · `drafts/cts285/rubrics/assessment-rubrics.md:102` |

`grep -rn "ADR-lite" drafts/` returns **0**. The ramp `PRISM_Course_Mapping.md:23` promises — *"a step
up, not a cold start"* — is missing only its first step, which makes the gap **more** conspicuous
than when `F-002` was written, not less: a student reaching Week 9's "This is the ORANGE evidence"
with no Sprint 1 rung experiences exactly the cold start the mapping rules out. Zero point cost to
close (ADR-002; the points table authorizes it).

## 4. New — the only Aug-18-band falsehood in the survey

`Week_03_Assignment_Stakeholder_Analysis_Interview_Plan.md:103` tells students, in printed
student-facing text:

> You'll conduct mock stakeholder interviews in Week 4 (instructor plays the stakeholder role).

`Week_04_Assignment_User_Story_Creation_Backlog.md:32,:36` delivers a **transcript re-read** under a
vestigial "Post-Interview Document" header (`:45`), while learning objective 1 (`:24`) still reads
"**Conduct** structured stakeholder interviews."

This is distinct from every other gap recorded this session, and the distinction is what makes it
urgent. The live-improvisation fallback covers material that is **missing**. It does not cover
material that was **promised in print and then contradicted** — and weeks 3–4 sit in the early band,
before the improvisation mechanic has been demonstrated to the class. `ADR-003` named the hazard in
advance: *"A fully canned transcript could quietly replace that live interview and erode its
compliance value."*

**Scope, stated precisely:** the regression is in the *graded elicitation artifact*, not a total RSI
loss — Week 04's 60-minute in-class activity does preserve substantive interaction.

## 5. Flagged, not executed — the re-point target is wrong

The instructor ruled that the three dangling citations to the retired `CTS285_COURSE_OUTLINE.md`
should be re-pointed at `drafts/spikes/datamon-virtual-pet-reskin.md` and ADR-004. That ruling was
made on a description of the spike supplied by this session, and **the description was wrong.**

Measured in the spike: `save/load` **0**, `battle` **0**, `encounter` **0**, `collection` **0**. The
spike carries the reskin's *direction* — evolution stages, companion-raising — not the four legacy
features the citations attest to.

The document that does carry them is **`phase0/NAMING_CANON.md:26`**: *"its save/load, battles,
encounters seed the wk-2 stretch epics."* ADR-004 supplies the framing ruling.

**Not executed.** The re-pointing is held pending confirmation, because executing a ruling whose
premise this session got wrong would launder the error into the tree. Recorded here so the
correction is visible whether or not the confirmation arrives.

A second hazard, noted for whoever does execute it: `Dataman_Seeded_Backlog.md:415-418` cite the dead
file **by line number** ("outline l.171"). Re-anchoring those to fresh line numbers in a live canon
file rebuilds the same fragility — `NAMING_CANON.md:26` moves the first time anyone edits that table.
Feature names are checkable by reading; line numbers are not.

## 6. Housekeeping measured in passing

- **`lore/README.md`'s index was stale** on the day the series was created — it listed `F-001` and
  `F-002` while `F-003` existed on `main`. The file's own closing line says to regenerate it from the
  directory. Fixed in the same change as this finding.
- **PATHFORM has moved again.** `F-001 §7` hand-derived 39 occurrences across 6 files;
  `git grep -c` at `1079aba` returns 50 matching lines across 14. Different measures, and B-007 moved
  the number. **Nothing should read this count and no gate should hardcode it** — that was `F-001`'s
  conclusion and it holds harder now.

## 7. What this finding does not do

It rules on nothing. The re-point target (§5) needs the instructor's confirmation; the Week 3/4
promise (§4) needs a fix that is content work, not a record correction; the Sprint 1 rung (§3) is
authorized at zero point cost but unscheduled. All three are recorded as measured state, and the
decisions remain where `lore/README.md` rule 4 puts them.
