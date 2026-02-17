import config from "../config/env.js";

const UNPROTECTED_PATHS = new Set(["/health"]);

export function authGuard(req, res, next) {
  if (!config.auth.enabled || UNPROTECTED_PATHS.has(req.path)) {
    return next();
  }

  const headerToken = (req.headers.authorization || "").replace("Bearer ", "");
  const queryToken = req.query?.token;
  const token = headerToken || queryToken;

  if (token === config.auth.sharedToken) {
    req.user = { id: "system", role: "admin" };
