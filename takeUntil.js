const takeUntil = function(array, callback) {
  for (const i in array) {
    if(callback(array[i])) return array.slice(0, i);
  }
  return array;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data2, x => x === '');
const results4 = takeUntil(data1, x => x % 2 === 0);
const results5 = takeUntil(data1, x => x > 3);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
assertArraysEqual(results4, [1]);
assertArraysEqual(results5, [1, 2]);