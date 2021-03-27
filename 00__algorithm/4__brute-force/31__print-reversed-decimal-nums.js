'use strict';

function solution(nums) {
    // 1. my way
	let answer = [];

	for (let num of nums) {
		let str = num.toString();
		let reversedStr = [];

		for (let char of str) {
            reversedStr.unshift(char);
		}

		while (reversedStr[0] === '0') {
			reversedStr.shift();
		}
		
		reversedStr = reversedStr.join('');

        if (isPrime(+reversedStr)) answer.push(+reversedStr);
	}

    // 2. 
	let answer = [];

    function isPrime(num) {
        let answer;

        if (num === 1) answer = false;

        for (let i = 2; i <= parseInt(num / 2); i++) {
            if (num % i === 0) {
                answer = false;
                break;
            }
            answer = true;
        }
        return answer;
    }

	for(let num of nums) {
		let reversedNum = 0;

		while(num) {
			let one = num % 10; // 2
			reversedNum = reversedNum * 10 + one; // add numbers in the reversed order
			num = parseInt(num / 10);	// 3
		}

		if (reversedNum % 2 !== 0) answer.push(reversedNum);
	}

	return answer;
}

let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(nums));
