'use strict';

function solution(answers) {
	let sumMark = 0;
	let mark = 0
	let counter = 0;

	let marks = answers.map((answer) => {
		if (answer === 0) { 
			mark = 0;
			counter = 0;
		}
		else if (answer === 1) {
			counter++;
			mark = counter;
		}
		return mark;
	});

	sumMark = marks.reduce((a, b) => a + b, 0);
	return sumMark;
}

let answers = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(answers));