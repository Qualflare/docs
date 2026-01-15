---
title: Launches
---

# Launches

Comprehensive reference for the launch execution UI in Qualflare. Launches are test execution events that capture the results of running tests.

## Launch List View

The launch list view displays all test executions in a project, providing at-a-glance status and quick access to detailed results.

### Columns

| Column | Description |
|--------|-------------|
| **Launch Name** | Name of the test execution (auto-generated or user-defined) |
| **Status** | Current execution state with visual indicator |
| **Environment** | Target environment (dev, staging, production, custom) |
| **Duration** | Total execution time in HH:MM:SS format |
| **Pass Rate** | Percentage of passed tests (e.g., "95%") |
| **Tests** | Total test count with pass/fail breakdown (e.g., "45/50") |
| **Created** | Timestamp when the launch was created |
| **Source** | Execution source (Manual or CLI) |

### Status Indicators

| Status | Visual | Meaning |
|--------|--------|---------|
| **Running** | Blue spinner with animated ring | Tests are currently executing |
| **Completed** | Green checkmark | All tests finished with results |
| **Failed** | Red X | Launch encountered a system error (not test failures) |
| **Stopped** | Yellow square | Execution was manually stopped |

### Sorting

- **Default**: Created date (newest first)
- **Available sort options**: Launch name, status, duration, pass rate, created date
- **Multi-column sort**: Hold Shift + click to sort by multiple columns

### Filters

| Filter | Options |
|--------|---------|
| **Status** | Running, Completed, Failed, Stopped |
| **Environment** | All configured environments in the project |
| **Source** | Manual, CLI |
| **Date Range** | Last 24 hours, 7 days, 30 days, custom range |
| **Pass Rate** | All, 100%, 80-99%, 50-79%, 0-49% |

### Bulk Actions

Select multiple launches using the checkboxes to perform bulk operations:

- **Archive**: Move selected launches to archive (removes from default view)
- **Delete**: Permanently delete selected launches (requires confirmation)
- **Export**: Export multiple launches as CSV or JSON
- **Tag**: Apply tags to selected launches for organization

---

## Launch Detail View

Click any launch in the list to view its detail page with comprehensive execution information.

### Header Section

#### Launch Information
- **Launch Name**: Editable name of the execution
- **Launch ID**: Unique identifier (e.g., "LNCH-1234")
- **Environment**: Target environment with icon
- **Source**: Manual or CLI with build metadata
- **Created**: Creation timestamp
- **Duration**: Total execution time
- **Assignee**: User responsible for the launch (if applicable)

#### Progress Indicators

**For Running Launches:**
- **Circular Progress Ring**: Shows percentage of tests completed
- **Live Counter**: "15/50 tests completed"
- **Estimated Time Remaining**: Calculated based on average test duration
- **Active Tests**: Number of tests currently running

**For Completed Launches:**
- **Final Status Badge**: Completed, Failed, or Stopped
- **Total Duration**: Final execution time
- **Completion Timestamp**: When the launch finished

#### Statistics Cards

| Metric | Description |
|--------|-------------|
| **Total Tests** | Number of test cases executed |
| **Passed** | Count and percentage of passed tests |
| **Failed** | Count and percentage of failed tests |
| **Skipped** | Count and percentage of skipped tests |
| **Blocked** | Count and percentage of blocked tests |
| **Pass Rate** | Overall pass rate as percentage |
| **Trend** | Comparison to previous launch (up/down arrow with percentage change) |

### Case Runs List

The main table shows individual test results within the launch.

#### Table Columns

| Column | Description |
|--------|-------------|
| **Test Case** | Test case title with ID link |
| **Status** | Result status with colored badge |
| **Duration** | Individual test execution time |
| **Assignee** | User who executed the test |
| **Failures** | Number of failed steps (for failed tests) |
| **Actions** | Quick action buttons (view, retry, link defect) |

#### Case Run Status Indicators

| Status | Visual | Description |
|--------|--------|-------------|
| **Passed** | Green badge with checkmark | Test executed successfully |
| **Failed** | Red badge with X | Test failed with error |
| **Skipped** | Gray badge with dash | Test was not executed |
| **Blocked** | Yellow badge with warning | Test could not run |
| **Running** | Blue badge with spinner | Test is currently executing |

#### Filtering Case Runs

- **Status Filter**: Show only passed, failed, skipped, or blocked tests
- **Suite Filter**: Filter by test suite
- **Assignee Filter**: Filter by who executed the test
- **Search**: Search by test case title or ID
- **Duration Filter**: Show tests longer/shorter than specified time

#### Sorting Case Runs

- **Default**: Test execution order
- **Sort options**: Status, duration, test case name
- **Failed first**: Button to prioritize failed tests at the top

---

## Case Run Detail View

Click any test case in the case runs list to view its detailed execution results.

### Header Information

- **Test Case Title**: Name of the executed test
- **Test Case ID**: Unique identifier
- **Status**: Final result status with colored badge
- **Duration**: Time taken to execute
- **Executed By**: User who ran the test (for manual tests)
- **Execution Time**: Timestamp when the test ran
- **Environment**: Target environment
- **Retry Count**: Number of times this test was retried

### Test Steps Section

For manual tests, displays each step with its result:

#### Step Status Indicators

| Status | Visual | Meaning |
|--------|--------|---------|
| **Passed** | Green checkmark | Step completed successfully |
| **Failed** | Red X | Step failed |
| **Skipped** | Gray dash | Step was skipped |
| **Not Run** | Gray circle | Step not yet executed |

#### Step Details

Each step shows:
- **Step Number**: Sequential order
- **Step Description**: What the step tests
- **Expected Result**: What should happen
- **Actual Result**: What actually happened (editable for manual tests)
- **Status**: Step result status
- **Attachments**: Screenshots, logs, or files
- **Comments**: Notes or observations

### Failure Details Section

For failed tests, displays comprehensive failure information:

#### Failure Message
- **Primary Error**: Main error message (prominently displayed)
- **Error Code**: Error identifier if available
- **Error Type**: Category of error (assertion, timeout, exception, etc.)

#### Stack Trace
- **Full Stack Trace**: Complete call stack (for automated tests)
- **Collapsed by Default**: Click to expand
- **Syntax Highlighted**: Color-coded for readability
- **Copy Button**: Copy stack trace to clipboard

#### Attachments
- **Screenshots**: Visual evidence of the failure state
- **Logs**: Test execution logs
- **Error Files**: Additional error artifacts
- **Download All**: Bundle all attachments as ZIP

### Defect Linking Section

Link failed case runs to defect records for bug tracking.

#### Linked Defects
- **Defect List**: Shows all linked defects with:
  - Defect ID and title
  - Defect status (Open, In Progress, Resolved, Closed)
  - Severity indicator
  - Link to defect detail

#### Link New Defect
- **Create Defect**: Opens defect creation dialog with pre-filled:
  - Test case name as defect title
  - Failure message as description
  - Environment and reproduction steps
- **Link Existing**: Search and link to existing defects
- **Bulk Link**: Link multiple failed tests to one defect

### Related Runs Section

View historical execution data for this test case:

- **History Graph**: Mini chart showing last 10 executions
- **Pass Rate**: Percentage of times this test passed
- **Flakiness Score**: Measure of result inconsistency
- **Last Pass**: When this test last passed
- **Last Failure**: When this test last failed
- **View All History**: Link to full case run history

---

## Launch Actions

### Actions Menu

The actions menu (three-dot icon in the launch header) provides:

| Action | Description |
|--------|-------------|
| **Retry Failed** | Create new launch re-running only failed tests |
| **Clone Launch** | Create a copy of the launch configuration |
| **Generate Report** | Create PDF report of launch results |
| **Share Launch** | Create shareable link with permissions |
| **Archive** | Move launch to archive (removes from default view) |
| **Delete** | Permanently delete the launch and all results |

### Retry Failed Tests

Create a new launch containing only the tests that failed.

1. Click **Actions** → **Retry Failed**
2. Review the list of failed tests to retry
3. Optionally deselect specific tests to exclude
4. Configure retry launch:
   - **New launch name**: Auto-generated as "Original Name - Retry"
   - **Environment**: Same as original launch
   - **Assignee**: Same as original or select new assignee
5. Click **Start Retry Launch**

**Retry Behavior:**
- Creates a new launch with its own results
- Links to original launch for comparison
- Maintains original test parameters and configurations
- Preserves failure details from original run

### Clone Launch

Duplicate a launch configuration for re-execution.

1. Click **Actions** → **Clone Launch**
2. Edit cloned launch configuration:
   - **Launch name**: Editable (defaults to "Original Name - Copy")
   - **Environment**: Select different environment if needed
   - **Test selection**: Modify which tests to include
3. Click **Create Cloned Launch**

**Clone Behavior:**
- Copies test selection and configuration
- Does not copy test results (fresh execution)
- Creates independent launch (no link to original)
- Useful for running same tests in different environments

### Generate Report

Create a PDF report of launch results for sharing with stakeholders.

1. Click **Actions** → **Generate Report**
2. Configure report options:
   - **Report name**: Custom title
   - **Include sections**:
     - Summary statistics
     - Test case details
     - Failure details
     - Screenshots
     - Charts and graphs
   - **Format**: PDF
   - **Detail level**: Comprehensive, Standard, or Executive Summary
3. Click **Generate**
4. Download report when ready

**Report Sections:**
- **Cover Page**: Launch name, date, environment, summary
- **Executive Summary**: High-level results and recommendations
- **Detailed Results**: All test cases with results
- **Failure Analysis**: Detailed failure information with stack traces
- **Charts**: Pass/fail distribution, trend analysis
- **Appendices**: Screenshots, logs, attachments

### Share Launch

Create a shareable link for external stakeholders.

1. Click **Actions** → **Share Launch**
2. Configure sharing options:
   - **Link expiration**: Never, 7 days, 30 days, custom date
   - **Access permissions**: View only, View and comment
   - **Password protection**: Optional password requirement
3. Click **Create Share Link**
4. Copy the generated URL

**Share Behavior:**
- Creates unique URL for the launch
- Respects configured permissions
- Tracks access and views
- Can be revoked at any time
- External users do not need Qualflare accounts

### Archive Launch

Remove launch from default list view while preserving data.

1. Click **Actions** → **Archive**
2. Confirm archive action

**Archive Behavior:**
- Launch moves to Archived section
- Not displayed in default launch list
- Still accessible via "View Archived" filter
- All data preserved including results and attachments
- Can be unarchored to restore to default view

### Delete Launch

Permanently remove a launch and all its data.

1. Click **Actions** → **Delete**
2. Enter launch name to confirm deletion
3. Click **Confirm Delete**

**Delete Behavior:**
- Permanently removes launch and all data
- Deletes all case runs and results
- Removes attachments
- Cannot be undone
- Does not affect linked defects (they remain)

---

## Bulk Case Run Actions

Select multiple case runs using checkboxes to perform bulk operations.

### Bulk Actions Menu

| Action | Description |
|--------|-------------|
| **Mark as Passed** | Change status to passed for selected tests |
| **Mark as Failed** | Change status to failed for selected tests |
| **Mark as Skipped** | Change status to skipped for selected tests |
| **Mark as Blocked** | Change status to blocked for selected tests |
| **Retry Selected** | Create new launch re-running selected tests |
| **Link Defects** | Link selected tests to one or more defects |
| **Change Assignee** | Reassign selected tests to different user |
| **Add Tags** | Apply tags to selected tests |

### Bulk Status Change

Update the status of multiple tests at once.

1. Select tests using checkboxes
2. Click **Bulk Actions** → **Mark as [Status]**
3. Optionally add a comment explaining the change
4. Click **Confirm**

**Use Cases:**
- Mark multiple blocked tests as skipped after environment fix
- Bulk mark tests as failed when requirements changed
- Clear running status for stuck tests

### Bulk Retry

Create a new launch containing only selected tests.

1. Select tests to retry
2. Click **Bulk Actions** → **Retry Selected**
3. Configure the new launch:
   - Launch name
   - Environment
   - Assignee
4. Click **Start Retry Launch**

**Use Cases:**
- Retry only specific failures from a larger set
- Re-run flaky tests without re-running entire suite
- Re-test specific features after bug fix

### Bulk Defect Linking

Link multiple failed tests to a single defect.

1. Select failed tests to link
2. Click **Bulk Actions** → **Link Defects**
3. Choose linking option:
   - **Create new defect**: Creates one defect for all selected tests
   - **Link to existing**: Search and link to existing defect
4. Click **Confirm**

**Use Cases:**
- Group related failures under one defect
- Link all authentication failures to single auth bug
- Reduce duplicate defect creation

---

## Real-Time Execution View

When viewing a running launch, the UI updates in real-time to show progress.

### Live Progress Updates

**Auto-Refresh Behavior:**
- **Update frequency**: Every 2 seconds for launches with < 100 tests, every 5 seconds for larger launches
- **Smart updates**: Only updates changed data points (reduces bandwidth)
- **Connection status**: Shows live connection indicator
- **Manual refresh**: Available for immediate update

**What Updates Live:**
- Progress ring percentage
- Completed test counter
- Pass/fail counts
- Status badges for individual tests as they complete
- Duration timer
- Estimated time remaining

### Streaming Results

As tests complete, results stream into the case runs list:

- **New results appear**: At the top of the list or in execution order
- **Status changes**: From "Running" to final status
- **Sound notifications**: Optional audio alert for failures
- **Desktop notifications**: Browser notifications for completion

### Live Execution View

For automated launches, view execution in real-time:

- **Test console**: Shows test output as it runs
- **Log streaming**: Displays test execution logs line-by-line
- **Error highlighting**: Highlights errors and failures in red
- **Auto-scroll**: Scrolls to show latest output (can be paused)

### Monitoring Multiple Launches

The launches list shows real-time status for all running launches:

- **Live status badges**: Animated spinners for running launches
- **Progress percentages**: Updates in the list without page refresh
- **Concurrent launches**: View and monitor multiple launches simultaneously

---

## Progress Calculations

### Pass Rate Calculation

```
Pass Rate = (Passed Tests / Total Executed Tests) × 100

Excludes: Skipped and Blocked tests from denominator
```

**Examples:**
- 45 passed, 5 failed, 0 skipped → 90% pass rate (45/50)
- 45 passed, 5 failed, 10 skipped → 90% pass rate (45/50)
- 45 passed, 5 failed, 10 blocked → 90% pass rate (45/50)

### Progress Percentage

```
Progress = (Completed Tests / Total Tests) × 100

Completed = Passed + Failed + Skipped + Blocked
```

### Duration Display

| Duration | Display Format |
|----------|----------------|
| < 1 minute | "45s" |
| 1-59 minutes | "12m 34s" |
| 1-23 hours | "2h 15m" |
| 24+ hours | "1d 4h" |

### Estimated Time Remaining

Calculated based on:
- Average test duration so far
- Number of tests remaining
- Historical duration for similar tests

**Formula:**
```
Estimated Remaining = (Remaining Tests × Average Duration per Test)
```

---

## Related Topics

- [Concepts: Launches](/concepts/launches) - Learn about launch lifecycle and analytics
- [Concepts: Case Runs](/concepts/case-runs) - Individual test result details
- [How-to: Executing Tests](/how-to/test-execution) - Task-based test execution guides
- [How-to: Reporting Test Results](/how-to/test-reporting) - Analyzing and sharing results
- [Reference: Environments](/reference/environments) - Environment configuration reference
