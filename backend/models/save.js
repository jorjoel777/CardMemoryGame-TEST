const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: String,
    required: true // required now
  },
  gameDate: {
    type: Date,
    required: true,
  },
  failed: {
    type: Boolean,
    default: false,
  },
  difficulty: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  timeTaken: {
    type: Number,
    required: true,
  }
}, 
{ timestamps: true });

module.exports = mongoose.model('Save', saveSchema);
