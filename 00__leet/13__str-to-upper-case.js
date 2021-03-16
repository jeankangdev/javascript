'use strict';

function solution(str) {
	return str.split('').map((char) => char.toUpperCase()).join('');
}

let str = 'ItisTimeToStudy';
console.log(solution(str));