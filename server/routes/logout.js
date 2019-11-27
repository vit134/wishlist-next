const express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  req.logout();

  res.send({ success: true, user: req.user });
});

module.exports = router;
