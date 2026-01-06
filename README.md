## Project Overview
This repository contains a sample QA automation framework built with Playwright and TypeScript.
The goal of this project is to demonstrate my approach to test architecture, test design,
and maintainable automation rather than provide a production-ready setup.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## How to Run Tests
1. Install dependencies:
   npm install

2. Run tests:
   npx playwright test

3. Run tests in UI mode:
   npx playwright test --ui

## Project structure
- app/
- orangehrm-docker/
- pages/
- tests/
- utils/
- fixture.ts


## What this project demonstrates
- Scalable test architecture
- Stable locators strategy
- CI-ready setup

## Known Limitations & Next Steps
- Reporting tools (e.g. Allure) are not integrated yet
- CI pipeline is not configured yet
