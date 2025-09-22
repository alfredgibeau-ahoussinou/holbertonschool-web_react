# Task 1: Basic Tests

## Description
Testing is a crucial part in web development. In React projects, you'll use the React Testing Library and Jest as a test runner.

## Features
- Basic tests for App component
- Tests for heading, text content, and image elements
- Case-insensitive assertions for better coverage

## Files Structure
```
task_1/dashboard/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styling
│   ├── App.spec.js      # App tests (updated)
│   ├── main.jsx         # Entry point
│   ├── utils.js         # Utility functions
│   ├── Notifications.jsx # Notifications component
│   ├── Notifications.css # Notifications styling
│   └── assets/
│       ├── holberton-logo.jpg
│       └── close-button.png
├── public/
│   └── favicon.ico
├── package.json
├── .babelrc
├── fileTransformer.js
└── setupTests.js
```

## Requirements Met
- ✅ Test for h1 element with "School Dashboard" text
- ✅ Test for paragraph text in app-body and app-footer
- ✅ Test for img element rendering
- ✅ Case-insensitive assertions
- ✅ All tests passing

## Tests Implementation
The tests verify:
1. **Heading Test**: Checks if h1 element with "School Dashboard" text is rendered
2. **Body Text Test**: Verifies "Login to access the full dashboard" text
3. **Footer Text Test**: Verifies copyright text with current year
4. **Image Test**: Checks if img element with alt text "holberton logo" is rendered

## Running Tests
```bash
npm test
```

## Tests Results
- ✅ renders School Dashboard heading
- ✅ renders correct text in app-body paragraph
- ✅ renders correct text in app-footer paragraph
- ✅ renders image element

All 4 tests pass successfully.