'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON

const rabbit = {
  name: 'tori',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  }
};

// option 1
// let json = JSON.stringify(rabbit);

// option 2 (with callback)
let json = JSON.stringify(rabbit, (key, value) => {
  return key === 'name'? 'yuna' : value;
});

console.log(json);

// 2. JSON to Object
// option 1
// const obj = JSON.parse(json);

// option 2 (with callback)
const obj = JSON.parse(json, (key, value) => {
  return key === 'birthDate'? new Date(value): value; // change JSON(string) data to obj
});

console.log(obj);

// rabbit.jump(); // original data had the jump function
// obj.jump();    // error: JSON can't have a function as a data, so the obj (that is parced from JSON) can't have the function as well

// console.log(rabbit.birthDate.getDate()); // original data had the birthDate method
// console.log(obj.birthDate.getDate());    // error: birthDate is string (original data -> JSON(string) -> obj)

