import { Router } from "express";
import { store } from "../data/store.js";

const router = Router();

router.get("/dashboard", (_req, res) => {
  res.json(store.getDashboard());
