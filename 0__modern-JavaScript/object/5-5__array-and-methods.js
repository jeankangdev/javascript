// array and methods
// https://ko.javascript.info/array-methods

// array methods
array.push(item);
array.pop();
array.shift();
array.unshift(item);

// how to delete an element of an array

// 1. array is also an obj, so we can use 'delete' (to delete the property of an obj / the element of an array)
let array = ["I", "go", "home"];

delete array[1]; // the length of the array still would be the same
console.log(array[1]);        // undefined
console.log(array.length);     // 3

// 2. splice: add, change, delete element of array
array.splice(index[, deleteCount, elem1, ...array, elemN]);

// delete
let array = ["I", "study", "JavaScript"];
array.splice(1, 1);
console.log(array);   // ["I", "JavaScript"]

// change
let array = ["I", "study", "JavaScript", "right", "now"];
array.splice(0, 3, "Let's", "dance");
console.log(array);   // ["Let's", "dance", "right", now"]

// array.splice() returns the removed array
let array = ["I", "study", "JavaScript", "right", "now"];
let removed = array.splice(0, 2);
console.log(array);   // ["I", "study"]

// add: set deleteCount to 0
let array = ["I", "study", "JavaScript"];
array.splice(2, 0, "complex", "language");
console.log(array);   // ["I", "study", "complex", "language", "JavaScript"] (added elements comes first)

array.splice(-1, 0, 3, 4);
console.log(array);   // ["I", "study", "complex", "language", 3, 4, "JavaScript"]

// array.slice([start], [end]): returns subarray or copy the array

let array = ["t", "e", "s", "t"];
console.log( array.slice(1, 3) ); // e, s (slice from 0 til before 3)
console.log( array.slice(-2) );   // s, t (slice from -2 til the end)

// array.slice(): make a copy of the array
console.log( array.slice() );     // ["t", "e", "s", "t"]

// array.concat: make a new array or add elements to the array
array.concat(arg1, arg2...);

let array = [1, 2];
console.log( array.concat([3, 4]) );          // 1,2,3,4
console.log( array.concat([3, 4], [5, 6]) );  // 1,2,3,4,5,6
console.log( array.concat([3, 4], 5, 6));     // 1,2,3,4,5,6

// if the obj that has the special property, [Symbol.isConcatSpreadable]
// array.concat() method treats the obj as an array
let array = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  length: 2
};

console.log( array.concat(arrayLike) ); // 1,2,[object Object]

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,  // the obj has the special property, [Symbol.isConcatSpreadable]: true
  length: 2
};

console.log( array.concat(arrayLike) ); // 1,2,something,else (the elements were added instead of the whole obj)

// array.forEach
array.forEach(function(item, index, array) {
  // can run the function for each element of the array
});

["A", "B", "C"].forEach(alert);
["A", "B", "C"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

// array.indexOf(item, from)
// array.lastIndexOf(item, from)
// array.includes(item, from)
let array = [1, 0, false];
console.log( array.indexOf(0) );      // 1
console.log( array.includes(false) ); // true

// find an obj from an array of objs
array.find(function(item, index, array) {
  // find something in the array and return the found item
});

let users = [
  {id: 1, name: "yuna"},
  {id: 2, name: "moon"},
  {id: 3, name: "star"}
];

let user = users.find(item => item.id === 1);
console.log(user.name);   // "yuna"

// find many items in the array
array.filter(function(item, index, array) {
  // returns empty array if nothing found
});

let users = users.filter(item => item.id < 3);
console.log(users.length);  // 2

// transform an array
array.map(function(Item, index, array) {
  // returns the new value instead of item
});

let lengths = ["kiwi", "peach", "banana"].map(item => item.length);
console.log(lengths);   // 4,5,6

// array.sort();
array.sort( (a, b) => a - b );  // ascending order

// array.reverse();

// array.split(delim);
let names = 'yuna, fatima, salma';

let array = names.split(', ');

for (let name of array) {
  console.log(name);      // yuna // fatima // salma
}

// array.join(glue);
let array = ['yuna', 'fatima', 'salma'];
let str = array.join(';');
console.log(str);   // yuna;fatima;salma

// array.isArray(value);
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// thisArg: when func is (the property) in thisArg
array.find(func, thisArg);
array.filter(func, thisArg);
array.map(func, thisArg);

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(person) {
    return person.age >= this.minAge && person.age < this.maxAge;
  }
};

let people = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = people.filter(army.canJoin, army); // army = thisArg (army.canJoin property is in the 'army')
let soldiers = people.filter(person => army.canJoin(person)); // works the same with the line above

// Q. write the function camelize that makes this possible
// camelize("background-color") == 'backgroundColor';

function camelize(str) {
	return str
	.split('-')
	.map(
	(word, index) => index == 0? word: word[0].toUpperCase() + word.slice(1)
	)
	.join('');
}

camelize("background-color"); // 'backgroundColor'

// Q. write the function filterRange that gets an array arr, looks for elements with values higher or equal to a and return a result as an array
// the function should not modify the array (it should return the new array)

// A.
function filterRange(arr, a, b) {
	return arr.filter((item) => item >= a && item <= b)
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered );  // 3,1
console.log( arr );       // 5,3,8,1

// Q. write the code that sorts the array in decreasing order
let arr = [5, 2, 1, -10, 8];

// A.
arr.sort((a, b) => b - a);
console.log(arr);

// Q. We have an array of strings arr, and we'd like to have a sorted copy of it, but keep arr unmodified
// create a function copySorted(arr) that returns such a copy

let arr = ["HTML", "JavaScript", "CSS"];

// A. 
function copySorted(arr) {
	return arr.slice().sort();
}

let sorted = copySorted(arr);
console.log( sorted );
console.log( arr );

// Q. create a constructor function Calculator that creates "extendable" calculator objects
// part1. implement the method calculate(str) that takes a string like "1 + 2" and returns the result
// Should understand plus + and minus -

// Q.
let calc = new Calculator;
console.log( calc.calculate("3 + 7") );  // 10

// A.
function Calculator() {
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	};

	this.calculate = function(str) {

		let split = str.split(' '),
		a = +split[0],
		op = split[1],
		b = +split[2];

		if (!this.method[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}
		return this.method[op](a, b);
	};
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") );  // 10

// part2. add the method addMethod(name, func) that teaches the calculator a new operation
// it takes the operator name and the two-argument function func(a,b) that implements it

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

// A.
function Calculator() {

  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }
  
  this.calculate = function(str) {
    let split = str.split('');
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.method[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc);

// Q. you have an array of user objects, each one has user.name
// write the code that converts it into an array of names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */
console.log( names ); // John, Pete, Mary

// A. 
let names = users.map(user => user.name);
console.log( names ); // John, Pete, Mary

// Q. you have an array of user objects, each one has name, surname, and id
// write the code to create another array from it, of objects with id and fullName,
// where fullName is generated from name and surname

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// A. additional brackets () are must in the arrow functions
// there are 2 arrow functions
// 1. without body ( value => expr )
// 2. with body    ( value => {...})
// JavaScript treats { as the start of function body, not the start of the object
// so we need to wrap {} in the "normal" brackets ()
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped);

// Q. write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// A.
function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}

console.log(arr);

// Q. shuffle an array
let arr = [1, 2, 3];
shuffle(arr); 
// arr = [3, 2, 1]
// arr = [1, 3, 2]...randomly

// A-1. my answer
function shuffle(array) {
	let newArray = [];

	for (let i = 0; i < array.length; i++) {
		let randomIndex = randomIndexGenerator(0, array.length - 1);

		while(newArray[randomIndex] !== undefined) {
			randomIndex = randomIndexGenerator(0, array.length - 1);			
		}
		newArray[randomIndex] = array[i];
	}
	array.splice(0, array.length, newArray[0], newArray[1], newArray[2]);
}

function randomIndexGenerator(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

// A-2. short version
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// A-3. long but more accurate version
function shuffle(array) {
  for (let i = array.length; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 100; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

// Q. write the function getAverageAge(users) that gets an array of objects with property age and returns the average age

// A-1. my answer
function getAverageAge(users) {
	let sumAge = 0;
	users.map(user => {
		sumAge += user.age;
	});

	return sumAge / users.length;
}

// A-2. use reduce
// arr.reduce( function(accumulator, item, index, array) {}, [initial] );
// arr.reduce( (sum, current) => sum + current, 0 );  // always specify the initial value
// arr.reduce( (sum, current) => sum + current );     // takes the first elem as the initial and iterates from the 2nd elem (can't omit the initial for an empty array)

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// Q. filter unique array members
// create a function unique(arr) that should return an array with unique items or arr

function unique(arr) {
  /* your code */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// A 
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(arr)) {
      result.push(str);
    }
  }
  
  return result;
}

// Q. create keyed object from array
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// A.
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[user.id] = value;
    return obj;
  }, {})
}