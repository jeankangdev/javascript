'use strict';

function minNum(a, b, c) {
  let minNum;
  if (a < b) minNum = a;
  else minNum = b;
  if (c < minNum) minNum = c;
  
  return minNum;
}

console.log(minNum(6, 5, 11));  // 5