---
title: Organizing Tests
description: Step-by-step guides for organizing test cases into suites and plans
---

# Organizing Tests

Learn how to organize test cases into suites, create test plans for execution, and use tags for efficient test management.

## Workflow 1: Create and Organize Test Suites

Group related test cases together into suites for better organization and bulk execution.

### Steps

1. **Navigate to Test Suites**
   - Click **Test Suites** in the left sidebar
   - Click **+ New Suite** button in the top right

2. **Define Suite Details**
   - **Name**: Enter a clear, descriptive name (e.g., "Authentication Tests", "Checkout Flow")
   - **Description**: Add context about what this suite covers
   - **Folder/Path**: Optionally organize into folders (e.g., `Features/Authentication`)

3. **Add Test Cases to Suite**
   - Click **+ Add Test Cases** button
   - Search and select test cases from your project
   - Click **Add** to include them in the suite

4. **Organize Suite Structure**
   - Create folders for hierarchical organization
   - Drag and drop suites to rearrange
   - Use nesting to group related suites (e.g., `API Tests` → `User API`, `Order API`)

5. **Set Suite Properties**
   - **Priority**: Default priority for tests in this suite
   - **Tags**: Auto-apply tags to all tests in suite
   - **Owner**: Assign team or person responsible

6. **Save the Suite**
   - Click **Save** to create the suite
   - The suite appears in the Test Suites list

### Best Practices for Suite Organization

- **Organize by feature area** - One suite per major feature (Authentication, Billing, Reporting)
- **Keep suites focused** - 10-50 test cases per suite is manageable
- **Use hierarchical folders** - Group related suites together
- **Name consistently** - Use naming pattern like `[Feature] [Type] Tests` (e.g., "API Authentication Tests")

### Common Suite Patterns

**By Feature Area:**
- Authentication Suite
- User Management Suite
- Checkout & Payment Suite
- Reporting & Analytics Suite

**By Test Type:**
- Smoke Tests Suite (quick sanity checks)
- Regression Suite (full coverage)
- Integration Tests Suite (API, database)

**By Layer:**
- UI Tests Suite
- API Tests Suite
- Database Tests Suite
- Performance Tests Suite

### Related Concepts

- [Test Suites](/concepts/test-suites) - Understanding suite purpose and structure
- [Test Cases](/concepts/test-cases) - Individual tests organized into suites

---

## Workflow 2: Add Test Cases to Suites

Add test cases to suites using drag-drop, bulk selection, or manual selection.

### Steps to Add Individual Test Cases

1. **Open the Suite**
   - Navigate to **Test Suites**
   - Click on the suite you want to add cases to

2. **Add Test Cases**
   - Click **+ Add Test Cases** button
   - Search for test cases by name or tag
   - Check the boxes next to test cases to add
   - Click **Add** to confirm

### Steps to Drag and Drop

1. **Open Split View**
   - Navigate to **Test Suites**
   - Click the **Split View** icon (two panels)
   - Left panel shows suites, right panel shows test cases

2. **Drag and Drop**
   - Find test case in the right panel
   - Drag test case to a suite in the left panel
   - Release to add the case to that suite

3. **Repeat as Needed**
   - Continue dragging test cases to suites
   - Changes save automatically

### Steps to Bulk Add Test Cases

1. **Select Multiple Test Cases**
   - Go to **Test Cases** list view
   - Filter to find the cases you want to add
   - Check boxes next to all cases to add

2. **Use Bulk Actions**
   - Click **Bulk Actions** menu
   - Select **Add to Suite**
   - Choose destination suite from dropdown
   - Click **Add** to process

3. **Verify Addition**
   - Navigate to the target suite
   - Confirm all test cases appear in the suite

### Steps to Remove Test Cases from Suite

1. **Open the Suite**
   - Navigate to **Test Suites**
   - Click on the suite containing the cases

2. **Remove Cases**
   - Check boxes next to cases to remove
   - Click **Remove from Suite**
   - Confirm removal (this doesn't delete the test case, just removes it from suite)

### Best Practices

- **Use drag-drop for small additions** - Quick and intuitive for 1-5 cases
- **Use bulk add for many cases** - Efficient when adding 10+ cases
- **Review suite composition regularly** - Remove outdated or redundant tests
- **Atest case can be in multiple suites** - Don't duplicate cases, just add to multiple suites

### Tips

- Filter by tag to add all cases with a specific label (e.g., add all `smoke` tests to Smoke Suite)
- Use split view to see both suite structure and available test cases
- Removing from suite doesn't delete the test case - it remains in your project

---

## Workflow 3: Create Test Plans for Scheduled Execution

Create test plans to schedule when tests should run, assign execution to team members, and track progress.

### Steps

1. **Navigate to Test Plans**
   - Click **Test Plans** in the left sidebar
   - Click **+ New Plan** button

2. **Define Plan Details**
   - **Name**: Enter a descriptive name (e.g., "Weekly Regression", "Release 2.1 Verification")
   - **Description**: Add context about the plan's purpose
   - **Milestone**: Optionally link to a release milestone

3. **Select Test Suites**
   - Click **+ Add Suites**
   - Choose suites to include in this plan
   - Use filters to find suites by feature, tag, or owner

4. **Add Individual Test Cases (Optional)**
   - Click **+ Add Test Cases** to include specific cases
   - Useful for ad-hoc or one-time test runs

5. **Configure Schedule**
   - **Manual**: Run only when triggered
   - **One-time**: Schedule for specific date/time
   - **Recurring**: Set frequency (daily, weekly, monthly)
   - **Trigger-based**: Run on events (code commit, deployment)

6. **Assign Execution**
   - **Assignee**: Choose who should execute tests
   - **Team**: Assign to a team for distributed execution
   - **Self-assign**: Keep assigned to yourself

7. **Set Environment**
   - Select target environment: **Development**, **Staging**, **Production**
   - Configure environment-specific settings if needed

8. **Save and Activate**
   - Click **Save** to create the plan
   - Set status to **Active** to enable scheduling
   - Test runs will be created based on your schedule

### Best Practices

- **Link plans to milestones** - Track testing progress toward releases
- **Use appropriate schedules** - Smoke tests daily, regression weekly, full monthly
- **Assign based on expertise** - Frontend devs run UI tests, backend run API tests
- **Set clear environments** - Avoid confusion about where tests should run

### When to Use Test Plans vs. Suites

| Scenario | Use Test Plan | Use Suite |
|----------|---------------|-----------|
| Grouping related tests | No | Yes |
| Scheduling test runs | Yes | No |
| Assigning execution | Yes | No |
| Organizing for reporting | No | Yes |
| Tracking release progress | Yes | No |

Think of suites as playlists and plans as scheduled concerts. Suites organize content; plans organize execution.

### Related Concepts

- [Test Plans](/concepts/test-plans) - Understanding plan purpose and components
- [Test Suites](/concepts/test-suites) - Tests selected for plans
- [Milestones](/concepts/milestones) - Goals tracked via test plans

---

## Workflow 4: Organize Suites by Feature Area or Team

Structure your test suite hierarchy to match your application architecture or team structure.

### Steps to Organize by Feature Area

1. **Identify Major Features**
   - List your application's major features (e.g., Authentication, Billing, User Management, Reporting)
   - Each feature becomes a top-level suite

2. **Create Feature Suites**
   - Navigate to **Test Suites**
   - Click **+ New Suite** for each feature
   - Use clear names: "Authentication Tests", "Billing Tests", "User Management Tests"

3. **Create Sub-Features as Folders**
   - Inside each feature suite, create folders for sub-features
   - Example: Inside "Authentication Tests" create folders: "Login", "Registration", "Password Reset"

4. **Move Existing Suites**
   - If you have existing suites, drag them into the appropriate feature folder
   - Reorganize to match your feature structure

5. **Add Test Cases to Feature Suites**
   - Add test cases to the appropriate feature suite
   - A test case can belong to multiple feature suites if needed

### Steps to Organize by Team

1. **Identify Teams**
   - List teams responsible for testing (e.g., Frontend Team, Backend Team, QA Team)

2. **Create Team Suites**
   - Navigate to **Test Suites**
   - Create top-level suites for each team: "Frontend Team Tests", "Backend Team Tests"

3. **Create Sub-Suites by Feature**
   - Within each team suite, create feature-specific sub-suites
   - Example: Inside "Frontend Team Tests" create "UI Tests", "Accessibility Tests"

4. **Assign Ownership**
   - Set the **Owner** field on each suite to the appropriate team
   - This makes filtering and reporting by team easier

5. **Review and Adjust**
   - Verify each test case is owned by the appropriate team
   - Update test case ownership if needed

### Steps to Create a Hybrid Structure

1. **Primary Organization by Feature**
   - Create top-level suites by feature area
   - This is your main organizational structure

2. **Secondary Organization by Team**
   - Use tags to indicate team ownership (e.g., `team-frontend`, `team-backend`)
   - Filter by tag to view team-specific tests

3. **Use Folders for Hierarchical Organization**
   - Create folder structure: `Feature → Sub-feature → Test Type`
   - Example: `Billing → Invoices → UI Tests`

### Best Practices for Scalability

- **Start broad, then refine** - Create major feature suites first, add detail later
- **Use consistent naming** - Follow pattern like `[Feature] [Type] Tests`
- **Keep depth manageable** - Don't nest more than 3 levels deep
- **Document your structure** - Add descriptions to top-level suites explaining organization logic
- **Review quarterly** - Adjust structure as your application evolves

### Scalability Tips

- **Aim for 10-50 test cases per suite** - Too few = fragmentation, too many = unmanageable
- **Split growing suites** - When a suite exceeds 100 cases, consider splitting
- **Use folders, not just suites** - Folders help organize without creating full suites
- **Tag by dimension** - Use tags for cross-cutting concerns (priority, type, team)

---

## Workflow 5: Use Tags and Filters for Test Discovery

Apply tags to test cases and use filters to quickly find the tests you need.

### Steps to Add Tags to Test Cases

1. **Open Test Case for Editing**
   - Navigate to **Test Cases**
   - Click on the test case you want to tag
   - Click **Edit** button

2. **Add Tags**
   - Scroll to **Tags** field
   - Type tag name and press Enter to add
   - Add multiple tags as needed
   - Common tags: `smoke`, `regression`, `api`, `ui`, `critical`, `team-frontend`

3. **Save Changes**
   - Click **Save** to apply tags

### Steps to Bulk Add Tags

1. **Select Multiple Test Cases**
   - Go to **Test Cases** list view
   - Check boxes next to cases to tag
   - Use filters to find relevant cases first

2. **Use Bulk Edit**
   - Click **Bulk Actions** → **Edit Tags**
   - Type tags to add (or remove)
   - Click **Apply** to update all selected cases

### Steps to Filter Test Cases

1. **Open Filter Panel**
   - Navigate to **Test Cases**
   - Click **Filter** button (funnel icon)

2. **Apply Filters**
   - **By Tag**: Select one or more tags to show only matching tests
   - **By Priority**: Filter by critical, high, medium, low
   - **By Status**: Filter by draft, active, archived
   - **By Suite**: Show only tests in specific suites
   - **By Owner**: Filter by assigned owner

3. **Combine Filters**
   - Use multiple filters together for precise results
   - Example: `tag=smoke` AND `priority=critical` AND `suite=Authentication`

4. **Save Filter Preset**
   - After configuring filters, click **Save as Preset**
   - Name the preset (e.g., "Critical Smoke Tests")
   - Access preset quickly from filter dropdown

### Steps to Search Test Cases

1. **Use Search Bar**
   - Type in the search box at top of Test Cases list
   - Searches titles, descriptions, and step text
   - Results update as you type

2. **Use Advanced Search**
   - Click **Advanced Search** for more options
   - Search specific fields: title only, steps only, tags
   - Use operators: `AND`, `OR`, `NOT` for complex queries

### Tagging Strategy Examples

**By Test Type:**
- `smoke` - Quick sanity checks
- `regression` - Full feature coverage
- `integration` - API and database tests
- `e2e` - End-to-end user flows

**By Priority:**
- `critical` - Must pass for release
- `high` - Important but not blocking
- `medium` - Normal priority
- `low` - Nice to have

**By Team:**
- `team-frontend` - UI and component tests
- `team-backend` - API and service tests
- `team-qa` - Manual and exploratory tests

**By Feature:**
- `auth` - Authentication and authorization
- `billing` - Payment and invoicing
- `user-management` - User profiles and settings

### Best Practices

- **Use consistent tag names** - Establish tag conventions and document them
- **Don't over-tag** - 3-5 tags per test case is sufficient
- **Use lowercase tags** - Improves readability and reduces duplicates
- **Review tags regularly** - Remove unused tags, consolidate similar ones
- **Combine tags with filters** - Tags + filters = powerful test discovery

### Tips

- Tags are flexible - create any tags that make sense for your team
- Use filters to create custom views (e.g., "Show me all critical API tests")
- Filter presets save time for frequently used queries
- Search works across test case content, not just titles

### Related Concepts

- [Test Cases](/concepts/test-cases) - Test case structure and metadata
- [Test Suites](/concepts/test-suites) - Alternative organization by feature
