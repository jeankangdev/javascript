'use strict';

// convert a string to the collection of numbers that represent the minimum distance from the given char in the string

function solution(str, char) {
	let answer = [];
	let temp;
	let n = str.length;
	let counter = 1000;

	for (let i = 0; i < n; i++) {
		if (str[i] === char) {
			counter = 0;
		} else {
			counter++;
		}
		answer.push(counter);
	}

	for (let i = n-1; i >= 0; i--) {
		if (str[i] === char) {
			counter = 0;
		} else {
			temp = ++counter;
			if (temp < answer[i]) answer[i] = temp;
		}
	}
	return answer.join('');
}

let str = 'teachermode';
let char = 'e';
console.log(solution(str, char)); // 10121012210