// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//In Node.js, a Module can be considered as a block of code that provide a
// simple or complex functionality that can communicate with external application. 
//Nodejs uses the CommonJS Module standard implementation in its module ecosystem. 

//require is a global function (02-globals.js)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data)
console.log(names)
//when node exports a module, it wraps it inside a function

// for this, names,utils, alt-flavor, mind-grenade modules.