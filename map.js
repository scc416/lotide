const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    const newItem = callback(item);
    results.push(newItem);
  }
  return results;
}

module.exports = map;