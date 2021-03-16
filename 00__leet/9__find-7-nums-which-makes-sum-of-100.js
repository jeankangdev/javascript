'use strict';

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length - 1; i++) {
	for (let j = i + 1; j < arr.length; j++) {
		if (sum - (arr[i] + arr[j]) === 100) {
			answer.splice(j, 1);
			answer.splice(i, 1);
		}
	}
  }
  console.log(answer.reduce((a, b) => a + b, 0));
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));