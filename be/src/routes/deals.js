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
        closeDate: d.closeDate ?? null,
        createdAt: d.createdAt,
      }))
    );
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({ error: 'Failed to fetch deals' });
  }
});

// Create a new deal
router.post('/', async (req, res) => {
  const { name, amount, stage, owner, closeDate } = req.body;
  try {
    const created = await prisma.deal.create({
      data: {
        name,
        amount: amount || null,
        stage: stage || 'new',
        owner: owner || null,
        closeDate: closeDate ? new Date(closeDate) : null,
      },
    });
    res.status(201).json({
      id: created.id,
      name: created.name,
      amount: created.amount ?? '',
      stage: created.stage,
      owner: created.owner ?? '',
      closeDate: created.closeDate ?? null,
      createdAt: created.createdAt,
    });
  } catch (error) {
    console.error('Error creating deal:', error);
    res.status(500).json({ error: 'Failed to create deal' });
  }
});

// Update a deal
router.put('/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const { name, amount, stage, owner, closeDate } = req.body;
  try {
    const updated = await prisma.deal.update({
      where: { id },
      data: {
        name,
        amount: amount ?? null,
        stage,
        owner: owner ?? null,
        closeDate: closeDate ? new Date(closeDate) : null,
      },
    });
    res.json({
