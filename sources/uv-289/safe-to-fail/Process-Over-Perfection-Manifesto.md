<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/safe-to-fail/Process-Over-Perfection-Manifesto.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 (course-wide)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Process-Over-Perfection Manifesto
**CSC-289: Programming Capstone Project**

---

## Core Philosophy

In CSC-289, **how you work matters more than perfection**. You will be assessed primarily on:
- 📋 **Process quality** (60% of grade): Planning, communication, adaptation, documentation
- 💻 **Technical delivery** (40% of grade): Working software, code quality

**Why?** Real-world software development is messy, iterative, and collaborative. Employers hire developers who can:
- Manage projects independently using Agile/Scrum practices
- Adapt when plans change (and they always change)
- Communicate professionally across teams
- Learn from failures and iterate
- Document decisions for future maintainers

Perfect code that's late, poorly documented, or built without stakeholder input is **worse** than imperfect code delivered through excellent process.

---

## What "Safe-to-Fail" Means

### ✅ **You WILL Be Rewarded For:**

1. **Transparent Failure Documentation**
   - Retrospectives that honestly discuss what didn't work
   - GitHub Issues tracking blockers and how you resolved them
   - Sprint planning showing you over-committed, then adjusted
   - Risk registers documenting problems you anticipated (even if they occurred)
   - **Example**: "Sprint 3 Retrospective: I estimated logo integration at 3 points, but it was actually 8 points due to SVG optimization issues. Lesson: Add buffer time for unfamiliar tasks. Action: Research SVG best practices before Sprint 4."

2. **Iteration and Adaptation**
   - Changing sprint plans mid-sprint when blockers arise
   - Re-estimating story points based on velocity data
   - Cutting scope to meet deadlines (with documented rationale)
   - Pivoting design decisions based on user feedback or technical constraints
   - **Example**: "Week 7: Designer's hero image was 2MB (exceeded limit). Negotiated WebP compression. Final: 320KB. Documented trade-off: slight quality reduction for 6x performance gain."

3. **Proactive Communication**
   - Posting daily standups even when progress is slow
   - Escalating blockers BEFORE they become crises
   - Asking for help when stuck (instructors, peers, GRD collaborators)
   - Giving constructive feedback to designers (not just "looks good")
   - **Example**: "Week 6 Standup: Blocker - API rate limit hit during testing. Action: Researching caching strategies, will ask Andrew in office hours if still stuck tomorrow."

4. **Process Discipline**
   - Maintaining sprint artifacts even when busy/stressed
   - Consistent commit messages following Sacred Flow
   - Regular retrospectives with actionable improvements
   - Risk register updates each sprint (even if no new risks)
   - **Example**: Even if your code is buggy in Sprint 2, a complete sprint planning doc + retrospective with learnings earns process points.

5. **Learning and Growth**
   - Retrospectives showing evolution (Sprint 1 → Sprint 8)
   - Velocity improvement over time
   - Estimation accuracy improving based on historical data
   - Applying lessons from prior sprints
   - **Example**: "Sprint 1 velocity: 8 pts. Sprint 4 velocity: 15 pts. Estimation accuracy improved from 40% to 85% by tracking actual hours vs estimates."

---

### ❌ **You WILL Be Penalized For:**

1. **Hiding Problems**
   - Retrospectives that say "everything went perfectly" (dishonest or lacks reflection)
   - No standup logs when you're stuck (failure to communicate blockers)
   - Skipping sprint planning because you're behind (abandoning process under pressure)
   - Not updating risk register when risks materialize (learning opportunity missed)

2. **Blaming Without Learning**
   - "Designer was late, so I couldn't finish" (no backup plan, no documented impact)
   - "API documentation was bad, that's why I failed" (didn't seek alternative resources)
   - Retrospectives focused on external blame, no personal action items

3. **Abandoning Process**
   - Inconsistent standups (only posting when progress is good)
   - Missing sprint planning or retrospectives
   - No commit messages or vague messages ("fixed stuff")
   - Skipping documentation because "code is self-explanatory"

4. **Unprofessional Collaboration**
   - Ghosting GRD designer after getting feedback
   - Vague or harsh design feedback ("I don't like this, redo it")
   - Not crediting designer in project
   - Failing to communicate delays to stakeholders (instructor, designer)

---

## The Grading Philosophy

### **Process Points (60%)**

Your process grade is based on:

#### **Sprint Management (20%)**
- Sprint planning quality (realistic commitments, clear goals)
- Sprint execution (working toward sprint goal, adapting as needed)
- Sprint reviews (demos showing progress)
- Sprint retrospectives (honest reflection, actionable improvements)

**Excellent Example**: "Sprint 3 Goal: Integrate design assets and implement authentication. Completed: Design assets + login (80% of goal). Incomplete: Registration (moved to Sprint 4). Retrospective identified: Underestimated OAuth complexity (5pts estimated, 13pts actual). Action: Research OAuth providers before Sprint 4 planning."

**Poor Example**: "Sprint 3: Did some coding. Everything was fine." (No goal, no specific accomplishments, no reflection)

---

#### **Daily Process (15%)**
- Standup consistency (minimum 8 entries per 2-week sprint)
- Standup quality (specific progress, blockers, plans)
- Commit message discipline (follows Sacred Flow conventions)
- GitHub workflow (proper branches, PRs, issue tracking)

**Excellent Example**:
```markdown
## Standup - Week 7, Day 3

**Yesterday**: Reviewed designer's icon set, created evaluation using framework, sent feedback via GitHub Issue #42
**Today**: Waiting on icon revisions, will work on backend API endpoints for user profile
**Blockers**: None currently, but need icons by Friday to stay on Sprint 3 timeline

**Notes**: Designer responded quickly to feedback—collaboration going well!
```

**Poor Example**:
```markdown
## Standup - Week 7

Did some design stuff. Coding later.
```

---

#### **Risk and Adaptation (10%)**
- Risk register maintained (identified, assessed, mitigated)
- Proactive problem-solving (addressing risks before they explode)
- Adaptive planning (changing course when needed, with rationale)
- Scope management (intentional cuts, documented reasons)

**Excellent Example**: "Risk: GRD designer might deliver late (probability: medium, impact: high). Mitigation: Using placeholder assets in parallel, can continue backend work if designs delayed. Trigger: If no designs by Week 7 Day 3, escalate to instructors."

**Poor Example**: Risk register empty or never updated.

---

#### **Cross-Team Collaboration (10%)**
- Design brief quality (clear requirements, technical constraints)
- Feedback professionalism (constructive, actionable, respectful)
- Iteration documentation (transparent record of feedback cycles)
- Designer attribution (proper credit in multiple locations)

**Excellent Example**: "Week 7 Feedback: Icon 'notification-bell' has 2px stroke (others are 1.5px). Suggest standardizing. Rationale: Visual consistency improves UX. Priority: Nice-to-have. Designer agreed, revised same day."

**Poor Example**: "Icons look weird. Fix them."

---

#### **Documentation Quality (5%)**
- README clarity (project overview, setup, designer credits)
- Sprint artifacts completeness (planning, standups, reviews, retros)
- Technical documentation (code comments, API docs)
- Process portfolio (final reflection on PM journey)

---

### **Technical Delivery (40%)**

Your technical grade is based on:

#### **Working Software (20%)**
- Core features functional (MVP delivered)
- User stories completed (acceptance criteria met)
- Integration quality (design assets properly incorporated)
- Deployment (accessible via URL, not just localhost)

**Note**: Bugs are expected! As long as core functionality works and you documented known issues (in GitHub Issues or README), minor bugs don't tank your grade.

---

#### **Code Quality (10%)**
- Readable code (meaningful variable names, logical structure)
- Comments where needed (explain WHY, not WHAT)
- No major code smells (excessive duplication, spaghetti logic)
- Error handling (graceful failures, user-friendly messages)

**Note**: Your code doesn't need to be enterprise-grade. As long as another developer (or future you) can understand and maintain it, it's acceptable.

---

#### **Testing and Polish (10%)**
- Acceptance testing (verified against user stories)
- Cross-browser/device testing (works on mobile and desktop)
- Accessibility basics (WCAG AA contrast, keyboard nav)
- Performance (page load < 3 seconds, images optimized)

---

## Real-World Examples

### **Scenario 1: Sprint Fails, But Process Succeeds**

**Situation**: Student plans Sprint 4 with 20 story points. By mid-sprint, only 8 points completed. Major blocker: Third-party API changed unexpectedly.

**Poor Response** (Low Process Grade):
- No standup logs documenting blocker
- Skips sprint review because "nothing works"
- Retrospective: "API broke, not my fault"
- Outcome: **Process failure**—even though technical issue was external, student abandoned process under pressure.

**Excellent Response** (High Process Grade):
- Day 4 standup: "Blocker - API v2 deprecated, need to migrate. Researching alternatives."
- Day 6 standup: "Still blocked. Escalated to Andrew, considering fallback: mock API for demo."
- Sprint review: "Completed 8/20 points. Major blocker: API migration. Implemented mock API temporarily. Sprint 5 will prioritize fixing API integration."
- Retrospective: "What didn't go well: Didn't monitor API changelog. Action: Subscribe to API status updates, add 'API risk' to risk register. What went well: Mock API unblocked frontend development."
- Outcome: **Process success**—even though sprint goal wasn't met, student demonstrated professional problem-solving, communication, and learning.

**Grade Impact**:
- Poor response: 5/20 process points for sprint management (abandoned process)
- Excellent response: 18/20 process points (professional adaptation, transparent communication)

---

### **Scenario 2: Perfect Code, Poor Process**

**Situation**: Student delivers beautiful, bug-free capstone project. However:
- No sprint planning documents
- 2 standup entries total (vs. required 40+ across 8 sprints)
- 1 retrospective (token effort in Week 16)
- Vague commit messages ("update", "changes", "fixed")
- No designer attribution

**Grade**:
- Technical delivery: 38/40 (nearly perfect code)
- Process quality: 15/60 (insufficient documentation, poor workflow)
- **Total: 53/100 (F)** - despite excellent code!

**Why?** Course learning outcomes include **project management mastery**, not just coding skills. An employer hiring for junior developer role expects process discipline, not just code.

---

### **Scenario 3: Imperfect Code, Excellent Process**

**Situation**: Student delivers MVP capstone with some bugs. However:
- Complete sprint artifacts (planning, standups, reviews, retros) for all 8 sprints
- Velocity improved from 8pts (Sprint 1) to 18pts (Sprint 8)
- Estimation accuracy increased demonstrably
- GitHub Issues tracking 12 known bugs (triaged by severity)
- README: "Known Issues" section lists bugs with workarounds
- Designer fully credited in README, app footer, commits, presentation
- Process portfolio shows deep reflection on PM journey

**Grade**:
- Technical delivery: 28/40 (functional MVP with documented bugs)
- Process quality: 57/60 (exemplary process documentation)
- **Total: 85/100 (B)** - despite imperfect code!

**Why?** Student demonstrated they can manage a complex project, adapt to challenges, communicate professionally, and document decisions—all skills that translate to workplace success. The bugs can be fixed; professional process habits are harder to teach.

---

## Growth Grading Rubric

**We reward improvement over time, not just final state.**

### **Sprint 1 vs Sprint 8 Comparison**

**Example: Estimation Accuracy**
- Sprint 1: Estimated 15 pts, completed 6 pts (40% accuracy)
- Sprint 8: Estimated 18 pts, completed 17 pts (94% accuracy)
- **Outcome**: Student demonstrates learning and data-driven improvement. Rewarded in process portfolio grade.

**Example: Retrospective Depth**
- Sprint 1 Retro: "Good sprint. Will do better next time." (superficial)
- Sprint 8 Retro: "Completed 17/18 pts. What went well: Daily standups kept me accountable, mock API strategy unblocked frontend work. What didn't go well: Spent 4 hours debugging CORS issue that Stack Overflow solved in 10 min—lesson: google error messages earlier. Action: Create 'blockers checklist' for common issues before asking for help."
- **Outcome**: Student shows mature reflection and actionable insights. High retrospective quality grade.

---

## Instructor Expectations

### **What Andrew Norris Looks For**

✅ **Honesty**: Retrospectives that vulnerably discuss struggles
✅ **Consistency**: Sprint artifacts maintained even during busy weeks
✅ **Adaptation**: Evidence of learning from prior sprints
✅ **Communication**: Proactive escalation of blockers
✅ **Gratitude**: Professional acknowledgment of collaborators (designers, peers, AI tools)
✅ **Craftsmanship**: Commit messages and documentation that respect future maintainers

---

### **Red Flags** (Indicators of process problems)

🚩 **Inconsistent standups**: Only posts when making progress
🚩 **Generic retrospectives**: "Everything was fine" repeated every sprint
🚩 **No velocity change**: Same estimation errors in Sprint 8 as Sprint 1 (no learning)
🚩 **Silent failures**: Blocker appears in Week 8 that existed in Week 3 but was never mentioned
🚩 **Blame-focused**: Retrospectives blame external factors without personal action items
🚩 **Process abandonment**: Missing artifacts when "too busy coding"

---

## Student Self-Assessment Questions

Before submitting each sprint, ask yourself:

### **Planning & Execution**
- [ ] Did I create a sprint plan BEFORE starting work?
- [ ] Did my sprint have a clear, measurable goal?
- [ ] Did I adjust my plan when blockers arose?
- [ ] Did I communicate changes to stakeholders (instructor, designer)?

### **Daily Work**
- [ ] Did I post at least 8 standup entries this sprint?
- [ ] Do my standups honestly describe blockers (not just progress)?
- [ ] Are my commit messages descriptive and follow Sacred Flow?
- [ ] Did I create GitHub Issues for features/bugs?

### **Collaboration**
- [ ] Did I give my GRD designer actionable, respectful feedback?
- [ ] Did I respond to design iterations within 24-48 hours?
- [ ] Did I credit collaborators in my documentation?
- [ ] Did I escalate problems proactively (not last-minute)?

### **Reflection**
- [ ] Does my retrospective discuss BOTH successes and failures?
- [ ] Did I identify at least 2 specific action items for next sprint?
- [ ] Did I actually implement action items from prior retrospectives?
- [ ] Can I articulate what I learned about PM this sprint?

**If you answered "No" to multiple questions**: Your process grade is at risk. Focus on documentation and communication, not just code.

---

## The Bottom Line

**Perfect code + poor process = Failure (by industry standards)**

Employers can teach you frameworks and languages. They can't teach you:
- To communicate proactively when stuck
- To document decisions for future teams
- To adapt professionally when plans change
- To collaborate respectfully with non-technical stakeholders
- To reflect on failures and improve

**CSC-289 prioritizes these skills because they matter more than syntax.**

Your capstone project should demonstrate:
1. You can manage a complex project independently
2. You can navigate ambiguity and setbacks professionally
3. You can collaborate across disciplines (design, stakeholders)
4. You can learn from failures and iterate
5. You can deliver working software through disciplined process

**That's what hiring managers look for. That's what we're grading.**

---

## Resources

- [Sprint Process Rubric](../rubrics/Sprint-Process-Rubric.md)
- [Retrospective Vulnerability Guide](Retrospective-Vulnerability-Guide.md)
- [Failure Documentation Template](Failure-Documentation-Template.md)
- [Growth Grading Rubric](Growth-Grading-Rubric.md)

---

**Questions?** This philosophy feels unfamiliar or uncomfortable? That's normal! Ask Andrew Norris in office hours. Professional software development IS uncomfortable—we're preparing you for reality, not just assignments.

---

**Last Updated**: January 20, 2026
**Author**: Angela Westmoreland (Instructional Designer), based on Andrew Norris's pedagogical philosophy
