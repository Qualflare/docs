---
title: Environments
---

# Environments

Comprehensive reference for the environment configuration UI in Qualflare. Environments define the target systems where tests are executed.

## Environment List View

The environment list view displays all configured environments in a project, providing quick access to configuration and status information.

### Columns

| Column | Description |
|--------|-------------|
| **Environment Name** | Name of the environment (user-defined) |
| **Type** | Environment type with color-coded badge |
| **Base URL** | Base URL for the target system |
| **Status** | Active or Inactive indicator |
| **Default** | Star icon indicates default environment |
| **Variables** | Count of configured variables |
| **Last Used** | Timestamp of most recent test execution |
| **Actions** | Quick action buttons (edit, set default, delete) |

### Environment Types

| Type | Visual | Purpose |
|------|--------|---------|
| **Development** | Blue badge | Local development servers |
| **Staging** | Yellow badge | Pre-production testing environment |
| **Production** | Red badge | Live production environment |
| **Custom** | Gray badge | User-defined environment types |

### Status Indicators

| Status | Visual | Meaning |
|--------|--------|---------|
| **Active** | Green dot | Environment is available for test execution |
| **Inactive** | Gray dot | Environment is disabled and cannot be used |

### Default Environment Indicator

- **Star Icon**: (⭐) displayed next to the default environment name
- **Behavior**: Default environment is pre-selected when creating new launches
- **Selection**: Only one environment can be default at a time
- **Auto-set**: First created environment is automatically set as default

### Sorting

- **Default**: Environment name (alphabetical)
- **Available sort options**: Name, type, last used, variable count
- **Type grouping**: Environments group by type when sorted by type

### Filtering

| Filter | Options |
|--------|---------|
| **Type** | Development, Staging, Production, Custom |
| **Status** | Active, Inactive, All |
| **Default** | Default only, Non-default only |

---

## Environment Detail View

Click any environment in the list to view its complete configuration and variables.

### Header Section

#### Environment Information
- **Environment Name**: User-defined name
- **Environment ID**: Unique identifier (e.g., "ENV-5678")
- **Type Badge**: Environment type with color coding
- **Status Indicator**: Active/Inactive with toggle
- **Default Badge**: Shown if this is the default environment
- **Created**: Creation timestamp
- **Last Modified**: Last configuration change timestamp
- **Last Used**: Most recent test execution timestamp

#### Quick Actions

| Action | Description |
|--------|-------------|
| **Set as Default** | Make this environment the default for new launches |
| **Activate/Deactivate** | Toggle environment availability |
| **Edit** | Open environment configuration editor |
| **Clone** | Create a copy of this environment |
| **Delete** | Remove the environment (requires confirmation) |

### Configuration Section

#### Basic Settings

| Field | Description |
|-------|-------------|
| **Name** | Environment name (required, unique within project) |
| **Type** | Environment type (Development, Staging, Production, Custom) |
| **Base URL** | Root URL for the target system (required) |
| **Description** | Optional notes about this environment |

#### Base URL Configuration

**Format Requirements:**
- Must include protocol (http:// or https://)
- Should not include trailing slash
- Supports port numbers (e.g., https://api.example.com:8080)
- Supports subdomains and paths (e.g., https://staging-api.example.com/v2)

**Examples:**
- Development: `http://localhost:3000`
- Staging: `https://staging.example.com`
- Production: `https://api.example.com`
- Custom: `https://ci-build-123.example.org`

### Variables Section

Environment variables define key-value pairs that are available to tests during execution. Variables support secrets masking and hierarchical overrides.

#### Variable Management UI

**Table Columns:**

| Column | Description |
|--------|-------------|
| **Key** | Variable name (case-sensitive, alphanumeric and underscore) |
| **Value** | Variable value (masked for secrets) |
| **Type** | Variable type (Plain, Secret, File) |
| **Scope** | Variable scope (Global, Environment-specific) |
| **Enabled** | Toggle to enable/disable variable |
| **Actions** | Edit, delete, copy variable |

#### Variable Types

| Type | Visual | Behavior |
|------|--------|----------|
| **Plain** | No icon | Displayed in plain text, fully visible |
| **Secret** | Lock icon | Value masked with bullets (••••••) |
| **File** | File icon | Reference to uploaded file, shows filename |

#### Secret Variable Display

**Masked State (Default):**
- Display: `••••••••••••` (bullets equal to value length)
- Hover preview: Shows first and last character only
- Cannot be copied or viewed in detail

**Reveal State (Click "Show"):**
- Requires confirmation
- Shows plain text value for 30 seconds
- Auto-masks after timeout or when navigating away
- Logs reveal events for audit trail

**Edit Secret:**
- Click "Edit" to open secret editor
- Value field is password-type (hidden input)
- Show/Hide toggle available in editor
- Changes are saved immediately

#### Variable Scope and Override Behavior

**Hierarchy:**
1. **Global Variables** (workspace-level): Available to all environments
2. **Environment Variables** (environment-level): Override global variables
3. **Launch Variables** (launch-level): Override environment variables

**Override Rules:**
- More specific scopes override less specific scopes
- Environment variables override global variables with the same key
- Launch variables override environment variables
- If no override exists, the global value is used

**Example:**
```
Global:    API_URL = https://api.example.com
Staging:   API_URL = https://staging-api.example.com (overrides global)
Production: API_URL = https://api.example.com (uses global, no override)
```

**Override Indicator:**
- Variables that override global values show "Overrides global" badge
- Variables using global values show "Inherits from global" badge
- Click badge to view the global value being overridden

### Headers Section

Configure custom HTTP headers that are sent with all API requests during test execution.

#### Headers Management UI

**Table Columns:**

| Column | Description |
|--------|-------------|
| **Header Name** | HTTP header name (case-insensitive) |
| **Header Value** | Header value (supports variable interpolation) |
| **Enabled** | Toggle to enable/disable header |

#### Common Headers

| Header | Typical Use |
|--------|-------------|
| `Authorization` | API keys, bearer tokens, authentication credentials |
| `Content-Type` | Request content type (e.g., `application/json`) |
| `Accept` | Expected response content type |
| `User-Agent` | Client identification |
| `X-Custom-Header` | Custom application-specific headers |

#### Variable Interpolation in Headers

Headers can reference environment variables using `{{variable}}` syntax:

```
Authorization: Bearer {{API_KEY}}
X-Environment: {{ENVIRONMENT_NAME}}
X-Request-Source: qualflare-test
```

### Authentication Section

Configure authentication methods for the target environment.

#### Authentication Types

**None:**
- No authentication configured
- Tests run without auth headers

**API Key:**
- **Header Name**: Name of the header (e.g., `X-API-Key`)
- **API Key Value**: The key value (stored as secret)
- **Key Location**: Header or Query parameter

**Bearer Token:**
- **Token Value**: JWT or OAuth bearer token (stored as secret)
- **Token Prefix**: Default is `Bearer`, can be customized
- **Header Name**: Default is `Authorization`, can be customized

**Basic Auth:**
- **Username**: Authentication username (stored as plain)
- **Password**: Authentication password (stored as secret)

**OAuth 2.0:**
- **Client ID**: OAuth client identifier
- **Client Secret**: OAuth client secret (stored as secret)
- **Token URL**: Endpoint to obtain access token
- **Scopes**: OAuth permission scopes

#### Authentication Storage

All sensitive credentials (API keys, tokens, passwords) are stored as secret variables and are masked in the UI.

---

## Create Environment UI

Create a new environment from scratch with all required configuration.

### Steps

1. Click **New Environment** button in the environment list
2. Fill in the basic configuration:
   - **Environment Name** (required)
   - **Type** (required)
   - **Base URL** (required)
   - **Description** (optional)
3. Configure variables (optional)
4. Configure headers (optional)
5. Configure authentication (optional)
6. Click **Create Environment**

### Field Validations

| Field | Validation Rules |
|-------|------------------|
| **Name** | Required, unique within project, 3-50 characters, alphanumeric and spaces |
| **Type** | Required, must select one type |
| **Base URL** | Required, must be valid URL with http:// or https:// |
| **Description** | Optional, max 500 characters |

### After Creation

- New environment is created as **Active** by default
- Not set as default unless it's the first environment
- Redirected to environment detail view
- Can immediately start adding variables and configuration

---

## Edit Environment UI

Modify an existing environment's configuration.

### Editing Modes

#### Quick Edit
- **Accessible via**: Edit button in environment list
- **Scope**: Name, type, base URL, description only
- **Action**: Inline editing with save/cancel buttons

#### Full Edit
- **Accessible via**: Edit button in environment detail view
- **Scope**: All configuration including variables, headers, authentication
- **Action**: Opens full configuration editor

### Editable Fields

All fields are editable except:
- **Environment ID**: Cannot be changed (system-assigned)
- **Created timestamp**: Immutable

### Variable Editing

**Add Variable:**
1. Click **Add Variable** button
2. Enter key name (required)
3. Enter value (required)
4. Select type (Plain, Secret, File)
5. Click **Save**

**Edit Variable:**
1. Click Edit icon on variable row
2. Modify key or value
3. Click **Save**

**Delete Variable:**
1. Click Delete icon on variable row
2. Confirm deletion

**Bulk Variable Operations:**
- **Import Variables**: Upload CSV or JSON file with variable definitions
- **Export Variables**: Download all variables as CSV or JSON
- **Copy from Environment**: Copy all variables from another environment

### Header Editing

**Add Header:**
1. Click **Add Header** button
2. Enter header name (required)
3. Enter header value (required)
4. Click **Save**

**Edit/Delete Header:**
Same workflow as variable editing

### Authentication Editing

**Change Auth Type:**
1. Click **Edit** in Authentication section
2. Select new authentication type
3. Enter required credentials
4. Click **Save**

**Remove Authentication:**
1. Click **Edit** in Authentication section
2. Select **None** as authentication type
3. Click **Save**

### Save Behavior

- **Auto-save**: Changes to individual variables save immediately
- **Manual save**: Changes to name, type, base URL require clicking Save
- **Cancel**: Reverts unsaved changes to last saved state

---

## Environment Actions

### Set as Default

Make an environment the default selection for new launches.

1. Click the **Set as Default** button in environment detail view
2. Or click the star icon in the environment list view

**Behavior:**
- Previous default environment loses default status
- New default environment is immediately active
- New launches pre-select this environment
- Existing launches are not affected

### Activate/Deactivate

Toggle environment availability for test execution.

1. Click the **Activate/Deactivate** toggle in environment detail view
2. Or use the status toggle in the environment list view

**Deactivate Behavior:**
- Environment cannot be selected for new launches
- Existing launches using this environment are not affected
- Running tests continue to completion
- Variables and values remain accessible

**Activate Behavior:**
- Environment becomes available for selection
- All previous configuration intact
- Can immediately be used for new launches

**Use Cases:**
- Temporarily disable staging during maintenance
- Deactivate production environments not in use
- Activate environments only when needed for security

### Clone Environment

Create a copy of an existing environment with all its configuration.

1. Click **Clone** button in environment detail view
2. Edit the cloned environment:
   - **Name**: Required, must be unique (defaults to "Original Name - Copy")
   - **Base URL**: Can be modified
   - **Variables**: All copied, can be edited
   - **Headers**: All copied, can be edited
   - **Authentication**: Copied, credentials not included (must re-enter)
3. Click **Create Cloned Environment**

**Clone Behavior:**
- Creates new environment with unique ID
- Copies all variables (secrets show as masked, must re-enter values)
- Copies all headers
- Copies authentication configuration (not credentials)
- Not set as default (even if original was default)
- Created as Active

**Use Cases:**
- Create new staging environment from existing staging
- Set up multiple production environments (regions)
- Template environments for quick setup

### Delete Environment

Permanently remove an environment and all its configuration.

1. Click **Delete** button in environment detail view
2. Enter environment name to confirm
3. Click **Confirm Delete**

**Delete Behavior:**
- Permanently removes environment and all configuration
- Deletes all variables, headers, and authentication settings
- Cannot be undone
- Historical test results retain environment name (as snapshot)
- Default status transfers to next available environment if deleted env was default

**Restrictions:**
- Cannot delete if it's the only environment in the project
- Cannot delete if it's the default environment (must set new default first)
- Warning if environment has been used in recent launches

---

## Variable Interpolation

Variables can be referenced in test configurations, headers, and authentication using interpolation syntax.

### Syntax

```
{{VARIABLE_NAME}}
```

### Interpolation Locations

**Headers:**
```
Authorization: Bearer {{API_TOKEN}}
X-Environment: {{ENVIRONMENT_NAME}}
```

**Base URL:**
```
https://{{SUBDOMAIN}}.example.com
```

**Authentication:**
- Token field can reference variables
- Custom header values can reference variables

### Variable Resolution

1. Check launch-level variables first
2. Check environment-level variables second
3. Check global (workspace) variables third
4. Return empty string if variable not found

### Nested Variables

Variables can reference other variables:

```
API_URL = https://{{API_SUBDOMAIN}}.example.com
FULL_PATH = {{API_URL}}/v1/endpoint
```

---

## Environment Best Practices

### Naming Conventions

Use consistent, descriptive names:
- `Development - Local`
- `Development - Shared`
- `Staging - US-East`
- `Staging - EU-West`
- `Production - US`
- `Production - EU`

### Variable Organization

- **Group related variables**: Use prefixes like `DB_`, `API_`, `AUTH_`
- **Use uppercase**: Variable names are case-sensitive, uppercase convention
- **Document purposes**: Use description field for complex variables
- **Secure secrets**: Mark sensitive data as Secret type

### Base URL Management

- **No trailing slashes**: Use `https://api.example.com` not `https://api.example.com/`
- **Include protocol**: Always specify `http://` or `https://`
- **Use environment variables**: Enable multi-region setups with variable URLs
- **Document in description**: Note any special routing or proxy requirements

### Security

- **Never log secrets**: Secret variables are masked in all views and logs
- **Rotate credentials**: Update API keys and tokens regularly
- **Limit access**: Only necessary team members should access production environments
- **Audit reveals**: Secret reveal events are logged for security tracking
- **Use least privilege**: Grant minimum required permissions for test accounts

---

## Related Topics

- [How-to: Executing Tests](/how-to/test-execution) - Selecting environments for test execution
- [How-to: Test Reporting](/how-to/test-reporting) - Filtering results by environment
- [Reference: Launches](/reference/launches) - Launch execution reference
- [Concepts: Projects](/concepts/projects) - Project-level environment management
