---
title: Case Runs
---

# Case Runs

A **case run** is the execution of a single test case within a launch. It represents one test's result.

## What is a Case Run?

If a launch is a container for test execution, case runs are the individual test results inside. Each test case executed in a launch produces one case run with its status, duration, and any failure details.

## Case Run States

| State | Meaning |
|-------|---------|
| **Passed** | Test executed successfully, expected outcome achieved |
| **Failed** | Test executed but unexpected result occurred |
| **Skipped** | Test was not executed (excluded, blocked, or dependency issue) |
| **Blocked** | Test could not run due to environmental issues or preconditions |
| **Running** | Test is currently executing |

## Case Run Results

Each case run captures:
- **Status**: Passed, failed, skipped, blocked
- **Duration**: How long the test took to execute
- **Failure Details**: Error messages, stack traces, screenshots
- **Logs**: Test output and execution logs
- **Metadata**: Environment, browser, execution time

## Relationship to Other Entities

- **Launch**: Contains multiple case runs (one per test case executed)
- **Test Case**: The test definition that was executed
- **Defects**: Failed case runs can be linked to defect records

## Failed Case Runs

When a case run fails, Qualflare captures:
- **Failure Message**: What went wrong
- **Stack Trace**: For automated tests, the error stack trace
- **Screenshots**: Visual evidence of the failure state
- **Logs**: Detailed execution logs

Failed runs can be:
- **Retried**: Re-run the same test to verify it's not a flaky failure
- **Linked to Defects**: Create or associate with bug reports
- **Analyzed**: View failure patterns across multiple runs

## Case Run History

Qualflare maintains a history of case runs, showing:
- How a specific test has performed over time
- Flakiness (inconsistent pass/fail patterns)
- Execution time trends
- Failure frequency and patterns

## Related

- [Launches](/concepts/launches) - Containers for case runs
- [Test Cases](/concepts/test-cases) - Tests being executed
- [Defects](/concepts/defects) - Bugs from failed case runs
