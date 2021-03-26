'use strict';

function solution(str) {
  // 1. my way 
	let answer = [];

	str.split('').map((char) => {
		if (!answer.some((elem) => elem === char)) answer.push(char);
	});
	
	return answer.join('');

  // 2. use str.indexOf(char)
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];  // if the char is unique, add it to answer
  }

  return answer;
}

let str = 'ksekkset';
console.log(solution(str)); // 'kset'