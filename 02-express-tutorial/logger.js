const logger = (req, res, next) => {  //just have to give funcn parameters, express takes care behind the scene
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next() //in middleware, we need to explicitly mention next() to pass it on to next middleware
    //res.send('testing') - or terminate the whole cycle by sending response
  }

  module.exports = logger