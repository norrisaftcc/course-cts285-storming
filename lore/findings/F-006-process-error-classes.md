# F-006 — Process error classes, with instances

**Recorded:** 2026-08-07 · **Kind:** process finding
**Method:** the classes come from errors this repo actually made, most of them by the sessions that
were writing the findings about them. Instances 7 and 8 were found by a mechanical sweep during this
finding, not from recall.
**Rules:** dated record (#8). A finding never rules (`lore/README.md` rule 4).

## 0. Why classes and not a list

`F-002` established that this repo's defects are *one* defect with several addresses. That is true of
the **product**. This finding is about the **process** — how the errors get made — and there the
picture is different: several distinct mechanisms, each with its own countermeasure, and only some of
them catchable by prose discipline.

Sorting them matters because the cheap fixes and the impossible ones look identical in a list.

---

## Class 1 — Status read from a document instead of from the tree

**Instance.** This session reported "next up: B-006 and B-007" to the instructor by reading
`CLAUDE.md`'s state block. All three of B-005, B-006 and B-007 were already merged. The wrong report
went to a human and shaped a plan before `git log` was ever run.

**The sharp edge.** Non-negotiable #6 already says regenerate from the tree. It did not fire, because
the block **claims to be regenerated from the tree** — its header literally reads *"regenerated from
the tree, 2026-08-06."* The claim substituted for the check.

> **A document that asserts its own freshness is more dangerous than one that says nothing**, because
> the assertion is the thing that stops you looking.

**Countermeasure.** Freshness claims must carry the commit they were regenerated at, so the claim is
falsifiable in one command. `CLAUDE.md`'s header now reads *"regenerated from the tree at `1079aba`"* —
a reader compares one SHA instead of trusting an adjective.

---

## Class 2 — Unchecked exit status between a scripted edit and the commit describing it

**Instance.** Commit `97429f2` claimed two edits — a cross-reference and an ADR renumber correction —
that its diff did not contain. A scripted edit failed on a text-match assertion; the shell continued
because the failing command was not chained to the commit; the message described intent.

**Why this one is different.** Every other class here is a *reasoning* failure that a careful reader
could catch. This is a **plumbing** failure. The reasoning was correct and the message was written in
good faith; the edit simply did not happen, and nothing between the failure and the commit looked at
the exit status.

**Prose cannot catch it.** "Be careful with scripts" is not a countermeasure. Two things are:

1. Chain the edit to the commit (`&&`), so a failed edit cannot be described by a commit that runs anyway.
2. **Read `git diff --stat` before writing the message**, and write the message from the diff rather
   than from the plan. The plan is what you meant; the diff is what happened.

**This is the strongest candidate in the register for mechanization** under `ADR-008`'s test — a
pre-commit check comparing claimed file paths against staged paths could *refuse*, which is the bar
ADR-008 sets.

---

## Class 3 — A count reported without its unit

**Instances, three.**

- `F-001` §7 said **21** PATHFORM occurrences in `drafts/`; the correct figure by that measure is
  **22**. The synthesis silently switched from occurrences to lines mid-sentence.
- `F-001`/`F-002` said **"nine reference sites"** for the ADR-003 remainder. Unreproducible; it is
  almost certainly nine *files* reported as nine *sites*. Actual: 19 sites across 9 files.
- PATHFORM has been counted as **3**, then **39/6**, then **50 lines across 14 files** — three
  different measures, none of them wrong, none of them labelled.

**The pattern is not carelessness.** Two sessions, two documents, same shape. `grep -c` counts lines,
`grep -o | wc -l` counts occurrences, `grep -l` counts files, and prose calls all three "sites."

**Countermeasure.** State the command or the unit. *"39 occurrences (`grep -o`), 6 files (`grep -l`)"*
costs four words and makes the number reproducible.

---

## Class 4 — A number asserted free by a document that cannot see a parallel branch

**Instances, three in three days.** ADR-011 was claimed by two branches on the same day. `F-001` then
recorded ADR-012 as "the next free number"; a parallel session took ADR-012 for the L0 ruling; the
next free is now ADR-013 — recorded in `F-005` because `F-001` is merged and cannot be edited.

**Mechanism.** A branch can only see `phase0/` as of its own base. "Next free" is a claim about a
namespace that other branches are concurrently allocating from.

**Countermeasure.** Read the next free number off `phase0/` **at write time**, never quote it from a
document. A finding may say *"this needs an ADR"*; it may not say which number.

---

## Class 5 — Scope under-counted at the moment of flagging

**Instance.** The retired-outline defect was reported as **3 dangling citations** for two days. It was
**7 sites**: four per-story lines cited the dead file *by line number* — `(outline l.171)` — without
naming it, so every `grep CTS285_COURSE_OUTLINE` missed them.

**Generalization worth keeping:** *a search for a name misses every reference that cites by position.*
Line numbers, page numbers, and section numbers are references that a name-grep cannot see.

**Countermeasure.** When a referent is retired, grep the name **and** grep the shape of its citations.

---

## Class 6 — Cross-file promise with no delivery check

**Instance, now fixed.** `Week_03:103` promised students a live Week 4 interview in printed
student-facing text. `Week_04` delivered a transcript re-read while its own learning objective 1 read
"**Conduct** structured stakeholder interviews." The promise sat unkept across two merged files for
two weeks.

**Mechanism.** A forward reference is a **promise made in one file and owed by another**, and nothing
in this repo checks that the owing file delivers. Points are checked across files. Naming is checked
across files. Promises are not.

**Fixed 2026-08-07:** Week 4 Part 1 now runs the rehearsal from the role card; Week 3's promise
narrowed to ADR-003's actual ladder, which it had also over-stated (it promised live interviews with
all three stakeholders where the ladder gives one rehearsal plus a later client round).

---

## Class 7 — Forward references into weeks that do not exist *(found by sweep)*

**Instance.** `Week_06_Assignment_Sprint_1_Risk_Register.md:285-287` tells students that risk planning
lets them *"avoid the Week 15 panic when deployment actually IS hard"* and that students who skip it
*"end up firefighting in Week 14."*

Three defects stacked in two sentences:

1. **Weeks 14 and 15 do not exist** as files — B-011 and B-012 are unstarted.
2. **The week numbers are from a retired spine.** In the current spine, deployment is **Week 12**;
   weeks 13–16 are the team on-ramp, and Week 15 is *wireframes and the GREY design consult*. A
   student following the reference finds no deployment content there, ever.
3. It is an **anecdote with invented specifics** — see class 8.

**Countermeasure.** Every `in Week N` in student-facing text is checkable against the spine in one
grep. Nothing has ever run it.

---

## Class 8 — Anecdote-shaped claims that survived the sweep that never ran *(found by sweep)*

**Instances: eight**, across seven files, all matching `I've seen/watched/had students…`:

`Sprint_Planning_Template.md:114` · `Week_03:296` · `Week_05:502` · `Week_07:394` (×2) ·
`Week_06:285` · `Week_01:320` · `Week_02:363`

Not all are violations. Non-negotiable #5 forbids **fabricated** testimonials, statistics and
past-student anecdotes; a generic claim in the instructor's own OOC voice ("students who skip setup
regret it") is his to make. The violations are the ones carrying **invented particulars** — the
clearest is `Week_06:285`, a specific narrative about a specific student's specific mitigation plan,
in a file nobody has swept.

**Why they are all still here, and this is the finding:** `drafts/cts285/**` **has never had a
reconciliation sweep.** B-003 audited the planning and canon layer only, and its own record says so.
B-005 removed two fabricated anecdotes from Week 2 — but only because that week was being rewritten
for other reasons. **The defects cluster exactly where the sweep did not run**, which means the count
above is a lower bound on one pattern in one grep, not an inventory.

---

## What this finding does not do

It rules on nothing and assigns no owner. Class 7's worst instance is fixed in the same change that
files this; the remaining anecdote review is entered in backlog **§7.5 Carried remainders** rather
than left in prose, because a defect named only in a finding is a defect assigned to nobody — which
is `F-002`'s delegation class, and filing it here without an owner would be an instance of the thing
this document is about.

## The one-line version

Six of these eight classes are catchable by reading before writing. **Class 2 is not** — it needs a
mechanism — and **class 8 is not a class at all so much as a consequence**: an unswept tree keeps
whatever it was given.
