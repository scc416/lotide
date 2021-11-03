const findKey = require("../findKey.js");
const chai = require("chai");
const assert = chai.assert;

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

describe("#findKey", () => {
  it(`return "noma" for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli":   { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } } and function x => x.stars === 2`, () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callbackFunction = x => x.stars === 2;
    const expectedoutput = "noma";
    const result = findKey(inputObj, callbackFunction);
    assert.strictEqual(result, expectedoutput);
  });

  it(`return "Blue Hill" for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli":   { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } } and function x => x.stars === 1`, () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callbackFunction = x => x.stars === 1;
    const expectedoutput = "Blue Hill";
    const result = findKey(inputObj, callbackFunction);
    assert.strictEqual(result, expectedoutput);
  });

  it(`return "Akaleri" for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli":   { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } } and function x => x.stars === 3`, () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callbackFunction = x => x.stars === 3;
    const expectedoutput = "Akaleri";
    const result = findKey(inputObj, callbackFunction);
    assert.strictEqual(result, expectedoutput);
  });

  it(`return undefined for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli":   { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } } and function x => x.stars === 0`, () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callbackFunction = x => x.stars === 0;
    const expectedoutput = undefined;
    const result = findKey(inputObj, callbackFunction);
    assert.strictEqual(result, expectedoutput);
  });

});