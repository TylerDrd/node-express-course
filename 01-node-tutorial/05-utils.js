const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
// export default
//export is an object, whatever we export can be accessed anywhere in the application
module.exports = sayHi

//console.log(module) - gives details of that module, export is an object is seen here