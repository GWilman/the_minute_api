const mongoose = require('mongoose');

const gameThreadsSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  game: { type: mongoose.Schema.ObjectId, ref: 'Game' },
  posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('GameThreads', gameThreadsSchema);
