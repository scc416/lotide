const eqArrays = require("../eqArrays.js");
const chai = require("chai");
const assert = chai.assert;

describe("#eqArrays", () => {
  it("return true for [1, 2, 3] and [1, 2, 3]", () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2, 3];
    const expectedOutput = true;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return false for [1, 2, 3] and [1, 2]", () => {
    const input1 = [1, 2, 3];
    const input2 = [1, 2];
    const expectedOutput = false;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return false for [1, 3, 3] and [1, 2, 3]", () => {
    const input1 = [1, 3, 3];
    const input2 = [1, 2, 3];
    const expectedOutput = false;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })
  
  it("return true for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    const input1 = [[2, 3], [4]];
    const input2 = [[2, 3], [4]];
    const expectedOutput = true;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    const input1 = [[2, 3], [4]];
    const input2 = [[2, 3], 4];
    const expectedOutput = false;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return true for [[[2, 3], [4]], [2, 3], [4]] and [[[2, 3], [4]], [2, 3], [4]]", () => {
    const input1 = [[[2, 3], [4]], [2, 3], [4]];
    const input2 = [[[2, 3], [4]], [2, 3], [4]];
    const expectedOutput = true;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return false for [[2, 3], [4, 5]] and [[2, 1], [4, 5]]", () => {
    const input1 = [[2, 3], [4, 5]];
    const input2 = [[2, 1], [4, 5]];
    const expectedOutput = false;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })

  it("return false for [[[2, 3], [4]], [2, 3], [4]] and [[[2, 3], [4]], [4, 3], [4]]", () => {
    const input1 = [[[2, 3], [4]], [2, 3], [4]];
    const input2 = [[[2, 3], [4]], [4, 3], [4]];
    const expectedOutput = false;
    const result = eqArrays(input1, input2);
    assert.strictEqual(result, expectedOutput);
  })
});