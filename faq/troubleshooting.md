---
title: Troubleshooting Guide
description: Common issues and step-by-step solutions for Qualflare
---

# Troubleshooting Guide

This guide helps you resolve common issues with Qualflare, including authentication problems, CLI errors, web UI issues, test execution failures, and CI/CD integration problems.

**Quick links:**
- [Authentication & Access Issues](#authentication--access-issues)
- [CLI Tool Issues](#cli-tool-issues)
- [Web UI Issues](#web-ui-issues)
- [Test Execution Issues](#test-execution-issues)
- [CI/CD Integration Issues](#ci-cd-integration-issues)

---

## Authentication & Access Issues

### API Key Not Working

**Symptoms:**
- Error message: "unauthorized (invalid API key)"
- Cannot upload test results via CLI
- Cannot access workspace in web UI

**Possible causes:**
- Invalid or expired API key
- API key copied incorrectly (missing characters)
- API key revoked or regenerated
- Using API key from wrong workspace

**Resolution steps:**

1. Verify your API key is correct:
   ```bash
   # Check if API key is set
   echo $QF_API_KEY
   ```

2. Regenerate your API key:
   - Go to **Workspace Settings** > **API Keys**
   - Click **Generate New Key**
   - Copy the full key (starts with `qf_`)

3. Update your environment:
   ```bash
   export QF_API_KEY="your-new-api-key-here"
   ```

4. Test with a simple upload:
   ```bash
   qf upload test-results.xml --dry-run
   ```

**Still need help?** Contact support with your workspace ID and the error message.

---

### Workspace Access Denied

**Symptoms:**
- Error: "You do not have access to this workspace"
- Cannot see projects in workspace
- 403 Forbidden error

**Possible causes:**
- Not invited to the workspace
- Removed from workspace
- Signed into wrong account
- Workspace suspended or deleted

**Resolution steps:**

1. Check your current account:
   - Click your profile icon in top-right
   - Verify you're signed in with the correct email

2. Switch workspaces:
   - Click workspace selector in left sidebar
   - Select the correct workspace

3. Request access:
   - Contact your workspace administrator
   - Ask them to send a new invitation

4. Check your email:
   - Look for pending workspace invitations
   - Accept the invitation to join

**Still need help?** Ask your workspace admin to verify your role and permissions.

---

### SSO Login Failures

**Symptoms:**
- Redirect loop during login
- "Authentication failed" error
- Blank page after SSO redirect

**Possible causes:**
- SSO configuration issue
- Session expired
- Browser blocking third-party cookies
- Corporate firewall blocking SSO

**Resolution steps:**

1. Clear your browser cache and cookies:
   - Open browser settings
   - Clear browsing data for qualflare.com
   - Restart browser

2. Try a different browser or incognito mode:
   - Chrome, Firefox, Safari, or Edge
   - Incognito/private window bypasses some extensions

3. Check browser console for errors:
   - Press F12 or Cmd+Option+I (Mac)
   - Look for red error messages in Console tab

4. Disable VPN or proxy temporarily:
   - Some corporate networks block SSO
   - Try from a different network

5. Contact your IT administrator:
   - Verify SSO configuration
   - Check if qualflare.com is whitelisted

**Still need help?** Contact your IT admin or Qualflare support with error details from browser console.

---

### User Permissions Too Limited

**Symptoms:**
- Cannot create projects
- Cannot run tests
- Cannot view certain features
- "Insufficient permissions" error

**Possible causes:**
- Assigned to Viewer role instead of Admin or Member
- Project-level restrictions
- Organization-wide policy

**Resolution steps:**

1. Check your role:
   - Go to **Workspace Settings** > **Users**
   - Find your name and check the Role column

2. Request role change:
   - Contact your workspace administrator
   - Request Admin or Member role

3. Understand role differences:
   - **Admin**: Full access to all features
   - **Member**: Can create and run tests, manage projects
   - **Viewer**: Read-only access to results

**Still need help?** Ask your workspace admin to review your permissions.

---

## CLI Tool Issues

### Installation Fails

**Symptoms:**
- "command not found: qf"
- "permission denied" error
- Installation script hangs or fails

**Possible causes:**
- Insufficient permissions
- Network connectivity issues
- Shell not updated after install
- Incompatible OS version

**Resolution steps:**

1. Check system requirements:
   ```bash
   # Verify OS compatibility
   uname -s  # Should show: Linux, Darwin, or Windows

   # Verify architecture
   uname -m  # Should show: x86_64, arm64, or similar
   ```

2. Try manual installation:
   ```bash
   # Download directly
   curl -sSL https://cli.qualflare.com/install.sh -o install.sh
   chmod +x install.sh
   sudo ./install.sh
   ```

3. Add to PATH manually:
   ```bash
   # Find where qf was installed
   which qf

   # Add to shell profile
   echo 'export PATH="$PATH:/usr/local/bin"' >> ~/.bashrc
   source ~/.bashrc
   ```

4. Verify installation:
   ```bash
   qf version
   ```

**Still need help?** Include your OS version and installation error in support request.

---

### Upload Command Fails

**Symptoms:**
- "file does not exist" error
- "failed to parse test results" error
- Upload hangs or times out

**Possible causes:**
- Incorrect file path
- Invalid file format
- Network connectivity issues
- API endpoint unreachable

**Resolution steps:**

1. Verify file exists:
   ```bash
   ls -la test-results.xml
   pwd  # Check current directory
   ```

2. Use absolute path:
   ```bash
   qf upload /full/path/to/test-results.xml
   ```

3. Validate file format:
   ```bash
   # Dry run to check parsing
   qf upload test-results.xml --dry-run --verbose

   # Check file format
   qf validate test-results.xml
   ```

4. Increase timeout for large files:
   ```bash
   qf upload test-results.xml --timeout 120s
   ```

5. Check network connectivity:
   ```bash
   # Test API endpoint
   curl -I https://api.qualflare.com
   ```

**Still need help?** Run with `--verbose` flag and include output in support request.

---

### Format Not Detected

**Symptoms:**
- Error: "unsupported format"
- CLI cannot identify test framework
- Auto-detection picks wrong format

**Possible causes:**
- Unsupported test framework
- Non-standard file format
- Missing format specification
- Ambiguous file content

**Resolution steps:**

1. List supported formats:
   ```bash
   qf list-formats
   ```

2. Specify format explicitly:
   ```bash
   qf upload results.xml --format junit
   qf upload results.json --format playwright
   ```

3. Validate file before uploading:
   ```bash
   qf validate results.json --format your-framework --verbose
   ```

4. Check file content:
   ```bash
   # View first few lines
   head -20 results.xml

   # Verify format structure
   cat results.xml | grep -E '<testsuite|<testcase'
   ```

5. Convert to supported format:
   - If using unsupported framework, convert to JUnit XML
   - Many test frameworks have JUnit XML reporters

**Still need help?** Share a sample of your test result file (sanitize sensitive data).

---

### Timeout During Upload

**Symptoms:**
- Upload takes too long
- "timeout" error after 30 seconds
- Large files fail consistently

**Possible causes:**
- File too large
- Slow network connection
- Server overloaded
- Firewall blocking upload

**Resolution steps:**

1. Increase timeout:
   ```bash
   # Set via flag
   qf upload results.xml --timeout 120s

   # Set via environment variable
   export QF_TIMEOUT=120s
   qf upload results.xml
   ```

2. Split large files:
   ```bash
   # Upload multiple smaller files
   qf upload test-results/part1.xml test-results/part2.xml
   ```

3. Configure retry settings:
   ```bash
   export QF_RETRY_MAX=5
   export QF_RETRY_DELAY=2s
   export QF_RETRY_MAX_DELAY=60s
   qf upload results.xml
   ```

4. Test network speed:
   ```bash
   # Check connection to API
   ping api.qualflare.com

   # Test upload speed
   curl -o /dev/null -s -w "%{time_total}\n" https://api.qualflare.com
   ```

**Still need help?** Include file size and timeout duration in support request.

---

### Retry Failures

**Symptoms:**
- Upload fails after multiple retries
- "max retries exceeded" error
- Intermittent upload failures

**Possible causes:**
- Unstable network connection
- Server temporarily unavailable
- Rate limiting
- Corrupted test result file

**Resolution steps:**

1. Check current retry settings:
   ```bash
   qf upload results.xml --verbose 2>&1 | grep -i retry
   ```

2. Adjust retry configuration:
   ```bash
   # Increase max retries
   export QF_RETRY_MAX=10

   # Increase delay between retries
   export QF_RETRY_DELAY=5s
   export QF_RETRY_MAX_DELAY=120s

   qf upload results.xml
   ```

3. Test file integrity:
   ```bash
   # Validate file format
   qf validate results.xml

   # Check file size
   ls -lh results.xml
   ```

4. Try uploading during off-peak hours:
   - Network may be congested during business hours
   - Upload at night or early morning

**Still need help?** Include retry log output with timestamps in support request.

---

## Web UI Issues

### Page Not Loading

**Symptoms:**
- Blank white page
- Spinning loader never stops
- Browser tab shows "Loading..." indefinitely

**Possible causes:**
- Browser compatibility issue
- JavaScript error
- Network connectivity problem
- Ad blocker or browser extension conflict

**Resolution steps:**

1. Try a different browser:
   - Chrome, Firefox, Safari, or Edge
   - Ensure browser is updated to latest version

2. Check browser console:
   - Press F12 or Cmd+Option+I (Mac)
   - Look for red error messages in Console tab
   - Screenshot errors for support

3. Disable browser extensions:
   - Ad blockers, privacy extensions, VPN extensions
   - Try incognito/private window (extensions disabled by default)

4. Clear browser cache:
   - Chrome: Settings > Privacy > Clear browsing data
   - Firefox: Options > Privacy & Security > Clear Data
   - Safari: Develop > Empty Caches

5. Check internet connection:
   ```bash
   # Test connectivity
   ping app.qualflare.com
   ```

**Still need help?** Include browser version, OS, and console error screenshots.

---

### Missing Data or Empty Lists

**Symptoms:**
- Test cases not showing
- Empty launch list
- Projects disappeared
- Dashboard shows "No data"

**Possible causes:**
- Incorrect workspace selected
- Filter or search applied
- Data not yet synced
- Permission issue

**Resolution steps:**

1. Verify workspace context:
   - Check workspace selector in left sidebar
   - Ensure correct workspace is selected

2. Clear filters:
   - Look for active filter chips
   - Click "Clear filters" button
   - Reset date range

3. Refresh the page:
   - Press F5 or Cmd+R (Mac)
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. Check permissions:
   - Go to **Workspace Settings** > **Users**
   - Verify your role has read access

5. Check browser console for errors:
   - Press F12
   - Look for API errors in Network tab (red status codes)

**Still need help?** Include screenshots of the empty page and browser console.

---

### Navigation Problems

**Symptoms:**
- Cannot click buttons or links
- Dropdown menus don't open
- Page transitions hang
- "Back" button doesn't work

**Possible causes:**
- JavaScript disabled or blocked
- Browser extension conflict
- Cached stale state
- Browser compatibility issue

**Resolution steps:**

1. Enable JavaScript:
   - Chrome: Settings > Privacy > JavaScript > Allow
   - Firefox: Options > Privacy & Security > Permissions > JavaScript

2. Try incognito/private mode:
   - Chrome: Ctrl+Shift+N (Windows) or Cmd+Shift+N (Mac)
   - Firefox: Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac)
   - Safari: Cmd+Shift+N (Mac)

3. Clear site data:
   - Chrome: DevTools > Application > Clear storage
   - Firefox: DevTools > Storage > Clear All

4. Disable extensions:
   - Disable all extensions and re-enable one by one
   - Common culprits: ad blockers, password managers, VPN

5. Update browser:
   - Ensure you're using latest browser version
   - Older browsers may have compatibility issues

**Still need help?** Include browser version and list of installed extensions.

---

### Browser Compatibility Issues

**Symptoms:**
- Layout broken or misaligned
- Features not working
- CSS rendering problems
- Interactive elements unresponsive

**Possible causes:**
- Using unsupported browser
- Browser version too old
- Internet Explorer compatibility mode

**Resolution steps:**

1. Check supported browsers:
   - Chrome 90+ (recommended)
   - Firefox 88+
   - Safari 14+
   - Edge 90+

2. Update your browser:
   - Chrome: Settings > About Chrome
   - Firefox: Options > General > Firefox Updates
   - Safari: System Preferences > Software Update

3. Disable compatibility mode:
   - Enterprise users: Check Group Policy settings
   - Ensure site is not in "Compatibility View"

4. Try different browser:
   - If issue persists, try Chrome or Firefox

**Still need help?** Include browser name, version, and OS in support request.

---

## Test Execution Issues

### Launch Creation Fails

**Symptoms:**
- Cannot create new launch
- Error when clicking "Run Tests"
- Launch configuration not saving

**Possible causes:**
- Insufficient permissions
- Missing required fields
- Test cases not selected
- Environment not configured

**Resolution steps:**

1. Check permissions:
   - Verify you have Member or Admin role
   - Viewers cannot create launches

2. Verify required fields:
   - Project must be selected
   - At least one test case or suite must be selected
   - Environment must be specified

3. Check test case status:
   - Only draft and approved tests can be run
   - Archived tests cannot be executed

4. Verify environment exists:
   - Go to **Project Settings** > **Environments**
   - Ensure at least one environment is configured

5. Check browser console:
   - Press F12
   - Look for red errors in Console tab

**Still need help?** Include screenshot of launch configuration page.

---

### Test Cases Not Running

**Symptoms:**
- Launch created but no tests execute
- Status stuck at "Pending"
- Case runs not appearing

**Possible causes:**
- Runner not connected
- Tests not assigned to launch
- Queue backlog
- Environment mismatch

**Resolution steps:**

1. Check runner status:
   - Go to **Launches** > select your launch
   - Look for runner connection status

2. Verify test selection:
   - Edit launch configuration
   - Ensure test cases are selected

3. Check queue position:
   - High-priority launches may be queued
   - Wait for current launches to complete

4. Refresh launch page:
   - Press F5 to update status
   - Case runs may take a moment to appear

5. Check environment:
   - Ensure tests are assigned to correct environment
   - Verify environment exists in project settings

**Still need help?** Include launch ID and screenshot of launch page.

---

### Results Not Appearing

**Symptoms:**
- Tests completed but no results
- Dashboard not updating
- Case runs show "No data"

**Possible causes:**
- Results not yet processed
- Filter or search hiding results
- Browser cache showing stale data
- Data sync delay

**Resolution steps:**

1. Wait for processing:
   - Large test suites may take time to process
   - Wait 1-2 minutes for results to appear

2. Refresh the page:
   - Press F5 or Cmd+R (Mac)
   - Hard refresh: Ctrl+Shift+R (Windows)

3. Check filters:
   - Clear all filters and search
   - Reset date range
   - Remove status filters

4. Check different views:
   - Try Dashboard, Launches, and Case Runs tabs
   - Results may appear in one view but not another

5. Verify launch completed:
   - Go to **Launches**
   - Check launch status is "Completed" not "Running"

**Still need help?** Include launch ID, test run time, and screenshots.

---

### Environment Mismatch

**Symptoms:**
- Tests running on wrong environment
- Results attributed to incorrect environment
- Environment selector not working

**Possible causes:**
- Environment not configured
- Default environment override
- Runner configuration issue
- Environment name mismatch

**Resolution steps:**

1. Verify environment exists:
   - Go to **Project Settings** > **Environments**
   - Check environment list

2. Create missing environment:
   - Click **Add Environment**
   - Enter environment name (e.g., staging, production)
   - Save

3. Check runner configuration:
   - Runner may be configured for specific environment
   - Verify runner settings match launch environment

4. Use explicit environment flag:
   ```bash
   qf upload results.xml --environment staging
   ```

5. Check environment naming:
   - Ensure environment names match exactly
   - Case-sensitive: "Production" != "production"

**Still need help?** Include project ID, environment name, and runner configuration.

---

## CI/CD Integration Issues

### "API key not found" Error

**Symptoms:**
- CI/CD pipeline fails with missing API key error
- Upload command cannot authenticate

**Possible causes:**
- Secret not configured in CI/CD
- Secret name mismatch
- Secret not available to job/stage
- Case sensitivity issue

**Resolution steps:**

1. Verify secret is set:
   - **GitHub Actions**: Settings > Secrets > Actions
   - **GitLab CI**: Settings > CI/CD > Variables
   - **Jenkins**: Manage Credentials > Global credentials

2. Check secret name:
   ```yaml
   # Correct
   QF_API_KEY: ${{ secrets.QF_API_KEY }}

   # Wrong (case sensitive)
   qf_api_key: ${{ secrets.qf_api_key }}
   ```

3. Verify secret is available:
   - Some CI/CD platforms restrict secrets to specific branches
   - Check if secret is protected or environment-specific

4. Test secret manually:
   ```bash
   # Verify environment variable is set
   echo $QF_API_KEY

   # Should show: qf_prod_abc123...
   # NOT: ${{ secrets.QF_API_KEY }}
   ```

**Still need help?** Include CI/CD platform and pipeline configuration file.

---

### Upload Fails with Timeout

**Symptoms:**
- CI/CD pipeline times out during upload
- "connection timeout" or "request timeout" error

**Possible causes:**
- CI environment has strict timeout
- Network restrictions in CI environment
- Large test result files
- API endpoint not reachable from CI

**Resolution steps:**

1. Increase timeout:
   ```yaml
   # Set via environment variable
   env:
     QF_TIMEOUT: 120s

   # Or in command
   - qf upload results.xml --timeout 120s
   ```

2. Configure retry settings:
   ```yaml
   env:
     QF_RETRY_MAX: 5
     QF_RETRY_DELAY: 2s
     QF_RETRY_MAX_DELAY: 60s
   ```

3. Test API connectivity from CI:
   ```yaml
   - name: Test API connectivity
     run: |
       curl -I https://api.qualflare.com
       ping -c 3 api.qualflare.com
   ```

4. Check CI firewall rules:
   - Some CI environments block outbound HTTPS
   - Contact CI platform support for firewall issues

**Still need help?** See full [CI/CD troubleshooting guide](/cli/ci-cd#troubleshooting).

---

### Branch/Commit Not Detected

**Symptoms:**
- Git branch and commit show as blank
- Launch metadata missing git information

**Possible causes:**
- Auto-detection not supported by CI platform
- Git shallow clone (no history)
- Environment variable names different

**Resolution steps:**

1. Check current environment variables:
   ```yaml
   - name: Debug CI variables
     run: |
       echo "GIT_BRANCH=$GIT_BRANCH"
       echo "GIT_COMMIT=$GIT_COMMIT"
       echo "GITHUB_REF_NAME=$GITHUB_REF_NAME"
       echo "GITHUB_SHA=$GITHUB_SHA"
   ```

2. Manually specify branch and commit:
   ```yaml
   - name: Upload to Qualflare
     env:
       QF_BRANCH: ${GITHUB_REF_NAME}
       QF_COMMIT: ${GITHUB_SHA}
     run: qf upload results.xml
   ```

3. Ensure full git history:
   ```yaml
   - uses: actions/checkout@v4
     with:
       fetch-depth: 0  # Full history
   ```

4. Use CI-specific variables:
   ```yaml
   # GitHub Actions
   QF_BRANCH: ${{ github.ref_name }}
   QF_COMMIT: ${{ github.sha }}

   # GitLab CI
   QF_BRANCH: ${{ CI_COMMIT_REF_NAME }}
   QF_COMMIT: ${{ CI_COMMIT_SHA }}

   # Jenkins
   QF_BRANCH: ${GIT_BRANCH}
   QF_COMMIT: ${GIT_COMMIT}
   ```

**Still need help?** See [CI/CD environment variables](/cli/ci-cd#auto-detection).

---

### Test Results Not Found

**Symptoms:**
- "file does not exist" error in CI
- Upload command cannot find test results

**Possible causes:**
- Tests not generating output file
- File path incorrect
- Working directory different
- Artifact not created

**Resolution steps:**

1. Verify tests generate output:
   ```yaml
   - name: Run tests
     run: |
       pytest --junitxml=results.xml
       ls -la results.xml  # Verify file exists
   ```

2. Check working directory:
   ```yaml
   - name: Upload results
     run: |
       pwd  # Check current directory
       ls -la  # List files
       qf upload test-results/results.xml  # Use correct path
   ```

3. Use absolute path:
   ```yaml
   - qf upload $GITHUB_WORKSPACE/test-results/results.xml
   ```

4. Persist artifacts between steps:
   ```yaml
   - name: Run tests
     run: pytest --junitxml=results.xml
     # Create artifact
   - uses: actions/upload-artifact@v4
     with:
       name: test-results
       path: results.xml

   - name: Upload to Qualflare
     # Download artifact
     - uses: actions/download-artifact@v4
       with:
         name: test-results
     run: qf upload results.xml
   ```

**Still need help?** Include CI/CD platform and test command output.

---

## Additional Resources

### Getting Help

If you're still experiencing issues after trying these troubleshooting steps:

1. **Check the documentation:**
   - [CLI Tool Documentation](/cli/) - Full command reference
   - [How-to Guides](/how-to/) - Step-by-step workflows
   - [FAQ](/faq/) - Common questions

2. **Contact support:**
   - Email: support@qualflare.com
   - Include: error messages, screenshots, steps to reproduce

3. **Community resources:**
   - GitHub Issues: [github.com/qualflare/qualflare/issues](https://github.com/qualflare/qualflare/issues)
   - Discord: [discord.gg/qualflare](https://discord.gg/qualflare)

### Debugging Tips

**Enable verbose logging:**
```bash
qf upload results.xml --verbose
```

**Use dry run to test:**
```bash
qf upload results.xml --dry-run --output json
```

**Check browser console:**
- Press F12 or Cmd+Option+I (Mac)
- Look for red errors in Console tab
- Check Network tab for failed API requests

**Include in support requests:**
- Error messages (exact text)
- Steps to reproduce
- Browser/CLI version
- Screenshots
- Configuration files (sanitize sensitive data)

### Common Error Messages

| Error | Cause | Quick Fix |
|-------|-------|-----------|
| `unauthorized` | Invalid API key | Regenerate API key |
| `file does not exist` | Wrong file path | Use absolute path |
| `timeout` | Network too slow | Increase `QF_TIMEOUT` |
| `invalid format` | Unsupported framework | Specify `--format` |
| `access denied` | Insufficient permissions | Contact workspace admin |
| `404 Not Found` | Wrong API endpoint | Check `QF_API_ENDPOINT` |
