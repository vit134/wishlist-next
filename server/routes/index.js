var express = require('express');
var passport = require('passport');
var Account = require('../../models/account');
var mongoose = require('mongoose');
var router = express.Router();

const Utils = require('../utils');

var moveFile = Utils.renameFile;

router.get('/', function (req, res) {
  res.render('index', { user: req.user });
});

router.get('/register', function (req, res) {
  res.render('register', { });
});

router.get('/test', (req, res) => {
  res.send({
    title: 'test of login'
  });
});

router.post('/register', function (req, res) {
  var { username, password, email } = req.body;
  const _id = mongoose.Types.ObjectId();
  const isActivate = true;
  Account.register(new Account({
    _id,
    username,
    email,
    is_activate: isActivate
  }), password, function (error, account) {
    if (error) {
      return res.status(400).send({ status: 'error', error, account });
    }

    passport.authenticate('local')(req, res, function () {
      res.send({ status: 'success', user: req.user });
    });
  });
});

router.get('/activate', function (req, res) {
  const { user } = req.query;

  Account.findOne({ username: user })
    .then(account => {
      account.set({ is_activate: true, online: true, last_login: new Date() });
      account.save().then((data) => res.send(data));
    });
});

router.get('/login', function (req, res) {
  res.send({ user: req.user ? req.user : false });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  const { username } = req.user;
  var update = {
    last_login: Date.now(),
    online: true
  };

  Account.findOneAndUpdate({ username }, update, { new: true }).exec()
    .then(data => {
      res.send({ user: data });
    })
    .catch(err => res.status(400).send(err));
});

router.post('/update', async function (req, res) {
  const { _id } = req.body;
  const body = {
    ...req.body
  };

  if (req.body.image) {
    const name = await moveFile(req.body.image[0]);
    body.avatar = name.url;
  }

  Account.findOneAndUpdate({ _id }, body, { new: true }).exec()
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({ err });
    });
});

router.get('/logout', function (req, res) {
  var query = {
    username: req.user.username
  };

  req.logout();

  var update = {
    last_login: Date.now(),
    online: false
  };
  var options = {
    new: true
  };
  Account.findOneAndUpdate(query, update, options, function (err, user) {
    if (err) {
      console.log(err);
    }
    res.send({ user: req.user });
  });
});

router.get('/user-info', async function (req, res) {
  const userId = String(req.query.user);
  let response;

  if (mongoose.Types.ObjectId.isValid(userId)) {
    response = await Account.findById(userId).exec()
      .then(acc => acc)
      .catch(err => res.status(400).send(err));
  } else {
    response = await Account.findOne({ username: userId })
      .then(acc => acc)
      .catch(err => res.status(400).send(err));
  }

  if (!response) {
    res.status(400);
  }

  res.send(response);
});

module.exports = router;
