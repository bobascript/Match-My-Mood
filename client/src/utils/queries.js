import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($userName: String!) {
  user(userName: $userName) {
    _id
    userName
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
//pull all moods
export const QUERY_MOODS = gql`
  {
    moods {
    _id
    name
  }
}
`;

//pull a random song based on mood
export const QUERY_SONG = gql`
  {
    song(mood: "Happy") {
    title
    artist
    mood
  }
  }
`;