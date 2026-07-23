<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/Daily_Standup_Template.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wks 5–12 (standup deliverable)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Daily Standup Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Quick daily sync to share progress, plan today's work, and identify blockers. In this course, you'll post async standups to the discussion board since we don't meet daily.

---

## When to Use

Every class day during sprints (minimum 10 entries per sprint). Post by 10am on class days. In real teams, standups happen daily at the same time (often 9am or 10am).

---

## Instructions

1. **Keep it short** - 2-3 minutes to write, 1 minute to read
2. **Be specific** - "Fixed login bug" beats "worked on code"
3. **Focus on work, not activities** - "Completed US-007" beats "Had 2 meetings"
4. **Blockers are critical** - If you're stuck, say so immediately
5. **Post consistently** - Missing standups means the team can't help you
6. **Read others' standups** - Team accountability matters

---

## Template

### Daily Standup - [Date]

**Team Member**: [Your name]
**Sprint**: Sprint [#]

---

#### What did I do yesterday?
-
-
-

#### What will I do today?
-
-
-

#### Blockers or concerns?
-
-

#### Help needed?
-

---

## Filled Example 1: On Track

### Daily Standup - March 5, 2026

**Team Member**: Sarah Chen
**Sprint**: Sprint 2

---

#### What did I do yesterday?
- Completed Flask route `/api/appointments/available` with database query
- Wrote unit tests for availability logic (all passing)
- Started frontend calendar component (40% done)

#### What will I do today?
- Finish frontend calendar component
- Test edge cases for appointment availability (timezone handling, slots crossing midnight)
- Start code review for Marcus's booking validation work

#### Blockers or concerns?
- Calendar component more complex than expected - may need to use FullCalendar.js library instead of building from scratch
- This adds a dependency but saves 4-5 hours of work

#### Help needed?
- Would like Andrew's opinion on using external calendar library vs building our own (will ask in office hours today)

---

## Filled Example 2: Blocked

### Daily Standup - March 7, 2026

**Team Member**: Marcus Williams
**Sprint**: Sprint 2

---

#### What did I do yesterday?
- Implemented booking validation logic for double-booking prevention
- Attempted to integrate SendGrid API for email confirmations
- Got stuck on SendGrid authentication - API keys not working

#### What will I do today?
- **BLOCKED** - Cannot proceed with US-007 (email confirmation) until SendGrid issue resolved
- Will work on integration tests for US-006 (booking flow) instead
- Research alternative email services (Mailgun, AWS SES) as backup plan

#### Blockers or concerns?
- **BLOCKER**: SendGrid API keys returning 401 unauthorized error - verified API key is correct but still failing
- This blocks US-007 completely (email confirmation story)
- May need to switch email providers

#### Help needed?
- Need help debugging SendGrid API issue - tried for 3 hours yesterday
- Aisha, can you pair with me this afternoon to troubleshoot?
- Andrew, have you seen this SendGrid error before? Will bring laptop to class.

---

## Filled Example 3: Needs Help

### Daily Standup - March 10, 2026

**Team Member**: Aisha Patel
**Sprint**: Sprint 2

---

#### What did I do yesterday?
- Helped Marcus debug SendGrid issue (resolved - was environment variable typo)
- Completed frontend booking form UI
- Started integration tests for booking flow

#### What will I do today?
- Finish integration tests for US-006
- Begin manual QA testing of full booking flow (US-005 + US-006)
- Update README documentation with new API endpoints

#### Blockers or concerns?
- Integration tests are taking longer than expected to write - learning curve with Flask testing framework
- May not finish all tests today as planned

#### Help needed?
- Looking for Flask testing tutorial or examples - Andrew, any resources you recommend?
- Sarah, can you review my test structure when you have 30 minutes?

---

## Why This Matters

Daily standups are a cornerstone of Agile software development. Every company using Scrum (Google, Amazon, Microsoft, Spotify, Netflix, etc.) does daily standups.

Why they matter:

1. **Early problem detection** - Blockers identified today can be resolved today, not next week
2. **Team coordination** - "I'm working on X" + "I'm working on Y" reveals dependencies
3. **Accountability** - Public commitment to today's work creates positive pressure
4. **Rapid adaptation** - Plans change daily based on what you learn
5. **Communication replacement** - One 15-minute standup beats 5 hours of status meetings

In professional development:
- **Co-located teams**: Stand in a circle, 15 minutes max, no sitting
- **Remote teams**: Video call or async (like your discussion board posts)
- **Same time daily**: Consistency builds habit (often 9am or 10am)

Common standup antipatterns in companies:
- Turning into hour-long problem-solving sessions (solve problems AFTER standup)
- Status reports to manager instead of team sync (not a performance review)
- People not listening because they're preparing their update (defeats the purpose)
- Discussing yesterday's work for 10 minutes (keep it brief)

Your async standups in CTS-285 prepare you for real standups in internships and jobs. The format is identical, just different medium (text vs verbal).

In CSC-289 (capstone), if you're doing team projects, you'll run synchronous standups. Students who maintain standup discipline ship working software. Students who skip standups discover integration problems in Week 15.

---

## Common Mistakes to Avoid

- **Mistake**: Writing "Worked on project" with no details
  **Better approach**: Be specific: "Completed US-007 email confirmation with SendGrid integration and tests." Specificity enables team coordination.

- **Mistake**: Not mentioning blockers until you're 2 days behind
  **Better approach**: Surface blockers IMMEDIATELY. "Stuck on X for 3 hours" in today's standup means team can help today, not Thursday.

- **Mistake**: Writing a novel (10+ bullet points, 500 words)
  **Better approach**: 3 bullet points yesterday, 3 bullet points today, 1-2 blockers. If you need more explanation, that's a separate conversation after standup.

- **Mistake**: Only reading your own standups, ignoring teammates
  **Better approach**: Read ALL standups daily. "Marcus is blocked on email API" means you might be able to help. Team accountability.

- **Mistake**: Committing to 8 tasks today when you historically complete 2-3
  **Better approach**: Be realistic about today's work. Over-promising and under-delivering erodes team trust.

- **Mistake**: Writing standup at 11pm for a 10am deadline
  **Better approach**: Post standups at consistent time (9am or 10am). Late standups mean teammates can't coordinate with you during the day.

- **Mistake**: Not asking for help when you need it
  **Better approach**: "Help needed" section is not weakness - it's how teams accelerate. Stuck for 2 hours? Ask. Don't suffer alone for 2 days.

---

## Integration with Course Project

In CTS-285, standups are part of your sprint participation grade:

**Requirements**:
- Minimum 10 standups per 2-week sprint (one per class day)
- Posted by 10am on class days
- Must include all sections (yesterday, today, blockers, help)
- Must be specific (not vague "worked on project")

**Grading criteria** (per sprint):
- **Completion** (40%): Did you post 10+ standups?
- **Specificity** (30%): Are updates detailed and actionable?
- **Timeliness** (20%): Posted by 10am?
- **Team engagement** (10%): Do you respond to others' blockers?

**What good standups demonstrate**:
- You're making consistent progress
- You surface problems early
- You help teammates when they're stuck
- You're accountable to commitments

**Red flags in standups**:
- "Still working on same task" for 5 days straight (story too big or you're stuck)
- Zero blockers for entire sprint (you're either superhuman or not being honest)
- Never asking for help (everyone gets stuck - ask!)
- Posting standups 3 days late (defeats the purpose)

**Pro tips**:
- **Write standups at end of day** for next morning - faster to post at 9am
- **Reference story IDs** (US-007, US-008) so team can track which stories are progressing
- **Update task board** (GitHub Projects) at same time as standup - keep them in sync
- **Read all standups before class** - you might need to help someone who's blocked

**In professional teams**:
- Standups happen whether you "feel like it" or not - daily discipline
- Missing standups without notice = performance issue
- Blockers escalate fast - manager joins standup if critical blocker
- Some teams post standups in Slack, some use Zoom, format varies but cadence doesn't

**This habit is career-critical. Build it now in CTS-285, use it forever in software development.**
