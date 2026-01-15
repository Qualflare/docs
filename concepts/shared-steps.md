---
title: Shared Steps
---

# Shared Steps

**Shared steps** are reusable test step sequences that can be included in multiple test cases.

## What are Shared Steps?

Instead of repeating the same steps in every test case, you define them once as shared steps and reuse them wherever needed. This follows the DRY (Don't Repeat Yourself) principle and makes test maintenance much easier.

## How Shared Steps Work

1. **Define Once**: Create a shared step sequence (e.g., "User Login")
2. **Reuse Everywhere**: Reference the shared step in any test case
3. **Update Centrally**: Changes to the shared step automatically apply to all test cases using it

## Example: Login Shared Step

**Shared Step Definition:**
```
1. Navigate to /login
2. Enter email: {email}
3. Enter password: {password}
4. Click Login button
5. Verify redirect to dashboard
```

**Used in Test Cases:**
- "Login as Admin" → uses Login shared step with admin credentials
- "Login as Regular User" → uses Login shared step with user credentials
- "Login with Invalid Password" → uses Login shared step, expects failure

## Shared Step Parameters

Shared steps support parameters for dynamic values:
- **{email}**: Different email per test case
- **{username}**: Different username per test case
- **{product_id}**: Different product in each test

## Benefits

- **Consistency**: All tests use the same steps the same way
- **Maintenance**: Update once, apply everywhere
- **Clarity**: Test cases are shorter and easier to read
- **Reliability**: Reduces copy-paste errors

## Common Use Cases

- **Login/Logout**: Standard authentication sequences
- **Setup/Teardown**: Creating test data before testing, cleaning up after
- **Navigation**: Common page navigation patterns
- **Data Creation**: Standard entity creation (users, products, orders)

## Related

- [Test Cases](/concepts/test-cases) - Tests that use shared steps
