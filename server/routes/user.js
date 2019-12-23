const express = require('express');
const Account = require('../models/account');
const Wishes = require('../models/wishes');
var router = express.Router();

router.get('/:username/info', (req, res) => {
  const { username } = req.params;
  Account
    .findOne({ username })
    .exec()
    .then(data => res.send({ success: true, data }))
    .catch(err => res.send({ success: false, error: err }));
});

router.get('/all', (req, res) => {
  var agg = [
    {
      $group: {
        _id: '$userId',
        count: {
          $sum: 1,
        },
      },
    },
  ];

  Wishes
    .aggregate(agg)
    .then(data => {
      const sortedData = data.sort((a, b) => b.count - a.count);

      const ids = sortedData.map(el => el._id);
      return Account
        .find()
        .where('_id')
        .in(ids)
        .exec(function (err, result) {
          if (err) {
            return res.send({ success: false, error: err });
          }

          return res.send({
            success: true,
            data: result.map((el, ind) => ({ ...el._doc, count: sortedData[ind].count })),
          });
        });
    })
    .catch(error => res.send({ success: false, error }));
});

router.put('/update', (req, res) => {
  const { body, user } = req;

  if (!user) {
    res.send({ success: false, error: 'no user' });
  }

  const { _id } = user;

  Account.findOneAndUpdate({ _id }, body, { new: true }).exec()
    .then(data => {
      console.log(data);
      res.send({ success: true, data });
    })
    .catch(error => res.send({ status: false, error }));
});

module.exports = router;
