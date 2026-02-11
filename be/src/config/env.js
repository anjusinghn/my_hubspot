import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const numberFromEnv = (value, fallback) => {
  const parsed = Number.parseInt(value ?? "", 10);
