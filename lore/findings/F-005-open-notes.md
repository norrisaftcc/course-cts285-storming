# F-005 — Open notes

**Recorded:** 2026-08-07 · **Kind:** register of open questions, not a plan
**Rules:** dated record (non-negotiable #8). **A finding never rules** (`lore/README.md` rule 4) —
everything below is recorded as an open question with its discussion, and none of it is decided here.

## 0. Why file these

Twelve days to Aug 18, a finished spine, and a set of questions that have been answered informally in
conversation, raised and deferred, or discovered mid-task and never written down. A question that
lives only in a session's memory is a question that gets rediscovered from scratch — which is the
same failure `F-002` tracks, one layer up. This is where they sit until they are ruled.

---

## 1. Students speaking in character

**New as of 2026-08-07: the plan is for students to speak in character, not only the instructor.**
This is the largest open item in the register and the one with the most collisions, so it gets the
full discussion the rest do not.

### What it unlocks

**The Zone A / Zone B split stops being hypothetical.** The role cards authored 2026-08-07 were built
with a peer-safe zone and an instructor-only zone, and the commit message said the split "buys
nothing today" because staging had just been ruled low-stakes instructor. Under student play it is
immediately load-bearing: Zone A carries the stimulus every interviewer is meant to encounter and
names no hazard, no conflict, no MoSCoW value, and no entity. A student holding Zone A can play
Renee faithfully and still not hold the answer key.

**It scales the reps.** Twenty-four students cannot each interview one instructor. Peer-pair is
listed in `ADR-003:23` as an available staging for exactly this reason, and it is the only staging
that gives every student more than one turn.

**It fits the frame rather than straining it.** Students are already Creators performing inside the
AlgoCratic frame; the instructor already plays stakeholders jeepform-style. Extending performance to
students is continuous with what the course does, not a new mechanic bolted on.

### What it collides with — seven items, none resolved here

1. **It sits alongside a ruling made the same day.** Rehearsal staging was ruled **low-stakes
   instructor** for 26FA. Student play may be a *different beat* (the Week 2 simulation, the grouped
   presentations, a second rehearsal round), or it may supersede that ruling. **Which is unstated.**
   The two are compatible if they occupy different rounds and incompatible if they occupy the same
   one, and nothing on the record says which.

2. **Persona is opt-in canon, and this needs to respect it.** `SHODANN_Character_Bible.md` §11:
   *"persona policy is lightweight: week 1 requires a channel name only; a named developer-character
   is opt-in; never graded for depth. The persona is armor, not an exit."* Playing a stakeholder is a
   different object than a developer-character, but the principle carries — **a student who does not
   want to perform needs a path that is not a penalty.** Reading Zone A aloud as a scripted role, or
   taking the interviewer seat both rounds, are both candidates. This is a real accessibility
   question, not a formality: performance anxiety is not evenly distributed, and the course already
   makes a point of the teacher character refusing to rank struggling kids publicly.

3. **What is the player assessed on?** If nothing, it is still class time and should be defensible as
   such. If something, on what — and against which row of the canonical points table? **Non-negotiable
   #1 is absolute: no assessment exists that is not a row in `CTS285_Canonical_Points_Table.md`.**
   The cheapest resolution is that playing is **formative and ungraded**, which keeps the 750 closed
   and needs no table change. Anything else reopens the points arithmetic.

4. **Rotation, or the analysis leaks into itself.** A student who plays Renee has internalized her
   wants, her hard nos, and her blind spots. In Week 4 they write a graded analysis of those same
   three stakeholders. That is not cheating and it is arguably good learning — but it is an
   **uneven starting position**, and it should be a designed one rather than an accident of who
   volunteered. Rotating so nobody analyses the character they played is one answer; deciding it does
   not matter is another; discovering it in October is the outcome to avoid.

5. **The client is not available to students.** `ADR-003:35` makes the instructor-as-client the live
   RSI anchor and says it is **never** written as a canned transcript. A student playing the client
   would collapse the one round whose value is that a real human with authority is in the seat.
   **Recommended constraint: students may play the three stakeholders; the client stays the
   instructor's.** Not ruled here.

6. **Invention now cuts both ways.** Every role card carries *an invention does not become a
   requirement unless the student writes it down*. That rule protects the **interviewer** — it stops
   improvised colour from silently becoming spec. It does **not** protect against a player who
   invents a *hard no* that contradicts the manual or the seeded backlog, and a peer's graded artifact
   is downstream of that. With the instructor playing, canon knowledge is the guard. With students
   playing, the guard is gone. A one-line addition to Zone A — *you may invent freely, but you may
   not invent a refusal* — would close it, and is not written yet.

7. **Recording.** If sessions are captured and students are performing, the recordings contain
   student voices in performance. `CLAUDE_SUPPLEMENTARY.md` Rule 8 keeps anything touching real
   students, grades, or privacy with a human. See §3 below — this compounds an already-open item.

### What is not in doubt

Zone B never travels to a student, under any staging. That is the one thing the split exists to
guarantee, and it holds regardless of how the questions above are answered.

---

## 2. Held, awaiting confirmation — the retired-outline re-point

The instructor ruled that the three dangling `CTS285_COURSE_OUTLINE.md` citations re-point at
`drafts/spikes/datamon-virtual-pet-reskin.md` and ADR-004. **The ruling was issued on a description
of the spike supplied by a session, and the description was wrong.**

Measured: in the spike, `save/load` **0**, `battle` **0**, `encounter` **0**, `collection` **0**. It
carries the reskin's direction, not the four legacy features the citations attest to.
`phase0/NAMING_CANON.md:26` carries all four.

Recorded in full at `F-004` §5, unexecuted. Recommendation for confirmation: cite **ADR-004 +
NAMING_CANON's legacy-game row**, keep the existing spike citation where it correctly stands, and
**drop the line-number anchors** at `Dataman_Seeded_Backlog.md:415-418` rather than re-anchoring —
line numbers into a live canon file rebuild the fragility that produced the defect.

---

## 3. Recording and privacy

Class sessions are captured mechanically, which is what put classroom runs into the drift corpus
(`lore/runs/README.md`). Two constraints ride along, **neither ruled**:

- **Student voices.** Rule 8 keeps real students, grades, and privacy with a human. Nothing about the
  drift-corpus convention authorizes storing, quoting, or promoting a recording.
- **A transcript is not automatically course material.** The three stakeholder personas are labeled
  fictional precisely so nothing is mistaken for a record of a real person. Non-negotiable #5 forbids
  fabricated testimonials and anecdotes; a *real* transcript is the inverse problem — it is genuine,
  and that is exactly why promoting it needs a human decision rather than a convention.

§1 item 7 compounds both: students performing on record is a different privacy object than an
instructor performing on record.

---

## 4. The Aug-18 band

- **The Week 3 promise.** `Week_03:103` tells students in printed text that they will conduct mock
  interviews in Week 4 with the instructor playing the stakeholder. `Week_04:32,:36` delivers a
  transcript re-read while objective 1 (`:24`) still says "**Conduct** structured stakeholder
  interviews." The role cards make the promise *keepable*; they do not make it *kept* — Week 4's text
  is unchanged. **This is the only item in the survey that the live-improvisation fallback does not
  cover**, because the fallback covers material that is missing, not material promised and
  contradicted.
- **Canvas delivery for Module 1.** Delivery is airgapped — HTML is pasted into Canvas by hand — and
  the only M1 Canvas page that exists is the frozen UV original, pre-Dataman and declaring "50 points
  total" plus a "6 points bonus" against a canonical M1 of 25 + 15. Nothing is built in `drafts/`.
  The Canvas build (task 3.4 / B-016) sits behind B-015 behind B-014, a chain that cannot complete
  before Aug 18. **Decoupling one page from that chain is the open question**, not building the suite.

---

## 5. Smaller, and still open

- **The ADR-lite Sprint 1 rung.** 2 sites (`Week_05:291`, `assessment-rubrics.md:102`) against 2
  promises (`PRISM_Course_Mapping.md:23`, `ASSESSMENT_NOTES.md:15`). Zero point cost (ADR-002). The
  rail is built at Sprint 3 and consumed by Weeks 11–12, so the ramp is missing only its first step.
- **The standup 3-vs-4 reconciliation.** Still orphaned in backlog §7.5, still assigned to nobody.
- **The WRITE TOKEN.** The holder line names a session that has ended; by its own terms the token is
  the instructor's. Raised at `F-001` §4 decision 7 and unanswered across four sessions, all of which
  wrote on the reviewable-branch precedent.
- **Design-partner scope and rights.** Two items unruled at `F-001` §7a: whether source of truth stays
  text (with the designed card rendering it), and whether redistribution rights are settled **before**
  commissioning rather than after.
- **ADR-012 is reserved** for the floor-test lexicon question (`F-001` WP-2) and unwritten.
- **The run-record five-minute budget.** The first record blew it, and said so. Whether the cap or the
  schema gives is a question for the second or third record.
- **PATHFORM counts keep moving** — 3, then 39/6, now 50 lines across 14 files by a different measure.
  Nothing should read this count; no gate should hardcode it.

---

## 6. What this finding does not do

It rules on nothing, proposes no ADR, and assigns no owner. Several items above have obvious
recommendations and those are marked as recommendations. The one item that is *not* a question for a
human — the Zone A/B guarantee in §1 — is stated as settled because the artifacts already implement
it, not because this finding decided it.
