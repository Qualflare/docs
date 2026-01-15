---
title: Analyze Quality Metrics
---

# Analyze Quality Metrics

Use Qualflare's analytics to understand test trends, identify flaky tests, track defects, monitor milestones, and create dashboards for your team.

## Workflow 1: View Pass Rate Trends

Track how your test pass rates change over time to identify quality improvements or regressions.

### Steps

1. **Open the Launches Page**
   - Navigate to your project
   - Click "Launches" in the left sidebar
   - You'll see a list of all test executions

2. **View Trend Chart**
   - Look for the trend chart at the top of the page
   - Pass rate percentage is plotted over time
   - Each point represents one launch execution

3. **Filter by Time Range**
   - Click the time range selector (default: Last 30 days)
   - Choose from: Last 7 days, Last 30 days, Last 90 days, All time
   - Chart updates to show the selected period

4. **Filter by Environment**
   - Click "Environment" filter
   - Select: dev, staging, production, or all
   - Compare trends across different environments

5. **Inspect Specific Points**
   - Hover over any point on the trend line
   - See pass rate, date, and launch name
   - Click to open that launch for details

### Interpreting Trends

**Improving Quality:**
- Pass rate trending upward over time
- Fewer dips or fluctuations
- Stabilizing at high pass rate (95%+)

**Quality Regression:**
- Pass rate declining over multiple launches
- New lows that don't recover
- Increasing failure rate across unrelated tests

**Stable Quality:**
- Consistent pass rate within small range
- Predictable patterns (e.g., slight weekend dips)
- No significant upward or downward trend

**Volatility:**
- Large swings between launches
- No clear pattern
- Often indicates flaky tests or environment instability

### Tips by Audience

**For Executives:**
- Focus on 30-90 day trends rather than daily fluctuations
- Ask: "Are we improving month-over-month?"
- Compare pass rates before and after quality initiatives

**For Team Leads:**
- Investigate any sudden drops >10%
- Correlate trends with releases or code changes
- Use trends to justify quality improvements or refactoring

**For Testers:**
- Check trends after bulk test updates
- Verify that new tests initially fail, then pass
- Flag unexpected patterns to team lead

### Related

- [Launches](/concepts/launches) - Test execution events and results

---

## Workflow 2: Identify Flaky Tests

Find tests that fail inconsistently across multiple runs, indicating instability or environment issues.

### Steps

1. **Navigate to Test Analytics**
   - Go to your project
   - Click "Analytics" in the left sidebar
   - Select "Flaky Tests" from the analytics menu

2. **Review Flaky Test Report**
   - Tests are ranked by flakiness score (0-100%)
   - Higher score = more inconsistent behavior
   - Each test shows pass/fail pattern over recent runs

3. **Filter by Threshold**
   - Adjust the "Min Flakiness" slider
   - Focus on tests above 30% flakiness (fails 3+ out of 10 runs unpredictably)
   - Lower threshold to see borderline cases

4. **Inspect Individual Tests**
   - Click on a flaky test to open details
   - See execution history: pass/fail pattern across launches
   - Identify if failures cluster in specific environments

5. **Take Action on Flaky Tests**
   - **Quarantine**: Mark test as "flaky" to exclude from pass rate
   - **Fix**: Assign to developer to stabilize
   - **Delete**: Remove if test is obsolete or unreliable

### Flaky Test Patterns

**Environment-Specific:**
- Passes on dev, fails on staging
- Fails only in production
- Indicates environment configuration differences

**Timing-Dependent:**
- Passes when run alone, fails in parallel
- Intermittent timeout errors
- Race conditions or delays

**Data-Dependent:**
- Fails when specific test data exists
- Passes/fails depending on test execution order
- Tests sharing state or data

**Test Code Issues:**
- Hard-coded timestamps or dates
- brittle selectors or locators
- Missing cleanup between runs

### Prioritizing Flaky Test Fixes

**High Priority (Fix Immediately):**
- Flakiness > 50% (test is unreliable)
- Critical path tests blocking releases
- Tests that quarantine large numbers of failures

**Medium Priority (Fix Soon):**
- Flakiness 20-50% (occasionally unreliable)
- Regression tests for stable features
- Tests that team depends on for decisions

**Low Priority (Technical Debt):**
- Flakiness < 20% (mostly reliable)
- Tests for deprecated features
- Low-priority edge cases

### Tips for Different Audiences

**For Executives:**
- Ask: "What percentage of our tests are flaky?"
- Understand that flaky tests undermine confidence in automation
- Support time allocated for test stabilization

**For Team Leads:**
- Track flaky test count as a quality metric
- Allocate 20% of testing time to fixing flaky tests
- Quarantine flaky tests during release freezes

**For Testers:**
- Flag flaky tests immediately when you notice patterns
- Document conditions that cause failures
- Work with developers to reproduce and fix

### Related

- [Launches](/concepts/launches) - Test execution history
- [Test Cases](/concepts/test-cases) - Test structure and fields

---

## Workflow 3: Track Defect Resolution

Monitor defect discovery and resolution rates to understand team velocity and quality trends.

### Steps

1. **Open Defect Analytics**
   - Navigate to your project
   - Click "Analytics" in the left sidebar
   - Select "Defect Trends" from the analytics menu

2. **View Defect Trends Chart**
   - Line chart shows open defects over time
   - Bars show new defects created per period
   - Green area shows resolved defects

3. **Filter by Severity**
   - Click "Severity" filter
   - Select specific levels: Critical, High, Medium, Low
   - Track how critical defects trend over time

4. **Filter by Time Period**
   - Choose aggregation: Daily, Weekly, Monthly
   - Longer periods smooth out noise
   - Weekly is often best for sprint-level planning

5. **View Aging Report**
   - Scroll to "Defect Age" section
   - See how long defects have been open
   - Identify old defects that need attention

### Interpreting Defect Trends

**Healthy Trends:**
- Open defects stable or decreasing
- Resolution rate matches or exceeds discovery rate
- Critical bugs resolved within SLA

**Concerning Trends:**
- Open defects steadily increasing
- Resolution backlog growing
- High-severity defects aging without action

**Quality Improvements:**
- Fewer defects discovered over time
- Defects caught earlier in testing
- Lower severity on average (finding bugs before production)

**Quality Regressions:**
- Spike in critical/high defects
- Production defects increasing
- Same issues recurring after "fixes"

### Defect Age Analysis

**Fresh Defects (< 7 days old):**
- Expected in active development
- Team is finding and documenting issues
- Monitor if these are being addressed

**Aging Defects (7-30 days old):**
- May indicate backlog or resource constraints
- Prioritize based on severity and user impact
- Consider triage to update severity if needed

**Stale Defects (> 30 days old):**
- Technical debt that needs attention
- May no longer be relevant (verify)
- Consider closing if obsolete or won't fix

### Tips by Audience

**For Executives:**
- Track "Total Open Defects" as a quality indicator
- Ask: "Are we reducing defect backlog?"
- Review defect trends before major releases
- Support "bug fix sprints" if backlog is growing

**For Team Leads:**
- Use aging report to plan sprint capacity
- Allocate 20-30% of sprint to defect resolution
- Set SLA targets for critical defects (e.g., 48 hours)
- Escalate if high-severity defects age beyond SLA

**For Testers:**
- Prioritize testing high-defect areas (find more bugs faster)
- Re-test fixed defects quickly to close the loop
- Flag if "fixed" defects recur (indicates incomplete fix)

### Related

- [Defects](/concepts/defects) - Defect lifecycle and workflow
- [Milestones](/concepts/milestones) - Quality gates for releases

---

## Workflow 4: Monitor Milestone Progress

Track testing progress toward release targets and quality gates.

### Steps

1. **Open Milestones Page**
   - Navigate to your project
   - Click "Milestones" in the left sidebar
   - See all milestones with their status

2. **View Milestone Details**
   - Click on a milestone name
   - See progress summary: pass rate, tests run, defects remaining
   - View trend chart showing progress over time

3. **Check Completion Criteria**
   - Scroll to "Success Criteria" section
   - See which criteria are met (green checkmark)
   - Identify blocking criteria (red X)

4. **Drill Down by Test Status**
   - Click "Passed", "Failed", or "Not Run" counts
   - See which specific tests are in each category
   - Take action on failing or untested tests

5. **Filter by Associated Defects**
   - Click "Linked Defects" count
   - See defects blocking milestone completion
   - Prioritize fixes based on milestone timeline

### Milestone Progress Metrics

**Pass Rate:**
- Percentage of tests passing
- Target: Typically 95-100% for production releases
- Lower thresholds may be acceptable for beta/alpha

**Test Execution Coverage:**
- How many required tests have been run
- Identifies untested areas
- Target: 100% of planned tests executed

**Defect Count:**
- Number of open defects linked to milestone
- Breakdown by severity (Critical, High, Medium, Low)
- Target: Zero critical defects blocking release

**Trend Direction:**
- Arrow showing if metrics are improving or declining
- Helps predict if milestone will be met on time
- Early warning for course correction

### Interpreting Milestone Status

**On Track:**
- Pass rate at or above target
- All critical tests passing
- Blocking defects resolved
- Trend arrows pointing up or stable

**At Risk:**
- Pass rate below target but improving
- Some critical tests still failing
- Work remaining but achievable
- Trend arrows pointing up

**Blocked:**
- Pass rate declining or stagnant below target
- Critical defects unresolved
- Tests not executed
- Trend arrows pointing down

### Using Milestones for Decisions

**Go/No-Go Meetings:**
- Review milestone progress with stakeholders
- Focus on blocking criteria, not overall percentage
- Make data-driven ship decisions

**Sprint Planning:**
- Use milestone progress to allocate capacity
- Balance new feature work vs. quality improvements
- Set realistic expectations for release dates

**Quality Gates:**
- Define clear milestone criteria before development starts
- Communicate criteria to development team
- Enforce gates consistently (don't waive standards)

### Tips by Audience

**For Executives:**
- Review milestone status weekly before releases
- Ask: "What's blocking this milestone?" not just "What's the pass rate?"
- Support decisions to delay releases for quality
- Celebrate milestones met with high quality

**For Team Leads:**
- Create milestones for every release or sprint
- Update success criteria as requirements evolve
- Use milestone data in retrospectives
- Escalate early if milestone is at risk

**For Testers:**
- Link your tests to relevant milestones
- Prioritize testing for milestone-blocking areas
- Run smoke tests early to find critical issues
- Update test cases as you learn more about the product

### Related

- [Milestones](/concepts/milestones) - Milestone components and tracking
- [Test Plans](/concepts/test-plans) - Scheduling test execution
- [Defects](/concepts/defects) - Bugs blocking milestones

---

## Workflow 5: Create Custom Dashboards

Build tailored dashboards for your team's specific needs and monitoring requirements.

### Steps

1. **Create a New Dashboard**
   - Navigate to your project
   - Click "Dashboards" in the left sidebar
   - Click "New Dashboard" button

2. **Name Your Dashboard**
   - Enter a descriptive name: "Sprint 24 Quality", "Release Dashboard"
   - Optionally add a description
   - Click "Create"

3. **Add Widgets**
   - Click "Add Widget" button
   - Choose widget type from the dropdown
   - Configure widget settings (filters, time ranges)
   - Click "Add" to place widget on dashboard

4. **Arrange Your Layout**
   - Drag widgets to rearrange
   - Resize widgets by dragging corners
   - Create sections with related widgets

5. **Save and Share**
   - Changes save automatically
   - Click "Share" to generate link
   - Team members with access can view the dashboard

### Available Widget Types

**Pass Rate Chart:**
- Line graph showing pass rate over time
- Filter by test suite, environment, labels
- Compare multiple series

**Test Execution Summary:**
- Bar chart of test results by status
- Shows passed, failed, skipped counts
- Group by suite, folder, or labels

**Defect Trend:**
- Line chart of open/closed defects over time
- Filter by severity, assignee, labels
- Track defect backlog

**Flaky Tests List:**
- Table of flaky tests with scores
- Filter by flakiness threshold
- Quick links to quarantine or fix

**Milestone Progress:**
- Progress bars for active milestones
- Shows pass rate, defects remaining
- Quick status overview

**Launch History:**
- List of recent launches
- Filter by environment, source
- Quick access to detailed results

### Dashboard Templates by Use Case

**For Executives:**
- "Quality Overview" dashboard with:
  - Overall pass rate trend (last 90 days)
  - Defect count by severity
  - Upcoming milestones with status
  - Release readiness summary

**For Team Leads:**
- "Sprint Health" dashboard with:
  - Pass rate by test suite
  - Flaky tests list
  - Defect aging report
  - Team assignment summary
  - Milestone progress

**For Testers:**
- "Daily Testing" dashboard with:
  - Recent launches requiring attention
  - Failing tests assigned to me
  - Defects requiring verification
  - My test execution summary

**For CI/CD Monitoring:**
- "Build Quality" dashboard with:
  - Latest CI launch status
  - Pass rate trend for CI builds
  - Flaky tests in production
  - Environment comparison (dev vs staging)

### Dashboard Best Practices

**Purpose-Driven Design:**
- Start with the question: "What decisions does this dashboard support?"
- Don't clutter with metrics that aren't actionable
- Each widget should answer a specific question

**Audience-Appropriate:**
- Executives: High-level trends, release readiness
- Team leads: Detailed metrics, team allocation
- Testers: Personal assignments, immediate actions
- Each role benefits from different views

**Maintain and Update:**
- Review dashboards monthly for relevance
- Remove unused widgets
- Update filters as projects evolve
- Archive dashboards for completed milestones

### Tips for Different Audiences

**For Executives:**
- Create one high-level dashboard per major product area
- Check weekly before release decisions
- Use dashboards in status meetings (share your screen)
- Ask team to explain anomalies in the data

**For Team Leads:**
- Create separate dashboards for each sprint or milestone
- Update widgets as sprint focus changes
- Use dashboards in standup to track progress
- Share relevant dashboard sections with stakeholders

**For Testers:**
- Personalize "My Work" dashboard for your assignments
- Create project-specific dashboards when working on multiple products
- Check daily for priority changes

### Related

- [Launches](/concepts/launches) - Test execution data
- [Defects](/concepts/defects) - Bug tracking and metrics
- [Milestones](/concepts/milestones) - Progress tracking

---

## Tips for Using Analytics Effectively

### Setting Up Alerts for Quality Degradation

**Configure Alert Thresholds:**
- Navigate to Project Settings > Alerts
- Set pass rate threshold (e.g., alert if below 90%)
- Choose notification method: email, Slack webhook
- Filter by environment to avoid noise from development

**Alert Use Cases:**
- CI build failures blocking deployment
- Critical defects aging beyond SLA
- Flaky test count increasing suddenly
- Milestone pass rate declining

### Using Analytics to Drive Process Improvements

**Data-Driven Decisions:**
- "Our pass rate dropped after the framework upgrade" → rollback or investigate
- "Flaky tests increased 40% after hiring new testers" → improve training
- "Defect count spikes every sprint end" → adjust testing balance

**Continuous Improvement:**
- Review analytics monthly in retrospectives
- Identify trends and discuss root causes
- Run experiments: "Will parallel testing reduce flakiness?"
- Measure impact of changes using before/after data

### Common Analytics Pitfalls

**Vanity Metrics:**
- Focusing on total test count without quality
- Celebrating high pass rate while ignoring skipped tests
- Tracking "tests written" instead of "value delivered"

**Misinterpreting Noise:**
- Overreacting to single-day fluctuations
- Blaming testers for systemic issues
- Comparing pass rates across different environments without context

**Analysis Paralysis:**
- Spending more time analyzing than improving
- Creating too many dashboards to monitor effectively
- Tracking metrics that don't drive action

**Focus on Actionable Insights:**
- "What should we do differently based on this data?"
- "Who needs to know about this trend?"
- "What experiment can we run to test our hypothesis?"

---

## Next Steps

Now that you can analyze quality metrics, learn how to:

- [Execute Tests](/how-to/test-execution) - Generate data for analytics
- [Collaborate with Your Team](/how-to/collaboration) - Share insights with stakeholders
- [Track Defects](/how-to/defect-tracking) - Use data to prioritize bug fixes
