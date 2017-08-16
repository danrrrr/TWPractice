"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getRepeat = require("../lib/getRepeat.js");

describe("找出数组 arr 中重复出现过的元素", () => {

    it("arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’", () =>{
        let arr = ['a','ab','ed','da','a','ed','b'];
        let result = getRepeat(arr);
        let expect_result = [ 'a', 'ed' ].toString();
        
        expect(expect_result).to.equal(result);
    });
});