---
title: Test Suites
---

# Test Suites

A **test suite** is an organized collection of test cases grouped for efficient management and execution.

## What is a Test Suite?

Test suites help you organize related test cases together. Instead of managing hundreds of individual tests, you group them into logical suites based on feature area, type of testing, or any other organizing principle that makes sense for your team.

## Purpose of Test Suites

- **Organization**: Group related tests together (e.g., "Authentication Tests")
- **Bulk Execution**: Run all tests in a suite together
- **Reporting**: View results and analytics at the suite level
- **Maintenance**: Update and manage related tests as a group

## Suite Organization

Common ways to organize suites:

**By Feature Area**:
- Authentication Tests
- Checkout Flow Tests
- User Profile Tests

**By Test Type**:
- Smoke Tests (quick sanity checks)
- Regression Tests (full coverage)
- Integration Tests (API and database)

**By Priority**:
- Critical Path Tests
- Edge Case Tests

## Suites vs Test Plans

It's easy to confuse suites and plans, but they serve different purposes:

| Aspect | Test Suites | Test Plans |
|--------|-------------|------------|
| **Purpose** | Organization | Scheduling |
| **Focus** | What tests exist | When to run tests |
| **Relationship** | Groups tests together | Selects tests for execution |

Think of suites as playlists and plans as scheduled concerts. Suites organize content; plans organize execution.

## Suite Hierarchy

A single test case can belong to multiple suites. This allows flexible organization:
- "Login Tests" might be in both "Authentication Suite" and "Smoke Test Suite"
- Enables running the same tests in different contexts

## Related

- [Test Cases](/concepts/test-cases) - Individual tests in suites
- [Test Plans](/concepts/test-plans) - Scheduling suite execution
- [Shared Steps](/concepts/shared-steps) - Reusable steps across cases
