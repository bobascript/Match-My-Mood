const db = require('./connection');
const { User, Mood, Songs } = require('../models');

db.once('open', async () => {
  await Mood.deleteMany();

  const moods = await Mood.insertMany([
    {
      name: 'Happy', 
      description: 'A positive emotional state characterized by feelings of joy, contentment, and satisfaction. Songs may include upbeat, energetic, and uplifting tunes with catchy melodies and positive lyrics.'
    },
    { 
      name: 'Sad',
      description: 'A negative emotional state characterized by feelings of sorrow, grief, or melancholy. Songs may include slower, more subdued, and contemplative tunes with somber melodies and lyrics that explore themes of loss, heartbreak, or loneliness.' 
    },
    { 
      name: 'Angry',
      description: 'A negative emotional state characterized by feelings of frustration, annoyance, or rage. Songs may include loud, fast-paced, and intense tunes with heavy beats and aggressive lyrics.' 
    },
    { 
      name: 'Calm',
      description: 'A positive emotional state characterized by feelings of peace, relaxation, and tranquility. Songs may include soothing, gentle, and melodic tunes with soft instrumentation and minimal vocals.'
    },
  ]);
  console.log(moods);
  console.log('moods seeded');

  await Songs.deleteMany();

  const songs = await Songs.insertMany([
    {
      name: 'Living My Best Life',
      url: "https://open.spotify.com/embed/track/0R7EWhquaAICmyE5MZqt3q?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'My Girls',
      url: "https://open.spotify.com/embed/track/2gE0khQ948RYQOeTgCUL2a?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'Wouldn\'t It Be Nice',
      url: "https://open.spotify.com/embed/track/2Gy7qnDwt8Z3MNxqat4CsK?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'Beautiful Day',
      url: "https://open.spotify.com/embed/track/1VuBmEauSZywQVtqbxNqka?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'Closer to You',
      url: "https://open.spotify.com/embed/track/5agTqEuMNi0RXgASfpgUUD?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'Here Comes The Sun',
      url: "https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator",
      moods: [moods[0]._id],
    },
    {
      name: 'Pink Moon',
      url: "https://open.spotify.com/embed/track/4KROoGIaPaR1pBHPnR3bwC?utm_source=generator",
      moods: [moods[3]._id],
    },
    {
      name: 'Going to California',
      url: "https://open.spotify.com/embed/track/1YVc2NJBwOtAebQiSUbt5T?utm_source=generator",
      moods: [moods[3]._id],
    },
    {
      name: 'Nocturne No. 2 in E-Flat Major, Op. 9 No. 2',
      url: "https://open.spotify.com/embed/track/1VNvsvEsUpuUCbHpVop1vo?utm_source=generator",
      moods: [moods[3]._id],
    },
    {
      name: 'Thinking out Loud',
      url: "https://open.spotify.com/embed/track/1Slwb6dOYkBlWal1PGtnNg?utm_source=generator",
      moods: [moods[3]._id],
    },
    {
      name: 'Everything I Wanted',
      url: "https://open.spotify.com/embed/track/3ZCTVFBt2Brf31RLEnCkWJ?utm_source=generator",
      moods: [moods[3]._id],
    },

    {
      name: 'Talking to the Moon',
      url: "https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU?si=5667f66621d54be8?utm_source=generator",
      moods: [moods[3]._id],
    },

    // Sad songs
    {
      name: 'Talking to the Moon',
      url: "https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU?si=5667f66621d54be8?utm_source=generator",
      moods: [moods[1]._id],
    },
    {
      name: 'Stitches',
      url: "https://open.spotify.com/embed/track/5jsw9uXEGuKyJzs0boZ1bT?si=0f5a28c7f99444e4?utm_source=generator",
      moods: [moods[1]._id],
    },
    {
      name: 'Away from the Sun',
      url: "https://open.spotify.com/embed/track/3THdexHRmED4euIY91Zrxc?si=96d6616918544472?utm_source=generator",
      moods: [moods[1]._id],
    },
    {
      name: 'Photograph',
      url: "https://open.spotify.com/embed/track/3hb2ScEVkGchcAQqrPLP0R?si=61850e7779ae4a2a?utm_source=generator",
      moods: [moods[1]._id],
    },

    // Angry songs
    {
      name: 'Headstrong',
      url: "https://open.spotify.com/embed/track/1AEYT6VxrxXPMoQUxsY0E4?si=26437970ccfd4abc?utm_source=generator",
      moods: [moods[2]._id],
    },
    {
      name: 'Gives You Hell',
      url: "https://open.spotify.com/embed/track/6ihL9TjfRjadfEePzXXyVF?si=ba475e74643146ba?utm_source=generator",
      moods: [moods[2]._id],
    },
    {
      name: 'Roar',
      url: "https://open.spotify.com/embed/track/27tNWlhdAryQY04Gb2ZhUI?si=8a8d55238e654b9b?utm_source=generator",
      moods: [moods[2]._id],
    },
    {
      name: 'I Hate This Part',
      url: "https://open.spotify.com/embed/track/3tSuRiNgJmMqmYR23dCqnR?si=58417ccfa53b46d4?utm_source=generator",
      moods: [moods[2]._id],
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
