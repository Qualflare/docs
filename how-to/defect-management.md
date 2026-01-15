---
title: Manage Defects
description: Learn how to manage defect lifecycle, triage bugs, and track resolution
---

# Manage Defects

You have a backlog of bugs. This guide shows you how to manage defects through their lifecycle, prioritize what to fix, and verify that fixes work.

## Workflow 1: Defect Triage (What to Do with New Bugs)

New defects come in continuously. Triage ensures each bug gets evaluated, prioritized, and routed to the right person.

### Steps

1. **Review new defects**
   - Check for defects with "Open" status
   - Sort by creation date to see newest first
   - Filter by severity to address critical bugs first

2. **Assess defect quality**
   - Is the title clear and specific?
   - Are reproduction steps provided?
   - Is there sufficient context (screenshots, logs)?
   - **Action**: Request more information if details are missing

3. **Verify it's a genuine bug**
   - Is this a product issue or a test problem?
   - Can you reproduce the issue?
   - Is it a duplicate of an existing defect?
   - **Action**: Close if not a bug, link if duplicate

4. **Set or adjust severity**
   - Evaluate impact on users
   - Consider affected workflows
   - Assess if workaround exists
   - **Action**: Update severity if default is incorrect

5. **Assign priority**
   - Critical/High severity → Urgent or High priority
   - Medium severity → Medium or Low priority based on context
   - Low severity → Low priority unless high visibility

6. **Route to the right owner**
   - Assign to developer responsible for the component
   - Consider current workload and expertise
   - **Action**: Assign or set to "Unassigned" if unclear

7. **Update defect status**
   - Move from "Open" to "In Progress" if assigned
   - Keep as "Open" if awaiting assignment or more info

8. **Document triage decisions**
   - Add a comment explaining severity/priority choices
   - Note any assumptions or uncertainties
   - Record if triage is deferred for more information

### Triage Outcomes

| Outcome | Status | Notes |
|---------|--------|-------|
| Valid bug, needs fixing | In Progress | Assigned to developer |
| Valid bug, but not now | Open | Set lower priority |
| Not a bug (test issue) | Closed | Add explanation |
| Duplicate | Open | Link to original defect |
| Needs investigation | Open | Add comment with questions |
| Already fixed | Resolved | Link to fix if available |

### Frequency

- **Daily**: For critical/high severity bugs
- **2-3x per week**: For medium/low severity bugs
- **Per milestone**: Full backlog review

### See Also

- [Set severity and priority](/how-to/defect-tracking#workflow-4-set-severity-and-priority-appropriately)
- [Defect lifecycle](/concepts/defects#defect-lifecycle)

## Workflow 2: Assign and Reassign Defects

Defects need clear ownership. Assign bugs to team members and reassign as context changes.

### Initial Assignment

1. **Navigate to the defect**
   - Open the defect details page

2. **Choose an assignee**
   - Consider component ownership
   - Check current workload
   - Match expertise to the issue

3. **Assign the defect**
   - Select the assignee from the dropdown
   - Optionally add a comment explaining the assignment

4. **Notify the assignee**
   - Qualflare sends notification to the assignee
   - Consider @mentioning in Slack or email for urgent bugs

### Reassigning Defects

When ownership changes:

1. **Reassign the defect**
   - Update the assignee field
   - **Critical**: Add a comment explaining why

2. **Common reassignment reasons**
   - Original assignee is unavailable
   - Issue belongs to a different component
   - Workload balancing
   - Expertise better matched elsewhere

3. **Maintain context**
   - Previous assignee should share findings
   - Link to related discussions or commits
   - Document attempted solutions

### Unassigned Defects

Keep bugs unassigned when:
- Owner is unclear during triage
- Awaiting team capacity planning
- Needs investigation before routing
- Candidate for backlog rather than active work

### Best Practices

- **One owner per defect**: Avoid co-assignment
- **Communicate changes**: Always comment when reassigning
- **Respect workload**: Check assignee's current defect count
- **Escalate stuck bugs**: Reassign if defect isn't progressing

### See Also

- [Defect triage](#workflow-1-defect-triage-what-to-do-with-new-bugs)
- [Update defect status](#workflow-3-update-defect-status-through-the-lifecycle)

## Workflow 3: Update Defect Status Through the Lifecycle

Defects progress through statuses from creation to resolution. Update status accurately to reflect the current state.

### Defect Lifecycle States

| Status | Meaning | When to Use |
|--------|---------|-------------|
| **Open** | New defect, not yet investigated | Initial state after creation |
| **In Progress** | Someone is actively working on it | Assignee has started investigation or fix |
| **Resolved** | Fix is implemented, needs verification | Code change is committed/pushed |
| **Closed** | Fix verified, defect is complete | QA confirms the fix works |
| **Reopened** | Fix didn't work, bug still exists | Verification failed, bug remains |

### Status Transitions

#### Open → In Progress

**When**: Assignee starts working on the bug

**Steps**:
1. Assign the defect (if not already assigned)
2. Change status to "In Progress"
3. Optionally add a comment with initial assessment

#### In Progress → Resolved

**When**: Developer implements the fix

**Steps**:
1. Commit and push the code change
2. Link the commit or PR to the defect (in a comment)
3. Change status to "Resolved"
4. Add a comment describing the fix
5. Assign to QA engineer for verification

#### Resolved → Closed

**When**: QA confirms the fix works

**Steps**:
1. [Verify the fix](#workflow-4-verify-defect-fixes-with-test-re-runs)
2. If tests pass, change status to "Closed"
3. Add a comment confirming verification
4. Optionally note test cases or launch used for verification

#### Resolved → Reopened

**When**: Fix doesn't work or introduces new issues

**Steps**:
1. Attempt to verify the fix
2. If the bug persists, change status to "Reopened"
3. Add a comment explaining what's still broken
4. Reassign to the original developer or a new owner

#### Any Status → Closed (Without Fix)

**When**: Defect is not a bug, won't be fixed, or is a duplicate

**Steps**:
1. Determine the reason (not a bug, duplicate, won't fix)
2. Change status to "Closed"
3. **Critical**: Add a detailed comment explaining why
4 - For duplicates, link to the original defect

#### Closed → Reopened

**When**: Bug reappears after being closed

**Steps**:
1. Verify the bug has returned
2. Change status to "Reopened"
3. Add a comment with new context (environment, version, etc.)
4. Assign to appropriate developer

### Status Update Best Practices

- **Always comment**: Explain why you changed the status
- **Link your work**: Reference commits, PRs, or test launches
- **Don't skip Resolved**: Go In Progress → Resolved → Closed (not directly to Closed)
- **Keep it moving**: Stuck defects indicate process problems

### See Also

- [Defect lifecycle](/concepts/defects#defect-lifecycle)
- [Verify fixes](#workflow-4-verify-defect-fixes-with-test-re-runs)

## Workflow 4: Verify Defect Fixes with Test Re-runs

Before closing a defect, verify that the fix actually works. Re-run the tests that originally failed.

### Steps

1. **Identify linked test cases**
   - Open the defect
   - Review the "Linked Case Runs" section
   - Note which test cases originally failed

2. **Create a verification launch**
   - Create a new launch for verification testing
   - Include the test cases linked to the defect
   - Consider adding related test cases (regression testing)

3. **Execute the tests**
   - Run the launch in the appropriate environment
   - Monitor test execution

4. **Check the results**
   - **Pass**: Tests that previously failed now pass
   - **Fail**: Original bug still exists or fix introduced new issues

5. **Update the defect status**
   - **If passed**: Change status from "Resolved" to "Closed"
   - **If failed**: Change status to "Reopened" and add comments

6. **Document verification**
   - Add a comment linking to the verification launch
   - Note the environment and any special conditions

### Regression Testing

When verifying fixes, also run:

- **Related test cases**: Tests in the same feature area
- **Integration tests**: Tests that exercise the modified code
- **Smoke tests**: Quick checks that core functionality still works

This catches fixes that break other features.

### Automated Verification

If using CI/CD:

1. Configure the pipeline to run linked tests when code is merged
2. Automatically update defect status based on test results
3. Notify team if regression is detected

### What If the Bug Intermittently Fails?

For flaky bugs:

1. **Run multiple times**: Execute the test several times
2. **Check frequency**: If it fails less often, the fix may have reduced but not eliminated the issue
3. **Document**: Add a comment noting the flakiness and remaining frequency
4. **Decide**:
   - Close if improvement is sufficient
   - Keep open if bug still occurs regularly

### Best Practices

- **Use the same environment**: Reproduce conditions of the original failure
- **Verify in production-like environment**: Staging or pre-prod if possible
- **Don't assume**: Even if the developer says it's fixed, verify independently
- **Check for side effects**: Ensure the fix didn't break other things

### See Also

- [Run test launches](/how-to/test-execution)
- [Case runs](/concepts/case-runs) - Understanding test results

## Workflow 5: Generate Defect Reports for Retrospectives

Track defect trends and communicate quality status to stakeholders with regular reports.

### Types of Defect Reports

#### Sprint/Milestone Summary

Report on defects for the completed iteration:

**Metrics to include**:
- Total defects opened vs. resolved
- Breakdown by severity (critical, high, medium, low)
- Average time to resolution
- Defects remaining (carryover to next sprint)

**Use for**:
- Sprint retrospectives
- Stakeholder updates
- Team performance review

#### Release Readiness Report

Before shipping, assess defect status:

**Metrics to include**:
- Open critical/high defects (should be zero)
- Open defects by component
- Defects linked to the release milestone
- Verification status of resolved defects

**Use for**:
- Go/no-go decisions
- Release notes (list of fixes)
- Risk assessment

#### Trend Analysis

Track defect patterns over time:

**Metrics to include**:
- Defect creation rate over time
- Average age of open defects
- Recurring defects (same bug reopening)
- Defects by component or feature area

**Use for**:
- Identifying problematic areas
- Process improvement
- Resource planning

### Generating Reports in Qualflare

1. **Navigate to the defects section**
   - Use filters to scope the report (milestone, date range, severity)

2. **Export the data**
   - Use Qualflare's export feature (CSV, JSON)
   - Or capture metrics from the dashboard

3. **Create visualizations**
   - Chart defect trends over time
   - Show severity breakdown
   - Compare against previous periods

4. **Add context**
   - Explain unusual patterns (spike in defects, long resolution times)
   - Highlight critical issues
   - Note process changes that affected metrics

### Sample Report Template

```markdown
# Defect Report: Sprint 24 (2026-01-01 to 2026-01-14)

## Summary
- **Total opened**: 12 defects
- **Total resolved**: 10 defects
- **Remaining open**: 2 defects (1 high, 1 low)

## By Severity
- Critical: 0
- High: 3 opened, 2 resolved, 1 open
- Medium: 6 opened, 6 resolved
- Low: 3 opened, 2 resolved, 1 open

## Aging
- Average resolution time: 4.2 days
- Oldest open defect: 8 days (DEF-123)

## Blockers
- DEF-456 (High) blocks payment feature release

## Trends
- Defect creation rate: stable vs. previous sprint
- No recurring defects
- Payment component has highest defect count
```

### Defect Metrics and KPIs to Track

Track these metrics over time to spot trends and process issues:

| Metric | Definition | What It Indicates |
|--------|------------|-------------------|
| **Defect density** | Defects per 1000 lines of code or per feature | Code quality by area |
| **Resolution time** | Average days from open to resolved | Team efficiency |
| **Reopen rate** | Percentage of defects that are reopened | Fix quality |
| **Escape rate** | Defects found in production vs. pre-production | Testing effectiveness |
| **Aging** | Average age of open defects | Backlog health |

### Communicating Defect Status to Stakeholders

When reporting to non-technical stakeholders:

- **Focus on impact**: How defects affect users and releases
- **Simplify severity**: Group into "blocks release" vs. "can defer"
- **Highlight progress**: Show improvement over time
- **Be transparent**: Don't hide critical issues

## Prioritization When You Can't Fix Everything

Resources are limited. Prioritize defects to maximize impact.

### Prioritization Framework

Use the **RICE** method or similar:

| Factor | Questions |
|--------|-----------|
| **Reach** | How many users affected? |
| **Impact** | How severely are they affected? |
| **Confidence** | How certain are we about the above? |
| **Effort** | How much work to fix? |

**Calculate**: (Reach × Impact × Confidence) ÷ Effort = Priority Score

### Practical Prioritization

When you can't fix everything:

1. **Fix criticals first**: These block release or affect data integrity
2. **Address high-impact, low-effort**: Quick wins that help many users
3. **Group related defects**: Fix multiple bugs in the same area together
4. **Consider release timing**: Defer low-priority bugs to future releases
5. **Communicate tradeoffs**: Be transparent about what won't be fixed

### When to Defer Fixes

It's okay to defer defects when:

- Low severity with workaround
- Affects small subset of users
- High effort to fix
- Product roadmap may obsolete the feature

**Document the decision**: Add a comment explaining why the defect is deferred and when it will be revisited.

## Verifying Fixes Without Introducing Regressions

A fix that breaks other things is not a good fix. Protect against regression.

### Regression Testing Strategies

1. **Run related tests**: Execute tests for the modified component
2. **Run smoke tests**: Quick checks of core functionality
3. **Run integration tests**: Verify that integrated systems still work
4. **Run automated test suite**: Catch unintended side effects

### Before Marking as Resolved

Developers should:

1. **Run tests locally**: Ensure all existing tests pass
2. **Test the fix**: Manually verify the specific bug is fixed
3. **Test related functionality**: Check for unintended consequences
4. **Review the change**: Consider edge cases and similar code paths

### After Marking as Resolved

QA should:

1. **Verify the fix**: Confirm the bug is actually fixed
2. **Run broader tests**: Check for regressions in related areas
3. **Test in different environments**: Staging, different browsers/devices
4. **Monitor production**: Watch for issues after deployment

### Signs of Regression

Be alert for:

- Tests that previously passed now fail
- New defects filed for related functionality
- User complaints about features that worked before
- Performance degradation

**If regression is detected**: Reopen the defect and file a new defect for the regression.

## Common Issues in Defect Management

### Stuck Defects

**Problem**: Defects sit in "In Progress" for weeks

**Solutions**:
- Regular backlog reviews
- Reassign if original owner is blocked
- Break into smaller tasks
- Escalate to management if needed

### Zombie Defects

**Problem**: Old, low-priority defects that never get addressed

**Solutions**:
- Periodic backlog cleanup
- Close if no longer relevant
- Re-evaluate priority during milestone planning
- Consider "won't fix" if truly obsolete

### Churn

**Problem**: Defects repeatedly reopen and close

**Solutions**:
- Investigate root cause of repeated failures
- Improve fix verification process
- Add more comprehensive testing
- Consider architectural changes if same area keeps failing

### Overwhelmed Team

**Problem**: More defects than team can handle

**Solutions**:
- Prioritize ruthlessly (use framework above)
- Request additional resources
- Expand scope of testing to catch issues earlier
- Improve code quality practices to reduce defect creation

## Related

- [Track Defects](/how-to/defect-tracking) - Logging bugs from test failures
- [Defects](/concepts/defects) - Defect structure and lifecycle
- [Case Runs](/concepts/case-runs) - Test results for verification
