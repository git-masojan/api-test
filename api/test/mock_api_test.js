
const assert = require('chai').expect;
const chai = require('chai');

const page = require('../page/mock_api_page.js');
const data = require('../data/mock_api_data.json');

const testCase = {
 "positive" : {
    "postID" : "As a User, I want to be able to get 201"
    
 }
}

describe(`mock-api`, () => {
   console.log(data)
   console.log(page)
   console.log(assert)
   console.log(chai)
   console.log(JSON.stringify(JSON))

 it(`@getID ${testCase.positive.postID}`, async() => {
   const response = await page.postId(data);
   console.log(response);
   assert(response.status).to.equal(201);
   
 })

})