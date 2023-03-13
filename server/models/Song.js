const { Schema, model } = require('mongoose');

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    artist: {
      type: String,
      required: true
    },
    moods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Moods'
      }
    ]
  }
);

const Song = model('Song', songSchema);

module.exports = Song;
