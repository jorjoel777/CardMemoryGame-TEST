const Save = require('../models/save');
const User = require('../models/user');

exports.saveGameData = async (req, res) => {
  const { userID, gameDate, failed, difficulty, completed, timeTaken } = req.body;

  console.log('Received data to save:', req.body);

  try {
    if (!userID || !gameDate || difficulty === undefined || completed === undefined || timeTaken === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await User.findById(userID).select('username');
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const newSave = new Save({
      userID,
      username: user.username, // We include it here
      gameDate,
      failed,
      difficulty,
      completed,
      timeTaken,
    });

    await newSave.save();
    console.log('✔ Game data saved to MongoDB'); 
    res.status(201).json({ message: 'Game data saved successfully' });
  } catch (error) {
    console.error('🔥 Error saving game data to MongoDB:', error);
    res.status(500).json({ message: 'Error saving game data', error });
  }
};

exports.getGameHistory = async (req, res) => {
  const { userID } = req.params;

  try {
    const history = await Save.find({ userID }).sort({ gameDate: -1 });

    if (!history.length) {
      return res.status(404).json({ message: 'No game history found for this user.' });
    }

    res.status(200).json({ history });
  } catch (error) {
    console.error('Error fetching game history:', error);
    res.status(500).json({ message: 'Error retrieving game history', error });
  }
};
