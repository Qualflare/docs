---
title: Executing Tests
---

# Executing Tests

Learn how to run tests in Qualflare, whether you're executing them manually through the UI or uploading automated results via the CLI.

## Overview

Qualflare supports multiple ways to execute tests:

- **Manual execution**: Run tests directly from the UI for ad-hoc testing
- **CLI upload**: Upload results from your automated test runs
- **Test suite execution**: Run organized groups of tests
- **Test plan execution**: Execute scheduled or on-demand test plans
- **Retry workflows**: Re-run failed tests to investigate issues

---

## Workflow 1: Run Tests Manually from the UI

Manual test execution is useful for exploratory testing, smoke tests, or when you need to verify specific functionality on-demand.

### Steps

1. Navigate to your project in Qualflare
2. Click **Test Cases** in the left sidebar
3. Select the test cases you want to run by checking the boxes next to each test
4. Click the **Run** button in the action bar
5. In the launch configuration dialog:
   - Enter a **launch name** (e.g., "Smoke Test - Jan 14")
   - Select the **environment** (dev, staging, production)
   - Choose the **assignee** if someone else will execute the tests
6. Click **Start Launch**

### During Execution

As you execute each test:

1. Click on a test case to view its steps
2. Follow each step and mark it as complete
3. Set the final result:
   - **Passed**: Test executed successfully
   - **Failed**: Unexpected result occurred
   - **Blocked**: Could not complete due to environmental issues
   - **Skipped**: Test not applicable for this session
4. Add comments, screenshots, or logs as evidence
5. Move to the next test case

### Viewing Real-Time Results

The launch dashboard shows:
- Total tests vs. completed tests
- Pass/fail counts updating in real-time
- Execution progress bar
- List of failed tests for quick access

### Tips

- Use keyboard shortcuts (Next/Previous) to navigate between tests quickly
- Add screenshots for failed steps to aid debugging
- Use the **Blocked** status when environmental issues prevent testing

---

## Workflow 2: Upload Test Results via CLI

For automated tests, use the Qualflare CLI to upload test results from your CI/CD pipeline or local development environment.

### Prerequisites

- Qualflare CLI installed (`qf`)
- Test results in a supported format (JUnit, pytest, Jest, etc.)
- Authenticated with Qualflare

See the [Quick Start](/quick-start/#running-tests-via-the-cli) for installation basics.

### Basic Upload

```bash
# Upload test results to a project
qf upload results.xml \
  --project "MyApp Tests" \
  --launch "CI Build #456"
```

The CLI will:
- Auto-detect the test framework from the file format
- Parse the test results
- Create a new launch in Qualflare
- Upload individual test results as case runs

### Specifying Environment

```bash
# Upload with environment metadata
qf upload results.xml \
  --project "MyApp Tests" \
  --launch "Staging Tests" \
  --environment staging
```

### Including Build Metadata

```bash
# Upload with CI/CD metadata
qf upload results.xml \
  --project "MyApp Tests" \
  --launch "PR #123 Tests" \
  --environment pr \
  --branch feature/new-auth \
  --commit abc123def
```

### Handling Upload Errors

If the upload fails:

```bash
# Validate your results file before uploading
qf validate results.xml

# Check which format was detected
qf list-formats results.xml
```

### Tips

- Use descriptive launch names that include build numbers or PR identifiers
- Always specify the environment for accurate reporting
- Include branch and commit metadata for traceability
- Run `qf validate` first if you're unsure about the file format

---

## Workflow 3: Execute Specific Test Suites

Test suites organize related tests into groups. Execute entire suites to test specific features or areas of your application.

### Steps

1. Navigate to your project
2. Click **Test Suites** in the left sidebar
3. Find the suite you want to execute
4. Click the **Run Suite** button on the suite card
5. Configure the launch:
   - Enter a **launch name**
   - Select the **environment**
   - Choose whether to run all cases or only untested ones
6. Click **Start Launch**

### During Suite Execution

- Tests appear in the order they're organized in the suite
- Use the suite outline to jump between test cases
- Track progress against the total suite size

### Tips

- Organize suites by feature area, user flow, or priority level
- Create suites for regression testing (critical path tests)
- Use suite execution for smoke testing before releases
- Save common suite configurations as test plans for reuse

---

## Workflow 4: Run Tests from a Test Plan

Test plans define reusable test execution configurations with specific test cases, suites, and schedules.

### Steps

1. Navigate to your project
2. Click **Test Plans** in the left sidebar
3. Select the test plan you want to execute
4. Click **Execute Plan**
5. Review the pre-configured settings:
   - Selected test cases and suites
   - Environment configuration
   - Assigned testers
6. Click **Start Launch**

### Scheduled Test Plans

If a test plan has a schedule:

1. Navigate to **Test Plans**
2. Find the scheduled plan
3. Click **View Schedule** to see upcoming runs
4. Scheduled launches are created automatically

### Tips

- Create test plans for recurring testing activities (daily smoke tests, weekly regression)
- Assign different team members to different sections of large test plans
- Use test plans to ensure consistency across releases
- Clone existing plans to create variations for different environments

---

## Workflow 5: Retry Failed Tests and Investigate Failures

When tests fail, you need to investigate and determine if the failure is a legitimate bug or a flaky test.

### Steps

1. Navigate to the failed launch
2. Click on the **Failed** filter to see only failed tests
3. Click on a failed test case to view:
   - Failure message and stack trace
   - Screenshots or logs
   - Test steps and expected results
4. Decide on the action:
   - **Retry**: Re-run the test to check for flakiness
   - **Investigate**: Debug the issue in your application
   - **Link Defect**: Create or link a bug report

### Retrying Failed Tests

1. In the launch view, click **Retry Failed**
2. Select which tests to retry:
   - **All failed tests**: Retry everything that failed
   - **Specific tests**: Choose individual tests to retry
3. Click **Start Retry**
4. A new launch is created with the retry results

### Interpreting Retry Results

- **Consistent failure**: Same test fails again with the same error
  - Likely a legitimate bug
  - Link to a defect for tracking
- **Inconsistent failure**: Test passes on retry
  - Likely a flaky test
  - Investigate timing issues, dependency problems, or environmental factors
- **Different failure**: Test fails with a different error
  - Multiple issues may exist
  - Investigate each failure mode

### Tips

- Always retry failed tests before creating defects
- Document flaky tests for later stabilization
- Use failure patterns across multiple launches to identify systemic issues
- Add more specific assertions to reduce false positives

---

## Understanding Test States

| State | Meaning | When to Use |
|-------|---------|-------------|
| **Passed** | Test executed successfully, expected outcome achieved | Default when test completes without issues |
| **Failed** | Test executed but unexpected result occurred | When expected outcome doesn't match actual |
| **Skipped** | Test was not executed | Test excluded from this run, not applicable |
| **Blocked** | Test could not run due to environmental issues | Service down, missing data, dependency failure |
| **Running** | Test is currently executing | Automated test in progress |

---

## Related Topics

- [Launches](/concepts/launches) - Learn about launch lifecycle and analytics
- [Case Runs](/concepts/case-runs) - Individual test results explained
- [Quick Start](/quick-start/) - Basic CLI upload tutorial
- [CLI Tool Documentation](/cli/) - Full CLI command reference
