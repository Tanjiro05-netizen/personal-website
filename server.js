import express from 'express';
import cors from 'cors';
import sendEmail from './api/sendEmail.js';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
    const dotenv = await import('dotenv');
    dotenv.config();
}

const app = express();
const port = process.env.PORT || 3001; // Use Vercel's PORT environment variable

app.use(cors());
app.use(express.json());

app.post('/api/sendEmail', sendEmail);

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});