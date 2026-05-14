# Frontend

Vue3 + TypeScript + Vite

## Setup

```bash
npm install
npm run dev
```

Runs on http://localhost:5173

API proxy setup in vite.config.ts, requests to /api route to backend http://localhost:5000

See src/App.vue for UI implementation
See src/api/userAPI.ts for API client (Axios with interceptors)
