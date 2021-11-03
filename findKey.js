const findKey = (obj, callback) => {
  for (const key in obj) {
    const val = obj[key];
    const valFound = callback(val);
    if (valFound) return key;
  }
};

module.exports = findKey;