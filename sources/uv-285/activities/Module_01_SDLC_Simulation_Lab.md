<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_01_SDLC_Simulation_Lab.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk1–2 (M1)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 1 Activity: SDLC Simulation Lab - Building a System from Scratch

**Duration**: 120 minutes
**Format**: Pairs (rotating roles)
**Materials Needed**:
- Large poster paper or whiteboard per pair
- Sticky notes (3 different colors)
- Markers
- SDLC Phase Checklist (provided by instructor)
- Sample stakeholder interview transcript
- Role cards for rotation

**Learning Objectives**:
- Experience all phases of SDLC in compressed time
- Understand dependencies between SDLC phases
- Practice role transitions (analyst → designer → developer → tester)
- Recognize how decisions in early phases impact later phases
- Build empathy for different roles in systems development
- Create tangible SDLC artifacts you can reference all semester

---

## Overview

**Welcome to systems analysis and design!** Today, you're going to build an entire information system from scratch. Not with code—with paper, markers, and thinking.

Why paper? Because the hardest part of systems development isn't writing code. It's figuring out what to build, why to build it, and how it should work. Those decisions happen way before anyone touches a keyboard.

You'll work in pairs and rotate through four roles:
1. **Systems Analyst**: Interview stakeholders, gather requirements
2. **System Designer**: Create diagrams, design the solution
3. **Developer**: Build the system (paper prototype)
4. **Tester**: Verify it meets requirements, find gaps

By the end of this lab, you'll have:
- A complete set of SDLC artifacts for a working system
- Experience in all four roles
- Understanding of how phases connect
- Appreciation for why we don't skip requirements gathering

The system you'll build: **A community library checkout system**. Simple enough to complete in 2 hours, complex enough to teach you the process.

This is the foundation. Every system you analyze this semester—from mobile apps to enterprise software—follows this same pattern.

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Form pairs**: Find a partner. You'll work together but rotate roles.

2. **Gather materials**:
   - [ ] Large paper/whiteboard space
   - [ ] Sticky notes (3 colors: one for requirements, one for tasks, one for test cases)
   - [ ] Markers
   - [ ] SDLC Phase Checklist from instructor

3. **Read the scenario** (instructor will distribute):
   - Stakeholder interview transcript
   - Current library process description
   - Pain points and wish list

4. **Understand role rotation**:
   - You'll switch roles every 25-30 minutes
   - Each person experiences each role once
   - Artifacts from each phase feed into the next

**Instructor Check**: Make sure every pair has materials and understands they'll rotate roles.

---

## Part 1: Systems Analysis - Gathering Requirements (30 minutes)

### Instructions

**Current Role**: Systems Analyst

Your job: Understand the current system, identify problems, and gather requirements for the new system.

**Step 1: Read the stakeholder interview (5 minutes)**

Instructor provides a 1-page interview transcript with the library director. Example excerpts:

> "Right now, patrons write their name and the book title in a spiral notebook. We have no idea what books are checked out unless we physically look through the notebook."
>
> "Sometimes people forget to return books. We have no way to remind them. We've lost expensive books this way."
>
> "It takes forever to find out if a book is available. We have to scan the shelves visually or flip through pages of handwritten notes."

**Step 2: Identify functional requirements (10 minutes)**

Functional requirements = what the system must DO.

Use one color of sticky notes. Write each requirement separately:
- "System must allow staff to check out a book to a patron"
- "System must allow staff to check in a returned book"
- "System must show which books are currently checked out"
- "System must show overdue books"
- "System must allow searching for books by title or author"

**Aim for 8-12 functional requirements.** Be specific. Avoid "The system should be easy to use" (that's non-functional).

**Step 3: Identify non-functional requirements (5 minutes)**

Non-functional requirements = how the system should behave.

Examples:
- "System must be usable by staff with minimal computer experience"
- "Checkout process must take less than 30 seconds"
- "System must be accessible on library's existing computers"
- "Data must be backed up daily"

**Aim for 4-6 non-functional requirements.**

**Step 4: Prioritize requirements (10 minutes)**

Mark each requirement:
- **Must Have**: Core functionality, can't launch without it
- **Should Have**: Important but not critical for MVP
- **Nice to Have**: Would be cool, but can wait

Group your sticky notes by priority on your workspace.

### Expected Output

- 8-12 functional requirements on sticky notes
- 4-6 non-functional requirements
- All requirements prioritized (Must/Should/Nice)
- Clear understanding of the problem you're solving

### Common Issues & Fixes

**Issue**: "We're writing solutions, not requirements"
- **Bad**: "The system needs a database"
- **Good**: "The system must store patron and book information"
- **Fix**: Describe WHAT the system needs to do, not HOW it will do it. That comes in design.

**Issue**: "Our requirements are too vague"
- **Bad**: "The system should be fast"
- **Good**: "Checkout process must complete in under 30 seconds"
- **Fix**: Add measurable criteria. How fast? How many? How often?

**Issue**: "We have 40 requirements"
- **Fix**: You're getting too detailed. Combine related requirements. "Add patron" and "Edit patron" can be "Manage patron information."

---

## Part 2: System Design - Creating the Blueprint (30 minutes)

### Instructions

**Current Role**: System Designer

Your job: Turn requirements into visual designs—diagrams, workflows, and screen mockups.

**Step 1: Create a use case diagram (10 minutes)**

Who will use this system? What will they do?

Draw:
- **Stick figure actors**: Library Staff, Patron (if they have self-service), System Admin
- **Ovals for use cases**: Each major function (Check Out Book, Check In Book, Search Catalog, Generate Overdue Report)
- **Lines connecting actors to use cases**: Who can do what?

Keep it simple. This isn't a work of art. It's a communication tool.

**Step 2: Design the data model (10 minutes)**

What information does the system need to store?

Create a simple Entity-Relationship Diagram (ERD):

**Entities** (boxes):
- Book (attributes: BookID, Title, Author, ISBN, Status)
- Patron (attributes: PatronID, Name, PhoneNumber, Email)
- Transaction (attributes: TransactionID, CheckoutDate, DueDate, ReturnDate)

**Relationships** (lines):
- Patron --< checks out >-- Book (one patron can check out many books)
- Transaction links Patron and Book

Draw boxes for entities, list 4-6 key attributes in each, connect with labeled lines.

**Step 3: Create wireframe sketches (10 minutes)**

Sketch 2-3 screens:

1. **Check Out Screen**:
   - Search for patron (text box)
   - Search for book (text box)
   - Display patron info (name, current checkouts)
   - Display book info (title, author, status)
   - [Check Out] button
   - Confirmation message

2. **Overdue Books Report**:
   - Table with columns: Patron Name, Book Title, Due Date, Days Overdue
   - [Send Reminder] button per row
   - Print option

3. **Book Search Screen**:
   - Search box
   - Filter options (Available/Checked Out/Overdue)
   - Results list with book details

Draw boxes and labels. Use actual text where you can. This should look like a blueprint.

### Expected Output

- One use case diagram showing actors and major functions
- One ERD showing 3-4 entities with relationships
- 2-3 wireframe sketches of key screens
- Design artifacts that clearly implement your requirements from Part 1

### Common Issues & Fixes

**Issue**: "We don't know UML notation"
- **Fix**: Don't worry about perfect notation. Use boxes, circles, and lines. Focus on clarity, not compliance.

**Issue**: "Our ERD is a mess with 10 entities"
- **Fix**: Start with the core 3: Book, Patron, Transaction. Everything else can come later.

**Issue**: "Our wireframes look terrible"
- **Fix**: They're supposed to! Ugly wireframes = fast iteration. If you spend 20 minutes making it pretty, you're doing it wrong.

---

## Part 3: Development - Building the Paper Prototype (35 minutes)

### Instructions

**Current Role**: Developer

Your job: Build a working prototype of the system using paper components.

**Step 1: Create the data (10 minutes)**

Build sample data on index cards or small sheets:

**Book Cards** (make 10-12):
```
[Front of card]
BookID: B001
Title: The Great Gatsby
Author: F. Scott Fitzgerald
Status: Available

[Back of card]
Checkout History:
- Checked out to P003 on 1/10, returned 1/17
- Checked out to P005 on 1/20, returned 1/25
```

**Patron Cards** (make 6-8):
```
PatronID: P001
Name: Sarah Chen
Phone: (555) 123-4567
Email: schen@email.com
Current Checkouts: 0
```

**Transaction Cards** (blank templates, 10-12):
```
TransactionID: T___
PatronID: ___
BookID: ___
Checkout Date: ___
Due Date: ___ (2 weeks from checkout)
Return Date: ___
Status: Checked Out / Returned / Overdue
```

**Step 2: Build the interface (15 minutes)**

Create paper versions of your wireframe screens:

1. **Check Out Screen**:
   - Large paper with drawn search boxes
   - Space to place patron card
   - Space to place book card
   - "Check Out" button (just write it)
   - Separate "confirmation" paper you can show

2. **Overdue Report Screen**:
   - Table drawn on paper
   - Rows where you can place transaction cards
   - Color-code overdue items (red marker)

3. **Search Screen**:
   - Search box drawn
   - Area to display matching book cards

Use multiple sheets. Make it big enough to manipulate.

**Step 3: Create the system logic (10 minutes)**

Write step-by-step instructions for common operations:

**Check Out Procedure**:
1. Staff enters Patron ID → locate patron card
2. Staff scans/enters Book ID → locate book card
3. System verifies book status = "Available"
4. System creates new Transaction card (fill in IDs and dates)
5. System updates Book card status to "Checked Out"
6. System displays confirmation with due date
7. File transaction card in "Active Transactions" pile

**Check In Procedure**:
1. Staff scans/enters Book ID → locate transaction card for that book
2. Staff fills in Return Date on transaction card
3. System updates Book card status to "Available"
4. System moves transaction card to "Completed" pile
5. System displays confirmation

Write these on separate instruction sheets. This is your "code"—the logic of how the system works.

### Expected Output

- 10-12 book cards with realistic data
- 6-8 patron cards
- 10-12 blank transaction cards
- Paper interfaces for 2-3 key screens
- Written procedures for check-out and check-in processes
- A system you can physically demonstrate

### Common Issues & Fixes

**Issue**: "This feels silly. We're just playing with paper."
- **Fix**: Prototyping saves massive time. Better to find design flaws with paper than after writing 10,000 lines of code.

**Issue**: "We can't represent the computer logic with paper"
- **Fix**: You can! The rules are the same. If the system would check a database for book status, you check your book cards. The logic is identical.

**Issue**: "We're running out of time"
- **Fix**: Prioritize. Get checkout/checkin working. Skip the advanced features. MVP first.

---

## Part 4: Testing - Finding the Gaps (20 minutes)

### Instructions

**Current Role**: Tester

Your job: Verify the system works as designed and find problems.

**Step 1: Create test cases from requirements (8 minutes)**

Go back to your requirements from Part 1. For each "Must Have" requirement, create a test case.

Use your third color of sticky notes:

**Test Case Format**:
```
Test Case #1
Requirement: System must allow staff to check out a book
Given: Book B001 is available, Patron P001 exists
When: Staff checks out Book B001 to Patron P001
Then:
  - Transaction created
  - Book status changes to "Checked Out"
  - Due date is 2 weeks from today
  - Patron's checkout count increases
```

Write 6-8 test cases covering core functionality.

**Step 2: Execute the test cases (8 minutes)**

Actually perform each test using your paper prototype:

1. Set up the preconditions (arrange cards)
2. Follow the check-out procedure exactly as written
3. Verify the expected outcomes

Mark each test:
- ✅ **Pass**: System behaves as expected
- ❌ **Fail**: System doesn't do what requirement specifies
- ⚠️ **Issue Found**: System works but has a problem

**Step 3: Bug report and gap analysis (4 minutes)**

For any failed tests or issues, write a bug report:

```
Bug #1: No handling of lost books
Severity: Medium
Steps to Reproduce:
1. Check out book to patron
2. Book is never returned
Problem: System has no way to mark book as "Lost" vs "Overdue"
Suggested Fix: Add book status option for "Lost"
```

Common gaps you might find:
- No way to handle renewals
- No limit on how many books one patron can check out
- No handling of damaged books
- No duplicate patron detection (two people with same name)

**List 3-5 gaps or issues.** This is expected! Testing finds problems.

### Expected Output

- 6-8 test cases linked to requirements
- Test results (Pass/Fail/Issue) for each
- 3-5 documented bugs or gaps
- Understanding that no first version is perfect

### Common Issues & Fixes

**Issue**: "Everything passed our tests"
- **Fix**: Your tests aren't hard enough. Try edge cases: What if patron has 10 overdue books? What if book doesn't exist? What if two patrons have the same name?

**Issue**: "We found 20 bugs"
- **Fix**: Some of those are probably feature requests, not bugs. A bug is "system doesn't do what it's supposed to." Missing features are "system could do more."

**Issue**: "We don't know how to fix the bugs"
- **Fix**: That's okay. Testing's job is to find problems, not fix them. Document clearly so the developer (next sprint) can fix.

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Phase Dependencies**: When you got to Design, what happened if your Requirements were unclear? What about when you got to Testing and realized Requirements were missing?

**2. Role Empathy**: Which role was hardest for you? Which was most comfortable? How does experiencing all roles change how you'll work with team members in those roles?

**3. Paper Prototyping Value**: We didn't write any code, but we built a system. What did we learn that we wouldn't have learned by jumping straight to coding?

**4. Iteration Needs**: If you had another 2 hours, what would you improve? What did testing reveal that would change your design?

**5. Real-World Scaling**: This library system is simple. What would change if it had 50,000 patrons, 100,000 books, and 5 branch locations?

### Exit Ticket

**Submit via Canvas** (3-5 sentences):

```
1. What was your biggest learning moment during this lab?

2. Which SDLC phase do you now realize is more important than you thought? Why?

3. What's one specific thing you'll do differently in your capstone project because of this experience?

4. What's still unclear about the SDLC process?
```

---

## Extension Challenges (Optional)

**For pairs who finish early:**

### Challenge 1: Add a New Feature
Pick one "Nice to Have" requirement. Design and prototype it. What entities or screens change?

### Challenge 2: Worst-Case Testing
Create 5 "break the system" test cases:
- Patron checks out same book twice
- Check in a book that was never checked out
- Delete a patron who has books checked out
- Book with no author or title
- Due date is in the past

Can your system handle these? What should it do?

### Challenge 3: Stakeholder Scenarios
Role-play a demo for the library director. One partner is the system analyst presenting, the other is the skeptical director asking hard questions:
- "What if we lose power?"
- "What if staff makes a mistake?"
- "How long would this take to build for real?"

### Challenge 4: Technology Decisions
Now that you have the design, decide:
- Database: SQL or NoSQL? Why?
- Interface: Desktop app, web app, or mobile? Why?
- Hosting: Local server or cloud? Why?

Document your decisions and reasoning.

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup, pair formation, distribute materials
- **5-35 min**: Part 1 (Systems Analysis) - requirements gathering
- **35-65 min**: Part 2 (System Design) - diagrams and wireframes
- **65-100 min**: Part 3 (Development) - paper prototype building
- **100-120 min**: Part 4 (Testing) - test execution and bug documentation
- **120-130 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Students jump to solutions before understanding requirements
   - **Intervention**: Stop them. "Don't tell me HOW you'll build it. Tell me WHAT it needs to do."
   - **Success Indicator**: Requirements are written as system behaviors, not implementation details

**2. Struggle**: Diagrams are overly complex or too simplistic
   - **Intervention**: Show examples on the board. "Your ERD should have 3-5 entities, not 1, not 15."
   - **Success Indicator**: Diagrams are readable and match the scope of the problem

**3. Struggle**: Paper prototyping feels pointless to students
   - **Intervention**: Challenge them: "Show me how a patron checks out a book. Walk me through it." Physical demo proves the value.
   - **Success Indicator**: Students can demonstrate their system working without explaining it

**4. Struggle**: Testing is too superficial (all tests pass)
   - **Intervention**: Be a hostile tester. "What if I enter a book that doesn't exist?" Make them think adversarially.
   - **Success Indicator**: Students find at least 3 real issues with their own design

**5. Struggle**: Pairs work individually instead of together
   - **Intervention**: Enforce single workspace. "One paper, one marker at a time. You have to talk through decisions together."
   - **Success Indicator**: Both students can explain all parts of the system, not just "their" parts

### Materials to Prepare

**Before Class:**
- [ ] Print library stakeholder interview transcripts (1 per pair)
- [ ] Prepare role cards explaining each SDLC role
- [ ] Create sample requirement statements to show format
- [ ] Gather poster paper, sticky notes, markers (enough for all pairs)
- [ ] Print SDLC phase checklist (deliverables for each phase)
- [ ] Prepare example diagrams to show (use case, ERD, wireframe)
- [ ] Pre-make one complete system yourself to understand timing

**During Class:**
- [ ] Project a timer for each phase so pairs stay on track
- [ ] Circulate during Part 1 to catch solution-focused requirements
- [ ] Check diagrams in Part 2 before they move to Part 3 (prevent cascading errors)
- [ ] Take photos of good examples to share (ask permission)
- [ ] Stop at 90 minutes for 2-minute status check: "Everyone should have a working prototype"

**After Class:**
- [ ] Take photos of all final systems (students can reference them)
- [ ] Note which pairs struggled with which phase (for targeted support)
- [ ] Identify best examples of each artifact type (requirements, ERD, wireframe, test case)
- [ ] Compile common gaps found during testing (shows whole class struggles)
- [ ] Create FAQ document from questions asked during lab

### Teaching Tips

**Set the tone**: "This will feel silly. Embrace it. Paper prototyping is what designers at Apple, Google, and Microsoft do before spending millions on development."

**Emphasize iteration**: "Your first design will be wrong. That's expected. Better to be wrong with paper than wrong with code."

**Connect to capstone**: "In 8 weeks, you'll do exactly this process for your CSC-289 project. But instead of 2 hours, you'll have 2 months. Get the process right now."

**Celebrate bugs found**: When pairs find issues during testing, praise them loudly. "Finding a bug in testing is a WIN. Finding it after launch is a disaster."

**Use real stories**: Share a 30-second story of a real system failure caused by skipping requirements or testing. Make it memorable.

**Don't let them skip ahead**: "I know you want to build. Resist. If you don't understand requirements, you'll build the wrong thing fast."

### Teaching Philosophy Notes

This lab embodies experiential learning at its core. Students don't read about SDLC—they live it. They feel the frustration of getting bad requirements. They experience the "aha!" when testing reveals a design flaw they missed.

The pairs format with role rotation ensures no one hides. Everyone must analyze, design, build, and test. This builds empathy for the full team.

Paper prototyping is the great equalizer. Students who are nervous about coding shine here. Students who want to jump straight to code learn that thinking precedes typing.

The library checkout system is intentionally simple. This isn't about domain complexity—it's about process. They'll have a working system in 2 hours. That confidence is critical.

Finally, the bugs they find in testing are the payoff. When students discover their own design gaps, they internalize the value of testing in a way no lecture can teach.

---

**Remember**: By the end of this lab, students should be able to say: "I built a system today. I know what systems analysts, designers, developers, and testers do because I did it." That embodied learning sticks.
