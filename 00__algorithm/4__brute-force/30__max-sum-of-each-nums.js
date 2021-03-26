'use strict';

function solution(nums) {

	// 1. my way
	let maxSumNum = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		let numToStr = nums[i].toString();
		console.log(numToStr);

		for (let j = 0; j < numToStr.length; j++) {
			sum += +numToStr[j];
		}
		maxSumNum = Math.max(maxSumNum, sum);
	}

	return maxSumNum;

	// 2. use %
	let answer;
	let maxSumNum = Number.MIN_SAFE_INTEGER;

	for (let num of nums) {
		let sum = 0;
		let temp = num;

		while(temp) {
			sum += temp % 10;
			temp = Math.floor(temp / 10);
		}

		if (sum > max) {
			max = sum;
			answer = temp;
		} else if (sum === max) {
			if (temp > answer) answer = temp;
		}
	}

	return answer;
}

let nums = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(nums));
