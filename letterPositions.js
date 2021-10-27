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
  strInLowerCase = sentence.toLowerCase();
  for(let i in strInLowerCase) {
    let prop = strInLowerCase[i];
    intI = parseInt(i);
    if(prop !== " ") {
      results.hasOwnProperty(prop) 
      ? results[prop].push(intI)
      : results[prop] = [intI] ;
    }
  }
  return results;
};

const result3 = letterPositions("hello");
assertArraysEqual(result3.h, [0]);
assertArraysEqual(result3.e, [1]);
assertArraysEqual(result3.l, [2, 3]);
assertArraysEqual(result3.o, [4]);

const result4 = letterPositions("Lighthouse in the house");
assertArraysEqual(result4.l, [0]);
assertArraysEqual(result4.i, [1, 11]);
assertArraysEqual(result4.g, [2]);
assertArraysEqual(result4.h, [3, 5, 15, 18]);
assertArraysEqual(result4.t, [4, 14]);
assertArraysEqual(result4.o, [6, 19]);
assertArraysEqual(result4.u, [7, 20]);
assertArraysEqual(result4.s, [8, 21]);
assertArraysEqual(result4.e, [9, 16, 22]);
assertArraysEqual(result4.n, [12]);