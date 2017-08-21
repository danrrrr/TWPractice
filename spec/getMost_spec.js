"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var getMost = require("../lib/getMost.js");

describe("判断一个字符串中出现次数最多的字符，并统计次数", () => {

    it("str = ‘abcsbaddbizdbas’,输出：{b：4}", () =>{
        const str = 'abcsbaddbizdbas';
        let result = getMost(str);
        let expect_result = 'b,4';
        
        expect(expect_result).to.equal(result);
    });
    it("str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}", () =>{
        const str = 'aaaaabbdbdbb';
        let result = getMost(str);
        let expect_result = 'a,5,b,5';
        
        expect(expect_result).to.equal(result);
    });
});