const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.DEV_DISCOVERY_URL);

const getDiscovery = (plat) => api.get("/featureds")
.set()
.query({platform : plat})

module.exports = {
   getDiscovery,
}
