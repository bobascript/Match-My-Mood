const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    moods: [Mood]
  }

  type Mood {
    _id: ID
    name: String
  }

  type Songs {
    _id: ID
    name: String
    code: String
    moods: [Mood]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    moods: [Mood]
    songs: [Songs]
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;