// convert object to primitive type
// https://ko.javascript.info/object-toprimitive

'use strict';

// obj -> primitive: when calculate / print obj
// 1. str ( alert(obj) )
// 2. num (+obj)
// 3. default ( obj + obj, obj + ~, obj == ~)

// * object.valueOf(): convert an obj to a primitive type 
// (Every obj has .valueOf() method by default and JavaScript automatically invokes it when it's needed)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

// 1.
// every obj has a Symbol, SYmbol.toPrimitive and this is used to decide the hint of the obj
// obj[Symbol.toPrimitive](hint) method is used to convert the type of an obj

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

console.log(user);	// hint: string (obj => str) // {name: "John"}
console.log(+user);	// hint: number (obj => num) // 1000
console.log(user + 500);	// hint: default(num)  // 1500

// 2.
// toString / valueOf are the only way to convert the type of an obj

let user = {
  name: "John",
  money: 1000,

  // if the obj's hint is string, the obj checks if the obj has one of these methods in order and calls it .toString() => .valueOf()
  toString() {
    return `{name: "${this.name}"}`;
  },

  // if the obj's hint is number / default, the obj checks if the obj has one of these methods in order and calls it .toString() => .valueOf()
  valueOf() {
    return this.money;
  }

};

alert(user); // hint: string     // toString -> {name: "John"}
alert(+user); // hint: number    // valueOf -> 1000
alert(user + 500); // hint: number  // valueOf -> 1500

// 3.
// if the obj doesn't have Symbol.toPrimitive or valueOf, toString handles all the type conversion
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

// alert(user);     // hint: string    // toString(exist) -> John
alert(user + 500);  // hint: default   // valueOf(not exist) -> toString(exist) -> toString -> John500

// 4.
// * -> num
// + -> str

let obj = {
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4  ("2" * 2 => 2 * 2)
alert(obj + 2); // 22 ("2" + 2 => "2" + "2")