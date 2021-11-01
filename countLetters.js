const countLetters = (str) => {
  let numOfLetter = {};
  // str = str.toLowerCase();
  for(const char of str.toLowerCase()) {
    if (char !== " ") {
      numOfLetter.hasOwnProperty(char) 
      ? numOfLetter[char] ++ 
      : numOfLetter[char] = 1 ;
    }
  }
  return numOfLetter;
}

module.exports = countLetters;