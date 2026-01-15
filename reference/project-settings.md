---
title: Project Settings
---

# Project Settings

Configure project-specific settings, members, test configurations, milestones, and notifications. Project settings apply only to the current project and override workspace defaults where applicable.

## Accessing Project Settings

1. Navigate to the desired project
2. Click **Settings** in the left sidebar
3. Navigate between settings sections using the menu

Project settings can be modified by:
- Workspace **Owners** and **Admins** (full access)
- Project members with **Admin** or **Member** role (varies by section)

---

## General Settings

Configure your project identity and key properties.

### Project Name

The display name for your project. Appears in project selector, headers, and reports.

- **Field**: Text input, 1-100 characters
- **Validation**: Cannot be empty, no special characters except hyphens and spaces
- **Update**: Click "Save Changes" to apply

### Project Key

A unique identifier for the project. Used by Qualflare CLI and API references.

- **Format**: Uppercase letters, numbers, and underscores only
- **Length**: 2-10 characters
- **Unique**: Must be unique within the workspace
- **Example**: `WEBAPP`, `API_V2`, `MOBILE`

**Project Key Usage:**
```bash
# CLI usage
qualflare upload --project WEBAPP --file results.xml

# API reference
POST /api/v1/projects/WEBAPP/launches
```

### Description

Optional description of the project's purpose and scope.

- **Field**: Textarea, up to 500 characters
- **Optional**: Yes
- **Display**: Shown in project overview and member invitations

### Project Icon

Visual identifier for the project in lists and selectors.

- **Options**: Choose from preset icons (emoji-style) or upload custom
- **Upload Format**: PNG or JPG, max 1MB
- **Size**: Recommended 64x64px
- **Default**: Random emoji assigned on creation

### Default Environment

The default environment selected when creating new launches.

- **Field**: Dropdown (Production, Staging, QA, Dev, Custom)
- **Default**: None (user selects manually)
- **Override**: Can be changed when creating specific launches

---

## Members and Permissions

Manage project-level access and role assignments.

### Project vs Workspace Permissions

Workspace roles define default permissions across all projects. Project roles can override these defaults for specific projects.

**Permission Hierarchy:**
1. Workspace Owners and Admins have full access to all projects
2. Project-specific roles override workspace roles within that project
3. Most restrictive permission applies when there's ambiguity

**Example Scenarios:**

| Workspace Role | Project Role | Effective Permission |
|----------------|--------------|---------------------|
| Member | Admin | Admin (full project control) |
| Admin | Viewer | Viewer (read-only for this project) |
| Member | (none) | Member (inherits workspace role) |

### Project Roles

| Role | Permissions | Can Invite Members |
|------|-------------|-------------------|
| **Admin** | Full project control, settings, member management | Yes |
| **Member** | Create/edit tests, runs, defects | No |
| **Viewer** | Read-only access to tests and results | No |

### Add Project Members

Add workspace members to this project with specific roles.

- **Available Only**: Shows workspace members not already in project
- **Role Assignment**: Select Admin, Member, or Viewer
- **Bulk Add**: Add multiple members at once (same role for all)

**Steps:**
1. Click "Add Member" button
2. Select workspace member(s) from list
3. Choose project role
4. Click "Add"

### Project Member List

View all project members with their roles and status.

**Columns:**
- **Name**: Member's display name
- **Email**: Email address
- **Project Role**: Current project role (click to change)
- **Workspace Role**: Shows inherited role if no project role assigned
- **Last Active**: Date of most recent activity in this project
- **Actions**: Change role, remove from project

### Project Visibility

Control who can see and access the project.

**Options:**
- **Open to Workspace**: All workspace members can view the project (read-only unless added)
- **Invite Only**: Only explicitly added members can access

**Use Cases:**
- **Open**: General projects where visibility helps collaboration
- **Invite Only**: Confidential projects, beta programs, client-specific work

---

## Test Configuration

Configure default behaviors for test cases and launches within this project.

### Default Test Priority

The priority automatically assigned to new test cases.

- **Options**: Critical, High, Medium, Low, Nice-to-have
- **Default**: Medium
- **Override**: Can be changed when creating specific test cases

**Priority Levels:**

| Priority | Description | Typical Usage |
|----------|-------------|---------------|
| **Critical** | Blocking release or core functionality | Login, payment, checkout |
| **High** | Important feature with significant impact | User profile, search |
| **Medium** | Standard features | Settings, notifications |
| **Low** | Edge cases or minor features | Help text, tooltips |
| **Nice-to-have** | Enhancement ideas, future features | UI polish, nice-to-haves |

### Automation Status Options

Configure the available automation status labels for test cases.

**Built-in Options:**
- Not Automated
- Automated (QA team)
- Automated (Dev team)
- Auto-Selected
- Candidate for Automation

**Custom Options:**
- Add custom automation status labels via Project Settings
- Up to 10 custom labels per project

### Tagging Requirements

Enforce required tags for test cases to improve organization.

**Options:**
- **Disabled**: No tagging requirements
- **Required**: Test cases must have at least one tag
- **Specific Tags**: Require specific tags (e.g., `feature`, `team`, `component`)

**Tag Requirements Configuration:**
- Minimum number of tags per test case
- Maximum number of tags per test case
- Required tag categories

### Test Case Templates

Predefined templates for creating new test cases in this project.

**Create Template:**
1. Click "New Template" in Test Configuration
2. Define default values:
   - Priority
   - Automation status
   - Required tags
   - Default description format
   - Predefined steps
3. Name the template
4. Save

**Use Template:**
- When creating test cases, select template from dropdown
- Fields auto-populate with template values
- Can override any field before saving

---

## Milestone Settings

Configure quality gates, progress tracking, and templates for milestones.

### Default Quality Gates

Set automatic quality gates that determine milestone health.

**Quality Gate Metrics:**

| Metric | Threshold Options | Description |
|--------|-------------------|-------------|
| Test Coverage | 70%, 80%, 90%, 95% | Minimum % of tests passing |
| Critical Tests | 100%, 95%, 90% | Minimum % of critical tests passing |
| Defect Count | <5, <10, <20, <50 | Maximum open defects allowed |
| High-Priority Defects | 0, <3, <5 | Maximum high-priority defects |

**Gate Behavior:**
- **On Track**: All gates within thresholds
- **At Risk**: One or more gates approaching threshold
- **Off Track**: One or more gates failed

### Progress Calculation Method

How milestone progress is calculated from test executions.

**Options:**

| Method | Calculation | Best For |
|--------|-------------|----------|
| **Pass Rate** | (Passed Tests / Total Executed) × 100 | Iterative testing, continuous runs |
| **Test Coverage** | (Executed Tests / Total Tests) × 100 | Comprehensive testing cycles |
| **Weighted** | Priority-weighted pass rate | Critical-path focused projects |

**Weighted Calculation Example:**
- Critical tests: 50% weight
- High tests: 30% weight
- Medium tests: 15% weight
- Low tests: 5% weight

### Milestone Templates

Predefined milestone configurations for this project.

**Built-in Templates:**
- **Sprint Milestone**: 2-week cycle, standard quality gates
- **Release Milestone**: Full coverage, strict gates, zero critical defects
- **Regression Milestone**: Focus on existing tests, automated execution

**Custom Template Creation:**
1. Name the template
2. Select duration type (sprint, release, ad-hoc)
3. Configure quality gates
4. Set default test suites to include
5. Define notification preferences

**Use Template:**
- When creating milestones, select template from dropdown
- Pre-fills all configuration
- Can adjust before saving

---

## Notifications

Configure project-specific notification preferences and delivery channels.

### Email Notifications

Control which email notifications are sent for project events.

**Notification Types:**

| Event | Options | Description |
|-------|---------|-------------|
| Launch Completed | All, Failures Only, None | Receive email when launches finish |
| Test Failed | Immediately, Daily Digest, None | Failed test alerts |
| Defect Assigned | Always, Self-assigned only, None | When defects are assigned to you |
| Milestone Status | On Change, Daily Digest, None | Milestone health changes |
| Comment Mentions | Always, None | When @mentioned in comments |

**Frequency Options:**
- **Immediate**: Send as soon as event occurs
- **Daily Digest**: Batch events, send once per day
- **None**: Disable notification type

### Webhook Events

Configure webhook notifications for this project (overrides workspace defaults).

**Available Events:**
- `launch.created` - New launch created in project
- `launch.completed` - Launch execution finished
- `test.failed` - Any test failure
- `defect.created` - New defect filed
- `defect.updated` - Defect status or priority changed
- `milestone.created` - New milestone created
- `milestone.completed` - Milestone marked complete

**Project-Specific Webhooks:**
- Create webhooks that only trigger for this project's events
- Use different endpoints than workspace webhooks
- Configure separate secrets and retry policies

### Slack Channels

Override workspace default Slack channel for this project.

**Options:**
- **Use Workspace Default**: Inherit from workspace settings
- **Custom Channel**: Specify project-specific channel
- **No Notifications**: Disable Slack notifications for this project

**Per-Channel Events:**
- Send different event types to different channels
- Example: `#qa-critical` for failures, `#qa-updates` for summaries

---

## Advanced Settings

Additional project configuration options.

### Project Archival

Archive inactive projects to remove them from active view while preserving data.

**Archive Behavior:**
- Project removed from main project list
- Read-only access to all data
- No new launches can be created
- Members cannot be added/removed
- Settings become read-only

**Archive Steps:**
1. Open Project Settings > Advanced
2. Click "Archive Project"
3. Confirm archive action
4. Project moved to archived list

**Restore Project:**
- Unarchive anytime from workspace settings
- Restores full functionality immediately
- All members and settings preserved

### Project Deletion

Permanently delete the project and all associated data.

**Warning**: Deletion is permanent and irreversible.

**Prerequisites:**
- Only workspace **Owners** can delete projects
- All launches must be completed or cancelled
- Confirmation of project name required

**What Gets Deleted:**
- All test cases and suites
- All launches and results
- All defects
- All milestones
- Project settings and configurations
- Member assignments (not workspace membership)

**Deletion Steps:**
1. Open Project Settings > Advanced
2. Scroll to "Danger Zone"
3. Click "Delete Project"
4. Type project name to confirm
5. Click "Permanently Delete"

### Data Retention

Configure how long project data is retained.

**Retention Periods:**
- **30 Days**: Free plan default
- **1 Year**: Team plan and above
- **Unlimited**: Business and Enterprise plans
- **Custom**: Enterprise plans can configure custom retention

**Data Purged After Retention:**
- Launch execution logs and results
- Historical analytics data
- Old activity feed items

**Preserved Data:**
- Test cases and suites (never deleted)
- Active defects
- Milestone history

---

## Related

- [Projects](/concepts/projects) - Project overview and hierarchy
- [Workspaces](/reference/workspace-settings) - Workspace-level configuration
- [Users & Roles](/concepts/users) - Role permissions and inheritance
- [Milestones](/concepts/milestones) - Milestone configuration and usage
- [Test Cases](/concepts/test-cases) - Test case configuration options
