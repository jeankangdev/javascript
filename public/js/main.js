'use strict';

console.clear();

function isPrime(num) {
	let answer;

	if (num === 1) answer = false;

	for (let i = 2; i <= parseInt(num / 2); i++) {
		if (num % i === 0) {
			answer = false;
		}
		answer = true;
	}
	return answer;
}

function solution(nums) {
	let answer = [];

	for(let num of nums) {
		let reversedNum = 0;

		while(num) {
			let one = num % 10; // 2
			reversedNum = reversedNum * 10 + one; // add numbers in the reversed order
			num = parseInt(num / 10);	// 3
		}

		if (isPrime(reversedNum)) answer.push(reversedNum);
	}
	return answer;
}

let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(nums));
