const express = require('express');
const Account = require('../models/account');
var router = express.Router();

router.get('/', function (req, res) {
  var query = {
    username: req.user.username,
  };

  req.logout();

  var update = {
    last_login: Date.now(),
    online: false,
  };

  Account.findOneAndUpdate(
    query,
    update,
    { new: true },
    (err, user) => {
      if (err) {
        console.log(err);
      }
      res.send({ user: req.user });
    });
});

module.exports = router;
