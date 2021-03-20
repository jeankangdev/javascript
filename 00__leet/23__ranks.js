'use strict';

function solution(marks) {
	let ranks = [1, 1, 1, 1, 1];

	for (let i = 0; i < marks.length; i++) {
		for (let j = 0; j < marks.length; j++) {
			if (marks[i] < marks[j]) ranks[i]++;
		}
	}

	return ranks;
}

let marks = [87, 89, 92, 100, 76];
console.log(solution(marks));