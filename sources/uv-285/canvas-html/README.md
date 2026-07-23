<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/canvas-html/README.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 Canvas build guide (task 3.4)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# CTS-285 Canvas HTML Pages
## Interactive Module Pages for Canvas LMS

**Created**: January 15, 2026
**Course**: CTS-285 Systems Analysis & Design
**Instructor**: Andrew Norris
**Designer**: Angela Westmoreland

---

## Purpose

These HTML pages are designed to be **copied directly into Canvas** as module overview pages. They provide:

✅ Interactive, visually appealing module introductions
✅ Print-friendly formatting for physical syllabi
✅ Consistent branding and structure across all 8 modules
✅ Clear role focus progression (PO → SM → Dev → Release Manager)
✅ Andrew's authentic voice and teaching philosophy
✅ Comprehensive coverage of Systems Analysis & Design concepts

---

## Course Overview

**CTS-285: Systems Analysis & Design** is a 16-week course focused on the complete software development lifecycle using Agile methodologies. Students experience different Scrum roles across 8 modules:

1. **Module 1** - SDLC Foundations & Agile Mindset (Observer/Learner)
2. **Module 2** - Requirements Gathering & Stakeholder Management (Product Owner)
3. **Module 3** - System Design & Architecture (Product Owner/Design)
4. **Module 4** - Sprint Planning & Execution (Scrum Master)
5. **Module 5** - Development & Testing (Developer)
6. **Module 6** - Quality Assurance & Risk Management (Developer/QA)
7. **Module 7** - Deployment & Documentation (Release Manager)
8. **Module 8** - Capstone Integration & Project Leadership (Team Lead)

---

## Completed Pages

| Module | File | Role Focus | Color Theme |
|--------|------|-----------|-------------|
| **Module 1** | `Module_01_Canvas_Page.html` | Observer/Learner | Blue (#2196F3) |
| **Module 2** | `Module_02_Canvas_Page.html` | Product Owner | Purple (#9C27B0) |
| **Module 3** | `Module_03_Canvas_Page.html` | Product Owner (Design) | Green (#4CAF50) |
| **Module 4** | `Module_04_Canvas_Page.html` | Scrum Master | Teal (#009688) |
| **Module 5** | `Module_05_Canvas_Page.html` | Developer | Deep Orange (#FF5722) |
| **Module 6** | `Module_06_Canvas_Page.html` | Developer/QA | Indigo (#3F51B5) |
| **Module 7** | `Module_07_Canvas_Page.html` | Release Manager | Pink (#E91E63) |
| **Module 8** | `Module_08_Canvas_Page.html` | Team Lead | Deep Purple (#673AB7) |

---

## How to Use These Pages in Canvas

### Step 1: Access the HTML File
1. Open the desired module HTML file in a code editor or browser
2. Copy the entire HTML content (Ctrl+A, Ctrl+C on Windows / Cmd+A, Cmd+C on Mac)

### Step 2: Create Canvas Page
1. In Canvas, navigate to **Pages** → **+ Page**
2. Name it: "Module X Overview" or "Module X: [Title]"
3. Switch to **HTML editor** (click the `<>` icon in the toolbar)
4. Paste the copied HTML
5. Switch back to **Rich Content Editor** to preview

### Step 3: Update Course-Specific Links
Replace placeholder links with actual Canvas links:

- `[COURSE_ID]` → Your Canvas course ID (found in URL)
- `[ASSIGNMENT_ID]` → Actual assignment IDs from Canvas
- `[FILE_ID]` → Uploaded file IDs
- `[QUIZ_ID]` → Quiz IDs from Canvas

**Example:**
```html
<!-- Before -->
<a href="/courses/[COURSE_ID]/assignments/[ASSIGNMENT_ID]">View Assignment</a>

<!-- After -->
<a href="/courses/123456/assignments/789012">View Assignment</a>
```

### Step 4: Publish
- **Preview** the page to verify formatting
- Click **Publish** when ready
- Link from module overview or homepage

### Print/Copy Button
Each page includes a print button (🖨️) that:
- Hides interactive elements for clean printing
- Formats content for PDF export
- Allows easy copy/paste into other LMS platforms

---

## Design Pattern & Structure

All CTS-285 module pages follow this consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Module-specific title -->
    <!-- CSS styles (gradient headers, cards, badges) -->
    <!-- Print styles -->
    <!-- JavaScript for print functionality -->
</head>
<body>
    <!-- Print Button -->
    <!-- Module Header (gradient with meta info) -->
    <!-- Learning Objectives -->
    <!-- Week Timeline -->
    <!-- Role Focus Box (what this role does) -->
    <!-- Assignments Section (2 assignments per module) -->
    <!-- Knowledge Check Info -->
    <!-- Hands-On Activity Details -->
    <!-- Planning Sheets & Tools -->
    <!-- Checklist -->
    <!-- Tips & Best Practices -->
    <!-- Andrew's Note (personal message) -->
    <!-- Preparing for Next Module -->
    <!-- Footer (CTA buttons) -->
</body>
</html>
```

---

## Color Scheme by Module

Each module has a distinct color theme that appears in headers, buttons, and section borders:

| Module | Primary Color | Hex Code | RGB | Theme |
|--------|--------------|----------|-----|-------|
| 1 | Blue | #2196F3 | rgb(33, 150, 243) | SDLC Foundation |
| 2 | Purple | #9C27B0 | rgb(156, 39, 176) | Requirements |
| 3 | Green | #4CAF50 | rgb(76, 175, 80) | Design |
| 4 | Teal | #009688 | rgb(0, 150, 136) | Sprint Execution |
| 5 | Deep Orange | #FF5722 | rgb(255, 87, 34) | Development |
| 6 | Indigo | #3F51B5 | rgb(63, 81, 181) | Quality Assurance |
| 7 | Pink | #E91E63 | rgb(233, 30, 99) | Deployment |
| 8 | Deep Purple | #673AB7 | rgb(103, 58, 183) | Capstone |

**Color Usage:**
- Module headers use gradient from primary to darker shade
- Section borders and headings use primary color
- Buttons use primary color with hover darkening effect

---

## Content Blocks Explained

### Module Header
- **Purpose**: Immediate identification of module, role, and scope
- **Elements**: Module number/title, one-sentence description, meta badges (duration, role, points, time)
- **Design**: Gradient background with white text for high contrast

### Learning Objectives
- **Purpose**: Clear, measurable outcomes students will achieve
- **Format**: MLO (Module Learning Outcomes) numbered 1.1, 1.2, etc.
- **Connection**: Links to CLOs (Course Learning Outcomes)

### Role Focus Box
- **Purpose**: Explains the specific Scrum role students are practicing
- **Elements**: Role definition, key responsibilities, "why it matters" rationale
- **Design**: Color-coded to match module theme

### Assignment Cards
- **Purpose**: Detail what students must complete for the module
- **Elements**: Title, points, due date, description, deliverables, CTA buttons
- **Interaction**: Hover effect (card lifts slightly) for visual engagement

### Timeline
- **Purpose**: Show day-by-day breakdown of module activities
- **Format**: 4 boxes (Week X Day 1, Week X Day 2, Week X+1 Day 1, Week X+1 Day 2)
- **Design**: Horizontal flex layout, responsive to mobile

### Knowledge Check Section
- **Purpose**: Inform students about auto-graded quiz
- **Details**: Number of questions, duration, attempts allowed, topics covered

### Hands-On Activity
- **Purpose**: Describe experiential learning activity
- **Format**: Activity name, duration, what students will practice, session breakdown
- **Design**: Light blue background to differentiate from standard content

### Planning Sheets & Tools
- **Purpose**: List templates and tools introduced or used in the module
- **Elements**: Template names, brief descriptions, tool recommendations

### Checklist
- **Purpose**: Provide step-by-step progress tracker
- **Format**: Checkbox-style list (using CSS pseudo-elements)
- **Design**: Orange/yellow theme for visibility

### Tips Box
- **Purpose**: Share practical advice from Andrew's experience
- **Tone**: Conversational, specific, actionable
- **Design**: Green background with checkmark/lightbulb icon

### Andrew's Note
- **Purpose**: Personal message from instructor about module challenges/philosophy
- **Tone**: Honest, encouraging, realistic about difficulty
- **Design**: Yellow/cream background (#fff8e1) with orange accent

### Preparing for Next Module
- **Purpose**: Bridge to next module, create continuity
- **Elements**: Preview of next role/focus, "what to do now" action item

---

## Badge System

### Points Badge
```html
<span class="points-badge">25 points</span>
```
- **Color**: Green (#4caf50)
- **Use**: Indicates assignment point value

### Due Date Badge
```html
<span class="due-date">Due: Friday, Week X</span>
```
- **Color**: Orange (#ff9800)
- **Use**: Clear deadline indication

### Role Badge
```html
<span class="role-badge">Role: Product Owner</span>
```
- **Color**: Matches module theme color
- **Use**: Identifies Scrum role focus

---

## Key Features

### 1. Responsive Design
- Mobile-friendly layouts (flex wraps, column stacking)
- Timeline adjusts to vertical on small screens
- Print-optimized styling (hides buttons, adjusts margins)

### 2. Accessibility
- High contrast color combinations (WCAG AA compliant)
- Clear heading hierarchy (H1 → H2 → H3)
- Semantic HTML structure (section, header, article elements)
- Screen reader compatible (proper alt text, ARIA labels where needed)

### 3. Interactive Elements
- Hover effects on assignment cards (lift and shadow)
- Print button functionality (JavaScript)
- Clickable CTA buttons with color transitions

### 4. Consistent Branding
- Andrew's authentic voice (honest, practical, encouraging)
- Process-first philosophy emphasized throughout
- Role progression clearly highlighted
- Real-world application connections

---

## Customization Guide

### Updating Colors
To change a module's color theme:

1. **Find the color variables** in the `<style>` section:
```css
.module-header {
    background: linear-gradient(135deg, #2196F3 0%, #1565c0 100%);
}
```

2. **Replace hex codes** with your preferred color:
   - Primary color: First hex code
   - Darker shade: Second hex code (use a color picker to darken by ~20%)

3. **Update all instances** of that color in:
   - `.module-header`
   - `.content-section h2` (color property)
   - `.content-section` (border-left-color)
   - `.button-primary` (background)
   - `.role-badge` (background)
   - `.timeline-item` (border-top)

### Updating Course Links
Use Find & Replace in your code editor:

1. **Find**: `/courses/[COURSE_ID]/`
2. **Replace with**: `/courses/123456/` (your actual course ID)

Repeat for:
- `[ASSIGNMENT_ID]`
- `[FILE_ID]`
- `[QUIZ_ID]`

### Changing Instructor Name
Andrew Norris references appear in:
- "Andrew's Tips for Success" sections
- "Andrew's Note" sections
- Footer quotes

Use Find & Replace to change "Andrew" to your instructor's name.

---

## Browser Compatibility

### Tested and Supported:
- ✅ Chrome/Edge (primary Canvas browsers)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Not Supported:
- ❌ Internet Explorer (deprecated by Canvas)

### Canvas-Specific Notes:
- Some CSS may be stripped by Canvas security filters (test after pasting)
- External links should use `target="_blank"` for new tab opening
- Inline CSS is preferred over external stylesheets for Canvas compatibility
- JavaScript is minimal (only print button) to avoid security restrictions

---

## Maintenance & Updates

### When to Update Pages:

1. **Assignment Changes**
   - Point values change
   - Due dates shift
   - Assignment descriptions updated

2. **Content Updates**
   - New tools or templates introduced
   - Examples updated for relevance
   - Links need updating

3. **Student Feedback**
   - Confusion about requirements
   - Request for additional tips/warnings
   - Clarification needed in instructions

### Version Control Best Practices:
- Keep HTML files in Git repository
- Document changes in commit messages
- Test in Canvas before publishing updates to students
- Keep a backup of working versions

---

## File Size & Performance

- **Average file size**: 18-22KB per HTML page
- **Load time**: < 1 second on typical internet connection
- **Images**: Minimal (uses emojis instead of icon images)
- **CSS**: Inline for Canvas compatibility
- **JavaScript**: Single function (print) for minimal overhead

---

## Creating New Module Pages

If you need to adapt this structure for additional modules:

1. **Copy an existing module** that matches your content type (standard module vs. sprint module)
2. **Update module-specific information**:
   - Title and description
   - Color scheme (CSS variables)
   - Learning outcomes (MLOs and CLOs)
   - Assignment details
   - Role focus description
3. **Customize content sections**:
   - Week timeline activities
   - Hands-on activity description
   - Tips and warnings
   - Andrew's Note
4. **Update navigation**:
   - "Preparing for Next Module" section
   - Links to previous modules if needed
5. **Test thoroughly**:
   - Preview in Canvas
   - Test print functionality
   - Verify all links work

---

## Andrew's Voice Guidelines

### Characteristics to Maintain:
- ✅ **Honest about difficulty**: "This is where things get hard"
- ✅ **Process-focused**: "How you work matters"
- ✅ **Encouraging without coddling**: "You'll struggle, and that's learning"
- ✅ **Industry-connected**: "Employers care about this"
- ✅ **Slightly informal**: "Don't freak out"
- ✅ **Specific advice**: "Set a phone reminder for standups"

### Avoid:
- ❌ Generic motivational speak: "You can do it!"
- ❌ Overly academic tone: "Pursuant to the requirements..."
- ❌ Condescension: "This is easy if you just..."
- ❌ Vague platitudes: "Try your best"

---

## Technical Notes

### HTML Structure
- **DOCTYPE**: HTML5 (`<!DOCTYPE html>`)
- **Charset**: UTF-8 for international character support
- **Viewport**: Responsive meta tag for mobile compatibility

### CSS Methodology
- **Inline styles**: Required for Canvas LMS compatibility
- **Class-based**: Reusable components (`.assignment-card`, `.tip-box`)
- **Flexbox**: Modern layout system for responsive design
- **Print media queries**: `@media print` for clean printing

### JavaScript Usage
- **Minimal**: Only print function to avoid Canvas security restrictions
- **No external libraries**: Pure vanilla JavaScript
- **Inline**: Embedded in `<script>` tags for Canvas compatibility

---

## Accessibility Features

1. **Semantic HTML**: Proper use of `<section>`, `<header>`, `<article>`
2. **Heading Hierarchy**: H1 → H2 → H3 structure maintained
3. **Color Contrast**: All text passes WCAG AA standards (4.5:1 minimum)
4. **Link Text**: Descriptive link text (not just "click here")
5. **Alt Text**: Images and icons have descriptive alt attributes
6. **Keyboard Navigation**: All interactive elements accessible via keyboard

---

## Support & Troubleshooting

### Common Issues:

**Problem**: CSS styles don't appear after pasting into Canvas
**Solution**: Canvas may strip certain CSS properties. Try:
1. Using HTML editor view, not Rich Content Editor
2. Simplifying CSS (remove advanced properties)
3. Using inline styles on individual elements

**Problem**: Links don't work
**Solution**: Replace all `[COURSE_ID]`, `[ASSIGNMENT_ID]` placeholders with actual Canvas IDs

**Problem**: Print button doesn't work
**Solution**: Ensure JavaScript is enabled in Canvas and browser. Fallback: Use browser print (Ctrl+P / Cmd+P)

**Problem**: Colors look different in Canvas
**Solution**: Canvas may apply its own styles. Verify in preview mode before publishing.

---

## Credits

**Design Pattern**: Inspired by CSC-114 Canvas pages, adapted for Systems Analysis & Design
**Color Scheme**: Material Design color palette
**Content**: Andrew Norris (instructor voice), Angela Westmoreland (structure and design)
**Philosophy**: Balancing technical rigor with accessibility and student engagement

---

## Changelog

### Version 1.0 - January 15, 2026
- ✅ Created all 8 module pages
- ✅ Established consistent color scheme and structure
- ✅ Integrated role progression (PO → SM → Dev → Release Manager → Team Lead)
- ✅ Added comprehensive checklists and tips
- ✅ Included Andrew's voice throughout
- ✅ Documented implementation instructions

---

## Future Enhancements

Potential improvements for future versions:
- 📊 Add interactive sprint burndown chart examples
- 🎥 Embed tutorial videos directly in pages
- 📱 Create mobile app companion
- 🌐 Multilingual support
- ♿ Enhanced accessibility features (screen reader optimization)
- 📈 Analytics integration to track page views and engagement

---

**Last Updated**: January 15, 2026
**Status**: Complete and ready for Canvas implementation
**Contact**: Angela Westmoreland for questions or customization requests

---

## Quick Start Checklist

Use this to implement these pages in your Canvas course:

- [ ] Download all 8 HTML files
- [ ] Identify your Canvas course ID (from URL)
- [ ] Find assignment IDs for all assignments
- [ ] Find quiz IDs for all knowledge checks
- [ ] Upload template files to Canvas Files
- [ ] Note file IDs for all uploaded templates
- [ ] Use Find & Replace to update `[COURSE_ID]` in all files
- [ ] Use Find & Replace to update `[ASSIGNMENT_ID]` placeholders
- [ ] Use Find & Replace to update `[FILE_ID]` placeholders
- [ ] Use Find & Replace to update `[QUIZ_ID]` placeholders
- [ ] Paste Module 1 HTML into Canvas page
- [ ] Preview and verify formatting
- [ ] Test all links
- [ ] Publish Module 1 page
- [ ] Repeat for Modules 2-8
- [ ] Link module overview pages from course homepage
- [ ] Test print functionality on each page
- [ ] Gather student feedback after first use

---

**Congratulations! Your CTS-285 Canvas course now has professional, engaging module pages that will enhance student learning and engagement throughout the semester.**
