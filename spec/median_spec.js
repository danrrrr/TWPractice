"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getMedian = require("../lib/median.js");

describe("找出数组中位数", () => {

    it("数组有奇数个元素时如[2,3,1,5,4]，返回3", () =>{
        let arr = [2,3,1,5,4];
        let result = getMedian(arr);
        const expect_result = 3;
        
        expect(expect_result).to.equal(result);
    });
    it("数组有偶数个元素时如[2,3,1,5,6,4]，返回3.5", () =>{
        let arr = [2,3,1,5,6,4];
        let result = getMedian(arr);
        const expect_result = 3.5;
        
        expect(expect_result).to.equal(result);
    });
});