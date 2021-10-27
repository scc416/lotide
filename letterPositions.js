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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] and [${arr2}] are equal.`);
  } 
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] and [${arr2}] are NOT equal.`);
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  str = str.toLowerCase();
  for(let i in str) {
    
  }
  return results;
};

const result3 = letterPositions("hello");
assertArraysEqual(result2.h, [0]);
assertArraysEqual(result2.e, [1]);
assertArraysEqual(result2.l, [2, 3]);
assertArraysEqual(result2.o, 4);