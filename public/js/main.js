'use strict';

// console.clear();

// function solution(str, char) {
// 	let answer = [];
// 	let splitStr = [];
// 	splitStr = str.split(char);	// ['t', 'ach', 'rmod', '']

// 	splitStr.map((word) => {
// 		let n = word.length;
//     let temp = [];
// 		for (let i = 0; i < n / 2; i++) {
//       temp.unshift(i + 1);
//       temp.push(i + 1);
// 		}
// 		answer.push(temp);
// 		answer.push(0);
// 	});

// 	console.log(answer.join(''));

// 	return answer.join('');
// }

// let str = 'teachermode';
// let char = 'e';

// console.log(solution(str, char)); // 10121012210

let str = 'orange';
str = str.split('').unshift('my').join('');
console.log(str);