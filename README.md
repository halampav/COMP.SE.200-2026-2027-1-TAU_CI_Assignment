# COMP.SE.200 Software Testing – CI Assignment

This repository contains the unit tests and CI setup for the course **COMP.SE.200-2026-2027-TAU** at **Tampere University**.

[![Coverage Status](https://coveralls.io/repos/github/halampav/COMP.SE.200-2026-2027-1-TAU_CI_Assignment/badge.svg?branch=main)](https://coveralls.io/github/halampav/COMP.SE.200-2026-2027-1-TAU_CI_Assignment?branch=main)

## Authors

- **Pavel Halama** – 154808080
- **Jan Trnka** – 154823117

## Tools used

| Tool | Purpose |
|---|---|
| [Mocha](https://www.npmjs.com/package/mocha) | Test framework |
| [Chai](https://www.npmjs.com/package/chai ) | Assertion library |
| [testdouble](https://www.npmjs.com/package/testdouble) | Mocking and stubbing |
| [Mochawesome](https://www.npmjs.com/package/mochawesome) | Test report |
| [c8](https://www.npmjs.com/package/c8) | Test coverage |
| [Coveralls](https://www.npmjs.com/package/coveralls) | Test coverage service integration |

## Installation

Requirements:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (developed with Node 24) including npm.

```bash
git clone https://github.com/halampav/COMP.SE.200-2026-2027-1-TAU_CI_Assignment.git
cd COMP.SE.200-2026-2027-1-TAU_CI_Assignment
npm install
```

## Running the tests

```bash
npm test
```

This runs Mocha with the configuration from `.mocharc.json`. Results are printed to the console and a Mochawesome report is saved to `mochawesome-report/report.html`.

## Running the coverage

```bash
npm run coverage
```

This runs the tests through c8. A coverage table is printed to the console and an `lcov` report is written to `coverage/lcov.info`.

## Configuration files

### `.mocharc.json` – Mocha configuration

Mocha loads this file automatically, so the npm scripts only need to call `mocha`.

| Option | Meaning |
|---|---|
| `spec` | Which files are tests (`test/**/*.js`) |
| `loader` | Enables mocking of ES modules with testdouble |
| `reporter` | Uses `mochawesome` |
| `reporter-option` | Mochawesome settings |
### `.c8rc.json` – c8 coverage configuration

c8 loads this file automatically.

| Option | Meaning |
|---|---|
| `all` | Includes files that no test has loaded yet, so the numbers are not misleading |
| `src` | Directory where the library source code is located |
| `include` | Coverage is limited to the 10 functions chosen in the test plan |
| `exclude` | Files left out of coverage |
| `reporter` | `text` prints the table to the console, `lcov` creates `coverage/lcov.info` for Coveralls |
