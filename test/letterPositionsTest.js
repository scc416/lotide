
const result3 = letterPositions("hello");
assertArraysEqual(result3.h, [0]);
assertArraysEqual(result3.e, [1]);
assertArraysEqual(result3.l, [2, 3]);
assertArraysEqual(result3.o, [4]);

const result4 = letterPositions("Lighthouse in the house");
assertArraysEqual(result4.l, [0]);
assertArraysEqual(result4.i, [1, 11]);
assertArraysEqual(result4.g, [2]);
assertArraysEqual(result4.h, [3, 5, 15, 18]);
assertArraysEqual(result4.t, [4, 14]);
assertArraysEqual(result4.o, [6, 19]);
assertArraysEqual(result4.u, [7, 20]);
assertArraysEqual(result4.s, [8, 21]);
assertArraysEqual(result4.e, [9, 16, 22]);
assertArraysEqual(result4.n, [12]);