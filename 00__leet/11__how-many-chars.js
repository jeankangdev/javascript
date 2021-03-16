'use strict';

function solution(str) {
  let char = prompt('type a letter');
  let counter = 0;

  // 1.
  str.split('').forEach((elem) => {
    if (elem === char) {
		counter++;
    }

  // 2.
  counter = str.split(char) - 1;
  });

  return counter;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str)); // M, 3