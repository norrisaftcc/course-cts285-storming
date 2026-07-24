# Week 3 Assignment: Stakeholder Analysis & Interview Plan
## CTS-285: Systems Analysis & Design

**Due**: End of Week 3 (Friday, 11:59 PM)
**Points**: 25 (3.3% of 750)
**Submission**: GitHub repository with analysis documents

---

## What You're Learning

**You're now the Product Owner.** For the next 4 weeks, you're responsible for understanding user needs and translating them into requirements — for the **Dataman modernization**, the common project this course builds around. (If your chosen basis is DataMon instead of Dataman, apply everything below to your own stakeholders — the technique is identical, only the flavor changes. Every worked example in this assignment uses Dataman.)

This week focuses on **stakeholder analysis** - identifying WHO cares about your system and WHAT they need. You're not starting from a blank page: you already have three stakeholder interviews to work from — a parent, a classroom teacher, and a vintage-device collector. You'll mine those transcripts for entities, needs, and conflicts, prepare deeper interview questions for Week 4 (when the instructor plays these stakeholders live), and refine your understanding of user roles into personas.

**Key skill for CSC-289**: In capstone, you'll work with GRD-242 (graphic design) students. They're stakeholders with different priorities than yours. This week teaches you how to map their needs, influence levels, and communication preferences.

---

## Learning Objectives

1. **Identify** all stakeholder groups for your project
2. **Analyze** stakeholder influence and interest levels
3. **Prepare** structured interview questions for requirements gathering
4. **Refine** user personas based on stakeholder analysis
5. **Map** stakeholder relationships and dependencies

---

## Part 1: Stakeholder Identification & Mapping (9 points)

### Create `stakeholder-analysis.md` in your repository

#### Section 1: Stakeholder List

List ALL people/groups who care about your system's success or failure.

**Categories to consider**:
- **Primary Users**: People who will use your system directly
- **Secondary Users**: People affected by system but don't use it directly
- **Decision Makers**: People who approve/fund the project
- **Technical Team**: People who build/maintain system (you, future developers)
- **External Dependencies**: Third parties your system integrates with

**Example for the Dataman modernization**:
- Primary: Learners (the children using the practice tool — someone like Tomas), Curators who load problems and check results (a parent at home, a teacher at school)
- Secondary: Retro-collector / enthusiast community (cares about fidelity to the original device but isn't the person learning math from it)
- Decision Makers: A parent like Renee (decides whether it's trustworthy enough to hand a 7-year-old), a teacher like Ms. Alvarez (decides whether it gets piloted at a classroom station), school/district administration (approves classroom-scale adoption, data-privacy sign-off)
- Technical: You (developer), future maintainers
- External: Hosting/app-store platform, student-data-privacy requirements (COPPA/FERPA-adjacent), possibly a "classic mode" audience if you take fidelity seriously

**List 8-12 stakeholders** for your project. Your three interview subjects — Renee, Ms. Alvarez, and Dale — are almost certainly on this list, but they shouldn't be the *whole* list: who else has power or interest that nobody interviewed yet?

#### Section 2: Power-Interest Grid

Create a 2×2 matrix mapping stakeholders by **Power** (influence over project) and **Interest** (how much they care).

```
High Power, High Interest: MANAGE CLOSELY
- [Stakeholder 1]: Why they have power and why they care
- [Stakeholder 2]: Why they have power and why they care

High Power, Low Interest: KEEP SATISFIED
- [Stakeholder 3]: ...

Low Power, High Interest: KEEP INFORMED
- [Stakeholder 4]: ...

Low Power, Low Interest: MONITOR
- [Stakeholder 5]: ...
```

**Then explain your management strategy**:
- Who do you need to interview first? (High power + high interest)
- Who might derail the project if ignored? (High power + low interest - they could kill project if inconvenienced)
- Who are your champions? (High interest - will advocate for you)

**Example**:
> Ms. Alvarez is High Power/High Interest. She controls whether the tool ever actually gets piloted (power — no classroom, no adoption) and she showed up to the interview with detailed, strongly-held opinions about how it should behave (interest). If she says no, the classroom use case is dead before it starts. Strategy: interview her early, and treat the constraints she was firm about (no public ranking, drill available without the timer) as requirements to design around, not preferences to negotiate away.

Do the same reasoning for the rest of your 8-12 stakeholders — including Renee and Dale, and including the ones nobody interviewed.

#### Section 3: Stakeholder Profiles

Choose your **3 most important stakeholders** and create detailed profiles:

**For each stakeholder**:
- **Name/Role**: [Generic role, not real names]
- **Goals**: What do they want to accomplish?
- **Pain Points**: What frustrates them about current situation?
- **Technical Comfort**: How tech-savvy are they? (Affects UI design)
- **Communication Preference**: How do they want updates? (Email, meetings, dashboards?)
- **Success Criteria**: How will they judge if your system works?

Your three most important stakeholders will very likely draw from Renee, Ms. Alvarez, and Dale — the three people you have full transcripts for. You can add or substitute another stakeholder (the learner, a school administrator, whoever you argued belongs on your power-interest grid) if you can justify why they outrank one of the three. Whichever three you pick, every claim in the profile has to trace back to the transcripts, the manual, or a defensible inference — don't invent a goal or pain point nobody stated.

---

## Part 2: Interview Planning (10 points)

### Create `interview-plan.md` in your repository

You'll conduct mock stakeholder interviews in Week 4 (instructor plays the stakeholder role). This isn't a blank-slate interview — you already have a first-pass transcript for each of your three main stakeholders. Week 4 is your chance to go deeper: chase down what was left vague, ask about what wasn't covered at all, and get a live answer on the places where two stakeholders clearly want different things. This week, you figure out what's actually still missing or unresolved and turn it into a question worth asking out loud.

#### Section 1: Interview Objectives

For EACH of your 3 main stakeholders, define:

**What you need to learn**:
- What requirements are you trying to uncover?
- What assumptions do you want to validate?
- What constraints might they reveal?

**Example**:
> **Stakeholder**: Ms. Alvarez (classroom teacher)
>
> **Need to learn**:
> - She referred to "our district fluency standards" without naming them — which standards, specifically? (Requirement: what a curated set must actually target)
> - She wants to load per-kid problem sets fast, before a 7:40 AM station rotation — how fast is fast enough? (Constraint: setup-time budget for the curator flow)
> - She wants first-try-vs-second-try detail, not just a score — does she need that live during class, or is an end-of-day summary enough? (Requirement: real-time vs. batch reporting)
>
> **Assumptions to validate**:
> - Assume "aligned to our standards" means grade-level fluency benchmarks in general, not one specific named framework — confirm, or get the document.
> - Assume she wants the timed games turned *off* by default for some students, not removed from the product entirely — confirm.
>
> **Potential constraints**:
> - District data-privacy policy may limit what a teacher can see about students who aren't hers.
> - "An app on the class iPads" may be what she's used to, not a hard platform requirement — worth probing before you treat it as one.

Write a version of this for Renee and Dale too — what did each of them leave vague, assume, or not get asked about?

#### Section 2: Interview Questions

Prepare **15-20 questions TOTAL** across your 3 stakeholders. Mix question types:

**Open-ended questions** (encourage storytelling):
- "Walk me through how you currently [do task X]..."
- "What's the most frustrating part of [current process]?"
- "Describe a time when [problem] caused issues for you..."

**Specific questions** (get concrete details):
- "How many [events/users/transactions] per [week/month]?"
- "What information do you need to see about [X]?"
- "How quickly do you need to [complete task]?"

**Validation questions** (test your assumptions):
- "I'm assuming [X] is important to you - is that accurate?"
- "Would you use a feature that [does Y]?"
- "How often do you [do Z]?"

**Prioritization questions**:
- "If you could only have 3 features, what would they be?"
- "What would make you choose this system over [current solution]?"

**Example questions for Renee (parent/curator)**:
1. Walk me through what you want Tomas to see and feel the moment he gets a problem wrong twice in a row.
2. You said you want it to be "safe and good" — if you had to name three concrete things that would earn your trust, what would they be?
3. How many facts do you think you'd actually load into the memory bank in a typical week?
4. You mentioned checking in later instead of watching live — how often is "later"? Daily? Weekly? After every session?
5. If the system could send you exactly one kind of update about Tomas, what would be most useful?
6. [Continue for 6-8 questions total for this stakeholder]

**Tips**:
- Avoid yes/no questions (they shut down conversation)
- Avoid leading questions ("You hate spreadsheets, right?")
- Ask "why" follow-ups (dig deeper into motivations)
- Save prioritization questions for end (after you understand their world)

---

## Part 3: User Persona Refinement (6 points)

### Create `user-personas.md` in your repository

Take your Week 2 user roles and expand them into **personas** - detailed descriptions of typical users.

**Create 3 detailed personas** (one for each main user role).

### Persona Template

```markdown
## Persona: [Name] - [Role Title]

**Photo**: [Description of person - age, appearance, setting]

**Demographics**:
- Age: [Range]
- Occupation/Status: [e.g., "Sophomore, Computer Science major"]
- Technical Proficiency: [Scale 1-5, explain]

**Goals**:
- [Primary goal using your system]
- [Secondary goal]
- [Life goal this helps with]

**Frustrations with Current Solution**:
- [Specific pain point 1]
- [Specific pain point 2]
- [Specific pain point 3]

**Typical Usage Scenario**:
[200-word narrative of how they'd use your system. Be specific.]

**Quote**:
> "[A quote that captures their mindset about the problem]"

**Features They Care About Most**:
1. [Feature] - Why: [Reason]
2. [Feature] - Why: [Reason]
3. [Feature] - Why: [Reason]
```

### Example Persona

```markdown
## Persona: Tomas - Elementary Learner

**Photo**: 7-year-old boy at the kitchen table after school, backpack still on, a math worksheet pushed off to the side

**Demographics**:
- Age: 7 (2nd grade)
- Occupation/Status: Elementary student; practices math facts at home with a parent supervising
- Technical Proficiency: 2/5 (comfortable tapping through a simple app; can't manage accounts or settings himself)

**Goals**:
- Get through practice without feeling dumb about the same handful of facts that always trip him up
- Finish a session feeling like he won something
- Not be stuck at the table any longer than he has to be

**Frustrations with Current Solution**:
- Flash cards drill him on the same 4-5 facts over and over with no structure — he gets frustrated and shuts down
- Paper drills don't show him any sense of getting better, so there's no payoff
- Nothing naturally ends a session — it just goes until a parent calls it

**Typical Usage Scenario**:
After school, Tomas's mom has loaded five facts he's been missing — 6×6, 7+6, and three others — into his memory bank for the week. He sits down and it's already on Answer Checker, the default mode, so he just starts working through his set. He punches in an answer; if he's wrong he gets one more try before it shows him the correct one and moves on — no flashing red "you failed" moment, just the next problem. After ten problems it tallies how many he got right out of how many he tried, and runs a light-show reward that scales with how well he did. He doesn't linger — a few minutes in, he wanders off toward the kitchen, and the session just ends itself instead of sitting there waiting on him. That evening his mom checks in and sees he got 8 of 10, with the same two facts still catching him, so she'll swap those into next week's set. Tomas never saw a wrong answer marked as right, never got a lecture about it, and doesn't experience any of this as a big production — to him it's just "the thing that stops on its own."

**Quote**:
> "I don't want to see the X. Just tell me the right one and let's go."

**Features They Care About Most**:
1. Two tries before it shows the answer - Why: takes the sting out of being wrong
2. The light show at the end - Why: it's the win he's actually practicing for
3. Auto-stop when he wanders off - Why: he doesn't want to be the one who has to quit
```

**Create 3 personas like this** for your different user roles.

---

## Deliverables Checklist

- [ ] `stakeholder-analysis.md` (3 sections complete)
- [ ] `interview-plan.md` (objectives + 15-20 questions)
- [ ] `user-personas.md` (3 detailed personas)
- [ ] All documents committed to GitHub
- [ ] Repository link submitted in Canvas

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Stakeholder Analysis** | 9 | 8-12 stakeholders listed, power-interest grid accurate, management strategies clear |
| **Interview Plan** | 10 | Objectives clear, 15-20 questions prepared, mix of open/specific/validation questions |
| **User Personas** | 6 | 3 detailed personas, specific scenarios, captures real user needs |
| **Total** | 25 | |

---

## Common Issues

**Issue**: "I already have three full transcripts — isn't the stakeholder analysis already done for me?"

**Solution**: The transcripts give you what each stakeholder *said*. The analysis is what you do with it: deciding who actually has power versus who just has opinions, noticing where Renee and Ms. Alvarez want opposite things, catching the moment someone hands you a solution ("just make it an app on the iPads") instead of a need. Reading a transcript and writing a stakeholder analysis are two different skills — this assignment grades the second one.

**Issue**: "My personas feel generic"

**Solution**: Add specific details. "Elementary student" is generic. "Second-grader who freezes on the same five multiplication facts every time and shuts down the second he sees a red X" is specific. Specificity makes personas useful.

---

## Resources

- **Stakeholder Analysis Guide**: [Project Management Institute](https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736)
- **Interview Techniques**: [Nielsen Norman Group](https://www.nngroup.com/articles/user-interviews/)
- **Creating Personas**: [Interaction Design Foundation](https://www.interaction-design.org/literature/article/personas-why-and-how-you-should-use-them)

---

## Andrew's Note

Stakeholder analysis feels like busywork until you skip it and build the wrong thing.

I've watched students build "perfect" systems that nobody uses because they never asked what users actually needed. They assumed. Assumptions are expensive.

**In CSC-289, your GRD-242 partner is your stakeholder.** They'll have ideas about design, features, timelines that conflict with yours. Knowing how to map their power/interest, prepare questions, and build personas now = smoother collaboration then.

This is career-critical PM skill. Every project starts with "Who cares and what do they need?"

— Andrew
