
const assert = require('chai').expect;

const page = require('../page/mock_api_page.js');
const data = require('../data/mock_api_data.json');

const testCase = {
 "positive" : {
    "success" : "As a User, I want to be able to create resource"

 }

}


describe(`mock-api`, () => {

 it(`@success ${testCase.positive.success}`, async() => {
  const response = await page.postMockApi(data);
  assert(response.status).to.equal(201, console.log(response.body.message));
 })

})