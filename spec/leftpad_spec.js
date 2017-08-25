"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var leftpad = require("../lib/leftpad.js");

describe("leftpad功能，就是字符串前面拼指定字符到固定长度", () => {

    it("leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’", () =>{
        let arr1 = [1,2,2,1];
        let arr2= [2,2];
        let result = leftpad('hello', 20, '1');
        let expect_result = `111111111111111hello`;
        
        expect(expect_result).to.equal(result);
    });
});