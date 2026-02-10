import express from 'express';
import prisma from '../db.js';

const router = express.Router();

// Get all meeting links
router.get('/links', async (_req, res) => {
  try {
