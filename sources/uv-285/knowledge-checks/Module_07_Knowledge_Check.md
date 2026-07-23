<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/knowledge-checks/Module_07_Knowledge_Check.md
  verdict: HARVEST
  target-26FA-slot: n/a — M7/M8 team weeks get no KC
  ingest-date: 2026-07-23
  HARVEST: 175 lines, 13 items on deployment/docs/training. Points table gives modules 7–8 no knowledge check; harvest the deployment items into the M6 check that now covers the wk12 lightweight deploy.
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 7 Knowledge Check: Deployment & Documentation

**Purpose**: Assess understanding of deployment strategies, documentation types, user training, and handoff procedures
**Format**: 13 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Deployment Concepts (60%)

### Question 1
What is the difference between deploying to staging and deploying to production?

A) Staging is for testing in a safe environment; production is where real users access the system
B) Staging is faster than production
C) Production is for testing; staging is for real users
D) There is no difference

**Correct Answer**: A
**Explanation**: Staging is your safety net—test deployments, verify features, catch problems before they affect users. Production is live—real users, real data, real consequences. Professional teams never deploy directly to production without testing in staging first. The staging-to-production workflow catches environment issues and deployment problems before they become user-facing disasters.

### Question 2
What is a "rollback" in deployment terminology?

A) A new feature release
B) Reverting to a previous working version of the system when a deployment causes problems
C) Testing a deployment
D) A type of gymnastics move

**Correct Answer**: B
**Explanation**: Rollback is your deployment undo button. Deploy a feature, discover it breaks critical functionality, rollback to the previous version. This is why version control and deployment scripts matter—you need to be able to reverse course quickly. In professional environments, the ability to rollback quickly is essential. Bad deployments happen; good teams recover fast.

### Question 3
What is continuous deployment (CD)?

A) Deploying code only once at the end of a project
B) Automatically deploying code to production after it passes all tests and checks
C) Manually deploying code every day
D) A deployment that never stops running

**Correct Answer**: B
**Explanation**: CD extends continuous integration—code that passes all automated checks gets deployed to production automatically. This requires excellent tests and monitoring. Many teams use continuous delivery (deploy to staging automatically, production manually) instead. The goal is reducing deployment friction so you can ship small changes frequently instead of risky big releases.

### Question 4
Why might a team choose to deploy gradually (to 10% of users, then 50%, then 100%) instead of all at once?

A) To make deployment take longer
B) To limit the impact of potential issues and gather feedback before full rollout
C) Because they're indecisive
D) Gradual deployment is always worse

**Correct Answer**: B
**Explanation**: Gradual rollout (canary deployment) limits risk. Deploy to 10% of users, monitor for errors, check performance, gather feedback. If problems emerge, only 10% of users are affected. If it's solid, roll out to everyone. This is risk management in action. Big bang deployments mean if something breaks, everyone is impacted immediately. Professional teams derisk deployments.

### Question 5
You're about to deploy a major system update. What should you do first?

A) Deploy immediately to production
B) Backup the current system and data, test in staging, have rollback plan ready
C) Tell users the system will be down
D) Deploy on Friday afternoon before vacation

**Correct Answer**: B
**Explanation**: Professional deployment is methodical: backup everything, test in staging, prepare rollback scripts, schedule during low-usage times, have team available to monitor. Never deploy Friday afternoon (no one around for weekend issues). Never deploy without backups (can't recover from disasters). This discipline is what separates "it worked once" from "it works reliably."

### Question 6
What is the purpose of deployment documentation?

A) To make deployment seem more complicated
B) To create a repeatable, reliable process that anyone on the team can follow
C) To justify your job
D) Documentation is unnecessary if you remember the steps

**Correct Answer**: B
**Explanation**: Deployment docs are your playbook: steps to deploy, rollback procedures, environment variables, dependencies, validation checks. This prevents "only Sarah knows how to deploy" single points of failure. When Sarah is sick or on vacation, the team can still deploy safely. Professional operations are documented and repeatable, not tribal knowledge locked in individuals' heads.

### Question 7
What should you monitor immediately after deploying a new version?

A) Nothing—if tests passed, it's fine
B) Error rates, performance metrics, user activity, and system health indicators
C) Only check if users complain
D) Just the server uptime

**Correct Answer**: B
**Explanation**: Post-deployment monitoring catches problems fast. Watch error logs, response times, database queries, user activity patterns. Sometimes issues emerge only under production load or with real usage patterns. Catching a problem in the first hour is infinitely better than discovering it the next day. Professional teams have monitoring dashboards they watch after deployments.

### Question 8
What is a deployment checklist and why is it valuable?

A) Unnecessary bureaucracy
B) A step-by-step verification list that prevents skipping critical deployment steps
C) Something only large companies use
D) A way to slow down deployments

**Correct Answer**: B
**Explanation**: Checklists prevent mistakes under pressure. "Database backed up? ✓ Tests passed? ✓ Rollback script ready? ✓" Even experienced teams use checklists because humans forget steps when stressed or rushed. This is the same reason pilots use pre-flight checklists. Complex procedures need systematic verification. One missed step can cause outages.

---

## Documentation & Communication Concepts (40%)

### Question 9
What's the difference between technical documentation and user-facing documentation?

A) There is no difference
B) Technical docs explain how the system works internally; user docs explain how to use it
C) Technical docs are for managers; user docs are for developers
D) User docs should include all technical details

**Correct Answer**: B
**Explanation**: Technical docs are for developers/maintainers: architecture decisions, API specs, database schemas, deployment procedures. User docs are for end users: how to reset password, how to generate reports, troubleshooting common issues. Different audiences, different detail levels. Professional teams maintain both. Code comments aren't enough; systems need external documentation.

### Question 10
You're writing user documentation for a feature. What should you focus on?

A) The programming language used
B) Common tasks users want to accomplish, with step-by-step instructions and screenshots
C) Every possible technical detail
D) Complex edge cases only

**Correct Answer**: B
**Explanation**: User docs answer "How do I...?" questions. "How do I reset my password? How do I export data?" Use plain language, step-by-step instructions, visuals. Assume no technical background. Test your docs with actual users—if they can't follow them, revise. Good user docs reduce support tickets and improve user satisfaction. Bad docs frustrate users and waste support time.

### Question 11
What is the purpose of user training when deploying a new system?

A) Training is unnecessary if the system is well-designed
B) To help users understand how to use the system effectively and reduce adoption friction
C) To delay the deployment
D) Only power users need training

**Correct Answer**: B
**Explanation**: Even intuitive systems benefit from training. Training reduces frustration, accelerates adoption, and prevents misuse. "Here's how this will improve your workflow" creates buy-in. Training can be formal (sessions) or informal (videos, docs). The goal is user success. Systems that work but aren't adopted are failures. Training bridges the gap between deployment and actual usage.

### Question 12
What should a good handoff document include when transitioning a project to a maintenance team?

A) Just the source code
B) System architecture, deployment procedures, common issues, contact info, and how to modify/extend the system
C) Nothing—they should figure it out
D) Only bug reports

**Correct Answer**: B
**Explanation**: Handoff docs enable the next team to maintain your work. Include architecture overview, deployment steps, monitoring/logging, known issues, where documentation lives, who to contact for questions. Imagine you're the person receiving this project—what would you need to know? Professional handoffs are generous with context. The easier you make it for the next team, the better your reputation.

### Question 13
Why is it important to document known issues and workarounds when handing off a project?

A) To cover yourself legally
B) To help the maintenance team avoid rediscovering problems and losing time
C) Known issues should be hidden
D) There should never be known issues

**Correct Answer**: B
**Explanation**: Every system has quirks. "Database backups must run before 6 AM or they time out" is valuable knowledge. Documenting known issues prevents the next team from wasting days rediscovering them. Be honest about limitations and workarounds. Professional handoffs don't hide problems—they share knowledge. This builds trust and makes maintainers' lives easier.

---

## Scoring Guide
- 90-100%: Excellent understanding of deployment strategies and documentation
- 80-89%: Good grasp, minor gaps in deployment best practices or documentation types
- 70-79%: Adequate foundation, review deployment safety measures
- Below 70%: Revisit Module 7 materials, especially deployment workflows

## Study Resources
- Week 13 Assignment: Creating Deployment Documentation
- Week 14 Activity: User Documentation Exercise
- Planning Sheet: Deployment Checklist Template
- Planning Sheet: Handoff Document Template
- Canvas Reading: "Safe Deployment Practices"
- Reference: Documentation Best Practices
- Reference: User Training Strategies
