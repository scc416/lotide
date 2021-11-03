
const middle = function(array) {
  const length = array.length;
  if (length <= 2 ) return [];
  if (length % 2 === 0 ) {
    const index = length / 2;
    const middleLeft = array[index - 1];
    const middleRight = array[index];
    return [middleLeft, middleRight];
  } 
  if (length % 2 === 1 ) {
    const index = Math.floor(length / 2);
    const middle = array[index];
    return [ middle ];
  }
}

module.exports = middle;