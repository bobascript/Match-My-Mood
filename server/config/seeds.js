const db = require('./connection');
const { User, Mood, Songs } = require('../models');

db.once('open', async () => {
  await Mood.deleteMany();

  const moods = await Mood.insertMany([
    { name: 'Happy' },
    { name: 'Sad' },
    { name: 'Angry' },
    { name: 'Calm' },
  ]);

  console.log('moods seeded');

  await Songs.deleteMany();

  const songs = await Songs.insertMany([
    {
      name: 'Living My Best Life',
      url: "https://open.spotify.com/embed/track/0R7EWhquaAICmyE5MZqt3q?utm_source=generator",
      moods: moods[0]._id,
    },

  ]);

  console.log('songs seeded');

  await User.deleteMany();

  await User.create({
    userName: 'testUser',
    email: 'test@test.com',
    password: 'abcd1234',
    moods: [
      moods[0], moods[1],
    ],
  });
  console.log('users seeded');

  process.exit();
});
