"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getChain = require("../lib/round4.js");

describe("给出链表 1->2->3->3->4->5->3, 和 val = 3", () => {

    it("返回删除3之后的链表：1->2->4->5", () =>{
        const str = '1->2->3->3->4->5->3';
        const val = 3;
        let result = getChain(str, val);
        const expect_result = '1->2->4->5';
        
        expect(expect_result).to.equal(result);
    });
});