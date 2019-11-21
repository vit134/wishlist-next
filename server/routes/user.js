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
          $sum: 1
        }
      }
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
            data: result.map((el, ind) => ({ ...el._doc, count: sortedData[ind].count }))
          });
        });
    })
    .catch(error => res.send({ success: false, error }));
});

module.exports = router;
