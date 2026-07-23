<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_01_Knowledge_Check.md
  verdict: HARVEST
  target-26FA-slot: CTS-285 wk1 Dataman quiz (15 pts)
  ingest-date: 2026-07-23
  HARVEST: 173 lines, 13 real MC items with teaching explanations. Superseded by the Dataman document-analysis quiz per the points table — salvage the best generic SDLC items into it.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 1 Knowledge Check: SDLC Foundations & Agile Mindset

**Purpose**: Assess understanding of SDLC phases, Waterfall vs Agile methodologies, and systems thinking
**Format**: 13 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## SDLC & Methodology Concepts (60%)

### Question 1
What is the primary difference between Waterfall and Agile methodologies?

A) Waterfall uses software tools, Agile doesn't
B) Waterfall completes each phase before moving to the next, Agile works in iterative cycles
C) Waterfall is faster than Agile
D) Waterfall is only for web development, Agile is for mobile apps

**Correct Answer**: B
**Explanation**: Waterfall is sequential—you finish requirements, then design, then implementation, like climbing down stairs. Agile works in short cycles (sprints), delivering working software incrementally. Neither is inherently faster or limited to specific platforms. The core difference is sequential vs iterative approach to development.

### Question 2
You're working on a project where client requirements are unclear and likely to change. Which methodology would be more appropriate?

A) Waterfall, because it forces clients to commit early
B) Agile, because it accommodates changing requirements through iterations
C) Neither, you should wait until requirements are clear
D) Waterfall, because changes are easier to manage

**Correct Answer**: B
**Explanation**: Agile was designed for exactly this scenario. In industry, requirements change—markets shift, users provide feedback, technology evolves. Agile embraces change through short iterations and frequent feedback. Waterfall assumes stable requirements, which is rarely realistic. This is why most modern teams use Agile approaches.

### Question 3
Which SDLC phase involves understanding the problem and determining if a technical solution is feasible?

A) Implementation
B) Design
C) Analysis
D) Testing

**Correct Answer**: C
**Explanation**: Analysis (or Requirements Analysis) is where you understand what needs to be solved before deciding how to solve it. You interview stakeholders, document requirements, assess feasibility. Jumping to design without proper analysis is like building a house without blueprints—you might build the wrong thing efficiently.

### Question 4
In the SDLC, what happens during the Design phase?

A) Writing code and building the system
B) Creating blueprints for how the system will work (architecture, data models, wireframes)
C) Testing the final product
D) Gathering requirements from users

**Correct Answer**: B
**Explanation**: Design is where you plan the solution architecture. You create UML diagrams, database schemas, wireframes, and system architecture before writing code. This is the blueprint phase. In industry, good design saves time—fixing design issues in code is 10x more expensive than fixing them on paper.

### Question 5
What does "systems thinking" mean in the context of systems analysis?

A) Only focusing on computer systems
B) Understanding how components interact and affect each other in the larger context
C) Thinking about purchasing new computer systems
D) Only considering technical requirements

**Correct Answer**: B
**Explanation**: Systems thinking means seeing the big picture. A change in the login system affects the database, user experience, security, and support team. Good analysts think holistically—how does this piece fit into the larger organization, workflow, and technical ecosystem? Narrow thinking leads to solutions that work in isolation but fail in reality.

### Question 6
You're analyzing a retail system. A stakeholder says "I want faster checkout." What's the most important next step?

A) Start designing a new checkout interface immediately
B) Ask clarifying questions to understand what "faster" means and why it matters
C) Estimate how long it will take to build
D) Choose which programming language to use

**Correct Answer**: B
**Explanation**: Never assume you understand requirements. "Faster" might mean reducing clicks, processing transactions quicker, or shorter physical lines. Understanding the *why* reveals the real problem. Maybe customers aren't slow—maybe the system crashes during peak hours. Good analysis means asking "why" until you understand the root problem.

### Question 7
In Agile development, what is an "iteration" or "sprint"?

A) A complete project from start to finish
B) A fixed time period (usually 1-4 weeks) focused on delivering working software
C) The time between meetings
D) A single feature implementation

**Correct Answer**: B
**Explanation**: Sprints are time-boxed work cycles—typically 2 weeks in industry. Each sprint delivers potentially shippable software. You plan, build, test, and review within that cycle. This rhythm creates predictability and allows for course correction. It's like checking your GPS every few miles instead of driving cross-country without looking.

### Question 8
What is a "minimum viable product" (MVP) in Agile thinking?

A) The cheapest possible version of software
B) The smallest version that delivers value and allows for learning
C) A product that barely works
D) The first prototype that gets thrown away

**Correct Answer**: B
**Explanation**: MVP isn't about building cheap or broken products—it's about learning fast. Build the smallest version that solves the core problem, get it in users' hands, and learn from real feedback. Instagram started as a simple photo filter app, not a full social platform. This approach prevents building features nobody wants.

### Question 9
Which of these best describes the Testing phase in the SDLC?

A) Only checking for spelling errors in code
B) Verifying the system works as designed and meets requirements
C) Having users try to break the system
D) Something you skip if you're confident in your code

**Correct Answer**: B
**Explanation**: Testing verifies the system meets both functional requirements (does it work?) and non-functional requirements (is it fast, secure, usable?). This includes unit tests, integration tests, and user acceptance testing. In professional work, untested code is unfinished code. Testing isn't optional—it's where you prove your solution actually solves the problem.

---

## Agile & Project Management Concepts (40%)

### Question 10
What is the purpose of a daily standup meeting in Agile?

A) To have the project manager check if people are working
B) To quickly share progress, plans, and blockers with the team
C) To assign new tasks to team members
D) To review all code written the previous day

**Correct Answer**: B
**Explanation**: Standups are brief (15 minutes) coordination meetings. Each person shares: what they did yesterday, what they're doing today, and any blockers. This keeps everyone aligned without lengthy meetings. It's not a status report for management—it's peer-to-peer coordination. The standing format keeps it short and focused.

### Question 11
You're planning your first sprint. What should determine how much work you commit to?

A) How much work your manager wants done
B) Your team's realistic capacity based on past performance (velocity)
C) The maximum amount that could possibly be done
D) Whatever will impress stakeholders

**Correct Answer**: B
**Explanation**: Professional teams use velocity—a measure of how much work they completed in previous sprints. If you finished 20 story points last sprint, committing to 40 this sprint is setting yourself up for failure. Sustainable pace and realistic commitments build trust. Overpromising and underdelivering once destroys credibility for months.

### Question 12
In CTS-285, why are you learning PM practices alongside systems analysis?

A) Because the course has extra time to fill
B) Because professional analysts need to plan, communicate, and deliver projects independently
C) To prepare you to become a project manager instead of a developer
D) Because technical skills aren't important

**Correct Answer**: B
**Explanation**: Modern IT professionals wear multiple hats. You'll need to scope projects, estimate work, communicate with stakeholders, and deliver on time. This course prepares you for CSC-289 (capstone), where you'll work with minimal instructor guidance. These PM skills make you employable and effective, not just technically competent.

### Question 13
What's the main benefit of iterative development over building everything at once?

A) Iterative development is always faster
B) You get feedback early and can adjust before investing too much in the wrong direction
C) It requires less planning
D) It means you can skip documentation

**CorrectAnswer**: B
**Explanation**: Iterative development provides learning loops. Build a basic version, show it to users, learn what works and what doesn't, then adjust. This prevents spending six months building something nobody wants. In industry, the cost of getting feedback early is tiny compared to the cost of building the wrong product. Fail fast, learn cheap, adjust often.

---

## Scoring Guide
- 90-100%: Excellent understanding of SDLC fundamentals and Agile thinking
- 80-89%: Good grasp, minor conceptual gaps
- 70-79%: Adequate foundation, review Agile principles and SDLC phases
- Below 70%: Revisit Module 1 materials, especially methodology differences

## Study Resources
- Week 1 Assignment: SDLC Phase Identification
- Week 2 Activity: Agile vs Waterfall Scenarios
- Planning Sheet: Project Lifecycle Template
- Canvas Reading: "Why Agile Matters in Modern Development"
- Reference: Systems Analysis Glossary
