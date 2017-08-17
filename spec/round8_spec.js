"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getPow = require("../lib/round8.js");

describe("为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组", () => {

    it("例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]", () =>{
        let arr = [5,3,7,1];
        let result = getPow(arr);
        let expect_result = `25,9,49,1`;
        
        expect(expect_result).to.equal(result);
    });
});