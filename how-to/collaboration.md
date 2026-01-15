---
title: Collaborate with Your Team
---

# Collaborate with Your Team

Work together effectively with your team using Qualflare's collaboration features. Invite team members, assign work, discuss through comments, share results, and control access.

## Workflow 1: Invite Team Members

Add new team members to your workspace and projects with appropriate access levels.

### Steps

1. **Open Workspace Settings**
   - Navigate to your workspace
   - Click Settings in the left sidebar
   - Select "Members" from the settings menu

2. **Invite by Email**
   - Click "Invite Member" button
   - Enter the team member's email address
   - Select their default role (Owner, Admin, Member, or Viewer)
   - Click "Send Invite"

3. **Add to Projects** (optional)
   - Navigate to the specific project
   - Open Project Settings > Members
   - Add the workspace member to the project
   - Assign project-specific role if different from workspace default

4. **Confirm Access**
   - The invited user receives an email with signup/login link
   - Once accepted, they appear in your workspace member list

### Tips by Role

**For Workspace Admins:**
- Start new members with "Member" role for most cases
- Only grant "Owner" role to co-owners who need billing access
- Use project-specific roles for fine-grained control

**For Team Leads:**
- Onboard testers in batches before sprint planning
- Create a checklist of default projects each role needs access to
- Document your team's role conventions in shared docs

**For Testers:**
- You'll receive email invitations to join workspaces
- Contact your workspace admin if you don't see expected projects

### Related

- [Users & Roles](/concepts/users) - Learn about role permissions
- [Workspaces](/concepts/workspaces) - Workspace organization
- [Projects](/concepts/projects) - Project-specific access

---

## Workflow 2: Assign Tests and Defects

Delegate work to team members by assigning test cases and defects.

### Steps

1. **Assign a Test Case**
   - Navigate to the test case
   - Click the "Assign" dropdown in the test header
   - Select the team member's name
   - The assigned user receives a notification

2. **Assign a Defect**
   - Open the defect you want to assign
   - Click "Assign" in the defect sidebar
   - Choose the assignee from team members list
   - Add a comment explaining the assignment if needed

3. **View Your Assignments**
   - Click your avatar in the top right
   - Select "My Assignments"
   - See all tests and defects assigned to you across projects

4. **Filter by Assignee**
   - In test cases or defects list
   - Click the Assignee filter
   - Select a team member to view their work

### Best Practices

**When to Assign vs Just Notify:**
- **Assign** when someone owns the outcome (fixing a bug, writing a test)
- **@mention** in comments when you need input but not ownership
- Assign defects to developers for fixes
- Assign test cases to testers for execution or review

**Writing Assignment Comments:**
- Explain context: why this person? what's the priority?
- Link related issues or commits
- Clarify expectations: "Please review by Friday" or "Investigate when possible"

### For Team Leads

Track team capacity by viewing assignments:
- See who has too many assigned items
- Rebalance work by reassigning
- Use assignments as accountability markers during standups

### Related

- [Users & Roles](/concepts/users) - User permissions and notifications

---

## Workflow 3: Use Comments for Discussion

Collaborate through threaded comments on test cases, failures, and defects.

### Steps

1. **Add a Comment**
   - Open any test case, case run, or defect
   - Scroll to the Comments section at the bottom
   - Type your message in the text box
   - Click "Post Comment"

2. **@Mention Team Members**
   - Type @ in the comment box
   - Select the team member's name from the dropdown
   - Mentioned users receive notifications

3. **Reply to Comments**
   - Click "Reply" on any existing comment
   - Your response threads below the original
   - Maintains conversation context

4. **Resolve Comment Threads**
   - When discussion is complete, click "Resolve Thread"
   - Resolved threads are collapsed but still visible
   - Reopen if further discussion needed

### Comment Use Cases

**On Test Cases:**
- Discuss test design and acceptance criteria
- Propose improvements or clarify steps
- Share domain knowledge with new testers

**On Failed Case Runs:**
- Investigate failures together: flaky test or real bug?
- Share context: "This fails on staging but passes locally"
- Decide whether to file a defect

**On Defects:**
- Developers ask for reproduction steps
- Testers confirm bug fixes
- Product owners clarify expected behavior

### Tips for Effective Comments

**Move Work Forward:**
- Ask specific questions: "Should this test cover the edge case where...?"
- Propose actions: "I suggest splitting this into two tests"
- Document decisions: "Agreed in standup: we'll fix this in v2.1"

**Avoid Comment Noise:**
- Keep comments focused on the test or defect
- Use chat/Slack for quick questions that don't need permanent record
- Edit comments instead of posting corrections separately

### For Different Audiences

**Executives/Stakeholders:**
- Use @mentions sparingly for high-priority items only
- Ask for summaries rather than detailed technical discussions

**Team Leads:**
- Use comments to coach junior testers
- Document rationales for test design decisions

**Testers:**
- Ask questions publicly rather than privately—others likely have the same question
- Share findings that might help other tests

### Related

- [Test Cases](/concepts/test-cases) - Test case structure and fields
- [Case Runs](/concepts/case-runs) - Individual test execution results
- [Defects](/concepts/defects) - Bug tracking and workflow

---

## Workflow 4: Share Test Results

Share test execution results with stakeholders who don't need Qualflare access.

### Steps

1. **Generate a Share Link**
   - Navigate to the launch or test report
   - Click "Share" in the top right of the page
   - Copy the generated share link

2. **Set Link Expiration** (optional)
   - Choose how long the link remains valid
   - Options: 7 days, 30 days, or never
   - Expired links require regeneration

3. **Send to Stakeholders**
   - Paste the link in emails, Slack, or documents
   - Recipients can view results without logging in
   - Share links show pass/fail status and test details

4. **Revoke Access** (if needed)
   - Return to the share dialog
   - Click "Revoke Link" to disable access immediately
   - Generate a new link if sharing is still needed

### When to Use Share Links

**For Stakeholders Without Access:**
- Product managers who need sign-off on releases
- External clients viewing QA results
- Management reviewing quality metrics

**For Temporary Access:**
- Sharing a specific launch for triage meeting
- Collaborating with vendors or contractors
- Including results in presentation materials

### Share Link Permissions

- **Read-only**: Viewers cannot modify any data
- **No authentication**: Recipients don't need Qualflare accounts
- **Scoped**: Each link is specific to one launch or report
- **Revocable**: Disable access anytime from the share dialog

### Alternative: Grant Viewer Access

For ongoing collaboration with stakeholders:
- Invite them to the workspace with "Viewer" role
- Viewers can browse all projects and results
- No need to generate share links repeatedly

### For Team Leads

- Create share links before triage meetings to save time
- Include share links in release notes for transparency
- Use share links for demoing quality metrics to leadership

### Related

- [Launches](/concepts/launches) - Test execution events and results
- [Users & Roles](/concepts/users) - Viewer role for ongoing access

---

## Workflow 5: Manage Permissions and Access

Control who can view, edit, and manage resources in your workspace and projects.

### Steps

1. **Change Workspace Role**
   - Open Workspace Settings > Members
   - Find the team member
   - Click their current role dropdown
   - Select the new role (Owner, Admin, Member, Viewer)
   - Changes take effect immediately

2. **Change Project Role**
   - Open Project Settings > Members
   - Find the team member
   - Select their project-specific role
   - Project roles override workspace roles for that project

3. **Remove from Workspace**
   - In Workspace Settings > Members
   - Click "Remove" next to the member
   - Confirm removal
   - User loses access to all projects in workspace

4. **Make Project Invite-Only**
   - Open Project Settings > General
   - Enable "Invite-only project"
   - Only explicitly added members can access
   - Useful for confidential or restricted projects

### Role-Based Access Control

| Role | Workspace | Projects |
|------|-----------|----------|
| **Owner** | Full control, billing, delete workspace | Full control |
| **Admin** | Manage users, settings, projects | Full control |
| **Member** | Create/edit tests, launches, defects | Create/edit tests, launches, defects |
| **Viewer** | View-only | View-only |

### When to Use Each Role

**Owner:**
- Workspace creators
- People who need billing access
- Co-owners who need full control

**Admin:**
- QA managers who manage team access
- Leads who configure project settings
- Trusted team members who handle user management

**Member:**
- Most testers and QA engineers
- Developers who run tests and create defects
- Anyone actively contributing to testing

**Viewer:**
- Stakeholders who need visibility but not editing
- Managers monitoring quality metrics
- External collaborators who should read but not modify

### Permission Hierarchy

- Workspace roles are the default across all projects
- Project roles are more specific and override workspace roles
- A user can be Admin in one project and Viewer in another
- Most restrictive permission applies when there's ambiguity

### For Workspace Admins

**Onboarding New Team Members:**
1. Invite with "Member" role as default
2. Assign to standard projects
3. Adjust to "Viewer" for stakeholders
4. Promote to "Admin" only as needed

**Regular Access Audits:**
- Review member list quarterly
- Remove former employees or contractors
- Downgrade roles for inactive team members
- Ensure no unintended "Owner" assignments

**Secure Projects:**
- Use invite-only projects for sensitive testing
- Grant project-specific access instead of workspace-wide
- Revoke access immediately when team members leave

### For Team Leads

- Request role changes through workspace admins
- Use project-specific roles to limit access to beta or confidential projects
- Document role decisions for team continuity

### Related

- [Users & Roles](/concepts/users) - Full role definitions and permissions
- [Workspaces](/concepts/workspaces) - Workspace-level management
- [Projects](/concepts/projects) - Project-specific access control

---

## Tips for Effective Collaboration

### Balancing Collaboration with Quality Control

**Avoid "Too Many Cooks":**
- Assign clear ownership for critical test cases
- Use comments for proposals, make changes after consensus
- Limit who can modify test suites and shared steps

**Maintain Test Quality:**
- Require peer review for test case creation
- Use assignments to track who's responsible for quality
- Create conventions for when to discuss vs. when to edit directly

### Onboarding New Team Members

**Day 1:**
1. Invite to workspace with appropriate role
2. Add to relevant projects
3. Share project overview and testing conventions

**Week 1:**
1. Assign them to review existing test cases
2. Have them execute tests to learn the system
3. Encourage questions in comments

**Ongoing:**
1. Gradually increase their permissions as they demonstrate understanding
2. Use comments to coach and provide feedback
3. Promote to Admin roles only when they're ready

### Communication Tips

**Use Qualflare Comments When:**
- Discussion needs permanent record with the test/defect
- Decisions affect test design or bug triage
- Team is distributed across time zones

**Use Chat/Slack When:**
- Quick questions that don't need documentation
- Urgent issues needing immediate attention
- General team communication unrelated to specific tests

**Use Email When:**
- Formal communication with stakeholders
- Sharing results with external parties
- Documentation that needs email trail

---

## Next Steps

Now that you can collaborate with your team, learn how to:

- [Organize Test Cases](/how-to/test-creation) - Structure your test suite for team efficiency
- [Track Defects](/how-to/defect-tracking) - Collaborate on bug resolution
- [Use Analytics](/how-to/analytics) - Understand team quality metrics
