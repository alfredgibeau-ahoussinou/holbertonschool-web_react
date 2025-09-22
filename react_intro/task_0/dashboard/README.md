# Task 0: Basic Application

## Description
Create a basic React application named "dashboard" using Vite build tool.

## Features
- React application with Vite
- Holberton logo and favicon
- School dashboard layout with header, body, and footer
- Responsive CSS styling
- Jest testing setup

## Files Structure
```
task_0/dashboard/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styling
│   ├── App.spec.js      # App tests
│   ├── main.jsx         # Entry point
│   └── assets/
│       ├── holberton-logo.jpg
│       └── close-button.png
├── public/
│   └── favicon.ico
├── package.json         # Dependencies and Jest config
├── .babelrc            # Babel configuration
├── fileTransformer.js  # Jest file transformer
└── setupTests.js       # Jest setup
```

## Requirements Met
- ✅ Basic React app with Vite
- ✅ Holberton logo and favicon
- ✅ School dashboard title and styling
- ✅ Jest testing configuration
- ✅ All tests passing (4/4)

## Installation
```bash
npm install
```

## Running Tests
```bash
npm test
```

## Development Server
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Tests Results
- ✅ renders School Dashboard heading
- ✅ renders correct text in app-body paragraph
- ✅ renders correct text in app-footer paragraph
- ✅ renders image element

All 4 tests pass successfully.