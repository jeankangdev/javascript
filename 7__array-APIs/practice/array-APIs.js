'use strict';

// Q1. make a string out of an array
{
  // join(separator?: string): string;
  // Adds all the elements of an array separated by the specified separator string

  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  console.log(result);
  // apple, banana, orange
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(', ');
  console.log(result);
  // ["🍎", "🥝", "🍌", "🍒"]
}
 
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // option1. array.splice(start: number, deleteCount?: number): number[]
  // .splice(): remove elements in an array and returns the deleted elements
  // const result = array.splice(0, 2);
  // console.log(result); => [1, 2]
  // console.log(array);  => [1, 2, 3, 4, 5];

  // option2. array.slice(start?: number, end?: number): number[]
  // .slice(): returns a section of an array
  const result = array.slice(2);
  console.log(result);
  // [3, 4, 5];
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // .find(): finds one, returns the value of the first element in the array where predicate(callback function) is true, and undefined otherwise
  // array.find<S extends T>(predicate: (this:void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): Student;
  let result = students.find((student) => student.score == 90);
  console.log(result);
  // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{ 
  // filters multiple, returns an array
  let result = students.filter((student) => student.enrolled == true);
  console.log(result);
  // Student {name: "A", age: 29, enrolled: true, score: 45}
  // Student {name: "C", age: 30, enrolled: true, score: 90}
  // Student {name: "E", age: 18, enrolled: true, score: 88}
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // .map(): change each elements in the array and returns it
  const result = students.map((student) => student.score);
  console.log(result);
  // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  // .some(): determines whether the specified callback function returns true for any element of an array
  const result = students.some((student) => student.score < 50);
  console.log(result);
  // true

  // .every(): determines whether all the members of an array satisfy the specified test
  // const result = students.every((student) => student.score < 50);
  // console.log(result);
  // false

  // .filter(): returns an array
  // const result = students.filter((student) => student.score < 50);
  // if (result) {
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }

  //  .find(): returns the first match
  // const result = students.find((student) => student.score < 50);
  //   if (result) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }

  // .forEach(callback);
  // let result;
  // let flag = 0;
  // students.forEach((student) => {
  //   if (student.score < 50) {
  //     flag++;
  //   }
  // });
  // if (flag > 0) {
  //   result = true;
  // } else {
  //   result = false;
  // }
  // console.log(result);
}

// Q9. compute(calculate) students' average score
{
  // reduce(): calls the callback function for all the elements in an array and returns the accumulated result
  // array<Student>.reduce(callbackfn): Student
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score)
  // .filter((score) => score >= 50)
  .join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)  // sort in ascending order
    .join(', ');
  console.log(result);
}