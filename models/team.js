const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String },
  color: { type: String },
  picture_url: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
