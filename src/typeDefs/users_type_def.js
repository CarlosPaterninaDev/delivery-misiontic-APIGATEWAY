const { gql } = require('apollo-server');

const usersTypeDefs = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  type User {
    UserId: String!
  }

  input CredentialsInput {
    username: String!
    password: String!
  }

  extend type Mutation {
    authenticate(credentials: CredentialsInput!): Tokens!
    refreshToken(refresh: String!): Access!
    verifyToken(token: String!): User!
  }
`;

module.exports = usersTypeDefs;
