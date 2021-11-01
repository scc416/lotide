const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  // compare length of the arrays
  if (arr1.length !== arr2.length) return false;
  for (let index in arr1) {
    // compare each item in the array
    const val1 = arr1[index];
    const val2 = arr2[index];
    const val1IsArray = Array.isArray(val1);
    if (val1IsArray) {
      const arrAreEqual = eqArrays(val1, val2);
      if (!arrAreEqual) return false;
    }
    if (!val1IsArray) {
      const valAreEqual = val1 === val2;
      if (!valAreEqual) return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should not PASS

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false); // => should not PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

assertEqual(eqArrays([[2, 3], [4, 5]], [[2, 3], [4, 5]]), true);
assertEqual(eqArrays([[[2, 3], [4]], [2, 3], [4]], [[[2, 3], [4]], [2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4, 5]], [[2, 1], [4, 5]]), false);
assertEqual(eqArrays([[[2, 3], [4]], [2, 3], [4]], [[[2, 3], [4]], [4, 3], [4]]), false);