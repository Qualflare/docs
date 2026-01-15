---
title: Test Cases
---

# Test Cases

A **test case** is an individual test that defines what to test, how to test it, and what the expected result should be.

## What is a Test Case?

Test cases are the fundamental building blocks of testing in Qualflare. Each test case documents:
- **Title**: Clear, descriptive name for the test
- **Description**: What is being tested and why
- **Steps**: Step-by-step instructions to execute the test
- **Expected Result**: What should happen if the system works correctly
- **Priority**: Importance level (critical, high, medium, low)
- **Tags**: Labels for categorization and filtering

## Test Case Structure

```markdown
## User Login with Valid Credentials

**Steps:**
1. Navigate to login page
2. Enter valid email and password
3. Click login button

**Expected Result:** User is redirected to dashboard
**Priority:** Critical
**Tags:** auth, smoke
```

## Test Case Lifecycle

Test cases progress through these states:
- **Draft**: Being written, not yet ready for execution
- **Active**: Approved and ready to be executed
- **Archived**: No longer used but kept for historical reference

## Test Cases vs Test Scripts

**Test Cases** describe what to test in a framework-agnostic way. They focus on behavior and outcomes, not implementation details.

**Test Scripts** (automation) implement test cases in code using frameworks like Selenium, Cypress, or Playwright. A single test case can have multiple automated test scripts.

## Test Case Relationships

- **Test Suites**: Test cases are organized into suites for group execution
- **Test Plans**: Test cases are selected for specific test runs
- **Launches**: Test cases are executed and produce results
- **Defects**: Failed test cases can be linked to defects

## Related

- [Test Suites](/concepts/test-suites) - Organizing test cases
- [Test Plans](/concepts/test-plans) - Selecting test cases for execution
- [Launches](/concepts/launches) - Executing test cases and viewing results
- [Shared Steps](/concepts/shared-steps) - Reusable test steps
