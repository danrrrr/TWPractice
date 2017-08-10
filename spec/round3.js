"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var findSingle = require("../lib/round3.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("find single number", function(){
        let array = [2,2,1,4,1,5,4];
        var result = findSingle(array);
        var expect_result = 5;
        
        expect(expect_result).to.equal(result);
    });
});