const chai = require("chai");
const assert = chai.assert;
const letterPositions = require("../letterPositions.js");

describe("#letterPositions", () => {
  it(`return [0] for value of "h" from input "hello"`, () => {
    const input = "hello";
    const expectedOutput = [0];
    const result = letterPositions(input).h;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [1] for value of "e" from input "hello"`, () => {
    const input = "hello";
    const expectedOutput = [1];
    const result = letterPositions(input).e;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [2, 3] for value of "l" from input "hello"`, () => {
    const input = "hello";
    const expectedOutput = [2, 3];
    const result = letterPositions(input).l;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [4] for value of "o" from input "hello"`, () => {
    const input = "hello";
    const expectedOutput = [4];
    const result = letterPositions(input).o;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [0] for value of "l" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [0];
    const result = letterPositions(input).l;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [1, 11] for value of "i" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [1, 11];
    const result = letterPositions(input).i;
    assert.deepStrictEqual(result, expectedOutput);
  });
});

// assertArraysEqual(result4.g, [2]);
// assertArraysEqual(result4.h, [3, 5, 15, 18]);
// assertArraysEqual(result4.t, [4, 14]);
// assertArraysEqual(result4.o, [6, 19]);
// assertArraysEqual(result4.u, [7, 20]);
// assertArraysEqual(result4.s, [8, 21]);
// assertArraysEqual(result4.e, [9, 16, 22]);
// assertArraysEqual(result4.n, [12]);