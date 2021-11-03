const takeUntil = function(array, callback) {
  for (const i in array) {
    const item = array[i];
    const callbackIsTrue = callback(item);
    if (callbackIsTrue) return array.slice(0, i);
  }
  return array;
};

module.exports = takeUntil;