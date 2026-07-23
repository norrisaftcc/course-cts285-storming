<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_02_User_Story_Workshop.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk3–4 (M2)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 2 Activity: User Story Workshop - From Stakeholder Needs to Actionable Stories

**Duration**: 90 minutes
**Format**: Individual with peer review
**Materials Needed**:
- User Story Template (provided)
- 3 stakeholder interview transcripts
- Acceptance Criteria Checklist
- Peer Review Rubric
- Index cards or digital tool (Trello/Jira/GitHub Issues)

**Learning Objectives**:
- Transform raw stakeholder needs into well-formed user stories
- Write user stories that follow the "As a [role], I want [feature], so that [benefit]" format
- Decompose large features into small, testable user stories
- Write acceptance criteria using Given-When-Then format
- Evaluate and improve user stories through peer review
- Recognize common user story antipatterns

---

## Overview

**You've gathered requirements. Now what?** Requirements documents are great for contracts, but terrible for development. They're long, formal, and hard to prioritize. Developers want actionable, bite-sized work.

Enter user stories.

User stories are the currency of modern software development. They're how Scrum teams plan sprints. They're what goes on Kanban boards. They're how product owners communicate with developers.

Good user stories are:
- **Short**: 1-2 sentences, not paragraphs
- **User-focused**: Written from user perspective, not system perspective
- **Valuable**: Explain why the user wants this
- **Testable**: Include acceptance criteria you can verify
- **Independent**: Can be built without depending on 5 other stories

Today, you're going to practice writing user stories the way professional teams do. You'll work with real stakeholder interviews, decompose features, write acceptance criteria, and peer-review each other's work.

By the end, you'll have:
- 10 well-formed user stories with acceptance criteria
- Experience decomposing large features
- Peer feedback on your writing
- A template you can use for your capstone project

This skill is essential. In CSC-289, your entire project plan will be user stories. Get good at this now.

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Gather materials**:
   - [ ] 3 stakeholder interview transcripts (instructor provides)
   - [ ] User Story Template
   - [ ] Acceptance Criteria Checklist
   - [ ] Index cards (or access to Trello/Jira/GitHub)

2. **Read the scenario**:
   - You're a systems analyst for a software consultancy
   - Client: Small business owner who needs an appointment scheduling system
   - Your job: Turn their messy requests into clear user stories

3. **Choose your tool**:
   - **Physical**: Index cards (one story per card)
   - **Digital**: Trello board, GitHub Issues, or provided template

4. **Review user story format**:
   ```
   As a [type of user],
   I want [some goal],
   So that [some reason/value].

   Acceptance Criteria:
   - Given [context], When [action], Then [outcome]
   - Given [context], When [action], Then [outcome]
   ```

**Instructor Check**: Make sure everyone has interview transcripts and understands the format.

---

## Part 1: Mining User Stories from Interviews (25 minutes)

### Instructions

**Step 1: Read Interview #1 - Business Owner (5 minutes)**

Transcript excerpt:

> **Interviewer**: Tell me about your current appointment process.
>
> **Owner**: It's a mess. Customers call, and I write appointments in a paper planner. Sometimes I'm with a client and miss calls. Sometimes I double-book by accident. I've lost customers because of this.
>
> **Interviewer**: What would an ideal system do?
>
> **Owner**: I need customers to book appointments online when I'm not available. I need to see my schedule at a glance. I need automatic reminders so customers don't no-show. And I need to know when someone cancels so I can fill that slot.

**Step 2: Identify needs and benefits (5 minutes)**

Highlight or underline:
- **Pain points** (current problems): "miss calls", "double-book", "lost customers", "no-shows"
- **Desired capabilities**: "book online", "see schedule", "automatic reminders", "know about cancels"
- **User roles**: Business owner, customers

Make a quick list:
```
Pain Points:
- Missed calls when busy with clients
- Double-bookings
- Customer no-shows
- Manual tracking

Desired Capabilities:
- Online booking
- Schedule visibility
- Automatic reminders
- Cancellation notifications

Roles:
- Business owner (service provider)
- Customer (books appointments)
```

**Step 3: Write user stories (15 minutes)**

Transform each capability into a user story.

**Example 1 - Online Booking**:
```
As a customer,
I want to book an appointment online,
So that I can schedule service even when the business is closed.

Acceptance Criteria:
- Given I am on the booking page, When I select a service, date, and time, Then the system confirms my appointment
- Given I select a time slot, When that slot is already booked, Then the system shows an error and suggests alternative times
- Given I book an appointment, When the booking is confirmed, Then I receive a confirmation email with appointment details
```

**Example 2 - Viewing Schedule**:
```
As a business owner,
I want to view all appointments in a calendar format,
So that I can see my schedule at a glance and plan my day.

Acceptance Criteria:
- Given I am logged in, When I navigate to the schedule page, Then I see a weekly calendar with all appointments
- Given I click on an appointment, When the appointment details load, Then I see customer name, service, time, and contact info
- Given I have no appointments on a day, When I view that day, Then the calendar shows available time slots
```

**Your turn**: Write **4 user stories** from Interview #1. Focus on:
- Clear role (customer or business owner)
- Specific goal (not vague)
- Clear value (why they want it)
- 2-4 acceptance criteria each

### Expected Output

- 4 user stories following the "As a..., I want..., So that..." format
- Each story has 2-4 acceptance criteria in Given-When-Then format
- Stories address specific pain points from the interview
- Stories are written from user perspective (not "system should...")

### Common Issues & Fixes

**Issue**: Writing system requirements, not user stories
- **Bad**: "System should have a database to store appointments"
- **Good**: "As a business owner, I want my appointments saved, so that I don't lose them if my computer crashes"
- **Fix**: Start with "As a [user]..." Every time. Force the user perspective.

**Issue**: Stories are too big (epics)
- **Bad**: "As a customer, I want a complete booking experience"
- **Good**: "As a customer, I want to select an available time slot, so that I can book when it's convenient for me"
- **Fix**: One story = one feature. If it takes more than 3 days to build, split it.

**Issue**: Acceptance criteria are vague
- **Bad**: "The system should work correctly"
- **Good**: "Given I enter a valid email, When I submit the form, Then I receive a confirmation email within 2 minutes"
- **Fix**: Make criteria testable. Use specific values and outcomes.

---

## Part 2: Decomposing Complex Features (20 minutes)

### Instructions

**Step 1: Read Interview #2 - Power User (3 minutes)**

Transcript excerpt:

> **Interviewer**: What features would make this really useful?
>
> **Customer**: I want to be able to reschedule if something comes up. And I want to see my appointment history—like, how many haircuts have I had this year? It'd be cool if the system remembered my preferences, like my preferred stylist or usual service. Oh, and I hate creating accounts. Can I just use my email?

**This is a goldmine of features but they're tangled together.**

**Step 2: Identify the epic (2 minutes)**

All of these requests relate to one big feature area:

**Epic**: Customer Account Management

An epic is too big to build in one sprint. It needs to be broken down.

**Step 3: Decompose the epic into user stories (15 minutes)**

Break "Customer Account Management" into small, independent stories:

**Story 1 - Simple Login**:
```
As a customer,
I want to log in using just my email (no password),
So that I can access my appointments without creating another account.

Acceptance Criteria:
- Given I enter my email, When I click "Send Login Link", Then I receive an email with a magic link
- Given I click the magic link, When the link is valid, Then I am logged into my account
- Given the link is older than 15 minutes, When I click it, Then I see an error and can request a new link
```

**Story 2 - View Appointment History**:
```
As a customer,
I want to view my past appointments,
So that I can track how often I visit and what services I've received.

Acceptance Criteria:
- Given I am logged in, When I navigate to "My Appointments", Then I see a list of past appointments with date and service
- Given I have no past appointments, When I view my history, Then I see a message "You have no appointment history yet"
- Given I have 20+ appointments, When I view history, Then appointments are paginated (10 per page)
```

**Story 3 - Rescheduling**:
```
As a customer,
I want to reschedule an existing appointment,
So that I can change my appointment time if my plans change.

Acceptance Criteria:
- Given I have an upcoming appointment, When I click "Reschedule", Then I see available time slots
- Given I select a new time, When I confirm the change, Then my appointment is updated and I receive a confirmation
- Given I try to reschedule less than 24 hours before my appointment, When I attempt to change it, Then I see a message requiring me to call instead
```

**Story 4 - Save Preferences**:
```
As a customer,
I want the system to remember my preferred service and stylist,
So that I can book faster next time.

Acceptance Criteria:
- Given I have booked at least one appointment, When I return to book again, Then the system pre-fills my usual service
- Given I have a preferred stylist, When I select a service, Then that stylist is pre-selected
- Given I want to change my preferences, When I select different options, Then the system updates my preferences
```

**Your turn**: Read Interview #3 (instructor provides). Identify one epic and decompose it into **4 user stories**.

Make sure each story:
- Can be built independently
- Delivers value on its own
- Has clear acceptance criteria
- Could be completed in a few days

### Expected Output

- 1 epic identified from Interview #3
- 4 user stories decomposed from that epic
- Each story is independent and testable
- Each story has 2-4 acceptance criteria

### Common Issues & Fixes

**Issue**: Stories still depend on each other
- **Problem**: "I want to edit my profile" depends on "I want to create a profile"
- **Fix**: That's okay for implementation order, but each story should still deliver value. "Create profile" is valuable. "Edit profile" adds more value.

**Issue**: Too granular (stories are too small)
- **Bad**: "As a customer, I want a submit button on the form"
- **Fix**: That's a task, not a story. Combine: "As a customer, I want to fill out and submit a booking form"

**Issue**: Can't tell when a story is "done"
- **Fix**: If acceptance criteria are vague or missing, the story isn't ready. Add specific, testable criteria.

---

## Part 3: Writing Effective Acceptance Criteria (20 minutes)

### Instructions

**Acceptance criteria are the contract.** They define "done." If acceptance criteria pass, the story is complete. If not, it goes back to development.

**Step 1: Review your 8 stories so far (5 minutes)**

Look at the acceptance criteria you've written. Check for:
- **Specificity**: Are they testable? Can someone verify pass/fail?
- **Completeness**: Do they cover happy path AND edge cases?
- **Measurability**: Are there numbers (time, count, size) where appropriate?

**Step 2: Improve one story's acceptance criteria (10 minutes)**

Pick your weakest story. Rewrite acceptance criteria to be bulletproof.

**Before** (weak):
```
As a customer,
I want to search for available appointments,
So that I can find a time that works for me.

Acceptance Criteria:
- Search works
- Results are shown
- I can pick a time
```

**After** (strong):
```
As a customer,
I want to search for available appointments by date and service type,
So that I can find a time that works for my schedule.

Acceptance Criteria:
- Given I select a service and date range, When I click "Search", Then I see all available time slots for that service within that date range
- Given no slots are available, When I search, Then I see a message "No availability found. Try different dates." and a link to contact the business
- Given I find an available slot, When I click "Book This Time", Then I am taken to the booking confirmation page with that time pre-selected
- Given I don't select a service, When I click "Search", Then I see a validation error "Please select a service type"
- Given the search takes longer than 3 seconds, When I am waiting, Then I see a loading indicator
```

**Notice the improvements:**
- Covers happy path (finding slots)
- Covers edge cases (no availability, no service selected)
- Specifies behavior (error messages, loading indicators)
- Includes performance criteria (3-second loading indicator)

**Step 3: Add edge cases to 2 more stories (5 minutes)**

Pick 2 of your existing stories. Add acceptance criteria for:
- **Error conditions**: What happens when something goes wrong?
- **Boundary conditions**: Empty lists, maximum values, first/last items
- **Performance requirements**: Load times, response times
- **Security/validation**: What if user enters invalid data?

### Expected Output

- 1 story with significantly improved acceptance criteria (5-6 criteria covering edge cases)
- 2 additional stories enhanced with edge case criteria
- Understanding of what makes acceptance criteria testable

### Common Issues & Fixes

**Issue**: Too many acceptance criteria (10+ per story)
- **Fix**: You're probably mixing happy path with every possible edge case. Focus on the 4-6 most important. Additional edge cases can be separate stories or test cases.

**Issue**: Acceptance criteria describe HOW, not WHAT
- **Bad**: "Given I click submit, When the form data is sent via POST to the API, Then..."
- **Good**: "Given I click submit, When the form is valid, Then I see a success message"
- **Fix**: Focus on observable behavior from the user's perspective, not implementation details.

**Issue**: Acceptance criteria overlap or contradict
- **Fix**: Review as a set. Make sure each criterion tests a different scenario.

---

## Part 4: Peer Review & Iteration (15 minutes)

### Instructions

**Step 1: Pair up with a classmate (1 minute)**

You'll review each other's user stories.

**Step 2: Exchange user stories (1 minute)**

Trade your 8-10 user stories (from Parts 1-3).

**Step 3: Review using rubric (8 minutes)**

Use the Peer Review Rubric (instructor provides):

**For each story, check:**
- ✅ **Format**: Uses "As a [role], I want [goal], So that [benefit]"
- ✅ **Role clarity**: User role is specific (not "user" but "customer" or "business owner")
- ✅ **Value**: The "so that" explains clear value/benefit
- ✅ **Size**: Story is small enough to complete in a few days
- ✅ **Testability**: Acceptance criteria are specific and testable
- ✅ **Completeness**: Covers happy path and at least one edge case
- ✅ **Independence**: Story can be built without requiring 5 other stories first

**Provide feedback** on 2-3 stories:
- **Star** (What's done well): "This acceptance criteria is super clear and testable"
- **Delta** (What could improve): "The 'so that' is vague—why does the user want this?"
- **Suggestion**: "Consider splitting this into two stories: one for viewing, one for editing"

**Step 4: Discuss feedback (3 minutes)**

Talk through your feedback with your partner. Ask questions. Explain your suggestions.

**Step 5: Revise one story based on feedback (2 minutes)**

Pick your weakest story. Apply your partner's feedback. Rewrite it.

### Expected Output

- Peer review feedback on 2-3 stories (star, delta, suggestion for each)
- 1 revised story incorporating feedback
- Understanding of what high-quality user stories look like

### Common Issues & Fixes

**Issue**: Peer says "everything looks good" but stories have obvious problems
- **Fix**: Use the rubric. Go through each checklist item. If it doesn't meet a criterion, that's your feedback.

**Issue**: Feedback is too harsh or unconstructive
- **Fix**: Use star-delta-suggestion format. Always start with what's done well.

**Issue**: Partners disagree on what "good" looks like
- **Fix**: Ask the instructor. Sometimes there are multiple valid approaches.

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Perspectives**: We wrote stories as customers and as business owners. How did the perspective change what you focused on? Which was easier? Why?

**2. Decomposition Trade-offs**: When you broke down the epic, how did you decide where to split stories? What's the risk of stories that are too small? Too large?

**3. Acceptance Criteria Challenges**: What was hardest about writing testable acceptance criteria? How will you know if a developer has met your criteria?

**4. Real-World Application**: Imagine you're starting your CSC-289 capstone project next week. How would you use user stories to plan it? Where do you start?

**5. Stakeholder Communication**: If you presented these user stories to the business owner, would they understand them? What might you need to explain?

### Exit Ticket

**Submit via Canvas** (3-5 sentences):

```
1. What was your biggest challenge in writing user stories today?

2. Which of your 10 user stories are you most proud of? Why?

3. What's one thing you learned from your peer's feedback?

4. How will you use user stories in your capstone project?
```

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Story Mapping
Arrange your 10 user stories into a story map:
- **Horizontal axis**: User journey (left to right = steps in process)
- **Vertical axis**: Priority (top = must have, bottom = nice to have)

Sketch this on paper or whiteboard. Does the map reveal gaps in the user journey?

### Challenge 2: Story Point Estimation
Estimate each story using story points (Fibonacci: 1, 2, 3, 5, 8, 13):
- 1 point: Trivial (few hours)
- 2 points: Small (half day)
- 3 points: Medium (1 day)
- 5 points: Large (2-3 days)
- 8 points: Very large (week) - consider splitting
- 13+ points: Epic - definitely split

Are any stories 8+ points? Split them.

### Challenge 3: Negative User Stories
Write 3 "abuse" user stories—things users should NOT be able to do:
```
As a malicious user,
I should NOT be able to book appointments under someone else's name,
So that the system protects customer privacy.

Acceptance Criteria:
- Given I try to book with an email that doesn't match my login, When I submit, Then the system rejects the booking
- Given I try to view another customer's appointment history, When I access their account URL, Then I see an authorization error
```

These turn into security requirements.

### Challenge 4: Non-Functional Stories
Write 3 non-functional user stories:
```
As a business owner,
I want the appointment list to load in under 2 seconds,
So that I can quickly check my schedule between clients.

As a customer,
I want the booking page to work on my phone,
So that I can book appointments on the go.
```

Non-functional requirements can be user stories too!

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup, distribute materials, review format
- **5-30 min**: Part 1 - Mining user stories from Interview #1
- **30-50 min**: Part 2 - Decomposing epic from Interview #3
- **50-70 min**: Part 3 - Improving acceptance criteria
- **70-85 min**: Part 4 - Peer review and revision
- **85-95 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Writing from system perspective instead of user perspective
   - **Intervention**: Catch this early. Every story must start "As a [specific user role]..." No exceptions.
   - **Success Indicator**: Stories use "I want" (user) not "The system should" (requirements doc)

**2. Struggle**: Confusing tasks with stories
   - **Intervention**: Ask: "Does this deliver value to a user, or is it a technical task?" Technical tasks (setup database, configure API) aren't user stories.
   - **Success Indicator**: Every story has a clear user benefit in the "so that" clause

**3. Struggle**: Acceptance criteria are implementation details
   - **Intervention**: "Don't tell me how the system works internally. Tell me what the user sees and experiences."
   - **Success Indicator**: Acceptance criteria describe observable behavior, not code/database structure

**4. Struggle**: Stories are too large (multi-week efforts)
   - **Intervention**: "If it takes more than 3-5 days to build, it's too big. What's the smallest piece that delivers value?"
   - **Success Indicator**: Students can explain how to split large stories into smaller increments

**5. Struggle**: Edge cases are ignored
   - **Intervention**: Play "what if?": "What if the email is invalid? What if there are 1000 results? What if the user clicks submit twice?"
   - **Success Indicator**: At least 1-2 acceptance criteria per story address edge cases or error conditions

### Materials to Prepare

**Before Class:**
- [ ] Write 3 stakeholder interview transcripts (1-2 pages each)
  - Interview #1: Business owner (pain points, core features)
  - Interview #2: Power user (advanced features, preferences)
  - Interview #3: Customer with accessibility needs (inclusivity requirements)
- [ ] Create User Story Template with examples
- [ ] Print Peer Review Rubric (1 per student)
- [ ] Prepare example of a bad story and a good story (side-by-side)
- [ ] Set up Trello board or GitHub repo if using digital tools
- [ ] Create reference sheet of Given-When-Then examples

**During Class:**
- [ ] Project the user story format on screen throughout class
- [ ] Set a timer for each part (keep students on pace)
- [ ] Circulate during Part 1 to check first story attempts
- [ ] Stop at Part 2 to show an example of good decomposition
- [ ] During peer review, ensure feedback is constructive
- [ ] Collect one strong story from each student to create class examples

**After Class:**
- [ ] Compile best examples of each story type
- [ ] Create FAQ document from common questions
- [ ] Identify students who struggled with format (offer office hours)
- [ ] Note which interview transcript was most challenging (adjust for next semester)
- [ ] Save revised stories to show improvement in future classes

### Teaching Tips

**Use the formula religiously**: Enforce "As a [role], I want [goal], So that [benefit]" in every single story. Students will resist. Hold firm. It becomes muscle memory.

**Show bad examples first**: Before they write, show a terrible user story. Ask what's wrong. Let them identify the problems. Then show the improved version.

**Real-world connection**: Show actual user stories from open-source projects (GitHub issues often follow this format). Students see professionals use this.

**Time-box the writing**: "You have 15 minutes for 4 stories. Go." Urgency prevents perfectionism and over-thinking.

**Celebrate good peer feedback**: When you see constructive peer reviews, read them aloud (with permission). Model what good feedback looks like.

**Connect to sprints**: "In two weeks, you'll use these stories for sprint planning. If your acceptance criteria are vague, you won't know when the sprint is done."

### Teaching Philosophy Notes

User stories are deceptively simple. "As a... I want... So that..." seems trivial. But students struggle to think from the user's perspective. They want to design systems, not empathize with users.

This workshop forces empathy. By reading stakeholder interviews and mining user needs, they practice listening. By writing "so that" clauses, they practice understanding value, not just features.

The peer review component is critical. Students are often too close to their own writing to see weaknesses. Fresh eyes catch vague criteria, missing edge cases, and stories that are actually epics.

The decomposition exercise (Part 2) is where the real learning happens. Students realize that "customer account management" is actually 10 stories. This prepares them for backlog grooming in real projects.

Finally, the acceptance criteria work (Part 3) teaches precision. Developers need testable criteria. Vague criteria lead to arguments about whether a story is "done." Specific criteria prevent this.

By the end, students should feel: "I can turn messy stakeholder requests into organized, actionable work." That's the skill.

---

**Remember**: Great user stories are clear, concise, and user-focused. If a story confuses you, it will confuse the team. Clarity is kindness. Rewrite until it's obvious what needs to be built and why.
