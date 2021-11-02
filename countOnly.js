// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item in itemsToCount) {
    if(itemsToCount[item]) {
      let counter = 0;
      for(const str of allItems) {
        if (str === item) counter ++;
      }
      if (counter > 0) results[item] = counter;
    }
  }
  return results;
}

module.exports = countOnly;