const mongoose = require('mongoose');

const { Schema } = mongoose;

const moodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Mood = mongoose.model('Category', moodSchema);

module.exports = Mood;
