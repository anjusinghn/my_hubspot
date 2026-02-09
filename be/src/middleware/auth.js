import config from "../config/env.js";

const UNPROTECTED_PATHS = new Set(["/health"]);

export function authGuard(req, res, next) {
  if (!config.auth.enabled || UNPROTECTED_PATHS.has(req.path)) {
    return next();
  }
