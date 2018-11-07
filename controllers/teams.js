const Team = require('../models/team');

function teamsIndex(req, res, next) {
  Team
    .find()
    .then(teams => res.status(200).json(teams))
    .catch(next);
}

function teamsCreate(req, res, next) {
  Team
    .create(req.body)
    .then(team => res.status(201).json(team))
    .catch(next);
}

function teamsShow(req, res, next) {
  Team
    .findById(req.params.id)
    .then((team) => {
      if (!team) return res.notFound();
      res.status(200).json(team);
    })
    .catch(next);
}

function teamsUpdate(req, res, next) {
  Team
    .findById(req.params.id)
    .then((team) => {
      if (!team) return res.notFound();
      for (const field in req.body) {
        team[field] = req.body[field];
      }
      return team.save();
    })
    .then(team => res.status(200).json(team))
    .catch(next);
}

function teamsDelete(req, res, next) {
  Team
    .findById(req.params.id)
    .then((team) => {
      if (!team) return res.notFound();
      return team.remove();
    })
    .then(() => res.status(200).json('Team deleted'))
    .catch(next);
}

module.exports = {
  index: teamsIndex,
  create: teamsCreate,
  show: teamsShow,
  update: teamsUpdate,
  delete: teamsDelete
};
