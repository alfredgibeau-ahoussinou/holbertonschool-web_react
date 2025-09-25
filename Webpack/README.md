# Webpack Project

This directory contains multiple tasks to learn and practice Webpack.

## Prerequisites

- Node.js >= 20
- npm >= 9

## Task 0: Basic setup

- Location: `Webpack/task_0`
- Commands:

```bash
cd Webpack/task_0
npm install
npm run build
# Open dist/index.html in a browser
```

- What it does: Bundles `src/index.js` to `dist/main.js` and loads it from `dist/index.html`. Uses jQuery to append:
  - Holberton Dashboard
  - Dashboard data for the students
  - Copyright - Holberton School

## Task 1: Webpack config, lodash debounce

- Location: `Webpack/task_1`
- After implementation: `npm run build` should output to `public/bundle.js` and `public/index.html` should reference it.

## Task 2: CSS & Images

- Location: `Webpack/task_2`
- After implementation: CSS and images are handled by Webpack; output in `public/` and bundle named `bundle.js`.

## Task 3: Dev server, modules, code splitting

- Location: `Webpack/task_3`
- After implementation: `npm run start-dev` launches dev server at `http://localhost:8564/`. Builds output to `public/` with split chunks.

## Notes

- Do not commit generated bundles if your checker forbids it.
- Each task folder has its own `package.json` and dependencies.

