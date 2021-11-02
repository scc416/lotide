const countLetters = require('../countLetters.js');
const chai = require('chai');
const assert = chai.assert;

describe("#countLetters", () => {
  it(`return 1 for the value of "l" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "i" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).i;
    const expectedResult = 2;
    assert.equal(result, expectedResult);
  });

  it(`return 1 for the value of "g" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).g;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 4 for the value of "h" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).h;
    const expectedResult = 4;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "t" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).t;
    const expectedResult = 2;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "o" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.o, 2);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "u" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.u, 2);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "s" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.s, 2);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 3 for the value of "e" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.e, 3);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 1 for the value of "n" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.n, 1);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "a" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.a, undefined);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "b" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.b, undefined);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "c" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.c, undefined);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of " " with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    const space = " ";
    assert.equal(result[space], undefined);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return 10 for the key's length of result with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    const resultKey = Object.keys(result);
    assert.equal(resultKey.length, 10);
    const result = countLetters(input).l;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });
});
