// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter() //this is the instance of our class, the object

// on and emit methods - on(listen for event) and emit (emit event)
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {  //wait for the event (response) to occur and callback(what to do after receiving input)
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {   //that same response
  console.log('some other logic here')
})

//on before emit, doesn't make sense to listen for an event after emitting it

customEmitter.emit('response', 'john', 34)

// The event loop is what allows Node.js to perform
//  non-blocking I/O operations — despite the fact that 
//  JavaScript is single-threaded — by offloading operations 
//  to the system kernel whenever possible.

//when there are multiple users, an event loop registers
//each request as a callback, and only after it is completed, it is executed
//when there is no immediate code to run, callback is executed

//Event Driven Programming - style in which the flow of the program is determined by the 
//events that occur as the program executes