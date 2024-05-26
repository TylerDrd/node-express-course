// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
//even if 0 sec in callback, it is offloaded as it is async
