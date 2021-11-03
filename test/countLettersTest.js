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
    const result = countLetters(input).o;
    const expectedResult = 2;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "u" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).u;
    const expectedResult = 2;
    assert.equal(result, expectedResult);
  });

  it(`return 2 for the value of "s" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).s;
    const expectedResult = 2;
    assert.equal(result, expectedResult);
  });

  it(`return 3 for the value of "e" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).e;
    const expectedResult = 3;
    assert.equal(result, expectedResult);
  });

  it(`return 1 for the value of "n" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).n;
    const expectedResult = 1;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "a" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).a;
    const expectedResult = undefined;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "b" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).b;
    const expectedResult = undefined;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of "c" with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input).c;
    const expectedResult = undefined;
    assert.equal(result, expectedResult);
  });

  it(`return undefined for the value of " " with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input)[" "];
    const expectedResult = undefined;
    assert.equal(result, expectedResult);
  });

  it(`return 10 for the key's length of result with input "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    const resultKey = Object.keys(result);
    const keyLength = resultKey.length;
    const expectedResult = 10;
    assert.equal(keyLength, expectedResult);
  });
});
