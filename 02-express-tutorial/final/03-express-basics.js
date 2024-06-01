//express is built on top of node and adds more features.
//it is flexible node js web app framework, makes web apps and api much faster and easier.
//not a built in module

const express = require('express')  //import module
const app = express()   //invoke the module

app.get('/', (req, res) => {   //callback invoked everytime user wants to 'get' the root dir
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get - read data
// app.post - insert data
// app.put - update data
// app.delete - delete data
// app.all
// app.use
// app.listen
