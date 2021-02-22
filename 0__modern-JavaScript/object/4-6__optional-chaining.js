// optional chaining '?.'
// https://ko.javascript.info/optional-chaining

'use strict';

// ex 1.
// let user = {};
// console.log( user && user.address );  // no error even if user or user.address is undefined
// console.log( user?.address );        // no error

// ex 2.
let user1 = {
  admin() {
    console.log("admin");
  }
}

let user2 = {};

user1.admin?.();  // "admin"
user2.admin?.();  // stops with no error even if user2 has no methods admin