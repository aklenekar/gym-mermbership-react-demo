---
description: "Coding conventions for the gym membership React app, focusing on JSX components and CSS styling"
---

# Coding Conventions

## Component Naming and Structure
- Use PascalCase for component names and filenames (e.g., `HeroSection.jsx`).
- Prefer functional components with React hooks.
- Use local state with `useState` for component-specific data.
- Handle data fetching with `useEffect` on mount or dependency changes.
- Use services for API calls, with promise handling (.then/.catch/.finally).

## Styling
- Use separate CSS files matching component names (e.g., `HeroSection.css`).
- Employ kebab-case for CSS class names (e.g., `hero-background`).
- Utilize CSS custom properties for colors, fonts, and spacing.
- Apply Flexbox and Grid for layouts.
- Use CSS keyframes and transitions for animations.

## General Patterns
- Group imports at the top: React, hooks, components, services, CSS.
- Use conditional rendering for loading/error states.
- Implement authentication with token-based localStorage.
- Follow camelCase for variables/functions, UPPER_SNAKE_CASE for constants.

These are flexible preferences to maintain consistency across the project.