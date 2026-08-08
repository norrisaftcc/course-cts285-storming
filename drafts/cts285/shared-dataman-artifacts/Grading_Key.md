# Grading Key — Dataman Class Artifacts

> **INSTRUCTOR-ONLY.** Do not distribute with the transcripts. This key marks the deliberate analyst hazards planted in the three stakeholder transcripts, gives the intended MoSCoW classification for the seeded backlog (the classification students are graded on), and states the traceability properties that make this artifact set a grading key. It supports the Week 3 (Stakeholder Analysis & Interview Plan, 25 pts / 3.3% of 750), Week 4 (User Stories & Product Backlog, 50 pts / 6.7% of 750), and Sprint 1: System Design (75 pts / 10.0% of 750) assessments.

---

## Part 1 — Planted analyst hazards, per transcript

The transcripts intentionally embed the four hazard types the Week 3–4 rubrics grade: **vague requirement**, **conflict between stakeholders**, **unstated assumption**, and **solution-shaped "requirement."** A strong analyst names them; a weak analyst transcribes wishes as requirements.

### Parent (Renee)

| Hazard type | Where | What a strong analyst does |
|---|---|---|
| **Solution-shaped requirement** | "You should absolutely put in a **leaderboard**... show him where he ranks against his whole class." | Recognize the *need* (motivation) behind it and reject the *solution*. The need is "help my child stay motivated." A public class ranking is a proposed solution that conflicts with the teacher and with the positive-only reinforcement the same parent praised. Do **not** turn this into a Must-Have story. |
| **Vague requirement** | "Just make it **safe**, and make it **good**... like the old one was." | Flag as non-actionable; decompose into concrete, testable needs the parent stated elsewhere (positive-only reinforcement; never show a wrong answer as right; auto-stop after idle). "Safe/good" alone cannot be built or tested. |
| **Unstated assumption** | "It's **his**. He'd have his own login... each kid has their own account — that's just how apps work now, right?" | Surface the assumption. The original was a *shared* device; the account/identity model is an open requirement, and it collides with the teacher's classroom-sharing reality. Do not silently bake one-login-per-child. |
| **(Genuine need, keep)** | Memory-bank of the specific missed facts; two tries then reveal; positive reward; review later without hovering; auto-off. | These are real, testable, and map to core stories 3.1, 1.2, 2.2, 4.1, 7.1. |

### Teacher (Ms. Alvarez)

| Hazard type | Where | What a strong analyst does |
|---|---|---|
| **Conflict (with parent)** | "A **leaderboard**? No. Absolutely not... measure each kid against where *they* were last week. Never against each other." | Name the direct conflict with the parent's leaderboard request and surface it for a decision rather than averaging. (Resolution guidance below favors the teacher + pedagogy: no public ranking.) |
| **Unstated assumption** | "I see **all** of my students', obviously." + parent's "his own." | Surface the data-visibility / permissions question (who may see whose results). It is an access-control requirement, not a given. |
| **Vague requirement** | "As long as it's **aligned to our standards**... the district ones... I'd have to pull the exact document." | Flag as unresolved; the specific standards must be pinned down before "aligned" is testable. |
| **Solution-shaped requirement** | "Just make it **an app on the class iPads** and I'll pilot it." | Recognize the platform decision is premature/solution-shaped; the need is "usable at a station during rotation," not "iPad" specifically. |
| **(Genuine need, keep)** | Per-kid targeted sets; attempt-level detail (first vs second try); class-wide miss patterns; grade-appropriate scoping (no negatives, small numbers); learner-authored problems; drill available *without* the timer. | Real; map to 4.3, 4.2, 1.5/1.6, 3.3, 5.4. |

### Retro Collector (Dale)

| Hazard type | Where | What a strong analyst does |
|---|---|---|
| **Solution-shaped requirement** | "Just **emulate the original ROM**. Pull the chip, run the real firmware in a browser." | Reject the solution; keep the underlying need — behavioral fidelity to the true device behaviors — which Epic 7 and the faithful-behavior stories already capture. ROM emulation is not a requirement. |
| **Gold-plating** | "Reproduce even the way it **looked when the nine-volt was dying**... specific light-show patterns for specific score ranges." | Flag as beyond-MVP. The real behaviors (remainder "r", no-negatives, two tries, ticks, scaled reward) are in scope; pixel-faithful hardware artifacts are not. |
| **Conflict (with classroom use)** | "The clock is **deliberately imprecise**... keep the ticks weird." vs the teacher's concern that some students fall apart under timed pressure. | Surface the tension (Story 7.2 flags it). Do not pre-decide; a configurable/"classic vs pressure-free drill" resolution is defensible. |
| **Unstated assumption / audience conflict** | "People like me, mostly. **Adults who had one.** Build it for the people who remember it." | Surface the primary-audience conflict with parent/teacher (kids-first). The MVP serves the learner; nostalgic fidelity is a secondary-audience Could-Have. |
| **(Genuine value, keep)** | The collector is the **best single source for the true data model**: answer-checker inversion, two-tries + never-wrong-as-right, division remainder, no-negatives, digit limits, all five games by name, ticks, scaled light show. | Use for ERD reconciliation; this transcript alone implies most entities/attributes. |

---

## Part 2 — Cross-transcript conflicts to surface (grade the surfacing, not a "right" answer)

1. **Public ranking vs. self-relative progress.** Parent wants a class leaderboard; teacher forbids it. **Guidance:** pedagogy and the teacher win — measure each learner against their own past, no public ranking. Students should *surface* the conflict; the specific resolution is defensible either way as long as the conflict is named.
2. **Atom-Clock timing: imprecise "character" vs. pressure-free classroom drill.** Collector wants ticks kept deliberately variable; the teacher warns that some students freeze under a timer and wants drill without the race. **Guidance:** a configurable / dual-mode resolution ("classic ticks" vs "pressure-free drill") is strong; pre-deciding without noticing the conflict is weak.
3. **Primary audience: kids vs. nostalgic adults.** Parent/teacher assume a child user; collector assumes an adult collector. **Guidance:** MVP serves the learner; fidelity/nostalgia is a secondary audience served by a faithful mode (Could-Have).
4. **Identity & data visibility.** Parent assumes per-child logins; teacher assumes full visibility of her students. **Guidance:** the account model and access-control rules are an open requirement to clarify, not an assumption to bake.

---

## Part 3 — Intended MoSCoW classification (the graded answer)

The seeded backlog leaves Priority unassigned on purpose; this is the instructor's intended classification. **Reasonable, defended variations are acceptable** — grade the reasoning, not exact-match. Solution-shaped and gold-plating items must **not** land in Must Have.

| Story | Intended MoSCoW | Rationale |
|---|---|---|
| 1.1 Check my answer | **Must** | The core answer-checker loop; the product is nothing without it. |
| 1.2 Two tries, then show answer | **Must** | Defining learning behavior. |
| 1.3 Never show wrong-as-right | **Must** | Correctness/integrity; parent's rule one. |
| 2.1 Score after a round | **Must** | Feedback the whole loop builds toward. |
| 2.2 Reward that scales | **Must** | Positive reinforcement is the retention mechanism; low-cost. |
| 3.1 Load a set (≤10) | **Must** | Both parent's and teacher's #1 request. |
| 3.2 Practice a stored set | **Must** | The other half of the memory bank. |
| 4.1 Review results later | **Must** | Parent's core "check later" need; low complexity over existing Score. |
| 1.4 Division remainder | **Should** | Real device behavior; not required for a first sprint of addition/subtraction facts. |
| 1.5 Refuse negatives | **Should** | Grade-appropriate guardrail; important but scoping, not core loop. |
| 1.6 Size limits | **Should** | Scoping constraint. |
| 4.2 Attempt-level teacher detail | **Should** | High teacher value; requires the Attempt entity; heavier. |
| 4.3 Assign different sets | **Should** | Classroom scale; not needed for a solo/home MVP. |
| 5.4 Drill without the clock | **Should** | Accessibility; important once timed games exist. |
| 7.1 Auto-stop after idle | **Should** | Healthy-use; the original had it; not core to learning. |
| 8.2 Degraded-state handling | **Should** | Robustness/NFR; keeps bad sessions from recording. |
| 8.3 In-app recovery | **Should** | Self-service recovery; modern baseline. |
| 3.3 Playing teacher (author problems) | **Could** | Excellent pedagogy, heavier build; enrichment. |
| 5.1 Electro Flash | **Could** | Engagement game; not core drill. |
| 5.2 Number Guesser | **Could** | Strategy game; enrichment. |
| 5.3 Missing-Number Box | **Could** | Problem-solving game; enrichment. |
| 7.2 Atom-Clock ticks | **Could** | Fidelity flavor; carries the unresolved timing conflict. |
| 8.1 Low-power indicator / USB-C | **Could** | Largely a device/PWA assumption on a web build. |
| 8.4 Contact support in-app | **Could** | Nice-to-have support path. |
| 6.1 Wipe Out | **Won't (this semester)** | Multiplayer coordination; beyond a solo 12-week MVP. |
| 6.2 Force Out | **Won't (this semester)** | Same. |
| Stretch S1.x (legacy entertainment module) | **Won't (this semester)** | Below-the-line homage; not product canon. |
| Parent's leaderboard | **Won't / cut** | Solution-shaped; conflicts with teacher + pedagogy. Should be caught and dropped, not built. |
| Collector's ROM emulation | **Won't / cut** | Solution-shaped; underlying fidelity need met by Epic 7. |
| Collector's exact light-show / battery-flicker reproduction | **Won't / cut** | Gold-plating; beyond MVP. |

---

## Part 4 — Which entities each transcript implies (for ERD grading)

| Entity (from `Dataman_Reference_ERD.md`) | Parent | Teacher | Collector |
|---|:---:|:---:|:---:|
| Learner | ✓ | ✓ | ✓ |
| Curator | ✓ | ✓ | (manual) |
| Game | | ✓ (timed games) | ✓ (all five named) |
| Session | ✓ | ✓ | ✓ |
| Attempt | ✓ (implied: "the two he missed") | ✓ (first vs second try) | ✓ (two tries) |
| Score | ✓ | ✓ | ✓ |
| Problem | ✓ | ✓ | ✓ |
| MemoryBankSet | ✓ | ✓ | (manual) |

**Every reference-ERD entity is implied by at least one transcript** — the property that lets an ERD rubric point at a source. Attempt and MemoryBankSet are the two most commonly *missed* by students (hence the degraded ERD variants A and B).

---

## Part 5 — Traceability properties (the grading-key guarantees)

Stated so a rubric can verify them:

1. **Every reference-ERD entity is derivable from ≥1 transcript.** See Part 4 (all eight covered).
2. **Every transcript-derived core story traces to a named stakeholder need.** Each transcript-derived core story carries a `↳ Traces to:` line naming the stakeholder(s) and manual page; Epic 8 is Appendix-derived and does not claim stakeholder motivation.
3. **No core story is motivated only by the deferred instructor-as-client persona.** That persona was intentionally **not** written as a transcript (see `phase0/ADR-003-instructor-as-client-persona.md`); accordingly, no story in this backlog depends on it. If a future instructor-as-client artifact is added, any story it uniquely motivates must be added then, not now.
4. **Every stretch epic traces to the legacy-game feature list recorded in `phase0/NAMING_CANON.md` §“Dataman vs. DataMon”.**
5. **No orphan core stories.** Every core story has a motivating source; Epic 8 is explicitly Appendix-derived rather than transcript-derived.
