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

## Dataman vs. DataMon — two modernization bases (search-and-replace hazard)

Per **ADR-004**, the modernization spine offers **two student project bases**, meaningfully distinguished — **Data*man*** (the "man": physical product) vs **Data*Mon*** (the "mon": monster/creature reskin). The `man` / `Mon` swap is the exact search-and-replace hazard this table exists to prevent.

| Term | Meaning | Where it lives |
|---|---|---|
| **Dataman** | The 1977 *physical* calculator (historical product) **and** the student modernization project based on it ("**Dataman 2.0**"). **The instructor exemplars (1.0a artifacts, worked examples) use Dataman** — teaching the refresh of a physical system into a web app. | Spine + exemplars |
| **DataMon** | A virtual-*pet* reskin of the same idea (Digimon-adjacent; villain = NULL, "the value that is *not a number*") **and** the student project based on it ("**DataMon 2.0**"). An adopted alternative basis. | Alt basis; seed in `drafts/spikes/datamon-virtual-pet-reskin.md` |
| Legacy "Datamon" game | The retired week-5 creature-collection console game — now **subsumed** as DataMon's historical origin (its save/load, battles, encounters seed the wk-2 stretch epics), **not** a separate live term. | Legacy outline/roadmap (historical) |

**Rules:** the two live terms are **Dataman** and **DataMon** (not the old lowercase "Datamon"). Students choose one basis; the *exercise* is identical (modernize a legacy system → web app), only the flavor differs. **Exemplars and worked examples are Dataman.** The Week-1 analyst-read + doc-analysis quiz always read the faithful **1977 DataMan manual** regardless of a student's later basis. A naive re-pointing agent WILL conflate `man`/`Mon` — every executor prompt touching either term must carry this table.

> **Graded-content note (ADR-004):** the Dataman ≠ DataMon distinction stands, so quiz keys encoding it remain valid. Any item that assumed a *single* basis must accept either "Dataman 2.0" or "DataMon 2.0" as the student's project — flag for the quiz/KC tasks (1.2, 1.8).

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
