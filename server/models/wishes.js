var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Wishes = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Account', null: true },
  name: String,
  link: String,
  image: String,
  tags: [String],
  category: [
    { type: Schema.Types.ObjectId, ref: 'Categories' }
  ],
  assigned: { type: Schema.Types.ObjectId, ref: 'Account', null: true, default: null },
  price: Number,
  price_currency: String,
  description: String
});

class WishesClass {
  get all () {
    return 'bla';
  }
}

Wishes.loadClass(WishesClass);

module.exports = mongoose.model('Wishes', Wishes);
