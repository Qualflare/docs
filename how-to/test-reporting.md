---
title: Reporting Test Results
---

# Reporting Test Results

Learn how to analyze test results, generate reports for stakeholders, and communicate quality metrics effectively.

## Overview

Qualflare provides multiple ways to share test results:

- **Launch results**: View and analyze individual test execution
- **PDF reports**: Generate formal reports for stakeholders
- **Dashboards**: Track trends and quality metrics over time
- **Drill-down filters**: Investigate specific failure patterns
- **Data export**: Export results for external tools and custom reporting

---

## Workflow 1: View and Analyze Launch Results

After running tests, you need to understand what worked, what failed, and what the results mean for your project.

### Steps

1. Navigate to your project
2. Click **Launches** in the left sidebar
3. Click on the launch you want to analyze
4. Review the summary section:
   - **Total tests**: Number of tests executed
   - **Pass rate**: Percentage of tests that passed
   - **Failed tests**: Count and list of failures
   - **Duration**: How long the test run took

### Understanding the Summary

- **High pass rate (>95%)**: System is stable, ready for release consideration
- **Medium pass rate (80-95%)**: Some issues present, review failures
- **Low pass rate (<80%)**: Significant quality concerns, investigate

### Viewing Individual Results

1. Scroll to the test results table
2. Filter by status:
   - Click **Failed** to see only failures
   - Click **Passed** to see successful tests
   - Click **All** to see everything
3. Click on any test case to see:
   - Test steps and expected results
   - Actual outcome and failure details
   - Screenshots or error logs
   - Execution duration

### Comparing to Previous Runs

The launch view shows a trend comparison:
- **Improved**: Pass rate increased from previous run
- **Regressed**: Pass rate decreased from previous run
- **Stable**: Pass rate remained similar

Click **View Previous Launch** to compare detailed results side-by-side.

### Tips

- Always check the trend comparison—is this better or worse than last time?
- Start by investigating new failures (tests that passed before but failed now)
- Look for patterns in failure messages to identify systemic issues
- Use the duration metric to identify slow tests that may need optimization

---

## Workflow 2: Generate PDF Reports for Stakeholders

Share formal test reports with stakeholders who don't need access to the Qualflare UI.

### Steps

1. Navigate to your project
2. Click **Launches** in the left sidebar
3. Select the launch you want to report
4. Click **Export Report** in the action bar
5. Configure the report:
   - **Report name**: Descriptive title (e.g., "Regression Test - Jan 14")
   - **Include**: Choose what to include
     - Summary statistics
     - Test case details
     - Failure details
     - Screenshots
     - Charts and graphs
   - **Format**: PDF
6. Click **Generate Report**
7. Download the PDF when ready

### Creating Executive Summaries

For non-technical stakeholders:

1. In the export dialog, select **Executive Summary** mode
2. Include:
   - Pass rate and test coverage
   - High-level summary (e.g., "95% of tests passed")
   - Critical failures only
   - Risk assessment (Ready/Not Ready for release)
3. Exclude:
   - Technical stack traces
   - Detailed test steps
   - Individual test logs

### Scheduling Automated Reports

1. Navigate to **Project Settings**
2. Click **Report Subscriptions**
3. Click **New Subscription**
4. Configure:
   - **Report type**: Launch summary, trend analysis, or executive summary
   - **Frequency**: After each launch, daily, weekly
   - **Recipients**: Email addresses of stakeholders
   - **Filters**: Only include specific environments or test suites
5. Click **Save**

### Tips

- Use executive summaries for management updates
- Include detailed failure reports for development teams
- Schedule weekly reports for ongoing projects
- Customize report content based on the recipient's technical background

---

## Workflow 3: Use Dashboards for Trend Analysis

Dashboards provide visual insights into quality trends over time, helping you answer "are we getting better or worse?"

### Viewing the Project Dashboard

1. Navigate to your project
2. Click **Dashboard** in the left sidebar
3. View the default metrics:
   - **Pass rate trend**: Line chart showing pass rate over time
   - **Test execution count**: Bar chart of tests run per day/week
   - **Failure distribution**: Pie chart of failure types
   - **Flaky tests**: List of tests with inconsistent results

### Identifying Trends

**Improving quality:**
- Pass rate trending upward over multiple launches
- Fewer unique failures over time
- Reduced execution time (tests getting faster)

**Quality concerns:**
- Pass rate declining or stagnant
- New failures appearing consistently
- Flaky tests increasing (environment instability)

**Flaky test indicators:**
- Same test passes and fails inconsistently
- Failures cluster around specific times or environments
- No clear pattern in failure messages

### Customizing Dashboard Views

1. Click **Customize Dashboard**
2. Add or remove widgets:
   - **Pass rate chart**: Track overall quality
   - **Environment comparison**: Compare dev vs. staging vs. production
   - **Suite performance**: See which test areas have issues
   - **Failure heatmap**: Identify when failures occur
3. Set the time range:
   - Last 7 days, 30 days, or custom range
   - Filter by environment, project, or test suite

### Tips

- Check the dashboard daily to catch quality regressions early
- Use environment comparison to validate staging before production
- Investigate flaky tests—they undermine confidence in automation
- Share dashboard links with team members for transparency

---

## Workflow 4: Filter and Drill Down into Failures

When tests fail, you need to quickly find the root cause. Qualflare's filtering helps you narrow down failures efficiently.

### Basic Filtering

1. Navigate to **Launches** and select a launch
2. Use the filter bar to narrow results:
   - **Status**: Passed, Failed, Skipped, Blocked
   - **Suite**: Filter by test suite
   - **Assignee**: Filter by who executed the test
   - **Duration**: Show tests longer than a threshold

### Advanced Failure Analysis

1. Filter by **Failed** status
2. Group failures by:
   - **Error message**: See which tests failed with similar errors
   - **Test suite**: Identify problematic feature areas
   - **Assignee**: Check if certain testers are finding more issues

### Drilling into Specific Failures

1. Click on a failed test
2. Review the failure section:
   - **Error message**: What went wrong
   - **Stack trace**: Where it went wrong (for automated tests)
   - **Screenshots**: Visual evidence of the failure
   - **Logs**: Detailed output from the test
3. Click **View History** to see this test's past results:
   - Has this test failed before?
   - When did it last pass?
   - What changed since then?

### Finding Related Failures

1. From a failed test, click **Find Similar Failures**
2. Qualflare shows:
   - Other tests with the same error message
   - Tests in the same suite that failed
   - Tests that failed around the same time (environmental issues)

### Tips

- Group by error message to find systemic issues (e.g., all auth-related tests failing)
- Check test history to distinguish new bugs from flaky tests
- Use stack traces to identify the specific code or assertion that failed
- Link similar failures to the same defect to avoid duplicate bug reports

---

## Workflow 5: Export Test Data for External Tools

Sometimes you need to analyze test results in other tools or create custom reports.

### Export Options

1. Navigate to **Launches** and select a launch
2. Click **Export**
3. Choose export format:
   - **CSV**: Import into Excel, Google Sheets for custom analysis
   - **JSON**: Process programmatically or import into other tools
   - **PDF**: Formal report (see Workflow 2)

### CSV Export for Spreadsheet Analysis

1. Select **CSV** format
2. Choose which fields to include:
   - Test case ID and title
   - Status (passed/failed/skipped/blocked)
   - Duration
   - Assignee
   - Failure message
   - Suite name
3. Click **Export**
4. Open in Excel or Google Sheets to:
   - Create pivot tables for custom analysis
   - Calculate custom metrics
   - Merge with other project data
   - Create visualizations

### JSON Export for Automation

1. Select **JSON** format
2. Export includes full test details with metadata
3. Use for:
   - Custom reporting scripts
   - Integration with other tools (Jira, Slack, etc.)
   - Automated quality gates in CI/CD pipelines

### API Access

For programmatic access to test results, use the Qualflare REST API:

```javascript
// Example: Fetch launch results via API
const response = await fetch('https://api.qualflare.com/launches/123/results', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const results = await response.json();
```

See the [API documentation](https://docs.qualflare.com/api) for details.

### Tips

- Export to CSV when you need to create custom charts or pivot tables
- Use JSON exports for automated reporting pipelines
- Set up API integrations to post results to Slack or Microsoft Teams
- Combine test data with deployment data to correlate failures with code changes

---

## Best Practices for Stakeholder Communication

### Tailor the Message

| Audience | What to Include | Format |
|----------|----------------|--------|
| **Executive/Management** | Pass rate, release readiness, critical issues | Executive summary PDF |
| **Developers** | Failure details, stack traces, logs | Direct link to launch in Qualflare |
| **Product Managers** | Feature coverage, regression risk | Dashboard with trend analysis |
| **Customers/Users** | What's fixed, what's known | Release notes (derived from test reports) |

### Answer the Right Questions

Good test reporting answers these questions:

- **Are we ready to release?** → Use pass rate and critical failure count
- **What broke since last time?** → Compare launches, show new failures
- **Is quality improving?** → View dashboard trends
- **What should we fix first?** → Group failures by impact and frequency

### Be Transparent

- Share both good and bad results
- Explain trends (why is quality improving/regressing?)
- Call out flaky tests explicitly
- Document what's being done about failures

---

## Related Topics

- [Launches](/concepts/launches) - Understanding launch lifecycle and analytics
- [Case Runs](/concepts/case-runs) - Individual test result details
- [Dashboards](/reference/dashboards) - Full dashboard reference
- [Search & Filter](/reference/search) - Advanced filtering options
