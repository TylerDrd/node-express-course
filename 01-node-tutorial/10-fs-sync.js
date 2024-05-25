const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//we provide two arguments to readfilesync, the path and the encoding, default is utf8
//node knows how to decode file.

//writefilesync creates a new file if file not created or overrides the existing one (by default)
//to append, we add another argument called - {flag : 'a'}

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
