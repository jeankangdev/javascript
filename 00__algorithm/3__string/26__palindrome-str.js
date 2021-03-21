'use strict';

function solution(str) {
  // 1. my way
	str = str.split('');  // to convert str to an array type
	let n = str.length;
	let isSameChar = true;

	for (let i = 0; i < Math.floor(n / 2); i++) {
		let charFront = str.shift();
		let charBack = str.pop();
		if (charFront !== charBack) isSameChar = false;
	}
	return (isSameChar === true)? true : false;

  // 2. another way
  let answer = "YES";
  str = str.toLowerCase();
  let n = str.length;

  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n-i-1]) return 'NO';
  }

  return answer;

  // 3. use array.reverse()
  let answer = "YES";
  str = str.toLowerCase().split('');
  let strReversed = str.reverse().join();

  if (str !== strReversed) answer = "NO";
  return answer;
}

let str = 'gooG';
console.log(solution(str)); // false