const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var router = express.Router();

// const authCb = (err, user, info) => {
//   if (err) { return next(err) }
//   if (!user) { return res.redirect('/login') }
//   req.logIn(user, function (err) {
//     if (err) { return next(err) }
//     return res.redirect('/users/' + user.username);
//   });
// };

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

// router.post('/', passport.authenticate('local'), function (req, res) {
//   const { username } = req.user;
//   var update = {
//     last_login: Date.now(),
//     online: true
//   };

//   Account.findOneAndUpdate({ username }, update, { new: true }).exec()
//     .then(data => {
//       res.send({ isLogin: true, data });
//     })
//     .catch(err => res.status(400).send(err));
// });

router.get('/', function (req, res) {
  const { user } = req;
  console.log(user);
  res.send({ isLogin: Boolean(user), data: user });
});

module.exports = router;
