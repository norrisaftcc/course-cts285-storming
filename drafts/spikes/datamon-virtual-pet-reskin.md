> **SPIKE — exploratory creative reskin, NOT adopted canon.** Tests the "relaunch DataMan (1977) as Datamon, a math virtual-pet anime (2026)" direction. The faithful source is `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md`. Adopting this would change `phase0/NAMING_CANON.md` (the Dataman≠Datamon split) and graded quiz keys — an ADR decision, not settled here. No user stories added by design.

# Datamon — Your Pocket Math Familiar

## The pitch

In 1977, Texas Instruments shipped a handheld robot named DataMan who traveled from a distant star to save Earthlings from a math-hating wizard. The device was a math-drill calculator. The fable was the wrapper that made a kid *want* to hold it.

The wrapper still works. We're keeping every gear turning underneath — the answer checker, the memory bank, the ticking clock, the light shows — and swapping the space-robot mythology for the format kids actually raise on their screens in 2026: **a virtual pet you feed, bond with, and evolve.**

Meet **Datamon**: a small, luminous creature who lives in your pocket and grows stronger every time you get math *right*. He isn't a robot on a mission anymore. He's yours. And he's counting on you.

---

## The story (reskinned origin)

Long ago, in a bright layer of the world called the **Numberlands**, math wasn't a subject — it was weather. Sums fell like warm rain. Patterns bloomed. Every creature there was born already delighting in numbers.

Then came **NULL**, the Static.

Where the old wizard AntiMath *clouded minds*, NULL does something quieter and creepier: he **corrupts the signal.** He drips glitch into a mind until one small fact goes gray and won't light up — *six times six just... won't load.* *Seven plus six throws an error.* NULL feeds on that gray flicker of "I can't." The more joy he siphons, the more the Numberlands dim.

To fight back, the Numberlands' guardian — the **Keeper of NumberFun**, a warm, patient presence who speaks to you between rounds — hatches a rescue plan. She can't cross into your world. But a *pet* can. She seals a spark of the Numberlands inside an egg and sends it drifting down to Earth, to bond with one kid brave enough to raise it.

That egg hatched into **Datamon**.

He arrives small, blinking, and a little unsure — a hatchling who lights up with an **=** the moment he wakes, his way of saying *I'm here, I'm okay, let's go.* He can already sense NULL's static creeping toward you. He can't clear it alone. But together? Every correct answer you feed him is a pulse of clean signal — light NULL can't stand. Raise Datamon well, and you don't just level up a pet. You push the Static back out of your own head.

*That,* the Keeper says, *is the secret of NumberFun. It was never about the machine. It was about who you became while raising it.*

---

## The cast

**Datamon** — the pet. Hatchling-sized, glowing, expressive. His whole body is a display: he flashes with delight when you're right, wilts and sputters an **"EEE"** when you're not, and blooms into full **evolution light-shows** at milestones. He has the memory of a computer and, per the 1977 line we're lovingly keeping, *the heart of a friend.* He evolves in stages as your bond grows — hatchling → sprout → radiant → and rarer forms past that — each evolution triggered by scores, streaks, and cleared trouble-spots.

**The Keeper of NumberFun** — the mentor. Reworked from Commander NumberFun: no longer a commander barking a mission, but a guardian who checks in, sets the day's practice, and tucks encouragement into the margins. She's the voice that says *nice one* and *try that again* — warm, never scolding. (She's also the "grown-up handle": the parent/teacher slot who can load specific problems into Datamon for a kid to work.)

**NULL, the Static** — the antagonist. AntiMath, re-costumed for anime villainy. The name is the whole thesis: **NULL is the value that is *not a number*** — the absence where a number should be, the `NaN` at the heart of every "I can't." His function is untouched: he **steals the joy and excitement of mathematics.** His method is corruption — glitch-tendrils, a flickering gray hush, the one fact that "won't load." He's most visibly at work in exactly the moment the 1977 manual named: *that one problem you always miss.* When Datamon looks glitchy or sick, that's NULL's static leaking in — and clearing the problem is what heals him.

---

## Mechanics → pet-behaviors (function unchanged)

Every device behavior survives. It's re-costumed, never re-engineered.

| The 1977 mechanic | The Datamon behavior | What actually happens (unchanged) |
|---|---|---|
| **Answer Checker** (default on power-up) | **Feeding.** You hand Datamon a problem and your answer; he tastes it. | You enter both problem and answer; he signals right or wrong. On power-up he's always in this mode; waking him always returns here. |
| **Right answer → light flash** | Datamon **lights up / does a happy wiggle.** | Correct answers flash the display. |
| **Wrong answer → "EEE" + blink, two tries, then show answer** | Datamon **sputters "EEE" and looks queasy** (NULL's static). Two tries; then he *shows you the right answer so you both recover.* | Two attempts; wrong second try displays the correct result. He **never shows a wrong answer as if it were right** — Datamon can't lie to you. |
| **Score after 10 (`9  10`)** | **Bond level.** Right-out-of-tried is how tightly you and Datamon are bonded today. | Two numbers: right answers / problems tried. |
| **Light show, scaled to score** | **Evolution & happiness animations** — bigger score, bigger bloom. | The reward light-show still varies with how well you did. Milestone scores trigger evolution stages. |
| **Memory Bank (≤10 problems)** | **Datamon remembers what troubles you.** Load in the facts that "won't load" — the ones NULL grayed out. | Up to 10 problems stored; press **GO** to replay them one at a time. |
| **Two tries per stored problem** | Each remembered problem gets **two gentle attempts.** | Unchanged. |
| **Atom-Clock Timer / "ticks"** | Datamon's **heartbeat** — a ring of light circling while you work; faster pulse, more energy. | Timed activities clock in "ticks"; the moving light-string still circles the display; ticks still vary with battery, temperature, etc. |
| **Score with time (`6  7  .24`)** | Bond level **plus how briskly your hearts kept time together.** | Right / tried / ticks-taken. Unchanged. |
| **Electro Flash** | **Flash-training** — rapid drills on one table you pick together. | Choose an operation + number; **GO**; the table presents in order; score + light-show; auto-advances to the next table. |
| **Number Guesser** | **Hide-and-seek** — Datamon hides a secret number (9–100); you hunt it with his "it's between X and Y" hints. | Betweenness hints each guess; win = light-show + guess count. |
| **Wipe Out** | **Hot-potato** — pass Datamon around; don't be holding him when he *wipes out.* | Random-timed addition round; the long wipe-out light-show marks the loser; secret duration known only to Datamon. |
| **Force Out** | **Tug-of-war** — a NIM duel; force your opponent to take the last number to zero. | Subtraction strategy from a starting number; whoever hits zero is Forced Out. |
| **Missing-Number / Box** | **Fill-the-gap** — a piece of the problem is missing; you find where the hole is (`[?] + 4 = 7`). | Box moves across three positions; two difficulty levels; 10 problems, two tries, scored with ticks. |
| **Division remainders (`r`)** | Datamon is **tidy** — he keeps the leftover crumb and shows it to you rather than hiding it. | Enter the whole-number part; he flashes **"r"** and computes the remainder. Unchanged. |
| **No negative numbers** | Datamon is an **optimist** — he simply *won't go below zero.* Ask 7 − 8 and he politely declines the 8. | Negative-result subtraction is rejected exactly as before. A charming trait, not a bug. |
| **5-minute auto-shutoff** | Datamon **naps** to save his strength if you wander off — and he's wide awake the second you return. | Auto power-off after ~5 minutes of non-use. |

---

## Why this direction earns its keep

The 1977 device already did the hard, honest thing: it gave immediate, non-punishing feedback, remembered your weak spots, and celebrated effort with light. Those are exactly the pillars of a good virtual-pet loop — feed, bond, evolve — which is why the reskin costs us *nothing in function.*

We're not bolting a mascot onto a calculator. We're revealing that the calculator was a pet the whole time. The kid who once "saved Earth from a wizard" now *raises a creature who needs them* — and the math is still the food, the memory bank is still the safety net, and the light show is still the reward for showing up and trying.

NumberFun was never the machine. It's who you become while raising your Datamon.
