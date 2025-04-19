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
### Additional Features Implemented

- Email-based login functionality.
- Game history tracking with time calculations.
- User interface improvements for better user experience.​

 
### ⚙️ Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jorjoel777/CardMemoryGame-TEST.git

Navigate to the project root:

cd CardMemoryGame-TEST


Set up and start the backend:
cd backend
npm install
npm start


Set up and start the frontend:
cd ../frontend
npm install
npm run dev

Open your browser at:
http://localhost:5173

✅ Features Implemented

Frontend:

 Styled login and register pages (centered, responsive)

 Difficulty selection modal (Easy, Medium, Hard)

 Animated game screen with audio effects

 Game history screen with scroll and formatted results

 Token and userID stored via localStorage

 Game time and date (with hour) shown per match

Backend:
 User registration endpoint (POST /api/users/register)

 User login endpoint (POST /api/users/login)

 Game result saving (POST /api/memory/save)

 History retrieval (GET /api/memory/history/:userID)

📁 Project Structure

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

Notes

While the original challenge was estimated to take 2–3 hours, I dedicated additional time to implement features that enhance user value and demonstrate a comprehensive approach to full-stack development.

Backend runs on port 5000, frontend on 5173

MongoDB connection is configured for local use

No Web3 or MetaMask functionality was required or included

Focused on clean UX, logic separation, and practical functionality

🙌 Thank You
This test was developed with care and intention to demonstrate practical full-stack skills, UI styling, and component-based logic in React.

Ready to deploy.



