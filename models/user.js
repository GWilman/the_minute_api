const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  full_name: { type: String },
  first_name: { type: String, required: 'First name is required'},
  last_name: { type: String, required: 'Last name is required'},
  username: { type: String, required: 'Username is required.', unique: 'That username has already been taken.' },
  email: { type: String, required: 'Email is required.', unique: 'That email has already been taken.' }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
