// number type
// https://ko.javascript.info/number

'use strict';

// 1.

let hundred = 1e2;        // 100
console.log(hundred);

let minusHundred = 1e-2;  // 0.01
console.log(minusHundred);

// binary(2), octal(8), hexadecimal(16)
let binary = 0b11111111;      // 255
let octal = 0o377;            // 255
let hexa = 0xff;              // 255

// 2. .toString(base): convert from original to base and print it (with string type)

let num = 255;
console.log(num.toString(10));  // 255
console.log(num.toString(2));   // 11111111
console.log(num.toString(16));  // ff

