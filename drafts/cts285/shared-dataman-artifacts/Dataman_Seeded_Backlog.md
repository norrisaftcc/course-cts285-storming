# Dataman Seeded Product Backlog

> **CLASS ARTIFACT — instructor-provided starting backlog.** The seed the Week 2 *Agile Simulation & Dataman Backlog Initialization* (35 pts, 4.7% of 750) hands students, and the reference the Week 4 *User Stories & Product Backlog* (50 pts, 6.7% of 750) and Module 4 *Sprint Planning Simulation* build on. Every top-of-backlog story has a named motivating source; transcript-derived stories name a stakeholder, while Epic 8 is the explicit Appendix-derived modernization/NFR exception (see the trace line on each story and the companion `Grading_Key.md`).
>
> **Classification is the student's job.** The **Priority (MoSCoW)** and **Story Points** fields are carried on every story but left **unassigned** for the core stories — classifying and estimating them is the graded exercise. The instructor's intended MoSCoW lives **only** in `Grading_Key.md`. Stretch epics are the exception: they are marked below-the-line by design, not as a graded classification.
>
> **Board columns (canonical):** `To Do → In Progress → In Review → Done`. All seeded stories start in **To Do**.
>
> **Format** follows the Week 4 user-story template: statement + Given/When/Then acceptance criteria + Priority + Story Points + Notes.

---

## How to read the trace line

Each story carries `↳ Traces to:` — the stakeholder(s) and manual/device behavior that motivate it. Core stories normally name a stakeholder; Epic 8 is the explicit Appendix-derived modernization/NFR exception. (That distinction is part of the grading key: see `Grading_Key.md` §Traceability.)

---

# CORE BACKLOG — Modernizing the 1977 DataMan (the MVP spine)

## Epic 1 — Answer Checker & Feedback Loop
*The soul of the device: you enter a problem and your answer; it tells you if you're right, kindly.*

### Story 1.1 — Check my answer
**As a** learner
**I want** to enter a math problem and my answer and be told whether I'm right
**So that** I can practice and check myself without an adult standing over me

**Acceptance Criteria**
- **Given** I have entered a problem and an answer, **When** my answer is correct, **Then** the system shows a positive "correct" signal (the light-show reward)
- **Given** I have entered a problem and an answer, **When** my answer is wrong, **Then** the system shows the "EEE" error signal and lets me try again
- **Given** the app has just started, **When** I begin, **Then** I am in Answer Checker mode by default

**Priority:** _(unassigned — classification exercise)_
**Story Points:** _(estimate in class)_
**Notes:** Answer Checker is the power-on default per manual pp.4, 22. `↳ Traces to:` Collector (the answer-checker inversion "is the whole soul"); Parent; manual pp.4–5.

### Story 1.2 — Two tries, then show me the answer
**As a** learner
**I want** a second try when I'm wrong, and to be shown the correct answer if I miss twice
**So that** I learn the right answer instead of just failing

**Acceptance Criteria**
- **Given** my first answer is wrong, **When** the error shows, **Then** I am given a second try at the same problem
- **Given** my second answer is also wrong, **When** the error shows, **Then** the system displays the problem with its correct answer
- **Given** I answer correctly on either try, **When** it is accepted, **Then** no further tries are offered for that problem

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Exactly two attempts. `↳ Traces to:` Parent ("two tries... then showed the right answer"); Collector; manual pp.5, 20, 22.

### Story 1.3 — Never show a wrong answer as if it were right
**As a** supervising adult
**I want** the system to never accept or display an incorrect answer as correct
**So that** my child never memorizes a wrong fact

**Acceptance Criteria**
- **Given** an answer is incorrect, **When** it is entered, **Then** the system never flashes it as correct
- **Given** two wrong tries, **When** the correct answer is revealed, **Then** the revealed value is the true correct answer, not the child's entry

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Manual p.21 states DataMan will *not* display an incorrect answer. `↳ Traces to:` Parent ("never flashed the wrong answer at you like it was real"); Collector ("that honesty is a design principle"); manual pp.5, 21.

### Story 1.4 — Division with remainder
**As a** learner
**I want** to enter the whole-number part of a division answer and be shown the remainder
**So that** I can practice division that doesn't come out even

**Acceptance Criteria**
- **Given** a division problem with a remainder, **When** I enter the correct whole-number part, **Then** the system marks that a remainder exists ("r") and shows the remainder value
- **Given** a division problem that comes out even, **When** I answer, **Then** no remainder is shown

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Collector (the "r" behavior); manual pp.5, 22.

### Story 1.5 — Refuse negative results
**As a** teacher
**I want** the system to refuse a subtraction whose answer would be negative
**So that** my young students aren't shown concepts beyond their grade

**Acceptance Criteria**
- **Given** I enter a subtraction that would go below zero (e.g. 7 − 8), **When** I try to enter the larger second number, **Then** the system will not accept it
- **Given** the entry is refused, **When** I continue, **Then** I can enter a number that keeps the result at zero or above, or start a new problem

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Grade-appropriate scoping, not a bug. `↳ Traces to:` Teacher ("keep that... it's grade-appropriate"); Collector; manual p.22.

### Story 1.6 — Enforce problem/answer size limits
**As a** learner
**I want** problems limited to one- or two-digit numbers with one-to-three-digit answers
**So that** the practice stays at the right level

**Acceptance Criteria**
- **Given** a problem is created, **When** operands are set, **Then** each operand is one or two digits
- **Given** an answer is entered, **When** it is checked, **Then** it may be one, two, or three digits

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Teacher ("keep it to small numbers"); manual p.22.

---

## Epic 2 — Scoring, Streaks & Positive Reinforcement
*After a round: right-over-tried, plus a reward that scales with how you did.*

### Story 2.1 — Score after a round
**As a** learner
**I want** to see how many I got right out of how many I tried after a round of problems
**So that** I know how I did

**Acceptance Criteria**
- **Given** I complete a round of problems, **When** the round ends, **Then** I see my number right and number tried (e.g. "8 / 10")
- **Given** the round is timed, **When** it ends, **Then** the elapsed time is also shown

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Answer Checker scores per 10 problems; Memory Bank and games score per set. `↳ Traces to:` Parent ("8 out of 10"); Teacher ("summary for the kid"); manual pp.5, 21, 23.

### Story 2.2 — Reward that scales with the score
**As a** learner
**I want** a reward animation ("light show") that gets bigger the better I did
**So that** doing well feels good and I want to come back

**Acceptance Criteria**
- **Given** I finish a scored round, **When** my score is high, **Then** I get a bigger reward animation than for a low score
- **Given** any completed round, **When** it ends, **Then** the reward is never punitive — a low score still ends on encouragement, never a penalty

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** "The higher your score, the more the razzle dazzle." Reinforcement is positive-only. `↳ Traces to:` Parent ("make the reward feel like a reward"); manual pp.5, 21, 23.

---

## Epic 3 — Memory Bank: Targeted Practice Sets
*A curator stores up to 10 problems for a learner to drill.*

### Story 3.1 — Load a set of problems for a child
**As a** parent
**I want** to store up to ten specific problems for my child to practice
**So that** they drill the exact facts they keep missing, not everything

**Acceptance Criteria**
- **Given** I am a curator, **When** I add problems to a set, **Then** I can store up to ten problems and no more
- **Given** a set exists, **When** I assign it to a learner, **Then** that learner can practice exactly those problems
- **Given** the facts change next week, **When** I edit the set, **Then** I can replace problems without starting over

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Hard cap of 10 per manual p.6/p.21. `↳ Traces to:` Parent ("punch in the five or six facts... swap them out"); Teacher; manual pp.6, 21.

### Story 3.2 — Practice a stored set
**As a** learner
**I want** to play back the problems stored for me, one at a time, with two tries each
**So that** I practice my trouble spots and see my score at the end

**Acceptance Criteria**
- **Given** a set is assigned to me, **When** I press GO, **Then** the stored problems appear one at a time
- **Given** each stored problem, **When** I answer, **Then** I get up to two tries, the same as Answer Checker
- **Given** I finish the set, **When** it ends, **Then** I see right / tried / time and a reward

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Parent; Teacher; manual pp.6, 23.

### Story 3.3 — Kids author problems for each other ("playing teacher")
**As a** learner
**I want** to build a problem set for a partner to solve
**So that** I learn by constructing problems, not just answering them

**Acceptance Criteria**
- **Given** I am a learner, **When** I author problems, **Then** I can create a set for a named partner to practice
- **Given** my partner practices my set, **When** they finish, **Then** the set is scored the same as any other

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** The manual's "playing teacher" learning-by-constructing angle. `↳ Traces to:` Teacher ("the kid who builds the problem is thinking harder"); manual pp.21, 23.

---

## Epic 4 — Curator Console: Assign & Review Progress
*The modern extension of the Memory Bank: adults assign sets and review results without hovering.*

### Story 4.1 — Review a learner's results later
**As a** parent
**I want** to check my child's recent scores and which problems they still miss, after the fact
**So that** I know what to load next without having to watch them practice

**Acceptance Criteria**
- **Given** my child has practiced, **When** I open their progress, **Then** I see recent session scores (right / tried)
- **Given** a session had misses, **When** I view it, **Then** I see which specific problems were missed
- **Given** I am reviewing, **When** I read the results, **Then** I do not have to have been present during practice

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Parent ("check later... see the ones he's still missing"); manual pp.5, 21.

### Story 4.2 — See attempt-level detail per student
**As a** teacher
**I want** to see, per student, which facts were missed and whether they were right on the first or second try
**So that** I can tell "knows it" from "guessed it" and plan tomorrow's lesson

**Acceptance Criteria**
- **Given** a student has practiced, **When** I open their detail, **Then** I see each problem attempted and whether it was correct on try 1 or try 2
- **Given** I view my class, **When** I look for patterns, **Then** I can see which facts the class as a whole misses most

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Requires the ATTEMPT entity (see Reference ERD). `↳ Traces to:` Teacher ("down to the individual attempt... first-try vs second-try"); manual p.22.

### Story 4.3 — Assign different sets to different students
**As a** teacher
**I want** to assign different problem sets to different students or groups quickly
**So that** each kid drills at their own level during station rotation

**Acceptance Criteria**
- **Given** I have several students, **When** I assign sets, **Then** different learners can hold different assigned sets at the same time
- **Given** a busy morning, **When** I set up, **Then** assigning a set to a student takes only a few steps

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Teacher ("different problem sets for different kids... fast"); manual p.21.

---

## Epic 5 — Classic Practice Games & the Atom-Clock Timer
*The single-player games, with the "ticks" timer, and the ability to turn the race off.*

### Story 5.1 — Electro Flash (flash-card drill on a chosen table)
**As a** learner
**I want** to drill one math table as timed flash cards
**So that** I build speed on the facts I choose

**Acceptance Criteria**
- **Given** I pick an operation and a number, **When** I press GO, **Then** the problems in that table are presented in order
- **Given** I finish a table, **When** it ends, **Then** I see my score with ticks and a reward, and the next table begins

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Collector (named game); manual p.24.

### Story 5.2 — Number Guesser (betweenness hints)
**As a** learner
**I want** to guess a hidden number between 9 and 100 with "it's between X and Y" hints
**So that** I practice estimation and number logic

**Acceptance Criteria**
- **Given** a game starts, **When** the system picks a secret number, **Then** it is between 9 and 100
- **Given** I guess, **When** my guess is wrong, **Then** I see the two numbers the secret is between
- **Given** I find it, **When** the game ends, **Then** I see how many guesses I took, plus a reward

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Collector (named game); manual p.24.

### Story 5.3 — Missing-Number (Box) problems
**As a** learner
**I want** problems where the missing value can be in any of three positions, at two difficulty levels
**So that** I practice problem-solving, not just computing

**Acceptance Criteria**
- **Given** I select Missing-Number, **When** I choose the box position, **Then** the blank appears on the left, middle, or right of the problem
- **Given** I choose level 2, **When** problems present, **Then** they are harder than level 1
- **Given** I complete 10 problems, **When** the round ends, **Then** I see right / tried / ticks and a reward

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Three box positions, two levels, 10 problems, two tries. `↳ Traces to:` Collector (named game); manual p.25.

### Story 5.4 — Drill without the clock
**As a** teacher
**I want** to make the drill activities available without the timer/race
**So that** students who freeze under time pressure can still practice

**Acceptance Criteria**
- **Given** a timed activity, **When** I disable the timer for a student, **Then** they practice the same problems with no clock and no ticks pressure
- **Given** the timer is off, **When** the round ends, **Then** the score still shows right / tried (without a time)

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Accessibility of the drill; directly addresses the timer-anxiety concern. `↳ Traces to:` Teacher ("the drill part available *without* the race"); manual pp.23–25.

---

## Epic 6 — Multiplayer Party Games *(lower-priority core; pass-and-play)*
*The two hot-seat games. Real to the device, but multiplayer coordination makes them heavier and less central than the solo drill loop.*

### Story 6.1 — Wipe Out (hot-potato addition)
**As a** group of learners
**We want** a pass-and-play addition game that ends at a secret random time
**So that** we practice quick addition while racing not to be caught

**Acceptance Criteria**
- **Given** a game starts, **When** GO is pressed, **Then** the "wipe out" time is chosen at random and hidden from players
- **Given** play is underway, **When** the wipe-out occurs, **Then** the player holding the device at that moment is out
- **Given** players remain, **When** one is out, **Then** play continues until one winner is left

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** `↳ Traces to:` Collector (named game); manual pp.24–25.

### Story 6.2 — Force Out (subtraction Nim)
**As a** group of learners
**We want** a subtraction strategy game where you force your opponent to reach zero
**So that** we practice subtraction and strategy

**Acceptance Criteria**
- **Given** a game starts, **When** it begins, **Then** a starting number is shown
- **Given** it is my turn, **When** I subtract a number 1–9, **Then** the new result is shown
- **Given** a player is forced to bring the value to zero, **When** that happens, **Then** they are "Forced Out"

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** A variant of Nim. `↳ Traces to:` Collector (named game); manual p.25.

---

## Epic 7 — Faithful Behavior & Accessibility of the Original
*Preserve the true device behaviors that make it Dataman, without over-restoring 1977 hardware artifacts.*

### Story 7.1 — Auto-stop after idle
**As a** parent
**I want** the app to stop a session after a few minutes of no use
**So that** it doesn't become an endless screen and my child steps away

**Acceptance Criteria**
- **Given** a session is open, **When** there is no activity for about five minutes, **Then** the session ends on its own
- **Given** the session has ended, **When** my child returns, **Then** they can start fresh immediately

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** The power-saver behavior reframed as healthy-use. `↳ Traces to:` Parent ("when he wanders off, it should stop"); manual pp.5, 21.

### Story 7.2 — Atom-Clock "ticks" timing
**As a** learner
**I want** timed games measured in "ticks" like the original
**So that** the timed games feel like Dataman and I can try to beat my own time

**Acceptance Criteria**
- **Given** a timed activity runs, **When** the timer is on, **Then** a moving indicator shows time passing and the result is reported in "ticks"
- **Given** a timed activity ends, **When** I see my result, **Then** the ticks let me compare against my own past times

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** **Open design tension** (surface it, don't pre-decide): the collector wants ticks kept deliberately imprecise as "character"; classroom use may favor pressure-free drill rather than a race. See `Grading_Key.md` §Conflicts. `↳ Traces to:` Collector; Teacher (timer-pressure concern); manual p.23.

---

## Epic 8 — Device Health & Recovery *(modernized from the 1977 Appendix)*
*The manual's Appendix (p.26) covers battery, low-battery symptoms, and a mail-it-in / exchange service flow. Modernizing the device means re-expressing those as the recovery, health, and support behaviors of a web/app system. Each still traces to p.26; several are non-functional or assumptions rather than user-facing features — labeled as such.*

### Story 8.1 — Low-power indicator and charging
**As a** learner
**I want** a clear low-battery indicator and to charge over USB-C
**So that** I can tell when power is low and keep practicing without interruption

**Acceptance Criteria**
- **Given** the device charge is low, **When** I am using it, **Then** I see a clear low-power indicator before it dies
- **Given** the device is charging, **When** I check it, **Then** I can see it is charging and can keep practicing while plugged in

**Priority:** _(unassigned — classification exercise)_
**Story Points:** _(estimate in class)_
**Notes:** Modernizes the 9-volt-alkaline replacement flow (swap battery → rechargeable + indicator). Hardware-flavored; on a web build this may become a device/PWA assumption rather than an app feature. `↳ Traces to:` manual p.26 (Battery Information, Low Battery Indication).

### Story 8.2 — Degraded-state / device-health handling
**As a** supervising adult
**I want** the system to detect and clearly signal when it is running in a degraded state (unresponsive input, display glitches, inconsistent behavior)
**So that** a malfunction is obvious rather than silently corrupting a practice session

**Acceptance Criteria**
- **Given** input stops registering or behavior becomes inconsistent, **When** it is detected, **Then** the system surfaces a clear "something's wrong" state instead of failing silently
- **Given** a degraded state, **When** it is shown, **Then** the current session's score is not recorded as a real result

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Modernizes the manual's dim/erratic/dead-keys/inconsistent-operation symptom list into device-health detection. May read as an NFR. `↳ Traces to:` manual p.26 (Low Battery Indication symptoms 1–4).

### Story 8.3 — In-app recovery (retry / reset / help)
**As a** learner
**I want** simple in-app recovery — retry, reset, and a help option — when something goes wrong
**So that** I can get unstuck myself instead of mailing the device away

**Acceptance Criteria**
- **Given** an error or stuck state, **When** I open recovery, **Then** I can retry the current action, reset to a working state, or open help
- **Given** I reset, **When** it completes, **Then** the device returns to Answer Checker mode (the power-on default) without losing previously saved sets

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Modernizes the "In Case of Difficulty" self-checklist (is it on? check power? review instructions?) into in-app self-diagnostics. `↳ Traces to:` manual p.26 (In Case of Difficulty, steps 1–3).

### Story 8.4 — Contact support in-app
**As a** supervising adult
**I want** to reach support from inside the app when recovery doesn't fix the problem
**So that** I can get help without a mail-in or exchange-center trip

**Acceptance Criteria**
- **Given** self-recovery did not resolve the issue, **When** I choose "contact support," **Then** I can send a description of the problem from within the app
- **Given** I contact support, **When** I submit, **Then** I receive confirmation that the request was sent

**Priority:** _(unassigned)_
**Story Points:** _(estimate in class)_
**Notes:** Modernizes the mail-it-in service-facility / exchange-center flow into in-app support contact. `↳ Traces to:` manual p.26 (In Case of Difficulty; Calculator Exchange Centers; Service Information).

---

# STRETCH-GOAL EPICS — Below the line (beyond MVP; in-world homage)

> **Not part of the faithful-Dataman MVP.** These epics recast features of the retired legacy **Datamon** creature-collection console game (text-based collection, save/load game state, turn-based battles, and random encounters/progression) as an **optional legacy entertainment module** — a deliberate in-world homage, *not* a merge of the two projects and *not* something students are expected to build. The source feature list is recorded in `phase0/NAMING_CANON.md` §“Dataman vs. DataMon”. They gesture at an aspirational engagement / virtual-pet direction (explored separately in `drafts/spikes/datamon-virtual-pet-reskin.md`) that must stay clearly beyond the MVP and must not contaminate the faithful-Dataman core above. Treat these as **Won't-Have-this-semester** by default.

## Stretch Epic S1 — Legacy Entertainment Module: creature companion
*An optional unlockable that turns correct-answer practice into progression for a collectible math companion. Aspirational; below the line.*

- **S1.1 — Save/load progress.** As a learner, I want my companion's progress saved between sessions, so that raising it persists over time. `↳ Homage to:` legacy save/load game state (`phase0/NAMING_CANON.md`, §“Dataman vs. DataMon”).
- **S1.2 — Turn-based challenge.** As a learner, I want a turn-based challenge where correct answers power my moves, so that math drives the game. `↳ Homage to:` legacy turn-based battle system (`phase0/NAMING_CANON.md`, §“Dataman vs. DataMon”).
- **S1.3 — Random encounters & progression.** As a learner, I want occasional surprise challenges and a sense of progression, so that practice stays fresh. `↳ Homage to:` legacy random encounters and progression (`phase0/NAMING_CANON.md`, §“Dataman vs. DataMon”).
- **S1.4 — Collection.** As a learner, I want to collect companions as I master more facts, so that mastery is visibly rewarded. `↳ Homage to:` legacy text-based creature collection (`phase0/NAMING_CANON.md`, §“Dataman vs. DataMon”).

**Priority:** Won't Have (this semester) — stretch/homage, explicitly below the MVP line.
**Notes:** These are engagement wrappers over the *unchanged* faithful practice loop; the math, the two-tries, the memory bank, and the positive-only reinforcement above remain the real product. Adopting any of this as product canon would be an ADR-level decision, not a backlog choice.

---

## Board snapshot (all seeded stories start here)

| To Do | In Progress | In Review | Done |
|---|---|---|---|
| Stories 1.1–1.6, 2.1–2.2, 3.1–3.3, 4.1–4.3, 5.1–5.4, 6.1–6.2, 7.1–7.2, 8.1–8.4 (and stretch S1.x, below the line) | — | — | — |
