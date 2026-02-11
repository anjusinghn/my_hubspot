import { Router } from "express";

const router = Router();

router.post("/ai/suggest", (req, res) => {
  const { prompt, context } = req.body || {};
  const echo = prompt?.slice(0, 120) || "action";
