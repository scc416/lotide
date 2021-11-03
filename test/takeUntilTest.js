const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data2, x => x === '');
const results4 = takeUntil(data1, x => x % 2 === 0);
const results5 = takeUntil(data1, x => x > 3);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
assertArraysEqual(results4, [1]);
assertArraysEqual(results5, [1, 2]);