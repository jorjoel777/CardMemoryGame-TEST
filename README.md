## WonderCards – Full Stack Memory Game 🎮🚀

### Developed by: [jorjoel777](https://github.com/jorjoel777)

This project was developed individually as a full-stack technical test. It includes a working frontend and backend with MongoDB integration to store users and game results. A retro-styled UI and game logic complete the user experience.

---

### 🧠 Objective

Build a working memory card game featuring:
- User registration and login
- Difficulty level selection
- Game logic with score saving
- A game history screen

---

### 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Styling:** Custom CSS with pixel-art retro theme
- **Assets:** Audio (hover/click), animated background, custom fonts

---
### ✅ Features Implemented

**Frontend:**
- Styled login and register pages (centered, responsive)
- Difficulty selection modal (Easy, Medium, Hard)
- Animated game screen with audio effects
- Game history screen with scroll and formatted results
- Token and userID stored via localStorage
- Game time and date (with hour) shown per match

**Backend:**
- User registration endpoint (`POST /api/users/register`)
- User login endpoint (`POST /api/users/login`)
- Game result saving (`POST /api/memory/save`)
- History retrieval (`GET /api/memory/history/:userID`)

---
### Additional Features Implemented

- Email-based login functionality.
- Game history tracking with time calculations.
- User interface improvements for better user experience.​

 
### ⚙️ Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jorjoel777/CardMemoryGame-TEST.git


2. Navigate to the project root:
   ```bash
   cd CardMemoryGame-TEST

3. Set up and start the backend:
   ```bash
   cd backend
   npm install
   npm start

5. Visit the frontend at:
   ```bash
   http://localhost:5173

✅ Features Implemented

Frontend:
-  Styled login and register pages (centered, responsive)
-  Difficulty selection modal (Easy, Medium, Hard)
-  Animated game screen with audio effects
-  Game history screen with scroll and formatted results
-  Token and userID stored via localStorage
-  Game time and date (with hour) shown per match

Backend:
-  User registration endpoint (POST /api/users/register)
-  User login endpoint (POST /api/users/login)
-  Game result saving (POST /api/memory/save)
-  History retrieval (GET /api/memory/history/:userID)


📁 Folder Structure
   ```bash
CardMemoryGame-TEST/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Login/
│   │   ├── MemoryCardGame/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css


 ```
### 📌 Notes

- The original challenge suggested 2–3 hours. I invested additional time to implement meaningful upgrades and polish.
- Backend runs on port `5000`, frontend on `5173`.
- MongoDB connection is pre-configured (tested with MongoDB Atlas).
- No Web3 or MetaMask functionality was required or implemented.
- Focused on clean UX, logic separation, and reusable components.

🙌 Thank You
This test was developed with care and intention to demonstrate practical full-stack skills, UI styling, and component-based logic in React.
Ready to deploy.



