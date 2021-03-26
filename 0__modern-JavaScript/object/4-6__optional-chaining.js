// optional chaining '?.'
// https://ko.javascript.info/optional-chaining

'use strict';

// ?. to check if an object's property / method exists
// and read / delete it (can't use ?. to write something)
// if it's undefined or null, step to the next code with errors

// read: console.log(user?.name);
// delete: delete user?.name;
// write: user?.name = "something";   // error

// ex 1. ?. with properties
let user = {};
console.log( user && user.address ); // no error even if user or user.address is undefined
console.log( user?.address );        // no error

// ex 2. ?. with methods
let user1 = {
  admin() {
    console.log("admin");
  }
}

let user2 = {};

user1.admin?.();  // "admin" (= user1.admin())
user2.admin?.();  // stops with no error even if user2 has no methods admin

// ex 3. ?. with []
let user1 = {
  name = "Yuna"
};

let user2 = null;

let key = "name";

console.log(user1?.[key]);  // "Yuna"
console.log(user2?.[key]);  // undefined
console.log(user1?.[key]?.something?.not?.existing);  // undefined




