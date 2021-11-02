const eqObjects = require("../eqObjects.js");
const chai = require('chai');
const assert = chai.assert;

describe("#eqObjects", () => {
  it(`return true for { a: "1", b: "2" } and { b: "2", a: "1" }`, () => {
    const input1 = { a: "1", b: "2" };
    const input2 = { b: "2", a: "1" };
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }`, () => {
    const input1 = { a: "1", b: "2" };
    const input2 = { a: "1", b: "2", c: "3" };
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }`, () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { d: ["2", 3], c: "1" };
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return false for { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }`, () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { c: "1", d: ["2", 3, 4] };
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    const input1 = { a: { z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });
  
  it(`return false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: 1, b: 2 };
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return true for { a: { y: 0, z: 1 }, b: 2 } and { a: { y: 0, z: 1 }, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: { y: 0, z: 1 }, b: 2 };
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return true for { a: { y: 0, z: {a: 1, b: 2} }, b: 2 } and { a: { y: 0, z: {a: 1, b: 2} }, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: {a: 1, b: 2} }, b: 2 };
    const input2 = { a: { y: 0, z: {a: 1, b: 2} }, b: 2 };
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return false for { a: { y: 0, z: {a: 1, b: 2} }, b: 2 }, and { a: { y: 0, z: {a: 3, b: 2} }, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: {a: 1, b: 2} }, b: 2 };
    const input2 = { a: { y: 0, z: {a: 3, b: 2} }, b: 2 };
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });
  
  it(`return true for { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, and { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }`, () => {
    const input1 = { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }};
    const input2 = { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }};
    const expectedOutput = true;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

  it(`return true for { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, and { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: ".", c: "-"} }, b: 2 }}`, () => {
    const input1 = { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }};
    const input2 = { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: ".", c: "-"} }, b: 2 }};
    const expectedOutput = false;
    const result = eqObjects(input1, input2);
    assert.strictEqual(result, expectedOutput);
  });

});
