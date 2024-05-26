setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//it is setInterval() which is async, intervals in 2 sec, so doesn't complete, goes on 