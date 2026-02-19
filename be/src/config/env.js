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
