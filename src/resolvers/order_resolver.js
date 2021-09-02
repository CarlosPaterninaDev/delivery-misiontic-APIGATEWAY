const orderResolver = {
  Query: {
    orderByIdUser: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.orderAPI.orderByIdUser(userId);
      else return null;
    },
  },
  Mutation: {
    createOrder: (_, { order }, { dataSources, userIdToken }) => {
      if (order.userIdOrigin == userIdToken)
        return dataSources.orderAPI.createOrder(order);
      else return null;
    },
  },
};

module.exports = orderResolver;
