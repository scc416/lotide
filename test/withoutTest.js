const chai = require("chai");
const assert = chai.assert;
const without = require("../without.js");

describe("#without", () => {
  it("return [2, 3] for [1, 2, 3] and [1]", () => {
    const source = [1, 2, 3];
    const itemsToRemove = [1];
    const expectedOutput = [2, 3];
    const result = without(source, itemsToRemove);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return ["1", "2"] for ["1", "2", "3"] and [1, 2, "3"]`, () => {
    const source = ["1", "2", "3"];
    const itemsToRemove = [1, 2, "3"];
    const expectedOutput = ["1", "2"];
    const result = without(source, itemsToRemove);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return ["hello", "world", "lighthouse"] for ["hello", "world", "lighthouse"] and ["lighthouse"]`, () => {
    const source = ["hello", "world", "lighthouse"];
    const itemsToRemove = ["lighthouse"];
    const expectedOutput = ["hello", "world"];
    const result = without(source, itemsToRemove);
    assert.deepStrictEqual(result, expectedOutput);
  });
});