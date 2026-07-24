# Stakeholder Interview Transcript — Retro Collector

> **CLASS ARTIFACT — instructor-provided source document.** This is a **fictional in-world persona** created for the CTS-285 Dataman modernization project. It is not a record of a real interview or a real person, and it makes no claim about real Texas Instruments sales, production numbers, or history beyond what the transcribed manual and period advertisement support. Analysts (students) mine it for entities, needs, and user stories. A companion grading key marks the deliberate analyst hazards planted below — do not distribute the key with the transcript.
>
> **Project context:** Systems analysis for the *Dataman modernization initiative*. Device behavior traces to `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`. This stakeholder cares about *fidelity to the original device* — which makes him an excellent source for the true data model and a risky source for scope.

**Stakeholder:** Dale — vintage handheld-electronics collector and hobbyist
**Role in project:** Enthusiast / authenticity advisor / secondary audience
**Interview length:** ~15 minutes (excerpt)

---

**Interviewer:** You reached out to us — you care about how faithful the modern version is. Start wherever you want.

**Dale:** I've got three DataMans in the case, one still boxed. This device is a little landmark — the follow-up to the *Little Professor*, and unlike a plain calculator it *checks your answer instead of giving it to you*. That inversion is the whole soul of the thing. Whatever you build, if you lose that, you've lost it. It is not a calculator. You enter the problem *and* your answer, and it tells you if you're right.

**Interviewer:** That's the Answer Checker mode. It's the default when you power on.

**Dale:** Correct, and it comes back to Answer Checker every time you press ON. People who remember it fuzzily think it did the math for you. It didn't. And the error behavior is specific: you get two tries, a wrong answer flashes "EEE" with a blink pattern, and — this is important — it *never* displays a wrong answer as if it were correct. After the second miss it shows you the real answer. That honesty is a design principle, not an accident.

**Interviewer:** What else has to be preserved to feel authentic to you?

**Dale:** The details people skip. Division gives you a whole-number answer plus a remainder — it puts a little "r" up and then shows the remainder. It refuses negative numbers outright — try seven minus eight and it just won't take the eight. Problems are one or two digits; answers can be up to three. After ten problems it shows right-over-tried and rewards you with a light show that scales to your score. And the *timer* — it doesn't count seconds, it counts "ticks" of its Atom Clock, and a ring of light circles the display while it runs.

**Interviewer:** Say more about the ticks.

**Dale:** Here's the beautiful part, and I will fight you on this: the clock is *deliberately imprecise*. The manual straight up says the tick speed varies with how fresh the battery is, the room temperature, all of it. It is not a stopwatch. That imperfection is *character*. If you "fix" it into clean seconds, you've sterilized it. The kids raced each other on ticks and it didn't matter that a tick wasn't exactly anything. Keep the ticks. Keep them weird.

**Interviewer:** Noted — though I can imagine a classroom wanting consistent timing for fairness. I'll flag that.

**Dale:** That's their problem. The ticks are sacred. [laughs]

**Interviewer:** What about the games?

**Dale:** All five, by name, or it's not DataMan. Electro Flash — flash cards on a table you pick. Number Guesser — it hides a number between 9 and 100 and gives you "it's between X and Y" hints. Wipe Out — hot-potato addition, and the machine picks a secret time to "wipe out," and whoever's holding it loses. Force Out — a subtraction game, it's the old game of Nim really, force your opponent to hit zero. And the Missing-Number box, where the blank moves around the problem, three positions, two difficulty levels. Leave one out and a collector will notice.

**Interviewer:** If you had to say what would make the modern version *authentic* rather than just inspired-by?

**Dale:** Give me a mode that reproduces the original exactly. Same behaviors, same feel. Honestly the cleanest way to do it right — just emulate the original ROM. Pull the chip, run the real firmware in a browser, and you literally cannot get it wrong.

**Interviewer:** That's one approach. It might not be the one we can ship, but I hear the intent — behavioral fidelity.

**Dale:** And the light shows — there were specific patterns for specific score ranges, and the low-battery behavior had its own tells: dim display, erratic flicker. If you're being faithful you'd reproduce even the way it looked when the nine-volt was dying. That's the kind of thing that separates a real restoration from a cartoon of one.

**Interviewer:** That's a lot of fidelity for behaviors most learners will never trigger. Let me ask directly — who do you picture using this?

**Dale:** People like me, mostly. Adults who had one. Collectors, nostalgia. That's the audience that'll care whether you got the "r" remainder right. Kids today have a thousand apps — this one's real value is that it's *the real thing*, preserved. Build it for the people who remember it.

**Interviewer:** That's a very different primary audience than the parents and teachers I've been hearing from. Good to have on the record. Thank you, Dale.

---

*End of excerpt. Analyst note: fidelity to the source is gold for the data model and a trap for the scope. Separate "how the device truly behaves" (keep) from "reproduce every artifact of 1977 hardware" (probably not this release), and notice who this stakeholder thinks the product is for.*
