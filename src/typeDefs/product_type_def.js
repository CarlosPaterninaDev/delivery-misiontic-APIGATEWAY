const { gql } = require('apollo-server');

const productTypeDefs = gql`
  type Product {
    productId: String!
    storeId: String
    productName: String
    description: String
    price: Int
    img: String
  }

  type Query {
    products: [Product]
  }

  type Query {
    productsByStoreId(storeId: String!): [Product]
  }
`;

module.exports = productTypeDefs;
