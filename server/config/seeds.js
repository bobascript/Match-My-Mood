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
      code: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0R7EWhquaAICmyE5MZqt3q?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
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
