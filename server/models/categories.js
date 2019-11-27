const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Categories', {
  _id: Schema.Types.ObjectId,
  name: String,
  parentId: { type: Schema.Types.ObjectId, ref: 'Categories', null: true, default: null },
});
