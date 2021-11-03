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

  it(`return [1, 11] for value of "i" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [1, 11];
    const result = letterPositions(input).i;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [2] for value of "g" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [2];
    const result = letterPositions(input).g;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [3, 5, 15, 18] for value of "h" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [3, 5, 15, 18];
    const result = letterPositions(input).h;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [4, 14] for value of "t" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [4, 14];
    const result = letterPositions(input).t;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [6, 19] for value of "o" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [6, 19];
    const result = letterPositions(input).o;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [7, 20] for value of "u" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [7, 20];
    const result = letterPositions(input).u;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [8, 21] for value of "s" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [8, 21];
    const result = letterPositions(input).s;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [9, 16, 22] for value of "e" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [9, 16, 22];
    const result = letterPositions(input).e;
    assert.deepStrictEqual(result, expectedOutput);
  });

  it(`return [12] for value of "s" from input "Lighthouse in the house"`, () => {
    const input = "Lighthouse in the house";
    const expectedOutput = [12];
    const result = letterPositions(input).n;
    assert.deepStrictEqual(result, expectedOutput);
  });
});