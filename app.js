var http = require('http');
var fs =require('fs')
const server = http.createServer()

http
  .createServer(function(req, res){
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
    console.log('done');
  })
.listen(5000)
