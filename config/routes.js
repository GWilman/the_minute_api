const router = require('express').Router();
const auth  = require('../controllers/auth');
const users  = require('../controllers/user');

router.route('/')
  .get((req, res, next) => {
    res.status(200).json('Welcome to the minute, where you drive sporting commentary.')
  });

router.route('/register')
  .post(auth.register);

router.route('/users')
  .get(users.index);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
