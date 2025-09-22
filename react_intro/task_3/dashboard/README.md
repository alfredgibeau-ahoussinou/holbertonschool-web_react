# Task 3: Update the Notifications & Utils Tests

## Description
Update the Notifications component with close button and notification list, plus create comprehensive tests for utility functions.

## Features
- Close button with inline styling and click handler
- Notification list with 3 items including HTML content
- `getLatestNotification()` utility function
- Comprehensive tests for all utility functions
- Notifications component tests

## Files Structure
```
task_3/dashboard/
├── src/
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styling
│   ├── App.spec.js          # App tests
│   ├── main.jsx             # Entry point
│   ├── utils.js             # Utility functions (updated)
│   ├── utils.spec.js        # Utils tests (new)
│   ├── Notifications.jsx    # Notifications component (updated)
│   ├── Notifications.css    # Notifications styling (updated)
│   ├── Notifications.spec.js # Notifications tests (new)
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
- ✅ Close button with inline styling (float: right)
- ✅ Close button with aria-label="Close"
- ✅ Console log on button click
- ✅ Close button image import
- ✅ Notification list with 3 items
- ✅ HTML content using dangerouslySetInnerHTML
- ✅ Data priority attributes
- ✅ Comprehensive utility function tests
- ✅ Notifications component tests
- ✅ All tests passing (15/15)

## Notifications Features
- **Close Button**: Styled with `float: right`, includes close icon
- **Notification List**: 3 items with different priorities
  - Default priority: "New course available"
  - Urgent priority: "New resume available" 
  - HTML content: "**Urgent requirement** - complete by EOD"
- **Click Handler**: Logs "Close button has been clicked" to console

## Utility Functions
```javascript
export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
```

## Tests Coverage
### Utils Tests (3 tests)
- ✅ getCurrentYear returns correct year
- ✅ getFooterCopy returns correct string for true/false
- ✅ getLatestNotification returns correct string

### Notifications Tests (4 tests)
- ✅ renders notifications title
- ✅ renders close button
- ✅ renders 3 notification items
- ✅ logs close button click

### App Tests (7 tests)
- ✅ All previous App tests still passing

## Running Tests
```bash
npm test
```

## Tests Results
- ✅ Utils tests: 3/3 passed
- ✅ Notifications tests: 4/4 passed
- ✅ App tests: 7/7 passed
- **Total: 15/15 tests passed**