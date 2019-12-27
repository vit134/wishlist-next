const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var router = express.Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send({ success: false, error: info });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      const { username } = req.user;
      var update = {
        last_login: Date.now(),
        online: true,
      };

      Account.findOneAndUpdate({ username }, update, { new: true }).exec()
        .then(data => {
          return res.send({ success: true, data });
        })
        .catch(err => res.status(400).send(err));
    });
  })(req, res, next);
});

router.get('/', function (req, res) {
  const { user } = req;
  res.send({ isLogin: Boolean(user), data: user });
});

module.exports = router;
