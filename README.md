# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@siuc/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: take in two arrays and print out a message telling us if they match or not
* `assertEqual(value1, value2)`: compare the two values it takes in and print out a message telling us if they match or not
* `assertObjectsEqual(object1, object2)`: take in two objects and print out a message telling us if they match or not
* `countLetters(string)`: take in a sentence (as a string) and then return a count of each of the letters in that sentence (as an object)
* `countOnly(allItems, itemsToCount)`: take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match
* `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match
* `findKey(object, callback)`: takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then undefined is returned. 
* `findKeyByValue(object, vallue)`: takes in an object and a value. It scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(array)`: Given an array with other arrays inside, it can flatten it into a single-level array
* `head(array)`: retrieve the first element from the array
* `letterPositions(string)`: return all the indices (zero-based positions) in the string where each character is found (as an object with values of array)
* `map(array, callback)`: creates a new array with the results of a callback function on every element in the array
* `middle(array)`: take in an array and return the middle-most element(s) of the given array
* `tail(arr)`: returns the "tail" of an array: everything except for the first item (head) of the provided array
* `takeUntil(array, callback)`: return a "slice of the array with elements taken from the beginning." It keeps going until the callback/predicate returns a truthy value
* `without(source, itemsToRemove)`: take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array