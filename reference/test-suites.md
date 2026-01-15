---
title: Test Suites
description: Complete UI reference for test suite management features
---

# Test Suites

Complete reference for all test suite UI elements, fields, actions, and behaviors in Qualflare.

## Test Suites List View

The test suites list view displays all test suites in your current project with hierarchical organization and bulk operations.

### Columns

| Column | Description | Click Action |
|--------|-------------|--------------|
| **Checkbox** | Select suite for bulk operations | Select/deselect for bulk actions |
| **Name** | Suite name (clickable link) | Opens suite detail view |
| **Path** | Folder hierarchy (e.g., Features/API) | Filter by folder |
| **Test Count** | Number of test cases in suite | Sort by test count |
| **Priority** | Default priority for tests in suite | Filter by priority |
| **Owner** | Assigned owner of the suite | Filter by owner |
| **Last Run** | Date and result of most recent suite execution | Sort by last run date |
| **Created** | Date suite was created | Sort by creation date |

### List View Actions

| Action | Location | Description |
|--------|----------|-------------|
| **+ New Suite** | Top right | Opens create suite form |
| **+ New Folder** | Top right dropdown | Creates folder for hierarchical organization |
| **Import** | Top right | Opens import wizard for bulk suite creation |
| **Export** | Top right | Exports suite structure and test cases to CSV/Excel |
| **Filter** | Top bar (funnel icon) | Opens filter panel |
| **Search** | Top bar (search box) | Searches suite names and descriptions |
| **View Toggle** | Top right | Switch between list view and folder tree view |
| **Bulk Actions** | Appears when suites selected | Apply operations to multiple suites |

### Bulk Actions Menu

| Action | Description | Confirmation Required |
|--------|-------------|----------------------|
| **Move to Folder** | Move selected suites to different folder | No |
| **Set Priority** | Change default priority for all selected | No |
| **Change Owner** | Reassign ownership of all selected | No |
| **Clone** | Create duplicates with copies of test cases | Yes |
| **Archive** | Move selected suites to archived status | Yes |
| **Delete** | Permanently delete selected suites and test cases | Yes |

### Filter Panel

| Filter Type | Options | Behavior |
|-------------|---------|----------|
| **Folder** | Folder hierarchy dropdown | Shows suites in selected folder(s) |
| **Priority** | Critical, High, Medium, Low | Shows suites with selected default priority |
| **Owner** | User dropdown | Shows suites owned by selected user(s) |
| **Test Count** | Range slider or min/max inputs | Shows suites within test count range |
| **Last Run** | Date range picker | Shows suites run within date range |
| **Created** | Date range picker | Shows suites created within date range |

### Folder Tree View

Alternative to list view showing hierarchical folder structure.

| Element | Description | Action |
|---------|-------------|--------|
| **Folder** | Collapsible container for suites | Click to expand/collapse |
| **Folder Actions** | Three dots on folder hover | Rename folder, delete folder, move folder |
| **Suite** | Listed under folders | Click to open suite detail |
| **Drag Handle** | Six-dot icon on suite/folder | Drag to reorder or move to different folder |

### Keyboard Shortcuts (List View)

| Shortcut | Action |
|----------|--------|
| `N` | Create new suite |
| `Shift + N` | Create new folder |
| `/` | Focus search box |
| `Ctrl/Cmd + A` | Select all visible suites |
| `Esc` | Clear selection |
| `Ctrl/Cmd + F` | Open filter panel |

---

## Test Suite Detail View

Detailed view of a single test suite with test case list and execution history.

### Header Section

| Element | Description |
|---------|-------------|
| **Name** | Suite name (clickable to edit) |
| **Path Breadcrumb** | Folder hierarchy with clickable links |
| **Edit Button** | Pencil icon - opens edit mode |
| **More Menu** | Three dots - clone, archive, delete, export |

### Suite Information Section

| Field | Type | Description |
|-------|------|-------------|
| **Description** | Rich text | What this suite covers and its purpose |
| **Default Priority** | Dropdown | Priority applied to new tests added to suite |
| **Owner** | User dropdown | Team or person responsible for suite |
| **Auto-apply Tags** | Tag input | Tags automatically added to tests in this suite |
| **Created** | Read-only timestamp | Date suite was created |
| **Last Modified** | Read-only timestamp | Date of last change |
| **Test Count** | Read-only count | Number of test cases in suite |

### Test Cases Section

| Column | Description | Click Action |
|--------|-------------|--------------|
| **Checkbox** | Select test case for bulk operations | Select/deselect |
| **Order** | Drag handle for reordering | Drag to reorder within suite |
| **Title** | Test case name (clickable link) | Opens test case detail |
| **ID** | Test case identifier | Opens test case detail |
| **Priority** | Test case priority badge | Filter by priority |
| **Status** | Draft, Active, Archived | Filter by status |

### Test Cases Actions

| Action | Location | Description |
|--------|----------|-------------|
| **+ Add Test Cases** | Top of section | Opens test case selector to add existing cases |
| **+ Create New Case** | Top of section | Opens create test case form (adds to this suite) |
| **Remove from Suite** | Checkbox selection → Remove button | Removes selected cases from suite (doesn't delete cases) |
| **Reorder** | Drag handles on each row | Drag to change execution order |
| **Reorder Alphabetically** | Dropdown → Sort A-Z | Auto-sort all cases alphabetically |
| **Reorder by Priority** | Dropdown → Sort by Priority | Auto-sort all cases by priority |

### Execution History Section

| Column | Description |
|--------|-------------|
| **Launch Name** | Name of the test run |
| **Environment** | Environment where suite was executed |
| **Date** | When the suite was run |
| **Result** | Pass rate or overall status |
| **Duration** | How long execution took |

### Suite Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Run Suite** | Top right, primary button | Execute all test cases in suite |
| **Edit** | Top right, pencil icon | Modify suite details |
| **Clone** | More menu | Create duplicate with test cases |
| **Archive** | More menu | Set suite to archived status |
| **Delete** | More menu | Permanently delete suite |
| **Export** | More menu | Export suite and test cases to file |

### Keyboard Shortcuts (Detail View)

| Shortcut | Action |
|----------|--------|
| `E` | Enter edit mode |
| `R` | Run suite |
| `A` | Add test cases to suite |
| `Ctrl/Cmd + S` | Save changes (edit mode only) |
| `Esc` | Cancel edit / close detail view |
| `Ctrl/Cmd + .` | Open more menu |

---

## Create/Edit Suite UI

Form for creating new test suites or editing existing ones.

### Form Fields

| Field | Type | Required | Character Limit | Description |
|-------|------|----------|-----------------|-------------|
| **Name** | Text input | Yes | 100 | Unique name for the suite |
| **Description** | Rich text editor | No | 2000 | Context about what this suite covers |
| **Folder/Path** | Folder dropdown or path input | No | 500 | Hierarchical location (e.g., Features/API) |
| **Default Priority** | Select dropdown | Yes | - | Priority for new tests (Critical, High, Medium, Low) |
| **Owner** | User dropdown | No | - | Team or person responsible |
| **Auto-apply Tags** | Tag input | No | 5 tags max | Tags automatically applied to tests in suite |

### Folder Selection

| Element | Description |
|---------|-------------|
| **Folder Dropdown** | Select from existing folders in project |
| **Path Input** | Type custom path using forward slashes (e.g., `API/User`) |
| **New Folder Creation** | Type new folder name in path to create automatically |
| **Root** | Leave blank to place at project root |

### Form Validation

| Field | Validation Rule | Error Message |
|-------|-----------------|---------------|
| **Name** | Required, unique within folder | "Name is required and must be unique in this folder" |
| **Name** | Max 100 characters | "Name exceeds 100 character limit" |
| **Path** | Valid folder path format | "Invalid folder path format. Use forward slashes." |
| **Tags** | Maximum 5 auto-apply tags | "Cannot exceed 5 auto-apply tags" |

### Save Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Save** | Bottom right, primary button | Save and close form |
| **Save & Add Cases** | Bottom right, secondary button | Save and open test case selector |
| **Cancel** | Bottom right, text link | Discard changes and close |

---

## Test Case Management in Suites

### Add Test Cases to Suite

**Access**: Suite detail view → "+ Add Test Cases"

**Behavior**:
1. Opens test case selector modal
2. Search or filter to find test cases
3. Check boxes for cases to add
4. Click "Add" to add to suite
5. Cases appear in suite's test case list

**Options**:
- **Search**: Search by title, ID, or tag
- **Filters**: Filter by priority, status, existing suites
- **Select All**: Add all filtered results

**Confirmation**: None

---

### Remove Test Cases from Suite

**Access**: Suite detail view → Check cases → "Remove from Suite"

**Behavior**:
- Removes selected test cases from suite
- Test cases are NOT deleted from project
- Cases remain in other suites they belong to

**Confirmation**: Yes - "Remove X test cases from this suite? Cases will not be deleted."

---

### Reorder Test Cases in Suite

**Methods**:

**Drag and Drop**:
1. Hover over test case row
2. Click and hold drag handle (six-dot icon)
3. Drag to new position
4. Release to drop

**Bulk Reorder**:
1. Check multiple test cases
2. Drag any selected case
3. All selected cases move together

**Auto-Sort**:
- Click "Sort A-Z" to alphabetize
- Click "Sort by Priority" to order Critical → Low
- Auto-sort applies to all cases in suite

**Confirmation**: None (changes save automatically)

---

### Bulk Add Test Cases

**Access**: Test cases list view → Select cases → Bulk Actions → "Add to Suite"

**Behavior**:
1. Select multiple test cases from list
2. Click "Bulk Actions" → "Add to Suite"
3. Choose destination suite(s) from multi-select dropdown
4. Click "Add" to process
5. All selected cases added to chosen suites

**Options**:
- **Single Suite**: Add to one suite
- **Multiple Suites**: Add to several suites at once

**Confirmation**: None

---

### Bulk Remove Test Cases

**Access**: Suite detail view → Test Cases section → Select cases → "Remove from Suite"

**Behavior**:
1. Check boxes for cases to remove
2. Click "Remove from Suite" button
3. Confirm removal
4. Cases removed from this suite only

**Confirmation**: Yes

---

## Suite Actions Reference

### Run Suite

**Access**: Suite detail view → "Run Suite" button

**Behavior**:
- Creates new launch with all test cases in suite
- Executes cases in suite order
- Opens execution monitoring view
- Records results for each case

**Options**:
- **Environment**: Choose target environment
- **Assignee**: Select who should execute (for manual testing)
- **Milestone**: Link to release milestone

**Confirmation**: None

---

### Clone Suite

**Access**: Suite detail view → More menu → "Clone"

**Behavior**:
1. Opens clone configuration modal
2. Enter new name (default: "Copy of [suite name]")
3. Choose destination folder
4. Select clone options:
   - **Copy test cases**: Duplicates all test cases
   - **Reference test cases**: Links to existing test cases (shared)
5. Click "Clone" to create

**Confirmation**: None (can delete if unwanted)

**Clone Options**:

| Option | Description | Use Case |
|--------|-------------|----------|
| **Copy Test Cases** | Creates duplicate test cases | Testing similar features with variations |
| **Reference Test Cases** | Links to existing cases | Multiple suites running same tests |

---

### Archive Suite

**Access**: Suite detail view → More menu → "Archive"

**Behavior**:
- Changes suite status to Archived
- Hides from active suite views
- Test cases remain available in other suites
- Can be restored by changing status back to Active

**Confirmation**: Yes - "Archive this suite? It will be hidden from active views but test cases will remain available."

---

### Delete Suite

**Access**: Suite detail view → More menu → "Delete"

**Behavior**:
- Permanently removes suite
- **Choose what happens to test cases**:
  - **Delete all test cases**: Removes cases from project
  - **Keep test cases**: Cases remain in project (and other suites)
- Action logged in audit trail

**Confirmation**: Yes - "Delete this suite? Choose what to do with test cases."

---

### Export Suite

**Access**: Suite detail view → More menu → "Export"

**Behavior**:
- Opens export options modal
- Choose format: CSV, Excel, PDF, or JSON
- Select content:
  - **Suite structure only**: Folders and suite names
  - **Include test cases**: Full test case details
  - **Include execution history**: Past run results
- Download file or save to cloud storage

**Confirmation**: None

---

## Drag-Drop Reordering Behavior

### Visual Feedback

| State | Visual Indicator |
|-------|------------------|
| **Dragging** | Semi-transparent ghost of dragged item |
| **Drop Target** | Blue line shows insertion point |
| **Between Items** | Horizontal line appears between rows |
| **Over Folder** | Folder highlights when hovering |

### Drop Zones

| Zone | Behavior |
|------|----------|
| **Between rows** | Insert at that position |
| **Top of list** | Insert as first item |
| **Bottom of list** | Append to end |
| **Over folder** | Move to that folder |

### Constraints

- **Cannot drag to different suite**: Use "Remove" then "Add" instead
- **Cannot drag from archived suite**: Unarchive first
- **Bulk drag**: Multiple selected items move together

---

## Suite-Level vs Project-Level Organization

### Suite-Level Organization

**Purpose**: Group related test cases together

**Characteristics**:
- Test cases can belong to multiple suites
- Suites define execution order
- Suites have folder hierarchy
- Each suite has default priority and auto-apply tags

**Use Cases**:
- Feature-based grouping (Authentication, Billing)
- Test-type grouping (Smoke, Regression, Integration)
- Team-based grouping (Frontend Tests, Backend Tests)

---

### Project-Level Organization

**Purpose**: Logical separation of test areas

**Characteristics**:
- Folders provide hierarchical structure
- Path indicates location (e.g., `Features/API/Users`)
- Folders can contain multiple suites
- Visual organization in tree view

**Use Cases**:
- Multi-feature applications (Features/Auth, Features/Billing)
- Layer-based organization (UI/, API/, Database/)
- Component-based organization (Components/Header, Components/Sidebar)

---

### Hybrid Approach

**Best Practice**: Use folders for project-level structure, suites for test grouping

**Example Structure**:
```
Features/
  Authentication/
    Login Smoke Tests (suite)
    Login Regression Tests (suite)
    Registration Tests (suite)
  Billing/
    Payment Tests (suite)
    Invoice Tests (suite)
```

**Benefits**:
- Clear visual hierarchy
- Flexible test case assignment
- Easy navigation and discovery
- Scalable to large projects

---

## Related Concepts

- [Test Suites Concept](/concepts/test-suites) - Understanding suite purpose and organization
- [Test Cases](/concepts/test-cases) - Individual tests organized into suites
- [Test Plans](/concepts/test-plans) - Scheduling suite execution

## Related How-to Guides

- [Organizing Tests](/how-to/test-organization) - Creating suites and organizing test cases
- [Executing Tests](/how-to/test-execution) - Running suites and viewing results
