---
title: CLI Tool
---

# CLI Tool

The **Qualflare CLI** (`qf`) is a command-line tool that uploads test results from your CI/CD pipeline to Qualflare. It supports 20+ testing frameworks across unit tests, BDD, UI/E2E, API testing, and security tools.

## Features

- **Auto-detection**: Automatically detects test framework from file patterns
- **Multi-format support**: Parse JUnit, pytest, Go test, Jest, Mocha, RSpec, Playwright, Cypress, Newman, k6, and more
- **CI/CD integration**: Environment variables and Git metadata enrichment
- **Validation**: Validate test result files before uploading
- **Dry-run mode**: Preview parsed results without uploading

## Quick Start

```bash
# Install (see [Installation](/cli/installation) for details)
brew install qualflare/tap/qf

# Upload test results
qf upload results.xml --project my-app --api-key YOUR_API_KEY
```

## Commands

| Command | Description |
|---------|-------------|
| [`upload`](/cli/upload) | Upload test results to Qualflare |
| [`validate`](/cli/other-commands) | Validate test result files without uploading |
| [`list-formats`](/cli/other-commands) | List all supported test frameworks |
| `version` | Display CLI version information |

## Next Steps

- [Install the CLI](/cli/installation) for your platform
- Learn about the [upload command](/cli/upload)
- Explore [other commands](/cli/other-commands)
- Set up [CI/CD integration](/cli/ci-cd)
