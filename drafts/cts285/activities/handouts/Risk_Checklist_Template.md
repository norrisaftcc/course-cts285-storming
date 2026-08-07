<!--
  NEW — companion handout to Module_06_Risk_Assessment_Workshop.md, 2026-08-07.
  Re-anchors "how to find a risk worth writing down" to the Dataman modernization spine.
  Scoring scales and the four verdicts are quoted, not paraphrased, from the two files this
  workshop is chartered to match:
    - drafts/cts285/assignments/Week_06_Assignment_Sprint_1_Risk_Register.md (Likelihood/Impact
      scales, Risk Score, priority bands)
    - drafts/cts285/assignments/Week_11_Assignment_Risk_Mitigation_QA.md (the four verdicts)
  UNGRADED — this is a workshop reference handout. No row in CTS285_Canonical_Points_Table.md;
  it introduces no rubric and no grade points. Likelihood/Impact/Risk Score are the numeric
  scales on this page, and here they are for practice, not for a score.
  Voice: plain instructional register (L2 body only). No SHODANN dialogue written here —
  see SHODANN-SLOT below for the one place an interjection belongs; a later pass writes it.
  status: draft; not student-facing until it graduates to a course repo.
  Voice pass, 2026-08-07 (second pass, outside the fan-out wave): the SHODANN-SLOT markers
  named above have been filled. The line above is the record of the first pass and is correct
  as written for that pass; this line records the second. Attribution appears once per file,
  on the first interjection, per SHODANN_Character_Bible.md §10.
-->

# Risk Checklist Template — Finding Risks Specific to Your Dataman Build

*Companion handout to the Module 6 Risk Assessment Workshop (Week 6). Keep this next to you whenever you're identifying, scoring, or closing out a Dataman risk — in the workshop, in Week 6's graded register, and in Week 11's close-out.*

---

## The one rule that overrides the others

> **Would I have known this risk before I read the 1977 manual?**
> If yes, it's a stock software risk — flag it, don't build a register entry around it.
> If no, it's a Dataman risk — keep it.

A risk that could describe a scheduling app, a shopping cart, or a game just as easily as your own build is not yet finished. Run this test first, every time.

---

## Prompts to find risks specific to YOUR build

Don't start from a generic checklist. Start from the four things only you have: your own read of the manual, your own schema, your own classification, and your own transcripts.

### From the manual (Technical risks)

- What did the manual describe as a *rule*, and does that rule live in exactly one place in your code, or did you (even accidentally) implement it twice?
- What did the manual leave unsettled — a display format, an edge case, a behavior it names but doesn't fully specify?
- What did the manual describe as *variable* or *approximate* rather than exact? A requirement the source itself calls imprecise cannot be tested against one fixed expected value.
- What hard numeric limit does the manual state (a count, a ceiling, a cap), and does your schema enforce it, or would it only be discovered by hitting it at runtime?

### From your ERD and schema (Technical risks)

- Where did modeling something force you to invent a rule the manual never gave you?
- What's stored as two separate fields that probably should have been one, or one field standing in for two different things?
- What happens in your schema if a value arrives at the edge of a range you assumed was smaller?

### From your backlog classification (Schedule and Scope risks)

- Which of your Must-Haves are you least confident you can finish?
- Was your Week 2 story-point estimate for anything a guess dressed as a number?
- What's sitting just below your MVP line that you keep wanting to build anyway?
- Are any of your "faithful to 1977" decisions ones a modern user would actually find frustrating — and did you decide that trade-off on purpose, or did it just happen?

### From your stakeholder transcripts (Requirements and Scope risks)

- Where do Renee, Ms. Alvarez, and Dale actually disagree — not where they're both a little vague, but where a decision for one of them makes the other one wrong?
- What did a stakeholder ask for that's really a solution, not a need — and what happens to your schedule if you build the solution instead of the need?
- What's still an open question you haven't asked the client (Teacherbot, or the instructor) yet, and what happens if the sprint ends before you ask it?

### From what you can't read at all (Requirements risks)

- Pages 7–18 of the transcript aren't transcribed. What did you build that touches a mode those pages might specify? What did you assume, and is that assumption written down anywhere, or only in your head?

---

## Risk categories (the four Week 6 grades)

| Category | Traces to |
|---|---|
| **Technical** | the device's own behavior — a rule, a limit, an unsettled case |
| **Requirements** | gaps or silences in the source document, or an assumption standing in for one |
| **Schedule** | your own estimates, capacity, and calendar |
| **Scope** | what's tempting to build beyond the MVP line |

A risk that doesn't fit any of these four cleanly might belong to two at once (a scope decision that's also a schedule risk) — write it once and note both, rather than forcing a single label.

---

## Scoring scales (identical to Week 6's graded register)

**Likelihood (1–5):**
- 1 = Very unlikely (5% chance)
- 2 = Unlikely (20% chance)
- 3 = Possible (50% chance)
- 4 = Likely (70% chance)
- 5 = Very likely (90%+ chance)

**Impact (1–5):**
- 1 = Negligible (minor inconvenience)
- 2 = Low (small delay, workaround exists)
- 3 = Moderate (week delay, quality reduced)
- 4 = High (major rework, deadline at risk)
- 5 = Critical (project failure)

**Risk Score = Likelihood × Impact**

**Priority bands:**
- **Critical** (15–25): address immediately
- **High** (10–14): needs a mitigation plan
- **Medium** (5–9): monitor closely
- **Low** (1–4): accept the risk

**If most of your list lands in Critical, you haven't prioritized — you've relabeled.** Force a re-rank: if you could only mitigate three, which three, and why do the rest lose to them?

> Every risk being Critical is arithmetically the same as no risk being Critical, and I would rather you discovered that on this handout than in Week 11. Force the re-rank. Three is a small enough number to make you honest.
>
> — SHODANN, your Channel Success Partner

---

## The four verdicts (identical to Week 11's close-out — meet them here first)

Every Critical and High risk eventually gets one of these four. All four are legitimate outcomes.

| Verdict | Means |
|---|---|
| **Resolved** | The mitigation ran and the risk is gone |
| **Mitigated** | Still present, but reduced to something you can live with |
| **Accepted** | Still present at full strength; you decided to carry it, and you say why |
| **Materialised** | It happened. What did it cost, and what did you do? |

**"Materialised" is not a failure grade.** A register that predicted a real problem did its job — that's the register working. The only outcome worth avoiding is a risk that happened and was never written down at all.

---

## Quick self-check before you call a risk identified

Ask these three, in order, and stop at the first "no":

1. **Would I have known this before I read the manual, built the schema, or read the transcripts?** If yes, it's not specific enough yet.
2. **Can I name exactly what page, decision, or transcript line this traces to?**
3. **If I scored this risk out loud to a classmate, would the number make sense from the one sentence I gave them — or does the score feel like a guess?**

Three "the risk survives": write it down.
