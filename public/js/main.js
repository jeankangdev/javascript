'use strict';

let str = 'As sly as a fox, as strong as an ox';
let target = 'as';
let pos = -1;

console.log(pos);
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
  alert (`position: ${pos}`);
}