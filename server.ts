// File path: /server.ts
import 'dotenv/config'; // Load .env file
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import geminiHandler from './api/gemini.js';
import sendMessageHandler from './api/sendMessage.js';

// The handlers are written for Vercel's Request/Response objects,
// but they are compatible enough with Express's objects for our use case.
import type { VercelRequest, VercelResponse } from '@vercel/node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// API routes
app.post('/api/gemini', (req, res) => {
    geminiHandler(req as VercelRequest, res as VercelResponse);
});

app.post('/api/sendMessage', (req, res) => {
    sendMessageHandler(req as VercelRequest, res as VercelResponse);
});

// Serve static files from the React app build directory
const clientBuildPath = path.join(__dirname, '..', 'dist');
app.use(express.static(clientBuildPath));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});