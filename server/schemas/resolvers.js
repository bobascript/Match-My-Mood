const { AuthenticationError } = require('apollo-server-express');
const { User, Songs, Mood } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('songs');
        },
        user: async (parent, { userName }) => {
            return User.findOne({ userName }).populate('songs');
        },
        moods: async () => {
            return Mood.find();
        },
        mood: async (parent, { moodId }) => {
            return Mood.findOne({ _id: moodId });
        },
        songs: async () => {
            return Songs.find()
        },
        song: async (parent, { mood }) => {

            const match = mood ? { mood } : {};

            const allSongs = await Songs.find({ moods: mood }).populate('moods');
            const randomNumber = Math.floor(Math.random() * allSongs.length);
            const randomSong = allSongs[randomNumber];
            return randomSong;
        }
    },

    Mutation: {
        addUser: async (parent, { userName, password }) => {
            const user = await User.create({ userName, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { userName, password }) => {
            const user = await User.findOne({ userName });

            if (!user) {
                throw new AuthenticationError('No user found with this user name!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addMood: async (parent, { name }) => {
            return Mood.create({ name });
        },
        addSong: async (parent, { name, url }) => {
            return Songs.create({ name, url });
        },
        saveSong: async (parent, { song }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: {
                            songs: { songId: song._id, name: song.name, url: song.url },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateUserMood: async (parent, { userId, name }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { moods: name } },
                {
                    new: true,
                    runValidators: true,
                }
            )
        }
    },
};

module.exports = resolvers;
