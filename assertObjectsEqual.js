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
  let keys = Object.keys(object1);
  let length1 = keys.length;
  let length2 = Object.keys(object2).length;
  if (length1 !== length2) return false;
  
  for (let key of keys) {

    if (!object2.hasOwnProperty(key)) return false;

    let val1 = object1[key];
    let val2 = object2[key];

    if (Array.isArray(val1)) {
      if (!eqArrays(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal.`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are NOT equal.`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: [1, 3, 4] }, { b: 2, c: [1, 3, 4], a: '1' });