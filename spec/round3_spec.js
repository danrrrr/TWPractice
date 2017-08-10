"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var findSingle = require("../lib/round3.js");

describe("测试描述", () => {

    it("find single number", () =>{
        const array = [2,2,1,4,1,5,4];
        let result = findSingle(array);
        const expect_result = 5;
        
        expect(expect_result).to.equal(result);
    });
});