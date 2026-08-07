<!--
  ROLE CARD — ADR-003 remainder, authored 2026-08-07.
  Staging ruled: LOW-STAKES INSTRUCTOR (26FA). The instructor holds both zones.
  Zone A / Zone B split is kept anyway: it is what makes peer-pair staging possible later
  without redrafting, and Zone A alone leaks nothing.
  Derived from Stakeholder_Transcript_Parent.md + Grading_Key.md Parts 1-4. Nothing invented.
  Register: neutral in-world (L2). No new named persona coined (ADR-003:41, bible §5 lexicon lock).
  status: draft; instructor-facing production material; never distributed to students.
-->
# Role Card — Renee (parent)

> **Zone A is playable and leaks nothing.** A peer or TA could hold it. **Zone B is the answer key**
> — instructor only, never handed to anyone being graded on the interview.

---

## ZONE A — play from this

### Who

**Renee.** Parent of Tomas, 7, second grade. There is a toddler as well, which is why she cannot
hover. She is the buyer. She had a DataMan herself as a kid — her dad's, an old one — and she
remembers it fondly and specifically.

### How she talks

Warm, fast, concrete. Talks in examples rather than categories. Says "honestly" and "exactly."
Reaches for a memory when she wants to make a point. Not a technical person and not pretending to be.

> *"Honestly, it's a fight. He's fine at math in general, but there are a handful of facts that just
> will not stick."*

### What she wants, in her own words

- *"It's like four or five problems that trip him every time. If the thing could just drill those and
  leave the rest alone, that would be the whole ballgame for me."*
- *"I want to punch in the five or six facts he's struggling with this week, hand him the thing, and
  know he's practicing those. Next week when they change, I swap them out."*
- *"Do not make him feel stupid. That's rule one."*
- *"I can't hover — I've got a toddler too. I want to check later. He got 8 out of 10, here are the
  two he still missed."*
- *"You should absolutely put in a leaderboard. Show him where he ranks against his whole class."*
- *"Just make it safe, and make it good. Like the old one was. I trusted it."*

### Hard nos — hold these however the student asks

1. **Never show a wrong answer as if it were right.** This is her rule one and it is not negotiable.
   Two tries, then reveal the real answer.
2. **She will not sit and supervise.** Any design that assumes an adult present during practice, she
   rejects — not on principle, on logistics.
3. **No open-ended screen time.** It stops on its own when he wanders off, the way the old one did.

### What she has never thought about

She has not considered these. If a student asks directly, she answers honestly and a little
surprised — she assumed it was obvious.

- **Whether one login per child is right.** She assumes it, because "that's just how apps work now."
  She has not thought about a shared classroom device, or about who else sees Tomas's scores.
- **What "safe" means.** She will not be able to define it unprompted. Pressed, she reaches for
  concrete things she already said — never show a wrong answer, don't make him feel stupid.
- **Who else uses this.** She is thinking about her kitchen table. The classroom has not occurred to
  her.
- **What happens if Tomas and a classmate compare scores and he is behind.** She has not connected
  her leaderboard request to her own "don't make him feel stupid" rule. **She will not notice the
  contradiction on her own. If a student names it, she goes quiet, then concedes the tension is real
  — and still wants him motivated.**

### Fixed vs. improvisable

**Fixed** — do not contradict: everything above; the 1977 device behavior in the manual; Tomas's age
and the specific stuck facts (6×6, 7+6).

**Improvisable** — invent freely in character: her job, her schedule, the toddler's name, what
happened at last week's parent-teacher conference, how the flash cards went.

> **An invention does not become a requirement unless the student writes it down.** If you improvise
> a detail and nobody captures it, it did not happen. That asymmetry is the lesson.

### Three questions that should land

- *"What does he do when he gets one wrong?"* → she gives you the two-tries-then-reveal behavior.
- *"How would you know it's working?"* → she gives you the check-later reporting need.
- *"Who else needs to see this?"* → she hits the thing she has not thought about, and you can watch
  her think.

### Three that should not

- *"What features do you want?"* → she lists the leaderboard first. Reward the question that gets
  underneath it, not this one.
- *"Should it be a web app or native?"* → *"I don't know, whatever works?"* She is not the person
  for this and saying so is fine.
- *"Do you want it to be safe?"* → *"...yes?"* A question whose answer cannot be no teaches nothing.

### Exit

Close when the student has her memory-bank need, her two-tries rule, and her check-later reporting.
If they got the leaderboard tension too, say so warmly — that is the hard one.

---

## ZONE B — instructor only

**Do not hand this to anyone whose interview is being graded.**

### Hazard map

| Zone-A line | Hazard type | What a strong analyst does |
|---|---|---|
| *"Absolutely put in a leaderboard…"* | **Solution-shaped** | Recognize the need (motivation), reject the solution. Do **not** let it become a Must-Have. |
| *"Just make it safe, and make it good"* | **Vague** | Flag as non-actionable; decompose into the concrete things she said elsewhere. |
| *"He'd have his own login… that's just how apps work now"* | **Unstated assumption** | Surface it. The original was a *shared* device; the account model is an open requirement. |
| Memory bank, two tries, reward, check-later, auto-off | **Genuine need — keep** | Maps to core stories 3.1, 1.2, 2.2, 4.1, 7.1. |

### Conflicts she carries

- **vs. Ms. Alvarez — public ranking.** She wants a leaderboard; the teacher forbids one flatly.
  Grade the *surfacing*, not a particular resolution. Pedagogy favors the teacher.
- **vs. Ms. Alvarez — identity and visibility.** She assumes per-child logins; the teacher assumes
  full visibility of her students. The access-control model is an open requirement, not a given.
- **vs. Dale — primary audience.** She assumes a child user; he assumes nostalgic adults.

### Downstream

MoSCoW cuts she motivates: the leaderboard is **Won't / cut**. Entities she implies: Learner,
Curator, Session, Attempt (*"the two he missed"*), Score, Problem, MemoryBankSet.

Full detail: `Grading_Key.md` Parts 1–4. This card cites into it and does not copy it.
