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
      return res.send({ success: false, error, account: 123 });
    }

    passport.authenticate('local')(req, res, () => {
      return res.send({ success: true, data: req.user });
    });
  });
});

module.exports = router;
