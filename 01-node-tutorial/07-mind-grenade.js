const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()

// if there is a function call inside a module and it is invoked, that is, imported in 
// another module even though not assigned any variable, it will still be executed
// when importing a module, it will be invoked
