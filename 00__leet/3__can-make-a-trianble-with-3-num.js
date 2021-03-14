'use strict';

function makeTriangle(a, b, c) {
  let answer, max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if((sum - max) > max) { // two number > max number => can make a triangle
    answer = "can make a triangle";
  } else {
    answer = "can't make a triangle";
  }

  return answer;
}

console.log(makeTriangle(6, 5, 11));