<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/planning-sheets/Sprint_Retrospective_Template.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wks 6, 8, 10 retros
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Sprint Retrospective Template
## CTS-285: Systems Analysis & Design

---

## Purpose

Reflect on the sprint that just ended, celebrate wins, identify problems, and commit to specific improvements for the next sprint. Retrospectives turn experience into learning.

---

## When to Use

At the end of each sprint (Weeks 6, 10, 14) after sprint review but before next sprint planning. Takes 45-60 minutes for team retrospectives.

---

## Instructions

1. **Review sprint data** - Look at burndown chart, velocity, completed vs planned stories
2. **Be honest** - Retrospectives only work if you're candid about problems
3. **Focus on process, not people** - "Story estimation was off" not "Marcus estimated badly"
4. **Specific examples** - "Standup blockers went unresolved for 2 days" beats "communication was bad"
5. **Action items must be concrete** - "Improve code review" is vague. "Code reviews within 24 hours or escalate to Andrew" is actionable.
6. **Limit action items to 3-5** - You can't fix everything at once
7. **Review previous retro actions** - Did you actually implement last sprint's improvements?

---

## Template

### Sprint Retrospective - Sprint [#]

**Date**: [Date]
**Sprint Duration**: [Start] - [End]
**Team Members Present**:
-
-

---

## Sprint Metrics

- **Planned Velocity**: ___ story points
- **Actual Velocity**: ___ story points
- **Stories Completed**: ___ / ___
- **Stories Carried Over**: ___ (list Story IDs)
- **Blockers Encountered**: ___

---

## What Went Well?

**Things to celebrate and continue doing:**

1.
2.
3.
4.
5.

---

## What Didn't Go Well?

**Problems, frustrations, and roadblocks:**

1.
2.
3.
4.
5.

---

## What Did We Learn?

**Insights and discoveries from this sprint:**

1.
2.
3.

---

## Action Items for Next Sprint

**Specific, measurable improvements we commit to:**

| Action Item | Owner | Success Criteria | Priority |
|-------------|-------|------------------|----------|
| | | | H/M/L |
| | | | H/M/L |
| | | | H/M/L |

---

## Review of Previous Sprint's Action Items

**Did we actually implement last sprint's improvements?**

| Previous Action Item | Status | Notes |
|---------------------|--------|-------|
| | [ ] Done<br>[ ] In Progress<br>[ ] Not Started | |
| | [ ] Done<br>[ ] In Progress<br>[ ] Not Started | |

---

## Process Changes

**Changes to our sprint process for next sprint:**
-
-

---

## Questions for Andrew

**Things we need instructor guidance on:**
-
-

---

## Filled Example

### Sprint Retrospective - Sprint 2

**Date**: March 14, 2026
**Sprint Duration**: March 1 - March 14
**Team Members Present**:
- Sarah Chen (Product Owner)
- Marcus Williams (Developer)
- Aisha Patel (Developer)

---

## Sprint Metrics

- **Planned Velocity**: 12 story points
- **Actual Velocity**: 11 story points
- **Stories Completed**: 2 / 3 (US-005, US-006 done; US-007 90% done but not meeting Definition of Done)
- **Stories Carried Over**: US-007 (email confirmation - SendGrid issues delayed completion)
- **Blockers Encountered**: 2 major (SendGrid API auth, calendar component complexity)

---

## What Went Well?

**Things to celebrate and continue doing:**

1. **Pair programming on the SendGrid blocker** - When Marcus got stuck, Aisha paired with him and we found the environment variable typo in 30 minutes. Solo debugging would've taken half a day.

2. **Early decision to use FullCalendar.js library** - Sarah's decision to use existing calendar library instead of building from scratch saved us 6 hours of work. Good judgment call.

3. **Daily standups were consistent** - All 3 team members posted 10 standups on time. We knew what everyone was working on every day.

4. **Task breakdown was accurate** - Our 1-3 hour task estimates were realistic. We didn't have "3 hour" tasks that took 2 days.

5. **US-005 and US-006 are solid** - Both stories meet acceptance criteria, tests pass, code is clean. The booking flow actually works end-to-end.

---

## What Didn't Go Well?

**Problems, frustrations, and roadblocks:**

1. **SendGrid blocker took 2 days to resolve** - Marcus was stuck for 6 hours before asking for help. We have a "stuck for 2 hours = ask for help" rule that we didn't follow. Cost us a day of progress.

2. **US-007 missed Definition of Done** - Email functionality works but we didn't write tests. We committed to "all acceptance tests pass" as part of Done but skipped it under time pressure. Now US-007 carries to Sprint 3.

3. **Marcus's midterm caused more disruption than planned** - We thought losing March 8 would be fine, but Marcus was distracted March 6-7 too, studying instead of coding. Should've reduced capacity by 30%, not 20%.

4. **Code reviews were slow** - Some code sat waiting for review for 48 hours. This delayed integration and testing. Sarah had a PR up Tuesday that didn't get reviewed until Thursday.

5. **No buffer in sprint plan** - We committed to 12 points with 13-point historical velocity. When SendGrid blocker hit, we had zero buffer to absorb it. Should've committed to 10-11 points max.

---

## What Did We Learn?

**Insights and discoveries from this sprint:**

1. **External API integrations are high-risk** - SendGrid, payment APIs, third-party services can block progress for days. Next sprint, we'll start API integrations on Day 1, not Day 5, so we have time to troubleshoot.

2. **"Almost done" isn't done** - US-007 is 90% complete but doesn't meet Definition of Done (missing tests). We learned that 90% done = 0 points. Either mark it done (meets all criteria) or carry it over. No partial credit.

3. **Exams affect more than just the exam day** - When planning capacity for team member with midterm, budget 3 days (day before for studying, exam day, day after for recovery), not just 1 day.

---

## Action Items for Next Sprint

**Specific, measurable improvements we commit to:**

| Action Item | Owner | Success Criteria | Priority |
|-------------|-------|------------------|----------|
| Enforce "stuck for 2 hours = ask for help" rule | Sarah (PO) | If standup shows same blocker 2 days in row, Sarah proactively reaches out | H |
| Start API integrations on Sprint Day 1 | Marcus | Any story with external API dependency begins Day 1 of sprint, not mid-sprint | H |
| Code review within 24 hours or escalate | All | PRs reviewed within 24 hours, or reviewer escalates to team if they can't make deadline | H |
| Reserve 20% sprint capacity as buffer | Sarah (PO) | Next sprint, if velocity is 13, commit to 10 points max, keep 3 points buffer | M |
| Complete US-007 tests before marking done | Aisha | Write missing tests for US-007 email confirmation in first 2 days of Sprint 3 | H |

---

## Review of Previous Sprint's Action Items

**Did we actually implement last sprint's improvements?**

| Previous Action Item | Status | Notes |
|---------------------|--------|-------|
| Set up GitHub Projects Kanban board | [x] Done | Board is active, we're moving cards daily |
| Define team Definition of Done | [x] Done | Created DoD during Sprint 2 planning (though we didn't follow it perfectly - see US-007) |
| Schedule weekly team check-in beyond standups | [ ] Not Started | Forgot about this. Do we still want it? Standups seem sufficient. **Decision: Drop this action, standups are working.** |

---

## Process Changes

**Changes to our sprint process for next sprint:**

- **Add "risk score" column to sprint planning** - Rate each story as Low/Medium/High risk based on external dependencies, new tech, complexity. High-risk stories start Day 1.
- **Mid-sprint check-in on Day 7** - Halfway through sprint, do 30-minute team sync to assess if we're on track for sprint goal. Chance to course-correct before it's too late.
- **Stricter Definition of Done enforcement** - Sarah (PO) will not mark story Done in GitHub Projects until ALL DoD criteria met, including tests. No exceptions.

---

## Questions for Andrew

**Things we need instructor guidance on:**

- **How do professional teams handle external API blockers?** - Is our "start APIs on Day 1" approach standard, or are there better strategies?
- **How much buffer capacity is realistic?** - We're planning 20% buffer for Sprint 3. Is that conservative enough, or should it be higher for student teams learning new tech?
- **Partial credit for carried-over stories?** - US-007 is 90% done. Do we get partial velocity points, or is it 0 points until fully complete? How do real teams track this?

---

## Why This Matters

Sprint retrospectives are how Agile teams get better over time. Without retrospectives, you repeat the same mistakes every sprint.

In professional software development, retrospectives are sacred. Companies like Spotify, Google, and Amazon mandate retrospectives because they drive continuous improvement. Teams that skip retros stagnate. Teams that take retros seriously improve sprint-over-sprint.

Why retrospectives work:

1. **Learning from failure** - Every sprint has problems. Retros turn problems into lessons.
2. **Process improvement** - "Code reviews took 3 days" identifies process bottleneck → fix it
3. **Team health** - Safe space to voice frustrations before they become resentments
4. **Continuous adaptation** - Software development is messy. What worked Sprint 1 might not work Sprint 3. Adapt.
5. **Institutional memory** - Written retros document what you learned. You'll reference Sprint 2 retro in Sprint 5.

Common retro formats in industry:
- **Start/Stop/Continue** - What should we start doing? Stop doing? Continue doing?
- **Glad/Sad/Mad** - What made you glad? Sad? Mad?
- **4Ls** - Liked, Learned, Lacked, Longed For
- **Sailboat** - What's the wind in our sails? What's the anchor holding us back?

Your CTS-285 retros use "What went well / What didn't go well / Action items" format, which is the most common in industry.

**Critical rule**: Action items must be specific and measurable. "Improve communication" is not actionable. "Code reviews within 24 hours or escalate to team" is actionable.

In CSC-289 (capstone), retrospectives will save your project. Students who retro after each sprint identify problems early (Week 4) and fix them. Students who skip retros discover systemic problems in Week 14 when it's too late.

Professional developers measure themselves by sprint-over-sprint improvement, not perfection. Sprint 1 is messy. Sprint 5 is smooth. Retrospectives are how you get from messy to smooth.

---

## Common Mistakes to Avoid

- **Mistake**: Blaming individuals - "Marcus was slow on API integration"
  **Better approach**: Focus on process - "API integrations started mid-sprint instead of Day 1, causing blocker." Blameless retrospectives enable honesty.

- **Mistake**: Vague action items - "Communicate better next sprint"
  **Better approach**: Specific actions - "Post standup blockers by 10am, team responds by 2pm, or escalate to Andrew." Measurable success criteria.

- **Mistake**: 15 action items for next sprint
  **Better approach**: 3-5 max, prioritized as H/M/L. You can't fix everything at once. Pick the highest-impact improvements.

- **Mistake**: Not reviewing previous sprint's action items
  **Better approach**: Start every retro by checking: Did we actually do what we said we'd do last sprint? If not, why? Accountability loop.

- **Mistake**: Only listing negatives, ignoring what went well
  **Better approach**: Celebrate wins. "What went well" section is not optional. Teams need positive reinforcement, not just criticism.

- **Mistake**: Retro becomes hour-long debate about technical decisions
  **Better approach**: Time-box retro to 45-60 minutes. If technical decision needs deep discussion, schedule separate meeting. Retro is about process, not architecture.

- **Mistake**: Writing retro and never looking at it again
  **Better approach**: Reference previous retros during sprint planning. "We said we'd do X in Sprint 2 retro - did we?" Living document, not paperwork.

---

## Integration with Course Project

In CTS-285, retrospectives are required after each sprint:

**Requirements**:
- One retro per sprint (Weeks 6, 10, 14)
- Submit to Andrew within 2 days of sprint end
- Must include all sections (metrics, what went well, what didn't, action items)
- Must review previous sprint's action items

**Grading criteria** (per retro):
- **Honesty** (40%): Are you candid about problems, or sugar-coating?
- **Specificity** (30%): Specific examples with story IDs and dates, not vague generalities
- **Actionable improvements** (30%): Action items are concrete, measurable, and have owners

**What good retros demonstrate**:
- You're learning from experience
- You're improving process sprint-over-sprint
- You're honest about challenges
- You're taking ownership of improvements

**Red flags in retros**:
- "Everything was perfect" (no sprint is perfect)
- Zero action items (you're not learning)
- Action items with no owners (who's accountable?)
- Same problems every sprint (you're not implementing action items)

**How to conduct team retros**:
1. **Book 60-minute meeting** at end of sprint
2. **Review sprint data first** - Look at GitHub Projects board, velocity chart, completed stories
3. **Everyone contributes** - Round-robin, each person shares 2-3 items per section
4. **Dot voting on action items** - If you have 15 potential improvements, vote on top 5
5. **Assign owners immediately** - Every action item gets a name attached
6. **Post retro to shared location** - GitHub wiki, Google Doc, or submit to Andrew

**Professional retrospective best practices**:
- **Prime Directive**: "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand." (Norm Kerth)
- **Psychological safety** - If retro isn't safe to be honest, it's useless. Blame the process, not people.
- **Rotate facilitator** - Different team member facilitates each retro
- **Time-box sections** - 10 min review metrics, 15 min what went well, 15 min what didn't, 15 min action items, 5 min wrap

**This practice is career-critical. Companies that do retros well (Spotify, Google, Etsy) have high-performing teams. Companies that skip retros have dysfunctional teams. Learn this now.**
