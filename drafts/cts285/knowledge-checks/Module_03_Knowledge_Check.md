<!--
  ADAPTATION PROVENANCE — 26FA Dataman regime
  source: sources/uv-285/knowledge-checks/Module_03_Knowledge_Check.md
  adapted: 2026-07-24
  changes: project examples re-pointed to the Dataman modernization exemplar
           (drafts/cts285/shared-dataman-artifacts/); points normalized per
           ADR-002 (10 pts, graded, not bonus); naming per ADR-004 (Dataman
           only). No correct answer was changed — see changelog.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 3 Knowledge Check: System Design & Architecture

**Purpose**: Assess understanding of UML diagrams, data modeling, wireframing, prototyping, and design tools — applied to the Dataman modernization spine (Sprint 1 Design, Weeks 5–6).
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Points**: **10 pts (1.3% of 750), graded**
**Time Estimate**: 15–20 minutes

---

## Design & Modeling Concepts (60% of questions)

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
**Explanation**: Sequence diagrams show the flow of messages between objects over time — perfect for mapping out "learner submits an answer, system checks it against the Problem's correct_answer, system logs the Attempt, system returns a right/wrong signal." Class diagrams show structure, use case diagrams show functionality, ERDs show data relationships. Pick the right tool for the job.

### Question 3
You're building the data model for the Dataman modernization. What tool would you use to model the relationships between Learners, MemoryBankSets, and Problems?

A) Wireframe
B) Entity Relationship Diagram (ERD)
C) Sequence diagram
D) Gantt chart

**Correct Answer**: B
**Explanation**: ERDs map data entities and their relationships: a Curator creates a MemoryBankSet (up to 10 Problems) and assigns it to a Learner — a relationship you can't see in code until you've modeled it on paper (or in Draw.io) first. ERDs help you design proper database structure before writing SQL. Good data modeling prevents performance problems and complicated queries later. Your database structure affects everything built on top of it.

### Question 4
What is the primary purpose of a wireframe in system design?

A) To show the final visual design with colors and fonts
B) To map out page layout, navigation, and content structure without visual details
C) To write the actual code for the interface
D) To create marketing materials

**Correct Answer**: B
**Explanation**: Wireframes are low-fidelity sketches that focus on layout and functionality, not aesthetics. "Where does the answer-entry field go on the Answer Checker screen? How many taps to load a Memory Bank set?" These questions matter more than colors at the wireframe stage. In professional work, wireframes are cheap to change — you iterate fast before investing in high-fidelity designs or code.

### Question 5
Why would you create a prototype before building the full system?

A) Prototypes aren't useful; you should start coding immediately
B) To validate assumptions, gather user feedback, and reduce risk of building the wrong thing
C) To show that you're working even if you're not
D) To delay the actual development work

**Correct Answer**: B
**Explanation**: Prototypes are learning tools. Build a clickable mockup of the Curator console, show it to a stakeholder, discover problems early. "We assumed a parent would want a leaderboard, but the stakeholder interview showed they actually wanted a private review screen." This discovery in the prototype stage costs hours; the same discovery after full development costs weeks. Prototypes de-risk projects.

### Question 6
In modern systems analysis, what does "CASE tools" refer to?

A) Legal software for lawyers
B) Computer-Aided Software Engineering tools that help with design, modeling, and documentation
C) Physical storage boxes for documents
D) Outdated tools that are no longer used

**Correct Answer**: B
**Explanation**: CASE tools are software that helps you analyze and design systems — tools like Draw.io for diagrams, Figma for prototypes, or database modeling tools. While the term sounds dated, the concept is modern: use tools to think better, design smarter, and communicate clearly. In this course, we focus on modern tools (Figma, Draw.io) over outdated proprietary CASE software.

### Question 7
What's the main advantage of using a tool like Figma or Draw.io over pen and paper for system design?

A) They're more expensive, so they must be better
B) They enable easy sharing, collaboration, iteration, and version control
C) Pen and paper are always superior
D) They automatically write code for you

**Correct Answer**: B
**Explanation**: Digital tools let you share a link, get feedback from remote stakeholders, maintain version history, and iterate without starting over. You can duplicate a Dataman wireframe and try a variation on the Memory Bank screen without losing the original. Try doing that with paper. Professional work is collaborative and iterative — digital tools support that workflow. They don't replace thinking, but they amplify collaboration.

### Question 8
You're designing the Memory Bank set-builder screen for Dataman. Your wireframe shows where every control goes, but a stakeholder says "I can't visualize this." What should you create next?

A) Start coding immediately to show them working software
B) Create a higher-fidelity prototype or clickable mockup
C) Insist they understand wireframes
D) Write more detailed documentation

**Correct Answer**: B
**Explanation**: Not everyone reads wireframes fluently. A clickable prototype (even with fake problem data) helps a stakeholder — a parent, a teacher — experience the flow of loading and assigning a set. Tools like Figma let you create interactive prototypes in hours. Getting buy-in early prevents "that's not what I wanted" after you've built it. Meet stakeholders where they are — communicate in ways they understand.

### Question 9
In an Entity Relationship Diagram, what does a "one-to-many" relationship mean?

A) One entity can relate to multiple instances of another entity
B) Only one connection is allowed between entities
C) Many entities connect to many others
D) The relationship is optional

**Correct Answer**: A
**Explanation**: In the Dataman reference ERD, one Curator creates many MemoryBankSets, and one Learner has many Sessions. This is one-to-many. Understanding these relationships is crucial for database design. Get it wrong and you'll have data duplication, integrity problems, or impossible queries. Good ERD design is the foundation of every database-driven system.

---

## Tools & Professional Practice Concepts (40% of questions)

### Question 10
You're choosing between multiple design tools for the Dataman project. What factors should guide your decision?

A) Always choose the most expensive tool
B) Consider team familiarity, collaboration features, project needs, and cost
C) Use whatever tool you learned first
D) Let someone else decide

**Correct Answer**: B
**Explanation**: Tool selection is a professional decision. Free tools like Draw.io might be perfect for a quick ERD sketch. Figma shines for UI prototypes with team collaboration. Consider what you're building, who needs to see it, and what you already know. In industry, the right tool depends on context, not just features. Justify your choices.

### Question 11
What's the purpose of documenting your design decisions?

A) To make the project seem more complex
B) To help future developers (including future you) understand why choices were made
C) To create busy work
D) Documentation is unnecessary if your design is good

**Correct Answer**: B
**Explanation**: Six months from now, you'll forget why you modeled Attempt as its own entity instead of collapsing it into Session. Documentation preserves the reasoning. "We added a separate Attempt entity because the teacher stakeholder needed to distinguish first-try from second-try correctness." This helps future developers understand constraints and avoid re-debating settled questions. Professional work is maintainable work.

### Question 12
You're creating the data model for Dataman. What's more important: getting it perfect on the first try, or starting simple and iterating?

A) Perfect first try is essential
B) Start simple, get feedback, iterate based on real needs
C) Skip data modeling and start coding
D) Copy someone else's data model

**Correct Answer**: B
**Explanation**: No data model survives first contact with reality unchanged. Start with the core entities (Learner, Problem, Session), get feedback against the stakeholder transcripts, discover edge cases like division-with-remainder or the "playing teacher" authoring flow, and adapt. Spending weeks perfecting a data model before validation is waste — requirements will change. Professional designers balance upfront thinking with iterative refinement. Plan enough, then learn by doing.

### Question 13
When should you create design documentation?

A) Only at the very end of the project
B) Never, it's a waste of time
C) Throughout the design process as decisions are made
D) Only if your manager demands it

**Correct Answer**: C
**Explanation**: Document as you go. Decisions are fresh, reasoning is clear. Trying to recreate "why did we model MemoryBankSet as its own entity?" six months later is guesswork. Modern documentation can be simple — annotations on diagrams, decision logs, README files. The goal is clarity for your future self and team, not impressing anyone with volume.

### Question 14
What's the relationship between good system design and good code?

A) They're unrelated; design is for analysts, code is for developers
B) Good design makes writing good code easier; poor design makes even simple code complicated
C) You can skip design if you're a good coder
D) Design is only for large projects

**Correct Answer**: B
**Explanation**: Design is thinking before doing. A well-designed Dataman schema (Learner, Curator, MemoryBankSet, Problem, Attempt, Session, Score, Game) makes queries simple — "show me every Attempt this Learner made on this Problem" is a straightforward join. Poor design creates technical debt — you fight the structure instead of solving problems. Even solo projects benefit from design thinking. Professional developers know that time spent designing saves multiples in coding.

### Question 15
You're presenting your Dataman system design to a non-technical stakeholder (say, the parent or teacher persona from your interviews). What's the best approach?

A) Use as much technical jargon as possible to sound smart
B) Focus on how the design solves their problems, using plain language and visuals
C) Skip the presentation and just send them a UML diagram
D) Tell them they won't understand anyway

**Correct Answer**: B
**Explanation**: Stakeholders care about outcomes, not implementation. "This design lets you load a set of ten problems for your child in a few taps and check their results later" matters more than "We're using a normalized schema with a many-to-many Curator–Learner join." Use wireframes and prototypes — show, don't just tell. Translating technical decisions into stakeholder value is a career-critical skill.

---

## Scoring Guide
- 90–100%: Excellent understanding of system design principles and tools
- 80–89%: Good grasp, minor gaps in UML types or data modeling
- 70–79%: Adequate foundation, review diagram types and their uses
- Below 70%: Revisit Module 3 materials, especially ERDs and wireframing

## Study Resources
- Week 5 Assignment: Sprint 1 System Design (ERDs and UML diagrams for Dataman)
- Week 6 Assignment: Sprint 1 Retrospective & Risk Register
- Reference: `Dataman_Reference_ERD.md` (shared class artifact — known-correct data model)
- Reference: `Dataman_Seeded_Backlog.md` (epics/stories the design work traces to)
- Canvas Reading: "Choosing the Right Diagram for the Job"
- Tool Tutorial: Draw.io Basics
- Tool Tutorial: Figma Prototyping
- Reference: UML Diagram Types Quick Guide
