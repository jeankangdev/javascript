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
console.log(123456..toString(36)); // 2n9c
console.log((123456).toString(36));// 2n9c

// 3. rounding
Math.floor(3.1) // 3
Math.ceil(3.1)  // 4
Math.round(3.1) // 3
Math.trunc(3.1) // 3

// 4. .toFixed()
let num = 12.34;
console.log(num.toFixed(1));  // "12.4" (rounding => string)
console.log(num.toFixed(4));  // "12.3400" (0 is added => string)
console.log(+num.toFixed(4)); // 12.3400 (number)

// 5. loss of precision
let sum = 0.1 + 0.2;
console.log(sum.toFixed(20)); // 0.30000000000000000441

// solution
let solution = (0.1 * 10 + 0.2 * 10) / 10;  // 0.3 (not perfect)
console.log(+sum.toFixed(2));               // 0.3  (better way)

// 5. isNaN / isFinite
console.log( NaN === NaN )        // false (every NaN is unique)
console.log(Object.is(NaN, NaN)); // true

console.log(isNaN(NaN));          // true
console.log(isNaN("str"));        // true

console.log(isFinite("15"));      // true ("15" => 15 => if it's not NaN/Infinity/-Infinity, returns true)
console.log(isFinite("str"));     // false ("str" is NaN so it's not a finite number)
console.log(isFinite(Infinity));  // false

let num = +prompt("enter a number", '');
console.log(isFinite(num));

// 6. Object.is
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false

// 7. parseInt parseFloat
console.log( parseInt('100px') );     // 100
console.log( parseFloat('12.5em') );  // 12.5

console.log( parseInt('a123') );      // NaN (it doesn't start with number)

// 8. Math.random(): return a random number between 0 and 1

// 9. Math.max(a, b, c) / Math.min(a, b, c)
console.log( Math.max(1, 2, 3, 4, 5) ); // 5
console.log( Math.min(1, 2, 3, 4, 5) ); // 1

// 10. Math.pow(n, power)
console.log( Math.pow(2, 3) );          // 8

// 11. make a function readNumber that receives a number and return it
// if the user doesn't enter any number or cancel the prompt, it returns null

function readNumber() {
	let num;

	do {
		num = prompt("Enter a number", 0);
	} while ( !isFinite(num) );

  if (num === '' || num === null) {
    return null;
  }

	return +num;
}

readNumber();

// 12. evade equality checks when working with decimal fractions

// wrong
let i = 0;
while (i != 10) {   // this loop is infinite because i can't be exact 10 (because of the precision losses when adding fractions like 0.2)
  i += 0.2;
}

// solution
let i = 0;
while (i < 11) {    // use < instead of = when working with decimal fractions
  i += 0.2;
}

// 13. make a function that returns a random number from min to max using Math.random();
function random(min, max) {
  return min + Math.random() * (max - min);
}

// 14. 
function randomInteger(min, max) {
	return Math.trunc((min + Math.random() * (max - min)) + 1);
}

randomInteger(1, 4);

