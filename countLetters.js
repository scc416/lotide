const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let numOfLetter = {};
  // str = str.toLowerCase();
  for(let char of str.toLowerCase()) {
    if (char !== " ") {
      numOfLetter.hasOwnProperty(char) 
      ? numOfLetter[char] ++ 
      : numOfLetter[char] = 1 ;
        // if(numOfLetter.hasOwnProperty(char)) {
        //   numOfLetter[char] ++;
        // } else {
        //   numOfLetter[char] = 1;
        // }
    }
  }
  return numOfLetter;
}

let result2 = countLetters("lighthouse in the house");
assertEqual(result2.l, 1);
assertEqual(result2.i, 2);
assertEqual(result2.g, 1);
assertEqual(result2.h, 4);
assertEqual(result2.t, 2);
assertEqual(result2.o, 2);
assertEqual(result2.u, 2);
assertEqual(result2.s, 2);
assertEqual(result2.e, 3);
assertEqual(result2.n, 1);
assertEqual(result2.a, undefined);
assertEqual(result2.b, undefined);
assertEqual(result2.c, undefined);
assertEqual(result2[" "], undefined);

module.exports = countLetters;