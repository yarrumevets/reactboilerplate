# React Boilerplate

## Description

A Collection of boilerplate react code

&#x1F4CC; [react-bp-01](react-bp-01/README.md)

- Hello World app that is built and served with Parcel.

&#x1F4CC; [react-bp-02](react-bp-02/README.md)

- Hello World app that transpiles with Babel and ESBuild
- Node.js script builds the index.html

## TODO List

The following list is verbose and may be combined if their concepts are simple, non-conflicting, and suitable for progressive learning.

### Basics & Build Tools

---

✅ 01 - Hello World: Single .jsx + static HTML, Parcel bundler (Babel auto).

✅ 02 - Simple Node server, static files served from /dist, ESBuild for speed, Babel for JSX only.

### CSS Management

---

⬜ 03a - Add plain CSS via imports (Parcel or ESBuild handles).

⬜ 03b - CSS Modules setup (local scoped CSS classes).

⬜ 03c - Styled-components for CSS-in-JS scoped styling.

⬜ 04 - Add Tailwind CSS for rapid styling utility (postcss).

### Routing (Basic to Advanced)

---

⬜ 05 - React Router (simple <BrowserRouter>, few routes/pages).

⬜ 06 - Nested routes and dynamic URL segments (/users/:id).

⬜ 07a - Advanced routing: Route guards, redirects, lazy loading with React Suspense.

⬜ 07b - Alternative: Add Tanstack Router (modern type-safe routing).

### State Management

---

⬜ 08a - Basic state: React useState, simple prop-drilling.

⬜ 08b - Global state with React Context API.

⬜ 08c - Redux Toolkit (common choice for robust global state).

⬜ 08d - Zustand (lightweight, no-boilerplate alternative).

⬜ 09 - Async state handling: Add React Query/Tanstack Query (data-fetching cache).

⬜ 09b - Add React Hook Form for scalable form handling.

⬜ 09c - Integrate Zod or Yup for schema-based validation.

### Component Libraries

---

⬜ 10a - UI components from shadcn/ui (popular, clean).

⬜ 10b - UI components from Mantine or Chakra UI (rich components, themes).

⬜ 10c - Storybook integration after adding a UI component library for isolated component development.

### Testing

---

⬜ 11 - Setup Jest + React Testing Library, basic component testing.

### TypeScript Integration

---

⬜ 12 - Convert JS to TS progressively, basic TS config, minimal strictness initially.

⬜ 12b - Create custom hooks for reusable logic abstraction.

⬜ 12c - Use `useReducer` + Context for scalable local state logic.

⬜ 12d - Use `useImperativeHandle` + `forwardRef` for custom exposed methods.

### Monorepo Setup

---

⬜ 13a - Yarn Workspaces: Basic shared utilities across apps.

⬜ 13b - NX setup (more powerful monorepo tooling, builds, caching).

### Server-Side & Static Rendering

---

⬜ 14a - Basic Next.js setup (SSR, SSG), simple routing.

⬜ 14b - Alternative: Astro setup with React integration (static-site, partial hydration).

### Advanced Build & Optimization

---

⬜ 15 - Vite setup (faster dev builds, common alternative to Webpack).

⬜ 16 - Webpack 5 explicit configuration (advanced, customizable builds).

⬜ 16b - Add memoization patterns (`React.memo`, `useCallback`, `useMemo`).

⬜ 16c - Introduce virtualization via `react-window` for large lists.

### Additional App Features

---

⬜ 17 - Error Boundaries & handling global app errors gracefully.

⬜ 18 - Authentication (simple client-side JWT setup).

⬜ 19 - i18n localization (react-intl or react-i18next).

⬜ 20 - Accessibility basics (eslint jsx-a11y rules integration).

### Cutting-Edge Features

---

⬜ 21 - Add Suspense for data fetching using React Query + `suspense: true`.

⬜ 22 - Add Concurrent Features: `useTransition`, `startTransition`.

⬜ 23 - Add Portals for modals/tooltips rendered outside root.
