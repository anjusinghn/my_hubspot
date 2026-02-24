import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/knowledge", (_req, res) => {
  res.json(store.getKnowledge());
});

router.post("/knowledge", (req, res, next) => {
  try {
    const article = store.upsertKnowledgeArticle(req.body);
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
});

export default router;
