const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR (server side rendering)
// })
//index.html is also static file, instead of sendfile, we can store it in public folder
//another method is SSR
//generally, dont use sendfile() for html files
//now, when user hits server, by default, server will serve the index.html
app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
