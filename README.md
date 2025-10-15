# CyberLabs Platform 🚀

**CyberLabs** is a modern cybersecurity learning platform built with a scalable **MERN Stack Style** (React + Node.js + Express + Prisma + PostgreSQL). It offers an engaging and secure environment for cybersecurity training, exercises, and educational content.

---

## Features

- **Frontend (React)** with **Bootstrap, Material UI, Ant Design** & AOS animations.
- **Backend (Node.js + Express + TypeScript)** powered by **Prisma ORM** and **PostgreSQL**.
- Authentication & Authorization (JWT, bcrypt).
- Email support via **Nodemailer + Google API**.
- File uploads with **Multer**.
- Scalable and secure architecture Deployed on **Vercel**.

---

## Tech Stack

**Frontend:**

- React, React Router DOM
- Bootstrap, React-Bootstrap, Ant Design, Material UI
- AOS (Animations)
- Axios, JWT-Decode, SweetAlert2, React-Toastify
- FontAwesome, Material Icons, React Icons

**Backend:**

- Node.js, Express, TypeScript
- Prisma ORM + PostgreSQL
- JWT, Bcrypt, Express-Validator
- Nodemailer, Google APIs
- CORS, Cookie-Parser, Multer
- Template Engines: EJS, Handlebars, Pug

---

## 📂 Project Structure

```
CyberLabs/
│
├── front_end/        # React frontend app
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/          # Node.js backend API
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚡ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ahmedhussien1pro/Graduation-Project.get
cd CyberLabs
```

### 2️⃣ Install dependencies

#### Frontend

```bash
cd front_end
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file in the **backend/** directory:

```env
DATABASE_URL="postgresql://********"
JWT_SECRET="******"
PORT=3000
EMAIL_USER="cyberLabs@gmail.com"
EMAIL_PASS="**********"
GOOGLE_CLIENT_ID="***"
GOOGLE_CLIENT_SECRET="******"
```

---

## 🚀 Running the Project

### Backend (Node + Prisma)

```bash
cd backend
npm run dev       # or: npm start (with nodemon)
```

### Frontend (React)

```bash
cd front_end
npm start
```

Frontend runs by default on **[http://localhost:3000](http://localhost:3000)**
Backend runs by default on **[http://localhost:4000](http://localhost:5000)**

---

## Scripts

### Frontend (`front_end/package.json`)

- `npm start` → Start React app
- `npm build` → Production build
- `npm test` → Run tests

### Backend (`backend/package.json`)

- `npm start` → Start backend server with nodemon
- `npm run build` → Compile TypeScript
- `npm run seed` → Seed database with Prisma

---

## Prisma Migrations

```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

---

## Deployment

- **Frontend** → Vercel / Netlify
- **Backend** → Render / Railway / VPS
- **Database** → PostgreSQL (Supabase / Neon / RDS)

---

## Authors

- Ahmed Hussien
- CyberLabs Team
