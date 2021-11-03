const chai = require("chai");
const assert = chai.assert;
const flatten = require("../flatten.js");

describe("#flatten", () => {
  it("return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    const result = flatten(input);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1, 2, 3, 4, 6, 5, 6] for [1, 2, [3, 4, 6], 5, [6]]", () => {
    const input = [1, 2, [3, 4, 6], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 6, 5, 6];
    const result = flatten(input);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1, 2, 3, 4, 6, 5, 6] for [1, [[2, [3, 4, 6]], 5], [6]]", () => {
    const input = [1, [[2, [3, 4, 6]], 5], [6]];
    const expectedOutput = [1, 2, 3, 4, 6, 5, 6];
    const result = flatten(input);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1, 2, 3, 4, 5, 6, 7] for [1, 2, [3, 4], [5, 6, 7]]", () => {
    const input = [1, 2, [3, 4], [5, 6, 7]];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    const result = flatten(input);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1, 2, 3, 4] for [1, 2, [3, 4]]", () => {
    const input = [1, 2, [3, 4]];
    const expectedOutput = [1, 2, 3, 4];
    const result = flatten(input);
    assert.deepStrictEqual(result, expectedOutput);
  });

});