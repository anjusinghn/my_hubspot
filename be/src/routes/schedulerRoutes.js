import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/scheduler", (_req, res) => {
  res.json(store.getScheduler());
});
