const accountResolver = require('./account_resolver');
const orderResolver = require('./order_resolver');
const productResolver = require('./product_resolver');
const storeResolver = require('./store_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(
  accountResolver,
  userResolver,
  orderResolver,
  productResolver,
  storeResolver
);

module.exports = resolvers;
