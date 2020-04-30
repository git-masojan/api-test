const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.MOCK_API_URL);

const postMockApi = () => api.post("/v2/5ea9fd212d00007600268441")
.set('Content-Type', 'application/json')
.send()

module.exports = {
   postMockApi,
}
