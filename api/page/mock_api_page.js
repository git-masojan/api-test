const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.MOCK_API_URL);

const getId = () => api.get("/v2/5ea8acae2d0000634f3a40ba")
.set('Content-Type', 'application/json')
.send()

module.exports = {
   getId,
}
