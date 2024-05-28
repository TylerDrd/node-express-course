const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

//streams are used to read or write sequentially (when we have to handle or manipulate stream data)
//4 types of streams - writeable, readable, duplex and transform

//when file is too large to be read or write in a single variable, we use stream
//it reads/writes data in chunks, instead of the whole data as in read and write