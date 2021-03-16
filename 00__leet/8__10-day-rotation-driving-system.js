'use strict';

function solution(day, arr) {
  let answer = [];

  let numToStr = day.toString();

  let arrToStr = arr.map((item) => item.toString());

  for (let elem of arrToStr) {
    if (elem[1] === numToStr) {
      answer++;
    }
  }
  return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(7, arr));