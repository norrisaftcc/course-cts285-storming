<!--
  B-011 (task 2.2) — ported 2026-08-07 from the frozen legacy mirror at
  sources/legacy/26SP_Planning/Terminology_Maps/TaskEngine_TerminologyMap.md (205 lines, verdict
  KEEP, read-only). ASSESSMENT_NOTES scopes it "None — kickoff exercise IS the session" (S), and
  the port is a date/label refresh; the tables are the source's.

  WHY ONLY THIS ONE OF THE FOUR MAPS WAS PORTED — the reconciliation the plan required found that
  three of the four diverge from the canonical skin menu, and porting them would have handed
  students maps contradicting the menu they chose from in Week 13:

    TaskEngine ......... FamilyHub/StudyStream/FreelanceFlow/EventPro/RenovateRight/TeamFlow
                         -> EXACT match with Skin_Selection_Menu.md. Ported. This file.
    CommerceEngine ..... BudgetBoss/Sprout/Atlas/Trusty/PocketBack/Bag/PayComply (7 columns)
                         -> ZERO overlap with the menu's six. Earlier generation. NOT ported.
    RecommendationEngine Bookmark/Let'sEat!/PreferenceOptimizer (3 columns)
                         -> only PreferenceOptimizer survives into the menu. NOT ported.
    DataTrackingEngine . source is explicitly "Status: BLOCKED - Awaiting GRD Creative Briefs",
                         with placeholder skins (FitTrack/HealthHub/HabitLoop/HomeMetrics/MoodSync)
                         that match neither the menu nor each other, and a placeholder table of
                         one row. NOT ported.

  The divergence is RECORDED, not silently reconciled. The menu is canon (B-010 keyed platform
  headings to engine names); the stale maps stay in sources/ as the frozen record of what the
  earlier generation actually said. Rebuilding three maps would mean inventing terminology for
  eighteen skins, which is authoring, not porting.

  This turned out to improve the week: teams BUILD their engine's map from this exemplar rather
  than reading a finished one. The source's own stated purpose is "enabling students to discover
  the white-label pattern", and producing the mapping is the discovery. Reading a filled table is not.
  status: draft; not student-facing until it graduates to a course repo.
-->
# Task Engine — Terminology Map

**The worked exemplar for Week 14.** One codebase serves all six Task Engine skins through configuration. Every column below is the *same technical entity* appearing to a different user.

If your team is on a different engine, this is your model — you build the equivalent for yours. If your team is on the Task Engine, your instructor hands you this with your own skin's column blank.

---

## Core entity terms

| Generic | FamilyHub | StudyStream | FreelanceFlow | EventPro | RenovateRight | TeamFlow |
|---|---|---|---|---|---|---|
| Task | Chore / Activity | Assignment | Deliverable | Action Item | Job | Compliance Objective |
| Project | Family Member | Class | Client | Event | Room / Area | Productivity Container |
| Category | Type | Course Area | Project Type | Vendor Category | Trade | Department |
| Workspace | Household | Student Account | Portfolio | Client Portfolio | Property | Monitored Team |
| User | Family Member | Student | Freelancer | Coordinator | Homeowner | Contributor |
| Assignee | Person | Student | Team Member | Vendor / Contact | Contractor | Assigned Citizen |

## Priority labels

| Level | FamilyHub | StudyStream | FreelanceFlow | EventPro | RenovateRight | TeamFlow |
|---|---|---|---|---|---|---|
| Low | When Possible | Eventually | Low Priority | Nice to Have | Flexible | Optional Optimization |
| Medium | Soon | This Week | Normal | Standard | Scheduled | Encouraged Urgency |
| High | Important | Due Soon | Urgent | Critical | Top Priority | MANDATORY ALIGNMENT |

## Status labels

| Status | FamilyHub | StudyStream | FreelanceFlow | EventPro | RenovateRight | TeamFlow |
|---|---|---|---|---|---|---|
| Not started | To Do | Not Started | Pending | Not Started | Planned | Acknowledged |
| In progress | Doing | Working On | In Progress | Active | Underway | Demonstrating Effort |
| Complete | Done | Submitted | Delivered | Complete | Finished | Compliance Achieved |

## UI labels

| Generic | FamilyHub | StudyStream | FreelanceFlow | EventPro | RenovateRight | TeamFlow |
|---|---|---|---|---|---|---|
| "Add Task" | "Add Chore" | "Add Assignment" | "Add Deliverable" | "Add Item" | "Add Job" | "Log Objective" |
| "Mark Complete" | "Done!" | "Submit" | "Mark Delivered" | "Complete" | "Mark Finished" | "Report Compliance" |
| "Overdue" | "Past Due" | "Late" | "Overdue" | "Behind Schedule" | "Delayed" | "Misalignment Detected" |

## Voice and tone

| Skin | Voice | Example | Avoid |
|---|---|---|---|
| **FamilyHub** | Warm, encouraging, celebrates small wins | *"Great job — you finished your chores today."* | Corporate language, pressure |
| **StudyStream** | Motivating, peer-like, study-buddy | *"You're on track. Three assignments due this week."* | Parental tone, childishness |
| **FreelanceFlow** | Professional, empowering, efficiency-focused | *"Project Alpha: 2 pending, 3 complete."* | Jargon, surveillance language |
| **EventPro** | Calm, organized, reassuring | *"Five items need attention this week."* | Frantic or stressful phrasing |
| **RenovateRight** | Practical, direct, no-nonsense | *"Kitchen renovation: plumber scheduled Tuesday."* | Over-technical, condescending |
| **TeamFlow** *(satirical)* | Dystopian corporate, surveillance-as-care | *"Your pin is YELLOW. Alignment recalibration recommended."* | Genuine warmth — it is satire |

---

## The mechanism: configuration, not code

Terminology is data. Here is the same application, twice.

```yaml
# FamilyHub
app_name: "FamilyHub"
terminology:
  task_singular: "Chore"
  project_singular: "Family Member"
  workspace_singular: "Household"
  priority_labels:   { low: "When Possible", medium: "Soon",               high: "Important" }
  status_labels:     { todo: "To Do",        in_progress: "Doing",         complete: "Done" }
```

```yaml
# TeamFlow (satirical)
app_name: "TeamFlow"
terminology:
  task_singular: "Compliance Objective"
  project_singular: "Productivity Container"
  workspace_singular: "Monitored Team"
  priority_labels:   { low: "Optional Optimization", medium: "Encouraged Urgency",   high: "MANDATORY ALIGNMENT" }
  status_labels:     { todo: "Acknowledged",         in_progress: "Demonstrating Effort", complete: "Compliance Achieved" }
```

**Nothing in the schema moved.** Same tables, same foreign keys, same status workflow. A `Task` row with `status='complete'` is the same row in both. Only the strings a user reads changed — and with them, the entire feeling of the product.

---

## The key insight

> **Terminology is configuration. Domain is a skin. The engine underneath does not move.**

Two consequences worth sitting with:

**Tone travels almost entirely through words.** TeamFlow is unsettling because "Overdue" became "Misalignment Detected", not because anything was built differently. That is a genuinely useful thing to know about software, and slightly alarming.

**A term you cannot fill in is a design question you have not answered.** If your team stalls on what to call `Assignee`, the honest reading is usually that you have not decided who assigns work in your product. The blank is the finding.
