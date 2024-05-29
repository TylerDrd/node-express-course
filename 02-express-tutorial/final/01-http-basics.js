const http = require('http')

const server = http.createServer((req, res) => {
  //  console.log(req.url)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //issue 1, and what type of content is sent, html, js, image etc
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)

//The problem with res, req in create server is that - 
// 1. not providing metadata (info about the data we are sending back) - so add header
// 2. giving same response for different requests