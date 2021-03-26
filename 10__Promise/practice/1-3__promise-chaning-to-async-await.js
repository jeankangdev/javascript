// callback hell => Promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }  
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role : 'admin' });
        } else {
          reject(new Error('no access'));
        }  
      }, 1000);  
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');

// userStorage.loginUser(id, pw)
// .then(userStorage.getRoles)
// .then(userWithRole => {
//   alert(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role.`);
// })
// .catch(console.log);

try {
  const user = userStorage.loginUser(id, pw);
  const userWithRole = await userStorage.getRoles(user);
  userWithRole.then(console.log(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role.`));
} catch {
  
}