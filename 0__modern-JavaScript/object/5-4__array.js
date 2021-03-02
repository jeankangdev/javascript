// array
// https://ko.javascript.info/array

'use strict';

// array is a special type of obj, it has an order unlike obj
// obj (includes array) is copied by reference

// how to declare an array?
let array = [item1, item2...];
let array = new Array(item1, item2...); // rarely used

// wrong way to declare an array
let array = new Array(6); // this creates an empty array that has length of 6 (because array.length is just (last index + 1) of an array..not the actual number of the index)
array.length = 0;         // this empties the array

// .push() / .pop() are faster than .shift() / .unshift()

// how to loop array
// 1. for (let i = 0; i < array.length; i++)
// 2. for (let item of arr): no index info
// 3. for (let i in arr): never use it for array!

// unlike obj, 'array' doesn't have Symbol.toPrimitive(for every hint) or valueOf(for hint: default or hint: number) methods
// so 'array' converts itself to str in the example below
console.log( [] + 1 );      // "1"
console.log( [1] + 1);      // "11"
console.log( [1,2] + 1);   // "1,21"

// str + ? => str + str
console.log( "" + 1 );      // "1"
console.log( "1" + 1 );     // "11"
console.log( "1,2" + 1 );  // "1,21"

// obj has [Symbol.toPrimitive](hint) function or toString, valueOf methods by default (to convert an obj to primitive type)
const obj = {

	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return 10;
		} else if (hint === 'string') {
			return "yuna";
		} else {
			return null;
		}
	}
}

console.log(obj);	  // obj
console.log(+obj);	// 10
alert(obj);			    // "yuna"
console.log(obj + 10);	//hint: default // null + 10 = 10

const obj = {
  name: "yuna",
  age: 16,

  // when hint is str
  toString() {
    return this.name;
  },

  // when hint is number / default
  valueOf() {
    return this.age;
  }
}

console.log(obj);     // obj
console.log(+obj);    // 16
alert(obj);           // "yuna"
console.log(obj + 10);// 26

// Q. create an array which has "Jazz", "Blues" and change the array as shown below
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

// A
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

let centerIndex = Math.round((styles.length / 2) - 1);
styles[centerIndex] = "Classics";

console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

// Q. expect the result of the code below

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();

// A. 
arr = ["a", "b", function() { alert( this ); }];
arr[2]() => function() { alert( this ); }];
this => arr
alert => the obj's hint: str => array doesn't have Symbol.toPrimitive or valueOf() method for default/number type => the array is converted to str
// the alert window prints str as shown below
a,b,function() {
  alert( this );
}

// Q. write the function sumInput() that:
// asks the user for values using prompt and stores the values in the array
// finishes asking when the user enters a non-numeric value, an empty string, or presses "Cancel"
// calculates and returns the sum of array items
// P.S. A zero(0) is a valid number, please don't stop the input on zero

// A.
function sumInput() {
  let array = [];
  let answer;
  let sum = 0;

  while (true) {
    answer = prompt("please input a number");
    if (!isFinite(answer) || answer === '' || answer === null) {
      break;
    }
    array.push(answer);
  }
  for (let item of array) {
    sum += +item;
  }
  return sum;
}

alert(sumInput());

// Q. write the function getMaxSubSum(arr) that finds the contiguous subarray of arr with the maximal sum of items
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0