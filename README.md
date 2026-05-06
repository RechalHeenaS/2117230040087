🚀 Project Description

This is a full-stack web application that demonstrates a Logging Middleware system integrated with backend APIs and a React frontend.
It supports notification management, filtering, pagination, and UI tracking using Material UI.

🏗️ Tech Stack
Node.js
Express.js
React.js
Material UI
Axios
LocalStorage

📂 Project Structure
2117230040087/
 ├── notification_app_be/   # Backend (Node.js + Express)
 ├── notification_app_fe/   # Frontend (React)
 ├── screenshots/           # API & UI proof images
 ├── README.md
 
⚙️ Features
🔧 Backend
Reusable Logging Middleware
GET /notifications API
POST /data API (validation + logging)
External API integration
Proper error handling
Token-based protection (if implemented)

💻 Frontend
All Notifications Page
Priority Notifications Page
Filter by Type (Event / Result / Placement)
Pagination (limit-based)
Viewed vs New notifications (LocalStorage)
Responsive UI (Material UI)

🔗 API Endpoints
Backend APIs
GET /
POST /data
GET /notifications
External APIs
Logging API integration
Notification API integration

📊 Logging System Format
Log(stack, level, package, message)
Example:
backend | info | route | GET /notifications called

🎯 Key Highlights
✔ Reusable Logging Middleware
✔ API Integration
✔ Notification Filtering System
✔ Pagination Support
✔ Viewed / New Tracking
✔ Responsive UI
✔ Error Handling

🧪 How to Run the Project
▶ Backend
cd notification_app_be
node server.js

Runs on:
http://localhost:5000

▶ Frontend
cd notification_app_fe
npm install
npm start

Runs on:
http://localhost:3000


👨‍💻 Author
Student ID: 2117230040087
