<!--
  ADAPTATION PROVENANCE — 26FA Dataman regime
  source: sources/uv-285/knowledge-checks/Module_02_Knowledge_Check.md
  adapted: 2026-07-24
  changes: project examples re-pointed to the Dataman modernization exemplar
           (drafts/cts285/shared-dataman-artifacts/ — the three stakeholder
           transcripts, reference ERD, seeded backlog); points normalized per
           ADR-002 (10 pts, graded, not bonus); naming per ADR-004 (Dataman
           only). No correct answer was changed — see changelog. Verification
           pass (2026-07-24): corrected a Study Resources line that
           misdescribed Dataman_Seeded_Backlog.md as containing MoSCoW
           classification answers — the seeded backlog leaves Priority
           unassigned by design; classification is the student's graded
           exercise, and the instructor's intended answer lives only in the
           instructor-only Grading_Key.md, which is not distributed to
           students.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Module 2 Knowledge Check: Requirements Gathering & Stakeholder Management

**Purpose**: Assess understanding of requirements types, user stories, stakeholder analysis, and prioritization — applied to the Dataman modernization spine (Stakeholder Analysis & Interview Plan, Week 3; User Stories & Product Backlog, Week 4).
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Points**: **10 pts (1.3% of 750), graded**
**Time Estimate**: 15-20 minutes

---

## Requirements & Analysis Concepts (60% of questions)

### Question 1
What is the difference between functional and non-functional requirements?

A) Functional requirements are important, non-functional requirements are optional
B) Functional requirements describe what the system does, non-functional requirements describe how well it does it
C) Functional requirements are for functions, non-functional requirements are for data
D) There is no real difference

**Correct Answer**: B
**Explanation**: Functional requirements define features: "Learners can load a memory bank set of up to ten problems." Non-functional requirements define qualities: "The Answer Checker must return a right/wrong result in under 200 milliseconds." Both matter. A Dataman build that has every feature but is too slow, insecure, or unusable has failed. In industry, ignoring non-functional requirements causes expensive rework.

### Question 2
Which of these is a functional requirement for the Dataman modernization?

A) The system must support a full classroom of 24 learners without slowing down
B) Learners must be able to load a memory bank set of up to ten problems
C) The Answer Checker must respond in under 200 milliseconds
D) The system must be available 99.9% of the time

**Correct Answer**: B
**Explanation**: "Load a memory bank set" describes a specific feature — what the system does. The other options are non-functional requirements about scale, performance, and reliability, drawn straight from the teacher's 24-student classroom and the collector's fidelity concerns. Both types are critical, but functional requirements define the features users interact with directly.

### Question 3
A user story follows the format: "As a [role], I want [feature], so that [benefit]." Consider: "As a parent, I want to load a memory bank set of my child's missed facts, so that he practices only what he's struggling with." What does the "so that" clause accomplish?

A) It makes the story longer
B) It explains the business value and why the feature matters
C) It describes technical implementation details
D) It assigns the story to a developer

**Correct Answer**: B
**Explanation**: The "so that" clause is the most important part — it explains the *why*. Here it reveals the benefit: practicing only what he's struggling with, not everything. Without understanding why a feature matters, you might build the wrong solution — a full curriculum drill instead of a targeted one. This clause prevents building features just because someone requested them.

### Question 4
Identify the ROLE component in this user story: "As a teacher, I want to see first-try versus second-try results for my class, so that I can tell which facts kids truly know versus guessed."

A) teacher
B) see first-try versus second-try results for my class
C) tell which facts kids truly know versus guessed
D) first-try versus second-try results

**Correct Answer**: A
**Explanation**: The role is who benefits from the feature — in this case, "teacher." Understanding the role helps you design appropriately. A classroom teacher managing 24 learners needs different features than a parent supervising one child at home. Role-based design ensures you're solving the right problem for the right people.

### Question 5
Identify the FEATURE component in this user story: "As a parent, I want to load a memory bank set of up to ten problems, so that my child practices only the facts he keeps missing."

A) parent
B) load a memory bank set of up to ten problems
C) practices only the facts he keeps missing
D) memory bank set

**Correct Answer**: B
**Explanation**: The feature is what functionality you're building — "load a memory bank set of up to ten problems." This is the actionable part that developers implement. Notice how it's specific and testable: you can verify whether a parent can load exactly that. A vague feature like "make practice more targeted" is impossible to implement or test.

### Question 6
Identify the BENEFIT component in this user story: "As a teacher, I want to see attempt-level detail for each problem, so that I can tell the difference between a learner who knows a fact and one who guessed it."

A) teacher
B) see attempt-level detail for each problem
C) tell the difference between a learner who knows a fact and one who guessed it
D) attempt-level detail

**Correct Answer**: C
**Explanation**: The benefit explains why this feature creates value — telling apart "knows it" from "guessed it." This helps prioritize work. Features with clear, valuable benefits get built first; features where no one can articulate the benefit probably shouldn't be built at all. Always challenge: "What value does this create?"

### Question 7
A stakeholder on the Dataman project says: "Just make it safe, and make it good — like the old one was." What's the best response?

A) Write it down as-is and move on
B) Ask specific questions like "What does safe and good mean to you? Can you give examples?"
C) Tell them that's too vague and refuse to write it down
D) Assume you know what they mean

**Correct Answer**: B
**Explanation**: "Safe" and "good" mean different things to different people. Ask for specifics — in this case, the same stakeholder had already given concrete examples elsewhere in the interview (never show a wrong answer as right; two tries then reveal; a positive-only reward; auto-stop when the child wanders off). A vague line like "safe and good" isn't a requirement until it's decomposed into things you can actually build and test.

### Question 8
What is a stakeholder in a software project like the Dataman modernization?

A) Only the people paying for the project
B) Anyone who is affected by or can affect the project's outcome
C) Only the development team
D) Only executive management

**Correct Answer**: B
**Explanation**: Stakeholders include users, buyers, curators, and even secondary audiences — anyone with a stake in the outcome. The Dataman project's stakeholders include the learner, the at-home parent, the classroom teacher, and a vintage-collector advisor whose fidelity concerns turned out to be the best single source for the data model. Missing a stakeholder means missing requirements. Professional analysts cast a wide net when identifying stakeholders.

### Question 9
Why is it important to prioritize requirements?

A) It's not important; all requirements should be built
B) Because time and budget are limited; you need to deliver highest value first
C) To make stakeholders argue about what matters
D) To reduce the project scope to nothing

**Correct Answer**: B
**Explanation**: You rarely have time to build everything. MoSCoW prioritization (Must have, Should have, Could have, Won't have this time) makes the call concrete: on the Dataman backlog, "load a memory bank set" is a Must-Have because two stakeholders asked for it independently, while a multiplayer game like Wipe Out is a Won't-Have-this-semester. If you run out of time, at least you delivered the core loop. Prioritization is about maximizing impact with limited resources.

---

## Stakeholder & Communication Concepts (40% of questions)

### Question 10
Two Dataman stakeholders disagree: the parent wants a public class leaderboard ranking every child's scores; the teacher refuses to put up any public ranking in her room. What's the most professional approach?

A) Build what you personally think is best
B) Ignore the smallest group
C) Facilitate a discussion to understand trade-offs and reach consensus
D) Build everything for everyone

**Correct Answer**: C
**Explanation**: Conflicts like this are normal — different stakeholders want different things for different reasons. Your job is to facilitate discussion, make the trade-offs visible, and help the group reach an informed decision rather than silently picking a side or averaging the two requests into something nobody asked for. "A leaderboard helps the parent's competitive kid stay motivated, but it also makes the struggling kids in the teacher's room stop trying. Here's the tension — which value matters more for this product?" This is the analyst skill that separates juniors from professionals.

### Question 11
When interviewing stakeholders on the Dataman project, what's an effective technique for getting detailed information?

A) Only ask yes/no questions
B) Ask open-ended questions like "Walk me through how math practice works at home right now"
C) Tell them what you think they need
D) Avoid asking questions that might challenge them

**Correct Answer**: B
**Explanation**: Open-ended questions reveal details you didn't know to ask about. "Walk me through your day" uncovers pain points you'd never find with "Do you need a memory bank feature?" Professional requirements gathering is detective work — you're discovering problems, not just collecting feature requests. Listen more than you talk.

### Question 12
What's the purpose of validating requirements with stakeholders after you've documented them?

A) To waste time with unnecessary meetings
B) To confirm your understanding is correct before you start building
C) To show off your documentation skills
D) It's not necessary if you took good notes

**Correct Answer**: B
**Explanation**: Requirements validation prevents expensive mistakes. "Here's what I heard you need for the memory bank set — did I understand correctly?" catches misunderstandings before they become code. Fixing a misunderstood requirement during design costs hours. Fixing it after you've built the wrong feature costs weeks. This loop — gather, document, validate — is fundamental to professional analysis.

### Question 13
Why do we classify stakeholders by their level of influence and interest in the project?

A) To decide who to ignore
B) To tailor communication and engagement strategies appropriately
C) To create organizational hierarchy
D) To limit who can provide input

**Correct Answer**: B
**Explanation**: High-influence, high-interest stakeholders need deep engagement — the classroom teacher, who will decide whether the whole thing gets piloted, needs to be consulted on scope, not just informed after the fact. Lower-influence stakeholders, like a secondary nostalgic-collector audience, need lighter-touch updates. This isn't about excluding people — it's about efficient communication. Stakeholder mapping helps you communicate effectively without overwhelming people or yourself.

### Question 14
A stakeholder on the Dataman project asks for pixel-faithful reproduction of the original device's low-battery flicker and exact score-based light-show patterns — an estimated six weeks of work with minimal value to the primary learner audience. What should you do?

A) Build it anyway since they requested it
B) Refuse to build it without explanation
C) Present the cost-benefit analysis and recommend alternatives
D) Build it but complain about it

**Correct Answer**: C
**Explanation**: Professional analysts advise, not just execute. "Reproducing the exact battery-flicker and light-show behavior takes six weeks and mostly serves collectors, not the learners this product is built for. Here's a lighter alternative that keeps the real device behaviors — the remainder display, the no-negatives rule, the scaled reward — without the hardware-artifact fidelity." You're the technical expert — help stakeholders make informed decisions. Sometimes they'll still want the expensive feature (and that's okay), but at least they decided with full information.

---

## Scoring Guide
- 90-100%: Excellent understanding of requirements gathering and stakeholder management
- 80-89%: Good grasp, minor gaps in user story format or stakeholder analysis
- 70-79%: Adequate foundation, review user story components and requirement types
- Below 70%: Revisit Module 2 materials, especially functional vs non-functional requirements

## Study Resources
- Week 3 Assignment: Stakeholder Analysis & Interview Plan
- Week 4 Assignment: User Stories & Product Backlog
- Reference: `Stakeholder_Transcript_Parent.md`, `Stakeholder_Transcript_Teacher.md`, `Stakeholder_Transcript_Retro_Collector.md` (shared class artifacts)
- Reference: `Dataman_Seeded_Backlog.md` (epics and user stories; MoSCoW classification is left unassigned there by design — classifying and estimating each story is your own graded Week 4 exercise, not something to look up)
- Canvas Reading: "The Art of Asking the Right Questions"
- Reference: User Story Format Examples
- Reference: Stakeholder Analysis Matrix
