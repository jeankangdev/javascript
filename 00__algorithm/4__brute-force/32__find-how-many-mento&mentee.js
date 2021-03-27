'use strict';

console.clear();

function solution(ranks) {
	let answer = 0;

	let testNum = ranks.length; // 3
	let studentNum = ranks[0].length; // 4

	for (let i = 1; i <= studentNum; i++) { // mento (from 1 to 4)
		for (let j = 1; j <= studentNum; j++) { // mentee (from 1 to 4)
			let count = 0;

			// find mento & mentee's ranks
			for (let k = 0; k < testNum; k++) {
				let mentoRank = menteeRank = 0;
				for (let s = 0; s < studentNum; s++) {
					if (ranks[k][s] === i) mentoRank = s;
					if (ranks[k][s] === j) menteeRank = s;
				}
				if (mentoRank > menteeRank) count++;
			}

			if (count === testNum) answer++;
		}
	}
	return answer;
}

let ranks = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2]
];

console.log(solution(ranks)); // 3