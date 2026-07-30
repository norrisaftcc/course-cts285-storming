# QM Retirement Note
*Phase 0.4 · July 22, 2026 · Status: policy recorded, header-application pending*

## Ruling

Quality Matters (QM) is **pulled program-wide**. The UV provider is moving to an **in-house online course quality process**, available **next semester at the earliest**. Until its criteria exist, the quality gate for rebuilt material is: link-check (every referenced path resolves), points-check (every figure matches the canonical points table), adversarial continuity review (student journey walk-through), and RSI-mechanism verification.

## What gets removed

- All QM references in COURSEMAP (§Quality Assurance), README certification statements, rubrics FAQ, and instructor guides — both courses.
- The three CTS-285 audit files (`QM_AUDIT_CTS285`, `COURSEFORGE_AUDIT_CTS285`, `RSI_AUDIT_CTS285`) and the two CSC-289 audit files (`QM_AUDIT_CSC289`, `RSI_AUDIT_CSC289`): **retired with deprecation headers**, not deleted. They are same-day generated artifacts asserting compliance the materials didn't support; the CTS-285 QM audit additionally cites a nonexistent "QM 8th Edition" and carries Angela Westmoreland's name on work she did not perform. Whether the citation was hallucinated or lives in a private repo, it cannot stand in a public-facing tree.

## What explicitly survives

**RSI (Regular and Substantive Interaction) is federal distance-education compliance (34 CFR § 600.2), not a QM artifact.** The RSI *mechanisms* stay and must survive every restructure:

- Exit-ticket cadence (~12–15×/semester)
- Weekly instructor-played stakeholder interviews (CTS-285)
- The RSI touchpoint architecture woven through the CSC-289 canonical coursemap and instructor action plan
- Per-student (not per-team) interaction obligations in the team-based 27SP CSC-289

## Deprecation header template

```markdown
> **RETIRED — July 2026.** This audit was a generated artifact and is retained for
> history only. QM has been withdrawn program-wide in favor of an in-house course
> quality process (criteria pending). Do not cite this document. RSI mechanisms
> described herein are retained in the instructor guide — RSI is federal
> compliance, independent of QM.
```
