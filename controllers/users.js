const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if (!user) return res.notFound();
      res.status(200).json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if (!user) return res.notFound();
      for (const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if (!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(200).json('User deleted'))
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
