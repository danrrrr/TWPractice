"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getCount = require("../lib/getCount.js");

describe("统计数组 arr 中值等于 item 的元素出现的次数", () => {

    it("arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2", () =>{
        let arr = [1, 3, 7, 1 ,4,];
        let item = 1;
        let result = getCount(arr, item);
        const expect_result = 2;
        
        expect(expect_result).to.equal(result);
    });
});