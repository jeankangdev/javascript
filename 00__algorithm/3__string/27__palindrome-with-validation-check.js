'use strict';

// palindrome with validation check (for alphabets)
// not case sensitive

function solution(str) {
	// let answer = "YES";

  // 1. my way: array.filter() needs the keyword 'return'
	// let filteredStr = str.toLowerCase().split('').filter((char) => {
	// 	ASCII
	// 	UpperCase: 65 ~ 90 (90 - 65 = 25)
	// 	LowerCase: 97 ~ 122 (122 - 97 = 25)
	// 	return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 122);
	// }).join('');
  
	// now filteredStr is lower case, with only alphabets
  // console.log(filteredStr);
  
	// let n = filteredStr.length;	
	// for (let i = 0; i < n / 2; i++) {
  //   if (filteredStr[i] !== filteredStr[n-i-1]) return "NO";
  // }
  // return answer;

  // 2. simpler way: use string.replace(condition, to)
  // str.toLowerCase() changes the original str
  // but str.replace(condition, to) doesn't
  // so we need to assign it to the var 'str'
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  // now filteredStr is lower case, with only alphabets

  // use array.reverse()
  return (str === str.split('').reverse().join(''))? "YES" : "NO";  
}

let str = "Go2o?og";	// 'gooog'
console.log(solution(str)); // 'YES'