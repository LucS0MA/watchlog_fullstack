# API_boilerplate

# WatchLog API

![Node.js](https://img.shields.io/badge/node-22.x-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Lint](https://img.shields.io/badge/lint-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

A modern Node.js API boilerplate using **TypeScript**, **Express**, **ESLint**, **Prettier**, **Vitest**, and **tsx** for development.

---

## Features

- **TypeScript** with strict type checking
- **Express** for HTTP server
- **ESLint** + **Prettier** for consistent code
- **Vitest** for unit and integration tests
- **Husky** + **lint-staged** for pre-commit checks
- **Hot-reloading** with `tsx --watch`
- Environment variables via `.env` file
- Modular folder structure:
  - `routes/` → API endpoints
  - `controllers/` → HTTP request handling
  - `services/` → business logic
  - `models/` → data models
  - `middlewares/` → Express middlewares
  - `utils/` → helpers
  - `types/` → TypeScript global types
  - `__tests__/` → tests

---

## Getting Started

### 1. Install dependencies

npm install

### 2. Create a .env file

PORT=3000

### 3. Run the development server

npm run dev

Server will start with hot-reloading on changes.

### 4. Build and run for production

npm run build
npm start

### 5. Lint and format

npm run lint # check ESLint
npm run lint:fix # fix ESLint issues
npm run format # format code with Prettier
npm run format:check # check formatting

### 6. Run tests

npm run test # Vitest in watch mode
npm run test:run # run all tests once
npm run test:ui # open Vitest UI
npm run coverage # generate coverage report

### Folder Structure

src/
├─ index.ts # Entry point
├─ routes/ # API routes
├─ controllers/ # HTTP logic
├─ services/ # Business logic
├─ models/ # Data models
├─ middlewares/ # Express middlewares
├─ utils/ # Helper functions
├─ types/ # Global TypeScript types
└─ tests/ # Unit & integration tests

# watchlog
