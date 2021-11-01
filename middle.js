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

const middle = function(array) {
  const length = array.length;
  if (length <= 2 ) return [];
  if (length % 2 === 0 ) {
    let index = length / 2;
    let middleLeft = array[index - 1];
    let middleRight = array[index];
    return [middleLeft, middleRight];
  } 
  if (length % 2 === 1 ) {
    let index = Math.floor(length / 2);
    return [ array[index] ];
  }
}

module.exports = middle;