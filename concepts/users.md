---
title: Users & Roles
---

# Users & Roles

**Users** are team members who have access to Qualflare. Each user has a role that determines their permissions and what they can do within workspaces and projects.

## What are Users?

A user in Qualflare represents a person on your team. Users can:
- Be invited to workspaces and projects
- Be assigned specific roles with different permissions
- Create test cases, run launches, and track defects
- Collaborate through comments and discussions

## User Roles

Qualflare uses role-based access control to manage what users can do:

| Role | Permissions |
|------|-------------|
| **Owner** | Full control of workspace, billing, can delete workspace |
| **Admin** | Manage users, projects, settings; cannot delete workspace |
| **Member** | Create/edit tests, run launches, manage defects |
| **Viewer** | Read-only access to tests, results, and reports |

**Workspace vs Project Roles**:
- Workspace roles apply across all projects in the workspace
- Project roles are more granular and override workspace permissions within that project
- A user can be an Admin in one project but a Viewer in another

## User Management

**Workspace Membership**:
- Users are invited to workspaces via email
- Workspace default role is set when inviting
- Users can belong to multiple workspaces

**Project Membership**:
- Workspace members are added to specific projects
- Project-specific roles can be assigned
- Projects can be open to all workspace members or invite-only

## Collaboration Features

User accounts enable:
- **Comments**: Discuss test cases, failures, and defects
- **Assignments**: Assign tests and defects to team members
- **Activity Tracking**: See who made changes and when
- **Notifications**: Stay updated on relevant changes

## Related

- [Workspaces](/concepts/workspaces) - Where users are invited and managed
- [Projects](/concepts/projects) - Where users collaborate on testing
