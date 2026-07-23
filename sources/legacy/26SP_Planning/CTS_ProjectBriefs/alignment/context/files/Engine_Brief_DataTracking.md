<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/course-cts285-template/26SP_Planning/CTS_ProjectBriefs/alignment/context/files/Engine_Brief_DataTracking.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk13-16
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# ENGINE BRIEF: Data Tracking
## *"Log today. See the trend. Hit the goal."*

---

## What This Engine Does

A **time-series tracking system** that handles:

| Capability | Description |
|------------|-------------|
| **Metric Definition** | Create trackable measurements (numeric, boolean, scale) |
| **Entry Logging** | Record values with timestamps |
| **Goal Setting** | Targets, deadlines, habits |
| **Trend Analysis** | Averages, streaks, progress over time |
| **Visualization** | Charts, graphs, dashboards |

**The insight:** Tracking fitness, nutrition, mood, pet care, recipes, habits - they're all the same data pattern. Log a value. See the trend. Chase a goal.

---

## Engine Capabilities (What Devs Build)

```
┌─────────────────────────────────────────────┐
│               DATA TRACKING                 │
├─────────────────────────────────────────────┤
│  Metrics            Entries                 │
│  ├─ Name            ├─ Value                │
│  ├─ Unit            ├─ Timestamp            │
│  ├─ Data Type       ├─ Notes                │
│  │  (number/bool/   └─ Metric ID            │
│  │   scale/text)                            │
│  └─ Target (opt)                            │
├─────────────────────────────────────────────┤
│  Goals              Aggregations            │
│  ├─ Metric          ├─ Daily average        │
│  ├─ Target Value    ├─ Weekly total         │
│  ├─ Deadline        ├─ Streak count         │
│  └─ Frequency       └─ Trend direction      │
├─────────────────────────────────────────────┤
│  Visualizations: Line charts, calendars,   │
│  streak counters, goal progress bars        │
└─────────────────────────────────────────────┘
```

---

## Skin Possibilities (Designers Propose)

| Skin Idea | Metrics Tracked | Target User |
|-----------|-----------------|-------------|
| **FitPath** | Weight, reps, miles, workouts | Fitness enthusiasts |
| **NutriLog** | Calories, macros, water, meals | Diet-focused |
| **MindCalm** | Mood (1-10), meditation minutes, journal entries | Mental wellness |
| **PawHealth** | Pet weight, walks, vet visits, medications | Pet owners |
| **RecipeTracker** | Recipes tried, ratings, cook time, ingredient inventory | Home cooks |
| **SleepScore** | Hours slept, quality rating, bedtime consistency | Sleep optimizers |
| **HabitStack** | Boolean habits (did I do X today?), streaks | Habit builders |
| **GardenLog** | Watering, growth measurements, harvest yields | Gardeners |
| **BiometricCompliance™** | Mandatory wellness metrics | 😈 *Satirical* |

**YOUR IDEA HERE:** If it involves tracking something over time - it probably fits.

---

## What Designers Decide

| Engine Provides | Designer Chooses |
|-----------------|------------------|
| Generic "metric" | What metrics matter (steps? mood? servings?) |
| Numeric entry | Scale and units (1-10? pounds? minutes?) |
| Goal system | How goals are framed (targets? habits? streaks?) |
| Trend charts | Which visualizations matter most |
| Generic UI | Emotional tone (motivational? clinical? casual?) |

---

## Terminology Map Template

| Engine Term | Your Skin Calls It... |
|-------------|----------------------|
| Metric | |
| Entry | |
| Value | |
| Goal | |
| Streak | |
| Trend | |
| Dashboard | |
| "On track" | |
| "Needs attention" | |

---

## Database Challenge (For DB Specialist)

**Key problems:**
- Time-series storage (efficient queries for "last 30 days")
- Aggregation queries (daily average, weekly total)
- Streak calculation (consecutive days meeting goal)
- Multiple data types in same schema

**Sample query:**
> "User's average mood score by day-of-week for the last 3 months, with streak count for each metric"

---

## Stretch Goals (Not MVP)

- [ ] Device integrations (Fitbit, Apple Health)
- [ ] Photo attachments for entries
- [ ] Social sharing / accountability partners
- [ ] Predictive insights ("you tend to skip workouts on Fridays")
- [ ] Export to CSV/PDF

---

## For This Skin, I Want to Build...

**Skin name:** _______________________

**Target user:** _______________________

**What they're tracking:** _______________________

**Emotional tone:** _______________________

---

*"The Algorithm tracks your metrics. Progress is mandatory. Regression requires explanation."* 🤖

