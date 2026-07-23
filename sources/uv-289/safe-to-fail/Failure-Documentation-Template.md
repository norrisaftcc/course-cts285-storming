<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/safe-to-fail/Failure-Documentation-Template.md
  verdict: KEEP
  target-26FA-slot: CSC-289 P4 (course-wide)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Failure Documentation Template
**CSC-289: Programming Capstone Project**

---

## Purpose

This template provides a structured format for documenting failures, pivots, and unexpected challenges during your capstone project. Professional failure documentation is a core skill assessed in CSC-289.

**Why document failures?**
- Failures documented professionally become evidence of growth (process points)
- Failures hidden or ignored become evidence of poor process (grade penalty)
- Hiring managers ask "Tell me about a time something went wrong" — your documented failures become interview stories
- Future-you (and future maintainers) benefit from knowing what was tried and why it did not work

**When to use this template**:
- A sprint goal was not met
- A story estimate was significantly off
- A technical approach failed and you had to pivot
- A dependency (GRD designer, API, library) did not deliver as expected
- A scope cut was necessary
- An assumption proved wrong

---

## Template

Copy the section below for each failure you document. Store these in your sprint retrospectives or in a dedicated `failures/` directory in your repository.

---

### Failure Report: [Short Descriptive Title]

**Date**: [When the failure was identified]
**Sprint**: [Sprint number]
**Severity**: [Low / Medium / High / Critical]
**Category**: [Estimation Miss / Technical Blocker / Dependency Failure / Scope Cut / Process Breakdown / Communication Gap]

#### What Happened
[2-3 sentences. State the facts objectively. What was expected vs. what actually occurred?]

#### Impact Assessment
- **Schedule impact**: [e.g., "Delayed login feature by 3 days"]
- **Scope impact**: [e.g., "Had to cut social login from MVP"]
- **Quality impact**: [e.g., "Shipped with basic error messages instead of user-friendly ones"]
- **Collaboration impact**: [e.g., "Required renegotiating timeline with GRD designer"]
- **Story points affected**: [e.g., "8 points of planned work could not be completed"]

#### Root Cause
[Why did this happen? Go beyond the surface. Use "5 Whys" if helpful.]
1. **Surface cause**: [What immediately went wrong]
2. **Underlying cause**: [Why the surface cause happened]
3. **Root cause**: [The fundamental issue that, if addressed, prevents recurrence]

#### Response Taken
[What did you actually do when you discovered the failure? Be specific.]
- [Action 1]
- [Action 2]
- [Action 3]

#### Outcome
[What was the result of your response? Was the failure resolved, mitigated, or accepted?]

#### Lessons Learned
[What do you now know that you did not know before? Be specific and actionable.]
1. [Lesson 1]
2. [Lesson 2]

#### Process Change
[What will you do differently going forward to prevent this or catch it earlier?]
- **Immediate change**: [What changes in the next sprint]
- **Long-term change**: [What changes in your overall approach]

---

---

## Filled Example 1: Scope Cut

### Failure Report: Social Login Cut from MVP

**Date**: February 24, 2026
**Sprint**: Sprint 2
**Severity**: Medium
**Category**: Scope Cut

#### What Happened
I planned to implement Google and GitHub OAuth login as part of the authentication epic (estimated at 5 story points). After two days of work, I realized the OAuth flow with Flask required a library (Authlib) I had never used, and the Google OAuth consent screen approval process takes 1-3 business days. I had estimated 5 points based on a tutorial that skipped the consent screen setup.

#### Impact Assessment
- **Schedule impact**: Lost 2 days on a feature that could not be completed this sprint
- **Scope impact**: Cut social login from MVP; users will register with email/password only
- **Quality impact**: None — email/password login works fully; social login was a convenience feature
- **Collaboration impact**: None — this was backend-only work
- **Story points affected**: 5 points planned, 0 completed for this story

#### Root Cause
1. **Surface cause**: Google OAuth consent screen approval takes longer than expected
2. **Underlying cause**: I estimated based on a tutorial that used a pre-approved test account, not a fresh setup
3. **Root cause**: I estimated a story involving an unfamiliar library and external service without doing a spike (research task) first

#### Response Taken
- Moved the social login story to the "Could Have" section of the backlog with a note: "Requires Authlib setup + Google consent screen approval (1-3 days lead time)"
- Created a spike story for Sprint 4: "Research OAuth implementation — 2 points" to timebox the learning
- Redirected remaining sprint capacity to the password reset feature (3 points), which was the next priority story
- Updated standup: "Blocker identified — social login requires external approval process. Pivoting to password reset. Social login moved to backlog."

#### Outcome
Password reset was completed successfully. Sprint velocity was 11/14 planned points (79% accuracy). Social login remains in the backlog as a post-MVP enhancement. The spike story in Sprint 4 would have given me the knowledge to estimate accurately if I choose to bring it back.

#### Lessons Learned
1. Any story involving a new library or external service should start with a timeboxed spike (research task) before estimating the full implementation
2. External approval processes (OAuth consent, API keys, App Store review) have lead times that must be factored into sprint planning — they are not "coding time"

#### Process Change
- **Immediate change**: Added "Does this story involve an unfamiliar library or external service?" to my sprint planning checklist. If yes, create a spike story first.
- **Long-term change**: When estimating stories, I now separate "coding effort" from "external dependency time" and plan for both.

---

## Filled Example 2: Technical Blocker

### Failure Report: Database Migration Corruption During Deployment

**Date**: March 14, 2026
**Sprint**: Sprint 5
**Severity**: High
**Category**: Technical Blocker

#### What Happened
While deploying to Render for the first time, the SQLite-to-PostgreSQL migration failed silently. The application deployed and appeared to work, but all database queries returned empty results. I spent 4 hours debugging before discovering that SQLite date formats are incompatible with PostgreSQL, and my migration script did not handle the conversion. The deployed application was non-functional for the entire sprint review demo.

#### Impact Assessment
- **Schedule impact**: Lost 4 hours debugging + 2 hours fixing = 6 hours (roughly 1.5 days of a 2-week sprint)
- **Scope impact**: Sprint review demo was conducted on localhost instead of the deployed URL
- **Quality impact**: Deployment was not functional; had to present with a caveat
- **Collaboration impact**: None (solo development phase)
- **Story points affected**: "Deploy to production" story (5 points) marked incomplete

#### Root Cause
1. **Surface cause**: SQLite date format strings are not valid PostgreSQL date format strings
2. **Underlying cause**: I never tested the migration script against PostgreSQL before deployment day
3. **Root cause**: I treated deployment as a single "flip the switch" task instead of a multi-step process with testing at each stage. I had no staging environment or deployment dry run.

#### Response Taken
- Immediately documented the error in a GitHub Issue with full error logs and the fix needed
- Wrote a date format conversion function and updated the migration script
- Tested the migration locally using a PostgreSQL Docker container before redeploying
- Redeployed successfully the day after the sprint review
- Conducted the sprint review demo from localhost with a transparent explanation: "Deployment hit a database migration issue I am actively fixing. Demo is running locally. I will share the live URL by tomorrow."

#### Outcome
Deployment was fixed within 24 hours of the sprint review. The experience led to creating a deployment checklist that caught two additional issues (environment variable misconfiguration and static file path differences) before they caused production failures.

#### Lessons Learned
1. Never deploy for the first time on sprint review day — always do a dry run at least 2-3 days before the demo
2. SQLite and PostgreSQL have subtle incompatibilities (dates, booleans, auto-increment) that only surface with real data
3. A deployment is not a single task — it is a sequence: environment setup, migration testing, smoke testing, monitoring

#### Process Change
- **Immediate change**: Created a deployment checklist (pre-deploy, deploy, post-deploy verification) added to my project README
- **Long-term change**: All future sprints with deployment tasks will include a "deployment dry run" story scheduled 3+ days before the sprint review

---

## Filled Example 3: Estimation Miss

### Failure Report: Design Asset Integration Took 3x the Estimate

**Date**: March 5, 2026
**Sprint**: Sprint 4 (Design Integration)
**Severity**: Medium
**Category**: Estimation Miss

#### What Happened
I estimated "Integrate GRD design assets into application" at 5 story points, expecting a straightforward process of dropping SVG files into my templates and updating CSS colors. The actual effort was approximately 13 points. The designer's SVG icons included inline styles that conflicted with my CSS framework, the color palette required adjusting 47 CSS rules across 12 templates, and three icons needed viewBox corrections to render at the correct size.

#### Impact Assessment
- **Schedule impact**: Integration consumed the entire sprint instead of the planned 2 days
- **Scope impact**: Two feature stories (profile editing and notification preferences) were pushed to Sprint 5
- **Quality impact**: Design integration was thorough and high-quality — but at the cost of other planned work
- **Collaboration impact**: Required two additional feedback rounds with the designer (viewBox corrections and inline style removal)
- **Story points affected**: 5 planned, ~13 actual. Only 8 of 18 planned sprint points completed (44% accuracy).

#### Root Cause
1. **Surface cause**: SVG files had inline styles and incorrect viewBox attributes
2. **Underlying cause**: I did not test a sample asset in my codebase during the iteration cycle (Week 7) — I waited until final delivery (Week 8) to attempt integration
3. **Root cause**: I treated "integration" as a single story instead of breaking it into testable pieces (logo integration, icon integration, color palette application, image optimization), and I did not test assets incrementally during the collaboration period

#### Response Taken
- Day 2 standup: "Integration is taking longer than estimated. SVG compatibility issues. Adjusting sprint scope — pushing profile editing and notifications to Sprint 5."
- Created GitHub Issues for each specific integration problem (inline styles, viewBox, CSS color migration)
- Contacted designer on Day 3 with specific SBI feedback on the viewBox issue — designer corrected and re-delivered within 24 hours
- Wrote a CSS migration script to batch-update color values instead of editing 47 rules manually

#### Outcome
All design assets were successfully integrated by sprint end. The application looked significantly more professional. Sprint velocity was 8/18 (44%), but the retrospective clearly documented why and identified the process fix. Sprints 5-8 benefited from the CSS migration script (reusable for future color changes).

#### Lessons Learned
1. "Integration" is never one story — break it into: test sample asset, integrate logo, integrate icons, apply color palette, optimize images. Each is independently estimable and testable.
2. Test one asset from each category (one icon, one image) in your codebase during the iteration cycle (Week 7), not after final delivery. This catches format issues when the designer can still fix them cheaply.
3. When working with external assets, add a 2x buffer to estimates until you have data on the actual integration complexity.

#### Process Change
- **Immediate change**: Future integration work will be broken into individual stories per asset category, each with its own acceptance criteria and estimate
- **Long-term change**: Added "integration test" as a required step during design iteration cycles — test one sample asset in code before accepting the full set. This is now part of my Definition of Done for any story involving external assets.

---

## Tips for Professional Failure Documentation

1. **Be specific**: "It took too long" is not useful. "Estimated 5 points, took 13 because SVG inline styles conflicted with Bootstrap" is useful.

2. **Separate facts from feelings**: Document what happened objectively before analyzing why. Save emotional processing for the retrospective discussion.

3. **Go beyond the surface**: The first "why" is rarely the root cause. "The API broke" is the surface. "I did not monitor the API changelog or build error handling for API failures" is the root cause you can actually fix.

4. **Make process changes concrete**: "I will do better" is not a process change. "I will add a spike story for any task involving an unfamiliar library" is a process change you can verify.

5. **Track whether process changes stick**: In your next retrospective, review prior failure reports. Did you actually implement the process change? Did it help? This is the growth evidence that earns top marks.

---

## Connection to Course Grading

Failure documentation contributes to multiple grading areas:
- **Sprint Retrospectives** (Sprint Management, 20%): Honest discussion of what went wrong
- **Risk and Adaptation** (10%): Evidence of proactive problem-solving and adaptive planning
- **Documentation Quality** (5%): Professional-quality failure reports
- **Process Portfolio** (Module 8): Failure-to-growth narratives are some of the strongest portfolio evidence

See also: [Process-Over-Perfection Manifesto](Process-Over-Perfection-Manifesto.md)

---

**Last Updated**: March 13, 2026
**Author**: Angela Westmoreland (Instructional Designer)
