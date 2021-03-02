// array
// https://ko.javascript.info/array

'use strict';

// array is a special type of obj, it has an order unlike obj

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

