// console.log('Express Tutorial')

// //express is built on top of node, more specifically, on top of http module

const express = require('express')
const app = express()
let { people } = require('./data')

// static assets- middleware for static assets
app.use(express.static('./methods-public'))

// parse form data - parse the data and add it to req.body - middleware for post requests
//buit-in middleware, parses incoming requests with urlencoded payloads and based on body parser
app.use(express.urlencoded({ extended: false }))

// parse json
//to handle the incoming json data, without this, it was just handling events like form submission
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})


//we cannot simply configure browser to do a post request
//tools like postman or insomnia

//app.post handles if any post() command comes (handling request)
//to get access to data, to add the data, we need middleware
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

//append to the data instead of just that name as in api people
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  //console.log(req.body)
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
