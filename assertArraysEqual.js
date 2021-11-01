const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (arr1, arr2) => {
  const arraysAreEqual = eqArrays(arr1, arr2);
  if (arraysAreEqual) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] and [${arr2}] are equal.`);
  }
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] and [${arr2}] are NOT equal.`);
};

module.exports = assertArraysEqual;