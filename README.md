# Airplane Photo App

React app (Vite) implementing the specification in `pseudocode.md` (comments ignored) using assets in `public` and data in `data/photoSets.js`.

## Features

- Four pages: Home, My AC, AF AC, Harmon.
- Header text changes per route.
- Light blue navbar with logo, active red button state.
- Home shows single full-width hero image.
- Other pages show responsive photo grid (max 25% width each, adaptive breakpoints).
- Click photo to open modal with enlarged image + display name, blurred backdrop, return button.
- Max container width 2000px, responsive down to 395px.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes

- Ensure `public/airplane.png` exists for the logo.
- Image paths rely on Vite static serving from `public`.
- Routing uses `react-router-dom`.

all-ai-generated-my-aircraft.netlify.app
