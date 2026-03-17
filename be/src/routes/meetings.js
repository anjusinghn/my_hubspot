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
  const { title, duration, createdBy } = req.body;
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  try {
    const created = await prisma.meetingLink.create({
      data: { title, duration, createdBy, slug },
    });
    const link = {
      id: created.id,
      name: created.title,
      duration: created.duration,
      owner: created.createdBy,
      slug: created.slug,
      createdAt: created.createdAt,
      url: `http://localhost:3000/book/${created.slug}`,
    };
    res.status(201).json(link);
  } catch (error) {
    console.error('Error creating meeting link:', error);
    res.status(500).json({ error: 'Failed to create meeting link' });
  }
});

// Get all booked meetings
router.get('/booked', async (_req, res) => {
  try {
    const rows = await prisma.bookedMeeting.findMany({ orderBy: { createdAt: 'desc' } });
    const mapped = rows.map((m) => ({
      id: m.id,
      title: m.title,
      attendee: m.attendeeName,
      email: m.attendeeEmail,
      scheduledAt: m.scheduledDate,
      duration: m.duration,
      linkUsed: m.linkUsed ?? '',
      description: m.description ?? '',
      createdAt: m.createdAt,
    }));
    res.json(mapped);
  } catch (error) {
    console.error('Error fetching booked meetings:', error);
    res.status(500).json({ error: 'Failed to fetch booked meetings' });
  }
});

// Book a meeting
router.post('/book', async (req, res) => {
  const { title, attendeeName, attendeeEmail, scheduledDate, duration, linkUsed, description } = req.body;
  try {
    const created = await prisma.bookedMeeting.create({
      data: {
