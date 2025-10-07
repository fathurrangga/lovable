# Copilot Instructions for AI Coding Agents

## Project Overview
This is a static web project consisting of three main files:
- `index.html`: Main HTML entry point
- `style.css`: Stylesheet for layout and design
- `script.js`: JavaScript for interactivity
- `images/`: Contains image and video assets used in the site

## Architecture & Data Flow
- All logic is client-side; there is no backend or build system.
- The HTML file references the CSS and JS files directly.
- Images and videos are loaded from the `images/` directory using relative paths.
- Any new assets should be placed in `images/` and referenced with correct relative paths.

## Developer Workflows
- No build, test, or deployment scripts are present. All changes are made directly to source files.
- To debug, open `index.html` in a browser and use browser dev tools.
- For new features, update `index.html` and add supporting code to `script.js` and/or `style.css`.
- Use descriptive class and ID names in HTML for maintainability.

## Project-Specific Conventions
- Keep all logic in `script.js`; do not create additional JS files unless the project structure changes.
- Use semantic HTML elements in `index.html` for accessibility and clarity.
- Organize CSS with comments for major sections (e.g., layout, typography, components).
- Reference images/videos with relative paths (e.g., `images/cover.png`).

## Integration Points
- No external dependencies or frameworks are used.
- If adding libraries, include them via CDN in `index.html` and document the change.

## Examples
- To add a new image: Place it in `images/`, then reference it in `index.html` as `<img src="images/newimage.png">`.
- To add interactivity: Write JS in `script.js` and link elements using IDs or classes.
- To style a new section: Add CSS rules in `style.css` and reference classes/IDs from HTML.

## Key Files
- `index.html`: Structure and content
- `style.css`: Visual design
- `script.js`: Behavior and interactivity
- `images/`: All media assets

---
For questions about project structure or conventions, review all three main files and the `images/` directory for examples.
