# 🚀 TaskPilot — MERN Stack Task Management Application

TaskPilot is a comprehensive, full-featured **Task Management Application** built with the **MERN stack**, designed to streamline task organization, team collaboration, and project tracking. It offers secure user authentication, role-based access control, task prioritization, and insightful dashboards — all wrapped within a modern, clean, and efficient user interface.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Cloud)
- **Authentication:** JWT, Multer (for image uploads)
- **Excel Export:** exceljs
- **Hosting:** Vercel (Frontend & Backend)

---

## ✨ Features

- **User Authentication**
  - Secure signup & login with JWT
  - Role-based access (Admin / Team Member)
  - Admin Invite Token-based role assignment
  - Profile photo upload support

- **Task Management**
  - Create, update, delete tasks
  - Assign one or multiple team members
  - Set task priority (Low, Medium, High)
  - Attach file links and subtasks
  - Deadline management

- **Dashboards**
  - Admin and Team Member-specific dashboards
  - Real-time task status distribution
  - Visual charts (Pie & Bar) via Recharts
  - Recent tasks table view

- **Progress & Insights**
  - Task status dynamically updates based on sub-task completion
  - Downloadable Excel reports for tasks and team members

- **Responsive, Clean UI**
  - Modern, mobile-friendly user interface built with Tailwind CSS

---

## 📄 Application Pages Overview

### 🔐 Authentication

- **Sign Up**
  - Full Name, Email, Password, Profile Picture Upload, Admin Invite Token
  - Valid token assigns **Admin**, else defaults to **Member**

- **Login**
  - Email and Password authentication

---

### 🛡️ Admin Panel

- **Dashboard**
  - Overall task counts (All, Pending, In Progress, Completed)
  - **Pie Chart** — Task status distribution
  - **Bar Chart** — Priority-based task distribution
  - Recent tasks table

- **Create Task**
  - Add task details: Title, Description, Priority, Deadline, Attachments, Subtasks
  - Assign multiple team members
  - Success toast notification upon creation

- **Manage Tasks**
  - View all tasks as cards with:
    - Title, Status, Priority, Description, Progress Tracker, Dates, Assigned Members, Attachment Count
  - Filters: All, Pending, In Progress, Completed
  - Edit and Delete functionality
  - Download progress reports in Excel format

- **Team Members**
  - List of team members with:
    - Profile Picture, Name, Email, Assigned Task Breakdown (Pending, In Progress, Completed)
  - Download team-wise task report (Excel)

- **Logout**
  - Redirects to login page

---

### 👥 Team Member Panel

- **Dashboard**
  - Personal task overview (counts, charts, recent tasks)
  - Data specific to the logged-in team member

- **My Tasks**
  - Personal task cards with filters:
    - All, Pending, In Progress, Completed
  - Progress tracker and sub-task checklist
  - Clickable cards redirect to **Task Details**

- **Task Details**
  - Task info: Title, Description, Status, Due Date, Attachments, Assigned Members
  - Sub-task checklist
  - **Dynamic Status Update:**
    - All subtasks checked → **Completed**
    - Some subtasks checked → **In Progress**
    - None checked → **Pending**

- **Logout**
  - Redirects to login page

---

## 📊 Data Visualizations

- **Pie Chart:** Task status distribution (Pending, In Progress, Completed)
- **Bar Chart:** Task priority distribution (Low, Medium, High)
- **Excel Reports:** 
  - Task Progress Report
  - Team Member Assignment Report

---

## 🚀 Deployment — Vercel

## 🚀 Live Demo

🌐 Click this: [https://task-pilot-client.vercel.app](https://task-pilot-css1.vercel.app/login)

## Getting Started

To get started with the Task-Pilot project, follow these steps:

1. Clone the repository from GitHub:

2. **Set Environment Variables**: Navigate to the `frontend` and `backend` folders and add necessary environment variables. You may need to create a `.env` file and configure it with required variables:
   In the backend/.env file:

   ```
   MONGODB_URI = your-mongo-url
   PORT = 3000
   JWT_SECRET = your-jwt-secret
   ADMIN_INVITE_TOKEN = 1111111
   ```

   In the frontend/.env file:

   ```
   VITE_BACKEND_URL = your-server-url
   ```

3. **Install Dependencies**: Install dependencies in the `frontend` and `backend` folders using npm or yarn:

   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Start the Backend Server**: In the `backend` folder, start the development server using npm:

   ```
   npm run server
   ```

5. **Start the Frontend**: In the `frontend` folder, start the frontend application:

   ```
   npm run dev
   ```


