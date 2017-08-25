"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var findTarget = require("../lib/findTarget.js");

describe("将数组中所包含的某个元素找出，并放在数组后面", () => {

    it("给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].", () =>{
        let arr = [0, 1, 0, 3, 12];
        let target = 0;
        let result = findTarget(arr, target);
        let expect_result =  [1, 3, 12, 0, 0];
        
        expect(expect_result.join(',')).to.equal(result.join(','));
    });
});