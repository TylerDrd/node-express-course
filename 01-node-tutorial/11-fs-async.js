const { readFile, writeFile } = require('fs')

// A callback function is a function that is passed as an argument to another function.
//  This technique allows the parent function to call the callback function after it has 
//  completed its execution
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

//here, after console.log(start), it is async, so went directly to 'starting next task' and 
//then executed it. good when there are multiple users and tasks may take time to complete.
