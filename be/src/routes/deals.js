import express from 'express';
import prisma from '../db.js';

const router = express.Router();

// Get all deals
router.get('/', async (_req, res) => {
  try {
    const deals = await prisma.deal.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(
      deals.map((d) => ({
        id: d.id,
        name: d.name,
        amount: d.amount ?? '',
        stage: d.stage,
        owner: d.owner ?? '',
