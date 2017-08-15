"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var narcissisticNumber = require("../lib/narcissisticNumber.js");

describe("找出所有水仙花数", () => {

    it("1000以内的水仙花数有：153 370 371 407 ", () =>{
        let result = narcissisticNumber();
        const expect_result = `水仙花数有：153 370 371 407 `;
        
        expect(expect_result).to.equal(result);
    });
});