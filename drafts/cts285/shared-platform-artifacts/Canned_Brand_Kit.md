<!--
  B-012 (task 2.3) — NEW, 2026-08-07. The scheduled fallback, built rather than noted.
  planning/26FA_Consolidation_Master_Plan.md names the wk-15 GREY consult as "the on-ramp's single
  point of failure" and says the canned brand-kit fallback "gets scheduled as a real build task,
  not just noted." This is that build.

  The GRD-242 dependency (fall-consult calendar, GRD-side deliverables) has been open since
  January and is a human task that stays one. This file does NOT resolve it - it makes Week 15
  gradeable in its absence, so a missing consult costs a team an experience rather than a grade.

  Design constraint that shaped the file: it must be HONEST about being canned. Presenting this as
  a real design partner's work would be lying to a student, which the bible's never-list forbids in
  SHODANN's voice and which is no better in L2 body text. Every path through the file says what it is.

  The pushback notes are the load-bearing part. A brand kit alone is an input; the graded exchange
  in Week 15 Part 2 needs something to come BACK, and it must force the same revision a live
  designer would. The six are drawn from what designers reliably raise, not invented for effect.
  Voice patterns follow sources/legacy/26SP_Planning/GRD_CreativeBriefs/STYLE_INTENT_DIGEST.md.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Canned Brand Kit — the fallback consult

**Read this first: nobody made this for your product.**

This is a prepared brand direction and a set of prepared responses, used when a live design consult is not available in a given term. It is not a real designer's reaction to your specific work, and your instructor is not pretending otherwise.

It exists because the exercise — receive an outside perspective, and revise — is worth doing whether or not a designer is free that week. **Everything Week 15 grades, you can earn from this path.** What you lose is the part nobody can fake: a real person who has never met your product telling you what they see.

If a live consult is running this term, use that instead. This is the floor, not the ceiling.

---

## Part A — A worked brand direction

One product, worked all the way through, so you can see what "finished" looks like. **StudyStream** — Task Engine, student market.

### Positioning

> For college students managing six platforms and a job, who lose work in the gaps between them. StudyStream is one place their commitments live. Unlike productivity tools built for offices, it assumes an unpredictable week.

### Audience, in one paragraph

Second-year students carrying 15 credits and 20 hours of work. Not disorganized — over-subscribed. They have tried three apps and abandoned all three, usually because setup cost more than the app returned in its first week.

### Personality

| Trait | Shows up as | Never |
|---|---|---|
| **Peer, not parent** | "Three due this week" | "Don't forget!" |
| **Honest about difficulty** | "This is a heavy week." | "You've got this!" |
| **Fast to act on** | The next thing, first | A dashboard of 47 metrics |

### Palette

| Role | Value | Used for |
|---|---|---|
| Primary | `#2F5D7C` | Headers, primary actions |
| Accent | `#E8A33D` | Due-soon, single highlight per screen |
| Success | `#3E7C5A` | Submitted, complete |
| Error | `#B3453A` | Overdue, failed action |
| Surface | `#F7F6F3` | Page background |
| Ink | `#1F2124` | Body text |

**Contrast:** every pairing above meets WCAG AA (4.5:1) for body text. Check it if you change anything — a palette that fails contrast is not a style preference, it is a product a portion of your users cannot read.

**Never signal by colour alone.** Overdue is red *and* labelled.

### Type

Headings and body in one humanist sans at 16px minimum body. One family, three weights. A second family is a decision to defend, not a default.

### Voice, with examples

- **Empty state:** "Nothing due today. Genuinely nothing — enjoy it."
- **Overdue:** "Two assignments passed their due date." *(not "You're behind!")*
- **Error:** "That didn't save. Your text is still here — try again."

### What this kit does not include

No logo. No illustration. No motion. Those are real design work and a canned kit pretending to supply them would teach you the wrong thing about what a designer does.

---

## Part B — The pushback

**This is the part that matters.** A brand direction is an input. What Week 15 grades is what came *back* and what you did about it.

Your instructor will apply the relevant notes below to your team's actual packet. They are the things designers reliably raise on a first look, which is why they can be prepared in advance without being fake — a live designer would raise most of them too.

### 1. "What screen is this?"

Your wireframes imply a viewport you never stated. Phone and laptop are different products, and a layout that works on one usually fails on the other.

**Revise:** name the primary viewport in your technical constraints, and say what happens at the other one.

### 2. "Two of your labels contradict your tone"

You said the product is calm and unhurried, and then a button says *"Act now."* Terminology and tone are the same decision, and Week 14's map is where the contradiction is visible.

**Revise:** read every UI label from your terminology map against your stated personality. Fix the ones that argue with it.

### 3. "What colour is an error?"

Most first palettes have a brand colour, a background, and nothing for the states where the product tells a user something went wrong. Failure states are where tone is decided.

**Revise:** add error, success, and disabled. Write the sentence your product says when something fails.

### 4. "You asked for a logo. Where does it go?"

A deliverable request with no placement is a request a designer cannot fill. Size, background, and worst-case context (tiny, greyscale, on a busy screen) are the constraints that make it buildable.

**Revise:** for every asset you request, state where it appears and at what size.

### 5. "You've named two audiences"

Your brief serves both the person doing the work and the person overseeing it, and they want opposite things. The digest's rule is **commitment, not compromise** — a product that splits the difference speaks to neither.

**Revise:** pick the primary. Say the other is secondary, and what they lose.

### 6. "This isn't readable"

Contrast below 4.5:1 on body text, or meaning carried by colour alone. Not a preference — a portion of your users cannot use it.

**Revise:** check every pairing. Add a non-colour signal anywhere colour carries meaning.

---

## Using this in Week 15

1. Read Part A to see a finished direction.
2. Receive the applicable notes from Part B on your own packet.
3. **Revise, and record what changed** — that record is the graded artifact, not the kit.

A team that receives four notes and changes nothing has produced the same evidence as a team that never had a consult at all. A team that pushes back on one note *with a reason* has done the exercise correctly — disagreeing with a designer in writing is a professional act, and Week 9 already taught you the shape of it.
