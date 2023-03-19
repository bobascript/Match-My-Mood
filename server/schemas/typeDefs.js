const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    moods: [Mood]
    songs: [Songs]
  }

  type Mood {
    _id: ID
    name: String
    description: String
  }

  type Songs {
    _id: ID
    name: String
    url: String
    moods: [Mood]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    moods: [Mood]
    mood(moodId: ID!): Mood
    songs: [Songs]
    song(mood: ID!): Songs
    user(userName: String!): User
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateUserMood(name: String): User
    addMood(name: String!): Mood
    addSong(name: String!, url: String!): Songs
  }
`;

module.exports = typeDefs;