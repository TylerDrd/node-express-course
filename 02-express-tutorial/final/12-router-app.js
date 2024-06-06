const express = require('express')
const app = express()

const people = require('./routes/people') //importing the router
const auth = require('./routes/auth')//importing the router

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)//for this route, i want to use my people router
app.use('/login', auth)
//we have one route for login and rest for api/people grouped together
//we do this by setting up the router

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
