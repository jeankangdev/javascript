'use strict';

function solution(str) {
	str = str.split('');
	let n = str.length;
	let isSameChar = true;

	for (let i = 0; i < Math.floor(n / 2); i++) {
		let charFront = str.shift();
		let charBack = str.pop();
		if (charFront !== charBack) isSameChar = false;
	}
	return (isSameChar === true)? true : false;
}

let str = 'gooG';
console.log(solution(str));