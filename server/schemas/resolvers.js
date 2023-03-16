const { AuthenticationError } = require('apollo-server-express');
const { User, Songs, Mood } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('moods');
        },
        user: async (parent, { userName }) => {
            return User.findOne({ userName }).populate('moods');
        },
        moods: async () => {
            return Mood.find();
        },
        mood: async (parent, { name }) => {
            return Mood.findOne({ name });
        },
        songs: async () => {
            return Songs.find()
        },
        song: async () => {
            return Songs.findById(_id)
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
        updateUserMood: async (parent, { userId, name }) => {
            return await User.findOneAndUpdate(
                {_id: userId},
                { $addToSet: { moods: name }},
                {
                    new: true,
                    runValidators: true,
                }
            )
        }
    },
};

module.exports = resolvers;
