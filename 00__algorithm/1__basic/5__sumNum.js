'use strict';

function sumNum(n) {
  let answer = 0;
  for(let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(6)); // 1 + 2 + 3 + 4 + 5 + 6 = 21