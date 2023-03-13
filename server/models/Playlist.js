const { Schema, model } = require('mongoose');

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    uri: {
      type: String,
      required: true,
      trim: true
    },
    moods: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Moods'
      }
    ]
  }
);

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;
