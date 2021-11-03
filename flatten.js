const flatten = (arr) => {
  let flattenArr = [];
  for (const item of arr) {
    const itemIsArray = Array.isArray(item);
    if (itemIsArray) {
      const flattenItem = flatten(item);
      flattenArr = flattenArr.concat(flattenItem);
    } 
    if (!itemIsArray) flattenArr.push(item);
  }
  return flattenArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 6], 5, [6]]), [1, 2, 3, 4, 6, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], [5, 6, 7]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;