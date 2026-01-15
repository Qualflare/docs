---
title: Defects
---

# Defects

Comprehensive reference for defect tracking and lifecycle management in Qualflare.

## Overview

Defects are bugs or issues found during testing that require tracking from discovery through resolution. Qualflare provides a complete defect management system integrated with test execution, enabling direct bug logging from failed tests and verification through re-runs.

## Defect List View

The defects list provides a comprehensive overview of all defects in the current project.

### Columns

| Column | Description |
|--------|-------------|
| **ID** | Unique defect identifier (e.g., DEF-123) |
| **Title** | Summary of the issue |
| **Severity** | Impact level with color coding: <span style="color: #dc2626;">Critical</span> (red), <span style="color: #ea580c;">High</span> (orange), <span style="color: #ca8a04;">Medium</span> (yellow), <span style="color: #16a34a;">Low</span> (green) |
| **Status** | Current lifecycle state (Open, In Progress, Resolved, Closed, Reopened) |
| **Assignee** | User responsible for fixing the defect |
| **Milestone** | Associated milestone (if any) |
| **Created** | Date when the defect was logged |
| **Updated** | Date of last activity |

### Filters

Filter defects by:

- **Status**: Open, In Progress, Resolved, Closed, Reopened
- **Severity**: Critical, High, Medium, Low
- **Assignee**: Any team member or "Unassigned"
- **Milestone**: Specific release targets
- **Tags**: Custom labels
- **Created Date**: Date range picker
- **Updated Date**: Date range picker

Filters can be combined for precise queries (e.g., "Critical AND Open AND Unassigned").

### Sorting

Sort by any column:
- Click column headers to toggle ascending/descending
- Default sort: Created date (newest first)
- Common sorts: Severity (highest first), Updated date (most recent activity)

### Bulk Actions

Select multiple defects using checkboxes to perform:

- **Change Status**: Update status for all selected defects
- **Change Severity**: Update severity for all selected defects
- **Assign**: Assign all selected defects to a user
- **Add Milestone**: Link all selected defects to a milestone
- **Add Tags**: Apply tags to multiple defects
- **Export**: Export selected defects as CSV or JSON

### Quick Actions

Hover over any defect row to reveal quick actions:
- **View**: Open defect detail page
- **Edit**: Quick edit title, severity, status, assignee
- **Link to Case Run**: Connect to a test failure

## Defect Detail View

The defect detail page displays complete information about a single defect.

### Header Section

| Field | Description |
|-------|-------------|
| **Defect ID** | Unique identifier (DEF-123) |
| **Title** | Clear summary of the issue |
| **Status Badge** | Current lifecycle state with color indicator |
| **Severity Badge** | Impact level with color coding |
| **Priority Badge** | Fix urgency (Urgent, High, Medium, Low) |
| **Assignee** | Avatar and name of responsible user |
| **Creator** | Avatar and name of user who logged the defect |
| **Created Date** | Timestamp when defect was created |
| **Updated Date** | Timestamp of last modification |

### Description Section

- **Description**: Detailed explanation of the problem
- **Steps to Reproduce**: Numbered reproduction steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, or configuration details

### Linked Case Runs

Shows all test failures linked to this defect:

| Column | Description |
|--------|-------------|
| **Launch** | Test launch containing the failure |
| **Test Case** | Name of the failed test |
| **Status** | Current status of the case run |
| **Failed Date** | When the test failed |
| **Environment** | Test environment where it failed |

Click any case run to view the failure details.

### Attachments

List of files attached to the defect:

- **Screenshots**: Visual evidence of failures
- **Logs**: Error messages and stack traces
- **Test Data**: Input files that trigger the bug
- **Screen Recordings**: Video of the issue in action

**Attachment Limits**:
- Maximum file size: 25 MB per file
- Supported formats: PNG, JPG, GIF, PDF, TXT, LOG, MP4, WEBM
- Maximum attachments per defect: 20

### Activity Timeline

Chronological history of all defect activity:

- **Status Changes**: When and by whom
- **Assignments**: Assignment and reassignment history
- **Comments**: Discussion thread with timestamps
- **Linked Items**: Added/removed case runs and milestones
- **Attachments**: Added files

Each activity entry shows:
- Timestamp (relative and absolute)
- User avatar and name
- Action performed
- Additional details or comments

## Create/Edit Defect UI

### Creating a New Defect

**Access from**:
- Defects list: Click "New Defect" button
- Case run detail: Click "Create Defect" action
- Launch summary: Select failed case runs and "Create Defect"

**Required Fields**:
- **Title**: Clear, specific summary of the issue

**Optional Fields**:
- **Description**: Detailed explanation
- **Severity**: Dropdown (Critical, High, Medium, Low) - defaults to Medium
- **Priority**: Dropdown (Urgent, High, Medium, Low) - defaults to Medium
- **Status**: Dropdown - defaults to Open
- **Assignee**: User selection
- **Milestone**: Target milestone
- **Tags**: Comma-separated labels
- **Steps to Reproduce**: Multi-line text area
- **Expected Behavior**: Multi-line text area
- **Actual Behavior**: Multi-line text area
- **Environment**: Multi-line text area
- **Attachments**: Drag-and-drop or file picker

### Editing an Existing Defect

**Access**: Click "Edit" button on defect detail page

All fields are editable except:
- **Defect ID**: Read-only
- **Creator**: Read-only
- **Created Date**: Read-only

**Auto-Save**: Drafts are saved automatically every 30 seconds

### Field Descriptions

#### Title

- **Maximum Length**: 200 characters
- **Format**: [Feature] + [What happened] + [Condition]
- **Example**: "Checkout fails when billing address differs from shipping"

#### Description

- **Format**: Multi-line markdown
- **Recommended**: Answer "What happened?", "How often?", "What's the impact?"
- **No length limit**

#### Severity

| Value | Color | Description |
|-------|-------|-------------|
| **Critical** | <span style="color: #dc2626;">Red</span> | System unusable, data loss, security breach |
| **High** | <span style="color: #ea580c;">Orange</span> | Major feature broken, significant workaround |
| **Medium** | <span style="color: #ca8a04;">Yellow</span> | Minor feature broken, easy workaround |
| **Low** | <span style="color: #16a34a;">Green</span> | Cosmetic issue, typo |

#### Priority

| Value | Description |
|-------|-------------|
| **Urgent** | Fix immediately (blocks release, critical customer) |
| **High** | Fix soon (major impact, many users affected) |
| **Medium** | Fix in next cycle (minor impact, workaround exists) |
| **Low** | Fix when possible (cosmetic, edge case) |

#### Status

| Value | Description |
|-------|-------------|
| **Open** | New defect, not yet investigated |
| **In Progress** | Being actively worked on |
| **Resolved** | Fix implemented, needs verification |
| **Closed** | Verified as fixed, defect complete |
| **Reopened** | Fix didn't work, bug still exists |

#### Milestone

- Dropdown of all active milestones
- Select "None" to leave unassigned
- Defects display in milestone progress tracking

#### Tags

- Free-text labels for organization
- Separate multiple tags with commas
- Common uses: component, area, release blocker
- No predefined tags - create as needed

## Defect Actions

Available actions depend on user permissions and defect status.

### Assign Defect

**When**: Any status except Closed

**Steps**:
1. Click "Assign" button in defect header
2. Select user from dropdown
3. Optional: Add comment explaining assignment
4. Click "Confirm"

**Result**:
- Assignee field updates
- Assignee receives notification
- Activity log records the assignment

### Change Status

**When**: Anytime

**Valid Transitions**:
- Open → In Progress, Closed
- In Progress → Resolved, Open
- Resolved → Closed, Reopened
- Closed → Reopened
- Reopened → In Progress

**Steps**:
1. Click status badge
2. Select new status from dropdown
3. Optional: Add comment explaining change
4. Click "Confirm"

**Result**:
- Status badge updates with new color
- Activity log records the change
- Subscribers receive notification

### Close Defect

**When**: Defect is resolved or not a valid bug

**Steps**:
1. Click "Close" button
2. Select closure reason:
   - Fixed (verified working)
   - Not a Bug (works as designed)
   - Duplicate (links to original defect)
   - Won't Fix (out of scope, by design)
3. Required: Add explanation
4. For duplicates, select the original defect
5. Click "Close Defect"

**Result**:
- Status changes to Closed
- Activity log records closure reason
- Linked defects updated (for duplicates)

### Reopen Defect

**When**: Bug still exists after attempted fix

**Steps**:
1. Click "Reopen" button (available on Closed defects)
2. Required: Add comment explaining why
3. Select new assignee if different from original
4. Click "Reopen Defect"

**Result**:
- Status changes to Reopened
- Defect moves back to active tracking
- Original assignee notified

### Link to Test Run

**When**: Connecting a defect to test failures

**Steps**:
1. Click "Link Case Run" button
2. Search and select from failed case runs
3. Select from:
   - Recent failures
   - Specific launch
   - Search by test name
4. Click "Link"

**Result**:
- Case run appears in Linked Case Runs section
- Defect appears on case run detail page
- Test-to-defect connection established for verification

### Add Comment

**When**: Adding context, questions, or updates

**Steps**:
1. Scroll to activity timeline
2. Type in comment box
3. Optional: @mention team members
4. Click "Post Comment"

**Result**:
- Comment appears in activity timeline
- Mentioned users receive notification
- Updated timestamp refreshes

### Verify Fix

**When**: Defect is in Resolved status and needs verification

**Steps**:
1. Click "Verify Fix" button
2. Select verification launch:
   - Create new launch with linked tests
   - Select existing launch
3. Review test results
4. If tests pass: Click "Close Defect"
5. If tests fail: Click "Reopen" and add comments

**Result**:
- If passed: Status changes to Closed
- If failed: Status changes to Reopened
- Verification launch linked to defect

## Defect Lifecycle UI

### Status Workflow Visualization

Qualflare displays the defect lifecycle as a visual workflow:

```
Open → In Progress → Resolved → Closed
         ↓                           ↑
         └─────── Reopened ──────────┘
```

**Interactive Elements**:
- Click any status to see defects in that state
- Hover over transitions to see valid state changes
- Color-coded indicators match status badges

### Status Indicators

| Status | Color | Icon | Meaning |
|--------|-------|------|---------|
| **Open** | Gray | 🔵 | New, awaiting triage |
| **In Progress** | Blue | 🔄 | Active work in progress |
| **Resolved** | Purple | ✅ | Fix completed, needs verification |
| **Closed** | Green | ✔️ | Verified, complete |
| **Reopened** | Red | ↩️ | Fix failed, back to active |

### History Timeline

The activity timeline provides a complete audit trail:

**Entry Types**:
- **Created**: Defect creation with creator
- **Status Changed**: Old → New with user
- **Assigned**: To whom and by whom
- **Severity Changed**: Old → New with reason
- **Comment Added**: Full comment text
- **Case Run Linked**: Which test was connected
- **Attachment Added**: Filename and uploader
- **Milestone Changed**: Old → New milestone

**Timeline Features**:
- Collapsible entries (click to expand/collapse)
- Show/hide comment-only activity
- Export timeline as PDF

## Status Types Reference

### Open

**Description**: New defect, not yet investigated or assigned

**Use When**:
- Defect was just created
- Awaiting triage
- Investigating before assigning

**Available Actions**:
- Edit all fields
- Assign to developer
- Change to In Progress
- Close (if not a bug or duplicate)

**Duration**: Should not remain Open more than 1-2 business days

### In Progress

**Description**: Someone is actively working on investigation or fix

**Use When**:
- Developer has started investigation
- Code change is in progress
- Fix is being tested by developer

**Available Actions**:
- Edit description
- Add attachments (fix screenshots, logs)
- Change to Resolved (when fix is done)
- Revert to Open (if blocked or deprioritized)

**Duration**: Varies based on severity - Critical: hours, Low: weeks

### Resolved

**Description**: Fix has been implemented and needs QA verification

**Use When**:
- Code change is committed/pushed
- Developer has tested locally
- Ready for QA to verify

**Available Actions**:
- Link commit/PR in comments
- Assign to QA engineer
- Change to Closed (if verified)
- Change to Reopened (if verification fails)

**Duration**: Should be verified within 1-2 business days

### Closed

**Description**: Defect is complete and will not be revisited

**Use When**:
- QA verified the fix works
- Determined not a bug
- Marked as duplicate or won't fix

**Available Actions**:
- View only (read-only state)
- Reopen (if bug reappears)

**Final State**: Closed defects don't appear in active defect counts

### Reopened

**Description**: Fix didn't work or bug reappeared after being closed

**Use When**:
- Verification failed (bug still exists)
- Bug reappeared in production after fix
- Fix introduced new issues

**Available Actions**:
- All Open/In Progress actions available
- Typically reassigned to developer

**Duration**: Treat as new In Progress defect

## Severity and Priority

### Severity Levels

Severity measures **impact** - how bad the bug is:

| Severity | Color | Icon | When to Use | Example |
|----------|-------|------|-------------|---------|
| **Critical** | <span style="color: #dc2626;">Red</span> | 🔴 | System unusable, data loss, security | Login completely broken, database corruption |
| **High** | <span style="color: #ea580c;">Orange</span> | 🟠 | Major feature broken, significant workaround | Checkout fails, search returns no results |
| **Medium** | <span style="color: #ca8a04;">Yellow</span> | 🟡 | Minor feature broken, easy workaround | Wrong sort order, validation unclear |
| **Low** | <span style="color: #16a34a;">Green</span> | 🟢 | Cosmetic issue, typo | Misspelled label, slight misalignment |

### Priority Levels

Priority measures **urgency** - when to fix:

| Priority | Description | Target Resolution Time |
|----------|-------------|------------------------|
| **Urgent** | Fix immediately (blocks release, critical customer) | Same day |
| **High** | Fix soon (major impact, many users affected) | 1-3 days |
| **Medium** | Fix in next cycle (minor impact, workaround exists) | 1-2 weeks |
| **Low** | Fix when possible (cosmetic, edge case) | Next milestone |

### Severity vs Priority

Severity and priority don't always align:

| Scenario | Severity | Priority |
|----------|----------|----------|
| System down for all users | Critical | Urgent |
| Critical bug affecting one user | Critical | Medium |
| Cosmetic issue on homepage | Low | High (visibility) |
| Minor feature edge case | Medium | Low |

## Linking Defects to Test Runs

### Why Link?

Linking defects to test failures creates a verification loop:

1. **Bug Discovery**: Test fails → create defect
2. **Bug Tracking**: Defect tracks fix progress
3. **Fix Verification**: Re-run linked test → verify fix
4. **Close Loop**: Test passes → close defect

### Linking Methods

#### From Case Run

1. Navigate to failed case run
2. Click "Create Defect" or "Link to Defect"
3. Create new defect or select existing
4. Connection established automatically

#### From Defect

1. Open defect detail page
2. Click "Link Case Run"
3. Search and select failed case runs
4. Connection established

### Bulk Linking

Link multiple case runs to one defect:

1. Select multiple failed case runs in a launch
2. Click "Link to Defect"
3. Select existing defect
4. All selected runs linked

This is useful when one bug causes multiple test failures.

### Linked Case Runs Display

On the defect detail page, linked case runs show:

| Field | Description |
|-------|-------------|
| **Launch Name** | Which test execution |
| **Test Case** | Which test failed |
| **Status** | Current status (Failed, Passed, etc.) |
| **Environment** | Where it failed |
| **Failed Date** | When it failed |
| **Actions** | View case run, unlink |

## Attachment Management

### Supported File Types

| Category | Formats | Max Size |
|----------|---------|----------|
| **Images** | PNG, JPG, GIF, WEBP | 25 MB |
| **Documents** | PDF, TXT, MD | 25 MB |
| **Logs** | LOG, JSON, XML | 25 MB |
| **Videos** | MP4, WEBM, MOV | 25 MB |
| **Archives** | ZIP, GZ | 10 MB |

### Adding Attachments

**Methods**:
- Drag and drop onto attachment area
- Click "Choose File" button
- Paste images from clipboard (Ctrl/Cmd + V)

**Bulk Upload**: Select multiple files at once (max 10 per batch)

### Attachment Actions

- **Preview**: Click image to view full-size
- **Download**: Save file locally
- **Delete**: Remove attachment (anyone can delete)
- **Replace**: Upload new version of same file

## Comments and Discussion

### Comment Features

- **Markdown Support**: Bold, italic, lists, code blocks
- **@Mentions**: Type @ to mention team members
- **Code Snippets**: Use ``` for code blocks with syntax highlighting
- **Links**: Auto-detected URLs become clickable
- **Edit**: Edit your own comments (no time limit)
- **Delete**: Delete your own comments

### Comment Notifications

**When notifications are sent**:
- Someone comments on a defect you created
- Someone comments on a defect assigned to you
- Someone @mentions you in a comment
- Someone replies to your comment

**Notification Channels**:
- In-app notifications
- Email (if enabled)
- Webhook (if configured)

### Comment Best Practices

- **Be specific**: Reference actual test results
- **Provide context**: Explain your reasoning
- **Use @mentions**: Notify relevant team members
- **Link work**: Reference commits, PRs, external tickets
- **Keep professional**: Comments are part of permanent record

## Related Features

- [Defects Concept](/concepts/defects) - Understanding defect structure and lifecycle
- [Track Defects Guide](/how-to/defect-tracking) - How to log bugs from test failures
- [Manage Defects Guide](/how-to/defect-management) - Triage, assignment, and verification workflows
- [Milestones](/reference/milestones) - Tracking defects toward release targets
- [Case Runs](/reference/launches#case-runs) - Test execution results that link to defects
