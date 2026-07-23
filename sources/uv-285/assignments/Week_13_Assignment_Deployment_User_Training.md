<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/assignments/Week_13_Assignment_Deployment_User_Training.md
  verdict: HARVEST
  target-26FA-slot: CTS-285 wk12 (deploy content) — file retired
  ingest-date: 2026-07-23
  HARVEST: Header 50 = rubric 50. Deployment/user-training content is the only thing preserving CLO4 / CCL 'installation' language — harvest into wk12's 10-pt deploy component; the wk13 slot becomes net-new team formation.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Week 13 Assignment: Deployment & User Training Materials
## CTS-285: Systems Analysis & Design

**Due**: End of Week 13 (Friday, 11:59 PM)
**Points**: 50 (7.1% of total course grade)

---

## What You're Learning

**Role: Release Manager**. Getting your system from localhost to production where actual users can access it.

---

## Learning Objectives

1. **Deploy** application to production environment (Render/Railway)
2. **Configure** production database and environment variables
3. **Create** user training guide for non-technical users
4. **Write** deployment runbook for future maintainers

---

## Part 1: Production Deployment (25 points)

### Deploy to Render or Railway

**Steps**:
1. Create account on Render.com or Railway.app (both have free tiers)
2. Connect GitHub repository
3. Configure build settings (Python/Flask)
4. Set environment variables (database URL, secret key)
5. Deploy and test

**Deliverable**: Create `deployment-log.md` documenting:
- Platform chosen (Render/Railway) and why
- Steps taken to deploy
- Environment variables configured
- Issues encountered and solutions
- Production URL (https://your-app.onrender.com)
- Verification that app works in production

---

## Part 2: User Training Guide (15 points)

### Create `user-guide.md`

**Target audience**: Non-technical users who will use your system

**Structure**:
1. **Getting Started** (How to access, create account)
2. **Main Features** (Step-by-step for each key feature with screenshots)
3. **Common Tasks** (How-to guides for typical workflows)
4. **Troubleshooting** (Common problems and solutions)
5. **FAQ** (Anticipated questions)

**Writing Style**:
- Clear, simple language (no jargon)
- Screenshots for every step
- Numbered steps (not paragraphs)
- "You" language (not "the user")

**Example**:
```markdown
## How to RSVP for an Event

1. Browse events on the homepage
2. Click on an event you're interested in
3. Click the blue "RSVP" button
4. You'll see a confirmation message: "You're registered!"
5. Check your email for event reminder (sent 24 hours before)

**Troubleshooting**: If RSVP button is grayed out, the event is full. Click "Join Waitlist" instead.
```

---

## Part 3: Deployment Runbook (10 points)

### Create `deployment-runbook.md`

**Target audience**: Technical person deploying updates

**Include**:
- **Prerequisites** (accounts needed, tools required)
- **Environment Setup** (how to configure secrets)
- **Deployment Steps** (exact commands/clicks)
- **Rollback Procedure** (if deployment fails)
- **Testing Checklist** (verify deployment worked)
- **Common Issues** (and solutions)

---

## Deliverables

- [ ] Application deployed to production (working URL)
- [ ] `deployment-log.md`
- [ ] `user-guide.md` (with screenshots)
- [ ] `deployment-runbook.md`
- [ ] Production app tested and working

---

## Grading Rubric

| Component | Points |
|-----------|--------|
| **Deployment** | 25 |
| **User Guide** | 15 |
| **Runbook** | 10 |
| **Total** | 50 |

---

## Andrew's Note

Deployment is where theory meets reality. Localhost always works. Production? That's where the fun begins.

Expect issues. Document them. That's the runbook.

— Andrew
