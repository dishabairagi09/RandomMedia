# Random Media — Beautiful MERN Starter

A pretty MERN website where users can **sign up / log in** and then choose between **reading a random short story** or **listening to a random short song**. Includes an **Exit** (logout) button.

## ✨ Features
- Gorgeous gradient + glassmorphism UI
- JWT authentication (signup/login)
- Protected dashboard route
- Random story & random song endpoints
- Vite + React on the frontend
- Express + MongoDB (Mongoose) on the backend

## 🧱 Project Structure
```
beautiful-random-media-site/
  server/          # Express API + MongoDB + JWT
  client/          # Vite + React app
```

## 🚀 Quick Start

### 1) Backend
```bash
cd server
cp .env.example .env     # edit values if needed
npm install
npm run dev
```
The server runs on **http://localhost:5000**.

> Ensure MongoDB is running locally (default URI in `.env.example` is `mongodb://127.0.0.1:27017/random_media_app`). You can also use MongoDB Atlas (paste its URI into `MONGO_URI`).

### 2) Frontend
Open another terminal:
```bash
cd client
npm install
npm run dev
```
The app runs on **http://localhost:5173**.

### 3) Use the App
- Open the site, click **Sign up** to create an account.
- After login, choose **Read a Random Story** or **Listen to Random Music**.
- Click **Exit** to log out and return to the landing page.

## 🔧 Configuration
Frontend can point to a custom API base by adding a `.env` file in `client/`:
```
VITE_API_BASE=http://localhost:5000
```

## 📝 Notes
- Demo songs use short preview MP3s hosted on samplelib.com. Replace with your own mp3 URLs in `server/routes/content.js` if you wish.
- Stories are simple strings; extend `STORIES` or serve from a DB.
- This is a minimal starter focused on clarity and beauty. Harden for production (HTTPS, secure cookies, CSRF, advanced validation, etc.) before deploying.

Enjoy!
