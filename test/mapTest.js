const chai = require("chai");
const assert = chai.assert;
const map = require("../map.js");

describe("#map", () => {
  it(`return ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"] and (word) => word[0]`, () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];
    const expectedOutput = ["g", "c", "t", "m", "t"];
    const result = map(input, callback);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [6, 7, 2, 5, 3] for ["ground", "control", "to", "major", "tom"] and (word) => word.length`, () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = word => word.length;
    const expectedOutput = [6, 7, 2, 5, 3];
    const result = map(input, callback);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return ["ground ", "control ", "to ", "major ", "tom "] for ["ground", "control", "to", "major", "tom"] and (word) => word + " ")`, () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = word => word + " ";
    const expectedOutput = ["ground ", "control ", "to ", "major ", "tom "];
    const result = map(input, callback);
    assert.deepStrictEqual(result, expectedOutput);
  });

});
