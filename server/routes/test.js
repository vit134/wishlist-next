const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

router.get('/', (req, res) => {
  author.save(function (err) {
    if (err) return console.log(err);

    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id // assign the _id from the person
    });

    story1.save(function (err) {
      if (err) return console.log(err);

      Person
        .find()
        .populate('stories')
        .exec(function (err, person) {
          if (err) return console.log(err);
          console.log(person);
          res.send(person);
          // prints "The author is Ian Fleming"
        });
    });
  });
});

module.exports = router;
