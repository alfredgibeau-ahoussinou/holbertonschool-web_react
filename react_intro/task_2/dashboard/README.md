# Task 2: Modify the App (Sign-in Form)

## Description
Using code from the previous task, add a sign-in form to the App component.

## Features
- Email input field with label
- Password input field with label
- OK button for form submission
- Proper label-input associations for accessibility

## Files Structure
```
task_2/dashboard/
├── src/
│   ├── App.jsx          # Main App component (updated with form)
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
- ✅ Email label and input element
- ✅ Password label and input element
- ✅ OK button element
- ✅ Label clicks focus corresponding input fields
- ✅ No lint errors
- ✅ All tests passing

## Form Implementation
```jsx
<div>
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" />
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" />
  <button>OK</button>
</div>
```

## Accessibility Features
- Proper `htmlFor` and `id` associations between labels and inputs
- Semantic form elements
- Clicking labels focuses the corresponding input fields

## Running Tests
```bash
npm test
```

## Tests Results
- ✅ renders School Dashboard heading
- ✅ renders correct text in app-body paragraph
- ✅ renders correct text in app-footer paragraph
- ✅ renders image element
- ✅ renders 2 input elements
- ✅ renders 2 label elements with Email and Password
- ✅ renders button with OK text

All 7 tests pass successfully.