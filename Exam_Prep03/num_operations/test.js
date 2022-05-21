const numberOperations = require('./numOperations');
const { expect } = require('chai');

describe("numberOperations functionality", () => {
    describe("function powNumber", () => {
      it("returns the power of the given number", () => {
        expect(numberOperations.powNumber(1)).to.equal(1);
        expect(numberOperations.powNumber(2)).to.equal(4);
        expect(numberOperations.powNumber(10)).to.equal(100);
        expect(numberOperations.powNumber(-2)).to.equal(4);
        expect(numberOperations.powNumber(0)).to.equal(0);
      });
    });
   
     describe("function numberChecker", () => {
      it("throws an error If the input is not a number ", () => {
        expect(() => numberOperations.numberChecker()).to.throw("The input is not a number!");
        expect(() => numberOperations.numberChecker("a")).to.throw("The input is not a number!");
        expect(() => numberOperations.numberChecker("-")).to.throw("The input is not a number!");
        expect(() =>numberOperations.numberChecker('text')).to.throw("The input is not a number!");
        expect(() =>numberOperations.numberChecker(NaN)).to.throw("The input is not a number!");
    
    
        
       });
      it("checks if it is lower than 100", () => {
        expect(numberOperations.numberChecker(1)).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker(1, 2)).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker(-1)).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker([])).to.equal("The number is lower than 100!");
        expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
        expect(numberOperations.numberChecker(976)).to.equal("The number is greater or equal to 100!");

      });
    });
    describe("function sumArrays", () => {
      it("loops through the arrays", () => {
        expect(numberOperations.sumArrays([1, 2], [1, 2])).to.deep.equal([2, 4]);
        expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.deep.equal([2, 4, 6]);
        expect(numberOperations.sumArrays([0, 3, 6], [1, 2, 3])).to.deep.equal([1, 5, 9]);
        expect(numberOperations.sumArrays([0, 3, 6], [-1, -2, -3])).to.deep.equal([-1, 1, 3]);
        expect(numberOperations.sumArrays([], [-1, -2, -3])).to.deep.equal([-1, -2, -3]);
        expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
      });
    });
  });