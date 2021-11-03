const countOnly = require('../countOnly.js');
const chai = require('chai');
const assert = chai.assert;

const allItems = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const itemsToCount = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
};

describe("#countOnly", () => {
  it(`return 1 for the value of "Jason" with input [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ] and 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    const input1 = allItems;
    const input2 = itemsToCount;
    const result = 1;
    const expectedResult = countOnly(input1, input2).Jason;
    assert.strictEqual(expectedResult, result);
  });

  it(`return undefined for the value of "Karima" with input [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ] and 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    const input1 = allItems;
    const input2 = itemsToCount;
    const result = undefined;
    const expectedResult = countOnly(input1, input2).Karima;
    assert.strictEqual(expectedResult, result);
  });

  it(`return 1 for the value of "Fang" with input [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ] and 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    const input1 = allItems;
    const input2 = itemsToCount;
    const result = 2;
    const expectedResult = countOnly(input1, input2).Fang;
    assert.strictEqual(expectedResult, result);
  });

  it(`return 1 for the value of "Jason" with input [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ] and 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    const input1 = allItems;
    const input2 = itemsToCount;
    const result = undefined;
    const expectedResult = countOnly(input1, input2).Agouhanna;
    assert.strictEqual(expectedResult, result);
  });
});