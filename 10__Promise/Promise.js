'use strict';

// Promise is a JavaScript object for asynchronous operation.

// 1. State
// state: pending -> fulfilled or rejected

// 2. Producer VS Consumer

// 2-1. Producer
// when new Promise is created, the executer(callback func) runs automatically.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('received data'); // returns the received data from the server if it was successful
    // reject(new Error('no network')); // Error = a class(obj) that js provides
  }, 2000);
});

// 2-2. Consumer: then, catch, finally
promise
  .then((value) => { // if succeeded, then receives data that promise returns
    console.log(value);
  })
  .catch((error) => { // if failed, then handle errors here
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// 4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000);
  });

const getEgg = hen => 
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve('egg'), 1000);
    setTimeout(() => reject(new Error(`received ${hen}, but can\'t get the egg`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried egg`), 1000);
  });

// getHen()
// .then(hen => getEgg(hen))         // = .then(getEgg)
// .then(egg => cook(egg))           // = .then(cook)
// .then(meal => console.log(meal)); // = .then(meal)

getHen() // add a comment(//) here to prevent auto formatting(making the below code in one line) by prettier
.then(getEgg)
.catch(error => {
  return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);