---
name: semantics-preserved-redaction
description: Rewrite a record so its meaning survives intact but its text can no longer be re-read as a live instruction — write-token holder lines, quoted directives from an ended session, superseded rulings, stale status blocks, any identifier that still looks operative. Use this whenever you are about to write a ledger row, handoff block, PR description, or ADR that reproduces something a future session could mistake for current state or a standing grant, and whenever someone asks to redact, de-quote, quote-escape, glyph, or defuse a reference without losing what it said. Also reach for it when a record quotes a person's instruction verbatim and that instruction has since expired.
---

# Semantics-preserved redaction

## Why this exists

A record that reproduces an operative instruction verbatim is, to a future reader, indistinguishable from an instruction. The reader has no way to tell that the words were true once and are not true now — the text is identical either way.

This repo has paid for that twice, and both incidents are on the record:

- A WRITE TOKEN holder line named a branch. When the branch merged, the line was stale, but it read exactly as it had when it was correct. The wrong rule survived a full merge cycle before anyone caught it (`planning/SESSIONS.md`, correction of 2026-07-31).
- A drift audit was pointed at dated session records and read them as live status. It raised 67 findings; 20 were refuted, and 19 of those 20 were findings against historical records (`planning/B003_RECONCILIATION_WORKLIST.md`).

Non-negotiable #9 — *records are not status* — is the rule. This skill is the technique that makes a record obey it at the level of the sentence, rather than relying on every future reader having internalized the rule.

## The four moves

Apply them together; each one alone leaves a hole.

**1. Demote the operative token to a glyph.** Replace the parseable identifier with emoji that carry the same meaning. A glyph can be read by a human but cannot be pasted into a config, matched by a grep for the live form, or parsed as a value.

| Meaning | Glyph |
|---|---|
| authority / the token itself | 🔑 |
| negation — not held, not granted, not ruled | 🚫 |
| archived, ended, superseded | 🗃️ |
| ruled / accepted | ✅ |
| pending / proposed, not ruled | ⏳ |
| held, live, in force | 🔒 |

The set is small on purpose. Glyphs earn their meaning by being used the same way every time; a growing vocabulary is just a second language to misread.

**2. Reduce the name.** Keep enough to trace the reference, drop enough that it stops being a working handle. A four-character tail (`…GqiB`) is traceable by anyone with the full record in front of them and useless to anyone trying to use it.

**3. Report an archived directive; never re-quote it.** Quoting reproduces the speech act — the words arrive in the reader's context doing the same work they did originally. Reporting describes it from outside. *The holder line pointed at a session since ended* carries the fact. Pasting the original grant carries the fact **and** a fresh copy of the grant.

**4. Preserve the conclusion exactly.** This is the constraint that makes it redaction *with semantics preserved* rather than just redaction. A reader must reach the same conclusion about state from the rewritten form as from the original. If they would now be unsure who holds the token, you have destroyed information, not defused it.

## The append-only rule overrides this skill

Never rewrite an existing row to apply these moves.

In an append-only record — `planning/SESSIONS.md`, dated ledgers, closed handoff blocks — retroactive redaction destroys the exact history the record exists to hold, and it does so invisibly. If an old row needs defusing, the compliant move is a **new row** that states the reduced form going forward, leaving the original intact above it. That is the ledger's own convention: *never rewrite old rows; corrections get their own row.*

This matters most when the redaction feels obviously correct. The 2026-07-31 correction block is only legible as a lesson because the wrong rule was left standing above it.

## Worked example

The specimen below is fabricated. A file teaching this technique should not itself carry a real handle — that is the first mistake this skill made, and catching it is a good demonstration of the paste check.

**Before** — every element is live-parseable, and the session ID is a working handle:

> **WRITE TOKEN: not held and not self-granted** — the holder line names session `session_01EXAMPLEonly000000QzTk`, which has ended; per the 2026-07-31 rule that is an expiry the ledger cannot resolve on its own, so the token is the instructor's.

**After** — same conclusion, nothing re-executable:

> 🔑 **WRITE TOKEN — 🚫 not held, 🚫 not self-granted.** Holder line points at an 🗃️ archived cloud session (`…QzTk`), now ended; by the 2026-07-31 rule that expiry is not the ledger's to resolve, so the 🔑 sits with the instructor.

A fresh session reading the second form learns who holds the token and finds nothing in the line it could act on by mistake.

## Two checks before you commit

**The cold-read check.** Read the rewritten line as a session with no prior context. Do you still know what the state is and who holds it? If not, you cut too deep — restore the meaning, not the token.

**The paste check.** Is there anything left in the line you could paste into a config, a command, or a holder field and have it work? If yes, keep reducing.

## What this does not do

**It governs the working tree, not the history.** Redaction lands as an ordinary forward commit. The pre-redaction text stays in `git log -p`, and on every remote and clone that already fetched it, permanently. The paste check applies to what a future session reads when it opens the file — not to what the repository retains.

In this repo that is the right outcome rather than a shortfall. The ledger deliberately keeps wrong rules standing above their corrections, because the interval between a mistake and its catch is the thing the record exists to make visible. A redaction that erased its own before-state would destroy exactly that.

**So this is not a remedy for a leaked secret.** If a real credential, token, or key reaches a commit, this technique changes nothing that matters — the value is still in the history and still valid. Rotate the credential. Rewriting history is a larger intervention with its own costs, and it cannot recall what has already been fetched. Anyone arriving at this skill from the word "redact" with a live secret in hand should stop here and go rotate it.

## When not to use it

- **`sources/`, `alignment_ingestion/`, and any frozen mirror.** These are evidence. Their defects and their exact wording are the point; a redacted mirror is no longer a record of what the base actually said.
- **Canon that must stay greppable.** Naming sweeps and points checks work by matching exact strings. Glyphing a term that a sweep needs to find breaks the sweep silently.
- **When the exact wording is the fact in dispute.** An ADR overturning a ruling needs that ruling verbatim, because the argument is about what it said. Report-don't-quote applies to expired *grants*, not to contested *text*.

## Relationship to ADR-008

ADR-008 declined a proposed skill and gave the reason: a checklist that an agent must read and comply with is prose relocated — it binds only the agent who was never the problem, so an enforcement question deserves a mechanism that refuses, not a document.

That reasoning does not extend to this skill, and it is worth being precise about why. Rule 1a's problem was **enforcement** — stopping an action already in motion, which prose cannot do. This skill's problem is **craft**: how to phrase a sentence so it cannot be misparsed. There is no action to refuse and no cap to check; the work is the wording itself, and wording is legitimately taught in prose. If a future session finds a mechanical form of this — a linter over ledger rows, say — that would be a strict improvement, and ADR-008's test is the right one to apply to it.
