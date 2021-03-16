'use strict';

function solution(str) {
	let answer = [];

	str.split('').forEach((char) => {
		if(char.toUpperCase() !== char) {
			answer.push(char.toUpperCase());
		} else {
			answer.push(char.toLowerCase());
		}
	});

	return answer.join('');
}

let str = 'ItisTimeToStudy';
console.log(solution(str)); // iTIStIMEtOsTUDY