# HANDOFF — Task 1.0a: Shared Dataman Class Artifacts

Branch: `task/1-0a-dataman-artifacts`. Nothing committed or pushed — everything is staged in the working tree for coordinator review, per the task instruction.

## DONE

All deliverables authored in `drafts/cts285/shared-dataman-artifacts/`:

- `README.md` — traceability note + **verbatim** `NAMING_CANON.md` Dataman/Datamon disambiguation + artifact→module/assessment consumption map + honesty/scope notes + OOC Andrew's Note.
- `Stakeholder_Transcript_Parent.md`, `Stakeholder_Transcript_Teacher.md`, `Stakeholder_Transcript_Retro_Collector.md` — three fictional in-world canned transcripts (~1–2 pp each), in the Module-2-workshop interview shape. Each labeled a class artifact; each seeds the four graded hazard types; device claims trace to the manual transcript.
- `Dataman_Reference_ERD.md` — known-correct model (Mermaid `erDiagram` + prose entity/attribute/relationship table), **8 entities**, plus three degraded variants (A: missing Attempt; B: missing MemoryBankSet; C: attribute degradation — remainder + ticks) each with its answer key, plus intentional-non-entity boundaries.
- `Dataman_Seeded_Backlog.md` — **8 core epics / 26 core stories** + **1 below-the-line stretch epic / 4 stretch stories** (30 stories total). Week-4 format (statement + Given/When/Then + Priority + Story Points + Notes + `↳ Traces to:`). Board columns exactly `To Do → In Progress → In Review → Done`. Priority/Points left unassigned on core stories (the graded classification/estimation exercise); intended MoSCoW lives only in the grading key. Includes Epic 8 (Device Health & Recovery), the modernized exception/NFR stories from Appendix p.26 per the coordinator's mid-task refinement (low-power/USB-C, degraded-state, in-app recovery, contact support).
- `Grading_Key.md` — instructor-only: planted hazards per transcript, cross-transcript conflicts, intended MoSCoW table, per-transcript entity implications, and the five traceability guarantees.
- `phase0/ADR-003-instructor-as-client-persona.md` — proposal, tagged `needs-instructor` (see BLOCKED-ON / CANON-TOUCHED).

Verification run: in the shipped student-facing artifacts, `grep` confirms `Datamon` appears only in the README disambiguation section (location a) and the backlog stretch section + reskin-spike filename (location b). The only other folder-wide hits are two self-referential mentions in this HANDOFF (a coordinator process doc, not a student-facing artifact) that describe the naming discipline rather than misname the project — nowhere is the modernization project or its data model called "Datamon." Zero hits for `Sacred Flow|EventPro|CTS-289`, case-sensitive `GRAY`, `citizen`, and `Sprint Backlog`. All files UTF-8, no mojibake. All internal path references resolve in-tree.

## REMAINING

- Nothing required to close 1.0a. The instructor-as-client (fourth stakeholder) is intentionally deferred to ADR-003 and to tasks 1.3/1.4 (author it as a live-play role brief, not a canned transcript) — not this task's work.
- Downstream (other tasks, not blockers): tasks 1.3/1.4 wire these into the Week 2/3/4 assignments; Sprint 1 (wk5–6) builds ERD knowledge-check items from the degraded variants.

## DECIDED (in-session micro-decisions, not in phase0/)

- Reference-ERD entity set fixed at 8: Learner, Curator, Game, Session, Attempt, Score, Problem, MemoryBankSet. Curator↔Learner modeled many-to-many (join in implementation); LightShow/answer/battery-hardware treated as non-entities (documented in the ERD's boundaries section).
- Intended MoSCoW baked into the grading key (guidance, defended variations acceptable), not into the visible backlog.
- Epic 8 exception/NFR stories written as *modern equivalents* of the 1977 Appendix (per coordinator refinement), each still tracing to manual p.26.
- Fictional persona first names used (Renee / Ms. Alvarez / Dale), each explicitly labeled a class artifact — consistent with the UV refresh's persona convention; no real person referenced.

## BLOCKED-ON

- **Instructor-as-client persona (ADR-003).** Genuine canon gap surfaced, not decided: (a) 3 vs 4 transcripts, (b) canned vs live-play, (c) L2 client vs L0 OOC register. Proposal: 3 canned + 1 live role brief, neutral L2 register, no new named persona (lexicon lock). Needs instructor ruling.
- **Dataman manual rights/permission** — unchanged open human blocker (CLAUDE.md §Open blockers). Content existence is satisfied (manual is transcribed and was the product source of truth for this task); redistribution rights are not. No scans published from this task.
- **Not blocking here, noted:** Week 1–2 module architecture and sprint/week-numbering are spine (Rule 1) and were left untouched; teacher's "aligned to district standards" and the account/permission model are open requirements deliberately surfaced (not resolved) in the artifacts.

## CANON-TOUCHED

- **New file `phase0/ADR-003-instructor-as-client-persona.md`** — a *proposal* only (status: Proposed, `needs-instructor`); decides nothing until the instructor signs off. No existing phase0 doc edited. No changes proposed to NAMING_CANON, the Bible, or the points table.
