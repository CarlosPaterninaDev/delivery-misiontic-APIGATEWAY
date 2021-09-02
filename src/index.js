const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const UsersAPI = require('./dataSources/users_api');
const OrderAPI = require('./dataSources/order_api');
const ProductAPI = require('./dataSources/product_api');
const StoreAPI = require('./dataSources/store_api');

const authentication = require('./util/authentication');

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersAPI: new UsersAPI(),
    orderAPI: new OrderAPI(),
    productAPI: new ProductAPI(),
    storeAPI: new StoreAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
