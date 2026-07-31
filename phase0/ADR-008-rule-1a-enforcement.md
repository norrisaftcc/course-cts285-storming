# ADR-008: Rule 1a Is Enforced by Mechanism Where It Can Be, and Stays Prose Where It Cannot

**Status**: **Accepted** — 2026-07-31. Closes backlog item **B-024**.
**Deciders**: A. Norris (instructor) — delegated the ruling and passed the write token: *"you have the token, do B-024."*
**Governs**: how agent fan-out is sized and shaped in this repo; what lives in `.claude/agents/` and `.claude/workflows/`
**Related**: `CLAUDE_SUPPLEMENTARY.md` Rule 1a (the doctrine), Rule 2 (model tiering), Rule 3 (context packages), Rule 7 (phase gates); `planning/REPOSITORY_INVENTORY_AND_PRIORITIZED_BACKLOG.md` §B-024

## Context

B-024 asked whether this repo's skills and agent definitions need adjusting to enforce Rule 1a, and warned that this is *"an open question, not a foregone conclusion — evaluate before building."*

### The evidence is thinner than it looks

Two runs bear on the question, and neither settles it.

**2026-07-29 — the 76-agent run.** A workflow estimated at ~14 agents launched 76; eighteen died, including the sole synthesis agent; the result-filter discarded findings whose verifier had died, and the run reported "49 confirmed" while 17 findings had gone unjudged. This is the incident Rule 1a was written to prevent — **and Rule 1a did not exist when it happened.** It is evidence that *nothing* fails. It is not evidence that *prose* fails.

**2026-07-31 — the B-003 application run.** Rule 1a existed as prose, was read, and was followed: arithmetic stated before launch (5 + 1 + 1 = 7 against a cap of 7), fan-out per artifact rather than per finding (47 findings became 5 owners), no nesting, dispatched-vs-returned reconciled, 7/7 returned. It worked. But it worked under the friendliest possible conditions: a fresh session, an Opus seat, the doctrine read attentively in the opening turns, a small well-specified task, and no time pressure. Those are precisely the conditions under which prose works. The incident happened under the opposite ones.

So the honest position is that **prose has never been tested under the conditions that produced the failure.** Deciding this by anecdote would repeat the error `the-algorithm`'s register names in K9: *anecdotes open probes; anecdotes never close them.*

### The test that does not depend on the unresolved question

Because the evidence cannot rule between "prose suffices" and "prose fails," the decision has to be robust to not knowing. One test does that, and it is applied to every candidate artifact below:

> **Does this change what happens when the agent has not read it?**

An artifact that only helps an agent who already read it has the same failure mode as the prose it replaces — it is prose relocated, and its value rides entirely on the open question. An artifact that binds regardless of what was read does not care how the question resolves. `the-algorithm`'s SPECTRUM states the same thing as a belief: *a limit you can only describe is a hope; a limit that refuses at N+1 is a contract.*

This is why B-024's first question — *is a workflow-authoring skill warranted, or does that just move the prose somewhere else?* — answers itself once the test is applied. A checklist an agent must read and comply with is Rule 1a with extra steps.

## Decision

### 1. Mechanize the two parts of Rule 1a that can refuse

Ships as a **named, runnable workflow**, not a checklist: `.claude/workflows/bounded-fanout.mjs`, invoked as `Workflow({name: 'bounded-fanout', args: {...}})`.

It carries, as executing code rather than as advice:

- **The cap refuses.** Agent count is computed from the arguments before any agent launches. Over the cap, the run aborts and returns the refusal with its arithmetic. It does not warn and proceed.
- **Fan-out is per artifact by construction.** The argument shape accepts a list of artifacts, each with its files and its prompt. There is no argument that means "one agent per finding," so the shape that produced 76 agents cannot be expressed.
- **Reconciliation is unconditional.** Dispatched, returned, and dead are counted and returned on every run, including the ones that succeed. Dead agents are reported with their unreached files. There is no code path that filters a dead agent away.

An agent that never read Rule 1a still cannot exceed the cap through this workflow, still cannot fan out per finding, and still cannot report a clean number over a silent drop.

### 2. Define two named agent types, because they carry knowledge rather than doctrine

Both pass the test: each changes what a fresh agent does when it has read nothing else.

**`adversarial-verifier`** — the strongest candidate, as B-024 anticipated. Its load-bearing content is one repo-specific check no general-purpose agent invents: **is this passage deliberately historical?** Provenance headers, dated log rows, superseded entries, and closed-task handoffs are records to be preserved, not drift to be fixed. Evidence for the check is now two runs deep: on 2026-07-29 it refuted **19 of 20** findings raised against three handoff/ledger documents — an audit had read dated session records as live status — and on 2026-07-31 the auditor holding it inspected all 52 removed lines and confirmed no dated row, provenance header, or superseded entry had been deleted.

**`mechanical-propagation`** — the Rule 2 Sonnet tier. Carries match-by-snippet-never-by-line-number, preserve-deliberate-history, and the evidence rule (a checkmark without its command output is unrun). These are the operational rules a propagation worker needs and would otherwise get re-pasted into every prompt, which is the Rule 3 problem B-024's second question names.

### 3. Rule 1a keeps its prose, and says which half is which

The shape rules — *fan out per artifact*, *never nest*, *if the work needs more it is more than one wave* — are design judgments made before any code exists. No mechanism can make them for you. They stay prose, and Rule 1a is amended to say plainly which of its clauses now bind mechanically and which still rely on being read. A rule that does not distinguish its enforced half from its advisory half invites the reader to trust both equally.

## Declined, not unimplemented

Recorded so a later session does not helpfully build them:

- **A workflow-authoring skill in checklist form.** Declined *in that form*, not in intent. A checklist that forces the agent to write the arithmetic before launching is prose relocated — it binds only the agent who reads and complies, which is the agent who was never the problem. The arithmetic is worth forcing; the way to force it is a guard that refuses, which is what §1 ships. Revisit only if the workflow proves too rigid for a real task shape, and then extend the workflow rather than writing a checklist beside it.
- **A `continuity-reviewer` agent definition (Rule 7).** Declined for now. Rule 7 already scopes the role — one Opus session, whole student journey, findings become issues — and it runs at phase gates, rarely, as spine work that Rule 1 forbids parallelizing. A definition would restate Rule 7 without adding domain knowledge the reviewer does not already get from reading it. Reopens if the review is ever run more than once per phase or delegated below Opus.
- **A hard cap enforced outside the workflow.** Nothing prevents an agent calling the `Agent` tool seven times by hand, or writing its own script without the guard. This ADR does not claim otherwise. The mechanism binds the path it owns; the rest is doctrine, and saying so is more useful than implying total coverage.

## Consequences

- **The open question stays open, and is now probeable.** This ADR does not rule that prose fails. The probe that would settle it: give a Sonnet leaf the same drift-audit task twice, once with the `adversarial-verifier` definition and once general-purpose, against a document containing dated historical rows, and compare how many dated rows each proposes to "fix." Until that runs, seat assignment is a prior, not a finding.
- **B-024's fourth point is now structural.** *Do not point a drift audit at a historical record without first teaching it that records are not status.* That teaching is no longer a thing to remember to paste; it is the first section of the verifier's definition.
- **Two data points, not a trend.** Both runs cited above are from this repo's own history and both were self-reported by the agents involved, with the 2026-07-31 numbers independently re-derived from `git diff` and then re-derived a third time by hand. That is better than assertion and weaker than a probe.
- **This ADR governs orchestration only.** It touches no course content, no points, no voice, and no student-facing material. It is process tooling, which is why B-024 was safe to run at any time.

## Correction — 2026-07-31, same day

**The cap shipped caller-supplied, which made the guard theater.** As first written, `bounded-fanout.mjs` read its cap from `args.cap` and fell back to 7. An agent facing twelve artifacts could pass `cap: 12` and the refusal would never fire — and an agent who had not read Rule 1a had no reason to think 7 was special and every reason to pass whatever number fit the work.

This failed the ADR's own test. A limit the caller sets does not bind an agent who has read nothing; it is the hope SPECTRUM's belief 6 names, wearing the costume of a contract.

**Fixed the same day.** `RULE_1A_CAP = 7` is now a constant in the file. `args.cap` may only *lower* it, for a wave you want tighter than doctrine allows. A higher value is ignored, logged at the point of the attempt, and reported in the run's returned `cap_raise_attempted` field. Raising the real cap now means editing a tracked file under the Trusted Workflow, reviewed like any other change — which is the enforcement, not a side effect of it.

Recorded rather than quietly patched, because the defect is instructive: **the first draft of a mechanism reproduced the failure the mechanism existed to prevent.** Writing the guard is easy; noticing that its limit came from the caller took a second reading. Assume the next mechanism has the same class of hole until someone looks for it.
