'use strict';

function solution(str) {
  // str.replace(condition, to) doesn't work for numbers
	// return str.replace(/[^0-9]/, '');

  // 1. my way
  str = str.split('').filter((char) => {
    return isNaN(+char) === false
  }).join('');
  return +str;

  // 2. simpler way
  // isNaN('3') // false
  str = str.split('').filter((char) => !isNaN(char)).join('');
	return +str;
  return parseInt(str);
  return Number(str);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));