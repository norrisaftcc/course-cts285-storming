# ADR-006: Course-Repo Path Form (PATHFORM) for Student-Facing File References

**Status**: **Proposed** — 2026-07-29. Placeholder stands until ruled.
**Deciders**: A. Norris (instructor) / spine owner — **pending**
**Governs**: every student-facing "Copy X into your repository" reference in assignments, activities, and Canvas HTML (task 3.4)
**Related**: B-002 (repo-internal reference form — *ruled*, different question); `drafts/cts285/planning-sheets/WIRING_MANIFEST.md`

## Context

Student-facing material tells students to copy a template out of the course repo:

> Copy `/courses/CTS-285/planning-sheets/Sprint_Planning_Template.md` into your repository as `sprint-1-planning.md`.

That prefix — `/courses/CTS-285/...` — is inherited from the **csc_dash** UV-refresh tree. It will **not** resolve in the 26FA course repo. `WIRING_MANIFEST.md` §"How to read this" flags it and instructs that it "must **never** be re-used."

The correct replacement cannot be derived from this repo, because:

1. **Nothing has graduated yet.** Per CLAUDE.md non-negotiable #7, nothing here is student-facing; the 26FA course repo's layout does not exist to point at.
2. **It is cross-cutting, not per-file.** Assignments, activities, planning sheets, and the Canvas HTML build (task 3.4) all inherit the same convention. A leaf task picking one silently commits every downstream surface.
3. **Canvas complicates it.** Material is delivered through Canvas pages as well as the repo; a form that works for a repo-relative markdown link may not survive the Canvas HTML pipeline, which may need absolute URLs.

**B-002 (2026-07-29) is a distinct decision** and does not settle this. B-002 ruled how files in *this staging repo* reference each other (repo-root-relative, no leading slash). PATHFORM governs what a *student* is told to fetch from a course repo that does not yet exist. Conflating the two would let a mechanical cleanup silently decide the course-repo layout.

## Decision

**Deferred.** Until this ADR is accepted, every student-facing template reference carries the placeholder:

```
<!-- PATHFORM: pending spine ruling -->
```

Applied as, e.g.:

> Copy `<!-- PATHFORM: pending spine ruling -->/Sprint_Planning_Template.md` into your repository as `sprint-1-planning.md`.

**Rules while deferred:**

- **Never** re-introduce the csc_dash `/courses/CTS-285/...` form. It is retired, not a default.
- **Never** invent a course-repo prefix in a leaf task. Adding one is a spine decision and needs this ADR accepted first.
- The placeholder is **greppable on purpose** — `grep -rn "PATHFORM: pending spine ruling"` enumerates every site needing substitution when the ruling lands.

## Options for the ruling (not yet chosen)

| Option | Form | Trade-off |
|---|---|---|
| **A — repo-root-relative** | `planning-sheets/X.md` | Matches the B-002 convention; breaks if Canvas renders the page outside the repo tree. |
| **B — course-repo absolute path** | `/CTS-285/planning-sheets/X.md` | Unambiguous within one repo; re-creates the csc_dash brittleness if the repo is ever reorganized. |
| **C — full URL to the course repo** | `https://github.com/<org>/<course-repo>/blob/main/planning-sheets/X.md` | Survives Canvas and any delivery surface; verbose, and pins an org/repo name that is not yet fixed. |

Option C is the only one that certainly survives Canvas delivery; A is the cheapest if everything stays repo-internal. **The choice depends on the course-repo name and the Canvas build (task 3.4) — neither of which is settled.**

## Consequences

- **While proposed:** the 3 known sites (Week_05 ×2, Week_06 ×1) carry the placeholder, plus the 4 orphan references `WIRING_MANIFEST.md` says still need adding (Week_04, Module_02, Week_05 standup, exit-ticket cadence). None resolve for a student — correct, because no course repo exists to resolve against.
- **Blocked until accepted:** graduation of any student-facing material to a course repo. A file cannot ship with an unresolved placeholder in a "copy this" instruction.
- **On acceptance:** one mechanical sweep substitutes the ruled prefix at every placeholder site; `WIRING_MANIFEST.md`'s summary table is the work list.
- **Task 3.4 (Canvas build) is a co-dependency,** not a consumer — its delivery surface constrains which option is viable, so it should be consulted before this is ruled.
