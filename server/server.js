import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from "path";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import reportRoutes from './routes/reportRoutes.js'
import { fileURLToPath } from "url";

const app = express()

// Middlewares to handle CORS
app.use(cors())

// Connect to database
await connectDB()

// Middleware
app.use(express.json())

// Routes
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/reports',reportRoutes);

// Server uploads folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
