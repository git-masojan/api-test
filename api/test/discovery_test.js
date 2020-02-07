const assert = require('chai').expect;

const page = require('../../api/page/discovery_page.js');
const schema = require('../schema/discovery_schema.json');

const testCase = {
 "positive" : {
    "getListWeb" : "As a User, I want to be able to get Discovery list from website",
    "getListApps" : "As a User, I want to be able to get Discovery list from apps"
 },
 "negative" : {
    "invalidPlatform" : "As a User, I should got error 500 when I send request with invalid platform"
 }
}

const error = "abc"

describe(`Discovery List`, () => {

 it(`@get ${testCase.positive.getListWeb}`, async() => {
  const response = await page.getDiscovery("website");
  assert(response.status).to.equal(200, response.body.message);
 }),

 it(`@get ${testCase.positive.getListApps}`, async() => {
    const response = await page.getDiscovery("mobile");
    assert(response.status).to.equal(200);
   })

})

describe(`Discovery List unavailable`, async()=>{

    it(`@get ${testCase.negative.invalidPlatform}`, async() => {
        const response = await page.getDiscovery(error);
        assert(response.status).to.equal(500, response.body.Error);
       })
      
})