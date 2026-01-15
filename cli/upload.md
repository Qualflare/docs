---
title: Upload Command
description: Upload test results to Qualflare with the qf upload command
---

# Upload Command

The `qf upload` command parses test result files and uploads them to Qualflare. It supports 19 different test frameworks across five categories: Unit Testing, BDD, UI/E2E Testing, API Testing, and Security Testing.

## Basic Syntax

```bash
qf upload [files...] [flags]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `files...` | One or more test result files to upload. Supports glob patterns like `*.xml` or `**/*.json` |

### Examples

```bash
# Upload a single JUnit XML file
qf upload results.xml --project my-app --format junit

# Auto-detect format from file
qf upload playwright-results.json --project my-app

# Upload multiple files with glob pattern
qf upload test-results/*.xml --project my-app --format junit

# Specify environment and git metadata
qf upload results.xml --project my-app --environment staging --branch main --commit abc123

# Dry run - parse without uploading
qf upload results.xml --project my-app --dry-run

# Output parsed results as JSON (use with dry-run)
qf upload results.xml --project my-app --dry-run --output json
```

## Flags

All flags can be provided as command-line options or set via environment variables (see [CI/CD Integration](./ci-cd)).

| Flag | Short | Type | Default | Description |
|------|-------|------|---------|-------------|
| `--format` | `-f` | string | `""` (auto-detect) | Test framework format. Use `qf list-formats` to see all supported formats. |
| `--project` | `-p` | string | `""` | Project name in Qualflare. Defaults to the project associated with your API key. |
| `--environment` | `-e` | string | `""` | Environment name (e.g., `staging`, `production`, `dev`) |
| `--branch` | | string | `""` | Git branch name (e.g., `main`, `develop`, `feature/login`) |
| `--commit` | | string | `""` | Git commit hash for tracking which code version was tested |
| `--api-endpoint` | | string | `""` | Qualflare API endpoint URL. Overrides default API endpoint. |
| `--api-key` | | string | `""` | API key for authentication. Overrides `QUALFLARE_API_KEY` environment variable. |
| `--timeout` | | duration | `30s` | Request timeout. Valid units: `s` (seconds), `m` (minutes). Example: `--timeout 2m` |
| `--dry-run` | | bool | `false` | Parse files without uploading to Qualflare. Useful for validation and debugging. |
| `--output` | `-o` | string | `""` | Output format for dry-run mode. Currently supports `json`. |
| `--verbose` | `-v` | bool | `false` | Enable verbose output for debugging. |
| `--quiet` | `-q` | bool | `false` | Suppress non-error output. Useful for CI/CD scripts. |

### Flag Descriptions

#### `--format` / `-f`

Specifies the test framework format. If not provided, the CLI attempts to auto-detect the format based on file content and extension.

```bash
qf upload results.xml --format junit
qf upload results.json --format playwright
```

#### `--project` / `-p`

Associates the upload with a specific project in Qualflare. If not provided, uses the default project from your API key.

```bash
qf upload results.xml --project my-web-app
```

#### `--environment` / `-e`

Labels the test run with an environment name. Useful for filtering results by deployment environment.

```bash
qf upload results.xml --environment staging
qf upload results.xml --environment production
```

#### `--branch` and `--commit`

Git metadata for tracking which code version was tested. Enables integration with Git workflows.

```bash
qf upload results.xml --branch main --commit a1b2c3d
```

In CI/CD, these are often auto-populated:

```bash
# GitHub Actions
qf upload results.xml --branch ${GITHUB_REF#refs/heads/} --commit ${GITHUB_SHA}

# GitLab CI
qf upload results.xml --branch ${CI_COMMIT_REF_NAME} --commit ${CI_COMMIT_SHA}
```

#### `--api-endpoint` and `--api-key`

Override the default API endpoint or provide an API key directly.

```bash
qf upload results.xml --api-endpoint https://api.qualflare.com --api-key your-key
```

Best practice is to use environment variables instead (see [CI/CD Integration](./ci-cd)).

#### `--timeout`

Sets the HTTP request timeout for uploading to Qualflare. Default is 30 seconds.

```bash
qf upload results.xml --timeout 2m  # 2 minutes
```

#### `--dry-run`

Parse and validate test files without uploading. Useful for:

- Validating file format
- Debugging parsing issues
- Previewing what will be uploaded

```bash
qf upload results.xml --dry-run
# Output: OK Test results parsed successfully (dry run)
```

#### `--output` / `-o`

Used with `--dry-run` to output parsed results as JSON. Useful for debugging and integration.

```bash
qf upload results.xml --dry-run --output json
```

### Global Flags

These flags are available on all commands:

| Flag | Short | Description |
|------|-------|-------------|
| `--verbose` | `-v` | Enable detailed debug output |
| `--quiet` | `-q` | Suppress all non-error output |

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Success - test results uploaded or validated successfully |
| `1` | Error - file not found, parse error, upload failed, or invalid configuration |
| `2` | Usage error - invalid arguments or flags |

## Error Handling

The CLI provides clear error messages for common issues:

### File Not Found

```bash
$ qf upload missing.xml
ERR file does not exist: missing.xml
```

### Invalid Format

```bash
$ qf upload results.xml --format unsupported
ERR unsupported format: unsupported. Use 'qf list-formats' to see supported formats
```

### Parse Error

```bash
$ qf upload invalid.xml
ERR failed to parse test results: invalid XML format
```

### Authentication Error

```bash
$ qf upload results.xml
ERR failed to process test results: unauthorized (invalid API key)
```

### Network Error

```bash
$ qf upload results.xml
ERR failed to process test results: connection refused
```

## Supported Frameworks

The `qf upload` command supports 19 test frameworks across five categories. Use the `--format` flag to specify your framework, or let the CLI auto-detect it.

### Unit Testing Frameworks

| Framework | `--format` Value | Expected File Format | Description |
|-----------|-----------------|---------------------|-------------|
| **JUnit** | `junit` | XML | Standard JUnit XML format. Used by Java, Android, and many other tools. |
| **Python (pytest)** | `python` | XML | pytest XML output (`--junitxml` flag). |
| **Go** | `go` | JSON | Go test output with `-json` flag. |
| **Jest** | `jest` | JSON | Jest JSON test results. |
| **Mocha** | `mocha` | JSON | Mocha JSON reporter output. |
| **RSpec** | `rspec` | JSON | RSpec JSON formatter output. |
| **PHPUnit** | `phpunit` | XML | PHPUnit XML日志文件 (JUnit compatible). |

#### Example Unit Test Uploads

```bash
# JUnit (Java, Android, etc.)
qf upload build/test-results/test/*.xml --format junit --project my-app

# pytest
qf upload pytest-report.xml --format python --project my-app

# Go tests
qf upload go-test.json --format golang --project my-app

# Jest
qf upload jest-results.json --format jest --project my-app

# Mocha
qf upload mocha-report.json --format mocha --project my-app

# RSpec
qf upload rspec-report.json --format rspec --project my-app

# PHPUnit
qf upload phpunit-report.xml --format phpunit --project my-app
```

### BDD Frameworks

| Framework | `--format` Value | Expected File Format | Description |
|-----------|-----------------|---------------------|-------------|
| **Cucumber** | `cucumber` | JSON | Cucumber JSON report format. |
| **Karate** | `karate` | JSON | Karate test automation JSON output. |

#### Example BDD Uploads

```bash
# Cucumber
qf upload cucumber-report.json --format cucumber --project my-app

# Karate
qf upload karate-report.json --format karate --project my-app
```

### UI / E2E Testing Frameworks

| Framework | `--format` Value | Expected File Format | Description |
|-----------|-----------------|---------------------|-------------|
| **Playwright** | `playwright` | JSON | Playwright JSON test results. |
| **Cypress** | `cypress` | JSON | Cypress test results JSON output. |
| **Selenium** | `selenium` | JSON | Selenium WebDriver JSON output. |
| **TestCafe** | `testcafe` | JSON | TestCafe JSON reporter output. |

#### Example E2E Uploads

```bash
# Playwright
qf upload playwright-results.json --format playwright --project my-app

# Cypress
qf upload cypress-results.json --format cypress --project my-app

# Selenium
qf upload selenium-results.json --format selenium --project my-app

# TestCafe
qf upload testcafe-report.json --format testcafe --project my-app
```

### API Testing Frameworks

| Framework | `--format` Value | Expected File Format | Description |
|-----------|-----------------|---------------------|-------------|
| **Newman** | `newman` | JSON | Postman Newman test run output. |
| **k6** | `k6` | JSON | k6 load test results JSON summary. |

#### Example API Uploads

```bash
# Newman (Postman)
qf upload newman-report.json --format newman --project my-app

# k6
qf upload k6-summary.json --format k6 --project my-app
```

### Security Testing Tools

| Tool | `--format` Value | Expected File Format | Description |
|------|-----------------|---------------------|-------------|
| **OWASP ZAP** | `zap` | JSON | ZAP security scan JSON report. |
| **Trivy** | `trivy` | JSON | Trivy vulnerability scan JSON output. |
| **Snyk** | `snyk` | JSON | Snyk security test JSON results. |
| **SonarQube** | `sonarqube` | JSON | SonarQube quality gate JSON report. |

#### Example Security Uploads

```bash
# OWASP ZAP
qf upload zap-report.json --format zap --project my-app

# Trivy
qf upload trivy-results.json --format trivy --project my-app

# Snyk
qf upload snyk-test.json --format snyk --project my-app

# SonarQube
qf upload sonarqube-report.json --format sonarqube --project my-app
```

### Auto-Detection

If you don't specify `--format`, the CLI will attempt to auto-detect the format based on:

- File extension (`.xml`, `.json`)
- File content patterns
- Common framework-specific markers

For reliable results, explicitly specify the format when dealing with ambiguous files.

```bash
# Auto-detection
qf upload results.json --project my-app

# Explicit format (recommended)
qf upload results.json --format playwright --project my-app
```

## Usage Examples

### CI/CD Integration

Upload test results as part of your CI/CD pipeline:

```bash
# GitHub Actions
- name: Upload test results to Qualflare
  run: |
    qf upload test-results/*.xml \
      --project my-app \
      --environment staging \
      --branch ${GITHUB_REF#refs/heads/} \
      --commit ${GITHUB_SHA}
  env:
    QUALFLARE_API_KEY: ${{ secrets.QUALFLARE_API_KEY }}
```

### Multiple Test Suites

Upload results from multiple test types:

```bash
# Unit tests
qf upload unit-results.xml --format junit --project my-app --environment testing

# E2E tests
qf upload e2e-results.json --format playwright --project my-app --environment testing

# Security scan
qf upload security-report.json --format trivy --project my-app --environment testing
```

### Dry Run Validation

Validate your test results before uploading:

```bash
# Validate file can be parsed
qf upload results.xml --format junit --dry-run

# Preview what will be sent
qf upload results.xml --format junit --dry-run --output json
```

### Verbose Debugging

Enable verbose output for debugging:

```bash
qf upload results.xml --verbose
# Output includes:
# - Processing 1 test result file(s)...
# - Detected format: junit
# - Parsing file...
# - Uploading to Qualflare...
# - OK Test results uploaded successfully
```

## See Also

- [Installation](./installation) - Install the Qualflare CLI
- [Other Commands](./other-commands) - Learn about `validate`, `version`, and `list-formats`
- [CI/CD Integration](./ci-cd) - Set up automated test result reporting
