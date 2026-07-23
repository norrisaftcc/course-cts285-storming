<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/assignments/Week_08_Design_Asset_Integration.md
  verdict: HARVEST
  target-26FA-slot: CSC-289 P4 (integration sprint, TBD week)
  ingest-date: 2026-07-23
  HARVEST: Integration PRs, acceptance testing, designer attribution — genuinely useful once GRD deliverables are redefined, but 668 lines built on the assumption assets arrive by CSC-289 wk8; heavily solo-voiced (solo signal 4, team 1).
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 8 Assignment: Design Asset Integration & Acceptance Testing
**CSC-289: Programming Capstone Project**

**Due**: End of Week 8
**Points**: 25 points
**CLOs Addressed**: CLO 3 (Evaluate and integrate), CLO 5 (Document decisions), CLO 6 (Professional development practices)

---

## Assignment Overview

Integrate final design assets from your GRD-242 collaborator into your capstone project codebase. You will test asset integration, document acceptance testing, demonstrate proper designer attribution, and reflect on the complete collaboration cycle.

**This is the final graded deliverable** for GRD-242 collaboration, demonstrating:
- Technical integration of external assets
- Acceptance testing and quality assurance
- Professional attribution and documentation
- Complete collaboration cycle closure
- Preparation for independent development (Weeks 9-16)

---

## Context: Collaboration Wrap-Up

Week 8 marks the **end of GRD-242 collaboration**. GRD students are completing their final presentations and portfolio submissions. Your tasks:
- ✅ Accept final design assets
- ✅ Integrate into codebase
- ✅ Test across devices/browsers
- ✅ Credit designer appropriately
- ✅ Close collaboration with gratitude and documentation

Starting Week 9, you'll continue solo development with completed brand identity foundation.

---

## Assignment Requirements

### **Part 1: Asset Integration (10 points)**

Integrate ALL accepted design assets into your application codebase and submit evidence via Pull Request(s).

#### **Integration Checklist**

**For EACH asset type**, complete integration and document:

##### **1. Logos**
- [ ] Primary logo integrated (header, landing page)
- [ ] Favicon generated from logo (16x16, 32x32, 180x180, 512x512)
- [ ] Mobile app icon (if applicable)
- [ ] Splash screen/loading screen
- [ ] Social media preview image (og:image meta tag)

**Implementation locations**: [List files where logo appears]
**Commit SHA**: [Link to commit integrating logos]

---

##### **2. Color Palette**
- [ ] CSS variables or theme file created with hex codes
- [ ] Primary, secondary, accent colors applied to UI components
- [ ] Neutral colors (backgrounds, text) applied consistently
- [ ] Hover states and interactive element colors defined
- [ ] Dark mode variants (if applicable)

**Implementation file**: [Path to CSS/theme file]
**Commit SHA**: [Link to commit with color system]

**Example Implementation**:
```css
:root {
  /* Primary Colors */
  --color-primary: #3A6FC1; /* Designer: [Name] */
  --color-primary-light: #5A8FDB;
  --color-primary-dark: #2A4F91;

  /* Secondary Colors */
  --color-secondary: #F4A261;

  /* Accent */
  --color-accent: #2A9D8F;

  /* Neutrals */
  --color-text: #333333;
  --color-background: #FFFFFF;
  --color-border: #E0E0E0;
}
```

---

##### **3. Icon Set**
- [ ] Icon files organized in `/assets/icons/` or equivalent
- [ ] Icons integrated into navigation, buttons, feature indicators
- [ ] SVG optimization verified (removed unnecessary metadata)
- [ ] Consistent sizing applied (24px default)
- [ ] Accessible labels added (aria-label or alt text)

**Implementation locations**: [List UI components using icons]
**Commit SHA**: [Link to commit integrating icons]

---

##### **4. Hero Images / Illustrations**
- [ ] Hero image placed on landing page
- [ ] Responsive variants for mobile/tablet/desktop
- [ ] Image optimization verified (file size <500KB)
- [ ] Lazy loading implemented (if needed)
- [ ] Alt text written for accessibility

**Implementation locations**: [Pages/components with images]
**Commit SHA**: [Link to commit with images]

---

##### **5. Typography (if designer provided custom fonts)**
- [ ] Font files added to project (WOFF2 format preferred)
- [ ] `@font-face` declarations or import links added
- [ ] Font stack applied to headings, body text
- [ ] Fallback fonts specified
- [ ] Performance tested (font loading time)

**Implementation file**: [Path to typography CSS]
**Commit SHA**: [Link to commit with fonts]

---

#### **Pull Request Requirements**

Create **at least one Pull Request** (or one per asset type) demonstrating integration:

**PR Title**: `feat: Integrate GRD-242 design assets - [Asset Type]`

**PR Description Template**:
```markdown
## Design Asset Integration

**Designer**: [GRD student name]
**Assets Integrated**: Logo, Color Palette, Icon Set [list all]
**Collaboration Period**: Week 6-8

---

### Changes Made

- ✅ Integrated primary logo in header and landing page
- ✅ Created favicon variants (16px - 512px)
- ✅ Applied color palette to CSS variables
- ✅ Integrated 15-icon set across navigation and features
- ✅ Added hero image with responsive variants

---

### Integration Testing

**Devices Tested**:
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad)

**Accessibility Tested**:
- [ ] Color contrast (WCAG AA)
- [ ] Icon alt text / aria-labels
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

**Performance Tested**:
- [ ] Page load time: [X seconds]
- [ ] Total asset size: [X KB]
- [ ] Image optimization verified

---

### Screenshots

**Before** (placeholder assets):
[Screenshot of app before design integration]

**After** (GRD design assets):
[Screenshot of app with integrated designs]

---

### Designer Attribution

Designer credited in:
- [ ] README.md (Contributors section)
- [ ] About page or footer
- [ ] This PR description
- [ ] Git commit messages

---

### Files Changed

- `index.html` - Logo, hero image, favicon links
- `styles/theme.css` - Color palette variables
- `components/Navigation.jsx` - Icon integration
- `assets/icons/` - Icon files added
- `README.md` - Designer credit

---

**Closes Issue**: #[design tracking issue number]
```

**Submit**: Link(s) to merged PR(s) showing design integration

---

### **Part 2: Acceptance Testing Documentation (8 points)**

Demonstrate that integrated assets meet all acceptance criteria from your design brief.

#### **Acceptance Test Report Template**

```markdown
# Design Asset Acceptance Test Report

**Project**: [Your project name]
**Designer**: [GRD student name]
**Test Date**: [Date]
**Tested By**: [Your name]

---

## Test Environment

**Devices**:
- Desktop: [OS, browsers]
- Mobile: [Device, OS, browsers]
- Tablet: [Device, OS, browsers]

**Tools Used**:
- Accessibility: [WebAIM Contrast Checker, Lighthouse, etc.]
- Performance: [Chrome DevTools, PageSpeed Insights]
- Responsiveness: [Browser DevTools, BrowserStack, physical devices]

---

## Asset-by-Asset Acceptance Tests

### Asset 1: Logo

#### Technical Requirements
- [x] **File Format**: SVG provided ✅
- [x] **Scalability**: Tested 32px - 512px, remains crisp ✅
- [x] **Transparency**: Background transparent ✅
- [x] **File Size**: 8KB (under 50KB limit) ✅

#### Visual Requirements
- [x] **Brand Alignment**: Matches tone/mood from brief ✅
- [x] **Uniqueness**: Distinct from competitors ✅
- [x] **Monochrome Version**: Works in single color ✅

#### Integration Testing
- [x] **Header**: Displays correctly at 48px height ✅
- [x] **Favicon**: Generated favicons display in all browsers ✅
- [x] **Mobile**: Scales appropriately on small screens ✅

**Result**: ✅ **ACCEPTED**

**Evidence**: [Screenshot showing logo across devices]

---

### Asset 2: Color Palette

#### Technical Requirements
- [x] **Format**: Hex codes provided ✅
- [x] **Color Profile**: sRGB compatible ✅
- [x] **Palette Size**: 7 colors (as requested) ✅

#### Accessibility Testing
- [x] **Text Contrast**: Primary text (#333) on background (#FFF) = 12.6:1 ✅ (WCAG AAA)
- [x] **Button Contrast**: Primary button (#3A6FC1) on background = 4.8:1 ✅ (WCAG AA)
- [x] **Link Contrast**: Link color (#2A9D8F) = 5.2:1 ✅ (WCAG AA)
- [x] **Colorblind Test**: Tested with Coblis simulator, distinguishable ✅

#### Integration Testing
- [x] **CSS Variables**: All colors applied to theme file ✅
- [x] **Component Coverage**: Buttons, inputs, cards use palette ✅
- [x] **Consistency**: No rogue colors outside palette ✅

**Result**: ✅ **ACCEPTED**

**Evidence**: [Screenshot of color palette in use + contrast checker results]

---

### Asset 3: Icon Set

#### Technical Requirements
- [x] **Format**: SVG provided ✅
- [x] **Quantity**: 15 icons (as requested) ✅
- [x] **Sizing**: All 24px × 24px viewBox ✅
- [x] **Optimization**: Unnecessary metadata removed ✅

#### Accessibility Testing
- [x] **Alt Text**: aria-label added to all decorative icons ✅
- [x] **Semantic Icons**: Meaningful labels for functional icons (e.g., "Home", "Settings") ✅
- [x] **Keyboard Nav**: Icons in buttons are keyboard accessible ✅

#### Visual Consistency
- [x] **Style**: Stroke-based, consistent line weight ✅
- [x] **Alignment**: Icons optically centered in containers ✅

#### Integration Testing
- [x] **Navigation**: Icons display in nav menu ✅
- [x] **Buttons**: Icons inline with text ✅
- [x] **Mobile**: Icons legible at 20px on small screens ✅

**Result**: ✅ **ACCEPTED**

**Evidence**: [Screenshot showing icon set in UI]

---

### Asset 4: Hero Image

#### Technical Requirements
- [x] **Format**: WebP with PNG fallback ✅
- [x] **Dimensions**: 1920×1080 desktop, 768×1024 tablet, 375×667 mobile ✅
- [x] **File Size**: 320KB desktop, 180KB mobile (under 500KB limit) ✅
- [x] **Optimization**: Compressed without visible quality loss ✅

#### Accessibility Testing
- [x] **Alt Text**: Descriptive alt text provided ✅
- [x] **Text Overlay Contrast**: Overlaid text readable (semi-transparent overlay added) ✅

#### Integration Testing
- [x] **Responsive**: Correct image served at each breakpoint ✅
- [x] **Loading**: Lazy load implemented, doesn't block page render ✅
- [x] **Performance**: LCP (Largest Contentful Paint) < 2.5s ✅

**Result**: ✅ **ACCEPTED**

**Evidence**: [Screenshots at different breakpoints + Lighthouse report]

---

## Overall Acceptance Summary

| Asset | Technical | Accessibility | Integration | Status |
|-------|-----------|---------------|-------------|--------|
| Logo | ✅ Pass | ✅ Pass | ✅ Pass | ✅ ACCEPTED |
| Color Palette | ✅ Pass | ✅ Pass | ✅ Pass | ✅ ACCEPTED |
| Icon Set | ✅ Pass | ✅ Pass | ✅ Pass | ✅ ACCEPTED |
| Hero Image | ✅ Pass | ✅ Pass | ✅ Pass | ✅ ACCEPTED |

---

## Issues Found & Resolutions

**Issue 1**: Original hero image was 2.1MB (exceeded limit)
- **Resolution**: Designer re-exported as WebP at 85% quality → 320KB ✅
- **Date Resolved**: [Date]

**Issue 2**: Icon "notification-bell" had 2px stroke instead of 1.5px (inconsistent with set)
- **Resolution**: Designer updated SVG, re-exported ✅
- **Date Resolved**: [Date]

---

## Final Acceptance Decision

✅ **ALL DESIGN ASSETS ACCEPTED**

**Rationale**:
All assets meet technical specifications, pass accessibility requirements, integrate successfully into codebase, and align with brand identity from design brief. Minor issues identified during testing were resolved through professional iteration cycle.

**Signed Off By**: [Your name]
**Date**: [Date]

---

## Next Steps

- [x] Merge design integration PRs
- [x] Credit designer in README and About page
- [x] Share acceptance report with designer
- [x] Close GRD-242 collaboration Issue
- [ ] Continue solo development (Weeks 9-16) building on brand foundation
```

**Submit**: Acceptance test report as markdown file or PDF

---

### **Part 3: Designer Attribution (4 points)**

Properly credit your GRD-242 collaborator in multiple locations.

#### **Required Attribution Locations**

##### **1. README.md - Contributors Section**

Add to your project README:

```markdown
## Contributors

### Development
- **[Your Name]** - Software Developer, Project Lead

### Design
- **[GRD Student Name]** - Brand Identity & Visual Design
  - Logo system design
  - Color palette and typography
  - Icon set (15 icons)
  - Hero illustrations
  - **Course**: GRD-242 (Graphic Design IV)
  - **Instructor**: Jennifer Fisher
  - **Institution**: Fayetteville Technical Community College
  - **Collaboration Period**: [Dates]

Special thanks to the GRD-242 program and FTCC for facilitating this cross-program collaboration.
```

---

##### **2. About Page or Footer**

In your application UI, add designer credit:

```html
<!-- Example footer -->
<footer>
  <p>Designed by [GRD Student Name] | Developed by [Your Name]</p>
  <p>A CSC-289 × GRD-242 Collaboration | FTCC 2026</p>
</footer>
```

Or dedicated "About" page with:
- Designer's name and role
- Brief description of collaboration
- Link to designer's portfolio (if they provide one)

---

##### **3. Git Commit Messages**

Design integration commits should credit designer:

```bash
feat: integrate GRD-242 brand identity assets

- Add primary logo and favicon variants
- Implement color palette by [Designer Name]
- Integrate icon set across navigation
- Add hero image to landing page

Design assets created by [Designer Name] (GRD-242)
Collaboration facilitated by CSC-289 × GRD-242 capstone project

Co-authored-by: [Designer Name] <email@ftcc.edu>
```

---

##### **4. Final Presentation (Week 16)**

Reserve slide(s) in your final presentation for:
- Designer's name and contribution
- Before/after screenshots showing design impact
- Acknowledgment of collaboration value

---

**Submit**: Screenshots showing attribution in README, app UI, and commit message

---

### **Part 4: Collaboration Closure & Reflection (3 points)**

Complete the collaboration cycle professionally and reflect on the experience.

#### **A. Collaboration Closure Actions**

- [ ] **Send thank-you message** to GRD designer (email, Slack, Discord)
  - Acknowledge their work
  - Share how design improved your project
  - Offer to provide testimonial for their portfolio

- [ ] **Close GitHub Issues** related to design collaboration
  - Final comment summarizing assets delivered
  - Link to integration PR(s)
  - Mark as completed with gratitude

- [ ] **Update Risk Register**: Mark "design dependency" risks as resolved or closed

- [ ] **Share acceptance report** with designer (optional but professional)

**Submit**: Screenshot of thank-you message + closed GitHub Issues

---

#### **B. Reflection Essay** (2-3 paragraphs)

**Prompt**: Reflect on the complete collaboration cycle (Weeks 6-8).

**Address**:
1. **Most Valuable Lesson**: What did you learn about cross-functional collaboration that you'll apply in your career?

2. **Biggest Challenge**: What was the hardest part of working with a designer? How did you overcome it?

3. **Design Impact**: How did professional design assets change your project? Beyond aesthetics, what UX improvements resulted?

4. **Process Improvement**: If you were starting a new project with a designer tomorrow, what would you do differently based on this experience?

5. **Career Readiness**: How does this collaboration prepare you for real-world software development teams?

**Submit**: Reflection as markdown file, PDF, or Canvas text entry

---

## Submission Requirements

Submit to Canvas:

1. **Integration Evidence**: Link(s) to merged Pull Request(s) showing design integration
2. **Acceptance Test Report**: Complete testing documentation for all assets
3. **Attribution Screenshots**: README, app UI, commit messages showing designer credit
4. **Collaboration Closure**: Thank-you message + closed Issues screenshots
5. **Reflection Essay**: 2-3 paragraphs addressing prompt

**Bonus**: Link to deployed application showing integrated design assets live

---

## Grading Rubric

**Total: 25 points**

### **Asset Integration Quality (10 points)**

| Criteria | Excellent (9-10) | Proficient (7-8) | Developing (5-6) | Needs Improvement (0-4) |
|----------|------------------|------------------|------------------|------------------------|
| **Completeness** | All accepted assets integrated across app | Most assets integrated, minor gaps | Some assets missing or poorly integrated | Few or no assets integrated |
| **Technical Execution** | Proper file paths, optimization, responsive, accessible | Mostly correct, minor technical issues | Several technical errors (broken links, sizing issues) | Major technical problems |
| **PR Documentation** | Clear description, screenshots, testing notes | Adequate description, some detail | Vague description, missing details | Poor or missing PR documentation |

### **Acceptance Testing Rigor (8 points)**

| Criteria | Excellent (7-8) | Proficient (5-6) | Developing (3-4) | Needs Improvement (0-2) |
|----------|------------------|------------------|------------------|------------------------|
| **Testing Coverage** | All asset types tested across devices, accessibility, performance | Most assets tested, adequate coverage | Limited testing, major gaps | Minimal or no testing documentation |
| **Documentation Quality** | Detailed results, evidence (screenshots, tool outputs), issues tracked | Good documentation, some evidence | Superficial documentation, little evidence | Poor or missing documentation |

### **Attribution & Professionalism (4 points)**

| Criteria | Excellent (4) | Proficient (3) | Developing (2) | Needs Improvement (0-1) |
|----------|---------------|----------------|----------------|------------------------|
| **Credit Completeness** | Designer credited in README, app UI, commits, presentation | Most locations credited, 1-2 missing | Minimal attribution | No designer credit provided |
| **Collaboration Closure** | Thoughtful thank-you, professional issue closure, gratitude expressed | Adequate closure, professional tone | Perfunctory closure | No closure or unprofessional |

### **Reflection Quality (3 points)**

| Criteria | Excellent (3) | Proficient (2) | Needs Improvement (0-1) |
|----------|---------------|----------------|------------------------|
| **Depth & Insight** | Thoughtful analysis of collaboration lessons, specific examples, career connections | Adequate reflection on experience | Superficial or missing reflection |

---

## Common Integration Scenarios

### **Scenario 1: Asset works locally but breaks in production**
**Issue**: Hero image displays on localhost but 404 error on deployed site.
**Solution**:
- Check file paths (absolute vs relative)
- Verify asset included in build process
- Check deployment platform asset limits
- Document troubleshooting in acceptance report

---

### **Scenario 2: Color palette looks different across browsers**
**Issue**: Colors appear slightly different in Safari vs Chrome.
**Solution**:
- Verify sRGB color profile used
- Test in multiple browsers during acceptance testing
- Document discrepancies and mitigation (if any)
- May require designer to adjust color profile

---

### **Scenario 3: Icons are pixelated at certain sizes**
**Issue**: SVG icons blur when scaled up.
**Solution**:
- Check SVG viewBox attribute
- Ensure SVG exported without fixed width/height
- Verify CSS scaling approach
- Request re-export from designer if source file issue

---

### **Scenario 4: Designer credits in README but wants portfolio link**
**Issue**: Designer asks for link to their portfolio in your project.
**Solution**:
- ✅ Add link to README Contributors section
- ✅ Add "Design by [Name]" link in app footer (if designer has portfolio)
- ✅ Offer to write testimonial for their portfolio
- Professional collaboration benefits both portfolios!

---

## Tips for Successful Integration

### **Before Integration**
- ✅ Create dedicated Git branch: `feature/grd242-design-integration`
- ✅ Back up current codebase
- ✅ Review all assets for completeness before starting
- ✅ Plan integration order (colors first, then logos, then icons)

### **During Integration**
- ✅ Test incrementally (don't integrate everything at once)
- ✅ Commit frequently with descriptive messages
- ✅ Document any surprises or issues immediately
- ✅ Take before/after screenshots for acceptance report

### **After Integration**
- ✅ Full regression testing (make sure you didn't break existing features)
- ✅ Cross-browser testing
- ✅ Mobile device testing (not just responsive mode in DevTools)
- ✅ Performance testing (Lighthouse audit)
- ✅ Deploy to staging environment before production

---

## Connection to Course Outcomes

**CLO 3 (Evaluate and integrate)**: Acceptance testing demonstrates ability to validate external assets against user stories and technical requirements.

**CLO 5 (Document decisions)**: Acceptance report and attribution document integration decisions and testing methodology.

**CLO 6 (Professional development practices)**: Pull requests, testing protocols, and proper attribution mirror real-world collaborative development workflows.

---

## FAQs

**Q: What if I can't integrate an asset due to technical limitations discovered late?**
A: Document the limitation in your acceptance report. Explain the technical constraint, what you tried, and what alternative you're using. Mark asset as "accepted with modifications" or "deferred to v2.0." This demonstrates adaptive problem-solving.

**Q: Do I need permission to use designer's work?**
A: Yes! This collaboration implies mutual permission, but good practice: confirm with designer that they consent to having work featured in your portfolio/GitHub. Most will be thrilled—it's portfolio material for them too.

**Q: What if integrated design reveals UX problems?**
A: Document in acceptance report. Example: "Logo placement in header causes mobile nav overflow—moved logo to left, reduced size from 48px to 36px. Designer approved modification." Show you can adapt design to technical reality.

**Q: Should I wait until ALL assets are perfect before merging?**
A: No! Iterate in production. Merge "good enough" designs, create Issues for future enhancements. Real-world projects ship MVPs, not perfection. Document what's in v1.0 vs. future iterations.

---

**Final Note**: This assignment marks the **end of structured GRD-242 collaboration** but not the end of design work. Weeks 9-16, you may refine UI/UX independently. The brand foundation GRD students provided enables you to make consistent design decisions going forward.

---

**Congratulations on completing the cross-program collaboration!** 🎉

Starting Week 9, you'll continue solo development with a professionally designed brand identity—exactly how many startups begin.

---

**Resources**:
- [Asset Integration Checklist](../collaboration-materials/Asset-Handoff-Specification.md)
- [Accessibility Testing Guide](../reference-materials/Accessibility-Checklist.md)
- [Git Attribution Best Practices](../reference-materials/PR-Workflow-Checklist.md)
