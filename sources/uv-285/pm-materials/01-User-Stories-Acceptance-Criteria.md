<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/pm-materials/01-User-Stories-Acceptance-Criteria.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk3–4 (10-min mini-lesson)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# PM Mini-Lesson: User Stories & Acceptance Criteria
## 10-Minute Embeddable Lesson

**When to use**: Week 2-4 (Module 2 - Requirements Gathering)
**Duration**: 10 minutes
**Format**: Can be taught in class or assigned as pre-work

---

## What Are User Stories?

**User stories** are requirements written from the user's perspective.

**Format**:
```
As a [role], I want [feature], so that [benefit].
```

**Why this format?**
- **Role**: Who needs this? (not "user" - be specific!)
- **Feature**: What do they want to do?
- **Benefit**: Why does it matter? (the value)

---

## Examples

**Bad user story** (feature-focused):
> Add a search bar

**Good user story** (user-focused):
> As a student, I want to search events by keyword, so that I can find specific events without scrolling through 100 listings.

**Bad user story** (technical):
> Implement JWT authentication

**Good user story** (value-focused):
> As a user, I want to stay logged in for 7 days, so that I don't have to re-enter my password every time I visit the site.

---

## Acceptance Criteria

**Acceptance criteria** define when a user story is "done."

**Format** (Given-When-Then):
```
Given [initial state]
When [action taken]
Then [expected result]
```

**Example**:
```
User Story: As a student, I want to filter events by date, so that I can plan my week.

Acceptance Criteria:

Given I'm on the events page with 50 events
When I select "This Week" from the date filter
Then only events in the next 7 days are shown
And events are sorted by date (earliest first)
And the page displays "Showing X events this week"

Given no events exist for the selected date range
When I apply a date filter
Then the page displays "No events found for this date range"
And suggests browsing all events
```

---

## Why Acceptance Criteria Matter

**Without acceptance criteria**:
- Developer guesses what you meant
- You argue about whether it's "done"
- Rework happens late in project

**With acceptance criteria**:
- Everyone knows what "done" means
- Testing is straightforward (does it do what criteria say?)
- Reduces misunderstandings

---

## Practice Exercise (5 min)

**Turn this feature into a user story with acceptance criteria**:

Feature: "Add notifications"

**Your turn**:
1. Who needs notifications? (role)
2. What kind of notifications? (feature)
3. Why? (benefit)
4. How do you know it works? (acceptance criteria - 2-3 scenarios)

---

## Common Mistakes

❌ **Story is too technical**: "Implement OAuth2 login"
✅ **Better**: "As a user, I want to log in with my Google account, so that I don't have to remember another password"

❌ **Benefit is missing**: "As a user, I want a search bar"
✅ **Better**: "As a user, I want to search events by keyword, so that I can quickly find specific topics I'm interested in"

❌ **Acceptance criteria is vague**: "Search works well"
✅ **Better**: "Given 100 events, When I search 'Python', Then events with 'Python' in title or description appear in under 2 seconds"

---

## Key Takeaways

1. User stories are requirements in user language (not tech jargon)
2. Format: As a [role], I want [feature], so that [benefit]
3. Acceptance criteria use Given-When-Then format
4. Criteria should be testable (you can verify if they're met)
5. Good stories + criteria reduce rework and misunderstandings

**You'll use this format for ALL your project requirements this semester!**
