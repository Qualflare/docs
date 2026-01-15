---
title: Creating Test Cases
description: Step-by-step guides for creating and managing test cases in Qualflare
---

# Creating Test Cases

Learn how to create, edit, and manage test cases in Qualflare. Each workflow below includes step-by-step instructions with UI navigation.

## Workflow 1: Create Your First Test Case

Create a basic test case with numbered steps and expected results.

### Steps

1. **Navigate to Test Cases**
   - Click **Test Cases** in the left sidebar
   - Click the **+ New Test Case** button in the top right

2. **Enter Test Case Details**
   - **Title**: Enter a clear, descriptive name (e.g., "User Login with Valid Credentials")
   - **Description**: Add context about what you're testing and why

3. **Add Test Steps**
   - Click **+ Add Step** to create your first step
   - Enter the action (e.g., "Navigate to the login page")
   - Repeat for each step in your test

4. **Define Expected Result**
   - In the **Expected Result** field, describe what should happen
   - Be specific: "User is redirected to dashboard with profile visible"

5. **Set Priority and Tags**
   - Select priority: **Critical**, **High**, **Medium**, or **Low**
   - Add tags for filtering (e.g., `auth`, `smoke`, `regression`)

6. **Save the Test Case**
   - Click **Save** to create the test case
   - The test case is now in **Draft** status

### Best Practices

- **Use clear, action-oriented step titles** starting with verbs: "Click", "Enter", "Navigate"
- **One action per step** - Don't combine multiple actions in a single step
- **Be specific in expected results** - Avoid vague statements like "it works"
- **Include test data** - Specify exact values to use (e.g., "Enter email: test@example.com")

### Related Concepts

- [Test Cases](/concepts/test-cases) - Understanding test case structure and lifecycle
- [Shared Steps](/concepts/shared-steps) - Reusing common test steps

---

## Workflow 2: Edit and Manage Existing Test Cases

Update test cases to fix errors, add steps, or change priorities.

### Steps

1. **Open the Test Case**
   - Navigate to **Test Cases** in the sidebar
   - Click on the test case you want to edit

2. **Edit Test Details**
   - Click the **Edit** button (pencil icon) in the top right
   - Modify title, description, priority, or tags as needed

3. **Add, Remove, or Reorder Steps**
   - **Add step**: Click **+ Add Step** at the bottom
   - **Remove step**: Click the **X** next to the step number
   - **Reorder**: Drag the step handle (six-dot icon) to move steps

4. **Change Step Content**
   - Click in the step text field to edit the action
   - Update the expected result if needed

5. **Save Changes**
   - Click **Save** to apply your changes
   - Changes are saved immediately with a timestamp

6. **View Version History**
   - Click **History** to see past versions
   - Compare changes between versions
   - Revert to a previous version if needed

### Best Practices

- **Review test cases before execution** - Ensure steps are accurate and current
- **Update when features change** - Keep tests aligned with application behavior
- **Use version history for audits** - Track who changed what and when
- **Archive instead of deleting** - Keep historical tests for reference

### Tips

- You can edit multiple test cases using **bulk edit** from the test cases list view
- Changes to shared steps affect all test cases using them - review carefully
- Set test cases to **Draft** status while editing to prevent accidental execution

---

## Workflow 3: Use Shared Steps in Test Cases

Reuse common test steps across multiple test cases to save time and improve consistency.

### Steps

1. **Access Shared Steps Library**
   - Navigate to **Shared Steps** in the left sidebar
   - Browse existing shared steps or create a new one

2. **Create a Shared Step (if needed)**
   - Click **+ New Shared Step**
   - Enter a name (e.g., "User Login")
   - Add steps as you would in a test case
   - Define parameters for dynamic values using `{parameter_name}` syntax

3. **Add Shared Step to Test Case**
   - Open or create a test case
   - Click **+ Add Shared Step** button
   - Select the shared step from the dropdown

4. **Provide Parameter Values**
   - If the shared step has parameters, enter values
   - Example: For `{email}`, enter `test@example.com`

5. **Position the Shared Step**
   - Drag the shared step to the correct position in your test flow
   - Shared steps appear as a single step in your test case

6. **Save the Test Case**
   - Click **Save** to confirm

### Best Practices

- **Identify repeatable patterns** - Login, navigation, data creation are good candidates
- **Keep shared steps focused** - Each should do one thing well
- **Use parameters for flexibility** - Make shared steps adaptable to different contexts
- **Document parameter requirements** - Clearly explain what each parameter expects

### Common Shared Step Examples

- **Authentication**: Login, logout, password reset
- **Navigation**: Go to dashboard, open settings, navigate to profile
- **Data Setup**: Create test user, add product to cart, generate order
- **Cleanup**: Delete test data, clear cache, reset settings

### Related Concepts

- [Shared Steps](/concepts/shared-steps) - Understanding shared step parameters and reuse

---

## Workflow 4: Bulk Import Test Cases from CSV/Spreadsheets

Import many test cases at once from CSV files exported from spreadsheets or other test management tools.

### Steps

1. **Prepare Your CSV File**
   - Create a CSV with these columns: `Title`, `Description`, `Steps`, `Expected Result`, `Priority`, `Tags`
   - Use commas to separate multiple steps: `Step 1, Step 2, Step 3`
   - Save as UTF-8 encoded CSV

2. **Navigate to Import**
   - Go to **Test Cases** in the sidebar
   - Click **Import** button (top right)

3. **Upload Your CSV**
   - Click **Choose File** and select your CSV
   - Review the column mapping preview
   - Adjust column mappings if needed

4. **Review Import Preview**
   - Verify that test case data is correctly parsed
   - Check for formatting errors or missing required fields
   - Resolve any validation warnings

5. **Choose Import Options**
   - **Create new test cases** - Import as new tests
   - **Update existing** - Match by title and update
   - **Skip duplicates** - Don't import if title exists

6. **Execute Import**
   - Click **Import** to process
   - Wait for confirmation - large files may take a few minutes

7. **Review Imported Tests**
   - Check the import summary for errors
   - Navigate to Test Cases to review imported items
   - Fix any issues identified during import

### CSV Template Example

```csv
Title,Description,Steps,Expected Result,Priority,Tags
User Login,Verify login works,Navigate to /login,Enter email,Enter password,Click submit,Redirected to dashboard,Critical,auth
User Logout,Verify logout works,Navigate to profile,Click logout,Returned to login page,High,auth
```

### Best Practices

- **Test with a small batch first** - Import 5-10 test cases to verify formatting
- **Use consistent naming conventions** - Makes imports and updates predictable
- **Validate CSV encoding** - Ensure UTF-8 to avoid character issues
- **Backup before bulk updates** - If updating existing tests, export a backup first

### Troubleshooting

- **Import fails**: Check CSV encoding (must be UTF-8) and column headers
- **Steps not parsing correctly**: Ensure step separator character matches your setting
- **Duplicate warnings**: Titles must be unique within a project

---

## Workflow 5: Clone and Template Test Cases for Efficiency

Create similar test cases quickly by cloning existing ones or using templates.

### Steps to Clone a Test Case

1. **Select Test Case to Clone**
   - Navigate to **Test Cases** in the sidebar
   - Click on the test case you want to copy

2. **Clone the Test Case**
   - Click the **More** menu (three dots)
   - Select **Clone**

3. **Edit the Cloned Test Case**
   - A new test case opens with "Copy of" prefix
   - Update the title to be descriptive
   - Modify steps or expected results as needed
   - Adjust priority and tags

4. **Save the Clone**
   - Click **Save** to create the new test case

### Steps to Create a Template

1. **Create Template Test Case**
   - Write a test case with the structure you'll reuse
   - Use generic titles and parameterized steps
   - Add "Template" tag for easy filtering

2. **Clone from Template**
   - Find your template in Test Cases (filter by "Template" tag)
   - Clone the template
   - Customize for your specific test scenario

### Steps to Bulk Clone

1. **Select Multiple Test Cases**
   - Go to **Test Cases** list view
   - Check the boxes next to test cases you want to clone
   - Click **Bulk Actions** → **Clone Selected**

2. **Configure Bulk Clone**
   - Choose destination (same project or different project)
   - Add prefix or suffix to titles (e.g., "v2 - ")
   - Select which fields to copy: steps, tags, priority

3. **Execute Clone**
   - Click **Clone** to process
   - Review the cloned test cases in the list

### Best Practices

- **Create templates for common patterns** - CRUD tests, form validations, authentication flows
- **Use consistent naming** - Templates should have clear, descriptive names
- **Document template variations** - Add notes explaining when to use each template
- **Review templates regularly** - Update templates as your application evolves

### When to Clone vs. Create New

- **Clone**: When creating similar tests with minor variations
- **Create New**: When testing a completely different feature or scenario
- **Template + Clone**: When you need to create many similar tests over time

### Tips

- Clone is faster than copy-paste - preserves structure and formatting
- Use bulk clone for test case versioning (e.g., create "v2" tests for a new feature)
- Templates can include placeholder steps to remind authors what to customize
