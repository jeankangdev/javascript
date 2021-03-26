'use strict';

// from a table, which sum is the max? among sumRow, sumCell, sum(Diagonal)Down, sum(Diagonal)Up
function solution(table) {
	let answer = Number.MIN_SAFE_INTEGER;
	let n = table.length;
	let sumRow, sumCell, sumDown, sumUp = 0;

  // for sumRow, sumCell
	for (let i = 0; i < n; i++) {
		sumRow = sumCell = 0;
		for (let j = 0; j < n; j++) {
			sumRow += table[i][j];
			sumCell += table[j][i];
		}
		answer = Math.max(answer, sumRow, sumCell);
	}

  // for sum(Diagonal)Down, sum(Diagonal)Up
	sumDown = sumUp = 0;
	for (let i = 0; i <n; i++) {
		sumDown += table[i][i];
		sumUp += table[n-i-1][i];
	}
	answer = Math.max(answer, sumDown, sumUp);	
	return answer;
}

let table = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19]
];
console.log(solution(table)); // 155