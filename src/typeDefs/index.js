const accountTypeDefs = require('./account_type_def');
const orderTypeDefs = require('./order_type_def');
const productTypeDefs = require('./product_type_def');
const storeTypeDefs = require('./store_type_def');
const usersTypeDefs = require('./users_type_def');

const schemasArrays = [
  accountTypeDefs,
  orderTypeDefs,
  productTypeDefs,
  storeTypeDefs,
  usersTypeDefs,
];

module.exports = schemasArrays;
