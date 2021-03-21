'use strict';

// imagine students are in line
// how many students can the teacher see?

function solution(heights) {
	let answer = [];
	let isTallest = true;

	for (let i = 0; i < heights.length; i++) {
		for (let j = 0; j < i - 0; j++) {
			if (heights[j] >= heights[i]) isTallest = false;
		}
		if (isTallest === true) answer.push(heights[i]); 
		else isTallest = true;
	}
	return answer;
}

let heights = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(heights));