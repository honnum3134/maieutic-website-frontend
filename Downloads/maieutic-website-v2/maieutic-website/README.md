# Maieutic Edutech — Full Stack Website

## Project Structure

```
maieutic-website/
├── frontend/          ← React + Vite (your complete website)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/           ← Node.js + Express + MongoDB
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env           ← ⚠️  Fill this in before running
│   └── package.json
│
└── README.md          ← this file
```

---

## How to Run

### Terminal 1 — Start Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on → http://localhost:5000

### Terminal 2 — Start Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on → http://localhost:3000

---

## Setup Required Before Running

### 1. Fill in backend/.env
```
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/maieuticDB
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:3000
```

### 2. MongoDB Atlas (free database)
- Sign up at https://www.mongodb.com/atlas
- Create free M0 cluster
- Get your connection string → paste into MONGO_URI above

### 3. Gmail App Password
- Google Account → Security → 2-Step Verification → App Passwords
- Create one → paste into EMAIL_PASS above

---

## API Endpoints (Backend)

| Method | Endpoint            | Used by              |
|--------|---------------------|----------------------|
| POST   | /api/contact        | Contact Us page form |
| POST   | /api/enquiry        | Enquire Now button   |
| POST   | /api/application    | Apply Now form       |
| GET    | /api/contact        | View all contacts    |
| GET    | /api/enquiry        | View all enquiries   |
| GET    | /api/application    | View all applications|

---

See backend/README.md for full detailed instructions.
