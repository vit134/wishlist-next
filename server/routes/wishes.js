const express = require('express');
const Wishes = require('../models/wishes');
const Account = require('../models/account');
const router = express.Router();
const mongoose = require('mongoose');
const { uploadFile } = require('../utils');
const { profanity } = require('../requests');
const ObjectId = mongoose.Types.ObjectId;

router.get('/', function (req, res) {
  const userId = String(req.query.user);

  const request = {
    error: false,
    userId,
  };

  if (mongoose.Types.ObjectId.isValid(userId)) {
    Wishes.find({ userId: new ObjectId(userId) }).populate('assigned userId').exec()
      .then(wishes => {
        request.data = wishes;
        res.send(request);
      })
      .catch(err => {
        res.status(400).send({ error: true, message: err });
      });
  } else {
    Account.findOne({ username: userId })
      .then(acc => {
        const id = acc._id;
        return Wishes.find({ userId: id }).populate('assigned userId category');
      })
      .then(wishes => {
        request.body = wishes;

        res.send(request);
      })
      .catch(err => res.status(400).send({ error: true, message: err }));
  }
});

router.get('/all', function (req, res) {
  Wishes.find()
    .populate('assigned userId')
    .sort({ date: 1 })
    .exec()
    .then(wishes => {
      res.send({ wishes });
    })
    .catch(err => {
      res.status(400).send({ error: true, message: err });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);

  Wishes.findById(id).populate('assigned userId').exec()
    .then(data => res.send({ status: 'success', data }))
    .catch(err => res.send({ status: false, error: err }));
});

router.get('/by-user-id/:username', function (req, res) {
  const { username } = req.params;

  console.log(username);

  if (mongoose.Types.ObjectId.isValid(username)) {
    Wishes.find({ userId: new ObjectId(username) }).populate('assigned userId').exec()
      .then(data => res.send({ success: true, data }))
      .catch(err => res.send({ success: false, error: err }));
  } else {
    Account.findOne({ username })
      .then(({ _id }) => {
        return Wishes.find({ userId: _id }).populate('assigned userId');
      })
      .then(data => res.send({ success: true, data }))
      .catch(err => res.send({ success: false, error: err }));
  }
});

router.post('/', async function (req, res) {
  if (!req.user) {
    return res.send({ success: false, error: 'Сессия устраела, авторизуйтесь и попробуйте снова' });
  }

  const nameValidation = {
    success: true,
  };

  try {
    const { data } = await profanity(req.body.name);
    if (data.result.level > 0) {
      nameValidation.success = false;
      nameValidation.data = data;
    }
  } catch (e) {
    console.log(e);
  }

  if (!nameValidation.success) {
    return res.send({ success: false, error: 'Грубые слова в названии вишки, ай ай ай' });
  }

  const body = {
    ...req.body,
    userId: String(req.user._id),
  };

  let fileUploadResult;

  if (req.files) {
    const { image } = req.files;

    try {
      fileUploadResult = await uploadFile(image);
    } catch (e) {
      fileUploadResult = e;
    }
  }

  if (fileUploadResult && fileUploadResult.success) {
    body.image = fileUploadResult.data.url;
  }

  const newWish = new Wishes(body);
  newWish.populate('userId');

  newWish.save()
    .then(data => res.send({
      success: true,
      data: {
        ...JSON.parse(JSON.stringify(data)),
        userName: req.user.username,
      },
    }))
    .catch(err => res.send({ success: false, error: err }));
});

// router.get('/wishes-by-categories', function (req, res) {
//   const categories = req.query.categories.split(';');

//   Wishes.find({ category: { $in: categories } }).populate('assigned userId category').exec()
//     .then(wishes => {
//       // res.send(filterWishesByCategories(wishes));
//       res.send(wishes);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).send({ error: true, message: err });
//     });
// });

// router.put('/wishes', async function (req, res) {
//   const { data } = req.body;
//   const result = {};

//   for (const item of data) {
//     const { _id } = item;
//     const updated = await Wishes.findOneAndUpdate({ _id }, item, { new: true }).populate('assigned category').exec()
//       .then(data => {
//         return data;
//       });

//     if (updated) {
//       result[item._id] = updated;
//     }
//   }

//   res.send(result);
// });

// router.delete('/wishes', function (req, res, next) {
//   Wishes.deleteMany({ _id: { $in: req.body } }, function (err, resp) {
//     if (err) {
//       console.log(err);
//       next();
//     }

//     res.send(req.body);
//   });
// });

module.exports = router;
