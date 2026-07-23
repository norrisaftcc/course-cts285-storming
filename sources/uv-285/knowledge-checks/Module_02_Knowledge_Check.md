<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_02_Knowledge_Check.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 M2 KC (10 pts, graded)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 2 Knowledge Check: Requirements Gathering & Stakeholder Management

**Purpose**: Assess understanding of requirements types, user stories, stakeholder analysis, and interview techniques
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Requirements & Analysis Concepts (60%)

### Question 1
What is the difference between functional and non-functional requirements?

A) Functional requirements are important, non-functional requirements are optional
B) Functional requirements describe what the system does, non-functional requirements describe how well it does it
C) Functional requirements are for functions, non-functional requirements are for data
D) There is no real difference

**Correct Answer**: B
**Explanation**: Functional requirements define features: "Users can reset their password." Non-functional requirements define qualities: "Password reset must complete in under 2 seconds." Both matter. A system that has all features but is too slow, insecure, or unusable has failed. In industry, ignoring non-functional requirements causes expensive rework.

### Question 2
Which of these is a functional requirement for an online store?

A) The system must handle 10,000 concurrent users
B) Users must be able to add items to their shopping cart
C) The site must load in under 3 seconds
D) The system must be available 99.9% of the time

**Correct Answer**: B
**Explanation**: "Add items to cart" describes a specific feature—what the system does. The other options are non-functional requirements about performance, scalability, and reliability. Both types are critical, but functional requirements define the features users interact with directly.

### Question 3
A user story follows the format: "As a [role], I want [feature], so that [benefit]." In this format, what does the "so that" clause accomplish?

A) It makes the story longer
B) It explains the business value and why the feature matters
C) It describes technical implementation details
D) It assigns the story to a developer

**Correct Answer**: B
**Explanation**: The "so that" clause is the most important part—it explains the *why*. "As a customer, I want to save my cart, so that I can complete my purchase later" reveals the benefit. Without understanding why features matter, you might build the wrong solution. This clause prevents building features just because someone requested them.

### Question 4
Identify the ROLE component in this user story: "As a store manager, I want to view daily sales reports, so that I can track revenue trends."

A) store manager
B) view daily sales reports
C) track revenue trends
D) daily sales reports

**Correct Answer**: A
**Explanation**: The role is who benefits from the feature—in this case, "store manager." Understanding the role helps you design appropriately. A store manager needs different features than a warehouse worker or customer. Role-based design ensures you're solving the right problem for the right people.

### Question 5
Identify the FEATURE component in this user story: "As a student, I want to download my course materials, so that I can study offline."

A) student
B) download my course materials
C) study offline
D) course materials

**Correct Answer**: B
**Explanation**: The feature is what functionality you're building—"download my course materials." This is the actionable part that developers implement. Notice how it's specific and testable. You can verify whether students can download materials. Vague features like "better learning experience" are impossible to implement or test.

### Question 6
Identify the BENEFIT component in this user story: "As a teacher, I want to grade assignments online, so that I can provide faster feedback to students."

A) teacher
B) grade assignments online
C) provide faster feedback to students
D) assignments

**Correct Answer**: C
**Explanation**: The benefit explains why this feature creates value—"provide faster feedback to students." This helps prioritize work. Features with clear, valuable benefits get built first. Features where no one can articulate the benefit probably shouldn't be built at all. Always challenge: "What value does this create?"

### Question 7
You're gathering requirements and a stakeholder says "I want the system to be user-friendly." What's the best response?

A) Write it down as-is and move on
B) Ask specific questions like "What does user-friendly mean to you? Can you give examples?"
C) Tell them that's too vague and refuse to write it down
D) Assume you know what they mean

**Correct Answer**: B
**Explanation**: "User-friendly" means different things to different people. Ask for specifics: "Does that mean fewer clicks? Larger fonts? Better error messages?" Concrete examples lead to testable requirements. In professional work, vague requirements lead to disagreements later. "I said user-friendly!" "But we made it user-friendly!" Both are right and wrong because the term was never defined.

### Question 8
What is a stakeholder in a software project?

A) Only the people paying for the project
B) Anyone who is affected by or can affect the project's outcome
C) Only the development team
D) Only executive management

**Correct Answer**: B
**Explanation**: Stakeholders include users, customers, managers, developers, support staff—anyone with a stake in the outcome. A hospital system's stakeholders include doctors, nurses, patients, IT staff, administrators, and even insurance companies. Missing stakeholders means missing requirements. Professional analysts cast a wide net when identifying stakeholders.

### Question 9
Why is it important to prioritize requirements?

A) It's not important; all requirements should be built
B) Because time and budget are limited; you need to deliver highest value first
C) To make stakeholders argue about what matters
D) To reduce the project scope to nothing

**Correct Answer**: B
**Explanation**: You rarely have time to build everything. Prioritization ensures you build the most valuable features first. If you run out of time, at least you delivered the core functionality. In Agile, you might launch with 60% of planned features if that 60% delivers 90% of the value. Prioritization is about maximizing impact with limited resources.

---

## Stakeholder & Communication Concepts (40%)

### Question 10
You have three stakeholder groups with conflicting requirements. What's the most professional approach?

A) Build what you personally think is best
B) Ignore the smallest group
C) Facilitate a discussion to understand trade-offs and reach consensus
D) Build everything for everyone

**Correct Answer**: C
**Explanation**: Conflicts are normal—different stakeholders have different needs. Your job is to facilitate discussion, make trade-offs visible, and help the group reach informed decisions. "We can do A or B in this sprint, but not both. A helps sales, B helps support. Which creates more value right now?" This is the PM skill that separates juniors from professionals.

### Question 11
When interviewing stakeholders to gather requirements, what's an effective technique for getting detailed information?

A) Only ask yes/no questions
B) Ask open-ended questions like "Walk me through your typical workflow"
C) Tell them what you think they need
D) Avoid asking questions that might challenge them

**Correct Answer**: B
**Explanation**: Open-ended questions reveal details you didn't know to ask about. "Tell me about your day" uncovers pain points you'd never find with "Do you need feature X?" Professional requirements gathering is detective work—you're discovering problems, not just collecting feature requests. Listen more than you talk.

### Question 12
What's the purpose of validating requirements with stakeholders after you've documented them?

A) To waste time with unnecessary meetings
B) To confirm your understanding is correct before you start building
C) To show off your documentation skills
D) It's not necessary if you took good notes

**Correct Answer**: B
**Explanation**: Requirements validation prevents expensive mistakes. "Here's what I heard you need—did I understand correctly?" catches misunderstandings early. Fixing a misunderstood requirement in the design phase costs hours. Fixing it after you've built the wrong feature costs weeks. This loop—gather, document, validate—is fundamental to professional analysis.

### Question 13
Why do we classify stakeholders by their level of influence and interest in the project?

A) To decide who to ignore
B) To tailor communication and engagement strategies appropriately
C) To create organizational hierarchy
D) To limit who can provide input

**Correct Answer**: B
**Explanation**: High-influence, high-interest stakeholders need deep engagement. Low-influence, low-interest stakeholders need basic updates. This isn't about excluding people—it's about efficient communication. A CEO needs monthly summaries; daily team members need daily updates. Stakeholder mapping helps you communicate effectively without overwhelming people or yourself.

### Question 14
You discover that a stakeholder's requested feature would take 6 weeks but deliver minimal value. What should you do?

A) Build it anyway since they requested it
B) Refuse to build it without explanation
C) Present the cost-benefit analysis and recommend alternatives
D) Build it but complain about it

**Correct Answer**: C
**Explanation**: Professional analysts advise, not just execute. "This feature takes 6 weeks. We could achieve similar goals with this 3-day alternative. Here's the trade-off." You're the technical expert—help stakeholders make informed decisions. Sometimes they'll still want the expensive feature (and that's okay), but at least they decided with full information.

---

## Scoring Guide
- 90-100%: Excellent understanding of requirements gathering and stakeholder management
- 80-89%: Good grasp, minor gaps in user story format or stakeholder analysis
- 70-79%: Adequate foundation, review user story components and requirement types
- Below 70%: Revisit Module 2 materials, especially functional vs non-functional requirements

## Study Resources
- Week 3 Assignment: Writing User Stories
- Week 4 Activity: Stakeholder Mapping Exercise
- Planning Sheet: Requirements Gathering Template
- Canvas Reading: "The Art of Asking the Right Questions"
- Reference: User Story Format Examples
- Reference: Stakeholder Analysis Matrix
