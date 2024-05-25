const path = require('path')

console.log(path.sep)  //returns a platform specific separator

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath) //joins a sequence of path segments using the platform specific separator and
                      //returns a normalised path

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
