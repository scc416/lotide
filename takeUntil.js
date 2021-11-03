const takeUntil = function(array, callback) {
  for (const i in array) {
    if(callback(array[i])) return array.slice(0, i);
  }
  return array;
}

module.exports = takeUntil;