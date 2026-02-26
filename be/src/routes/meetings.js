import express from 'express';
import prisma from '../db.js';

const router = express.Router();

// Get all meeting links
router.get('/links', async (_req, res) => {
  try {
    const rows = await prisma.meetingLink.findMany({ orderBy: { createdAt: 'desc' } });
    const links = rows.map((link) => ({
      id: link.id,
      name: link.title,
      duration: link.duration,
      owner: link.createdBy,
      slug: link.slug,
      createdAt: link.createdAt,
      url: `http://localhost:3000/book/${link.slug}`,
    }));
    res.json(links);
  } catch (error) {
    console.error('Error fetching meeting links:', error);
    res.status(500).json({ error: 'Failed to fetch meeting links' });
  }
});

// Create a new meeting link
router.post('/links', async (req, res) => {
