<!--
  26FA CONTENT PASS — B-006, 2026-08-06
  Renamed from Week_06_Assignment_Sprint_1_Retrospective_Risk_Register.md (real git mv, own commit).
  The retrospective was deleted as a duplicate by the 1.0b sweep; the filename and title still named it.
  Risks re-anchored to the Dataman 2.0 build. Header 25 pts unchanged; rubric already sums to 25.
  Andrew's Note left in his words; one unverified past-student anecdote removed per non-negotiable #5
  and marked for his sign-off — the surrounding note is untouched (non-negotiable #3, L0 per ADR-011).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 6 Assignment: Sprint 1 Risk Register
## CTS-285: Systems Analysis & Design

**Due**: End of Week 6 (Friday, 11:59 PM)
**Points**: 25 (3.3% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## What You're Learning

Sprint 1 is complete. You have a design package for Dataman 2.0 — ERD, wireframes, the classified backlog — and Sprint 2 is where you start building against it.

Before that: **what could go wrong, and what will you do about it?**

A risk register is the artifact that separates "I hope this works" from "I know where this breaks." You are not guessing at generic project hazards. You have read the 1977 manual, classified 26 stories, and designed a schema — you already know more about where Dataman 2.0 is fragile than any checklist could tell you. This assignment makes you write it down before it bites.

> Every Creator I have worked with has produced a risk register listing things that did not happen, and omitting the thing that did. This is not a failure of the exercise. The register's value is that you looked; the specific hits are a bonus.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Identify** risks specific to the Dataman 2.0 build, not to software projects in general
2. **Trace** each risk to something you learned in Sprint 1 — the manual, the ERD, or your classification
3. **Categorize** risks across technical, schedule, resource, and scope
4. **Assess** risk likelihood and impact using quantitative methods
5. **Create** mitigation strategies for high-priority risks

---

## Part 1: Risk Register Creation (25 points)

### Use the Risk Register Template

Copy `<!-- PATHFORM: pending spine ruling -->/Risk_Register_Template.md` into your repository as `risk-register.md`.

### Identify Risks

Brainstorm **8-12 risks** to the Dataman 2.0 build. The prompts below are starting points from the actual system — a register that could have been written before you read the manual is a register that did not use Sprint 1.

**Technical Risks** — from the device's own behavior:
- The **two-tries-then-reveal** rule appears in Answer Checker *and* the practice games; implement it in one place or it drifts between modes
- **Division with remainder** has no obvious single representation (quotient and remainder? decimal? refuse?) and the manual does not settle it
- The **memory bank's ten-problem ceiling** is a hard constraint — does your schema enforce it, or discover it at runtime?
- The manual specifies the timer as varying with **battery and room temperature**, which is not a testable requirement
- Never showing a wrong answer as correct is the one behavior with no acceptable failure mode

**Requirements Risks** — from the source document:
- **The transcript is incomplete**: pages 7–18 are not transcribed. Anything you inferred about those modes is an assumption, not a requirement
- The 1977 manual is a storybook; where it is silent, you decided — and your decisions are not yet validated with the client

**Schedule Risks**:
- Your Week 2 Must-Have count is now Sprint 2's load; if you kept too many, this is where it lands
- Story points estimated in Week 2 were your first estimates ever
- Other courses, illness, life

**Scope Risks**:
- Stretch epic **S1 (the creature companion)** is below the line and remains attractive
- Curator Console features expanding into a full gradebook
- Building faithfully to 1977 where a modern user would expect otherwise

### Risk Assessment Matrix

For each risk, calculate **Risk Score = Likelihood × Impact**

**Likelihood Scale** (1-5):
- 1 = Very unlikely (5% chance)
- 2 = Unlikely (20% chance)
- 3 = Possible (50% chance)
- 4 = Likely (70% chance)
- 5 = Very likely (90%+ chance)

**Impact Scale** (1-5):
- 1 = Negligible (minor inconvenience)
- 2 = Low (small delay, workaround exists)
- 3 = Moderate (week delay, quality reduced)
- 4 = High (major rework, deadline at risk)
- 5 = Critical (project failure)

**Risk Priority**:
- **Critical** (15-25): Address immediately
- **High** (10-14): Needs mitigation plan
- **Medium** (5-9): Monitor closely
- **Low** (1-4): Accept risk

### Example Risk Entry

```markdown
## Risk #3: The two-tries rule is load-bearing in more than one place

**Category**: Technical
**Description**: The manual gives the learner two attempts before revealing the answer. That rule appears in the Answer Checker and again in the practice games. If I implement it separately in each mode, the two copies will drift, and a learner will get three tries in one place and one in another.

**Likelihood**: 4 (Likely — I already have two code paths that check answers)
**Impact**: 4 (High — the attempt rule is the core teaching loop; inconsistency here is not cosmetic)
**Risk Score**: 16 (CRITICAL)

**Mitigation Strategy**:
1. **Before Sprint 2 starts**: extract attempt-tracking into one function; no mode implements its own
2. **Sprint 2**: one test that runs the same attempt sequence through every mode and asserts identical behavior
3. **Fallback**: if extraction proves too large mid-sprint, ship Answer Checker only and defer the games — the rule stays correct in the one place it exists

**Owner**: Me
**Status**: Identified (not yet mitigated)
**Review Date**: End of Sprint 2
```

### Required Risk Entries

Document **at least 8 risks** with full details:
- Risk ID and title
- Category
- Description
- Likelihood (1-5)
- Impact (1-5)
- Risk Score (L × I)
- Priority (Critical/High/Medium/Low)
- Mitigation strategy (specific actions)
- Owner (you, instructor, IT, external)
- Status (Identified, Mitigating, Resolved, Accepted)

### Top Risks Summary

At the end of your risk register, create summary:

**Critical Risks** (Score 15-25):
- [Risk title] - Score: [X] - Mitigation: [One sentence summary]

**High Risks** (Score 10-14):
- [Risk title] - Score: [X] - Mitigation: [One sentence summary]

---

## Deliverables Checklist

- [ ] `risk-register.md` (8+ risks documented)
- [ ] Risk scores calculated correctly (Likelihood × Impact)
- [ ] Mitigation strategies are specific and actionable
- [ ] Files committed to GitHub
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Risk Register: Risks Identified** | 10 | 8+ risks across categories, correctly scored |
| **Risk Register: Mitigation Strategies** | 10 | Specific, actionable mitigation for high-priority risks |
| **Risk Register: Summary** | 5 | Clear prioritization, critical risks highlighted |
| **Total** | 25 | |

### What Earns Full Points

**Retrospective**:
- Honesty over perfection ("I messed up X" earns more credit than "everything was great")
- Specificity ("committed 3× on Tuesday" not "committed regularly")
- Actionable changes ("Set 2-hour timer for commits" not "commit more often")

**Risk Register**:
- Risks are realistic for YOUR project (not generic copied from internet)
- Scores make sense (don't mark everything likelihood=5, impact=5)
- Mitigation strategies address the specific risk (not "work harder")
- Critical risks have detailed mitigation plans

---

## When You Get Stuck: What Week 6 Actually Feels Like

Four places Creators reliably struggle here. Being in one of them is on schedule.

### Struggle: "Every risk I write could apply to any project"

- **Signs**: Your register says *laptop failure*, *scope creep*, *underestimated stories*. It would be equally true of a pet-grooming app. You wrote eight entries in fifteen minutes, which is the tell.
- **Intervention**: Take each entry and ask *would I have known this before I read the 1977 manual?* If yes, it is a stock risk — keep at most two. Then go back to your ERD and your Week 2 classification and find the things only Dataman has: the ten-problem ceiling, the two-tries rule, the timer that varies with room temperature, the pages you never got to read.
- **Success indicator**: At least five entries cite a specific manual behavior, schema decision, or story you classified.

### Struggle: "Everything scores 16"

- **Signs**: Almost every risk is Likelihood 4, Impact 4. Nothing is Low. Your Critical list has nine items on it.
- **Intervention**: This is the Week 2 Must-Have problem wearing different clothes — when everything is critical, nothing is prioritized. Force the spread: exactly one risk is your worst, and say why it beats the others. Impact 5 means *the project fails*, not *this would annoy me*. A register where nine things are critical tells your future self nothing about what to do Monday morning.
- **Success indicator**: Your scores span at least three priority bands, and you can name the single worst risk without hedging.

### Struggle: "My mitigation is 'be careful'"

- **Signs**: Mitigations read *research more*, *start early*, *test thoroughly*. None has a day, an hour, or a named artifact.
- **Intervention**: A mitigation is a thing you can put on a calendar. Rewrite each one to answer: what will you do, when, and how will you know it worked? *"Extract attempt-tracking into one function before Sprint 2 starts; one test asserts identical behavior across modes"* is a mitigation. *"Be careful with the attempt logic"* is a wish.
- **Success indicator**: Every Critical and High risk has a mitigation with a specific action and a checkable outcome.

### Struggle: "The pages I can't read feel like cheating to write down"

- **Signs**: You noticed pages 7–18 of the transcript are missing but left it out of the register, because it feels like the assignment's problem rather than yours.
- **Intervention**: Write it down. An unavailable source is one of the most ordinary risks in professional work, and naming it is exactly the behavior being graded — analysts flag the gaps they inherited rather than quietly building over them. State what you assumed about those modes and what would change if the pages arrived.
- **Success indicator**: Your register contains a requirements risk about the incomplete source, with your assumptions listed as assumptions.

---

## Common Issues

**Issue**: "Everything went well in Sprint 1, I have nothing for 'What Didn't Go Well'"

**Solution**: You're not being honest. Every sprint has struggles. Did you:
- Underestimate any tasks?
- Procrastinate and then rush?
- Get stuck on something for 30+ minutes?
- Redo work because first attempt was wrong?
- Feel stressed at any point?

That's "didn't go well." Document it.

**Issue**: "I can't think of risks - my project is simple"

**Solution**: Consider:
- What if your database design is flawed and you realize it in Week 10?
- What if Flask deployment is harder than you expect?
- What if you get sick for 3 days during a sprint?
- What if you realize a key feature is technically impossible with your skills?

**Issue**: "My mitigation strategies feel vague"

**Bad**: "Study Flask more"
**Good**: "Complete official Flask tutorial Sections 3-5 (authentication) by end of Week 7 Day 2. Take notes. Build test project following tutorial before implementing in real project."

Add specificity: What? When? How much time? How will you verify it's done?

---

## Resources

- **Retrospective Guide**: [Atlassian Sprint Retrospectives](https://www.atlassian.com/team-playbook/plays/retrospective)
- **Risk Management**: [ProjectManager.com Risk Guide](https://www.projectmanager.com/blog/risk-management-process)
- **Risk Matrix Calculator**: [Use spreadsheet or manual calculation]

---

## Looking Ahead: Sprint 2 (Weeks 7-8)

Next sprint you're the **Scrum Master**. Your role shifts from creating artifacts to **facilitating the process**.

You'll:
- Lead sprint planning (not just fill out template)
- Run daily standups (write them like you're reporting to a team)
- Track burndown actively (update daily, not at end)
- Present sprint review to class (5 min demo)
- Lead retrospective (this time during sprint, not after)

**Your Sprint 1 retrospective tells you what to do differently.** Use it.

---

## Andrew's Note

**Retrospectives are where growth happens.**

I can always tell which students take retrospectives seriously - their Sprint 2 is noticeably smoother. They've learned from Sprint 1 mistakes.

Students who write generic retrospectives ("I'll try harder") make the same mistakes every sprint. Then wonder why it's not getting easier.

<!--
  INSTRUCTOR SIGN-OFF NEEDED — an anecdote was removed here.
  The block was headed "Real Example from Past Student" and gave specific hours (3 vs 9, then 4
  with zero rework). Per non-negotiable #5 unverified past-student anecdotes are genericized or
  flagged rather than shipped; it is removed rather than reworded because rewriting Andrew's Note
  is forbidden (non-negotiable #3, and it is the L0 voice per ADR-011).
  If the example is real it can be restored verbatim — nothing else in this note was touched.
  Original text is in git history at the commit preceding this one.
-->

### On Risk Registers:

Every professional dev team has one. You're practicing industry standard PM.

I've watched students identify "deployment is harder than expected" as a risk, create mitigation plan (test deployment in Week 7 sandbox), and avoid the Week 15 panic when deployment actually IS hard.

**Students who skip risk planning end up firefighting in Week 14.** Students who plan risks handle them calmly because they already have mitigation strategies.

**Which kind of student do you want to be?**

See you in Sprint 2!

— Andrew
