const { AuthenticationError } = require('apollo-server-express');
const { User, Playlist, Mood } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('moods');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('moods');
        },
        moods: async () => {
            return Mood.find();
        },
        mood: async () => {
            return Mood.findOne({ name });
        },
        playlists: async () => {
            return Playlist.find()
        },
        playlist: async () => {
            return Playlist.findById(_id)
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
