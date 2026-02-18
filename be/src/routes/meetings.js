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
