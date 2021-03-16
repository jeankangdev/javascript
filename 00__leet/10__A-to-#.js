'use strict';

function solution(str) {
  // 1. my way
	let answer = [];
	str.split('').map((char) => {
		char === 'A'? answer.push('#') : answer.push(char);
	});
	return answer.join('');

  // 2. using array.replace()
  let answer = str; // str is copied by value, not copied by reference
  answer = answer.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str)); // 'B#N#N#'