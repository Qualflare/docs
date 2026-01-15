---
title: CI/CD Integration
---

# CI/CD Integration

The Qualflare CLI (`qf`) is designed for seamless integration into your CI/CD pipeline. This guide covers environment variable configuration, auto-detection features, and platform-specific setup examples for major CI/CD systems.

## Environment Variables

The CLI reads configuration from environment variables, making it ideal for CI/CD environments. Environment variables take priority over command-line flags and auto-detection.

### Configuration Priority

Values are applied in the following order (highest to lowest priority):

1. **Environment variables** (`QF_*`)
2. **Command-line flags** (`--api-key`, `--environment`, etc.)
3. **Auto-detection** (Git metadata, CI variables)

### QF Environment Variables

| Variable | Purpose | Default | Example |
|----------|---------|---------|---------|
| `QF_API_KEY` | Authentication key for Qualflare API | *Required* | `qf_prod_abc123...` |
| `QF_API_ENDPOINT` | Qualflare API endpoint URL | `http://127.0.0.1:8001/api/v1/collect` | `https://api.qualflare.com/api/v1/collect` |
| `QF_ENVIRONMENT` | Environment name for this test run | `development` | `staging`, `production` |
| `QF_BRANCH` | Git branch name | *Auto-detected* | `main`, `feature/login` |
| `QF_COMMIT` | Git commit SHA | *Auto-detected* | `a1b2c3d4e5f6...` |
| `QF_RETRY_MAX` | Maximum number of upload retry attempts | `3` | `5` |
| `QF_RETRY_DELAY` | Base delay between retries (Go duration format) | `1s` | `2s`, `500ms` |
| `QF_RETRY_MAX_DELAY` | Maximum delay between retries (Go duration format) | `30s` | `60s` |
| `QF_TIMEOUT` | Request timeout (Go duration format) | `30s` | `60s`, `2m` |
| `QF_VERBOSE` | Enable verbose output | `false` | `true`, `1` |
| `QF_QUIET` | Suppress non-error output | `false` | `true`, `1` |

### Auto-Detection

The CLI automatically detects Git branch and commit information from common CI environment variables:

#### Branch Detection (checked in order)

1. `QF_BRANCH` (explicit override)
2. `GIT_BRANCH` (Jenkins, GitLab, etc.)
3. `GITHUB_REF_NAME` (GitHub Actions)
4. `CI_COMMIT_REF_NAME` (GitLab CI)
5. `BITBUCKET_BRANCH` (Bitbucket Pipelines)

#### Commit Detection (checked in order)

1. `QF_COMMIT` (explicit override)
2. `GIT_COMMIT` (Jenkins, GitLab, etc.)
3. `GITHUB_SHA` (GitHub Actions)
4. `CI_COMMIT_SHA` (GitLab CI)
5. `BITBUCKET_COMMIT` (Bitbucket Pipelines)

### Duration Format

Duration-related variables (`QF_RETRY_DELAY`, `QF_RETRY_MAX_DELAY`, `QF_TIMEOUT`) use Go duration format:

| Unit | Suffix | Examples |
|------|--------|----------|
| Seconds | `s` | `30s`, `90s` |
| Milliseconds | `ms` | `500ms`, `1500ms` |
| Minutes | `m` | `1m`, `5m` |

## Platform-Specific Examples

### GitHub Actions

Create a workflow file in `.github/workflows/test-report.yml`:

```yaml
name: Test Results

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  workflow_run:

jobs:
  upload-test-results:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run tests
        run: |
          pytest --junitxml=results.xml

      - name: Upload to Qualflare
        if: always()  # Run even if tests fail
        env:
          QF_API_KEY: ${{ secrets.QF_API_KEY }}
          QF_API_ENDPOINT: https://api.qualflare.com/api/v1/collect
          QF_ENVIRONMENT: ci
          # Branch and commit auto-detected from GITHUB_REF_NAME and GITHUB_SHA
        run: |
          # Install qf CLI
          curl -sSL https://cli.qualflare.com/install.sh | sh

          # Upload results
          qf upload results.xml
```

**Setting the API key secret:**

1. Go to your repository **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Name: `QF_API_KEY`
4. Value: Your Qualflare API key
5. Click **Add secret**

### GitLab CI

Add to your `.gitlab-ci.yml`:

```yaml
stages:
  - test
  - report

# Run your tests
test:
  stage: test
  script:
    - pytest --junitxml=results.xml
  artifacts:
    when: always
    paths:
      - results.xml
    expire_in: 1 week

# Upload to Qualflare
upload-results:
  stage: report
  image: python:3.11-slim
  needs:
    - test
  script:
    # Install qf CLI
    - apt-get update && apt-get install -y curl
    - curl -sSL https://cli.qualflare.com/install.sh | sh

    # Upload to Qualflare
    - qf upload results.xml
  variables:
    QF_API_KEY: $QF_API_KEY
    QF_API_ENDPOINT: https://api.qualflare.com/api/v1/collect
    QF_ENVIRONMENT: gitlab-ci
    # Branch and commit auto-detected from CI_COMMIT_REF_NAME and CI_COMMIT_SHA
```

**Setting the API key variable:**

1. Go to your project **Settings** > **CI/CD** > **Variables**
2. Click **Add variable**
3. Key: `QF_API_KEY`
4. Value: Your Qualflare API key
5. Mask variable: **Checked**
6. Protect variable: Optional (check if you want it only available on protected branches)
7. Click **Add variable**

### Jenkins

Add a stage to your `Jenkinsfile`:

```groovy
pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'pytest --junitxml=results.xml'
            }
            post {
                always {
                    // Archive test results for Jenkins UI
                    junit 'results.xml'
                }
            }
        }

        stage('Upload to Qualflare') {
            steps {
                // Install qf CLI (run once or put in a Dockerfile)
                sh '''
                    if ! command -v qf &> /dev/null; then
                        curl -sSL https://cli.qualflare.com/install.sh | sh
                    fi
                '''

                // Upload to Qualflare
                withEnv([
                    "QF_API_KEY=${QF_API_KEY}",
                    "QF_API_ENDPOINT=https://api.qualflare.com/api/v1/collect",
                    "QF_ENVIRONMENT=jenkins",
                    // Branch and commit auto-detected from GIT_BRANCH and GIT_COMMIT
                ]) {
                    sh 'qf upload results.xml'
                }
            }
        }
    }

    post {
        always {
            // Clean up
            cleanWs()
        }
    }
}
```

**Setting the API key credential:**

1. Go to **Manage Jenkins** > **Manage Credentials**
2. Select your domain (typically "Global")
3. Click **Add Credentials** > **Secret text**
4. Secret: Your Qualflare API key
5. ID: `QF_API_KEY`
6. Click **Create**

### Azure DevOps

Add to your `azure-pipelines.yml`:

```yaml
trigger:
  branches:
    include:
      - main
      - develop

variables:
  QF_ENVIRONMENT: 'azure-devops'

stages:
- stage: Test
  jobs:
  - job: TestAndReport
    pool:
      vmImage: 'ubuntu-latest'

    steps:
    - checkout: self
      displayName: 'Checkout code'

    - script: |
        # Install qf CLI
        curl -sSL https://cli.qualflare.com/install.sh | sh

        # Run tests
        pytest --junitxml=results.xml

        # Upload to Qualflare
        qf upload results.xml
      env:
        QF_API_KEY: $(QF_API_KEY)
        QF_API_ENDPOINT: https://api.qualflare.com/api/v1/collect
        # Branch and commit auto-detected from BUILD_SOURCEBRANCHNAME and BUILD_SOURCEVERSION
      displayName: 'Run tests and upload results'
      condition: always()  # Run even if tests fail
```

**Setting the API key secret:**

1. Go to your project **Pipelines** > **Library**
2. Click **+ Secure file** or go to **Variable groups**
3. For variable groups:
   - Create a new variable group or select existing
   - Add variable: `QF_API_KEY`
   - Value: Your Qualflare API key
   - Mark as **Secret**: **Checked**
   - Click **Save**

## Security Best Practices

### API Key Management

- **Never hardcode API keys** in your repository
- Always use your CI/CD platform's secret/variable management
- Restrict API key scope to specific projects when possible
- Rotate API keys regularly

### Example: Checking for Leaked Keys

Before committing, you can use a pre-commit hook to check for accidentally committed API keys:

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check for QF_API_KEY in files being committed
if git diff --cached --name-only | xargs grep -l "QF_API_KEY.*=.*qf_" 2>/dev/null; then
    echo "ERROR: Possible Qualflare API key detected in staged files!"
    echo "Please remove API keys before committing."
    exit 1
fi
```

## Troubleshooting

### "API key not found" Error

- Verify `QF_API_KEY` is set in your CI/CD environment
- Check the secret/variable name matches exactly (case-sensitive)
- Ensure the secret is available to the job/stage running the upload

### Upload Fails with Timeout

Increase the timeout using `QF_TIMEOUT`:

```yaml
env:
  QF_TIMEOUT: 120s  # 2 minutes
```

### Retry Failures

Adjust retry settings for unreliable networks:

```yaml
env:
  QF_RETRY_MAX: 5
  QF_RETRY_DELAY: 2s
  QF_RETRY_MAX_DELAY: 60s
```

### Branch/Commit Not Detected

Manually override if auto-detection fails:

```yaml
env:
  QF_BRANCH: ${GIT_BRANCH}
  QF_COMMIT: ${GIT_COMMIT}
```

## Advanced Usage

### Conditional Upload

Only upload on specific branches:

```yaml
- name: Upload to Qualflare
  if: github.ref == 'refs/heads/main'
  env:
    QF_API_KEY: ${{ secrets.QF_API_KEY }}
  run: qf upload results.xml
```

### Multiple Test Files

Upload multiple test result files:

```bash
# All XML files
qf upload test-results/*.xml

# Specific files
qf upload unit-tests.xml integration-tests.xml
```

### Dry Run in CI

Test your CI configuration without actually uploading:

```yaml
- name: Validate test results (dry run)
  env:
    QF_API_KEY: ${{ secrets.QF_API_KEY }}
  run: qf upload results.xml --dry-run
```

## See Also

- [Upload Command](/cli/upload) - Full command reference
- [Installation](/cli/installation) - Install the CLI in your CI environment
- [Other Commands](/cli/other-commands) - Validate and list supported formats
