const fs = require('fs')
fs.readFileSync('cainiao.txt' , function (error, data) {
  if (error) {
    return console.log(error)
  }
console.log(data.toString())
  console.log(1234234)
})
console.log('程序执行结束')
