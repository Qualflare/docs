---
title: Search & Filter
---

# Search & Filter

Comprehensive reference for search, advanced queries, and filtering capabilities in Qualflare.

## Global Search UI

The Global Search bar is your primary tool for finding tests, launches, defects, and other entities across Qualflare.

### Search Bar Location

- **Top navigation bar** (always visible)
- Keyboard shortcut: **Cmd+K** (Mac) or **Ctrl+K** (Windows/Linux)
- Placeholder text: "Search tests, launches, defects..."

### Search Bar Features

**Autocomplete:**
- Suggests matching entities as you type
- Shows entity type icon (test, launch, defect, milestone)
- Displays entity title and path
- Use arrow keys to navigate, Enter to select

**Scope Selection:**
- Dropdown next to search bar
- Options: All, This Project, Current Workspace
- Affects which results appear in autocomplete

**Recent Searches:**
- Click in search bar to see recent queries
- Click recent search to re-run
- Hover and click X to remove from history

**Search Button:**
- Press Enter or click magnifying glass
- Opens full search results page

### Search Input Behavior

**Minimum Characters:**
- Autocomplete activates after 2 characters
- Full search available with 1+ characters

**Debounce:**
- Autocomplete waits 300ms after typing stops
- Reduces unnecessary API calls

**Special Characters:**
- Wildcards (*, ?) supported
- Quotes for phrase searches
- Escape special characters with backslash (\)

---

## Search Results View

After submitting a search, the results page displays matching entities grouped by type.

### Results Page Layout

**Header Section:**
- Search query display (editable)
- Result count (e.g., "23 results found")
- Sort options dropdown
- Filter toggle button

**Results Groups:**
- **Test Cases** section (if matches found)
- **Launches** section (if matches found)
- **Defects** section (if matches found)
- **Milestones** section (if matches found)

**Each Result Item:**
- Entity type icon
- Title (highlighted matching terms)
- Path/Context (project, suite, folder)
- Status badge
- Last modified date
- Relevance score (hidden, affects sort order)

### Result Grouping

**By Type (Default):**
- Results grouped into sections by entity type
- Sections collapse/expand
- Shows count per type

**By Project:**
- Results grouped by project
- Sub-groups by entity type
- Useful for multi-project searches

**By Date:**
- Results grouped by time period
- Today, Yesterday, This Week, This Month, Older
- Useful for finding recent activity

### Search Highlighting

**Title Matches:**
- Bold text with yellow background
- Shows up to 50 characters before and after match

**Content Matches:**
- Matches in test steps, descriptions, comments
- Shows context snippet (150 characters)
- Multiple matches separated by ellipsis

**Field-Specific Matches:**
- Labels: Tag icon with match
- Assignee: User avatar with match
- Status: Status badge with match

### Relevance Scoring

**Factors Affecting Relevance:**
- Title match > Content match
- Exact phrase match > Partial word match
- Multiple matches > Single match
- Recent activity > Older activity
- Status (Active > Closed/Archived)

**Sort by Relevance (Default):**
- Highest relevance first
- Within same relevance, most recent first

---

## Advanced Search Builders

Use advanced search syntax for precise queries and complex filtering.

### Query Syntax Overview

**Basic Search:**
```
login test
```
Finds entities containing "login" OR "test" in title or content

**Phrase Search:**
```
"user authentication flow"
```
Finds exact phrase in quotes

**AND Operator:**
```
login AND authentication
```
Finds entities containing BOTH terms

**OR Operator:**
```
login OR signin
```
Finds entities containing EITHER term

**NOT Operator:**
```
login NOT failed
```
Finds entities with "login" but NOT "failed"

**Grouping:**
```
(login OR signin) AND authentication
```
Complex queries with parentheses

**Wildcards:**
```
test*
```
Finds "test", "tests", "testing", "tester"

```
test???
```
Question mark matches single character (exactly 3 chars after "test")

### Field-Specific Searches

**Search by Title:**
```
title:login
```
Only searches entity titles

```
title:"user profile"
```
Exact phrase in title

**Search by Status:**
```
status:failed
```
Finds entities with "failed" status

```
status:passed OR status:skipped
```
Multiple statuses

**Search by Assignee:**
```
assignee:john
```
Finds entities assigned to user with "john" in name

```
assignee:@me
```
Finds entities assigned to you

**Search by Labels:**
```
label:smoke
```
Finds entities with "smoke" label

```
label:regression AND label:p1
```
Multiple labels (AND)

```
label:(smoke OR sanity)
```
Multiple labels (OR)

**Search by Priority:**
```
priority:p0
```
Finds P0 priority tests/defects

```
priority:p1 OR priority:p2
```
P1 or P2 priority

**Search by Suite:**
```
suite:authentication
```
Finds tests in "authentication" suite

**Search by Environment:**
```
env:production
```
Finds launches from production environment

**Search by Date:**
```
created:>2024-01-01
```
Created after January 1, 2024

```
updated:>=2024-01-01
```
Updated on or after January 1, 2024

```
created:<2024-01-01
```
Created before January 1, 2024

```
created:2024-01
```
Created in January 2024

**Search by Milestone:**
```
milestone:v2.0
```
Finds entities linked to "v2.0" milestone

### Boolean Operator Examples

**Complex Query:**
```
(title:login OR title:signin) AND status:failed AND assignee:@me
```
Finds failed login/signin tests assigned to you

**Defect Search:**
```
type:defect AND (severity:critical OR severity:high) AND status:open
```
Finds open critical/high severity defects

**Launch Search:**
```
type:launch AND env:production AND created:>=2024-01-01
```
Finds production launches since January 2024

**Excluding Terms:**
```
test NOT (skipped OR blocked)
```
Finds tests that aren't skipped or blocked

### Advanced Query Builder UI

1. Click "Advanced Search" on results page
2. Query builder opens with:
   - Field dropdown (title, status, assignee, labels, etc.)
   - Operator dropdown (contains, equals, >, <, etc.)
   - Value input field
   - AND/OR button to add conditions
   - Remove button for each condition

**Builder Features:**
- Visual representation of query
- Add/remove condition groups
- Preview generated search syntax
- Save query as saved search

---

## Filter Panels

Filter panels provide structured filtering for each entity type.

### Test Filters

**Filter Bar Location:**
- Test Cases page, below header
- "Filters" button to expand/collapse panel
- Active filters shown as badges

**Filter Categories:**

**Status Filter:**
- All, Passed, Failed, Skipped, Blocked
- Multi-select (checkboxes)
- Apply button

**Priority Filter:**
- P0, P1, P2, P3
- Multi-select

**Suite Filter:**
- Tree view of test suites
- Expand/collapse branches
- Multi-select

**Labels Filter:**
- List of all labels in project
- Search within labels
- Multi-select

**Assignee Filter:**
- List of project members
- Search by name
- Multi-select

**Created Date Filter:**
- Date range picker
- Presets: Today, Yesterday, This Week, This Month, Custom

**Custom Field Filters:**
- Shows project-specific custom fields
- Filter types depend on field type:
  - Text: Contains, Equals
  - Number: >, <, =, Range
  - Date: Before, After, Range
  - Select: Multi-select options

**Filter Actions:**
- Apply: Apply selected filters
- Clear All: Remove all filters
- Save as Filter Set: Name and save current filter combination

### Launch Filters

**Filter Categories:**

**Status Filter:**
- All, Completed, Running, Failed, Cancelled

**Environment Filter:**
- dev, staging, production, custom environments
- Multi-select

**Source Filter:**
- Manual, CLI, Scheduled, API

**Created Date Filter:**
- Date range picker
- Presets available

**Pass Rate Filter:**
- Greater than: 0-100%
- Less than: 0-100%
- Range selection

**Duration Filter:**
- Faster than: X minutes
- Slower than: X minutes

**Milestone Filter:**
- Select from active milestones
- Multi-select

### Defect Filters

**Filter Categories:**

**Status Filter:**
- Open, In Progress, Resolved, Closed
- Multi-select

**Severity Filter:**
- Critical, High, Medium, Low
- Multi-select

**Priority Filter:**
- P0, P1, P2, P3
- Multi-select

**Assignee Filter:**
- Filter by assigned user
- "Unassigned" option

**Reporter Filter:**
- Filter by who created defect
- Multi-select

**Labels Filter:**
- Filter by defect labels
- Multi-select

**Milestone Filter:**
- Filter by linked milestone
- Multi-select

**Created Date Filter:**
- Date range picker

**Updated Date Filter:**
- Filter by last activity

**Resolved Date Filter:**
- Filter by resolution date

### Filter Combinations and Behaviors

**Multi-Select Behavior:**
- Within category: OR logic (e.g., P0 OR P1)
- Between categories: AND logic (e.g., P0 AND High Severity)

**Filter Validation:**
- Conflicting filters show warning
- Example: Pass rate > 90% AND Pass rate < 50%

**Filter Persistence:**
- Filters persist during session
- Clear on navigation away from page
- Saved filter sets restore filters

**Active Filter Display:**
- Badges show active filters
- Click X on badge to remove individual filter
- "Clear All" removes all filters

---

## Sort Options

Change the order of results to prioritize what matters most.

### Test Sort Options

**Sort By:**
- **Relevance** (default when searching)
- **Title (A-Z)**
- **Title (Z-A)**
- **Priority** (P0 first)
- **Status** (Passed, Failed, Skipped, Blocked)
- **Created Date** (newest first)
- **Updated Date** (newest first)
- **Execution Date** (most recently run first)
- **Pass Rate** (highest first)
- **Duration** (fastest first)

**Secondary Sort:**
- Results with equal primary sort value use secondary sort
- Default secondary: Created Date (newest first)

### Launch Sort Options

**Sort By:**
- **Relevance** (default when searching)
- **Created Date** (newest first)
- **Pass Rate** (highest first)
- **Duration** (fastest first)
- **Test Count** (most tests first)
- **Environment** (alphabetical)
- **Status** (Completed, Running, Failed, Cancelled)

### Defect Sort Options

**Sort By:**
- **Relevance** (default when searching)
- **Created Date** (newest first)
- **Updated Date** (newest first)
- **Severity** (Critical, High, Medium, Low)
- **Priority** (P0, P1, P2, P3)
- **Status** (Open, In Progress, Resolved, Closed)
- **Assignee** (alphabetical)

### Custom Sorting

**Multi-Column Sort:**
1. Apply first sort (e.g., by Severity)
2. Hold Shift key
3. Click second sort column (e.g., by Created Date)
4. Results sorted by severity, then by date within same severity

**Sort Persistence:**
- Sort preference persists during session
- Resets to default when filters change
- Saved filter sets include sort preference

---

## Saved Searches UI

Save frequently used queries and filter combinations for quick access.

### Creating Saved Searches

**From Search Results:**
1. Run search query
2. Click "Save Search" button
3. Enter saved search name
4. Optional: Add description
5. Choose visibility:
   - Personal: Only you
   - Team: All project members
6. Click "Save"

**From Filter Panel:**
1. Apply desired filters
2. Click "Save as Filter Set"
3. Enter name
4. Choose visibility
5. Click "Save"

### Managing Saved Searches

**Saved Searches Panel:**
- Access from sidebar or search bar
- Shows list of your saved searches
- Shows shared team searches
- Badge shows count of results

**Saved Search Actions:**
- **Run**: Click to apply search/filters
- **Edit**: Modify name, description, visibility
- **Duplicate**: Create copy with new name
- **Delete**: Remove saved search
- **Share**: Generate share link (team searches)

### Editing Saved Searches

1. Open saved searches panel
2. Hover over saved search
3. Click "Edit" (pencil icon)
4. Modify:
   - Name
   - Description
   - Visibility
   - Filters/query (advanced)
5. Click "Save Changes"

### Deleting Saved Searches

1. Open saved searches panel
2. Hover over saved search
3. Click "Delete" (trash icon)
4. Confirm deletion
5. Cannot be undone

**Note:** Deleting a saved search does NOT affect the entities it finds, only the saved query itself.

### Sharing Saved Searches

**Team Saved Searches:**
- Visible to all project members
- Created by anyone with Team visibility
- Show creator name
- Editable by creator and project admins

**Share Link:**
1. Open saved search
2. Click "Share" button
3. Copy share URL
4. Recipients must have project access

**Permissions:**
- **Personal**: Only creator can view and edit
- **Team**: All project members can view, only creator can edit

---

## Keyboard Shortcuts

### Global Shortcuts

| Shortcut | Action |
|----------|--------|
| **Cmd/Ctrl+K** | Open global search |
| **Esc** | Close search/results |
| **Cmd/Ctrl+F** | Open filter panel |
| **Cmd/Ctrl+Shift+F** | Clear all filters |

### Search Navigation

| Shortcut | Action |
|----------|--------|
| **Tab** | Move to next search result |
| **Shift+Tab** | Move to previous result |
| **Enter** | Open selected result |
| **Arrow Keys** | Navigate results in autocomplete |
| **Cmd/Ctrl+Enter** | Open result in new tab |

### Filter Panel Shortcuts

| Shortcut | Action |
|----------|--------|
| **Cmd/Ctrl+F** | Focus first filter input |
| **Tab** | Move to next filter field |
| **Shift+Tab** | Move to previous filter |
| **Space** | Toggle checkbox |
| **Enter** | Apply filters |
| **Esc** | Close filter panel |

---

## Search Operators Reference

### Boolean Operators

| Operator | Description | Example |
|----------|-------------|---------|
| **AND** | Both terms must be present | `login AND authentication` |
| **OR** | Either term must be present | `login OR signin` |
| **NOT** | Term must not be present | `login NOT failed` |
| **()** | Group operators | `(login OR signin) AND authentication` |

### Field Operators

| Operator | Description | Example |
|----------|-------------|---------|
| **:** | Field contains value | `title:login` |
| **:** | Field equals value (exact) | `status:failed` |
| **>** | Greater than | `created:>2024-01-01` |
| **>=** | Greater than or equal | `priority:>=p1` |
| **<** | Less than | `created:<2024-01-01` |
| **<=** | Less than or equal | `priority:<=p2` |

### Wildcard Operators

| Operator | Description | Example | Matches |
|----------|-------------|---------|---------|
| ***** | Any number of characters | `test*` | test, tests, testing, tester |
| **?** | Single character | `test?` | test1, testA, test? |
| **[]** | Character set | `test[123]` | test1, test2, test3 |
| **[-]** | Character range | `test[a-c]` | testa, testb, testc |

### Special Characters

| Character | Purpose | Example |
|-----------|---------|---------|
| **""** | Phrase search | `"user login"` |
| **\** | Escape special char | `test\*` (literal asterisk) |
| **-** | Exclude term | `login -failed` |

---

## Search Tips and Best Practices

### Effective Search Strategies

**Start Broad, Then Narrow:**
1. Search for general term: `authentication`
2. Review results
3. Add filters: `status:failed`, `priority:p0`
4. Add specific terms: `authentication login`

**Use Field-Specific Searches:**
- Faster than general search
- More precise results
- Example: `title:login` vs. `login`

**Combine Filters with Search:**
- Use search for content matching
- Use filters for metadata (status, priority, assignee)
- Example: Search `login` + Filter `status:failed` + Filter `suite:auth`

**Save Frequently Used Queries:**
- Recreate complex searches as saved searches
- Share with team members
- Name descriptively: "Failed P0 Login Tests"

### Common Search Patterns

**Find My Failed Tests:**
```
status:failed AND assignee:@me
```

**Find Flaky Tests:**
```
status:failed AND updated:>=2024-01-01
```
Then look for tests with mixed pass/fail history

**Find Critical Defects:**
```
type:defect AND severity:critical AND status:open
```

**Find Recent Production Launches:**
```
type:launch AND env:production AND created:>=2024-01-01
```

**Find Tests for Specific Feature:**
```
title:payment OR label:payment
```

### Troubleshooting Search Issues

**Too Many Results:**
- Add more specific terms
- Use field-specific searches
- Add filters
- Use phrase searches with quotes

**Too Few Results:**
- Remove filters
- Use OR operator
- Use wildcards
- Check for typos

**Unexpected Results:**
- Check operator precedence (use parentheses)
- Verify field names
- Check for unintended NOT operators
- Clear filters and start fresh

**Slow Search Performance:**
- Use more specific queries
- Filter by date range
- Use field-specific searches
- Avoid overly broad wildcards (e.g., `a*`)

---

## Related Topics

- [Reporting Test Results](/how-to/test-reporting) - Filter and drill down into failures
- [Analyze Quality Metrics](/how-to/analytics) - Use search to investigate trends
- [Dashboards](/reference/dashboards) - Visualize filtered data
- [Test Cases](/concepts/test-cases) - Understanding test structure for better searching
- [Defects](/concepts/defects) - Defect fields and metadata for filtering
