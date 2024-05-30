const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
//express.static is a built in middleware
app.use(express.static('./public'))
//create a 'public' folder and all the static resources are transferred there and give path of public
//simpler than http, where we had to import them
//static asset - one which the server doesn't need to change it, simply move to a folder
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
  //we need to provide an absolute filepath in express if we want the res to send a file
  //because it is absolute path, we went with path.resolve
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
