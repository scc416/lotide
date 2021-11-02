const eqArrays = require("./eqArrays.js")

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  const length1 = keys.length;
  const length2 = Object.keys(object2).length;
  const haveSameNumberOfKeys = length1 === length2;
  if (!haveSameNumberOfKeys) return false;
  for (const key of keys) {
    const keyExistsInObject2 = key in object2;
    if (!keyExistsInObject2) return false;
    const val1 = object1[key];
    const val2 = object2[key];
    const val1IsArray = Array.isArray(val1);
    const val1IsObject = typeof val1 === "object";
    if (val1IsArray) {
      const arrAreEqual = eqArrays(val1, val2);
      if (!arrAreEqual) return false;
    } else if (val1IsObject) {
      const objAreEqual = eqObjects(val1, val2);
      if (!objAreEqual) return false;
    } else {
      const valAreEqual = val1 === val2;
      if (!valAreEqual) return false;
    }
  }
  return true;
};

module.exports = eqObjects;