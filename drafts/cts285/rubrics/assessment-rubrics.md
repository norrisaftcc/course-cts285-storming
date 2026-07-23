# CTS-285 Assessment Rubrics
## Systems Analysis & Design - Fall 2026

**Instructor**: Andrew Norris
**Last Updated**: January 15, 2026

---

## Philosophy: Process + Product = Professional Practice

CTS-285 emphasizes **how you work** as much as **what you produce**. Our grading reflects this:

- **40% Process/PM** - Evidence of SDLC phases, sprint execution, documentation
- **40% Technical** - Quality of design, implementation, system functionality
- **20% Communication** - Written docs, presentations, stakeholder interaction

**Why this split?** In CSC-289, you'll work with GRD-242 (graphic design) students. Process clarity and communication determine project success as much as technical skill.

---

## Table of Contents

1. [Standard Assignment Rubric](#standard-assignment-rubric)
2. [Sprint Assignment Rubric](#sprint-assignment-rubric)
3. [Design Artifacts Rubric](#design-artifacts-rubric)
4. [Retrospective Rubric](#retrospective-rubric)
5. [Presentation Rubric](#presentation-rubric)
6. [Grading Scale & Policies](#grading-scale--policies)

---

## Standard Assignment Rubric

Used for non-sprint assignments (Weeks 1-4, supplemental work).

| Criteria | Excellent (90-100%) | Proficient (80-89%) | Developing (70-79%) | Needs Work (<70%) | Points |
|----------|---------------------|---------------------|---------------------|-------------------|--------|
| **Technical Deliverables** | All required files/artifacts present, correct format, exceeds requirements | All required items present, meets requirements, minor gaps | Most items present, meets minimum requirements, some gaps | Missing required items or significant quality issues | 40% |
| **Process Documentation** | Clear evidence of SDLC phases, thorough documentation, reflective | Process documented, most phases evident, adequate detail | Some process documentation, key phases missing or unclear | Little/no process documentation, work appears ad-hoc | 30% |
| **Communication Quality** | Professional writing, clear explanations, appropriate audience | Clear writing, explanations adequate, mostly appropriate | Understandable but informal, explanations incomplete | Unclear writing, missing explanations, unprofessional | 20% |
| **Completeness** | All sections complete, follows instructions precisely | All major sections complete, minor omissions | Key sections complete, some requirements missed | Multiple sections incomplete or missing | 10% |

### Examples by Grade Level

**A-Level Work (90-100%)**:
- GitHub repository organized with clear folder structure
- README explains project purpose and how to run it
- All deliverables exceed minimum (e.g., asked for 3 user stories, provided 5 well-crafted ones)
- Documentation includes "why" decisions were made, not just "what"
- Evidence of iterative work (multiple commits over time, not one giant commit)

**B-Level Work (80-89%)**:
- All required deliverables present and functional
- Documentation adequate but lacks depth in places
- Some evidence of process (commits, notes) but not comprehensive
- Writing is clear but may have minor issues
- Meets requirements but doesn't exceed them

**C-Level Work (70-79%)**:
- Most deliverables present, may have quality issues
- Limited process documentation (e.g., fake standups written all at once)
- Explanations brief or unclear in places
- Meets minimum requirements barely
- Work appears rushed or incomplete

**Below 70%**:
- Missing significant deliverables
- No evidence of following process
- Poor communication or unprofessional presentation
- Does not meet minimum requirements

---

## Sprint Assignment Rubric

Used for Sprint 1 (Weeks 5-6), Sprint 2 (Weeks 7-8), Sprint 3 (Weeks 9-10).

Total Points: **75-100 points** depending on sprint complexity

### PM/Process Component (35-40 points)

| Criteria | Excellent (36-40) | Proficient (32-35) | Developing (28-31) | Needs Work (<28) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Sprint Planning** | Complete plan with clear goal, estimated stories, capacity calculation, realistic | Plan present with goal and estimates, mostly realistic | Plan present but vague goal or unrealistic estimates | No plan or plan disconnected from execution |
| **Daily Standups** (10 entries) | 10+ entries, specific tasks daily, honest blockers, visible progress | 8-10 entries, tasks identified, some detail lacking | 6-8 entries or entries vague/generic | <6 entries or clearly fabricated at end |
| **Sprint Board** (GitHub Projects) | Stories move through columns, labels used, up-to-date throughout sprint | Board used, most stories tracked, updated regularly | Board exists but minimal use or outdated | No board or not used for tracking |
| **Retrospective** | Honest reflection, specific learnings, actionable improvements | Reflection present, learnings identified, improvements somewhat vague | Brief reflection, generic learnings | Missing or superficial ("everything was fine") |

### Technical Component (35-40 points)

| Criteria | Excellent (36-40) | Proficient (32-35) | Developing (28-31) | Needs Work (<28) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Design Quality** (diagrams/code) | Correct notation, comprehensive, clearly communicates system | Correct notation, covers requirements, understandable | Some notation errors, incomplete coverage | Major errors or missing significant pieces |
| **Functionality** | Deliverables work as specified, edge cases handled | Deliverables work for main scenarios, minor bugs | Deliverables partially work, significant bugs | Deliverables don't work or major functionality missing |
| **Technical Depth** | Shows research, appropriate solutions, considers alternatives | Adequate solutions, basic research evident | Minimal research, simplistic solutions | No research evident, poor technical choices |

### Communication Component (15-20 points)

| Criteria | Excellent (18-20) | Proficient (16-17) | Developing (14-15) | Needs Work (<14) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Documentation** | Clear for non-technical stakeholder, explains "why", professional | Clear to technical reader, adequate explanations | Understandable but assumes too much knowledge | Confusing, missing context, unprofessional |
| **Design Rationale** | Explains decisions, trade-offs, risks; shows systems thinking | Explains main decisions, acknowledges some trade-offs | Brief explanations, minimal justification | No explanations or justifications |

### Sprint-Specific Examples

**Sprint 1 (System Design)** - 75 points total (line items copied from the authoritative `Week_05` assignment):
- Technical (55 pts): UML diagrams (25), ERD (15), Wireframes (15)
- Process/PM (10 pts): Daily standups (10)
- Communication (10 pts): System design document (10)
- Retrospective: +5 bonus, applied within the 75-point cap

> **Note (task 1.0b — resolved by ADR-002):** Sprint 1 is design-artifact-heavy and does **not** fit the generic 40/40/20 split. Per `phase0/ADR-002-points-are-header-level.md`, sub-item weightings are **descriptive**, not binding arithmetic — the assignment total (75) is the only figure that must sum to 750, and the 40/40/20 split is a course-level philosophy, not a per-sprint equation. The line items above (55T/10P/10C, copied from the authoritative `Week_05`) stand as the descriptive truth; no reconciliation to 35/25/15 is required.

**Sprint 2 (Implementation)** - 100 points total:
- PM (35 pts): Sprint planning (10), Daily standups (15), Sprint review (10)
- Technical (40 pts): Working features (25), Code quality (15)
- Communication (25 pts): Technical docs (15), User-facing docs (10)

---

## Design Artifacts Rubric

Used for UML diagrams, ERDs, wireframes (primarily Sprint 1).

### UML Diagrams (Use Case, Class, Sequence)

| Criteria | Excellent (9-10) | Proficient (8) | Developing (7) | Needs Work (<7) |
|----------|------------------|----------------|----------------|-----------------|
| **Correct Notation** | Proper UML symbols, relationships, syntax throughout | Mostly correct notation, minor errors | Some notation errors, understandable intent | Major notation errors, doesn't follow UML standards |
| **Completeness** | Includes all required elements plus relevant optional ones | All required elements present | Most required elements, some missing | Significant missing elements |
| **Clarity** | Easy to understand, well-organized, not cluttered | Understandable, adequate organization | Somewhat confusing, cluttered or sparse | Very difficult to understand |
| **Relevance** | Accurately represents project, appropriate scope | Represents project adequately | Loosely related to project | Doesn't match project or generic example |

### Entity-Relationship Diagram (ERD)

| Criteria | Excellent (14-15) | Proficient (12-13) | Developing (10-11) | Needs Work (<10) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Normalization** | 3NF, no redundancy, well-designed relationships | 3NF, minor redundancy or design inefficiencies | 2NF or some denormalization, design issues | Not normalized, significant redundancy |
| **Relationships** | All relationships correct, cardinality specified, foreign keys clear | Most relationships correct, minor omissions | Some incorrect relationships or missing cardinality | Major relationship errors |
| **Entities & Attributes** | 5+ entities, appropriate attributes, data types specified | 5 entities, most attributes appropriate | 4 entities or missing key attributes | <4 entities or inappropriate design |
| **Clarity** | Professional appearance, easy to read, well-labeled | Clear layout, adequate labels | Somewhat messy, labels unclear | Difficult to read or understand |

### Wireframes

| Criteria | Excellent (14-15) | Proficient (12-13) | Developing (10-11) | Needs Work (<10) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Completeness** | 5+ screens, all required views, user flows clear | 5 screens, most views covered | 4 screens or missing key views | <4 screens or major gaps |
| **Functionality** | All interactive elements labeled, data sources noted, navigation complete | Most elements labeled, navigation mostly clear | Some labeling missing, navigation unclear | Minimal labeling, functionality unclear |
| **User Flow** | Logical navigation, no dead ends, accounts for edge cases | Logical main flow, minor navigation issues | Flow present but confusing or incomplete | No clear flow or major usability issues |
| **Appropriate Fidelity** | Low/mid-fidelity, focuses on function not aesthetics, annotated well | Appropriate fidelity, adequate annotations | Too high-fidelity (wasted time) or too low (unclear) | Wrong fidelity or no annotations |

---

## Retrospective Rubric

Used after each sprint (bonus 5 points) and Module 8 final reflection.

| Criteria | Excellent (5) | Proficient (4) | Developing (3) | Needs Work (<3) |
|----------|---------------|----------------|----------------|-----------------|
| **Honesty** | Real struggles shared, celebrates actual wins, authentic | Mostly honest, some generic statements | Mostly generic, "everything was fine" tone | Clearly not reflective or dishonest |
| **Specificity** | Names specific tasks/dates/issues, concrete examples | Identifies specific areas, some examples | Vague references to problems/successes | No specifics, all generalities |
| **Actionable Improvements** | 2-3 specific, measurable changes planned | 1-2 improvements, somewhat actionable | Improvements listed but vague ("work harder") | No improvements or not actionable |
| **Growth Mindset** | Frames challenges as learning, takes ownership | Acknowledges learning, mostly constructive | Some blame or negative framing | Blames external factors, no learning evident |

### Good vs. Poor Retrospective Examples

**Good - "What Went Well"**:
> "Breaking the ERD design into smaller tasks (Monday: list entities, Tuesday: define relationships) helped me avoid feeling overwhelmed. Commit on Tuesday showed 3 entities designed. This incremental approach reduced my design paralysis."

**Poor - "What Went Well"**:
> "Everything went well. I finished on time."

**Good - "What Will I Change"**:
> "Next sprint I'll front-load research tasks on Day 1-2. This sprint I got blocked on Day 5 trying to decide between Flask-SQLAlchemy vs. raw SQL, wasting 3 hours. Moving research earlier prevents mid-sprint blocking."

**Poor - "What Will I Change"**:
> "I'll work harder and manage my time better."

---

## Presentation Rubric

Used for sprint reviews (informal) and Week 16 final presentation (formal).

### Sprint Review Presentation (10 points, embedded in sprint grade)

| Criteria | Excellent (9-10) | Proficient (8) | Developing (7) | Needs Work (<7) |
|----------|------------------|----------------|----------------|-----------------|
| **Content** | Shows what was built, explains decisions, acknowledges challenges | Shows deliverables, basic explanations | Vague about what was done | Unclear or missing content |
| **Delivery** | Clear speaking, organized, within time (5-7 min) | Understandable, mostly organized | Disorganized or too brief/long | Difficult to follow |
| **Visuals** | Effective use of diagrams/demos/screenshots | Adequate visuals | Minimal visuals | No visuals or irrelevant ones |

### Final Presentation — RETIRED (was 60 points of Module 8 grade)

> **Retired by task 1.0b.** This 60-point Final Presentation has **no row in the canonical points table** and contradicts the retired `Week_16` 110-point structure. Under the 26FA spine, Module 8 is the team on-ramp (wireframes + design consult + capstone pitch); the **wk16 Spring Capstone Pitch (25) + Handoff Package (15) = 40 pts** replaces it, and its rubric is authored by task **2.4**. The table below is preserved **only for salvage** by 2.4 and is **not a live assessment** — its point figures do not count toward the 750 total.

*(Salvage material for the wk16 pitch rubric — task 2.4; not graded as-is.)*

| Criteria | Excellent (54-60) | Proficient (48-53) | Developing (42-47) | Needs Work (<42) |
|----------|-------------------|--------------------|--------------------|------------------|
| **Problem & Solution** (15 pts) | Clearly articulates problem, explains why solution matters, compelling | Problem and solution clear, adequate justification | Problem somewhat clear, weak justification | Unclear problem or solution |
| **Live Demo** (20 pts) | Smooth demo, shows key features, handles questions, backup plan if issues | Demo works, shows main features, minor issues | Demo partially works or incomplete features | Demo fails or not prepared |
| **Technical Depth** (10 pts) | Explains architecture, design decisions, challenges overcome | Describes technical approach, some depth | Surface-level technical content | No technical depth |
| **Process Reflection** (10 pts) | Shows SDLC journey, role rotation learning, specific growth moments | Describes process followed, general learning | Minimal process discussion | No process reflection |
| **Professionalism** (5 pts) | Polished slides, professional delivery, time management, dressed appropriately | Professional, minor rough edges | Somewhat unprofessional or disorganized | Unprofessional presentation |

---

## Grading Scale & Policies

### Letter Grade Conversion

| Grade | Percentage | Description |
|-------|------------|-------------|
| A | 90-100% | Excellent mastery of SDLC, Agile practices, and systems analysis |
| B | 80-89% | Strong understanding, proficient execution, minor gaps |
| C | 70-79% | Adequate foundation, meets minimum requirements, needs growth |
| D | 60-69% | Significant gaps, below expectations for CSC-289 readiness |
| F | <60% | Does not demonstrate minimum competency |

### Late Work Policy

- **Within 24 hours**: -10% penalty
- **24-48 hours**: -20% penalty
- **48-72 hours**: -30% penalty
- **Beyond 72 hours**: Requires instructor approval, up to -50%

**Exceptions**: Sprint work has hard deadlines (can't be "late" - sprints end). Retrospectives can be submitted up to 3 days late with penalty.

### Revision Policy

**Assignments**: One revision allowed within 1 week of grading for up to 80% of original lost points.

**Example**: Earned 70/100 on assignment. Can revise to earn back up to 24 of the 30 lost points (max final score: 94/100).

**Not eligible for revision**: Daily standups (process artifact), final presentation

### Academic Integrity

**Collaboration Encouraged**:
- Discussing concepts and approaches
- Helping with troubleshooting
- Peer code review (required!)
- Using online resources with citation

**Violations (result in 0 and academic integrity report)**:
- Copying another student's work
- Submitting AI-generated work without understanding/attribution
- Using someone else's project as your own
- Fabricating process artifacts (fake standups, fake commits)

**When uncertain, ask first.**

### Participation & Engagement

Not formally graded, but:
- Attending in-class activities provides scaffolding for assignments
- Office hours use correlates with success (students who ask questions earn higher grades)
- Engaging with optional AlgoCratic content doesn't affect grade but may increase enjoyment

---

## Grading Philosophy: Feedback for Growth

### What We're Looking For

**Process evidence > Perfect products**
- A well-documented design with some flaws beats a perfect design with no process trail
- Standups showing struggle and problem-solving beat fake standups claiming perfection

**Systems thinking > Feature checklists**
- Explaining trade-offs (e.g., "I chose SQLite over PostgreSQL for development speed, knowing I'll migrate later") beats just implementing
- Acknowledging risks and constraints shows professional maturity

**Growth over time > Individual assignment perfection**
- Sprint 2 should show learning from Sprint 1 retrospective
- Estimation accuracy should improve across sprints
- Late-semester work should show more independence

### Common Grading Questions

**Q: "My code works but I didn't do standups. Can I still get an A?"**
A: No. An A requires demonstrating both technical skill AND process. You'd earn ~60% (technical points only), likely a D.

**Q: "I did everything but my ERD isn't perfectly normalized. Will I fail?"**
A: No. Minor technical flaws result in point deductions (maybe 85% instead of 95%) but completeness and process still earn substantial credit.

**Q: "I engaged with all the AlgoCratic optional content. Does that help my grade?"**
A: Not directly - grading is based on learning objectives only. But if you found it motivating and it helped you do better work, indirectly yes!

**Q: "Can I turn in a Sprint 1 design, get feedback, and revise before the deadline?"**
A: Yes! That's encouraged. Come to office hours mid-sprint for design review. Iterative improvement is professional practice.

**Q: "I'm behind. Should I skip the retrospective to focus on technical work?"**
A: No. The retro helps you identify why you're behind and what to change. Plus it's only 5 points but valuable learning.

---

## For Instructors: Grading Efficiency Tips

### Time-Saving Strategies

**GitHub Projects boards reveal process quality in 30 seconds**:
- Count issues (should match user story count from backlog)
- Check issue movement (columns should show progression)
- Look for labels (story points, priorities)
- Check last update date (active throughout sprint vs. day before deadline)

**Commit history shows work patterns**:
- Multiple commits over sprint = iterative work
- One giant commit = procrastination or poor process
- Commit messages should be descriptive ("Add use case diagram for event management" not "update")

**Standups can be scanned quickly**:
- Look for dates (10 entries over ~10 days?)
- Check for specificity (actual tasks vs. "worked on project")
- Verify blockers acknowledged (nobody has zero blockers - if they claim that, it's fake)

**Rubrics are your friend**:
- Use rubric percentages, not points (easier to scale)
- Grade holistically first (A/B/C feel), then adjust with rubric
- Document patterns (if 8 students make same mistake, it's a teaching gap for next term)

### Grading Workflow (15-20 min per sprint assignment)

1. **Check GitHub Projects board** (2 min) - Process quality snapshot
2. **Scan standups** (3 min) - Look for red flags (fake entries, no progression)
3. **Review technical deliverables** (8 min) - Diagrams, code, functionality
4. **Read design doc/rationale** (5 min) - Do they explain "why"?
5. **Fill rubric and calculate** (2 min)

**Total per student**: ~20 min for 75-100 point sprint assignment = efficient given point value

---

## Continuous Improvement

This rubric evolves based on student feedback and teaching experience. Updates posted in Canvas with change log.

**Last revision**: January 15, 2026 (initial version)

Questions about grading? Office hours or email.

— Andrew Norris
