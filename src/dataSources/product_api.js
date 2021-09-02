const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;
  }

  async productsByStoreId(storeId) {
    return await this.get(`/products/${storeId}`);
  }

  async products() {
    return await this.get(`/products`);
  }
}

module.exports = ProductAPI;
