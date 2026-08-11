# Contributing to Smash Thumbnail Generator

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Smash Thumbnail Generator. These are mostly guidelines, not rules — use your best judgment, and feel free to propose changes to this document in a pull request.

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript / Vue Style Guide](#javascript--vue-style-guide)
- [Reporting Security Issues](#reporting-security-issues)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository and clone your fork locally.
2. Create a new branch for your change: `git checkout -b feature/short-description` or `git checkout -b fix/short-description`.
3. Make your changes, following the [Development Setup](#development-setup) and [Style Guides](#style-guides) below.
4. Commit your changes with a clear, descriptive message (see [Git Commit Messages](#git-commit-messages)).
5. Push to your fork and open a pull request against the `main` branch.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the [existing issues](https://github.com/Vaporjawn/Smash-Thumbnail-Generator/issues) to see if it has already been reported. If it has and the issue is still open, add a comment with any additional context instead of opening a new one.

When filing a bug report, please use the **Bug Report** issue template and include:

- A clear, descriptive title.
- Steps to reproduce the behavior.
- What you expected to happen vs. what actually happened.
- Screenshots, if applicable (this is a visual thumbnail-editing tool — screenshots help a lot).
- Your browser/OS and the app version/commit you're running.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues using the **Feature Request** template. Please include:

- A clear, descriptive title.
- A detailed description of the proposed feature and the problem it solves.
- Any mockups, references, or examples that help explain the idea (e.g. other supported games, layout tweaks, export options).

### Submitting Pull Requests

- Keep pull requests focused on a single change — avoid bundling unrelated fixes or refactors.
- Link the pull request to any related issue(s).
- Make sure `npm run lint` passes before opening the PR.
- Update documentation (README, comments, etc.) if your change affects usage or setup.
- Describe what you changed and why in the PR description; screenshots or a short recording are appreciated for UI changes.
- A maintainer will review your PR, may request changes, and will merge it once it's ready.

## Development Setup

This project is built with [Vue.js 2](https://vuejs.org) and [Vuetify](https://vuetifyjs.com/), scaffolded with the Vue CLI.

**Prerequisites:** Node.js (LTS) and npm.

```bash
# Install dependencies
npm install

# Run the app locally with hot-reload
npm run serve

# Lint the code
npm run lint

# Build for production
npm run build
```

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or fewer.
- Reference issues and pull requests liberally after the first line (e.g. `Fixes #12`).

### JavaScript / Vue Style Guide

- Follow the existing ESLint configuration (`plugin:vue/essential`, `eslint:recommended`) — run `npm run lint` before committing.
- Match the code style already present in the file you're editing (indentation, quotes, component structure).
- Prefer small, single-purpose components over large multi-responsibility ones.

## Reporting Security Issues

Please **do not** open a public GitHub issue for security vulnerabilities. See [SECURITY.md](SECURITY.md) for how to report them responsibly.

---

Thanks again for contributing! 🙌
