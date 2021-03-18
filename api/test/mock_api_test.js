
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

 it(`@getID ${testCase.positive.postID}`, async() => {
   const response = await page.postId(data);
   assert(response.status).to.equal(201);
   
 })

})