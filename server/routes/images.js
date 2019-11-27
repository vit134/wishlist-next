var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.post('/images', (req, res, next) => {
  var form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      next();
    }

    const tmpPath = files.file.path;
    res.send({ tmpPath });
  });
});

router.delete('/images', (req, res) => {
  const path = req.body.tmpPath;

  fs.unlink(path, (err) => {
    if (err) res.status(400).send({ err });
    res.send({ status: 'success', message: 'unlink success' });
  }
  );
});

module.exports = router;
