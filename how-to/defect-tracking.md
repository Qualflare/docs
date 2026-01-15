---
title: Track Defects
description: Learn how to log bugs from test failures and track defect lifecycle
---

# Track Defects

You found a bug. Now what? This guide shows you how to log defects from test failures, add useful context, and track bugs through to resolution.

## Workflow 1: Create a Defect from a Failed Test

When a test fails during execution, quickly log it as a defect.

### Steps

1. **Navigate to the failed case run**
   - Go to the launch that contains the failed test
   - Find the case run with "Failed" status

2. **Create defect from failure**
   - Click the failed case run to view details
   - Select "Create Defect" from the action menu
   - Qualflare pre-fills the defect title with the test name and failure message

3. **Review auto-populated fields**
   - **Title**: Auto-generated from test name and error
   - **Linked Case Run**: Automatically attached to the failure
   - **Severity**: Defaults to Medium (adjust if needed)

4. **Add context (see Workflow 3)**
   - Fill in additional details that help developers understand and fix the issue

5. **Save the defect**
   - Click "Create" to log the defect
   - The defect is now linked to the case run for tracking

### When to Use This Workflow

- Test fails consistently in a launch
- Failure indicates a genuine bug (not test flakiness)
- You want to track the bug through to resolution

### See Also

- [Defects](/concepts/defects) - Understanding defect structure
- [Case Runs](/concepts/case-runs) - Test execution results

## Workflow 2: Link Test Failures to Existing Defects

If a bug you've seen before causes another test to fail, link it to the existing defect instead of creating a duplicate.

### Steps

1. **Identify the existing defect**
   - Search for defects by title or keywords
   - Check if the same bug has been reported before

2. **Navigate to the failed case run**
   - Open the launch with the new failure
   - Click on the failed case run

3. **Link to existing defect**
   - Select "Link to Defect" from the action menu
   - Search for and select the existing defect
   - Confirm the link

4. **Verify the connection**
   - The case run now appears in the defect's "Linked Case Runs" list
   - The defect shows the latest failure timestamp

### Benefits

- Avoid duplicate bug reports
- Track how many tests are affected by the same bug
- See full impact when prioritizing fixes

### When to Use This Workflow

- Same error message as previous failures
- Same component or feature as known defect
- You're unsure if it's a new bug—search first

## Workflow 3: Add Details to Defect Reports

A good defect report helps developers fix bugs faster. Add context that makes the issue clear and reproducible.

### What to Include

#### Title

- **Be specific**: "Checkout fails when billing address differs from shipping"
- **Include the symptom**: "Login timeout after 30 seconds" not "Login broken"
- **Mention the affected area**: "Payment page" not just "Error"

#### Description

Answer these questions:

1. **What happened?**
   - Clear description of the unexpected behavior
   - What you expected to happen instead

2. **How to reproduce?**
   - Step-by-step reproduction steps
   - Test data or inputs used
   - Browser, environment, or configuration details

3. **How often does it occur?**
   - Every time, intermittent, or only under specific conditions
   - If flaky, how often (e.g., "fails ~30% of the time")

4. **What's the impact?**
   - Who is affected? (all users, specific segment, certain browsers)
   - What workflows are blocked?
   - Is there a workaround?

#### Attachments

- **Screenshots**: Visual evidence of the failure
- **Logs**: Error messages, stack traces, console output
- **Test Data**: Inputs that trigger the bug (sanitized if needed)
- **Screen Recordings**: For complex UI issues

### Tips for High-Quality Defects

- **One bug per defect**: Don't bundle multiple issues
- **Minimal reproduction**: Strip away unnecessary steps
- **Use stable environments**: Avoid ephemeral test data in reproduction steps
- **Keep it updated**: Add notes if behavior changes or new information emerges

### See Also

- [Write defect titles](#tips-for-writing-effective-defect-titles)
- [Severity levels](/concepts/defects#severity-levels)

## Workflow 4: Set Severity and Priority Appropriately

Not all bugs are equal. Use severity to indicate impact and priority to guide fix order.

### Understanding Severity

Severity measures how bad the bug is:

| Severity | When to Use | Example |
|----------|-------------|---------|
| **Critical** | System unusable, data loss, security breach | Login completely broken, database corruption |
| **High** | Major feature broken, significant workaround | Checkout fails, search returns no results |
| **Medium** | Minor feature broken, easy workaround | Wrong sort order, validation message unclear |
| **Low** | Cosmetic issue, typo | Misspelled label, slight misalignment |

### Setting Severity

1. **Assess impact on users**
   - Can they complete their workflow?
   - Is data at risk?
   - Is there a workaround?

2. **Consider affected users**
   - All users → higher severity
   - Specific subset → lower severity

3. **Evaluate frequency**
   - Always fails → higher severity
   - Intermittent → may reduce severity

### Understanding Priority

Priority indicates when to fix the bug:

- **Urgent**: Fix immediately (blocks release, critical customer)
- **High**: Fix soon (major impact, many users affected)
- **Medium**: Fix in next cycle (minor impact, workaround exists)
- **Low**: Fix when possible (cosmetic, edge case)

### When Severity and Priority Differ

Sometimes they don't align:

- **High severity, low priority**: Bug is bad but affects few users or has easy workaround
- **Low severity, high priority**: Quick fix for high-visibility issue

### Best Practices

- **Default to Medium**: If unsure, start with Medium and adjust during triage
- **Document your reasoning**: Add a note explaining why you chose this level
- **Re-evaluate**: Severity can change as more information emerges

### See Also

- [Defect lifecycle](/concepts/defects#defect-lifecycle)
- [Triage workflows](/how-to/defect-management#workflow-1-defect-triage-what-to-do-with-new-bugs)

## Workflow 5: Track Defects Related to Specific Milestones

Organize defects by milestones to ensure release readiness and track progress toward shipping.

### Linking Defects to Milestones

1. **Identify the target milestone**
   - Navigate to the project's milestones section
   - Find the sprint, release, or version target

2. **Create or edit the defect**
   - When creating a defect, select the milestone from the dropdown
   - For existing defects, edit and assign to the correct milestone

3. **View milestone defect summary**
   - Open the milestone to see all linked defects
   - Review by severity, status, and assignee

### Filtering Defects by Milestone

1. **Go to the defects list**
   - Use the milestone filter to select your target
   - Combine with severity and status filters

2. **Track progress**
   - See how many defects are open vs. resolved
   - Identify which critical bugs must be fixed before release

### Release Readiness Checks

Before releasing a milestone, verify:

- [ ] **No critical defects open**
- [ ] **High-priority defects resolved or have documented exceptions**
- [ ] **All defects linked to test cases for verification**
- [ ] **Fixes verified with test re-runs**

### Using Milestones for Planning

- **Sprint planning**: Pull unresolved defects from previous milestone into next sprint
- **Release notes**: Generate list of fixed defects for release communication
- **Trend analysis**: Track defect count across milestones to spot quality trends

### See Also

- [Milestones](/concepts/milestones) - Milestone structure and usage
- [Verify fixes](/how-to/defect-management#workflow-3-verify-defect-fixes) - Re-running tests to confirm fixes

## Tips for Writing Effective Defect Titles

A good defect title helps developers understand the issue at a glance.

### Do

- **"Checkout fails when billing address differs from shipping"**
- **"Login timeout after 30 seconds on mobile Safari"**
- **"Search returns no results for queries with special characters"**

### Don't

- **"Bug in checkout"** (too vague)
- **"It's broken"** (no information)
- **"Error when doing X"** (doesn't say what the error is)
- **"Fix the thing"** (completely unhelpful)

### Title Formula

Use this pattern: **[Feature] + [What happened] + [Condition]**

Examples:
- "Payment processing fails when card expiration date is in past"
- "Dashboard charts don't render on Firefox browsers"
- **When**: Under what circumstances does it occur?

## Common Mistakes to Avoid

- **Creating defects for test failures** that are actually test issues (flaky tests, bad test data)
- **Bundling multiple bugs** in one defect report
- **Vague titles** that don't describe the issue
- **Missing reproduction steps** forces developers to investigate without context
- **Over- or under-severity**: Critical should be reserved for serious issues

## When to Log a Defect vs. Just Note a Failure

Not every test failure needs a defect. Consider:

### Log a Defect When

- Failure indicates a genuine product bug
- Issue affects users or workflows
- Bug needs to be tracked for resolution

### Just Note the Failure When

- Test environment issue (network, infrastructure)
- Flaky test that passes on retry
- Test configuration or data problem
- Known issue already tracked as a defect

### When Unsure

- Create the defect—it can always be closed during triage if it's not a real bug
- Add a note explaining your uncertainty
- Let triage decide

## Related

- [Defect Management](/how-to/defect-management) - Managing defect lifecycle and triage
- [Defects](/concepts/defects) - Defect structure and lifecycle
- [Case Runs](/concepts/case-runs) - Understanding test failures
