const storeResolver = {
  Query: {
    storeById: (_, { storeId }, { dataSources }) => {
      return dataSources.storeAPI.storeById(storeId);
    },
    stores: (_, __, { dataSources }) => {
      return dataSources.storeAPI.stores();
    },
  },
  Mutation: {},
};

module.exports = storeResolver;
