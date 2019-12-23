const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const HolidaysSchema = new Schema({
  name: String,
  date: Date,
});

const Account = new Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  country: String,
  city: String,
  phone: Number,
  gender: String,
  avatar: String,
  date_of_birth: Date,
  holidays: {
    type: [HolidaysSchema],
    default: [],
  },
  was_register: { type: Date, default: Date.now },
  is_activate: { type: Boolean, default: false },
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
