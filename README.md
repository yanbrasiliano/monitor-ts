
# Site Monitor

This project is a site status monitoring application, built with Vue 3 on the frontend and Express with TypeScript on the backend. It displays the status of various websites in a visual interface, periodically updating response times, status codes, and last check timestamps.

## Features

- Monitors website availability and displays their status in real-time.
- Automatic data refresh every 10 seconds (or as configured).
- Visual differentiation for "online" (green) and "offline" (red) sites.
- API data refresh with centralized storage using Pinia.

## Prerequisites

- Node.js (>= 18)
- Docker (optional, to run in container)
- VPN configured (if you need to access internal URLs, such as corporate sites)

## Environment Setup

Make sure to set the required environment variables for the backend in a `.env` file in the project's root:

```dotenv
NODE_ENV=production
PORT=8001
```

## Project Structure

```plaintext
├── resources/         # Frontend code (Vue 3)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── src/               # Backend code (Express with TypeScript)
├── .env               # Environment variables
├── Dockerfile         # Dockerfile for container setup
└── package.json       # Backend project dependencies
```

## Usage Instructions

### Running with Docker

To start the project with Docker, run the following command:

```bash
docker-compose up --build
```

This will:
1. Build the frontend and backend images.
2. Start the frontend server on port `5173` and the backend on port `8001`.

Access the frontend at `http://localhost:5173` and the backend API at `http://localhost:8001`.

### Running Locally (without Docker)

If you prefer to run the project locally without Docker, follow these steps:

1. **Install dependencies for the backend and frontend**:

   ```bash
   # In the project's root
   npm install

   # Install frontend dependencies
   cd resources
   npm install
   cd ..
   ```

2. **Start the backend**:

   In the project root, run:

   ```bash
   npm run dev
   ```

   This will start the backend server on port `8001`.

3. **Start the frontend**:

   In a separate terminal, navigate to the frontend directory and run:

   ```bash
   cd resources
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

### Testing Site Connection

To add or modify the sites being monitored, edit the `sitesConfig` file in the frontend, located in:

```javascript
export const sitesConfig = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://www.twitter.com" },
];
```

### VPN Configuration

If you need to monitor internal URLs (such as corporate sites), make sure to connect to the required VPN before starting the project.

### Production Build

To build the frontend and backend for production:

1. For the frontend:

   ```bash
   cd resources
   npm run build
   ```

2. For the backend:

   ```bash
   npm run build
   ```

This will generate optimized files in the `dist` folder.

## Technologies Used

- **Frontend**: Vue 3, Tailwind CSS, Pinia, Vite
- **Backend**: Express, TypeScript, Axios
- **Docker**: For containerizing frontend and backend
