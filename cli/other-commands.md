---
title: Other Commands
---

# Other Commands

In addition to the `upload` command, the Qualflare CLI provides several utility commands for validation, format listing, and version information.

## validate Command

Validate test result files without uploading them to the server. This is useful for checking if your test results are properly formatted before uploading.

### Syntax

```bash
qf validate [files...] [flags]
```

### Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--format` | `-f` | Test framework format to validate against (auto-detected if not specified) |
| `--help` | `-h` | Help for validate command |
| `--verbose` | `-v` | Enable verbose output |
| `--quiet` | `-q` | Suppress non-error output |

### Usage Examples

```bash
# Validate a single JUnit XML file
qf validate results.xml

# Validate with specific format
qf validate results.json --format playwright

# Validate multiple files
qf validate test-results/*.xml

# Validate pytest results
qf validate pytest-report.xml --format python

# Validate with verbose output
qf validate results.json -v
```

### Output

The validate command displays one line per file with the validation result:

```bash
$ qf validate results.xml

OK results.xml: valid (junit, 42 tests)
```

For invalid files, an error message is displayed:

```bash
$ qf validate invalid.xml

ERR invalid.xml: invalid - XML syntax error at line 15
```

### Exit Codes

- `0` - All files validated successfully
- `1` - One or more files failed validation

## list-formats Command

List all supported test result formats and frameworks. Use this command to see which testing frameworks are supported by the Qualflare CLI.

### Syntax

```bash
qf list-formats [flags]
```

### Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--category` | `-c` | Filter by category (unit, bdd, e2e, api, security) |
| `--help` | `-h` | Help for list-formats command |

### Aliases

- `qf formats`
- `qf lf`

### Usage Examples

```bash
# List all supported formats
qf list-formats

# List only unit testing frameworks
qf list-formats --category unit

# List only E2E testing frameworks
qf list-formats -c e2e

# List security testing tools
qf list-formats -c security
```

### Sample Output

```bash
$ qf list-formats

Unit Testing:
  - junit
  - python
  - golang
  - jest
  - mocha
  - rspec
  - phpunit

BDD / Behavior-Driven:
  - cucumber
  - karate

UI / E2E Testing:
  - playwright
  - cypress
  - selenium
  - testcafe

API Testing:
  - newman
  - k6

Security Testing:
  - zap
  - trivy
  - snyk
  - sonarqube
```

## version Command

Display version information about the Qualflare CLI.

### Syntax

```bash
qf version [flags]
```

### Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--short` | `-s` | Print short version only |
| `--help` | `-h` | Help for version command |

### Usage Examples

```bash
# Display full version information
qf version

# Display short version
qf version --short

# Display short version (alternative)
qf version -s
```

### Output Examples

Full version output:

```bash
$ qf version

qf 1.2.3 (commit: a1b2c3d, built: 2026-01-14T10:30:00Z, darwin/arm64, go1.21.5)
```

Short version output:

```bash
$ qf version -s

qf 1.2.3
```

### Output Fields

| Field | Description |
|-------|-------------|
| Version | Semantic version of the CLI |
| Commit | Git commit hash (first 7 characters) |
| Built | Build timestamp |
| OS/Arch | Operating system and architecture |
| Go Version | Go runtime version used to build the CLI |

## Common Use Cases

### Pre-commit Validation

Use `validate` in git pre-commit hooks to ensure test results are valid before committing:

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Validate test results before committing
qf validate test-results/*.xml
if [ $? -ne 0 ]; then
  echo "Invalid test results detected. Please fix before committing."
  exit 1
fi
```

### CI/CD Debugging

Use `list-formats` to verify supported frameworks in your CI environment:

```bash
# In CI pipeline
echo "Checking supported formats..."
qf list-formats
```

### Version Verification

Use `version` to verify the CLI installation in CI/CD pipelines:

```bash
# Verify CLI is installed and working
qf version --short
```

### Format Detection Testing

Use `validate` with verbose output to see which format was auto-detected:

```bash
# Test format auto-detection
qf validate unknown-results.json -v
```

## See Also

- [Installation](/cli/installation) - Install the Qualflare CLI
- [Upload Command](/cli/upload) - Upload test results to Qualflare
- [CI/CD Integration](/cli/ci-cd) - Integrate with your CI/CD pipeline
