'use strict';

function solution(str) {
	let answer = [];

	str.split('').map((char) => {
		if (!answer.some((elem) => elem === char)) answer.push(char);
	});
	
	return answer.join('');
}

let str = 'ksekkset';
console.log(solution(str)); // 'kset'