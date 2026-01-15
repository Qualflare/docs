---
title: Projects
---

# Projects

A **project** is a container for testing activities within a workspace. Projects organize your test cases, launches, and results around a specific product, component, or team.

## What is a Project?

If workspaces are the top-level container, projects are the focused spaces where actual testing happens. Each project contains its own test cases, test suites, launches, and results. Projects belong to exactly one workspace and provide isolation and organization within that workspace.

## Project Structure

```
Workspace
  └── Project
      ├── Test Cases & Suites
      ├── Launches
      ├── Defects
      └── Members
```

Projects are where you:
- Create and organize test cases
- Run test launches (manual or automated)
- Track defects and issues
- View results and analytics

## Project Features

- **Test Cases**: Create and manage tests specific to this project
- **Launches**: All test runs and results live within the project
- **Members**: Invite specific workspace members to the project
- **Settings**: Configure project-level preferences and integrations
- **Analytics**: View dashboards and trends for this project only

## Organizing with Projects

Common ways to organize projects:

- **By Product**: One project per application or service
- **By Component**: Frontend, Backend, API, Mobile as separate projects
- **By Team**: Each QA team has their own project
- **By Environment**: Dev, Staging, Production testing in separate projects

## Access Control

Projects inherit workspace members but can have more granular access:
- Workspace members can be added to specific projects
- Project-level roles control what members can do
- Projects can be private (invite-only) or visible to all workspace members

See the [Quick Start](/quick-start/) guide for project creation instructions.

## Related

- [Workspaces](/concepts/workspaces) - Parent container for projects
- [Test Cases](/concepts/test-cases) - Tests within projects
- [Launches](/concepts/launches) - Test runs within projects
