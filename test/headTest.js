const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head(["Labs"]), "Labs");