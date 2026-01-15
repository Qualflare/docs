---
title: Quick Start
---

# Quick Start

Get started with Qualflare in minutes.

## What is Qualflare?

Qualflare is a QA Test Management system that helps teams organize, execute, and track their software testing. Whether you're running manual tests, automated tests, or a mix of both, Qualflare provides a central hub for all your testing activities.

## Who is this for?

- **QA Engineers** managing test suites and execution cycles
- **Software Testers** organizing and running manual tests
- **Project Managers** tracking quality metrics and release readiness
- **Developers** integrating automated test results into the QA process

## What you'll learn

In this guide, you'll:
- Create a Qualflare account and set up your workspace
- Create your first project
- Write and organize test cases
- Run tests and upload results via the CLI
- View and understand test results

---

## Creating an Account

1. Go to [qualflare.com](https://qualflare.com) and click **Sign Up**
2. Enter your email address and create a password
3. Verify your email address when prompted

Once verified, you'll be guided through creating your first workspace.

<VisualPlaceholder description="Sign up form and email verification screen" size="small" />

## Creating Your First Workspace

A **workspace** is the top-level container in Qualflare. It's where you invite team members and manage your projects.

1. After signing up, you'll see the workspace creation screen
2. Enter a name for your workspace (e.g., "My Company QA")
3. Select your region for optimal performance
4. Click **Create Workspace**

<VisualPlaceholder description="Workspace dashboard view showing projects and team members" />

## Creating Your First Project

A **project** lives within a workspace and contains your test cases, launches, and results.

1. From your workspace dashboard, click **New Project**
2. Enter a project name (e.g., "Web App Tests" or "API Testing")
3. Optionally add a description
4. Click **Create Project**

---

## Creating Your First Test Case

Test cases are the individual tests you want to run.

1. In your project, navigate to **Test Cases** in the left sidebar
2. Click **New Test Case**
3. Fill in the test case details:
   - **Title**: A clear, descriptive name (e.g., "User login with valid credentials")
   - **Description**: What the test validates
   - **Steps**: Step-by-step instructions to execute the test
   - **Expected Result**: What should happen if the test passes
4. Click **Save**

<VisualPlaceholder description="Test case form with title, steps, and expected result fields" size="small" />

### Organizing with Test Suites

As your test library grows, organize related test cases into **suites**:

1. Navigate to **Test Suites** in the sidebar
2. Click **New Suite**
3. Name the suite (e.g., "Authentication Tests")
4. Add test cases to the suite by dragging them in or using the **Add Cases** button

---

## Running Tests via the CLI

The Qualflare CLI (`qf`) lets you upload test results from 20+ testing frameworks directly to your projects.

### Installing the CLI

```bash
# macOS/Linux
curl -sSL https://cli.qualflare.com/install.sh | sh

# Or using npm
npm install -g @qualflare/cli
```

### Running Your Tests

Run your tests normally using your preferred framework:

```bash
# Example with pytest
pytest tests/ --junitxml=results.xml

# Example with Jest
jest --ci --reporters=default --reporters=jest-junit
```

### Uploading Results

Upload your test results to Qualflare:

```bash
qf upload results.xml \
  --project "Web App Tests" \
  --launch "CI Build #123"
```

The CLI will:
- Detect the test framework automatically
- Parse the results file
- Upload results to your Qualflare project
- Create a new **launch** with the results

### Viewing Results in Qualflare

1. Navigate to your project in Qualflare
2. Click **Launches** in the sidebar
3. Click on the launch you just created to see:
   - Overall pass/fail status
   - Individual test case results
   - Failure details and stack traces

<VisualPlaceholder description="Launch results view showing pass/fail summary and test details" />

---

## Next Steps

You've completed the Quick Start! Here's where to go next:

- **[Concepts](/concepts/)** - Learn about workspaces, projects, test cases, launches, and other key entities
- **[How-to Guides](/how-to/)** - Step-by-step guides for common workflows like creating test plans, tracking defects, and analyzing results
- **[CLI Tool Documentation](/cli/)** - Full details on CLI commands, supported frameworks, and CI/CD integration

---

Need help? Check the [FAQ](/faq/) or [Troubleshooting](/faq/troubleshooting) guide.
