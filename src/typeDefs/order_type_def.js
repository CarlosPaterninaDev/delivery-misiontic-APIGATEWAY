const { gql } = require('apollo-server');

const orderTypeDefs = gql`
  type Order {
    id: String!
    idUser: String
    products: [ListProduct]
    total: Int
    dateOrder: String
  }

  type ListProduct {
    idProduct: String
    count: Int
  }

  input ProductOrder {
    idProduct: String
    count: Int
  }

  input OrderInput {
    idUser: String
    products: [ProductOrder]
    total: Int
  }

  extend type Query {
    orderByIdUser(userId: String!): [Order]
  }

  type Mutation {
    createOrder(order: OrderInput!): Order
  }
`;

module.exports = orderTypeDefs;
