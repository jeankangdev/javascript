'use strict';

function solution(str) {
	let answer = [];
	str.split('').map((char) => {
		char === 'A'? answer.push('#') : answer.push(char);
	});
	return answer.join('');
}

let str = 'BANANA';
console.log(solution(str));