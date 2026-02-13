import { Router } from "express";
import config from "../config/env.js";
import { store } from "../data/store.js";
import createSseStream from "../lib/sse.js";

const router = Router();

router.get("/chat/threads", (_req, res) => {
  res.json({ threads: store.getChatThreads() });
});

