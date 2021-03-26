'use strict';

// JavaScript is synchronous
// Execute the code block 'by order' after hoisting
// hoisting: var, function declaration

// 1. synchronous VS asynchronous

// synchronous: by order
// asynchronous: not by order (setTimeout)

// 2. synchronous callback VS asynchronous callback

// synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('sync callback'));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
