# Security Policy

## Supported Versions

Smash Thumbnail Generator is a client-side, single-version web application (there is no versioned release/support matrix). Security fixes are applied to the `main` branch and deployed to the live site as soon as they're available.

| Version | Supported          |
| ------- | ------------------ |
| `main`  | :white_check_mark: |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

If you discover a security vulnerability in this project (for example, a cross-site scripting issue, a dependency with a known exploit, or unsafe handling of user-supplied images/data), please report it privately:

- **Email:** victor.williams.dev@gmail.com
- **Subject line:** `[SECURITY] Smash Thumbnail Generator - <short description>`

Please include as much of the following as you can:

- A description of the vulnerability and its potential impact.
- Steps to reproduce, or a proof-of-concept.
- Any relevant browser/OS/version details.

### What to expect

- **Acknowledgment:** within a few days of your report.
- **Assessment:** we'll investigate and confirm the issue, and may follow up with questions.
- **Resolution:** once confirmed, we'll work on a fix and coordinate an appropriate disclosure timeline with you.

We ask that you give us a reasonable amount of time to address the issue before any public disclosure. Thank you for helping keep this project and its users safe.

## Scope Notes

This is a front-end-only application (no backend server or user account system). The most relevant risk areas are:

- Third-party npm dependencies (see `package.json` / `package-lock.json`).
- Client-side rendering of user-provided images/text (e.g. via [fabric.js](http://fabricjs.com/)).
- Data exported from or imported into the app (custom layouts, images).

Reports about outdated dependencies with known CVEs are welcome — please check `npm audit` output and include it in your report if applicable.
