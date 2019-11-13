const mongoose = require('mongoose');

module.exports = mongoose.model('Tags', {
  name: String
});
