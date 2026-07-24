# Naming Canon
*Phase 0.6 · July 22, 2026 · Applied mechanically by every executor agent. Quiz keys and rubric lines encode these — a miss becomes a wrongly-graded student answer.*

## Rename table (old → canonical)

| Old form(s) | Canonical | Notes |
|---|---|---|
| Sacred Flow™, Sacred Flow, Sacred Workflow | **Trusted Workflow** | Three generations deep (2025 → Spring 26 → Media skin). Rename on sight in Media-skin material; Underground docs may still mutter "the Flow" — leave Underground voice untouched. |
| GRAY (clearance/consult spelling) | **GREY** | GREY = the instructional-designer / cross-discipline consult tier. |
| EventPro | **EventFlow** | White-label naming drift. |
| `FinacialTracker*` (typo) | **FinancialTracker** | Fix filenames on migration, keep redirects/notes in commit messages. |
| `_base` / `_core` aligned-brief suffixes | **`_base`** | Pick one; `_core` files rename on migration. |
| citizen, employee | **Creator** | Media skin. "Citizen" survives only in classic-skin reference material. |
| CTS-289 (file prefix / title errors) | **CSC-289** | "System Support Project" is the CTS-289 NCCCS title — CSC-289 is "Programming Capstone Project." |
| Drew Norris / Andrew (inconsistent) | per instructor preference — **one form per document type** | "Andrew's Note" is the established OOC device in the refresh; don't rename the device. |
| SHODAN (single N, VISUAL_ROADMAP "Year 2 cybersecurity integration") | **separate thread** | Do NOT merge with SHODANN. The extra N is never explained in-world. |

## The Dataman / Datamon disambiguation (search-and-replace hazard)

| Term | Meaning | Where it lives |
|---|---|---|
| **Dataman** (also "Dataman/Datamon modernization") | The 26FA CTS-285 solo spine project: modernizing the retro handheld math toy through a full SDLC, weeks 1–12. Module 1 reads the Dataman PDF manual "like an analyst." | New 26FA material |
| **Datamon (legacy game)** | The old week-5 creature-collection console game from the retired spine. | Legacy outline/roadmap/manifest |
| **Datamon (2026 reskin exemplar)** | A virtual-pet anime *reskin* of the 1977 device — a **teaching exemplar** of "what a modernization/reskin looks like," kept distinct from the Dataman spine students build themselves. Villain = NULL ("the value that is *not a number*"). **Status: exploratory spike, NOT adopted product canon.** | `drafts/spikes/datamon-virtual-pet-reskin.md` |
| Canonical interleave | Legacy Datamon *game* features (save/load, battles, encounters) are recast as **stretch-goal epics** in the week-2 seeded Dataman backlog — deliberate in-world homage, not a merge. | Wk 2 materials |

There are now **three** senses: **Dataman** (the spine project students build) vs. two senses of **Datamon** (the legacy game, and the 2026 reskin exemplar). A naive re-pointing agent WILL conflate these. Every executor prompt touching either term must carry this table.

> **Adoption of the reskin is undecided (`needs-instructor`).** Whether to adopt the Datamon virtual-pet reskin (as the wk-2 stretch-epic framing, as a standalone exemplar, or shelve it) is an instructor call. If adoption would change graded content — quiz keys depend on the Dataman ≠ Datamon distinction — record it as an **ADR** first; until then the reskin stays an exploratory spike and the spine is Dataman only.

## Workflow canon (graded answers depend on this)

**The Trusted Workflow:** Issue → Branch → **Draft PR** → Development → Finish PR → Code Review → Merge.

- Supersedes the entry-ticket key (Issue→Branch→Code→PR) and any doc teaching code-before-PR.
- **Board columns:** To Do → In Progress → In Review → Done. ("Sprint Backlog" as a column name is retired; the *product backlog* remains a backlog.)
- Every quiz item, rubric line, and answer key encoding workflow order or column names regenerates against this section.

## Term definitions locked elsewhere

Media-skin lexicon (Creator, Channel, XU/Exposure™, the Trapezoid, Prompt Sovereignty™, Channel Sunsetting, Debut Stream, etc.): defined once in `SHODANN_Character_Bible.md` §5 — no synonyms, no new coinages without instructor approval. PRISM tier meanings: bible §8 / `PRISM_Course_Mapping.md`.

## Filename discipline (new files)

- Module/sprint-based names (`Sprint_1_Design.md`), not week-pair filenames (`Week_05...` containing "Week 5–6" caused three colliding numbering schemes).
- Week numbers may appear inside files; **calendar dates live in exactly one calendar document** per course.
- Encoding: UTF-8; anything revived from mojibake-afflicted legacy files (YELLOW rubric, VISUAL_ROADMAP, PROJECT_STATUS, csc289-status) gets re-encoded, never copied raw.
