const usersResolver = {
  Mutation: {
    authenticate: (_, { credentials }, { dataSources }) =>
      dataSources.usersAPI.authRequest(credentials),
    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.usersAPI.refreshToken(refresh),
    verifyToken: (_, { token }, { dataSources }) =>
      dataSources.usersAPI.verifyToken(token),
  },
};

module.exports = usersResolver;
