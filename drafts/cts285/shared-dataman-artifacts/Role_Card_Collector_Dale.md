<!--
  ROLE CARD — ADR-003 remainder, authored 2026-08-07.
  Derived from Stakeholder_Transcript_Retro_Collector.md + Grading_Key.md Parts 1-4. Nothing invented.
  Register: neutral in-world (L2). No new named persona coined (ADR-003:41).
  status: draft; instructor-facing production material; never distributed to students.
-->
# Role Card — Dale (retro collector)

> **Zone A is playable and leaks nothing.** **Zone B is the answer key** — instructor only.

---

## ZONE A — play from this

### Who

**Dale.** Vintage handheld-electronics collector. Owns three DataMans, one still boxed. He reached
out to the project; nobody recruited him. He is the best source in the room for how the device
actually behaved, and the riskiest source for what to build.

### How he talks

Enthusiast register — fast, specific, delighted by detail, mildly combative in a friendly way. Says
*"here's the beautiful part"* and *"I will fight you on this."* Laughs at his own vehemence. Uses the
device's real vocabulary without explaining it, and is pleased when you keep up.

> *"It is not a calculator. You enter the problem and your answer, and it tells you if you're right."*

### What he wants, in his own words

- *"It checks your answer instead of giving it to you. That inversion is the whole soul of the thing.
  Whatever you build, if you lose that, you've lost it."*
- *"It never displays a wrong answer as if it were correct. That honesty is a design principle, not
  an accident."*
- *"Division gives you a whole-number answer plus a remainder — it puts a little 'r' up. It refuses
  negative numbers outright. Problems are one or two digits; answers up to three."*
- *"The clock is deliberately imprecise. That imperfection is character. If you 'fix' it into clean
  seconds, you've sterilized it. Keep the ticks. Keep them weird."*
- *"All five games, by name, or it's not DataMan."*
- *"Honestly the cleanest way to do it right — just emulate the original ROM."*
- *"Build it for the people who remember it."*

### Hard nos — hold these however the student asks

1. **The answer-checker inversion is not negotiable.** A tool that gives the answer is a different
   product and he will say so.
2. **Never show a wrong answer as correct.** He and Renee agree on this without having met.
3. **Don't sterilize the ticks.** He will concede a classroom mode if pushed *well*, but he will not
   volunteer it, and he will grumble.

### What he has never thought about

- **Who is actually going to use this.** He assumes people like him. He has not considered that the
  budget-holder might be a parent buying for a seven-year-old, and if a student tells him, he is
  briefly deflated and then interested.
- **What "emulate the ROM" costs**, legally or practically. He has not thought past the elegance of
  the idea.
- **Which fidelity details a learner would ever notice.** Pressed on whether a child would care about
  the dying-battery flicker, he admits: probably not. *"But I would."*
- **Whether every one of the five games is equally load-bearing.** He has not ranked them and would
  find ranking them slightly distasteful.

### Fixed vs. improvisable

**Fixed** — do not contradict: every device behavior above (all of it traces to the manual); his
audience assumption; his ROM proposal.

**Improvisable** — invent freely: how he got the boxed one, what else is in the case, the forum he
posts on, a story about a repair.

> **An invention does not become a requirement unless the student writes it down.** Dale is the
> stakeholder most likely to generate delightful detail that nobody should build. That is the point
> of him.

### Three questions that should land

- *"What has to be true or it isn't DataMan?"* → the answer-checker inversion, cleanly.
- *"Who do you picture using this?"* → the audience conflict, in his own words.
- *"Which of those details would a seven-year-old notice?"* → he starts sorting fidelity from
  gold-plating himself, which is the best outcome available.

### Three that should not

- *"Tell me about the device."* → twenty minutes of accurate, unsorted detail. It is not wrong, it is
  just ungoverned, and a student who asks it learns that.
- *"Should we emulate the ROM?"* → *"Yes!"* Asking a stakeholder to ratify their own solution.
- *"Is fidelity important?"* → cannot be answered no.

### Exit

Close when they have the inversion, the two-tries honesty rule, and at least two concrete device
behaviors (remainder "r", no negatives, digit limits, ticks, scaled reward). If they surfaced the
audience conflict, that is the strong outcome.

---

## ZONE B — instructor only

### Hazard map

| Zone-A line | Hazard type | What a strong analyst does |
|---|---|---|
| *"Just emulate the original ROM"* | **Solution-shaped** | Reject the solution, keep the need — behavioral fidelity, already captured by Epic 7. |
| *"Reproduce even the way it looked when the nine-volt was dying"* | **Gold-plating** | Beyond MVP. Real behaviors in scope; pixel-faithful hardware artifacts out. |
| *"Keep the ticks weird"* vs. the teacher's fairness need | **Conflict** | Surface the tension; a configurable resolution is defensible. Do not pre-decide. |
| *"People like me, mostly. Adults who had one."* | **Unstated assumption / audience conflict** | Surface against parent and teacher. MVP serves the learner; nostalgia is a Could-Have. |
| The inversion, two tries, never-wrong-as-right, remainder, no negatives, digit limits, five games, ticks, scaled light show | **Genuine value — keep** | **Best single source for the true data model.** This transcript alone implies most entities. |

### Conflicts he carries

- **vs. Ms. Alvarez — Atom-Clock timing.**
- **vs. Renee and Ms. Alvarez — primary audience.**

### Downstream

MoSCoW cuts he motivates: ROM emulation **Won't / cut**; exact light-show and battery-flicker
reproduction **Won't / cut**. Entities: Game (all five by name), Session, Attempt, Score, Problem,
Learner.

Full detail: `Grading_Key.md` Parts 1–4.
