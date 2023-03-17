const mongoose = require('mongoose');

const { Schema } = mongoose;

const moodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood;
