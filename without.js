const without = (source, itemsToRemove) => {
  const shouldItemBeKept = (val) => {
    for (const item of itemsToRemove) {
      const foundInItemsToRemove = val === item;
      if (foundInItemsToRemove) return false;
    }
    return true;
  }
  const arr = [];
  for(const item of source) {
    const shouldKeepItem = shouldItemBeKept(item);
    if (shouldKeepItem) arr.push(item);
  }
  return arr;
}

module.exports = without;