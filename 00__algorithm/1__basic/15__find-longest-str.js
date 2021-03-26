'use strict';

function solution(arr) {
  // 1. my way
	let longestStr = '';

  arr.map((str) => str.split('').length);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr = arr[i];
    } 
  }
  
  return longestStr;

  // 2.
  let answer, max = Number.MIN_SAFE_INTEGER;

  for (let str of arr) {
    if (str.length > max) {
      max = str.length;
      answer = str;
    }
  }

  return answer;

}

let arr = ['banana', 'peach', 'pear'];
console.log(solution(arr)); // 'banana'