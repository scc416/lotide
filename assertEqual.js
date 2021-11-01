const assertEqual = function(actual, expected) {
  const asExpected = actual === expected;
  const eqMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const diffMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (asExpected) return console.log(eqMessage);
  if (!asExpected) return console.log(diffMessage);
};

module.exports = assertEqual;