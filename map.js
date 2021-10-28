const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = (arr1, arr2) => {
  // compare length of the arrays
  if (arr1.length !== arr2.length) return false;
  for (let i in arr1) {
    // compare each item in the array
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] and [${arr2}] are equal.`);
  } 
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] and [${arr2}] are NOT equal.`);
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, (word) => word + " ");
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, 
  ["ground ", "control ", "to ", "major ", "tom "]);