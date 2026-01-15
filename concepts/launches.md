---
title: Launches
---

# Launches

A **launch** is a test execution event that captures the results of running tests.

## What is a Launch?

When you run tests in Qualflare, the execution is recorded as a launch. A launch contains:
- **Source**: Manual execution or CI/CD automation
- **Environment**: Where tests ran (dev, staging, production)
- **Time**: When the launch occurred
- **Results Summary**: Pass/fail counts, duration, status
- **Case Runs**: Individual results for each test case executed

## Launch Lifecycle

Launches progress through these states:
- **Running**: Tests are currently executing
- **Completed**: All tests finished, results available
- **Failed**: Launch encountered an error (not test failures, but system errors)

## Launch Sources

**Manual Launches**: Created by testers running tests through the UI. Used for ad-hoc testing, exploratory testing, or on-demand verification.

**CLI Launches**: Generated automatically when test results are uploaded via the Qualflare CLI. This is the typical CI/CD integration pattern:
```bash
qf upload results.xml --project "MyApp" --launch "CI Build #123"
```

## Launch Components

Each launch contains:
- **Metadata**: Source, environment, duration, timestamp
- **Summary**: Total tests, passed, failed, skipped, pass rate
- **Case Runs**: Individual results for each test case executed
- **Logs and Artifacts**: Screenshots, error logs, test output
- **Trends**: How this launch compares to previous runs

## Launch Analytics

Qualflare tracks launch history to show:
- **Pass Rate Trends**: Are you improving or regressing over time?
- **Flaky Tests**: Which tests fail inconsistently?
- **Execution Time**: How long do test runs take?
- **Failure Patterns**: Common failure modes across launches

## Related

- [Case Runs](/concepts/case-runs) - Individual test results within a launch
- [Test Plans](/concepts/test-plans) - Scheduled launches
- [Defects](/concepts/defects) - Bugs linked from failed launches
