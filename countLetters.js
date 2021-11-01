const countLetters = (str) => {
  let numOfLetter = {};
  // str = str.toLowerCase();
  for (const char of str.toLowerCase()) {
    const charIsSpace = char === " ";
    if (!charIsSpace) {
      const charHasDefinedAsKey = char in numOfLetter;
      charHasDefinedAsKey
        ? numOfLetter[char] ++
        : numOfLetter[char] = 1;
    }
  }
  return numOfLetter;
};

module.exports = countLetters;