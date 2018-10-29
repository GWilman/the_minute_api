const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .then(users => res.status(200).json(users))
    .catch(next);
}

module.exports = {
  index: usersIndex
};
