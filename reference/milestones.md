---
title: Milestones
---

# Milestones

Comprehensive reference for milestone tracking and quality gate management in Qualflare.

## Overview

Milestones represent significant testing checkpoints such as releases, sprint completions, or quality gates. They provide visibility into testing progress, defect resolution, and release readiness.

## Milestone List View

The milestones list provides an overview of all milestones in the current project.

### Columns

| Column | Description |
|--------|-------------|
| **Name** | Milestone identifier (e.g., "v2.0 Release", "Sprint 24") |
| **Target Date** | Planned completion date |
| **Status** | Current milestone state with color indicator |
| **Test Progress** | Pass rate percentage (passed / total tests) |
| **Defect Count** | Open defects by severity |
| **Completion** | Overall progress percentage |

### Status Indicators

| Status | Color | Icon | Description |
|--------|-------|------|-------------|
| **Planned** | Gray | 📋 | Future milestone, not yet started |
| **Active** | Blue | 🔄 | Currently being tracked |
| **Completed** | Green | ✅ | All quality gates met |
| **Overdue** | Red | ⚠️ | Target date passed, not complete |

### Filters

Filter milestones by:

- **Status**: Planned, Active, Completed, Overdue
- **Date Range**: Target date within range
- **Tags**: Custom labels (e.g., "release", "sprint", "quarterly")
- **Created Date**: When milestone was created

### Sorting

Sort by any column:
- **Target Date**: See upcoming milestones first
- **Status**: Group by milestone state
- **Completion**: Most or least complete first
- **Name**: Alphabetical order

### Quick Actions

Hover over any milestone row to reveal:
- **View**: Open milestone detail page
- **Edit**: Quick edit name, target date, status
- **Mark Complete**: Change status to Completed
- **Clone**: Create copy with same tests and gates
- **Delete**: Remove milestone (requires confirmation)

## Milestone Detail View

The milestone detail page displays comprehensive progress tracking for a single milestone.

### Header Section

| Field | Description |
|-------|-------------|
| **Name** | Milestone identifier |
| **Status Badge** | Current state with color indicator |
| **Target Date** | Planned completion date |
| **Days Remaining** | Countdown to target date (or days overdue) |
| **Creator** | User who created the milestone |
| **Created Date** | When milestone was created |

### Progress Summary

Key metrics displayed prominently:

| Metric | Description |
|--------|-------------|
| **Overall Progress** | Combined score of test coverage, pass rate, and defect resolution |
| **Test Coverage** | Percentage of required tests that have been executed |
| **Pass Rate** | Percentage of executed tests that passed |
| **Open Defects** | Count by severity (critical, high, medium, low) |
| **Quality Gates** | Number of gates passed / total gates |

### Progress Visualizations

#### Trend Chart

Line chart showing progress over time:

- **X-axis**: Timeline from milestone creation to target date
- **Y-axis**: Pass rate percentage (0-100%)
- **Line colors**:
  - Blue: Actual pass rate
  - Gray: Target pass rate (if quality gate configured)
- **Data points**: Daily snapshots of test execution

#### Defect Burndown

Bar chart showing defect counts over time:

- **X-axis**: Timeline
- **Y-axis**: Open defect count
- **Stacked bars**: Critical (red), High (orange), Medium (yellow), Low (green)
- **Trend line**: Shows overall defect reduction

#### Coverage Pie Chart

Visual breakdown of test execution status:

- **Green**: Passed tests
- **Red**: Failed tests
- **Gray**: Not executed
- **Yellow**: Skipped

### Included Tests Section

Lists all tests associated with the milestone.

#### Test List Columns

| Column | Description |
|--------|-------------|
| **Test Case** | Name of the test |
| **Suite** | Parent test suite (if any) |
| **Last Run** | Most recent execution date |
| **Last Result** | Pass/Fail status of last run |
| **Environment** | Test environment used |
| **Linked Defects** | Count of defects from this test |

#### Test Actions

- **Add Tests**: Add more tests to the milestone
- **Remove Tests**: Unlink tests from milestone
- **Run All**: Execute all included tests
- **Run Failed**: Re-run only failed tests
- **View Details**: Open test case detail page

### Linked Defects Section

Shows all defects associated with the milestone.

#### Defect List Columns

| Column | Description |
|--------|-------------|
| **Defect ID** | Unique identifier (e.g., DEF-123) |
| **Title** | Summary of the issue |
| **Severity** | Impact level with color coding |
| **Status** | Current lifecycle state |
| **Assignee** | User responsible for fix |
| **Linked Tests** | Which test failures discovered this bug |

#### Defect Actions

- **Filter by Severity**: Show only critical/high defects
- **Filter by Status**: Show only open defects
- **Add Defects**: Link existing defects to milestone
- **Unlink Defects**: Remove defect from milestone
- **Export**: Export defect list as CSV

### Quality Gates Section

Configured quality thresholds that must be met for milestone completion.

#### Gate Display

Each gate shows:

| Field | Description |
|-------|-------------|
| **Gate Name** | Identifier (e.g., "Minimum Pass Rate") |
| **Threshold** | Required value (e.g., "95%") |
| **Current Value** | Actual value (e.g., "92%") |
| **Status** | <span style="color: #16a34a;">✔ Met</span> or <span style="color: #dc2626;">✘ Not Met</span> |
| **Trend** | Improving (↑), Stable (→), Declining (↓) |

#### Gate Types

| Gate Type | Description | Example Threshold |
|-----------|-------------|-------------------|
| **Pass Rate** | Minimum percentage of passing tests | 95% |
| **Coverage** | Minimum percentage of tests executed | 100% |
| **Critical Defects** | Maximum count of open critical defects | 0 |
| **High Defects** | Maximum count of open high-severity defects | 5 |
| **Defect Resolution** | Minimum percentage of resolved defects | 80% |

### Execution History

Timeline of test launches related to the milestone.

| Column | Description |
|--------|-------------|
| **Launch Name** | Name of test execution |
| **Date** | When the launch was run |
| **Environment** | Test environment |
| **Tests Run** | Number of tests executed |
| **Pass Rate** | Percentage of passing tests |
| **Duration** | How long the launch took |

Click any launch to view detailed results.

## Create/Edit Milestone UI

### Creating a New Milestone

**Access from**: Milestones list → Click "New Milestone" button

**Required Fields**:
- **Name**: Clear milestone identifier

**Optional Fields**:
- **Description**: Purpose and context
- **Target Date**: Planned completion date
- **Tags**: Labels for organization
- **Quality Gates**: Configured thresholds

### Field Descriptions

#### Name

- **Maximum Length**: 100 characters
- **Examples**: "v2.0 Release", "Sprint 24", "Q1 GA", "Production Readiness"
- **Best Practice**: Include version or sprint number

#### Description

- **Format**: Multi-line text
- **Purpose**: Explain milestone goals, scope, and context
- **No length limit**

#### Target Date

- **Format**: Date picker
- **Validation**: Must be future date for new milestones
- **Timezone**: Uses workspace timezone setting

#### Tags

- Free-text labels for organization
- Separate multiple tags with commas
- Common uses: release, sprint, quarterly, hotfix
- No predefined tags - create as needed

### Test Selection

After creating the milestone, add tests:

#### Add Individual Tests

1. Click "Add Tests" button
2. Search and select test cases
3. Filter by suite, tags, or custom criteria
4. Click "Add Selected Tests"

#### Add from Test Suites

1. Click "Add Tests" → "From Suite"
2. Select test suite(s)
3. Choose to add:
   - All tests in suite
   - Specific tests within suite
4. Click "Add"

#### Add from Test Plans

1. Click "Add Tests" → "From Test Plan"
2. Select test plan
3. All tests in plan are added to milestone
4. Click "Add"

#### Bulk Add

Select multiple items across suites and plans:
- Use filters to narrow down
- Select checkboxes
- Add all at once

### Quality Gate Configuration

Configure thresholds that must be met for completion.

#### Adding Quality Gates

1. Click "Add Quality Gate" button
2. Select gate type from dropdown
3. Set threshold value
4. Configure additional options (if applicable)
5. Click "Save Gate"

#### Gate Configuration Options

| Gate Type | Configuration Options |
|-----------|----------------------|
| **Pass Rate** | Minimum percentage (0-100%), include/exclude skipped |
| **Coverage** | Minimum percentage (0-100%) |
| **Critical Defects** | Maximum count (0 or higher) |
| **High Defects** | Maximum count (0 or higher) |
| **Defect Resolution** | Minimum percentage (0-100%) |

#### Gate Severity

Each gate can be marked as:
- **Blocking**: Milestone cannot complete if gate not met
- **Warning**: Display warning but allow completion
- **Informational**: For tracking only, no impact on completion

### Editing an Existing Milestone

**Access**: Click "Edit" button on milestone detail page

All fields are editable except:
- **Creator**: Read-only
- **Created Date**: Read-only

**Auto-Save**: Drafts are saved automatically every 30 seconds

## Milestone Actions

Available actions depend on milestone status and user permissions.

### Mark Complete

**When**: All quality gates are met (or warning gates acknowledged)

**Steps**:
1. Click "Mark Complete" button
2. Review quality gate status
3. For unmet warning gates, acknowledge with reason
4. Optional: Add completion notes
5. Click "Complete Milestone"

**Result**:
- Status changes to Completed
- Completion date recorded
- Progress snapshot saved
- Notification sent to stakeholders

**Validation**:
- All blocking gates must be met
- Target date may be in the past (overdue allowed)
- Requires milestone edit permission

### Reopen

**When**: Completed milestone needs to be active again

**Steps**:
1. Click "Reopen" button (available on Completed milestones)
2. Optional: Add new target date
3. Required: Add explanation
4. Click "Reopen Milestone"

**Result**:
- Status changes to Active
- Previous completion date archived
- Quality gates re-evaluated
- Activity logged

**Common Reasons**:
- New defects found after completion
- Additional testing required
- Release postponed

### Clone

**When**: Creating similar milestone with same configuration

**Steps**:
1. Click "Clone" button
2. Edit cloned milestone details:
   - Name (auto-prefixed with "Copy of")
   - Target date
   - Tests (same as original)
   - Quality gates (same as original)
3. Click "Create Milestone"

**Result**:
- New milestone created with identical configuration
- Original milestone unchanged
- Tests and gates copied (not linked)

**Use Cases**:
- Recurring sprint milestones
- Similar release criteria
- Template for future milestones

### Archive

**When**: Milestone is old and no longer relevant

**Steps**:
1. Click "Archive" button
2. Confirm archival
3. Optional: Add reason

**Result**:
- Milestone hidden from default views
- Still accessible via "Show Archived" filter
- No longer counts in active metrics
- Data preserved for historical reporting

**Best For**:
- Old releases
- Completed sprints
- Historical milestones

### Delete

**When**: Milestone was created in error or is no longer needed

**Steps**:
1. Click "Delete" button
2. Confirm deletion
3. Type milestone name to confirm
4. Click "Delete Permanently"

**Result**:
- Milestone and all data permanently removed
- Tests remain (not deleted)
- Defects remain (not deleted)
- Cannot be undone

**Restrictions**:
- Cannot delete Active milestones
- Cannot delete Completed milestones less than 30 days old
- Requires milestone delete permission

### Generate Report

**When**: Creating stakeholder communication or archival documentation

**Steps**:
1. Click "Generate Report" button
2. Select report type:
   - Executive Summary (1 page)
   - Detailed Report (all metrics and trends)
   - Slide Deck (PowerPoint/PDF with charts)
3. Choose format: PDF or HTML
4. Click "Generate"

**Result**:
- Report generated with current milestone data
- Includes all charts and visualizations
- Available for download or sharing
- Generated report does not auto-update

**Report Contents**:
- Milestone overview and goals
- Progress metrics and trends
- Quality gate status
- Test coverage breakdown
- Defect summary by severity
- Execution history timeline

## Progress Tracking UI

### Real-Time Updates

Milestone progress updates automatically as tests execute:

- **Live Pass Rate**: Updates as case runs complete
- **Defect Counts**: Refresh when defects change
- **Gate Status**: Recalculated on each data change
- **Trend Charts**: New data points added daily

### Progress Calculation Methods

#### Overall Progress

Combined score of three factors:

```
Overall Progress = (Coverage Score × 0.3) + (Pass Rate Score × 0.4) + (Defect Score × 0.3)
```

**Component Scores**:
- **Coverage Score**: Tests executed / Total tests
- **Pass Rate Score**: Tests passed / Tests executed
- **Defect Score**: Weighted defect resolution (critical defects have higher impact)

#### Test Coverage

```
Coverage = (Executed Tests / Total Included Tests) × 100
```

- **Executed**: Tests with at least one case run
- **Total**: All tests added to milestone
- **Minimum**: 0%, **Maximum**: 100%

#### Pass Rate

```
Pass Rate = (Passed Tests / Executed Tests) × 100
```

- **Passed**: Most recent case run result
- **Executed**: Tests with at least one case run
- **Minimum**: 0%, **Maximum**: 100%
- **Skipped Tests**: Excluded from calculation by default

#### Defect Progress

Defect resolution score based on severity weights:

| Severity | Weight |
|----------|--------|
| **Critical** | 4 points |
| **High** | 3 points |
| **Medium** | 2 points |
| **Low** | 1 point |

```
Defect Score = 1 - (Current Weighted Count / Initial Weighted Count)
```

- **Initial Count**: Snapshot when milestone created
- **Current Count**: Open defects at time of calculation
- **Higher Score**: Better (more defects resolved)

### Trend Visualization

#### Pass Rate Trend

Line chart showing test success over time:

- **Data Points**: Daily snapshots at midnight
- **Interpolation**: Lines connect daily points
- **Projection**: Dotted line shows trend to target date

#### Defect Trend

Stacked bar chart showing defect counts:

- **Daily Snapshots**: Open defects at end of each day
- **Stacked by Severity**: Critical on top, low on bottom
- **Trend Line**: Shows total defect count over time

#### Velocity Metrics

Track how quickly progress is made:

| Metric | Description |
|--------|-------------|
| **Tests per Day** | Average tests executed (last 7 days) |
| **Defects per Day** | Average defects resolved (last 7 days) |
| **Days to Target** | Estimated days until completion (based on current velocity) |
| **On Track?** | Yes/No based on velocity comparison to required rate |

## Quality Gates

### Gate Status Indicators

Each gate displays its current status:

| Status | Icon | Color | Meaning |
|--------|------|-------|---------|
| **Met** | ✔ | Green | Current value meets or exceeds threshold |
| **Not Met** | ✘ | Red | Current value below threshold |
| **Pending** | ⏳ | Gray | Insufficient data to evaluate |
| **Warning** | ⚠ | Yellow | Gate not met but marked as warning only |

### Gate Evaluation

Gates are evaluated when:
- A test case run completes
- A defect status changes
- A defect is linked/unlinked
- Manually triggered (Refresh button)

**Evaluation Logic**:
```
If Gate Type == Pass Rate:
    If (PassedTests / ExecutedTests) >= Threshold:
        Status = Met
    Else:
        Status = Not Met
```

### Gate Configuration Examples

#### Release Readiness Gates

| Gate | Threshold | Severity |
|------|-----------|----------|
| Pass Rate | 95% | Blocking |
| Coverage | 100% | Blocking |
| Critical Defects | 0 | Blocking |
| High Defects | 3 | Warning |

#### Sprint Completion Gates

| Gate | Threshold | Severity |
|------|-----------|----------|
| Pass Rate | 90% | Blocking |
| Coverage | 90% | Warning |
| Critical Defects | 0 | Blocking |
| High Defects | 5 | Warning |

#### Quality Gates for Staging

| Gate | Threshold | Severity |
|------|-----------|----------|
| Pass Rate | 98% | Blocking |
| Coverage | 100% | Blocking |
| Critical Defects | 0 | Blocking |
| High Defects | 0 | Blocking |
| Medium Defects | 2 | Warning |

### Gate Trend Analysis

Each gate shows trend direction:

| Trend | Icon | Meaning |
|-------|------|---------|
| **Improving** | ↑ | Value moving toward threshold |
| **Stable** | → | Value consistent (within 2% variance) |
| **Declining** | ↓ | Value moving away from threshold |
| **Unknown** | ? | Insufficient data for trend calculation |

**Trend Calculation**:
- Compares current value to value 7 days ago
- Requires at least 3 data points
- Updates daily

## Charts and Visualizations

### Chart Types

#### Trend Line Chart

**Purpose**: Show progress over time

**Used For**:
- Pass rate trend
- Defect count trend
- Coverage growth

**Features**:
- X-axis: Timeline
- Y-axis: Percentage or count
- Hover for exact values
- Click to zoom in on time period

#### Pie Chart

**Purpose**: Show distribution at a point in time

**Used For**:
- Test execution status (passed/failed/skipped/not run)
- Defect severity distribution

**Features**:
- Color-coded segments
- Percentage labels
- Click segment to filter list

#### Bar Chart

**Purpose**: Compare values across categories

**Used For**:
- Defects by component
- Test results by suite
- Execution history by launch

**Features**:
- Horizontal or vertical orientation
- Stacked bars for subcategories
- Color coding by status

#### Progress Bar

**Purpose**: Quick visual indicator of completion

**Used For**:
- Overall milestone progress
- Individual gate progress
- Test coverage

**Features**:
- Color: Green (on track), Yellow (at risk), Red (behind)
- Percentage label
- Animated on updates

### Chart Interactions

**Common Interactions**:
- **Hover**: Show exact values and timestamps
- **Click**: Drill down to detailed data
- **Zoom**: Expand time range (line charts)
- **Filter**: Click legend items to show/hide (pie/bar charts)
- **Export**: Download as PNG or SVG

## Milestone Status Indicators

### Status Flow

```
Planned → Active → Completed
          ↓
       Overdue
```

### Planned Status

**Description**: Future milestone, not yet started

**Automatically transitions to Active**:
- Target date arrives, OR
- First test is executed

**Available Actions**:
- Edit all fields
- Add/remove tests
- Configure quality gates
- Delete (if no test executions)

### Active Status

**Description**: Currently being tracked, tests executing

**Automatically transitions to**:
- **Completed**: When manually marked complete
- **Overdue**: When target date passes (if not complete)

**Available Actions**:
- Execute tests
- Link defects
- Update quality gates
- Mark complete
- Edit most fields

### Completed Status

**Description**: All quality gates met, milestone finished

**Available Actions**:
- View all data (read-only)
- Reopen (makes Active again)
- Generate reports
- Archive (after 30 days)

### Overdue Status

**Description**: Target date passed, not yet complete

**Automatically transitions to**:
- **Active**: If tests are still executing
- **Completed**: When marked complete

**Visual Indicators**:
- Red status badge
- Days overdue shown (negative number)
- Warning icon in milestone list

**Available Actions**:
- All Active actions available
- Update target date (removes overdue status)

## Test and Defect Association

### Test Association

**Adding Tests to Milestones**:

Methods:
1. **Manual Selection**: Add individual test cases
2. **From Suite**: Add all or selected tests from a suite
3. **From Plan**: Add all tests from a test plan
4. **Clone**: Copy tests from another milestone

**Test Display in Milestone**:
- Test name and suite
- Last execution result
- Last execution date
- Linked defect count

**Removing Tests from Milestones**:
- Click "Remove" on test row
- Confirm removal
- Test remains in system (not deleted)
- Historical test results preserved

### Defect Association

**Linking Defects to Milestones**:

Methods:
1. **From Defect**: Select milestone in defect edit form
2. **From Milestone**: Add existing defects via "Link Defects"
3. **Auto-link**: Defects created from failed tests in milestone launches

**Defect Display in Milestone**:
- Defect ID and title
- Severity with color coding
- Current status
- Assignee
- Source test (if created from failure)

**Unlinking Defects from Milestones**:
- Click "Unlink" on defect row
- Confirm unlink
- Defect remains in system (not deleted)
- Historical data preserved

### Association Behavior

**Test Execution Impact**:
- When a test linked to milestone executes, milestone progress updates
- Pass rate recalculated
- Coverage increases
- New defects linked to milestone if created from failures

**Defect Status Impact**:
- When linked defect status changes, defect score recalculates
- Resolved defects improve defect score
- New defects decrease defect score
- Critical defects have highest impact

**Double Association**:
- A test can be in multiple milestones
- A defect can be linked to multiple milestones
- Each milestone tracks independently

## Related Features

- [Milestones Concept](/concepts/milestones) - Understanding milestone structure and use cases
- [Defects Reference](/reference/defects) - Tracking defects toward milestone completion
- [Track Defects Guide](/how-to/defect-tracking#workflow-5-track-defects-related-to-specific-milestones) - Linking defects to milestones
- [Test Plans](/concepts/test-plans) - Tests contributing to milestones
- [Launches](/reference/launches) - Test runs tracking toward milestones
