const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  // compare length of the arrays
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    // compare each item in the array
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  const length1 = keys.length;
  const length2 = Object.keys(object2).length;
  if (length1 !== length2) return false;
  for (let key of keys) {
    const keyExistsInObject2 = key in object2;
    if (!keyExistsInObject2) return false;
    const val1 = object1[key];
    const val2 = object2[key];
    const val1IsArray = Array.isArray(val1);
    const val1IsObject = typeof val1 === "object";
    if (val1IsArray) {
      const arrAreEqual = eqArrays(val1, val2);
      if (!arrAreEqual) return false;
    } else if (val1IsObject) {
      const objAreEqual = eqObjects(val1, val2);
      if (!objAreEqual) return false;
    } else {
      const valAreEqual = val1 === val2;
      if (!valAreEqual) return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2} }, b: 2 }, { a: { y: 0, z: {a: 1, b: 2} }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2} }, b: 2 }, { a: { y: 0, z: {a: 3, b: 2} }, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: ".", c: "-"} }, b: 2 }}), false); // => true