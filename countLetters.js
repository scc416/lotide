const countLetters = (str) => {
  const numOfLetter = {};
  const strInLowerCase = str.toLowerCase();
  for (const char of strInLowerCase) {
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