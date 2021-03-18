const supertest = require('supertest');
const env = require('dotenv').config();

const data = require('../data/mock_api_data.json')
const api = supertest(process.env.MOCK_API_URL);

const postId = (data) => api.post('/v3/8b9c1d29-0efb-4360-99fb-d67acc0bd6c9')
.set('Content-Type', 'application/json')
.set('Accept', 'application/json')
.send(data)

module.exports = {
   postId,
}
