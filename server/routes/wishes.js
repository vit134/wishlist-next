var express = require('express');
var Wishes = require('../models/wishes');
var Account = require('../models/account');
var router = express.Router();
var mongoose = require('mongoose');
const { uploadFile } = require('../utils');
var ObjectId = mongoose.Types.ObjectId;
const chalk = require('chalk');
// var filterWishesByCategories = Utils.filterWishesByCategories

router.get('/', function (req, res) {
  console.log(chalk.red(req.query.user));
  const userId = String(req.query.user);

  const request = {
    error: false,
    userId
  };

  if (mongoose.Types.ObjectId.isValid(userId)) {
    console.log(chalk.red(req.query.user));
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

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  console.log(chalk.red(id));

  Wishes.findById(id).populate('assigned userId').exec()
    .then(data => {
      console.log(data);
      res.send({ status: 'success', data });
    })
    .catch(err => {
      console.log(chalk.red(err));
      res.status(200).send({ error: true, message: 'not found' });
    });
});

router.post('/', async function (req, res) {
  const body = {
    ...req.body,
    userId: String(req.user._id)
  };

  const { image } = req.files;

  console.log(image);

  let fileUploadResult;

  try {
    fileUploadResult = await uploadFile(image);
  } catch (e) {
    fileUploadResult = e;
  }

  console.log('fileUploadResult', fileUploadResult);

  // TODO: запилить обработчик ошибок
  if (fileUploadResult.success) {
    console.log('fileUploadResult', fileUploadResult);
    const item = new Wishes({ ...body, image: fileUploadResult.data.url });
    // item.populate('category').execPopulate();
    return item.save()
      .then((data) => res.send(data))
      .catch(err => {
        res.status(400).send({ err });
      });
  }

  res.status(400).send({ err: 'что то пошло не так' });

  // res.send({
  //   fileUploadResult,
  //   image: {
  //     name: image.name,
  //     data: image.data.toString('base64')
  //   }
  // });

  // if (req.body.image) {
  //   const name = await renameFile(req.body.image[0]);
  //   body.image = name.url;
  // } else if (req.body['image-link']) {
  //   const name = await renameFile(req.body['image-link']);
  //   body.image = name.url;
  // }

  // const item = new Wishes({ ...body });
  // // item.populate('category').execPopulate();
  // item.save()
  //   .then((data) => res.send(data))
  //   .catch(err => {
  //     res.status(400).send({ err });
  //   });
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

// router.post('/wishes', async function (req, res) {
//   const body = {
//     ...req.body,
//     userId: String(req.user._id)
//   };

//   if (req.body.image) {
//     const name = await moveFile(req.body.image[0]);
//     body.image = name.url;
//   } else if (req.body['image-link']) {
//     const name = await moveFile(req.body['image-link']);
//     body.image = name.url;
//   }

//   // item = new Wishes({ ...body });
//   // item.populate('category').execPopulate();
//   // item.save()
//   //   .then((data) => res.send(data))
//   //   .catch(err => {
//   //     res.status(400).send({ err });
//   //   });
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
