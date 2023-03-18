const { Schema, model } = require('mongoose');

const SongsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    },
    moods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Mood'
      }
    ]
  }
);

const Songs = model('Songs', SongsSchema);

module.exports = Songs;
