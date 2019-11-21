var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Wishes = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Account' },
  account: { type: Schema.Types.ObjectId, ref: 'Account' },
  name: String,
  createdDate: { type: Date, default: Date.now },
  link: String,
  image: String,
  tags: [String],
  category: [
    { type: Schema.Types.ObjectId, ref: 'Categories' },
  ],
  assigned: { type: Schema.Types.ObjectId, ref: 'Account', null: true, default: null },
  price: Number,
  price_currency: String,
  description: String
});

module.exports = mongoose.model('Wishes', Wishes);
