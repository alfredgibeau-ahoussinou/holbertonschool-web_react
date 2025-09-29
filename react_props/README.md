# React Props Project

This folder contains the progression of tasks (0–5) for the Holberton React props module. Each task has its own `dashboard` app with code, tests, and any task-specific assets.

## Structure

- `task_0/dashboard`: Header, Footer, Login components extracted; App renders components and Notifications.
- `task_1/dashboard`: Tests for Header, Login, Footer, and App entry checks.
- `task_2/dashboard`: Notifications refactor with `NotificationItem`, `notifications` prop, and tests.
- `task_3/`: React DevTools screenshots: `change_property.png`, `profiler.png`.
- `task_4/dashboard`: CourseList and CourseListRow, conditional Login/CourseList render, styles and tests.
- `task_5/dashboard`: Enhanced Notifications with `displayDrawer`, title, empty state, styles and tests.

## Commands

From a given task folder (example: `react_props/task_4/dashboard`):

- Install deps:
  - `npm ci`
- Run tests:
  - `npm test -- --watchAll=false`
- Start dev server:
  - `npm run dev`

The dev server prints a local URL (e.g., `http://localhost:5175/`).

## Notes

- Each task folder is self-contained (has its own `package.json`, Jest config in `package.json`, and test setup). Some tasks copy `assets/` and `utils/` from earlier tasks for tests.
- No linter errors should appear. If you see any, run `npm run lint` in the corresponding `dashboard` folder.


