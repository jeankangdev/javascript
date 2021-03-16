'use strict';

function solution(str) {
  // 1. my way
	let counter = 0;

	str.split('').forEach((char) => {
		if (char === char.toUpperCase()) counter++;
	});

  // 2. use ASCII

  for(let char of str) {
    let asciiNum = char.charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 90) { // Capital: 65 ~ 90 // LowerCase: 97 ~ 122
      counter++;
    }
  }

	return counter;
}

let str = 'KoreaTimeGood';
console.log(solution(str));