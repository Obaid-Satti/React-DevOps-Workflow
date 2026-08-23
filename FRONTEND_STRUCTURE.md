# Production-Level Frontend Architecture

This codebase implements an enterprise-grade, **Modular & Feature-Sliced Architecture** designed for high scalability, separation of concerns, team ergonomics, and CI/CD pipelines.

---

## 📁 Directory Structure Overview

```text
src/
├── api/             # HTTP Client, Axios/Fetch wrappers, request/response interceptors, endpoints
│   ├── apiClient.js
│   └── endpoints.js
├── assets/          # Static media (icons, brand logos, vector illustrations, fonts)
│   ├── icons/
│   └── images/
├── components/      # Shared & UI Design System components
│   ├── common/      # Reusable atomic UI elements (Button, Input, Card, Modal, Loader)
│   ├── feedback/    # Error boundaries, Toast alerts, Skeletons, Empty states
│   └── layout/      # Application structure (Navbar, Sidebar, Footer, MainLayout)
├── config/          # Global application configs, environment constants, role enums
│   ├── constants.js
│   └── env.js
├── context/         # React Context state providers (AuthContext, ThemeContext)
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── features/        # Feature/domain-driven modules (vertical slices)
│   ├── auth/        # Authentication module (LoginForm, LoginPage, etc.)
│   └── dashboard/   # Dashboard & metrics module (StatsCard, DashboardPage, etc.)
├── hooks/           # Custom reusable React hooks (useLocalStorage, useDebounce, useToggle, useFetch, useAuth)
├── pages/           # Route-level pages (HomePage, ArchitecturePage, NotFoundPage)
├── routes/          # Navigation registry, route guards (ProtectedRoute), AppRoutes switcher
│   ├── AppRoutes.jsx
│   ├── ProtectedRoute.jsx
│   └── paths.js
├── services/        # Third-party integrations, storage services, session management
│   ├── authService.js
│   └── storageService.js
├── styles/          # Global design tokens, CSS variables, dark/light themes, resets
│   ├── global.css
│   └── variables.css
├── utils/           # Pure utility helper functions (formatters, regex validators, debounce/throttle)
│   ├── formatters.js
│   ├── helpers.js
│   └── validators.js
├── App.jsx          # Root application component wrapped with providers
└── main.jsx         # Application entry point
```

---

## 🏛️ Architectural Principles & Best Practices

1. **Feature-Sliced Modularity (`src/features/`)**:
   - Keep domain-specific components, pages, APIs, and hooks encapsulated within their respective feature folder.
   - Example: Billing, Patients, Appointments, Auth, Dashboard.

2. **Decoupled API & Storage Layer (`src/api/` & `src/services/`)**:
   - All network calls flow through `apiClient.js` with centralized token attachment, 401 handling, and error normalization.
   - Storage accesses are safely guarded with serialization and fallback mechanisms in `storageService.js`.

3. **Design System & CSS Variable Tokens (`src/styles/`)**:
   - Semantic tokens for primary, accent, glassmorphism, spacing, elevation shadows, and dark/light modes.

4. **Security & Route Guarding (`src/routes/`)**:
   - `ProtectedRoute` provides seamless authentication guards preventing unauthorized access.

5. **Production CI/CD Ready**:
   - Built and validated with strict linting, zero build warnings, and optimized chunk bundling.
