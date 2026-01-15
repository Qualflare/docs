---
title: Installation
---

# Installation

Install `qf`, the Qualflare CLI tool, on your preferred platform. The CLI is available for macOS, Linux, and Windows across amd64 and arm64 architectures.

## Homebrew (macOS/Linux)

The easiest way to install `qf` on macOS or Linux is via Homebrew:

```bash
brew install qualflare/tap/qf
```

To upgrade:

```bash
brew upgrade qualflare/tap/qf
```

## Binary Download

Download the precompiled binary from the [GitHub releases page](https://github.com/qualflare/qualflare-cli/releases/latest).

### macOS

```bash
# For Apple Silicon (M1/M2/M3)
curl -L https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_darwin_arm64.tar.gz -o qf.tar.gz
tar -xzf qf.tar.gz
sudo mv qf /usr/local/bin/

# For Intel
curl -L https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_darwin_amd64.tar.gz -o qf.tar.gz
tar -xzf qf.tar.gz
sudo mv qf /usr/local/bin/
```

### Linux

```bash
# For AMD64
curl -L https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_linux_amd64.tar.gz -o qf.tar.gz
tar -xzf qf.tar.gz
sudo mv qf /usr/local/bin/

# For ARM64
curl -L https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_linux_arm64.tar.gz -o qf.tar.gz
tar -xzf qf.tar.gz
sudo mv qf /usr/local/bin/
```

### Windows

Download the appropriate ZIP from the [GitHub releases page](https://github.com/qualflare/qualflare-cli/releases/latest):

- [`qf_windows_amd64.zip`](https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_windows_amd64.zip) - 64-bit Windows
- [`qf_windows_arm64.zip`](https://github.com/qualflare/qualflare-cli/releases/latest/download/qf_windows_arm64.zip) - ARM Windows

Extract the archive and move `qf.exe` to a directory in your PATH.

## Chocolatey (Windows)

```powershell
choco install qf
```

To upgrade:

```powershell
choco upgrade qf
```

## Docker

```bash
docker pull ghcr.io/qualflare/qf:latest
```

Run commands using Docker:

```bash
docker run --rm -v $(pwd):/workdir ghcr.io/qualflare/qf:latest upload results.xml --project my-app --api-key YOUR_API_KEY
```

## Verify Installation

Confirm that `qf` is installed correctly:

```bash
qf version
```

You should see output similar to:

```
qf version 1.0.0
commit: abc123def
built at: 2025-01-14T10:30:00Z
```

## Upgrading

- **Homebrew**: Run `brew upgrade qualflare/tap/qf`
- **Binary**: Download the latest release and replace the existing binary
- **Chocolatey**: Run `choco upgrade qf`
- **Docker**: Run `docker pull ghcr.io/qualflare/qf:latest`

## Next Steps

After installing `qf`:

- Learn about the [upload command](/cli/upload)
- Explore [other commands](/cli/other-commands)
- Set up [CI/CD integration](/cli/ci-cd)
