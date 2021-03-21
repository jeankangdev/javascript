'use strict';

function solution(str) {
	let answer = "YES";

	let filteredStr = str.toLowerCase().split('').filter((char) => {
		// ASCII
		// UpperCase: 65 ~ 90 (90 - 65 = 25)
		// LowerCase: 97 ~ 122 (122 - 97 = 25)
		return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 122);
	});

	// now filteredStr is lower case, with only alphabets
	filteredStr = filteredStr.join(''); // array.join('') doesn't affect the original array 

	let n = filteredStr.length;	
	for (let i = 0; i < n / 2; i++) {
		if (filteredStr[i] !== filteredStr[n-i-1]) return "NO";
	}
	return answer;
}

let str = "Go2o?og";	// 'gooog'
console.log(solution(str)); // 'YES'