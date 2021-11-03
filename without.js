const without = (source, itemsToRemove) => {
  
  const ifKeep = (val) => {
    for (let item of itemsToRemove) {
      if (val === item) {
        return false;
      }
    }
    return true;
  }
  let arr = [];
  for(let item of source) {
    if (ifKeep(item)) {
      // arr = [...arr, item];
      arr.push(item);
    }
  }
  return arr;
}

module.exports = without;