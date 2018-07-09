const assert = require('chai').assert
const app = require('../app')
const expect = require('chai').expect
const should = require('chai').should()

describe("App", () => {
  describe('secondLargest()', () => {
    it("should throw an error if array size is less than 2",() => {
      assert.throws(()=> {app.secondLargest([]);}, Error,`array size is less than 2`)
    });

    it("should throw an error if argument is not array",() => {
      assert.throws(()=> {app.secondLargest(4);}, Error,`must pass array as argument`)
    });

    it("should throw an error if array does not contain numbers",() => {
      assert.throws(()=> {app.secondLargest(['a']);}, Error,`array must contain only numbers`)
    });

    it("should throw an error if array contain any null",() => {
      assert.throws(()=> {app.secondLargest([3,6,null]);}, Error,`array contains some null`)
    });

    it("should return a number",() => {
      var result = app.secondLargest([3,6,7]);
      expect(result).to.be.a('number');
    })
  })

  describe("calculateFrequency()", () => {
    var result = app.calculateFrequency("shali is running fast");
    it("should return object with keys as only lower case characters", () => {
      assert.typeOf(result,'object');
      expect(result).to.have.any.keys('a', 'b','q','w','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m')
    })

    it("should return a object",() => {
      assert.typeOf(result,'object');
    })

    it("should throw an error if argument is not string",() => {
      assert.throws(()=> { app.calculateFrequency(4); }, Error, `input must be an string`)
    });

    it("should throw an error if argument is empty string",() => {
      assert.throws(()=> { app.calculateFrequency(" "); }, Error, `input is empty string`)
    });

    it("should return non empty object",() =>  {
      assert.typeOf(result,'object');
      expect(result).that.is.not.empty; 
    })
  })

  describe("flatten()", function() {
    it("should throw an error if input is not object",function() {
      assert.throws( () =>{ app.flatten(1);}, Error,`input must be an object`)
    })

    it("should throw an error if input is null object",function() {
      assert.throws(()=> { app.flatten({}); }, Error,`object is empty`)
    })

    it("should return a object",function() {
      var result = app.flatten([10,90,15,2]);
      assert.typeOf(result,'object');     
    })

    var result1 = app.flatten({"i": { "am": { "not": { "so": { "flat": true } } } } })
    it("should return result as expected",function() {
      expect(result1).to.have.property("i.am.not.so.flat")
    })

    it("should return result as expected",function() {
      var input = { "dates": [ { "day": 1 } ] };
      var result2 = app.flatten(input);
      expect(result2).to.have.property("dates.0.day")
    })
  })
})
