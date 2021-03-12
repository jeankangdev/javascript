'use strict';

const arrayLike = {0: "zero", 1: "one", length: 2};
const obj = {1:1, 2:2, 3:3}

// Array.from() => return an array 
console.log(Array.from(obj));         // []
console.log(Array.from("ABC"));       // ["A", "B", "C"]
console.log(Array.from(arrayLike));   // [zero, one]

// Array.of() => return 1 obj
console.log(Array.of());            // []
console.log(Array.of(obj));         // [{1: 1, 2: 2, 3: 3}]
console.log(Array.of("ABC"));       // ["ABC"]
console.log(Array.of(arrayLike));   // [{0: "zero", 1: "one", length: 2}]
