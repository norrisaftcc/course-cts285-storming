<!--
  B-010 (task 2.1) — adapted 2026-08-07 from the frozen legacy mirror at
  sources/legacy/26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Platform_Architecture_Refined.md
  (346 lines, read-only). ASSESSMENT_NOTES scopes this as a date/label refresh (S), and that is what
  this is - the three-layer model and the four engines are the source's, substantially intact.

  What changed:
   - Dated for 26FA and framed as Week 13 core reading rather than spring day-1 material. The
     source presumes ORANGE competence, which is correct here and would be incomprehensible at
     week 1-2 (master plan section 204).
   - Layer 1's fixed "Team A/B/C/D owns library X" assignment is stated as an example rather than
     an allocation. That mapping belongs to whoever runs the spring, not to a fall reading.
   - "GRAY's proposed skins" folded into the example-skin lists; the full menu lives in
     Skin_Selection_Menu.md so there is one place to look.
   - Payment processing kept as an explicit stretch goal - the source is right that it is the
     most common MVP overreach in the commerce engine.
   - The satirical skins are named here in the same register as the rest, per KAYFABE_ARCHITECTURE:
     they are products on the menu, not a bit.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Platform Architecture — The Three-Layer Model

**Week 13 core reading.** You need this before the engine and skin selection in the Week 13 assignment.

---

## The one idea

> **The engine defines capabilities. The skin defines domain.**

Everything below is an elaboration of that sentence. If you remember nothing else, remember that a skin renames things and sets a tone — it does not add capability. A product whose brand promises something the engine underneath cannot do is a product that discovers the gap in March.

---

## The three layers

```
┌──────────────────────────────────────────────────────────────┐
│  LAYER 3 — White-Label Skins                                 │
│  A branded product: name, terminology, visual identity,      │
│  target market, tone.                                        │
│  Design partners PROPOSE skins that fit the engine.          │
├──────────────────────────────────────────────────────────────┤
│  LAYER 2 — Vertical Slice Engines                            │
│  The working capability underneath. One engine per team.     │
│  OUTPUT: an engine that can be skinned.                      │
├──────────────────────────────────────────────────────────────┤
│  LAYER 1 — Shared Infrastructure                             │
│  Auth, CRUD patterns, API scaffolding, ORM setup, deploy.    │
│  Each team owns one library the others import.               │
│  Cross-team sharing prevents four teams reinventing the same │
│  four things.                                                │
└──────────────────────────────────────────────────────────────┘
```

**Layer 1 is a spring concern.** It is described here so the shape is familiar, not because you build it in the fall. Who owns which shared library is allocated by whoever runs the spring semester — a typical split is one team each on authentication, API patterns, database utilities, and deployment config, but treat that as an example of the shape rather than an assignment you already have.

**Layer 2 is what you choose in Week 13.**

**Layer 3 is what you choose alongside it,** and what your design partner will have opinions about in Week 15.

---

## The four engines

### Engine 1 — Task Engine

**Core capability:** organize work into hierarchies, assign it to people, track status.

```
Workspace → Project → Task → Subtask
    ↓          ↓        ↓
 Members   Deadline  Assignee
```

**The engine provides:** multi-tenant workspace isolation · role-based access (admin / member / viewer) · task CRUD with a status workflow · assignment and due dates · project grouping.

**The skin decides:** what a "workspace" is called (Family? Team? Client?) · what a "task" is called (Chore? Assignment? Deliverable?) · visual personality and tone · target market.

**Example skins:** FamilyHub · StudyStream · FreelanceFlow · EventPro · RenovateRight · TeamFlow

---

### Engine 2 — Commerce Tracking Engine

**Core capability:** track business activity — inventory, transactions, a ledger.

```
Account → Transactions → Line Items
    ↓          ↓
 Balance   Categories
```

**The engine provides:** transaction recording (income / expense / transfer) · categorization and tagging · inventory tracking with quantities and values · reporting and summaries · multiple accounts.

**The skin decides:** inventory-heavy or ledger-heavy or both · retail, services, or personal finance · whether they are "products", "items", or "inventory" · which reports matter.

**Example skins:** CandleGlow · ThreadLine · TechDrop · PetPantry · GreenThumb · ComplianceCart

> **Payment processing is a stretch goal, not MVP.** The engine tracks transactions; actually moving money is a later milestone. This is the most common way a commerce team overcommits, and it usually happens in the first week.

---

### Engine 3 — Recommendation Engine

**Core capability:** rate items, find similar things, suggest discoveries.

```
Items → Attributes → Similarity Match → Recommendations
```

**The engine provides:** an item catalog with rich metadata · a user rating system · similarity calculation (user-based or item-based) · recommendation generation · **"why was this recommended" explanations**.

**The skin decides:** what is being recommended · the rating scale and how it feels to use · browse-driven or suggestion-driven discovery · domain-specific metadata (genres, cuisines, body styles).

**Example skins:** NextRead · TableFor · WheelMatch · StreamPick · FlavorFind · PreferenceOptimizer

> The "why recommended" explanation is part of the engine and is worth protecting. A recommender that cannot say why is much easier to build and much harder to trust, and every team that cuts it regrets it at the pitch.

---

### Engine 4 — Data Tracking Engine

**Core capability:** log values over time, set goals, visualize trends.

**The engine provides:** time-series value logging · goal setting and progress against it · trend visualization · streaks and history · multi-metric tracking.

**The skin decides:** what is being tracked · how often a user is expected to log · what "progress" looks like in this domain · **privacy posture, which in health domains is not a styling choice**.

**Example skins:** FitPath · HeartWatch · PawHealth · MindCalm · NutriLog · BiometricCompliance

---

## Choosing

**Engine first, then skin.** Picking the domain first and reverse-engineering an engine to fit is how teams end up committed to capabilities they do not have.

Ask, in this order:

1. Which **capability set** does our team actually want to build for a semester?
2. Which **domain** on that engine do we have something to say about?
3. What does the domain need that the engine does not provide, and is that gap small enough to build?

If question 3 has a large answer, the pair does not fit. That is a useful finding in Week 13 and an expensive one in March.

---

## A note on the satirical skins

Four of the twenty-four are satirical: **TeamFlow**, **ComplianceCart**, **PreferenceOptimizer**, **BiometricCompliance**. They sit on the menu on the same terms as the other twenty.

They are also harder than they look. A satirical brand still needs a coherent visual identity, a plausible target market, and a product that genuinely works — and the joke has to land for someone who has never taken this course. Picking one earns no extra credit, and avoiding one costs nothing.

---

*Companion reading: `Skin_Selection_Menu.md` — the full 24-product menu.*
