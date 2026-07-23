<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_16_Final_Delivery_Process_Portfolio.md
  verdict: ADAPT
  target-26FA-slot: CSC-289 P4 M8
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 16: Final Delivery & Process Portfolio
**CSC-289: Programming Capstone Project**

**Due**: End of Week 16
**Points**: 175 points (M08-A1: 100 pts, M08-A2: 75 pts)
**CLOs Addressed**: All CLOs (1-6)

---

## Assignment Overview

Complete your capstone journey with final technical delivery and comprehensive process portfolio demonstrating PM mastery from CSC-113 through CSC-289.

---

## Part 1: Final Project Technical Deliverable (100 points)

### **Requirements**

#### **1. Working Deployed Application (50 points)**

**MVP Must Be Functional**:
- Core features work (as defined in Week 1 project charter)
- User can complete primary user flows without critical bugs
- Accessible via URL (not just localhost)
- Responsive (works on mobile and desktop)

**Deployment Platforms** (choose one):
- Vercel, Netlify, Render, Railway, Fly.io, GitHub Pages (for static sites)
- Heroku (if free tier available)
- Custom VPS (only if you're experienced)

**Submit**: Live URL + brief deployment notes (platform used, any gotchas)

---

#### **2. Code Quality & Documentation (25 points)**

**Repository Structure**:
- Clean file organization
- README.md with setup instructions
- .gitignore (no sensitive files committed)
- Environment variables properly handled

**Code Quality**:
- Readable (meaningful names, logical structure)
- Comments where needed (explain WHY, not WHAT)
- No obvious bugs in core features
- Error handling (graceful failures, user-friendly messages)

**README Requirements**:
```markdown
# [Project Name]

[Project description - 2-3 sentences]

**Live Demo**: [URL]

---

## Features

- [Feature 1]
- [Feature 2]
- [Feature 3]

---

## Tech Stack

- **Frontend**: [React, Vue, vanilla JS, etc.]
- **Backend**: [Node.js, Python Flask, etc.]
- **Database**: [PostgreSQL, MongoDB, etc.]
- **Deployment**: [Platform]

---

## Installation (Local Development)

```bash
# Clone repository
git clone [URL]

# Install dependencies
[commands]

# Set up environment variables
[instructions]

# Run locally
[commands]
```

## Contributors

### Development
- **[Your Name]** - Software Developer, Project Lead

### Design
- **[GRD Student Name]** - Brand Identity & Visual Design
  - Logo system, color palette, icon set
  - **Course**: GRD-242 (Graphic Design IV)
  - **Institution**: FTCC

## Acknowledgments

- Andrew Norris (CSC-289 Instructor)
- Jennifer Fisher (GRD-242 Instructor)
- [Any other helpers, resources, libraries]

## License

[Choose a license - MIT is common for student projects]

---

Created as capstone project for CSC-289 | FTCC Spring 2026
```

---

#### **3. Testing & Polish (25 points)**

**Testing Evidence**:
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile device testing (not just responsive mode)
- Accessibility audit (WCAG AA contrast, keyboard nav)
- Known issues documented (GitHub Issues or README section)

**Create** `TESTING_REPORT.md`:
```markdown
# Testing Report: [Project Name]

**Testing Date**: [Date]
**Tester**: [Your Name]

---

## Cross-Browser Testing

| Browser | Version | OS | Status | Issues |
|---------|---------|-----|--------|--------|
| Chrome | [version] | macOS/Windows | ✅ Pass | None |
| Firefox | [version] | macOS/Windows | ✅ Pass | Minor CSS issue (logged #X) |
| Safari | [version] | macOS/iOS | ⚠️ Partial | [Describe issue] |

---

## Device Testing

| Device | OS | Screen Size | Status | Issues |
|--------|-----|-------------|--------|--------|
| iPhone 13 | iOS 16 | 390x844 | ✅ Pass | None |
| Galaxy S21 | Android 12 | 360x800 | ✅ Pass | None |
| iPad Air | iOS 16 | 820x1180 | ✅ Pass | None |

---

## Accessibility Audit

**Tools Used**: WebAIM Contrast Checker, Lighthouse, WAVE

| Criterion | Status | Notes |
|-----------|--------|-------|
| Color Contrast (WCAG AA) | ✅ Pass | All text meets 4.5:1 ratio |
| Keyboard Navigation | ✅ Pass | All interactive elements accessible |
| Screen Reader | ⚠️ Partial | Some icon buttons missing aria-labels |
| Form Labels | ✅ Pass | All inputs properly labeled |

**Lighthouse Score**: [Score] / 100

---

## Known Issues

### Critical (Blocks Core Functionality)
- None

### Important (Degrades UX)
- Issue #45: Login form doesn't show loading state
- Issue #52: Error messages disappear too quickly

### Minor (Nice to Fix)
- Issue #60: Icon alignment off by 2px on mobile
- Issue #63: Footer text wraps awkwardly on 320px screens

---

## Performance Testing

- **Page Load Time**: [X seconds] (target: < 3s)
- **Largest Contentful Paint**: [X seconds] (target: < 2.5s)
- **Total Bundle Size**: [X KB]

---

**Testing Completed By**: [Your Name]
**Date**: [Date]
```

---

## Part 2: Process Portfolio & Presentation (75 points)

### **Deliverable 2A: Process Portfolio (40 points)**

Compile comprehensive PM documentation demonstrating your journey from CSC-113 to CSC-289 mastery.

#### **Portfolio Structure**

Create `PROCESS_PORTFOLIO.md`:

```markdown
# Process Portfolio: [Project Name]
**Student**: [Your Name]
**Course**: CSC-289 Programming Capstone Project
**Instructor**: Andrew Norris
**Semester**: Spring 2026

---

## Executive Summary

[1-page overview - write this LAST]

**Project**: [Name and description]

**PM Journey**: [How your PM skills evolved from CSC-113 to now]

**Key Achievements**:
- [Achievement 1 - e.g., "Velocity improved 100% from Sprint 1 to Sprint 8"]
- [Achievement 2 - e.g., "Successfully managed cross-functional collaboration with GRD designer"]
- [Achievement 3 - e.g., "Delivered MVP on time despite 3 major technical blockers"]

**Lessons Learned**: [Top 3 PM lessons that will impact your career]

---

## 1. Project Overview

### Project Vision
[Copy from Week 1 Project Charter]

### Success Criteria Review

**MVP Goals (Week 1)**:
- [ ] Goal 1: [Status: ✅ Achieved / ⚠️ Partial / ❌ Not met]
- [ ] Goal 2: [Status]
- [ ] Goal 3: [Status]

**Technical Success Criteria**:
- [ ] Deployed application: ✅ [URL]
- [ ] Core features functional: ✅
- [ ] Responsive design: ✅
- [ ] Accessibility (WCAG AA): ⚠️ Partial (aria-labels incomplete)

**Process Success Criteria**:
- [ ] All 8 sprints completed: ✅
- [ ] GRD collaboration successful: ✅
- [ ] Velocity improved: ✅ (6 pts → 15 pts)
- [ ] Process portfolio complete: ✅

---

## 2. Sprint Summary & Velocity Progression

| Sprint | Weeks | Planned | Delivered | Velocity | Accuracy |
|--------|-------|---------|-----------|----------|----------|
| **1** | 2-3 | 12 pts | 6 pts | 6 pts | 50% |
| **2** | 4-5 | 12 pts | 10 pts | 10 pts | 83% |
| **3** | 6-7 | 10 pts | 9 pts | 9 pts | 90% |
| **4** | 8 | 13 pts | 12 pts | 12 pts | 92% |
| **5** | 9-10 | 15 pts | 14 pts | 14 pts | 93% |
| **6** | 11-12 | 16 pts | 15 pts | 15 pts | 94% |
| **7** | 12-14 | 13 pts | 13 pts | 13 pts | 100% |
| **Total** | | **91 pts** | **79 pts** | | **87%** |

**Velocity Chart**: [Include graph showing velocity progression]

**Analysis**:
- Sprint 1: Underestimated complexity (50% accuracy) - learning curve
- Sprints 2-4: Velocity stabilized around 10-12 pts
- Sprints 5-7: Velocity increased to 13-15 pts as efficiency improved
- Overall: 79/91 points delivered (87% commitment accuracy)

---

## 3. Estimation Accuracy Improvement

### Sprint 1 vs Sprint 7 Comparison

**Sprint 1 Estimation Errors**:
- Underestimated backend work by 60%
- Didn't account for learning curve with new tech stack
- No buffer for unknowns

**Sprint 7 Estimation**:
- Backend estimates within 10% of actual
- Included research spikes for unknowns
- Added 20% buffer for testing/polish

**How I Improved**:
1. Tracked actual hours vs estimated for each story
2. Identified patterns (backend always takes longer)
3. Created personal "estimation adjustment factors"
4. Used historical velocity data instead of gut feeling

---

## 4. GRD-242 Collaboration Analysis

### Collaboration Timeline

**Week 6**: Design brief presentation
**Week 7**: Iteration cycle (3 rounds of feedback)
**Week 8**: Final asset integration

### Assets Delivered

- Logo system (SVG, color + monochrome)
- Color palette (7 colors, WCAG AA compliant)
- Icon set (15 icons)
- Hero image (responsive variants)

### Collaboration Challenges & Solutions

**Challenge 1**: Initial icon set had inconsistent stroke widths
- **Solution**: Provided specific feedback with visual examples
- **Outcome**: Designer revised within 24 hours

**Challenge 2**: Hero image file size exceeded limit (2MB vs 500KB)
- **Solution**: Negotiated WebP format at 85% quality
- **Outcome**: 320KB final size, maintained visual quality

### PM Skills Demonstrated

✅ **Stakeholder Management**: Clear requirements, professional feedback
✅ **Risk Mitigation**: Placeholder assets ready if designer delayed
✅ **Communication**: Weekly check-ins, transparent iteration
✅ **Gratitude**: Proper attribution, collaboration closure

---

## 5. Adaptive Planning Examples

### Example 1: API Rate Limit Risk Materialized (Sprint 3)

**Situation**: Hit OpenAI API free tier limit during testing

**Original Plan**: Use OpenAI API for all AI features

**Adapted Plan**:
- Implemented caching (reduced API calls 60%)
- Added rate limiting on frontend
- Created fallback mock responses for demo

**Outcome**: Risk mitigated, feature still functional

**PM Lesson**: Risks aren't failures—having mitigation plans saved the sprint

---

### Example 2: Scope Cut Decision (Sprint 6)

**Situation**: Behind schedule, 3 Should-Have stories incomplete

**Original Plan**: All Should-Have features in MVP

**Adapted Plan**:
- Cut "dark mode" and "task categories" features
- Documented as "v2.0 Future Enhancements"
- Focused on testing and polish instead

**Outcome**: Delivered polished core features vs. half-finished bloat

**PM Lesson**: Saying "no" is a PM skill—shipped MVP on time

---

## 6. Process Artifacts Archive

**All sprint documentation preserved in repository**:

```
/docs/process/
├── sprint-1/
│   ├── SPRINT_1_PLANNING.md
│   ├── SPRINT_1_STANDUPS.md
│   ├── SPRINT_1_REVIEW.md
│   └── SPRINT_1_RETROSPECTIVE.md
├── sprint-2/
│   └── [same structure]
├── [sprint-3 through sprint-7]/
├── risks/
│   └── RISK_REGISTER.md (updated weekly)
├── collaboration/
│   ├── DESIGN_BRIEF.md
│   ├── DESIGN_FEEDBACK_WEEK7.md
│   └── DESIGN_INTEGRATION_PR.md
└── final/
    ├── TESTING_REPORT.md
    └── PROCESS_PORTFOLIO.md (this file)
```

**GitHub Metrics**:
- Total Commits: [X]
- Pull Requests: [X]
- Issues Closed: [X]
- Lines of Code: [X]

---

## 7. PM Growth Reflection

### My PM Journey: CSC-113 → CSC-289

**CSC-113 (Fall 2025)**: Introduced to Sacred Flow, basic sprints
- **PM Level**: Novice (following templates, instructor-led)
- **Key Skill**: GitHub workflow basics

**CSC-114 (Fall 2025)**: Scrum fundamentals, user stories, estimation
- **PM Level**: Developing (understanding ceremonies, basic planning)
- **Key Skill**: Sprint planning and retrospectives

**CSC-249 (Spring 2026)**: Complete sprint cycles, velocity tracking
- **PM Level**: Competent (self-directed sprints, improving estimates)
- **Key Skill**: Data-driven estimation

**CTS-285 (Spring 2026)**: Agile mindset, stakeholder management, risk
- **PM Level**: Proficient (strategic planning, risk mitigation)
- **Key Skill**: Adaptive planning

**CSC-289 (Spring 2026)**: Full autonomy, cross-team collaboration
- **PM Level**: **Mastery** (professional-level PM execution)
- **Key Skill**: Cross-functional collaboration and professional communication

---

### What Worked (PM Practices That Were Valuable)

1. **Daily Standups**: Kept me accountable, prevented "lost weeks"
2. **Retrospectives**: Action items drove continuous improvement
3. **Velocity Tracking**: Eliminated guessing, enabled realistic planning
4. **Risk Registers**: Proactive mitigation > reactive firefighting
5. **GitHub Issues**: Transparent backlog visible to stakeholders

---

### What Didn't Work (PM Practices I'd Change)

1. **Over-planning Sprint 1**: Spent 6 hours planning, should have started coding sooner
2. **Skipping Mid-Sprint Check-ins**: Waited until sprint review to realize I was behind
3. **Vague Action Items**: "Improve estimates" too broad, didn't change behavior

---

### Adaptive Moments (Times I Changed the Plan)

**Best Decision**: Cutting scope in Sprint 6 to focus on quality
**Hardest Decision**: Accepting "good enough" design integration (wanted perfection)
**Biggest Learning**: Plans will change—process matters more than sticking to original plan

---

### Future Application (How I'll Use PM Skills in Career)

**Junior Developer Role**:
- Sprint planning, standups, retrospectives are standard in Agile teams
- GitHub workflow (PRs, issues, reviews) is industry practice
- Estimation and velocity tracking expected in professional teams

**Cross-Functional Collaboration**:
- GRD collaboration = working with designers in real job
- Feedback iteration = daily occurrence in product teams
- Stakeholder communication = talking to product managers, QA, etc.

**Process Portfolio as Résumé Evidence**:
- Can show employers: "I managed a 16-week project autonomously"
- Velocity progression demonstrates learning and improvement
- Collaboration artifacts prove soft skills (communication, professionalism)

---

## 8. Final Metrics & KPIs

**Process Quality Metrics**:
- Sprint Completion Rate: 87% (79/91 pts delivered)
- Estimation Accuracy: 50% (Sprint 1) → 100% (Sprint 7)
- Standup Consistency: 62/70 days (89%)
- Retrospective Action Item Implementation: 85%

**Technical Quality Metrics**:
- Code Commits: [X]
- Pull Requests Merged: [X]
- Test Coverage: [X%]
- Accessibility Score: [X/100]

**Collaboration Metrics**:
- Design Feedback Cycles: 3
- Designer Response Time: <24 hours average
- Asset Integration Success: 100% (all assets integrated)

---

**Portfolio Compiled By**: [Your Name]
**Date**: [Date]
**Total PM Documentation**: [X pages across all sprints]
```

---

### **Deliverable 2B: PM Reflection Essay (20 points)**

Write 3-5 pages addressing these prompts:

1. **PM Journey Narrative**: How did your understanding of project management evolve from CSC-113 to CSC-289? Use specific examples from each course.

2. **Process Over Product**: Explain Drew Norris's "process-over-perfection" philosophy in your own words. How did this mindset change your approach to development?

3. **Cross-Team Collaboration**: What did the GRD-242 collaboration teach you about working with non-technical stakeholders? How will this apply to your career?

4. **Adaptive Planning**: Describe the biggest moment when your plan changed. How did you decide what to do? What would you do differently?

5. **Failure as Learning**: What was your biggest "failure" in CSC-289? What did you learn from it? How did retrospectives help you learn from mistakes?

6. **Career Readiness**: How do you feel prepared (or not) for a junior developer role? What PM skills do you still want to develop?

**Format**: Markdown, PDF, or Google Doc (must be readable)

---

### **Deliverable 2C: Final Presentation (15 points)**

Present your capstone to stakeholders (Andrew Norris, peers, possibly GRD students).

**Presentation Format**:
- **Duration**: 12-15 minutes + 3-5 min Q&A
- **Delivery**: In-person or recorded video

**Presentation Structure**:

1. **Project Overview** (2 min)
   - Problem, solution, target users
   - Quick demo of core feature

2. **Technical Highlights** (3 min)
   - Tech stack choices and rationale
   - Interesting technical challenges solved
   - Live demo of key user flow

3. **Design Integration** (2 min)
   - Before/after screenshots (pre-design vs GRD assets)
   - Credit GRD designer by name
   - Show how design improved UX

4. **PM Journey** (3 min)
   - Velocity progression chart
   - Estimation accuracy improvement
   - Key retrospective learnings

5. **Challenges & Adaptation** (2 min)
   - Biggest blocker and how you overcame it
   - Scope cut decision (if applicable)
   - Risk that materialized and your response

6. **Lessons Learned** (2 min)
   - Top 3 PM lessons from CSC-289
   - How this prepares you for career
   - What you'd do differently on next project

**Slides**: Optional but recommended (max 15 slides)

**Submit**: Slide deck (PDF) + recording link (if online) OR in-person presentation attendance

---

## Submission Requirements

### **Submit to Canvas**:

1. **Technical Deliverable**:
   - Live application URL
   - GitHub repository link
   - README.md (in repo)
   - TESTING_REPORT.md (in repo or PDF)

2. **Process Portfolio**:
   - PROCESS_PORTFOLIO.md (or PDF, 15-25 pages)
   - All sprint artifacts (link to `/docs/process/` in repo)
   - Velocity progression chart (graph/image)

3. **Reflection Essay**:
   - 3-5 pages addressing prompts
   - Markdown, PDF, or Google Doc

4. **Final Presentation**:
   - Slide deck (PDF)
   - Recording (if online) OR confirmation of in-person attendance

---

## Grading Rubric

### **Part 1: Technical Deliverable (100 points)**

| Component | Excellent | Proficient | Developing | Needs Improvement |
|-----------|-----------|------------|------------|-------------------|
| **Working Software (50 pts)** | MVP fully functional, deployed, responsive, polished | Core features work, deployed, minor bugs | Partially functional, deployment issues | Major features broken or not deployed |
| **Code Quality (25 pts)** | Clean, documented, maintainable, no major issues | Acceptable quality, some documentation | Code quality issues, minimal docs | Poor quality, undocumented |
| **Testing & Polish (25 pts)** | Comprehensive testing, accessibility audit, known issues documented | Adequate testing, some polish | Limited testing, rough edges | No testing evidence, many bugs |

---

### **Part 2: Process Portfolio & Presentation (75 points)**

| Component | Excellent | Proficient | Developing | Needs Improvement |
|-----------|-----------|------------|------------|-------------------|
| **Portfolio Completeness (20 pts)** | All sprints documented, comprehensive metrics, clear narrative | Most artifacts present, good coverage | Some gaps, adequate documentation | Incomplete portfolio, missing artifacts |
| **Portfolio Depth (20 pts)** | Insightful analysis, demonstrates PM mastery, evidence-based | Good analysis, shows PM competency | Surface-level, limited insight | Superficial, no real analysis |
| **Reflection Essay (20 pts)** | Thoughtful, specific examples, career connections | Good reflection, addresses prompts | Basic reflection, generic | Minimal effort, missing prompts |
| **Presentation (15 pts)** | Professional delivery, clear narrative, time management, engaging | Good presentation, covers all sections | Adequate, some gaps or time issues | Poor delivery, incomplete, unprepared |

---

## Tips for Success

### **Final Week Strategy**

**Days 1-2**: Code freeze, final testing
**Days 3-4**: Compile process portfolio
**Days 5-6**: Write reflection essay
**Day 7**: Create presentation
**Days 8-10**: Rehearse, final polish

---

### **Process Portfolio Tips**

✅ Start compiling in Week 15 (don't wait until Week 16)
✅ Use sprint artifacts you already created (don't rewrite)
✅ Include visuals (velocity charts, screenshots)
✅ Tell a story (not just data dump)

---

### **Presentation Tips**

✅ Practice timing (12-15 min exactly)
✅ Demo WORKING features (not slides saying "this would work")
✅ Credit collaborators (GRD designer, Andrew, helpers)
✅ End with "what's next" (v2.0 features, career goals)

---

## Connection to Course Outcomes

**CLO 1**: Autonomous PM demonstrated through complete project cycle
**CLO 2**: Cross-functional collaboration shown through GRD integration
**CLO 3**: Design evaluation evidenced in integration testing
**CLO 4**: Adaptive planning documented in retrospectives and scope decisions
**CLO 5**: Process portfolio is comprehensive documentation
**CLO 6**: Professional practices shown in GitHub workflow, testing, deployment

---

**Congratulations on completing CSC-289!** 🎉

---

**Last Updated**: January 20, 2026
