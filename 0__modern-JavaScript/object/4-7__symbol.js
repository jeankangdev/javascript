// symbol
// https://ko.javascript.info/symbol

'use strict';

// JavaScript obj can only have symbol or str type
// Symbol: unique identifier

let id1 = Symbol("id");   // id = symbol's name = symbol's explanation (good for debugging)
let id2 = Symbol("id");
console.log(id1 == id2);  // false (Symbol creates an unique obj even if it has the same id)

// Symbol can't be converted to other types
alert(id1); // TypeError: Cannot convert a Symbol value to a string (alert converts most of types to string and print it)
alert(id1.toString());  // convert Symbol to str forcefully
alert(id1.description); // show description of the Symbol

