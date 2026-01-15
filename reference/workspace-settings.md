---
title: Workspace Settings
---

# Workspace Settings

Manage your workspace configuration, team members, security, integrations, and billing from the Workspace Settings page. Workspace settings apply across all projects within the workspace.

## Accessing Workspace Settings

1. Click **Settings** in the left sidebar
2. Navigate between settings sections using the menu

Only workspace **Owners** and **Admins** can access and modify workspace settings. **Members** and **Viewers** have read-only access to limited sections.

---

## General Settings

Configure your workspace identity and preferences.

### Workspace Name

The display name for your workspace. Appears in the header, notifications, and shared links.

- **Field**: Text input, 1-100 characters
- **Validation**: Cannot be empty, no special characters except hyphens and spaces
- **Update**: Click "Save Changes" to apply

### Workspace Description

Optional description of your workspace's purpose. Helps team members understand the workspace context.

- **Field**: Textarea, up to 500 characters
- **Optional**: Yes

### Workspace Logo

Upload a custom logo to brand your workspace.

- **Format**: PNG, JPG, or SVG
- **Size**: Recommended 200x200px, max 2MB
- **Display**: Appears in header, notifications, and shared links
- **Default**: Qualflare logo if none uploaded

### Timezone

Sets the default timezone for the workspace. Affects scheduled launches, due dates, and timestamp displays.

- **Field**: Dropdown with IANA timezone names
- **Default**: Detected from browser or UTC
- **Impact**: All datetime fields in the workspace

### Default Language

Sets the default language for notifications and UI elements.

- **Field**: Dropdown (English, Spanish, French, German, Japanese, etc.)
- **Default**: English
- **Scope**: Workspace-wide, users can override in personal settings

---

## Members Management

Invite team members and manage their workspace-level roles and permissions.

### Workspace Roles

| Role | Permissions | Billing Access | Can Delete Workspace |
|------|-------------|----------------|---------------------|
| **Owner** | Full control of all workspace settings, projects, and resources | Yes | Yes |
| **Admin** | Manage members, projects, settings; cannot delete workspace | No | No |
| **Member** | Create/edit tests, runs, defects; view reports | No | No |
| **Viewer** | Read-only access to all projects and results | No | No |

### Invite Members

Add new team members to your workspace.

- **Email**: Required, must be valid email address
- **Role**: Select default role (Owner, Admin, Member, Viewer)
- **Projects**: Optionally select specific projects to add them to
- **Welcome Email**: Sent automatically with signup/login link

**Steps:**
1. Click "Invite Member" button
2. Enter email address
3. Select default role
4. (Optional) Select projects
5. Click "Send Invite"

### Member List

View all workspace members with their roles, status, and last activity.

**Columns:**
- **Name**: Member's display name
- **Email**: Email address
- **Role**: Current workspace role (click to change)
- **Status**: Active, Pending, or Inactive
- **Last Active**: Date of most recent activity
- **Actions**: Change role, remove from workspace

### Change Member Role

Update a member's workspace-level permissions.

- **Who can change**: Owners and Admins only
- **Restriction**: Cannot change your own role if you're the only Owner
- **Effect**: Immediate, applies to all projects where member doesn't have project-specific role

### Remove Member

Remove a member from the workspace.

- **Who can remove**: Owners and Admins only
- **Restriction**: Cannot remove the last Owner
- **Effect**: Member loses access to all workspace projects immediately
- **Data**: Tests, comments, and activity history are preserved

---

## Security Settings

Configure authentication, access controls, and session policies for your workspace.

### Single Sign-On (SSO)

Enable SSO for centralized identity management.

**Supported Providers:**
- Okta
- Azure Active Directory
- Google Workspace
- OneLogin
- SAML 2.0 (custom provider)

**Configuration Fields:**

| Field | Description | Required |
|-------|-------------|----------|
| Provider | SSO provider from dropdown | Yes |
| SSO URL | Identity provider login URL | Yes |
| Certificate | X.509 certificate for verification | Yes |
| Entity ID | Workspace identifier for IdP | Yes |
| Domains | Allowed email domains (comma-separated) | Yes |

**SSO Behavior:**
- Enforced login: Members must use SSO to authenticate
- Just-in-time provisioning: New users auto-created on first SSO login
- Sync groups: Optional group-based role assignment

### Two-Factor Authentication (2FA)

Require 2FA for workspace members.

**Options:**
- **Disabled**: Members can optionally enable 2FA
- **Enabled**: Members must enable 2FA on next login
- **Enforced**: Members with 2FA disabled cannot access workspace

**Supported Methods:**
- Authenticator app (TOTP)
- SMS verification
- Hardware security keys (WebAuthn)

### Session Timeout

Set maximum session duration for workspace members.

- **Options**: 1 hour, 4 hours, 1 day, 1 week, 30 days
- **Default**: 1 week
- **Effect**: Members must re-authenticate after timeout

### IP Restrictions

Limit workspace access to specific IP addresses or ranges.

- **Format**: CIDR notation (e.g., `192.168.1.0/24`)
- **Multiple**: Add multiple IP ranges
- **Whitelist**: Access denied from non-whitelisted IPs
- **Enforcement**: Applies to all workspace members

**Use Cases:**
- Corporate firewall restrictions
- VPN-only access requirements
- Geographic access control

---

## Integrations Settings

Configure third-party integrations and webhooks for workspace-wide automation.

### Webhooks

Configure HTTP callbacks for workspace events.

**Create Webhook:**

| Field | Description | Validation |
|-------|-------------|------------|
| Name | Webhook display name | Required, 1-100 chars |
| URL | Endpoint URL to receive events | Required, valid HTTPS URL |
| Secret | HMAC signature for verification | Optional, recommended |
| Events | Event types to trigger webhook | At least one required |
| Active | Enable/disable webhook | Toggle |

**Webhook Events:**

| Event | Trigger | Payload |
|-------|---------|---------|
| `launch.created` | New test launch created | Launch details, project info |
| `launch.completed` | Launch finishes execution | Full results, pass/fail counts |
| `defect.created` | New defect filed | Defect details, assignee |
| `defect.updated` | Defect status/priority changed | Changed fields, previous values |
| `member.invited` | New member invited | Member email, role |
| `test.failed` | Any test case fails | Case run details, error logs |

**Webhook Payload Format:**
```json
{
  "event": "launch.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "workspace_id": "ws_123",
  "data": {
    "launch": {
      "id": "ln_456",
      "name": "Sprint 23 Smoke Test",
      "status": "completed",
      "passed": 42,
      "failed": 3,
      "skipped": 5
    },
    "project": {
      "id": "prj_789",
      "key": "WEBAPP",
      "name": "Web Application"
    }
  }
}
```

**Webhook Delivery:**
- Retries: 3 attempts with exponential backoff
- Timeout: 10 seconds per attempt
- Signature: HMAC-SHA256 with shared secret

### GitHub Integration

Link Qualflare with GitHub repositories for issue tracking and traceability.

**Configuration:**

| Field | Description |
|-------|-------------|
| Repository URL | GitHub repository (e.g., `https://github.com/org/repo`) |
| Authentication | OAuth or personal access token |
| Default Assignee | GitHub username for auto-assignment |
| Sync Labels | Import GitHub labels as defect tags |

**Integration Features:**
- Create GitHub issues from defects
- Link test cases to GitHub pull requests
- Sync defect status with issue labels
- Qualflare CLI commits test results to GitHub

### Slack Notifications

Send Qualflare notifications to Slack channels.

**Configuration:**

| Field | Description |
|-------|-------------|
| Workspace | Slack workspace to connect |
| Channel | Default channel for notifications |
| Events | Notification types to send |

**Notification Events:**
- Launch completed (summary with pass/fail)
- High-priority defects created
- Test failures exceed threshold
- Milestone status changes

**Per-Project Channels:**
Override default channel in Project Settings for project-specific notifications.

---

## Billing and Subscription

View and manage your workspace subscription, usage, and payment methods.

### Plan Details

Current subscription plan and features.

**Plan Tiers:**

| Plan | Projects | Members | Tests/Month | Price |
|------|----------|---------|-------------|-------|
| **Free** | 3 | 5 | 500 | $0 |
| **Team** | 10 | 20 | 5,000 | $49/month |
| **Business** | Unlimited | 50 | 25,000 | $149/month |
| **Enterprise** | Unlimited | Unlimited | Unlimited | Contact Sales |

**Plan Features:**
- Free: Basic testing, 30-day retention
- Team+: SSO, advanced analytics, 1-year retention, priority support
- Business+: Custom roles, API access, SLA, dedicated support
- Enterprise: SSO audit logs, custom contracts, on-premise option

### Usage Metrics

Track current month usage against plan limits.

**Metrics Displayed:**
- Total tests executed this month
- Active members count
- Projects count
- Storage used
- Retention period coverage

**At Limit Behavior:**
- Tests: Pause new launches, upgrade required to continue
- Members: Cannot invite new members, remove inactive to free slots
- Projects: Cannot create new projects, archive old ones first

### Payment Methods

Manage payment methods for subscription billing.

**Supported Methods:**
- Credit/Debit Card (Visa, Mastercard, American Express)
- Invoice (Business and Enterprise plans, subject to approval)

**Add Payment Method:**
1. Click "Add Payment Method"
2. Enter card details (encrypted via Stripe)
3. Set as default or backup method
4. Click "Save"

### Invoices

View and download billing invoices.

**Invoice List:**
- Date issued
- Invoice number
- Amount
- Status (Paid, Pending, Failed)
- Download PDF button

**Invoice Details:**
- Line items: Plan subscription, overage charges, add-ons
- Tax: Calculated based on billing address
- Total: Final amount charged
- Payment method: Card or reference

### Billing Email

Email address where invoices and receipts are sent.

- **Default**: Workspace Owner's email
- **Custom**: Set different email for finance team
- **Receipts**: Optional copy of all payment receipts

---

## Related

- [Workspaces](/concepts/workspaces) - Workspace overview and hierarchy
- [Users & Roles](/concepts/users) - Role permissions matrix
- [Projects](/reference/project-settings) - Project-level configuration
- [Collaboration](/how-to/collaboration) - Invite and manage team members
