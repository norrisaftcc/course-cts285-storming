# Install Instructions — algocratic-26fa-sync package
*Built July 29, 2026 by the cloud Cowork session (session_01NQP3Y6E6nhCZyPN9jcUSU7). This package overlays the session's complete worktree onto your existing local repo. It contains NO git history — your machine's repo already owns the history; this only updates files.*

## What this package is

The full, current state of every file the consolidation session produced — 22 files. Nineteen are identical to what's already committed on your machine (overlaying them is a no-op to git); **three carry the pending changes**:

1. `planning/PROJECT_INSTRUCTIONS_PROPOSED.md` — marked ADOPTED, synced with your instructor amendments
2. `phase0/PRISM_Course_Mapping.md` — picked up the UV-streamer gloss and the past-GREEN scope rule
3. `planning/SESSIONS.md` — NEW: the session write-ledger
4. `CLAUDE_SUPPLEMENTARY.md` — one added paragraph pointing Rule 5 at the ledger

## Step-by-step (5 minutes)

**Step 0 — verify you're on the right repo** (the fingerprint):

    cd ~/Documents/dev/github/course-cts285-storming
    git log --oneline

Expected: `ca36b45`, `2f226ca`, `a34e976`, `59c2abe`. If you see something else, STOP — you're on a different clone; don't overlay.

**Step 1 — verify package integrity** (optional but quick):

    cd /path/to/unzipped/algocratic-26fa-sync
    shasum -a 256 -c SHA256SUMS.txt

**Step 2 — overlay the files:**

    cp -R /path/to/unzipped/algocratic-26fa-sync/repo/. ~/Documents/dev/github/course-cts285-storming/

**Step 3 — confirm git sees exactly the expected delta:**

    cd ~/Documents/dev/github/course-cts285-storming
    git status --short

Expected: modified `CLAUDE_SUPPLEMENTARY.md`, `phase0/PRISM_Course_Mapping.md`, `planning/PROJECT_INSTRUCTIONS_PROPOSED.md`; new `planning/SESSIONS.md`. (Plus untracked `_to_delete/` — ignored; delete that folder whenever you like.) If MORE files show modified than these, look at `git diff` before committing — it would mean the local tree drifted from what this session last committed.

**Step 4 — commit and push:**

    git add -A
    git commit -m "Consolidate instruction fork; add session write-ledger

    - PROJECT_INSTRUCTIONS_PROPOSED marked ADOPTED with instructor amendments
    - PRISM map: UV-streamer gloss + past-GREEN scope rule
    - planning/SESSIONS.md write-ledger; CLAUDE_SUPPLEMENTARY Rule 5 addendum

    Applied-from-package: algocratic-26fa-sync (cloud session)
    Claude-Session: https://claude.ai/code/session_01NQP3Y6E6nhCZyPN9jcUSU7"
    git push origin main

The push is the step that takes all four-plus-one commits off-box. After it succeeds, the fork count is zero and origin is the meeting point for every future session.

**Step 5 — housekeeping (optional):** `rm -rf _to_delete/` and delete this unzipped package.

## After install

The repo is handoff-ready for local Claude Code: point it at the repo and say *"Read CLAUDE.md and follow its read-first list, then open GitHub issues for Phase 1 wave one per CLAUDE_SUPPLEMENTARY Rule 4."* Per the ledger, the WRITE TOKEN passes from you to that session when it starts.

Outstanding human items (unchanged): drop the Dataman PDF manual into `reference/`, the Fisher/GRD calendar conversation, which Mar-13 CSC-289 design ran in Spring 2026, and the CSC-113/114 prerequisite decision.
