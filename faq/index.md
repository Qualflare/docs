---
title: Frequently Asked Questions
description: Quick answers to common questions about Qualflare test management
---

# Frequently Asked Questions

Find quick answers to common questions about Qualflare. Can't find what you're looking for? Check the [Troubleshooting guide](/faq/troubleshooting) or browse our detailed documentation.

## Getting Started

<details>
<summary><strong>What is Qualflare?</strong></summary>
<!--@search: what is qualflare, qualflare overview, about qualflare-->

Qualflare is a comprehensive QA test management platform that helps teams organize, execute, and track their software testing efforts. It provides both a web application for manual test management and a CLI tool for integrating automated test results from CI/CD pipelines.

**See also:** [Quick Start Guide](/quick-start/), [Overview](/)

</details>

<details>
<summary><strong>How does Qualflare work?</strong></summary>
<!--@search: how qualflare works, qualflare workflow, test management flow-->

Qualflare works by organizing your testing efforts into **workspaces** (for teams/organizations), **projects** (for products or applications), and **test cases** (individual test scenarios). You can group test cases into **suites** and **plans**, then execute them as **launches**. Test results are tracked as **case runs**, and any issues found are recorded as **defects**.

**See also:** [Concepts Overview](/concepts/), [Organizational Entities](/concepts/#organizational-entities)

</details>

<details>
<summary><strong>Do I need the CLI tool?</strong></summary>
<!--@search: cli tool needed, do i need cli, automated testing, ci cd-->

You need the CLI tool if you want to:
- Integrate automated test results from CI/CD pipelines
- Upload test results from 20+ frameworks (JUnit, pytest, Jest, Cypress, etc.)
- Enrich test runs with Git metadata (branch, commit, author)
- Run tests in automated workflows and report results to Qualflare

If you only do manual testing, the web UI may be sufficient.

**See also:** [CLI Installation](/cli/installation/), [Upload Command](/cli/upload/)

</details>

<details>
<summary><strong>Is there a free trial available?</strong></summary>
<!--@search: free trial, pricing, cost, free plan-->

Yes! Qualflare offers a free tier that includes:
- Up to 3 users per workspace
- Unlimited projects
- Basic test management features
- Community support

Upgrade to a paid plan for more users, advanced features, and priority support.

**See also:** [Account & Billing](#account-billing)

</details>

<details>
<summary><strong>How do I get started?</strong></summary>
<!--@search: getting started, setup, onboarding, first steps-->

1. **Sign up** for a Qualflare account
2. **Create a workspace** for your team or organization
3. **Create a project** for your application
4. **Create test cases** or import existing tests
5. **Organize tests** into suites and plans
6. **Run tests** manually or via the CLI tool

**See also:** [Quick Start Guide](/quick-start/)

</details>

## Features & Concepts

<details>
<summary><strong>What's the difference between test cases, suites, and plans?</strong></summary>
<!--@search: test case vs suite vs plan, difference, test organization-->

- **Test Case**: A single test scenario with steps and expected results
- **Test Suite**: A collection of test cases grouped by feature, module, or type
- **Test Plan**: A collection of test suites (and individual cases) scheduled for execution together

Think of it like files, folders, and playlists: cases are individual tests, suites organize them, and plans are ready-to-run test playlists.

**See also:** [Test Cases](/concepts/test-cases/), [Test Suites](/concepts/test-suites/), [Test Plans](/concepts/test-plans/)

</details>

<details>
<summary><strong>What are environments?</strong></summary>
<!--@search: environments, staging, production, test environments-->

Environments represent different deployment targets where you run tests (e.g., Development, Staging, Production). Each launch can be associated with an environment, allowing you to track test results across different stages of your deployment pipeline.

**See also:** [Environments](/reference/environments/), [Launches](/concepts/launches/)

</details>

<details>
<summary><strong>How do launches work?</strong></summary>
<!--@search: launches, test execution, test runs-->

A **launch** is a single execution of a test plan. When you run a test plan, Qualflare creates a launch containing **case runs** (individual test executions) for each test case in the plan. Launches capture the state of your tests at a point in time, including results, duration, and environment.

**See also:** [Launches](/concepts/launches/), [Test Execution Guide](/how-to/test-execution/)

</details>

<details>
<summary><strong>What are shared steps?</strong></summary>
<!--@search: shared steps, reusable steps, test steps-->

Shared steps are reusable test step sequences that can be referenced across multiple test cases. They help you:
- Avoid duplicating common test procedures
- Maintain consistency across tests
- Update steps in one place

For example, a "Login" shared step can be used by any test that requires authentication.

**See also:** [Shared Steps](/concepts/shared-steps/)

</details>

<details>
<summary><strong>What are case runs?</strong></summary>
<!--@search: case runs, test results, test execution status-->

A **case run** is a single execution of a test case within a launch. Each case run has a status (Passed, Failed, Skipped, etc.), duration, and optional notes, screenshots, or defects. Launches contain multiple case runs—one for each test case executed.

**See also:** [Case Runs](/concepts/case-runs/), [Launches](/reference/launches/)

</details>

## Using the Web UI

<details>
<summary><strong>How do I create a test case?</strong></summary>
<!--@search: create test case, add test, write test-->

1. Navigate to your project
2. Click **Test Cases** in the sidebar
3. Click **New Test Case**
4. Enter the test case title, description, and steps
5. Set priority and automation status
6. Save the test case

**See also:** [Creating Test Cases](/how-to/test-creation/), [Test Cases Reference](/reference/test-cases/)

</details>

<details>
<summary><strong>How do I organize tests into suites?</strong></summary>
<!--@search: organize tests, test suite, group tests-->

1. Navigate to **Test Suites** in your project
2. Click **New Suite**
3. Enter suite name and description
4. Add test cases to the suite
5. Save the suite

You can organize suites by feature, module, priority, or any criteria that suits your workflow.

**See also:** [Organizing Tests](/how-to/test-organization/), [Test Suites Reference](/reference/test-suites/)

</details>

<details>
<summary><strong>How do I run tests?</strong></summary>
<!--@search: run tests, execute tests, test execution-->

**Manual execution:**
1. Create a test plan with your test suites
2. Click **Run** on the test plan
3. Select the environment
4. Work through each test case, updating results
5. Add notes, defects, or attachments as needed

**Automated execution:**
- Use the CLI tool to upload results from your CI/CD pipeline
- Tests run automatically as part of your build process

**See also:** [Executing Tests](/how-to/test-execution/), [Test Reporting](/how-to/test-reporting/)

</details>

<details>
<summary><strong>How do I view test results?</strong></summary>
<!--@search: view results, test results, launch results-->

Navigate to **Launches** in your project and click on a launch to see:
- Overall pass/fail statistics
- Individual case run results
- Duration and environment details
- Associated defects and notes

Use filters to find specific launches by date, environment, or status.

**See also:** [Launches Reference](/reference/launches/), [Analytics](/how-to/analytics/)

</details>

<details>
<summary><strong>How do I collaborate with my team?</strong></summary>
<!--@search: collaboration, team, comments, sharing-->

Qualflare supports team collaboration through:
- **Comments**: Add comments to test cases, launches, and defects
- **Assignments**: Assign defects and tasks to team members
- **Tags**: Use tags to categorize and filter items
- **Shared Workspaces**: All team members access the same project data
- **Activity Feeds**: Track changes and updates across projects

**See also:** [Collaboration Guide](/how-to/collaboration/)

</details>

## CLI Tool

<details>
<summary><strong>Why should I use the CLI tool?</strong></summary>
<!--@search: why use cli, cli benefits, automated testing-->

The CLI tool enables you to:
- **Integrate with CI/CD**: Upload test results from automated builds
- **Support 20+ frameworks**: JUnit, pytest, Jest, Cypress, Playwright, and more
- **Enrich with Git data**: Automatically capture branch, commit, and author information
- **Validate locally**: Check test result files before uploading
- **Automate workflows**: Incorporate test reporting into your pipeline

**See also:** [CLI Overview](/cli/), [Installation](/cli/installation/)

</details>

<details>
<summary><strong>What frameworks are supported?</strong></summary>
<!--@search: supported frameworks, frameworks list, junit, pytest, jest-->

The CLI tool supports 20+ testing frameworks, including:
- **Java**: JUnit, TestNG
- **Python**: pytest, unittest
- **JavaScript**: Jest, Mocha, Jasmine, AVA, Tape
- **TypeScript**: Jest, Mocha, Jasmine
- **E2E**: Playwright, Cypress, Selenium, Puppeteer
- **API**: Newman (Postman), REST Assured
- **Performance**: k6, Gatling
- **Behavior**: Cucumber, SpecFlow
- **Security**: OWASP ZAP, Burp Suite

Run `qualflare list-formats` to see all supported formats.

**See also:** [Upload Command](/cli/upload/)

</details>

<details>
<summary><strong>How do I install the CLI tool?</strong></summary>
<!--@search: install cli, installation, setup-->

**macOS (Homebrew):**
```bash
brew install qualflare/tap/qualflare
```

**Linux/macOS (curl):**
```bash
curl -sSL https://get.qualflare.com/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://get.qualflare.com/install.ps1 | iex
```

**Docker:**
```bash
docker pull qualflare/qualflare-cli:latest
```

**See also:** [Installation Guide](/cli/installation/)

</details>

<details>
<summary><strong>How do I integrate with CI/CD?</strong></summary>
<!--@search: ci cd, integration, github actions, jenkins-->

Basic integration steps:

1. Install the CLI in your CI environment
2. Set environment variables (`QUALFLARE_API_KEY`, `QUALFLARE_PROJECT_ID`)
3. Run your tests
4. Upload results using `qualflare upload`

**Example (GitHub Actions):**
```yaml
- name: Run tests
  run: pytest

- name: Upload to Qualflare
  run: qualflare upload test-results/junit.xml
  env:
    QUALFLARE_API_KEY: ${{ secrets.QUALFLARE_API_KEY }}
```

**See also:** [CI/CD Integration](/cli/ci-cd/)

</details>

<details>
<summary><strong>How does auto-detection work?</strong></summary>
<!--@search: auto detection, framework detection, automatic-->

The CLI tool automatically detects your test framework based on file patterns:
- `junit.xml`, `TEST-*.xml` → JUnit
- `pytest_results.xml` → pytest
- `results.json` (Jest format) → Jest
- `cypress/results/*.json` → Cypress
- And 15+ more patterns

If auto-detection fails, specify the format explicitly with `--format`.

**See also:** [Upload Command](/cli/upload/)

</details>

## Account & Billing

<details>
<summary><strong>What are the user limits?</strong></summary>
<!--@search: user limits, user count, team size-->

User limits depend on your plan:
- **Free**: Up to 3 users per workspace
- **Team**: Up to 20 users per workspace
- **Enterprise**: Unlimited users

Each user gets full access to all features within their assigned workspaces.

**See also:** [Pricing page](https://qualflare.com/pricing)

</details>

<details>
<summary><strong>What are the workspace limits?</strong></summary>
<!--@search: workspace limits, multiple workspaces-->

- **Free**: 1 workspace
- **Team**: Up to 5 workspaces
- **Enterprise**: Unlimited workspaces

Each workspace is isolated with its own users, projects, and settings.

**See also:** [Workspaces](/concepts/workspaces/), [Workspace Settings](/reference/workspace-settings/)

</details>

<details>
<summary><strong>What pricing tiers are available?</strong></summary>
<!--@search: pricing, plans, tiers, cost-->

- **Free**: $0/month — 3 users, 1 workspace, basic features
- **Team**: $XX/month — 20 users, 5 workspaces, advanced features
- **Enterprise**: Custom — Unlimited users, SSO, priority support

All plans include access to the CLI tool and core test management features.

**See also:** [Pricing page](https://qualflare.com/pricing)

</details>

<details>
<summary><strong>How do I upgrade my plan?</strong></summary>
<!--@search: upgrade, change plan, billing-->

1. Go to **Workspace Settings**
2. Click **Billing** or **Subscription**
3. Select your desired plan
4. Enter payment information
5. Confirm the upgrade

Changes take effect immediately. Prorated charges apply.

**See also:** [Workspace Settings](/reference/workspace-settings/)

</details>

<details>
<summary><strong>How long is test data retained?</strong></summary>
<!--@search: data retention, data storage, history-->

- **Free**: 90 days
- **Team**: 1 year
- **Enterprise**: 3+ years (customizable)

Launch history, test results, and attachments are retained according to your plan. Data beyond the retention period may be archived or deleted.

**See also:** [Data export](#technical) for exporting your data

</details>

## Technical

<details>
<summary><strong>Is there an API available?</strong></summary>
<!--@search: api, rest api, developer api-->

Yes! Qualflare provides a REST API for:
- Creating and managing test cases
- Triggering test runs
- Uploading test results
- Querying test data
- Managing workspaces and projects

API documentation is available separately for developers.

**See also:** [API Documentation](https://qualflare.com/docs/api)

</details>

<details>
<summary><strong>Can I export my data?</strong></summary>
<!--@search: export data, download data, backup-->

Yes, you can export:
- Test cases and suites (CSV, JSON)
- Test launch results (PDF, CSV)
- Defect data (CSV)

Use the **Export** option in the relevant sections or contact support for bulk exports.

**See also:** [Workspace Settings](/reference/workspace-settings/)

</details>

<details>
<summary><strong>What integrations are available?</strong></summary>
<!--@search: integrations, slack, jira, github-->

Qualflare integrates with:
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins, CircleCI
- **Communication**: Slack, Microsoft Teams
- **Issue Tracking**: Jira, GitHub Issues, Linear
- **Version Control**: GitHub, GitLab, Bitbucket

Configure integrations in **Workspace Settings**.

**See also:** [CLI Integration](/cli/ci-cd/)

</details>

<details>
<summary><strong>How is my data secured?</strong></summary>
<!--@search: security, privacy, data protection-->

Qualflare implements multiple security measures:
- **Encryption**: All data encrypted in transit (TLS 1.3) and at rest (AES-256)
- **Authentication**: Secure API keys and SSO support
- **Access Control**: Role-based permissions per workspace and project
- **Compliance**: SOC 2 Type II certified
- **Data Isolation**: Each workspace's data is logically separated

**See also:** [Privacy Policy](https://qualflare.com/privacy)

</details>

<details>
<summary><strong>Can I self-host Qualflare?</strong></summary>
<!--@search: self hosted, on premise, deployment-->

Self-hosting is available for Enterprise customers. This includes:
- Docker containers for easy deployment
- Kubernetes Helm charts
- On-premise or private cloud deployment
- Full control over your data

Contact sales for self-hosting options and licensing.

**See also:** [Enterprise page](https://qualflare.com/enterprise)

</details>

<details>
<summary><strong>What browsers are supported?</strong></summary>
<!--@search: browser support, supported browsers, compatibility-->

Qualflare supports the latest versions of:
- Google Chrome
- Mozilla Firefox
- Apple Safari
- Microsoft Edge

We recommend using Chrome for the best experience.

</details>

---

Still have questions? [Contact our support team](https://qualflare.com/support) or check the [Troubleshooting guide](/faq/troubleshooting).
