const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.store_api_url;
  }

  async storeById(storeId) {
    return await this.get(`/store/${storeId}`);
  }

  async stores() {
    return await this.get(`/stores`);
  }
}

module.exports = StoreAPI;
