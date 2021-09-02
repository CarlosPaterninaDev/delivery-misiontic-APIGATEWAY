const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class OrderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.order_api_url;
  }

  async accountByUserId(userId) {
    return await this.get(`/accounts/${userId}`);
  }

  async createOrder(order) {
    order = new Object(JSON.parse(JSON.stringify(order)));
    return await this.post('/newOrder', order);
  }

  async orderByIdUser(userId) {
    return await this.get(`/orders/${userId}`);
  }
}

module.exports = OrderAPI;
