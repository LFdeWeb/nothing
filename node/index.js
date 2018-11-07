let http = require("http")
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('hello lijiadcheng')
}).listen(8888)
// console.log(http)
// debugger
console.log('server has start2')