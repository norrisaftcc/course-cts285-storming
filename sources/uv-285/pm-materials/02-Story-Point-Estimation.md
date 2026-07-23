<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/pm-materials/02-Story-Point-Estimation.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk5 (10-min mini-lesson)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# PM Mini-Lesson: Story Point Estimation
## 10-Minute Embeddable Lesson

**When to use**: Week 5 (Module 3 - Sprint Planning)
**Duration**: 10 minutes

---

## What Are Story Points?

**Story points** measure the effort required to complete a user story.

**Not measured in**:
- ❌ Hours (too precise, we're bad at hour estimates)
- ❌ Days (same problem)

**Measured in**:
- ✅ Relative complexity using Fibonacci scale: 1, 2, 3, 5, 8, 13

---

## The Fibonacci Scale

**1 point** = Very simple (1-2 hours)
- Example: "Add footer with contact email"

**2 points** = Simple (2-4 hours)
- Example: "Student can view event details page"

**3 points** = Moderate (4-8 hours)
- Example: "Student can RSVP for event (involves database, authentication)"

**5 points** = Complex (8-16 hours)
- Example: "Event organizer dashboard with analytics"

**8 points** = Very complex (16+ hours)
- Example: "Complete user authentication system with email verification"
- **Recommendation**: If story is 8+, consider splitting it into smaller stories

---

## Why Story Points, Not Hours?

**Hours lie**:
- "This will take 2 hours" → actually takes 6 hours
- Different developers work at different speeds
- Interruptions, meetings, debugging time is unpredictable

**Story points are relative**:
- "This is twice as complex as that 2-point story, so it's 3 or 5 points"
- Focus on complexity, not time
- More accurate over multiple sprints

---

## Planning Poker (Team Estimation)

**How it works** (if you have a team):
1. Read user story aloud
2. Everyone privately estimates (1, 2, 3, 5, 8)
3. Reveal estimates simultaneously
4. If estimates differ significantly, discuss why
5. Re-estimate until consensus

**Solo project** (your situation):
- Estimate each story
- Compare to previous stories ("This is similar to Story X which was 3 points")
- It's okay to guess - you'll get better at estimating over time

---

## Estimating Factors

**What makes a story bigger?**
- Touches database (usually +2 points minimum)
- Requires authentication (+2 points)
- Involves external API (+3 points)
- UI is complex (+1-2 points)
- You've never done this before (+2 points)

---

## Velocity

**Velocity** = story points completed per sprint

**Example**:
- Sprint 1: Planned 15 points, completed 12 → Velocity = 12
- Sprint 2: Use velocity 12 to plan next sprint
- Sprint 2: Planned 12 points, completed 14 → Velocity improving!

**Your velocity will stabilize by Sprint 3.** Use it to predict future sprints.

---

## Common Mistakes

❌ **Everything is 1 point** (you're underestimating)
✅ **Better**: Use full scale. Some stories ARE complex.

❌ **Everything is 8 points** (you're overwhelmed, break stories down)
✅ **Better**: If story feels huge, split it into smaller stories

❌ **Trying to be exact** ("This is 4.5 points")
✅ **Better**: Round to nearest Fibonacci number. It's approximate.

---

## Practice Exercise

**Estimate these user stories for a campus event system:**

1. "As a student, I want to see a list of all events, so I can browse what's happening"
2. "As a student, I want to filter events by category, so I can find events I care about"
3. "As an organizer, I want to create a new event with title, date, location, description, and category, so students can discover it"
4. "As an admin, I want to approve events before they go live, so inappropriate content doesn't appear"

**Your estimates**: [Think about database complexity, authentication needs, UI complexity]

**Suggested**:
1. = 2 points (simple read from database, display in list)
2. = 3 points (filtering logic, UI dropdown, database query with WHERE clause)
3. = 5 points (form with validation, database insert, requires authentication, multiple fields)
4. = 5 points (admin authentication, approval workflow, notification to organizer, state management)

---

## Key Takeaways

1. Story points measure complexity, not time
2. Use Fibonacci scale (1, 2, 3, 5, 8, 13)
3. Estimate relative to other stories
4. Your velocity (points completed per sprint) helps plan future sprints
5. It's okay to be wrong - estimates improve with experience

**You'll estimate every user story in your backlog this week!**
