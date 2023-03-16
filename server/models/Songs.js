const { Schema, model } = require('mongoose');

const SongsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    code: {
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

const Songs = model('Songs', SongsSchema);

module.exports = Songs;
