import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const numberFromEnv = (value, fallback) => {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const config = {
  port: numberFromEnv(process.env.PORT, 4000),
  apiBasePath: "/api",
  sseHeartbeatMs: numberFromEnv(process.env.SSE_HEARTBEAT_MS, 15000),
  auth: {
    enabled: process.env.API_AUTH_DISABLED !== "true",
    sharedToken: process.env.API_SHARED_TOKEN || "dev-token",
  },
