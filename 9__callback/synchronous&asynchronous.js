'use strict';

// JavaScript is synchronous
// Execute the code block 'by order' after hoisting
// hoisting: var, function declaration

// 1. synchronous VS asynchronous

// synchronous: by order
// asynchronous: not by order (setTimeout)

// 2. synchronous callback VS asynchronous callback

// synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('sync callback'));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 3. callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }  
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role : 'admin' });
      } else {
        onError(new Error('no access'));
      }  
    }, 1000);
  }

  onSuccess(id) {
    return id;
  }
}

const id = prompt('enter your id');
const pw = prompt('enter your pw');

const userStorage = new UserStorage();
userStorage.loginUser(
  id, 
  pw, 
  (user) => {
    userStorage.getRoles(
      user, 
      (userWithRole) => {
        alert(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role.`);
      },
      error => {
        console.log(error);
      });
  }, 
  (error) => {
    console.log(error);
  }
);