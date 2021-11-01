const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), 0);
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([5]), 6);
assertEqual(head(["Labs"]), "Labs");