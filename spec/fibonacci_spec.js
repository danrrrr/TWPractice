"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const fibonacci = require("../lib/fibonacci.js");

describe("测试描述", () => {

    it("斐波拉切数列的第n个数", () =>{
        let result = fibonaccigit(10);
        const expect_result = 34;
        
        expect(expect_result).to.equal(result);
    });
});