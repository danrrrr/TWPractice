"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getArr = require("../lib/823.js");

describe("给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。", () => {

    it("给定 [1,2,[1,2]]，返回 [1,2,1,2]。", () =>{
        let arr = [1,2,[1,2]];
        let result = getArr(arr);
        let expect_result = [1,2,1,2];
        
        expect(expect_result.join('')).to.equal(result.join(''));
    });
    it("给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。", () =>{
        let arr = [1,2,[1,2],[3,4]];
        let result = getArr(arr);
        let expect_result = [1,2,1,2,3,4];
        
        expect(expect_result.join('')).to.equal(result.join(''));
    });
    it("给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。", () =>{
        let arr = [4,[3,[2,[1]]]];
        let result = getArr(arr);
        let expect_result = [4,3,2,1];
        
        expect(expect_result.join('')).to.equal(result.join(''));
    });
});