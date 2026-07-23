<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CSC-289/knowledge-checks/Module_03_Entry_Ticket.md
  verdict: HARVEST
  target-26FA-slot: CTS-285 wk15
  ingest-date: 2026-07-23
  HARVEST: Design-brief readiness quiz; the only file in the tree with zero team/solo pronoun signal, so it ports cleanly. Its subject (writing a brief for a non-technical designer) now belongs to CTS-285 wk15, not CSC-289.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 3 Entry Ticket: Stakeholder Communication Readiness

**Course**: CSC-289 — Programming Capstone Project
**Purpose**: Verify readiness to prepare a design brief and communicate technical requirements to non-technical stakeholders (GRD-242 designers).
**Format**: 12 multiple choice questions (Canvas shows 10 randomized per attempt)
**Attempts**: Unlimited
**Passing Score**: 70% (7 of 10)
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 10-15 minutes
**CLOs**: 2, 5

---

## Question 1
**Question**: What is the primary purpose of a design brief?
**A)** To tell the designer exactly what to create with no room for creative input
**B)** To communicate project context, requirements, and constraints so the designer can make informed creative decisions
**C)** To document the complete technical architecture of the application
**D)** To grade the designer's work at the end of the collaboration
**Answer**: B
**Explanation**: A design brief provides the "what" and "why" while leaving room for the designer's expertise on the "how" — it is a communication tool, not a prescription.

---

## Question 2
**Question**: You need to explain your application's responsive breakpoints to a GRD-242 designer who uses Figma but has never written CSS. Which approach is most effective?
**A)** "Set media queries at 375px, 768px, and 1440px with flexbox containers"
**B)** "The design needs to work at three sizes: phone (375px wide), tablet (768px wide), and desktop (1440px wide) — I need assets that look good at each size"
**C)** "Just make it responsive"
**D)** "Read the CSS specification for media queries and design accordingly"
**Answer**: B
**Explanation**: Translate technical constraints into plain language with concrete dimensions — the designer needs to know the sizes, not the CSS implementation details.

---

## Question 3
**Question**: When conducting audience analysis for your design brief, what is the most important distinction to make?
**A)** Whether the audience prefers dark mode or light mode
**B)** The audience's technical literacy level, goals, and context of use — which shapes how you present information
**C)** The audience's preferred programming language
**D)** Whether the audience uses Mac or Windows
**Answer**: B
**Explanation**: Audience analysis examines who will use the product — their technical comfort, what they are trying to accomplish, and the environment in which they will use it — to guide design decisions.

---

## Question 4
**Question**: You are including visual references in your design brief. Which set of references is most useful to a designer?
**A)** Three screenshots with no explanation
**B)** One reference you like with notes on specific elements (e.g., "I like the clean navigation and muted color palette") and one anti-reference with notes on what to avoid
**C)** A link to your favorite website with "make it look like this"
**D)** A list of hex color codes you want used
**Answer**: B
**Explanation**: Effective visual references include specific annotations about what you like and dislike — they communicate aesthetic direction without prescribing the exact solution.

---

## Question 5
**Question**: Your design brief includes the constraint: "All icons must be SVG format with a 24x24px viewBox." Why is this level of specificity important?
**A)** It is not important — designers should choose whatever format works best
**B)** It prevents rework by ensuring assets are delivered in a format your codebase can use, saving time for both parties
**C)** It demonstrates your technical knowledge to impress the designer
**D)** SVG is the only image format that exists
**Answer**: B
**Explanation**: Specific technical constraints in the brief prevent the designer from delivering assets in an unusable format — catching format mismatches early saves days of rework for both sides.

---

## Question 6
**Question**: Which of the following is an example of constructive, professional feedback to a designer?
**A)** "I don't like it. Start over."
**B)** "The notification icon uses a 2px stroke while the other icons use 1.5px. Could you standardize to 1.5px for visual consistency across the icon set?"
**C)** "Looks great!" (when it does not meet requirements)
**D)** "This isn't what I imagined. Can you read my mind better?"
**Answer**: B
**Explanation**: Professional feedback is specific (identifies the exact issue), objective (references a measurable discrepancy), and actionable (suggests a clear resolution).

---

## Question 7
**Question**: You are presenting your design brief to the GRD-242 class. What should the first 30 seconds of your presentation accomplish?
**A)** List every technical framework and library your project uses
**B)** Clearly communicate what your application does, who it is for, and what design assets you need — the "elevator pitch"
**C)** Read the entire design brief document aloud
**D)** Apologize for any shortcomings in your project
**Answer**: B
**Explanation**: An effective opening gives the audience immediate context — designers need to quickly understand the project's purpose and user base before they can engage with specific asset requests.

---

## Question 8
**Question**: When communicating technical constraints to a non-technical audience, which principle is most important?
**A)** Use as much technical jargon as possible to establish credibility
**B)** Translate constraints into their practical impact — explain what the constraint means for the designer's work, not how it works in code
**C)** Skip technical constraints entirely since designers will not understand them
**D)** Provide the complete source code so the designer can read it
**Answer**: B
**Explanation**: Non-technical stakeholders need to understand the impact on their work, not the implementation — "images must be under 500KB each for fast page loading" is more useful than "optimize for Core Web Vitals LCP threshold."

---

## Question 9
**Question**: Your design brief includes a section on accessibility requirements. Which requirement is most critical to communicate to the designer?
**A)** "Make it accessible" with no further detail
**B)** "Color combinations must meet WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI elements) — here is a tool to check: webaim.org/resources/contrastchecker"
**C)** "Use only black text on white backgrounds"
**D)** "Accessibility is my problem, not yours"
**Answer**: B
**Explanation**: Providing the specific standard (WCAG AA ratios) and a tool to verify it empowers the designer to self-check their work — vague requests like "make it accessible" are unactionable.

---

## Question 10
**Question**: A well-structured presentation for a mixed technical/non-technical audience should:
**A)** Focus exclusively on code demonstrations
**B)** Start with user-facing context (problem, audience, vision), then layer in technical details as needed, using visuals over jargon
**C)** Start with the database schema and work outward
**D)** Avoid all visuals since they distract from the content
**Answer**: B
**Explanation**: Leading with the user problem and vision creates shared understanding before introducing technical specifics — this ensures non-technical audience members stay engaged and technical details have context.

---

## Question 11
**Question**: You are writing the "Target Audience" section of your design brief. Which description is most useful to a designer?
**A)** "Everyone"
**B)** "College students aged 18-24 who are managing multiple assignment deadlines, prefer mobile-first interactions, and value speed over aesthetics"
**C)** "People who use computers"
**D)** "The same audience as our competitor"
**Answer**: B
**Explanation**: Specific audience descriptions — demographics, behaviors, preferences, and context — give the designer concrete direction for visual tone, layout priorities, and interaction patterns.

---

## Question 12
**Question**: Your design brief presentation is scheduled for Week 6. When should you begin drafting the brief?
**A)** The night before the presentation
**B)** During Sprint 2 (Weeks 4-5), using Sprint 1 learnings to inform design asset needs and iterating on the draft with peer feedback
**C)** After the presentation, based on designer questions
**D)** During Sprint 1, before you have built any features
**Answer**: B
**Explanation**: Sprint 2 is the ideal drafting window — you have Sprint 1 feature progress to inform asset needs, and the Module 3 practice activity provides structured peer review time before the Week 6 presentation.

---

## Answer Key

| Question | Answer | Topic |
|----------|--------|-------|
| 1 | B | Design brief purpose |
| 2 | B | Technical constraints communication |
| 3 | B | Audience analysis |
| 4 | B | Visual reference types |
| 5 | B | Technical constraints communication |
| 6 | B | Professional feedback giving |
| 7 | B | Presentation structure |
| 8 | B | Technical vs non-technical communication |
| 9 | B | Accessibility communication |
| 10 | B | Presentation structure |
| 11 | B | Audience analysis |
| 12 | B | Presentation timeline |

---

**Canvas Import Notes**:
- Create as a Canvas Quiz with a question bank of all 12 questions
- Set Canvas to display 10 random questions per attempt
- Unlimited attempts, highest score kept
- Auto-graded with feedback shown after submission
- Prerequisite: Module 2 completion

---

**Last Updated**: March 13, 2026
**Author**: Angela Westmoreland (Instructional Designer)
