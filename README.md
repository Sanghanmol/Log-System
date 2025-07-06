# 🪵 Log Ingestion and Querying System

A full-stack developer tool that simulates a real-world logging system with API ingestion and advanced frontend filtering. Built using **Node.js + Express** on the backend and **React + Vite** on the frontend.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [License](#license)

---

## 🚀 Features

### ✅ Log Ingestion (POST `/logs`)
- Accepts structured logs in JSON format
- Validates schema (level, message, resourceId, timestamp, etc.)
- Stores logs in a `logs.json` file

### ✅ Log Querying (GET `/logs`)
- Full-text search on `message`
- Filter by:
  - `level` (error, warn, info, debug)
  - `resourceId`
  - Timestamp range (start–end)
- Multi-filter support
- Logs sorted reverse-chronologically

### ✅ Frontend UI
- Built using React with Vite
- Filters bar (text, dropdown, datetime inputs)
- Logs shown in a scrollable list with visual log level cues
- Responsive and Bootstrap-styled

---

## 📦 Tech Stack

| Layer     | Tech         |
|-----------|--------------|
| Frontend  | React (Vite), Bootstrap |
| Backend   | Node.js, Express |
| Database  | JSON File (via Node `fs`) |

---

## 🚀 Installation

### 1. Clone the Repo
git clone https://github.com/Sanghanmol/log-system.git

### 2. Install dependencies:
npm install

### 3. Configure environment variables:
 Add the required environment variables (e.g. port).

### 4. Start the backend and frontend server:
npm start

### 5. Open your browser: 
👉 http://localhost:8080

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Built with ❤️ using the MERN Stack, Vite, and Bootstrap — for developers, by a developer.