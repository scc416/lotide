const countLetters = require('../countLetters.js');
const chai = require('chai');
const assert = chai.assert;

describe('#countLetters', () => {
  it(`return 1 for the value of "l" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.l, 1);
  });

  it(`return 2 for the value of "i" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.i, 2);
  });

  it(`return 1 for the value of "g" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.g, 1);
  });

  it(`return 4 for the value of "h" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.h, 4);
  });

  it(`return 2 for the value of "t" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.t, 2);
  });

  it(`return 2 for the value of "o" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.o, 2);
  });

  it(`return 2 for the value of "u" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.u, 2);
  });

  it(`return 2 for the value of "s" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.s, 2);
  });

  it(`return 3 for the value of "e" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.e, 3);
  });

  it(`return 1 for the value of "n" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.n, 1);
  });

  it(`return undefined for the value of "a" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.a, undefined);
  });

  it(`return undefined for the value of "b" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.b, undefined);
  });

  it(`return undefined for the value of "c" from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    assert.equal(result.c, undefined);
  });

  it(`return undefined for the value of " " from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    const space = " ";
    assert.equal(result[space], undefined);
  });

  it(`return 10 for the key's length of result from "lighthouse in the house"`, () => {
    const input = "lighthouse in the house";
    const result = countLetters(input);
    const resultKey = Object.keys(result);
    assert.equal(resultKey.length, 10);
  });
});
