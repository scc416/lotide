const middle = require('../middle.js');
const chai = require('chai');
const assert = chai.assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const input = [1];
    const expectedOutput = [];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });

  it("returns [] for [1,2]", () => {
    const input = [1,2];
    const expectedOutput = [];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });

  it("returns [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    const result = middle(input);
    assert.deepEqual(result, expectedOutput);
  });
});