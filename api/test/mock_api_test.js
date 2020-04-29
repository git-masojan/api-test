
const assert = require('chai').expect;

const page = require('../page/mock_api_page.js');
const data = require('../data/mock_api_data.json');

const testCase = {
 "positive" : {
    "getID" : "As a User, I want to be able to get 201"
 },


}

describe(`mock-api`, () => {

 it(`@getID ${testCase.positive.getID}`, async() => {
  const response = await page.getId(data);
  assert(response.status).to.equal(200, response.body.message);
 })

})