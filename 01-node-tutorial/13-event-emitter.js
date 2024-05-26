// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

// The event loop is what allows Node.js to perform
//  non-blocking I/O operations — despite the fact that 
//  JavaScript is single-threaded — by offloading operations 
//  to the system kernel whenever possible.

//when there are multiple users, an event loop registers
//each request as a callback, and only after it is completed, it is executed
//when there is no immediate code to run, callback is executed