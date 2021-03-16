'use strict';

// print the middle char of the str
// if the str length is even num, print the 2 middle chars

function solution(str) {
  // 1. my way
	let answer = '';
	let strLen = str.length;

	if (strLen % 2 === 0) {
		answer = str[Math.ceil((strLen / 2) - 1)] + str[Math.ceil(strLen / 2)];
	} else {
		answer = str[Math.ceil(strLen / 2)];
	}
	return answer;

  // 2. str.substring(0, 0+1);
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) { // odd
    answer = str.substring(mid, mid + 1);
    // str.substr(mid, 1);    // .substring() and .substr() is different
  } else {  // even
    answer = str.substring(mid - 1, mid + 1);
    // str.substr(mid - 1, 2);
  }
  return answer;

}

let str = 'banana';
console.log(solution(str)); // 'na'