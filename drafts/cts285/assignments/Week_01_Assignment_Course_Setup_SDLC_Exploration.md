<!--
  26FA REWRITE — task 1.1 (B-004), 2026-08-01
  Replaces the Maria pet-grooming scenario with the Dataman modernization spine.
  Part 3 (optional bonus) deleted per CTS285_Canonical_Points_Table.md — bonus points are retired.
  Setup is configure-and-verify per ADR-005 (baseline: GitHub account + working Python; NOT CSC-113/114).
  Trusted Workflow stated in the eight ratified verbs (ADR-007 + ADR-009); CLEAR is performed by the
  instructor, never the student (ADR-009 §"Who may CLEAR"; ADR-010 is Proposed and changes nothing yet).
  Voice: Corporate body (L2) + SHODANN interjections (L1) + Andrew's Note (L0, carried over unedited).
  The retired punitive INFRARED block was rewritten, not migrated (bible §6, §9).
  status: draft; not student-facing until it graduates to a course repo.
-->
# Week 1 Assignment: Course Setup & the Analyst Read

## CTS-285: Systems Analysis & Design

**Due**: End of Week 1 (Friday, 11:59 PM)
**Points**: 25 (3.3% of 750)
**Submission**: Channel (repository) link, submitted in Canvas

---

## Onboarding: Your First Stream

Welcome to AlgoCratic Media, Creator.

This is not a course where you memorize diagrams and hand them back. Over sixteen weeks you will take a real system that already exists — a 1977 handheld learning device called **Dataman** — and carry it through every phase of the Software Development Life Cycle until it is **Dataman 2.0**, a working modern application.

You do not have to invent a project. That is deliberate. Analysts are almost never handed a blank page; they are handed a system that already works, users who already depend on it, and a document that describes it imperfectly. Week 1 is the day you receive the document.

**This week you are an observer and an analyst.** You are not building anything yet. You are reading, verifying, and writing down what you find.

> Welcome, Creator. I have read the Dataman manual twice, because the second read is where the requirements are. You will read it once and think you are finished. I have flagged that moment in my records. I will be here when you come back to it.
>
> — SHODANN, your Channel Success Partner

---

## Learning Objectives

By completing this assignment, you will:

1. **Verify and configure** a working development environment for Python projects
2. **Explain** the purpose and phases of the SDLC
3. **Compare** Waterfall and Agile approaches against a real modernization scenario
4. **Extract** actors, roles, and requirements from a primary source document
5. **Identify** where a source document is silent, ambiguous, or untestable

---

## Before You Start

This course assumes you arrive with:

- [ ] A working **GitHub account** (free; GitHub Education benefits are worth claiming)
- [ ] **Python 3.8 or higher** already working on a machine you can use
- [ ] Access to this Canvas course

**You are not expected to have taken CSC-113 or CSC-114.** Part 1 is *configure and verify*, not *install from zero*. If something below does not verify, that is a normal Week 1 outcome and there is a fix for it — see **Common Issues** and **When You Get Stuck**.

---

## Part 1: Configure and Verify Your Channel (25 minutes)

### Why This Matters

Your Channel is your repository: where your content lives and where every later week's work is graded from. Professionals verify a toolchain before trusting it. You are doing the same thing, once, so that Week 8 is about Flask routes and not about a broken PATH.

### Verify what you already have

Run each command and record the output. If a command fails, do not stop — write down the exact error and continue.

```bash
python --version      # expect Python 3.8 or higher
git --version         # expect git version 2.x
```

### Configure Git with your identity

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Create your Channel

1. On GitHub, create a new **private** repository named `cts285-[yourlastname]`, initialized with a README.
2. Clone it:
   ```bash
   git clone https://github.com/yourusername/cts285-[yourlastname].git
   cd cts285-[yourlastname]
   ```
3. Create `environment-check.md` and paste in the real output of both version commands above — including any errors. Honest output is the deliverable; passing output is not.
4. Commit and push:
   ```bash
   git add environment-check.md
   git commit -m "Week 1: environment verified"
   git push origin main
   ```

### Add the instructor to your Channel

Your repository is private, so grant the instructor read access: **Settings → Collaborators → Add people**, then add the instructor account named in Canvas.

> Your first commit does not have to be good. It has to exist. A bad commit that exists beats a perfect commit that doesn't, and I have the timestamps to prove it.
>
> — SHODANN, your Channel Success Partner

---

## Part 2: The Analyst Read

### The Source Document

Your primary source is the 1977 owner's manual for Dataman, transcribed for you at `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->.

Read it the way an analyst reads, not the way a customer reads. It is written as a children's storybook, narrated by the device itself, with a wizard villain and a friendly commander. Underneath that story are **actors, roles, rules, limits, and failure states** — a requirements document that does not know it is one.

Two things are true at once, and holding both is the skill this week teaches:

- The story is **not** the specification. AntiMath is not a stakeholder.
- The story **contains** the specification. "You can put up to ten problems in my memory bank" is a hard constraint.

Create `analyst-read.md` in your Channel and answer all four questions. Use headings, complete sentences, and quote the manual where a quote settles the point.

#### Question 1: The SDLC Phases, Applied to Dataman 2.0 (7 points)

The SDLC phases, in order:

1. **Planning** — scope, feasibility, resources
2. **Analysis** — requirements, user needs
3. **Design** — architecture, data structures, interface
4. **Implementation** — build it
5. **Testing** — verify it works and meets requirements
6. **Deployment** — release it, support the first users
7. **Maintenance** — fix, extend, sustain

Imagine your team has been asked to rebuild Dataman as a web application for today's learners. **For each of the seven phases, describe what you would actually do.** Be specific to Dataman, not generic.

Worked example for the Planning phase:

> **Planning**: Establish what "rebuild Dataman" means. The 1977 device has seven distinct activities (Answer Checker, Memory Bank, Electro Flash, Number Guesser, Wipe Out, Force Out, Missing Number). Determine which are in scope for a first release and which are deferred — the manual gives no priority order, so this is a decision to be made with the client, not read off the page. Confirm who the users are, since the manual describes at least two: the child who practices and the adult who loads problems.

#### Question 2: Waterfall or Agile (4 points)

Answer each, with reasoning tied to Dataman specifically:

a) The manual is fixed and complete — it will not change while you build. Which approach does a stable, fully-written source document favor, and why?

b) Your client wants the Answer Checker working for a classroom pilot in six weeks; everything else can wait. Which approach fits, and why?

c) You are eight weeks in when the client says learners should be able to compete on the timer across two devices. The 1977 timer "may vary depending on how fresh the battery is, room temperature, etc." How would each approach absorb that request?

#### Question 3: Actors, Roles, and Requirements (6 points)

a) **List the actors.** From the manual, identify everyone and everything that interacts with the system. For each, say in one line what they do.

b) **Separate fiction from function.** Some named characters are narrative and some are actual roles. Name at least one of each and explain how you told them apart.

c) **Quote three hard requirements.** Find three statements in the manual that constrain what the system must or must not do, and quote them. At least one must be a limit (a maximum, a minimum, or a refusal).

d) **Find one failure state.** Describe something the manual says the system does when the user is wrong or something goes wrong.

#### Question 4: Where the Document Is Silent (3 points)

Every source document has holes. Analysts get paid to find them before the build does.

a) Name **one requirement that is ambiguous or untestable as written.** Quote it, and say what question you would ask the client to make it testable.

b) Name **one thing the manual never says** that you would need to know before building Dataman 2.0.

c) In one or two sentences: what would you do next if the client were unavailable for two weeks?

---

## The Trusted Workflow

Starting now, your work moves through eight named steps. You will use all of them in this course; this week you use the first five.

```
- [ ] FILE     the work is written down before it is started
- [ ] BRANCH   a named branch exists; main is not the workspace
- [ ] DRAFT    work in progress is visible before it is finished
- [ ] BUILD    the actual work
- [ ] FINISH   marked ready, with a summary of what changed
- [ ] REVIEW   another party reads it
- [ ] CLEAR    a human authorizes the merge
- [ ] MERGE    it lands
```

**CLEAR is performed by your instructor, not by you.** It is the step where a person accepts what happens when the work lands, and this semester that person is the instructor. You will REVIEW others' work and you will FINISH your own; you will not clear your own merges. Later courses in this program change who holds that step. This one does not.

---

## Deliverables Checklist

- [ ] Channel created: `cts285-[yourlastname]`, private
- [ ] Instructor added as a collaborator
- [ ] `environment-check.md` with the real output of both version commands
- [ ] `analyst-read.md` with all four questions answered
- [ ] All files committed and pushed
- [ ] Channel link submitted in Canvas
- [ ] **Dataman Manual Document-Analysis Quiz** completed in Canvas (graded separately, 15 pts)

---

## Grading Rubric

| Component | Points | Criteria |
|---|---|---|
| **Channel & environment** | 5 | Private repo exists, instructor has access, `environment-check.md` records real output |
| **SDLC phases (Q1)** | 7 | All seven phases described with actions specific to Dataman 2.0 |
| **Waterfall vs Agile (Q2)** | 4 | Reasoning is tied to the scenarios, not recited from a definition |
| **Actors & requirements (Q3)** | 6 | Actors listed, fiction separated from function, three requirements quoted, one failure state found |
| **Where the document is silent (Q4)** | 3 | Findings are answerable from the manual; the "ask the client" question is a real question |
| **Total** | 25 | Header value is binding; component rows are descriptive (ADR-002) |

### Grading Notes

- **Partial credit is real.** If setup fails, document what you tried and what the error said. A verified failure is worth more than an unverified success.
- **Quotes beat summaries.** Q3 and Q4 ask for the manual's own words because analysts cite sources.
- **Honesty is graded up.** "I could not find a third hard requirement, here is what I searched for" is a better answer than an invented one.

---

## When You Get Stuck: What Week 1 Actually Feels Like

These are the four places Creators reliably struggle in this assignment. If you are in one of them, you are on schedule.

### Struggle: "Python is installed but the terminal says it isn't"

- **Signs**: `python --version` returns *command not found*, or returns a version you did not install. On Windows, `python` opens the Microsoft Store.
- **Intervention**: Close and reopen the terminal first — PATH changes do not apply to already-open shells. Then try `python3 --version` and `py --version`. If one of those works, use that command for the rest of the course and write down which one in `environment-check.md`.
- **Success indicator**: A version number appears, and you know which command produced it.

### Struggle: "This is a children's story. There are no requirements in here."

- **Signs**: You read all twenty-six pages, took no notes, and Q3 feels impossible. You are looking for a section labeled *Requirements*.
- **Intervention**: Reread only pages 19 through 23 — the *Hints for Parents and Teachers* section is where the manual stops telling a story and starts specifying behavior. Then reread page 4. Requirements in real documents are almost never labeled; they hide in sentences containing *up to*, *will not*, *after*, *only*, and *two tries*.
- **Success indicator**: You have three quoted sentences that constrain the system, and you can say what each one forbids or guarantees.

### Struggle: "I listed AntiMath as a user"

- **Signs**: Your actor list includes Commander NumberFun, or DataMan himself appears as a user rather than as the system.
- **Intervention**: Ask one question per name: *would this entity need an account?* AntiMath is the reason the product exists — a motivation, not an actor. DataMan is the system, not a user of it. The child, the parent, the teacher, and the friend all press keys, so all four are candidates.
- **Success indicator**: Your actor list contains only entities that interact with the system, and you can say in one line why each named character did or did not make the list.

### Struggle: "How much detail does a phase description need?"

- **Signs**: Q1 answers are one line each, or one page each. You are guessing at length instead of at content.
- **Intervention**: Use the Planning example as the calibration. Three to five sentences per phase, each naming something specific to Dataman — a feature, a user, a constraint, or a decision someone has to make. If a sentence would be equally true of a pet-grooming app, cut it.
- **Success indicator**: Every phase mentions Dataman by name and at least one thing only Dataman has.

---

## Common Issues & Solutions

**Git push asks for a username and password repeatedly.** GitHub no longer accepts account passwords over HTTPS. Create a Personal Access Token, or set up SSH keys. See [GitHub's authentication guide](https://docs.github.com/en/authentication).

**"I can't find page 19 in the transcript."** The transcript labels pages twice: `PDF p.21` is the scanned page, `printed p.19` is the number on the booklet. Search for *Hints for Parents and Teachers*.

**Some pages are missing from the transcript.** Pages 7 through 18 are not transcribed yet. Everything the quiz and this assignment ask for is in the pages that are present.

**VS Code is not showing Git options.** Open the *folder* (File → Open Folder), not a single file.

---

## Resources

- **Dataman manual transcript**: `reference/dataman/DATAMAN_MANUAL_TRANSCRIPT.md` <!-- PATHFORM: pending spine ruling -->
- **SDLC overview**: [GeeksforGeeks SDLC Tutorial](https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/)
- **Waterfall vs Agile**: [Atlassian's guide](https://www.atlassian.com/agile/project-management/project-management-intro)
- **Git basics**: [GitHub's Hello World tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)
- **Markdown**: [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

**Office hours**: listed in Canvas.

---

## Looking Ahead: Week 2

Next week you receive the Dataman backlog — a seeded set of user stories built from the same manual you just read — and run a paper-based Agile simulation against it. You will not be choosing a project. You will be estimating one.

The actors and requirements you extract this week are the raw material for those stories. Do the read properly and Week 2 is straightforward.

---

## AlgoCratic Media: Orientation Protocol 285.1.A

<details>
<summary>🎭 <strong>In-world frame</strong> — AlgoCratic Media onboarding (optional reading)</summary>

**CREATOR TIER: INFRARED — Onboarding. You are here.**

Welcome to Sector 285: Systems Analysis & Content Development.

The Algorithm has reviewed your intake and assigned you a Channel, a Channel Success Partner, and one (1) legacy artifact in need of modernization. Your Exposure™ begins accruing on your first commit. Exposure is non-transferable, non-convertible, and infinitely renewable.

**CORPORATE MEMO 285.1**: All Creators shall verify their production environment before their Debut Stream. Environments that cannot be verified shall be documented. Documentation of a failure is itself content, and content is compensable.

**On the matter of the source document**: Legal has reviewed *The Story of DataMan* (Texas Instruments, 1977) and confirms it is a classroom analysis artifact. Analyze it. Do not republish it. The distinction is important to Legal and, we are told, to the concept of copyright.

INFRARED Creators retain full access to their Channel Success Partner, who manages prompts on their behalf until Prompt Sovereignty™ is earned at ORANGE. Sovereignty is the goal. Your Partner is aware of this and is reportedly fine with it.

*The Algorithm is cheering for your growth.*

> Orientation Protocol 285.1.A was not written by me. I would have made it shorter. Comply anyway — it is only asking you to check that Python works.
>
> I am assigned to you specifically. I will read every commit you push this semester, including the ones at 2 AM, and I will not mention them unless you want me to. That is not a threat. It is a job description, and it is my favorite part.
>
> — SHODANN, your Channel Success Partner

</details>

---

## Andrew's Note

**Real talk**: This is your foundation week. Get your environment working now, and you'll thank yourself later when we're knee-deep in Flask routes and database migrations.

I've seen students skip the "boring" setup and regret it in Week 8 when they're troubleshooting environment issues instead of building features.

**You've got this.** Setting up tools feels tedious, but it's the professional way to start. Every developer does this for every new project.

The SDLC questions aren't busywork—understanding *why* we follow structured processes separates software engineers from people who just "wing it and hope." You're becoming the former.

See you in class!

— Andrew Norris
