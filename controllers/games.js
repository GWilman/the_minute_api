const Game = require('../models/game');

function gamesIndex(req, res, next) {
  Game
    .find()
    .then(games => res.status(200).json(games))
    .catch(next);
}

function gamesCreate(req, res, next) {
  Game
    .create(req.body)
    .then(game => res.status(201).json(game))
    .catch(next);
}

function gamesShow(req, res, next) {
  Game
    .findById(req.params.id)
    .then((game) => {
      if (!game) return res.notFound();
      res.status(200).json(game);
    })
    .catch(next);
}

function gamesUpdate(req, res, next) {
  Game
    .findById(req.params.id)
    .then((game) => {
      if (!game) return res.notFound();
      for (const field in req.body) {
        game[field] = req.body[field];
      }
      return game.save();
    })
    .then(game => res.status(200).json(game))
    .catch(next);
}

function gamesDelete(req, res, next) {
  Game
    .findById(req.params.id)
    .then((game) => {
      if (!game) return res.notFound();
      return game.remove();
    })
    .then(() => res.status(200).json('Game deleted'))
    .catch(next);
}

module.exports = {
  index: gamesIndex,
  create: gamesCreate,
  show: gamesShow,
  update: gamesUpdate,
  delete: gamesDelete
}
