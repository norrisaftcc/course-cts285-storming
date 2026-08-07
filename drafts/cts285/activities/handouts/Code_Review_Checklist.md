<!--
  NEW — companion handout to Module_05_Code_Review_Lab.md, authored alongside it, 2026-08-07.
  Re-anchors "what a reviewer checks in a peer's Dataman 2.0 implementation" to the comparative
  mechanic established in drafts/cts285/assignments/Week_09_Assignment_Sprint_3_Development_Code_Review.md
  [PATHFORM: pending spine ruling], Part 2 (Code Review, 30 pts) and Part 4 (Architecture
  Decision Records). That assignment's own inline checklist (its "Comparative" bullets) is the
  seed this handout expands into a full printable reference; wording is not copied verbatim, but
  the four comparative questions are the same four the assignment already grades against.
  UNGRADED — this is a lab/review handout. No row in CTS285_Canonical_Points_Table.md; it
  introduces no rubric and no grade points of its own. (It restates categories the graded
  assignment already scores — Must Fix / Should Fix / Nitpick / ADR Subject — as review vocabulary,
  not as a new point scheme.)
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here — see
  SHODANN-SLOT below for the one place an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Code Review Checklist — Reviewing a Peer's Dataman 2.0 Implementation

*Companion handout to the Module 5 Code Review Lab (Weeks 9–10). Use it in the lab's Part 2 comparative review, and again for your graded Week 9–10 `code-review-given.md`.*

**What makes this checklist different from an ordinary code review checklist**: you and the person whose code you're reviewing built the same product from the same seeded backlog against the same 1977 manual. That means you can compare behavior directly — not just check whether the code looks clean. This checklist puts that comparison first, because it's the thing a reviewer on a different project could never do.

---

## The comparative pass that matters most

Before the general-quality checklist below, run this pass. It's the part of the review only *you* can do, because you built this too.

### 1. Which stories did you both implement?

- [ ] Name at least two backlog stories you can both point to in your own code
- [ ] If you can only find one shared story, look again before starting — you need at least two to make this pass worthwhile

### 2. Where does their behavior differ from yours?

Don't guess — run it. Feed both implementations the same inputs and record what each one does.

- [ ] For each shared story, pick a concrete input (two wrong answers then a third guess; an eleventh problem into the memory bank; a division that doesn't come out even) and run it against both versions
- [ ] Write down the exact output from each side — not "looks different," but the actual states, values, or messages each version returns
- [ ] If you have Week 9 test functions written against manual behavior, run them against your partner's code directly (`pytest test_dataman.py` on their checked-out branch) — this is faster and more precise than reading

### 3. Does the manual settle it? Cite the page.

For every difference you found:

- [ ] Open `DATAMAN_MANUAL_TRANSCRIPT.md` and look for the specific behavior in question
- [ ] If the manual states it plainly, **cite the page** and name which implementation is wrong. This is a defect report, not an ADR subject.
- [ ] If the behavior would live in pp.7–18, say so explicitly — those pages are not transcribed (issue #18), and neither of you can settle the question by reading. Record that as its own finding, not silence.

**Reference citations for common disagreements** (use these as a starting point, not a substitute for checking the actual page yourself):
- Two tries, then the answer is revealed — manual pp.4–5, detailed pp.20, 22
- The memory bank holds up to ten problems — manual p.4 and p.21 (also restated p.19's parent/teacher guidance)
- Division answers are given as a whole number with a remainder shown separately — manual p.5, detailed p.22

### 4. If the manual is silent, flag it as an ADR subject — not a defect

- [ ] If you checked the manual and it genuinely doesn't specify the behavior in question, say so plainly in your review
- [ ] **Do not file this as a bug.** Write instead: "The manual doesn't settle this — both approaches are defensible. This is an ADR subject." Point your partner (or yourself) at Week 9's Part 4.
- [ ] Note whether the disagreement is worth its own ADR, or belongs as an "options considered" entry inside one either of you is already writing

> Filing an ADR subject as a bug is the most common move here and it is the wrong one, because a bug report says somebody erred. Nobody erred. The manual is silent and two defensible people read the silence differently. Write it down as what it is.
>
> — SHODANN, your Channel Success Partner

---

## The rest of the checklist

Once the comparative pass above is done, work through these — the part any reviewer, comparative advantage or not, should check.

### Functionality (does it work?)
- [ ] Code runs without errors
- [ ] Features work as the story describes
- [ ] Edge cases are handled (empty memory bank, invalid keypad entry, a session with zero attempts)

### Bugs & Errors
- [ ] No syntax or logic errors
- [ ] Error handling is present for invalid input (not just the happy path)
- [ ] No hardcoded secrets, passwords, or curator/learner data committed to the repository
- [ ] Input validation exists on the answer-entry path

### Maintainability (can I understand it?)
- [ ] Code is readable; variable and function names are descriptive
- [ ] Functions are small and focused — one function, one job
- [ ] Comments explain "why," not "what" (a comment that just restates the line under it isn't earning its keep)
- [ ] No duplicated logic across modes — for example, the two-tries rule implemented once, not copy-pasted into every mode that needs it

### Testing
- [ ] Tests exist for new code
- [ ] At least one test asserts a **manual-specified** behavior, with the page cited in the test's docstring — not just a test that asserts whatever the code already does
- [ ] Tests pass

### Style
- [ ] Follows a consistent style (PEP 8 for Python)
- [ ] Consistent formatting throughout
- [ ] No commented-out code left behind

---

## Giving feedback: four categories, not three

Ordinary code review sorts feedback into **Must Fix / Should Fix / Nitpick**. This review needs a fourth category, because not every disagreement is a defect:

- **Must Fix**: The manual settles it, and this implementation contradicts it. Cite the page.
- **Should Fix**: A real quality issue — unhandled edge case, duplicated logic, missing test — independent of any comparison.
- **Nitpick**: Low-stakes style or naming. Lowest priority; mention it, don't lead with it.
- **ADR Subject**: The manual is silent, and this implementation genuinely differs from another defensible one. **Not a priority level — a different kind of finding entirely.** Never file it as a defect; flag it and point at Week 9's Part 4.

**Example comments:**

> **Must Fix**: Your Answer Checker reveals the answer after 3 tries, not 2. Manual p.20 is explicit: two tries, then reveal. Line 42 of `answer_checker.py` increments the counter after the correctness check instead of before it.

> **ADR Subject**: My division mode returns `{"quotient": 3, "remainder": 1}` and yours returns `"3 r 1"` as a formatted string. I checked p.22 — the manual shows the *display* format but doesn't specify the *data* representation. Both of ours pass the same manual-derived test. This is worth its own ADR, not a fix on either side.

> **Nitpick**: `chk()` could be `check_answer()` — minor, doesn't block anything.

---

## Receiving and responding

Sort what you receive into the same shape you'd give:

- **Agree, will fix**: the manual settled it, and you built the wrong version
- **Agree, ADR subject**: the manual is silent — draft the record rather than picking a side by default
- **Disagree**: you read the manual differently, or you think the finding itself is wrong — say why, with your own citation

A response that just says "fixed" or "no" isn't finished. Say what you checked and what you decided.

---

## Quick self-check before you submit a review

Ask these three, in order:

1. **Did I run code, or only read it?** If every comment came from reading, go back and feed both implementations at least one shared input by hand.
2. **Does every "must fix" comment have a page citation?** If not, it might be an ADR subject you filed as a bug.
3. **Did I flag at least one comparative finding — something I only know because I built this too?** If every comment is generic ("add error handling," "improve naming"), you haven't used the advantage this review setup gives you.

All three yes: the review is ready to submit.
