const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var mongoose = require('mongoose');
var router = express.Router();

router.post('/', function (req, res, next) {
  var { username, password, email } = req.body;
  const _id = mongoose.Types.ObjectId();
  const isActivate = true;

  Account.register(new Account({
    _id,
    username,
    email,
    is_activate: isActivate
  }), password, (error, account) => {
    if (error) {
      console.log('error', error);
      return res.status(200).send({ status: 'error', error, account });
    }

    passport.authenticate('local')(req, res, () => {
      return res.send({ status: 'success', user: req.user });
    });
  });
});

module.exports = router;
