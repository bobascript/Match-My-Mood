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
    query Mood($moodId: ID!) {
    mood(moodId: $moodId) {
    _id
    name
    description
  }
}
    `
//pull all moods
export const QUERY_MOODS = gql`
  query getMoods {
    moods {
    _id
    name
    description
  }
}
`;

//pull a random song based on mood
export const QUERY_SONG = gql`
  query Song($mood: ID!) {
  song(mood: $mood) {
    _id
    name
    url
    moods {
      _id
      name
    }
  }
}
`;
