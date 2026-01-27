# Facebook Clone - AI Agent Instructions

## Architecture Overview
This is a client-side Facebook clone built with vanilla HTML, CSS, and JavaScript. The application consists of separate HTML pages for different features:
- `login/login.html` - User authentication
- `register/index.html` - User registration
- `Dashboard/dashboard.html` - Main dashboard after login
- `authentication/script.js` - Authentication guard

## Data Storage
- **localStorage** is used for all data persistence
- `"users"` key stores array of user objects with properties: `name`, `lastNaam`, `email`, `password`, `day`, `month`, `year`, `gender`
- `"currentUser"` key stores the logged-in user's object
- No server-side storage or API calls

## Navigation & Routing
- Manual URL redirects using `window.location.href`
- Authentication check in `authentication/script.js` redirects to login if no `currentUser`
- Post-login redirect: `../Dashboard/dashboard.html`
- Post-registration redirect: `../login/login.html`

## Component Structure
Each feature has its own folder with:
- `.html` - Main page structure
- `.js` - Functionality (DOM manipulation, event handlers)
- `.css` - Styling

Example: `login/` contains `login.html`, `login.js`, `login.css`

## User Management Patterns
- Registration: Collect form data → validate → push to `users` array in localStorage → redirect to login
- Login: Check email/password against `users` array → set `currentUser` → redirect to dashboard
- Validation: Basic empty field checks, password length ≥8 characters

## UI/UX Patterns
- Uses SweetAlert2 for user notifications (`Swal.fire()`)
- Font Awesome icons for UI elements
- Responsive design with viewport meta tags
- CSS reset in `global.css` using `box-sizing: border-box`

## Known Issues & Patterns
- Authentication script has variable name inconsistency: `userDetail` declared but `userData` used
- Dashboard functionality is minimal (dashboard.js is empty)
- No logout functionality implemented
- No input sanitization or security measures
- Hard-coded Facebook logo URLs from CDN

## Development Workflow
- No build tools or package managers required
- Serve files directly via HTTP server (e.g., Live Server extension)
- Debug using browser dev tools; data persists in localStorage
- Test user flows: register → login → dashboard

## Code Conventions
- Event listeners attached directly to DOM elements (e.g., `btn.addEventListener("click", loginForm)`)
- Form submission prevented with `e.preventDefault()` in handlers
- JSON.parse/JSON.stringify for localStorage operations
- Inline event handlers in HTML (e.g., `onsubmit="saveLocalStorage(event)"`)

## External Dependencies
- SweetAlert2: `https://cdn.jsdelivr.net/npm/sweetalert2@11`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css`