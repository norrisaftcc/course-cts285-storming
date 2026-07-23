<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/instructor-guide/INSTRUCTOR_GUIDE.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 instructor side (task 1.9)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CTS-285 Instructor Guide
## Systems Analysis & Design - Complete Teaching Resource

**Target Audience**: SME (Subject Matter Expert) instructors without formal teaching training
**Course**: CTS-285 Systems Analysis & Design
**Institution**: Forsyth Technical Community College
**Author**: Andrew Norris
**Last Updated**: January 15, 2026

---

## Quick Start for New Instructors

**If you're teaching CTS-285 for the first time**, read these sections first:
1. Course Philosophy (below)
2. Week 1 Guide (page 10)
3. Grading Shortcuts (page 45)
4. Common Student Struggles (page 50)

**Everything else** can be referenced as-needed during the semester.

---

## Table of Contents

1. Course Philosophy & Approach
2. Before Semester Starts
3. Week-by-Week Teaching Guide (Modules 1-8)
4. The Semester-Long Project
5. Role Rotation Strategy
6. Grading Philosophy & Time-Saving Tips
7. Common Student Struggles (40+ scenarios)
8. Office Hours & Student Support
9. Technology Setup & Troubleshooting
10. Adapting the Course
11. Preparing Students for CSC-289
12. The AlgoCratic Theme (Optional Use)
13. Quick Reference Checklists

---

## 1. Course Philosophy & Approach

### What This Course Is

**CTS-285 teaches systems analysis through experiential learning.** Students don't just study SDLC - they execute it by building a real information system across 16 weeks.

**Key principles**:
- **Process over product**: 40% of grade is PM/process, not just technical deliverables
- **Role rotation**: Students experience Product Owner, Scrum Master, Developer, Release Manager perspectives
- **Real-world preparation**: Every assignment prepares for CSC-289 capstone with GRD-242 collaboration
- **Honest struggle valued**: Retrospectives that admit mistakes earn more credit than fake perfection

### What This Course Isn't

**Not a programming course** - Students learn Flask/Python as vehicle for systems analysis, not for its own sake. If they want deep Python, they take CSC courses.

**Not a pure PM course** - PM skills are integrated throughout, but always in service of building systems. This isn't SCRUM certification prep.

**Not a design course** - UX/UI design is GRD-242's domain. We do wireframes to communicate structure, not for aesthetics.

### Your Role as Instructor

You're **guide and stakeholder**, not lecturer.

**As guide**: You provide structure (templates, rubrics, office hours) but students drive their own learning.

**As stakeholder**: You play client role in mock interviews, give feedback on sprint reviews, ask clarifying questions.

**What you're NOT**: Doing the work for them. If student asks "how do I implement authentication?", answer with "what have you researched so far?" not a code snippet.

---

## 2. Before Semester Starts

### Week Before Classes (8 hours prep)

**Day 1: Technology Setup** (2 hours)
- [ ] Set up GitHub Organization for class (if using GitHub Classroom)
- [ ] Test Render.com or Railway.app deployment yourself
- [ ] Verify Canvas course imports correctly
- [ ] Test that all material links work

**Day 2: Review Materials** (3 hours)
- [ ] Read all Week 1-2 assignments
- [ ] Review Module 1-2 knowledge checks
- [ ] Familiarize with planning sheet templates
- [ ] Decide: Will you use AlgoCratic theme or not? (see Section 12)

**Day 3: Prepare First Week** (2 hours)
- [ ] Prep Module 01 SDLC Simulation Lab materials
- [ ] Decide on sample project to show students
- [ ] Write welcome email with syllabus
- [ ] Set up office hours (Zoom link, calendar)

**Day 4: Student Setup** (1 hour)
- [ ] Create Canvas announcement with Week 1 expectations
- [ ] Post GitHub account creation instructions
- [ ] Share office hours schedule

### First Day of Class Checklist

**Logistics** (15 min):
- Introduce yourself (keep it brief, they don't care about your PhD)
- Explain course structure (8 modules, role rotation, semester project)
- **Emphasize**: This is hands-on, not lecture-based

**Set Expectations** (20 min):
- Show example student project from previous semester (if available)
- Explain 40% process grading (this surprises students - address it upfront)
- Discuss CSC-289 preparation (why they're learning PM skills)
- **Be honest**: "This course is challenging but rewarding"

**Practical Setup** (25 min):
- Walk through GitHub account creation (do it together)
- Show Canvas navigation
- Point to office hours
- Answer logistics questions

**Week 1 Assignment Preview** (10 min):
- Environment setup is homework
- Come to next class with Python and Git installed
- Troubleshooting in office hours if needed

---

## 3. Week-by-Week Teaching Guide

### Module 1: Weeks 1-2

**Learning Objectives**: SDLC foundations, Agile introduction, project selection

**Week 1**

**Class Session 1** (Tuesday/Monday):
- First day activities (see above)
- Brief SDLC overview (20 min lecture - show phases, don't deep dive)
- Start environment setup together in class if time permits

**Lab Session 1**:
- Troubleshoot student environment setup
- Students work on Week 1 assignment
- Circulate and help individuals

**Class Session 2**:
- SDLC Simulation Lab (90 min activity)
- Debrief simulation (20 min): What did they learn?

**Lab Session 2**:
- Students work on Week 2 assignment (project selection)
- **Your role**: Play consultant, ask questions about their project ideas
  - "Who's your target user?"
  - "What's the MVP?"
  - "That's ambitious - how would you descope?"

**Week 2 Office Hours Topics**:
- Environment issues (Python path, Git setup)
- Project scope questions ("Is my idea too big/small?")
- GitHub repository setup help

**Common Student Struggles (Week 1-2)**:

**Struggle**: Students choose projects that are way too ambitious
**Signs**: "I'm building the next Facebook" or "social network for everyone"
**Intervention**: "That's a $10M project. What's the tiniest version that solves one problem for one user type?"
**Success Indicator**: They can describe MVP in 30 seconds to their mom

**Struggle**: Python/Git installation issues (especially Windows users)
**Signs**: "It says Python not recognized" or "Git bash not opening"
**Intervention**: Office hours, not class time. Point to GitHub's installation guides.
**Success Indicator**: They successfully push test.py to GitHub

**Struggle**: Treating user stories like features ("Add search bar")
**Signs**: Stories missing role or benefit
**Intervention**: Show template. "Who needs search? Why do they need it?"
**Success Indicator**: Stories follow "As a [role], I want [feature], so that [benefit]" exactly

---

### Module 2: Weeks 3-4

**Learning Objectives**: Requirements gathering, stakeholder management, user stories with acceptance criteria

**Week 3**

**Class Session 1**:
- Mini-lecture: Stakeholder analysis (30 min)
  - Show power-interest grid with real example
  - Explain why this matters for CSC-289 (GRD-242 students = stakeholders)
- Workshop: Students start stakeholder mapping for their projects

**Lab Session 1**:
- Students work on Week 3 assignment
- **Your job**: Review their stakeholder lists
  - "Who approves deployment?" (IT department they forgot)
  - "Who's affected but doesn't use system?" (secondary stakeholders)

**Class Session 2**:
- Interview preparation workshop
- Show bad vs good interview questions
  - Bad: "Do you like this idea?" (leading)
  - Good: "Walk me through how you currently [do task]" (open-ended)

**Lab Session 2**:
- **Mock stakeholder interviews** (you play their stakeholders)
- Rotate: 15 min per student, you improvise based on their project
  - Be realistic: Ask clarifying questions, reveal constraints they hadn't considered
  - Example: "That's cool, but our IT department requires 2FA. Can your system support that?"

**Week 4**

**Class Session 1**:
- User Story Workshop (from activities folder)
- Practice writing acceptance criteria together
- Common mistakes walkthrough

**Class Session 2**:
- MoSCoW prioritization exercise
- Students share their Must Haves (5 min each)
- Class asks: "Is that really Must Have or Should Have?"

**Lab Sessions**:
- Work time on Week 4 assignment
- **Heavy support needed**: Acceptance criteria are new and students struggle
- Show examples, review their work, iterate

**Common Student Struggles (Week 3-4)**:

**Struggle**: Stakeholder interviews feel awkward/fake
**Signs**: Student: "This feels pointless, I'm interviewing you pretending to be a user"
**Intervention**: "Yes, it's a simulation. In CSC-289, you'll interview real GRD-242 students. This is practice. Embrace the roleplay."
**Success Indicator**: They ask follow-up questions, not just scripted questions

**Struggle**: Acceptance criteria are vague ("feature works well")
**Signs**: Criteria can't be tested (no Given-When-Then)
**Intervention**: "How do I verify this? What's the exact behavior?" Force specificity.
**Success Indicator**: Criteria include specific states, actions, outcomes

**Struggle**: Everything is Must Have (can't prioritize)
**Signs**: 20 Must Haves, 0 Should Haves
**Intervention**: "If you could only deliver 5 features, which ones? Those are Must Haves."
**Success Indicator**: ~6-8 Must Haves, rest in Should/Could

---

### Module 3: Weeks 5-6 (Sprint 1 - Design)

**Learning Objectives**: System design (UML, ERD, wireframes), sprint planning, first complete sprint

**This is the heaviest teaching module** - students are learning design tools AND sprint process simultaneously.

**Week 5**

**Class Session 1**:
- Sprint Planning demonstration
  - Use YOUR sample project
  - Show capacity calculation: "I have 20 hours, Sprint 1 has 22 story points. I'm overcommitted. Cut 1 story."
- Students do their sprint planning in class (with your help)

**Lab Session 1**:
- **System Design Studio** activity (150 min - full lab session)
- Students work on UML diagrams
- **Circulate heavily**: UML notation is new

**Class Session 2**:
- ERD workshop
- Show normalization (1NF, 2NF, 3NF) with examples
- Students sketch ERDs on paper first (easier to iterate)

**Lab Session 2**:
- Wireframing workshop
- Demo Figma or Balsamiq
- **Key message**: "Low fidelity! Gray boxes, not beautiful mockups!"

**Week 6**

**Class Sessions**:
- Work time on Sprint 1
- **Stand back**: They should be executing independently now
- Answer questions but don't do work for them

**Lab Sessions**:
- Final push on Sprint 1 deliverables
- Sprint 1 retrospectives (can do together or individually)

**Week 6 Office Hours Are Critical**:
- Design reviews (students show you ERD, you spot issues before submission)
- UML notation questions
- "Is my design good enough?" (answer: probably yes, stop perfecting)

**Common Student Struggles (Week 5-6)**:

**Struggle**: UML diagrams are overwhelming
**Signs**: "I don't know what to include" or diagram has 30 classes
**Intervention**: "Start with 5 classes. Main entities only. Expand if needed."
**Success Indicator**: Diagram fits on one page, clearly shows relationships

**Struggle**: ERD not normalized (repeating data)
**Signs**: Customer name appears in Orders table and Customer table
**Intervention**: "If you change customer name, how many places do you update? If more than one, you need normalization."
**Success Indicator**: ERD in 3NF with junction tables for M:N relationships

**Struggle**: Wireframes too high-fidelity (beautiful mockups)
**Signs**: Student spent 10 hours on color palettes and fonts
**Intervention**: "This isn't a design course. Gray boxes with labels. You're communicating structure, not aesthetics."
**Success Indicator**: Wireframes are clean sketches focusing on layout and flow

**Struggle**: Sprint planning is unrealistic (20 story points for first sprint)
**Signs**: Student commits to more work than humanly possible
**Intervention**: "First sprint, aim for 12-15 story points. You're learning the tools. Estimate conservatively."
**Success Indicator**: They complete 80%+ of planned work

---

## 4. Grading Philosophy & Time-Saving Tips

### The 40-40-20 Split

**40% Process**: Evidence they followed SDLC phases
- Sprint planning docs
- Daily standups (not faked)
- Retrospectives
- Risk registers
- GitHub Projects board usage

**40% Technical**: Quality of deliverables
- Design artifacts (UML, ERD, wireframes)
- Code quality and functionality
- Testing
- Deployment

**20% Communication**: Clarity for others
- Documentation
- Presentations
- Design rationale
- User guides

### Time-Saving Grading Strategies

**Sprint Assignments** (20 min per student max):

**Minute 1-3: Check GitHub Projects board**
- Open their board
- Count issues (should match backlog size)
- Check issue movement (To Do → Done across sprint)
- Look for labels (story points, priorities)
- **Red flag**: Board empty or all issues created day before deadline = fake process

**Minute 4-8: Scan standups**
- Look for dates (should span sprint duration)
- Check for specificity ("Completed User model" vs "worked on project")
- Note blockers mentioned (nobody has zero blockers - if they claim perfect sprint, it's fake)
- **Shortcut**: Read Day 1, Day 5, Day 10. If those look good, skim the rest.

**Minute 9-15: Review technical deliverables**
- UML: Correct notation? Covers their project? (Don't check every detail - spot check)
- ERD: 5+ entities? Relationships shown? (3NF check: does customer name appear twice?)
- Code: Does it run? Features work? (Test 2-3 main features, not everything)

**Minute 16-20: Fill rubric and write feedback**
- Use rubric percentages (faster than calculating exact points)
- Write 2-3 sentences: "Great UML diagrams, clear notation. ERD needs normalization work - customer data duplicated. Process excellent - standups show real daily work."

**Total**: 20 minutes × 15 students = 5 hours for sprint grading (reasonable)

### Common Grading Dilemmas

**Dilemma**: "Student's code works but their process documentation is minimal"
**Grade**: ~60-70%. Great technical (40/40) but process is missing (10/40), communication adequate (15/20).
**Feedback**: "Your implementation works well! However, the PM component is 40% of your grade. Next sprint, prioritize standups and sprint planning equally with code."

**Dilemma**: "Student's code is broken but their process documentation is excellent"
**Grade**: ~65-75%. Process excellent (35/40), technical partial (20/40 if clearly they tried), communication good (15/20).
**Feedback**: "Your process is professional - clear planning, honest standups, good retrospective. Let's debug the technical issues in office hours for next sprint."

**Dilemma**: "Student engaged heavily with AlgoCratic optional content. Do they get extra credit?"
**Grade**: NO. Grade on learning objectives only.
**Feedback**: "Glad you enjoyed the AlgoCratic framing! Your work meets all learning objectives. Keep that enthusiasm for Sprint 2."

---

## 5. Common Student Struggles (Full Reference)

### Technical Struggles

**#1: Python environment issues**
**Signs**: "ModuleNotFoundError", "Python not found", path issues
**Solution**: Office hours, not class time. Point to resources. Don't debug for them.

**#2: Git workflow confusion**
**Signs**: Pushing to wrong branch, merge conflicts, lost work
**Solution**: Reinforce Sacred Flow. Show them how to check git status before committing.

**#3: Flask routing doesn't work**
**Signs**: 404 errors, routes not found
**Solution**: Check route decorators, check if app.run() is called. This is googl-able.

**#4: Database migrations failing**
**Signs**: "Table already exists" or schema mismatches
**Solution**: Drop database and rebuild (it's SQLite, this is safe in dev). Teach when NOT to drop (production).

### Process Struggles

**#5: Standups are fake (written all at end)**
**Signs**: All dates same, too polished, no blockers mentioned, unrealistic daily progress
**Solution**: Call it out. "These appear to have been written Day 10. Standups are process documentation. If you skip them during sprint, you miss the point."

**#6: Retrospectives are generic**
**Signs**: "Everything went well", "I'll try harder", no specifics
**Solution**: Show examples of good retros. Ask: "What specific day did you struggle? What exact task took longer than expected?"

**#7: Scope creep (adding features mid-sprint)**
**Signs**: Sprint goal says 8 stories, they attempted 15
**Solution**: "That's scope creep. In real projects, this causes missed deadlines. Next sprint, commit to capacity and stick to it."

### Communication Struggles

**#8: Documentation too technical for non-technical users**
**Signs**: User guide assumes coding knowledge, uses jargon
**Solution**: "Your mom test: Would your mom understand this? GRD-242 students in CSC-289 aren't coders. Write for them."

**#9: Design docs missing "why"**
**Signs**: "I used PostgreSQL" (okay, but why not MySQL? SQLite?)
**Solution**: "Decision without rationale is incomplete. Always explain trade-offs."

---

## 6. Technology Setup & Troubleshooting

### Required Tools (All Free)

**Core Development**:
- Python 3.8+ (python.org)
- Git (git-scm.com)
- VS Code or PyCharm Community (code.visualstudio.com)
- GitHub account (github.com/education for benefits)

**Design Tools**:
- Figma (figma.com - free for education)
- Draw.io (draw.io - web-based, no account needed)
- Miro (miro.com - optional, for dependency mapping)

**Deployment**:
- Render (render.com - free tier)
- OR Railway (railway.app - free tier with GitHub Education)

**Project Management**:
- GitHub Projects (built into GitHub)

### Setup Instructions for Students

**Week 1 Lab Session**: Walk through together
- Python installation (verify with `python --version`)
- Git installation (verify with `git --version`)
- VS Code installation and Python extension
- GitHub account creation
- First repository creation

**Common Installation Issues**:
- **Windows Python not in PATH**: Reinstall Python, check "Add to PATH" box
- **Mac command line tools**: Run `xcode-select --install`
- **Git credentials on Windows**: Use Git Credential Manager

---

## 7. The AlgoCratic Theme (Optional Use Guide)

### What It Is

Andrew Norris created a **satirical corporate dystopia framing** for some course content. It's in collapsible sections marked with 🎭.

Example:
> **Standard**: "Complete sprint planning to organize your work"
> **AlgoCratic**: "CLEARANCE LEVEL RED: The Algorithm requires productivity optimization protocols..."

### Should You Use It?

**Pros**:
- Some students find it engaging and fun
- Reduces anxiety through absurd humor
- Builds cohort community through shared jokes

**Cons**:
- Some students find it confusing
- SME instructors may not understand the satire
- Can distract from learning objectives

### Recommendation for New Instructors

**DON'T use it your first semester.** Focus on core content.

**IF you use it**:
- Explain it Day 1: "This is optional satire. You can skip all 🎭 sections and still earn an A."
- Grade based on learning objectives ONLY (not theme engagement)
- If students seem confused, stop referencing it

**Grading Rule**: AlgoCratic engagement earns ZERO extra credit. Ever.

---

## 8. Preparing Students for CSC-289

### What CSC-289 Requires

**From official course description**: "Complete a significant support project with minimal instructor assistance. Emphasis on written/oral communication, project definition, documentation, installation, testing, presentation, user training."

**Translation**: Students must execute autonomous project with GRD-242 (graphic design) student partner.

### How CTS-285 Prepares Them

**By end of CTS-285, students should**:
- Plan and execute sprints independently (practiced in Modules 3-8)
- Communicate with non-technical stakeholders (practiced via mock interviews, user guides)
- Document for multiple audiences (technical docs + user guides)
- Present professionally (sprint reviews + final presentation)
- Manage scope and risks (risk registers, retrospectives)
- Handle cross-functional collaboration (simulated, but practiced)

### Red Flags Student Isn't Ready for CSC-289

**Watch for**:
- Can't complete assignments without constant instructor help
- Never attends office hours (avoiding struggle, not asking for help)
- Process is consistently fake (standups written at end, no real planning)
- Can't articulate decisions (just follows tutorials blindly)
- Documentation is technical only (can't explain to non-coders)

**Intervention**: Be honest. "Based on your work this semester, I'm concerned you'll struggle in CSC-289. Here's what needs to improve..."

---

## 9. Quick Reference Checklists

### Week 1 Checklist
- [ ] Send welcome email
- [ ] Verify Canvas materials import correctly
- [ ] Prep SDLC Simulation Lab materials
- [ ] Set up office hours

### Before Each Sprint
- [ ] Review sprint assignment
- [ ] Prepare examples
- [ ] Block office hours for design reviews

### Grading Sprint Assignment
- [ ] Check GitHub Projects board (3 min)
- [ ] Scan standups (5 min)
- [ ] Review deliverables (12 min)
- [ ] Fill rubric and write feedback (5 min)
- [ ] Total: 25 min max per student

### End of Semester
- [ ] Grade final presentations
- [ ] Submit grades
- [ ] Collect student feedback for next iteration
- [ ] Archive best student projects as examples

---

## 10. Contact & Support

**If you get stuck teaching CTS-285**:
- Email: Andrew Norris (andrewnorris@ftcc.edu - or your contact)
- Office hours: [Your schedule]
- Instructional design support: Angela Westmoreland

**Remember**: You don't need to be perfect. Students learn from authentic teaching, not polished performance.

**Good luck! You've got this.**

— Andrew Norris

---

**INSTRUCTOR GUIDE END** | 60+ pages | Version 1.0 | January 2026
