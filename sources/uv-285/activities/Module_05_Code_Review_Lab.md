<!--
  PROVENANCE — 26FA source ingestion (task 0.8)
  origin: /Users/norrisa/Documents/dev/github/csc_dash/courses/CTS-285/activities/Module_05_Code_Review_Lab.md
  verdict: ADAPT
  target-26FA-slot: CTS-285 wk9–10 (M5)
  ingest-date: 2026-07-23
  NOTE: body preserved verbatim below; defects (terminology/points/framing) are intentional evidence.
-->
# Module 5 Activity: Code Review Lab - Learning to Give and Receive Feedback

**Duration**: 90 minutes
**Format**: Pairs with role rotation
**Materials Needed**:
- GitHub account with repository access
- Code review checklist
- Sample pull requests (instructor-provided)
- Pull request template
- Code review rubric
- Laptop with IDE and Git

**Learning Objectives**:
- Conduct structured code reviews using GitHub pull requests
- Provide constructive, actionable feedback on code
- Respond professionally to feedback on your own code
- Identify code quality issues: bugs, security, maintainability, style
- Use code review tools (GitHub PR comments, suggestions, approvals)
- Recognize the difference between nitpicks and critical issues

---

## Overview

**Code review is where good code becomes great code.**

You've written code. It works. You're proud of it. Now someone else will read it and tell you what's wrong with it.

This is uncomfortable. It's also essential.

Code review catches:
- **Bugs** you missed
- **Security vulnerabilities** you didn't know about
- **Unclear logic** that made sense to you but confuses others
- **Missing edge cases** your testing didn't cover
- **Style inconsistencies** that make the codebase messy

But code review is a skill. Bad code review is:
- "Looks good" (lazy, unhelpful)
- "This is terrible, rewrite it" (mean, unconstructive)
- "Change line 47 to use .map() instead of .forEach()" (nitpicky, wastes time)

Good code review is:
- Specific: Points to exact lines and issues
- Constructive: Suggests improvements, not just criticism
- Prioritized: Distinguishes "must fix" from "nice to have"
- Respectful: Critiques code, not the person

Today, you'll practice both sides:
1. **As reviewer**: Review 2 pull requests from peers
2. **As author**: Receive feedback on your own PR and respond

You'll use a structured checklist to ensure thorough reviews. You'll practice giving feedback that helps without hurting. And you'll learn to accept feedback without defensiveness.

This prepares you for CSC-289 and for professional development teams. Code review is how teams maintain quality without sacrificing speed.

**One important truth**: Every developer, from junior to senior, has their code reviewed. If you think code review means your code is bad, you're wrong. It means your code matters enough to make better.

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Pair up** with a classmate:
   - You'll review each other's code
   - Ideally, pair with someone you haven't worked with closely (fresh perspective)

2. **Set up GitHub repository**:
   - [ ] Clone the course code review repository (instructor provides)
   - [ ] Verify you can access open pull requests
   - [ ] Make sure Git is configured with your identity:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

3. **Review the code review checklist** (instructor provides):
   ```
   Code Review Checklist:

   FUNCTIONALITY:
   - [ ] Code does what the user story says
   - [ ] Acceptance criteria are met
   - [ ] Edge cases are handled

   BUGS & ERRORS:
   - [ ] No syntax errors
   - [ ] No logic errors
   - [ ] Error handling is present

   SECURITY:
   - [ ] No hardcoded secrets or passwords
   - [ ] Input validation exists
   - [ ] No SQL injection risks

   MAINTAINABILITY:
   - [ ] Code is readable
   - [ ] Functions are small and focused
   - [ ] Variable names are descriptive
   - [ ] Comments explain "why," not "what"

   TESTING:
   - [ ] Tests exist for new code
   - [ ] Tests cover edge cases
   - [ ] All tests pass

   STYLE:
   - [ ] Follows project style guide
   - [ ] Consistent formatting
   - [ ] No commented-out code
   ```

4. **Understand GitHub PR review workflow**:
   - Add comments to specific lines
   - Mark comments as "Comment," "Approve," or "Request Changes"
   - Use "Suggest changes" feature for small fixes
   - Start review thread with "Start a review" (batch comments)

**Instructor Check**: Everyone has access to the repository and can view open pull requests.

---

## Part 1: Learning to Review - Practice PR (20 minutes)

### Instructions

**You'll start by reviewing a sample PR together as a class.**

**Step 1: Open the sample pull request (2 minutes)**

Instructor displays a sample PR on the projector. Example:

```
Pull Request #42: Add user authentication

User Story: As a user, I want to log in with my email and password, so that I can access my account.

Changes:
- Added login form component
- Created authentication API endpoint
- Stored user session in localStorage
- Updated navigation to show logout button when logged in

Files changed: 4 files (+187 lines, -12 lines)
```

**Step 2: Read the code as a class (5 minutes)**

Instructor walks through the code. Students follow along.

Example code snippet from PR:

```javascript
// login.js
function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email: email, password: password })
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    window.location.href = '/dashboard';
  });
}
```

**Step 3: Identify issues as a class (8 minutes)**

Using the checklist, what problems do you spot?

**Functionality issues:**
- What if the login fails? (No error handling)

**Security issues:**
- Password is stored in plain text in the request (should use HTTPS, but not validated in code)
- Token storage in localStorage (vulnerable to XSS attacks—consider httpOnly cookies)

**Bugs:**
- No check if email or password is empty
- `.then()` has no `.catch()` for failed fetch

**Maintainability:**
- Function does too much (fetch, store, redirect—should be separate functions)
- No loading state (user could click submit multiple times)

**Testing:**
- No tests visible for this function

**Style:**
- Inconsistent use of template literals vs concatenation

**Step 4: Practice writing review comments (5 minutes)**

Instructor models writing a good review comment:

**Bad comment:**
> "This is wrong."

**Good comment:**
> "**Issue: No error handling for failed login**
>
> If the API returns an error (wrong password, server down, etc.), the user sees no feedback. The page just doesn't navigate.
>
> **Suggestion**: Add a `.catch()` block to display an error message:
> ```javascript
> .catch(error => {
>   document.getElementById('error-message').textContent = 'Login failed. Please try again.';
> });
> ```
>
> **Priority**: Must fix (blocks story acceptance criteria)"

**Students practice**: Write one review comment for the sample PR (individually, 2 minutes). Then share with class.

### Expected Output

- Understanding of what to look for in code review
- Ability to identify functionality, security, bug, maintainability issues
- Example of a well-written review comment (specific, constructive, prioritized)

### Common Issues & Fixes

**Issue**: Students only point out style issues (indentation, spacing)
- **Fix**: Style is the least important category. Focus on functionality and bugs first. Style can be auto-formatted.

**Issue**: Comments are vague ("This doesn't look right")
- **Fix**: Be specific. What line? What's wrong? What should happen instead?

**Issue**: Comments are mean or personal ("You clearly don't understand JavaScript")
- **Fix**: Critique the code, not the person. "This function could be more robust" not "You wrote this badly."

---

## Part 2: Reviewing Peer Code - First PR (25 minutes)

### Instructions

**Now you'll review a real pull request from your partner.**

**Step 1: Choose a PR to review (2 minutes)**

Your partner has created a pull request (instructor-provided or from prior assignment). Open it on GitHub.

**Read:**
- PR title and description
- User story being implemented
- List of files changed

**Step 2: Review the code systematically (15 minutes)**

Go through the code review checklist category by category:

**Functionality** (5 minutes):
- Does the code do what the user story says?
- Are acceptance criteria met?
- Test it: Check out the branch locally and run it
  ```bash
  git fetch origin
  git checkout [branch-name]
  npm install  # or pip install, etc.
  npm start    # or python app.py, etc.
  ```
- Try to use the feature. Does it work?

**Bugs & Security** (5 minutes):
- Look for error handling (what if inputs are invalid?)
- Look for security issues (hardcoded passwords? SQL injection risks?)
- Look for edge cases (what if list is empty? What if user clicks twice?)

**Maintainability & Testing** (5 minutes):
- Is the code readable? Do you understand what it does?
- Are functions small (< 50 lines)?
- Are there tests? Do they pass?
  ```bash
  npm test  # or pytest, etc.
  ```

**Step 3: Write review comments (8 minutes)**

For each issue found, add a comment in GitHub:

1. Navigate to the "Files changed" tab in the PR
2. Hover over a line of code, click the blue **+** icon
3. Write your comment:
   ```
   **Issue**: [Brief description]

   [Explanation of why this is a problem]

   **Suggestion**: [How to fix it, with code example if possible]

   **Priority**: [Must fix / Should fix / Nitpick]
   ```
4. Click "Start a review" (batches comments) or "Add single comment"

**Write 4-6 comments** covering different categories (functionality, bugs, maintainability).

**Use GitHub's "Suggest changes" feature** for small fixes:
- Click the **±** icon in the comment box
- Edit the code directly
- This creates a code suggestion the author can apply with one click

**Step 4: Submit your review (2 minutes)**

When you've added all comments:
1. Click "Finish your review"
2. Write a summary:
   ```
   ## Review Summary

   Overall, this PR implements the login functionality well. I found a few issues:

   **Must Fix**:
   - Missing error handling for failed login
   - No validation for empty email/password

   **Should Fix**:
   - Token storage in localStorage is less secure than httpOnly cookies

   **Nitpicks**:
   - Consider breaking `handleLogin` into smaller functions

   Great work on the UI—the form looks clean and user-friendly!
   ```

3. Select review type:
   - **Approve**: Code is ready to merge (use sparingly—most code needs iteration)
   - **Request changes**: Issues must be fixed before merge
   - **Comment**: Sharing thoughts but not blocking merge

4. Submit review

### Expected Output

- Thorough review of peer's PR using checklist
- 4-6 inline comments on specific code issues
- Comments are specific, constructive, and prioritized
- Summary comment with overall assessment
- Review submitted via GitHub

### Common Issues & Fixes

**Issue**: Reviewer only comments "Looks good!"
- **Fix**: No. Use the checklist. Force yourself to find at least 3 things that could improve. Even great code can be better.

**Issue**: All comments are nitpicks (spacing, variable naming)
- **Fix**: Prioritize. Does the code WORK? Are there BUGS? Fix those first. Nitpicks are lowest priority.

**Issue**: Comments are judgmental ("Why would you do this?")
- **Fix**: Assume good intent. "This approach works, but there's a more efficient way..." vs "This is dumb."

**Issue**: Reviewer suggests rewriting everything
- **Fix**: Incremental improvement > perfection. If the code mostly works, suggest targeted fixes, not a total rewrite.

---

## Part 3: Responding to Feedback - Your PR Review (25 minutes)

### Instructions

**Now the roles reverse. Your partner has reviewed YOUR code. Time to respond.**

**Step 1: Read the review feedback (5 minutes)**

Open your pull request. Read all comments from your reviewer.

**As you read:**
- Don't get defensive (this is hard but essential)
- Assume the reviewer wants to help, not hurt
- Distinguish between "must fix" and "nice to have"

**Step 2: Categorize the feedback (3 minutes)**

Make a list:

**Agree & Will Fix:**
- [Comment about missing error handling] ✅
- [Comment about hardcoded value] ✅

**Agree but Defer (for future PR):**
- [Comment about refactoring function—valid but out of scope for this story]

**Disagree (Need Discussion):**
- [Comment suggesting different approach—I think current approach is better because X]

**Step 3: Respond to each comment (10 minutes)**

For each review comment, reply in GitHub:

**For feedback you agree with:**
```
Good catch! I'll add error handling for the failed fetch case. I was focused on the happy path and missed this edge case.
```

**For feedback you'll defer:**
```
I agree this function is getting long. For this PR, I'm keeping it focused on implementing the login feature. I'll create a follow-up issue to refactor this into smaller functions. Sound good?
```

**For feedback you disagree with (be diplomatic):**
```
I considered using httpOnly cookies instead of localStorage, but our API doesn't support cookies yet (it's on the roadmap for Sprint 3). For now, localStorage is the best option. I added a TODO comment to revisit this when the API supports cookies.

Does that reasoning make sense? I'm open to other approaches if you see a way to use cookies with the current API.
```

**Step 4: Make the changes (7 minutes)**

For feedback you agreed to fix, update your code:

1. Check out your branch:
   ```bash
   git checkout [your-branch-name]
   ```

2. Make the fixes in your IDE

3. Test the changes:
   ```bash
   npm test
   npm start  # Manually test
   ```

4. Commit the changes:
   ```bash
   git add .
   git commit -m "Address code review feedback

   - Add error handling for failed login
   - Validate email and password inputs
   - Add TODO for token storage improvement
   "
   ```

5. Push to GitHub:
   ```bash
   git push origin [your-branch-name]
   ```

The PR updates automatically with your new commits.

**Step 5: Request re-review (2 minutes)**

In the PR, comment:
```
@reviewer I've addressed your feedback:
- ✅ Added error handling for login failures
- ✅ Added input validation
- 📝 Created issue #47 for refactoring handleLogin function
- 💬 Replied to your comment about token storage—let me know if my reasoning makes sense

Ready for re-review!
```

Click "Re-request review" button in GitHub.

### Expected Output

- Thoughtful responses to all review comments
- Code updated based on feedback
- New commits pushed to PR
- Reviewer notified that PR is ready for re-review
- Professional, non-defensive tone in all responses

### Common Issues & Fixes

**Issue**: Defensive responses ("You're wrong, my code is fine")
- **Fix**: Take a breath. Re-read the comment objectively. Even if you disagree, respond respectfully: "I see your point. Here's my reasoning..."

**Issue**: Blindly accepting all feedback without thinking
- **Fix**: It's okay to disagree! If you think your approach is better, explain why. Code review is a discussion, not a dictatorship.

**Issue**: Making changes without testing
- **Fix**: Always test after changes. A "quick fix" can introduce new bugs. Verify before pushing.

**Issue**: Not responding to comments, just pushing new code
- **Fix**: Communication is half of code review. Reply to comments so the reviewer knows you saw their feedback.

---

## Part 4: Second Review & Merge Decision (15 minutes)

### Instructions

**Your partner has updated their PR. Time for a second review.**

**Step 1: Re-review the updated PR (8 minutes)**

Pull the latest changes:
```bash
git fetch origin
git checkout [partner-branch-name]
git pull
```

Check:
- Did they address your feedback?
- Are the fixes correct?
- Did they introduce new bugs?

Test the code again:
```bash
npm test
npm start
```

**Step 2: Respond to their changes (3 minutes)**

For each of your original comments, either:
- **Resolve the thread**: "Thanks for fixing this! Looks good now."
- **Continue discussion**: "I see you added error handling, but it's only logging to console. Should we show a message to the user?"
- **Approve the PR**: "All my concerns addressed. Approved!"

**Step 3: Make merge decision (4 minutes)**

**Approve and merge criteria:**
- ✅ All "must fix" issues resolved
- ✅ Code works (you tested it)
- ✅ Tests pass
- ✅ No new bugs introduced

**If all criteria met:**
1. Click "Approve" in GitHub
2. Leave final comment:
   ```
   Approved! This PR successfully implements user login with proper error handling. Nice work addressing the feedback.
   ```
3. (In a real project, you'd click "Merge." For this lab, leave it open.)

**If criteria NOT met:**
- Request changes again with specific feedback
- Explain what still needs fixing

### Expected Output

- Second review completed
- Feedback on updated code provided
- Merge decision made (approve or request changes)
- Professional, collaborative tone maintained throughout

### Common Issues & Fixes

**Issue**: Approving PR without testing updated code
- **Fix**: Always test! Even small changes can break things. Pull, test, then approve.

**Issue**: Moving the goalposts (adding new requirements in re-review)
- **Fix**: Stick to your original feedback. If you think of new improvements, note them for a future PR, don't block this one.

**Issue**: Approving just to be nice, even though issues remain
- **Fix**: Approving broken code hurts the team. Be kind but honest: "This still needs work. Here's what's missing..."

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Reviewer Perspective**: What was hardest about reviewing someone else's code? Did you feel qualified to critique it? Why or why not?

**2. Author Perspective**: How did it feel to receive criticism of your code? Was any feedback particularly helpful? Any feedback that stung?

**3. Constructive Feedback**: What made feedback constructive vs. unconstructive? Can you give examples from your experience today?

**4. Code Quality Impact**: Did the code improve through review? Specifically, what got better? (Bugs caught, readability improved, edge cases added?)

**5. Team Dynamics**: How does code review build trust in a team? How could it damage trust if done poorly?

### Exit Ticket

**Submit via Canvas** (3-5 sentences):

```
1. What was the most valuable piece of feedback you received on your code?

2. What was the hardest feedback for you to give (or hear)? Why?

3. Name one thing you'll do differently in your next code review (as reviewer or author).

4. How will code review improve your CSC-289 capstone project?
```

---

## Extension Challenges (Optional)

**For pairs who finish early:**

### Challenge 1: Review a Third PR
Review another team's pull request (instructor assigns). Apply the same checklist. Did you find different issues than their original reviewer?

### Challenge 2: Style Guide Enforcement
Create a simple style guide for your project (4-6 rules). Examples:
- Functions must have JSDoc comments
- Variable names must be camelCase
- No function longer than 50 lines

Review a PR specifically for style guide compliance.

### Challenge 3: Security Audit
Do a security-focused review of a PR:
- Check for hardcoded secrets
- Look for SQL injection risks
- Verify input validation
- Check authentication/authorization

Document findings in a security review template.

### Challenge 4: Automated Code Review
Research GitHub Actions for automated code review:
- Linters (ESLint, Pylint)
- Test coverage checks
- Security scanners (Snyk, Dependabot)

Write a proposal: Which tools would help your capstone project?

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Setup, pairing, repository access verification
- **10-30 min**: Part 1 - Class walkthrough of sample PR review
- **30-55 min**: Part 2 - Students review peer PRs
- **55-80 min**: Part 3 - Students respond to feedback on their PRs
- **80-95 min**: Part 4 - Second review and merge decision
- **95-105 min**: Wrap-up and reflection

### Common Student Struggles

**1. Struggle**: Fear of giving honest feedback ("I don't want to hurt their feelings")
   - **Intervention**: Model constructive criticism. Show how to be honest and kind simultaneously. "This is a gift—you're helping them grow."
   - **Success Indicator**: Reviews include substantive feedback (not just "Looks good!"), phrased respectfully

**2. Struggle**: Defensiveness when receiving feedback
   - **Intervention**: Normalize criticism. "Every developer gets code reviewed, from interns to CTOs. It's not personal—it's process."
   - **Success Indicator**: Students respond with "Good catch!" or "Let me fix that" rather than arguing

**3. Struggle**: Focusing only on style/formatting, ignoring functionality
   - **Intervention**: Remind: "Does the code WORK? Are there BUGS? Those are priority 1. Style is priority 5."
   - **Success Indicator**: Reviews address functionality, bugs, security before mentioning style

**4. Struggle**: Overwhelming the author with 30+ comments
   - **Intervention**: "Pick the 5 most important issues. Fix those first. Everything else can be a follow-up."
   - **Success Indicator**: Reviews have 4-8 comments, prioritized by importance

**5. Struggle**: Not actually testing the code, just reading it
   - **Intervention**: "Reading code isn't enough. Check it out, run it, click through it. Only then can you know if it works."
   - **Success Indicator**: Students report testing results in their review ("I tested this with 5 edge cases...")

### Materials to Prepare

**Before Class:**
- [ ] Create sample PRs for students to review (2-3 PRs with intentional issues)
  - One PR with obvious bugs
  - One PR with security issues
  - One PR with maintainability problems
- [ ] Set up GitHub repository with student access (all students can comment on PRs)
- [ ] Prepare code review checklist (print or digital)
- [ ] Create example of good vs. bad review comments
- [ ] Write instructor guide: "How to give constructive code review feedback"
- [ ] Prepare rubric for grading code reviews (if assessed)

**During Class:**
- [ ] Demonstrate GitHub PR review workflow (screen share)
- [ ] Walk through sample PR review together (first 20 minutes)
- [ ] Circulate during peer reviews—ensure reviews are substantive
- [ ] Listen for defensive language in responses (intervene gently)
- [ ] Screenshot good review comments to share as examples
- [ ] Note students who struggle with giving/receiving feedback (offer support)

**After Class:**
- [ ] Review all submitted code reviews (check for professionalism and thoroughness)
- [ ] Compile best review comments into "Code Review Hall of Fame"
- [ ] Note common issues found across PRs (teach in next class)
- [ ] Provide individual feedback to students who struggled with tone
- [ ] Follow up with pairs where reviews were too harsh or too lenient

### Teaching Tips

**Model vulnerability**: Share a time your code was reviewed and you were wrong. "I once argued with a reviewer for 20 minutes, then realized they were right. I learned to listen first, defend second."

**Praise good feedback publicly**: When you see a great review comment, show it to the class (with permission). "This is exactly what constructive feedback looks like."

**Teach the "compliment sandwich" skeptically**: Some teach "positive, negative, positive" feedback. This can feel fake. Better: Be honest and kind. Start with what works, then address what doesn't, then collaborate on solutions.

**Normalize disagreement**: "It's okay to disagree with a reviewer. Just explain your reasoning. Code review is a discussion, not a command."

**Connect to professional world**: "Every company I've worked at requires code review. Netflix, Google, Microsoft—everyone. This is how professionals work. You're learning real practices."

**Enforce checklist use**: "Don't just skim the code. Use the checklist. Go category by category. This is how you catch what you'd otherwise miss."

**Celebrate iteration**: When a PR goes through 2-3 rounds of review, that's success, not failure. "Great code is edited code."

### Teaching Philosophy Notes

Code review is inherently vulnerable. Students are showing their work and asking for critique. This requires psychological safety.

Create that safety by normalizing mistakes. "There's no such thing as perfect code on the first try. Review is expected, not a sign of failure."

The hardest part isn't technical—it's emotional. Students fear looking stupid or hurting others. Address this head-on: "Code review is a skill. You'll be bad at it at first. That's okay. You'll get better."

Teach the principle: Critique code, not people. "This function is hard to read" vs "You're bad at naming things." One is about the work, one is about the person.

Finally, emphasize that code review is a conversation. It's not author vs reviewer. It's two people trying to make code better. When that collaboration happens, magic happens.

By the end, students should think: "I can review code constructively. I can receive feedback without defensiveness. This makes me a better developer and teammate."

---

**Remember**: The goal of code review isn't perfection. It's improvement. If the code is better after review than before, you succeeded. Keep iterating. Keep learning. Keep collaborating.
