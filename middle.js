
const middle = function(array) {
  const length = array.length;
  if (length <= 2 ) return [];
  if (length % 2 === 0 ) {
    let index = length / 2;
    let middleLeft = array[index - 1];
    let middleRight = array[index];
    return [middleLeft, middleRight];
  } 
  if (length % 2 === 1 ) {
    let index = Math.floor(length / 2);
    return [ array[index] ];
  }
}

module.exports = middle;