"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getArr = require("../lib/getArr.js");

describe("计算两个数组的交数组", () => {

    it("nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].", () =>{
        let arr1 = [1,2,2,1];
        let arr2= [2,2];
        let result = getArr(arr1, arr2);
        let expect_result = `2,2`;
        
        expect(expect_result).to.equal(result);
    });
});