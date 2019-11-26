var express = require('express');
var router = express.Router();
var Categories = require('../../models/categories');

router.get('/categories', function (req, res) {
  Categories.find()
    .then(categories => {
      // res.send(getCategoriesTree(categories))
      res.send(categories);
    });
});

router.post('/categories', function (req, res) {
  var { body } = req;

  if (!body.name) {
    res.status(400).send({
      error: true,
      message: 'name is required',
    });
  }

  const newCategory = new Categories({ ...body });

  newCategory.save()
    .then((data) => res.send(data))
    .catch(err => {
      res.status(400).send({ err });
    });
});

module.exports = router;
