// method and this in object
// https://ko.javascript.info/object-methods

'use strict';

// make the 'calculator' object and 3 methods in the object.
// read(): get 2 values and save the values to the object as properties
// sum(): sum 2 values
// mul(): multiply 2 values

let calculator = {
  read() {
    let valueOne = prompt("value");
    let valueTwo = prompt("value again");
    this.valueOne = Number(valueOne);
    this.valueTwo = Number(valueTwo);
  },

  sum() {
    let sum;
    return sum = this.valueOne + this.valueTwo;
  },

  mul() {
    let multiply;
    return multiply = this.valueOne * this.valueTwo;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());