<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_03_System_Design_Studio.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk5–6 (M3)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 3 Activity: System Design Studio - From Stories to Diagrams and Wireframes

**Duration**: 150 minutes
**Format**: Small groups (2-3 students)
**Materials Needed**:
- Laptop with internet access
- Draw.io account (free at app.diagrams.net)
- Figma account (free at figma.com)
- User stories from Module 2 (or instructor-provided set)
- Design checklist
- Project scenario document

**Learning Objectives**:
- Translate user stories into UML use case diagrams
- Design entity-relationship diagrams (ERDs) from system requirements
- Create wireframes that match acceptance criteria
- Use industry-standard design tools (Draw.io and Figma)
- Practice explaining design decisions to stakeholders
- Recognize when diagrams are "good enough" vs over-designed

---

## Overview

**You have user stories. Now what?** Stories tell you WHAT to build. Designs tell you HOW.

Before you write a single line of code, you need to visualize:
- **Who uses the system and what they do** (use case diagrams)
- **What data the system stores and how it relates** (ERD)
- **What users see and click** (wireframes)

This is the design phase of SDLC. It's where you catch expensive mistakes cheap. Finding a bad design on paper takes 10 minutes to fix. Finding it in production code takes 10 days.

Today's lab is a design studio. You'll work in small groups on a real project scenario. By the end of class, you'll have a complete design package:
- **3 diagrams**: Use case diagram, ERD, and system architecture diagram
- **5 wireframes**: Key screens that implement your user stories
- **Design decisions document**: Why you made the choices you made

These are the artifacts you'd present to a client or development team. They answer: "Here's what we're building, here's how it will work, here's what it will look like."

This is essential preparation for CSC-289. Your capstone project will require exactly these deliverables. Get fluent with the tools now.

**One more thing**: Design is iterative. Your first attempt will be wrong. That's expected. Sketch fast, get feedback, revise. Perfect is the enemy of done.

---

## Pre-Activity Setup (10 minutes)

**Before you start designing:**

1. **Form groups** (2-3 students):
   - Mix skill levels if possible
   - One person per laptop for collaborative work

2. **Set up accounts**:
   - [ ] Create free Draw.io account at app.diagrams.net
   - [ ] Create free Figma account at figma.com
   - [ ] Verify you can create new documents in both tools

3. **Read the project scenario** (instructor provides):
   - **Project**: Community meal planning app
   - **Target users**: Families, meal preppers, busy professionals
   - **Core features**: Recipe management, meal calendar, shopping list generation
   - **User stories**: 10 provided stories (or use your Module 2 stories)

4. **Review the deliverables checklist**:
   ```
   Design Package Must Include:
   - [ ] Use Case Diagram (all actors and major functions)
   - [ ] ERD (entities, attributes, relationships)
   - [ ] System Architecture Diagram (components and connections)
   - [ ] 5 Wireframes (mobile or web, key user flows)
   - [ ] Design Decisions Document (1 page, key choices explained)
   ```

5. **Agree on design conventions**:
   - Web app or mobile app? (Pick one for consistency)
   - Color scheme (keep it simple: grayscale with one accent color)
   - Low-fidelity (sketches) or mid-fidelity (some detail)?

**Instructor Check**: Verify all groups have accounts working and understand the scenario.

---

## Part 1: Use Case Diagram - Mapping User Interactions (30 minutes)

### Instructions

**Use case diagrams show WHO uses the system and WHAT they can do.** It's a bird's-eye view of functionality.

**Step 1: Identify actors (5 minutes)**

From your user stories, who are the users?

For the meal planning app:
- **Registered User**: Person who creates meal plans
- **Guest User**: Person browsing recipes without account
- **System Admin**: Manages user accounts and content
- **External API** (not human): Nutrition database, grocery store API

List all actors. Mark which are primary (main users) vs supporting (admin, external systems).

**Step 2: Identify use cases (10 minutes)**

Use cases = major functions of the system. Drawn from user stories.

From user stories to use cases:
- Story: "As a user, I want to search for recipes by ingredient" → Use case: "Search Recipes"
- Story: "As a user, I want to add a recipe to my meal calendar" → Use case: "Schedule Meal"
- Story: "As a user, I want to generate a shopping list from my meal plan" → Use case: "Generate Shopping List"

**List 8-12 use cases.** Focus on major functions, not every little feature.

Group related use cases:
- **Recipe Management**: Search Recipes, Add Recipe, Edit Recipe, Rate Recipe
- **Meal Planning**: View Calendar, Schedule Meal, Reschedule Meal
- **Shopping**: Generate Shopping List, Mark Item Purchased, Export List
- **Account**: Register, Login, Manage Profile

**Step 3: Draw the diagram in Draw.io (15 minutes)**

Open Draw.io. Use UML Use Case template.

**Draw:**
1. **System boundary box**: Large rectangle labeled "Meal Planning App"
2. **Actors**: Stick figures outside the box
   - Registered User (left side)
   - Guest User (left side)
   - System Admin (right side)
   - External API (right side)
3. **Use cases**: Ovals inside the box
   - Label each: "Search Recipes", "Schedule Meal", etc.
4. **Relationships**: Lines connecting actors to use cases
   - Solid line = actor can perform this use case
   - Dashed arrow with <<include>> = use case always includes another (e.g., "Schedule Meal" includes "Search Recipes")
   - Dashed arrow with <<extend>> = optional behavior (e.g., "Search Recipes" extends to "Filter by Dietary Restriction")

**Layout tips:**
- Keep it readable—don't cram everything
- Group related use cases visually
- Use consistent spacing

**Export**: Save as PNG and PDF.

### Expected Output

- Use case diagram showing 8-12 major system functions
- 3-5 actors clearly labeled
- Relationships between actors and use cases
- Include/extend relationships where appropriate (optional but shows sophistication)
- Clean, professional-looking diagram

### Common Issues & Fixes

**Issue**: Too many use cases (20+)
- **Fix**: You're going too granular. "Add ingredient" is a step within "Add Recipe," not a separate use case. Combine.

**Issue**: Actors are inside the system boundary
- **Fix**: Actors are EXTERNAL. They use the system. Draw stick figures outside the box.

**Issue**: Use cases describe implementation
- **Bad**: "Query database for recipes"
- **Good**: "Search recipes"
- **Fix**: Focus on user actions, not technical implementation.

**Issue**: Lines everywhere, diagram is spaghetti
- **Fix**: Not every actor connects to every use case. Be selective. If Guest User can't schedule meals, don't connect them.

---

## Part 2: Entity-Relationship Diagram - Designing the Data Model (35 minutes)

### Instructions

**ERDs show WHAT data the system stores and HOW it relates.** This becomes your database schema.

**Step 1: Identify entities (10 minutes)**

Entities = things the system needs to remember.

From user stories and use cases:
- "Users need to save recipes" → **Recipe** entity
- "Users create meal plans" → **MealPlan** entity
- "Users have accounts" → **User** entity
- "Recipes have ingredients" → **Ingredient** entity
- "Shopping lists track items" → **ShoppingList** entity, **ShoppingItem** entity

**List 5-8 core entities.** Don't model everything—focus on the most important data.

For each entity, list attributes:

**User**:
- UserID (primary key)
- Email
- PasswordHash
- FirstName
- LastName
- DietaryPreferences
- CreatedDate

**Recipe**:
- RecipeID (primary key)
- Title
- Description
- PrepTime
- CookTime
- Servings
- Instructions
- CreatedBy (foreign key → User)
- CreatedDate

**Ingredient**:
- IngredientID (primary key)
- Name
- Category (Produce, Dairy, Meat, etc.)

**RecipeIngredient** (linking table):
- RecipeID (foreign key → Recipe)
- IngredientID (foreign key → Ingredient)
- Quantity
- Unit (cups, tablespoons, etc.)

**MealPlan**:
- MealPlanID (primary key)
- UserID (foreign key → User)
- Date
- MealType (Breakfast, Lunch, Dinner, Snack)
- RecipeID (foreign key → Recipe)

**ShoppingList**:
- ShoppingListID (primary key)
- UserID (foreign key → User)
- CreatedDate
- Name

**ShoppingItem**:
- ShoppingItemID (primary key)
- ShoppingListID (foreign key → ShoppingList)
- IngredientID (foreign key → Ingredient)
- Quantity
- Unit
- IsPurchased (boolean)

**Step 2: Identify relationships (10 minutes)**

How do entities connect?

- User --< creates >-- Recipe (one user creates many recipes)
- Recipe --< has >-- RecipeIngredient --< refers to >-- Ingredient (many-to-many via linking table)
- User --< has >-- MealPlan --< includes >-- Recipe
- User --< creates >-- ShoppingList --< contains >-- ShoppingItem --< references >-- Ingredient

**Determine cardinality:**
- **One-to-one** (1:1): Rare. Example: User has one Profile.
- **One-to-many** (1:M): Common. One user has many recipes.
- **Many-to-many** (M:N): Requires linking table. Many recipes use many ingredients.

**Step 3: Draw the ERD in Draw.io (15 minutes)**

Use Entity-Relationship template in Draw.io.

**Draw:**
1. **Entities as rectangles**: One per entity
2. **Attributes listed inside**: Include data types if you want detail
3. **Primary keys marked**: Underline or use "PK" label
4. **Relationships as lines**: Connect entities
5. **Cardinality markers**: Use crow's foot notation
   - Line with no mark = one
   - Line with crow's foot (three lines) = many
6. **Linking tables** for many-to-many: Draw RecipeIngredient between Recipe and Ingredient

**Color-code** (optional but helpful):
- Users/accounts = blue
- Content (recipes, ingredients) = green
- Planning (meal plans, lists) = yellow

**Export**: Save as PNG and PDF.

### Expected Output

- ERD with 5-8 entities
- Attributes listed for each entity (4-8 attributes each)
- Primary and foreign keys identified
- Relationships with cardinality clearly marked
- Linking tables for many-to-many relationships
- Professional, organized layout

### Common Issues & Fixes

**Issue**: Missing linking tables for many-to-many
- **Problem**: Recipe connects directly to Ingredient with M:N relationship
- **Fix**: Create RecipeIngredient linking table with foreign keys to both

**Issue**: Too many attributes (15+ per entity)
- **Fix**: Are you storing calculated fields? (e.g., "TotalCalories" can be calculated from ingredients). Remove anything computable.

**Issue**: Relationships missing or incorrect cardinality
- **Fix**: Read it aloud: "One user has many recipes. One recipe belongs to one user." If that's true, it's 1:M.

**Issue**: Entities that are actually attributes
- **Bad**: Separate entities for FirstName, LastName
- **Good**: FirstName and LastName are attributes of User entity
- **Fix**: If it doesn't have relationships or multiple attributes, it's probably an attribute, not an entity.

---

## Part 3: Wireframes - Visualizing the User Interface (50 minutes)

### Instructions

**Wireframes show WHAT users see and interact with.** They're blueprints for the UI.

**Step 1: Choose 5 key screens to wireframe (5 minutes)**

From your user stories, which screens are most critical?

For the meal planning app:
1. **Home/Dashboard**: Overview of user's meal plan for the week
2. **Recipe Search**: Search and filter recipes
3. **Recipe Detail**: View full recipe with ingredients and instructions
4. **Meal Calendar**: Weekly view where users schedule meals
5. **Shopping List**: Generated list from meal plan

**Step 2: Sketch on paper first (10 minutes)**

Before touching Figma, sketch rough layouts on paper.

For each screen, identify:
- **Navigation**: How do users get to other screens?
- **Primary action**: What's the main thing users do here? (Make it prominent)
- **Content hierarchy**: What's most important? (Bigger, higher, bolder)
- **User inputs**: Forms, search bars, buttons

**Example sketch - Recipe Search screen**:
```
[Logo]  [Search: ____________________] [Profile Icon]

[Filter by:] [Dietary] [Meal Type] [Prep Time]

Recipe Results:
┌─────────────────────────────┐
│ [Image]                      │
│ Spaghetti Carbonara          │
│ ⏱ 30 min | 🍽 4 servings    │
│ ⭐⭐⭐⭐⭐ (23 reviews)        │
└─────────────────────────────┘

┌─────────────────────────────┐
│ [Image]                      │
│ Chicken Stir Fry             │
│ ⏱ 20 min | 🍽 2 servings    │
│ ⭐⭐⭐⭐ (15 reviews)          │
└─────────────────────────────┘

[Load More]
```

Sketch all 5 screens. Boxes, labels, annotations. Don't worry about beauty.

**Step 3: Build wireframes in Figma (35 minutes)**

Open Figma. Create a new design file.

**Set up artboards:**
- If designing for mobile: 375px × 812px (iPhone size)
- If designing for web: 1440px × 900px (laptop size)

Create 5 artboards (one per screen).

**Design components:**
- **Navigation bar**: Logo, menu items, search, user profile
- **Buttons**: Clearly labeled ("Search", "Add to Meal Plan", "Generate Shopping List")
- **Forms**: Input fields with labels and placeholder text
- **Content cards**: Recipe cards, meal slots, shopping list items
- **Icons**: Use simple icons for common actions (search, heart, calendar, shopping cart)

**Figma tips:**
- Use simple shapes: rectangles, circles, text boxes
- Keep it low-fidelity: Gray boxes for images, don't add real photos (yet)
- Use a consistent color scheme: Gray background, white cards, one accent color for buttons
- Use real text: Not "Lorem ipsum"—use actual labels and content
- Spacing matters: Add padding, don't cram elements

**Link screens together** (show flow):
- Click "Add to Meal Plan" on Recipe Detail → navigates to Meal Calendar
- Click recipe card on Search → navigates to Recipe Detail
- Click "Shopping List" nav item → navigates to Shopping List

Use Figma's prototype mode to add clickable links between screens.

**Export**: Share Figma link (anyone with link can view). Also export as PNG images.

### Expected Output

- 5 complete wireframes in Figma
- Screens match user stories and acceptance criteria
- Navigation between screens is logical and clear
- UI elements are labeled (no mystery icons)
- Consistent layout and styling across screens
- Clickable prototype showing user flow (bonus)

### Common Issues & Fixes

**Issue**: Wireframes look like high-fidelity designs (photos, gradients, perfect colors)
- **Fix**: This is a wireframe, not a visual design. Use placeholders. Save high-fidelity for later. You're designing structure, not appearance.

**Issue**: Screens don't match user stories
- **Fix**: Go back to your acceptance criteria. Does this screen let users do what the story says? If not, redesign.

**Issue**: Missing key UI elements
- **Fix**: Walk through a user scenario: "I want to add a recipe to Monday's dinner. What do I click?" If you can't complete the task, add the missing buttons/forms.

**Issue**: Inconsistent layout between screens
- **Fix**: Create reusable components (nav bar, buttons, cards). Copy-paste them to each screen for consistency.

---

## Part 4: Design Decisions Document & Instructor Review (25 minutes)

### Instructions

**Design decisions aren't obvious from diagrams.** You need to explain WHY you made choices.

**Step 1: Document key design decisions (15 minutes)**

Write a 1-page design decisions document covering:

**1. System Architecture Decisions** (from ERD):
```
Database Structure:
- Why we used a linking table (RecipeIngredient) for many-to-many:
  "Recipes and ingredients have a many-to-many relationship. We need to store quantity and unit for each ingredient per recipe, so a linking table was necessary."

- Why we separated MealPlan and Recipe:
  "Users might want to schedule the same recipe multiple times, so MealPlan references Recipe rather than duplicating data."
```

**2. User Interface Decisions** (from wireframes):
```
Navigation:
- Why we used a bottom nav bar (mobile):
  "Primary actions (Home, Search, Meal Plan, Shopping List) need to be accessible from any screen. Bottom nav on mobile is thumb-friendly."

Search Filters:
- Why filters are always visible:
  "User testing showed people want to filter by dietary restrictions immediately. Hiding filters in a menu added extra clicks."
```

**3. User Experience Trade-offs**:
```
We chose to require login for meal planning but allow guest browsing of recipes.
- Pro: Lowers barrier to entry, users can explore before committing
- Con: Can't save guest's activity if they later register
- Decision: Worth the trade-off to increase user acquisition
```

**4. Technical Considerations**:
```
Shopping List Generation:
- Option 1: Manually add items (simple to build)
- Option 2: Auto-generate from meal plan ingredients (more valuable)
- Decision: Build Option 2. It's the core value proposition of the app.
```

**Format this as a simple document**:
- 1 page
- 4-6 decision points
- Each includes: Decision, Reasoning, Alternatives considered (if applicable)

**Step 2: Instructor design review (10 minutes)**

Instructor will circulate to each group for a 5-minute design critique.

**Prepare to present:**
1. **Use case diagram**: "Here are our actors and major functions"
2. **ERD**: "Here's our data model and key relationships"
3. **Wireframes**: Click through your Figma prototype, show user flow
4. **Design decisions**: Highlight 2-3 key choices you made and why

**Instructor will ask:**
- "Why did you design it this way?"
- "What happens if [edge case]?"
- "How does this screen implement [specific user story]?"
- "What would you change if you had more time?"

**Take notes on feedback.** You'll revise based on this.

### Expected Output

- 1-page design decisions document
- Ability to explain and defend design choices
- Feedback from instructor on what's strong and what needs revision
- Understanding of design trade-offs

### Common Issues & Fixes

**Issue**: Design decisions are just descriptions, not reasoning
- **Bad**: "We created a User entity with these attributes"
- **Good**: "We separated User and Profile entities to keep authentication data separate from personal preferences. This allows faster login queries."
- **Fix**: Always include the WHY, not just the WHAT.

**Issue**: Can't answer "Why?" questions
- **Fix**: If you made a choice without reasoning, that's a guess. Revisit the decision. What problem does it solve?

**Issue**: Defensive during critique
- **Fix**: Feedback is a gift. Instructor is helping you catch problems now, not after implementation. Listen, take notes, say "good point."

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Design Iterations**: How many times did you revise your diagrams or wireframes? What triggered the changes? (Peer feedback? Instructor review? Noticing a gap?)

**2. Abstraction Levels**: Use case diagrams are high-level. ERDs are detailed. Wireframes are specific. How did moving between abstraction levels help you think about the system differently?

**3. Tool Learning Curve**: Draw.io and Figma are new tools for most of you. What was hardest to learn? What shortcuts or features made designing faster?

**4. Design vs Implementation**: You designed a full system without writing code. Do you feel more or less prepared to build it now? Why?

**5. Stakeholder Communication**: If you presented these artifacts to a non-technical client, what would you need to explain? What would be obvious?

### Exit Ticket

**Submit via Canvas** (3-5 sentences):

```
1. Which design artifact (use case diagram, ERD, wireframes) was most valuable for understanding the system? Why?

2. What design decision are you most proud of? What was your reasoning?

3. If you had another 2 hours, what would you improve in your design?

4. How will you apply this design process to your CSC-289 capstone project?
```

---

## Extension Challenges (Optional)

**For groups who finish early:**

### Challenge 1: System Architecture Diagram
Create a component diagram showing:
- Frontend (web/mobile app)
- Backend API
- Database
- External services (nutrition API, grocery API)
- How they communicate (REST, GraphQL, etc.)

Show data flow: User action → Frontend → API → Database → Response

### Challenge 2: Edge Case Wireframes
Design 3 error state wireframes:
- Search returns no results
- Shopping list is empty
- User's internet connection fails while loading recipes

How does the UI communicate these states gracefully?

### Challenge 3: Accessibility Audit
Review your wireframes for accessibility:
- Are buttons large enough to tap? (44px minimum for mobile)
- Is text readable? (16px minimum font size)
- Do images have alt text descriptions?
- Is color contrast sufficient? (4.5:1 ratio for body text)
- Can users navigate with keyboard only (web)?

Document 3 accessibility improvements you'd make.

### Challenge 4: Responsive Design
Pick one wireframe. Design 3 versions:
- Mobile (375px)
- Tablet (768px)
- Desktop (1440px)

Show how layout adapts to screen size. What changes? What stays the same?

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, accounts, scenario review
- **10-40 min**: Part 1 - Use case diagram in Draw.io
- **40-75 min**: Part 2 - ERD in Draw.io
- **75-125 min**: Part 3 - Wireframes in Figma (longest section)
- **125-150 min**: Part 4 - Design decisions document and review

### Common Student Struggles

**1. Struggle**: Tool overwhelm (too many features in Figma/Draw.io)
   - **Intervention**: Show 5 essential tools only: Rectangle, Text, Line, Connector, Export. Ignore everything else for now.
   - **Success Indicator**: Students create clean diagrams using basic shapes, no fancy features

**2. Struggle**: Over-designing (spending 30 minutes on one perfect wireframe)
   - **Intervention**: Set aggressive time limits. "You have 7 minutes per wireframe. Go." Enforce it.
   - **Success Indicator**: All 5 wireframes completed, even if rough. Done > Perfect.

**3. Struggle**: ERD relationships are incorrect or missing
   - **Intervention**: Walk through an example together. "One user has how many recipes? Many. One recipe belongs to how many users? One. That's 1:M."
   - **Success Indicator**: Students can verbally explain relationships: "One X has many Y"

**4. Struggle**: Wireframes don't implement user stories
   - **Intervention**: "Show me where the user searches for recipes. Where's the search box?" Make them map screens to stories explicitly.
   - **Success Indicator**: Every user story maps to a screen or UI element in wireframes

**5. Struggle**: Groups divide work (one person does use case, one does ERD)
   - **Intervention**: "Everyone should contribute to every artifact. Discuss together, one person drives the tool."
   - **Success Indicator**: All group members can explain all design decisions, not just "their" section

### Materials to Prepare

**Before Class:**
- [ ] Create detailed project scenario document (2-3 pages)
  - Background, target users, problem statement
  - 10 user stories covering core features
  - Any constraints (mobile-first, must integrate with API, etc.)
- [ ] Prepare Draw.io tutorial slides (5 min walkthrough of basics)
- [ ] Prepare Figma tutorial slides (5 min walkthrough of artboards, shapes, prototype mode)
- [ ] Create example use case diagram, ERD, and wireframe to show "good enough" quality
- [ ] Print design decisions template (1 per group)
- [ ] Test that Draw.io and Figma work on school network (no firewall blocks)

**During Class:**
- [ ] Verify all students can access Draw.io and Figma (first 10 minutes)
- [ ] Project a timer for each part (keeps groups on pace)
- [ ] Circulate during Part 1 to check use case diagrams before they move on
- [ ] Circulate during Part 2 to catch ERD mistakes (relationships, missing linking tables)
- [ ] During Part 3, screenshot good wireframes to show as examples
- [ ] Conduct 5-minute design reviews with each group in Part 4
- [ ] Take notes on common design mistakes for whole-class feedback

**After Class:**
- [ ] Collect all Figma links and Draw.io files
- [ ] Compile best examples into a class portfolio (with permission)
- [ ] Create a "Common Design Mistakes" document from observations
- [ ] Note which groups struggled with which diagrams (for targeted support)
- [ ] Verify all groups exported their files (some forget)
- [ ] Share instructor feedback summary with entire class

### Teaching Tips

**Emphasize "good enough"**: Students want perfect diagrams. Shut that down. "If you spend 2 hours making a beautiful ERD and it's wrong, you wasted 2 hours. Better: 20-minute rough ERD that you can revise."

**Model messy first drafts**: Show your own rough sketches. "This is my first wireframe. It's ugly. That's fine. I iterate."

**Use real-world examples**: Pull up a wireframe from Figma's community or Dribbble. "See? This is what professional designers share. It's clean but not fancy."

**Enforce time limits ruthlessly**: Set a timer. When it goes off, "Pens down. Move to the next part." Students will protest. Hold firm. Iteration happens after you have something to iterate on.

**Peer review during work**: "Switch laptops with the group next to you. Review their ERD. Find one thing they're doing well and one thing to improve. You have 3 minutes."

**Celebrate diverse designs**: When groups present, highlight: "Team A used a bottom nav, Team B used a hamburger menu. Both solve the problem differently. That's design!"

**Connect to code**: "This ERD becomes your database schema. These wireframes become your HTML/CSS. Design isn't separate from development—it directs it."

### Teaching Philosophy Notes

This lab is where students realize design is thinking, not decoration. They've written user stories (what to build). Now they're designing how to build it. This is problem-solving, not art.

The tools (Draw.io, Figma) have steep learning curves. Expect frustration. Normalize it: "Yes, Figma has 1000 features. You need 5 of them today. Learn those. Ignore the rest."

The design review component (Part 4) is critical. Students need to defend their choices. "Why?" is the most important question. If they can't answer it, they didn't design—they guessed.

The goal isn't perfect artifacts. The goal is complete artifacts that communicate a coherent design. A rough diagram that the team understands is infinitely better than a beautiful diagram that's wrong.

Finally, iteration is the lesson. First drafts are always wrong. Good designers iterate. Bad designers defend their first draft.

By the end, students should think: "I can visualize a system before building it. I can communicate my design to others. I have tools to do this." That's the confidence they need for capstone.

---

**Remember**: Design is not about making things pretty. It's about making decisions visible. Your diagrams are documentation of your thinking. If your team can build from your design, you succeeded.
