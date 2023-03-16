import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      moods {
        _id
        name
      }
    }
  }
`;

export const QUERY_SONG = gql`
  query song($name: String!) {
    song(name: $name) {
      _id
      name
      moods {
        _id
        name
      }
    }
  }
`;

export const QUERY_MOOD = gql`
    query mood($name: String!) {
        mood(name: $name) {
            _id
            name
            }
        }
    `
