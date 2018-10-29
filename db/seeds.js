const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const { dbURI } = require('../config/env');

const User = require('../models/user');

mongoose.set('useCreateIndex', true); // stops deprecation warning in mongoose ^5.3.1
mongoose.connect(dbURI, { useNewUrlParser: true });

User.collection.drop();

User
  .create([{
    'full_name': 'George Wilman',
    'first_name': 'George',
    'last_name': 'Wilman',
    'username': 'GWilman',
    'email': 'georgewilman1@gmail.com'
  }, {
    'full_name': 'Roisin Noonan',
    'first_name': 'Roisin',
    'last_name': 'Noonan',
    'username': 'RNoonan',
    'email': 'roisin@intros.at'
  }])
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.error(err))
  .finally(() => mongoose.connection.close());
