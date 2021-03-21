'use strict';

function countDosen(pencilNum) {
  // 1.
  let answer = pencilNum % 12;
  if (pencilNum !== 0) pencilNum++;

  // 2.
  let answer = Math.ceil(pencilNum / 12);
  return answer;
}

console.log(countDosen(13));  // 2