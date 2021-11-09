const eqObjects = require('./eqObjects.js');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  const areSameObject = eqObjects(actual, expected);
  const eqMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are equal.`;
  const diffMessage = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} are NOT equal.`;
  if (areSameObject) return console.log(eqMessage);
  if (!areSameObject) return console.log(diffMessage);
};

module.exports = assertObjectsEqual;