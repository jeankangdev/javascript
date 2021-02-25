// convert object to primitive type
// https://ko.javascript.info/object-toprimitive

// obj -> primitive: when calculate / print obj
// 1, str ( alert(obj) )
// 2. num (+obj)
// 3. default ( obj + obj, obj + ~, obj == ~)

// every obj has obj[Symbol.toPrimitive](hint) methods

'use strict';

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

alert(user);	// hint: string (obj => str) // {name: "John"}
// alert(+user);	// hint: number (obj => num) // 1000
// alert(user + 500);	// hint: default // 1500
