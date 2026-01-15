---
title: Dashboards
---

# Dashboards

Comprehensive reference for Qualflare dashboards, widgets, and data visualization features.

## Dashboard Overview

The Dashboard is your central hub for visualizing quality metrics, tracking trends, and monitoring project health. Dashboards consist of configurable widgets that display test data in various visual formats.

### Dashboard Layout

**Header Section:**
- Dashboard title and description
- Time range selector (Last 7 days, Last 30 days, Last 90 days, Custom)
- Refresh button with last-updated timestamp
- Auto-refresh toggle (Off, 1 min, 5 min, 15 min)
- Share and Export buttons

**Widget Grid:**
- Responsive grid layout (2 columns default on desktop)
- Widgets are draggable and resizable
- Each widget has a header with title and more options menu
- Click widget to expand to full-screen view

**Dashboard Controls:**
- Add Widget button (top-right)
- Customize Layout button
- New Dashboard button
- Dashboard switcher dropdown

### Time Range Selector

Select the time period for displayed data:

| Option | Description | Use Case |
|--------|-------------|----------|
| **Last 7 days** | Rolling 7-day window | Short-term monitoring, recent changes |
| **Last 30 days** | Rolling 30-day window (default) | Standard trend analysis |
| **Last 90 days** | Rolling 90-day window | Long-term patterns, quarterly review |
| **Custom** | User-defined date range | Specific period analysis, retrospective |

### Refresh Controls

**Manual Refresh:**
- Click refresh button to update all widgets
- Shows timestamp of last refresh
- Spinner indicates data loading

**Auto-Refresh:**
- Off: Dashboard updates only on manual refresh
- 1 minute: High-frequency monitoring (CI/CD, active testing)
- 5 minutes: Standard monitoring (default)
- 15 minutes: Low-frequency monitoring (executive dashboards)

### Dashboard Navigation

**Dashboard Switcher:**
- Dropdown list of all dashboards you have access to
- Shows dashboard name and owner
- Personal dashboards appear at top
- Team dashboards grouped by project

**Breadcrumb Navigation:**
- Project > Dashboards > [Dashboard Name]
- Click "Dashboards" to return to dashboard list
- Click project name to return to project overview

---

## Widget Types

### Pass Rate Trend Widget

**Visual Type:** Line chart with area fill

**Displays:**
- Pass rate percentage over time (Y-axis)
- Time periods based on selected range (X-axis)
- Hover tooltips showing exact values per point
- Trend line indicating direction (improving, stable, declining)

**Configuration Options:**
- **Filter by Environment**: All, dev, staging, production
- **Filter by Test Suite**: Select specific suites
- **Filter by Labels**: Filter by test labels/tags
- **Granularity**: Daily, Weekly, Monthly aggregation
- **Show Target Line**: Display goal pass rate threshold

**Chart Interactions:**
- **Hover**: Shows pass rate, date, launch count
- **Click Point**: Opens launch details for that date
- **Click Legend**: Toggle visibility of multiple series
- **Zoom**: Click and drag to zoom into time period
- **Reset Zoom**: Double-click to return to full view

**Color Indicators:**
- Green area fill: Pass rate >= 90%
- Yellow area fill: Pass rate 70-89%
- Red area fill: Pass rate < 70%

**Widget Header Menu:**
- View Data: Open table with raw values
- Export Chart: Download as PNG or SVG
- Configure: Edit widget settings
- Remove: Delete from dashboard

---

### Test Execution Summary Widget

**Visual Type:** Stacked bar chart with legend

**Displays:**
- Total test count per time period
- Stacked bars showing passed, failed, skipped, blocked
- Percentage labels for each status
- Comparison to previous period

**Configuration Options:**
- **Group By**: Date, Test Suite, Folder, Labels
- **Status Filter**: Show/hide specific statuses
- **Sort By**: Total count, Pass rate, Failure count
- **Display Mode**: Bar chart, Pie chart, Table

**Chart Interactions:**
- **Hover**: Shows count and percentage for each status
- **Click Bar Segment**: Filter to show only those test results
- **Click Legend**: Toggle status visibility

**Breakdown Options:**
- **By Status**: Passed, Failed, Skipped, Blocked
- **By Suite**: Group results by test suite
- **By Priority**: Group by test priority (P0, P1, P2, P3)
- **By Assignee**: Group by who executed tests

---

### Defect Tracking Widgets

#### Defects by Severity Widget

**Visual Type:** Horizontal bar chart or Pie chart

**Displays:**
- Count of defects by severity level
- Critical, High, Medium, Low categories
- Color-coded by severity (red, orange, yellow, blue)
- Trend indicator vs. previous period

**Configuration Options:**
- **Time Range**: All open, created in period, closed in period
- **Filter by Status**: Open, In Progress, Resolved, Closed
- **Filter by Assignee**: Show defects for specific users
- **Filter by Labels**: Filter by defect tags

#### Defects by Status Widget

**Visual Type:** Donut chart with center total

**Displays:**
- Defect count by workflow status
- Open, In Progress, Resolved, Closed
- Center shows total defect count
- Legend with color coding

**Configuration Options:**
- **Include Closed**: Yes/No toggle
- **Filter by Project**: All projects or specific
- **Filter by Milestone**: Show defects linked to milestone

#### Defects by Assignee Widget

**Visual Type:** Horizontal bar chart

**Displays:**
- Defect count per team member
- Grouped by assignee
- Stacked by severity
- Trend indicator vs. previous period

**Configuration Options:**
- **Include Unassigned**: Show or hide defects without assignee
- **Limit**: Top 5, 10, 20, or all assignees
- **Sort By**: Count, Severity, Name

#### Defect Trend Widget

**Visual Type:** Line chart with dual series

**Displays:**
- Open defects over time (red line)
- Resolved defects over time (green line)
- Time periods based on selected range
- Area fill showing cumulative trends

**Configuration Options:**
- **Filter by Severity**: All, Critical+High, specific levels
- **Aggregation**: Daily, Weekly, Monthly
- **Show Created**: Include new defects line

---

### Milestone Progress Widgets

#### Milestone Completion Widget

**Visual Type:** Progress bars with status indicators

**Displays:**
- List of active milestones
- Progress bar showing percentage complete
- Status icon (on track, at risk, blocked)
- Target date and days remaining
- Pass rate and defect count

**Configuration Options:**
- **Filter by Status**: Active, Upcoming, Overdue
- **Sort By**: Target date, Progress, Status
- **Show Completed**: Include completed milestones

**Status Indicators:**
- **Green Checkmark**: On track to meet criteria
- **Yellow Warning**: At risk, may miss target
- **Red X**: Blocked, unlikely to meet criteria
- **Blue Clock**: No data yet

#### Milestone Burndown Widget

**Visual Type:** Line chart with ideal vs. actual

**Displays:**
- Remaining work over time
- Ideal burndown line (gray, dashed)
- Actual burndown line (colored)
- Vertical markers for milestones
- Prediction of completion date

**Configuration Options:**
- **Work Metric**: Tests remaining, Defects remaining, Both
- **Filter by Milestone**: Select specific milestone

#### Quality Gate Indicators

**Visual Type:** Status cards with pass/fail indicators

**Displays:**
- Card for each quality gate criterion
- Pass/Fail status with icon
- Current value vs. required value
- Trend indicator
- Last updated timestamp

**Quality Gate Examples:**
- Pass Rate >= 95%
- Zero Critical Defects
- All P0 Tests Executed
- Flaky Tests < 5%

---

### Flaky Tests Widget

**Visual Type:** Table with flakiness score

**Displays:**
- Test case title
- Flakiness score (0-100%)
- Pass/fail pattern (last 10 runs)
- Last run date
- Test suite

**Configuration Options:**
- **Minimum Flakiness**: Slider from 0% to 100%
- **Filter by Suite**: Select specific suites
- **Show Only**: Flaky, All, Stable

**Flakiness Score Calculation:**
- 0%: Always passes (consistent)
- 1-19%: Mostly stable
- 20-49%: Moderately flaky
- 50-79%: Highly flaky
- 80-100%: Unreliable (always fails or inconsistent)

**Pass/Fail Pattern Legend:**
- Green dot: Passed
- Red dot: Failed
- Gray dot: Not run
- Yellow dot: Skipped/Blocked

**Widget Actions:**
- **Click Test**: Open test case details
- **Quarantine**: Mark test as flaky (excludes from metrics)
- **Assign**: Open assign dialog
- **Filter**: Show only tests matching criteria

---

### Launch History Widget

**Visual Type:** List with status badges

**Displays:**
- Launch name with link
- Status icon (completed, running, failed)
- Pass/fail/skip counts
- Duration
- Timestamp
- Environment badge

**Configuration Options:**
- **Filter by Environment**: All, dev, staging, production
- **Filter by Source**: All, Manual, CLI, Scheduled
- **Limit**: 5, 10, 20, 50 launches
- **Sort By**: Date, Pass Rate, Duration

**Status Badges:**
- **Completed**: Green checkmark
- **Running**: Blue spinner (animated)
- **Failed**: Red X (system error, not test failures)
- **Cancelled**: Gray dash

---

## Custom Dashboard Creation

### Creating a New Dashboard

1. Navigate to your project
2. Click "Dashboards" in the left sidebar
3. Click "New Dashboard" button
4. Enter dashboard details:
   - **Name**: Required, e.g., "Sprint 24 Quality"
   - **Description**: Optional, e.g., "Tracking progress for Sprint 24 release"
   - **Visibility**: Personal or Team
5. Click "Create Dashboard"

### Adding Widgets

1. On your dashboard, click "Add Widget"
2. Select widget type from dropdown:
   - Pass Rate Trend
   - Test Execution Summary
   - Defects by Severity
   - Defects by Status
   - Defects by Assignee
   - Defect Trend
   - Milestone Progress
   - Milestone Burndown
   - Quality Gates
   - Flaky Tests
   - Launch History
3. Configure widget settings:
   - Title (auto-filled with widget type)
   - Filters specific to widget type
   - Display options
4. Click "Add Widget"

### Layout Drag-and-Drop

**Rearranging Widgets:**
- Click and hold widget header
- Drag to new position
- Release to drop
- Other widgets shift to accommodate

**Resizing Widgets:**
- Hover over widget corner
- Click and drag to resize
- Minimum and maximum sizes enforced
- Aspect ratio maintained for charts

**Creating Sections:**
- Click "Add Section" button
- Section headers organize related widgets
- Drag widgets into sections
- Collapse/expand sections

### Saving Dashboards

**Auto-Save:**
- Changes save automatically every 30 seconds
- "Saving..." indicator in header
- "All changes saved" confirmation

**Manual Save:**
- Click "Save" button in header (if auto-save disabled)
- Force immediate save of changes

**Version History:**
- Widget settings saved with timestamp
- Revert to previous version from widget menu
- Track who made changes (team dashboards)

### Sharing Dashboards

**Share Link:**
1. Click "Share" button in dashboard header
2. Copy share URL
3. Recipients must have project access to view

**Embed Dashboard:**
1. Click "Embed" button
2. Copy embed code (iframe)
3. Paste into external tools (Confluence, SharePoint)

**Dashboard Permissions:**
- **Personal**: Only you can view and edit
- **Team**: All project members can view
- **Editable**: Select team members can edit (owner controls)

**Exporting Dashboards:**
1. Click "Export" button
2. Choose format:
   - **PDF**: Full dashboard snapshot
   - **Image (PNG)**: Screenshot of dashboard
   - **Data (JSON)**: Widget configuration for import
3. Download file

---

## Export Options

### Export Dashboard as PDF

1. Click "Export" in dashboard header
2. Select "PDF Report"
3. Configure export:
   - **Include Title Page**: Yes/No
   - **Include Table of Contents**: Yes/No
   - **Page Orientation**: Portrait or Landscape
   - **Page Size**: Letter, A4, Legal
4. Click "Generate PDF"
5. Download when ready

**PDF Contents:**
- Dashboard title and description
- Time range and filters applied
- All widgets as rendered
- Widget titles and data
- Footer with timestamp and URL

### Export Individual Widget

1. Click widget menu (three dots)
2. Select "Export"
3. Choose format:
   - **PNG Image**: High-resolution screenshot
   - **SVG Image**: Vector format for scaling
   - **CSV Data**: Raw data table
   - **JSON Data**: Structured data with metadata

### Export Widget Data

**CSV Export:**
- Opens in spreadsheet applications
- Compatible with Excel, Google Sheets
- Contains raw widget data
- No formatting or visualizations

**JSON Export:**
- Structured data format
- Includes metadata (filters, time range)
- Suitable for API integrations
- Preserves data types and relationships

---

## Widget Configuration Options

### Common Widget Settings

All widgets support these configuration options:

**Title:**
- Custom widget title
- Defaults to widget type name
- Max 100 characters

**Refresh Interval:**
- Inherit from dashboard (default)
- Custom interval: Off, 1 min, 5 min, 15 min

**Data Filters:**
- Environment: All, dev, staging, production
- Project: All projects or specific
- Date Range: Inherit or custom

**Display Options:**
- Show/Hide legend
- Show/Hide data labels
- Color scheme: Default, Colorblind-friendly, Grayscale

### Widget-Specific Filters

**Test-Related Widgets:**
- Test Suite: Select specific suites
- Labels: Filter by test labels
- Priority: Filter by priority level
- Assignee: Filter by assigned user

**Defect-Related Widgets:**
- Severity: Filter by severity level
- Status: Filter by workflow status
- Labels: Filter by defect tags
- Milestone: Filter by linked milestone

**Milestone-Related Widgets:**
- Milestone: Select specific milestones
- Status: Active, Upcoming, Completed
- Target Date: Date range filter

---

## Chart Interactions

### Hover Details

**Line Charts:**
- Hover over data point
- Tooltip shows: Date, Value, Count, Change vs. previous
- Precision: 2 decimal places for percentages

**Bar Charts:**
- Hover over bar segment
- Tooltip shows: Category, Count, Percentage
- Highlighting: Bar brightens on hover

**Pie/Donut Charts:**
- Hover over slice
- Tooltip shows: Category, Count, Percentage
- Slice expands slightly on hover

### Click to Drill Down

**Launch-Specific Data:**
- Click any data point linked to a launch
- Opens launch detail page
- New tab or same tab (browser preference)

**Test Case Details:**
- Click test case in widget
- Opens test case detail page
- Shows execution history and results

**Defect Details:**
- Click defect in widget
- Opens defect detail page
- Shows status, comments, history

### Full-Screen Widget View

1. Click widget menu (three dots)
2. Select "Full Screen"
3. Widget expands to full viewport
4. Press ESC or click "Exit" to return

**Benefits:**
- Larger data visualization
- Easier to read detailed charts
- Better for presentations
- Print-friendly view

---

## Dashboard Refresh Behavior

### Auto-Refresh Settings

**Off (Manual Only):**
- Dashboard updates only when you click refresh
- No automatic data fetching
- Saves bandwidth and resources

**1 Minute:**
- Updates every 60 seconds
- Best for: CI/CD monitoring, active testing
- High resource usage

**5 Minutes (Default):**
- Updates every 5 minutes
- Best for: General monitoring
- Balanced resource usage

**15 Minutes:**
- Updates every 15 minutes
- Best for: Executive dashboards, low-priority monitoring
- Low resource usage

### Refresh Indicator

**Header Refresh Button:**
- Circular arrow icon
- Badge shows "Updating..." during refresh
- Timestamp displays "Last updated: X minutes ago"

**Widget-Level Refresh:**
- Individual widgets show spinner during update
- Widgets update independently
- Failed refresh shows error icon

### Refresh Notifications

**Significant Changes:**
- Pass rate changed >10%
- Critical defect created
- Milestone status changed
- Notification badge on dashboard

**Quiet Hours:**
- Configure in dashboard settings
- Suppress notifications during off-hours
- Maintain auto-refresh but silence alerts

---

## Dashboard Templates

### Executive Overview Dashboard

**Purpose:** High-level quality metrics for leadership

**Suggested Widgets:**
- Pass Rate Trend (90 days)
- Defect Count by Severity
- Upcoming Milestones with Status
- Release Readiness Summary

**Time Range:** Last 90 days

**Refresh:** 15 minutes

---

### Team Lead Sprint Dashboard

**Purpose:** Detailed sprint health monitoring

**Suggested Widgets:**
- Pass Rate by Test Suite
- Flaky Tests List
- Defect Aging Report
- Team Assignment Summary
- Milestone Progress

**Time Range:** Last 30 days

**Refresh:** 5 minutes

---

### Tester Daily Work Dashboard

**Purpose:** Personal task management

**Suggested Widgets:**
- Recent Launches Requiring Attention
- Failing Tests Assigned to Me
- Defects Requiring Verification
- My Test Execution Summary

**Time Range:** Last 7 days

**Refresh:** 1 minute

---

### CI/CD Build Quality Dashboard

**Purpose:** Pipeline quality monitoring

**Suggested Widgets:**
- Latest CI Launch Status
- Pass Rate Trend for CI Builds
- Flaky Tests in Production
- Environment Comparison (dev vs staging)

**Time Range:** Last 7 days

**Refresh:** 1 minute

---

## Related Topics

- [Analyze Quality Metrics](/how-to/analytics) - How-to guide for using dashboards
- [Launches](/concepts/launches) - Test execution data and analytics
- [Defects](/concepts/defects) - Defect tracking and metrics
- [Milestones](/concepts/milestones) - Progress tracking and quality gates
- [Reporting Test Results](/how-to/test-reporting) - Generate reports from dashboard data
- [Search & Filter](/reference/search) - Advanced filtering options
