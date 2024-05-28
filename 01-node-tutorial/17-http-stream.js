var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)   //push data from readstream to writestream, if we can read data in chunks
                             //we can also write data in chunks
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
