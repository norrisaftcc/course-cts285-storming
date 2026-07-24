# ADR-004: Two Modernization Bases — **Dataman** (physical) and **DataMon** (reskin); Exemplars Use Dataman

**Status**: Accepted — 2026-07-24 (instructor ruling)
**Deciders**: A. Norris (instructor) — **decided**
**Governs**: the student project basis for the CTS-285 modernization spine (wks 1–12); `phase0/NAMING_CANON.md`; the wk-2 seeded backlog; the shared class artifacts (1.0a)
**Resolves**: #16 (Datamon reskin adoption)

## Context

The 1977 TI **DataMan** is the historical artifact the course modernizes (see `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`). A virtual-pet anime **reskin** was explored as a spike (`drafts/spikes/datamon-virtual-pet-reskin.md`; villain = NULL) and its adoption left open under #16. NAMING_CANON previously carried "Datamon" only as the retired week-5 creature-collection game.

## Decision

1. **Two project bases; student choice.** A student modernizes **one** of:
   - **Dataman** — the original 1977 *physical* calculator (the "man": the historical product), yielding their **"Dataman 2.0"** project; or
   - **DataMon** — a virtual-*pet* reskin of the same idea (the "mon": monster/creature, Digimon-adjacent), yielding their **"DataMon 2.0"** project.
   Offering both lets a student gravitate to whichever resonates — physical-system refresh vs. creature/pet engagement. Both are the *same pedagogical exercise* (modernize a legacy system into a web app); only the flavor differs.

2. **The instructor-provided EXEMPLARS use Dataman.** The shared class artifacts (1.0a: stakeholder transcripts, reference ERD, seeded backlog) and worked examples are built on **Dataman**, to teach the historical context of refreshing a *physical* system into a web application. No rework to 1.0a — it is correctly Dataman-based.

3. **DataMon is adopted** as a first-class alternative basis / "DataMon 2.0" exemplar-in-waiting — no longer a mere spike. The reskin spike is its seed; the retired week-5 creature-collection game is its historical origin.

## Naming (updates NAMING_CANON)

- Two **live** terms, meaningfully distinguished — **Data*man*** (the product/person) vs **Data*Mon*** (the monster/creature reskin):

  | Term | Meaning |
  |---|---|
  | **Dataman** | The 1977 physical product AND the "Dataman 2.0" student project. **The exemplars use this.** |
  | **DataMon** | The virtual-pet reskin AND the "DataMon 2.0" student project. Seeded by the retired week-5 creature game. |

- The old lowercase "**Datamon** (legacy game)" is **subsumed** as DataMon's historical origin — not maintained as a separate live term.
- The `man`/`Mon` distinction is a real search-and-replace hazard; every executor prompt must carry the NAMING_CANON table.

## Consequences

- **Graded content:** the "Dataman ≠ Datamon" distinction quiz keys hinge on **stands** (now Dataman vs DataMon). Any quiz/rubric item that assumed a *single* basis must accept either "Dataman 2.0" or "DataMon 2.0" as the student's project — flag for the KC/quiz tasks (1.2, 1.8).
- **Week-1 analyst-read + doc-analysis quiz (1.1/1.2)** still read the faithful **1977 DataMan manual** — the shared historical source — regardless of which basis a student later chooses.
- **wk-2 seeded backlog:** the "legacy creature-game features as stretch epics" framing (master plan §6.2) is now the seed of the **DataMon** basis; students who pick DataMon may promote those from stretch to core.
- No rework to 1.0a, the transcript, or the points work.
