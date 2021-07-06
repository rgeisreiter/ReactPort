const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Dog {
    _id: ID
    image: String
    name: String
    desc: String
    age: String
    size: String
    gender: Boolean
    liked: Boolean
    adopted: Boolean
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    dogs: [Dog]
    dog(dogId: ID!): Dog
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    likeDog(dogId: ID!, liked: Boolean!): Dog
    adoptDog(dogId: ID!, adopted: Boolean!): Dog
  }
`;

module.exports = typeDefs;
