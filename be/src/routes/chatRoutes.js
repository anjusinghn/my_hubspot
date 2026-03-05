import { Router } from "express";
import config from "../config/env.js";
import { store } from "../data/store.js";
import createSseStream from "../lib/sse.js";

const router = Router();

router.get("/chat/threads", (_req, res) => {
  res.json({ threads: store.getChatThreads() });
});

router.get("/chat/threads/:id/messages", (req, res) => {
  const messages = store.getChatMessages(req.params.id);
  res.json({ messages });
});

router.post("/chat/threads/:id/messages", (req, res, next) => {
  try {
    const payload = store.addChatMessage(req.params.id, req.body);
    res.status(201).json(payload);
  } catch (error) {
    next(error);
  }
});

router.get("/chat/threads/:id/stream", (req, res) => {
  const threadId = req.params.id;
  const stream = createSseStream(res, { heartbeatMs: config.sseHeartbeatMs });

  stream.send("seed", { messages: store.getChatMessages(threadId) });

  const interval = setInterval(() => {
    const simulated = {
      sender: "ai",
      content: "Simulated assistant insight: summarised latest activity and suggested next step.",
    };
    const message = store.addChatMessage(threadId, simulated);
    stream.send("message", message);
  }, 30000);

  res.on("close", () => {
