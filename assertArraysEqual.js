const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (arr1, arr2) => {
  const arraysAreEqual = eqArrays(arr1, arr2);
  const eqMessage = `✅✅✅ Assertion Passed: [${arr1}] and [${arr2}] are equal.`;
  const diffMessage = `🛑🛑🛑 Assertion Failed: [${arr1}] and [${arr2}] are NOT equal.`;
  if (arraysAreEqual) return console.log(eqMessage);
  if (!arraysAreEqual) return console.log(diffMessage);
};

module.exports = assertArraysEqual;