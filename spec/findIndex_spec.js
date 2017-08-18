"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var findIndex = require("../lib/findIndex.js");

describe("在数组 arr 中，查找值与 item 相等的元素出现的所有位置", () => {

    it("例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：[0, 3]", () =>{
        let arr = [1,3,7,1,4];
        let item = 1;
        let result = findIndex(arr, item);
        let expect_result = `0,3`;
        
        expect(expect_result).to.equal(result);
    });
});