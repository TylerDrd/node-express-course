const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

//app.use('/api', logger) - invokes middleware for all paths beginning with /api
app.use([logger, authorize])  //app.use will invoke logger for any route.
//order matters, so we have middleware functions on top, then requests
// api/home/about/products
//order of logger and authorise matters

app.get('/', (req, res) => {  //too many get req, not feasible to write logger for all
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
