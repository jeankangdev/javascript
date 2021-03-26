'use strict';

// print a number that's bigger than the previous number in the array
// print the very first number no matter what

function solution(nums) {
	let answer = [];
	answer.push(nums[0]);

	for (let i = 1; i < nums.length; i++) {
	if (nums[i] > nums[i - 1]) {
			answer.push(nums[i]);
		}
	}

	return answer;
}

let nums = [7, 3, 9, 5, 6, 12];
console.log(solution(nums));  // [7, 9, 6, 12]