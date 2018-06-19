const assert = require('chai').assert
const app = require('../app')
const expect = require('chai').expect
const should = require('chai').should()

describe("App", function() {
  describe("secondLargest()", function() {
    var array = [10,90,15,2]
    it("argument length must be atleast 2",function() {
      expect(array).to.have.lengthOf.at.least(2);
    });
    it("should return a number",function() {
      var result = app.secondLargest(array);
      expect(result).to.be.a('number');
    })
    it("argument must be array of numbers only",function() {
      array.filter(e => typeof(e)==='number').should.eql(array);
    });
  })

  describe("calculateFrequency()", function() {
    var result = app.calculateFrequency("shali is running fast");
    it("should return a object",function() {
      assert.typeOf(result,'object');
    })
    it("should return non empty object",function() {
      assert.typeOf(result,'object');
      expect(result).that.is.not.empty;
    })
    it("should return object with keys as only lower case characters",function() {
      assert.typeOf(result,'object');
      expect(result).to.have.any.keys('a', 'b','q','w','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m')
    })
  })

  describe("flatten()", function() {
    it("should return a object",function() {
      var result = app.flatten([10,90,15,2]);
      assert.typeOf(result,'object');     
    })
    var result1 = app.flatten({"i": { "am": { "not": { "so": { "flat": true } } } } })
    it("result must be as expected",function() {
      expect(result1).to.have.property("i.am.not.so.flat")
    })
    it("result must be as expected",function() {
      var input = { "dates": [ { "day": 1 } ] };
      var result2 = app.flatten(input);
      expect(result2).to.have.property("dates.0.day")
    })
  })
})
