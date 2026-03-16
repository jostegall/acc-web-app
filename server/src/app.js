import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/healthRoutes.js';
import ttsRoutes from './routes/ttsRoutes.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/tts', ttsRoutes);

export default app;