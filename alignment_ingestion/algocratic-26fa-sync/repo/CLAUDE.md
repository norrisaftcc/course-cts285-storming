# CLAUDE.md — course-cts285-storming

You are an executor agent building Fall 2026 course material for **CTS-285** (Capstone I, systems analysis & design) and its Spring successor **CSC-289** (Capstone II, programming capstone) at FTCC, inside the **AlgoCratic Futures™ / AlgoCratic Media** immersive frame. Satire is the vehicle; competence is the destination. This repo is the staging ground: plans, canon, and drafts live here; finished material graduates to the course repos.

**Multi-agent workflow, fan-out rules, and session handoff protocol: see `CLAUDE_SUPPLEMENTARY.md`.** Read it before spawning subagents or picking up another session's work.

## Read first, in this order

1. `phase0/` — ALL of it. These are hard constraints, not background:
   - `KAYFABE_ARCHITECTURE.md` — the two-layer world model (Futures = the show, Media = its content division; the student plays a Creator whose content is software development)
   - `SHODANN_Character_Bible.md` — voice canon; §7 governs any automated feedback text; §9 is the never-list
   - `CTS285_Canonical_Points_Table.md` — THE points source of truth (750). No assessment exists that isn't a row there.
   - `NAMING_CANON.md` — mechanical renames + the Dataman/Datamon disambiguation + the Trusted Workflow definition (graded quiz answers depend on these)
   - `PRISM_Course_Mapping.md` — the ladder spans the program; CTS-285 exits at ORANGE, CSC-289 at GREEN
   - `ADR-001-csc289-team-based.md` — the 289 ruling (team-based, merged spine, GREEN Trajectory Check)
   - `QM_Retirement_Note.md` — QM is gone; RSI mechanisms survive (federal, not QM)
2. `planning/26FA_Consolidation_Master_Plan.md` — the plan of record: assessment verdicts, the 16-week spine (§2), the phased task breakdown (§3), interleave map and agent intelligence (§6)
3. `planning/ASSESSMENT_NOTES.md` — per-pipeline operational detail, including the full legacy-asset → week interleave table
4. `reference/voice-canon/README.md` — index of exported voice canon; `reference/PRISM.html` is the canonical framework

## Where source material lives

| Source | Location | Notes |
|---|---|---|
| UV-refresh CTS-285 (the base being adapted) | `../csc_dash/courses/CTS-285/` | ~60% survives with mechanical adaptation; **never trust its indexes/audits — they claim materials that don't exist** |
| UV-refresh CSC-289 | `../csc_dash/courses/CSC-289/` | Two forked architectures; ADR-001 governs the merge |
| Legacy AlgoCratic repo | `../course-cts285-template/` (or clone `norrisaftcc/course-cts285-template`) | The 26SP alignment cluster (engine briefs, terminology maps, GRD creative briefs) feeds weeks 13–16; aligned briefs exist ONLY in the full repo |
| Voice canon | `reference/voice-canon/` | Exported from the AlgoCratic Claude project (which you cannot access — everything needed is here; if something's missing, say so instead of improvising canon) |
| Dataman PDF manual | `reference/` — **check it exists before starting wk-1 tasks** | Module 1's analyst-read and quiz depend on it; if absent, it's a human blocker |

## Non-negotiables

1. Every point value traces to the canonical points table; every header states `X pts (Y% of 750)`; every rubric sums to its header.
2. Naming canon applies mechanically. **Dataman** (26FA modernization spine) ≠ **Datamon** (legacy creature game whose features become wk-2 stretch epics). Trusted Workflow: Issue → Branch → Draft PR → Development → Finish PR → Review → Merge.
3. Voice: Corporate body (L2) + SHODANN interjections (L1) + "Andrew's Note" OOC margins (L0) + Underground off-camera. Never re-voice the Underground; never rewrite Andrew's Notes into character; never use the retired punitive register at a student. The bible's never-list wins every conflict.
4. Write student-facing weeks to the struggle-pattern template: Struggle → Signs → Intervention → Success Indicator, with Dataman-specific struggles.
5. No fabricated testimonials, statistics, or "past student" anecdotes — genericize or flag for instructor sign-off.
6. Regenerate inventories from file trees, never from the docs' own claims. UTF-8 everywhere; re-encode anything revived from mojibake-afflicted legacy files.
7. New material goes in `drafts/<course>/<module-or-week>/`; nothing in this repo is student-facing until it graduates to a course repo.

## Open human blockers (do not wait on these for mechanical work; do not resolve them yourself)

- Dataman PDF manual availability/rights (gates wk-1 content)
- Jennifer Fisher / GRD-242 fall-consult calendar + deliverables (gates wk-15 finalization; canned brand-kit fallback is the scheduled mitigation)
- Which Mar-13 CSC-289 design actually ran in Spring 2026, and what broke (instructor field data)
- What 26FA students arrive knowing (CSC-113/114 prerequisite reality — sizes Week 1)

When a task needs a decision of record that doesn't exist, write an ADR proposal in `phase0/` and flag it — never silently decide.
