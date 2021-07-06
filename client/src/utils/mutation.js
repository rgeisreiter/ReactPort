import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LIKE_DOG = gql`
  mutation likeDog($dogId: ID!, $liked: Boolean!) {
    likeDog(dogId: $dogId, liked: $liked) {
      token {
        user {
          _id
          name
        }
      }
    }
  }
`;

export const ADOPT_DOG = gql`
  mutation adoptDog($dogId: ID!, $adopted: Boolean!) {
    likeDog(dogId: $dogId, adopted: $adopted) {
      token {
        user {
          _id
          name
        }
      }
    }
  }
`;
