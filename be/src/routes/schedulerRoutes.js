import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/scheduler", (_req, res) => {
  res.json(store.getScheduler());
});

router.put("/scheduler/availability", (req, res, next) => {
  try {
    const updated = store.updateAvailability(req.body.availability || []);
    res.json(updated);
  } catch (error) {
    next(error);
  }
