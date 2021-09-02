const { gql } = require('apollo-server');

const storeTypeDefs = gql`
  type Store {
    storeId: String!
    storeName: String
    description: String
    img: String
  }

  type Query {
    stores: [Store]
  }

  type Query {
    storeById(storeId: String!): [Store]
  }
`;

module.exports = storeTypeDefs;
