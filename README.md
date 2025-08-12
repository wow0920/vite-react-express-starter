d

# Vite + React + Express.js TypeScript Starter Kit

A modern boilerplate for building full-stack applications with:

- **Frontend:** Vite + React + TypeScript
- **Backend:** Express.js + TypeScript

This starter kit provides a ready-to-use development environment for building scalable web applications with a unified TypeScript codebase for both client and server.

---

## Features

- ⚡️ Fast development with Vite
- ⚛️ Modern React setup (with hooks, HMR, etc.)
- 🟦 TypeScript for both client and server
- 🚀 Express.js API server
- 🛠️ Pre-configured scripts for development and production
- 📦 Easy build and deployment

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

This will start both the Vite dev server (for React) and the Express backend with hot reload.

```bash
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend/API: [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

---

## Project Structure

```
.
├── src/
│   ├── client/      # React + Vite frontend (TypeScript)
│   └── server/      # Express.js backend (TypeScript)
├── dist/            # Production build output
├── package.json     # Root scripts and dependencies
├── README.md        # Project documentation
└── ...
```

- **src/client/**: All frontend source code (React components, routes, assets, etc.)
- **src/server/**: All backend source code (Express routes, API logic, etc.)

---

## Scripts

- `npm run dev` – Start both frontend and backend in development mode
- `npm run build` – Build both frontend and backend for production
- `npm run start` – Start the production server

---

## Customization

- Add your React components in `client/`
- Add your Express routes and logic in `server/`
- Update TypeScript configs as needed for your project

---

## License

MIT
