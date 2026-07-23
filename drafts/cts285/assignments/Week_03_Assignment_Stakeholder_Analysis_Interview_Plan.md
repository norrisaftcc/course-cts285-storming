# Week 3 Assignment: Stakeholder Analysis & Interview Plan
## CTS-285: Systems Analysis & Design

**Due**: End of Week 3 (Friday, 11:59 PM)
**Points**: 25 (3.3% of 750)
**Submission**: GitHub repository with analysis documents

---

## What You're Learning

**You're now the Product Owner.** For the next 4 weeks, you're responsible for understanding user needs and translating them into requirements.

This week focuses on **stakeholder analysis** - identifying WHO cares about your system and WHAT they need. You'll prepare for stakeholder interviews (which happen Week 4) and refine your understanding of user roles.

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

**Example for Campus Event Finder**:
- Primary: FTCC students (event attendees), club officers (event organizers)
- Secondary: Faculty advisors (want students engaged), campus activities director
- Decision Makers: IT department (approves deployment), student government (potential funding)
- Technical: You (developer), future maintainers
- External: Campus calendar system (if integrating)

**List 8-12 stakeholders** for your project.

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
> Campus Activities Director is High Power/High Interest. I need to interview her first because she controls event calendar access (power) and wants students more engaged (interest). If she says no to my system, project is dead. Strategy: Frame my system as reducing her workload (consolidates scattered event postings).

#### Section 3: Stakeholder Profiles

Choose your **3 most important stakeholders** and create detailed profiles:

**For each stakeholder**:
- **Name/Role**: [Generic role, not real names]
- **Goals**: What do they want to accomplish?
- **Pain Points**: What frustrates them about current situation?
- **Technical Comfort**: How tech-savvy are they? (Affects UI design)
- **Communication Preference**: How do they want updates? (Email, meetings, dashboards?)
- **Success Criteria**: How will they judge if your system works?

---

## Part 2: Interview Planning (10 points)

### Create `interview-plan.md` in your repository

You'll conduct mock stakeholder interviews in Week 4 (instructor plays stakeholder). This week, prepare your questions.

#### Section 1: Interview Objectives

For EACH of your 3 main stakeholders, define:

**What you need to learn**:
- What requirements are you trying to uncover?
- What assumptions do you want to validate?
- What constraints might they reveal?

**Example**:
> **Stakeholder**: Event Organizer (club officer)
>
> **Need to learn**:
> - How do they currently promote events? (Requirement: What channels to integrate?)
> - What information do they need from attendees? (Requirement: RSVP form fields)
> - How far in advance do they post events? (Constraint: System needs scheduling feature)
>
> **Assumptions to validate**:
> - Assume they want RSVP lists exportable → Confirm this
> - Assume they check attendance day-of → Might want check-in feature
>
> **Potential constraints**:
> - Might need campus approval for each event (adds workflow step)
> - Might have accessibility requirements (affects design)

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

**Example questions for Event Organizer**:
1. Walk me through how you currently promote an event from idea to day-of.
2. How many events does your club host per semester?
3. What information do you wish you had about who's attending?
4. What's the most frustrating part of managing RSVPs currently?
5. If the system could send automated reminders, when should they go out?
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
## Persona: Jamal - Busy Club President

**Photo**: 20-year-old Black male in FTCC Student Government shirt, holding laptop, looks stressed

**Demographics**:
- Age: 19-21
- Occupation: Full-time student, part-time job, president of Cyber Security Club
- Technical Proficiency: 4/5 (comfortable with tech but not a power user)

**Goals**:
- Get more members to club events (currently only 30% show-up rate despite RSVPs)
- Reduce time spent on event logistics (currently 5+ hours per event)
- Show club activity to Student Government for continued funding

**Frustrations with Current Solution**:
- Posts events in 5 different places (Discord, Instagram, email, campus bulletin, class announcements) - tedious
- No centralized RSVP list - people say "yeah I'll come" verbally but forget
- No way to remind attendees day before - has to manually text people

**Typical Usage Scenario**:
Jamal's planning a guest speaker event on ethical hacking. He opens the event system, creates event with title, date, speaker bio, and sets RSVP capacity to 30 (room limit). System posts to campus calendar automatically and generates shareable link. He posts link once in Discord and Instagram. As students RSVP, he watches list grow. System sends automatic reminder 24 hours before. Day of event, he has 28 RSVPs and 25 actually show - way better than his usual 10 attendees from 30 verbal "yes I'll be theres." He exports attendance for Student Government report in 2 clicks.

**Quote**:
> "I spend more time managing logistics than actually planning good events. I just want people to show up when they say they will."

**Features He Cares About Most**:
1. Auto-reminders - Reduces no-shows without manual work
2. Single-link RSVP - No need to post everywhere
3. Attendance export - Student Government requires proof of engagement
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

**Issue**: "I don't have real stakeholders to interview"

**Solution**: That's okay! In Week 4, I'll role-play your stakeholders. For now, **imagine** who they'd be. Make educated guesses. This is practice for CSC-289 when you'll have real GRD-242 partners to interview.

**Issue**: "My personas feel generic"

**Solution**: Add specific details. "College student" is generic. "Sophomore commuter student who checks phone between classes while waiting for bus" is specific. Specificity makes personas useful.

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
