const osmosis = require('osmosis');
var router = require('express').Router();

const normaliseData = (data) => {
  const newData = { ...data };

  for (const key in newData) {
    const value = newData[key];

    if (key === 'price' || key === 'disc-price') {
      newData[key] = value.replace(/\s/g, '').replace(/,/g, '.');
    }
  }

  return newData;
};

router.get('/parsing', (req, res) => {
  const url = req.query.url;
  if (url && url !== '') {
    let result = {};
    osmosis
      .get(url)
      .set({
        title: '.product-name',
        price: '#j-sku-price',
        'disc-price': '#j-sku-discount-price',
        'total-price': '#j-total-price-value',
        thumbs: ['.img-thumb-item > img@src'],
        'og:image': 'meta[property="og:image"]@content',
      })
      .data(data => {
        data.thumbs = data.thumbs.map(el => el.replace('.jpg_50x50', ''));
        result = data;
      })
      .done(() => {
        res.send(normaliseData(result));
      });
  } else {
    res.send('no url param');
  }
});

module.exports = router;
