const tail = (arr) => {
  const noTail = arr.length <= 1;
  if (noTail) return [];
  return arr.slice(1);
};

module.exports = tail;