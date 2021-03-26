// method and this
// https://ko.javascript.info/object-methods

'use strict';

// 1. make the 'calculator' object and 3 methods in the object.
// read(): get 2 values and save the values to the object as properties
// sum(): sum 2 values
// mul(): multiply 2 values

// A
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

// 2. how can we make Method Chaining possible on the code below?

// Q + A
let ladder = {
  step: 0,
  up() {
    this.step++;
    // return this;       // if the method returns its object with 'this', it makes Method Chaining possible
  },
  down() {
    this.step--;
    // return this;
  },
  showStep: function() { // display which stair you're on now from the ladder
    alert( this.step );
    // return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

// method chaining
ladder.up().up().down().showStep();
