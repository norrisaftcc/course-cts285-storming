<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_06_Design_Brief_Presentation.md
  verdict: HARVEST
  target-26FA-slot: CTS-285 wk15
  ingest-date: 2026-07-23
  HARVEST: 25-pt design-brief presentation to GRD-242; the presentation structure and reflection prompts harvest into CTS-285 wk15, but the assignment as scheduled (CSC-289 wk6) is deleted by ADR-001's kill of the wk-6 first-contact model.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 6 Assignment: Design Brief Presentation to GRD-242
**CSC-289: Programming Capstone Project**

**Due**: End of Week 6
**Points**: 25 points
**CLOs Addressed**: CLO 2 (Cross-functional collaboration), CLO 3 (Evaluate design needs), CLO 5 (Document decisions)

---

## Assignment Overview

Present your capstone project to GRD-242 (Graphic Design IV) students to establish a client-developer relationship. You will pitch your project vision, demonstrate your working prototype, and clearly articulate your design needs. GRD students will use your brief to develop brand identity and visual assets for your application.

**This is a graded academic deliverable** demonstrating your ability to:
- Communicate technical projects to non-technical stakeholders
- Define design requirements using user stories
- Establish professional cross-team collaboration
- Document technical constraints clearly

---

## Context: 3/4 Through GRD-242

GRD-242 students are entering **Module 3 (Campaign Refinement)** at Week 6-7 of their 8-week course. They have completed:
- ✅ Module 1: Research, brainstorming, strategic planning
- ✅ Module 2: Logo systems and campaign development (in progress)

**Your design brief becomes their creative brief** for final campaign deliverables in Module 3.

---

## Presentation Requirements

### **Format**
- **Duration**: 15 minutes (12 min presentation + 3 min Q&A)
- **Audience**: GRD-242 students + Jennifer Fisher + Andrew Norris
- **Delivery**: In-person or synchronous online (recorded)
- **Slides**: Optional but recommended (max 10 slides)

### **Presentation Structure**

#### 1. **Project Vision** (3 minutes)
- What problem does your application solve?
- Who is your target user?
- What makes your solution unique?
- Example: "TaskMaster is a productivity app for neurodivergent college students who struggle with executive function. It uses AI-powered task breakdown and visual progress tracking to make overwhelming projects manageable."

#### 2. **Technical Demonstration** (4 minutes)
- Live demo of working prototype (even if UI is basic)
- Show core functionality working
- Highlight user flows where design assets are needed
- Example: Walk through user registration → dashboard → task creation flow, pointing out "This page needs a hero image" or "This icon set is placeholder"

#### 3. **Design Requirements** (5 minutes)
**Must include all of the following**:

**A. Brand Identity Needs**
- Tone/mood (professional, playful, minimalist, bold, etc.)
- Target audience considerations
- Competitor analysis (what visual styles to avoid/emulate)
- Example: "TaskMaster needs a calming, accessible brand. Think Headspace app meets Notion—clean, organized, not overwhelming."

**B. Visual Assets Requested**
List specific deliverables with priority (Must Have / Should Have / Could Have):
- **Must Have**: Logo (SVG), color palette (primary/secondary/accent), icon set (10-15 icons)
- **Should Have**: Hero image, onboarding illustrations, empty state graphics
- **Could Have**: Achievement badges, animated loading states, custom typography

**C. Technical Constraints**
Critical specifications that design must meet:
- File formats required (SVG, PNG, specific dimensions)
- Color accessibility requirements (WCAG AA contrast ratios)
- Size/resolution constraints (mobile responsive, max file sizes)
- Framework compatibility (e.g., "Must work with React components")
- Example: "Logo must be SVG, work in monochrome, and scale to 32x32px for favicons"

**D. User Experience Goals**
How should design support user goals?
- User stories for visual elements
- Example: "As a user with ADHD, I want calming colors and clear visual hierarchy so that I don't feel overwhelmed when I open the app"

#### 4. **Timeline & Deliverables** (2 minutes)
- When do you need assets? (Week 7 draft, Week 8 final)
- How will handoff work? (GitHub Issues, Google Drive, Figma links)
- Integration plan: When/how will you incorporate designs?

#### 5. **Questions from Designers** (3 minutes)
Be prepared to answer:
- "Do you have existing brand guidelines?"
- "What competitors' designs do you like/dislike?"
- "Can we see your user personas or research?"
- "How will you integrate our assets technically?"

---

## Required Deliverable: Design Brief Document

Submit a written design brief (GitHub Issue or markdown file) containing:

### **Design Brief Template**

```markdown
# Design Brief: [Your Project Name]

**Developer**: [Your Name]
**Project Repository**: [GitHub link]
**Date**: [Presentation date]

---

## 1. Project Overview

**Problem Statement**: [What problem does this solve?]

**Target Users**: [Who is this for?]

**Unique Value**: [Why would users choose this?]

**Project Status**: [Current sprint, MVP features completed]

---

## 2. Brand Identity Requirements

**Tone/Mood**: [Adjectives describing desired feel]

**Visual References**: [Links to inspiration - apps, websites, design systems]

**Audience Considerations**: [Age, tech-savviness, accessibility needs]

**Competitors to Differentiate From**: [List similar apps/their visual styles]

---

## 3. Visual Assets Needed

### Must Have (Critical for MVP)
- [ ] Logo (SVG, color + monochrome versions)
  - **Use Case**: App header, favicon, splash screen
  - **Technical Specs**: SVG, scalable to 32px-512px, transparent background
- [ ] Color Palette
  - **Use Case**: UI components, buttons, backgrounds
  - **Technical Specs**: Hex codes, WCAG AA compliant, 5-7 colors (primary, secondary, accent, neutrals)
- [ ] Icon Set (specify # of icons)
  - **Use Case**: Navigation, action buttons, feature indicators
  - **Technical Specs**: SVG, 24px × 24px, stroke-based preferred

### Should Have (Enhances UX)
- [ ] [Asset name]
  - **Use Case**: [Where/why used]
  - **Technical Specs**: [Format, dimensions, requirements]

### Could Have (Nice to have if time permits)
- [ ] [Asset name]
  - **Use Case**: [Where/why used]
  - **Technical Specs**: [Format, dimensions, requirements]

---

## 4. Technical Constraints

### File Format Requirements
- Logos: SVG (preferred), PNG fallback (transparent background)
- Images: PNG or WebP, max 500KB per asset
- Icons: SVG with viewBox attribute
- Color profiles: sRGB

### Accessibility Requirements
- WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI components)
- Colorblind-safe palette (test with simulators)
- Alternative text considerations (will be added in code)

### Platform/Framework Compatibility
- [List your tech stack: React, Vue, vanilla HTML/CSS, mobile app, etc.]
- [Any specific libraries: Tailwind CSS, Material-UI, custom framework]
- [Responsive breakpoints: mobile 375px, tablet 768px, desktop 1440px]

### Size/Performance Constraints
- Max file sizes: [specify limits]
- Optimization requirements: [minified, compressed, etc.]

---

## 5. User Stories for Design Assets

**As a [user type], I want [visual element] so that [UX benefit].**

Examples:
- As a new user, I want an inviting hero image on the landing page so that I immediately understand what the app does.
- As a user with low vision, I want high-contrast UI elements so that I can navigate the app without straining.
- As a mobile user, I want a simplified logo that works at small sizes so that I can recognize the app on my home screen.

---

## 6. Timeline & Handoff Process

**Week 6 (Current)**: Design brief delivered, initial discussion

**Week 7 Milestones**:
- [ ] Designer shares draft concepts (Figma/Adobe links)
- [ ] Developer provides feedback using evaluation framework
- [ ] Iteration cycle begins

**Week 8 Deliverables**:
- [ ] Final design assets delivered (Google Drive / GitHub)
- [ ] Asset handoff documentation (file structure, naming conventions)
- [ ] Developer integrates and tests assets

**Communication Protocol**:
- Primary channel: [Slack/Discord/Email]
- Weekly sync meeting: [Day/time]
- GitHub Issues for asset tracking: [Link to repo]

---

## 7. Success Criteria

**Design assets will be considered "done" when**:
- [ ] All "Must Have" assets delivered
- [ ] Assets meet technical specifications
- [ ] Accessibility requirements validated (contrast, scalability)
- [ ] Assets integrate successfully into codebase
- [ ] Designer credited in project README and presentation

---

## 8. Questions for Designer

[Pre-populate with 2-3 specific questions for GRD student]

Example:
- "What format should I provide user personas or research in?"
- "Do you prefer to work in Figma, Adobe XD, or Illustrator?"
- "How should I give feedback during iteration—annotations, written notes, video walkthrough?"

---

## 9. Designer Assignment

**Assigned GRD-242 Student**: [Name - to be filled after presentation]

**GRD Student Contact**: [Email/Discord - to be exchanged]

**GitHub Tracking Issue**: [Link - to be created after pairing]

---

**Submitted By**: [Your name]
**Reviewed By**: Andrew Norris
**Date**: [Submission date]
```

---

## Submission Requirements

### **1. Presentation Delivery**
- Present to GRD-242 class during Week 6 joint session
- Recording submitted to Canvas (if online/asynchronous)

### **2. Design Brief Document**
- Submit markdown file OR create GitHub Issue in your project repo
- Tag with label: `design-brief`, `grd-242-collaboration`
- Link submitted to Canvas assignment

### **3. Slide Deck (if used)**
- PDF or Google Slides link
- Submitted to Canvas

### **4. Post-Presentation Reflection** (brief)
- 1 paragraph: What questions did designers ask? What concerns did they raise?
- 1 paragraph: What did you learn about communicating technical constraints to non-technical stakeholders?

---

## Grading Rubric

**Total: 25 points**

### **Presentation Delivery (10 points)**

| Criteria | Excellent (9-10) | Proficient (7-8) | Developing (5-6) | Needs Improvement (0-4) |
|----------|------------------|------------------|------------------|------------------------|
| **Clarity & Engagement** | Vision compelling, technical demo smooth, confident delivery | Vision clear, demo functional, mostly confident | Vision unclear, demo issues, some confidence | Vision missing, demo failed, unprepared |
| **Time Management** | Within 12-min limit, well-paced, time for Q&A | Slightly over/under, adequate pacing | Significantly over/under, rushed or dragging | Failed to cover all sections |

### **Design Brief Quality (10 points)**

| Criteria | Excellent (9-10) | Proficient (7-8) | Developing (5-6) | Needs Improvement (0-4) |
|----------|------------------|------------------|------------------|------------------------|
| **Completeness** | All template sections filled with detail | Most sections complete, minor gaps | Several sections missing or vague | Incomplete brief, major sections missing |
| **Technical Specs** | Precise constraints (formats, dimensions, accessibility) | Most specs included, some ambiguity | Vague specs, many missing details | No technical specifications provided |
| **User Stories** | Multiple clear user stories linking design to UX goals | 2-3 user stories, mostly clear | 1-2 user stories, unclear UX connection | No user stories or UX justification |

### **Professionalism (3 points)**

| Criteria | Excellent (3) | Proficient (2) | Needs Improvement (0-1) |
|----------|---------------|----------------|------------------------|
| **Collaboration Tone** | Respectful, open to designer input, acknowledges design expertise | Professional, somewhat collaborative | Dismissive, demanding, or unprepared |

### **Reflection (2 points)**

| Criteria | Excellent (2) | Proficient (1) | Needs Improvement (0) |
|----------|---------------|----------------|----------------------|
| **Insight** | Thoughtful reflection on communication and collaboration lessons | Basic reflection on presentation experience | No reflection or copied/generic response |

---

## Tips for Success

### **Before Presentation**
- ✅ Test your demo in presentation environment (projector, screen share)
- ✅ Have backup plan if live demo fails (screenshots, video recording)
- ✅ Research GRD-242 students' prior work (if portfolios available)
- ✅ Prepare 2-3 visual references (show examples of styles you like)

### **During Presentation**
- ✅ Speak to designers, not just instructor (they're your collaborators, not audience)
- ✅ Acknowledge what you *don't* know about design (invite their expertise)
- ✅ Use "we" language: "How can we make this accessible?" not "You need to make this accessible"
- ✅ Take notes on designer questions—they reveal gaps in your brief

### **After Presentation**
- ✅ Follow up with assigned GRD student within 24 hours
- ✅ Set up communication channel (Slack/Discord)
- ✅ Create GitHub Issue for design tracking
- ✅ Schedule Week 7 check-in meeting

---

## Connection to Course Outcomes

**CLO 2 (Cross-functional collaboration)**: Presenting to designers and establishing collaboration protocol demonstrates professional cross-team communication.

**CLO 3 (Evaluate design needs)**: Translating user stories into design requirements shows ability to define and articulate design acceptance criteria.

**CLO 5 (Document decisions)**: Design brief documents technical constraints, rationale, and success criteria for future reference.

---

## Collaboration Success Story Example

> "In Week 6, I presented TaskMaster to GRD-242. Designer Sarah asked, 'Who are your users with ADHD—college students or professionals?' I realized my user personas were too vague. We scheduled a 30-min Zoom to discuss neurodivergent user needs. Sarah researched accessible design patterns for ADHD (reducing visual clutter, chunking information). Her final icon set used calming colors and clear visual hierarchy. When I integrated her designs in Week 8, user testers said the app 'felt less overwhelming' than competitors. Sarah's portfolio included my app, and I credited her in my demo. This collaboration taught me that design isn't decoration—it's core UX."

---

## FAQs

**Q: What if I don't know what design assets I need?**
A: Start with Must Haves (logo, colors, basic icons). Use "Should Have" and "Could Have" for assets you'd like but aren't sure about. Designers can help you identify gaps.

**Q: What if my prototype is ugly/basic?**
A: That's expected! GRD students understand you're a developer, not a designer. Focus on demonstrating *functionality*, not aesthetics.

**Q: What if a GRD student doesn't meet my technical constraints?**
A: Week 7 assignment addresses iteration. You'll document feedback professionally using the evaluation framework. This is practice for real client-designer relationships.

**Q: Can I change my design requirements after Week 6?**
A: Minor adjustments in Week 7 are fine (document in GitHub Issue). Major scope changes after Week 7 jeopardize designer's timeline—avoid unless critical.

---

**Next Assignment**: Week 7 - Design Feedback & Iteration Documentation

---

**Resources**:
- [Design Brief Template](../collaboration-materials/Design-Brief-Template.md)
- [Technical Constraints Checklist](../collaboration-materials/Technical-Constraints-Checklist.md)
- [Cross-Team Communication Protocol](../collaboration-materials/GRD-242-Integration-Overview.md)
