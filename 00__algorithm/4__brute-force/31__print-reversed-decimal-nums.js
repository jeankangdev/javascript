'use strict';

function solution(nums) {
	let answer = [];

	for (let num of nums) {
		let str = num.toString();
		let reversedStr = [];

		for (let char of str) {
			reversedStr.unshift(char);
		}

		while (reversedStr[0] === '0') {
			reversedStr.shift();
		}
		
		reversedStr = reversedStr.join('');

		if (+reversedStr % 2 !== 0) answer.push(+reversedStr);
	}

	return answer;
}

let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(nums));
