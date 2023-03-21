import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOOD = gql `
  mutation addMood(
    $name: String!
  ) {
    addMood(
      name: $name
    ) {
      id
      name
    }
  }
`;

export const ADD_SONG = gql`
  mutation addSong(
    $name: String!
    $url: String!
  ) {
    addSong(
      name: $name
      url: $url
    ) {
      id
      name
      url
    }
  }
`;

export const SAVE_SONG = gql`
  mutation saveSong(
    $songId: ID!
    $name: String!
    $url: String!
  ) {
    addSong(
      songId: $songId
      name: $name
      url: $url
    ) {
      id
      name
      url
    }
  }
`;