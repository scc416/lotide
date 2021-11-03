// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  const trueItemsToCount = [];
  for (const item in itemsToCount) {
    const itemHasToBeCount = itemsToCount[item] === true;
    if (itemHasToBeCount) trueItemsToCount.push(item);
  }
  for (const item of allItems) {
    const itemHasToBeCount = trueItemsToCount.indexOf(item) > -1;
    if (itemHasToBeCount) {
      const itemIsDefinedAsKey = item in results;
      if (itemIsDefinedAsKey) results[item]++;
      if (!itemIsDefinedAsKey) results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;