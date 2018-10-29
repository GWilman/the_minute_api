const User = require('../models/user');

function register(req, res, next) {
  if (req.body.first_name && req.body.last_name) {
    req.body.full_name = `${req.body.first_name} ${req.body.last_name}`
  }

  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

module.exports = {
  register: register
};
