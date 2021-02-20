// async & await
// clear style of using promise

// 1. sync: in order
function fetchUser() {
  // do network request in 10 secs...
  return 'yuna';
}
const user = fetchUser();
console.log(user);
// the code above takes 10 secs to get the 'user' data because it's synchronous

// 2. async (with Promise): if the code takes time, it needs to be asynchronous
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('yuna');
    // reject
    // return 'yuna';  // it Promise doesn't have resolve or reject, this return <pending> (PromiseState: "pending", PromiseResult: undefined)
  })
}
const user = fetchUser();
user.then(console.log); // = user.then(user => console.log(user));

// 3. async (with async)
async function fetchUser() {
  // do network request in 10 secs..
  return 'yuna';
}

const user = fetchUser();
user.then(console.log);

// 4. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

// async(instead of Promise), await
async function getBanana() {
  await delay(1000);
  return 'banana';
}

// chaining
function getBanana() {
  return delay(1000)
  .then(() => 'banana');
}

// to get both apple and banana and print it
// Promise chaining (too complicated like callback hell)
function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana()
    .then(banana => `${apple} + ${banana}`);
  });
}

pickFruits()
.then(console.log);

// Promise => async
async function pickFruits() {
  const apple = await getApple();   // takes 1 sec
  const banana = await getBanana(); // takes 1 sec
  return `${apple} + ${banana}`;    // printed after 2 secs
}

// to save more time (make Promise first)
async function pickFruits() {
  const applePromise = getApple();   // Promise is made automatically, right away
  const bananaPromise = getBanana(); // Promise is made automatically, right away
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;     // printed right away
}

// Promise.all(): to save even more time
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// return only one (that is received first) among data arrays
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);