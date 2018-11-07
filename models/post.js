const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  minute: { type: Number },
  type: { type: String, enum: ['comment', 'goal', 'yellow card', 'red card'], default: 'comment' },
  content: { type: String },
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  game: { type: mongoose.Schema.OnjectId, ref: 'Game' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
