const eqArrays = (arr1, arr2) => {
  // compare length of the arrays
  const arrHaveSameLength = arr1.length === arr2.length;
  if (!arrHaveSameLength) return false;
  for (const index in arr1) {
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

module.exports = eqArrays;