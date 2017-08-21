"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var delRepeat = require("../lib/deleteRepeat.js");

describe("数组去重", () => {

    it("例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]", () =>{
        let arr = ['s','a','s','b','a','1',1,'1'];
        let result = delRepeat(arr);
        let expect_result = ['s','a','b',1,'1'];
        expect(result).to.equal(expect_result.join(''));
    });
});