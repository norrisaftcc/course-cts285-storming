<!--
  26FA CONTENT PASS — B-007 (task 1.6), 2026-08-06
  Expanded from a 101-line skeleton. Re-anchored to the Dataman 2.0 spine; the file had zero references.
  The incident exercise (B-007) lives inside Part 2 as a sub-part — Week_11's header and the 25/25 split
  are KEEP per the canonical points table, so it is absorbed, not appended.
  Continuity: Week 6's risk register is the input here; Risk #3 (attempt-rule duplication) is the worked
  example, closed the same way Week 9 logged it as technical debt.
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

Two halves this week. First, you close the loop on Week 6 — every Critical and High risk you wrote down gets a verdict, and "I never got to it" is one of the legitimate verdicts. Second, you test Dataman 2.0 against the document that specifies it.

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

---

## Part 1: Risk Mitigation (25 points)

### Update `risk-register.md`

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
- [ ] `qa-test-plan.md` — manual-cited tests (A) and break-it findings (B)
- [ ] `incident-log.md` — the six steps, including the prevention test
- [ ] The prevention test committed and passing
- [ ] Bugs fixed, or logged with a decision about when

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Risk Mitigation** | 25 | Every Critical/High risk has a verdict and evidence; lessons are specific; a materialised risk is reported honestly rather than hidden |
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
