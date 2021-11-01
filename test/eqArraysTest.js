const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should not PASS

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false); // => should not PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

assertEqual(eqArrays([[2, 3], [4, 5]], [[2, 3], [4, 5]]), true);
assertEqual(eqArrays([[[2, 3], [4]], [2, 3], [4]], [[[2, 3], [4]], [2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4, 5]], [[2, 1], [4, 5]]), false);
assertEqual(eqArrays([[[2, 3], [4]], [2, 3], [4]], [[[2, 3], [4]], [4, 3], [4]]), false);