'use strict';

function solution(str) {
	let answer = [];

  // 1. my way
	str.split('').forEach((char) => {
		if(char.toUpperCase() !== char) {
			answer.push(char.toUpperCase());
		} else {
			answer.push(char.toLowerCase());
		}
	});

	return answer.join('');

  // 2. not using array API
  for (let char of str) {
    if (char === char.toUpperCase()) answer += char.toLowerCase();
    else answer += char.toUpperCase();
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str)); // iTIStIMEtOsTUDY