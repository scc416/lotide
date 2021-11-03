const findKeyByValue = (obj, val) => {
  for(const key in obj) {
    if(obj[key] === val) return key;
  }
}

module.exports = findKeyByValue;