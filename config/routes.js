const router = require('express').Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const games = require('../controllers/games');
const teams = require('../controllers/teams');

router.route('/')
  .get((req, res) => {
    res.status(200).json('Welcome to the minute, where you drive sporting commentary.');
  });

router.route('/register')
  .post(auth.register);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .get(games.show)
  .put(games.update)
  .delete(games.delete);

router.route('/teams')
  .get(teams.index)
  .post(teams.create);

router.route('/teams/:id')
  .get(teams.show)
  .put(teams.update)
  .delete(teams.delete);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
