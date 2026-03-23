# NASA Space Explorer

A modern React + Node.js application that visualizes NASA Astronomy Picture of the Day (APOD) data with an interactive gallery and analytics dashboard.

---

## Live Demo

- Frontend: https://nasa-space-explorer-blue.vercel.app
- Backend API: https://nasa-space-explorer-k4kr.onrender.com

---

## Tech Stack

### Frontend

- React (TypeScript)
- Material UI (MUI)
- React Query
- Recharts

### Backend

- Node.js
- Express
- NASA APOD API

---

## Project Structure

```
root/
│
├── api/
│   ├── modules/
│         ├── apod/
│             ├── apod.controllers
│             ├── apod.routes/
│             ├── apod.services/
│             ├── apod.routes/
│   ├── utils/
│   ├── helper/
│   └── app.ts
│   └── server.ts
│
├── web/
│   ├── api/
│   ├── app/
│   ├── features/
│   ├── shared/
│   ├── pages/
│   ├── theme/
│   └── main.tsx
```

---

## Setup Locally

### 1. Clone repo

```
git clone https://github.com/maxblessed/nasa-space-explorer.git
cd nasa-space-explorer
```

---

### 2. Setup Backend

```
cd api
npm install
```

Create `.env`:

```
NASA_API_KEY=your_key
PORT=10000
BASE_URL=https://api.nasa.gov

```

Run:

```
npm run dev
```

---

### 3. Setup Frontend

```
cd web
npm install
```

Create `.env`:

```
VITE_API_URL=http://localhost:10000
```

Run:

```
npm run dev
```

---

## Features

- Daily NASA APOD Hero Section
- Gallery with Date Range & Pagination
- Dashboard Analytics (Images vs Videos)
- Lazy Loading & Skeleton UI
- Fully Responsive Design

---

## Architecture

- Feature-based frontend structure
- Modular backend (controller/service/routes)
- API abstraction layer
- Reusable hooks and components

---

## Deployment

- Frontend: Vercel
- Backend: Render

---

## Notes

- Date range limited to 30 days for performance
- Future dates disabled
- Video content handled gracefully

---

## Author

Thompson Yeb
