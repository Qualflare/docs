---
title: Test Plans
---

# Test Plans

A **test plan** defines when and how to run tests. Unlike test suites (which organize tests), test plans schedule and coordinate test execution.

## What is a Test Plan?

A test plan specifies:
- **Which tests** to run (selected suites or individual cases)
- **When** to run them (schedule, trigger, manual)
- **Who** executes them (assigned testers)
- **Where** to run them (environment configuration)
- **Why** this test run exists (release verification, regression, etc.)

## Test Plan Components

- **Selected Tests**: Specific test suites and cases included in the plan
- **Schedule**: When the test should run (one-time, recurring, manual)
- **Assignees**: Team members responsible for execution
- **Environment**: Target environment (dev, staging, production)
- **Milestone Link**: Connects to release milestones for tracking

## Test Plan Lifecycle

- **Draft**: Being planned, not yet ready for execution
- **Active**: Scheduled and ready to execute
- **Completed**: Execution finished, results available

## Plans vs Suites

Test plans and suites are complementary but different:

**Suites** = What tests exist (organization)
**Plans** = When to run tests (scheduling)

A single suite can be included in multiple test plans:
- "Authentication Suite" might run daily in "Smoke Test Plan" and weekly in "Full Regression Plan"

## Use Cases

**Release Testing**: Plan includes all regression tests, scheduled for pre-release verification

**Continuous Testing**: Plan includes smoke tests, runs on every code commit

**Milestone Verification**: Plan links to a release milestone, tracks progress toward completion

## Related

- [Test Suites](/concepts/test-suites) - Tests selected for plans
- [Launches](/concepts/launches) - Test runs created from plans
- [Milestones](/concepts/milestones) - Goals tracked via test plans
