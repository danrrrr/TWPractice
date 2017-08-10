"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getPrime = require("../lib/test1.js");

describe("测试描述", () => {

    it("分解质因数", () =>{
        let result = getPrime(90);
        const expect_result = `90=2335`;
        
        expect(expect_result).to.equal(result);
    });
});