# Drone Survey Management

## Database Setup

To set up the PostgreSQL database, follow these steps:

1. Open your PostgreSQL client (e.g., `psql`, `pgAdmin`).
2. Create a new database:
   ```sql
   CREATE DATABASE drone_survey;



Overview
The Drone Survey Management System is a web-based platform for corporations to plan, manage, and monitor drone surveys.

Key Features
✔ Mission Planning – Define flight paths and schedule missions
✔ Fleet Management – View all drones with their live status
✔ Real-time Monitoring – Track ongoing missions on a map
✔ Survey Reports – Generate insights and analytics

🛠️ Tech Stack
Frontend: Angular, TypeScript, Angular Material

Backend: Node.js, Express, PostgreSQL, Sequelize ORM

Database: PostgreSQL

AI Tools Used: Claude Code, Replit, Windsurf, etc.

📂 Project Structure
bash
Copy
Edit
drone-survey-management/
│── frontend/       # Angular UI
│── backend/        # Node.js API
│── README.md       # Documentation
🚀 Setup Instructions
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/drone-survey-management.git
cd drone-survey-management
2️⃣ Install and Start Backend
bash
Copy
Edit
cd backend
npm install
npm start
Runs on http://localhost:5000

3️⃣ Install and Start Frontend
bash
Copy
Edit
cd frontend
npm install
ng serve
Runs on http://localhost:4200

