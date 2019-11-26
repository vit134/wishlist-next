const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var mongoose = require('mongoose');
var router = express.Router();

router.post('/', function (req, res, next) {
  var { username, password, email } = req.body;
  const _id = new mongoose.Types.ObjectId();

  Account.register(new Account({
    _id,
    username,
    email,
  }), password, (error, account) => {
    if (error) {
      console.log('error', error);
      return res.send({ status: 'error', error, account });
    }

    passport.authenticate('local')(req, res, () => {
      return res.send({ status: 'success', user: req.user });
    });
  });
});

module.exports = router;
