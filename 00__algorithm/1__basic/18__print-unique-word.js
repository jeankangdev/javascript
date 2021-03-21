'use strict';

function solution(words) {
  let answer = [];

  answer = words.filter((word, i) => {
    if (words.indexOf(word) === i) return word;
  });

  return answer;
}

let words = ["good", "time", "good", "time", "student"];
console.log(solution(words));