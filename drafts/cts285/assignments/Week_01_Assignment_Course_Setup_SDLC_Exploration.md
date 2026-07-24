# Week 1 Assignment: Course Setup & SDLC Exploration
## CTS-285: Systems Analysis & Design

**Due**: End of Week 1 (Friday, 11:59 PM)
**Points**: 25 (3.3% of 750)
**Submission**: GitHub repository link + reflection document

---

## What You're Learning

Welcome to CTS-285! This isn't a lecture course where you memorize diagrams and regurgitate definitions. You're going to **build a real information system** from scratch over the next 16 weeks, experiencing every phase of the Software Development Life Cycle (SDLC) while rotating through different project roles.

This first assignment gets your development environment ready and introduces you to the SDLC through hands-on exploration. By the end, you'll understand why we need structured methodologies for building software (spoiler: chaos is expensive).

**This week, you're an observer and learner.** Starting Week 3, you'll step into the Product Owner role.

---

## Learning Objectives

By completing this assignment, you will:

1. **Configure** a professional development environment for Python/Flask projects
2. **Explain** the purpose and phases of the SDLC
3. **Compare** Waterfall and Agile methodologies using real project scenarios
4. **Identify** appropriate SDLC phases for given project activities
5. **Reflect** on your prior project experiences through an SDLC lens

---

## Prerequisite Steps

Before starting, ensure you have:

- [ ] Access to this Canvas course
- [ ] GitHub account created (use GitHub Education benefits for free tools)
- [ ] Computer with admin rights to install software (or access to campus lab)
- [ ] Stable internet connection for downloading tools

---

## Part 1: Development Environment Setup (30 minutes)

### Why This Matters

Professional developers maintain consistent, reproducible environments. You'll be building a Flask-based information system this semester, so let's get your tools ready now.

### Instructions

1. **Install Python 3.8 or higher**
   - Download from [python.org](https://www.python.org/downloads/)
   - During installation, check "Add Python to PATH"
   - Verify installation:
     ```bash
     python --version
     # Should show Python 3.8.x or higher
     ```

2. **Install Git**
   - Download from [git-scm.com](https://git-scm.com/downloads)
   - Use default settings during installation
   - Verify:
     ```bash
     git --version
     # Should show git version 2.x.x
     ```

3. **Install VS Code** (recommended editor)
   - Download from [code.visualstudio.com](https://code.visualstudio.com/)
   - Install these extensions:
     - Python (by Microsoft)
     - GitLens (by GitKraken)
     - Markdown All in One

4. **Configure Git with your identity**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

5. **Create your course repository**
   - Go to GitHub and create new repository: `cts285-[yourlastname]`
   - Make it **private**
   - Initialize with README
   - Clone to your local machine:
     ```bash
     git clone https://github.com/yourusername/cts285-[yourlastname].git
     cd cts285-[yourlastname]
     ```

6. **Test Python environment**
   - Create `test.py`:
     ```python
     # Week 1 Environment Test
     # CTS-285 - [Your Name]

     print("Python environment ready!")
     print("Let's build something great this semester.")
     ```
   - Run it:
     ```bash
     python test.py
     ```
   - If it prints both lines, you're good!

7. **Commit and push**
   ```bash
   git add test.py
   git commit -m "Week 1: Environment setup complete"
   git push origin main
   ```

---

## Part 2: SDLC Exploration Activity (45 minutes)

### The Scenario

You're consulting for a small business owner (let's call her Maria) who runs a pet grooming salon. She currently uses:
- Paper appointment book
- Excel spreadsheet for customer info
- Handwritten receipts
- Post-it notes for reminders

Maria wants a "computer system" to manage everything. She has $5,000 budget and needs it "as soon as possible."

### Your Task

Create a document called `sdlc-exploration.md` in your repository that addresses these questions. Use headings, bullet points, and complete sentences.

#### Question 1: Identify the SDLC Phases (10 points)

The SDLC has these phases (in order):
1. **Planning** - Define project scope, feasibility, resources
2. **Analysis** - Gather requirements, understand user needs
3. **Design** - Plan system architecture, UI/UX, data structures
4. **Implementation** - Write code, build the system
5. **Testing** - Verify system works correctly, find bugs
6. **Deployment** - Launch system, train users
7. **Maintenance** - Fix issues, add features, provide support

**For Maria's project, describe what you would do in EACH phase.** Be specific.

Example for Planning phase:
> **Planning**: Meet with Maria to understand her budget ($5,000), timeline (ASAP = probably 8-12 weeks realistic), and must-have vs nice-to-have features. Determine if building custom software fits the budget or if an off-the-shelf solution (like Square Appointments) makes more sense. Document project scope and get Maria's approval before proceeding.

Complete this for all 7 phases.

#### Question 2: Waterfall vs Agile (8 points)

**Waterfall**: Complete each SDLC phase fully before moving to next. No going back.

**Agile**: Break project into small cycles (sprints). Deliver working features incrementally, get feedback, adjust.

**Answer these:**

a) If Maria says "I'm not sure exactly what I need, but I'll know it when I see it," which methodology is better? Why?

b) If Maria says "I need appointment booking first—that's urgent. Everything else can wait," which methodology fits? Why?

c) You're in Week 10 of Maria's project. She suddenly says "I need to track inventory for shampoo and supplies too!" How would each methodology handle this request?

#### Question 3: Real-World Reflection (7 points)

Think about a project you've been part of (work, school, personal, volunteer).

a) **Describe the project** (2-3 sentences)

b) **Which SDLC phases happened?** (Even if informal, even if you didn't call them that)

c) **Which phases were SKIPPED or rushed?** What problems resulted?

d) **If you could redo it, what would you change about the process?**

---

## Part 3: Semester Project Brainstorming (Optional, 5 Bonus Points)

Start thinking about your semester-long project. You'll build ONE information system across 16 weeks.

Create `project-ideas.md` in your repository with at least **3 potential project ideas**.

For each idea, include:
- **Project Name**
- **Problem it solves** (2-3 sentences)
- **Target users** (who would use this?)
- **3 core features** (what must it do?)
- **Why this interests you**

Examples:
- **Campus Event Finder**: Students miss events because info is scattered across Discord, Instagram, email. Centralized calendar with notifications.
- **Recipe Scaling Calculator**: Adjust ingredient quantities when cooking for different group sizes. Saves time and reduces food waste.
- **Study Group Organizer**: Match students taking same classes, coordinate study sessions, share notes.

You'll officially choose your project in Week 2, but brainstorming now helps.

---

## Deliverables Checklist

Before submitting, verify you have:

- [ ] GitHub repository created: `cts285-[yourlastname]`
- [ ] Repository is **private**
- [ ] `test.py` file exists and runs successfully
- [ ] `sdlc-exploration.md` with all 3 questions answered
- [ ] (Optional) `project-ideas.md` with 3 project ideas
- [ ] All files committed and pushed to GitHub
- [ ] Repository link submitted in Canvas

---

## Submission Instructions

1. Push all files to your GitHub repository
2. Go to your repo on GitHub.com
3. Click the green "Code" button → copy the HTTPS URL
4. Submit the URL in Canvas assignment

**Important**: Add me as a collaborator so I can view your private repo:
- Go to Settings → Collaborators → Add people
- Add: `norrisaftcc` (or the GitHub username I provide in class)

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Environment Setup** | 5 | Repository created, test.py runs, proper Git commits |
| **SDLC Phase Description** | 10 | All 7 phases described with specific actions for Maria's project |
| **Waterfall vs Agile** | 8 | Clear understanding shown, examples support reasoning |
| **Real-World Reflection** | 7 | Honest reflection connecting SDLC to actual experience |
| **Bonus: Project Ideas** | +5 | (Optional) 3 viable ideas with required details |
| **Total** | 25 (+5) | |

### Grading Notes
- **Partial credit available**: If environment setup fails, document what you tried and errors you got
- **Effort matters**: Thoughtful reflection > perfect answers
- **Honesty valued**: "We skipped testing and the app crashed on launch day" is better than "We did everything perfectly"

---

## Common Issues & Solutions

### Issue: Python not recognized in terminal
**Solution**: Restart your terminal/computer after installing Python. If still not working, manually add Python to your system PATH.

### Issue: Git push asks for username/password repeatedly
**Solution**: Set up SSH keys or use GitHub's Personal Access Token for HTTPS. Follow [GitHub's guide](https://docs.github.com/en/authentication).

### Issue: "I don't have a real project to reflect on for Question 3"
**Solution**: Think broader—planning a trip, organizing an event, even a group project where you divided up tasks. Any multi-step process with goals and deliverables counts.

### Issue: VS Code not showing Git options
**Solution**: Make sure you opened the folder (File → Open Folder), not just a single file. Git features only work when a folder is open.

---

## Resources

- **SDLC Overview**: [GeeksforGeeks SDLC Tutorial](https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/)
- **Waterfall vs Agile**: [Atlassian's Guide](https://www.atlassian.com/agile/project-management/project-management-intro)
- **Git Basics**: [GitHub's Hello World Tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)
- **Markdown Guide**: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

**Office Hours**: Listed in Canvas → Check syllabus for Zoom link

---

## Looking Ahead: Week 2

Next week, you'll:
- Officially choose your semester project
- Learn about stakeholder analysis
- Start writing your first user stories
- Experience a simulated Agile sprint (paper-based, low stress)

The SDLC knowledge you're building this week becomes the foundation for everything else.

---

## Andrew's Note

<details>
<summary>🎭 <strong>AlgoCratic Lens:</strong> View this assignment through the dystopian framework (optional)</summary>

### CLEARANCE LEVEL: INFRARED
### ORIENTATION PROTOCOL 285.1.A

Welcome, citizen! You have been assigned to Sector 285: Systems Analysis & Productivity Optimization.

**The Algorithm** has determined that your previous project management experience was... *inefficient*. Through this orientation, you will be recalibrated to approved methodologies.

**CORPORATE MEMO 285.1**: All personnel must establish compliant development environments. Failure to configure tools correctly will result in productivity demerits affecting your Clearance Level progression.

**Your reflection on past projects** (Question 3) will be analyzed for patterns of dissent—er, *opportunities for improvement*. Be thorough. The Algorithm values transparency.

**Remember**: The SDLC is not a suggestion. It is the path to Optimal Output™.

*End transmission. Report environmental readiness by Week 1 deadline. Compliance is efficiency. Efficiency is happiness.*

</details>

---

**Real talk**: This is your foundation week. Get your environment working now, and you'll thank yourself later when we're knee-deep in Flask routes and database migrations.

I've seen students skip the "boring" setup and regret it in Week 8 when they're troubleshooting environment issues instead of building features.

**You've got this.** Setting up tools feels tedious, but it's the professional way to start. Every developer does this for every new project.

The SDLC questions aren't busywork—understanding *why* we follow structured processes separates software engineers from people who just "wing it and hope." You're becoming the former.

See you in class!

— Andrew Norris

