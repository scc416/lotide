const chai = require("chai");
const assert = chai.assert;
const findKeyByValue = require("../findKeyByValue.js");

describe("#findKeyByValue", () => {
  it(`return "drama" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" } and "The Wire"`, () => {
    const inputObj = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama":  "The Wire"
    };
    const inputStr = "The Wire";
    const expectedOutput = "drama";
    const result = findKeyByValue(inputObj, inputStr);
    assert.strictEqual(result, expectedOutput);
  });
  
  it(`return undefined for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" } and "That '70s Show"`, () => {
    const inputObj = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama":  "The Wire"
    };
    const inputStr = "That '70s Show";
    const expectedOutput = undefined;
    const result = findKeyByValue(inputObj, inputStr);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return undefined for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" } and "Random"`, () => {
    const inputObj = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama":  "The Wire"
    };
    const inputStr = "Random";
    const expectedOutput = undefined;
    const result = findKeyByValue(inputObj, inputStr);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return "sci_fi" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" } and "The Expanse"`, () => {
    const inputObj = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama":  "The Wire"
    };
    const inputStr = "The Expanse";
    const expectedOutput = "sci_fi";
    const result = findKeyByValue(inputObj, inputStr);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return "comedy" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" } and "Brooklyn Nine-Nine"`, () => {
    const inputObj = {
      "sci_fi": "The Expanse",
      "comedy": "Brooklyn Nine-Nine",
      "drama":  "The Wire"
    };
    const inputStr = "Brooklyn Nine-Nine";
    const expectedOutput = "comedy";
    const result = findKeyByValue(inputObj, inputStr);
    assert.strictEqual(result, expectedOutput);
  });
});