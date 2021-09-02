module.exports = {
  users_api_url: process.env.USERS_API_URL || 'http://127.0.0.1:8000',
  order_api_url:
    process.env.ACCOUNT_API_URL || 'https://g3msorder.herokuapp.com',
  product_api_url:
    process.env.PRODUCT_API_URL || 'https://g3msproducts.herokuapp.com',
  store_api_url:
    process.env.STORE_API_URL || 'https://g3msstores.herokuapp.com',
};
