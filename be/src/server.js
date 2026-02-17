import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dealsRouter from './routes/deals.js';
import meetingsRouter from './routes/meetings.js';
import schedulerRouter from './routes/schedulerRoutes.js';

dotenv.config();

export function createServer() {
  const app = express();
