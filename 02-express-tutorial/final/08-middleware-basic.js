
//middleware are funcns that execute during the request to the server
//each middleware has access to request and response object

const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {  //just have to give funcn parameters, express takes care behind the scene
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next() //in middleware, we need to explicitly mention next() to pass it on to next middleware
  //res.send('testing') - or terminate the whole cycle by sending response
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
