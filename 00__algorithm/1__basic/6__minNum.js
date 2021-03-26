'use strict';

function minNum(arr) {
  // 1.
  let answer, min = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];  // arr[i] must be smaller than Number.MAX_SAFE_INTEGER..so arr[i] becomes min here
  }

  // 2.
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return answer;

  // 3.
  return Math.min(...arr);  // Math.min() doesn't take an obj, the array needs to be spread like arr[0], arr[1]...
  return Math.min.apply(null, arr); // this doesn't need to spread the array
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));   // 1