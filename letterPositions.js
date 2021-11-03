const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const strInLowerCase = sentence.toLowerCase();
  for (const i in strInLowerCase) {
    const key = strInLowerCase[i];
    const iAsInt = parseInt(i);
    const keyIsSpace = key === " ";
    if (!keyIsSpace) {
      const resultsHasKey = key in results;
      resultsHasKey
        ? results[key].push(iAsInt)
        : results[key] = [iAsInt];
    }
  }
  return results;
};


module.exports = letterPositions;