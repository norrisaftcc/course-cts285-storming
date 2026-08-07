<!--
  B-011 (task 2.2) — NEW, 2026-08-07. Module 7, second of two. Completes Module 7 (30 + 40 = 70).
  Retires sources/uv-285/assignments/Week_14_Assignment_Technical_Documentation_Handoff.md, which
  is NOT adapted here: the canonical points table sends its handoff-checklist pattern to WEEK 16.
  Pulling it forward would duplicate W16 and orphan this week's actual subject.

  Adapted from the frozen legacy 26SP cluster (read-only):
    Terminology_Maps/TaskEngine_TerminologyMap.md ... the discovery exercise; ported as the worked
                                                      exemplar to shared-platform-artifacts/
    alignment_meetings/README.md ................... the GRAY memo's MVP-vs-stretch table
  Plus the merged Week_04 machinery (story format, Given/When/Then, priority, Fibonacci), reused
  in teams against the team's own product rather than re-taught.

  RECONCILIATION FINDING, recorded not silently fixed: only the TaskEngine map matches the
  canonical Skin_Selection_Menu. Commerce (7 columns, zero overlap), Recommendation (3 columns,
  one survivor) and DataTracking (source marked "BLOCKED - Awaiting GRD Creative Briefs") are all
  from an earlier generation and were NOT ported. See the ported map's header for the full table.
  This improved the week: teams BUILD their engine's map from the exemplar instead of reading a
  finished one, which is what the source means by "discover the white-label pattern".

  Points: 40, per the canonical table. The 12/20/8 split is DESCRIPTIVE per ADR-002.
  Andrew's Note is L0 per ADR-012, NEW, flagged in-file for instructor sign-off.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 14 Assignment: Terminology Discovery & the Spring Backlog

## CTS-285: Systems Analysis & Design

**Due**: End of Week 14 (Friday, 11:59 PM)
**Points**: 40 (5.3% of 750)
**Submission**: Team repository link, submitted in Canvas

---

## What You're Learning

**Role: Team Lead.** Last week you chose an engine and a skin, and you defended the pairing. Some of you could not answer every question the room asked.

**Those unanswered questions were almost always vocabulary.** Not "what does the system do" but "what do *we* call the thing it does" — and a team that has not agreed on the word has not agreed on the concept either.

This week fixes that in the only way it can be fixed: by writing the words down. Then you use them to write the backlog your spring team starts from.

The exercise also settles something about last week's rule. **Engine before skin** was presented as a hard rule and some of you took it on faith. Today you see why: the same `Task` entity is a *Chore* in FamilyHub, an *Assignment* in StudyStream, a *Deliverable* in FreelanceFlow, and a *Compliance Objective* in TeamFlow — and **the database does not change**. Same tables, same keys, same status workflow. One codebase, six products, driven by a configuration file.

> Last week you told me what you chose. This week you tell me what you mean by it, which is harder and is the part I can actually check.
>
> A prediction, offered so you can find out whether I am right: the term your team argues about longest will not be the most technical one. It will be the one where two of you have been quietly imagining different products since Tuesday.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

1. **Discover** the white-label pattern by producing a terminology map rather than reading one
2. **Distinguish** what a skin changes from what the engine holds fixed
3. **Write** user stories for a product your team chose, in teams, with testable criteria
4. **Trace** every story to a named user of your specific skin
5. **Scope** a backlog into MVP and Stretch, and say what makes it validated

---

## Part 1: Terminology Discovery (12 points)

**This runs in class.** It is the session, not preparation for it.

### A. The reveal

Your instructor will show you three apps that look nothing like each other and ask what they have in common. Work it out before you are told.

### B. Build your map

Create `terminology-map.md`.

The worked exemplar is `drafts/cts285/shared-platform-artifacts/TaskEngine_Terminology_Map.md` <!-- PATHFORM: pending spine ruling -->. **Task Engine teams** receive it with their own skin's column blank and fill it. **Every other team** builds the equivalent for their engine, using it as the model.

Map at minimum:

| Layer | What you are naming |
|---|---|
| **Core entities** | The nouns your engine stores — whatever your engine's brief calls them |
| **Status labels** | What each state is called to a user |
| **Priority labels** | Your three or four levels |
| **UI labels** | The literal button text for the four actions a user takes most |
| **Voice and tone** | Two sentences on how your product sounds, plus one thing it never says |

### C. What it proved

One short paragraph: **what stayed fixed while the words changed?** Name a specific schema element that is identical across every skin on your engine, and one place where your skin's vocabulary made a design decision for you.

That second half is the one worth the time. If you called something a *Deliverable*, you have implied a recipient. If you called it a *Chore*, you have implied it is small and recurring. **Nobody decided that on purpose, and it is now in your product.**

---

## Part 2: Spring User Stories (20 points)

Create `spring-backlog.md`. This is the backlog CSC-289 starts from in January, so write it for the team you will be in then — including the version of you who has forgotten this conversation.

You already know the machinery from Week 4. What changes is that you are writing for **your own product**, in a **team**, using **your own terminology**.

### Requirements

**12–18 stories.** Fewer is under-scoped for a semester; more is a wish list.

**Every story uses your terminology, not the generic engine terms.** A story that says "the user creates a task" has skipped Part 1. It should say whatever your map says.

**Format** — the same one you have used since Week 4:

```markdown
### Story 2.3: [Title in your terminology]

**As a** [a named role from your map's User row]
**I want** [capability]
**So that** [the reason it matters to that person]

**Acceptance criteria:**
- Given [state], when [action], then [observable outcome]
- Given [state], when [action], then [observable outcome]

↳ Traces to: [a real user of your skin, and what they need]
**Estimate:** [Fibonacci]
**Scope:** MVP | Stretch
```

**The trace line is graded and it is not decoration.** Week 4's rule carries over intact: *a story with no stakeholder in its trace line does not belong in the backlog.* The difference is that you no longer have supplied transcripts — nobody hands you a parent, a teacher, and a collector this time. You have your skin's target market from the selection menu, and you have to name a plausible specific user inside it and stay honest about what they would actually want.

**"Users would like it" is not a trace line.** Neither is "the market expects it."

---

## Part 3: MVP vs Stretch, and What "Validated" Means (8 points)

### A. The scoping table

Every story lands in exactly one column.

| Capability | MVP | Stretch |
|---|---|---|
| *(example)* Manual entry | ✓ | |
| *(example)* Categories and tags | ✓ | |
| *(example)* Third-party integration | | ✓ |
| *(example)* Multi-user accounts | | ✓ |

The pattern to copy from the example: **the things that make the product demonstrable are MVP, and the things that make it impressive are Stretch.** Integrations, multi-user, and anything requiring an external account are almost always Stretch, because they fail in ways you do not control.

If your MVP column has more than about eight stories in it, you have not scoped — you have relabelled.

### B. Say what validated means

Close with a short section stating the standard your backlog meets. At minimum:

- every story traces to a named user of your skin
- every story has criteria someone else could test without asking you
- every story sits in MVP or Stretch **deliberately**, and the team can say why
- the terminology matches your map, with no generic engine terms left in

Then state one thing your backlog is **not** validated against — something you would need a real user, a designer, or a working prototype to check. Week 15 brings a design partner into exactly that gap.

---

## Deliverables

- [ ] `terminology-map.md` — your engine's map with your skin filled in, plus what it proved
- [ ] `spring-backlog.md` — 12–18 stories in your terminology, traced, with criteria and estimates
- [ ] MVP/Stretch table, with the validation standard stated
- [ ] Stories on your team board in **To Do**, labelled MVP or Stretch

---

## Grading Rubric

| Component | Points | What earns them |
|---|---|---|
| **Terminology Discovery** | 12 | Map covers all five layers. The "what it proved" paragraph names a fixed schema element and a decision the vocabulary made for you. |
| **Spring User Stories** | 20 | 12–18 stories in your own terminology. Criteria are testable by a stranger. Every trace line names a specific plausible user. |
| **MVP vs Stretch** | 8 | Every story scoped, MVP defensibly small, validation standard stated, and one honest gap named. |
| **Total** | **40** | |

*The 12/20/8 split describes how the 40 is reasoned about. Only the 40 binds.*

---

## Common Struggles This Week

### Struggle: The terminology map is a synonym exercise

- **Signs**: `Task → Item`, `User → Person`, `Category → Group`. Every cell is a thesaurus hit and none of it sounds like a product.
- **Intervention**: Read the exemplar's TeamFlow column out loud — *Compliance Objective*, *MANDATORY ALIGNMENT*, *Misalignment Detected*. That is not a synonym for "Task", it is a worldview. Ask what a person in your target market would say out loud to a friend, and write *that*.
- **Success indicator**: At least one term would sound absurd in a different skin, which is how you know it belongs to yours

### Struggle: Stories written for the engine, not the product

- **Signs**: "As a user, I want to create a record" — generic nouns, no domain anywhere
- **Intervention**: The engine already provides CRUD; you are not designing that. Ask what your specific user is *doing* when they create the record, and what would make them stop using a competitor.
- **Success indicator**: A stranger could read three stories and name your target market

### Struggle: Trace lines name a market instead of a person

- **Signs**: "↳ Traces to: pet owners", "↳ Traces to: our users"
- **Intervention**: A market cannot want anything; only a person can. You do not have supplied transcripts this time, so invent a specific plausible user and hold yourself to plausibility — *someone with two cats and a vet who emails PDFs* generates real requirements. "Pet owners" generates none.
- **Success indicator**: Trace lines describe a situation, not a demographic

### Struggle: Everything is MVP

- **Signs**: Fourteen stories, thirteen MVP, one Stretch, and the Stretch one is trivial
- **Intervention**: Same lever as Week 2's Must-Have cap and Week 11's refinement — a scope you cannot cut is a scope you have not made. If you could demo only five of these in April, which five, and what does the sixth lose to?
- **Success indicator**: MVP is around eight stories and the team can defend the boundary

### Struggle: The satirical team writes jokes instead of terminology

- **Signs**: The map is a bit; the status labels are punchlines rather than something a product would ship
- **Intervention**: Look at TeamFlow again — it works because it is *internally consistent and shippable*. Every label is something a real dystopian product would genuinely use, which is what makes it land. A joke label breaks the illusion; a plausible one is the joke.
- **Success indicator**: The map would function as a real configuration file, and is funnier for it

### Struggle: The team splits the backlog by person instead of by story

- **Signs**: "Ana wrote stories 1–5, Marcus wrote 6–10" — and the terminology drifts between them
- **Intervention**: Divide the writing if you like, but the map is the contract and one person has to read the whole backlog against it before submission. Inconsistent vocabulary in a 14-story backlog is what a spring team inherits and quietly works around all semester.
- **Success indicator**: No generic engine terms survive, and the same concept has one name throughout

---

## Looking Ahead

Week 15 brings wireframes, a design consult, and the design brief. Your terminology map is what the design partner reads first — it is the fastest possible description of what your product *is*, and it will be the thing they push back on.

Week 16 is the pitch and the handoff package. By then your team hands off: a formed team with a working agreement, a chosen engine and skin, **this validated backlog**, wireframes, a design brief draft, a design-partner contact, and a risk register.

**This week produces the third.**

---

## Andrew's Note

<!-- INSTRUCTOR SIGN-OFF NEEDED: NEW note, not carried from any source. The retired Week 14
     (Technical Documentation & Handoff) had one, but its subject was documentation handoff, which
     now belongs to Week 16 — migrating it here would attach his voice to a topic he was not
     writing about. Written L0 per ADR-012, no fabricated anecdotes (non-negotiable #5).
     Keep, rewrite, or cut. -->

The terminology exercise looks like the soft part of this week. It isn't.

Every long-running software project I have seen up close had a moment where two people discovered they had been using the same word for different things for months. It is never caught by a code review, because both sides look correct in isolation. It gets caught when something ships and behaves in a way half the team did not expect.

An hour spent arguing about what to call the main noun in your product is an hour you are not spending on that in March.

And when you cannot fill in a cell — do not paper over it. A blank in that table is a real question about your product wearing a small disguise.

— Andrew
