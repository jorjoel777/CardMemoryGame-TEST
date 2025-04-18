const express = require('express');
const { saveGameData, getGameHistory } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);

// ✅ New route to get game history
router.get('/history/:userID', getGameHistory);

module.exports = router;