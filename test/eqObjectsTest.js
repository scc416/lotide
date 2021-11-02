
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2} }, b: 2 }, { a: { y: 0, z: {a: 1, b: 2} }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2} }, b: 2 }, { a: { y: 0, z: {a: 3, b: 2} }, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: "9", c: "-"} }, b: 2 }}, { a: { y: 0, z: {a: 1, b: 2, c: {a: "g", b: ".", c: "-"} }, b: 2 }}), false); // => true
