'use strict';

function solution(str) {
  // str.replace(condition, to) doesn't work for numbers
	// return str.replace(/[^0-9]/, '');

  let answerStr = str.split('').filter((char) => {
    return isNaN(+char) === false
  }).join('');  // '0208'

  let answerNum = +answerStr; // 208

  return answerNum;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str)); // 208