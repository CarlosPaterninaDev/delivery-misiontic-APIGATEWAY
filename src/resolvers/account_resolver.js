const accountResolver = {
  Query: {
    accountByUserId: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.orderAPI.accountByUserId(userId);
      else return null;
    },
  },
  Mutation: {},
};

module.exports = accountResolver;
