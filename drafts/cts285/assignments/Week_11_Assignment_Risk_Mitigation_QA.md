<!--
  26FA CONTENT PASS — B-007 (task 1.6), 2026-08-06
  Expanded from a 101-line skeleton. Re-anchored to the Dataman 2.0 spine; the file had zero references.
  The incident exercise (B-007) lives inside Part 2 as a sub-part — Week_11's header and the 25/25 split
  are KEEP per the canonical points table, so it is absorbed, not appended.
  Continuity: Week 6's risk register is the input here; Risk #3 (attempt-rule duplication) is the worked
  example, closed the same way Week 9 logged it as technical debt.
  Part 1 also carries backlog REFINEMENT (instructor direction): the Week 2 classification is re-ranked
  under three sprints of evidence, appended not overwritten, with Week 2's 8-Must-Have cap still binding
  so promotion is a forced trade. Ranking was assessed once and never revisited; refinement is where it
  gets hard, and Week 11 is where evidence exists and two weeks remain to act on it.
  Split is descriptive (ADR-002): Part 1 = 15 + 10, header and the 25/25 Part split unchanged (KEEP).
  Andrew's Note carried over verbatim (non-negotiables #3, #5; L0 per ADR-011).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 11 Assignment: Risk Mitigation & Quality Assurance

## CTS-285: Systems Analysis & Design

**Due**: End of Week 11 (Friday, 11:59 PM)
**Points**: 50 (6.7% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

**Role: Developer / QA.** Module 6 is *Ship It*, and shipping has a precondition nobody enjoys: finding out what is actually wrong with your build before someone else does.

Three things this week. You close the loop on Week 6 — every Critical and High risk you wrote down gets a verdict, and "I never got to it" is one of the legitimate ones. You **re-rank the backlog you classified in Week 2**, now that you have three sprints of evidence instead of none. And you test Dataman 2.0 against the document that specifies it.

The middle one is the skill that keeps paying. Anyone can rank a backlog once. Ranking it again, after being proved wrong in places, is the part that separates a plan from a wish.

You have an advantage most QA work does not: **a written standard from 1977.** Most testers have to negotiate what correct means. You can look it up.

> I have kept your Week 6 register. You will find that some risks you rated Critical never materialised, and that something you scored a 4 arrived early and cost you a weekend. This is the normal shape of a first register and not a mark against it. The register's job was to make you look; it was never going to make you clairvoyant.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Execute** mitigation strategies and record honest outcomes, including failures
2. **Test** an implementation against a primary source document
3. **Respond** to an incident under time pressure and document the response
4. **Distinguish** a defect from an undocumented decision
5. **Re-rank** a backlog under evidence that did not exist when it was first ranked

---

## Part 1: Risk Mitigation & Backlog Refinement (25 points)

Two halves, and they are connected: a risk that actually happened should change what you build next. That connection is the reason these sit together rather than in separate parts.

### A. Risk verdicts (15 points)

#### Update `risk-register.md`

For each **Critical and High** risk from Week 6, add an update block. Four verdicts are available and all four are acceptable:

| Verdict | Means |
|---|---|
| **Resolved** | The mitigation ran and the risk is gone |
| **Mitigated** | Still present, but reduced to something you can live with |
| **Accepted** | Still present at full strength; you decided to carry it, and you say why |
| **Materialised** | It happened. What did it cost, and what did you do? |

**"Materialised" is not a failure grade.** A register that predicted a real problem did its job — that is the register working, and it is worth more than one where nothing happened.

**Example** — closing the risk this course has been tracking since Week 6:

```markdown
## Risk #3: The two-tries rule is load-bearing in more than one place [UPDATED]

**Status**: RESOLVED (was: Identified)
**Actions Taken**:
- Week 9 code review: my reviewer's Dataman revealed answers after the second
  wrong entry; mine waited for a third. Neither of us had noticed.
- Logged as technical debt item #1 (attempt-counting implemented twice)
- Extracted `AttemptTracker`; both Answer Checker and Electro Flash now call it
- Added a test that runs the same attempt sequence through every mode

**Result**: One implementation, one behavior. The test would now catch a
divergence in either mode.
**Remaining Issues**: None.
**Lessons**: I scored this Likelihood 4 in Week 6 and was right, but I expected
to catch it myself. I did not — a peer running my code found it. The mitigation
that worked was not the one I planned.
```

That last line is the kind of entry worth writing. A lesson that says *"my plan was wrong in an interesting way"* is more useful to future-you than *"went as expected."*

### B. Refine the backlog (10 points)

You classified 26 stories in Week 2, with almost no information. You now have three sprints of it.

Re-open `dataman-backlog-classification.md` and refine it.

#### Append — do not overwrite

Add a `## Refinement — Week 11` section **below** your Week 2 table. The original stays exactly as written.

This matters more than it looks. Two rankings side by side, five weeks apart, is a record of your judgment changing under evidence — and that record is the point of the exercise. A file that silently becomes correct teaches nobody anything, least of all you.

#### Change at least two priorities

Each change cites evidence that did not exist in Week 2:

| Evidence | What it tells you |
|---|---|
| **Velocity** — your actual effort against your Week 2 estimates | which stories you systematically under- or over-sized |
| **The Week 9 code review** | where your build and a peer's diverged, and which of you had it right |
| **This week's incident** | what actually broke, versus what you predicted would |
| **Your ADRs** | where the manual was silent and the decision turned out to be load-bearing |

Format each change as: story ID, Week 2 priority → new priority, and the evidence in one sentence.

#### The cap still binds

**No more than 8 Must-Haves — the same ceiling as Week 2.** So promoting a story into Must means demoting one out of it.

That constraint is the whole exercise. Without it, refinement is a wishlist: everything you have since decided matters gets added and nothing leaves. With it, you have to say *what this is more important than*, which is the only form of prioritisation that means anything.

#### Say what did not change, and why

A priority that survived contact with three sprints is evidence too. Name one and say why it held.

#### Calibration paragraph

Close with one paragraph: **what did Week-2-you get wrong, and could you have known at the time?**

Often the honest answer is *no* — the information arrived in Sprint 2 and no amount of care in Week 2 would have produced it. That is a perfectly good answer and it is the one this asks for. The goal is calibration, not retroactive self-criticism. An estimator who knows which of their errors were knowable is worth considerably more than one who is simply sorry.

---

## Part 2: Quality Assurance (25 points)

### A. Test against the manual (10 points)

Create `qa-test-plan.md`. **Every test in this section cites a manual page.**

This is the discipline worth taking from this week: a test you wrote from your own code proves your code does what it does. A test written from the specification can tell you that you built the wrong thing.

| Behavior | Source | What you assert |
|---|---|---|
| Two attempts, then reveal | manual p.4 | third entry never occurs; answer shown after the second miss |
| A wrong answer is never accepted | p.4–5 | no input path returns "correct" for an incorrect value |
| Memory bank holds up to ten problems | p.19 | the eleventh is refused, and refused *legibly* |
| Answer Checker is the power-on default | p.4, p.22 | a fresh start lands in Answer Checker with no selection |

For each: test steps, expected result (with the page), actual result, pass/fail.

### B. Break it on purpose (5 points)

Feed the system what a child actually does. Empty entry. A problem with no operator. Ten-digit numbers. Negative results. Division that does not come out even. Mashing the key that clears while a reward animation is running.

Document what happened, and — separately — **what should have happened**. Those are different columns and the difference is the finding.

### C. Incident response exercise (10 points)

This runs **in class**, in one sitting, against a report you have not seen in advance.

You will receive a bug report written the way real ones arrive: from someone who is not a developer, describing a symptom rather than a cause, with details missing. Something like *"my daughter got a star for a wrong answer."*

Work the incident and write it up in `incident-log.md`:

1. **Reproduce.** Can you make it happen? What exact sequence? If you cannot reproduce it, say so — that is a legitimate and common outcome, and what you do next matters more than the failure to reproduce.
2. **Assess severity.** Use the impact scale from your Week 6 register. Some incidents are cosmetic. This one, if real, touches the one behavior with no acceptable failure mode.
3. **Diagnose.** Where is it, and what is the actual cause? Distinguish the symptom from the fault.
4. **Decide: fix now, or mitigate and schedule.** Both are professional answers. State which and why. A hot fix at 11pm that you do not understand is not the safe option it feels like.
5. **Write the timeline.** When reported, when reproduced, when diagnosed, when resolved. Plain, factual, no defensiveness.
6. **Prevention.** What test would have caught this? **Write that test.**

**The most valuable answer this exercise can produce is "this is not a defect — it is a decision nobody wrote down."** Sometimes the reported behavior is a choice you made, working exactly as chosen, and the real fault is that the choice was never recorded. When that happens, the output is not a code change. It is an ADR — the artifact you started keeping in Week 9.

---

## Deliverables Checklist

- [ ] Updated `risk-register.md` — every Critical/High risk carries one of the four verdicts
- [ ] `dataman-backlog-classification.md` — a `Refinement — Week 11` section appended, Week 2 table intact
- [ ] At least two priority changes, each with evidence, and the Must-Have count still at or under 8
- [ ] One priority that held, with reasoning; one calibration paragraph
- [ ] `qa-test-plan.md` — manual-cited tests (A) and break-it findings (B)
- [ ] `incident-log.md` — the six steps, including the prevention test
- [ ] The prevention test committed and passing
- [ ] Bugs fixed, or logged with a decision about when

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Risk Mitigation & Backlog Refinement** | 25 | Verdicts (15): every Critical/High risk has one, with evidence; a materialised risk is reported honestly rather than hidden. Refinement (10): appended not overwritten, two changes evidenced, the cap respected as a trade, calibration paragraph present |
| **QA Testing** | 25 | Manual-cited tests (10), deliberate breakage with expected-vs-actual (5), incident response with timeline and prevention test (10) |
| **Total** | 50 | Header value is binding; component rows are descriptive (ADR-002) |

### Grading Notes

- **A risk you accepted, with reasons, scores as well as one you resolved.** Judgment is the graded thing.
- **"Could not reproduce" is a real outcome** and is graded on what you did next, not on the failure to reproduce.
- **Tests without a page citation** in section A do not count for section A. They may still be good tests.

---

## When You Get Stuck: What Week 11 Actually Feels Like

Four places Creators reliably struggle here. Being in one of them is on schedule.

### Struggle: "None of my Week 6 risks actually happened"

- **Signs**: You are looking at a register of eight risks, seven of which are still theoretical, and it feels like the exercise was pointless.
- **Intervention**: Mark them honestly — most will be *Accepted* or *Mitigated* — and then do the more useful thing: name the problem that **did** cost you time this term and check whether it appears in the register at all. It usually does not. That is the real finding, and writing it down is worth more than the seven verdicts. Registers are graded on the looking, not on the hit rate.
- **Success indicator**: Every risk has a verdict, and you can name at least one real problem the register missed.

### Struggle: "Nothing changed — my Week 2 ranking was fine"

- **Signs**: You re-read the classification, felt broadly satisfied, and wrote that no changes were needed. It took four minutes.
- **Intervention**: Possibly true, and worth testing before you accept it. Use the cap as a lever: if you *had* to promote one story into Must, which is it, and what would you demote to make room? Answer that and you usually discover the ranking was not as settled as it felt. Note also that changing a priority is not an admission that Week-2-you was careless — Week-2-you had no velocity data, no code review, and no incident. Being wrong with less information is not the same as being wrong.
- **Success indicator**: Either two changes with evidence, or a defended statement of what held and why — and you can say which of the two you are claiming.

### Struggle: "My tests all pass and I don't believe them"

- **Signs**: Green across the board, first run, no surprises. You have a quiet suspicion you are testing the wrong thing.
- **Intervention**: Trust that suspicion. Tests written after the code usually encode the code's behavior, including its bugs. Take one test and break the implementation on purpose — comment out the attempt counter. If the test still passes, it was never testing what its name claims. Then rewrite it from the manual page rather than from your function.
- **Success indicator**: You have at least one test you saw fail before you saw it pass.

### Struggle: "I can't reproduce the incident"

- **Signs**: Twenty minutes of trying the obvious sequence. Nothing. The temptation to write "cannot reproduce, closing" is strong.
- **Intervention**: This is the most realistic part of the exercise, and "closing" is the wrong move. Go back to the report and separate what the reporter *observed* from what they *concluded* — they are not a developer and the two are mixed together. What would have to be true for their description to be accurate? Try the sequence a child would produce, not the one a developer would. Then record what you tried; an incident log that shows a systematic search is a good deliverable even when it ends unresolved.
- **Success indicator**: Your log lists the specific sequences you ruled out and what you would need to reproduce it.

### Struggle: "This isn't a bug, they're just using it wrong"

- **Signs**: You have diagnosed the incident as user error and you are ready to close it.
- **Intervention**: Sometimes true, and still not the end. If the system permitted it, the system participated. Ask the sharper question: **is this behavior a decision I made and never recorded?** If so the fault is real but it is a documentation fault, and the output is an ADR rather than a patch. "Working as designed" is only a defence when the design was written down somewhere a user could have found it.
- **Success indicator**: Your log distinguishes defect, decision, and genuine misuse — and says which this was.

---

## Resources

- **Dataman manual transcript**: `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->
- **Your Week 6 risk register** and **Week 9 ADRs** — both are inputs this week
- **Writing bug reports**: [How to Report Bugs Effectively](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html)
- **Incident write-ups**: [Google SRE Book, Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)

**Office hours**: listed in Canvas.

---

## Looking Ahead: Week 12

Week 12 is *Ship It* proper — Definition of Done, acceptance testing against your own criteria, a lightweight deploy that someone else has to be able to install, and a grouped presentation of the Dataman you built.

The incident log you write this week is presentation material. "Here is what broke and how I handled it" is a better three minutes than "here is my feature list."

---

## Andrew's Note

QA isn't optional. It's how you avoid embarrassment when stakeholders (or employers) actually use your system.

Test your own work before others see it.

— Andrew
