---
title: Test Cases
description: Complete UI reference for test case management features
---

# Test Cases

Complete reference for all test case UI elements, fields, actions, and behaviors in Qualflare.

## Test Cases List View

The test cases list view displays all test cases in your current project with filtering, sorting, and bulk operations.

### Columns

| Column | Description | Click Action |
|--------|-------------|--------------|
| **Checkbox** | Select test case for bulk operations | Select/deselect for bulk actions |
| **Title** | Test case name (clickable link) | Opens test case detail view |
| **ID** | Unique test case identifier (TC-001, TC-002, etc.) | Opens test case detail view |
| **Status** | Draft, Active, or Archived | Filter by status |
| **Priority** | Critical, High, Medium, Low | Filter by priority |
| **Tags** | Labels for categorization (e.g., auth, smoke, api) | Filter by tag |
| **Automation** | Manual, Automated, or Partial | Filter by automation status |
| **Suite Count** | Number of suites this case belongs to | Filter by suite membership |
| **Last Run** | Date and result of most recent execution | Sort by last run date |
| **Owner** | Assigned owner of the test case | Filter by owner |
| **Created** | Date test case was created | Sort by creation date |

### List View Actions

| Action | Location | Description |
|--------|----------|-------------|
| **+ New Test Case** | Top right | Opens create test case form |
| **Import** | Top right | Opens CSV import wizard for bulk creation |
| **Export** | Top right | Exports visible test cases to CSV/Excel |
| **Filter** | Top bar (funnel icon) | Opens filter panel |
| **Search** | Top bar (search box) | Searches titles, descriptions, step text |
| **Bulk Actions** | Appears when items selected | Apply operations to multiple test cases |
| **Column Selector** | Top right (gear icon) | Choose which columns to display |

### Bulk Actions Menu

| Action | Description | Confirmation Required |
|--------|-------------|----------------------|
| **Add to Suite** | Add selected cases to one or more suites | No |
| **Set Priority** | Change priority for all selected | No |
| **Add Tags** | Add tags to all selected | No |
| **Remove Tags** | Remove tags from all selected | No |
| **Change Owner** | Reassign ownership | No |
| **Set Status** | Change to Draft, Active, or Archived | No |
| **Clone** | Create duplicates of selected cases | Yes |
| **Archive** | Move selected cases to archived status | Yes |
| **Delete** | Permanently delete selected cases | Yes |

### Filter Panel

Filters can be combined (AND logic) for precise queries.

| Filter Type | Options | Behavior |
|-------------|---------|----------|
| **Status** | Draft, Active, Archived | Shows only selected statuses |
| **Priority** | Critical, High, Medium, Low | Shows only selected priorities |
| **Tags** | Multi-select dropdown | Shows cases with ANY selected tag |
| **Automation** | Manual, Automated, Partial | Shows only selected automation types |
| **Suite** | Dropdown of all suites | Shows cases in selected suite(s) |
| **Owner** | User dropdown | Shows cases owned by selected user(s) |
| **Last Run** | Date range picker | Shows cases run within date range |
| **Created** | Date range picker | Shows cases created within date range |

### Keyboard Shortcuts (List View)

| Shortcut | Action |
|----------|--------|
| `N` | Create new test case |
| `/` | Focus search box |
| `Ctrl/Cmd + A` | Select all visible test cases |
| `Esc` | Clear selection |
| `Ctrl/Cmd + F` | Open filter panel |

---

## Test Case Detail View

Detailed view of a single test case with all fields, steps, and actions.

### Header Section

| Element | Description |
|---------|-------------|
| **Title** | Test case name (clickable to edit) |
| **ID Badge** | Unique identifier (TC-XXX) |
| **Status Badge** | Draft (gray), Active (green), Archived (gray) |
| **Priority Badge** | Critical (red), High (orange), Medium (yellow), Low (blue) |
| **Automation Badge** | Manual, Automated, Partial |
| **Edit Button** | Pencil icon - opens edit mode |
| **More Menu** | Three dots - clone, archive, delete, history |

### Test Case Fields

| Field | Type | Max Length | Required | Validation |
|-------|------|------------|----------|------------|
| **Title** | Text | 200 characters | Yes | Must be unique within project |
| **Description** | Rich text | 5000 characters | No | Supports Markdown |
| **Priority** | Dropdown | - | Yes | Critical, High, Medium, Low |
| **Status** | Dropdown | - | Yes | Draft, Active, Archived |
| **Tags** | Multi-select | 10 tags max | No | Auto-complete from existing tags |
| **Automation Status** | Dropdown | - | Yes | Manual, Automated, Partial |
| **Owner** | User dropdown | - | No | Defaults to creator |
| **Suite Membership** | Read-only | - | - | Shows all suites containing this case |

### Steps Section

| Element | Description |
|---------|-------------|
| **Step Number** | Auto-incremented (1, 2, 3...) |
| **Step Action** | Text field describing the action (1000 char max) |
| **Expected Result** | Text field describing expected outcome (1000 char max) |
| **Drag Handle** | Six-dot icon for reordering |
| **Delete Button** | X icon to remove step |
| **+ Add Step** | Button to add new step at end |
| **+ Insert Step** | Dropdown to insert after specific step |
| **+ Add Shared Step** | Insert reusable step from shared steps library |

### Step Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Edit Step** | Click in step text field | Edit step action or expected result |
| **Reorder Steps** | Drag six-dot handle | Move step to new position |
| **Delete Step** | Click X icon | Remove step (requires confirmation) |
| **Insert Step** | Click + between steps | Add new step at that position |
| **Insert Shared Step** | Click "Add Shared Step" | Insert from shared steps library |

### Related Section

| Element | Description |
|---------|-------------|
| **Suites** | List of all suites containing this test case |
| **Recent Runs** | Last 5 executions with results and dates |
| **Linked Defects** | Defects associated with failed runs |
| **Comments** | Discussion thread for this test case |
| **History** | Version history with timestamps and authors |

### Detail View Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Run Test** | Top right | Execute this test case immediately |
| **Clone** | More menu | Create duplicate of this test case |
| **Add to Suite** | More menu | Add to one or more suites |
| **Archive** | More menu | Set status to Archived |
| **Delete** | More menu | Permanently delete test case |
| **View History** | More menu | Show version history |
| **Print/Export** | More menu | Export test case to PDF |

### Keyboard Shortcuts (Detail View)

| Shortcut | Action |
|----------|--------|
| `E` | Enter edit mode |
| `R` | Run test case |
| `Ctrl/Cmd + S` | Save changes (edit mode only) |
| `Esc` | Cancel edit / close detail view |
| `Ctrl/Cmd + .` | Open more menu |

---

## Create/Edit Test Case UI

Form for creating new test cases or editing existing ones.

### Form Fields

| Field | Type | Required | Character Limit | Description |
|-------|------|----------|-----------------|-------------|
| **Title** | Text input | Yes | 200 | Unique name for the test case |
| **Description** | Rich text editor | No | 5000 | Context about what and why |
| **Priority** | Select dropdown | Yes | - | Critical, High, Medium, Low |
| **Status** | Select dropdown | Yes | - | Draft, Active, Archived |
| **Automation Status** | Select dropdown | Yes | - | Manual, Automated, Partial |
| **Tags** | Tag input | No | 10 tags max | Labels for categorization |
| **Owner** | User dropdown | No | - | Assigned owner |

### Steps Editor

| Element | Description | Limit |
|---------|-------------|-------|
| **Step Action** | Rich text field for step instructions | 1000 characters |
| **Expected Result** | Rich text field for expected outcome | 1000 characters |
| **Step Count** | Maximum steps per test case | 100 steps |

### Steps Editor Actions

| Action | Description |
|--------|-------------|
| **+ Add Step** | Add new step at the end of the list |
| **+ Insert After** | Insert new step after current step |
| **Insert Shared Step** | Insert from shared steps library |
| **Duplicate Step** | Copy step and insert after original |
| **Delete Step** | Remove step from test case |
| **Reorder** | Drag steps to rearrange order |

### Form Validation

| Field | Validation Rule | Error Message |
|-------|-----------------|---------------|
| **Title** | Required, unique within project | "Title is required and must be unique" |
| **Title** | Max 200 characters | "Title exceeds 200 character limit" |
| **Step Action** | Max 1000 characters per step | "Step exceeds 1000 character limit" |
| **Steps Count** | Maximum 100 steps per case | "Cannot exceed 100 steps per test case" |
| **Tags** | Maximum 10 tags | "Cannot exceed 10 tags" |

### Save Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Save** | Bottom right, primary button | Save and close form |
| **Save & New** | Bottom right, secondary button | Save and open new blank form |
| **Cancel** | Bottom right, text link | Discard changes and close |

---

## Test Case Actions Reference

### Run Test Case

**Access**: Detail view → "Run Test" button or list view → More menu

**Behavior**:
- Creates new case run in current environment
- Opens test execution interface
- Sets status to "In Progress"
- Records start timestamp

**Confirmation**: None (immediate action)

---

### Clone Test Case

**Access**: Detail view → More menu → "Clone" or list view → Bulk Actions → "Clone"

**Behavior**:
- Creates duplicate with "Copy of" prefix in title
- Copies all steps, tags, and priority
- Sets status to Draft
- Opens cloned case in edit mode

**Options**:
- **Single clone**: Immediate, no configuration
- **Bulk clone**: Choose destination project, add prefix/suffix to titles

**Confirmation**: None (can delete if unwanted)

---

### Add to Suite

**Access**: Detail view → More menu → "Add to Suite" or list view → Bulk Actions → "Add to Suite"

**Behavior**:
- Opens suite selector modal
- Multi-select from available suites
- Search to filter suites
- Test case appears in selected suites immediately

**Confirmation**: None (can remove from suite later)

---

### Archive Test Case

**Access**: Detail view → More menu → "Archive" or list view → Bulk Actions → "Archive"

**Behavior**:
- Changes status to Archived
- Removes from all active test suite views
- Preserved in history and reporting
- Can be restored by changing status back to Active

**Confirmation**: Yes - "Archive this test case? It will be hidden from active views."

---

### Delete Test Case

**Access**: Detail view → More menu → "Delete" or list view → Bulk Actions → "Delete"

**Behavior**:
- Permanently removes test case
- Removes from all test suites
- Execution history is preserved (case shown as deleted)
- Action is logged in audit trail

**Confirmation**: Yes - "Delete this test case? This action cannot be undone."

---

### Assign Owner

**Access**: Edit form or Bulk Actions → "Change Owner"

**Behavior**:
- Sets ownership to selected user
- Owner receives notification
- Filterable by owner in list view

**Confirmation**: None

---

### View History

**Access**: Detail view → More menu → "View History"

**Behavior**:
- Opens version history panel
- Shows timestamp, author, and change summary for each version
- Click version to view diff
- Option to revert to previous version

---

## Field Types and Validation

### Title Field

- **Type**: Text input
- **Max Length**: 200 characters
- **Required**: Yes
- **Unique**: Yes (within project)
- **Valid Characters**: Letters, numbers, spaces, hyphens, underscores, parentheses
- **Invalid Characters**: Special characters like `<`, `>`, `&`

### Description Field

- **Type**: Rich text editor (Markdown supported)
- **Max Length**: 5000 characters
- **Required**: No
- **Supported Markdown**: Bold, italic, links, lists, code blocks
- **Unsupported**: Images, HTML

### Priority Field

- **Type**: Select dropdown
- **Options**: Critical, High, Medium, Low
- **Default**: Medium
- **Required**: Yes

### Tags Field

- **Type**: Multi-select with auto-complete
- **Max Tags**: 10 per test case
- **Tag Length**: 50 characters max per tag
- **Valid Characters**: Letters, numbers, hyphens
- **Invalid**: Spaces (use hyphens instead)

### Step Action Field

- **Type**: Rich text editor
- **Max Length**: 1000 characters per step
- **Max Steps**: 100 per test case
- **Required**: At least one step required to save

### Expected Result Field

- **Type**: Rich text editor
- **Max Length**: 1000 characters per step
- **Required**: No, but recommended for each step

---

## Related Concepts

- [Test Cases Concept](/concepts/test-cases) - Understanding test case structure and lifecycle
- [Test Suites](/concepts/test-suites) - Organizing test cases into suites
- [Shared Steps](/concepts/shared-steps) - Reusable test steps

## Related How-to Guides

- [Creating Test Cases](/how-to/test-creation) - Step-by-step workflows for creating and managing test cases
- [Organizing Tests](/how-to/test-organization) - Adding test cases to suites and using tags
