import express from 'express'
import { adminOnly, protect } from '../middlewares/authMiddleware.js';
import { exportTasksReport, exportUsersReport } from '../controllers/reportController.js';

const router = express.Router();

// User Management  Routes
router.get('/export/tasks', protect, adminOnly, exportTasksReport); // Export all tasks as Excel/PDF
router.get('/export/users', protect, adminOnly, exportUsersReport); // Export user-task report

export default router;