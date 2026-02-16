import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/knowledge", (_req, res) => {
  res.json(store.getKnowledge());
});

router.post("/knowledge", (req, res, next) => {
