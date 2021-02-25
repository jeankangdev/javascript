// primitive type.methods()
// https://ko.javascript.info/primitives-methods


// 1. strict mode

'use strict';

let str = "Hello";

str.test = 5;       // error (can't edit the object rapper str on strict mode)

alert(str.test);

// 2. normal mode

let str = "Hello";

str.test = 5;       // no error (can add the property .test() on the object rapper str on normal mode)

alert(str.test);    // undefined (the obj rapper str got deleted right after it was used)