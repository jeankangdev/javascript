// string
// https://ko.javascript.info/string

// 1. str.length is the property
str.length    // O
str.length()  // X

// 2. 
let str = 'Hello';

console.log( str[0] );                // H
console.log( str.charAt(0) );         // H (.charAt() is an old way)
console.log( str[str.length - 1] );   // o

for (let char of "Hello") {
  console.log(char);  // H, e, l, l, o
}

// 3. can't change char in the string
// we can redeclare the whole string instead
let str = 'Hi';

str[0] = 'h';       // error
str = 'h' + str[1]; // work

// 4. .toUpperCase() / .toLowerCase()
str.toLowerCase();    // for whole words
str[0].toLowerCase(); // for one char

// 5. find str in str
let str = "Widget with id";
console.log( str.indexOf('Widget') ); // 0  (str[0])
console.log( str.indexOf('widget') ); // -1 (not found)
console.log( str.indexOf('id') );     // 1  (str[1])
console.log( str.indexOf('id', 2) );  // 12 (find "id" from str[2])

// 6. 
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert(`position: ${pos}`);
}

// 7. ~(-1) = 0
let str = "";

if (!~str.indexOf("Widget")) { // if str.indexOf("Widget") is not -1 > ~str.indexOF("Widget") is not 0
  alert("Not found!");
}

// 8. str.includes(substr, pos): check if substr exists in the string (doesn't return position)
console.log( "Widget with id".includes("Widget") );  // true

// 9. str.startsWith() / str.endWith()
console.log( "Widget".startsWith("Wid") );  // true
console.log( "Widget".endsWith("get") );    // true

// 10. str.slice(start [, end])
let str = "stringify";
console.log( str.slice(2) );      // ringify
console.log( str.slice(0, 3) );   // str
console.log( str.slice(3, 0) );   // error
console.log( str.slice(-4, -1) ); // gif

// 11. str.substring(start [, end])
let str = "stringify"
console.log( str.substring(0, 3) ); // str
console.log( str.substring(3, 0) ); // str

// 12. str.substr(start [, length]): old way
let str = "stringify";
console.log( str.substr(2, 4) );  // ring

// 13. str.codePointAt(pos): to read UTF-16 code
console.log( "z".codePointAt(0) );  // 122
console.log( "Z".codePointAt(0) );  // 90

// 14. String.fromCodePoint()
console.log( String.fromCodePoint(90) );  // "Z"

let str = '';
for (let i = 0; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// a > A

// 15. str.localCompare(str2)
// if (str > str2), returns > 0
// if (str = str2), returns 0
// if (str < str2), returns < 0

