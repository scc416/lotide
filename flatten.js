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

module.exports = flatten;