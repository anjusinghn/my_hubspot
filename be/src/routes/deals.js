import express from 'express';
import prisma from '../db.js';

const router = express.Router();

// Get all deals
router.get('/', async (_req, res) => {
  try {
