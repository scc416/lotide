
const flatten = (arr) => {
  let flattenArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenArr = [...flattenArr, ...item];
    } else {
      flattenArr.push(item);
    }
  }
  return flattenArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 6], 5, [6]]), [1, 2, 3, 4, 6, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], [5, 6, 7]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4, 5, 6]);