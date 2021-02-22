// 'new' and constructor function
// https://ko.javascript.info/constructor-new

'use strict';

// 1. creating the same 1 object using 2 functions
// how to make function A and B that can be new A() === new B()?

// Q
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

// A
// if two separate functions point to the same memory, they can be the same
// it's pointing to the same 'object'

let obj = {};   // let obj = 'Yuna' => error

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A;
let b = new B;

alert ( a === b );

// 2. make a constructor function Calculator that has 3 methods as shown below
// read()
// sum()
// mul()

// A
function Calculator() {

  this.read = function() {
    this.a = +prompt("value?", 0);          // + : str => number (prompt returns string)
    this.b = +prompt("another value?", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// 3. make a constructor function Accumulator(startingValue) that saves the startingValue to the variable 'value', 
// and receives a value from a user with the method read() and add it to the 'value'. 
// The property 'accumulator.value' should return the sum of the values.

// A
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("value?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);