const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date_start: { type: Date },
  venue: { type: String },
  home_team: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  away_team: { type: mongoose.Schema.ObjectId, ref: 'Team' },
  game_threads: [{ type: mongoose.Schema.ObjectId, ref: 'GameThreads' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);
