#!/usr/bin/env sh
# Manual deployment has been retired in favor of automated CI/CD.
#
# Pushing to `main` now automatically builds the app and publishes
# dist/ to the gh-pages branch via GitHub Actions - see
# .github/workflows/deploy.yml (and .github/workflows/ci.yml for the
# lint/build checks that run on every PR). There is no need to run this
# script, or `npm run deploy`, manually anymore.
#
# This file is kept in place (rather than deleted) so anyone who still
# reaches for `./deploy.sh` or `npm run deploy` out of habit lands here
# instead of hitting a missing file.
echo "Manual deploy is retired. Push to main and GitHub Actions will build + deploy automatically (see .github/workflows/deploy.yml)." >&2
exit 1
