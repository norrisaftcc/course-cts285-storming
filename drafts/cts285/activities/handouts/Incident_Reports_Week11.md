<!--
  B-008 (task 1.7) — NEW, 2026-08-06. Authored outside the activity-adaptation wave.
  Supplies the artifact the Week 11 incident exercise hands out. Week 11 says the report arrives
  "written the way real ones arrive: from someone who is not a developer, describing a symptom
  rather than a cause, with details missing" — this file is that report, in three variants.
  Each variant is engineered to land on a DIFFERENT one of the three legitimate outcomes Week 11
  names: a real defect, a decision nobody recorded, and one that cannot be reproduced.
  The reporters are fictional users of Dataman 2.0, in the same register as the 1.0a stakeholder
  transcripts — scenario material, not testimonials (non-negotiable #5).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Incident Reports — Week 11 Exercise

**Instructor handout.** Print one report per Creator. Do not distribute in advance — the exercise depends on the report being unseen.

Three variants are supplied. Any one works alone; distributing a mix across the room makes the debrief considerably better, because Creators discover that three plausible-sounding reports resolved three different ways.

The instructor block under each report is **not for students**. Cut below the line before printing.

---

## Report A — "the star"

> **From:** a parent, submitted through the feedback form
> **Subject:** wrong answer got a star??
>
> Hi — my daughter is 7 and has been using this most evenings, she really likes it. Tonight she was doing her sevens and she got one wrong but it gave her the star anyway and she was very pleased with herself. I didn't want to make a thing of it in the moment but she's now telling me she knows her sevens and she doesn't.
>
> I don't know if it matters but she had gotten a few right before that. She was going quite fast.
>
> Not a big deal but thought you'd want to know.

---
*Cut here — instructor block below*

**Seeded fault:** the reward fires on the *streak* counter rather than on the current answer's correctness. After a run of correct answers, the streak display and the reward trigger read the same stale value, so a wrong answer inside a streak still shows the reward.

**Why this report is hard in the right way.** The parent buried the reproduction condition in an aside — *"she had gotten a few right before that"* — and dismissed it themselves in the next breath. A Creator who tries a single wrong answer from a cold start cannot reproduce it. The detail that matters is the one the reporter did not think mattered.

**Expected outcome: real defect, fix now.** This is the one behavior the course names as having no acceptable failure mode — a wrong answer must never be accepted as right. Severity is Impact 5 regardless of how mild the parent's tone is, and noticing that the tone and the severity disagree is part of the exercise.

**Prevention test:** assert that a wrong answer returns a non-correct state *after* a run of correct ones, not only from a cold start.

---

## Report B — "the remainder"

> **From:** a teacher, sent by email
> **Subject:** division answers marked wrong
>
> Several of my Year 4s hit the same problem this afternoon and I said I'd pass it on. They were doing division and when it doesn't come out even the app keeps telling them they're wrong. One of them typed 3.5 and another typed 3 and both got the error. I checked and 3.5 is right.
>
> They're getting frustrated because they think they're bad at division and they aren't. Can it be fixed before Thursday?

---
*Cut here — instructor block below*

**Seeded fault: none.** The build is doing exactly what its author chose. The author decided division with remainder returns quotient-and-remainder (`3 r 1`), so `3.5` is correctly rejected — and so is `3`, because it is incomplete.

**Expected outcome: a decision nobody wrote down.** Week 11 names this as the most valuable result the exercise can produce, and Report B is the one engineered to produce it. There is no code fault. There is a decision — made in Sprint 2, defensible, never recorded — and a teacher who cannot discover it because it is written down nowhere a user could reach.

**The output is an ADR, not a patch.** If the Creator has already written that ADR in Week 9, the correct response is to point at it and treat the gap as a documentation failure rather than a code one. If they have not, they write it now.

**Watch for:** a Creator who "fixes" this by accepting `3.5`. That is a real design change made under pressure from a support ticket, reversing a considered decision without revisiting the reasoning. Worth catching in the debrief — it is the most common wrong move and it feels like good service.

---

## Report C — "it froze"

> **From:** a parent, left as a voicemail, transcribed
> **Subject:** app froze
>
> Yeah, hi — so the thing froze up on my son earlier. He was partway through and it just stopped, wouldn't take any more numbers. He pressed a few things and then it was fine again. Might have been the tablet, it's an old one. He says it's happened before but he can't remember when.
>
> Anyway. Thought I'd mention it.

---
*Cut here — instructor block below*

**Seeded fault: indeterminate by design.** There is no reliable reproduction. The description fits at least three causes — a genuine input-lock during the reward animation, an unhandled state after the memory bank hits its ten-problem ceiling, or the tablet.

**Expected outcome: cannot reproduce, and that is the correct answer.** Week 11 says so, and grades the *search* rather than the result. The Creator who closes this in five minutes and the one who spends thirty minutes ruling out three hypotheses in writing produce very different deliverables from the same non-result.

**What a strong response contains:** the specific sequences tried, what each ruled out, what would be needed to reproduce (device model, whether the memory bank was full, whether a reward was on screen), and — the part most Creators miss — a note added to the code or the log so that the *next* occurrence captures the state automatically.

**Do not let this one be graded as a failure.** An incident log that shows a systematic search and ends unresolved is a good professional artifact. Real on-call work produces them constantly.

---

## Running the exercise

Week 11 gives the six steps: reproduce, assess severity, diagnose, decide fix-or-schedule, write the timeline, and write the prevention test. The reports above are built so that:

- **A** rewards careful reading of what the reporter dismissed
- **B** rewards checking your own decisions before touching code
- **C** rewards a documented search that ends in nothing

If you distribute a mix, the debrief question worth asking is: **"who had a defect, who had a decision, and who had neither — and how did you tell?"** That distinction is the actual skill, and a room that only saw Report A never has to make it.
