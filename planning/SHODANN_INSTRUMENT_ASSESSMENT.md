# SHODANN Velocity Engine — Adoption Assessment

*Assessed 2026-07-29 against `norrisaftcc/algorithm-shodann` @ `8dbd45c`, read at `/workspace/algorithm-shodann` (outside this repo; nothing copied in). Structure per instructor framing: what it measures · what it costs · adopt now if useful · report back if broken.*

**Verdict in one line:** viable for **CSC-289**, wrong instrument for **CTS-285**, blocked on upstream issue #51 either way, and **not broken** — scope-limited by design, with the limitation documented by its own authors and the fix deliberately declined.

---

## 1. What the tool measures

**The composite** (`src/shodann/velocity.py`), delta against the citizen's own previous submission, unbounded, no maximum:

```
  coverageΔ*2.0 + testCountΔ*1.5 + log2(iters+1)*0.5*iters + docstringsΔ*0.8
+ (complexityΔ > 0 ? (testCountΔ > 0 ? complexityΔ*0.3 : complexityΔ*0.09) : 0)
+ (lintIssuesΔ > 0 ? sqrt(lintIssuesΔ)*0.5 : 0)
```

Thresholds: exceptional 10 · positive 3 · baseline 0.

**Raw counts, per citizen:** merge points, test functions, Python LOC, PR count, iteration streak.
**Trend:** ascending / plateau / refactoring.
**Facts come from hard tools** — `ruff==0.16.0`, `pytest-cov==7.1.0`, `--junitxml`. The LLM only reframes; it does not produce numbers.
**State:** `.shodann/citizens/{username}.json`, written **on merge only**, never per-push. Comment posts within 120s, under 400 words.

**What it structurally refuses to measure:** grades (FERPA posture, no grades in state), plagiarism, ranking by absolute skill, clearance band (assigned by instructor, never inferred). There is no passing or failing — a negative score returns "🔄 Refactoring phase detected."

---

## 2. What it costs to get

**Hard prerequisite — upstream, not ours.** Issue #51: *SHODANN cannot review a repository other than the one she lives in.* The blocker is in code, and the repo names it precisely (`src/shodann/review.py`):

> the prompt library is SHODANN's own and is read relative to the working directory. Rung 1 reviews this repository, so they coincide. They will not once SHODANN reviews someone else's repo, and at that point the templates need to ship as package data.

`src/shodann/prompts.py` has `PROMPTS_DIR = Path("prompts")` (CWD-relative) and `pyproject.toml` ships no package data for it. Until that is fixed, **no course repo can be instrumented.** Effort: small for whoever owns that repo; we do not own it.

**After #51, per course repo:** secret `SHODANN_LLM_API_KEY`; vars `SHODANN_LLM_BASE_URL`, `SHODANN_LLM_MODEL`; a `.shodann/` directory; `clearances.json` populated by the instructor. Effort: **S**. Note the draft workflow in `design_docs/shodann-core.yml` is **not** the one to install — the repo's own `CLAUDE.md` calls it "unsafe as written" (shell injection via PR body).

**Available today at zero cost:** `python scripts/dev.py render` — offline, read-only by construction, never writes the ledger. This is the whole rehearsal path, and it needs no permission from anyone.

---

## 3. Is it useful? — split by course

### CTS-285 — **No. Do not deploy.**

Decisive evidence, from the tool's own pilot page (`design_docs/pilot/README.md`):

> "Three of the fourteen merges score at the floor because they were documentation and tooling with no test growth."

Every term in the composite requires a Python tool. CTS-285 weeks 1–12 produce stakeholder analyses, personas, user stories, ERDs, ADRs, risk registers, retrospectives — **documentation**. A student doing excellent requirements work would score **zero, by construction**, and would be told so weekly.

This is not a tuning problem. It is the instrument measuring a quantity the course does not produce.

### CSC-289 — **Yes, plausibly.** Gated on #51.

Students ship code with tests. Every term has a real input. PRISM has 289 exiting at GREEN — "deployed product, CI/CD + runbook" — which is exactly the shape the composite reads. The ledger doubles as a portfolio artifact: *rate of improvement across a semester* is a better interview story than a letter grade.

### Two risks to carry into any deployment

- **Delta-blindness.** Every term is a delta, so a student who arrives competent and stays competent scores ≈ 0 indefinitely. Non-punitive wording does not fix a visible zero. Live risk given ADR-005's baseline (GitHub account + working Python, *not* CSC-113/114) implies a wide spread.
- **Goodhart, and it cuts the wrong way.** The formula is published in the repo. Capstone students will read it. Once `testCountΔ*1.5` and `log2(iters+1)*0.5*iters` are legible, the rational play is many trivial tests and many tiny commits — and the students able to see that lever are the ones who least need the help. **Recommendation: show raw counts and trend direction; withhold the composite scalar and the formula.** Their own clearance model supports this: at INFRARED–YELLOW she *teaches*, and CTS-285 exits at ORANGE. A teacher says what to do next; only BLUE+ gets the instrument readout.

### The best available use, needing nothing from anyone

Use the ledger as a **teaching object, not a scoreboard.** Hand students a real readout of *someone else's* project and ask: what does this measure, what can it not see, would you trust it to evaluate you? That is requirements critique on a live instrument — ORANGE-tier work, ideal for the week-9 review/QA slot — and it extracts the pedagogical value **without subjecting students to being measured by an instrument that cannot see their work.**

---

## 4. Report back — is the tool broken?

**No.** "Broken" would mean wrong numbers. It computes correct numbers about a quantity CTS-285 does not produce. That is a scope limit, and its authors found it first (`design_docs/CLEARANCE_REGISTER.md`), for the same reason we did — BLUE+ work "produces a diff of Markdown and YAML":

> "Option 2 is the rung-1 answer. Option 1 is real work and should not be smuggled into the walking skeleton."

The declined Option 1 names the four signals a documentation course would need: **commit cadence · decision-record freshness · spec-to-implementation drift · issue closure latency.** That list is the CTS-285 instrument, unbuilt. Two of those four — decision-record freshness and spec-to-implementation drift — are precisely what B-003 spent 2026-07-29 doing by hand. Worth noting as a build candidate, and worth noting it is *declined upstream*, not missing by oversight.

### Two findings that are genuinely worth reporting upstream

Both concern the ledger **display**, not the engine:

1. **A headline computed without its heaviest input.** An observed readout shows `CUMULATIVE VELOCITY 471.40` beside `COVERAGE PROBE — NOT INSTRUMENTED`. Coverage carries the largest weight (×2.0). The caveat is present and honest, but it is set small while the figure is set large — so the number will travel and the caveat will not. This is the repo's own documented failure mode: *"A contract-clean lie is worse than a contract violation, because nothing stops it."*
2. **"Cumulative" contradicts the stated thesis.** The same readout captions itself *"the engine reads rate of improvement, not standing"* directly beneath a **sum** of fourteen merge-point evaluations. A sum rewards volume of merges; a student merging 40 times outscores one merging 8 times better. The display measures standing after all.

Neither is a code defect. Both would mislead a student, which makes them worth filing.

---

## Recommendation

1. **Do now, zero cost:** build three fixture repos (weak-improving, strong-steady, erratic), run `scripts/dev.py render` against each, and read what she says to each archetype. This tests delta-blindness before any student meets it.
2. **Do now, zero cost:** adopt the ledger as a week-9 critique object for CTS-285.
3. **Report upstream:** the two display findings in §4.
4. **Do not** instrument CTS-285. Revisit only if the four declined signals get built.
5. **Defer** CSC-289 deployment until issue #51 closes; re-assess then, since 289 targets 27SP and there is runway.
6. **Not decided here:** whether any SHODANN output ever carries points. It cannot today — she does not grade — so making her count would be an ADR, not a configuration change.
