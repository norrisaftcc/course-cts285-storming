<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_07_Design_Feedback_Iteration.md
  verdict: HARVEST
  target-26FA-slot: CTS-285 wk15-16 / GRD consult
  ingest-date: 2026-07-23
  HARVEST: Structured asset-evaluation framework and professional-feedback protocol are the reusable core; the CSC-289 wk7 iteration-cycle scheduling is dead. Solo-voiced throughout.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 7 Assignment: Design Feedback & Iteration Documentation
**CSC-289: Programming Capstone Project**

**Due**: End of Week 7
**Points**: 25 points
**CLOs Addressed**: CLO 2 (Cross-functional collaboration), CLO 3 (Evaluate design assets), CLO 5 (Document decisions)

---

## Assignment Overview

Engage in a professional design feedback cycle with your assigned GRD-242 designer. You will evaluate draft design assets using a structured framework, provide constructive feedback, document iteration cycles, and demonstrate professional cross-team communication.

**This is a graded academic deliverable** demonstrating your ability to:
- Evaluate design work against user stories and acceptance criteria
- Provide constructive, actionable feedback to designers
- Use GitHub Issues/PRs to manage design iteration workflows
- Balance design quality with technical constraints
- Communicate professionally with cross-functional team members

---

## Context: Design Iteration Is Expected

In real-world development, **first drafts are never perfect**—and that's okay! This assignment rewards:
- ✅ **Professional iteration**: Multiple feedback cycles handled respectfully
- ✅ **Clear communication**: Specific, actionable feedback (not vague criticism)
- ✅ **Flexible problem-solving**: Negotiating when design vision conflicts with technical constraints
- ✅ **Process documentation**: Transparent record of decisions and changes

**You will NOT be penalized if**:
- Designer's first draft doesn't meet all requirements
- You request changes multiple times
- Technical constraints require design adjustments
- You need to clarify requirements after seeing drafts

**Safe-to-Fail**: This assignment assesses your collaboration process, not whether you received "perfect" designs immediately.

---

## Assignment Requirements

### **Part 1: Design Asset Evaluation (10 points)**

Using the **User Story Evaluation Framework**, assess each design asset the GRD student provides.

#### **Evaluation Framework Template**

For EACH design asset (logo, color palette, icon set, etc.), complete:

```markdown
## Design Asset Evaluation: [Asset Name]

**Asset**: [Logo / Color Palette / Icon Set / Hero Image / etc.]
**Designer**: [GRD student name]
**Date Received**: [Date]
**Delivery Method**: [Figma link / Adobe Cloud / Google Drive / GitHub attachment]

---

### 1. Technical Acceptance ✅❌

Test against your design brief specifications:

- [ ] **File Format**: Correct format (SVG, PNG, WebP, etc.)
  - Expected: [From your brief]
  - Received: [What you got]
  - Status: ✅ Meets / ❌ Needs revision / ⚠️ Acceptable workaround

- [ ] **Dimensions/Resolution**: Correct size/scalability
  - Expected: [Dimensions from brief]
  - Received: [Actual dimensions]
  - Status: ✅ Meets / ❌ Needs revision / ⚠️ Acceptable workaround

- [ ] **Color Profiles**: Compatible with platform
  - Expected: [sRGB, hex codes, etc.]
  - Received: [Color format]
  - Status: ✅ Meets / ❌ Needs revision / ⚠️ Acceptable workaround

- [ ] **File Size**: Optimized for web/mobile
  - Expected: [Max KB]
  - Received: [Actual file size]
  - Status: ✅ Meets / ❌ Needs revision / ⚠️ Acceptable workaround

- [ ] **Naming Conventions**: Files named correctly
  - Expected: [logo_primary.svg, icon_home.svg]
  - Received: [Actual filenames]
  - Status: ✅ Meets / ❌ Needs revision / ⚠️ Can rename

---

### 2. Accessibility Acceptance ✅❌

Test against WCAG standards:

- [ ] **Color Contrast**: WCAG AA compliant (4.5:1 text, 3:1 UI)
  - Tested with: [Tool used - WebAIM, Contrast Checker, etc.]
  - Results: [Pass/Fail, specific ratios]
  - Status: ✅ Meets / ❌ Needs revision

- [ ] **Scalability**: Legible at small sizes (icons at 24px, logo at 32px)
  - Tested: [Screenshots of scaled versions]
  - Status: ✅ Meets / ❌ Needs revision

- [ ] **Colorblind-Safe**: Works in grayscale or with color vision deficiency
  - Tested with: [Simulator tool]
  - Status: ✅ Meets / ❌ Needs revision

---

### 3. User Experience Acceptance ✅❌

Evaluate against user stories from design brief:

**User Story 1**: [Copy from your design brief]
- **Does this design support the user goal?** Yes / No / Partially
- **Evidence**: [Explain how design helps or hinders]
- **Status**: ✅ Meets / ❌ Needs revision

**User Story 2**: [Next user story]
- **Does this design support the user goal?** Yes / No / Partially
- **Evidence**: [Explain]
- **Status**: ✅ Meets / ❌ Needs revision

---

### 4. Brand Alignment ✅❌

Compare to brand identity requirements from brief:

- **Tone/Mood**: Does design match requested feel (calming, bold, professional, playful)?
  - Expected: [Adjectives from your brief]
  - Received: [How you'd describe the design]
  - Status: ✅ Aligns / ⚠️ Close / ❌ Mismatched

- **Target Audience**: Appropriate for users?
  - Status: ✅ Appropriate / ❌ Needs adjustment

- **Differentiation**: Distinct from competitors?
  - Status: ✅ Unique / ⚠️ Generic / ❌ Too similar to [competitor]

---

### 5. Overall Assessment

**Strengths** (What works well):
- [Specific positive feedback—be genuine and detailed]
- [Example: "The icon set's stroke-based style is exactly what I envisioned for scalability"]

**Requested Changes** (What needs revision):
- [Specific, actionable requests—not vague complaints]
- [Example: "Logo needs higher contrast—current fails WCAG AA at 3.2:1. Suggest darkening blue from #5A8FDB to #3A6FC1"]

**Priority**:
- 🔴 **Blocking Issues**: Must fix before integration (accessibility, technical format errors)
- 🟡 **Important**: Should fix for quality (brand alignment, UX improvements)
- 🟢 **Nice-to-Have**: Could improve but acceptable as-is

**Acceptance Decision**:
- ✅ **Accepted as-is**: Ready for integration
- 🔄 **Accepted with minor changes**: Can integrate after small tweaks
- ❌ **Needs major revision**: Cannot integrate yet, requires significant changes

**Next Steps**:
- [Action items for designer]
- [Timeline for revision delivery]
- [Your availability for follow-up discussion]

---

**Evaluation Completed By**: [Your name]
**Date**: [Date]
**Feedback Shared With Designer**: [Date sent]
```

---

### **Part 2: Feedback Communication (10 points)**

Document how you communicated feedback to your GRD designer.

#### **Option A: GitHub Issue Workflow** (Recommended)

1. **Create GitHub Issue** for each design asset needing revision
   - Title: `[Design Feedback] [Asset Name] - Revision Requested`
   - Body: Copy relevant sections of evaluation (Requested Changes, Priority)
   - Labels: `design-feedback`, `grd-242`, `iteration-[number]`
   - Assign: Tag your GRD collaborator (if they have GitHub) or note in comments

2. **Designer responds** in Issue comments:
   - Clarifying questions
   - Agreement or alternative proposals
   - Delivery of revised assets

3. **You respond** with follow-up evaluation:
   - Test revised assets
   - Confirm acceptance or request further changes
   - Close Issue when asset accepted

**Submit**: Links to all GitHub Issues created for design feedback

---

#### **Option B: Alternative Documentation**

If designer prefers email/Slack/Discord:

1. **Share evaluation** via agreed communication channel
2. **Document conversation** in markdown file:
   - Date/time of each exchange
   - Feedback sent
   - Designer's response
   - Revised assets received
   - Your follow-up

**Submit**: Markdown file with conversation log + screenshots of key exchanges

---

### **Part 3: Iteration Cycle Documentation (3 points)**

Track ALL iterations for at least ONE asset through complete cycle.

#### **Iteration Log Template**

```markdown
## Iteration Log: [Asset Name]

### Iteration 1
**Date**: [Date]
**Asset Received**: [Link/attachment]
**Evaluation**: [Link to evaluation document]
**Feedback Sent**: [Date, method]
**Key Issues**:
- [Issue 1]
- [Issue 2]

---

### Iteration 2
**Date**: [Date]
**Asset Received**: [Link/attachment]
**Changes Made by Designer**:
- [What changed]
**Remaining Issues**:
- [If any]
**New Feedback Sent**: [Date, method]

---

### Iteration 3 (if applicable)
[Continue pattern]

---

### Final Acceptance
**Date**: [Date]
**Final Asset**: [Link/attachment]
**Acceptance Rationale**: [Why this version meets criteria]
**Integration Plan**: [How/when you'll add to codebase]
```

**Submit**: Iteration log(s) for asset(s) that required multiple revisions

---

### **Part 4: Reflection on Collaboration (2 points)**

Write 2-3 paragraphs reflecting on the feedback process:

**Prompt Questions**:
1. **Communication Challenges**: What was difficult about giving design feedback? How did you ensure feedback was constructive, not critical?

2. **Negotiation**: Did you encounter conflicts between design vision and technical constraints? How did you resolve them?

3. **Learning**: What did you learn about professional cross-team collaboration? How will this experience inform future projects?

4. **Process Improvement**: If you could redo the feedback cycle, what would you do differently?

**Submit**: Reflection as markdown file or Canvas text entry

---

## Submission Requirements

Submit to Canvas:

1. **Design Asset Evaluations**: All evaluations for assets received (minimum 3 assets: logo, color palette, icon set)
2. **Feedback Communication Evidence**: GitHub Issue links OR conversation log
3. **Iteration Log**: At least 1 complete iteration cycle documented
4. **Reflection**: 2-3 paragraphs addressing prompt questions

**Acceptable Formats**: Markdown files, PDFs, Google Docs (with comment access enabled)

---

## Grading Rubric

**Total: 25 points**

### **Design Asset Evaluation Quality (10 points)**

| Criteria | Excellent (9-10) | Proficient (7-8) | Developing (5-6) | Needs Improvement (0-4) |
|----------|------------------|------------------|------------------|------------------------|
| **Completeness** | All evaluation sections filled for 3+ assets | Most sections complete, minor gaps | Some sections missing or superficial | Incomplete evaluations, major gaps |
| **Specificity** | Precise, measurable feedback (contrast ratios, file sizes, specific design elements) | Mostly specific, some vague areas | Vague feedback ("looks good", "needs improvement") | No specific details provided |
| **Criteria Application** | Uses technical, accessibility, UX, and brand criteria systematically | Uses most criteria, some inconsistency | Criteria applied sporadically | No clear evaluation framework used |

### **Feedback Communication Professionalism (10 points)**

| Criteria | Excellent (9-10) | Proficient (7-8) | Developing (5-6) | Needs Improvement (0-4) |
|----------|------------------|------------------|------------------|------------------------|
| **Tone** | Respectful, collaborative, acknowledges designer's effort and expertise | Professional, mostly positive | Neutral but impersonal | Critical, demanding, or dismissive |
| **Actionability** | Every requested change includes specific suggestion or rationale | Most feedback actionable, some unclear | Vague requests without guidance | No clear action items for designer |
| **Timeliness** | Feedback provided within 24-48 hours of asset delivery | Feedback provided within 3-4 days | Feedback delayed 5+ days | No evidence of timely communication |

### **Iteration Cycle Documentation (3 points)**

| Criteria | Excellent (3) | Proficient (2) | Needs Improvement (0-1) |
|----------|---------------|----------------|------------------------|
| **Transparency** | Complete record of all iterations with dates, changes, decisions documented | Most iterations documented, minor gaps | Minimal documentation or unclear timeline |

### **Reflection Quality (2 points)**

| Criteria | Excellent (2) | Proficient (1) | Needs Improvement (0) |
|----------|---------------|----------------|----------------------|
| **Depth** | Thoughtful analysis of collaboration challenges and learnings | Surface-level reflection on experience | Generic or missing reflection |

---

## Tips for Giving Constructive Feedback

### ✅ **Do This**
- **Be specific**: "Logo contrast is 3.2:1 but needs 4.5:1 for WCAG AA. Try #3A6FC1 instead of #5A8FDB."
- **Explain why**: "Hero image needs transparent background so it works on both light and dark mode."
- **Acknowledge strengths**: "Icon set style is perfect—clean and scalable. Small request: can 'home' icon match 'dashboard' icon stroke width?"
- **Offer solutions**: "File size is 800KB (we need <500KB). Can you export at 80% quality or use WebP format?"
- **Ask questions**: "I see you used purple in the palette—can you explain the rationale? Our brand brief mentioned blue/green."

### ❌ **Don't Do This**
- **Vague criticism**: "This doesn't look right."
- **Personal preferences without rationale**: "I don't like this color" (unless it fails accessibility or brand requirements).
- **Dismissive tone**: "This is wrong, redo it."
- **Design without justification**: "Make the logo bigger" (explain WHY—visibility? hierarchy?).
- **Ignoring designer's expertise**: Designer suggests an alternative? Listen and discuss trade-offs.

---

## Common Scenarios & How to Handle

### **Scenario 1: Design looks great but file format is wrong**
**Issue**: Designer sent PNG logo, you need SVG for scalability.
**Response**:
- ✅ Accept design concept
- 🔄 Request format change: "Logo design is perfect! Can you export as SVG? I need vector format for scaling across different screen sizes."
- **Priority**: 🔴 Blocking (technical requirement)

---

### **Scenario 2: Design fails accessibility (color contrast)**
**Issue**: Text color on background is 2.8:1 (needs 4.5:1).
**Response**:
- ✅ Acknowledge design intent: "I can see you were going for a soft, muted palette."
- ❌ Explain problem: "However, WCAG AA requires 4.5:1 contrast for text readability—this is a legal accessibility requirement."
- 🔧 Offer solution: "Could we darken the text to #333333 instead of #666666? Tested contrast is 6.2:1 which passes."
- **Priority**: 🔴 Blocking (accessibility requirement)

---

### **Scenario 3: Design doesn't match your vision but is technically correct**
**Issue**: Icon style is different from what you imagined, but meets all specs.
**Response**:
- ✅ Evaluate objectively: Does it meet user stories? Brand requirements? Accessibility?
- 🤔 If it meets all criteria but you just "don't like it": **Accept it.** Your job is to evaluate against requirements, not personal taste.
- 🗣️ If there's a UX concern: "Icons are technically correct, but user testing feedback said 'outline icons are harder to see on mobile.' Could we try filled versions?"
- **Priority**: 🟢 Nice-to-have OR ✅ Accepted as-is

---

### **Scenario 4: Designer proposes alternative to your request**
**Issue**: You asked for blue palette, designer suggests purple based on color psychology research.
**Response**:
- 🎧 Listen: "Tell me more about why purple?"
- 🤝 Negotiate: "I'm open to purple for accents, but can we keep blue primary for brand recognition in our target market?"
- 📝 Document decision: Update design brief with rationale for final choice.
- **Outcome**: Collaboration, not dictation

---

### **Scenario 5: You realize your brief had unclear requirements**
**Issue**: Designer asks, "You said 'hero image' but didn't specify dimensions—is this for mobile or desktop?"
**Response**:
- 🙋 Own the mistake: "You're right, I should have specified. Here are the responsive breakpoints: [dimensions]."
- 🔄 Update brief: Revise design brief with clarifications (and note this in your reflection!).
- ⏰ Adjust timeline if needed: "This is my mistake—if you need an extra day for revisions, no problem."
- **Priority**: 🟡 Process improvement

---

## Connection to Course Outcomes

**CLO 2 (Cross-functional collaboration)**: Feedback cycle demonstrates professional communication with non-technical team members, managing expectations, and resolving conflicts.

**CLO 3 (Evaluate design assets)**: Evaluation framework shows ability to assess work against user stories, technical requirements, and acceptance criteria.

**CLO 5 (Document decisions)**: Iteration logs and feedback documentation create transparent record of design decisions for future reference and stakeholder review.

---

## FAQs

**Q: What if the designer doesn't respond to my feedback?**
A: Document that you sent feedback with timestamps. Escalate to Andrew Norris and Jennifer Fisher if no response after 48 hours. You won't be penalized for designer non-responsiveness if you communicated professionally and timely.

**Q: What if I accept an asset in Week 7 but realize in Week 8 it doesn't work technically?**
A: This happens in real projects! Document the new issue, explain what you discovered during integration testing, and request a final revision. This demonstrates adaptive problem-solving.

**Q: What if the designer disagrees with my feedback?**
A: That's healthy collaboration! Document the discussion. If it's a technical/accessibility requirement, provide evidence (WCAG guidelines, file format docs). If it's subjective (aesthetics), consider accepting designer's expertise. If you can't agree, escalate to instructors.

**Q: How many iterations are expected?**
A: Typically 2-3 iterations per asset is normal. More than 3 might indicate unclear initial requirements (note this in reflection). Fewer than 2 (accepting first draft) is rare unless designer nailed specs perfectly—document why no revisions needed.

**Q: What if designer delivers late?**
A: Document the delay. Adjust your Week 8 integration timeline if needed. You won't be penalized for late designer delivery if you can show you communicated expectations clearly in your design brief.

---

**Next Assignment**: Week 8 - Design Asset Integration & Acceptance Testing

---

**Resources**:
- [User Story Evaluation Framework](../collaboration-materials/User-Story-Evaluation-Framework.md)
- [Feedback Template](../collaboration-materials/Design-Feedback-Template.md)
- [Accessibility Testing Tools](../reference-materials/Accessibility-Checklist.md)
- [Safe-to-Fail Manifesto](../safe-to-fail/Process-Over-Perfection-Manifesto.md)
