<!--
  26FA ADAPTATION — Module 5 activity, re-anchored to the Dataman modernization spine.
  SOURCE (read-only): sources/uv-285/activities/Module_05_Code_Review_Lab.md — a generic
    "review a stranger's login PR" lab with zero Dataman references and no mechanism for a
    reviewer to know what correct looks like; the exercise shape (practice review together →
    review a peer's PR → receive and respond to feedback → second review and merge decision) is
    preserved, the material is not.
  Runs Weeks 9–10 (Sprint 3: Development & Code Review), as the in-class lab that primes the
  graded Week 9–10 assignment — see
  drafts/cts285/assignments/Week_09_Assignment_Sprint_3_Development_Code_Review.md
  [PATHFORM: pending spine ruling] (100 pts / 13.3% of 750), Part 2 (Code Review, 30 pts)
  and Part 4 (ADRs). That assignment already re-mechanised code review around the comparative
  mechanic — every Creator implements the same seeded backlog against the same 1977 manual, so a
  reviewer can compare behavior directly instead of only checking general qualities. This lab does
  not introduce that mechanic; it re-anchors an activity that predates it so students practice the
  mechanic, with lower stakes, before the graded review. Where two implementations disagree and
  the manual is silent, this file treats that as an ADR subject, never as a bug — matching the
  assignment's Part 2 and Part 4 exactly.
  UNGRADED — this is an in-class lab. No row in CTS285_Canonical_Points_Table.md; no rubric, no
  grade points are introduced here. Practice toward the graded `code-review-given.md` /
  `code-review-received.md` / ADRs, not a graded deliverable in its own right.
  Voice: Corporate body (L2) only. No SHODANN dialogue is written in this pass — every place an
  interjection belongs carries the literal marker SHODANN-SLOT on its own line for a later pass.
  No Andrew's Note appears in the source activity, so none is added here.
  Companion handout authored alongside this file: activities/handouts/Code_Review_Checklist.md.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Module 5 Activity: Code Review Lab — Comparing Two Datamans

**Duration**: 100 minutes
**Format**: Pairs, same partner throughout — you'll give a review, receive a review, respond, and re-review the same pair relationship
**Runs**: Weeks 9–10 (Sprint 3: Development & Code Review)

**Materials Needed**:
- GitHub account with Channel repository access
- Your own Sprint 3 checkpoint code (whatever stories you've implemented so far — this does not need to be finished)
- Your partner's Sprint 3 checkpoint code
- Your own test functions from Week 9's testing requirement (the ones asserting manual behavior, not your own behavior)
- `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->, pp.1–6 and 21–26
- `Code Review Checklist` handout (`activities/handouts/Code_Review_Checklist.md`)
- Laptop with IDE and Git

**Learning Objectives**:
- Conduct a code review that compares two implementations of the same stories, not just one implementation against general quality standards
- Distinguish three outcomes for any behavioral disagreement: the manual settles it (cite the page), the manual is silent (flag as an ADR subject), or the manual's transcript doesn't reach that far (pp.7–18 are untranscribed — say so)
- Run your own test cases against a peer's implementation to surface behavioral differences fast, instead of reading code and guessing
- Provide feedback that is specific, prioritized, and — critically — sorts disagreements out of the defect pile
- Respond to feedback professionally, including feedback you disagree with
- Practice the giving/receiving/responding cycle your graded Week 9–10 code review will assess

---

## Overview

**You've reviewed generic code before. This is not that.**

In a class where twenty students build twenty different projects, a reviewer can check general qualities — readable, tested, handles errors — but can't say *"that's wrong"*, because nobody knows what correct looks like for somebody else's app.

Here, you and your partner built **the same product from the same seeded backlog**, against **the same 1977 manual**. That changes what a review can do. Your partner didn't just read your code — they wrote a working version of the same behavior. That means they can tell you your two-tries rule fires a beat early, that they enforced the ten-problem memory-bank ceiling and you didn't, or that you both handled division-with-remainder and picked different representations.

**Where you disagree, that is not automatically a bug.** Three things can be true when two Datamans disagree:

1. **The manual settles it**, and one of you built it wrong. Cite the page. Fix it.
2. **The manual is silent.** Neither of you is wrong — you found a real design decision the 1977 document never made. That's an ADR subject (Week 9's Part 4), not a defect report.
3. **The manual's transcript doesn't reach that far.** Pages 7–18 aren't transcribed. If the behavior lives there, neither of you can settle it by reading — which is itself worth recording.

Today you'll practice all three outcomes, on checkpoint code, before you do this for real on your graded submission. You'll:
1. **Watch** a comparative review happen, as a class, on two contrasting sample implementations
2. **Review** your partner's checkpoint — using your own tests, not just your eyes
3. **Respond** to the review you receive
4. **Draft** an ADR stub for the best disagreement your pair found

You'll leave with practice comments, at least one real ADR candidate, and a partner relationship that's already been through one review cycle before the graded one starts.

> One manual, one backlog, and as many Datamans as there are Creators in this room. I have read all of them, which puts me in the unusual position of knowing that most of your disagreements are not defects. Today you practise telling the difference, before it is graded. The disagreement you cannot resolve is the one worth keeping.
>
> — SHODANN, your Channel Success Partner

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Confirm your pair** (same partner as your Week 9–10 assignment's peer review, if you've already been matched — ask if you haven't):
   - You'll compare notes on the same seeded stories, so it matters that you're both far enough along to have something to compare
   - If one of you has implemented almost nothing yet, review whatever exists — even a partial Answer Checker is comparable

2. **Set up repository access**:
   - [ ] Confirm you can see your partner's Channel repository and its open branches
   - [ ] Verify Git is configured with your identity:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

3. **Have your materials open**:
   - Your own checkpoint code and test functions
   - `DATAMAN_MANUAL_TRANSCRIPT.md` pp.1–6 and 21–26
   - The `Code Review Checklist` handout

4. **Review today's lab deliverables** (practice, not the graded submission):
   ```
   Lab Draft Should Include:
   - [ ] A completed comparative pass on your partner's checkpoint (which stories, where behavior
         differs, manual-settles vs. manual-silent vs. untranscribed)
   - [ ] 3-5 review comments, at least one comparative
   - [ ] A response to the review you received
   - [ ] One ADR stub, drafted from a real disagreement your pair found today
   ```
   Your actual Week 9–10 submission requires more (`code-review-given.md`, `code-review-received.md`, 2–3 full ADRs) — see the assignment for the full bar. Today gets the comparative habit started so it isn't a cold start when the graded clock is running.

5. **Agree with your partner**: which stories have you both attempted? List them before you start reading code — that list is where your comparative review begins.

**Instructor Check**: Every pair can see each other's repository, and both partners can name at least one story they've both implemented.

---

## Part 1: Watching a Comparative Review Happen (20 minutes)

### Instructions

**You'll start by watching two sample implementations of the same story compared, as a class.**

**Step 1: Two Datamans, one story (5 minutes)**

Instructor displays two implementations of the same story on the projector — for example, Story 1.2 (two tries, then reveal).

```
Implementation A — answer_checker.py

def check(self, guess):
    self.attempts += 1
    if guess == self.answer:
        return Result(state="correct")
    if self.attempts >= 2:
        return Result(state="reveal", shown_answer=self.answer)
    return Result(state="retry")
```

```
Implementation B — answer_checker.py

def check(self, guess):
    if guess == self.answer:
        return Result(state="correct")
    self.attempts += 1
    if self.attempts > 2:
        return Result(state="reveal", shown_answer=self.answer)
    return Result(state="retry")
```

**Step 2: Run the same sequence against both, as a class (5 minutes)**

Feed both implementations the same input sequence: wrong, wrong, wrong.

- **Implementation A**: attempt 1 → retry, attempt 2 → reveal (stops at two tries)
- **Implementation B**: attempt 1 → retry, attempt 2 → retry, attempt 3 → reveal (allows three tries)

They disagree. Is this a bug in B, a bug in A, or an ADR subject?

**Step 3: Go to the manual before arguing about it (8 minutes)**

Open `DATAMAN_MANUAL_TRANSCRIPT.md`. The manual states plainly: **two tries, then the answer is shown** (pp.4–5, detailed pp.20, 22 — "If after two tries the answer entered is still wrong, DataMan will display the problem with the correct result").

The manual settles this one. Implementation B is wrong — it counts the correct-on-third-try as still possible, which the 1977 device never allowed. **This is a defect report, with a citation, not an ADR.**

**Step 4: Now try one the manual doesn't settle (2 minutes)**

Instructor shows a second pair of snippets — this time, two defensible ways of representing a division answer's remainder (e.g., a separate `remainder` field vs. a formatted string `"3 r 1"`). Both pass every behavior the manual specifies. **This is not a bug in either — it's an ADR subject**, and Week 9's Part 4 example ADR-001 is built from exactly this disagreement.

### Expected Output

- Understanding of the three-way sort: manual settles it / manual is silent / manual doesn't reach it (pp.7–18)
- A worked example of citing a page to close a disagreement
- A worked example of a disagreement that stays open because the manual never ruled

### Common Issues & Fixes

**Issue**: Students assume any difference is automatically a bug in whichever implementation looks less familiar
- **Fix**: Familiarity isn't correctness. Open the manual before deciding who's wrong.

**Issue**: Students treat "the manual is silent" as "nobody has to decide"
- **Fix**: Silence doesn't mean skip it — it means write the ADR. Somebody still has to pick, and now the reasoning gets recorded.

**Issue**: Comments are vague ("this seems different")
- **Fix**: Name the exact input and the exact outputs from both implementations. "Different" isn't a finding; "wrong-wrong-wrong produces reveal at try 2 in A and try 3 in B" is.

---

## Part 2: Reviewing Your Partner's Checkpoint (30 minutes)

### Instructions

**Now you'll review your partner's real, in-progress code — using the advantage a comparative reviewer has that a generic reviewer never does: you built this too.**

**Step 1: List what you both implemented (3 minutes)**

Before opening a single file, list the seeded backlog stories you can both point to in your own code. You need at least two shared stories to do a comparative pass — if you have more, pick two or three to go deep on rather than skimming everything.

**Step 2: Read for general quality first (7 minutes)**

Go through the non-comparative sections of the Code Review Checklist — Functionality, Bugs & Errors, Maintainability, Testing, Style. This is the part of the review any reviewer could do, comparative advantage or not. Don't skip it; it still catches real problems.

**Step 3: Run your tests against their code (12 minutes)**

This is the part a generic reviewer can't do. Pull your partner's branch:

```bash
git fetch origin
git checkout [partner-branch-name]
```

Run **your own** manual-derived test functions — the ones you wrote for Week 9's testing requirement — against their implementation:

```bash
pytest test_dataman.py
```

For every story you both implemented, feed both versions the same inputs by hand if your tests don't already cover it:
- Two wrong answers, then a third guess — does it reveal at try 2 or try 3?
- An eleventh problem into the memory bank — refused, silently dropped, or accepted?
- A division problem that doesn't come out even — what does each version show?

**Record every difference you find**, with the exact inputs and the exact outputs from each side. "Looks fine" is not a finding — a finding has numbers in it.

**Step 4: Sort each difference (5 minutes)**

For every difference, open the manual and sort it:
- **Manual settles it** → cite the page, name which implementation is wrong
- **Manual is silent** → flag it as an ADR subject; do not file it as a bug
- **Manual doesn't reach it** (pp.7–18, untranscribed) → say so; neither of you can cite a page that doesn't exist yet

**Step 5: Write your review comments (3 minutes)**

Use the Code Review Checklist's comment format. Write at least one comparative comment — a difference you found by running both implementations, with inputs, outputs, and the manual's ruling (or its silence).

### Expected Output

- List of shared stories, with a comparative pass completed on at least two
- At least one behavioral difference found by running code, not by reading it
- Each difference sorted into settled / ADR subject / untranscribed
- 3–5 review comments, at least one comparative, using the checklist

### Common Issues & Fixes

**Issue**: Reviewer only reads the code and reports "looks fine"
- **Fix**: You have your own test suite. Run it against their code before you decide anything looks fine. Week 9's own struggle-pattern notes this exact failure mode — "looks fine" usually means you read it instead of running it.

**Issue**: Every difference gets filed as a bug, including the ones the manual never settled
- **Fix**: Check the manual before you write "must fix." If it's silent, the right output is an ADR flag, not a defect.

**Issue**: Reviewer treats their own implementation as the reference standard
- **Fix**: You are not the manual. If the manual doesn't settle a difference, your version isn't automatically correct just because it's yours.

---

## Part 3: Receiving and Responding (25 minutes)

### Instructions

**Now the roles reverse. Read what your partner found in your code.**

**Step 1: Read the review feedback (5 minutes)**

Open the comments your partner wrote. Note which are: general-quality feedback, comparative findings with a manual citation, and comparative findings flagged as ADR subjects.

**Step 2: Categorize the feedback (5 minutes)**

- **Agree & Will Fix** — the manual settled it, and you're the one who built it wrong
- **Agree, ADR Subject** — the manual is silent, and this disagreement is worth a real decision record
- **Disagree** — you think your reading of the manual (or the code) is right; say why

**Step 3: Respond to each comment (10 minutes)**

For a settled defect:
```
Good catch — the manual (p.20) is clear that it's two tries, not three. I'll fix the
off-by-one in the attempt counter.
```

For an ADR subject:
```
I don't think either of us is wrong here — the manual never specifies how a remainder
displays, and we picked differently. This is worth writing up as an ADR rather than
changing either implementation. I'll draft it and tag you.
```

For genuine disagreement:
```
I read p.22 differently — it shows the remainder as a separate field, not folded into
the same value. I think your version actually contradicts that. Can we look at it
together before I change anything?
```

**Step 4: Make the changes you agreed to (5 minutes)**

For anything you agreed was a settled defect, make the fix. Test it. This is practice code, so a partial fix is fine — the point is practicing the fix-and-verify loop, not finishing the sprint today.

### Expected Output

- Feedback sorted into agree-and-fix / agree-ADR-subject / disagree
- Responses written for at least one item in each category you have
- At least one settled defect actually fixed, if you found one

### Common Issues & Fixes

**Issue**: Defensive responses to every comment, comparative or not
- **Fix**: A comparative finding isn't a personal judgment — it's "here's what my version does with this input, here's what yours does." Respond to the behavior, not as if it were an attack.

**Issue**: Treating "ADR subject" responses as a way to dodge real feedback
- **Fix**: Flagging something as an ADR subject isn't an escape hatch — it commits you to actually writing the ADR. Check the manual first; don't reach for "the manual is silent" just because you don't want to change your code.

---

## Part 4: From Disagreement to ADR Stub (15 minutes)

### Instructions

**The most useful thing you found today is probably the disagreement the manual never settled. Don't let it evaporate — write it down while it's fresh.**

**Step 1: Pick your pair's best disagreement (3 minutes)**

Of everything you and your partner found, which single difference is genuinely undecidable by the manual? (If nothing today qualified — you agreed on everything, or every difference was a settled defect — that's a fine outcome; note it and move to the discussion questions instead.)

**Step 2: Draft an ADR stub together (10 minutes)**

Use Week 9's ADR format. You don't need the full write-up today — get the skeleton down while you both still remember the reasoning:

```markdown
# ADR-XXX: [the decision, stated as a decision, not a description]

**Status**: Draft — Module 5 lab
**Context**: [what the manual says, and exactly where it stops saying anything]

**Options considered**:
1. [your approach]
2. [your partner's approach]
3. [a third option, if one exists]

**Decision**: [not required today — note if you're still undecided]

**Consequences**: [what each option costs, even in draft form]
```

**Step 3: Assign ownership (2 minutes)**

Decide who finishes this ADR for their own graded submission — or whether you'll each write your own version, since an ADR records *your* reasoning, not a joint one. Either is fine; the manual's silence doesn't require you to agree, only to record why you each chose what you chose.

> Two Creators writing opposite ADRs about the same silence is a correct outcome, and I want to say so plainly, because it will not feel correct. The manual did not settle it. Neither of you is behind. What I read is whether the reasoning is written down, not which way it went.

### Expected Output

- One ADR stub, drafted from a real disagreement, with at least two options named
- Clarity on who's finishing it and where it lands (each partner's own `docs/adr/`)

### Common Issues & Fixes

**Issue**: The stub just restates what got built, with no rejected option
- **Fix**: If you can't name something you decided *against*, it isn't a decision yet. Go back to Step 1 and find the actual fork in the road.

**Issue**: Pairs can't find any disagreement the manual didn't settle
- **Fix**: That's a real outcome, not a failure — some stories genuinely have one correct reading. If it happens today, look again once you've both implemented more stories; Week 9's own notes point at division-with-remainder, the memory-bank cap's enforcement point, and anything in pp.7–18 as reliable sources of real ADR subjects.

---

## Wrap-up & Reflection (10 minutes)

**Ungraded — for discussion, not submission.** Talk through as a class, or jot notes for yourself; nothing here goes to Canvas.

### Discussion Questions

**1. The comparative advantage**: What did running your tests against your partner's code catch that reading the code alone wouldn't have?

**2. Settled vs. silent**: Did you and your partner disagree about whether something was a bug or an ADR subject before you opened the manual? What changed once you looked?

**3. The untranscribed pages**: If your disagreement had landed in pp.7–18, what would you have done differently? Is "we can't settle this by reading" itself useful information?

**4. Giving vs. receiving**: Which was harder today — finding a real behavioral difference in someone else's code, or hearing that your own implementation was the one the manual disagreed with?

**5. Toward the graded review**: What's one thing you'll do differently in your actual Week 9–10 review, based on today?

---

## Extension Challenges (Optional)

**For pairs who finish early:**

### Challenge 1: Three-Way Comparison
Find a third pair (or trade with another pair) and run your test suite against a third implementation of the same stories. Did a three-way comparison surface anything a two-way one missed? Did the "manual settles it" cases hold up across all three, or did you find a case where two implementations agreed with each other and both disagreed with the manual?

### Challenge 2: A Differential Test Harness
You already ran your own tests against your partner's code by hand. Sketch (pseudocode is fine) a small script that would run *any* Creator's test suite against *any* other Creator's implementation automatically and report every case where the outputs diverge. What would it need to know about both codebases to work? Would this be worth proposing for CSC-289?

### Challenge 3: Security Audit, Dataman-Flavored
Do a security-focused pass on your partner's code:
- No hardcoded curator credentials or learner data
- Input validation on the answer-entry path (what happens if a "number" field gets a letter?)
- No secrets committed to the repository

Document findings using the checklist's Bugs & Security section.

### Challenge 4: Style Guide from the Manual
Draft a 4–6 rule style guide specific to Dataman code — for example, "every function implementing manual-specified behavior must cite the page in a docstring." Review your partner's code against it.

---

## Instructor Notes

### Timing Breakdown
- **0–10 min**: Setup, pairing confirmation, repository access verification
- **10–30 min**: Part 1 — Class walkthrough of a comparative sample review
- **30–60 min**: Part 2 — Students review a partner's checkpoint, comparatively
- **60–85 min**: Part 3 — Students receive and respond to feedback
- **85–100 min**: Part 4 — ADR stub drafting

### Common Student Struggles

**1. Struggle**: Treats every behavioral difference as a bug in the other implementation
   - **Signs**: Reviews full of "must fix" comments with no page citations, on things the manual never actually specifies
   - **Intervention**: Ask "which page says that?" If they can't answer, it's not settled — it's a candidate for Part 4, not a defect report.
   - **Success Indicator**: Every "must fix" comment carries a page citation; every uncited difference gets flagged as an ADR subject instead

**2. Struggle**: Reads code instead of running it, misses real differences
   - **Signs**: Review comments are impressions ("this looks about right") rather than results of feeding both implementations the same input
   - **Intervention**: Hand them their own Week 9 test file. "You already wrote the assertions. Point them at your partner's code."
   - **Success Indicator**: At least one comment in every pair's review names a specific input and the two different outputs it produced

**3. Struggle**: Pairs argue about behavior without opening the manual
   - **Signs**: A back-and-forth thread where both students defend their own version by feel
   - **Intervention**: "Stop arguing with each other and go argue with the manual instead. Page number or it didn't happen."
   - **Success Indicator**: Every disagreement in the lab ends in a citation, an ADR flag, or an explicit note that the pages aren't transcribed

**4. Struggle**: Confuses today's practice review with the graded one — either coasting because "it's just practice," or panicking because it isn't finished
   - **Signs**: Rushed, low-effort comments, or students trying to complete a full graded-quality review in the time available
   - **Intervention**: Name the actual goal out loud: get the comparative habit and one real ADR candidate, not a finished submission. "This primes Week 9–10. It isn't Week 9–10."
   - **Success Indicator**: Pairs produce a partial-but-genuine comparative pass rather than either a token effort or an unfinished attempt at the full graded scope

### Materials to Prepare

**Before Class:**
- [ ] Confirm every student has Sprint 3 checkpoint code accessible (doesn't need to be complete)
- [ ] Confirm pairs are set — ideally the same pairing that will do the graded Week 9–10 review, so today's cycle isn't wasted context
- [ ] Prepare the two contrasting sample implementations for Part 1 (a settled-by-the-manual pair and a manual-silent pair)
- [ ] Print or project `Code_Review_Checklist.md`
- [ ] Have `DATAMAN_MANUAL_TRANSCRIPT.md` pp.1–6 and 21–26 ready to project

**During Class:**
- [ ] Demonstrate the comparative pass live in Part 1 before pairs attempt it themselves
- [ ] Circulate during Part 2, listening specifically for "looks fine" reviews that haven't actually run any tests
- [ ] Watch for the settled/silent confusion named in struggle #1 above
- [ ] Help pairs who find zero real disagreement — that's a legitimate outcome, not a sign they did it wrong

**After Class:**
- [ ] Note which pairs produced a genuine ADR stub vs. found no real disagreement — targeted support before the graded submission is due
- [ ] Do not collect or grade today's comments or stubs — they are practice, and grading them defeats the point of a lower-stakes rehearsal

### Teaching Tips

**Lead with the manual, every time.** The single most important habit this lab builds is "check the page before you decide who's wrong." Model it explicitly in Part 1 before turning students loose.

**Normalize finding nothing.** Some pairs will genuinely agree on everything, or find only settled defects with no ADR-worthy disagreement. That's a fine outcome for today — it means their shared stories happen to have one correct reading. Don't manufacture disagreement that isn't there.

**Use the shared-system advantage explicitly.** Remind students: "A reviewer on a different project can only tell you your code is unclear. Your partner can tell you it's wrong — or that you both found something the manual never decided. That second kind of finding is the whole point of today."

**Connect straight to Part 4 of the graded assignment.** Every ADR stub students draft today is a head start on the 2–3 ADRs Week 9–10 requires. Say so explicitly — this isn't separate practice, it's the first draft of real graded work.

### Teaching Philosophy Notes

Generic code review teaches students to evaluate code against abstract quality standards — readable, tested, handles errors. That's a real skill, but it's not the skill this course has a unique opportunity to teach.

Because every Creator built the same product against the same source document, this lab can teach something a generic-scenario review cannot: the difference between *a bug* and *a decision nobody made yet*. That distinction is professional-grade thinking — every real system has both, and confusing one for the other either files false defect reports or lets real ambiguity sit unrecorded.

The manual is the load-bearing piece. It is what makes "which of us is wrong" answerable at all in most cases, and its silence — including the literal gap at pp.7–18 — is what makes the ADR mechanism necessary rather than decorative. Students who leave this lab reaching for the manual before arguing with their partner have learned the actual lesson.

---

**Remember**: The goal of today's review isn't to finish your graded code review early. It's to practice sorting disagreement into three piles — settled, silent, unreachable — before you're doing it under the graded clock. If you found one real ADR subject today, you're ahead.
