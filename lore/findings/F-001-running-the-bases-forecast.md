# Running the Bases — Work-Breakdown Forecast and Recurrence Findings

> **Dated record, 2026-08-06. A forecast, not a plan of record.** Nothing described here is built,
> staged, or authorized. No work package below has been executed. Where this document says a
> package "delivers" something, it means *would deliver, if run* — the conditional is the whole
> document.
>
> **Provenance.** Produced by a 7-agent workflow under Rule 1a's cap: 5 read-only mappers (one per
> dimension), 1 synthesis, 1 adversarial verifier. Every mapper was briefed on non-negotiable #6
> (regenerate from the tree) and #8 (records are not status) before launch. Reconciliation:
> **dispatched 7, returned 7, dead 0, empty 0** — 808k subagent tokens, 27.8 minutes. Counts in
> this document were re-derived from the file tree during synthesis and again during verification;
> where the two disagreed, the hand-check is recorded in §7.
>
> A rendered version with the recurrence charts is published at
> `https://claude.ai/code/artifact/01037422-ae5e-465a-a97d-ea33073903a1` (private to the owner).

## 0. What prompted it

A detailed build plan arrived written against a **different repository** — one with `modules/`,
`_lore/`, four CI gates with self-test fixtures, a spine document carrying numbered open items, and
a prior measurement run to extend. That plan builds "running the bases": an exemplar teaching the
seam between **writing pseudocode** (instructing a literal reader) and **interviewing a customer**
(eliciting from a person), anchored on a four-noun floor test presented explicitly as a *heuristic,
not an algorithm*, plus a multi-agent run testing the exemplar under deliberately withheld
information.

The question asked was what the equivalent would cost **here**. This is that answer.

The seam is real in our material and does not need inventing: Week 01 hands a student a 1977 manual
and says *extract the requirements*; Weeks 03–04 hand them three stakeholders and say *elicit them*.
Same artifact, two routes. We currently teach both without ever naming them as the same move.

## 1. What ports, and what does not

| The source plan has | We have | Translation |
|---|---|---|
| Exemplar bundle in `_storming/exemplars/` | `drafts/cts285/shared-dataman-artifacts/` — 8 files: README + grading key + degraded-variant rig | **Reuse the shape.** No new category required. |
| Four-noun floor test (Audience / Scope / Format / Path) | `Grading_Key.md:9` — four hazard types, **already framed as a heuristic, not an algorithm** | **Extend ours; do not import the nouns.** *Path* collides with ADR-006's PATHFORM marker and with `$PATH` in `Week_01:232`; *Scope* collides with SDLC Planning and PRISM's "scope of ownership." |
| Four CI gates + fixtures, then a reduction pass measured by keeping them green | **Zero CI.** `.github/` holds one file. One executable in the repo: `.claude/workflows/bounded-fanout.mjs` | **The reduction pass does not port** — there is nothing to reduce. Either build a minimal gate substrate or decline it in writing under ADR-008's test. |
| `F-###` findings series; a `_lore` merge gate | No findings series exists. B-IDs are work units, not findings. CLEAR is a *human* gate (ADR-009), instructor-only | Findings ride the `B003_RECONCILIATION_WORKLIST.md` shape. **The merge gate stays human and unmechanized by design.** |
| Multi-agent run under withheld information | `bounded-fanout` (cap 7, refuses), `adversarial-verifier`, and a ready three-way information split | **Ports well** — but with no isolation, no held agent, and no mechanical stage. |

## 2. Work packages

### WP-1 — ADR-008's pre-registered probe · **S** (3 agents, one wave)

Runs the measurement `phase0/ADR-008-rule-1a-enforcement.md:68` already specifies and nobody has
executed. Targets are `planning/SESSIONS.md` and `planning/B003_RECONCILIATION_WORKLIST.md`, both
dense with dated rows. Outcome is one integer per arm: how many dated rows it proposes to "fix."
Baseline is known — 19 of 20 prior refutations were records-read-as-status.

Deps: none. **Risk:** none material; worst case the arms tie and the prior stays a prior.
**Cheapest package here, and it closes a question the repo already wrote down.**

### WP-2 — ADR-011: the heuristic's status and its lexicon · **S** to write, unbounded to rule

A *Proposed* ADR covering three coupled questions: does the hazard taxonomy become student-facing;
is a named floor test coined at all; if so, under what nouns. **ADR-012** is the next free number
(this document originally said 011; ADR-011 was taken on 2026-08-06 by the findings-series ruling
that filed this document).

Blocks WP-3 and WP-6. **Risk: treating it as optional.** NAMING_CANON's lexicon lock — *no new
coinages without instructor approval* — plus the instructor's own note at
`shared-dataman-artifacts/README.md:79` make silent coinage a doctrine failure, not a taste call.

### WP-3 — The seam exemplar, instructor-facing · **M**

Names the document route and the person route as two routes to one spec, then runs a single
requirement down both. The Atom-Clock "ticks" conflict is the natural case: the M1 quiz already
assesses it and `Grading_Key.md` Part 2 already records it as a planted cross-stakeholder conflict.
Best existing statement of the seam to build from is
`Week_02_Assignment_Agile_Simulation_Backlog_Initialization.md:287,:294`.

Deps: WP-2, if it names anything. Cost is voice (Opus-tier, bible §9) and the struggle-pattern
rhythm — which has only **two** conforming implementations (Weeks 01 and 02) and no template file.
**Risk:** going student-facing pulls in the ADR-006 graduation block, non-negotiable #4, the full
L2/L1/L0 stack, and the points question simultaneously. Keep it instructor-facing.

### WP-4 — Gate substrate, minimum viable and refusing · **M**

Three gates with inline fixtures — points, encoding, and a **report-only** PATHFORM counter — plus
a ~30-line self-test harness for `bounded-fanout.mjs`. The points table parses clean: **16 rows
summing to 750, no special-casing**, and all 11 existing assignment headers match it today. Encoding
ships green today as well: every `.md` under `drafts/`, `phase0/`, and `planning/` round-trips UTF-8.

**Cost the verifier added:** header-to-row *comparison* is not special-case-free. One table row
covers five knowledge-check files at 10 pts each, and rows 13–16 (150 pts) have no draft files at
all. A comparator needs a row→file mapping that does not exist in this repo, and inventing one is a
spine decision, not a 20–60-line leaf.

**Risk: building a naming gate or a markdown link gate.** Measured signal on the naive naming grep
is ~1:145, and markdown-syntax internal links number **zero** repo-wide outside `sources/` — a
conventional link checker reports clean and can never bite. Either would train everyone to ignore
the suite.

### WP-5 — The adversity run · **L**

A split-picture measurement of composition under information-slice. Best content target is
`drafts/cts285/shared-dataman-artifacts/Dataman_Reference_ERD.md`, which **already ships** the
answer key (`:3`), a per-entity `Traces to (transcript + manual)` column (`:87`), and three degraded
variants with their own keys (`:107`–`:158`) — that is reuse, not build. Cheapest first target is
`Daily_Standup_Template.md`, whose withheld-information hazard already exists in the tree
(`WIRING_MANIFEST.md:41`, 3-question vs 4-section, marked *"Not resolved here"*).

Deps: WP-1, WP-4. Size is driven by isolation, a scorer built from scratch, and a control arm — not
by agent count. **Risk:** without isolation the run cannot distinguish reconstruction from
transcription and the headline number is worthless.

### WP-6 — The true spine defect, surfaced not solved · **M**

The strongest finding in the run; the verifier attacked it and could not dent it. Two promises
referenced from many places and implemented in none:

- **ADR-003's rehearsal role card and live instructor-as-client brief.** Nine reference sites. *(Corrected 2026-08-07: "nine" is not reproducible — best reconstruction is 19 sites across 9 files, a file count reported as a site count; and the remainder is two artifacts, not one. Superseded by `F-004` §2. Original sentence left as written.)*
  Delegated to task 1.4; master plan `:99`/`:109` record the carry verbatim — *"1.4 shipped without
  it, so it now sits with 1.3"* — and 1.3 (B-005, `601a214`) shipped without it too.
  `grep -rn "rehears|instructor-as-client|role card" drafts/cts285/assignments/Week_0[34]*` returns
  **zero**.
- **The ADR rail.** `PRISM_Course_Mapping.md:12,:23` define CTS-285's exit tier as banking ADRs;
  `Week_05:291` still reads "Design Rationale (400–600 words)"; `grep ADR-lite drafts/` returns 0. *(Corrected 2026-08-07: the rail is half-built — B-006 shipped Sprint 3 in full and Weeks 11–12 consume it; only the Sprint 1 rung is missing, across 2 sites against 2 promises. Superseded by `F-004` §3.)*

Week 04 has also replaced its graded live interview with a transcript re-read (`:32`, `:36`) under a
vestigial "Post-Interview Document" header (`:45`) while learning objective 1 still says *"**Conduct**
structured stakeholder interviews"* (`:24`). ADR-003 names this hazard in advance: *"A fully canned
transcript could quietly replace that live interview and erode its compliance value."*

**Narrowed per the verifier:** the regression is in the **graded elicitation artifact**, not a total
RSI loss — the 60-minute in-class activity does preserve substantive interaction. B-006 already owns
the ADR rail ("ORANGE ADR evidence"), and the points table authorizes it at **zero point cost**
(`:22`, `:56`).

**Risk:** building a seam exemplar on top of a broken elicitation ladder teaches the wrong ladder.

### WP-7 — Records · **S** per record, cannot be deferred

One appended `SESSIONS.md` row per session, one Rule 5 handoff block per PR, one findings document
in the B-003 shape (raised / confirmed / refuted + dispatched / returned / dead + a §Refuted
section), and a correction for the two live-tense references to the nonexistent
`.claude/tools/records-guard.mjs`.

**Corrected per the verifier:** commit `a8f6b8c` is **not** an authoring-time precedent. It was a
later commit defusing a row authored in `601a214` — retroactive, and legitimate only on a session's
own *unmerged* row. On merged rows the fix is blocked and a proposed abstract rides on the PR
instead. **Risk:** the append-only rule freezes text at merge, so this tax cannot be paid late.

## 3. Sequencing and the Rule 1a arithmetic

**Spine — single-session, never parallelized (Rule 1):** WP-2, WP-3's design and voice pass, WP-5's
wave-0 packet design, WP-6 entirely.
**Leaf — fan-out eligible:** WP-4's gate implementations once the checks are decided; WP-5's build arms.

Order: **WP-1 → WP-2 (file, then wait) → WP-4 ∥ WP-6 → WP-3 → WP-5.** WP-7 runs throughout.

Against the formula `bounded-fanout` actually checks (`artifacts + audit + scribe`, refuses above 7):

| Wave | Composition | Count |
|---|---|---|
| WP-4 | 4 artifacts + audit + scribe | **6** |
| WP-5 w0 — design | spine, single session | **0** |
| WP-5 w1 — build | 4 builders (spec-only / elicitation-only / both / **control**) + audit + scribe | **6** |
| WP-5 w2 — diff | a script in the orchestrating session | **0** |
| WP-5 w3 — verify | 2 verifiers, each re-deriving from files never from w2's report | **2** |

Eight agents across four waves, max wave 6, nothing nested. A fifth builder in w1 would be exactly 7
with no headroom — don't. **If the customer must be an agent**, w1 splits 3 / 1 / 5; the honest
recommendation is that the orchestrating session or the instructor plays the customer, which costs
zero agents, gives real turn-taking, and matches ADR-003's existing ladder.

> **Unenforced hazard.** `.claude/workflows/bounded-fanout.mjs:80` iterates `art.files || []`, so an
> artifact with no `files` registers no ownership and the collision guard silently passes — while an
> artifact that *does* list shared inputs makes the wave refuse for a collision that is the
> experiment's entire point. A split-picture run shares inputs by design. Neither behavior is
> documented.

## 4. Decisions that belong to a human

Listed as decisions, not conclusions. Our doctrine is that an executor never silently decides.

1. Does the hazard taxonomy go student-facing, and is a floor test coined at all? *(blocks WP-3's naming)*
2. Where does the exemplar live — `drafts/spikes/`, `shared-dataman-artifacts/`, `planning/`, or a new path requiring an edit to non-negotiable #7?
3. Student-facing or instructor-facing? *(gates everything downstream)*
4. GitHub Actions at all? No workflow has ever run here. Actions passes ADR-008's test; a locally-invoked suite does not — but Actions creates a second place where "checks passed" can be misread as CLEAR.
5. Where does the ADR-003 remainder get re-parented, now that both delegates have closed? The backlog has no mechanism for a closed task's undone remainder.
6. Is `records-guard.mjs` built, or is the reference corrected?
7. Who holds the WRITE TOKEN? The block names an ended session; by its own terms the 🔑 sits with the instructor.
8. **Does any of this preempt B-006 and B-007?** Backlog §8 says do B-004 → B-007 as one controlled spine sequence, and B-005 has just landed. *(Added by the verifier — the synthesis had omitted it.)*

## 5. What this forecast does not do

Nothing graduates to a course repo — **ADR-006 is *Proposed*, and blocks graduation regardless of
quality.** No student-facing file is edited before decision 1 is ruled. The 750-point arithmetic is
not reopened: the exemplar would carry zero points of its own, and the ADR rail rides inside Week
09's existing 100. No `Week_08` or `Week_10` file is created. No naming gate and no link gate is
built. No student is given gate authority — ADR-009 forbids it on its own strength, and **ADR-010 is
*Proposed*, citable as reasoning and never as authority.** CLEAR stays unmechanized; green gates
would be evidence offered at REVIEW, not authorization.

## 6. Verification record

The synthesis was checked by an adversarial verifier in refutation posture. **Verdict:
SOUND-WITH-FIXES.** Seven defects named; all seven corrected in this document before it was written.

| # | Defect | Correction applied |
|---|---|---|
| D1 | WP-7 read `a8f6b8c` as an authoring-time precedent | It is retroactive, own-unmerged-row only; merged rows get a proposed abstract instead |
| D2 | PATHFORM counts mixed two measures inside one "verified" sentence | Measure named; 21 → **22** occurrences in `drafts/` |
| D3 | Dangling-referent finding was under-scoped | Added `Dataman_Seeded_Backlog.md:410`, the load-bearing citation |
| D4 | WP-5's ERD parenthetical read as new build | Re-stated as reuse — key and trace column already ship |
| D5 | `.github/agents/my-agent.agent.md` called "an unfilled Copilot stub" | It carries authored voice content; not free to overwrite. Operative claim (no CI has ever run) survives |
| D6 | WP-4's points gate understated its cost | Row→file mapping problem added; the parse claim and "ships green today" both survived |
| D7 | Sequencing omitted its collision with backlog §8 | Added as decision 8 |

**What survived refutation:** the Rule 1a arithmetic in full (`RULE_1A_CAP = 7` is a constant at
`bounded-fanout.mjs:34`; the formula is checked at `:55` and refuses at `:65`); the collision-guard
warning; "no mechanical stage"; every canon statement (ADR-002, ADR-006, ADR-009, ADR-010); WP-6
entirely; the `README.md:11-19` pre-ADR-004 naming finding; and the absence checks.

**Zero records-read-as-status errors.** The verifier reports pushing hardest on exactly this check.
That is the class which produced 19 of 20 refutations on 2026-07-29, and the only difference this
time was that every agent was told the rule before launch.

## 7. Honest uncertainty

- **The mappers disagreed on the PATHFORM count** — 6 files / 22 sites / 12+9. Hand-derived:
  **39 marker occurrences outside `sources/`, 22 of them in `drafts/`, across 6 files.** The
  synthesis reported 21 by silently switching from occurrences to lines. `26FA_Consolidation_Master_Plan.md:148`'s
  "3 sites" and `B003_RECONCILIATION_WORKLIST.md:33`'s "exactly 3" are **dated claims, not live
  constants** — a gate hardcoding 3 would fail correct content.
- **A retired file is still load-bearing.** `CTS285_COURSE_OUTLINE.md` was marked RETIRE at ingestion
  (`INGESTION_MANIFEST.md:332`) and exists nowhere in the tree. Three live artifacts cite it:
  `Grading_Key.md:114`, `shared-dataman-artifacts/README.md:62`, and
  `Dataman_Seeded_Backlog.md:410` — the last traces the entire stretch-epic block to it. The
  traceability guarantee that artifact set advertises is currently uncheckable.
- **`README.md:11-19` in the shared artifact set reproduces the pre-ADR-004 naming split** — it
  asserts the project is "never called 'Datamon'" and tables the legacy game without ever presenting
  **DataMon** as a live student basis. It is also the most copy-prone section in the model set.
- **`CLAUDE.md`'s state block lags the tree** — B-005 landed at `601a214` but the block still lists
  Week 02 as awaiting rewrite. Ordinary lag, not drift; but an agent planning from the state block
  will redo the work.
- **Unverified by this run:** branch protection on `origin/main`; whether `registry/KEEP.md` — cited
  as live by both ADR-009 and ADR-010 — is reachable by any means. It is absent from this tree and
  from the installed skill.
- **No baseline variance exists** for a blind rebuild in this repo. Without WP-5's control arm, any
  difference between arms is uninterpretable. The source plan's own caveat carries: **zero variance
  means transcription, not composition** — this method measures fidelity, and only a cohort round
  measures understanding.

## 7a. Addendum — the third rail (instructor input, received after the run)

*Recorded 2026-08-06, after the 7-agent run closed. This did not come from the mappers; it is
instructor direction, and it changes WP-3's shape. Kept as an addendum rather than folded into §2 so
the run's output stays separable from what was added to it.*

**The input.** Cross-department collaboration is a key course concept, not a garnish. The graphic
design program can supply exemplars for **visual and workflow diagram templates**, which we can
extrapolate from — and several of the artifacts this repo is missing could be delivered *visually*
or as a **PDF** rather than as prose. Doing it that way demonstrates the collaboration's usefulness
by using it.

**Why this is more than a workaround.** WP-3 was scoped as a seam between two routes to one spec:
the **document route** (read the manual, extract requirements) and the **person route** (interview
the stakeholder, elicit them). A diagram is a *third representation of the same spec*, and it drops
and carries different things than either:

| Route | Carries well | Drops |
|---|---|---|
| Document | Constraints, limits, exact wording, edge cases | Intent, priority, what the author assumed |
| Interview | Intent, priority, conflict, the unstated | Precision, testability, anything nobody thought to say |
| **Diagram** | **Structure, sequence, state, what connects to what** | **Nuance, rationale, anything that isn't a shape** |

Three rails triangulate where two only contrast. A student who has produced all three of the same
requirement has felt, concretely, that no single representation is the spec — which is the thing the
exemplar exists to teach and the thing hardest to teach by assertion.

**What it unblocks, cheaply.** Several open gaps in this repo are shaped like diagram deliverables
rather than prose ones:

- The **Trusted Workflow's eight verbs** — currently taught as a checklist in every assignment;
  natively a sequence diagram.
- The **struggle-pattern template**, which has *no template file* and only two conforming
  implementations (`F-001` §2, WP-3).
- ADR-003's **rehearsal role card** — a role card is a designed object; prose is arguably the wrong
  medium for it, which may be part of why two delegations failed to produce one (§2, WP-6).
- The **board columns** and the seeded backlog's epic structure, both of which students currently
  reconstruct from tables.

**The pedagogy is that it is real.** The course already tells students they will work with graphic
design partners as stakeholders with different priorities. A simulated version of that teaches
nothing the syllabus doesn't already assert. **Artifacts this course actually needs, produced by the
actual partner, and then used in the actual course** is the demonstration — and it is available
without inventing a scenario.

**What this does not decide.** It touches a standing human blocker (the GRD-242 fall consult
calendar and deliverables, which gates week-15 finalization and has a canned brand-kit fallback as
its scheduled mitigation). Rule 8 keeps anything involving an external party with a human. This
addendum does **not** commit the partner, schedule anything, or alter the fallback. What it does is
make the first ask smaller and more concrete than "consult on week 15": *a diagram template we can
extrapolate from, in whatever medium suits you.*

Two consequences to weigh before acting, neither settled here:

1. **A PDF or image is not greppable.** Every mechanical check this repo has or might build —
   points, naming, encoding, PATHFORM — reads Markdown. A visual deliverable is invisible to all of
   them, which is fine for an exemplar and dangerous for anything carrying a point value or a
   canonical term. The likely rule is *source of truth stays text; the diagram renders it* — but
   that is an ADR, not an assumption.
2. **Redistribution rights.** The Dataman manual's rights are already an open blocker; a partner's
   design work carries its own. Whether an artifact produced in collaboration can be published in a
   course repo is a question to ask before commissioning, not after.

**If this is adopted, it also serves `F-003`.** A poster presentation is itself a design deliverable
— so the failing-agent write-up requested for poster form is the same collaboration, exercised on a
second artifact, with a real venue attached.

## 8. The recurrence pattern

Independent of whether any package above is built, the run surfaced one defect class that recurs
across every layer of this repo. **Twelve instances, six layers, three weeks.**

| Layer | Instance | State |
|---|---|---|
| Workflow summary | "49 confirmed" reported while 17 findings went unjudged (2026-07-29) | fixed |
| Ledger & token | Holder line stale through a full merge cycle; a row re-quoted a directive | fixed ×2 |
| Onboarding doc | "Weeks 01–12 built" while three were queued as next work | fixed |
| Onboarding doc | State block still lags B-005 | **open** |
| Course map | 25 pts printed for 35-pt work | fixed |
| Canon references | Retired outline cited 3×; "exactly 3 sites" is now 39; pre-ADR-004 naming | **open ×3** |
| Delegation | ADR-003 remainder: 1.4 → 1.3 → shipped by neither | **open ×2** |

The shape is always the same: **status text that outruns its coverage.** The irony is on the record
at `CLAUDE_SUPPLEMENTARY.md:8` — the 76-agent workflow existed to catch documents making confident
claims about work that hadn't happened, and its own summary did exactly that.

The countermeasure has been identical every time, and it is cheap: separate the record from the
status, and state the reconciliation instead of the flattering number.

**Corollary, from the agent-count history:** estimate accuracy is a function of *shape*, not
ambition. The 2026-07-29 run overran ~14 → **76** (5.4×) with 18 dead (24%) because a per-finding
stage was nested inside a per-document stage; both runs that fanned out **per artifact** hit their
estimate exactly with zero deaths (B-003 7/7, this run 7/7).
