---
title: Defects
---

# Defects

A **defect** is a bug or issue found during testing that's tracked within Qualflare.

## What is a Defect?

When a test fails or a tester discovers a problem, it can be logged as a defect. Defects track the bug from discovery through resolution, providing visibility into software quality and technical debt.

## Defect Structure

Each defect contains:
- **Title**: Clear summary of the issue
- **Description**: Detailed explanation of the problem
- **Severity**: How bad the bug is (critical, high, medium, low)
- **Status**: Current state in the lifecycle
- **Assignee**: Who is responsible for fixing it
- **Linked Case Runs**: Which test failures discovered this bug

## Defect Lifecycle

Defects progress through these states:
- **Open**: New defect, not yet investigated
- **In Progress**: Being worked on by a developer
- **Resolved**: Fix has been implemented
- **Closed**: Verified as fixed, defect is complete
- **Reopened**: Fix didn't work, bug still exists

## Severity Levels

| Severity | Description | Example |
|----------|-------------|---------|
| **Critical** | System unusable, data loss, security breach | Login completely broken |
| **High** | Major feature broken, significant workaround | Checkout fails 50% of time |
| **Medium** | Minor feature broken, easy workaround | Sorting in wrong order |
| **Low** | Cosmetic issue, typo | Misspelled label |

## Linking Defects to Test Failures

When a case run fails, you can:
1. Create a new defect directly from the failure
2. Link the failure to an existing defect
3. Track which defects are blocking which tests

This connection enables:
- **Defect Verification**: Re-run tests to verify fixes
- **Impact Analysis**: See which tests are affected by which bugs
- **Release Readiness**: Ensure all critical defects are resolved before shipping

## Defects vs External Issue Trackers

Qualflare's built-in defect tracking provides:
- **Quick Logging**: File bugs directly from test failures
- **Test Integration**: Automatically link defects to test results
- **Verification Tracking**: Re-run tests to verify fixes

Many teams also integrate with external issue trackers (Jira, GitHub Issues, Asana) via:
- **Two-way Sync**: Defects sync with external tickets
- **Linking**: Reference external issue IDs in Qualflare defects
- **Workflow Automation**: Trigger external workflows from test failures

## Related

- [Case Runs](/concepts/case-runs) - Test failures that create defects
- [Milestones](/concepts/milestones) - Defect resolution targets
