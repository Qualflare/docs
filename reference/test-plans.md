---
title: Test Plans
description: Complete UI reference for test plan scheduling features
---

# Test Plans

Complete reference for all test plan UI elements, fields, actions, and scheduling behaviors in Qualflare.

## Test Plans List View

The test plans list view displays all test plans in your current project with schedule information and execution status.

### Columns

| Column | Description | Click Action |
|--------|-------------|--------------|
| **Checkbox** | Select plan for bulk operations | Select/deselect for bulk actions |
| **Name** | Plan name (clickable link) | Opens plan detail view |
| **ID** | Unique plan identifier (TP-001, TP-002, etc.) | Opens plan detail view |
| **Status** | Draft, Active, Paused, Completed | Filter by status |
| **Schedule** | Schedule type icon and description | Filter by schedule type |
| **Suites** | Number of suites included | Sort by suite count |
| **Next Run** | Date/time of next scheduled execution | Sort by next run |
| **Last Run** | Date and result of most recent execution | Sort by last run |
| **Environment** | Target environment for execution | Filter by environment |
| **Owner** | Assigned owner of the plan | Filter by owner |
| **Created** | Date plan was created | Sort by creation date |

### Status Badges

| Status | Appearance | Meaning |
|--------|------------|---------|
| **Draft** | Gray badge | Plan is being configured, not yet scheduled |
| **Active** | Green badge | Plan is scheduled and will execute on schedule |
| **Paused** | Yellow badge | Plan scheduled but execution paused |
| **Completed** | Blue badge | One-time plan has finished execution |

### List View Actions

| Action | Location | Description |
|--------|----------|-------------|
| **+ New Plan** | Top right | Opens create test plan form |
| **Import** | Top right | Opens import wizard for bulk plan creation |
| **Export** | Top right | Exports visible plans to CSV/Excel |
| **Filter** | Top bar (funnel icon) | Opens filter panel |
| **Search** | Top bar (search box) | Searches plan names and descriptions |
| **Bulk Actions** | Appears when plans selected | Apply operations to multiple plans |
| **Column Selector** | Top right (gear icon) | Choose which columns to display |

### Bulk Actions Menu

| Action | Description | Confirmation Required |
|--------|-------------|----------------------|
| **Pause** | Pause execution for selected active plans | No |
| **Resume** | Resume execution for selected paused plans | No |
| **Set Environment** | Change target environment for all selected | No |
| **Change Owner** | Reassign ownership of all selected | No |
| **Clone** | Create duplicates of selected plans | Yes |
| **Archive** | Move selected plans to archived status | Yes |
| **Delete** | Permanently delete selected plans | Yes |

### Filter Panel

| Filter Type | Options | Behavior |
|-------------|---------|----------|
| **Status** | Draft, Active, Paused, Completed | Shows only selected statuses |
| **Schedule Type** | Manual, One-time, Recurring, Trigger-based | Shows only selected schedule types |
| **Environment** | Dev, Staging, Production | Shows plans for selected environment(s) |
| **Owner** | User dropdown | Shows plans owned by selected user(s) |
| **Next Run** | Date range picker | Shows plans scheduled within date range |
| **Last Run** | Date range picker | Shows plans executed within date range |
| **Suites** | Suite dropdown | Shows plans including selected suite(s) |

### Keyboard Shortcuts (List View)

| Shortcut | Action |
|----------|--------|
| `N` | Create new plan |
| `/` | Focus search box |
| `Ctrl/Cmd + A` | Select all visible plans |
| `Esc` | Clear selection |
| `Ctrl/Cmd + F` | Open filter panel |

---

## Test Plan Detail View

Detailed view of a single test plan with schedule configuration and execution history.

### Header Section

| Element | Description |
|---------|-------------|
| **Name** | Plan name (clickable to edit) |
| **ID Badge** | Unique identifier (TP-XXX) |
| **Status Badge** | Draft, Active, Paused, Completed with color coding |
| **Schedule Icon** | Visual indicator of schedule type |
| **Edit Button** | Pencil icon - opens edit mode |
| **More Menu** | Three dots - clone, archive, delete, export |

### Plan Information Section

| Field | Type | Description |
|-------|------|-------------|
| **Description** | Rich text | Purpose of this test plan |
| **Status** | Dropdown badge | Draft, Active, Paused, Completed |
| **Schedule Type** | Read-only badge | Manual, One-time, Recurring, Trigger-based |
| **Environment** | Dropdown | Target environment for execution |
| **Owner** | User dropdown | Team or person responsible |
| **Milestone** | Link | Associated milestone (if any) |
| **Created** | Read-only timestamp | Date plan was created |
| **Last Modified** | Read-only timestamp | Date of last change |

### Schedule Section

**Display varies by schedule type**

#### Manual Schedule

| Field | Display | Description |
|-------|---------|-------------|
| **Type** | "Manual" | Runs only when triggered |
| **Last Run** | Timestamp or "Never run" | Most recent execution |
| **Next Run** | "On demand" | No scheduled execution |

#### One-Time Schedule

| Field | Display | Description |
|-------|---------|-------------|
| **Type** | "One-time" | Single scheduled execution |
| **Scheduled For** | Date and time | When execution will occur |
| **Countdown** | Time remaining | "In 2 days, 4 hours" |
| **Status** | Scheduled, Completed, Missed | Execution state |

#### Recurring Schedule

| Field | Display | Description |
|-------|---------|-------------|
| **Type** | "Recurring" | Repeating execution |
| **Frequency** | Daily, Weekly, Monthly | How often it runs |
| **Days** | Days of week (for weekly) | Which days it executes |
| **Time** | HH:MM format | Execution time |
| **Timezone** | Timezone name | User's timezone |
| **Next Run** | Date and time | Next scheduled execution |
| **Upcoming Runs** | List of next 5 runs | Preview of schedule |

#### Trigger-Based Schedule

| Field | Display | Description |
|-------|---------|-------------|
| **Type** | "Trigger-based" | Runs on events |
| **Trigger** | Event type | Webhook, deployment, code commit |
| **Condition** | Trigger condition | Branch, tag, environment |
| **Last Triggered** | Timestamp or "Never" | Most recent trigger event |

### Included Suites Section

| Column | Description |
|--------|-------------|
| **Order** | Execution order (runs top to bottom) |
| **Suite Name** | Suite name (clickable link to suite detail) |
| **Test Count** | Number of test cases in suite |
| **Status** | Most recent run result for this suite |

### Suite Actions

| Action | Description |
|--------|-------------|
| **+ Add Suites** | Open suite selector to include more suites |
| **Remove** | Remove suite from plan (doesn't delete suite) |
| **Reorder** | Drag suites to change execution order |
| **Run Now** | Execute just this suite from the plan |

### Execution History Section

| Column | Description |
|--------|-------------|
| **Launch Name** | Name of the test run created from this plan |
| **Triggered By** | How execution was triggered (Schedule, Manual, Trigger) |
| **Date** | When the execution occurred |
| **Environment** | Environment where execution occurred |
| **Result** | Overall pass/fail status and pass rate |
| **Duration** | How long execution took |
| **View Launch** | Link to launch detail page |

### Quick Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Run Now** | Top right, primary button | Execute plan immediately |
| **Pause/Resume** | Top right | Toggle schedule execution |
| **Edit** | Top right, pencil icon | Modify plan details |
| **Clone** | More menu | Create duplicate of plan |
| **Archive** | More menu | Set plan to archived status |
| **Delete** | More menu | Permanently delete plan |
| **Export** | More menu | Export plan configuration to file |

### Keyboard Shortcuts (Detail View)

| Shortcut | Action |
|----------|--------|
| `E` | Enter edit mode |
| `R` | Run plan now |
| `P` | Pause/resume plan |
| `Ctrl/Cmd + S` | Save changes (edit mode only) |
| `Esc` | Cancel edit / close detail view |
| `Ctrl/Cmd + .` | Open more menu |

---

## Create/Edit Plan UI

Form for creating new test plans or editing existing ones.

### Plan Details Section

| Field | Type | Required | Character Limit | Description |
|-------|------|----------|-----------------|-------------|
| **Name** | Text input | Yes | 200 | Unique name for the plan |
| **Description** | Rich text editor | No | 2000 | Purpose and context of this plan |
| **Environment** | Select dropdown | Yes | - | Target environment (Dev, Staging, Production) |
| **Owner** | User dropdown | No | - | Team or person responsible |
| **Milestone** | Link dropdown | No | - | Associated release milestone |

### Suite Selection Section

| Element | Type | Description |
|---------|------|-------------|
| **Suites** | Multi-select with drag-reorder | Select test suites to include in plan |
| **Search** | Text input | Search suites by name or tag |
| **Filters** | Tag, priority, owner filters | Filter available suites |
| **Selected Suites** | Draggable list | Suites in execution order |
| **Suite Info** | Read-only badge | Shows test count per suite |

### Suite Selection Interface

**Two-Panel Layout**:

| Panel | Content | Action |
|-------|---------|--------|
| **Available Suites** | All suites not in plan | Click to add, or drag to right panel |
| **Selected Suites** | Suites in plan | Drag to reorder, click X to remove |

**Multi-Select Behavior**:
- Hold `Ctrl/Cmd` to select multiple suites
- Hold `Shift` to select range of suites
- Click "Add Selected" to add all checked suites

### Schedule Configuration Section

**Four schedule types available:**

#### Manual Schedule

| Option | Description |
|--------|-------------|
| **Run only when triggered** | No automatic execution; run manually via "Run Now" |

**Use Cases**:
- Ad-hoc testing sessions
- On-demand verification
- User-initiated test runs

---

#### One-Time Schedule

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Date** | Date picker | Yes | Date to execute the plan |
| **Time** | Time picker | Yes | Time to execute the plan |
| **Timezone** | Timezone dropdown | Yes | Timezone for schedule |

**Behavior**:
- Executes once at specified date/time
- After execution, status changes to Completed
- Does not repeat

**Use Cases**:
- Pre-release verification
- Scheduled maintenance testing
- One-off audit runs

---

#### Recurring Schedule

| Field | Type | Required | Options | Description |
|-------|------|----------|---------|-------------|
| **Frequency** | Select dropdown | Yes | Daily, Weekly, Monthly | How often to repeat |
| **Days** | Multi-select checkboxes | Yes (weekly) | Mon-Sun | Which days to run (weekly only) |
| **Time** | Time picker | Yes | HH:MM format | Time of day to execute |
| **Timezone** | Timezone dropdown | Yes | User's timezone | Timezone for schedule |
| **Start Date** | Date picker | Yes | - | When to start schedule |
| **End Date** | Date picker | No | - | Optional end date (blank = never ends) |

**Daily Frequency**:
- Runs every day at specified time
- "Every weekday" option for Mon-Fri only

**Weekly Frequency**:
- Select specific days (e.g., Mon, Wed, Fri)
- Runs at specified time on selected days

**Monthly Frequency**:
- Day of month selector (1-31)
- "Last day of month" option
- Runs at specified time on selected day

**Schedule Preview**:
- Shows next 5 scheduled executions
- Updates dynamically as schedule changes
- Indicates timezone conversion

**Use Cases**:
- Daily smoke tests
- Weekly regression tests
- Monthly compliance audits

---

#### Trigger-Based Schedule

| Field | Type | Required | Options | Description |
|-------|------|----------|---------|-------------|
| **Trigger Type** | Select dropdown | Yes | Webhook, Deployment, Code Commit | Event that initiates execution |
| **Condition** | Text input | No | Branch, tag, environment | Filter when to trigger |
| **Debounce** | Number input | No | Minutes | Wait time before executing (avoid duplicates) |

**Webhook Trigger**:
- Generates unique webhook URL
- POST to URL to trigger plan execution
- Supports authentication tokens

**Deployment Trigger**:
- Integrates with CI/CD tools
- Triggers on deployment to environment
- Filter by deployment environment

**Code Commit Trigger**:
- Integrates with Git (GitHub, GitLab, Bitbucket)
- Triggers on push to specified branch
- Filter by branch name or tag pattern

**Use Cases**:
- CI/CD pipeline testing
- Deployment verification
- Continuous testing on code changes

---

### Form Validation

| Field | Validation Rule | Error Message |
|-------|-----------------|---------------|
| **Name** | Required, unique within project | "Name is required and must be unique" |
| **Name** | Max 200 characters | "Name exceeds 200 character limit" |
| **Environment** | Required | "Environment must be selected" |
| **Suites** | At least one suite required | "Add at least one suite to the plan" |
| **Schedule Date** | Must be in future (one-time) | "Schedule date must be in the future" |
| **End Date** | Must be after start date (recurring) | "End date must be after start date" |

### Save Actions

| Action | Location | Description |
|--------|----------|-------------|
| **Save as Draft** | Bottom right, secondary button | Save without activating schedule |
| **Save & Activate** | Bottom right, primary button | Save and set status to Active (begins scheduling) |
| **Cancel** | Bottom right, text link | Discard changes and close |

---

## Test Plan Actions Reference

### Run Now

**Access**: Plan detail view → "Run Now" button

**Behavior**:
- Creates immediate execution of all suites in plan
- Opens launch monitoring view
- Ignores schedule (runs ad-hoc)
- Records "Manual" trigger in execution history

**Options**:
- **Environment**: Override default environment if needed
- **Assignee**: Select who should execute (for manual testing)

**Confirmation**: None

---

### Pause/Resume Plan

**Access**: Plan detail view → "Pause" or "Resume" button

**Pause Behavior**:
- Changes status to Paused
- Schedule remains configured but doesn't execute
- Next run time cleared
- Can be resumed later

**Resume Behavior**:
- Changes status back to Active
- Schedule resumes from current time
- Next run time calculated immediately
- Missed runs during pause are skipped

**Confirmation**: None

---

### Clone Plan

**Access**: Plan detail view → More menu → "Clone"

**Behavior**:
1. Opens clone configuration modal
2. Enter new name (default: "Copy of [plan name]")
3. Select clone options:
   - **Copy suites**: Include same suites
   - **Copy schedule**: Duplicate schedule configuration
   - **Reset schedule**: Start schedule fresh
4. Click "Clone" to create

**Confirmation**: None (can delete if unwanted)

---

### Archive Plan

**Access**: Plan detail view → More menu → "Archive"

**Behavior**:
- Changes plan status to Archived
- Stops all scheduled executions
- Hides from active plan views
- Execution history preserved
- Can be restored but schedule must be reconfigured

**Confirmation**: Yes - "Archive this plan? Scheduled executions will stop."

---

### Delete Plan

**Access**: Plan detail view → More menu → "Delete"

**Behavior**:
- Permanently removes plan
- Stops all scheduled executions
- Execution history preserved (launches remain)
- Action logged in audit trail

**Confirmation**: Yes - "Delete this plan? This action cannot be undone."

---

### Export Plan

**Access**: Plan detail view → More menu → "Export"

**Behavior**:
- Opens export options modal
- Choose format: JSON, YAML, or CSV
- Select content:
  - **Plan configuration**: Name, schedule, environment
  - **Included suites**: Suite list and order
  - **Execution history**: Past run results
- Download file or save to cloud storage

**Use Case**: Share plan configuration, backup, or import to another workspace

**Confirmation**: None

---

## Recurrence Pattern Options and Behaviors

### Daily Recurrence

**Options**:
- **Every day**: Runs all 7 days
- **Every weekday**: Runs Mon-Fri only
- **Every weekend**: Runs Sat-Sun only

**Behavior**:
- Next run calculated as next matching day at specified time
- If time has passed today, next run is tomorrow
- Respects timezone settings

**Example**: Daily at 9:00 AM
- If today is Monday 9:05 AM, next run is Tuesday 9:00 AM
- If today is Monday 8:55 AM, next run is today 9:00 AM

---

### Weekly Recurrence

**Options**:
- Select any combination of Mon, Tue, Wed, Thu, Fri, Sat, Sun
- Minimum one day required

**Behavior**:
- Runs on selected days at specified time
- Next run is next selected day at specified time
- Skips unselected days

**Example**: Mon, Wed, Fri at 10:00 AM
- If today is Monday 10:05 AM, next run is Wednesday 10:00 AM
- If today is Wednesday 9:55 AM, next run is today 10:00 AM

---

### Monthly Recurrence

**Options**:
- **Day of month**: 1-31
- **Last day of month**: Special option for months with varying days
- **Specific weekday**: "First Monday", "Last Friday", etc.

**Behavior**:
- Runs on specified day of each month at specified time
- Months with fewer than 31 days: runs on last day of month
- "Last day" option: always runs on actual last day (28th, 29th, 30th, or 31st)

**Example**: 15th of month at 11:00 PM
- If today is Jan 15, next run is Feb 15 at 11:00 PM
- If today is Feb 14, next run is Feb 15 at 11:00 PM

**Special Case**: Day 31 in months with 30 days
- Falls back to last day of month (30th)
- Next month (31 days) runs on 31st as expected

---

## Execution History and Status Indicators

### Execution Status

| Status | Appearance | Meaning |
|--------|------------|---------|
| **Scheduled** | Gray clock icon | Execution is scheduled in future |
| **In Progress** | Blue spinner | Currently executing |
| **Passed** | Green checkmark | All tests passed |
| **Failed** | Red X | One or more tests failed |
| **Skipped** | Yellow dash | Execution was skipped or canceled |
| **Missed** | Gray warning | Scheduled execution didn't run (system downtime, etc.) |

### Launch Result Summary

| Metric | Description | Calculation |
|--------|-------------|-------------|
| **Total Cases** | Total number of test cases executed | Sum of all cases in all suites |
| **Passed** | Number of passed test cases | Count of passed results |
| **Failed** | Number of failed test cases | Count of failed results |
| **Skipped** | Number of skipped test cases | Count of skipped results |
| **Pass Rate** | Percentage of passed tests | (Passed / Total) × 100 |
| **Duration** | Time execution took | End time - Start time |

### History Pagination

| Element | Description |
|---------|-------------|
| **Per Page** | Choose 10, 25, 50, or 100 entries per page |
| **Page Navigation** | Previous, Next, or jump to specific page |
| **Export History** | Export all history to CSV/Excel |

---

## Related Concepts

- [Test Plans Concept](/concepts/test-plans) - Understanding plan purpose and scheduling
- [Test Suites](/concepts/test-suites) - Suites selected for test plans
- [Launches](/concepts/launches) - Test runs created from plans
- [Milestones](/concepts/milestones) - Goals tracked via test plans

## Related How-to Guides

- [Organizing Tests](/how-to/test-organization) - Creating test plans for scheduled execution
- [Executing Tests](/how-to/test-execution) - Running test plans and monitoring execution
