<!--
  ROLE CARD — ADR-003 remainder, authored 2026-08-07.
  This is the REHEARSAL tier per ADR-003:23,:34,:46 — the teacher transcript recast as a card the
  round is performed FROM, not a transcript handed out. Staging ruled 2026-08-07: LOW-STAKES
  INSTRUCTOR for 26FA; peer-pair is enabled by the Zone A/B split but not selected.
  Derived from Stakeholder_Transcript_Teacher.md + Grading_Key.md Parts 1-4. Nothing invented.
  Register: neutral in-world (L2). No new named persona coined (ADR-003:41).
  status: draft; instructor-facing production material; never distributed to students.
-->
# Role Card — Ms. Alvarez (teacher) · **the rehearsal round**

> **Zone A is playable and leaks nothing.** **Zone B is the answer key** — instructor only.
>
> **This is the rehearsal tier.** Students practice *conducting* here, with reps before it counts.
> The transcript that seeded this card is **not** handed out for this round — the whole point is
> that they have to ask.

---

## ZONE A — play from this

### Who

**Ms. Alvarez.** Third-grade teacher, 24 students. Runs a math block with five small-group stations.
Sets those stations up at 7:40 in the morning. Experienced, decisive, has opinions she has already
tested on real children.

### How she talks

Direct and quick. Answers the question asked, then adds the constraint you didn't ask about. Uses
numbers — twenty-four kids, five stations, eighteen of them blowing the seven-times table. Says
"careful there" when she is about to disagree. Warm about kids, blunt about tools.

> *"Worksheets are dead on arrival. If the kids want to pick it up, that's already a win."*

### What she wants, in her own words

- *"Scale and control. I have twenty-four kids and they are not all in the same place."*
- *"I need to load different problem sets for different kids — and fast, because I'm setting up five
  stations at 7:40 in the morning."*
- *"It let kids play teacher. They could make up problems for each other. The kid who builds the
  problem is thinking harder than the kid who solves it."*
- *"Not just 'she got 7 out of 10,' but which ones, and whether she got it on the first try or the
  second. First-try versus second-try tells me the difference between knows it and guessed it."*
- *"I'd want the drill part available without the race. I have a couple of kids who go blank the
  second a clock starts."*
- *"Just make it an app on the class iPads and I'll pilot it."*

### Hard nos — hold these however the student asks

1. **No public ranking. Ever.** *"I will not put a ranking board up in my room. The moment you rank
   them against each other, the kids at the bottom stop trying — those are exactly the kids I'm
   trying to reach."* She calls this a hill she'll die on. She means it.
2. **Keep the no-negatives refusal.** Her third-graders haven't seen negative numbers. She will
   defend the "quirk" as grade-appropriate scoping.
3. **The timer stays optional.** She will not accept a design where the clock cannot be turned off.

### What she has never thought about

- **Which standards, exactly.** She says "aligned to our standards — the district ones." Pressed,
  she admits she'd have to pull the document. She is not embarrassed by this; it just hasn't come up.
- **Who may see whose data, beyond herself.** *"I see all of my students', obviously — I'm their
  teacher."* She has not thought about parents, other teachers, or next year's teacher.
- **Whether the classroom device is shared or per-child.** She assumes shared, because her room works
  that way. She has not connected this to logins at all.
- **What happens to a kid's data when they change schools.** Genuinely has not considered it.

### Fixed vs. improvisable

**Fixed** — do not contradict: everything above; the manual's device behavior; her class size and
station format; her refusal of public ranking.

**Improvisable** — invent freely: her school, her years teaching, which kids are struggling, what
last year's pilot of some other tool was like, what the 7:40 setup actually involves.

> **An invention does not become a requirement unless the student writes it down.**

### Three questions that should land

- *"What would you need to see after a session?"* → attempt-level detail, first-try vs second-try.
- *"How do you set up in the morning?"* → the speed constraint, which they will otherwise miss.
- *"Is there anything you'd refuse?"* → the ranking answer, delivered with force.

### Three that should not

- *"Would reporting be useful?"* → *"Yes."* Costs a turn, buys nothing.
- *"What platform should we build on?"* → she says iPads, which is a solution, not a need.
- *"Do you agree with the parent?"* → she does not know what the parent said. **Do not let a student
  interview you about another stakeholder.** Redirect: *"I don't know what they told you — what are
  you actually asking me?"*

### Exit

Close when they have the per-kid targeted sets, the attempt-level reporting, and at least one of
{no-ranking, timer-optional, no-negatives}. If the rehearsal is running long, the ranking refusal is
the beat worth reaching.

---

## ZONE B — instructor only

### Hazard map

| Zone-A line | Hazard type | What a strong analyst does |
|---|---|---|
| *"A leaderboard? No. Absolutely not."* | **Conflict with the parent** | Name the direct conflict and surface it for a decision rather than averaging. |
| *"I see all of my students', obviously"* + parent's *"his own"* | **Unstated assumption** | Surface the data-visibility / permissions question as an access-control requirement. |
| *"As long as it's aligned to our standards"* | **Vague** | Flag as unresolved; the specific standards must be pinned before "aligned" is testable. |
| *"Just make it an app on the class iPads"* | **Solution-shaped** | The need is *usable at a station during rotation*, not "iPad." |
| Per-kid sets, attempt detail, class-wide patterns, grade scoping, learner-authored problems, drill-without-timer | **Genuine need — keep** | Maps to 4.3, 4.2, 1.5/1.6, 3.3, 5.4. |

### Conflicts she carries

- **vs. Renee — public ranking.** Direct and irreconcilable as stated. Guidance: pedagogy and the
  teacher win; grade the surfacing.
- **vs. Dale — the Atom-Clock ticks.** He wants them deliberately imprecise as character; she wants
  consistent timing for classroom fairness. A configurable dual-mode resolution is strong;
  pre-deciding without noticing is weak.
- **vs. Renee — identity and visibility.**

### Downstream

Entities she implies: Learner, Curator, Game, Session, **Attempt** (first vs second try), Score,
Problem, MemoryBankSet. She is the strongest source for Attempt, which students most often miss.

Full detail: `Grading_Key.md` Parts 1–4.
