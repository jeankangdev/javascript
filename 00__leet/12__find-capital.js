'use strict';

function solution(str) {
	let counter = 0;

	str.split('').forEach((char) => {
		if (char === char.toUpperCase()) counter++;
	});

	return counter;
}

let str = 'KoreaTimeGood';
console.log(solution(str));