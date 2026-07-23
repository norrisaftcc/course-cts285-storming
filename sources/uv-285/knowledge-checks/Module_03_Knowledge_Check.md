<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_03_Knowledge_Check.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 M3 KC (10 pts, graded)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 3 Knowledge Check: System Design & Architecture

**Purpose**: Assess understanding of UML diagrams, data modeling, wireframing, prototyping, and design tools
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Design & Modeling Concepts (60%)

### Question 1
What is the purpose of creating UML diagrams during system design?

A) To make the documentation look professional
B) To visually communicate system structure and behavior before writing code
C) To satisfy academic requirements
D) To replace writing code entirely

**Correct Answer**: B
**Explanation**: UML diagrams are blueprints. They help teams visualize relationships, workflows, and architecture before committing to code. Finding design problems in a diagram takes minutes; finding them in code takes days. In industry, good diagrams prevent miscommunication and costly rewrites. They're thinking tools, not just documentation.

### Question 2
Which UML diagram type is best for showing the sequence of interactions between system components over time?

A) Class diagram
B) Use case diagram
C) Sequence diagram
D) Entity relationship diagram

**Correct Answer**: C
**Explanation**: Sequence diagrams show the flow of messages between objects over time—perfect for mapping out "user clicks login, system validates credentials, database returns user data." Class diagrams show structure, use case diagrams show functionality, ERDs show data relationships. Pick the right tool for the job.

### Question 3
You're designing a database for a university system. What tool would you use to model the relationships between Students, Courses, and Enrollments?

A) Wireframe
B) Entity Relationship Diagram (ERD)
C) Sequence diagram
D) Gantt chart

**Correct Answer**: B
**Explanation**: ERDs map data entities and their relationships: Students enroll in Courses (many-to-many relationship requiring an Enrollments table). ERDs help you design proper database structure before writing SQL. Good data modeling prevents performance problems and complicated queries later. Your database structure affects everything built on top of it.

### Question 4
What is the primary purpose of a wireframe in system design?

A) To show the final visual design with colors and fonts
B) To map out page layout, navigation, and content structure without visual details
C) To write the actual code for the interface
D) To create marketing materials

**Correct Answer**: B
**Explanation**: Wireframes are low-fidelity sketches that focus on layout and functionality, not aesthetics. "Where does the login button go? How many clicks to checkout?" These questions matter more than colors at the wireframe stage. In professional work, wireframes are cheap to change—you iterate fast before investing in high-fidelity designs or code.

### Question 5
Why would you create a prototype before building the full system?

A) Prototypes aren't useful; you should start coding immediately
B) To validate assumptions, gather user feedback, and reduce risk of building the wrong thing
C) To show that you're working even if you're not
D) To delay the actual development work

**Correct Answer**: B
**Explanation**: Prototypes are learning tools. Build a clickable mockup, show it to users, discover problems early. "We thought users would want feature X, but testing showed they actually need Y." This discovery in the prototype stage costs hours; the same discovery after full development costs months. Prototypes de-risk projects.

### Question 6
In modern systems analysis, what does "CASE tools" refer to?

A) Legal software for lawyers
B) Computer-Aided Software Engineering tools that help with design, modeling, and documentation
C) Physical storage boxes for documents
D) Outdated tools that are no longer used

**Correct Answer**: B
**Explanation**: CASE tools are software that helps you analyze and design systems—tools like Draw.io for diagrams, Figma for prototypes, or database modeling tools. While the term sounds dated, the concept is modern: use tools to think better, design smarter, and communicate clearly. In this course, we focus on modern tools (Figma, Draw.io) over outdated proprietary CASE software.

### Question 7
What's the main advantage of using a tool like Figma or Draw.io over pen and paper for system design?

A) They're more expensive, so they must be better
B) They enable easy sharing, collaboration, iteration, and version control
C) Pen and paper are always superior
D) They automatically write code for you

**Correct Answer**: B
**Explanation**: Digital tools let you share a link, get feedback from remote stakeholders, maintain version history, and iterate without starting over. You can duplicate a design and try variations. Try doing that with paper. Professional work is collaborative and iterative—digital tools support that workflow. They don't replace thinking, but they amplify collaboration.

### Question 8
You're designing a new feature. Your wireframe shows where every button goes, but your manager says "I can't visualize this." What should you create next?

A) Start coding immediately to show them working software
B) Create a higher-fidelity prototype or clickable mockup
C) Insist they understand wireframes
D) Write more detailed documentation

**Correct Answer**: B
**Explanation**: Not everyone reads wireframes fluently. A clickable prototype (even with fake data) helps stakeholders experience the flow. Tools like Figma let you create interactive prototypes in hours. Getting buy-in early prevents "that's not what I wanted" after you've built it. Meet stakeholders where they are—communicate in ways they understand.

### Question 9
In an Entity Relationship Diagram, what does a "one-to-many" relationship mean?

A) One entity can relate to multiple instances of another entity
B) Only one connection is allowed between entities
C) Many entities connect to many others
D) The relationship is optional

**Correct Answer**: A
**Explanation**: One teacher has many students; one customer has many orders. This is one-to-many. Understanding these relationships is crucial for database design. Get it wrong and you'll have data duplication, integrity problems, or impossible queries. Good ERD design is the foundation of every database-driven system.

---

## Tools & Professional Practice Concepts (40%)

### Question 10
You're choosing between multiple design tools for your project. What factors should guide your decision?

A) Always choose the most expensive tool
B) Consider team familiarity, collaboration features, project needs, and cost
C) Use whatever tool you learned first
D) Let someone else decide

**Correct Answer**: B
**Explanation**: Tool selection is a professional decision. Free tools like Draw.io might be perfect for simple diagrams. Figma shines for UI prototypes with team collaboration. Consider what you're building, who needs to see it, and what your team knows. In industry, the right tool depends on context, not just features. Justify your choices.

### Question 11
What's the purpose of documenting your design decisions?

A) To make the project seem more complex
B) To help future developers (including future you) understand why choices were made
C) To create busy work
D) Documentation is unnecessary if your design is good

**Correct Answer**: B
**Explanation**: Six months from now, you'll forget why you chose structure A over structure B. Documentation preserves the reasoning. "We chose NoSQL because requirements emphasized read speed over complex joins." This helps future developers understand constraints and avoid re-debating settled questions. Professional work is maintainable work.

### Question 12
You're creating a data model for a system. What's more important: getting it perfect on the first try, or starting simple and iterating?

A) Perfect first try is essential
B) Start simple, get feedback, iterate based on real needs
C) Skip data modeling and start coding
D) Copy someone else's data model

**Correct Answer**: B
**Explanation**: No data model survives first contact with reality unchanged. Start with core entities, get feedback, discover edge cases, adapt. This is iterative design. Spending weeks perfecting a data model before validation is waste—requirements will change. Professional designers balance upfront thinking with iterative refinement. Plan enough, then learn by doing.

### Question 13
When should you create design documentation?

A) Only at the very end of the project
B) Never, it's a waste of time
C) Throughout the design process as decisions are made
D) Only if your manager demands it

**Correct Answer**: C
**Explanation**: Document as you go. Decisions are fresh, reasoning is clear. Trying to recreate "why did we do this?" six months later is guesswork. Modern documentation can be simple—annotations on diagrams, decision logs, README files. The goal is clarity for your future self and team, not impressing anyone with volume.

### Question 14
What's the relationship between good system design and good code?

A) They're unrelated; design is for analysts, code is for developers
B) Good design makes writing good code easier; poor design makes even simple code complicated
C) You can skip design if you're a good coder
D) Design is only for large projects

**Correct Answer**: B
**Explanation**: Design is thinking before doing. A well-designed database schema makes queries simple. A well-designed architecture makes adding features easy. Poor design creates technical debt—you fight the structure instead of solving problems. Even solo projects benefit from design thinking. Professional developers know that time spent designing saves multiples in coding.

### Question 15
You're presenting your system design to non-technical stakeholders. What's the best approach?

A) Use as much technical jargon as possible to sound smart
B) Focus on how the design solves their problems, using plain language and visuals
C) Skip the presentation and just send them a UML diagram
D) Tell them they won't understand anyway

**Correct Answer**: B
**Explanation**: Stakeholders care about outcomes, not implementation. "This design lets you generate reports in one click instead of five" matters more than "We're using a normalized database with indexed queries." Use wireframes and prototypes—show, don't just tell. Translating technical decisions into business value is a career-critical skill.

---

## Scoring Guide
- 90-100%: Excellent understanding of system design principles and tools
- 80-89%: Good grasp, minor gaps in UML types or data modeling
- 70-79%: Adequate foundation, review diagram types and their uses
- Below 70%: Revisit Module 3 materials, especially ERDs and wireframing

## Study Resources
- Week 5 Assignment: Creating ERDs and UML Diagrams
- Week 6 Activity: Wireframe to Prototype Exercise
- Planning Sheet: Design Documentation Template
- Canvas Reading: "Choosing the Right Diagram for the Job"
- Tool Tutorial: Draw.io Basics
- Tool Tutorial: Figma Prototyping
- Reference: UML Diagram Types Quick Guide
