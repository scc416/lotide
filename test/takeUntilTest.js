const chai = require("chai");
const assert = chai.assert;
const takeUntil = require("../takeUntil.js");

describe("#takeUntil", () => {
  it("return [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x < 0", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expectedOutput = [ 1, 2, 5, 7, 2 ];
    const result = takeUntil(input, callback);
    console.log(result);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [ "I've", "been", "to", "Hollywood" ] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] and x => x === ","`, () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === ",";
    const expectedOutput = [ "I've", "been", "to", "Hollywood" ];
    const result = takeUntil(input, callback);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] and x => x === ""`, () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === "";
    const expectedOutput = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(input, callback);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1] for [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x % 2 === 0", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x % 2 === 0;
    const expectedOutput = [1];
    const result = takeUntil(input, callback);
    console.log(result);
    assert.deepStrictEqual(result, expectedOutput);
  });

  it("return [1, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x > 3", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x > 3;
    const expectedOutput = [1, 2];
    const result = takeUntil(input, callback);
    console.log(result);
    assert.deepStrictEqual(result, expectedOutput);
  });

});