'use strict';

function solution(str) {
  // 1. my way
	return str.split('').map((char) => char.toUpperCase()).join('');

  // 2. using ASCII
  let answer = '';

  for(let char of str) {
    let ascii = char.charCodeAt();
    if (ascii >= 97 && ascii <= 122) {  // if it's LowerCase
      answer += String.fromCharCode(ascii - 32);  // String.fromCharCode(lowerCase - 32) => UpperCase
    }
  }

  return answer;

  // 3. simplest way
  return str.toUpperCase();
}

let str = 'ItisTimeToStudy';
console.log(solution(str)); // ITSTIMETOSTUDY