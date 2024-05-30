const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//API vs SSR
// in Api, setting up an http interface to interact with data, data sent using json
// to send back response, we use res.json()

//in ssr, we setup templates and send back entire html,css and js, using res.render()