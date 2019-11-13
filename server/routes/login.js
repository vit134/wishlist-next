const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var router = express.Router();

router.post('/', passport.authenticate('local'), function (req, res) {
  const { username } = req.user;
  var update = {
    last_login: Date.now(),
    online: true
  };

  Account.findOneAndUpdate({ username }, update, { new: true }).exec()
    .then(data => {
      res.send({ isLogin: true, data });
    })
    .catch(err => res.status(400).send(err));
});

router.get('/', function (req, res) {
  const { user } = req;
  res.send({ isLogin: Boolean(user), data: user });
});

module.exports = router;
