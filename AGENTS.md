# AGENTS.md - Development Guide for This Repository

## Project Overview

This is a lab website for Portlock Lab built with React 18, using Create React App (react-scripts). It features lazy-loaded pages, SCSS styling, and Jest for testing.

---

## Build / Lint / Test Commands

### Development
```bash
npm start              # Start development server
```

### Build
```bash
npm run build          # Build production bundle (clears ./build first)
npm run analyze        # Build and analyze bundle size
```

### Testing
```bash
npm test               # Run all tests (uses npx jest)
npx jest               # Run all tests
npx jest --watch       # Watch mode
npx jest path/to/test  # Run specific test file
npx jest -t "test name" # Run tests matching a pattern
```

### Linting
```bash
npm run lint           # Run ESLint on all .js files
```

### Deployment
```bash
npm run predeploy      # Runs build (for GitHub Pages)
npm run deploy         # Deploy to GitHub Pages
```

---

## Code Style Guidelines

### General Conventions

- **Language**: JavaScript (ES6+), JSX for React components
- **File Extensions**: `.js` for JSX files, `.jsx` only if needed
- **Line Endings**: Unix-style (LF) - configured in ESLint
- **No TypeScript**: This project uses plain JavaScript with PropTypes

### Imports

```javascript
// React core
import React from 'react';

// Third-party libraries (named imports where applicable)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Local components (relative paths)
import Main from './layouts/Main';
import Navigation from './components/Template/Navigation';

// Styles
import './static/css/main.scss';
```

### React Component Style

- Use **arrow functions** for components (enforced by ESLint rule)
- Use **functional components** only (no class components)
- Use **PropTypes** for prop validation (project uses prop-types package)
- Destructure props where appropriate
- Components should be default exports

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ title, children }) => (
  <div className="my-component">
    <h1>{title}</h1>
    {children}
  </div>
);

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

MyComponent.defaultProps = {
  children: null,
};

export default MyComponent;
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Navigation.js`, `SkillBar.js`)
- **Files**: camelCase for utilities, PascalCase for components
- **CSS Classes**: kebab-case (e.g., `.skill-bar`, `.contact-form`)
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **Variables/Functions**: camelCase

### File Organization

```
src/
├── components/       # Reusable UI components (by feature)
│   ├── Template/     # Layout components (Navigation, SideBar, etc.)
│   └── Contact/      # Contact-related components
├── data/             # Static data (projects, routes, about content)
├── layouts/          # Page layouts
├── pages/            # Route-level page components (About, Projects, Contact, Index, NotFound)
├── static/           # Static assets (CSS, images, fonts)
│   └── css/
│       ├── base/     # Base styles (typography, page)
│       ├── components/  # Component styles
│       ├── layout/   # Layout styles (header, footer, sidebar)
│       └── pages/    # Page-specific styles
└── __tests__/        # Test files
```

### CSS / SCSS Guidelines

- Use SCSS with variables, mixins, and partials
- Follow BEM-like naming for complex components
- Organize with imports (main.scss imports partials)
- Use flexbox and CSS grid for layouts

### Error Handling

- Use `console.warn` and `console.error` (console.log is disallowed)
- Handle fetch errors gracefully with try/catch
- Use React error boundaries where appropriate

### ESLint Rules (Active)

The project uses Airbnb config with these customizations:
- Arrow functions for named components
- `.js` and `.jsx` extensions allowed
- No underscore dangle (allowed)
- No destructuring assignment (disabled)
- Props spreading allowed
- Multi-line JSX allowed
- Console warnings/errors allowed (not just errors)

---

## Testing Guidelines

### Test Structure

- Test files: `*.test.js` in `src/__tests__/` or co-located
- Use `@testing-library/react` for component testing
- Use `jest.fn()` for mocking
- Use `act()` for async rendering

### Example Test Pattern

```javascript
/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('component name', () => {
  beforeEach(async () => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
    jest.clearAllMocks();
  });

  it('should do something', async () => {
    // Test logic
  });
});
```

### Mocking

- Mock `fetch` with `jest.fn()`
- Mock `window.scrollTo`
- Use `jest.clearAllMocks()` in afterEach

---

## Dependencies

### Key Dependencies
- React 18 (`react`, `react-dom`)
- Routing (`react-router-dom`)
- Styling (`sass`)
- Icons (`@fortawesome`)
- Markdown (`markdown-to-jsx`)
- Analytics (`react-ga`)

### Key Dev Dependencies
- Testing (`@testing-library/react`, `jest`, `babel-jest`)
- Linting (`eslint`, `eslint-config-airbnb`)
- Build (`react-scripts`)

---

## Browser Support

Configured in package.json:
- Production: `>0.2%`, not dead, not op_mini all
- Development: Last 1 Chrome, Firefox, Safari versions

---

## Notes

- This is a GitHub Pages site (homepage configured in package.json)
- Uses react-snap for pre-rendering (legacy)
- Environment variables: `PUBLIC_URL` for deployment base path
- All pages are lazy-loaded for code splitting
