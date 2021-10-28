const findKey = (obj, callback) => {
  for (const key in obj) {
    const val = obj[key];
    if(callback(val)) return key;
  }
}

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const result1 = findKey(obj, x => x.stars === 2); // => "noma"
const result2 = findKey(obj, x => x.stars === 1); // => "Blue Hill"
const result3 = findKey(obj, x => x.stars === 3); // => "Akaleri"
const result4 = findKey(obj, x => x.stars === 0); // => undefined

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1, "noma");
assertEqual(result2, "Blue Hill");
assertEqual(result3, "Akaleri");
assertEqual(result4, undefined);