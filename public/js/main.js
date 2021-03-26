'use strict';

// 'KKHSSSSSSSE' => 'K2HS7E'

function solution(str) {
	let answer = [];
	let counter = 1;

	for (let i = 1; i < str.length; i++) {
		if (str[i-1] === str[i]) {
			counter++;
			if (i === str.length - 1) {
				answer.push(str[i-1]);
				answer.push(counter);
			}
		} else {
			answer.push(str[i-1]);
			if (counter > 1) {
				answer.push(counter);
				counter = 1;
			}
			if (i === str.length - 1) answer.push(str[i]);
		}
	}

	return answer.join('');
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));