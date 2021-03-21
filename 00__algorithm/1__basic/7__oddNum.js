'use strict';

// sum all odd num
// min of odd num

// for (let elem in arr)   // ok to use
// for (let index in arr)  // never use for in for array

function solution(arr) {
  let answer = [];
  let oddNum = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  
  // filter oddNum 1.
  for (let elem of arr) {
    if (elem % 2 !== 0) {
      oddNum.push(elem);
    }
  }

  // filter oddNum 2.
  oddNum = arr.filter((item) => item % 2 !== 0);

  // sum oddNum
  for (let elem in oddNum) {
    sum += elem;
    answer.push(sum);
  }

  min = Math.min(...oddNum);  // Math.min() doesn't take an obj(an array) thus the array needs to be spread with ...
  answer.push(min);
  return answer;
}

// shorter answer
function solution(arr) {
  let answer = [];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;

  for (let elem of arr) {
    if (elem % 2 === 1) {
      sum += elem;
      if (elem < min) min = elem;
    }
  }

  answer.push(sum);
  answer.push(min);
  return answer;
}