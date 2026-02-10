import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/settings", (_req, res) => {
  res.json(store.getSettings());
