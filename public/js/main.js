'use strict';

function solution(str) {
  // array.reverse() changes the original array,
  // so we can't compare it
  // thus we should use array.reverse() directly in the condition like below

  return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''))? "YES" : "NO";
}

let str = 'Gosisog';
console.log(solution(str)); // false
